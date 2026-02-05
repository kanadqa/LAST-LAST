const form = document.getElementById("transactionForm");
const tableBody = document.getElementById("transactionTable");
const totalIncomeEl = document.getElementById("totalIncome");
const totalExpenseEl = document.getElementById("totalExpense");
const balanceEl = document.getElementById("balance");
const expensePercentEl = document.getElementById("expensePercent");
const exportButton = document.getElementById("exportCsv");
const importCsvInput = document.getElementById("importCsv");
const clearButton = document.getElementById("clearAll");
const undoButton = document.getElementById("undoAction");
const backupButton = document.getElementById("backupJson");
const restoreInput = document.getElementById("restoreJson");
const backupMeta = document.getElementById("backupMeta");
const errorBanner = document.getElementById("errorBanner");
const summaryCurrencyNote = document.getElementById("summaryCurrencyNote");
const categorySelect = document.getElementById("category");
const subcategorySelect = document.getElementById("subcategory");
const categoryTypeSelect = document.getElementById("categoryType");
const categoryList = document.getElementById("categoryList");
const addCategoryButton = document.getElementById("addCategory");
const newCategoryInput = document.getElementById("newCategory");
const newSubcategoryInput = document.getElementById("newSubcategory");
const transactionCurrencySelect = document.getElementById("currency");
const categoryScopeButtons = document.querySelectorAll("[data-category-scope]");
const categoryPanels = document.querySelectorAll("[data-category-panel]");
const expenseCategoryChart = document.getElementById("expenseCategoryChart");
const incomeSubcategoryChart = document.getElementById("incomeSubcategoryChart");
const expenseSubcategoryChart = document.getElementById("expenseSubcategoryChart");
const toggleSubcategoryButton = document.getElementById("toggleSubcategoryChart");
const toggleExpenseCategoryButton = document.getElementById("toggleExpenseCategoryChart");
const expensePie = document.getElementById("expensePie");
const expenseSubcategoryPie = document.getElementById("expenseSubcategoryPie");
const incomePie = document.getElementById("incomePie");
const reportLineChart = document.getElementById("reportLineChart");
const categoryManager = document.getElementById("categoryManager");
const rootDropzone = document.querySelector("[data-dropzone-root]");
const capitalRootDropzone = document.querySelector("[data-capital-dropzone-root]");
const filterTabs = document.querySelectorAll("[data-filter]");
const navLinks = document.querySelectorAll("[data-view-target]");
const views = document.querySelectorAll("[data-view]");
const viewTitle = document.getElementById("viewTitle");
const layoutButtons = document.querySelectorAll("[data-layout]");
const reportStartInput = document.getElementById("reportStart");
const reportEndInput = document.getElementById("reportEnd");
const applyReportRangeButton = document.getElementById("applyReportRange");
const reportRangeButtons = document.querySelectorAll("[data-report-range]");
const reportGranularityButtons = document.querySelectorAll("[data-report-granularity]");
const reportIncomeEl = document.getElementById("reportIncome");
const reportExpenseEl = document.getElementById("reportExpense");
const reportBalanceEl = document.getElementById("reportBalance");
const reportTransactionsCountEl = document.getElementById("reportTransactionsCount");
const reportComparison = document.getElementById("reportComparison");
const reportComparisonDetail = document.getElementById("reportComparisonDetail");
const reportCurrencyNote = document.getElementById("reportCurrencyNote");
const reportExpenseCategories = document.getElementById("reportExpenseCategories");
const reportExpenseSubcategories = document.getElementById("reportExpenseSubcategories");
const reportIncomeSubcategories = document.getElementById("reportIncomeSubcategories");
const reportLineSummary = document.getElementById("reportLineSummary");
const reportExpenseCategoriesSummary = document.getElementById("reportExpenseCategoriesSummary");
const reportExpenseSubcategoriesSummary = document.getElementById("reportExpenseSubcategoriesSummary");
const reportIncomeSubcategoriesSummary = document.getElementById("reportIncomeSubcategoriesSummary");
const capitalTabs = document.querySelectorAll("[data-capital-tab]");
const capitalPanels = document.querySelectorAll("[data-capital-tab-panel]");
const capitalAssetsTotal = document.getElementById("capitalAssetsTotal");
const capitalDebtsTotal = document.getElementById("capitalDebtsTotal");
const capitalNetWorth = document.getElementById("capitalNetWorth");
const capitalLedger = document.getElementById("capitalLedger");
const capitalLedgerTotal = document.getElementById("capitalLedgerTotal");
const capitalLedgerNote = document.getElementById("capitalLedgerNote");
const capitalOverviewBody = document.getElementById("capitalOverviewBody");
const capitalOverviewTotal = document.getElementById("capitalOverviewTotal");
const capitalOverviewNote = document.getElementById("capitalOverviewNote");
const capitalOverviewCurrency = document.getElementById("capitalOverviewCurrency");
const capitalOverviewReal = document.getElementById("capitalOverviewReal");
const capitalOverviewDebts = document.getElementById("capitalOverviewDebts");
const capitalOverviewDelta = document.getElementById("capitalOverviewDelta");
const capitalOverviewAssets = document.getElementById("capitalOverviewAssets");
const capitalOverviewGoals = document.getElementById("capitalOverviewGoals");
const capitalOverviewSnapshots = document.getElementById("capitalOverviewSnapshots");
const capitalOverviewDebtsList = document.getElementById("capitalOverviewDebtsList");
const capitalStructureButtons = document.querySelectorAll("[data-capital-structure]");
const capitalOverviewFilters = document.querySelectorAll("[data-capital-filter]");
const capitalAssetTypePie = document.getElementById("capitalAssetTypePie");
const capitalAssetTypeChart = document.getElementById("capitalAssetTypeChart");
const capitalExportButton = document.getElementById("capitalExport");
const capitalImportInput = document.getElementById("capitalImport");
const capitalBaseCurrency = document.getElementById("capitalBaseCurrency");
const capitalFxCurrency = document.getElementById("capitalFxCurrency");
const capitalFxRefresh = document.getElementById("capitalFxRefresh");
const capitalFxRateValue = document.getElementById("capitalFxRateValue");
const capitalFxUpdated = document.getElementById("capitalFxUpdated");
const capitalFxChart = document.getElementById("capitalFxChart");
const capitalFxNote = document.getElementById("capitalFxNote");
const capitalAssetForm = document.getElementById("capitalAssetForm");
const capitalAssetToggle = document.getElementById("capitalAssetToggle");
const capitalAssetToggleButtons = document.querySelectorAll("[data-capital-asset-toggle]");
const capitalAssetDrawer = document.getElementById("capitalAssetDrawer");
const capitalAssetOverlay = document.getElementById("capitalAssetOverlay");
const capitalAssetName = document.getElementById("capitalAssetName");
const capitalAssetType = document.getElementById("capitalAssetType");
const capitalAssetCurrency = document.getElementById("capitalAssetCurrency");
const capitalAssetAmount = document.getElementById("capitalAssetAmount");
const capitalAssetInvested = document.getElementById("capitalAssetInvested");
const capitalAssetSubcategory = document.getElementById("capitalAssetSubcategory");
const capitalAssetIcon = document.getElementById("capitalAssetIcon");
const capitalAssetAvatar = document.getElementById("capitalAssetAvatar");
const capitalAssetAvatarRemove = document.getElementById("capitalAssetAvatarRemove");
const capitalSubcategoryList = document.getElementById("capitalSubcategoryList");
const capitalAssetMaturityDate = document.getElementById("capitalAssetMaturityDate");
const capitalAssetLiquidity = document.getElementById("capitalAssetLiquidity");
const capitalAssetExpectedProfit = document.getElementById("capitalAssetExpectedProfit");
const capitalAssetNote = document.getElementById("capitalAssetNote");
const capitalAssetClose = document.getElementById("capitalAssetClose");
const capitalAssetDelete = document.getElementById("capitalAssetDelete");
const capitalAssetDrawerTitle = document.getElementById("capitalAssetDrawerTitle");
const toast = document.getElementById("toast");
const selfTestPanel = document.getElementById("selfTestPanel");
const capitalAssetsList = document.getElementById("capitalAssetsList");
const capitalAssetSearch = document.getElementById("capitalAssetSearch");
const capitalAssetTypeFilter = document.getElementById("capitalAssetTypeFilter");
const capitalAssetLiquidityFilter = document.getElementById("capitalAssetLiquidityFilter");
const capitalAssetSort = document.getElementById("capitalAssetSort");
const capitalAssetSortDir = document.getElementById("capitalAssetSortDir");
const capitalAssetShown = document.getElementById("capitalAssetShown");
const capitalAssetsSummaryTotal = document.getElementById("capitalAssetsSummaryTotal");
const capitalAssetsSummaryInvested = document.getElementById("capitalAssetsSummaryInvested");
const capitalAssetsSummaryProfit = document.getElementById("capitalAssetsSummaryProfit");
const capitalAssetsSummaryPercent = document.getElementById("capitalAssetsSummaryPercent");
const capitalAssetsSummaryWarning = document.getElementById("capitalAssetsSummaryWarning");
const capitalAssetViewButtons = document.querySelectorAll("[data-capital-asset-view]");
const capitalAssetPanels = document.querySelectorAll("[data-capital-asset-panel]");
const capitalCategoryForm = document.getElementById("capitalCategoryForm");
const capitalCategoryName = document.getElementById("capitalCategoryName");
const capitalSubcategoryName = document.getElementById("capitalSubcategoryName");
const capitalCategoryManager = document.getElementById("capitalCategoryManager");
const capitalWeightedApr = document.getElementById("capitalWeightedApr");
const capitalHighestApr = document.getElementById("capitalHighestApr");
const capitalInterestMonthly = document.getElementById("capitalInterestMonthly");
const capitalDebtForm = document.getElementById("capitalDebtForm");
const capitalDebtName = document.getElementById("capitalDebtName");
const capitalDebtType = document.getElementById("capitalDebtType");
const capitalDebtCurrency = document.getElementById("capitalDebtCurrency");
const capitalDebtPrincipal = document.getElementById("capitalDebtPrincipal");
const capitalDebtApr = document.getElementById("capitalDebtApr");
const capitalDebtPayment = document.getElementById("capitalDebtPayment");
const capitalDebtDueDay = document.getElementById("capitalDebtDueDay");
const capitalDebtNote = document.getElementById("capitalDebtNote");
const capitalDebtsTable = document.getElementById("capitalDebtsTable");
const capitalExtraPayment = document.getElementById("capitalExtraPayment");
const capitalPayoffTable = document.getElementById("capitalPayoffTable");
const capitalGoalForm = document.getElementById("capitalGoalForm");
const capitalGoalName = document.getElementById("capitalGoalName");
const capitalGoalKind = document.getElementById("capitalGoalKind");
const capitalGoalTarget = document.getElementById("capitalGoalTarget");
const capitalGoalDate = document.getElementById("capitalGoalDate");
const capitalGoalBaseline = document.getElementById("capitalGoalBaseline");
const capitalGoalNote = document.getElementById("capitalGoalNote");
const capitalGoalsTable = document.getElementById("capitalGoalsTable");
const capitalSnapshotNow = document.getElementById("capitalSnapshotNow");
const capitalSnapshotsChart = document.getElementById("capitalSnapshotsChart");
const capitalSnapshotsTable = document.getElementById("capitalSnapshotsTable");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarClose = document.getElementById("sidebarClose");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const transactionSearch = document.getElementById("transactionSearch");
const transactionTypeFilter = document.getElementById("transactionTypeFilter");
const transactionCategoryFilter = document.getElementById("transactionCategoryFilter");
const transactionDateStart = document.getElementById("transactionDateStart");
const transactionDateEnd = document.getElementById("transactionDateEnd");
const transactionSort = document.getElementById("transactionSort");
const transactionSortDir = document.getElementById("transactionSortDir");
const transactionPrev = document.getElementById("transactionPrev");
const transactionNext = document.getElementById("transactionNext");
const transactionPageInfo = document.getElementById("transactionPageInfo");
const transactionPageSize = document.getElementById("transactionPageSize");
const transactionReset = document.getElementById("transactionReset");
const transactionFilterChips = document.getElementById("transactionFilterChips");
const transactionCount = document.getElementById("transactionCount");
const transactionFavorites = document.getElementById("transactionFavorites");
const transactionSelectAll = document.getElementById("transactionSelectAll");
const transactionDeleteSelected = document.getElementById("transactionDeleteSelected");
const transactionClearSelection = document.getElementById("transactionClearSelection");
const amountCurrencyHint = document.getElementById("amountCurrencyHint");
const amountLastHint = document.getElementById("amountLastHint");
const dateQuickButtons = document.querySelectorAll("[data-date-quick]");
const incomeSubcategorySummary = document.getElementById("incomeSubcategorySummary");
const expenseCategorySummary = document.getElementById("expenseCategorySummary");
const expenseSubcategorySummary = document.getElementById("expenseSubcategorySummary");
const expensePieSummary = document.getElementById("expensePieSummary");
const expenseSubcategoryPieSummary = document.getElementById("expenseSubcategoryPieSummary");
const incomePieSummary = document.getElementById("incomePieSummary");
const reportInsight = document.getElementById("reportInsight");
const capitalAssetMissingRate = document.getElementById("capitalAssetMissingRate");

const appUtils = window.AppUtils || {};
let colorForLabel = appUtils.colorForLabel;
let formatMoney = appUtils.formatMoney;
let normalizeTransactionCurrency = appUtils.normalizeTransactionCurrency;
let parseCsv = appUtils.parseCsv;

if (!normalizeTransactionCurrency) {
  normalizeTransactionCurrency = (value, fallback = "RUB") => {
    if (typeof value !== "string") {
      return fallback;
    }
    const normalized = value.trim().toUpperCase();
    return normalized || fallback;
  };
}

if (!formatMoney) {
  const currencyFormatters = new Map();
  formatMoney = (amount, currency = "RUB") => {
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
}

if (!colorForLabel) {
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
  colorForLabel = (label) => {
    const text = String(label);
    let hash = 0;
    for (let i = 0; i < text.length; i += 1) {
      hash = (hash * 31 + text.charCodeAt(i)) % palette.length;
    }
    return palette[Math.abs(hash) % palette.length];
  };
}

if (!parseCsv) {
  parseCsv = (text) => {
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
}

const STORAGE_KEY = "budget.transactions.v2";
const LAST_TX_PRESET_KEY = "budget.transactions.preset.v1";
const LAST_TX_AMOUNT_BY_CATEGORY_KEY = "budget.transactions.amountByCategory.v1";
const CATEGORY_KEY = "budget.categories.v3";
const VIEW_KEY = "budget.view.active";
const LAYOUT_KEY = "budget.layout";
const CHART_LIMIT = 6;
const BACKUP_META_KEY = "budget.backup.meta";
const CAPITAL_KEY_V2 = "budget.capital.v2";
const CAPITAL_KEY_V1 = "budget.capital.v1";
const CAPITAL_MIGRATED_KEY = "budget.capital.migrated";
const CAPITAL_ASSETS_UI_KEY = "budget.capital.assets.uiState";

const showToast = (message, type = "info") => {
  if (!toast) {
    return;
  }
  toast.textContent = message;
  toast.classList.remove("is-hidden", "is-success", "is-info", "is-error");
  toast.classList.add(`is-${type}`);
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.add("is-hidden");
  }, 2200);
};

const showNotice = (message, type = "info") => {
  if (type === "error") {
    if (errorBanner) {
      errorBanner.textContent = message;
      errorBanner.classList.remove("is-hidden");
    } else {
      alert(message);
    }
    showToast(message, "error");
    return;
  }
  if (errorBanner) {
    errorBanner.classList.add("is-hidden");
    errorBanner.textContent = "";
  }
  showToast(message, type);
};

const showError = (message) => {
  showNotice(message, "error");
};

const clearError = () => {
  if (errorBanner) {
    errorBanner.classList.add("is-hidden");
    errorBanner.textContent = "";
  }
};

const safeExec = (fn, context = "operation") => async (...args) => {
  try {
    clearError();
    await fn(...args);
  } catch (error) {
    console.error(`Ошибка в ${context}`, error);
    showError(`Произошла ошибка: ${context}. Проверьте данные и попробуйте снова.`);
  }
};

window.addEventListener("error", (event) => {
  console.error("Глобальная ошибка", event.error || event.message);
  showError("Произошла ошибка в приложении. Обновите страницу или попробуйте снова.");
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("Необработанное отклонение промиса", event.reason);
  showError("Произошла ошибка при выполнении операции. Проверьте данные.");
});

const currencyFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  minimumFractionDigits: 2,
});

const formatType = (type) => (type === "income" ? "Доход" : "Расход");

const DB_NAME = "budgetAppDb";
const DB_VERSION = 1;
const DB_STORE = "kv";

const Storage = (() => {
  let dbInstance = null;
  let useLocalStorage = false;
  let useMemoryStore = false;
  const memoryStore = new Map();

  const dbOpen = () => new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DB_STORE)) {
        db.createObjectStore(DB_STORE);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

  const init = async () => {
    if (useLocalStorage) {
      return null;
    }
    if (!dbInstance) {
      try {
        dbInstance = await dbOpen();
      } catch (error) {
        console.warn("IndexedDB недоступен, используем localStorage.", error);
        useLocalStorage = true;
        dbInstance = null;
      }
    }
    return dbInstance;
  };

  const get = async (key) => {
    if (useMemoryStore) {
      return memoryStore.get(key) ?? null;
    }
    if (useLocalStorage) {
      try {
        return localStorage.getItem(key);
      } catch (error) {
        console.warn("localStorage недоступен, используем память.", error);
        useMemoryStore = true;
        return memoryStore.get(key) ?? null;
      }
    }
    const db = dbInstance || await dbOpen();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, "readonly");
      const store = tx.objectStore(DB_STORE);
      const request = store.get(key);
      request.onsuccess = () => resolve(request.result ?? null);
      request.onerror = () => reject(request.error);
    });
  };

  const set = async (key, value) => {
    if (useMemoryStore) {
      memoryStore.set(key, value);
      return;
    }
    if (useLocalStorage) {
      try {
        localStorage.setItem(key, value);
        return;
      } catch (error) {
        console.warn("localStorage недоступен, используем память.", error);
        useMemoryStore = true;
        memoryStore.set(key, value);
        return;
      }
    }
    const db = dbInstance || await dbOpen();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, "readwrite");
      const store = tx.objectStore(DB_STORE);
      const request = store.put(value, key);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  };

  return { init, get, set };
})();

const generateId = (prefix = "item") =>
  (crypto.randomUUID?.() || `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`);

const normalizeTransaction = (item) => {
  const baseDate = item.date || new Date().toISOString().slice(0, 10);
  const createdAt = item.createdAt || new Date(baseDate).toISOString();
  const updatedAt = item.updatedAt || createdAt;
  const amount = Number.parseFloat(item.amount);
  return {
    id: item.id || generateId("tx"),
    date: baseDate,
    type: item.type === "income" ? "income" : "expense",
    category: item.category || "",
    subcategory: item.subcategory || "",
    amount: Number.isFinite(amount) ? amount : 0,
    currency: normalizeTransactionCurrency(item.currency, "RUB"),
    note: item.note || "",
    createdAt,
    updatedAt,
  };
};

const normalizeTransactions = (items) => {
  let migrated = false;
  const normalized = (Array.isArray(items) ? items : []).map((item) => {
    const next = normalizeTransaction(item || {});
    if (!item?.id || !item?.createdAt || !item?.updatedAt || !Number.isFinite(item?.amount) || !item?.currency) {
      migrated = true;
    }
    return next;
  });
  return { normalized, migrated };
};

const loadTransactions = async () => {
  try {
    const raw = await Storage.get(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    const { normalized, migrated } = normalizeTransactions(parsed);
    if (migrated) {
      await Storage.set(STORAGE_KEY, JSON.stringify(normalized));
    }
    return normalized;
  } catch (error) {
    console.error("Не удалось загрузить данные", error);
    return [];
  }
};

const normalizeCategories = (raw) => {
  if (!raw) {
    return null;
  }

  if (Object.values(raw).every((value) => Array.isArray(value))) {
    const converted = {};
    Object.entries(raw).forEach(([name, subs]) => {
      converted[name] = {
        type: name === "Доход" ? "income" : "expense",
        subs: subs,
      };
    });
    return converted;
  }

  return raw;
};

const loadCategories = async () => {
  try {
    const raw = await Storage.get(CATEGORY_KEY);
    if (raw) {
      return normalizeCategories(JSON.parse(raw));
    }
  } catch (error) {
    console.error("Не удалось загрузить категории", error);
  }
  return {
    Еда: { type: "expense", subs: ["Еда домой", "Еда вне дома"] },
    Транспорт: { type: "expense", subs: ["Метро", "Такси"] },
    Доход: { type: "income", subs: ["Зарплата", "Фриланс"] },
  };
};

const loadCapitalV2 = async () => {
  try {
    const raw = await Storage.get(CAPITAL_KEY_V2);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (error) {
    console.error("Не удалось загрузить капитал", error);
  }
  return null;
};

const saveCapitalV2 = (nextState) => Storage.set(CAPITAL_KEY_V2, JSON.stringify(nextState));

const loadCapitalV1 = async () => {
  try {
    const raw = await Storage.get(CAPITAL_KEY_V1);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.error("Не удалось загрузить капитал (v1)", error);
    return null;
  }
};

const migrateCapitalState = async () => {
  const existing = await loadCapitalV2();
  if (existing) {
    return existing;
  }

  const migratedFlag = await Storage.get(CAPITAL_MIGRATED_KEY);
  const legacy = await loadCapitalV1();
  const baseState = {
    assets: [],
    debts: [],
    goals: [],
    snapshots: [],
    settings: {
      baseCurrency: "RUB",
      fxRates: {},
    },
  };

  if (!legacy || migratedFlag) {
    saveCapitalV2(baseState);
    Storage.set(CAPITAL_MIGRATED_KEY, "true");
    return baseState;
  }

  const now = new Date().toISOString();
  const mappedAssets = (legacy.assets || []).map((item) => ({
    id: (crypto.randomUUID?.() || `asset-${Date.now()}-${Math.random()}`),
    name: item.name,
    type: "bank",
    currency: "RUB",
    amount: item.amount,
    invested: item.amount,
    section: item.type === "deposit" ? "Вклады" : "В наличии",
    liquidity: "high",
    liquidityDays: null,
    expectedProfit: item.type === "deposit" ? 0 : null,
    maturityDate: item.type === "deposit" ? (item.unlockDate || "") : "",
    institution: "",
    note: item.note || "",
    updatedAt: now,
  }));
  const mappedDebts = (legacy.debts || []).map((item) => ({
    id: (crypto.randomUUID?.() || `debt-${Date.now()}-${Math.random()}`),
    name: item.name,
    type: "loan",
    currency: "RUB",
    principal: item.amount,
    apr: null,
    paymentMin: null,
    dueDay: null,
    note: item.note || "",
    updatedAt: now,
  }));
  const mappedGoals = (legacy.goals || []).map((item) => ({
    id: (crypto.randomUUID?.() || `goal-${Date.now()}-${Math.random()}`),
    name: `Цель ${item.year}`,
    kind: "netWorth",
    targetAmount: item.target,
    targetDate: `${item.year}-12`,
    baselineAmount: item.actual ?? null,
    note: "",
  }));
  const mappedSnapshots = (legacy.history || []).map((item, index, list) => {
    const prev = list[index - 1];
    const delta = prev ? item.total - prev.total : 0;
    return {
      month: item.month,
      assetsTotal: item.total,
      debtsTotal: 0,
      netWorth: item.total,
      delta,
      note: "",
    };
  });

  const migrated = {
    ...baseState,
    assets: mappedAssets,
    debts: mappedDebts,
    goals: mappedGoals,
    snapshots: mappedSnapshots,
  };
  saveCapitalV2(migrated);
  Storage.set(CAPITAL_MIGRATED_KEY, "true");
  return migrated;
};

const saveCategories = (nextCategories) => {
  Storage.set(CATEGORY_KEY, JSON.stringify(nextCategories));
};

const downloadJson = (payload, filename) => {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};


const buildBackupPayload = () => ({
  version: 1,
  createdAt: new Date().toISOString(),
  transactions,
  categories,
  capitalState,
  settings: {
    view: activeView,
    layout: currentLayout,
    baseCurrency: capitalState?.settings?.baseCurrency,
    fxRates: capitalState?.settings?.fxRates,
  },
});

const renderBackupMeta = (meta) => {
  if (!backupMeta) {
    return;
  }
  if (!meta) {
    backupMeta.textContent = "Последний backup: —";
    return;
  }
  const date = new Date(meta.createdAt);
  const sizeKb = meta.sizeKb ? `${meta.sizeKb} КБ` : "—";
  backupMeta.textContent = `Последний backup: ${date.toLocaleString("ru-RU")} · ${sizeKb} · операций: ${meta.transactions || 0}`;
};

const saveBackupMeta = async (payload) => {
  const meta = {
    createdAt: payload.createdAt,
    transactions: payload.transactions?.length || 0,
    sizeKb: Math.round(JSON.stringify(payload).length / 1024),
  };
  await Storage.set(BACKUP_META_KEY, JSON.stringify(meta));
  renderBackupMeta(meta);
};

const applyBackupPayload = async (payload) => {
  if (!payload || typeof payload !== "object") {
    throw new Error("Некорректный формат backup.");
  }
  const normalizedTransactions = normalizeTransactions(payload.transactions || []).normalized;
  const normalizedCategories = normalizeCategories(payload.categories || {});
  transactions = normalizedTransactions;
  categories = normalizedCategories || await loadCategories();
  capitalState = payload.capitalState || await migrateCapitalState();
  if (payload.settings?.baseCurrency || payload.settings?.fxRates) {
    capitalState.settings = {
      ...(capitalState.settings || { baseCurrency: "RUB", fxRates: {} }),
      baseCurrency: payload.settings?.baseCurrency || capitalState.settings?.baseCurrency || "RUB",
      fxRates: payload.settings?.fxRates || capitalState.settings?.fxRates || {},
    };
  }
  normalizeCapitalState();
  await Storage.set(STORAGE_KEY, JSON.stringify(transactions));
  await Storage.set(CATEGORY_KEY, JSON.stringify(categories));
  await saveCapitalV2(capitalState);
  if (payload.settings?.view) {
    await Storage.set(VIEW_KEY, payload.settings.view);
  }
  if (payload.settings?.layout) {
    await Storage.set(LAYOUT_KEY, payload.settings.layout);
  }
};

let transactions = [];
let categories = [];
let undoStack = [];
let showAllSubcategories = false;
let showAllExpenseCategories = false;
let categoryFilter = "all";
let reportGranularity = "daily";
let reportRange = { start: "", end: "" };
let capitalState = null;
let capitalOverviewFilter = "all";
let capitalEditingAssetId = null;
let activeView = "dashboard";
let currentLayout = "comfort";
const transactionFilters = {
  search: "",
  type: "all",
  category: "all",
  dateStart: "",
  dateEnd: "",
  sort: "date",
  direction: "desc",
  page: 1,
  pageSize: 10,
};
let selectedTransactionIds = new Set();
let transactionPageIds = [];
let lastTransactionPreset = null;
let lastAmountByCategory = {};
const assetFilters = {
  search: "",
  type: "all",
  liquidity: "all",
  sort: "amount",
  direction: "desc",
  missingRateOnly: false,
};
let capitalAssetAvatarDataUrl = "";
let assetUiState = { groups: {}, subgroups: {} };

const persistAssetUiState = () => Storage.set(CAPITAL_ASSETS_UI_KEY, JSON.stringify(assetUiState));

const capitalIsUnconvertible = (asset) =>
  asset.currency !== capitalState?.settings?.baseCurrency
  && !capitalState?.settings?.fxRates?.[asset.currency];

const normalizeCurrency = (value, fallback = "RUB") => {
  if (typeof value !== "string") {
    return fallback;
  }
  const trimmed = value.trim().toUpperCase();
  return trimmed || fallback;
};

const getBaseCurrency = () => capitalState?.settings?.baseCurrency || "RUB";

const transactionToBase = (transaction) => {
  const base = getBaseCurrency();
  const currency = normalizeTransactionCurrency(transaction.currency, base);
  if (currency === base) {
    return { amount: transaction.amount, converted: true };
  }
  const rate = capitalState?.settings?.fxRates?.[currency];
  if (!rate) {
    return { amount: null, converted: false };
  }
  return { amount: transaction.amount * rate, converted: true };
};

const sanitizeNumber = (value, fallback = 0) => {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const normalizeCapitalState = () => {
  if (!capitalState) {
    return false;
  }
  let migrated = false;
  capitalState.settings = capitalState.settings || { baseCurrency: "RUB", fxRates: {} };
  capitalState.settings.baseCurrency = normalizeCurrency(capitalState.settings.baseCurrency, "RUB");
  capitalState.settings.fxRates = capitalState.settings.fxRates || {};
  if (!capitalState.assetCategories) {
    capitalState.assetCategories = [];
  }
  if (!Array.isArray(capitalState.assetCategories)) {
    capitalState.assetCategories = Object.entries(capitalState.assetCategories).map(([name, subs]) => ({
      name,
      subs: Array.isArray(subs) ? subs : [],
    }));
  }
  capitalState.assets = (capitalState.assets || []).map((asset) => {
    const isDeposit = asset.type === "deposit";
    const maturityDate = asset.maturityDate || (isDeposit ? asset.unlockDate : "") || "";
    const liquidity = maturityDate ? "locked" : (asset.liquidity || "high");
    const categoryFallback = asset.section || (isDeposit ? "Вклады" : "В наличии");
    const currency = normalizeCurrency(asset.currency, capitalState.settings.baseCurrency);
    const amount = sanitizeNumber(asset.amount);
    const invested = sanitizeNumber(asset.invested ?? amount);
    const createdAt = asset.createdAt || asset.updatedAt || new Date().toISOString();
    if (!asset.id || !asset.updatedAt || !asset.createdAt) {
      migrated = true;
    }
    return {
      id: asset.id || generateId("asset"),
      createdAt,
      updatedAt: asset.updatedAt || new Date().toISOString(),
      section: asset.section || (isDeposit ? "Вклады" : "В наличии"),
      category: asset.category || categoryFallback,
      subcategory: asset.subcategory || "",
      invested,
      liquidity,
      liquidityDays: asset.liquidityDays ?? null,
      expectedProfit: isDeposit ? (asset.expectedProfit ?? null) : null,
      maturityDate,
      unconvertible: asset.unconvertible ?? false,
      ...asset,
      currency,
      amount,
    };
  });
  capitalState.assets = capitalState.assets.map((asset) => ({
    ...asset,
    unconvertible: capitalIsUnconvertible(asset),
  }));
  if (!capitalState.assetCategories.length) {
    const categoryMap = new Map();
    capitalState.assets.forEach((asset) => {
      const name = asset.category || asset.section || "В наличии";
      if (!categoryMap.has(name)) {
        categoryMap.set(name, new Set());
      }
      if (asset.subcategory) {
        categoryMap.get(name).add(asset.subcategory);
      }
    });
    capitalState.assetCategories = [...categoryMap.entries()].map(([name, subs]) => ({
      name,
      subs: [...subs],
    }));
  }
  capitalState.debts = (capitalState.debts || []).map((debt) => ({
    id: debt.id || generateId("debt"),
    createdAt: debt.createdAt || debt.updatedAt || new Date().toISOString(),
    updatedAt: debt.updatedAt || new Date().toISOString(),
    currency: normalizeCurrency(debt.currency, capitalState.settings.baseCurrency),
    principal: sanitizeNumber(debt.principal),
    apr: debt.apr === null ? null : sanitizeNumber(debt.apr, null),
    paymentMin: debt.paymentMin === null ? null : sanitizeNumber(debt.paymentMin, null),
    ...debt,
  }));
  capitalState.goals = (capitalState.goals || []).map((goal) => ({
    id: goal.id || generateId("goal"),
    createdAt: goal.createdAt || goal.updatedAt || new Date().toISOString(),
    updatedAt: goal.updatedAt || new Date().toISOString(),
    targetAmount: sanitizeNumber(goal.targetAmount, 0),
    baselineAmount: goal.baselineAmount === null ? null : sanitizeNumber(goal.baselineAmount, null),
    ...goal,
  }));
  capitalState.snapshots = (capitalState.snapshots || []).map((snap) => ({
    id: snap.id || generateId("snapshot"),
    createdAt: snap.createdAt || snap.updatedAt || new Date().toISOString(),
    updatedAt: snap.updatedAt || new Date().toISOString(),
    assetsTotal: sanitizeNumber(snap.assetsTotal, 0),
    debtsTotal: sanitizeNumber(snap.debtsTotal, 0),
    netWorth: sanitizeNumber(snap.netWorth, 0),
    delta: sanitizeNumber(snap.delta, 0),
    ...snap,
  }));
  return migrated;
};

normalizeCapitalState();

const touchTransaction = (item, updates = {}) => ({
  ...item,
  ...updates,
  updatedAt: new Date().toISOString(),
});

const recordUndo = (kind, payload) => {
  if (!["addTx", "editTx", "deleteTx"].includes(kind)) {
    return;
  }
  undoStack.push({ kind, payload, ts: Date.now() });
  if (undoStack.length > 20) {
    undoStack.shift();
  }
  updateUndoState();
};

const undoLastAction = () => {
  const previous = undoStack.pop();
  if (!previous) {
    return;
  }

  if (previous.kind === "addTx") {
    transactions = transactions.filter((item) => item.id !== previous.payload.id);
  }

  if (previous.kind === "deleteTx") {
    const restored = previous.payload;
    const index = restored.index ?? transactions.length;
    if (Number.isFinite(index) && index >= 0 && index <= transactions.length) {
      transactions.splice(index, 0, restored.item);
    } else {
      transactions.push(restored.item);
    }
  }

  if (previous.kind === "editTx") {
    const { before } = previous.payload;
    const index = transactions.findIndex((item) => item.id === before.id);
    if (index !== -1) {
      transactions[index] = before;
    }
  }

  Storage.set(STORAGE_KEY, JSON.stringify(transactions));
  render(activeView);
  updateUndoState();
};

const updateUndoState = () => {
  if (undoButton) {
    undoButton.disabled = undoStack.length === 0;
  }
};

const updateSummary = () => {
  const baseCurrency = getBaseCurrency();
  const missingCurrencies = new Set();
  const totals = transactions.reduce(
    (acc, item) => {
      const { amount, converted } = transactionToBase(item);
      if (!converted) {
        missingCurrencies.add(item.currency);
        return acc;
      }
      if (item.type === "income") {
        acc.income += amount;
      } else {
        acc.expense += amount;
      }
      return acc;
    },
    { income: 0, expense: 0 }
  );

  totalIncomeEl.textContent = formatMoney(totals.income, baseCurrency);
  totalExpenseEl.textContent = formatMoney(totals.expense, baseCurrency);
  balanceEl.textContent = formatMoney(totals.income - totals.expense, baseCurrency);
  const percent = totals.income > 0 ? (totals.expense / totals.income) * 100 : 0;
  expensePercentEl.textContent = `${percent.toFixed(1)}% от доходов`;
  if (summaryCurrencyNote) {
    const missingText = missingCurrencies.size
      ? ` Не учтены операции без курса: ${[...missingCurrencies].join(", ")}.`
      : "";
    summaryCurrencyNote.textContent = `Показано в ${baseCurrency}.${missingText}`;
  }
};

const getFilteredTransactions = () => {
  const searchValue = transactionFilters.search.toLowerCase();
  return transactions.filter((item) => {
    if (transactionFilters.type !== "all" && item.type !== transactionFilters.type) {
      return false;
    }
    if (transactionFilters.category !== "all" && item.category !== transactionFilters.category) {
      return false;
    }
    if (transactionFilters.dateStart && item.date < transactionFilters.dateStart) {
      return false;
    }
    if (transactionFilters.dateEnd && item.date > transactionFilters.dateEnd) {
      return false;
    }
    if (searchValue) {
      const haystack = `${item.category} ${item.subcategory} ${item.note}`.toLowerCase();
      if (!haystack.includes(searchValue)) {
        return false;
      }
    }
    return true;
  });
};

const sortTransactions = (items) => {
  const sorted = items.slice();
  const direction = transactionFilters.direction === "asc" ? 1 : -1;
  if (transactionFilters.sort === "amount") {
    sorted.sort((a, b) => (a.amount - b.amount) * direction);
  } else {
    sorted.sort((a, b) => (new Date(a.date) - new Date(b.date)) * direction);
  }
  return sorted;
};

const paginateTransactions = (items) => {
  const start = (transactionFilters.page - 1) * transactionFilters.pageSize;
  return items.slice(start, start + transactionFilters.pageSize);
};

const updateTransactionPageInfo = (totalItems) => {
  if (!transactionPageInfo || !transactionPrev || !transactionNext) {
    return;
  }
  const totalPages = Math.max(1, Math.ceil(totalItems / transactionFilters.pageSize));
  if (transactionFilters.page > totalPages) {
    transactionFilters.page = totalPages;
  }
  transactionPageInfo.textContent = `Страница ${transactionFilters.page} из ${totalPages}`;
  transactionPrev.disabled = transactionFilters.page <= 1;
  transactionNext.disabled = transactionFilters.page >= totalPages;
};

const renderTransactionFilterChips = (totalCount, filteredCount) => {
  if (!transactionFilterChips) {
    return;
  }
  const chips = [];
  if (transactionFilters.search) {
    chips.push(`Поиск: ${transactionFilters.search}`);
  }
  if (transactionFilters.type !== "all") {
    chips.push(`Тип: ${formatType(transactionFilters.type)}`);
  }
  if (transactionFilters.category !== "all") {
    chips.push(`Категория: ${transactionFilters.category}`);
  }
  if (transactionFilters.dateStart || transactionFilters.dateEnd) {
    chips.push(`Период: ${transactionFilters.dateStart || "…"} — ${transactionFilters.dateEnd || "…"}`
    );
  }
  if (transactionFilters.sort) {
    const sortLabel = transactionFilters.sort === "amount" ? "Сумма" : "Дата";
    const dirLabel = transactionFilters.direction === "asc" ? "↑" : "↓";
    chips.push(`Сорт.: ${sortLabel} ${dirLabel}`);
  }
  transactionFilterChips.innerHTML = chips.length
    ? chips.map((text) => `<span class="filter-chip">${text}</span>`).join("")
    : "<span class=\"hint\">Фильтры не применены.</span>";

  if (transactionCount) {
    transactionCount.textContent = `Найдено ${filteredCount} из ${totalCount}.`;
  }
};

const renderTransactionFavorites = () => {
  if (!transactionFavorites) {
    return;
  }
  if (!transactions.length) {
    transactionFavorites.innerHTML = "<span class=\"hint\">Нет часто используемых категорий.</span>";
    return;
  }
  const counts = transactions.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
  const topCategories = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name]) => name);
  if (!topCategories.length) {
    transactionFavorites.innerHTML = "<span class=\"hint\">Нет часто используемых категорий.</span>";
    return;
  }
  transactionFavorites.innerHTML = topCategories
    .map((name) => `<button class="chip" data-favorite-category="${name}" type="button">★ ${name}</button>`)
    .join("");
};

const updateTransactionSelectionUI = () => {
  if (transactionDeleteSelected) {
    transactionDeleteSelected.disabled = selectedTransactionIds.size === 0;
  }
  if (transactionClearSelection) {
    transactionClearSelection.disabled = selectedTransactionIds.size === 0;
  }
  if (transactionSelectAll) {
    const allSelected = transactionPageIds.length > 0
      && transactionPageIds.every((id) => selectedTransactionIds.has(id));
    const someSelected = transactionPageIds.some((id) => selectedTransactionIds.has(id));
    transactionSelectAll.checked = allSelected;
    transactionSelectAll.indeterminate = !allSelected && someSelected;
    transactionSelectAll.disabled = transactionPageIds.length === 0;
  }
};

const updateAmountLastHint = () => {
  if (!amountLastHint || !categorySelect) {
    return;
  }
  const category = categorySelect.value;
  const lastAmount = lastAmountByCategory[category];
  if (lastAmount != null) {
    amountLastHint.textContent = `Последняя сумма в категории: ${formatMoney(lastAmount, transactionCurrencySelect?.value || getBaseCurrency())}.`;
  } else {
    amountLastHint.textContent = "";
  }
};

const renderTable = () => {
  tableBody.innerHTML = "";

  if (transactions.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 9;
    cell.textContent = "Пока нет операций. Добавьте первую запись.";
    cell.classList.add("hint");
    row.appendChild(cell);
    tableBody.appendChild(row);
    updateTransactionPageInfo(0);
    renderTransactionFilterChips(0, 0);
    renderTransactionFavorites();
    transactionPageIds = [];
    updateTransactionSelectionUI();
    return;
  }

  const filtered = getFilteredTransactions();
  const sorted = sortTransactions(filtered);
  const totalPages = Math.max(1, Math.ceil(filtered.length / transactionFilters.pageSize));
  if (transactionFilters.page > totalPages) {
    transactionFilters.page = totalPages;
  }
  const paged = paginateTransactions(sorted);
  updateTransactionPageInfo(filtered.length);
  renderTransactionFilterChips(transactions.length, filtered.length);

  if (!paged.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 9;
    cell.textContent = "Нет операций по выбранным фильтрам.";
    cell.classList.add("hint");
    row.appendChild(cell);
    tableBody.appendChild(row);
    renderTransactionFavorites();
    transactionPageIds = [];
    updateTransactionSelectionUI();
    return;
  }

  transactionPageIds = paged.map((item) => item.id);
  paged.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <input class="transaction-select" type="checkbox" data-select-id="${item.id}" ${selectedTransactionIds.has(item.id) ? "checked" : ""} />
      </td>
      <td>${item.date}</td>
      <td><span class="tag ${item.type}">${formatType(item.type)}</span></td>
      <td>${item.category}</td>
      <td>${item.subcategory || "—"}</td>
      <td title="Сводная сумма в базовой валюте рассчитывается в отчетах.">${formatMoney(item.amount, item.currency)}</td>
      <td>${item.currency || getBaseCurrency()}</td>
      <td>${item.note || "—"}</td>
      <td><button class="button secondary" data-id="${item.id}">Удалить</button></td>
    `;
    tableBody.appendChild(row);
  });
  renderTransactionFavorites();
  updateTransactionSelectionUI();
};

const syncTransactionFiltersFromUI = () => {
  if (transactionSearch) {
    transactionFilters.search = transactionSearch.value.trim();
  }
  if (transactionTypeFilter) {
    transactionFilters.type = transactionTypeFilter.value;
  }
  if (transactionCategoryFilter) {
    transactionFilters.category = transactionCategoryFilter.value;
  }
  if (transactionDateStart) {
    transactionFilters.dateStart = transactionDateStart.value;
  }
  if (transactionDateEnd) {
    transactionFilters.dateEnd = transactionDateEnd.value;
  }
  if (transactionSort) {
    transactionFilters.sort = transactionSort.value;
  }
  if (transactionPageSize) {
    transactionFilters.pageSize = Number.parseInt(transactionPageSize.value, 10) || 10;
  }
};

const resetTransactionPage = () => {
  transactionFilters.page = 1;
};

const resetTransactionFilters = () => {
  transactionFilters.search = "";
  transactionFilters.type = "all";
  transactionFilters.category = "all";
  transactionFilters.dateStart = "";
  transactionFilters.dateEnd = "";
  transactionFilters.sort = "date";
  transactionFilters.direction = "desc";
  transactionFilters.page = 1;
  transactionFilters.pageSize = 10;
  selectedTransactionIds.clear();
  syncTransactionFilterControls();
  renderTable();
};

const syncTransactionFilterControls = () => {
  if (transactionSearch) {
    transactionSearch.value = transactionFilters.search;
  }
  if (transactionTypeFilter) {
    transactionTypeFilter.value = transactionFilters.type;
  }
  if (transactionCategoryFilter) {
    transactionCategoryFilter.value = transactionFilters.category;
  }
  if (transactionDateStart) {
    transactionDateStart.value = transactionFilters.dateStart;
  }
  if (transactionDateEnd) {
    transactionDateEnd.value = transactionFilters.dateEnd;
  }
  if (transactionSort) {
    transactionSort.value = transactionFilters.sort;
  }
  if (transactionPageSize) {
    transactionPageSize.value = String(transactionFilters.pageSize);
  }
  if (transactionSortDir) {
    const isAsc = transactionFilters.direction === "asc";
    transactionSortDir.setAttribute("aria-pressed", String(isAsc));
    transactionSortDir.textContent = isAsc ? "По возр." : "По убыв.";
  }
};

const buildTotals = (filterType, source = transactions) => {
  return source
    .filter((item) => (filterType ? item.type === filterType : true))
    .reduce(
      (acc, item) => {
        const { amount, converted } = transactionToBase(item);
        if (!converted) {
          return acc;
        }
        acc[item.category] = (acc[item.category] || 0) + amount;
        return acc;
      },
      {}
    );
};

const buildSubTotals = (type, source = transactions) => {
  return source
    .filter((item) => item.type === type && item.subcategory)
    .reduce(
      (acc, item) => {
        const { amount, converted } = transactionToBase(item);
        if (!converted) {
          return acc;
        }
        const key = `${item.category} · ${item.subcategory}`;
        acc[key] = (acc[key] || 0) + amount;
        return acc;
      },
      {}
    );
};

const renderChart = (container, totals, emptyText, options = {}) => {
  container.innerHTML = "";
  const entries = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  const formatter = options.formatter || currencyFormatter;

  if (entries.length === 0) {
    const empty = document.createElement("p");
    empty.className = "hint";
    empty.textContent = emptyText;
    container.appendChild(empty);
    return;
  }

  const visibleEntries = options.limit ? entries.slice(0, options.limit) : entries;
  const maxValue = visibleEntries[0][1];
  visibleEntries.forEach(([label, value]) => {
    const row = document.createElement("div");
    row.className = "chart-row";

    const legend = document.createElement("div");
    legend.className = "chart-legend";

    const swatch = document.createElement("span");
    swatch.className = "chart-swatch";
    const color = colorForLabel(label);
    swatch.style.background = color;

    const name = document.createElement("span");
    name.textContent = label;

    legend.appendChild(swatch);
    legend.appendChild(name);

    const barWrapper = document.createElement("div");
    barWrapper.className = "chart-bar";

    const bar = document.createElement("span");
    bar.style.width = `${Math.max((value / maxValue) * 100, 6)}%`;
    bar.style.background = color;
    barWrapper.appendChild(bar);

    const amount = document.createElement("strong");
    amount.textContent = formatter.format(value);

    row.appendChild(legend);
    row.appendChild(barWrapper);
    row.appendChild(amount);
    container.appendChild(row);
  });

  if (options.limit && entries.length > options.limit) {
    const note = document.createElement("p");
    note.className = "hint";
    note.textContent = `Показано ${options.limit} из ${entries.length}.`;
    container.appendChild(note);
  }
};

const renderChartSummary = (target, totals, formatter = currencyFormatter) => {
  if (!target) {
    return;
  }
  const entries = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  if (!entries.length) {
    target.textContent = "Нет данных для топ-3.";
    return;
  }
  const topEntries = entries.slice(0, 3);
  const total = entries.reduce((sum, [, value]) => sum + value, 0) || 1;
  const formatValue = typeof formatter === "function"
    ? formatter
    : (value) => formatter.format(value);
  target.innerHTML = topEntries
    .map(([label, value], index) => {
      const share = ((value / total) * 100).toFixed(0);
      const className = index === 0 ? "top-item" : "";
      return `<strong class="${className}">${label}</strong> ${formatValue(value)} (${share}%)`;
    })
    .join(" · ");
};

const buildPie = (totals) => {
  const entries = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  const total = entries.reduce((sum, [, value]) => sum + value, 0);
  if (total === 0) {
    return { entries: [], total };
  }
  return { entries, total };
};

const renderPie = (container, totals, emptyText) => {
  container.innerHTML = "";
  const { entries, total } = buildPie(totals);

  if (entries.length === 0) {
    const empty = document.createElement("p");
    empty.className = "hint";
    empty.textContent = emptyText;
    container.appendChild(empty);
    return;
  }

  const chart = document.createElement("div");
  chart.className = "pie-chart";

  const visual = document.createElement("div");
  visual.className = "pie-visual";

  const ring = document.createElement("div");
  ring.className = "pie-ring";

  let cumulative = 0;
  const segments = entries
    .map(([label, value]) => {
      const start = cumulative;
      const portion = (value / total) * 100;
      cumulative += portion;
      return `${colorForLabel(label)} ${start}% ${cumulative}%`;
    })
    .join(", ");

  ring.style.background = `conic-gradient(${segments})`;

  const totalLabel = document.createElement("div");
  totalLabel.className = "pie-total";
  totalLabel.innerHTML = `<span>Итого</span><strong>${currencyFormatter.format(total)}</strong>`;

  visual.appendChild(ring);
  visual.appendChild(totalLabel);

  const legend = document.createElement("div");
  legend.className = "pie-legend";

  entries.forEach(([label, value]) => {
    const item = document.createElement("div");
    item.className = "pie-legend-item";

    const swatch = document.createElement("span");
    swatch.className = "pie-swatch";
    swatch.style.background = colorForLabel(label);

    const text = document.createElement("div");
    text.innerHTML = `<strong>${label}</strong><span>${currencyFormatter.format(value)}</span>`;

    item.appendChild(swatch);
    item.appendChild(text);
    legend.appendChild(item);
  });

  chart.appendChild(visual);
  chart.appendChild(legend);
  container.appendChild(chart);
};

const renderLineChart = (target, data, formatter = currencyFormatter) => {
  target.innerHTML = "";

  if (data.length === 0) {
    target.innerHTML = "<text x='50%' y='50%' text-anchor='middle' fill='#94a3b8'>Нет данных</text>";
    return;
  }

  const width = 720;
  const height = 260;
  const paddingX = 56;
  const paddingY = 28;
  const chartWidth = width - paddingX * 2;
  const chartHeight = height - paddingY * 2;

  const maxValue = Math.max(
    ...data.map((item) => Math.max(item.income, item.expense, 0)),
    1
  );

  const scaleX = (index) =>
    paddingX + (chartWidth * index) / Math.max(data.length - 1, 1);
  const scaleY = (value) => paddingY + chartHeight - (value / maxValue) * chartHeight;

  const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  background.setAttribute("x", paddingX - 8);
  background.setAttribute("y", paddingY - 8);
  background.setAttribute("width", chartWidth + 16);
  background.setAttribute("height", chartHeight + 16);
  background.setAttribute("fill", "#f8fafc");
  background.setAttribute("rx", "16");

  const drawLine = (values, color) => {
    const points = values
      .map((value, index) => `${scaleX(index)},${scaleY(value)}`)
      .join(" ");
    const line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    line.setAttribute("points", points);
    line.setAttribute("fill", "none");
    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", "3.5");
    line.setAttribute("stroke-linecap", "round");
    return line;
  };

  const drawArea = (values, color) => {
    const points = values.map((value, index) => ({
      x: scaleX(index),
      y: scaleY(value),
    }));
    const baseY = paddingY + chartHeight;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const d = [
      `M ${points[0].x} ${baseY}`,
      `L ${points[0].x} ${points[0].y}`,
      ...points.slice(1).map((pt) => `L ${pt.x} ${pt.y}`),
      `L ${points[points.length - 1].x} ${baseY}`,
      "Z",
    ].join(" ");
    path.setAttribute("d", d);
    path.setAttribute("fill", color);
    path.setAttribute("opacity", "0.12");
    return path;
  };

  const drawPoints = (values, color) => {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    values.forEach((value, index) => {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", scaleX(index));
      circle.setAttribute("cy", scaleY(value));
      circle.setAttribute("r", "4");
      circle.setAttribute("fill", "#fff");
      circle.setAttribute("stroke", color);
      circle.setAttribute("stroke-width", "2");
      group.appendChild(circle);
    });
    return group;
  };

  const grid = document.createElementNS("http://www.w3.org/2000/svg", "g");
  for (let i = 0; i <= 4; i += 1) {
    const y = paddingY + (chartHeight * i) / 4;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", paddingX);
    line.setAttribute("x2", width - paddingX);
    line.setAttribute("y1", y);
    line.setAttribute("y2", y);
    line.setAttribute("stroke", "#e2e8f0");
    line.setAttribute("stroke-dasharray", "4 4");
    grid.appendChild(line);
  }

  const yAxis = document.createElementNS("http://www.w3.org/2000/svg", "g");
  [maxValue, maxValue / 2, 0].forEach((value, index) => {
    const y = paddingY + (chartHeight * index) / 2;
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", paddingX - 12);
    label.setAttribute("y", y + 4);
    label.setAttribute("text-anchor", "end");
    label.setAttribute("fill", "#94a3b8");
    label.setAttribute("font-size", "10");
    label.textContent = formatter.format(value).replace(",00", "");
    yAxis.appendChild(label);
  });

  const axis = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const labelStep = Math.max(1, Math.floor(data.length / 6));
  data.forEach((item, index) => {
    if (index % labelStep !== 0 && index !== data.length - 1) {
      return;
    }
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", scaleX(index));
    label.setAttribute("y", height - 8);
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("fill", "#94a3b8");
    label.setAttribute("font-size", "10");
    label.textContent = item.label;
    axis.appendChild(label);
  });

  const incomeArea = drawArea(data.map((item) => item.income), "#16a34a");
  const expenseArea = drawArea(data.map((item) => item.expense), "#ea580c");
  const incomeLine = drawLine(data.map((item) => item.income), "#16a34a");
  const expenseLine = drawLine(data.map((item) => item.expense), "#ea580c");
  const incomePoints = drawPoints(data.map((item) => item.income), "#16a34a");
  const expensePoints = drawPoints(data.map((item) => item.expense), "#ea580c");

  target.appendChild(background);
  target.appendChild(grid);
  target.appendChild(yAxis);
  target.appendChild(axis);
  target.appendChild(incomeArea);
  target.appendChild(expenseArea);
  target.appendChild(incomeLine);
  target.appendChild(expenseLine);
  target.appendChild(incomePoints);
  target.appendChild(expensePoints);
};

const buildSeries = (formatter, source = transactions) => {
  const dataMap = {};
  source.forEach((item) => {
    const key = formatter(item.date);
    if (!dataMap[key]) {
      dataMap[key] = { income: 0, expense: 0 };
    }
    const { amount, converted } = transactionToBase(item);
    if (!converted) {
      return;
    }
    dataMap[key][item.type] += amount;
  });

  return Object.keys(dataMap)
    .sort()
    .map((label) => ({ label, ...dataMap[label] }));
};

const syncToggleButton = (button, isExpanded, canExpand) => {
  if (!button) {
    return;
  }
  if (!canExpand) {
    button.classList.add("is-hidden");
    button.disabled = true;
  } else {
    button.classList.remove("is-hidden");
    button.disabled = false;
  }
  button.textContent = isExpanded ? "Скрыть" : "Показать все";
};

const renderCharts = () => {
  const incomeSubcategoryTotals = buildSubTotals("income");
  const expenseCategoryTotals = buildTotals("expense");
  const expenseSubcategoryTotals = buildSubTotals("expense");
  const canExpandExpenseCategories =
    Object.keys(expenseCategoryTotals).length > CHART_LIMIT;
  const canExpandExpenseSubcategories =
    Object.keys(expenseSubcategoryTotals).length > CHART_LIMIT;

  if (!canExpandExpenseCategories) {
    showAllExpenseCategories = false;
  }
  if (!canExpandExpenseSubcategories) {
    showAllSubcategories = false;
  }

  const baseCurrency = getBaseCurrency();
  const baseFormatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: baseCurrency,
    minimumFractionDigits: 2,
  });

  renderChart(
    incomeSubcategoryChart,
    incomeSubcategoryTotals,
    "Добавьте доходы с подкатегориями, чтобы увидеть диаграмму.",
    { limit: CHART_LIMIT, formatter: baseFormatter }
  );
  renderChartSummary(incomeSubcategorySummary, incomeSubcategoryTotals, (value) => formatMoney(value, baseCurrency));
  renderChart(
    expenseCategoryChart,
    expenseCategoryTotals,
    "Добавьте расходы, чтобы увидеть диаграмму.",
    { limit: showAllExpenseCategories ? null : CHART_LIMIT, formatter: baseFormatter }
  );
  renderChartSummary(expenseCategorySummary, expenseCategoryTotals, (value) => formatMoney(value, baseCurrency));
  renderChart(
    expenseSubcategoryChart,
    expenseSubcategoryTotals,
    "Добавьте расходы с подкатегориями, чтобы увидеть детализацию.",
    { limit: showAllSubcategories ? null : CHART_LIMIT, formatter: baseFormatter }
  );
  renderChartSummary(expenseSubcategorySummary, expenseSubcategoryTotals, (value) => formatMoney(value, baseCurrency));
  renderPie(
    expensePie,
    expenseCategoryTotals,
    "Добавьте расходы, чтобы увидеть диаграмму."
  );
  renderChartSummary(expensePieSummary, expenseCategoryTotals, (value) => formatMoney(value, baseCurrency));
  renderPie(
    expenseSubcategoryPie,
    expenseSubcategoryTotals,
    "Добавьте расходы с подкатегориями, чтобы увидеть диаграмму."
  );
  renderChartSummary(expenseSubcategoryPieSummary, expenseSubcategoryTotals, (value) => formatMoney(value, baseCurrency));
  renderPie(
    incomePie,
    incomeSubcategoryTotals,
    "Добавьте доходы с подкатегориями, чтобы увидеть диаграмму."
  );
  renderChartSummary(incomePieSummary, incomeSubcategoryTotals, (value) => formatMoney(value, baseCurrency));

  syncToggleButton(toggleExpenseCategoryButton, showAllExpenseCategories, canExpandExpenseCategories);
  syncToggleButton(toggleSubcategoryButton, showAllSubcategories, canExpandExpenseSubcategories);
};

const getCategoryNames = (type) =>
  Object.keys(categories).filter((name) => (type ? categories[name].type === type : true));

const renderCategoryOptions = () => {
  const activeType = document.getElementById("type").value;
  const options = getCategoryNames(activeType).sort();

  categorySelect.innerHTML = "";

  options.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    categorySelect.appendChild(option);
  });

  if (!categorySelect.value && options.length > 0) {
    categorySelect.value = options[0];
  }
  updateSubcategoryOptions(categorySelect.value);
};

const renderCategoryListOptions = () => {
  const activeType = categoryTypeSelect.value;
  const names = getCategoryNames(activeType).sort();
  categoryList.innerHTML = "";
  names.forEach((name) => {
    const listOption = document.createElement("option");
    listOption.value = name;
    categoryList.appendChild(listOption);
  });
};

const renderCategories = () => {
  renderCategoryOptions();
  renderCategoryListOptions();
  renderCategoryManager();
  renderTransactionCategoryFilter();
  updateTransactionFormState();
  updateAmountLastHint();
};

const renderTransactionCategoryFilter = () => {
  if (!transactionCategoryFilter) {
    return;
  }
  const options = ["all", ...Object.keys(categories).sort()];
  transactionCategoryFilter.innerHTML = "";
  options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value === "all" ? "Все" : value;
    transactionCategoryFilter.appendChild(option);
  });
  if (!options.includes(transactionFilters.category)) {
    transactionFilters.category = "all";
  }
  transactionCategoryFilter.value = transactionFilters.category;
};

const updateSubcategoryOptions = (categoryName) => {
  subcategorySelect.innerHTML = "";
  if (!categoryName || !categories[categoryName]) {
    subcategorySelect.disabled = true;
    return;
  }
  const subs = categories[categoryName].subs || [];
  if (subs.length === 0) {
    subcategorySelect.disabled = true;
    return;
  }
  subcategorySelect.disabled = false;
  subs.forEach((sub) => {
    const option = document.createElement("option");
    option.value = sub;
    option.textContent = sub;
    subcategorySelect.appendChild(option);
  });
};

const getDateBounds = (items) => {
  if (!items.length) {
    return { start: "", end: "" };
  }
  const dates = items.map((item) => item.date).sort();
  return { start: dates[0], end: dates[dates.length - 1] };
};

const clampReportRange = (start, end) => {
  if (!start || !end) {
    return { start, end };
  }
  return start > end ? { start: end, end: start } : { start, end };
};

const setReportRange = (start, end) => {
  const clamped = clampReportRange(start, end);
  reportRange = clamped;
  reportStartInput.value = clamped.start || "";
  reportEndInput.value = clamped.end || "";
};

const filterTransactionsByRange = (items) => {
  const { start, end } = reportRange;
  if (!start && !end) {
    return items;
  }
  return items.filter((item) => {
    if (start && item.date < start) {
      return false;
    }
    if (end && item.date > end) {
      return false;
    }
    return true;
  });
};

const weekKey = (date) => {
  const target = new Date(date);
  const day = (target.getUTCDay() + 6) % 7;
  target.setUTCDate(target.getUTCDate() - day + 3);
  const firstThursday = new Date(Date.UTC(target.getUTCFullYear(), 0, 4));
  const weekNumber = 1 + Math.round(((target - firstThursday) / 86400000 - 3) / 7);
  return `${target.getUTCFullYear()}-W${String(weekNumber).padStart(2, "0")}`;
};

const quarterKey = (date) => {
  const year = date.slice(0, 4);
  const month = Number.parseInt(date.slice(5, 7), 10);
  const quarter = Math.ceil(month / 3);
  return `${year}-Q${quarter}`;
};

const getReportFormatter = () => {
  if (reportGranularity === "monthly") {
    return (date) => date.slice(0, 7);
  }
  if (reportGranularity === "weekly") {
    return (date) => weekKey(date);
  }
  if (reportGranularity === "quarterly") {
    return (date) => quarterKey(date);
  }
  return (date) => date;
};

const renderReports = () => {
  const baseCurrency = getBaseCurrency();
  const filtered = filterTransactionsByRange(transactions);
  const missingCurrencies = new Set();
  const totals = filtered.reduce(
    (acc, item) => {
      const { amount, converted } = transactionToBase(item);
      if (!converted) {
        missingCurrencies.add(item.currency);
        return acc;
      }
      if (item.type === "income") {
        acc.income += amount;
      } else {
        acc.expense += amount;
      }
      return acc;
    },
    { income: 0, expense: 0 }
  );

  reportIncomeEl.textContent = formatMoney(totals.income, baseCurrency);
  reportExpenseEl.textContent = formatMoney(totals.expense, baseCurrency);
  reportBalanceEl.textContent = formatMoney(totals.income - totals.expense, baseCurrency);
  reportTransactionsCountEl.textContent = filtered.length;

  if (reportCurrencyNote) {
    reportCurrencyNote.textContent = missingCurrencies.size
      ? `Не учтены операции без курса: ${[...missingCurrencies].join(", ")}.`
      : "";
  }

  const expenseCategoryTotals = buildTotals("expense", filtered);
  const expenseSubcategoryTotals = buildSubTotals("expense", filtered);
  const incomeSubcategoryTotals = buildSubTotals("income", filtered);

  renderChart(
    reportExpenseCategories,
    expenseCategoryTotals,
    "Нет расходов за выбранный период.",
    { limit: 8, formatter: new Intl.NumberFormat("ru-RU", { style: "currency", currency: baseCurrency, minimumFractionDigits: 2 }) }
  );
  renderChartSummary(reportExpenseCategoriesSummary, expenseCategoryTotals, (value) => formatMoney(value, baseCurrency));
  renderChart(
    reportExpenseSubcategories,
    expenseSubcategoryTotals,
    "Нет расходов с подкатегориями за выбранный период.",
    { limit: 8, formatter: new Intl.NumberFormat("ru-RU", { style: "currency", currency: baseCurrency, minimumFractionDigits: 2 }) }
  );
  renderChartSummary(reportExpenseSubcategoriesSummary, expenseSubcategoryTotals, (value) => formatMoney(value, baseCurrency));
  renderChart(
    reportIncomeSubcategories,
    incomeSubcategoryTotals,
    "Нет доходов с подкатегориями за выбранный период.",
    { limit: 8, formatter: new Intl.NumberFormat("ru-RU", { style: "currency", currency: baseCurrency, minimumFractionDigits: 2 }) }
  );
  renderChartSummary(reportIncomeSubcategoriesSummary, incomeSubcategoryTotals, (value) => formatMoney(value, baseCurrency));

  if (reportInsight) {
    const topExpense = Object.entries(expenseCategoryTotals)
      .sort((a, b) => b[1] - a[1])[0];
    const topIncome = Object.entries(incomeSubcategoryTotals)
      .sort((a, b) => b[1] - a[1])[0];
    if (!filtered.length) {
      reportInsight.textContent = "Нет данных за выбранный период — попробуйте расширить диапазон.";
    } else if (topExpense || topIncome) {
      const parts = [];
      if (topExpense) {
        parts.push(`Главный расход: ${topExpense[0]} · ${formatMoney(topExpense[1], baseCurrency)}`);
      }
      if (topIncome) {
        parts.push(`Главный доход: ${topIncome[0]} · ${formatMoney(topIncome[1], baseCurrency)}`);
      }
      reportInsight.textContent = parts.join(". ") + ".";
    } else {
      reportInsight.textContent = "";
    }
  }

  const seriesFormatter = getReportFormatter();
  const series = buildSeries(seriesFormatter, filtered);
  renderLineChart(reportLineChart, series, new Intl.NumberFormat("ru-RU", { style: "currency", currency: baseCurrency, minimumFractionDigits: 2 }));
  if (reportLineSummary) {
    const maxIncome = series.reduce((max, item) => (item.income > max.income ? item : max), { income: 0 });
    const maxExpense = series.reduce((max, item) => (item.expense > max.expense ? item : max), { expense: 0 });
    reportLineSummary.textContent = series.length
      ? `Пик доходов: ${maxIncome.label} · ${formatMoney(maxIncome.income, baseCurrency)}. Пик расходов: ${maxExpense.label} · ${formatMoney(maxExpense.expense, baseCurrency)}.`
      : "Нет данных для динамики.";
  }

  const range = clampReportRange(reportRange.start, reportRange.end);
  if (reportComparison && reportComparisonDetail && range.start && range.end) {
    const startDate = new Date(range.start);
    const endDate = new Date(range.end);
    const days = Math.round((endDate - startDate) / 86400000) + 1;
    const prevEnd = new Date(startDate);
    prevEnd.setDate(prevEnd.getDate() - 1);
    const prevStart = new Date(prevEnd);
    prevStart.setDate(prevEnd.getDate() - (days - 1));
    const prevRange = {
      start: prevStart.toISOString().slice(0, 10),
      end: prevEnd.toISOString().slice(0, 10),
    };
    const prevFiltered = transactions.filter((item) => item.date >= prevRange.start && item.date <= prevRange.end);
    const prevTotals = prevFiltered.reduce(
      (acc, item) => {
        const { amount, converted } = transactionToBase(item);
        if (!converted) {
          return acc;
        }
        if (item.type === "income") {
          acc.income += amount;
        } else {
          acc.expense += amount;
        }
        return acc;
      },
      { income: 0, expense: 0 }
    );
    const incomeDelta = totals.income - prevTotals.income;
    const expenseDelta = totals.expense - prevTotals.expense;
    const incomeArrow = incomeDelta >= 0 ? "↑" : "↓";
    const expenseArrow = expenseDelta >= 0 ? "↑" : "↓";
    reportComparison.textContent = `${incomeArrow} Δ доходы ${formatMoney(incomeDelta, baseCurrency)} · ${expenseArrow} Δ расходы ${formatMoney(expenseDelta, baseCurrency)}`;
    reportComparison.classList.toggle("trend-positive", incomeDelta >= 0 && expenseDelta <= 0);
    reportComparison.classList.toggle("trend-negative", incomeDelta < 0 && expenseDelta > 0);
    reportComparison.classList.toggle("trend-neutral", !(incomeDelta >= 0 && expenseDelta <= 0) && !(incomeDelta < 0 && expenseDelta > 0));
    reportComparisonDetail.textContent = `Период сравнения: ${prevRange.start} — ${prevRange.end}`;
  } else if (reportComparison) {
    reportComparison.textContent = "—";
    reportComparison.classList.remove("trend-positive", "trend-negative", "trend-neutral");
    if (reportComparisonDetail) {
      reportComparisonDetail.textContent = "";
    }
  }
};

const capitalFormatMoney = (value) => {
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: capitalState.settings.baseCurrency,
    minimumFractionDigits: 2,
  });
  return formatter.format(value);
};

const capitalFormatShort = (value) =>
  capitalFormatMoney(value).replace(",00", "");

const capitalNowIso = () => new Date().toISOString();

const capitalGenerateId = (prefix) =>
  (crypto.randomUUID?.() || `${prefix}-${Date.now()}-${Math.random()}`);

const capitalDefaultIcon = (type) => ({
  cash: "💵",
  bank: "🏦",
  deposit: "🧾",
  investment: "📈",
  real_estate: "🏠",
  other: "📦",
}[type] || "💼");

const renderSelfTestPanel = (results) => {
  if (!selfTestPanel) {
    return;
  }
  selfTestPanel.classList.remove("is-hidden");
  selfTestPanel.innerHTML = `
    <strong>Self-test</strong>
    <ul>
      ${results.map((item) => `<li>${item.pass ? "✅" : "❌"} ${item.name}</li>`).join("")}
    </ul>
  `;
};

const selfTest = async () => {
  const results = [];
  const record = (name, pass) => results.push({ name, pass });
  const originalPayload = buildBackupPayload();
  try {
    const baseCurrency = capitalState.settings.baseCurrency;
    const testAssetId = capitalGenerateId("asset");
    capitalState.assets.push({
      id: testAssetId,
      name: "QA Актив",
      type: "cash",
      currency: baseCurrency,
      amount: 1000,
      invested: 900,
      section: "В наличии",
      category: "Наличные",
      subcategory: "QA",
      liquidity: "high",
      expectedProfit: null,
      maturityDate: "",
      note: "selftest",
      icon: "🧪",
      avatarDataUrl: "",
      createdAt: capitalNowIso(),
      updatedAt: capitalNowIso(),
    });
    await saveCapitalV2(capitalState);
    renderCapitalView();
    record("Добавление актива", Boolean(capitalState.assets.find((a) => a.id === testAssetId)));

    const asset = capitalState.assets.find((a) => a.id === testAssetId);
    if (asset) {
      asset.name = "QA Актив (редакт.)";
      asset.updatedAt = capitalNowIso();
    }
    await saveCapitalV2(capitalState);
    renderCapitalView();
    record("Редактирование актива", Boolean(capitalState.assets.find((a) => a.name.includes("редакт"))));

    assetFilters.search = "QA";
    renderCapitalAssets();
    const displayed = capitalAssetsList?.querySelectorAll(".asset-item").length || 0;
    record("Фильтр/сортировка", displayed >= 1);
    assetFilters.search = "";
    renderCapitalAssets();

    capitalState.assets = capitalState.assets.filter((a) => a.id !== testAssetId);
    await saveCapitalV2(capitalState);
    renderCapitalView();
    record("Удаление актива", !capitalState.assets.find((a) => a.id === testAssetId));

    const backup = buildBackupPayload();
    await applyBackupPayload(backup);
    record("Backup/restore", true);
  } catch (error) {
    console.error("Selftest failed", error);
    record("Selftest runtime", false);
  } finally {
    await applyBackupPayload(originalPayload);
    renderCapitalView();
  }
  console.table(results);
  renderSelfTestPanel(results);
};

const dataUrlSizeBytes = (dataUrl) => {
  const base64 = dataUrl.split(",")[1] || "";
  return Math.ceil((base64.length * 3) / 4);
};

const compressImageToDataUrl = async (file) => {
  const bitmap = await createImageBitmap(file);
  const size = 96;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return "";
  }
  const scale = Math.max(size / bitmap.width, size / bitmap.height);
  const width = bitmap.width * scale;
  const height = bitmap.height * scale;
  const dx = (size - width) / 2;
  const dy = (size - height) / 2;
  ctx.drawImage(bitmap, dx, dy, width, height);

  const formats = ["image/webp", "image/jpeg"];
  for (const format of formats) {
    let quality = 0.8;
    while (quality >= 0.5) {
      const dataUrl = canvas.toDataURL(format, quality);
      if (dataUrlSizeBytes(dataUrl) <= 150 * 1024) {
        return dataUrl;
      }
      quality -= 0.1;
    }
  }
  return canvas.toDataURL("image/jpeg", 0.5);
};

const capitalMonthKey = () => new Date().toISOString().slice(0, 7);

const capitalToBase = (value, currency) => {
  if (currency === capitalState.settings.baseCurrency) {
    return value;
  }
  const rate = capitalState.settings.fxRates[currency];
  if (!rate) {
    return null;
  }
  return value * rate;
};

const capitalFxEndpoint = "https://api.exchangerate.host";

const capitalFetchRate = async (base, currency) => {
  const url = `${capitalFxEndpoint}/latest?base=${encodeURIComponent(base)}&symbols=${encodeURIComponent(currency)}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("FX fetch failed");
  }
  const data = await response.json();
  const rate = data?.rates?.[currency];
  if (!rate) {
    throw new Error("No rate");
  }
  return rate;
};

const capitalFetchSeries = async (base, currency) => {
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 29);
  const startDate = start.toISOString().slice(0, 10);
  const endDate = end.toISOString().slice(0, 10);
  const url = `${capitalFxEndpoint}/timeseries?base=${encodeURIComponent(base)}&symbols=${encodeURIComponent(currency)}&start_date=${startDate}&end_date=${endDate}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("FX series fetch failed");
  }
  const data = await response.json();
  const entries = Object.entries(data?.rates || {}).sort(([a], [b]) => a.localeCompare(b));
  return entries.map(([date, rates]) => ({ date, value: rates[currency] })).filter((item) => item.value);
};

const renderFxChart = (series) => {
  if (!capitalFxChart) {
    return;
  }
  capitalFxChart.innerHTML = "";
  if (!series.length) {
    return;
  }
  const values = series.map((item) => item.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const width = 360;
  const height = 120;
  const pad = 12;
  const scaleX = (index) => pad + (index / (series.length - 1 || 1)) * (width - pad * 2);
  const scaleY = (value) => {
    if (max === min) {
      return height / 2;
    }
    const ratio = (value - min) / (max - min);
    return height - pad - ratio * (height - pad * 2);
  };
  const path = series
    .map((item, index) => `${index === 0 ? "M" : "L"}${scaleX(index)},${scaleY(item.value)}`)
    .join(" ");
  const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
  line.setAttribute("d", path);
  line.setAttribute("fill", "none");
  line.setAttribute("stroke", "#2563eb");
  line.setAttribute("stroke-width", "2");
  const area = document.createElementNS("http://www.w3.org/2000/svg", "path");
  area.setAttribute("d", `${path} L${scaleX(series.length - 1)},${height - pad} L${scaleX(0)},${height - pad} Z`);
  area.setAttribute("fill", "rgba(37, 99, 235, 0.12)");
  capitalFxChart.appendChild(area);
  capitalFxChart.appendChild(line);
};

const refreshFxRate = async () => {
  if (!capitalBaseCurrency || !capitalFxCurrency) {
    return;
  }
  const base = capitalBaseCurrency.value.trim().toUpperCase() || "RUB";
  const currency = capitalFxCurrency.value.trim().toUpperCase();
  if (!currency || currency === base) {
    capitalFxRateValue.textContent = "—";
    capitalFxUpdated.textContent = "";
    capitalFxNote.textContent = "";
    renderFxChart([]);
    return;
  }
  capitalFxNote.textContent = "Загружаем курс...";
  try {
    const rate = await capitalFetchRate(base, currency);
    capitalState.settings.baseCurrency = base;
    capitalState.settings.fxRates[currency] = rate;
    saveCapitalV2(capitalState);
    capitalFxRateValue.textContent = rate.toFixed(4);
    capitalFxUpdated.textContent = `на ${new Date().toLocaleDateString("ru-RU")}`;
    capitalFxNote.textContent = "";
    const series = await capitalFetchSeries(base, currency);
    renderFxChart(series);
    renderCapitalView();
  } catch (error) {
    capitalFxNote.textContent = "Не удалось обновить курс. Проверьте соединение.";
  }
};

const ensureFxRateForCurrency = async (currency) => {
  const base = capitalState.settings.baseCurrency;
  const normalized = currency.trim().toUpperCase();
  if (!normalized || normalized === base) {
    return;
  }
  if (capitalState.settings.fxRates[normalized]) {
    return;
  }
  try {
    const rate = await capitalFetchRate(base, normalized);
    capitalState.settings.fxRates[normalized] = rate;
    saveCapitalV2(capitalState);
  } catch (error) {
    // silent: rate can be missing
  }
};

const capitalTotals = () => {
  const missingRates = [];
  const assetsTotal = capitalState.assets.reduce((sum, item) => {
    const converted = capitalToBase(item.amount, item.currency);
    if (converted == null && capitalIsUnconvertible(item)) {
      missingRates.push(item.currency);
      return sum;
    }
    return sum + (converted ?? item.amount);
  }, 0);
  const debtsTotal = capitalState.debts.reduce((sum, item) => {
    const converted = capitalToBase(item.principal, item.currency);
    if (converted == null && item.currency !== capitalState.settings.baseCurrency) {
      missingRates.push(item.currency);
      return sum;
    }
    return sum + (converted ?? item.principal);
  }, 0);
  return { assetsTotal, debtsTotal, netWorth: assetsTotal - debtsTotal, missingRates };
};

const capitalTypeLabel = (type) => ({
  cash: "Наличные",
  bank: "Банк",
  deposit: "Вклад",
  investment: "Инвестиции",
  real_estate: "Недвижимость",
  other: "Другое",
}[type] || type);

const capitalLiquidityLabel = (value) => ({
  high: "Можно вывести сразу",
  medium: "Нужно 1–3 дня",
  low: "Сложно/долго вывести",
  locked: "Заблокировано до даты",
}[value] || value);

const capitalLiquidityShort = (value) => ({
  high: "Сразу",
  medium: "Нужно 1–3 дня",
  low: "Низкая",
  locked: "Заблокировано",
}[value] || value);

const capitalDebtTypeLabel = (value) => ({
  credit_card: "Кредитная карта",
  loan: "Кредит",
  mortgage: "Ипотека",
  personal: "Личный долг",
  other: "Другое",
}[value] || value);

const capitalEnsureSnapshot = () => {
  const month = capitalMonthKey();
  const existing = capitalState.snapshots.find((item) => item.month === month);
  if (existing) {
    return;
  }
  const totals = capitalTotals();
  const last = capitalState.snapshots
    .slice()
    .sort((a, b) => a.month.localeCompare(b.month))
    .pop();
  const delta = last ? totals.netWorth - last.netWorth : 0;
  capitalState.snapshots.push({
    month,
    assetsTotal: totals.assetsTotal,
    debtsTotal: totals.debtsTotal,
    netWorth: totals.netWorth,
    delta,
    note: "",
  });
  saveCapitalV2(capitalState);
};

const renderCapitalSummary = () => {
  const totals = capitalTotals();
  if (capitalAssetsTotal) {
    capitalAssetsTotal.textContent = capitalFormatMoney(totals.assetsTotal);
  }
  if (capitalDebtsTotal) {
    capitalDebtsTotal.textContent = capitalFormatMoney(totals.debtsTotal);
  }
  if (capitalNetWorth) {
    capitalNetWorth.textContent = capitalFormatMoney(totals.netWorth);
  }
  return totals;
};

const renderCapitalLedger = () => {
  if (!capitalLedger) {
    return;
  }
  const totals = capitalTotals();
  capitalLedger.innerHTML = "";
  capitalLedgerTotal.textContent = capitalFormatMoney(totals.assetsTotal);
  capitalLedgerNote.textContent = totals.missingRates.length
    ? `Не учтены суммы без курса: ${[...new Set(totals.missingRates)].join(", ")}.`
    : "";

  const filteredAssets = capitalState.assets.filter((asset) => {
    if (capitalOverviewFilter === "all") {
      return true;
    }
    return asset.liquidity === capitalOverviewFilter;
  });

  if (!filteredAssets.length) {
    capitalLedger.innerHTML = "<p class='hint'>Добавьте активы, чтобы увидеть список.</p>";
    return;
  }

  const header = document.createElement("div");
  header.className = "capital-ledger-row capital-ledger-head";
  header.innerHTML = `
    <div>Актив</div>
    <div class="capital-ledger-amount">Сумма (${capitalState.settings.baseCurrency})</div>
    <div class="capital-ledger-profit">Потенциальная доходность</div>
    <div class="capital-ledger-note">Комментарий</div>
  `;
  capitalLedger.appendChild(header);

  const grouped = new Map();
  filteredAssets.forEach((asset) => {
    const category = asset.category || asset.section || "В наличии";
    if (!grouped.has(category)) {
      grouped.set(category, new Map());
    }
    const subcategory = asset.subcategory || "Без подкатегории";
    if (!grouped.get(category).has(subcategory)) {
      grouped.get(category).set(subcategory, []);
    }
    grouped.get(category).get(subcategory).push(asset);
  });

  grouped.forEach((subcategories, categoryName) => {
    const categoryHeader = document.createElement("div");
    categoryHeader.className = "capital-ledger-section";
    categoryHeader.textContent = categoryName;
    capitalLedger.appendChild(categoryHeader);

    subcategories.forEach((assets, subcategoryName) => {
      const subHeader = document.createElement("div");
      subHeader.className = "capital-ledger-note";
      subHeader.textContent = subcategoryName;
      capitalLedger.appendChild(subHeader);

      assets.forEach((asset) => {
        const converted = capitalToBase(asset.amount, asset.currency);
        const hasRate = converted != null || !capitalIsUnconvertible(asset);
        const amountLabel = hasRate
          ? capitalFormatMoney(converted ?? asset.amount)
          : `нет курса для ${asset.currency}`;

        let profitLabel = "—";
        let profitSubtext = "";
        if (asset.expectedProfit != null && asset.expectedProfit !== "") {
          const profitConverted = capitalToBase(asset.expectedProfit, asset.currency);
          if (profitConverted == null && capitalIsUnconvertible(asset)) {
            profitLabel = `нет курса для ${asset.currency}`;
          } else {
            profitLabel = capitalFormatMoney(profitConverted ?? asset.expectedProfit);
            if (asset.currency !== capitalState.settings.baseCurrency) {
              profitSubtext = `оригинал: ${asset.expectedProfit.toFixed(2)} ${asset.currency}`;
            }
          }
        }

        const row = document.createElement("div");
        row.className = `capital-ledger-row${hasRate ? "" : " is-warning"}`;
        row.innerHTML = `
          <div>
            <div>${asset.name}</div>
            <div class="capital-ledger-meta">
              <span>${asset.category || asset.section || "В наличии"}</span>
              <span>${asset.subcategory || "Без подкатегории"}</span>
              <span>${capitalLiquidityLabel(asset.liquidity)}</span>
            </div>
          </div>
          <div class="capital-ledger-amount">
            ${amountLabel}
            ${asset.currency !== capitalState.settings.baseCurrency && hasRate
              ? `<span>оригинал: ${asset.amount.toFixed(2)} ${asset.currency}</span>`
              : ""}
          </div>
          <div class="capital-ledger-profit">
            ${profitLabel}
            ${asset.maturityDate ? `<span>ожидаемо к ${asset.maturityDate}</span>` : ""}
            ${profitSubtext ? `<span>${profitSubtext}</span>` : ""}
          </div>
          <div class="capital-ledger-note">${asset.note || "—"}</div>
        `;
        capitalLedger.appendChild(row);
      });
    });
  });
};

const renderCapitalStructureCharts = () => {
  if (!capitalAssetTypeChart || !capitalAssetTypePie) {
    return;
  }
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: capitalState.settings.baseCurrency,
    minimumFractionDigits: 2,
  });
  const assetTotals = capitalState.assets.reduce((acc, item) => {
    const converted = capitalToBase(item.amount, item.currency);
    if (converted == null && capitalIsUnconvertible(item)) {
      return acc;
    }
    acc[item.type] = (acc[item.type] || 0) + (converted ?? item.amount);
    return acc;
  }, {});
  renderChart(
    capitalAssetTypeChart,
    assetTotals,
    "Добавьте активы, чтобы увидеть структуру.",
    { limit: 6, formatter }
  );
  renderPie(
    capitalAssetTypePie,
    assetTotals,
    "Добавьте активы, чтобы увидеть структуру."
  );
};

const renderCapitalOverview = () => {
  if (!capitalOverviewBody) {
    return;
  }
  const baseCurrency = capitalState.settings.baseCurrency;
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: baseCurrency,
    minimumFractionDigits: 2,
  });
  capitalOverviewCurrency.textContent = baseCurrency;
  capitalOverviewBody.innerHTML = "";
  capitalOverviewTotal.textContent = formatter.format(0);
  capitalOverviewNote.textContent = "";

  if (!capitalState.assets.length) {
    capitalOverviewBody.innerHTML = "<p class='hint'>Добавьте активы, чтобы увидеть обзор капитала.</p>";
    return;
  }

  const sections = new Map();
  capitalState.assets.forEach((asset) => {
    const section = asset.section || (asset.type === "deposit" ? "Вклады" : "В наличии");
    if (!sections.has(section)) {
      sections.set(section, []);
    }
    sections.get(section).push(asset);
  });

  const sectionOrder = ["В наличии", "Вклады"];
  const orderedSections = [
    ...sectionOrder.filter((section) => sections.has(section)),
    ...[...sections.keys()].filter((section) => !sectionOrder.includes(section)),
  ];

  let grandTotal = 0;
  const missingRates = new Set();

  orderedSections.forEach((section) => {
    const header = document.createElement("div");
    header.className = "capital-overview-section";
    header.textContent = section;
    capitalOverviewBody.appendChild(header);

    let sectionTotal = 0;
    sections.get(section).forEach((asset) => {
      const row = document.createElement("div");
      row.className = "capital-overview-row";

      const nameCell = document.createElement("div");
      nameCell.className = "capital-overview-cell";
      nameCell.textContent = asset.name;

      const amountCell = document.createElement("div");
      amountCell.className = "capital-overview-cell is-amount";

      const amountValue = document.createElement("div");
      amountValue.className = "capital-overview-amount";

      const converted = capitalToBase(asset.amount, asset.currency);
      const hasRate = converted != null || !capitalIsUnconvertible(asset);
      if (hasRate) {
        const amount = converted ?? asset.amount;
        amountValue.textContent = formatter.format(amount);
        sectionTotal += amount;
        grandTotal += amount;
        if (asset.currency !== baseCurrency) {
          const original = document.createElement("div");
          original.className = "capital-overview-subtext";
          original.textContent = `оригинал: ${asset.amount.toFixed(2)} ${asset.currency}`;
          amountCell.appendChild(original);
        }
      } else {
        row.classList.add("is-warning");
        amountValue.textContent = `нет курса для ${asset.currency}`;
        missingRates.add(asset.currency);
      }

      amountCell.prepend(amountValue);

      const noteCell = document.createElement("div");
      noteCell.className = "capital-overview-cell";
      noteCell.textContent = asset.note ? asset.note : "—";

      row.append(nameCell, amountCell, noteCell);
      capitalOverviewBody.appendChild(row);
    });

    const subtotal = document.createElement("div");
    subtotal.className = "capital-overview-row capital-overview-subtotal";
    subtotal.innerHTML = `
      <div class="capital-overview-cell">Итого ${section}</div>
      <div class="capital-overview-cell is-amount">${formatter.format(sectionTotal)}</div>
      <div class="capital-overview-cell"> </div>
    `;
    capitalOverviewBody.appendChild(subtotal);
  });

  capitalOverviewTotal.textContent = formatter.format(grandTotal);
  if (missingRates.size) {
    capitalOverviewNote.textContent = `Не учтены суммы без курса: ${[...missingRates].join(", ")}.`;
  }
};

const renderCapitalOverviewDashboard = () => {
  if (!capitalOverviewTotal || !capitalOverviewAssets || !capitalOverviewGoals) {
    return;
  }
  const totals = capitalTotals();
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: capitalState.settings.baseCurrency,
    minimumFractionDigits: 2,
  });
  capitalOverviewTotal.textContent = formatter.format(totals.assetsTotal);
  if (capitalOverviewReal) {
    capitalOverviewReal.textContent = formatter.format(totals.netWorth);
  }
  if (capitalOverviewDebts) {
    capitalOverviewDebts.textContent = formatter.format(totals.debtsTotal);
  }

  if (capitalOverviewDelta) {
    const sorted = capitalState.snapshots.slice().sort((a, b) => a.month.localeCompare(b.month));
    const last = sorted[sorted.length - 1];
    const prev = sorted[sorted.length - 2];
    if (last && prev && prev.netWorth) {
      const deltaPercent = ((last.netWorth - prev.netWorth) / prev.netWorth) * 100;
      const sign = deltaPercent >= 0 ? "+" : "";
      capitalOverviewDelta.textContent = `${sign}${deltaPercent.toFixed(1)}% за месяц`;
      capitalOverviewDelta.style.color = deltaPercent >= 0 ? "#16a34a" : "#dc2626";
    } else {
      capitalOverviewDelta.textContent = "—";
    }
  }

  capitalOverviewAssets.innerHTML = "";
  const assetRows = capitalState.assets.slice().sort((a, b) => b.amount - a.amount);
  if (!assetRows.length) {
    capitalOverviewAssets.innerHTML = "<p class='hint'>Добавьте активы.</p>";
  } else {
    assetRows.forEach((asset) => {
      const converted = capitalToBase(asset.amount, asset.currency);
      const amountLabel = converted == null && capitalIsUnconvertible(asset)
        ? `нет курса для ${asset.currency}`
        : formatter.format(converted ?? asset.amount);
      const row = document.createElement("div");
      row.className = "capital-overview-row";
      row.innerHTML = `
        <div>
          <strong>${asset.name}</strong>
          <span>${asset.category || asset.section || "В наличии"}</span>
        </div>
        <div>${amountLabel}</div>
      `;
      capitalOverviewAssets.appendChild(row);
    });
  }

  capitalOverviewGoals.innerHTML = "";
  if (!capitalState.goals.length) {
    capitalOverviewGoals.innerHTML = "<p class='hint'>Добавьте финансовые цели.</p>";
  } else {
    capitalState.goals.forEach((goal) => {
      const current = goalProgress(goal);
      const percent = goal.targetAmount ? Math.min(100, (current / goal.targetAmount) * 100) : 0;
      const goalRow = document.createElement("div");
      goalRow.className = "capital-goal";
      goalRow.innerHTML = `
        <div class="capital-overview-row">
          <div>
            <strong>${goal.name}</strong>
            <span>${goal.targetDate}</span>
          </div>
          <div>${percent.toFixed(0)}%</div>
        </div>
        <div class="capital-goal-bar"><span style="width:${percent}%"></span></div>
        <div class="capital-overview-row">
          <span>Цель</span>
          <strong>${formatter.format(goal.targetAmount)}</strong>
        </div>
        <div class="capital-overview-row">
          <span>Факт</span>
          <strong>${formatter.format(current)}</strong>
        </div>
      `;
      capitalOverviewGoals.appendChild(goalRow);
    });
  }

  if (capitalOverviewSnapshots) {
    capitalOverviewSnapshots.innerHTML = "";
    const snapshots = capitalState.snapshots.slice().sort((a, b) => b.month.localeCompare(a.month)).slice(0, 4);
    if (!snapshots.length) {
      capitalOverviewSnapshots.innerHTML = "<p class='hint'>Нет снимков капитала.</p>";
    } else {
      snapshots.forEach((item) => {
        const row = document.createElement("div");
        row.className = "capital-overview-row";
        const deltaLabel = item.delta ? `${item.delta > 0 ? "+" : ""}${formatter.format(item.delta)}` : "—";
        row.innerHTML = `
          <div>
            <strong>${item.month}</strong>
            <span>${deltaLabel}</span>
          </div>
          <div>${formatter.format(item.netWorth)}</div>
        `;
        capitalOverviewSnapshots.appendChild(row);
      });
    }
  }

  if (capitalOverviewDebtsList) {
    capitalOverviewDebtsList.innerHTML = "";
    if (!capitalState.debts.length) {
      capitalOverviewDebtsList.innerHTML = "<p class='hint'>Долгов нет.</p>";
    } else {
      capitalState.debts.forEach((debt) => {
        const converted = capitalToBase(debt.principal, debt.currency);
        const amountLabel = converted == null && debt.currency !== capitalState.settings.baseCurrency
          ? `нет курса для ${debt.currency}`
          : formatter.format(converted ?? debt.principal);
        const row = document.createElement("div");
        row.className = "capital-overview-row";
        row.innerHTML = `
          <div>
            <strong>${debt.name}</strong>
            <span>${capitalDebtTypeLabel(debt.type)}</span>
          </div>
          <div>${amountLabel}</div>
        `;
        capitalOverviewDebtsList.appendChild(row);
      });
    }
  }
};

const capitalizeAssetCategories = () =>
  capitalState.assetCategories
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "ru"));

const capitalEnsureCategory = (name, subcategory = "") => {
  const trimmed = name.trim();
  if (!trimmed) {
    return;
  }
  const existing = capitalState.assetCategories.find((category) => category.name === trimmed);
  if (!existing) {
    capitalState.assetCategories.push({
      name: trimmed,
      subs: subcategory ? [subcategory.trim()] : [],
    });
    return;
  }
  const sub = subcategory.trim();
  if (sub && !existing.subs.includes(sub)) {
    existing.subs.push(sub);
  }
};

const renameCapitalCategory = (currentName, nextName) => {
  const trimmed = nextName.trim();
  if (!trimmed) {
    showError("Название категории не может быть пустым.");
    return;
  }
  if (capitalState.assetCategories.some((category) => category.name === trimmed)) {
    showError("Категория с таким именем уже существует.");
    return;
  }
  const category = capitalState.assetCategories.find((item) => item.name === currentName);
  if (!category) {
    return;
  }
  category.name = trimmed;
  capitalState.assets.forEach((asset) => {
    if (asset.category === currentName) {
      asset.category = trimmed;
    }
  });
  saveCapitalV2(capitalState);
  renderCapitalCategories();
  renderCapitalAssets();
};

const renameCapitalSubcategory = (categoryName, currentName, nextName) => {
  const trimmed = nextName.trim();
  if (!trimmed) {
    showError("Название подкатегории не может быть пустым.");
    return;
  }
  const category = capitalState.assetCategories.find((item) => item.name === categoryName);
  if (!category) {
    return;
  }
  if (category.subs.includes(trimmed)) {
    showError("Подкатегория с таким именем уже существует.");
    return;
  }
  category.subs = category.subs.map((sub) => (sub === currentName ? trimmed : sub));
  capitalState.assets.forEach((asset) => {
    if (asset.category === categoryName && asset.subcategory === currentName) {
      asset.subcategory = trimmed;
    }
  });
  saveCapitalV2(capitalState);
  renderCapitalCategories();
  renderCapitalAssets();
};

const deleteCapitalCategory = (categoryName) => {
  const fallback = "Без категории";
  capitalState.assetCategories = capitalState.assetCategories.filter((category) => category.name !== categoryName);
  capitalState.assets.forEach((asset) => {
    if (asset.category === categoryName) {
      asset.category = fallback;
    }
  });
  capitalEnsureCategory(fallback);
  saveCapitalV2(capitalState);
  renderCapitalCategories();
  renderCapitalAssets();
};

const deleteCapitalSubcategory = (categoryName, subcategoryName) => {
  const category = capitalState.assetCategories.find((item) => item.name === categoryName);
  if (!category) {
    return;
  }
  category.subs = category.subs.filter((sub) => sub !== subcategoryName);
  capitalState.assets.forEach((asset) => {
    if (asset.category === categoryName && asset.subcategory === subcategoryName) {
      asset.subcategory = "";
    }
  });
  saveCapitalV2(capitalState);
  renderCapitalCategories();
  renderCapitalAssets();
};

const moveCapitalSubcategory = (fromCategory, subName, toCategory) => {
  if (fromCategory === toCategory) {
    return;
  }
  const from = capitalState.assetCategories.find((item) => item.name === fromCategory);
  const to = capitalState.assetCategories.find((item) => item.name === toCategory);
  if (!from || !to) {
    return;
  }
  from.subs = from.subs.filter((sub) => sub !== subName);
  if (!to.subs.includes(subName)) {
    to.subs.push(subName);
  }
  capitalState.assets.forEach((asset) => {
    if (asset.category === fromCategory && asset.subcategory === subName) {
      asset.category = toCategory;
    }
  });
  saveCapitalV2(capitalState);
  renderCapitalCategories();
  renderCapitalAssets();
};

const moveCapitalCategoryToCategory = (fromCategory, toCategory) => {
  if (fromCategory === toCategory) {
    return;
  }
  const from = capitalState.assetCategories.find((item) => item.name === fromCategory);
  const to = capitalState.assetCategories.find((item) => item.name === toCategory);
  if (!from || !to) {
    return;
  }
  const merged = [...new Set([...to.subs, fromCategory, ...from.subs])];
  to.subs = merged;
  capitalState.assetCategories = capitalState.assetCategories.filter((item) => item.name !== fromCategory);
  capitalState.assets.forEach((asset) => {
    if (asset.category !== fromCategory) {
      return;
    }
    const nextSubcategory = asset.subcategory || fromCategory;
    asset.category = toCategory;
    asset.subcategory = nextSubcategory;
  });
  saveCapitalV2(capitalState);
  renderCapitalCategories();
  renderCapitalAssets();
};

const promoteCapitalSubcategoryToCategory = (fromCategory, subName) => {
  if (capitalState.assetCategories.some((item) => item.name === subName)) {
    return;
  }
  const from = capitalState.assetCategories.find((item) => item.name === fromCategory);
  if (!from) {
    return;
  }
  from.subs = from.subs.filter((sub) => sub !== subName);
  capitalState.assetCategories.push({ name: subName, subs: [] });
  capitalState.assets.forEach((asset) => {
    if (asset.category === fromCategory && asset.subcategory === subName) {
      asset.category = subName;
      asset.subcategory = "";
    }
  });
  saveCapitalV2(capitalState);
  renderCapitalCategories();
  renderCapitalAssets();
};

const renderCapitalCategories = () => {
  if (!capitalCategoryManager) {
    return;
  }
  capitalCategoryManager.innerHTML = "";
  capitalSubcategoryList.innerHTML = "";

  const sorted = capitalizeAssetCategories();
  sorted.forEach((category) => {
    category.subs.forEach((sub) => {
      const subOption = document.createElement("option");
      subOption.value = sub;
      capitalSubcategoryList.appendChild(subOption);
    });

    const card = document.createElement("div");
    card.className = "category-card";
    card.dataset.category = category.name;
    card.draggable = true;

    const header = document.createElement("div");
    header.className = "category-card-header";

    const title = document.createElement("div");
    title.innerHTML = `<strong>${category.name}</strong><span class="subcategory-count">${category.subs.length} подкатегорий</span>`;

    const badge = document.createElement("span");
    badge.className = "type-badge capital";
    badge.textContent = "Капитал";

    const actions = document.createElement("div");
    actions.className = "category-actions";

    const renameBtn = document.createElement("button");
    renameBtn.className = "chip";
    renameBtn.textContent = "Переименовать";
    renameBtn.dataset.capitalAction = "rename-category";
    renameBtn.dataset.capitalCategory = category.name;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "chip danger";
    deleteBtn.textContent = "Удалить";
    deleteBtn.dataset.capitalAction = "delete-category";
    deleteBtn.dataset.capitalCategory = category.name;

    actions.appendChild(renameBtn);
    actions.appendChild(deleteBtn);
    header.appendChild(title);
    header.appendChild(badge);
    header.appendChild(actions);

    const list = document.createElement("div");
    list.className = "subcategory-list";
    list.dataset.capitalDropzone = category.name;

    if (!category.subs.length) {
      const empty = document.createElement("p");
      empty.className = "hint";
      empty.textContent = "Нет подкатегорий";
      list.appendChild(empty);
    }

    category.subs.forEach((sub) => {
      const row = document.createElement("div");
      row.className = "subcategory-row";
      row.dataset.category = category.name;
      row.dataset.subcategory = sub;
      row.draggable = true;

      const name = document.createElement("span");
      name.textContent = sub;

      const tools = document.createElement("div");
      tools.className = "subcategory-tools";

      const editBtn = document.createElement("button");
      editBtn.className = "chip";
      editBtn.textContent = "Редактировать";
      editBtn.dataset.capitalAction = "rename-subcategory";
      editBtn.dataset.capitalCategory = category.name;
      editBtn.dataset.capitalSubcategory = sub;

      const removeBtn = document.createElement("button");
      removeBtn.className = "chip danger";
      removeBtn.textContent = "Удалить";
      removeBtn.dataset.capitalAction = "delete-subcategory";
      removeBtn.dataset.capitalCategory = category.name;
      removeBtn.dataset.capitalSubcategory = sub;

      tools.appendChild(editBtn);
      tools.appendChild(removeBtn);
      row.appendChild(name);
      row.appendChild(tools);
      list.appendChild(row);
    });

    card.appendChild(header);
    card.appendChild(list);
    capitalCategoryManager.appendChild(card);
  });
};

const renderCapitalAssets = () => {
  if (!capitalAssetsList) {
    return;
  }
  capitalAssetsList.innerHTML = "";
  const items = capitalState.assets || [];

  const buildFilterOptions = () => {
    if (capitalAssetTypeFilter) {
      const types = new Set(items.map((item) => item.type));
      capitalAssetTypeFilter.innerHTML = "<option value='all'>Все типы</option>";
      [...types].forEach((type) => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = capitalTypeLabel(type) || type;
        capitalAssetTypeFilter.appendChild(option);
      });
      capitalAssetTypeFilter.value = assetFilters.type;
    }
    if (capitalAssetLiquidityFilter) {
      const liquidityValues = new Set(items.map((item) => item.liquidity || "high"));
      capitalAssetLiquidityFilter.innerHTML = "<option value='all'>Вся ликвидность</option>";
      [...liquidityValues].forEach((value) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = capitalLiquidityShort(value);
        capitalAssetLiquidityFilter.appendChild(option);
      });
      capitalAssetLiquidityFilter.value = assetFilters.liquidity;
    }
  };
  if (capitalAssetSortDir) {
    capitalAssetSortDir.textContent = assetFilters.direction === "asc" ? "По возр." : "По убыв.";
    capitalAssetSortDir.setAttribute("aria-pressed", assetFilters.direction === "asc" ? "true" : "false");
  }
  if (capitalAssetMissingRate) {
    capitalAssetMissingRate.setAttribute("aria-pressed", assetFilters.missingRateOnly ? "true" : "false");
    capitalAssetMissingRate.classList.toggle("is-active", assetFilters.missingRateOnly);
  }
  if (capitalAssetSearch) {
    capitalAssetSearch.value = assetFilters.search;
  }

  const assetValueInBase = (asset, field) => {
    const value = field === "invested" ? (asset.invested ?? asset.amount ?? 0) : asset.amount;
    const converted = capitalToBase(value, asset.currency);
    if (converted == null && capitalIsUnconvertible(asset)) {
      return null;
    }
    return converted ?? value;
  };

  const getProfitMeta = (amount, invested) => {
    const profit = amount - invested;
    const percent = invested > 0 ? (profit / invested) * 100 : null;
    const isValid = Number.isFinite(percent) && Math.abs(percent) <= 999;
    return { profit, percent: isValid ? percent : null, needsCheck: !isValid };
  };

  const filterAssets = items.filter((asset) => {
    if (assetFilters.type !== "all" && asset.type !== assetFilters.type) {
      return false;
    }
    if (assetFilters.liquidity !== "all" && asset.liquidity !== assetFilters.liquidity) {
      return false;
    }
    if (assetFilters.missingRateOnly) {
      const amountBase = assetValueInBase(asset, "amount");
      const investedBase = assetValueInBase(asset, "invested");
      if (amountBase != null && investedBase != null) {
        return false;
      }
    }
    if (assetFilters.search) {
      const haystack = `${asset.name} ${asset.note || ""}`.toLowerCase();
      if (!haystack.includes(assetFilters.search)) {
        return false;
      }
    }
    return true;
  });

  const sortedAssets = filterAssets.slice().sort((a, b) => {
    const direction = assetFilters.direction === "asc" ? 1 : -1;
    if (assetFilters.sort === "name") {
      return direction * a.name.localeCompare(b.name);
    }
    if (assetFilters.sort === "invested") {
      return direction * ((assetValueInBase(a, "invested") ?? 0) - (assetValueInBase(b, "invested") ?? 0));
    }
    if (assetFilters.sort === "profit") {
      const aProfit = (assetValueInBase(a, "amount") ?? 0) - (assetValueInBase(a, "invested") ?? 0);
      const bProfit = (assetValueInBase(b, "amount") ?? 0) - (assetValueInBase(b, "invested") ?? 0);
      return direction * (aProfit - bProfit);
    }
    return direction * ((assetValueInBase(a, "amount") ?? 0) - (assetValueInBase(b, "amount") ?? 0));
  });

  if (capitalAssetShown) {
    capitalAssetShown.textContent = `Показано: ${sortedAssets.length}`;
  }

  const totals = sortedAssets.reduce(
    (acc, asset) => {
      const amount = assetValueInBase(asset, "amount");
      const invested = assetValueInBase(asset, "invested");
      if (amount != null) {
        acc.amount += amount;
      }
      if (invested != null) {
        acc.invested += invested;
      }
      return acc;
    },
    { amount: 0, invested: 0 }
  );
  const totalMeta = getProfitMeta(totals.amount, totals.invested);
  if (capitalAssetsSummaryTotal) {
    capitalAssetsSummaryTotal.textContent = capitalFormatMoney(totals.amount);
  }
  if (capitalAssetsSummaryInvested) {
    capitalAssetsSummaryInvested.textContent = capitalFormatMoney(totals.invested);
  }
  if (capitalAssetsSummaryProfit) {
    capitalAssetsSummaryProfit.textContent = capitalFormatMoney(totalMeta.profit);
    capitalAssetsSummaryProfit.classList.toggle("is-negative", totalMeta.profit < 0);
  }
  if (capitalAssetsSummaryPercent) {
    if (totalMeta.percent == null) {
      capitalAssetsSummaryPercent.textContent = "—";
      capitalAssetsSummaryPercent.classList.add("is-warning");
    } else {
      capitalAssetsSummaryPercent.textContent = `${totalMeta.percent.toFixed(1)}%`;
      capitalAssetsSummaryPercent.classList.remove("is-warning");
    }
  }
  if (capitalAssetsSummaryWarning) {
    capitalAssetsSummaryWarning.classList.toggle("is-hidden", totalMeta.percent != null);
  }

  buildFilterOptions();

  if (!sortedAssets.length) {
    capitalAssetsList.innerHTML = `
      <div class="asset-empty">
        <p>Нет активов по выбранным фильтрам.</p>
        <button class="button secondary" data-action="add-asset">Добавить актив</button>
      </div>
    `;
    return;
  }

  const grouped = new Map();
  sortedAssets.forEach((asset) => {
    const typeLabel = capitalTypeLabel(asset.type) || "Без типа";
    if (!grouped.has(typeLabel)) {
      grouped.set(typeLabel, new Map());
    }
    const subcategory = asset.subcategory || "Без подкатегории";
    if (!grouped.get(typeLabel).has(subcategory)) {
      grouped.get(typeLabel).set(subcategory, []);
    }
    grouped.get(typeLabel).get(subcategory).push(asset);
  });

  const renderGroupTotals = (assets) => {
    return assets.reduce(
      (acc, asset) => {
        const amount = assetValueInBase(asset, "amount");
        const invested = assetValueInBase(asset, "invested");
        acc.amount += amount ?? 0;
        acc.invested += invested ?? 0;
        return acc;
      },
      { amount: 0, invested: 0 }
    );
  };

  grouped.forEach((subcategories, groupName) => {
    const groupAssets = [...subcategories.values()].flat();
    const totalsGroup = renderGroupTotals(groupAssets);
    const groupMeta = getProfitMeta(totalsGroup.amount, totalsGroup.invested);
    const isGroupOpen = assetUiState.groups[groupName] ?? true;
    const groupCard = document.createElement("div");
    groupCard.className = "asset-group";
    groupCard.innerHTML = `
      <div class="asset-group-header">
        <div>
          <h4>${groupName}</h4>
          <span class="asset-count">${groupAssets.length} актив(а)</span>
        </div>
        <button class="chip" data-action="toggle-group" data-group="${groupName}" aria-expanded="${isGroupOpen}">
          ${isGroupOpen ? "Свернуть" : "Развернуть"}
        </button>
        <div class="asset-group-totals">
          <strong>${capitalFormatMoney(totalsGroup.amount)}</strong>
          <span class="asset-profit ${groupMeta.profit < 0 ? "is-negative" : ""}">
            ${capitalFormatMoney(groupMeta.profit)}
          </span>
        </div>
      </div>
    `;

    const subgroupContainer = document.createElement("div");
    subgroupContainer.className = `asset-subgroup-list${isGroupOpen ? "" : " is-collapsed"}`;

    subcategories.forEach((assets, subcategoryName) => {
      const totalsSub = renderGroupTotals(assets);
      const subMeta = getProfitMeta(totalsSub.amount, totalsSub.invested);
      const subKey = `${groupName}::${subcategoryName}`;
      const isSubOpen = assetUiState.subgroups[subKey] ?? true;
      const subSection = document.createElement("div");
      subSection.className = "asset-subgroup";
      subSection.innerHTML = `
        <div class="asset-subgroup-header">
          <div>
            <h5>${subcategoryName}</h5>
            <span class="asset-count">${assets.length} актив(а)</span>
          </div>
          <button class="chip" data-action="toggle-subgroup" data-group="${groupName}" data-subgroup="${subcategoryName}" aria-expanded="${isSubOpen}">
            ${isSubOpen ? "Свернуть" : "Развернуть"}
          </button>
          <div class="asset-group-totals">
            <strong>${capitalFormatMoney(totalsSub.amount)}</strong>
            <span class="asset-profit ${subMeta.profit < 0 ? "is-negative" : ""}">
              ${capitalFormatMoney(subMeta.profit)}
            </span>
          </div>
        </div>
      `;

      const list = document.createElement("div");
      list.className = `asset-items${isSubOpen ? "" : " is-collapsed"}`;

      assets.forEach((asset) => {
        const amountBase = assetValueInBase(asset, "amount");
        const investedBase = assetValueInBase(asset, "invested");
        const amountLabel = amountBase == null
          ? `нет курса для ${asset.currency}`
          : capitalFormatMoney(amountBase);
        const investedLabel = investedBase == null
          ? `нет курса`
          : capitalFormatMoney(investedBase);
        const profitMeta = getProfitMeta(amountBase ?? 0, investedBase ?? 0);
        const profitLabel = amountBase == null || investedBase == null
          ? "—"
          : capitalFormatMoney(profitMeta.profit);
        const percentLabel = profitMeta.percent == null ? "—" : `${profitMeta.percent.toFixed(1)}%`;
        const hasRate = amountBase != null && investedBase != null;
        const showPercentWarning = profitMeta.percent == null && hasRate;
        const liquidityLabel = capitalLiquidityShort(asset.liquidity);
        const iconLetter = (asset.name || "?").trim().charAt(0).toUpperCase();
        const iconValue = asset.icon || capitalDefaultIcon(asset.type);
        const avatarMarkup = asset.avatarDataUrl
          ? `<img src="${asset.avatarDataUrl}" alt="" />`
          : `<span>${iconValue || iconLetter}</span>`;
        const detailId = `asset-details-${asset.id}`;
        const missingRateChip = hasRate ? "" : "<span class='chip chip-missing'>нет курса</span>";

        const card = document.createElement("div");
        card.className = "asset-item";
        card.dataset.assetId = asset.id;
        card.innerHTML = `
          <div class="asset-item-main" data-action="toggle" role="button" tabindex="0" aria-expanded="false" aria-controls="${detailId}">
            <span class="asset-avatar">${avatarMarkup}</span>
            <span class="asset-main">
              <span class="asset-title">${asset.name}</span>
              <span class="asset-meta">${capitalTypeLabel(asset.type)} • ${asset.currency}</span>
            </span>
            <span class="asset-values">
              <span class="asset-amount">${amountLabel}</span>
              <span class="asset-invested">вложено ${investedLabel}</span>
              ${missingRateChip}
            </span>
            <span class="asset-profit-block">
              <span class="asset-profit ${profitMeta.profit < 0 ? "is-negative" : ""}">${profitLabel}</span>
              <span class="asset-profit-percent ${showPercentWarning ? "is-warning" : ""}">
                ${percentLabel}
              </span>
              ${showPercentWarning ? "<span class='asset-warning'>проверь данные</span><span class='chip chip-warning'>проверить</span>" : ""}
            </span>
            <span class="chip chip-liquidity">${liquidityLabel}</span>
            <span class="asset-quick-actions">
              <button class="chip" data-action="edit-asset" data-id="${asset.id}" type="button" aria-label="Редактировать">✎</button>
              <button class="chip danger" data-action="delete-asset" data-id="${asset.id}" type="button" aria-label="Удалить">🗑</button>
            </span>
            <span class="chevron">›</span>
          </div>
          <div id="${detailId}" class="asset-details">
            <div class="asset-detail-grid">
              <div class="asset-detail-row">
                <span>Дата окончания</span>
                <strong>${asset.maturityDate || "—"}</strong>
              </div>
              <div class="asset-detail-row">
                <span>Потенц. доходность</span>
                <strong>${asset.expectedProfit != null && asset.expectedProfit !== "" ? asset.expectedProfit : "—"}</strong>
              </div>
              <div class="asset-detail-row">
                <span>Комментарий</span>
                <strong>${asset.note || "—"}</strong>
              </div>
              <div class="asset-detail-row">
                <span>Валюта</span>
                <strong>${asset.currency}</strong>
              </div>
            </div>
            <div class="asset-detail-actions">
              <button class="button secondary" data-action="edit-asset" data-id="${asset.id}">Редактировать</button>
              <button class="button danger" data-action="delete-asset" data-id="${asset.id}">Удалить</button>
            </div>
          </div>
        `;
        list.appendChild(card);
      });

      subSection.appendChild(list);
      subgroupContainer.appendChild(subSection);
    });

    groupCard.appendChild(subgroupContainer);
    capitalAssetsList.appendChild(groupCard);
  });
};

const debtMetrics = () => {
  const debts = capitalState.debts;
  if (!debts.length) {
    return { weightedApr: 0, highestAprLabel: "—", interestMonthly: 0 };
  }
  const totalPrincipal = debts.reduce((sum, item) => sum + item.principal, 0);
  const weighted = debts.reduce((sum, item) => {
    const rate = item.apr ?? 0;
    return sum + item.principal * rate;
  }, 0);
  const weightedApr = totalPrincipal ? weighted / totalPrincipal : 0;
  const highest = debts.reduce((prev, curr) => ((curr.apr ?? 0) > (prev.apr ?? 0) ? curr : prev), debts[0]);
  const interestMonthly = debts.reduce((sum, item) => {
    const rate = item.apr ?? 0;
    return sum + (item.principal * rate) / 100 / 12;
  }, 0);
  return {
    weightedApr,
    highestAprLabel: highest ? `${highest.name} (${highest.apr ?? 0}%)` : "—",
    interestMonthly,
  };
};

const renderCapitalDebts = () => {
  capitalDebtsTable.innerHTML = "";
  if (!capitalState.debts.length) {
    const row = document.createElement("tr");
    row.innerHTML = "<td colspan='9' class='hint'>Добавьте первый долг.</td>";
    capitalDebtsTable.appendChild(row);
  } else {
    capitalState.debts.forEach((item) => {
      const row = document.createElement("tr");
      row.dataset.debtId = item.id;
      row.innerHTML = `
        <td><input type="text" value="${item.name}" data-field="name" /></td>
        <td>
          <select data-field="type">
            ${["credit_card", "loan", "mortgage", "personal", "other"]
              .map((value) => `<option value="${value}" ${value === item.type ? "selected" : ""}>${capitalDebtTypeLabel(value)}</option>`)
              .join("")}
          </select>
        </td>
        <td><input type="text" value="${item.currency}" data-field="currency" maxlength="3" /></td>
        <td><input type="number" value="${item.principal}" data-field="principal" step="0.01" /></td>
        <td><input type="number" value="${item.apr ?? ""}" data-field="apr" step="0.01" /></td>
        <td><input type="number" value="${item.paymentMin ?? ""}" data-field="paymentMin" step="0.01" /></td>
        <td><input type="number" value="${item.dueDay ?? ""}" data-field="dueDay" step="1" min="1" max="31" /></td>
        <td><input type="text" value="${item.note || ""}" data-field="note" /></td>
        <td><button class="button secondary" data-debt-delete="${item.id}">Удалить</button></td>
      `;
      capitalDebtsTable.appendChild(row);
    });
  }

  const metrics = debtMetrics();
  capitalWeightedApr.textContent = `${metrics.weightedApr.toFixed(2)}%`;
  capitalHighestApr.textContent = metrics.highestAprLabel;
  capitalInterestMonthly.textContent = capitalFormatMoney(metrics.interestMonthly);
};

const estimatePayoffMonths = (principal, apr, payment) => {
  let balance = principal;
  let months = 0;
  while (balance > 0 && months < 600) {
    const interest = (balance * (apr ?? 0)) / 100 / 12;
    const applied = Math.max(payment - interest, 0);
    if (applied === 0) {
      return null;
    }
    balance = Math.max(balance - applied, 0);
    months += 1;
  }
  return months;
};

const buildPayoffPlan = (strategy) => {
  const extra = Number.parseFloat(capitalExtraPayment.value) || 0;
  const debts = capitalState.debts
    .map((item) => ({ ...item }))
    .sort((a, b) => {
      if (strategy === "avalanche") {
        return (b.apr ?? 0) - (a.apr ?? 0);
      }
      return a.principal - b.principal;
    });
  return debts.map((item, index) => {
    const payment = (item.paymentMin ?? 0) + (index === 0 ? extra : 0);
    const months = estimatePayoffMonths(item.principal, item.apr ?? 0, payment);
    return {
      strategy,
      name: item.name,
      months: months == null ? "∞" : months,
      note: index === 0 && extra > 0 ? "С доп. платежом" : "Мин. платеж",
    };
  });
};

const renderCapitalPayoff = () => {
  const plans = [...buildPayoffPlan("avalanche"), ...buildPayoffPlan("snowball")];
  capitalPayoffTable.innerHTML = "";
  if (!plans.length) {
    capitalPayoffTable.innerHTML = "<tr><td colspan='4' class='hint'>Добавьте долги.</td></tr>";
    return;
  }
  plans.forEach((plan) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${plan.strategy === "avalanche" ? "Лавина" : "Снежный ком"}</td>
      <td>${plan.name}</td>
      <td>${plan.months}</td>
      <td>${plan.note}</td>
    `;
    capitalPayoffTable.appendChild(row);
  });
};

const goalProgress = (goal) => {
  const totals = capitalTotals();
  if (goal.kind === "netWorth") {
    return totals.netWorth;
  }
  if (goal.kind === "assetBucket") {
    const matched = capitalState.assets.filter((item) => item.type === goal.name);
    return matched.reduce((sum, item) => sum + (capitalToBase(item.amount, item.currency) ?? 0), 0);
  }
  if (goal.kind === "debtPayoff") {
    return totals.debtsTotal;
  }
  return 0;
};

const goalMonthlyDelta = (goal) => {
  const now = new Date();
  const target = new Date(`${goal.targetDate}-01`);
  const months = Math.max(1, (target.getFullYear() - now.getFullYear()) * 12 + target.getMonth() - now.getMonth());
  const current = goalProgress(goal);
  return (goal.targetAmount - current) / months;
};

const goalStatus = (goal) => {
  const snapshots = capitalState.snapshots
    .slice()
    .sort((a, b) => a.month.localeCompare(b.month));
  const recent = snapshots.slice(-3);
  if (recent.length < 2) {
    return "нет данных";
  }
  const metric = goal.kind === "debtPayoff"
    ? "debtsTotal"
    : goal.kind === "assetBucket"
      ? "assetsTotal"
      : "netWorth";
  const delta = recent[recent.length - 1][metric] - recent[0][metric];
  const avg = delta / (recent.length - 1);
  const required = goalMonthlyDelta(goal);
  return avg >= required ? "в графике" : "отстает";
};

const renderCapitalGoals = () => {
  capitalGoalsTable.innerHTML = "";
  if (!capitalState.goals.length) {
    capitalGoalsTable.innerHTML = "<tr><td colspan='5' class='hint'>Добавьте первую цель.</td></tr>";
    return;
  }
  capitalState.goals.forEach((goal) => {
    const progress = goalProgress(goal);
    const needed = goalMonthlyDelta(goal);
    const row = document.createElement("tr");
    row.dataset.goalId = goal.id;
    row.innerHTML = `
      <td>${goal.name}</td>
      <td>${capitalFormatShort(progress)} / ${capitalFormatShort(goal.targetAmount)}</td>
      <td>${capitalFormatShort(needed)}</td>
      <td>${goalStatus(goal)}</td>
      <td><button class="button secondary" data-goal-delete="${goal.id}">Удалить</button></td>
    `;
    capitalGoalsTable.appendChild(row);
  });
};

const renderCapitalSnapshots = () => {
  capitalSnapshotsTable.innerHTML = "";
  if (!capitalState.snapshots.length) {
    capitalSnapshotsTable.innerHTML = "<tr><td colspan='7' class='hint'>Создайте первый снимок.</td></tr>";
    return;
  }
  const sorted = capitalState.snapshots
    .slice()
    .sort((a, b) => a.month.localeCompare(b.month));
  sorted.forEach((item) => {
    const row = document.createElement("tr");
    row.dataset.snapshotMonth = item.month;
    row.innerHTML = `
      <td>${item.month}</td>
      <td>${capitalFormatShort(item.assetsTotal)}</td>
      <td>${capitalFormatShort(item.debtsTotal)}</td>
      <td>${capitalFormatShort(item.netWorth)}</td>
      <td>${capitalFormatShort(item.delta)}</td>
      <td><input type="text" value="${item.note || ""}" data-field="note" /></td>
      <td><button class="button secondary" data-snapshot-delete="${item.month}">Удалить</button></td>
    `;
    capitalSnapshotsTable.appendChild(row);
  });
};

const renderCapitalHistoryChart = () => {
  capitalSnapshotsChart.innerHTML = "";
  const sorted = capitalState.snapshots
    .slice()
    .sort((a, b) => a.month.localeCompare(b.month));
  if (!sorted.length) {
    capitalSnapshotsChart.innerHTML = "<text x='50%' y='50%' text-anchor='middle' fill='#94a3b8'>Нет данных</text>";
    return;
  }

  const width = 720;
  const height = 260;
  const paddingX = 56;
  const paddingY = 28;
  const chartWidth = width - paddingX * 2;
  const chartHeight = height - paddingY * 2;
  const maxValue = Math.max(...sorted.map((item) => Math.max(item.assetsTotal, item.netWorth, item.debtsTotal)), 1);
  const scaleX = (index) =>
    paddingX + (chartWidth * index) / Math.max(sorted.length - 1, 1);
  const scaleY = (value) => paddingY + chartHeight - (value / maxValue) * chartHeight;

  const drawLine = (values, color) => {
    const points = values.map((value, index) => `${scaleX(index)},${scaleY(value)}`).join(" ");
    const line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    line.setAttribute("points", points);
    line.setAttribute("fill", "none");
    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", "3");
    line.setAttribute("stroke-linecap", "round");
    return line;
  };

  const grid = document.createElementNS("http://www.w3.org/2000/svg", "g");
  for (let i = 0; i <= 4; i += 1) {
    const y = paddingY + (chartHeight * i) / 4;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", paddingX);
    line.setAttribute("x2", width - paddingX);
    line.setAttribute("y1", y);
    line.setAttribute("y2", y);
    line.setAttribute("stroke", "#e2e8f0");
    line.setAttribute("stroke-dasharray", "4 4");
    grid.appendChild(line);
  }

  const axis = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const labelStep = Math.max(1, Math.floor(sorted.length / 6));
  sorted.forEach((item, index) => {
    if (index % labelStep !== 0 && index !== sorted.length - 1) {
      return;
    }
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", scaleX(index));
    label.setAttribute("y", height - 8);
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("fill", "#94a3b8");
    label.setAttribute("font-size", "10");
    label.textContent = item.month;
    axis.appendChild(label);
  });

  const assetsLine = drawLine(sorted.map((item) => item.assetsTotal), "#16a34a");
  const debtsLine = drawLine(sorted.map((item) => item.debtsTotal), "#ea580c");
  const netLine = drawLine(sorted.map((item) => item.netWorth), "#2563eb");

  capitalSnapshotsChart.appendChild(grid);
  capitalSnapshotsChart.appendChild(axis);
  capitalSnapshotsChart.appendChild(assetsLine);
  capitalSnapshotsChart.appendChild(debtsLine);
  capitalSnapshotsChart.appendChild(netLine);
};

const renderCapitalView = () => {
  capitalEnsureSnapshot();
  renderCapitalSummary();
  renderCapitalOverviewDashboard();
  renderCapitalAssets();
  renderCapitalDebts();
  renderCapitalPayoff();
  renderCapitalGoals();
  renderCapitalSnapshots();
  renderCapitalHistoryChart();
  if (capitalBaseCurrency) {
    capitalBaseCurrency.value = capitalState.settings.baseCurrency;
  }
  if (capitalFxCurrency) {
    if (!capitalFxCurrency.value) {
      const existing = Object.keys(capitalState.settings.fxRates || {})[0];
      capitalFxCurrency.value = existing || "USD";
    }
    const rate = capitalState.settings.fxRates[capitalFxCurrency.value.trim().toUpperCase()];
    capitalFxRateValue.textContent = rate ? rate.toFixed(4) : "—";
  }
  renderCapitalCategories();
};

const capitalSetTab = (tabId) => {
  capitalTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.capitalTab === tabId);
  });
  capitalPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.capitalTabPanel === tabId);
  });
};

const capitalSetAssetDrawer = (isOpen) => {
  if (!capitalAssetDrawer) {
    return;
  }
  capitalAssetDrawer.classList.toggle("is-open", isOpen);
  capitalAssetDrawer.setAttribute("aria-hidden", String(!isOpen));
  if (capitalAssetToggle) {
    capitalAssetToggle.setAttribute("aria-expanded", String(isOpen));
    capitalAssetToggle.textContent = "Добавить актив";
  }
  capitalAssetToggleButtons.forEach((button) => {
    button.setAttribute("aria-expanded", String(isOpen));
    button.textContent = "Открыть форму";
  });
};

const capitalSetAssetModal = (isOpen) => {
  if (!capitalAssetDrawer) {
    return;
  }
  capitalAssetDrawer.classList.toggle("is-modal", isOpen);
  if (capitalAssetOverlay) {
    capitalAssetOverlay.classList.toggle("is-active", isOpen);
  }
  document.body.classList.toggle("modal-open", isOpen);
  if (!isOpen) {
    capitalAssetDrawer.setAttribute("aria-hidden", "true");
  }
};

const capitalIsAssetModalOpen = () =>
  capitalAssetDrawer ? capitalAssetDrawer.classList.contains("is-modal") : false;

const capitalUpdateAsset = (id, field, value) => {
  const asset = capitalState.assets.find((item) => item.id === id);
  if (!asset) {
    return;
  }
  let refreshCategories = false;
  if (field === "currency") {
    asset[field] = value.trim().toUpperCase();
    ensureFxRateForCurrency(asset[field]);
  } else if (field === "amount" || field === "invested") {
    asset[field] = Number.parseFloat(value) || 0;
  } else if (field === "expectedProfit") {
    asset[field] = value === "" ? null : (Number.parseFloat(value) || 0);
  } else if (field === "maturityDate") {
    asset[field] = value;
    asset.liquidity = value ? "locked" : asset.liquidity;
  } else if (field === "section") {
    asset[field] = value.trim();
  } else if (field === "category") {
    asset[field] = value.trim();
    capitalEnsureCategory(asset[field]);
    refreshCategories = true;
  } else if (field === "subcategory") {
    asset[field] = value.trim();
    capitalEnsureCategory(asset.category || asset.section || "В наличии", asset[field]);
    refreshCategories = true;
  } else {
    asset[field] = value;
  }
  asset.unconvertible = capitalIsUnconvertible(asset);
  asset.updatedAt = capitalNowIso();
  saveCapitalV2(capitalState);
  if (refreshCategories) {
    renderCapitalCategories();
  }
  renderCapitalSummary();
  renderCapitalLedger();
  renderCapitalStructureCharts();
  renderCapitalOverview();
};

const capitalUpdateDebt = (id, field, value) => {
  const debt = capitalState.debts.find((item) => item.id === id);
  if (!debt) {
    return;
  }
  const numericFields = ["principal", "apr", "paymentMin", "dueDay"];
  if (field === "currency") {
    debt[field] = value.trim().toUpperCase();
  } else {
    debt[field] = numericFields.includes(field) ? (value === "" ? null : Number.parseFloat(value)) : value;
  }
  debt.updatedAt = capitalNowIso();
  saveCapitalV2(capitalState);
  renderCapitalSummary();
  renderCapitalLedger();
  renderCapitalStructureCharts();
  renderCapitalOverview();
  renderCapitalDebts();
  renderCapitalPayoff();
};

const capitalUpdateSnapshotNote = (month, note) => {
  const snapshot = capitalState.snapshots.find((item) => item.month === month);
  if (!snapshot) {
    return;
  }
  snapshot.note = note;
  saveCapitalV2(capitalState);
};

const capitalResetAssetForm = () => {
  capitalAssetForm.reset();
  capitalAssetCurrency.value = capitalState.settings.baseCurrency;
  capitalAssetMaturityDate.value = "";
  capitalAssetSubcategory.value = "";
  capitalAssetExpectedProfit.value = "";
  if (capitalAssetIcon) {
    capitalAssetIcon.value = "";
  }
  if (capitalAssetAvatar) {
    capitalAssetAvatar.value = "";
  }
  capitalAssetAvatarDataUrl = "";
  capitalEditingAssetId = null;
  const submitButton = capitalAssetForm.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.textContent = "Добавить актив";
  }
  if (capitalAssetDelete) {
    capitalAssetDelete.classList.remove("is-visible");
  }
  if (capitalAssetDrawerTitle) {
    capitalAssetDrawerTitle.textContent = "Новый актив";
  }
};

const capitalFillAssetForm = (asset) => {
  capitalSetAssetDrawer(true);
  capitalSetAssetModal(true);
  capitalAssetName.value = asset.name || "";
  capitalAssetType.value = asset.type || "cash";
  capitalAssetCurrency.value = asset.currency || capitalState.settings.baseCurrency;
  capitalAssetAmount.value = asset.amount ?? 0;
  capitalAssetInvested.value = asset.invested ?? asset.amount ?? 0;
  capitalAssetSubcategory.value = asset.subcategory || "";
  capitalAssetMaturityDate.value = asset.maturityDate || "";
  capitalAssetLiquidity.value = asset.liquidity || "high";
  capitalAssetExpectedProfit.value = asset.expectedProfit ?? "";
  capitalAssetNote.value = asset.note || "";
  if (capitalAssetIcon) {
    capitalAssetIcon.value = asset.icon || "";
  }
  capitalAssetAvatarDataUrl = asset.avatarDataUrl || "";
  capitalEditingAssetId = asset.id;
  const submitButton = capitalAssetForm.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.textContent = "Сохранить изменения";
  }
  if (capitalAssetDelete) {
    capitalAssetDelete.classList.add("is-visible");
  }
  if (capitalAssetDrawerTitle) {
    capitalAssetDrawerTitle.textContent = "Редактирование";
  }
  if (capitalAssetName) {
    capitalAssetName.focus();
  }
};

const capitalAddAsset = () => {
  const name = capitalAssetName.value.trim();
  const amountInput = capitalAssetAmount.value;
  const investedInput = capitalAssetInvested.value;
  const invested = Number.parseFloat(investedInput);
  if (!name || Number.isNaN(invested)) {
    showError("Заполните название и сумму актива.");
    return;
  }
  const subcategoryValue = capitalAssetSubcategory.value.trim();
  const isDeposit = capitalAssetType.value === "deposit";
  const amountParsed = Number.parseFloat(amountInput);
  const amount = Number.isNaN(amountParsed) ? invested : amountParsed;
  const resolvedCategory = capitalTypeLabel(capitalAssetType.value);
  if (resolvedCategory) {
    capitalEnsureCategory(resolvedCategory, subcategoryValue);
  }
  const payload = {
    name,
    type: capitalAssetType.value,
    currency: capitalAssetCurrency.value.trim().toUpperCase() || capitalState.settings.baseCurrency,
    amount,
    invested,
    section: isDeposit ? "Вклады" : "В наличии",
    category: resolvedCategory,
    subcategory: subcategoryValue,
    liquidity: capitalAssetLiquidity.value,
    expectedProfit: isDeposit && capitalAssetExpectedProfit.value
      ? Number.parseFloat(capitalAssetExpectedProfit.value)
      : null,
    maturityDate: isDeposit ? capitalAssetMaturityDate.value : "",
    note: capitalAssetNote.value.trim(),
    icon: capitalAssetIcon ? capitalAssetIcon.value.trim() : "",
    avatarDataUrl: capitalAssetAvatarDataUrl || "",
  };
  if (capitalEditingAssetId) {
    const existing = capitalState.assets.find((item) => item.id === capitalEditingAssetId);
    if (!existing) {
      capitalResetAssetForm();
      return;
    }
    Object.assign(existing, payload, { updatedAt: capitalNowIso() });
    existing.unconvertible = capitalIsUnconvertible(existing);
    ensureFxRateForCurrency(existing.currency);
  } else {
    capitalState.assets.push({
      id: capitalGenerateId("asset"),
      ...payload,
      createdAt: capitalNowIso(),
      updatedAt: capitalNowIso(),
    });
    ensureFxRateForCurrency(capitalState.assets[capitalState.assets.length - 1].currency);
    capitalState.assets[capitalState.assets.length - 1].unconvertible = capitalIsUnconvertible(
      capitalState.assets[capitalState.assets.length - 1]
    );
  }
  saveCapitalV2(capitalState);
  capitalResetAssetForm();
  if (capitalIsAssetModalOpen()) {
    capitalSetAssetModal(false);
    capitalSetAssetDrawer(false);
  }
  showToast("Сохранено");
  renderCapitalView();
};

const capitalAddDebt = () => {
  const name = capitalDebtName.value.trim();
  const principal = Number.parseFloat(capitalDebtPrincipal.value);
  if (!name || Number.isNaN(principal)) {
    showError("Заполните название и сумму долга.");
    return;
  }
  capitalState.debts.push({
    id: capitalGenerateId("debt"),
    name,
    type: capitalDebtType.value,
    currency: capitalDebtCurrency.value.trim().toUpperCase() || capitalState.settings.baseCurrency,
    principal,
    apr: capitalDebtApr.value ? Number.parseFloat(capitalDebtApr.value) : null,
    paymentMin: capitalDebtPayment.value ? Number.parseFloat(capitalDebtPayment.value) : null,
    dueDay: capitalDebtDueDay.value ? Number.parseInt(capitalDebtDueDay.value, 10) : null,
    note: capitalDebtNote.value.trim(),
    updatedAt: capitalNowIso(),
  });
  saveCapitalV2(capitalState);
  capitalDebtForm.reset();
  capitalDebtCurrency.value = capitalState.settings.baseCurrency;
  renderCapitalView();
};

const capitalAddGoal = () => {
  const name = capitalGoalName.value.trim();
  const targetAmount = Number.parseFloat(capitalGoalTarget.value);
  const targetDate = capitalGoalDate.value;
  if (!name || Number.isNaN(targetAmount) || !targetDate) {
    showError("Заполните название цели, сумму и дату.");
    return;
  }
  capitalState.goals.push({
    id: capitalGenerateId("goal"),
    name,
    kind: capitalGoalKind.value,
    targetAmount,
    targetDate,
    baselineAmount: capitalGoalBaseline.value ? Number.parseFloat(capitalGoalBaseline.value) : null,
    note: capitalGoalNote.value.trim(),
    updatedAt: capitalNowIso(),
  });
  saveCapitalV2(capitalState);
  capitalGoalForm.reset();
  renderCapitalView();
};

const capitalCreateSnapshotNow = () => {
  const month = capitalMonthKey();
  const totals = capitalTotals();
  const last = capitalState.snapshots
    .slice()
    .sort((a, b) => a.month.localeCompare(b.month))
    .filter((item) => item.month !== month)
    .pop();
  const delta = last ? totals.netWorth - last.netWorth : 0;
  const existing = capitalState.snapshots.find((item) => item.month === month);
  if (existing) {
    existing.assetsTotal = totals.assetsTotal;
    existing.debtsTotal = totals.debtsTotal;
    existing.netWorth = totals.netWorth;
    existing.delta = delta;
    existing.updatedAt = capitalNowIso();
  } else {
    capitalState.snapshots.push({
      id: capitalGenerateId("snapshot"),
      month,
      assetsTotal: totals.assetsTotal,
      debtsTotal: totals.debtsTotal,
      netWorth: totals.netWorth,
      delta,
      note: "",
      updatedAt: capitalNowIso(),
    });
  }
  saveCapitalV2(capitalState);
  renderCapitalView();
};

const addCategory = () => {
  const name = newCategoryInput.value.trim();
  const subName = newSubcategoryInput.value.trim();
  if (!name) {
    return;
  }

  if (categories[name]) {
    if (subName && !categories[name].subs.includes(subName)) {
      categories[name].subs.push(subName);
    }
  } else {
    categories[name] = {
      type: categoryTypeSelect.value,
      subs: subName ? [subName] : [],
    };
  }

  saveCategories(categories);
  renderCategories();
  newCategoryInput.value = "";
  newSubcategoryInput.value = "";
};

const ensureCategoryExists = (name, type, subcategory) => {
  if (!name) {
    return;
  }
  if (!categories[name]) {
    categories[name] = { type, subs: [] };
  }
  if (subcategory && !categories[name].subs.includes(subcategory)) {
    categories[name].subs.push(subcategory);
  }
};

const renameCategory = (oldName, newName) => {
  if (!newName || oldName === newName || categories[newName]) {
    return;
  }
  const payload = categories[oldName];
  delete categories[oldName];
  categories[newName] = payload;
  transactions = transactions.map((item) =>
    item.category === oldName ? touchTransaction(item, { category: newName }) : item
  );
  Storage.set(STORAGE_KEY, JSON.stringify(transactions));
  saveCategories(categories);
  renderCategories();
};

const renameSubcategory = (categoryName, oldName, newName) => {
  if (!newName || oldName === newName) {
    return;
  }
  categories[categoryName].subs = categories[categoryName].subs.map((item) =>
    item === oldName ? newName : item
  );
  transactions = transactions.map((item) =>
    item.category === categoryName && item.subcategory === oldName
      ? touchTransaction(item, { subcategory: newName })
      : item
  );
  Storage.set(STORAGE_KEY, JSON.stringify(transactions));
  saveCategories(categories);
  renderCategories();
};

const moveSubcategory = (fromCategory, subName, toCategory) => {
  if (fromCategory === toCategory) {
    return;
  }
  categories[fromCategory].subs = categories[fromCategory].subs.filter(
    (item) => item !== subName
  );
  if (!categories[toCategory].subs.includes(subName)) {
    categories[toCategory].subs.push(subName);
  }
  transactions = transactions.map((item) =>
    item.category === fromCategory && item.subcategory === subName
      ? touchTransaction(item, { category: toCategory })
      : item
  );
  Storage.set(STORAGE_KEY, JSON.stringify(transactions));
  saveCategories(categories);
  renderCategories();
};

const moveCategoryToCategory = (fromCategory, toCategory) => {
  if (fromCategory === toCategory) {
    return;
  }
  const fromSubs = categories[fromCategory].subs || [];
  const toSubs = categories[toCategory].subs || [];
  const merged = [...new Set([...toSubs, fromCategory, ...fromSubs])];
  categories[toCategory].subs = merged;
  delete categories[fromCategory];

  transactions = transactions.map((item) => {
    if (item.category !== fromCategory) {
      return item;
    }
    const nextSubcategory = item.subcategory || fromCategory;
    return touchTransaction(item, { category: toCategory, subcategory: nextSubcategory });
  });

  Storage.set(STORAGE_KEY, JSON.stringify(transactions));
  saveCategories(categories);
  renderCategories();
};

const promoteSubcategoryToCategory = (fromCategory, subName) => {
  if (categories[subName]) {
    return;
  }
  categories[fromCategory].subs = categories[fromCategory].subs.filter(
    (item) => item !== subName
  );
  categories[subName] = { type: categories[fromCategory].type, subs: [] };

  transactions = transactions.map((item) =>
    item.category === fromCategory && item.subcategory === subName
      ? touchTransaction(item, { category: subName, subcategory: "" })
      : item
  );

  Storage.set(STORAGE_KEY, JSON.stringify(transactions));
  saveCategories(categories);
  renderCategories();
};

const deleteSubcategory = (categoryName, subName) => {
  categories[categoryName].subs = categories[categoryName].subs.filter(
    (item) => item !== subName
  );
  transactions = transactions.map((item) =>
    item.category === categoryName && item.subcategory === subName
      ? touchTransaction(item, { subcategory: "" })
      : item
  );
  Storage.set(STORAGE_KEY, JSON.stringify(transactions));
  saveCategories(categories);
  renderCategories();
};

const deleteCategory = (categoryName) => {
  const remaining = Object.keys(categories).filter((name) => name !== categoryName);
  if (remaining.length === 0) {
    alert("Нужна хотя бы одна категория.");
    return;
  }
  delete categories[categoryName];
  const fallback = remaining[0];
  transactions = transactions.map((item) =>
    item.category === categoryName ? touchTransaction(item, { category: fallback, subcategory: "" }) : item
  );
  Storage.set(STORAGE_KEY, JSON.stringify(transactions));
  saveCategories(categories);
  renderCategories();
};

const renderCategoryManager = () => {
  categoryManager.innerHTML = "";
  const sorted = Object.entries(categories)
    .filter(([name]) =>
      categoryFilter === "all" ? true : categories[name].type === categoryFilter
    )
    .sort(([a], [b]) => a.localeCompare(b));

  sorted.forEach(([categoryName, payload]) => {
    const subs = payload.subs || [];
    const card = document.createElement("div");
    card.className = "category-card";
    card.dataset.category = categoryName;
    card.draggable = true;

    const header = document.createElement("div");
    header.className = "category-card-header";

    const title = document.createElement("div");
    title.innerHTML = `<strong>${categoryName}</strong><span class="subcategory-count">${subs.length} подкатегорий</span>`;

    const badge = document.createElement("span");
    badge.className = `type-badge ${payload.type}`;
    badge.textContent = payload.type === "income" ? "Доход" : "Расход";

    const actions = document.createElement("div");
    actions.className = "category-actions";

    const renameBtn = document.createElement("button");
    renameBtn.className = "chip";
    renameBtn.textContent = "Переименовать";
    renameBtn.addEventListener("click", () => {
      const nextName = prompt("Новое имя категории", categoryName);
      if (nextName) {
        renameCategory(categoryName, nextName.trim());
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "chip danger";
    deleteBtn.textContent = "Удалить";
    deleteBtn.addEventListener("click", () => {
      if (confirm(`Удалить категорию «${categoryName}»?`)) {
        deleteCategory(categoryName);
      }
    });

    actions.appendChild(renameBtn);
    actions.appendChild(deleteBtn);
    header.appendChild(title);
    header.appendChild(badge);
    header.appendChild(actions);

    const list = document.createElement("div");
    list.className = "subcategory-list";
    list.dataset.dropzone = categoryName;

    if (subs.length === 0) {
      const empty = document.createElement("p");
      empty.className = "hint";
      empty.textContent = "Нет подкатегорий";
      list.appendChild(empty);
    }

    subs.forEach((sub) => {
      const row = document.createElement("div");
      row.className = "subcategory-row";
      row.draggable = true;
      row.dataset.category = categoryName;
      row.dataset.subcategory = sub;

      const name = document.createElement("span");
      name.textContent = sub;

      const tools = document.createElement("div");
      tools.className = "subcategory-tools";

      const editBtn = document.createElement("button");
      editBtn.className = "chip";
      editBtn.textContent = "Редактировать";
      editBtn.addEventListener("click", () => {
        const nextName = prompt("Новое имя подкатегории", sub);
        if (nextName) {
          renameSubcategory(categoryName, sub, nextName.trim());
        }
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "chip danger";
      deleteBtn.textContent = "Удалить";
      deleteBtn.addEventListener("click", () => {
        if (confirm(`Удалить подкатегорию «${sub}»?`)) {
          deleteSubcategory(categoryName, sub);
        }
      });

      tools.appendChild(editBtn);
      tools.appendChild(deleteBtn);

      row.appendChild(name);
      row.appendChild(tools);
      list.appendChild(row);
    });

    card.appendChild(header);
    card.appendChild(list);
    categoryManager.appendChild(card);
  });
};

const handleDragStart = (event) => {
  const subRow = event.target.closest(".subcategory-row");
  const card = event.target.closest(".category-card");
  if (subRow) {
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        type: "subcategory",
        category: subRow.dataset.category,
        subcategory: subRow.dataset.subcategory,
      })
    );
    event.dataTransfer.effectAllowed = "move";
    subRow.classList.add("is-dragging");
    return;
  }

  if (card) {
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        type: "category",
        category: card.dataset.category,
      })
    );
    event.dataTransfer.effectAllowed = "move";
    card.classList.add("is-dragging");
  }
};

const handleDragEnd = (event) => {
  const row = event.target.closest(".subcategory-row");
  const card = event.target.closest(".category-card");
  if (row) {
    row.classList.remove("is-dragging");
  }
  if (card) {
    card.classList.remove("is-dragging");
  }
  document
    .querySelectorAll(".subcategory-list.is-drop-target, .category-dropzone.is-drop-target")
    .forEach((list) => list.classList.remove("is-drop-target"));
};

const handleDragOver = (event) => {
  const list = event.target.closest(".subcategory-list, .category-dropzone");
  if (!list) {
    return;
  }
  event.preventDefault();
  list.classList.add("is-drop-target");
  event.dataTransfer.dropEffect = "move";
};

const handleDragLeave = (event) => {
  const list = event.target.closest(".subcategory-list, .category-dropzone");
  if (list) {
    list.classList.remove("is-drop-target");
  }
};

const handleDrop = (event) => {
  const list = event.target.closest(".subcategory-list");
  const dropzone = event.target.closest(".category-dropzone");
  event.preventDefault();

  if (list) {
    list.classList.remove("is-drop-target");
  }
  if (dropzone) {
    dropzone.classList.remove("is-drop-target");
  }

  const payload = event.dataTransfer.getData("text/plain");
  if (!payload) {
    return;
  }

  const data = JSON.parse(payload);
  const targetCategory = list ? list.dataset.dropzone : null;

  if (list && targetCategory) {
    if (data.type === "subcategory") {
      moveSubcategory(data.category, data.subcategory, targetCategory);
    }
    if (data.type === "category") {
      moveCategoryToCategory(data.category, targetCategory);
    }
    return;
  }

  if (dropzone && data.type === "subcategory") {
    promoteSubcategoryToCategory(data.category, data.subcategory);
  }
};

const render = (viewId = activeView) => {
  if (viewId === "dashboard") {
    updateSummary();
    renderCharts();
    return;
  }
  if (viewId === "transactions") {
    updateSummary();
    renderTable();
    return;
  }
  if (viewId === "categories") {
    renderCategories();
    return;
  }
  if (viewId === "reports") {
    updateSummary();
    renderReports();
    return;
  }
  if (viewId === "capital") {
    renderCapitalView();
  }
};

const handleCapitalDragStart = (event) => {
  if (!capitalCategoryManager) {
    return;
  }
  const subRow = event.target.closest(".subcategory-row");
  const card = event.target.closest(".category-card");
  if (subRow && capitalCategoryManager.contains(subRow)) {
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        type: "capital-subcategory",
        category: subRow.dataset.category,
        subcategory: subRow.dataset.subcategory,
      })
    );
    event.dataTransfer.effectAllowed = "move";
    subRow.classList.add("is-dragging");
    return;
  }
  if (card && capitalCategoryManager.contains(card)) {
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        type: "capital-category",
        category: card.dataset.category,
      })
    );
    event.dataTransfer.effectAllowed = "move";
    card.classList.add("is-dragging");
  }
};

const handleCapitalDragEnd = (event) => {
  if (!capitalCategoryManager) {
    return;
  }
  const row = event.target.closest(".subcategory-row");
  const card = event.target.closest(".category-card");
  if (row) {
    row.classList.remove("is-dragging");
  }
  if (card) {
    card.classList.remove("is-dragging");
  }
  capitalCategoryManager
    .querySelectorAll(".subcategory-list.is-drop-target, .category-dropzone.is-drop-target")
    .forEach((list) => list.classList.remove("is-drop-target"));
};

const handleCapitalDragOver = (event) => {
  const list = event.target.closest(".subcategory-list, .category-dropzone");
  if (!list) {
    return;
  }
  if (capitalCategoryManager && capitalCategoryManager.contains(list)) {
    event.preventDefault();
    list.classList.add("is-drop-target");
    event.dataTransfer.dropEffect = "move";
    return;
  }
  if (capitalRootDropzone && list === capitalRootDropzone) {
    event.preventDefault();
    list.classList.add("is-drop-target");
    event.dataTransfer.dropEffect = "move";
  }
};

const handleCapitalDragLeave = (event) => {
  const list = event.target.closest(".subcategory-list, .category-dropzone");
  if (list) {
    list.classList.remove("is-drop-target");
  }
};

const handleCapitalDrop = (event) => {
  const list = event.target.closest(".subcategory-list");
  const dropzone = event.target.closest(".category-dropzone");
  event.preventDefault();

  if (list) {
    list.classList.remove("is-drop-target");
  }
  if (dropzone) {
    dropzone.classList.remove("is-drop-target");
  }

  const payload = event.dataTransfer.getData("text/plain");
  if (!payload) {
    return;
  }
  const data = JSON.parse(payload);

  if (list && capitalCategoryManager?.contains(list)) {
    const targetCategory = list.dataset.capitalDropzone;
    if (!targetCategory) {
      return;
    }
    if (data.type === "capital-subcategory") {
      moveCapitalSubcategory(data.category, data.subcategory, targetCategory);
    }
    if (data.type === "capital-category") {
      moveCapitalCategoryToCategory(data.category, targetCategory);
    }
    return;
  }

  if (dropzone && capitalRootDropzone && dropzone === capitalRootDropzone) {
    if (data.type === "capital-subcategory") {
      promoteCapitalSubcategoryToCategory(data.category, data.subcategory);
    }
  }
};

const initializeReportRange = () => {
  const bounds = getDateBounds(transactions);
  if (bounds.end) {
    const endDate = new Date(bounds.end);
    const startDate = new Date(endDate);
    startDate.setDate(endDate.getDate() - 29);
    setReportRange(startDate.toISOString().slice(0, 10), bounds.end);
  } else {
    const today = new Date().toISOString().slice(0, 10);
    setReportRange(today, today);
  }
};

const resetForm = () => {
  document.getElementById("amount").value = "";
  document.getElementById("note").value = "";
  const dateInput = document.getElementById("date");
  if (!dateInput.value) {
    dateInput.valueAsDate = new Date();
  }
  if (transactionCurrencySelect) {
    transactionCurrencySelect.value = getBaseCurrency();
  }
  updateAmountCurrencyHint();
  updateAmountLastHint();
};

const applyTransactionPreset = () => {
  if (!lastTransactionPreset) {
    return;
  }
  const typeField = document.getElementById("type");
  const amountField = document.getElementById("amount");
  if (typeField && lastTransactionPreset.type) {
    typeField.value = lastTransactionPreset.type;
  }
  if (transactionCurrencySelect && lastTransactionPreset.currency) {
    transactionCurrencySelect.value = lastTransactionPreset.currency;
  }
  if (categorySelect && lastTransactionPreset.category && categories[lastTransactionPreset.category]) {
    categorySelect.value = lastTransactionPreset.category;
    updateSubcategoryOptions(lastTransactionPreset.category);
  }
  if (subcategorySelect && lastTransactionPreset.subcategory) {
    subcategorySelect.value = lastTransactionPreset.subcategory;
  }
  if (amountField && lastTransactionPreset.amount != null) {
    amountField.placeholder = String(lastTransactionPreset.amount);
  }
  updateAmountCurrencyHint();
  updateAmountLastHint();
};

const transactionSubmitButton = form?.querySelector("button[type='submit']");

const updateAmountCurrencyHint = () => {
  if (!amountCurrencyHint || !transactionCurrencySelect) {
    return;
  }
  const currency = transactionCurrencySelect.value || getBaseCurrency();
  amountCurrencyHint.textContent = `Сумма в ${currency}.`;
};

const updateActionVisibility = (viewId) => {
  const actionButtons = document.querySelectorAll("[data-action-scope]");
  actionButtons.forEach((button) => {
    const scope = button.dataset.actionScope || "all";
    const scopes = scope.split(" ").filter(Boolean);
    const isVisible = scopes.includes("all") || scopes.includes(viewId);
    button.classList.toggle("is-hidden", !isVisible);
  });
};

const setFieldError = (field, message) => {
  if (!field || !field.parentElement) {
    return;
  }
  let messageEl = field.parentElement.querySelector(".field-message");
  if (!messageEl) {
    messageEl = document.createElement("small");
    messageEl.className = "field-message";
    field.parentElement.appendChild(messageEl);
  }
  messageEl.textContent = message || "";
  field.classList.toggle("is-invalid", Boolean(message));
  field.setAttribute("aria-invalid", Boolean(message));
};

const validateTransactionForm = (showMessages = false) => {
  if (!form) {
    return false;
  }
  const dateField = document.getElementById("date");
  const amountField = document.getElementById("amount");
  const categoryField = categorySelect;
  const currencyField = transactionCurrencySelect;
  const date = dateField?.value;
  const amount = Number.parseFloat(amountField?.value);
  const category = categoryField?.value;
  const currency = currencyField?.value;
  const isValidDate = Boolean(date);
  const isValidAmount = Number.isFinite(amount) && amount > 0;
  const isValidCategory = Boolean(category);
  const isValidCurrency = Boolean(currency);
  if (showMessages) {
    setFieldError(dateField, isValidDate ? "" : "Укажите дату.");
    setFieldError(amountField, isValidAmount ? "" : "Введите сумму больше нуля.");
    setFieldError(categoryField, isValidCategory ? "" : "Выберите категорию.");
    setFieldError(currencyField, isValidCurrency ? "" : "Выберите валюту.");
  }
  return isValidDate && isValidAmount && isValidCategory && isValidCurrency;
};

const updateTransactionFormState = () => {
  if (!form || !transactionSubmitButton) {
    return;
  }
  const dateField = document.getElementById("date");
  const amountField = document.getElementById("amount");
  const categoryField = categorySelect;
  const currencyField = transactionCurrencySelect;
  const isValidDate = Boolean(dateField?.value);
  const amount = Number.parseFloat(amountField?.value);
  const isValidAmount = Number.isFinite(amount) && amount > 0;
  const isValidCategory = Boolean(categoryField?.value);
  const isValidCurrency = Boolean(currencyField?.value);
  if (dateField?.classList.contains("is-invalid")) {
    setFieldError(dateField, isValidDate ? "" : "Укажите дату.");
  }
  if (amountField?.classList.contains("is-invalid")) {
    setFieldError(amountField, isValidAmount ? "" : "Введите сумму больше нуля.");
  }
  if (categoryField?.classList.contains("is-invalid")) {
    setFieldError(categoryField, isValidCategory ? "" : "Выберите категорию.");
  }
  if (currencyField?.classList.contains("is-invalid")) {
    setFieldError(currencyField, isValidCurrency ? "" : "Выберите валюту.");
  }
  const isValid = isValidDate && isValidAmount && isValidCategory && isValidCurrency;
  transactionSubmitButton.disabled = !isValid;
};

const setView = (viewId) => {
  const availableViews = [...views].map((view) => view.dataset.view);
  const targetView = availableViews.includes(viewId) ? viewId : "dashboard";
  activeView = targetView;
  views.forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === targetView);
  });
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.viewTarget === targetView);
  });
  const activeLabel = [...navLinks].find((link) => link.dataset.viewTarget === targetView);
  if (activeLabel) {
    viewTitle.textContent = activeLabel.textContent;
  }
  updateActionVisibility(targetView);
  const url = new URL(window.location.href);
  url.searchParams.set("view", targetView);
  window.history.replaceState({}, "", url);
  Storage.set(VIEW_KEY, targetView);
  render(targetView);
};

const setLayout = (layout) => {
  document.body.classList.remove("layout-comfort", "layout-balanced", "layout-compact");
  document.body.classList.add(`layout-${layout}`);
  currentLayout = layout;
  layoutButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.layout === layout);
  });
  Storage.set(LAYOUT_KEY, layout);
};

const bindEvents = () => {
  const on = (element, event, handler, context) => {
    if (!element) {
      return;
    }
    element.addEventListener(event, safeExec(handler, context || event));
  };
  const onAll = (list, event, handler, context) => {
    if (!list || list.length === 0) {
      return;
    }
    list.forEach((element) => on(element, event, handler, context));
  };
  if (form) {
    form.addEventListener("submit", safeExec((event) => {
      event.preventDefault();
      const date = document.getElementById("date").value;
      const type = document.getElementById("type").value;
      const category = categorySelect.value;
      const subcategory = subcategorySelect.value || "";
      const currency = transactionCurrencySelect?.value || getBaseCurrency();
      const amount = Number.parseFloat(document.getElementById("amount").value);
      const note = document.getElementById("note").value.trim();

      if (!validateTransactionForm(true)) {
        showError("Заполните обязательные поля перед сохранением.");
        return;
      }

      const now = new Date().toISOString();
      transactions.push({
        id: generateId("tx"),
        date,
        type,
        category,
        subcategory,
        amount,
        currency,
        note,
        createdAt: now,
        updatedAt: now,
      });
      lastTransactionPreset = {
        type,
        category,
        subcategory,
        currency,
        amount,
      };
      lastAmountByCategory = {
        ...lastAmountByCategory,
        [category]: amount,
      };
      Storage.set(LAST_TX_PRESET_KEY, JSON.stringify(lastTransactionPreset));
      Storage.set(LAST_TX_AMOUNT_BY_CATEGORY_KEY, JSON.stringify(lastAmountByCategory));
      recordUndo("addTx", { id: transactions[transactions.length - 1].id });
      Storage.set(STORAGE_KEY, JSON.stringify(transactions));
      render();
      resetForm();
      applyTransactionPreset();
      updateTransactionFormState();
    }, "добавление операции"));
    const formFields = form.querySelectorAll("input, select");
    formFields.forEach((field) => {
      on(field, "input", updateTransactionFormState, "валидация формы");
      on(field, "change", updateTransactionFormState, "валидация формы");
    });
  }

  const filterFields = [
    transactionSearch,
    transactionTypeFilter,
    transactionCategoryFilter,
    transactionDateStart,
    transactionDateEnd,
    transactionSort,
    transactionPageSize,
  ].filter(Boolean);
  filterFields.forEach((field) => {
    on(field, "input", () => {
      syncTransactionFiltersFromUI();
      resetTransactionPage();
      renderTable();
    }, "фильтр операций");
    on(field, "change", () => {
      syncTransactionFiltersFromUI();
      resetTransactionPage();
      renderTable();
    }, "фильтр операций");
  });

  on(transactionSortDir, "click", () => {
    transactionFilters.direction = transactionFilters.direction === "asc" ? "desc" : "asc";
    syncTransactionFilterControls();
    renderTable();
  }, "сортировка операций");

  on(transactionReset, "click", () => {
    resetTransactionFilters();
  }, "сброс фильтров");

  on(transactionPrev, "click", () => {
    transactionFilters.page = Math.max(1, transactionFilters.page - 1);
    renderTable();
  }, "пагинация операций");

  on(transactionNext, "click", () => {
    transactionFilters.page += 1;
    renderTable();
  }, "пагинация операций");

  on(sidebarToggle, "click", () => {
    const shell = document.querySelector(".app-shell");
    const isOpen = !shell?.classList.contains("is-sidebar-open");
    shell?.classList.toggle("is-sidebar-open", isOpen);
    sidebarOverlay?.classList.toggle("is-active", isOpen);
    document.body.classList.toggle("sidebar-open", isOpen);
  }, "sidebar");

  on(sidebarOverlay, "click", () => {
    document.querySelector(".app-shell")?.classList.remove("is-sidebar-open");
    sidebarOverlay?.classList.remove("is-active");
    document.body.classList.remove("sidebar-open");
  }, "sidebar overlay");

  on(sidebarClose, "click", () => {
    document.querySelector(".app-shell")?.classList.remove("is-sidebar-open");
    sidebarOverlay?.classList.remove("is-active");
    document.body.classList.remove("sidebar-open");
  }, "sidebar close");

  onAll(dateQuickButtons, "click", (event) => {
    const value = event.currentTarget.dataset.dateQuick;
    const dateInput = document.getElementById("date");
    if (!dateInput) {
      return;
    }
    const base = new Date();
    if (value === "yesterday") {
      base.setDate(base.getDate() - 1);
    }
    dateInput.value = base.toISOString().slice(0, 10);
    updateTransactionFormState();
  }, "быстрая дата");

  on(transactionCurrencySelect, "change", () => {
    updateAmountCurrencyHint();
    updateAmountLastHint();
  }, "валюта операции");

  on(document.getElementById("type"), "change", () => {
    renderCategoryOptions();
  }, "смена типа операции");

  on(categorySelect, "change", (event) => {
    updateSubcategoryOptions(event.target.value);
    updateAmountLastHint();
  }, "смена категории");

  on(transactionFavorites, "click", (event) => {
    const target = event.target.closest("[data-favorite-category]");
    if (!target || !transactionCategoryFilter) {
      return;
    }
    const category = target.dataset.favoriteCategory;
    transactionFilters.category = category;
    transactionCategoryFilter.value = category;
    transactionFilters.page = 1;
    renderTable();
  }, "избранные категории");

  on(transactionSelectAll, "change", (event) => {
    const isChecked = event.target.checked;
    transactionPageIds.forEach((id) => {
      if (isChecked) {
        selectedTransactionIds.add(id);
      } else {
        selectedTransactionIds.delete(id);
      }
    });
    renderTable();
  }, "выбор всех операций");

  on(transactionDeleteSelected, "click", () => {
    if (!selectedTransactionIds.size) {
      return;
    }
    const toDelete = new Set(selectedTransactionIds);
    transactions = transactions.filter((item) => !toDelete.has(item.id));
    selectedTransactionIds.clear();
    Storage.set(STORAGE_KEY, JSON.stringify(transactions));
    render();
  }, "удаление выбранных операций");

  on(transactionClearSelection, "click", () => {
    selectedTransactionIds.clear();
    renderTable();
  }, "снять выбор");

  on(tableBody, "change", (event) => {
    const checkbox = event.target.closest(".transaction-select");
    if (!checkbox) {
      return;
    }
    const id = checkbox.dataset.selectId;
    if (!id) {
      return;
    }
    if (checkbox.checked) {
      selectedTransactionIds.add(id);
    } else {
      selectedTransactionIds.delete(id);
    }
    updateTransactionSelectionUI();
  }, "выбор операции");

  on(addCategoryButton, "click", addCategory, "добавление категории");

on(categoryTypeSelect, "change", () => {
  renderCategoryListOptions();
}, "тип категории");

on(newCategoryInput, "input", () => {
  const name = newCategoryInput.value.trim();
  if (categories[name]) {
    categoryTypeSelect.value = categories[name].type;
    renderCategoryListOptions();
  }
}, "ввод категории");

on(newCategoryInput, "keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addCategory();
  }
}, "ввод категории");

on(newSubcategoryInput, "keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addCategory();
  }
}, "ввод подкатегории");

onAll(navLinks, "click", (event) => {
  event.preventDefault();
  setView(event.currentTarget.dataset.viewTarget);
  document.querySelector(".app-shell")?.classList.remove("is-sidebar-open");
  sidebarOverlay?.classList.remove("is-active");
  document.body.classList.remove("sidebar-open");
}, "навигация");

onAll(layoutButtons, "click", (event) => setLayout(event.currentTarget.dataset.layout), "layout");

onAll(filterTabs, "click", (event) => {
  filterTabs.forEach((item) => item.classList.remove("is-active"));
  event.currentTarget.classList.add("is-active");
  categoryFilter = event.currentTarget.dataset.filter;
  renderCategoryManager();
}, "фильтр категорий");

onAll(categoryScopeButtons, "click", (event) => {
  categoryScopeButtons.forEach((item) => item.classList.remove("is-active"));
  event.currentTarget.classList.add("is-active");
  const scope = event.currentTarget.dataset.categoryScope;
  categoryPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.categoryPanel === scope);
  });
}, "переключение панели");

on(categoryManager, "dragstart", handleDragStart, "dragstart");
on(categoryManager, "dragend", handleDragEnd, "dragend");
on(categoryManager, "dragover", handleDragOver, "dragover");
on(categoryManager, "dragleave", handleDragLeave, "dragleave");
on(categoryManager, "drop", handleDrop, "drop");
on(rootDropzone, "dragover", handleDragOver, "dragover");
on(rootDropzone, "dragleave", handleDragLeave, "dragleave");
on(rootDropzone, "drop", handleDrop, "drop");
on(rootDropzone, "dragend", handleDragEnd, "dragend");

on(capitalCategoryManager, "dragstart", handleCapitalDragStart, "dragstart");
on(capitalCategoryManager, "dragend", handleCapitalDragEnd, "dragend");
on(capitalCategoryManager, "dragover", handleCapitalDragOver, "dragover");
on(capitalCategoryManager, "dragleave", handleCapitalDragLeave, "dragleave");
on(capitalCategoryManager, "drop", handleCapitalDrop, "drop");
on(capitalRootDropzone, "dragover", handleCapitalDragOver, "dragover");
on(capitalRootDropzone, "dragleave", handleCapitalDragLeave, "dragleave");
on(capitalRootDropzone, "drop", handleCapitalDrop, "drop");
on(capitalRootDropzone, "dragend", handleCapitalDragEnd, "dragend");

on(undoButton, "click", undoLastAction, "undo");

  on(tableBody, "click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) {
      return;
    }

    const id = target.dataset.id;
    if (!id) {
      return;
    }

    const index = transactions.findIndex((item) => item.id === id);
    const deleted = transactions.find((item) => item.id === id);
    if (!deleted) {
      return;
    }
    transactions = transactions.filter((item) => item.id !== id);
    selectedTransactionIds.delete(id);
    recordUndo("deleteTx", { item: deleted, index });
    Storage.set(STORAGE_KEY, JSON.stringify(transactions));
    render();
  }, "удаление операции");

on(exportButton, "click", () => {
  if (transactions.length === 0) {
    alert("Добавьте операции перед экспортом.");
    return;
  }

  const header = ["Дата", "Тип", "Категория", "Подкатегория", "Сумма", "Валюта", "Комментарий"];
  const rows = transactions.map((item) => [
    item.date,
    formatType(item.type),
    item.category,
    item.subcategory,
    item.amount.toFixed(2),
    item.currency || getBaseCurrency(),
    item.note || "",
  ]);

  const csvContent = [header, ...rows]
    .map((row) =>
      row
        .map((value) => `"${String(value).replace(/"/g, '""')}"`)
        .join(",")
    )
    .join("\n");

  const blob = new Blob(["\uFEFF", csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `budget-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  showNotice("Экспорт CSV готов.", "success");
}, "экспорт CSV");

on(importCsvInput, "change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }
  try {
    const text = await file.text();
    const rows = parseCsv(text.trim());
    const [header, ...dataRows] = rows;
    if (!header || header.length < 5) {
      throw new Error("Некорректный CSV");
    }
    const headerMap = header.map((cell) => cell.trim().toLowerCase());
    const indexOf = (nameVariants) => headerMap.findIndex((value) => nameVariants.includes(value));
    const idxDate = indexOf(["дата", "date"]);
    const idxType = indexOf(["тип", "type"]);
    const idxCategory = indexOf(["категория", "category"]);
    const idxSubcategory = indexOf(["подкатегория", "subcategory"]);
    const idxAmount = indexOf(["сумма", "amount"]);
    const idxCurrency = indexOf(["валюта", "currency"]);
    const idxNote = indexOf(["комментарий", "note"]);
    if ([idxDate, idxType, idxCategory, idxAmount].some((idx) => idx === -1)) {
      throw new Error("Нет обязательных колонок");
    }
    const imported = [];
    let skipped = 0;
    dataRows.forEach((row) => {
      if (!row.length) {
        skipped += 1;
        return;
      }
      const date = row[idxDate]?.trim();
      const typeLabel = row[idxType]?.trim().toLowerCase();
      const type = typeLabel === "доход" || typeLabel === "income" ? "income" : "expense";
      const category = row[idxCategory]?.trim();
      const subcategory = idxSubcategory !== -1 ? row[idxSubcategory]?.trim() : "";
      const amount = Number.parseFloat((row[idxAmount] || "").replace(",", "."));
      const currency = idxCurrency !== -1
        ? normalizeTransactionCurrency(row[idxCurrency], getBaseCurrency())
        : getBaseCurrency();
      const note = idxNote !== -1 ? row[idxNote]?.trim() : "";
      if (!date || !category || !Number.isFinite(amount)) {
        skipped += 1;
        return;
      }
      ensureCategoryExists(category, type, subcategory);
      const now = new Date().toISOString();
      imported.push({
        id: generateId("tx"),
        date,
        type,
        category,
        subcategory,
        amount,
        currency,
        note,
        createdAt: now,
        updatedAt: now,
      });
    });
    if (!imported.length) {
      showError("Не удалось найти корректные строки для импорта.");
      return;
    }
    transactions = [...transactions, ...imported];
    await Storage.set(STORAGE_KEY, JSON.stringify(transactions));
    await saveCategories(categories);
    renderCategories();
    render();
    showNotice(`Импортировано операций: ${imported.length}. Пропущено: ${skipped}.`, "success");
  } catch (error) {
    showError("Не удалось импортировать CSV.");
  } finally {
    importCsvInput.value = "";
  }
}, "импорт CSV");

on(clearButton, "click", () => {
  if (!confirm("Удалить все операции?")) {
    return;
  }
  transactions = [];
  selectedTransactionIds.clear();
  Storage.set(STORAGE_KEY, JSON.stringify(transactions));
  render();
}, "очистка данных");

on(toggleSubcategoryButton, "click", () => {
  showAllSubcategories = !showAllSubcategories;
  renderCharts();
}, "переключение диаграммы подкатегорий");

on(toggleExpenseCategoryButton, "click", () => {
  showAllExpenseCategories = !showAllExpenseCategories;
  renderCharts();
}, "переключение диаграммы категорий");

onAll(reportRangeButtons, "click", (event) => {
  reportRangeButtons.forEach((item) => item.classList.remove("is-active"));
  event.currentTarget.classList.add("is-active");
  const range = event.currentTarget.dataset.reportRange;
  if (range === "all") {
    const bounds = getDateBounds(transactions);
    setReportRange(bounds.start, bounds.end);
  } else {
    const days = Number.parseInt(range, 10);
    const bounds = getDateBounds(transactions);
    const end = bounds.end || new Date().toISOString().slice(0, 10);
    const endDate = new Date(end);
    const startDate = new Date(endDate);
    startDate.setDate(endDate.getDate() - (days - 1));
    setReportRange(startDate.toISOString().slice(0, 10), end);
  }
  renderReports();
}, "диапазон отчета");

onAll(reportGranularityButtons, "click", (event) => {
  reportGranularityButtons.forEach((item) => item.classList.remove("is-active"));
  event.currentTarget.classList.add("is-active");
  reportGranularity = event.currentTarget.dataset.reportGranularity;
  renderReports();
}, "гранулярность отчета");

on(applyReportRangeButton, "click", () => {
  reportRangeButtons.forEach((item) => item.classList.remove("is-active"));
  setReportRange(reportStartInput.value, reportEndInput.value);
  renderReports();
}, "ручной диапазон отчета");

onAll(capitalTabs, "click", (event) => {
  capitalSetTab(event.currentTarget.dataset.capitalTab);
}, "капитал табы");

  if (capitalAssetDrawer) {
    capitalSetAssetDrawer(false);
  }

  on(capitalAssetToggle, "click", () => {
    capitalResetAssetForm();
    capitalSetAssetDrawer(true);
    capitalSetAssetModal(true);
    if (capitalAssetName) {
      capitalAssetName.focus();
    }
  }, "toggle drawer");

  onAll(capitalAssetToggleButtons, "click", () => {
    capitalResetAssetForm();
    capitalSetAssetDrawer(true);
    capitalSetAssetModal(true);
    if (capitalAssetName) {
      capitalAssetName.focus();
    }
  }, "toggle drawer");

  on(capitalAssetClose, "click", () => {
    capitalSetAssetModal(false);
    capitalSetAssetDrawer(false);
    capitalResetAssetForm();
  }, "close asset");

  on(capitalAssetOverlay, "click", () => {
    capitalSetAssetModal(false);
    capitalSetAssetDrawer(false);
    capitalResetAssetForm();
  }, "overlay asset");

  on(capitalAssetAvatar, "change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    capitalAssetAvatarDataUrl = await compressImageToDataUrl(file);
  }, "avatar upload");

  on(capitalAssetAvatarRemove, "click", () => {
    capitalAssetAvatarDataUrl = "";
    if (capitalAssetAvatar) {
      capitalAssetAvatar.value = "";
    }
  }, "avatar remove");

  on(document, "keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }
    if (capitalIsAssetModalOpen()) {
      capitalSetAssetModal(false);
      capitalSetAssetDrawer(false);
      capitalResetAssetForm();
    }
  }, "escape close");

  on(capitalAssetDelete, "click", () => {
    if (!capitalEditingAssetId || !confirm("Удалить актив?")) {
      return;
    }
    capitalState.assets = capitalState.assets.filter((item) => item.id !== capitalEditingAssetId);
    saveCapitalV2(capitalState);
    capitalSetAssetModal(false);
    capitalSetAssetDrawer(false);
    capitalResetAssetForm();
    showToast("Актив удален");
    renderCapitalView();
  }, "удаление актива");

  on(capitalAssetForm, "submit", (event) => {
    event.preventDefault();
    capitalAddAsset();
  }, "добавление актива");

  on(capitalBaseCurrency, "change", () => {
    capitalState.settings.baseCurrency = capitalBaseCurrency.value;
    saveCapitalV2(capitalState);
    renderCapitalView();
    refreshFxRate();
  }, "смена валюты");

  on(capitalFxRefresh, "click", () => {
    refreshFxRate();
  }, "обновление FX");

  on(capitalFxCurrency, "blur", () => {
    refreshFxRate();
  }, "обновление FX");

  on(capitalAssetCurrency, "change", () => {
    if (!capitalFxCurrency) {
      return;
    }
    const currency = capitalAssetCurrency.value.trim().toUpperCase();
    if (currency) {
      capitalFxCurrency.value = currency;
      refreshFxRate();
    }
  }, "смена валюты актива");

  onAll(capitalStructureButtons, "click", (event) => {
    capitalStructureButtons.forEach((item) => item.classList.remove("is-active"));
    event.currentTarget.classList.add("is-active");
    const mode = event.currentTarget.dataset.capitalStructure;
    capitalAssetTypeChart.classList.toggle("is-hidden", mode !== "bars");
    capitalAssetTypePie.classList.toggle("is-hidden", mode !== "pie");
  }, "структура капитала");

  onAll(capitalAssetViewButtons, "click", (event) => {
    capitalAssetViewButtons.forEach((item) => item.classList.remove("is-active"));
    event.currentTarget.classList.add("is-active");
    capitalAssetPanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.capitalAssetPanel === event.currentTarget.dataset.capitalAssetView);
    });
  }, "вид активов");

  on(capitalCategoryForm, "submit", (event) => {
    event.preventDefault();
    const category = capitalCategoryName.value.trim();
    const subcategory = capitalSubcategoryName.value.trim();
    if (!category) {
      showError("Введите название категории капитала.");
      return;
    }
    capitalEnsureCategory(category, subcategory);
    saveCapitalV2(capitalState);
    renderCapitalCategories();
    capitalCategoryForm.reset();
  }, "категории капитала");

  on(capitalCategoryManager, "click", (event) => {
    const target = event.target.closest("button[data-capital-action]");
    if (!target) {
      return;
    }
    const action = target.dataset.capitalAction;
    const categoryName = target.dataset.capitalCategory;
    const subcategoryName = target.dataset.capitalSubcategory;
    if (action === "rename-category" && categoryName) {
      const nextName = prompt("Новое имя категории", categoryName);
      if (nextName) {
        renameCapitalCategory(categoryName, nextName);
      }
      return;
    }
    if (action === "delete-category" && categoryName) {
      if (confirm(`Удалить категорию «${categoryName}»?`)) {
        deleteCapitalCategory(categoryName);
      }
      return;
    }
    if (action === "rename-subcategory" && categoryName && subcategoryName) {
      const nextName = prompt("Новое имя подкатегории", subcategoryName);
      if (nextName) {
        renameCapitalSubcategory(categoryName, subcategoryName, nextName);
      }
      return;
    }
    if (action === "delete-subcategory" && categoryName && subcategoryName) {
      if (confirm(`Удалить подкатегорию «${subcategoryName}»?`)) {
        deleteCapitalSubcategory(categoryName, subcategoryName);
      }
    }
  }, "категории капитала");

  onAll(capitalOverviewFilters, "click", (event) => {
    capitalOverviewFilters.forEach((item) => item.classList.remove("is-active"));
    event.currentTarget.classList.add("is-active");
    capitalOverviewFilter = event.currentTarget.dataset.capitalFilter;
    renderCapitalLedger();
  }, "фильтр капитала");

  on(capitalAssetType, "change", () => {
    const isDeposit = capitalAssetType.value === "deposit";
    capitalAssetExpectedProfit.disabled = !isDeposit;
    capitalAssetMaturityDate.disabled = !isDeposit;
    if (!isDeposit) {
      capitalAssetExpectedProfit.value = "";
      capitalAssetMaturityDate.value = "";
    }
  }, "тип актива");

  on(capitalAssetSearch, "input", (event) => {
    assetFilters.search = event.target.value.trim().toLowerCase();
    renderCapitalAssets();
  }, "поиск активов");

  on(capitalAssetTypeFilter, "change", (event) => {
    assetFilters.type = event.target.value;
    renderCapitalAssets();
  }, "фильтр активов");

  on(capitalAssetLiquidityFilter, "change", (event) => {
    assetFilters.liquidity = event.target.value;
    renderCapitalAssets();
  }, "фильтр ликвидности");

  on(capitalAssetSort, "change", (event) => {
    assetFilters.sort = event.target.value;
    renderCapitalAssets();
  }, "сортировка активов");

  on(capitalAssetSortDir, "click", () => {
    assetFilters.direction = assetFilters.direction === "asc" ? "desc" : "asc";
    if (capitalAssetSortDir) {
      capitalAssetSortDir.textContent = assetFilters.direction === "asc" ? "По возр." : "По убыв.";
      capitalAssetSortDir.setAttribute("aria-pressed", assetFilters.direction === "asc" ? "true" : "false");
    }
    renderCapitalAssets();
  }, "направление сортировки");

  on(capitalAssetMissingRate, "click", () => {
    assetFilters.missingRateOnly = !assetFilters.missingRateOnly;
    if (capitalAssetMissingRate) {
      capitalAssetMissingRate.setAttribute("aria-pressed", assetFilters.missingRateOnly ? "true" : "false");
      capitalAssetMissingRate.classList.toggle("is-active", assetFilters.missingRateOnly);
    }
    renderCapitalAssets();
  }, "фильтр без курса");

  on(capitalAssetsList, "click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    const action = actionButton?.dataset.action;
    const assetId = actionButton?.dataset.id || actionButton?.closest("[data-asset-id]")?.dataset.assetId;

    if (action === "add-asset") {
      capitalSetAssetDrawer(true);
      capitalSetAssetModal(true);
      capitalResetAssetForm();
      if (capitalAssetName) {
        capitalAssetName.focus();
      }
      return;
    }

    if (action === "toggle") {
      const isExpanded = actionButton.getAttribute("aria-expanded") === "true";
      actionButton.setAttribute("aria-expanded", String(!isExpanded));
      const detailsId = actionButton.getAttribute("aria-controls");
      if (detailsId) {
        const details = document.getElementById(detailsId);
        if (details) {
          details.classList.toggle("is-open", !isExpanded);
        }
      }
      return;
    }

    if (action === "toggle-group") {
      const groupName = actionButton.dataset.group;
      if (groupName) {
        assetUiState.groups[groupName] = !(assetUiState.groups[groupName] ?? true);
        persistAssetUiState();
        renderCapitalAssets();
      }
      return;
    }

    if (action === "toggle-subgroup") {
      const groupName = actionButton.dataset.group;
      const subName = actionButton.dataset.subgroup;
      if (groupName && subName) {
        const key = `${groupName}::${subName}`;
        assetUiState.subgroups[key] = !(assetUiState.subgroups[key] ?? true);
        persistAssetUiState();
        renderCapitalAssets();
      }
      return;
    }

    if (!assetId) {
      return;
    }

    const asset = capitalState.assets.find((item) => item.id === assetId);
    if (!asset) {
      return;
    }

    if (action === "edit-asset") {
      capitalFillAssetForm(asset);
      showToast("Открыто редактирование");
      return;
    }

    if (action === "delete-asset") {
      if (!confirm("Удалить актив?")) {
        return;
      }
      capitalState.assets = capitalState.assets.filter((item) => item.id !== assetId);
      saveCapitalV2(capitalState);
      showToast("Актив удален");
      renderCapitalView();
    }
  }, "действия по активу");

  on(capitalAssetsList, "keydown", (event) => {
    const target = event.target.closest("[data-action='toggle']");
    if (!target) {
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      target.click();
    }
  }, "toggle details");

  on(capitalDebtForm, "submit", (event) => {
    event.preventDefault();
    capitalAddDebt();
  }, "добавление долга");

  on(capitalDebtsTable, "input", (event) => {
    const target = event.target;
    const row = target.closest("tr");
    if (!row || !row.dataset.debtId) {
      return;
    }
    const field = target.dataset.field;
    if (!field) {
      return;
    }
    capitalUpdateDebt(row.dataset.debtId, field, target.value);
  }, "обновление долга");

  on(capitalDebtsTable, "click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) {
      return;
    }
    const id = target.dataset.debtDelete;
    if (!id || !confirm("Удалить долг?")) {
      return;
    }
    capitalState.debts = capitalState.debts.filter((item) => item.id !== id);
    saveCapitalV2(capitalState);
    renderCapitalView();
  }, "удаление долга");

  on(capitalExtraPayment, "input", () => {
    renderCapitalPayoff();
  }, "доп платеж");

  on(capitalGoalForm, "submit", (event) => {
    event.preventDefault();
    capitalAddGoal();
  }, "добавление цели");

  on(capitalGoalsTable, "click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) {
      return;
    }
    const id = target.dataset.goalDelete;
    if (!id || !confirm("Удалить цель?")) {
      return;
    }
    capitalState.goals = capitalState.goals.filter((item) => item.id !== id);
    saveCapitalV2(capitalState);
    renderCapitalView();
  }, "удаление цели");

  on(capitalSnapshotNow, "click", () => {
    capitalCreateSnapshotNow();
  }, "снимок капитала");

  on(capitalSnapshotsTable, "input", (event) => {
    const target = event.target;
    const row = target.closest("tr");
    if (!row || !row.dataset.snapshotMonth) {
      return;
    }
    if (target.dataset.field !== "note") {
      return;
    }
    capitalUpdateSnapshotNote(row.dataset.snapshotMonth, target.value);
  }, "заметка снимка");

  on(capitalSnapshotsTable, "click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) {
      return;
    }
    const month = target.dataset.snapshotDelete;
    if (!month || !confirm("Удалить снимок?")) {
      return;
    }
    capitalState.snapshots = capitalState.snapshots.filter((item) => item.month !== month);
    saveCapitalV2(capitalState);
    renderCapitalView();
  }, "удаление снимка");

  on(capitalExportButton, "click", () => {
    const payload = JSON.stringify(capitalState, null, 2);
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "capital.json";
    link.click();
    URL.revokeObjectURL(url);
  }, "экспорт капитала");

  on(capitalImportInput, "change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      capitalState = {
        assets: data.assets || [],
        debts: data.debts || [],
        goals: data.goals || [],
        snapshots: data.snapshots || [],
        settings: data.settings || { baseCurrency: "RUB", fxRates: {} },
      };
      normalizeCapitalState();
      saveCapitalV2(capitalState);
      renderCapitalView();
    } catch (error) {
      showError("Не удалось импортировать файл капитала.");
    } finally {
      capitalImportInput.value = "";
    }
  }, "импорт капитала");

  on(backupButton, "click", () => {
    const payload = buildBackupPayload();
    downloadJson(payload, `budget-backup-${new Date().toISOString().slice(0, 10)}.json`);
    saveBackupMeta(payload);
    showNotice("Backup сохранен.", "success");
  }, "backup");

  on(restoreInput, "change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      await applyBackupPayload(data);
      activeView = data.settings?.view || activeView;
      currentLayout = data.settings?.layout || currentLayout;
      undoStack = [];
      renderCategories();
      initializeReportRange();
      saveBackupMeta(data);
      updateUndoState();
      updateTransactionFormState();
      capitalSetTab("overview");
      setLayout(currentLayout);
      setView(activeView);
      showNotice("Backup восстановлен.", "success");
    } catch (error) {
      showError("Не удалось восстановить backup.");
    } finally {
      restoreInput.value = "";
    }
  }, "restore");
};

const loadState = async () => {
  transactions = await loadTransactions();
  categories = await loadCategories();
  capitalState = await migrateCapitalState();
  const capitalMigrated = normalizeCapitalState();
  if (capitalMigrated) {
    await saveCapitalV2(capitalState);
  }

  const savedBackupMeta = await Storage.get(BACKUP_META_KEY);
  if (savedBackupMeta) {
    try {
      renderBackupMeta(JSON.parse(savedBackupMeta));
    } catch (error) {
      renderBackupMeta(null);
    }
  } else {
    renderBackupMeta(null);
  }

  const savedView = await Storage.get(VIEW_KEY);
  const savedLayout = await Storage.get(LAYOUT_KEY);
  const savedUiState = await Storage.get(CAPITAL_ASSETS_UI_KEY);
  const savedPreset = await Storage.get(LAST_TX_PRESET_KEY);
  const savedAmountMap = await Storage.get(LAST_TX_AMOUNT_BY_CATEGORY_KEY);
  if (savedUiState) {
    try {
      assetUiState = JSON.parse(savedUiState);
    } catch (error) {
      assetUiState = { groups: {}, subgroups: {} };
    }
  }
  const urlView = new URLSearchParams(window.location.search).get("view");
  activeView = urlView || savedView || "dashboard";
  currentLayout = savedLayout || "comfort";
  if (savedPreset) {
    try {
      lastTransactionPreset = JSON.parse(savedPreset);
    } catch (error) {
      lastTransactionPreset = null;
    }
  }
  if (savedAmountMap) {
    try {
      lastAmountByCategory = JSON.parse(savedAmountMap);
    } catch (error) {
      lastAmountByCategory = {};
    }
  }
};

const initializeApp = safeExec(async () => {
  await Storage.init();
  await loadState();

  if (!appUtils.colorForLabel || !appUtils.formatMoney || !appUtils.normalizeTransactionCurrency || !appUtils.parseCsv) {
    showError("Не удалось загрузить utils.js, использованы встроенные функции. Проверьте путь к файлу.");
  }

  bindEvents();
  renderCategories();
  syncTransactionFilterControls();
  resetForm();
  applyTransactionPreset();
  initializeReportRange();
  updateUndoState();
  updateTransactionFormState();
  capitalSetTab("overview");
  setLayout(currentLayout);
  setView(activeView);
  window.__appBooted = true;
  if (new URLSearchParams(window.location.search).get("selftest") === "1") {
    await selfTest();
  }
}, "инициализация приложения");

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
