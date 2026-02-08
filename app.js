const form = document.getElementById("transactionForm");
const tableBody = document.getElementById("transactionTable");
const totalIncomeEl = document.getElementById("totalIncome");
const totalExpenseEl = document.getElementById("totalExpense");
const balanceEl = document.getElementById("balance");
const expensePercentEl = document.getElementById("expensePercent");
const exportButton = document.getElementById("exportCsv");
const clearButton = document.getElementById("clearAll");
const undoButton = document.getElementById("undoAction");
const backupButton = document.getElementById("backupJson");
const restoreInput = document.getElementById("restoreJson");
const errorBanner = document.getElementById("errorBanner");
const categorySelect = document.getElementById("category");
const subcategorySelect = document.getElementById("subcategory");
const categoryTypeSelect = document.getElementById("categoryType");
const categoryList = document.getElementById("categoryList");
const transactionSearchInput = document.getElementById("transactionSearch");
const transactionTypeFilter = document.getElementById("transactionTypeFilter");
const transactionCategoryFilter = document.getElementById("transactionCategoryFilter");
const selectAllTransactionsButton = document.getElementById("selectAllTransactions");
const deleteSelectedTransactionsButton = document.getElementById("deleteSelectedTransactions");
const lastBackupAt = document.getElementById("lastBackupAt");
const addCategoryButton = document.getElementById("addCategory");
const newCategoryInput = document.getElementById("newCategory");
const newSubcategoryInput = document.getElementById("newSubcategory");
const categoryScopeButtons = document.querySelectorAll("[data-category-scope]");
const categoryPanels = document.querySelectorAll("[data-category-panel]");
const expenseCategoryChart = document.getElementById("expenseCategoryChart");
const incomeSubcategoryChart = document.getElementById("incomeSubcategoryChart");
const expenseSubcategoryChart = document.getElementById("expenseSubcategoryChart");
const toggleSubcategoryButton = document.getElementById("toggleSubcategoryChart");
const toggleExpenseCategoryButton = document.getElementById("toggleExpenseCategoryChart");
const expensePie = document.getElementById("expensePie");
const expenseSubcategoryPie = document.getElementById("expenseSubcategoryPie");
const toggleExpenseSubcategoryPieButton = document.getElementById("toggleExpenseSubcategoryPie");
const expenseSubcategoryPiePanel = document.getElementById("expenseSubcategoryPiePanel");
const incomePie = document.getElementById("incomePie");
const reportLineChart = document.getElementById("reportLineChart");
const reportChartTooltip = document.getElementById("reportChartTooltip");
const categoryManager = document.getElementById("categoryManager");
const rootDropzone = document.querySelector("[data-dropzone-root]");
const filterTabs = document.querySelectorAll("[data-filter]");
const navLinks = document.querySelectorAll("[data-view-target]");
const views = document.querySelectorAll("[data-view]");
const viewTitle = document.getElementById("viewTitle");
const layoutButtons = document.querySelectorAll("[data-layout]");
const reportStartInput = document.getElementById("reportStart");
const reportEndInput = document.getElementById("reportEnd");
const applyReportRangeButton = document.getElementById("applyReportRange");
const reportMonthSelect = document.getElementById("reportMonthSelect");
const reportRangeButtons = document.querySelectorAll("[data-report-range]");
const reportGranularityButtons = document.querySelectorAll("[data-report-granularity]");
const reportIncomeEl = document.getElementById("reportIncome");
const reportExpenseEl = document.getElementById("reportExpense");
const reportBalanceEl = document.getElementById("reportBalance");
const reportTransactionsCountEl = document.getElementById("reportTransactionsCount");
const reportExpenseCategories = document.getElementById("reportExpenseCategories");
const reportExpenseSubcategories = document.getElementById("reportExpenseSubcategories");
const reportIncomeSubcategories = document.getElementById("reportIncomeSubcategories");
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
const capitalAssetOwner = document.getElementById("capitalAssetOwner");
const capitalAssetType = document.getElementById("capitalAssetType");
const capitalAssetCurrency = document.getElementById("capitalAssetCurrency");
const capitalAssetBuyRate = document.getElementById("capitalAssetBuyRate");
const capitalAssetAmount = document.getElementById("capitalAssetAmount");
const capitalAssetInvested = document.getElementById("capitalAssetInvested");
const capitalSubcategorySelect = document.getElementById("capitalAssetSubcategory");
const capitalAssetMaturityDate = document.getElementById("capitalAssetMaturityDate");
const capitalAssetLiquidity = document.getElementById("capitalAssetLiquidity");
const capitalAssetExpectedProfit = document.getElementById("capitalAssetExpectedProfit");
const capitalAssetNote = document.getElementById("capitalAssetNote");
const capitalAssetClose = document.getElementById("capitalAssetClose");
const capitalAssetArchive = document.getElementById("capitalAssetArchive");
const capitalAssetDelete = document.getElementById("capitalAssetDelete");
const capitalAssetDrawerTitle = document.getElementById("capitalAssetDrawerTitle");
const assetDetailsOverlay = document.getElementById("assetDetailsOverlay");
const assetDetailsModal = document.getElementById("assetDetailsModal");
const assetDetailsClose = document.getElementById("assetDetailsClose");
const assetDetailsTitle = document.getElementById("assetDetailsTitle");
const assetDetailsMeta = document.getElementById("assetDetailsMeta");
const assetDetailsCurrent = document.getElementById("assetDetailsCurrent");
const assetDetailsInvested = document.getElementById("assetDetailsInvested");
const assetDetailsProfit = document.getElementById("assetDetailsProfit");
const assetDetailsHistory = document.getElementById("assetDetailsHistory");
const assetHistoryClear = document.getElementById("assetHistoryClear");
const assetOperationForm = document.getElementById("assetOperationForm");
const assetOperationType = document.getElementById("assetOperationType");
const assetOperationAmount = document.getElementById("assetOperationAmount");
const assetOperationNote = document.getElementById("assetOperationNote");
const assetDetailsEdit = document.getElementById("assetDetailsEdit");
const assetDetailsArchive = document.getElementById("assetDetailsArchive");
const assetDetailsDelete = document.getElementById("assetDetailsDelete");
const assetDetailsPrev = document.getElementById("assetDetailsPrev");
const assetDetailsNext = document.getElementById("assetDetailsNext");
const assetDetailsMode = document.getElementById("assetDetailsMode");
const assetOperationUndo = document.getElementById("assetOperationUndo");
const assetTemplateButtons = document.querySelectorAll("[data-asset-template]");
const toast = document.getElementById("toast");
const transactionEditOverlay = document.getElementById("transactionEditOverlay");
const transactionEditModal = document.getElementById("transactionEditModal");
const transactionEditForm = document.getElementById("transactionEditForm");
const transactionEditClose = document.getElementById("transactionEditClose");
const capitalCategoryModalOverlay = document.getElementById("capitalCategoryModalOverlay");
const capitalCategoryModal = document.getElementById("capitalCategoryModal");
const capitalCategoryModalForm = document.getElementById("capitalCategoryModalForm");
const capitalCategoryModalTitle = document.getElementById("capitalCategoryModalTitle");
const capitalCategoryModalInput = document.getElementById("capitalCategoryModalInput");
const capitalCategoryModalSubmit = document.getElementById("capitalCategoryModalSubmit");
const capitalCategoryModalClose = document.getElementById("capitalCategoryModalClose");
const editDateInput = document.getElementById("editDate");
const editTypeInput = document.getElementById("editType");
const editCategoryInput = document.getElementById("editCategory");
const editSubcategoryInput = document.getElementById("editSubcategory");
const editAmountInput = document.getElementById("editAmount");
const editNoteInput = document.getElementById("editNote");

const ensureFloatingTransactionEditModal = () => {
  if (!transactionEditOverlay || !transactionEditModal) {
    return;
  }
  if (transactionEditOverlay.parentElement !== document.body) {
    document.body.appendChild(transactionEditOverlay);
  }
  if (transactionEditModal.parentElement !== document.body) {
    document.body.appendChild(transactionEditModal);
  }
};

const ensureFloatingAssetDetailsModal = () => {
  if (!assetDetailsOverlay || !assetDetailsModal) {
    return;
  }
  if (assetDetailsOverlay.parentElement !== document.body) {
    document.body.appendChild(assetDetailsOverlay);
  }
  if (assetDetailsModal.parentElement !== document.body) {
    document.body.appendChild(assetDetailsModal);
  }
};
const selfTestPanel = document.getElementById("selfTestPanel");
const capitalAssetsList = document.getElementById("capitalAssetsList");
const capitalAssetSearch = document.getElementById("capitalAssetSearch");
const capitalAssetTypeFilter = document.getElementById("capitalAssetTypeFilter");
const capitalAssetLiquidityFilter = document.getElementById("capitalAssetLiquidityFilter");
const capitalAssetOwnerFilter = document.getElementById("capitalAssetOwnerFilter");
const capitalAssetSort = document.getElementById("capitalAssetSort");
const capitalAssetSortDir = document.getElementById("capitalAssetSortDir");
const capitalAssetClosedToggle = document.getElementById("capitalAssetClosedToggle");
const capitalAssetFiltersReset = document.getElementById("capitalAssetFiltersReset");
const capitalAssetActiveFilters = document.getElementById("capitalAssetActiveFilters");
const capitalAssetOwnerPresetButtons = document.querySelectorAll("[data-owner-preset]");
const capitalAssetShown = document.getElementById("capitalAssetShown");
const capitalAssetsSummaryTotal = document.getElementById("capitalAssetsSummaryTotal");
const capitalAssetsSummaryInvested = document.getElementById("capitalAssetsSummaryInvested");
const capitalAssetsSummaryProfit = document.getElementById("capitalAssetsSummaryProfit");
const capitalAssetsSummaryPercent = document.getElementById("capitalAssetsSummaryPercent");
const capitalAssetsSummaryWarning = document.getElementById("capitalAssetsSummaryWarning");
const capitalAssetsExpectedProfit = document.getElementById("capitalAssetsExpectedProfit");
const capitalAssetsNetAfterDebts = document.getElementById("capitalAssetsNetAfterDebts");
const capitalAssetsRateInfo = document.getElementById("capitalAssetsRateInfo");
const capitalAssetsCategoryReport = document.getElementById("capitalAssetsCategoryReport");
const capitalAssetViewButtons = document.querySelectorAll("[data-capital-asset-view]");
const capitalAssetPanels = document.querySelectorAll("[data-capital-asset-panel]");
const addCapitalCategoryButton = document.getElementById("addCapitalCategory");
const capitalCategoryName = document.getElementById("capitalCategoryName");
const capitalCategoryList = document.getElementById("capitalCategoryList");
const capitalSubcategoryName = document.getElementById("capitalSubcategoryName");
const capitalSubcategoryList = document.getElementById("capitalSubcategoryList");
const capitalCategoryManager = document.getElementById("capitalCategoryManager");
const capitalCategoryDropzone = document.getElementById("capitalCategoryDropzone");
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

const STORAGE_KEY = "budget.transactions.v2";
const CATEGORY_KEY = "budget.categories.v3";
const VIEW_KEY = "budget.view.active";
const LAYOUT_KEY = "budget.layout";
const BACKUP_META_KEY = "budget.backup.meta.v1";
const CHART_LIMIT = 6;
const CAPITAL_KEY_V2 = "budget.capital.v2";
const CAPITAL_KEY_V1 = "budget.capital.v1";
const CAPITAL_MIGRATED_KEY = "budget.capital.migrated";
const CAPITAL_ASSETS_UI_KEY = "budget.capital.assets.uiState";

const showError = (message) => {
  if (!errorBanner) {
    alert(message);
    return;
  }
  errorBanner.textContent = message;
  errorBanner.classList.remove("is-hidden");
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

const formatType = (type) => (type === "income" ? "Доход" : "Расход");

const APP_SCOPE = (window.location.pathname || "/")
  .replace(/[^a-zA-Z0-9]/g, "_")
  .replace(/^_+|_+$/g, "") || "root";
const DB_NAME = `budgetAppDb.${APP_SCOPE}`;
const DB_VERSION = 1;
const DB_STORE = "kv";

const Storage = (() => {
  let dbInstance = null;

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
    if (!dbInstance) {
      dbInstance = await dbOpen();
    }
    return dbInstance;
  };

  const get = async (key) => {
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
    note: item.note || "",
    createdAt,
    updatedAt,
  };
};

const normalizeTransactions = (items) => {
  let migrated = false;
  const normalized = (Array.isArray(items) ? items : []).map((item) => {
    const next = normalizeTransaction(item || {});
    if (!item?.id || !item?.createdAt || !item?.updatedAt || !Number.isFinite(item?.amount)) {
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
let transactionFilters = { search: "", type: "all", category: "all" };
let selectedTransactionIds = new Set();
let showExpenseSubcategoryPieDetails = false;
let editingTransactionId = null;
let reportRange = { start: "", end: "" };
let capitalState = null;
let capitalOverviewFilter = "all";
let capitalEditingAssetId = null;
let selectedAssetDetailsId = null;
let activeView = "dashboard";
let currentLayout = "comfort";
const assetFilters = {
  search: "",
  type: "all",
  liquidity: "all",
  owner: "all",
  sort: "amount",
  direction: "desc",
  includeClosed: false,
};
let assetUiState = { groups: {}, subgroups: {} };
let capitalCategoryModalState = null;
let assetDetailsViewMode = "view";
let lastAssetOperationUndo = null;
let lastFxAutoUpdateAt = 0;

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
      owner: (asset.owner || "").trim(),
      invested,
      liquidity,
      liquidityDays: asset.liquidityDays ?? null,
      expectedProfit: isDeposit ? (asset.expectedProfit ?? null) : null,
      maturityDate,
      unconvertible: asset.unconvertible ?? false,
      history: Array.isArray(asset.history) ? asset.history : [],
      buyRate: asset.buyRate == null || asset.buyRate === "" ? null : sanitizeNumber(asset.buyRate, null),
      closedAt: asset.closedAt || null,
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

const getTransactionSortTimestamp = (item) => {
  const candidate = item?.createdAt || item?.updatedAt || item?.date;
  const ts = Date.parse(candidate || "");
  return Number.isFinite(ts) ? ts : 0;
};

const sortTransactionsForHistory = (source) =>
  source
    .slice()
    .sort((a, b) => {
      const byDate = String(b.date || "").localeCompare(String(a.date || ""));
      if (byDate !== 0) {
        return byDate;
      }
      const byCreated = getTransactionSortTimestamp(b) - getTransactionSortTimestamp(a);
      if (byCreated !== 0) {
        return byCreated;
      }
      return String(b.id).localeCompare(String(a.id));
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
  const totals = transactions.reduce(
    (acc, item) => {
      if (item.type === "income") {
        acc.income += item.amount;
      } else {
        acc.expense += item.amount;
      }
      return acc;
    },
    { income: 0, expense: 0 }
  );

  totalIncomeEl.textContent = currencyFormatter.format(totals.income);
  totalExpenseEl.textContent = currencyFormatter.format(totals.expense);
  balanceEl.textContent = currencyFormatter.format(totals.income - totals.expense);
  const percent = totals.income > 0 ? (totals.expense / totals.income) * 100 : 0;
  expensePercentEl.textContent = `${percent.toFixed(1)}% от доходов`;
};

const renderBackupMeta = async () => {
  if (!lastBackupAt) {
    return;
  }
  const raw = await Storage.get(BACKUP_META_KEY);
  if (!raw) {
    lastBackupAt.textContent = "Последний backup: —";
    return;
  }
  try {
    const meta = JSON.parse(raw);
    lastBackupAt.textContent = `Последний backup: ${new Date(meta.ts).toLocaleString("ru-RU")}`;
  } catch {
    lastBackupAt.textContent = "Последний backup: —";
  }
};

const getFilteredTransactions = () => {
  const search = transactionFilters.search.trim().toLowerCase();
  return transactions.filter((item) => {
    if (transactionFilters.type !== "all" && item.type !== transactionFilters.type) {
      return false;
    }
    if (transactionFilters.category !== "all" && item.category !== transactionFilters.category) {
      return false;
    }
    if (!search) {
      return true;
    }
    const hay = `${item.note} ${item.category} ${item.subcategory} ${item.amount} ${item.date}`.toLowerCase();
    return hay.includes(search);
  });
};

const renderTransactionFilterOptions = () => {
  if (!transactionCategoryFilter) {
    return;
  }
  const previous = transactionFilters.category;
  const categoriesSet = new Set(transactions.map((item) => item.category));
  transactionCategoryFilter.innerHTML = '<option value="all">Все категории</option>';
  [...categoriesSet].sort((a, b) => a.localeCompare(b, "ru")).forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    transactionCategoryFilter.appendChild(option);
  });
  transactionFilters.category = categoriesSet.has(previous) ? previous : "all";
  transactionCategoryFilter.value = transactionFilters.category;
};

const renderTable = () => {
  tableBody.innerHTML = "";
  const filtered = getFilteredTransactions();
  const displayList = sortTransactionsForHistory(filtered);
  renderTransactionFilterOptions();

  if (transactions.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 8;
    cell.textContent = "Пока нет операций. Добавьте первую запись.";
    cell.classList.add("hint");
    row.appendChild(cell);
    tableBody.appendChild(row);
    return;
  }

  if (displayList.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 8;
    cell.textContent = "По выбранным фильтрам операций не найдено.";
    cell.classList.add("hint");
    row.appendChild(cell);
    tableBody.appendChild(row);
    return;
  }

  displayList.forEach((item) => {
    const row = document.createElement("tr");
    const checked = selectedTransactionIds.has(item.id) ? "checked" : "";
    row.innerHTML = `
      <td><input type="checkbox" data-action="select-tx" data-id="${item.id}" ${checked} /></td>
      <td>${item.date}</td>
      <td><span class="tag ${item.type}">${formatType(item.type)}</span></td>
      <td>${item.category}</td>
      <td>${item.subcategory || "—"}</td>
      <td>${currencyFormatter.format(item.amount)}</td>
      <td>${item.note || "—"}</td>
      <td>
        <div class="table-actions">
          <button class="button secondary" data-action="edit-tx" data-id="${item.id}">Изменить</button>
          <button class="button secondary" data-action="delete-tx" data-id="${item.id}">Удалить</button>
        </div>
      </td>
    `;
    tableBody.appendChild(row);
  });

  if (deleteSelectedTransactionsButton) {
    deleteSelectedTransactionsButton.disabled = selectedTransactionIds.size === 0;
  }
};

const setTransactionEditModal = (isOpen) => {
  if (!transactionEditModal || !transactionEditOverlay) {
    return;
  }
  transactionEditModal.classList.toggle("is-open", isOpen);
  transactionEditModal.setAttribute("aria-hidden", String(!isOpen));
  transactionEditOverlay.classList.toggle("is-active", isOpen);
};

const openEditTransactionModal = (id) => {
  const current = transactions.find((item) => item.id === id);
  if (!current) {
    return;
  }
  editingTransactionId = id;
  editDateInput.value = current.date;
  editTypeInput.value = current.type;
  editCategoryInput.value = current.category;
  editSubcategoryInput.value = current.subcategory || "";
  editAmountInput.value = String(current.amount);
  editNoteInput.value = current.note || "";
  setTransactionEditModal(true);
};

const saveEditedTransaction = () => {
  if (!editingTransactionId) {
    return;
  }
  const index = transactions.findIndex((item) => item.id === editingTransactionId);
  if (index === -1) {
    return;
  }
  const amount = Number.parseFloat(editAmountInput.value);
  if (!editDateInput.value || !editCategoryInput.value.trim() || !Number.isFinite(amount) || amount <= 0) {
    showError("Заполните дату, категорию и сумму больше нуля.");
    return;
  }
  const current = transactions[index];
  const before = { ...current };
  transactions[index] = touchTransaction(current, {
    date: editDateInput.value,
    type: editTypeInput.value,
    category: editCategoryInput.value.trim(),
    subcategory: editSubcategoryInput.value.trim(),
    amount,
    note: editNoteInput.value.trim(),
  });
  recordUndo("editTx", { before });
  Storage.set(STORAGE_KEY, JSON.stringify(transactions));
  setTransactionEditModal(false);
  editingTransactionId = null;
  render();
};

const buildTotals = (filterType, source = transactions) => {
  return source
    .filter((item) => (filterType ? item.type === filterType : true))
    .reduce(
      (acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + item.amount;
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
        const key = `${item.category} · ${item.subcategory}`;
        acc[key] = (acc[key] || 0) + item.amount;
        return acc;
      },
      {}
    );
};

const renderChart = (container, totals, emptyText, options = {}) => {
  if (!container) {
    return;
  }
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
  visibleEntries.forEach(([label, value], index) => {
    const row = document.createElement("div");
    row.className = "chart-row";

    const legend = document.createElement("div");
    legend.className = "chart-legend";

    const swatch = document.createElement("span");
    swatch.className = "chart-swatch";
    swatch.style.background = palette[index % palette.length];

    const name = document.createElement("span");
    name.textContent = label;

    legend.appendChild(swatch);
    legend.appendChild(name);

    const barWrapper = document.createElement("div");
    barWrapper.className = "chart-bar";

    const bar = document.createElement("span");
    bar.style.width = `${Math.max((value / maxValue) * 100, 6)}%`;
    bar.style.background = palette[index % palette.length];
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

const buildPie = (totals) => {
  const entries = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  const total = entries.reduce((sum, [, value]) => sum + value, 0);
  if (total === 0) {
    return { entries: [], total };
  }
  return { entries, total };
};

const renderPie = (container, totals, emptyText) => {
  if (!container) {
    return;
  }
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
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 220 220");
  svg.classList.add("pie-ring-svg");

  const tooltip = document.createElement("div");
  tooltip.className = "pie-tooltip is-hidden";

  const totalLabel = document.createElement("div");
  totalLabel.className = "pie-total";
  const resetCenter = () => {
    totalLabel.innerHTML = `<span>Итого</span><strong>${currencyFormatter.format(total)}</strong>`;
  };
  resetCenter();

  const centerX = 110;
  const centerY = 110;
  const radius = 92;
  const strokeWidth = 30;
  let currentAngle = -90;

  const polarToCartesian = (cx, cy, r, angle) => {
    const rad = (angle * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  entries.forEach(([label, value], index) => {
    const portion = (value / total) * 360;
    const endAngle = currentAngle + portion;
    const start = polarToCartesian(centerX, centerY, radius, currentAngle);
    const end = polarToCartesian(centerX, centerY, radius, endAngle);
    const largeArc = portion > 180 ? 1 : 0;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const d = `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`;
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", palette[index % palette.length]);
    path.setAttribute("stroke-width", String(strokeWidth));
    path.setAttribute("stroke-linecap", "butt");
    path.classList.add("pie-segment");

    const percent = (value / total) * 100;
    const detail = `${label}: ${currencyFormatter.format(value)} (${percent.toFixed(1)}%)`;

    const showSegment = (event) => {
      path.classList.add("is-active");
      totalLabel.innerHTML = `<span>${label}</span><strong>${currencyFormatter.format(value)}</strong>`;
      tooltip.textContent = detail;
      tooltip.classList.remove("is-hidden");
      const rect = visual.getBoundingClientRect();
      tooltip.style.left = `${event.clientX - rect.left + 10}px`;
      tooltip.style.top = `${event.clientY - rect.top - 8}px`;
    };
    const hideSegment = () => {
      path.classList.remove("is-active");
      tooltip.classList.add("is-hidden");
      resetCenter();
    };

    path.addEventListener("mouseenter", showSegment);
    path.addEventListener("mousemove", showSegment);
    path.addEventListener("mouseleave", hideSegment);

    svg.appendChild(path);
    currentAngle = endAngle;
  });

  ring.appendChild(svg);
  visual.appendChild(ring);
  visual.appendChild(totalLabel);
  visual.appendChild(tooltip);

  const legend = document.createElement("div");
  legend.className = "pie-legend";

  entries.forEach(([label, value], index) => {
    const percent = (value / total) * 100;
    const item = document.createElement("div");
    item.className = "pie-legend-item";

    const swatch = document.createElement("span");
    swatch.className = "pie-swatch";
    swatch.style.background = palette[index % palette.length];

    const text = document.createElement("div");
    text.innerHTML = `<strong>${label}</strong><span>${currencyFormatter.format(value)} · ${percent.toFixed(1)}%</span>`;

    item.appendChild(swatch);
    item.appendChild(text);
    legend.appendChild(item);
  });

  chart.appendChild(visual);
  chart.appendChild(legend);
  container.appendChild(chart);
};

const showReportTooltip = (event, text) => {
  if (!reportChartTooltip) {
    return;
  }
  reportChartTooltip.textContent = text;
  reportChartTooltip.classList.remove("is-hidden");
  const bounds = reportLineChart.getBoundingClientRect();
  const offsetX = event.clientX - bounds.left + 12;
  const offsetY = event.clientY - bounds.top - 12;
  reportChartTooltip.style.left = `${offsetX}px`;
  reportChartTooltip.style.top = `${offsetY}px`;
};

const hideReportTooltip = () => {
  if (reportChartTooltip) {
    reportChartTooltip.classList.add("is-hidden");
  }
};

const renderLineChart = (target, data) => {
  target.innerHTML = "";
  hideReportTooltip();

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
    line.classList.add("report-line");
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

  const drawPoints = (values, color, typeLabel) => {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    values.forEach((value, index) => {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", scaleX(index));
      circle.setAttribute("cy", scaleY(value));
      circle.setAttribute("r", "4.5");
      circle.setAttribute("fill", "#fff");
      circle.setAttribute("stroke", color);
      circle.setAttribute("stroke-width", "2.5");
      circle.classList.add("report-point");
      const tooltipText = `${data[index].label} • ${typeLabel}: ${currencyFormatter.format(value)}`;
      circle.addEventListener("mouseenter", (event) => showReportTooltip(event, tooltipText));
      circle.addEventListener("mousemove", (event) => showReportTooltip(event, tooltipText));
      circle.addEventListener("mouseleave", hideReportTooltip);
      circle.addEventListener("blur", hideReportTooltip);
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
    label.textContent = currencyFormatter.format(value).replace(",00", "");
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
  const incomePoints = drawPoints(data.map((item) => item.income), "#16a34a", "Доходы");
  const expensePoints = drawPoints(data.map((item) => item.expense), "#ea580c", "Расходы");

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
    dataMap[key][item.type] += item.amount;
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

  renderChart(
    incomeSubcategoryChart,
    incomeSubcategoryTotals,
    "Добавьте доходы с подкатегориями, чтобы увидеть диаграмму.",
    { limit: CHART_LIMIT }
  );
  renderChart(
    expenseCategoryChart,
    expenseCategoryTotals,
    "Добавьте расходы, чтобы увидеть диаграмму.",
    { limit: showAllExpenseCategories ? null : CHART_LIMIT }
  );
  renderChart(
    expenseSubcategoryChart,
    expenseSubcategoryTotals,
    "Добавьте расходы с подкатегориями, чтобы увидеть детализацию.",
    { limit: showAllSubcategories ? null : CHART_LIMIT }
  );
  renderPie(
    expensePie,
    expenseCategoryTotals,
    "Добавьте расходы, чтобы увидеть диаграмму."
  );
  if (expenseSubcategoryPiePanel) {
    expenseSubcategoryPiePanel.classList.toggle("is-hidden", !showExpenseSubcategoryPieDetails);
  }
  if (toggleExpenseSubcategoryPieButton) {
    toggleExpenseSubcategoryPieButton.textContent = showExpenseSubcategoryPieDetails ? "Скрыть детали" : "Подробнее";
  }
  if (showExpenseSubcategoryPieDetails) {
    renderPie(
      expenseSubcategoryPie,
      expenseSubcategoryTotals,
      "Добавьте расходы с подкатегориями, чтобы увидеть диаграмму."
    );
  }

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
  renderCapitalCategories();
  renderCapitalAssetCategoryOptions();
  updateTransactionFormState();
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

const renderReportMonthOptions = () => {
  if (!reportMonthSelect) {
    return;
  }
  const previous = reportMonthSelect.value;
  const months = [...new Set(transactions.map((item) => item.date.slice(0, 7)))].sort().reverse();
  reportMonthSelect.innerHTML = '<option value="">Выбрать месяц</option>';
  months.forEach((month) => {
    const option = document.createElement("option");
    option.value = month;
    const [y, m] = month.split("-");
    const date = new Date(Number(y), Number(m) - 1, 1);
    option.textContent = date.toLocaleDateString("ru-RU", { month: "long", year: "numeric" });
    reportMonthSelect.appendChild(option);
  });
  reportMonthSelect.value = months.includes(previous) ? previous : "";
};

const renderReports = () => {
  renderReportMonthOptions();
  const filtered = filterTransactionsByRange(transactions);
  const totals = filtered.reduce(
    (acc, item) => {
      if (item.type === "income") {
        acc.income += item.amount;
      } else {
        acc.expense += item.amount;
      }
      return acc;
    },
    { income: 0, expense: 0 }
  );

  reportIncomeEl.textContent = currencyFormatter.format(totals.income);
  reportExpenseEl.textContent = currencyFormatter.format(totals.expense);
  reportBalanceEl.textContent = currencyFormatter.format(totals.income - totals.expense);
  reportTransactionsCountEl.textContent = filtered.length;

  const expenseCategoryTotals = buildTotals("expense", filtered);
  const expenseSubcategoryTotals = buildSubTotals("expense", filtered);
  const incomeSubcategoryTotals = buildSubTotals("income", filtered);

  renderChart(
    reportExpenseCategories,
    expenseCategoryTotals,
    "Нет расходов за выбранный период.",
    { limit: 8 }
  );
  renderChart(
    reportExpenseSubcategories,
    expenseSubcategoryTotals,
    "Нет расходов с подкатегориями за выбранный период.",
    { limit: 8 }
  );
  renderChart(
    reportIncomeSubcategories,
    incomeSubcategoryTotals,
    "Нет доходов с подкатегориями за выбранный период.",
    { limit: 8 }
  );

  const seriesFormatter = reportGranularity === "monthly"
    ? (date) => date.slice(0, 7)
    : (date) => date;
  renderLineChart(reportLineChart, buildSeries(seriesFormatter, filtered));
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

const showToast = (message) => {
  if (!toast) {
    return;
  }
  toast.textContent = message;
  toast.classList.remove("is-hidden");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.add("is-hidden");
  }, 2200);
};

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

const capitalGetAssetConversionMeta = (asset) => {
  const baseCurrency = capitalState.settings.baseCurrency;
  if (!asset || asset.currency === baseCurrency) {
    return { rate: 1, source: "base" };
  }
  const fxRate = sanitizeNumber(capitalState.settings.fxRates?.[asset.currency], 0);
  if (fxRate > 0) {
    return { rate: fxRate, source: "fx" };
  }
  const buyRate = sanitizeNumber(asset.buyRate, 0);
  if (buyRate > 0) {
    return { rate: buyRate, source: "buyRate" };
  }
  return { rate: null, source: "none" };
};

const assetValueInBase = (asset, field) => {
  const value = field === "invested" ? (asset.invested ?? asset.amount ?? 0) : asset.amount;
  if (asset.currency === capitalState.settings.baseCurrency) {
    return value;
  }
  if (field === "invested") {
    const buyRate = sanitizeNumber(asset.buyRate, 0);
    if (buyRate > 0) {
      return sanitizeNumber(value, 0) * buyRate;
    }
  }
  const conversion = capitalGetAssetConversionMeta(asset);
  if (conversion.rate == null) {
    return null;
  }
  return sanitizeNumber(value, 0) * conversion.rate;
};

const assetExpectedProfitInBase = (asset) => {
  if (asset.expectedProfit == null || asset.expectedProfit === "") {
    return null;
  }
  const value = sanitizeNumber(asset.expectedProfit, 0);
  if (asset.currency === capitalState.settings.baseCurrency) {
    return value;
  }
  const conversion = capitalGetAssetConversionMeta(asset);
  if (conversion.rate == null) {
    return null;
  }
  return value * conversion.rate;
};

const getProfitMeta = (amount, invested) => {
  const profit = amount - invested;
  const percent = invested > 0 ? (profit / invested) * 100 : null;
  const isValid = Number.isFinite(percent) && Math.abs(percent) <= 999;
  return { profit, percent: isValid ? percent : null, needsCheck: !isValid };
};

const capitalFxEndpoint = "https://api.frankfurter.app";
const capitalFxFallbackEndpoint = "https://open.er-api.com/v6";

const capitalFetchRate = async (base, currency) => {
  // Return: how many `base` units for 1 `currency` unit.
  const from = encodeURIComponent(currency);
  const to = encodeURIComponent(base);
  const providers = [
    `${capitalFxEndpoint}/latest?from=${from}&to=${to}`,
    `${capitalFxFallbackEndpoint}/latest/${from}`,
  ];

  let lastError = null;
  for (const url of providers) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`FX fetch failed: ${response.status}`);
      }
      const data = await response.json();
      const rate = data?.rates?.[base];
      if (typeof rate === "number" && Number.isFinite(rate) && rate > 0) {
        return rate;
      }
      throw new Error("No rate");
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("FX fetch failed");
};

const capitalFetchSeries = async (base, currency) => {
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 29);
  const startDate = start.toISOString().slice(0, 10);
  const endDate = end.toISOString().slice(0, 10);
  const url = `${capitalFxEndpoint}/${startDate}..${endDate}?from=${encodeURIComponent(currency)}&to=${encodeURIComponent(base)}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("FX series fetch failed");
  }
  const data = await response.json();
  const entries = Object.entries(data?.rates || {}).sort(([a], [b]) => a.localeCompare(b));
  return entries.map(([date, rates]) => ({ date, value: rates[base] })).filter((item) => item.value);
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

const refreshFxRatesForUsedCurrencies = async (force = false) => {
  const base = capitalState?.settings?.baseCurrency || "RUB";
  const now = Date.now();
  if (!force && now - lastFxAutoUpdateAt < 2 * 60 * 1000) {
    return;
  }
  const currencies = new Set([
    ...(capitalState.assets || []).map((item) => (item.currency || "").trim().toUpperCase()),
    ...(capitalState.debts || []).map((item) => (item.currency || "").trim().toUpperCase()),
  ]);
  currencies.delete("");
  currencies.delete(base);
  if (!currencies.size) {
    lastFxAutoUpdateAt = now;
    return;
  }
  let changed = false;
  let successCount = 0;
  await Promise.all([...currencies].map(async (currency) => {
    try {
      const rate = await capitalFetchRate(base, currency);
      if (rate && capitalState.settings.fxRates[currency] !== rate) {
        capitalState.settings.fxRates[currency] = rate;
        changed = true;
      }
      if (rate) {
        successCount += 1;
      }
    } catch (_error) {
      // leave previous value; UI can fallback to buyRate
    }
  }));
  if (successCount > 0) {
    lastFxAutoUpdateAt = now;
  }
  if (changed) {
    saveCapitalV2(capitalState);
    renderCapitalView();
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

const capitalizeAssetTypeByCategoryName = (categoryName = "") => {
  const normalized = String(categoryName || "").trim().toLowerCase();
  if (!normalized) {
    return "other";
  }
  if (normalized.includes("вклад") || normalized.includes("депозит")) {
    return "deposit";
  }
  if (normalized.includes("налич")) {
    return "cash";
  }
  if (normalized.includes("банк") || normalized.includes("счет") || normalized.includes("счёт")) {
    return "bank";
  }
  if (normalized.includes("инвест") || normalized.includes("рынок") || normalized.includes("крипт")) {
    return "investment";
  }
  if (normalized.includes("недвиж") || normalized.includes("участ")) {
    return "real_estate";
  }
  return "other";
};

const getAssetTypeForCategory = (categoryName = "") => {
  if (!categoryName) {
    return "other";
  }
  const related = (capitalState?.assets || []).filter((asset) => (asset.category || "") === categoryName);
  if (!related.length) {
    return capitalizeAssetTypeByCategoryName(categoryName);
  }
  const stats = related.reduce((acc, asset) => {
    const key = asset.type || "other";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(stats).sort((a, b) => b[1] - a[1])[0]?.[0] || capitalizeAssetTypeByCategoryName(categoryName);
};

const getSelectedCapitalAssetCategory = () => {
  if (!capitalAssetType) {
    return "";
  }
  const option = capitalAssetType.options[capitalAssetType.selectedIndex];
  return option?.dataset?.category || option?.value || option?.textContent?.trim() || "";
};

const getSelectedCapitalAssetType = () => {
  if (!capitalAssetType) {
    return "other";
  }
  const option = capitalAssetType.options[capitalAssetType.selectedIndex];
  return option?.dataset?.type || "other";
};

const renderCapitalAssetCategoryOptions = (preferredCategory = "") => {
  if (!capitalAssetType || !capitalState) {
    return;
  }
  const categories = capitalizeAssetCategories();
  const fallback = ["cash", "bank", "deposit", "investment", "real_estate", "other"].map((type) => ({
    name: capitalTypeLabel(type),
    type,
  }));
  const source = categories.length
    ? categories.map((category) => ({ name: category.name, type: getAssetTypeForCategory(category.name) }))
    : fallback;
  const currentCategory = getSelectedCapitalAssetCategory();
  const categoryToSelect = preferredCategory || currentCategory || source[0]?.name || "";

  capitalAssetType.innerHTML = "";
  source.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.name;
    option.dataset.category = item.name;
    option.dataset.type = item.type;
    option.textContent = item.name;
    capitalAssetType.appendChild(option);
  });

  const options = [...capitalAssetType.options];
  const matchIndex = options.findIndex((option) => option.dataset.category === categoryToSelect);
  if (matchIndex >= 0) {
    capitalAssetType.selectedIndex = matchIndex;
  } else if (options.length) {
    capitalAssetType.selectedIndex = 0;
  }
};

const assetOperationLabel = (type) => ({
  deposit: "Пополнение",
  withdraw: "Списание",
  adjust: "Корректировка",
  note: "Заметка",
  create: "Создание",
  update: "Изменение",
  close: "Закрытие",
  reopen: "Повторное открытие",
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

const findCapitalCategory = (name) =>
  capitalState.assetCategories.find((category) => category.name === name);

const renderCapitalCategoryHints = () => {
  if (capitalCategoryList) {
    capitalCategoryList.innerHTML = "";
    capitalizeAssetCategories().forEach((category) => {
      const option = document.createElement("option");
      option.value = category.name;
      capitalCategoryList.appendChild(option);
    });
  }
  if (capitalSubcategoryList) {
    const activeCategory = capitalCategoryName?.value?.trim();
    const subs = activeCategory
      ? [...(findCapitalCategory(activeCategory)?.subs || [])].sort((a, b) => a.localeCompare(b, "ru"))
      : capitalizeAssetCategories().flatMap((category) => category.subs || []);
    const uniqueSubs = [...new Set(subs)];
    capitalSubcategoryList.innerHTML = "";
    uniqueSubs.forEach((sub) => {
      const option = document.createElement("option");
      option.value = sub;
      capitalSubcategoryList.appendChild(option);
    });
  }
};

const saveAndRenderCapitalCategories = () => {
  saveCapitalV2(capitalState);
  renderCapitalCategories();
  renderCapitalCategoryHints();
  renderCapitalAssetCategoryOptions();
  renderCapitalSubcategoryOptions(capitalSubcategorySelect?.value || "");
  renderCapitalAssets();
  renderCapitalSummary();
  renderCapitalLedger();
  renderCapitalStructureCharts();
  renderCapitalOverview();
  if (selectedAssetDetailsId) {
    openAssetDetailsModal(selectedAssetDetailsId);
  }
};

const renameCapitalCategory = (oldName, newName) => {
  if (!newName || oldName === newName || findCapitalCategory(newName)) {
    return;
  }
  const category = findCapitalCategory(oldName);
  if (!category) {
    return;
  }
  category.name = newName;
  capitalState.assets = capitalState.assets.map((asset) =>
    asset.category === oldName ? { ...asset, category: newName, updatedAt: capitalNowIso() } : asset
  );
  saveAndRenderCapitalCategories();
};

const renameCapitalSubcategory = (categoryName, oldName, newName) => {
  if (!newName || oldName === newName) {
    return;
  }
  const category = findCapitalCategory(categoryName);
  if (!category) {
    return;
  }
  category.subs = category.subs.map((item) => (item === oldName ? newName : item));
  capitalState.assets = capitalState.assets.map((asset) =>
    asset.category === categoryName && asset.subcategory === oldName
      ? { ...asset, subcategory: newName, updatedAt: capitalNowIso() }
      : asset
  );
  saveAndRenderCapitalCategories();
};

const deleteCapitalSubcategory = (categoryName, subName) => {
  const category = findCapitalCategory(categoryName);
  if (!category) {
    return;
  }
  category.subs = category.subs.filter((item) => item !== subName);
  capitalState.assets = capitalState.assets.map((asset) =>
    asset.category === categoryName && asset.subcategory === subName
      ? { ...asset, subcategory: "", updatedAt: capitalNowIso() }
      : asset
  );
  saveAndRenderCapitalCategories();
};

const deleteCapitalCategory = (categoryName) => {
  const remaining = capitalizeAssetCategories().filter((item) => item.name !== categoryName);
  if (!remaining.length) {
    alert("Нужна хотя бы одна категория.");
    return;
  }
  const fallback = remaining[0].name;
  capitalState.assetCategories = capitalState.assetCategories.filter((category) => category.name !== categoryName);
  capitalState.assets = capitalState.assets.map((asset) =>
    asset.category === categoryName
      ? { ...asset, category: fallback, subcategory: "", updatedAt: capitalNowIso() }
      : asset
  );
  saveAndRenderCapitalCategories();
};

const moveCapitalSubcategory = (fromCategory, subName, toCategory) => {
  if (fromCategory === toCategory) {
    return;
  }
  const from = findCapitalCategory(fromCategory);
  const to = findCapitalCategory(toCategory);
  if (!from || !to) {
    return;
  }
  from.subs = from.subs.filter((item) => item !== subName);
  if (!to.subs.includes(subName)) {
    to.subs.push(subName);
  }
  capitalState.assets = capitalState.assets.map((asset) =>
    asset.category === fromCategory && asset.subcategory === subName
      ? { ...asset, category: toCategory, updatedAt: capitalNowIso() }
      : asset
  );
  saveAndRenderCapitalCategories();
};

const moveCapitalCategoryToCategory = (fromCategory, toCategory) => {
  if (fromCategory === toCategory) {
    return;
  }
  const from = findCapitalCategory(fromCategory);
  const to = findCapitalCategory(toCategory);
  if (!from || !to) {
    return;
  }
  to.subs = [...new Set([...(to.subs || []), fromCategory, ...(from.subs || [])])];
  capitalState.assetCategories = capitalState.assetCategories.filter((category) => category.name !== fromCategory);
  capitalState.assets = capitalState.assets.map((asset) => {
    if (asset.category !== fromCategory) {
      return asset;
    }
    const nextSubcategory = asset.subcategory || fromCategory;
    return { ...asset, category: toCategory, subcategory: nextSubcategory, updatedAt: capitalNowIso() };
  });
  saveAndRenderCapitalCategories();
};

const promoteCapitalSubcategoryToCategory = (fromCategory, subName) => {
  if (findCapitalCategory(subName)) {
    return;
  }
  const from = findCapitalCategory(fromCategory);
  if (!from) {
    return;
  }
  from.subs = from.subs.filter((item) => item !== subName);
  capitalState.assetCategories.push({ name: subName, subs: [] });
  capitalState.assets = capitalState.assets.map((asset) =>
    asset.category === fromCategory && asset.subcategory === subName
      ? { ...asset, category: subName, subcategory: "", updatedAt: capitalNowIso() }
      : asset
  );
  saveAndRenderCapitalCategories();
};

const renderCapitalSubcategoryOptions = (preferred = "") => {
  if (!capitalSubcategorySelect) {
    return;
  }
  const resolvedCategory = getSelectedCapitalAssetCategory();
  const category = findCapitalCategory(resolvedCategory);
  const subcategories = [...(category?.subs || [])].sort((a, b) => a.localeCompare(b, "ru"));

  capitalSubcategorySelect.innerHTML = '<option value="">Без подкатегории</option>';
  subcategories.forEach((sub) => {
    const option = document.createElement("option");
    option.value = sub;
    option.textContent = sub;
    capitalSubcategorySelect.appendChild(option);
  });

  capitalSubcategorySelect.value = subcategories.includes(preferred) ? preferred : "";
};

const renderCapitalCategories = () => {
  if (!capitalCategoryManager || !capitalState) {
    return;
  }
  capitalCategoryManager.innerHTML = "";

  const sorted = capitalizeAssetCategories();
  sorted.forEach((category) => {
    const subs = category.subs || [];
    const card = document.createElement("div");
    card.className = "category-card capital-category-card";
    card.dataset.capitalCategory = category.name;
    card.draggable = true;

    const header = document.createElement("div");
    header.className = "category-card-header";

    const title = document.createElement("div");
    title.innerHTML = `<strong>${category.name}</strong><span>${subs.length} подкатегорий</span>`;

    const badge = document.createElement("span");
    badge.className = "type-badge expense";
    badge.textContent = "Капитал";

    const actions = document.createElement("div");
    actions.className = "category-actions";
    actions.innerHTML = `
      <button class="chip" data-action="rename-capital-category" data-category="${category.name}">Переименовать</button>
      <button class="chip danger" data-action="delete-capital-category" data-category="${category.name}">Удалить</button>
    `;

    const list = document.createElement("div");
    list.className = "subcategory-list";
    list.dataset.capitalDropzone = category.name;

    if (!subs.length) {
      const empty = document.createElement("p");
      empty.className = "hint";
      empty.textContent = "Нет подкатегорий";
      list.appendChild(empty);
    }

    subs.forEach((sub) => {
      const row = document.createElement("div");
      row.className = "subcategory-row capital-subcategory-row";
      row.draggable = true;
      row.dataset.capitalCategory = category.name;
      row.dataset.capitalSubcategory = sub;
      row.innerHTML = `
        <span>${sub}</span>
        <div class="subcategory-tools">
          <button class="chip" data-action="rename-capital-subcategory" data-category="${category.name}" data-subcategory="${sub}">Редактировать</button>
          <button class="chip danger" data-action="delete-capital-subcategory" data-category="${category.name}" data-subcategory="${sub}">Удалить</button>
        </div>
      `;
      list.appendChild(row);
    });

    header.appendChild(title);
    header.appendChild(badge);
    header.appendChild(actions);
    card.appendChild(header);
    card.appendChild(list);
    capitalCategoryManager.appendChild(card);
  });
  renderCapitalCategoryHints();
};

const handleCapitalDragStart = (event) => {
  const subRow = event.target.closest(".capital-subcategory-row");
  const card = event.target.closest(".capital-category-card");
  if (subRow) {
    event.dataTransfer.setData("text/plain", JSON.stringify({
      type: "subcategory",
      category: subRow.dataset.capitalCategory,
      subcategory: subRow.dataset.capitalSubcategory,
    }));
    event.dataTransfer.effectAllowed = "move";
    subRow.classList.add("is-dragging");
    return;
  }
  if (card) {
    event.dataTransfer.setData("text/plain", JSON.stringify({
      type: "category",
      category: card.dataset.capitalCategory,
    }));
    event.dataTransfer.effectAllowed = "move";
    card.classList.add("is-dragging");
  }
};

const handleCapitalDragEnd = (event) => {
  const row = event.target.closest(".capital-subcategory-row");
  const card = event.target.closest(".capital-category-card");
  if (row) row.classList.remove("is-dragging");
  if (card) card.classList.remove("is-dragging");
};

const handleCapitalDrop = (event) => {
  const list = event.target.closest(".subcategory-list");
  const dropzone = event.target.closest("#capitalCategoryDropzone");
  event.preventDefault();
  if (list) list.classList.remove("is-drop-target");
  if (dropzone) dropzone.classList.remove("is-drop-target");
  const payload = event.dataTransfer.getData("text/plain");
  if (!payload) return;
  const data = JSON.parse(payload);
  const targetCategory = list ? list.dataset.capitalDropzone : null;
  if (list && targetCategory) {
    if (data.type === "subcategory") {
      moveCapitalSubcategory(data.category, data.subcategory, targetCategory);
    }
    if (data.type === "category") {
      moveCapitalCategoryToCategory(data.category, targetCategory);
    }
    return;
  }
  if (dropzone && data.type === "subcategory") {
    promoteCapitalSubcategoryToCategory(data.category, data.subcategory);
  }
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
    if (capitalAssetOwnerFilter) {
      const owners = new Set(items.map((item) => (item.owner || "").trim()).filter(Boolean));
      capitalAssetOwnerFilter.innerHTML = "<option value='all'>Все владельцы</option>";
      [...owners].sort((a, b) => a.localeCompare(b, "ru")).forEach((owner) => {
        const option = document.createElement("option");
        option.value = owner;
        option.textContent = owner;
        capitalAssetOwnerFilter.appendChild(option);
      });
      capitalAssetOwnerFilter.value = assetFilters.owner;
    }
  };
  if (capitalAssetSortDir) {
    capitalAssetSortDir.textContent = assetFilters.direction === "asc" ? "По возр." : "По убыв.";
    capitalAssetSortDir.setAttribute("aria-pressed", assetFilters.direction === "asc" ? "true" : "false");
  }
  if (capitalAssetSearch) {
    capitalAssetSearch.value = assetFilters.search;
  }
  if (capitalAssetClosedToggle) {
    capitalAssetClosedToggle.classList.toggle("is-active", assetFilters.includeClosed);
    capitalAssetClosedToggle.textContent = assetFilters.includeClosed ? "Скрыть закрытые" : "Показать закрытые";
  }
  renderAssetActiveFilters();

  const filterAssets = items.filter((asset) => {
    if (!assetFilters.includeClosed && asset.closedAt) {
      return false;
    }
    if (assetFilters.type !== "all" && asset.type !== assetFilters.type) {
      return false;
    }
    if (assetFilters.liquidity !== "all" && asset.liquidity !== assetFilters.liquidity) {
      return false;
    }
    if (assetFilters.owner !== "all" && (asset.owner || "").trim() !== assetFilters.owner) {
      return false;
    }
    if (assetFilters.search) {
      const haystack = `${asset.name} ${asset.note || ""} ${asset.owner || ""} ${asset.category || ""} ${asset.subcategory || ""}`.toLowerCase();
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
    const closedCount = items.filter((item) => item.closedAt).length;
    capitalAssetShown.textContent = `Показано: ${sortedAssets.length}${closedCount ? ` • закрыто: ${closedCount}` : ""}`;
  }

  const rateBadges = new Set();
  const totals = sortedAssets.reduce(
    (acc, asset) => {
      const amount = assetValueInBase(asset, "amount");
      const invested = assetValueInBase(asset, "invested");
      const meta = capitalGetAssetConversionMeta(asset);
      if (asset.currency !== capitalState.settings.baseCurrency && meta.rate != null) {
        const sourceLabel = meta.source === "fx" ? "FX" : "курс покупки";
        rateBadges.add(`${asset.currency}: ${meta.rate.toFixed(4)} (${sourceLabel})`);
      }
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
  if (capitalAssetsExpectedProfit) {
    const expectedProfit = sortedAssets.reduce((sum, asset) => sum + (assetExpectedProfitInBase(asset) ?? 0), 0);
    capitalAssetsExpectedProfit.textContent = capitalFormatMoney(expectedProfit);
  }
  if (capitalAssetsNetAfterDebts) {
    const debtsTotal = (capitalState.debts || []).reduce((sum, debt) => sum + (capitalToBase(debt.principal, debt.currency) ?? debt.principal ?? 0), 0);
    capitalAssetsNetAfterDebts.textContent = capitalFormatMoney(totals.amount - debtsTotal);
  }
  if (capitalAssetsRateInfo) {
    capitalAssetsRateInfo.textContent = rateBadges.size
      ? `Курс для валютных активов: ${[...rateBadges].join(" • ")}`
      : "Курс для валютных активов: активы в базовой валюте";
  }

  buildFilterOptions();

  if (!sortedAssets.length) {
    capitalAssetsList.innerHTML = `
      <div class="asset-empty">
        <p>Нет активов по выбранным фильтрам.</p>
        <button class="button secondary" data-action="add-asset">Добавить актив</button>
      </div>
    `;
    if (capitalAssetsCategoryReport) {
      capitalAssetsCategoryReport.innerHTML = "";
    }
    return;
  }

  const grouped = new Map();
  sortedAssets.forEach((asset) => {
    const categoryLabel = asset.category || capitalTypeLabel(asset.type) || "Без категории";
    if (!grouped.has(categoryLabel)) {
      grouped.set(categoryLabel, new Map());
    }
    const subcategory = asset.subcategory || "Без подкатегории";
    if (!grouped.get(categoryLabel).has(subcategory)) {
      grouped.get(categoryLabel).set(subcategory, []);
    }
    grouped.get(categoryLabel).get(subcategory).push(asset);
  });

  if (capitalAssetsCategoryReport) {
    const reportItems = [...grouped.entries()].map(([name, subMap]) => {
      const assets = [...subMap.values()].flat();
      const totals = assets.reduce((sum, item) => sum + (assetValueInBase(item, "amount") ?? 0), 0);
      return { name, totals };
    }).sort((a,b)=>b.totals-a.totals).slice(0,6);
    const base = reportItems[0]?.totals || 0;
    capitalAssetsCategoryReport.innerHTML = reportItems.length
      ? `<div class="asset-report-card"><h4>Анализ категорий</h4>${reportItems.map((item)=>`<div class="asset-report-row"><span>${item.name}</span><strong>${capitalFormatMoney(item.totals)}</strong><small>${base>0?((item.totals/base)*100).toFixed(1):"0.0"}% от топа</small></div>`).join("")}</div>`
      : "";
  }

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

  const groupEntries = [...grouped.entries()].sort((a, b) => {
    const isCashA = /налич/i.test(a[0]);
    const isCashB = /налич/i.test(b[0]);
    if (isCashA !== isCashB) {
      return isCashA ? 1 : -1;
    }
    return a[0].localeCompare(b[0], "ru");
  });

  groupEntries.forEach(([groupName, subcategories]) => {
    const groupAssets = [...subcategories.values()].flat();
    const totalsGroup = renderGroupTotals(groupAssets);
    const groupMeta = getProfitMeta(totalsGroup.amount, totalsGroup.invested);
    const isGroupOpen = assetUiState.groups[groupName] ?? true;
    const groupCard = document.createElement("div");
    groupCard.className = "asset-group";
    groupCard.innerHTML = `
      <div class="asset-group-header" data-action="toggle-group" data-group="${groupName}" role="button" tabindex="0" aria-expanded="${isGroupOpen}">
        <div class="asset-group-info">
          <h4>${groupName}</h4>
          <span class="asset-count">${groupAssets.length} актив(а)</span>
          <div class="asset-group-totals">
            <strong>${capitalFormatMoney(totalsGroup.amount)}</strong>
            <span class="asset-profit ${groupMeta.profit < 0 ? "is-negative" : ""}">
              ${capitalFormatMoney(groupMeta.profit)}
            </span>
            <small class="asset-group-percent ${groupMeta.percent == null ? "is-warning" : ""}">${groupMeta.percent == null ? "—" : `${groupMeta.percent.toFixed(1)}%`}</small>
          </div>
        </div>
        <span class="asset-header-toggle">${isGroupOpen ? "Свернуть" : "Развернуть"}</span>
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
        <div class="asset-subgroup-header" data-action="toggle-subgroup" data-group="${groupName}" data-subgroup="${subcategoryName}" role="button" tabindex="0" aria-expanded="${isSubOpen}">
          <div class="asset-group-info">
            <h5>${subcategoryName}</h5>
            <span class="asset-count">${assets.length} актив(а)</span>
            <div class="asset-group-totals">
              <strong>${capitalFormatMoney(totalsSub.amount)}</strong>
              <span class="asset-profit ${subMeta.profit < 0 ? "is-negative" : ""}">
                ${capitalFormatMoney(subMeta.profit)}
              </span>
              <small class="asset-group-percent ${subMeta.percent == null ? "is-warning" : ""}">${subMeta.percent == null ? "—" : `${subMeta.percent.toFixed(1)}%`}</small>
            </div>
          </div>
          <span class="asset-header-toggle">${isSubOpen ? "Свернуть" : "Развернуть"}</span>
        </div>
      `;

      const list = document.createElement("div");
      list.className = `asset-items${isSubOpen ? "" : " is-collapsed"}`;

      assets.forEach((asset) => {
        const amountBase = assetValueInBase(asset, "amount");
        const investedBase = assetValueInBase(asset, "invested");
        const conversionMeta = capitalGetAssetConversionMeta(asset);
        const hasRate = amountBase != null && investedBase != null;
        const amountLabel = amountBase == null
          ? `нет курса для ${asset.currency}`
          : capitalFormatMoney(amountBase);
        const investedLabel = investedBase == null
          ? `нет курса`
          : capitalFormatMoney(investedBase);
        const amountNativeHint = asset.currency === capitalState.settings.baseCurrency
          ? ""
          : ` (${sanitizeNumber(asset.amount, 0).toFixed(2)} ${asset.currency})`;
        const investedNativeHint = asset.currency === capitalState.settings.baseCurrency
          ? ""
          : ` (${sanitizeNumber(asset.invested ?? asset.amount, 0).toFixed(2)} ${asset.currency})`;
        const profitMeta = getProfitMeta(amountBase ?? 0, investedBase ?? 0);
        const profitLabel = amountBase == null || investedBase == null
          ? "—"
          : capitalFormatMoney(profitMeta.profit);
        const percentLabel = profitMeta.percent == null ? "—" : `${profitMeta.percent.toFixed(1)}%`;
        const showPercentWarning = profitMeta.percent == null && hasRate;
        const liquidityLabel = capitalLiquidityShort(asset.liquidity);
        const iconLetter = (asset.name || "?").trim().charAt(0).toUpperCase();
        const iconValue = asset.icon || capitalDefaultIcon(asset.type);
        const avatarMarkup = asset.avatarDataUrl
          ? `<img src="${asset.avatarDataUrl}" alt="" />`
          : `<span>${iconValue || iconLetter}</span>`;
        const rateSourceChip = conversionMeta.source === "buyRate"
          ? "<span class='chip chip-warning'>оценка по курсу покупки</span>"
          : "";
        const missingRateChip = hasRate ? "" : "<span class='chip chip-missing'>нет текущего курса</span>";
        const expectedProfitBase = assetExpectedProfitInBase(asset);
        const expectedProfitLabel = expectedProfitBase == null ? "—" : capitalFormatMoney(expectedProfitBase);
        const rateLabel = conversionMeta.rate == null
          ? "—"
          : `${conversionMeta.rate.toFixed(4)} ${capitalState.settings.baseCurrency} (${conversionMeta.source === "fx" ? "FX" : "курс покупки"})`;

        const card = document.createElement("div");
        card.className = "asset-item";
        card.dataset.assetId = asset.id;
        card.innerHTML = `
          <div class="asset-item-main" data-action="asset-details" data-id="${asset.id}" role="button" tabindex="0" aria-label="Открыть детали актива ${asset.name}">
            <div class="asset-tile-top">
              <span class="asset-avatar">${avatarMarkup}</span>
              <span class="asset-main">
                <span class="asset-title">${asset.name}</span>
                <span class="asset-meta">${asset.category || capitalTypeLabel(asset.type)} • ${asset.currency}${asset.owner ? ` • ${asset.owner}` : ""}</span>
              </span>
            </div>
            <div class="asset-tile-metrics">
              <div class="asset-primary-row">
                <span class="asset-label">Сейчас${amountNativeHint}</span>
                <strong class="asset-amount">${amountLabel}</strong>
              </div>
              <div class="asset-secondary-rows">
                <span class="asset-secondary-row"><span>Вложено${investedNativeHint}</span><strong>${investedLabel}</strong></span>
                <span class="asset-secondary-row"><span>Прибыль</span><strong class="asset-profit ${profitMeta.profit < 0 ? "is-negative" : ""}">${profitLabel}</strong></span>
                <span class="asset-secondary-row"><span>Ожид. чистый доход</span><strong>${expectedProfitLabel}</strong></span>
              </div>
              <span class="asset-profit-percent ${showPercentWarning ? "is-warning" : ""}">${percentLabel}</span>
            </div>
            <div class="asset-tile-bottom">
              <span class="chip chip-liquidity">${liquidityLabel}</span>
              ${missingRateChip}
              ${rateSourceChip}
              ${showPercentWarning ? "<span class='chip chip-warning'>проверь данные</span>" : ""}
              ${asset.maturityDate ? `<span class='chip'>до ${asset.maturityDate}</span>` : ""}
              ${asset.closedAt ? "<span class='chip'>закрыт</span>" : ""}
              <span class="chip">курс: ${rateLabel}</span>
              <span class="asset-toggle-label">Подробнее</span>
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
    line.classList.add("report-line");
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
  refreshFxRatesForUsedCurrencies(true);
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

const setAssetDetailsModal = (isOpen) => {
  if (!assetDetailsModal || !assetDetailsOverlay) {
    return;
  }
  assetDetailsModal.classList.toggle("is-open", isOpen);
  assetDetailsModal.setAttribute("aria-hidden", String(!isOpen));
  assetDetailsOverlay.classList.toggle("is-active", isOpen);
  if (!isOpen) {
    lastAssetOperationUndo = null;
    if (assetOperationUndo) {
      assetOperationUndo.classList.add("is-hidden");
    }
  }
};

const setCapitalCategoryModal = (isOpen) => {
  if (!capitalCategoryModal || !capitalCategoryModalOverlay) {
    return;
  }
  capitalCategoryModal.classList.toggle("is-open", isOpen);
  capitalCategoryModal.setAttribute("aria-hidden", String(!isOpen));
  capitalCategoryModalOverlay.classList.toggle("is-active", isOpen);
  document.body.classList.toggle("modal-open", isOpen);
  if (!isOpen) {
    capitalCategoryModalState = null;
    if (capitalCategoryModalForm) {
      capitalCategoryModalForm.reset();
    }
  }
};

const openCapitalCategoryModal = ({ title, submitLabel, initialValue = "", requiresValue = true, onSubmit }) => {
  capitalCategoryModalState = { requiresValue, onSubmit };
  if (capitalCategoryModalTitle) {
    capitalCategoryModalTitle.textContent = title;
  }
  if (capitalCategoryModalSubmit) {
    capitalCategoryModalSubmit.textContent = submitLabel;
    capitalCategoryModalSubmit.classList.toggle("danger", submitLabel.toLowerCase().includes("удал"));
    capitalCategoryModalSubmit.classList.toggle("primary", !submitLabel.toLowerCase().includes("удал"));
  }
  if (capitalCategoryModalInput) {
    capitalCategoryModalInput.value = initialValue;
    capitalCategoryModalInput.closest("label")?.classList.toggle("is-hidden", !requiresValue);
  }
  setCapitalCategoryModal(true);
  capitalCategoryModalInput?.focus();
};

const renderAssetActiveFilters = () => {
  if (!capitalAssetActiveFilters) {
    return;
  }
  const chips = [];
  if (assetFilters.search) chips.push({ key: "search", label: `Поиск: ${assetFilters.search}` });
  if (assetFilters.type !== "all") chips.push({ key: "type", label: `Тип: ${capitalTypeLabel(assetFilters.type)}` });
  if (assetFilters.liquidity !== "all") chips.push({ key: "liquidity", label: `Ликвидность: ${capitalLiquidityShort(assetFilters.liquidity)}` });
  if (assetFilters.owner !== "all") chips.push({ key: "owner", label: `Владелец: ${assetFilters.owner}` });
  if (assetFilters.includeClosed) chips.push({ key: "closed", label: "Показаны закрытые" });

  if (!chips.length) {
    capitalAssetActiveFilters.innerHTML = "";
    return;
  }
  capitalAssetActiveFilters.innerHTML = chips
    .map((chip) => `<button type="button" class="chip" data-clear-filter="${chip.key}">${chip.label} ✕</button>`)
    .join("");
};

const getAssetDetailsListIds = () => {
  if (!capitalAssetsList) {
    return [];
  }
  return [...capitalAssetsList.querySelectorAll(".asset-item-main[data-action='asset-details']")]
    .map((el) => el.dataset.id)
    .filter(Boolean);
};

const applyAssetDetailsMode = (mode = "view") => {
  assetDetailsViewMode = mode;
  if (!assetDetailsModal) {
    return;
  }
  const editable = mode === "edit";
  assetDetailsModal.classList.toggle("is-edit-mode", editable);
  if (assetDetailsMode) {
    assetDetailsMode.textContent = editable ? "Режим: редактирование" : "Режим: просмотр";
  }
  [assetOperationType, assetOperationAmount, assetOperationNote].forEach((field) => {
    if (field) {
      field.disabled = !editable;
    }
  });
  const submitButton = assetOperationForm?.querySelector("button[type='submit']");
  if (submitButton) {
    submitButton.disabled = !editable;
  }
};

const renderAssetHistory = (asset) => {
  if (!assetDetailsHistory) {
    return;
  }
  const logs = (asset.history || [])
    .map((item, index) => ({ ...item, __index: index }))
    .sort((a, b) => String(b.ts || "").localeCompare(String(a.ts || "")));
  if (assetHistoryClear) {
    assetHistoryClear.disabled = !logs.length;
  }
  if (!logs.length) {
    assetDetailsHistory.innerHTML = "<div class='asset-history-empty'><p>Пока нет записей.</p><button id='assetHistoryFirstAction' type='button' class='button secondary'>Добавить первое действие</button></div>";
    return;
  }
  let currentDay = "";
  assetDetailsHistory.innerHTML = logs.map((item) => {
    const parsedAmount = Number.parseFloat(String(item.amount));
    const amountText = Number.isFinite(parsedAmount) ? capitalFormatMoney(parsedAmount) : "—";
    const note = item.note ? `<span class='asset-history-note'>${item.note}</span>` : "";
    const date = new Date(item.ts);
    const dayLabel = Number.isNaN(date.getTime()) ? "Без даты" : date.toLocaleDateString("ru-RU");
    const dayHeader = dayLabel !== currentDay ? `<div class='asset-history-day'>${dayLabel}</div>` : "";
    currentDay = dayLabel;
    return `${dayHeader}<article class='asset-history-item asset-history-item--${item.type || "note"}'>
      <div class='asset-history-head'>
        <strong class='asset-history-item-title'>${assetOperationLabel(item.type)}</strong>
        <div class='asset-history-actions'>
          <span class='asset-history-item-amount'>${amountText}</span>
          <button type='button' class='chip danger asset-history-delete' data-action='delete-asset-history' data-history-index='${item.__index}' aria-label='Удалить запись истории'>Удалить</button>
        </div>
      </div>
      <span class='asset-history-item-meta'>${new Date(item.ts).toLocaleString("ru-RU")}</span>
      ${note}
    </article>`;
  }).join("");
};

const openAssetDetailsModal = (assetId) => {
  const asset = capitalState.assets.find((item) => item.id === assetId);
  if (!asset) {
    return;
  }
  selectedAssetDetailsId = assetId;
  const amountBase = assetValueInBase(asset, "amount");
  const investedBase = assetValueInBase(asset, "invested");
  const profitMeta = getProfitMeta(amountBase ?? 0, investedBase ?? 0);
  if (assetDetailsTitle) {
    assetDetailsTitle.textContent = asset.name || "Детали актива";
  }
  if (assetDetailsMeta) {
    const conversionMeta = capitalGetAssetConversionMeta(asset);
    const sourceSuffix = conversionMeta.source === "buyRate" ? " • оценка по курсу покупки" : "";
    const rateSuffix = conversionMeta.rate == null ? "" : ` • курс: ${conversionMeta.rate.toFixed(4)} ${capitalState.settings.baseCurrency}`;
    const maturitySuffix = asset.maturityDate ? ` • закрытие: ${asset.maturityDate}` : "";
    assetDetailsMeta.textContent = `${capitalTypeLabel(asset.type)} • ${asset.currency} • ${asset.subcategory || "Без подкатегории"}${asset.owner ? ` • ${asset.owner}` : ""}${sourceSuffix}${rateSuffix}${maturitySuffix}`;
  }
  if (assetDetailsCurrent) {
    assetDetailsCurrent.textContent = amountBase == null ? `нет курса для ${asset.currency}` : capitalFormatMoney(amountBase);
  }
  if (assetDetailsInvested) {
    assetDetailsInvested.textContent = investedBase == null ? "нет курса" : capitalFormatMoney(investedBase);
  }
  if (assetDetailsProfit) {
    const expected = assetExpectedProfitInBase(asset);
    const fact = amountBase == null || investedBase == null ? "—" : capitalFormatMoney(profitMeta.profit);
    assetDetailsProfit.textContent = expected != null ? `${fact} • ожид: ${capitalFormatMoney(expected)}` : fact;
    assetDetailsProfit.classList.toggle("is-negative", profitMeta.profit < 0);
  }
  if (assetDetailsArchive) {
    assetDetailsArchive.textContent = asset.closedAt ? "Открыть актив" : "Закрыть актив";
  }
  renderAssetHistory(asset);
  const ids = getAssetDetailsListIds();
  const index = ids.indexOf(assetId);
  if (assetDetailsPrev) {
    assetDetailsPrev.disabled = index <= 0;
  }
  if (assetDetailsNext) {
    assetDetailsNext.disabled = index < 0 || index >= ids.length - 1;
  }
  applyAssetDetailsMode("view");
  setAssetDetailsModal(true);
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

const syncCapitalAssetMaturityState = () => {
  const isDeposit = getSelectedCapitalAssetType() === "deposit";
  const isLocked = (capitalAssetLiquidity?.value || "") === "locked";
  if (capitalAssetExpectedProfit) {
    capitalAssetExpectedProfit.disabled = !isDeposit;
    if (!isDeposit) {
      capitalAssetExpectedProfit.value = "";
    }
  }
  if (capitalAssetMaturityDate) {
    const canUseMaturity = isDeposit && isLocked;
    capitalAssetMaturityDate.disabled = !canUseMaturity;
    if (!canUseMaturity) {
      capitalAssetMaturityDate.value = "";
    }
  }
};

const capitalResetAssetForm = () => {
  capitalAssetForm.reset();
  if (capitalAssetOwner) {
    capitalAssetOwner.value = "";
  }
  capitalAssetCurrency.value = capitalState.settings.baseCurrency;
  capitalAssetMaturityDate.value = "";
  capitalAssetExpectedProfit.value = "";
  if (capitalAssetBuyRate) {
    capitalAssetBuyRate.value = "";
  }
  renderCapitalAssetCategoryOptions();
  renderCapitalSubcategoryOptions();
  capitalEditingAssetId = null;
  const submitButton = capitalAssetForm.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.textContent = "Добавить актив";
  }
  if (capitalAssetDelete) {
    capitalAssetDelete.classList.remove("is-visible");
  }
  if (capitalAssetArchive) {
    capitalAssetArchive.classList.remove("is-visible");
    capitalAssetArchive.textContent = "Закрыть актив";
  }
  if (capitalAssetDrawerTitle) {
    capitalAssetDrawerTitle.textContent = "Новый актив";
  }
  capitalAssetCurrency?.dispatchEvent(new Event("change"));
  syncCapitalAssetMaturityState?.();
};

const capitalFillAssetForm = (asset) => {
  capitalSetAssetDrawer(true);
  capitalSetAssetModal(true);
  capitalAssetName.value = asset.name || "";
  if (capitalAssetOwner) {
    capitalAssetOwner.value = asset.owner || "";
  }
  renderCapitalAssetCategoryOptions(asset.category || capitalTypeLabel(asset.type || "cash"));
  capitalAssetCurrency.value = asset.currency || capitalState.settings.baseCurrency;
  capitalAssetAmount.value = asset.amount ?? 0;
  capitalAssetInvested.value = asset.invested ?? asset.amount ?? 0;
  if (capitalAssetBuyRate) {
    capitalAssetBuyRate.value = asset.buyRate ?? "";
  }
  renderCapitalSubcategoryOptions(asset.subcategory || "");
  capitalAssetMaturityDate.value = asset.maturityDate || "";
  capitalAssetLiquidity.value = asset.liquidity || "high";
  capitalAssetExpectedProfit.value = asset.expectedProfit ?? "";
  capitalAssetNote.value = asset.note || "";
  capitalEditingAssetId = asset.id;
  const submitButton = capitalAssetForm.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.textContent = "Сохранить изменения";
  }
  if (capitalAssetDelete) {
    capitalAssetDelete.classList.add("is-visible");
  }
  if (capitalAssetArchive) {
    capitalAssetArchive.classList.add("is-visible");
    capitalAssetArchive.textContent = asset.closedAt ? "Открыть актив" : "Закрыть актив";
  }
  if (capitalAssetDrawerTitle) {
    capitalAssetDrawerTitle.textContent = "Редактирование";
  }
  if (capitalAssetName) {
    capitalAssetName.focus();
  }
  capitalAssetCurrency?.dispatchEvent(new Event("change"));
  syncCapitalAssetMaturityState?.();
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
  const subcategoryValue = capitalSubcategorySelect ? capitalSubcategorySelect.value.trim() : "";
  const selectedType = getSelectedCapitalAssetType();
  const isDeposit = selectedType === "deposit";
  const amountParsed = Number.parseFloat(amountInput);
  const amount = Number.isNaN(amountParsed) ? invested : amountParsed;
  const resolvedCategory = getSelectedCapitalAssetCategory() || capitalTypeLabel(selectedType);
  if (resolvedCategory) {
    capitalEnsureCategory(resolvedCategory, subcategoryValue);
  }
  const payload = {
    name,
    type: selectedType,
    currency: capitalAssetCurrency.value.trim().toUpperCase() || capitalState.settings.baseCurrency,
    amount,
    invested,
    section: isDeposit ? "Вклады" : "В наличии",
    category: resolvedCategory,
    subcategory: subcategoryValue,
    owner: capitalAssetOwner?.value.trim() || "",
    liquidity: capitalAssetLiquidity.value,
    expectedProfit: isDeposit && capitalAssetExpectedProfit.value
      ? Number.parseFloat(capitalAssetExpectedProfit.value)
      : null,
    maturityDate: isDeposit && capitalAssetLiquidity.value === "locked" ? capitalAssetMaturityDate.value : "",
    note: capitalAssetNote.value.trim(),
    buyRate: capitalAssetBuyRate?.value ? Number.parseFloat(capitalAssetBuyRate.value) : null,
    icon: capitalDefaultIcon(selectedType),
    avatarDataUrl: "",
    history: capitalEditingAssetId
      ? (capitalState.assets.find((item) => item.id === capitalEditingAssetId)?.history || [])
      : [{ type: "create", amount, note: "Актив создан", ts: capitalNowIso() }],
    closedAt: capitalEditingAssetId
      ? (capitalState.assets.find((item) => item.id === capitalEditingAssetId)?.closedAt || null)
      : null,
  };
  if (capitalEditingAssetId) {
    const existing = capitalState.assets.find((item) => item.id === capitalEditingAssetId);
    if (!existing) {
      capitalResetAssetForm();
      return;
    }
    Object.assign(existing, payload, { updatedAt: capitalNowIso() });
    existing.history = [...(existing.history || []), { type: "update", amount, note: "Параметры актива обновлены", ts: capitalNowIso() }];
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
    title.innerHTML = `<strong>${categoryName}</strong><span>${subs.length} подкатегорий</span>`;

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
    renderCategoryOptions();
    renderTable();
    updateTransactionFormState();
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
};

const transactionSubmitButton = form?.querySelector("button[type='submit']");

const updateTransactionFormState = () => {
  if (!form || !transactionSubmitButton) {
    return;
  }
  const date = document.getElementById("date")?.value;
  const category = categorySelect?.value;
  const amount = Number.parseFloat(document.getElementById("amount")?.value);
  const isValid = Boolean(date) && Boolean(category) && Number.isFinite(amount) && amount > 0;
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
      const amount = Number.parseFloat(document.getElementById("amount").value);
      const note = document.getElementById("note").value.trim();

      if (!date || !category || Number.isNaN(amount) || amount <= 0) {
        showError("Заполните дату, категорию и сумму больше нуля.");
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
        note,
        createdAt: now,
        updatedAt: now,
      });
      recordUndo("addTx", { id: transactions[transactions.length - 1].id });
      Storage.set(STORAGE_KEY, JSON.stringify(transactions));
      render();
      showToast("Операция сохранена");
      resetForm();
      updateTransactionFormState();
    }, "добавление операции"));
    const formFields = form.querySelectorAll("input, select");
    formFields.forEach((field) => {
      on(field, "input", updateTransactionFormState, "валидация формы");
      on(field, "change", updateTransactionFormState, "валидация формы");
    });
  }

on(document.getElementById("type"), "change", () => {
  renderCategoryOptions();
}, "смена типа операции");

on(categorySelect, "change", (event) => {
  updateSubcategoryOptions(event.target.value);
}, "смена категории");

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

on(undoButton, "click", undoLastAction, "undo");

  on(tableBody, "click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement) && !(target instanceof HTMLInputElement)) {
      return;
    }

    const id = target.dataset.id;
    const action = target.dataset.action;
    if (!id) {
      return;
    }

    if (action === "select-tx") {
      if (target.checked) {
        selectedTransactionIds.add(id);
      } else {
        selectedTransactionIds.delete(id);
      }
      if (deleteSelectedTransactionsButton) {
        deleteSelectedTransactionsButton.disabled = selectedTransactionIds.size === 0;
      }
      return;
    }

    if (action === "edit-tx") {
      openEditTransactionModal(id);
      return;
    }

    if (action && action !== "delete-tx") {
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
  }, "удаление/редактирование операции");


  on(transactionSearchInput, "input", (event) => {
    transactionFilters.search = event.target.value;
    renderTable();
  }, "поиск операций");

  on(transactionTypeFilter, "change", (event) => {
    transactionFilters.type = event.target.value;
    renderTable();
  }, "фильтр типа операции");

  on(transactionCategoryFilter, "change", (event) => {
    transactionFilters.category = event.target.value;
    renderTable();
  }, "фильтр категории операции");

  on(selectAllTransactionsButton, "click", () => {
    const filtered = getFilteredTransactions();
    selectedTransactionIds = new Set(filtered.map((item) => item.id));
    renderTable();
  }, "выбрать операции");

  on(deleteSelectedTransactionsButton, "click", () => {
    if (selectedTransactionIds.size === 0) {
      return;
    }
    if (!confirm(`Удалить выбранные операции: ${selectedTransactionIds.size}?`)) {
      return;
    }
    transactions = transactions.filter((item) => !selectedTransactionIds.has(item.id));
    selectedTransactionIds = new Set();
    Storage.set(STORAGE_KEY, JSON.stringify(transactions));
    showToast("Выбранные операции удалены");
    render();
  }, "массовое удаление операций");


on(exportButton, "click", () => {
  if (transactions.length === 0) {
    alert("Добавьте операции перед экспортом.");
    return;
  }

  const header = ["Дата", "Тип", "Категория", "Подкатегория", "Сумма", "Комментарий"];
  const rows = transactions.map((item) => [
    item.date,
    formatType(item.type),
    item.category,
    item.subcategory,
    item.amount.toFixed(2),
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
}, "экспорт CSV");

on(clearButton, "click", () => {
  if (!confirm("Удалить все операции?")) {
    return;
  }
  transactions = [];
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
  const now = new Date();
  if (range === "all") {
    const bounds = getDateBounds(transactions);
    setReportRange(bounds.start, bounds.end);
  } else if (range === "this-month") {
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    setReportRange(start.toISOString().slice(0, 10), end.toISOString().slice(0, 10));
  } else if (range === "prev-month") {
    const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const end = new Date(now.getFullYear(), now.getMonth(), 0);
    setReportRange(start.toISOString().slice(0, 10), end.toISOString().slice(0, 10));
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


on(reportMonthSelect, "change", (event) => {
  const month = event.target.value;
  if (!month) {
    return;
  }
  reportRangeButtons.forEach((item) => item.classList.remove("is-active"));
  const start = `${month}-01`;
  const endDate = new Date(Number(month.slice(0, 4)), Number(month.slice(5, 7)), 0);
  const end = endDate.toISOString().slice(0, 10);
  setReportRange(start, end);
  renderReports();
}, "выбор месяца отчета");

on(toggleExpenseSubcategoryPieButton, "click", () => {
  showExpenseSubcategoryPieDetails = !showExpenseSubcategoryPieDetails;
  renderCharts();
}, "детали pie");

on(transactionEditClose, "click", () => {
  setTransactionEditModal(false);
  editingTransactionId = null;
}, "закрыть редактирование операции");

on(transactionEditOverlay, "click", () => {
  setTransactionEditModal(false);
  editingTransactionId = null;
}, "overlay редактирования операции");

on(transactionEditForm, "submit", (event) => {
  event.preventDefault();
  saveEditedTransaction();
}, "сохранение редактирования операции");

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


  on(document, "keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }
    if (capitalIsAssetModalOpen()) {
      capitalSetAssetModal(false);
      capitalSetAssetDrawer(false);
      capitalResetAssetForm();
      return;
    }
    if (capitalCategoryModal?.classList.contains("is-open")) {
      setCapitalCategoryModal(false);
    }
  }, "escape close");

  on(capitalAssetArchive, "click", () => {
    if (!capitalEditingAssetId) {
      return;
    }
    const asset = capitalState.assets.find((item) => item.id === capitalEditingAssetId);
    if (!asset) {
      return;
    }
    const closing = !asset.closedAt;
    asset.closedAt = closing ? capitalNowIso() : null;
    asset.updatedAt = capitalNowIso();
    asset.history = [...(asset.history || []), { type: closing ? "close" : "reopen", amount: asset.amount, note: closing ? "Актив закрыт" : "Актив снова открыт", ts: capitalNowIso() }];
    saveCapitalV2(capitalState);
    capitalSetAssetModal(false);
    capitalSetAssetDrawer(false);
    capitalResetAssetForm();
    showToast(closing ? "Актив закрыт" : "Актив снова открыт");
    renderCapitalView();
  }, "закрытие актива");

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

  on(capitalAssetLiquidity, "change", () => {
    syncCapitalAssetMaturityState();
  }, "доступность даты закрытия");

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

  on(addCapitalCategoryButton, "click", () => {
    const category = capitalCategoryName.value.trim();
    const subcategory = capitalSubcategoryName.value.trim();
    if (!category) {
      showError("Введите название категории капитала.");
      return;
    }
    capitalEnsureCategory(category, subcategory);
    saveAndRenderCapitalCategories();
    capitalCategoryName.value = "";
    capitalSubcategoryName.value = "";
  }, "категории капитала");

  on(capitalCategoryName, "keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addCapitalCategoryButton?.click();
    }
  }, "ввод категории капитала");

  on(capitalSubcategoryName, "keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addCapitalCategoryButton?.click();
    }
  }, "ввод подкатегории капитала");

  on(capitalCategoryName, "input", () => {
    renderCapitalCategoryHints();
  }, "подсказки категорий капитала");

  on(capitalSubcategoryName, "focus", () => {
    renderCapitalCategoryHints();
  }, "подсказки подкатегорий капитала");

  on(capitalCategoryManager, "click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement) && !(target instanceof HTMLInputElement)) {
      return;
    }
    const action = target.dataset.action;
    const categoryName = target.dataset.category;
    const subcategoryName = target.dataset.subcategory;
    if (action === "rename-capital-category" && categoryName) {
      openCapitalCategoryModal({
        title: "Переименовать категорию капитала",
        submitLabel: "Сохранить",
        initialValue: categoryName,
        requiresValue: true,
        onSubmit: (value) => renameCapitalCategory(categoryName, value),
      });
      return;
    }
    if (action === "delete-capital-category" && categoryName) {
      openCapitalCategoryModal({
        title: `Удалить категорию «${categoryName}»?`,
        submitLabel: "Удалить",
        requiresValue: false,
        onSubmit: () => deleteCapitalCategory(categoryName),
      });
      return;
    }
    if (action === "rename-capital-subcategory" && categoryName && subcategoryName) {
      openCapitalCategoryModal({
        title: "Переименовать подкатегорию",
        submitLabel: "Сохранить",
        initialValue: subcategoryName,
        requiresValue: true,
        onSubmit: (value) => renameCapitalSubcategory(categoryName, subcategoryName, value),
      });
      return;
    }
    if (action === "delete-capital-subcategory" && categoryName && subcategoryName) {
      openCapitalCategoryModal({
        title: `Удалить подкатегорию «${subcategoryName}»?`,
        submitLabel: "Удалить",
        requiresValue: false,
        onSubmit: () => deleteCapitalSubcategory(categoryName, subcategoryName),
      });
    }
  }, "управление категориями капитала");

  on(capitalCategoryManager, "dragstart", handleCapitalDragStart, "dragstart категории капитала");
  on(capitalCategoryManager, "dragend", handleCapitalDragEnd, "dragend категории капитала");
  on(capitalCategoryManager, "dragover", handleDragOver, "dragover категории капитала");
  on(capitalCategoryManager, "dragleave", handleDragLeave, "dragleave категории капитала");
  on(capitalCategoryManager, "drop", handleCapitalDrop, "drop категории капитала");
  on(capitalCategoryDropzone, "dragover", handleDragOver, "dragover capital root");
  on(capitalCategoryDropzone, "dragleave", handleDragLeave, "dragleave capital root");
  on(capitalCategoryDropzone, "drop", handleCapitalDrop, "drop capital root");
  on(capitalCategoryDropzone, "dragend", handleCapitalDragEnd, "dragend capital root");

  onAll(capitalOverviewFilters, "click", (event) => {
    capitalOverviewFilters.forEach((item) => item.classList.remove("is-active"));
    event.currentTarget.classList.add("is-active");
    capitalOverviewFilter = event.currentTarget.dataset.capitalFilter;
    renderCapitalLedger();
  }, "фильтр капитала");

  on(capitalAssetType, "change", () => {
    syncCapitalAssetMaturityState();
    renderCapitalSubcategoryOptions();
  }, "тип актива");

  on(capitalAssetLiquidity, "change", () => {
    syncCapitalAssetMaturityState();
  }, "доступность даты закрытия");

  on(capitalAssetCurrency, "change", () => {
    if (!capitalAssetBuyRate) {
      return;
    }
    const baseCurrency = capitalState?.settings?.baseCurrency || "RUB";
    const isBase = (capitalAssetCurrency.value || "").toUpperCase() === baseCurrency;
    capitalAssetBuyRate.disabled = isBase;
    if (isBase) {
      capitalAssetBuyRate.value = "";
    }
  }, "курс покупки для валюты");

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

  on(capitalAssetOwnerFilter, "change", (event) => {
    assetFilters.owner = event.target.value;
    renderCapitalAssets();
  }, "фильтр владельца");

  on(capitalAssetClosedToggle, "click", () => {
    assetFilters.includeClosed = !assetFilters.includeClosed;
    if (capitalAssetClosedToggle) {
      capitalAssetClosedToggle.classList.toggle("is-active", assetFilters.includeClosed);
      capitalAssetClosedToggle.textContent = assetFilters.includeClosed ? "Скрыть закрытые" : "Показать закрытые";
    }
    renderCapitalAssets();
  }, "toggle closed assets");

  on(capitalAssetFiltersReset, "click", () => {
    assetFilters.search = "";
    assetFilters.type = "all";
    assetFilters.liquidity = "all";
    assetFilters.owner = "all";
    assetFilters.includeClosed = false;
    if (capitalAssetClosedToggle) {
      capitalAssetClosedToggle.classList.remove("is-active");
      capitalAssetClosedToggle.textContent = "Показать закрытые";
    }
    renderCapitalAssets();
  }, "сброс фильтров активов");

  onAll(capitalAssetOwnerPresetButtons, "click", (event) => {
    const owner = event.currentTarget.dataset.ownerPreset;
    if (!owner) {
      return;
    }
    assetFilters.owner = owner;
    renderCapitalAssets();
  }, "пресеты владельцев активов");

  on(capitalAssetActiveFilters, "click", (event) => {
    const button = event.target.closest("[data-clear-filter]");
    if (!button) {
      return;
    }
    const key = button.dataset.clearFilter;
    if (key === "search") assetFilters.search = "";
    if (key === "type") assetFilters.type = "all";
    if (key === "liquidity") assetFilters.liquidity = "all";
    if (key === "owner") assetFilters.owner = "all";
    if (key === "closed") assetFilters.includeClosed = false;
    renderCapitalAssets();
  }, "активные фильтры активов");

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

    if (action === "asset-details") {
      openAssetDetailsModal(assetId);
      return;
    }

    if (action === "toggle-group") {
      const groupName = actionButton.dataset.group;
      if (groupName) {
        assetUiState.groups[groupName] = !(assetUiState.groups[groupName] ?? true);
        const toggleLabel = actionButton.querySelector(".asset-header-toggle");
        if (toggleLabel) {
          toggleLabel.textContent = assetUiState.groups[groupName] ? "Свернуть" : "Развернуть";
        }
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
        const toggleLabel = actionButton.querySelector(".asset-header-toggle");
        if (toggleLabel) {
          toggleLabel.textContent = assetUiState.subgroups[key] ? "Свернуть" : "Развернуть";
        }
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
    const target = event.target.closest("[data-action='asset-details'], [data-action='toggle-group'], [data-action='toggle-subgroup']");
    if (!target) {
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      target.click();
    }
  }, "details modal");

  on(assetDetailsClose, "click", () => {
    setAssetDetailsModal(false);
    selectedAssetDetailsId = null;
  }, "close asset details");

  on(assetDetailsOverlay, "click", () => {
    setAssetDetailsModal(false);
    selectedAssetDetailsId = null;
  }, "overlay asset details");

  on(capitalCategoryModalClose, "click", () => {
    setCapitalCategoryModal(false);
  }, "close capital category modal");

  on(capitalCategoryModalOverlay, "click", () => {
    setCapitalCategoryModal(false);
  }, "overlay capital category modal");

  on(capitalCategoryModalForm, "submit", (event) => {
    event.preventDefault();
    if (!capitalCategoryModalState?.onSubmit) {
      return;
    }
    const value = capitalCategoryModalInput?.value?.trim() || "";
    if (capitalCategoryModalState.requiresValue && !value) {
      showError("Введите значение.");
      return;
    }
    capitalCategoryModalState.onSubmit(value);
    setCapitalCategoryModal(false);
  }, "submit capital category modal");

  on(assetDetailsMode, "click", () => {
    applyAssetDetailsMode(assetDetailsViewMode === "view" ? "edit" : "view");
    if (assetDetailsViewMode === "edit") {
      assetOperationType?.focus();
    }
  }, "toggle asset details mode");

  on(assetDetailsPrev, "click", () => {
    const ids = getAssetDetailsListIds();
    const idx = ids.indexOf(selectedAssetDetailsId);
    if (idx > 0) {
      openAssetDetailsModal(ids[idx - 1]);
    }
  }, "asset prev");

  on(assetDetailsNext, "click", () => {
    const ids = getAssetDetailsListIds();
    const idx = ids.indexOf(selectedAssetDetailsId);
    if (idx >= 0 && idx < ids.length - 1) {
      openAssetDetailsModal(ids[idx + 1]);
    }
  }, "asset next");

  onAll(assetTemplateButtons, "click", (event) => {
    const key = event.currentTarget.dataset.assetTemplate;
    if (!key) return;
    applyAssetDetailsMode("edit");
    if (key === "salary") {
      if (assetOperationType) assetOperationType.value = "deposit";
      if (assetOperationNote) assetOperationNote.value = "Пополнение с зарплаты";
    }
    if (key === "rebalance") {
      if (assetOperationType) assetOperationType.value = "adjust";
      if (assetOperationNote) assetOperationNote.value = "Корректировка после ребаланса";
    }
    if (key === "note-month") {
      if (assetOperationType) assetOperationType.value = "note";
      if (assetOperationNote) assetOperationNote.value = "Итог месяца";
    }
    assetOperationAmount?.focus();
  }, "asset templates");

  on(assetDetailsHistory, "click", (event) => {
    const btn = event.target.closest("#assetHistoryFirstAction");
    if (!btn) return;
    applyAssetDetailsMode("edit");
    assetOperationType?.focus();
  }, "asset history first action");

  on(assetDetailsHistory, "click", (event) => {
    const deleteButton = event.target.closest("[data-action='delete-asset-history']");
    if (!deleteButton || !selectedAssetDetailsId) {
      return;
    }
    const historyIndex = Number.parseInt(deleteButton.dataset.historyIndex || "", 10);
    if (!Number.isInteger(historyIndex) || historyIndex < 0) {
      return;
    }
    const asset = capitalState.assets.find((item) => item.id === selectedAssetDetailsId);
    if (!asset || !Array.isArray(asset.history) || !asset.history[historyIndex]) {
      return;
    }
    if (!confirm("Удалить эту запись из истории?")) {
      return;
    }
    asset.history.splice(historyIndex, 1);
    asset.updatedAt = capitalNowIso();
    saveCapitalV2(capitalState);
    renderAssetHistory(asset);
    renderCapitalView();
    showToast("Запись истории удалена");
  }, "delete asset history item");

  on(assetHistoryClear, "click", () => {
    if (!selectedAssetDetailsId) {
      return;
    }
    const asset = capitalState.assets.find((item) => item.id === selectedAssetDetailsId);
    if (!asset) {
      return;
    }
    if (!Array.isArray(asset.history) || !asset.history.length) {
      showToast("История уже пустая");
      return;
    }
    if (!confirm("Очистить всю историю этого актива?")) {
      return;
    }
    asset.history = [];
    asset.updatedAt = capitalNowIso();
    saveCapitalV2(capitalState);
    renderAssetHistory(asset);
    renderCapitalView();
    showToast("История актива очищена");
  }, "clear asset history");

  on(assetOperationUndo, "click", () => {
    if (!lastAssetOperationUndo || !selectedAssetDetailsId) {
      return;
    }
    const asset = capitalState.assets.find((item) => item.id === selectedAssetDetailsId);
    if (!asset) {
      return;
    }
    asset.amount = lastAssetOperationUndo.amount;
    asset.invested = lastAssetOperationUndo.invested;
    asset.history = (asset.history || []).filter((_, idx, arr) => idx !== arr.length - 1);
    asset.updatedAt = capitalNowIso();
    saveCapitalV2(capitalState);
    lastAssetOperationUndo = null;
    assetOperationUndo?.classList.add("is-hidden");
    openAssetDetailsModal(selectedAssetDetailsId);
    renderCapitalView();
    showToast("Последнее действие отменено");
  }, "asset undo action");

  on(assetOperationForm, "submit", (event) => {
    event.preventDefault();
    if (!selectedAssetDetailsId) {
      return;
    }
    const asset = capitalState.assets.find((item) => item.id === selectedAssetDetailsId);
    if (!asset) {
      return;
    }
    if (assetDetailsViewMode !== "edit") {
      showError("Переключитесь в режим редактирования.");
      return;
    }
    const type = assetOperationType?.value || "note";
    const amount = assetOperationAmount?.value ? Number.parseFloat(assetOperationAmount.value) : null;
    const note = assetOperationNote?.value?.trim() || "";
    if (type !== "note" && (!Number.isFinite(amount) || amount <= 0)) {
      showError("Для этой операции укажите сумму больше нуля.");
      return;
    }

    lastAssetOperationUndo = {
      amount: sanitizeNumber(asset.amount, 0),
      invested: sanitizeNumber(asset.invested, 0),
    };

    if (Number.isFinite(amount)) {
      if (type === "deposit") {
        asset.amount = sanitizeNumber(asset.amount, 0) + amount;
        asset.invested = sanitizeNumber(asset.invested, 0) + amount;
      } else if (type === "withdraw") {
        asset.amount = Math.max(0, sanitizeNumber(asset.amount, 0) - amount);
      } else if (type === "adjust") {
        asset.amount = amount;
      }
      asset.updatedAt = capitalNowIso();
    }

    asset.history = [
      ...(asset.history || []),
      { type, amount: Number.isFinite(amount) ? amount : null, note, ts: capitalNowIso() },
    ];
    saveCapitalV2(capitalState);
    if (assetOperationUndo) {
      assetOperationUndo.classList.remove("is-hidden");
    }
    openAssetDetailsModal(selectedAssetDetailsId);
    renderCapitalView();
    renderAssetHistory(asset);
    if (assetOperationForm) {
      assetOperationForm.reset();
    }
    showToast(type === "note" ? "Запись добавлена" : "Операция применена");
  }, "asset history add");

  on(assetDetailsEdit, "click", () => {
    if (!selectedAssetDetailsId) {
      return;
    }
    const asset = capitalState.assets.find((item) => item.id === selectedAssetDetailsId);
    if (!asset) {
      return;
    }
    setAssetDetailsModal(false);
    capitalFillAssetForm(asset);
  }, "asset details edit");

  on(assetDetailsArchive, "click", () => {
    if (!selectedAssetDetailsId) {
      return;
    }
    const asset = capitalState.assets.find((item) => item.id === selectedAssetDetailsId);
    if (!asset) {
      return;
    }
    const closing = !asset.closedAt;
    asset.closedAt = closing ? capitalNowIso() : null;
    asset.updatedAt = capitalNowIso();
    asset.history = [...(asset.history || []), { type: closing ? "close" : "reopen", amount: asset.amount, note: closing ? "Актив закрыт" : "Актив снова открыт", ts: capitalNowIso() }];
    saveCapitalV2(capitalState);
    openAssetDetailsModal(selectedAssetDetailsId);
    renderCapitalView();
    showToast(closing ? "Актив закрыт" : "Актив снова открыт");
  }, "asset details archive");

  on(assetDetailsDelete, "click", () => {
    if (!selectedAssetDetailsId) {
      return;
    }
    const asset = capitalState.assets.find((item) => item.id === selectedAssetDetailsId);
    if (!asset) {
      return;
    }
    if (!confirm("Удалить актив?")) {
      return;
    }
    capitalState.assets = capitalState.assets.filter((item) => item.id !== selectedAssetDetailsId);
    saveCapitalV2(capitalState);
    setAssetDetailsModal(false);
    selectedAssetDetailsId = null;
    showToast("Актив удален");
    renderCapitalView();
  }, "asset details delete");

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
    if (!(target instanceof HTMLButtonElement) && !(target instanceof HTMLInputElement)) {
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
    if (!(target instanceof HTMLButtonElement) && !(target instanceof HTMLInputElement)) {
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
    if (!(target instanceof HTMLButtonElement) && !(target instanceof HTMLInputElement)) {
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
    Storage.set(BACKUP_META_KEY, JSON.stringify({ ts: Date.now() }));
    renderBackupMeta();
    showToast("Backup сохранен");
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
      updateUndoState();
      updateTransactionFormState();
      capitalSetTab("assets");
      setLayout(currentLayout);
      setView(activeView);
      showToast("Backup восстановлен");
      renderBackupMeta();
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

  const savedView = await Storage.get(VIEW_KEY);
  const savedLayout = await Storage.get(LAYOUT_KEY);
  const savedUiState = await Storage.get(CAPITAL_ASSETS_UI_KEY);
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
};

const initializeApp = safeExec(async () => {
  await Storage.init();
  await loadState();

  ensureFloatingTransactionEditModal();
  ensureFloatingAssetDetailsModal();
  bindEvents();
  renderCategories();
  renderCapitalCategoryHints();
  renderCapitalSubcategoryOptions();
  await renderBackupMeta();
  resetForm();
  initializeReportRange();
  updateUndoState();
  updateTransactionFormState();
  capitalSetTab("assets");
  setLayout(currentLayout);
  setView(activeView);
  if (new URLSearchParams(window.location.search).get("selftest") === "1") {
    await selfTest();
  }
}, "инициализация приложения");

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
