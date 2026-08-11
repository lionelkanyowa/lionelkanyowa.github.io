---
layout: default
title: Study Log
permalink: /studylog/
description: Short reflections written after each Launch School study session — what clicked, what didn't, and what I'm carrying into the next one.
---

<section class="about-hero">
  <div class="wrap">
    <p class="eyebrow">Study log</p>
    <h1 class="about-title">Thoughts from each <em>study session</em>.</h1>
    <p class="about-stand">Short reflections written right after each study session — what clicked, what didn't, and what I'm carrying into the next one. Kept here on the site, not on a platform.</p>
  </div>
</section>

<section class="block">
  <div class="wrap">
    <div class="entries">
      {% for post in site.posts %}
      <a class="entry" href="{{ post.url | relative_url }}">
        <span class="edate">{{ post.date | date: "%b %-d, %Y" }}</span>
        <div>
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt | strip_html | strip_newlines | truncate: 180 }}</p>
        </div>
      </a>
      {% else %}
      <p class="text-muted">The first entries are on the way. Check back soon.</p>
      {% endfor %}
    </div>
  </div>
</section>
