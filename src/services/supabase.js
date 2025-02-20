import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wqdyoxkyjcpbzphaqbak.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxZHlveGt5amNwYnpwaGFxYmFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwMDA1MjYsImV4cCI6MjA0ODU3NjUyNn0.M7oLIxEeu4F8cu4yMfU9nZtdHZ0XO1FYLr9ujwmoffU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
