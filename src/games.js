import { appState, commitState } from './state.js';
import { createElement } from './utils.js';
import { showAdGate } from './ads.js';
import { getFraudVerdict } from './fraud.js';
import { shouldShowGameAd } from './adEngine.js';

let totalPlays = appState.user.gamesPlayed;

export function renderGamesView() {
  const cards = appState.games.map((game) => `
    <article class="game-card">
      <span>${game.icon}</span>
      <p>${game.category}</p>
      <h3>${game.title}</h3>
      <button data-play-game="${game.id}" type="button">Jugar</button>
    </article>
  `).join('');

  const view = createElement(`
    <section class="content-card" id="juegos">
      <div class="section-heading"><div><p class="eyebrow">Galería de juegos</p><h2>Juega al instante en 4 columnas</h2></div><span class="badge">Anuncio antes de iniciar y cada 3 partidas</span></div>
      <div class="game-grid">${cards}</div>
      <div class="mini-console" id="gameConsole">Selecciona un juego para iniciar.</div>
    </section>
  `);

  view.addEventListener('click', (event) => {
    const button = event.target.closest('[data-play-game]');
    if (!button) return;
    const game = appState.games.find((item) => item.id === button.dataset.playGame);
    const startGame = (reward = 0) => {
      totalPlays += 1;
      commitState((state) => {
        const savedGame = state.games.find((item) => item.id === game.id);
        savedGame.plays += 1;
        state.user.gamesPlayed = totalPlays;
      });
      view.querySelector('#gameConsole').textContent = `${game.title} iniciado. Partida #${game.plays} de este juego. Total: ${totalPlays}. Recompensa por anuncio: ${reward} GG. IA Antifraude: ${getFraudVerdict(totalPlays)}.`;
    };
    if (shouldShowGameAd(totalPlays)) showAdGate(startGame);
    else startGame();
  });

  return view;
}
