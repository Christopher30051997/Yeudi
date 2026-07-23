import { ads, aiSystems, promotionQueue } from './data.js';
import { createElement, formatGemas } from './utils.js';

export function renderAdminView() {
  const aiCards = aiSystems.map((ai) => `<article><h3>${ai.name}</h3><p>${ai.description}</p><span>${ai.status}</span><button type="button">Activar / Desactivar</button></article>`).join('');
  const totalAdValue = ads.reduce((sum, ad) => sum + ad.value * ad.views, 0);
  return createElement(`
    <section class="admin-panel" id="admin">
      <p class="eyebrow">Panel de administrador privado</p>
      <h2>Control total de GemasGo</h2>
      <div class="admin-kpis"><article><span>Valor anuncios</span><strong>${formatGemas(totalAdValue)}</strong></article><article><span>Usuarios activos</span><strong>8,421</strong></article><article><span>Promos pendientes</span><strong>${promotionQueue.length}</strong></article></div>
      <div class="admin-grid"><article>Subir nuevos juegos</article><article>Editar precios, niveles y recompensas</article><article>Revisar y aprobar promociones</article><article>Enviar comprobantes o mensajes de pago</article><article>Ver estadísticas de anuncios y ganancias</article><article>Auditar usuarios activos</article></div>
      <div class="ai-grid">${aiCards}</div>
    </section>
  `);
}
