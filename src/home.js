import { createElement } from './utils.js';
import { renderAuthChecklist } from './auth.js';
import { renderWalletLedger } from './wallet.js';
import { policies } from './policies.js';

export function renderHomeView() {
  const home = createElement(`
    <section class="view-mount user-home">
      <div class="section-split">
        <article class="content-card feature-panel">
          <p class="eyebrow">Inicio</p>
          <h2>Tu panel está dividido por partes</h2>
          <p>Usa el menú para entrar a Juegos, Anuncios, Tienda, Promociones y Comprobantes sin mezclar funciones.</p>
          <div class="quick-actions">
            <a href="#juegos" data-view="games">Abrir juegos</a>
            <a href="#tienda" data-view="store">Ir a tienda</a>
            <a href="#promociones" data-view="promotions">Promocionar video</a>
          </div>
        </article>
        <article class="content-card">
          <p class="eyebrow">Políticas visibles</p>
          <h2>Reglas de uso</h2>
          <ul class="feature-list">${policies.map((policy) => `<li>${policy}</li>`).join('')}</ul>
        </article>
      </div>
      <article class="content-card">
        <p class="eyebrow">Billetera</p>
        <h2>Historial de movimientos</h2>
        ${renderWalletLedger()}
      </article>
    </section>
  `);
  home.prepend(renderAuthChecklist());
  return home;
}
