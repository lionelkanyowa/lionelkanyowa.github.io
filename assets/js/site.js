// Site interactions: privacy-friendly video facades.
(function () {
    'use strict';

    // Load a YouTube iframe only after the visitor chooses a video.
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
