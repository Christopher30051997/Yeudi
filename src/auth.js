import { createElement } from './utils.js';

export function setupRegistration(onRegister) {
  const form = document.querySelector('#registro');
  const userName = document.querySelector('#userName');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim() || 'Usuario GemasGo';
    userName.textContent = name;
    onRegister(name);
    document.querySelector('#panel').scrollIntoView({ behavior: 'smooth' });
  });
}

export function renderAuthChecklist() {
  return createElement(`
    <article class="content-card">
      <p class="eyebrow">Registro seguro</p>
      <h3>Validaciones de cuenta</h3>
      <ul class="feature-list">
        <li>Nombre obligatorio y correo opcional.</li>
        <li>Contraseña mínima de 8 caracteres.</li>
        <li>Ingreso directo al panel después del registro.</li>
        <li>Revisión antifraude activa desde la primera vista de anuncio.</li>
      </ul>
    </article>
  `);
}
