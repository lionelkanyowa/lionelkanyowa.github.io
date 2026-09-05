---
layout: default
title: Study Log
permalink: /studylog/
description: A weekly record of Launch School study — what clicked, what didn't, and what I'm carrying into the next week.
---

<section class="about-hero">
  <div class="wrap">
    <p class="eyebrow">Study log</p>
    <h1 class="about-title">Weekly study log</h1>
    <p class="about-stand">A record of what I'm studying, now published weekly. The earliest entries capture individual sessions; each new post collects what changed in my understanding and what comes next.</p>
  </div>
</section>

<section class="block">
  <div class="wrap">
    <div class="entries">
      {% for post in site.posts %}
      <a class="entry" href="{{ post.url | relative_url }}">
        <span class="edate">{{ post.date | date: "%b %-d, %Y" }}</span>
        <div>
          <h2>{{ post.title }}</h2>
          <p>{{ post.excerpt | strip_html | strip_newlines | truncate: 180 }}</p>
        </div>
      </a>
      {% else %}
      <p class="text-muted">The first entries are on the way. Check back soon.</p>
      {% endfor %}
    </div>
  </div>
</section>
