import { appState } from './state.js';
import { createElement } from './utils.js';

export function renderNotificationsView() {
  const receipts = appState.receipts.map((receipt) => `
    <div class="receipt-card">
      <img src="${receipt.image}" alt="${receipt.title}" />
      <div><strong>${receipt.title}</strong><span>${receipt.message}</span><small>${receipt.status}</small></div>
    </div>
  `).join('');

  return createElement(`
    <article class="content-card" id="notificaciones">
      <p class="eyebrow">IA de Notificación</p>
      <h2>Mensajes, recibos y comprobantes</h2>
      <div class="notification-list">
        ${receipts}
        <div><strong>Promoción en revisión</strong><span>El administrador debe aprobar el video antes de publicarlo.</span></div>
        <div><strong>Alerta antifraude</strong><span>Actividad inusual detectada; recompensas pausadas temporalmente.</span></div>
      </div>
    </article>
  `);
}
