// ============================================================
// HugoPrep: Supabase connection
// ============================================================

const SUPABASE_URL = "https://hsbjfdohhawaaconccsw.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_FUNrYYIyUV_-4GUWKIjqjA_g6vZnTq5";

const isSupabaseConfigured =
  !SUPABASE_URL.includes("PASTE_YOUR") && !SUPABASE_ANON_KEY.includes("PASTE_YOUR");

const supabaseClient = isSupabaseConfigured
  ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

// Shared helper: show a "backend not connected" notice and stop.
function requireSupabaseOrWarn(msgEl) {
  if (isSupabaseConfigured) return true;
  if (msgEl) {
    msgEl.textContent =
      "This page isn't connected to the account system yet. (Missing Supabase project URL/key in js/supabase-client.js.)";
    msgEl.classList.add("show", "info");
  }
  return false;
}
