import { ads } from './data.js';
import { calculateAdSplit, createElement, formatGemas } from './utils.js';

export function renderAdsView() {
  const rows = ads.map((ad) => {
    const split = calculateAdSplit(ad.value);
    return `<tr><td>${ad.advertiser}</td><td>${formatGemas(ad.value)}</td><td>${ad.views}</td><td>${formatGemas(split.user)}</td><td>${formatGemas(split.admin)}</td><td>${ad.status}</td></tr>`;
  }).join('');

  return createElement(`
    <section class="content-card" id="anuncios">
      <p class="eyebrow">Sistema de anuncios e IA</p>
      <h2>Ganancias exclusivas por anuncios validados</h2>
      <div class="revenue-split"><div><strong>20%</strong><span>Usuario</span></div><div><strong>80%</strong><span>Administrador</span></div></div>
      <div class="table-wrap"><table><thead><tr><th>Anunciante</th><th>Valor</th><th>Vistas</th><th>Usuario</th><th>Admin</th><th>Estado</th></tr></thead><tbody>${rows}</tbody></table></div>
    </section>
  `);
}

export function showAdGate(onComplete) {
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
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    onComplete();
  };
}
