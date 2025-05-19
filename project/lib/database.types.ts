export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          plan_type: string
          linkedin_url: string | null
          automation_enabled: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          plan_type?: string
          linkedin_url?: string | null
          automation_enabled?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          plan_type?: string
          linkedin_url?: string | null
          automation_enabled?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      resumes: {
        Row: {
          id: string
          user_id: string
          title: string
          content: Json
          last_updated: string
          strength: number | null
          technologies: string[]
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          content: Json
          last_updated?: string
          strength?: number | null
          technologies?: string[]
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          content?: Json
          last_updated?: string
          strength?: number | null
          technologies?: string[]
          created_at?: string
        }
      }
      job_applications: {
        Row: {
          id: string
          user_id: string
          job_title: string
          company: string
          status: string
          applied_date: string
          location: string
          resume_version: string | null
          messages_sent: number
          job_url: string | null
          recruiter_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          job_title: string
          company: string
          status?: string
          applied_date?: string
          location: string
          resume_version?: string | null
          messages_sent?: number
          job_url?: string | null
          recruiter_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          job_title?: string
          company?: string
          status?: string
          applied_date?: string
          location?: string
          resume_version?: string | null
          messages_sent?: number
          job_url?: string | null
          recruiter_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      automation_settings: {
        Row: {
          id: string
          user_id: string
          job_alert_frequency: string
          daily_limit: number
          location_preferences: string[]
          job_types: string[]
          keyword_filters: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          job_alert_frequency?: string
          daily_limit?: number
          location_preferences?: string[]
          job_types?: string[]
          keyword_filters?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          job_alert_frequency?: string
          daily_limit?: number
          location_preferences?: string[]
          job_types?: string[]
          keyword_filters?: string[]
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}