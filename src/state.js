import { loadState, saveState } from './storage.js';

export const appState = loadState();

export function commitState(mutator) {
  mutator(appState);
  saveState(appState);
  window.dispatchEvent(new CustomEvent('gemasgo:state-change', { detail: appState }));
}
