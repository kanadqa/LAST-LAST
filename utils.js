(() => {
  const palette = [
    "#2563eb",
    "#16a34a",
    "#ea580c",
    "#7c3aed",
    "#0f766e",
    "#db2777",
    "#ca8a04",
    "#dc2626",
    "#0891b2",
    "#4f46e5",
  ];

  const normalizeTransactionCurrency = (value, fallback = "RUB") => {
    if (typeof value !== "string") {
      return fallback;
    }
    const normalized = value.trim().toUpperCase();
    return normalized || fallback;
  };

  const currencyFormatters = new Map();

  const formatMoney = (amount, currency = "RUB") => {
    const normalized = normalizeTransactionCurrency(currency, "RUB");
    if (!currencyFormatters.has(normalized)) {
      currencyFormatters.set(normalized, new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: normalized,
        minimumFractionDigits: 2,
      }));
    }
    return currencyFormatters.get(normalized).format(amount);
  };

  const colorForLabel = (label) => {
    const text = String(label);
    let hash = 0;
    for (let i = 0; i < text.length; i += 1) {
      hash = (hash * 31 + text.charCodeAt(i)) % palette.length;
    }
    return palette[Math.abs(hash) % palette.length];
  };

  const parseCsv = (text) => {
    const cleaned = text.replace(/^\uFEFF/, "");
    const rows = [];
    let current = [];
    let value = "";
    let inQuotes = false;
    const pushValue = () => {
      current.push(value);
      value = "";
    };
    for (let i = 0; i < cleaned.length; i += 1) {
      const char = cleaned[i];
      const next = cleaned[i + 1];
      if (char === "\"") {
        if (inQuotes && next === "\"") {
          value += "\"";
          i += 1;
        } else {
          inQuotes = !inQuotes;
        }
        continue;
      }
      if (!inQuotes && char === ",") {
        pushValue();
        continue;
      }
      if (!inQuotes && (char === "\n" || char === "\r")) {
        if (char === "\r" && next === "\n") {
          i += 1;
        }
        pushValue();
        if (current.length > 1 || current[0] !== "") {
          rows.push(current);
        }
        current = [];
        continue;
      }
      value += char;
    }
    if (value.length || current.length) {
      pushValue();
      rows.push(current);
    }
    return rows;
  };

  window.AppUtils = {
    colorForLabel,
    formatMoney,
    normalizeTransactionCurrency,
    parseCsv,
  };
})();
