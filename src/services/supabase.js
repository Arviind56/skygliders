// import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jecsaocyomaxtikxfbpr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplY3Nhb2N5b21heHRpa3hmYnByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2MTEyNzIsImV4cCI6MjAyMDE4NzI3Mn0.D8HeGkARfeQKJy1PSK-nK0baSqAPGEPjIGczVw32_pk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;