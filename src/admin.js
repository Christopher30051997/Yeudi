import { aiSystems } from './data.js';
import { createElement } from './utils.js';
import { adminPermissions } from './config.js';
import { fraudSignals } from './fraud.js';
import { buildAdminReport } from './reports.js';

export function renderAdminView() {
  const aiCards = aiSystems.map((ai) => `<article><h3>${ai.name}</h3><p>${ai.description}</p><span>${ai.status}</span><button type="button">Activar / Desactivar</button></article>`).join('');
  const report = buildAdminReport();
  const permissions = adminPermissions.map((permission) => `<article>${permission}</article>`).join('');
  const fraudRows = fraudSignals.map((item) => `<tr><td>${item.signal}</td><td>${item.level}</td><td>${item.action}</td></tr>`).join('');
  return createElement(`
    <section class="admin-panel" id="admin">
      <p class="eyebrow">Panel de administrador privado</p>
      <h2>Control total de GemasGo</h2>
      <div class="admin-kpis"><article><span>Valor anuncios</span><strong>${report.adminRevenue}</strong></article><article><span>Usuarios activos</span><strong>${report.activeUsers.toLocaleString('es')}</strong></article><article><span>Promos pendientes</span><strong>${report.pendingPromotions}</strong></article></div>
      <div class="admin-grid">${permissions}</div>
      <div class="table-wrap"><table><thead><tr><th>Señal antifraude</th><th>Nivel</th><th>Acción IA</th></tr></thead><tbody>${fraudRows}</tbody></table></div>
      <div class="ai-grid">${aiCards}</div>
    </section>
  `);
}
