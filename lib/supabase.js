import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://bztircsrymdxnghaytly.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6dGlyY3NyeW1keG5naGF5dGx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4OTU1NDksImV4cCI6MjA2MDQ3MTU0OX0.X-oXJQLveI228_g9mEHSn6XBPLIXxoz82kvLsxjyWWI"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})