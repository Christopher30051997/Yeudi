import { createElement } from './utils.js';

export function renderNotificationsView() {
  return createElement(`
    <article class="content-card">
      <p class="eyebrow">IA de Notificación</p>
      <h3>Mensajes y comprobantes para usuarios</h3>
      <div class="notification-list">
        <div><strong>Pago Free Fire aprobado</strong><span>Recibo enviado con imagen de comprobante.</span></div>
        <div><strong>Promoción en revisión</strong><span>El administrador debe aprobar el video antes de publicarlo.</span></div>
        <div><strong>Alerta antifraude</strong><span>Actividad inusual detectada; recompensas pausadas temporalmente.</span></div>
      </div>
    </article>
  `);
}
