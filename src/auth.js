import { commitState } from './state.js';
import { createElement } from './utils.js';
import { validateRegistration } from './validators.js';

export function setupRegistration(onRegister) {
  const form = document.querySelector('#registro');
  const userName = document.querySelector('#userName');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const payload = {
      name: data.get('name')?.toString().trim(),
      email: data.get('email')?.toString().trim(),
      password: data.get('password')?.toString() || '',
    };
    const errors = validateRegistration(payload);
    if (errors.length) {
      form.querySelector('[data-form-error]').textContent = errors.join(' ');
      return;
    }

    commitState((state) => {
      state.user.name = payload.name || 'Usuario GemasGo';
      state.user.email = payload.email || '';
    });
    userName.textContent = payload.name || 'Usuario GemasGo';
    form.querySelector('[data-form-error]').textContent = '';
    onRegister(payload.name);
    document.querySelector('#panel').scrollIntoView({ behavior: 'smooth' });
  });
}

export function renderAuthChecklist() {
  return createElement(`
    <article class="content-card">
      <p class="eyebrow">Registro seguro</p>
      <h3>Cuenta lista para operar</h3>
      <ul class="feature-list">
        <li>Nombre obligatorio y correo opcional.</li>
        <li>Contraseña mínima de 8 caracteres.</li>
        <li>Panel activado al registrarse.</li>
        <li>Antifraude activo desde la primera recompensa.</li>
      </ul>
    </article>
  `);
}
