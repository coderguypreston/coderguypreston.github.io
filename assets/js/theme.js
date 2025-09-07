const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// load saved theme on page load
const savedTheme = localStorage.getItem('theme') || 'light';
html.dataset.theme = savedTheme;

// update toggle icon when loading
if (savedTheme === 'dark') {
  themeToggle.classList.add('active');
}

// toggle between light and dark modes
themeToggle.addEventListener('click', () => {
  const currentTheme = html.dataset.theme;
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';

  // apply new theme
  html.dataset.theme = nextTheme;

  // save to localStorage
  localStorage.setItem('theme', nextTheme);

  // update icon
  themeToggle.classList.toggle('active');
});