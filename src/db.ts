import { createClient } from '@supabase/supabase-js';

const database = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default database;