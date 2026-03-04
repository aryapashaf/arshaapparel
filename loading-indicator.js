(function () {
  if (window.__globalLoaderInstalled) return;
  window.__globalLoaderInstalled = true;

  var style = document.createElement('style');
  style.textContent = [
    '.global-loader{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.58);backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);opacity:0;pointer-events:none;transition:opacity .2s ease;z-index:9999;}',
    '.global-loader.is-visible{opacity:1;pointer-events:auto;}',
    '.global-loader__content{display:flex;flex-direction:column;align-items:center;gap:12px;padding:16px 18px;border-radius:14px;background:rgba(17,17,17,.92);border:1px solid #2B2B2B;box-shadow:0 18px 40px rgba(0,0,0,.45);}',
    '.global-loader__ring{width:44px;height:44px;border-radius:50%;border:3px solid #2B2B2B;border-top-color:#FFD400;animation:loader-spin .9s linear infinite;position:relative;}',
    '.global-loader__ring::after{content:"";position:absolute;inset:6px;border-radius:50%;border:2px solid transparent;border-top-color:#FFFFFF;animation:loader-spin 1.35s linear infinite reverse;}',
    '.global-loader__text{font:500 13px/1.4 Inter, sans-serif;color:#FFFFFF;letter-spacing:.2px;text-align:center;max-width:220px;}',
    '@keyframes loader-spin{to{transform:rotate(360deg);}}'
  ].join('');
  document.head.appendChild(style);

  var overlay = document.createElement('div');
  overlay.className = 'global-loader';
  overlay.setAttribute('aria-live', 'polite');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = '<div class="global-loader__content"><div class="global-loader__ring" aria-hidden="true"></div><div class="global-loader__text" id="globalLoaderText">Memuat data...</div></div>';
  document.body.appendChild(overlay);

  var textNode = overlay.querySelector('#globalLoaderText');
  var activeRequests = 0;
  var showTimer = null;
  var visible = false;
  var SLOW_DELAY_MS = 550;

  function show(message) {
    if (message && textNode) textNode.textContent = message;
    if (visible) return;
    visible = true;
    overlay.classList.add('is-visible');
    overlay.setAttribute('aria-hidden', 'false');
  }

  function hide() {
    visible = false;
    overlay.classList.remove('is-visible');
    overlay.setAttribute('aria-hidden', 'true');
  }

  function scheduleSlowMessage() {
    clearTimeout(showTimer);
    showTimer = setTimeout(function () {
      if (activeRequests > 0) {
        show('Mohon tunggu sebentar...');
      }
    }, SLOW_DELAY_MS);
  }

  function onRequestStart() {
    activeRequests += 1;
    if (activeRequests === 1) scheduleSlowMessage();
  }

  function onRequestEnd() {
    activeRequests = Math.max(0, activeRequests - 1);
    if (activeRequests === 0) {
      clearTimeout(showTimer);
      if (navigator.onLine) hide();
    }
  }

  if (typeof window.fetch === 'function') {
    var originalFetch = window.fetch.bind(window);
    window.fetch = function () {
      onRequestStart();
      return originalFetch.apply(window, arguments)
        .finally(onRequestEnd);
    };
  }

  window.addEventListener('offline', function () {
    clearTimeout(showTimer);
    show('Koneksi terputus, menunggu jaringan...');
  });

  window.addEventListener('online', function () {
    if (activeRequests === 0) hide();
  });

  var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (connection && typeof connection.addEventListener === 'function') {
    var evaluateConnection = function () {
      var type = connection.effectiveType || '';
      var slow = type === 'slow-2g' || type === '2g' || (typeof connection.downlink === 'number' && connection.downlink < 1);
      if (slow && activeRequests > 0) {
        show('Koneksi lambat, mohon tunggu...');
      }
    };
    connection.addEventListener('change', evaluateConnection);
  }
})();
