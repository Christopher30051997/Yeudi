import { renderAdminView } from './admin.js';

const mount = document.querySelector('#adminMount');
mount.replaceChildren(renderAdminView());

window.addEventListener('gemasgo:state-change', () => {
  mount.replaceChildren(renderAdminView());
});
