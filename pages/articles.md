---
layout: page
title: Articles
permalink: /articles/
---

<div class="hero" style="padding: 2rem 0;">
  <div class="wrapper">
    <h1>Articles & Insights</h1>
    <p class="hero-subtitle">Sharing knowledge, experiences, and best practices in DevOps, cloud infrastructure, and automation. Learn from real-world challenges and solutions.</p>
  </div>
</div>

<section style="padding: 2rem 0;">
  <div class="wrapper">
    {% if site.posts.size > 0 %}
      <div class="articles-grid">
        {% for post in site.posts %}
          <article class="card article-card">
            <div class="article-meta">
              <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
              {% if post.categories %}
                <span class="category">{{ post.categories | first | capitalize }}</span>
              {% endif %}
            </div>
            
            <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
            
            {% if post.excerpt %}
              <p class="article-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
            {% endif %}
            
            <div class="article-footer">
              <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
              {% if post.tags %}
                <div class="tags">
                  {% for tag in post.tags %}
                    <span class="tag">{{ tag }}</span>
                  {% endfor %}
                </div>
              {% endif %}
            </div>
          </article>
        {% endfor %}
      </div>
    {% else %}
      <div style="text-align: center; padding: 4rem 0;">
        <div style="font-size: 4rem; margin-bottom: 2rem;">📝</div>
        <h2>Coming Soon!</h2>
        <p class="text-muted" style="max-width: 500px; margin: 0 auto;">
          I'm working on creating valuable content about DevOps practices, infrastructure automation, and lessons learned from real-world projects. Check back soon for insightful articles and tutorials.
        </p>
        
        <div style="margin-top: 3rem;">
          <h3>Planned Topics</h3>
          <div class="card-grid" style="margin-top: 2rem;">
            <div class="card">
              <h4>🚀 CI/CD Best Practices</h4>
              <p>Building robust deployment pipelines with automated testing, security scanning, and rollback strategies.</p>
            </div>
            
            <div class="card">
              <h4>☁️ Multi-Cloud Strategies</h4>
              <p>Implementing infrastructure across multiple cloud providers while avoiding vendor lock-in and managing complexity.</p>
            </div>
            
            <div class="card">
              <h4>🔧 Kubernetes Deep Dives</h4>
              <p>Advanced Kubernetes patterns, troubleshooting techniques, and production-grade cluster management.</p>
            </div>
            
            <div class="card">
              <h4>📊 Observability Engineering</h4>
              <p>Implementing comprehensive monitoring, logging, and tracing solutions for distributed systems.</p>
            </div>
            
            <div class="card">
              <h4>🛡️ DevSecOps Implementation</h4>
              <p>Integrating security practices into DevOps workflows without slowing down development velocity.</p>
            </div>
            
            <div class="card">
              <h4>⚡ Infrastructure Optimization</h4>
              <p>Cost optimization strategies, performance tuning, and resource management in cloud environments.</p>
            </div>
          </div>
        </div>
        
        <div style="margin-top: 3rem; padding: 2rem; background: var(--card-bg); border-radius: 12px;">
          <h3>Stay Updated</h3>
          <p class="text-muted">Want to be notified when new articles are published?</p>
          <div style="margin-top: 1.5rem;">
            <a href="mailto:{{ site.author.email }}?subject=Article Notifications" class="btn">Get Notified</a>
            <a href="/feed.xml" class="btn btn-outline" style="margin-left: 1rem;">RSS Feed</a>
          </div>
        </div>
      </div>
    {% endif %}
  </div>
</section>

{% if site.posts.size > 0 %}
<section style="background: var(--card-bg); padding: 4rem 0; margin: 4rem 0; border-radius: 20px;">
  <div class="wrapper text-center">
    <h2>Article Categories</h2>
    <p class="text-muted" style="margin-bottom: 2rem;">Explore articles by topic</p>
    
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem;">
      {% assign categories = site.categories | sort %}
      {% for category in categories %}
        <a href="#" class="category-tag">
          {{ category[0] | capitalize }} ({{ category[1].size }})
        </a>
      {% endfor %}
    </div>
  </div>
</section>
{% endif %}

<section style="padding: 4rem 0;">
  <div class="wrapper text-center">
    <h2>Have a Question or Topic Suggestion?</h2>
    <p class="text-muted" style="margin-bottom: 2rem;">
      I'm always looking for interesting topics to write about. If you have a DevOps challenge you'd like me to address, feel free to reach out!
    </p>
    
    <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
      <a href="mailto:{{ site.author.email }}?subject=Article Suggestion" class="btn">Suggest a Topic</a>
      <a href="https://linkedin.com/in/{{ site.author.linkedin }}" class="btn btn-outline" target="_blank">Connect on LinkedIn</a>
    </div>
  </div>
</section>
