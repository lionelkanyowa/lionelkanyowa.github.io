// Theme toggle functionality with system preference detection
(function () {
    'use strict';

    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Get system preference
    function getSystemPreference() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // Get stored theme or system preference
    function getStoredTheme() {
        return localStorage.getItem('theme') || getSystemPreference();
    }

    // Set theme
    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    // Initialize theme
    function initTheme() {
        const theme = getStoredTheme();
        setTheme(theme);
    }

    // Toggle theme
    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    // Listen for system theme changes
    function watchSystemTheme() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', function (e) {
            // Only update if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function () {
        initTheme();
        watchSystemTheme();

        // Add click listener to theme toggle button
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
    });

    // Handle page visibility changes (for better performance)
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') {
            // Refresh theme in case system preference changed while tab was hidden
            if (!localStorage.getItem('theme')) {
                setTheme(getSystemPreference());
            }
        }
    });

    // Smooth transitions after page load
    window.addEventListener('load', function () {
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    });
})();