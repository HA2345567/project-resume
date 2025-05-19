import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'npm:@supabase/supabase-js@2.21.0';
import puppeteer from 'npm:puppeteer@19.11.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  try {
    // Handle CORS
    if (req.method === 'OPTIONS') {
      return new Response('ok', { headers: corsHeaders });
    }

    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    // Get users with automation enabled
    const { data: users, error: usersError } = await supabaseClient
      .from('profiles')
      .select('id, automation_enabled')
      .eq('automation_enabled', true);

    if (usersError) throw usersError;

    // Process each user
    for (const user of users) {
      // Get user's automation settings
      const { data: settings, error: settingsError } = await supabaseClient
        .from('automation_settings')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (settingsError) continue;

      // Launch browser
      const browser = await puppeteer.launch({
        args: ['--no-sandbox'],
      });

      try {
        const page = await browser.newPage();

        // Search for jobs based on settings
        for (const jobType of settings.job_types) {
          for (const location of settings.location_preferences) {
            // Search LinkedIn
            await page.goto(
              `https://www.linkedin.com/jobs/search/?keywords=${jobType}&location=${location}`
            );

            // Extract job listings
            const jobs = await page.evaluate(() => {
              const listings = document.querySelectorAll('.job-card-container');
              return Array.from(listings).map((listing) => ({
                title: listing.querySelector('.job-card-list__title')?.textContent?.trim(),
                company: listing.querySelector('.job-card-container__company-name')?.textContent?.trim(),
                location: listing.querySelector('.job-card-container__metadata-item')?.textContent?.trim(),
                link: listing.querySelector('a')?.href,
              }));
            });

            // Store new job applications
            for (const job of jobs) {
              if (!job.title || !job.company || !job.location) continue;

              // Check if already applied
              const { data: existing } = await supabaseClient
                .from('job_applications')
                .select('id')
                .eq('user_id', user.id)
                .eq('job_url', job.link)
                .single();

              if (!existing) {
                await supabaseClient.from('job_applications').insert({
                  user_id: user.id,
                  job_title: job.title,
                  company: job.company,
                  location: job.location,
                  job_url: job.link,
                  status: 'pending',
                });
              }
            }
          }
        }
      } finally {
        await browser.close();
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});