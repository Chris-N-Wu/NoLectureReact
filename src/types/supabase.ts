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
      Fall_2023: {
        Row: {
          building: string | null
          building_name: string | null
          course_number: number | null
          course_title: string | null
          end_date: string | null
          end_time: string | null
          friday: boolean | null
          id: number
          monday: boolean | null
          room: string | null
          start_date: string | null
          start_time: string | null
          subject: string | null
          thursday: boolean | null
          tuesday: boolean | null
          wednesday: boolean | null
        }
        Insert: {
          building?: string | null
          building_name?: string | null
          course_number?: number | null
          course_title?: string | null
          end_date?: string | null
          end_time?: string | null
          friday?: boolean | null
          id?: number
          monday?: boolean | null
          room?: string | null
          start_date?: string | null
          start_time?: string | null
          subject?: string | null
          thursday?: boolean | null
          tuesday?: boolean | null
          wednesday?: boolean | null
        }
        Update: {
          building?: string | null
          building_name?: string | null
          course_number?: number | null
          course_title?: string | null
          end_date?: string | null
          end_time?: string | null
          friday?: boolean | null
          id?: number
          monday?: boolean | null
          room?: string | null
          start_date?: string | null
          start_time?: string | null
          subject?: string | null
          thursday?: boolean | null
          tuesday?: boolean | null
          wednesday?: boolean | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
