import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://reuolbygbfiyggczfktb.supabase.co";
const supabaseKey = "sb_publishable_0YMzRhs-2Pthxq_JXI8OLw_IENcrvqu";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
