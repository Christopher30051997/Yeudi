import { shopSections } from './data.js';
import { createElement } from './utils.js';

export function renderStoreView() {
  const cards = shopSections.map((section) => `
    <article>
      <h3>${section.title}</h3>
      <p>${section.description}</p>
      <ul>${section.options.map((option) => `<li>${option}</li>`).join('')}</ul>
      <button type="button">Configurar</button>
    </article>
  `).join('');

  return createElement(`
    <section class="content-card" id="tienda">
      <p class="eyebrow">Tienda GemasGo</p>
      <h2>Canjes, compras con cripto y comprobantes</h2>
      <div class="shop-grid">${cards}</div>
    </section>
  `);
}
