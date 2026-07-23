import { languages } from './data.js';

export function initLanguagePicker() {
  const browserLanguage = (navigator.language || 'es').slice(0, 2).toLowerCase();
  const selectedLanguage = languages[browserLanguage] ? browserLanguage : 'es';
  const languageButton = document.querySelector('#languageButton');
  const languageMenu = document.querySelector('#languageMenu');
  const currentFlag = document.querySelector('#currentFlag');
  const currentLanguage = document.querySelector('#currentLanguage');

  languageMenu.innerHTML = Object.entries(languages)
    .map(([code, language]) => `<button type="button" data-lang="${code}" role="menuitem">${language.flag} ${language.label}</button>`)
    .join('');

  function setLanguage(code) {
    const language = languages[code] || languages.es;
    currentFlag.textContent = language.flag;
    currentLanguage.textContent = language.label;
    document.documentElement.lang = code;
  }

  setLanguage(selectedLanguage);

  languageButton.addEventListener('click', () => {
    const isOpen = languageMenu.classList.toggle('is-open');
    languageButton.setAttribute('aria-expanded', String(isOpen));
  });

  languageMenu.addEventListener('click', (event) => {
    const option = event.target.closest('button[data-lang]');
    if (!option) return;
    setLanguage(option.dataset.lang);
    languageMenu.classList.remove('is-open');
    languageButton.setAttribute('aria-expanded', 'false');
  });
}
