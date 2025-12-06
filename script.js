document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('.icon');
    const body = document.body;

    // Check localStorage for saved preference
    const savedTheme = localStorage.getItem('theme');

    // Apply saved theme or default to light (no class needed for light)
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.textContent = '🌙';
    } else {
        themeIcon.textContent = '☀️';
    }

    // Toggle logic
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.textContent = '🌙';
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.textContent = '☀️';
        }
    });
});

// SPA View Logic
function showPost(postId) {
    document.getElementById('view-home').classList.add('hidden');
    document.getElementById('view-detail').classList.remove('hidden');

    // Hide all posts first
    document.querySelectorAll('.detail-content').forEach(el => el.classList.add('hidden'));
    // Show specific post
    document.getElementById(postId).classList.remove('hidden');

    window.scrollTo(0, 0);
}

function showHome() {
    document.getElementById('view-detail').classList.add('hidden');
    document.getElementById('view-home').classList.remove('hidden');
}
