import { appState } from './state.js';
import { platformConfig } from './config.js';
import { submitPromotion } from './promotionEngine.js';
import { calculatePromotionCost, createElement, formatGemas } from './utils.js';

export function renderPromotionsView() {
  const queue = appState.promotionQueue.map((promo) => `<li><strong>${promo.platform}:</strong> ${promo.target} · ${formatGemas(promo.cost)} · ${promo.status}</li>`).join('');
  const platforms = platformConfig.promotionPlatforms.map((platform) => `<option>${platform}</option>`).join('');
  const view = createElement(`
    <section class="content-card" id="promociones">
      <div class="promotion-card">
        <div><p class="eyebrow">Promociones de vídeos</p><h2>Promociona YouTube, TikTok o Facebook</h2><ul class="queue-list">${queue}</ul></div>
        <form class="promo-form">
          <select name="platform">${platforms}</select>
          <input name="url" type="url" placeholder="URL del video" value="https://youtube.com/watch?v=demo" />
          <input name="views" type="number" min="0" value="1000" aria-label="Vistas objetivo" />
          <input name="likes" type="number" min="0" value="250" aria-label="Me gusta objetivo" />
          <input name="days" type="number" min="1" value="7" aria-label="Días de promoción" />
          <output>Costo estimado: ${formatGemas(calculatePromotionCost({ views: 1000, likes: 250, days: 7 }))}</output>
          <small data-promo-message></small>
          <button type="submit">Enviar a aprobación</button>
        </form>
      </div>
    </section>
  `);

  const form = view.querySelector('form');
  form.addEventListener('input', () => {
    const data = Object.fromEntries(new FormData(form));
    form.querySelector('output').textContent = `Costo estimado: ${formatGemas(calculatePromotionCost(data))}`;
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const result = submitPromotion(Object.fromEntries(new FormData(form)));
    form.querySelector('[data-promo-message]').textContent = result.ok ? `Promoción enviada por ${formatGemas(result.cost)}.` : result.errors.join(' ');
  });

  return view;
}
