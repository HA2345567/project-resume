import Link from "next/link";
import { ArrowRight, Zap, Clock, MessageSquareText, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/marketing/feature-card";
import PricingCard from "@/components/marketing/pricing-card";
import Testimonial from "@/components/marketing/testimonial";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/5 to-background py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <div className="inline-flex items-center rounded-full border px-4 py-1 text-sm gap-1.5 bg-background">
                  <span className="text-muted-foreground">Launching soon</span>
                  <span className="inline-flex rounded-full bg-primary/10 px-1 text-xs text-primary">Beta</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Automate Job Applications <span className="text-primary">Like a Pro</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Stop missing opportunities. Apply to tech jobs instantly with tailored resumes and personalized outreach.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" asChild>
                    <Link href="/onboarding">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/dashboard">
                      View Demo
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3783355/pexels-photo-3783355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="ResumeRush Dashboard Preview"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-background" id="features">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How ResumeRush Works</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our platform automates every step of the job application process, so you can focus on preparing for interviews.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard 
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Instant Detection"
                description="Detect new LinkedIn job listings the moment they're posted with our real-time monitoring."
              />
              <FeatureCard 
                icon={<Clock className="h-10 w-10 text-chart-2" />}
                title="Auto-Customization"
                description="Automatically customize your resume for each job using AI-powered keyword optimization."
              />
              <FeatureCard 
                icon={<MessageSquareText className="h-10 w-10 text-chart-4" />}
                title="Recruiter Outreach"
                description="Send personalized messages to recruiters after applying to increase your chances."
              />
              <FeatureCard 
                icon={<BarChart3 className="h-10 w-10 text-chart-5" />}
                title="Smart Dashboard"
                description="Track all your applications, responses, and activity in one intuitive dashboard."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The ResumeRush Difference</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Be among the first applicants for every job that matches your profile.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Setup Your Profile</h3>
                    <p className="text-muted-foreground">Upload your master resume and set your job preferences.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enable Automation</h3>
                    <p className="text-muted-foreground">Turn on job monitoring and application automation.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Get Interviews</h3>
                    <p className="text-muted-foreground">Focus on preparing while we handle the application process.</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="ResumeRush Workflow"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-background" id="pricing">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Simple, transparent pricing to meet your job application needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard 
                title="Free"
                price="$0"
                description="Perfect for occasional job seekers"
                features={[
                  "5 automated applications per month",
                  "Basic resume customization",
                  "Job monitoring (updated daily)",
                  "Simple dashboard"
                ]}
                buttonText="Get Started"
                buttonVariant="outline"
              />
              
              <PricingCard 
                title="Pro"
                price="$29"
                description="Ideal for active job seekers"
                features={[
                  "50 automated applications per month",
                  "AI-powered resume optimization",
                  "Real-time job alerts",
                  "Automated recruiter messages",
                  "Advanced analytics dashboard"
                ]}
                buttonText="Try Pro"
                buttonVariant="default"
                highlighted
              />
              
              <PricingCard 
                title="Enterprise"
                price="$99"
                description="For career changers and professionals"
                features={[
                  "Unlimited automated applications",
                  "Premium AI resume and cover letter generation",
                  "Priority application submission",
                  "Advanced recruiter outreach campaigns",
                  "Interview scheduling automation",
                  "Dedicated account manager"
                ]}
                buttonText="Contact Sales"
                buttonVariant="outline"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See how ResumeRush has helped job seekers land their dream roles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Testimonial 
                quote="I applied to over 50 relevant positions in just two weeks and got 8 interview requests. The automation saved me countless hours!"
                author="Alex Johnson"
                role="Software Engineer"
                avatarUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              
              <Testimonial 
                quote="The personalized DMs to recruiters made all the difference. I got responses from companies that would have otherwise ignored my application."
                author="Samantha Lee"
                role="UX Designer"
                avatarUrl="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              
              <Testimonial 
                quote="As a bootcamp graduate, I needed to apply quickly to new openings. ResumeRush helped me be first in line for every job that matched my skills."
                author="Marcus Taylor"
                role="Full-Stack Developer"
                avatarUrl="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Job Search?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of tech professionals who are landing interviews faster with ResumeRush.
            </p>
            <Button size="lg" variant="secondary" asChild className="text-primary">
              <Link href="/onboarding">
                Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}