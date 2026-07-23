import { ads, aiSystems, games, promotionQueue, shopSections, user } from './data.js';

const STORAGE_KEY = 'gemasgo.production.local.v1';

const defaultState = {
  user,
  games,
  ads,
  shopSections,
  aiSystems,
  promotionQueue,
  ledger: [
    { id: 'mov-001', type: 'credit', title: 'Vista recompensada', source: 'CryptoPay', amount: 20, status: 'Validado' },
    { id: 'mov-002', type: 'debit', title: 'Promoción enviada', source: 'YouTube', amount: -1800, status: 'En revisión' },
    { id: 'mov-003', type: 'credit', title: 'Compra de GemasGo', source: 'USDT', amount: 5000, status: 'Comprobante recibido' },
  ],
  receipts: [
    { id: 'rcp-001', title: 'Pago Free Fire aprobado', image: 'assets/receipts/free-fire.svg', message: 'Diamantes enviados correctamente.', status: 'Entregado' },
  ],
  settings: {
    adsEnabled: true,
    antifraudEnabled: true,
    notificationsEnabled: true,
    supervisorEnabled: true,
    maintenanceMode: false,
  },
};

function clone(value) {
  return typeof structuredClone === 'function' ? structuredClone(value) : JSON.parse(JSON.stringify(value));
}

export function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return clone(defaultState);

  try {
    return { ...clone(defaultState), ...JSON.parse(saved) };
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return clone(defaultState);
  }
}

export function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function resetState() {
  localStorage.removeItem(STORAGE_KEY);
  return loadState();
}
