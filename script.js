// Get DOM elements
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Check for saved user preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

// Set initial theme based on saved preference or system preference
if (currentTheme === 'dark') {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️ Light Mode';
} else if (currentTheme === 'light') {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeToggleBtn.textContent = '🌙 Dark Mode';
} else {
    // If no saved preference, use system preference
    if (prefersDarkScheme.matches) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
}

// Theme toggle function
themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '🌙 Dark Mode';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '☀️ Light Mode';
    }
});

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        if (e.matches) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeToggleBtn.textContent = '☀️ Light Mode';
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeToggleBtn.textContent = '🌙 Dark Mode';
        }
    }
});
