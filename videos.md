---
layout: default
title: Videos
permalink: /videos/
description: Short videos documenting Launch School and the software-engineering journey.
---

<section class="about-hero">
  <div class="wrap">
    <p class="eyebrow">Videos</p>
    <h1 class="about-title">The journey <em>on camera</em>.</h1>
    <p class="about-stand">Short videos documenting Launch School, the home lab, and the road from systems administration into software engineering. Thumbnails load the player only when you click — the page stays fast.</p>
  </div>
</section>

<section class="block">
  <div class="wrap">
    {% if site.data.videos and site.data.videos.size > 0 %}
    <div class="vids">
      {% for v in site.data.videos %}
      {% include video.html video=v %}
      {% endfor %}
    </div>
    {% else %}
    <div class="sec-head">
      <h2>First videos are coming soon</h2>
      <p>I'm setting up to record the journey. When the first videos are up, they'll show here — and you'll be able to play them right on the page.</p>
    </div>
    {% endif %}
  </div>
</section>
