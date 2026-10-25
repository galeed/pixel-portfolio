const root = document.documentElement;
const themeButton = document.querySelector('#theme-toggle');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

try {
  const savedTheme = localStorage.getItem('pixel-folio-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    root.dataset.theme = savedTheme;
  }
} catch {
  // The page still works if browser storage is unavailable.
}

function updateThemeLabel() {
  const isLight = root.dataset.theme === 'light';
  themeButton?.setAttribute('aria-label', isLight ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro');
  themeButton?.setAttribute('title', isLight ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro');
}

updateThemeLabel();
themeButton?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = nextTheme;
  try {
    localStorage.setItem('pixel-folio-theme', nextTheme);
  } catch {
    // Theme changes remain active for this page view.
  }
  updateThemeLabel();
});
