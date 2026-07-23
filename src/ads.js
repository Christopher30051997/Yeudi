import { appState } from './state.js';
import { recordAdView } from './adEngine.js';
import { calculateAdSplit, createElement, formatGemas } from './utils.js';

export function renderAdsView() {
  const rows = appState.ads.map((ad) => {
    const split = calculateAdSplit(ad.value);
    return `<tr><td>${ad.advertiser}</td><td>${formatGemas(ad.value)}</td><td>${ad.views}</td><td>${formatGemas(split.user)}</td><td>${formatGemas(split.admin)}</td><td>${ad.status}</td></tr>`;
  }).join('');

  return createElement(`
    <section class="content-card" id="anuncios">
      <p class="eyebrow">Anuncios</p>
      <h2>Visualiza anuncios disponibles</h2>
      <p>Al terminar un anuncio, el sistema actualiza tu saldo y guarda el movimiento en la billetera.</p>
      <button class="button button--primary" data-watch-ad="ad-01" type="button">Ver anuncio y ganar</button>
      <div class="table-wrap"><table><thead><tr><th>Anunciante</th><th>Valor</th><th>Vistas</th><th>Usuario</th><th>Admin</th><th>Estado</th></tr></thead><tbody>${rows}</tbody></table></div>
    </section>
  `);
}

export function showAdGate(onComplete, adId = 'ad-01') {
  const modal = document.querySelector('#adModal');
  const progress = document.querySelector('#adProgress');
  const finishButton = document.querySelector('#finishAdButton');
  let percent = 0;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  finishButton.disabled = true;
  finishButton.textContent = 'Validando anuncio...';
  progress.style.width = '0%';

  const timer = setInterval(() => {
    percent += 20;
    progress.style.width = `${percent}%`;
    if (percent >= 100) {
      clearInterval(timer);
      finishButton.disabled = false;
      finishButton.textContent = 'Continuar';
    }
  }, 350);

  finishButton.onclick = () => {
    const reward = recordAdView(adId);
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    onComplete(reward);
  };
}
