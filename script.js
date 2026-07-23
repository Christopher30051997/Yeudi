const languages = {
  es: { flag: '🇪🇸', label: 'Español' },
  en: { flag: '🇺🇸', label: 'English' },
  zh: { flag: '🇨🇳', label: '中文' },
  hi: { flag: '🇮🇳', label: 'हिन्दी' },
  ar: { flag: '🇸🇦', label: 'العربية' },
};

const browserLanguage = (navigator.language || 'es').slice(0, 2).toLowerCase();
const selectedLanguage = languages[browserLanguage] ? browserLanguage : 'es';
const languageButton = document.querySelector('#languageButton');
const languageMenu = document.querySelector('#languageMenu');
const currentFlag = document.querySelector('#currentFlag');
const currentLanguage = document.querySelector('#currentLanguage');
const menuButton = document.querySelector('#menuButton');
const sidebar = document.querySelector('#sidebar');
const signupForm = document.querySelector('#registro');

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

menuButton.addEventListener('click', () => {
  const collapsed = sidebar.classList.toggle('is-collapsed');
  menuButton.setAttribute('aria-expanded', String(!collapsed));
});

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#panel').scrollIntoView({ behavior: 'smooth' });
});
