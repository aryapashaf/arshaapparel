(function () {
  if (!window.supabase) {
    console.warn('Supabase SDK not loaded.');
    return;
  }

  const url = window.SUPABASE_URL;
  const key = window.SUPABASE_ANON_KEY;

  if (!url || !key || url.includes('YOUR_PROJECT') || key.includes('YOUR_ANON_KEY')) {
    console.warn('Supabase config missing. Update supabase-config.js');
    return;
  }

  window.supabaseClient = window.supabase.createClient(url, key);
})();
