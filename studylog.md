---
layout: default
title: Study Log
permalink: /studylog/
description: A record of what I'm studying and building in the home lab — what clicked, what didn't, and what comes next.
---

<section class="about-hero">
  <div class="wrap">
    <h1 class="about-title">Study log</h1>
    <p class="about-stand">Short entries on what I'm studying and building in the home lab: what changed in my understanding, and what comes next. Entries from my Launch School study are kept and labeled archived.</p>
  </div>
</section>

<section class="block">
  <div class="wrap">
    <div class="entries">
      {% for post in site.posts %}
      <a class="entry" href="{{ post.url | relative_url }}">
        <span class="edate">{{ post.date | date: "%b %-d, %Y" }}</span>
        <div>
          <h2>{{ post.title }}{% if post.tags contains "archived" %} <span class="tag-archived">Archived</span>{% endif %}</h2>
          <p>{{ post.excerpt | strip_html | strip_newlines | truncate: 180 }}</p>
        </div>
      </a>
      {% else %}
      <p class="text-muted">The first entries are on the way. Check back soon.</p>
      {% endfor %}
    </div>
  </div>
</section>
