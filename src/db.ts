import { createClient } from '@supabase/supabase-js';
import Application from './Application';

const database = createClient(Application.SUPABASE_URL, Application.SUPABASE_KEY);
//const database = createClient(process.env["SUPABASE_URL"]!, process.env["SUPABASE_KEY"]!);

export default database;