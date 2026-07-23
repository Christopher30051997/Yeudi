import { aiSystems } from './data.js';
import { createElement } from './utils.js';

export function renderHomeView() {
  const aiList = aiSystems.map((ai) => `<li><strong>${ai.name}:</strong> ${ai.description}</li>`).join('');
  return createElement(`
    <section class="two-column">
      <article class="content-card">
        <p class="eyebrow">Monetización</p>
        <h2>Cuatro fuentes de ingresos</h2>
        <ul class="feature-list"><li>Anuncios vistos por usuarios.</li><li>Promociones de vídeos pagadas con GemasGo.</li><li>Compra de monedas con USDT, Bitcoin, Ethereum o BNB.</li><li>Flujo de usuarios atraídos por juegos y recompensas.</li></ul>
      </article>
      <article class="content-card ai-card">
        <p class="eyebrow">IA integrada</p>
        <h2>Sistema supervisado</h2>
        <ul>${aiList}</ul>
      </article>
    </section>
  `);
}
