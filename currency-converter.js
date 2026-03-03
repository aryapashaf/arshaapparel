(function () {
  var CACHE_KEY = 'exchange_rates_idr_v1';
  var CACHE_TTL_MS = 3 * 60 * 60 * 1000;
  var FALLBACK_RATES = {
    IDR: 1,
    USD: 0.000061,
    CNY: 0.00044,
    SAR: 0.00023,
    EUR: 0.000056
  };

  var LANG_TO_CURRENCY = {
    en: { currency: 'USD', locale: 'en-US' },
    id: { currency: 'IDR', locale: 'id-ID' },
    zh: { currency: 'CNY', locale: 'zh-CN' },
    ar: { currency: 'SAR', locale: 'ar-SA' },
    de: { currency: 'EUR', locale: 'de-DE' }
  };

  var rates = null;
  var lastUpdated = 0;
  var inFlight = null;

  function now() {
    return Date.now();
  }

  function getLang(lang) {
    var selected = lang || localStorage.getItem('siteLanguage') || 'en';
    return LANG_TO_CURRENCY[selected] ? selected : 'en';
  }

  function getCurrencyInfo(lang) {
    return LANG_TO_CURRENCY[getLang(lang)] || LANG_TO_CURRENCY.en;
  }

  function loadCache() {
    try {
      var raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return false;
      var parsed = JSON.parse(raw);
      if (!parsed || !parsed.rates || !parsed.updatedAt) return false;
      rates = parsed.rates;
      lastUpdated = Number(parsed.updatedAt) || 0;
      return true;
    } catch (_) {
      return false;
    }
  }

  function saveCache(nextRates) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        updatedAt: now(),
        rates: nextRates
      }));
    } catch (_) {}
  }

  function isCacheFresh() {
    return rates && lastUpdated && (now() - lastUpdated) < CACHE_TTL_MS;
  }

  function notifyUpdated() {
    window.dispatchEvent(new CustomEvent('currency:updated'));
  }

  async function fetchRates() {
    if (isCacheFresh()) return rates;
    if (inFlight) return inFlight;

    inFlight = fetch('https://open.er-api.com/v6/latest/IDR')
      .then(function (response) {
        if (!response.ok) throw new Error('Failed to fetch exchange rates');
        return response.json();
      })
      .then(function (data) {
        if (!data || !data.rates) throw new Error('Invalid exchange rates response');
        rates = data.rates;
        lastUpdated = now();
        saveCache(rates);
        notifyUpdated();
        return rates;
      })
      .catch(function () {
        if (!rates) {
          rates = FALLBACK_RATES;
          lastUpdated = now();
        }
        return rates;
      })
      .finally(function () {
        inFlight = null;
      });

    return inFlight;
  }

  function getRate(currency) {
    var source = rates || FALLBACK_RATES;
    return Number(source[currency] || 0);
  }

  function convertFromIDR(value, currency) {
    var amount = Number(value);
    if (Number.isNaN(amount)) return 0;
    if (currency === 'IDR') return amount;
    var rate = getRate(currency);
    if (!rate) return amount;
    return amount * rate;
  }

  function formatFromIDR(value, lang) {
    var info = getCurrencyInfo(lang);
    var converted = convertFromIDR(value, info.currency);
    return new Intl.NumberFormat(info.locale, {
      style: 'currency',
      currency: info.currency,
      minimumFractionDigits: info.currency === 'IDR' ? 0 : 2,
      maximumFractionDigits: info.currency === 'IDR' ? 0 : 2
    }).format(converted);
  }

  loadCache();
  fetchRates();

  window.currencyService = {
    ready: fetchRates,
    refresh: fetchRates,
    formatFromIDR: formatFromIDR,
    getCurrencyInfo: getCurrencyInfo,
    getLang: getLang
  };
})();

