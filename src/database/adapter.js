import { loadState, saveState } from '../storage.js';

export const databaseConfig = {
  mode: 'localStorage',
  apiBaseUrl: '',
  tables: ['users', 'ads', 'games', 'wallet_movements', 'promotions', 'receipts', 'admin_actions'],
};

export async function dbRead() {
  return loadState();
}

export async function dbWrite(nextState) {
  saveState(nextState);
  return nextState;
}

export async function connectExternalDatabase({ apiBaseUrl, token }) {
  if (!apiBaseUrl || !token) {
    throw new Error('Configura apiBaseUrl y token para conectar una base de datos externa.');
  }
  return { apiBaseUrl, token, status: 'ready' };
}
