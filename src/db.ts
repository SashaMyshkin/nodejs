import { createClient } from '@supabase/supabase-js';
//import Application from '../Application';

const database = createClient("https://ehmfbvjeylhvujsxteug.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVobWZidmpleWxodnVqc3h0ZXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MjM4MDYsImV4cCI6MjAxMzI5OTgwNn0.PwXc89-UEMB-v_QVYe_hdHqeyviJuCrJ5ISv7f0BTLI");
//const database = createClient(process.env["SUPABASE_URL"]!, process.env["SUPABASE_KEY"]!);

export default database;