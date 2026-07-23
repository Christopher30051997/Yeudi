import { user } from './data.js';
import { formatGemas } from './utils.js';
import { initLanguagePicker } from './language.js';
import { renderHomeView } from './home.js';
import { renderGamesView } from './games.js';
import { renderAdsView } from './ads.js';
import { renderStoreView } from './store.js';
import { renderPromotionsView } from './promotions.js';
import { renderAdminView } from './admin.js';

const views = {
  home: renderHomeView,
  games: renderGamesView,
  ads: renderAdsView,
  store: renderStoreView,
  promotions: renderPromotionsView,
  admin: renderAdminView,
};

const stats = [
  ['Vistas válidas', user.validViews],
  ['Promos activas', user.activePromotions],
  ['Juegos jugados', user.gamesPlayed],
  ['Nivel antifraude', user.fraudLevel],
];

function renderStats() {
  document.querySelector('#statsGrid').innerHTML = stats
    .map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`)
    .join('');
  document.querySelector('#walletBalance').textContent = formatGemas(user.balance);
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

  document.querySelector('#registro').addEventListener('submit', (event) => {
    event.preventDefault();
    renderView('home');
    document.querySelector('#panel').scrollIntoView({ behavior: 'smooth' });
  });
}

initLanguagePicker();
renderStats();
renderView('home');
initNavigation();
