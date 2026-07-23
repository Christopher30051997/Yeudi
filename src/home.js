import { aiSystems } from './data.js';
import { createElement } from './utils.js';
import { renderAuthChecklist } from './auth.js';
import { renderWalletLedger } from './wallet.js';
import { policies } from './policies.js';

export function renderHomeView() {
  const aiList = aiSystems.map((ai) => `<li><strong>${ai.name}:</strong> ${ai.description}</li>`).join('');
  const home = createElement(`
    <section class="view-mount">
      <article class="content-card">
        <p class="eyebrow">Monetización</p>
        <h2>Cuatro fuentes de ingresos</h2>
        <ul class="feature-list"><li>Anuncios vistos por usuarios.</li><li>Promociones de vídeos pagadas con GemasGo.</li><li>Compra de monedas con USDT, Bitcoin, Ethereum o BNB.</li><li>Flujo de usuarios atraídos por juegos y recompensas.</li></ul>
      </article>
      <div class="two-column">
        <article class="content-card ai-card">
          <p class="eyebrow">IA integrada</p>
          <h2>Sistema supervisado</h2>
          <ul>${aiList}</ul>
        </article>
        <article class="content-card">
          <p class="eyebrow">Políticas</p>
          <h2>Reglas claras de uso</h2>
          <ul class="feature-list">${policies.map((policy) => `<li>${policy}</li>`).join('')}</ul>
        </article>
      </div>
      <article class="content-card">
        <p class="eyebrow">Billetera</p>
        <h2>Historial de GemasGo</h2>
        ${renderWalletLedger()}
      </article>
    </section>
  `);
  home.prepend(renderAuthChecklist());
  return home;
}
