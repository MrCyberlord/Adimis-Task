
import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl: string = 'https://cxbanzhjfqrwexkkkihd.supabase.co'
const supabaseAnonKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4YmFuemhqZnFyd2V4a2traWhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNTc3OTgsImV4cCI6MjAyNzYzMzc5OH0.YE-A52_iADebWd1x62uV09-2Efn1FjVORF1oNE6nTv0'

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey)
