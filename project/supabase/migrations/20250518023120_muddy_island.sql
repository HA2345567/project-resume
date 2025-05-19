/*
  # Initial Schema Setup for ResumeRush

  1. New Tables
    - users (extends Supabase auth.users)
      - plan_type
      - linkedin_url
      - automation_enabled
    
    - resumes
      - title
      - content
      - last_updated
      - strength
      - technologies
      
    - job_applications
      - job_title
      - company
      - status
      - applied_date
      - location
      - resume_version
      - messages_sent
      
    - automation_settings
      - job_alert_frequency
      - daily_limit
      - location_preferences
      - job_types
      - keyword_filters

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users Profile Extension
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_type text NOT NULL DEFAULT 'free',
  linkedin_url text,
  automation_enabled boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_plan_type CHECK (plan_type IN ('free', 'pro', 'enterprise'))
);

-- Resumes
CREATE TABLE IF NOT EXISTS public.resumes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  content jsonb NOT NULL,
  last_updated timestamptz DEFAULT now(),
  strength integer CHECK (strength >= 0 AND strength <= 100),
  technologies text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_strength CHECK (strength >= 0 AND strength <= 100)
);

-- Job Applications
CREATE TABLE IF NOT EXISTS public.job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  job_title text NOT NULL,
  company text NOT NULL,
  status text NOT NULL DEFAULT 'applied',
  applied_date timestamptz DEFAULT now(),
  location text NOT NULL,
  resume_version uuid REFERENCES public.resumes(id),
  messages_sent integer DEFAULT 0,
  job_url text,
  recruiter_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_status CHECK (status IN ('applied', 'interview', 'rejected', 'pending'))
);

-- Automation Settings
CREATE TABLE IF NOT EXISTS public.automation_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  job_alert_frequency text NOT NULL DEFAULT 'daily',
  daily_limit integer NOT NULL DEFAULT 10,
  location_preferences text[] DEFAULT '{}',
  job_types text[] DEFAULT '{}',
  keyword_filters text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_frequency CHECK (job_alert_frequency IN ('instant', 'hourly', 'daily', 'weekly')),
  CONSTRAINT valid_daily_limit CHECK (daily_limit >= 0 AND daily_limit <= 100)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resumes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.automation_settings ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Users can view own profile"
  ON public.profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Policies for resumes
CREATE POLICY "Users can view own resumes"
  ON public.resumes
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create resumes"
  ON public.resumes
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own resumes"
  ON public.resumes
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own resumes"
  ON public.resumes
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Policies for job applications
CREATE POLICY "Users can view own applications"
  ON public.job_applications
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create applications"
  ON public.job_applications
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own applications"
  ON public.job_applications
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Policies for automation settings
CREATE POLICY "Users can view own automation settings"
  ON public.automation_settings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own automation settings"
  ON public.automation_settings
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create function to handle user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id)
  VALUES (new.id);
  
  INSERT INTO public.automation_settings (user_id)
  VALUES (new.id);
  
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user creation
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();