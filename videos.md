---
layout: default
title: Videos
permalink: /videos/
description: "Short videos on what I'm learning and building: Linux, containers, infrastructure, and the home lab."
---

<section class="about-hero">
  <div class="wrap">
    <h1 class="about-title">Videos</h1>
    <p class="about-stand">Short videos on what I'm learning and building: Linux, containers, infrastructure, and the home lab.</p>
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
