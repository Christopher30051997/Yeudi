import { appState } from './state.js';
import { createElement } from './utils.js';
import { adminPermissions } from './config.js';
import { fraudSignals } from './fraud.js';
import { approvePromotion, rejectPromotion, toggleAiSystem } from './adminActions.js';
import { buildAdminReport } from './reports.js';

export function renderAdminView() {
  const aiCards = appState.aiSystems.map((ai) => `<article><h3>${ai.name}</h3><p>${ai.description}</p><span>${ai.status}</span><button data-toggle-ai="${ai.name}" type="button">Activar / Desactivar</button></article>`).join('');
  const report = buildAdminReport();
  const permissions = adminPermissions.map((permission) => `<article>${permission}</article>`).join('');
  const fraudRows = fraudSignals.map((item) => `<tr><td>${item.signal}</td><td>${item.level}</td><td>${item.action}</td></tr>`).join('');
  const promoRows = appState.promotionQueue.map((promo, index) => `<tr><td>${promo.platform}</td><td>${promo.target}</td><td>${promo.status}</td><td><button data-approve-promo="${index}" type="button">Aprobar</button><button data-reject-promo="${index}" type="button">Rechazar</button></td></tr>`).join('');

  const view = createElement(`
    <section class="admin-panel" id="resumen">
      <p class="eyebrow">Panel de administrador privado</p>
      <h2>Control total de GemasGo</h2>
      <div class="admin-kpis"><article><span>Valor admin</span><strong>${report.adminRevenue}</strong></article><article><span>Usuarios activos</span><strong>${report.activeUsers.toLocaleString('es')}</strong></article><article><span>Promos pendientes</span><strong>${report.pendingPromotions}</strong></article></div>
      <div class="admin-grid">${permissions}</div>
      <div class="table-wrap" id="promociones-admin"><table><thead><tr><th>Video</th><th>Objetivo</th><th>Estado</th><th>Acción</th></tr></thead><tbody>${promoRows}</tbody></table></div>
      <div class="table-wrap" id="antifraude-admin"><table><thead><tr><th>Señal antifraude</th><th>Nivel</th><th>Acción IA</th></tr></thead><tbody>${fraudRows}</tbody></table></div>
      <div class="ai-grid" id="sistemas-admin">${aiCards}</div>
    </section>
  `);

  view.addEventListener('click', (event) => {
    const aiButton = event.target.closest('[data-toggle-ai]');
    const approveButton = event.target.closest('[data-approve-promo]');
    const rejectButton = event.target.closest('[data-reject-promo]');
    if (aiButton) toggleAiSystem(aiButton.dataset.toggleAi);
    if (approveButton) approvePromotion(Number(approveButton.dataset.approvePromo));
    if (rejectButton) rejectPromotion(Number(rejectButton.dataset.rejectPromo));
  });

  return view;
}
