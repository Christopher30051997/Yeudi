import { appState } from './state.js';
import { formatGemas } from './utils.js';
import { initLanguagePicker } from './language.js';
import { renderHomeView } from './home.js';
import { renderGamesView } from './games.js';
import { renderAdsView, showAdGate } from './ads.js';
import { renderStoreView } from './store.js';
import { renderPromotionsView } from './promotions.js';
import { renderNotificationsView } from './notifications.js';
import { setupRegistration } from './auth.js';

const views = {
  home: renderHomeView,
  games: renderGamesView,
  ads: renderAdsView,
  store: renderStoreView,
  promotions: renderPromotionsView,
  notifications: renderNotificationsView,
};

function currentStats() {
  return [
    ['Vistas válidas', appState.user.validViews],
    ['Promos activas', appState.user.activePromotions],
    ['Juegos jugados', appState.user.gamesPlayed],
    ['Nivel antifraude', appState.user.fraudLevel],
  ];
}

export function renderStats() {
  document.querySelector('#statsGrid').innerHTML = currentStats()
    .map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`)
    .join('');
  document.querySelector('#walletBalance').textContent = formatGemas(appState.user.balance);
  document.querySelector('#userName').textContent = appState.user.name;
}

function renderView(viewName = 'home') {
  const mount = document.querySelector('#viewMount');
  mount.replaceChildren(views[viewName]());
}

function initNavigation() {
  document.querySelector('#sidebar').addEventListener('click', (event) => {
    const link = event.target.closest('[data-view]');
    if (!link) return;
    renderView(link.dataset.view);
  });

  document.querySelector('#menuButton').addEventListener('click', () => {
    const sidebar = document.querySelector('#sidebar');
    const collapsed = sidebar.classList.toggle('is-collapsed');
    document.querySelector('#menuButton').setAttribute('aria-expanded', String(!collapsed));
  });

  document.querySelector('#viewMount').addEventListener('click', (event) => {
    const watchButton = event.target.closest('[data-watch-ad]');
    if (!watchButton) return;
    showAdGate(() => {
      renderStats();
      renderView('ads');
    }, watchButton.dataset.watchAd);
  });

  setupRegistration(() => {
    renderStats();
    renderView('home');
  });

  window.addEventListener('gemasgo:state-change', renderStats);
}

initLanguagePicker();
renderStats();
renderView('home');
initNavigation();
