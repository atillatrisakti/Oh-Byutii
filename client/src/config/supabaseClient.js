import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://zbaqzivoazrtkwyqbhop.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiYXF6aXZvYXpydGt3eXFiaG9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwNjY3MjIsImV4cCI6MjAwNjY0MjcyMn0.uI80eW3XLaIlZrYBxLLe8Fbm-GE3MI0_Ee_NL2B2nE0";

export const supabase = createClient(supabaseURL, supabaseAnonKey);
