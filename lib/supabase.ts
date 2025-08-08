import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export interface ContactForm {
  id: string
  first_name: string
  last_name: string
  email: string
  subject: string
  message: string
  created_at: string
  status: 'new' | 'read' | 'replied'
}
