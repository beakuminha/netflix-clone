const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');
const root = document.documentElement;
const savedTheme = localStorage.getItem('netflixTheme') || 'dark';

function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    if (themeLabel) themeLabel.textContent = 'Tema: ' + theme;
    localStorage.setItem('netflixTheme', theme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
});

const profile1 = document.getElementById('profile1');
if (profile1) {
    profile1.addEventListener('click', () => {
        window.location.href = 'catalogo1.html';
    });
}

applyTheme(savedTheme);