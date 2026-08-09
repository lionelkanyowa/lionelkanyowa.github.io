// Site interactions: theme toggle, code tabs, mobile nav, video facades.
(function () {
    'use strict';
    var root = document.documentElement;

    // ---- Theme toggle ---------------------------------------------------
    // No stored preference means "follow the system" — the CSS media query
    // handles that, so we only write data-theme + localStorage on an explicit
    // toggle. The pre-paint script in <head> applies any saved choice.
    function systemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    function effectiveTheme() {
        return root.getAttribute('data-theme') || systemTheme();
    }
    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', function () {
            var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            try { localStorage.setItem('theme', next); } catch (e) {}
        });
    }
    // Keep following the system while no explicit choice is stored.
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
        try { if (!localStorage.getItem('theme')) root.removeAttribute('data-theme'); } catch (e) {}
    });

    // ---- Mobile nav: close after choosing a link ------------------------
    var navTrigger = document.getElementById('nav-trigger');
    if (navTrigger) {
        document.querySelectorAll('.nav-menu .page-link').forEach(function (link) {
            link.addEventListener('click', function () { navTrigger.checked = false; });
        });
    }

    // ---- Code tabs (About) ----------------------------------------------
    document.querySelectorAll('[data-tabs]').forEach(function (group) {
        var tabs = group.querySelectorAll('.tab');
        var fileLabel = group.querySelector('.tab-file');
        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                tabs.forEach(function (t) {
                    var on = t === tab;
                    t.setAttribute('aria-selected', on);
                    var panel = document.getElementById(t.getAttribute('aria-controls'));
                    if (panel) panel.hidden = !on;
                });
                if (fileLabel && tab.getAttribute('data-file')) {
                    fileLabel.textContent = tab.getAttribute('data-file');
                }
            });
        });
    });

    // ---- YouTube facades: load the iframe only on click -----------------
    document.querySelectorAll('.vid[data-yt]').forEach(function (vid) {
        vid.addEventListener('click', function (e) {
            e.preventDefault();
            var id = vid.getAttribute('data-yt');
            var thumb = vid.querySelector('.thumb');
            if (!id || !thumb || vid.dataset.loaded) return;
            var iframe = document.createElement('iframe');
            iframe.setAttribute('src', 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0');
            iframe.setAttribute('title', vid.getAttribute('data-title') || 'Video player');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');
            thumb.innerHTML = '';
            thumb.appendChild(iframe);
            vid.dataset.loaded = 'true';
        });
    });
})();
