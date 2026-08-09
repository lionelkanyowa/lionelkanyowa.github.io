---
layout: default
title: Writing
permalink: /writing/
description: Longer essays on learning deeply, the systems-to-software path, and lessons from the home lab. Published on Medium.
---

<section class="about-hero">
  <div class="wrap">
    <p class="eyebrow">Writing</p>
    <h1 class="about-title">Longer pieces, <em>thought through</em>.</h1>
    <p class="about-stand">Where the study log is the day-to-day, these are the essays I take time with — learning deeply, the systems-to-software path, and lessons from the home lab. Published on Medium.</p>
  </div>
</section>

<section class="block">
  <div class="wrap">
    {% if site.data.articles and site.data.articles.size > 0 %}
    <div class="writing">
      {% for a in site.data.articles %}
      <a class="post-link" href="{{ a.url }}" target="_blank" rel="noopener">
        <span class="date">{{ a.date | date: "%Y · %m" }}</span>
        <h3>{{ a.title }}</h3>
        <span class="src">Medium &#8599;</span>
      </a>
      {% endfor %}
    </div>
    {% if site.author.medium %}
    <div class="sec-foot"><a class="btn ghost" href="https://medium.com/@{{ site.author.medium }}" target="_blank" rel="noopener">Everything on Medium &rarr;</a></div>
    {% endif %}
    {% else %}
    <div class="sec-head">
      <h2>First articles are coming soon</h2>
      <p>I'm keeping the day-to-day in the <a href="{{ '/studylog/' | relative_url }}">study log</a> for now. Longer essays will land here — and on Medium — as the journey gives me something worth taking time over.</p>
    </div>
    {% endif %}
  </div>
</section>
