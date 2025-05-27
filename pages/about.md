---
layout: page
title: About Me
permalink: /about/
---

<div class="hero" style="padding: 2rem 0;">
  <div class="wrapper">
    <h1>About Lionel Kanyowa</h1>
    <p class="hero-subtitle">DevOps Engineer passionate about building scalable, reliable infrastructure and fostering collaboration between development and operations teams.</p>
  </div>
</div>

<section style="padding: 2rem 0;">
  <div class="wrapper">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start;">
      <div>
        <h2>My Story</h2>
        <p>
          I'm a DevOps engineer with a passion for transforming how organizations build, deploy, and maintain software systems. My journey began with traditional system administration, but I quickly discovered the power of automation and infrastructure as code.
        </p>
        <p>
          Today, I specialize in designing and implementing robust CI/CD pipelines, managing cloud infrastructure, and helping teams adopt DevOps practices that accelerate delivery while maintaining high standards for security and reliability.
        </p>
        <p>
          When I'm not optimizing deployment pipelines or architecting cloud solutions, you'll find me contributing to open-source projects, writing technical articles, or exploring the latest developments in cloud-native technologies.
        </p>
      </div>
      
      <div class="card">
        <h3>Quick Facts</h3>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 1rem;">📍 <strong>Location:</strong> {{ site.author.location }}</li>
          <li style="margin-bottom: 1rem;">💼 <strong>Role:</strong> DevOps Engineer</li>
          <li style="margin-bottom: 1rem;">🎯 <strong>Focus:</strong> Cloud Infrastructure & Automation</li>
          <li style="margin-bottom: 1rem;">📧 <strong>Email:</strong> <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></li>
          <li>🔗 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/{{ site.author.linkedin }}" target="_blank">Connect with me</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section style="padding: 4rem 0;">
  <div class="wrapper">
    <h2 style="text-align: center; margin-bottom: 3rem;">Technical Expertise</h2>
    
    <div class="card-grid">
      <div class="card">
        <h3>☁️ Cloud Platforms</h3>
        <p><strong>Amazon Web Services (AWS)</strong> - EC2, S3, RDS, Lambda, CloudFormation, EKS</p>
        <p><strong>Microsoft Azure</strong> - Virtual Machines, Azure DevOps, AKS, ARM Templates</p>
        <p><strong>Google Cloud Platform</strong> - Compute Engine, GKE, Cloud Build, Terraform</p>
      </div>
      
      <div class="card">
        <h3>🔧 Infrastructure & Configuration</h3>
        <p><strong>Infrastructure as Code</strong> - Terraform, CloudFormation, ARM Templates</p>
        <p><strong>Configuration Management</strong> - Ansible, Chef, Puppet</p>
        <p><strong>Containerization</strong> - Docker, Kubernetes, Helm, Docker Compose</p>
      </div>
      
      <div class="card">
        <h3>🚀 CI/CD & Automation</h3>
        <p><strong>Pipeline Tools</strong> - Jenkins, GitLab CI, GitHub Actions, Azure DevOps</p>
        <p><strong>Version Control</strong> - Git, GitFlow, GitOps workflows</p>
        <p><strong>Scripting</strong> - Python, Bash, PowerShell, Go</p>
      </div>
      
      <div class="card">
        <h3>📊 Monitoring & Observability</h3>
        <p><strong>Monitoring Stack</strong> - Prometheus, Grafana, ELK Stack, DataDog</p>
        <p><strong>APM Tools</strong> - New Relic, AppDynamics, Jaeger</p>
        <p><strong>Log Management</strong> - Elasticsearch, Logstash, Kibana, Fluentd</p>
      </div>
    </div>
  </div>
</section>

<section style="background: var(--card-bg); padding: 4rem 0; margin: 4rem 0; border-radius: 20px;">
  <div class="wrapper">
    <h2 style="text-align: center; margin-bottom: 3rem;">Certifications & Learning</h2>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
      <div style="text-align: center; padding: 1.5rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🏆</div>
        <h4>AWS Certified</h4>
        <p class="text-muted">Solutions Architect - Associate</p>
      </div>
      
      <div style="text-align: center; padding: 1.5rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">⚙️</div>
        <h4>Kubernetes</h4>
        <p class="text-muted">Certified Kubernetes Administrator (CKA)</p>
      </div>
      
      <div style="text-align: center; padding: 1.5rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔒</div>
        <h4>Security+</h4>
        <p class="text-muted">CompTIA Security+ Certified</p>
      </div>
    </div>
    
    <div style="text-align: center; margin-top: 2rem;">
      <p class="text-muted">Always learning and staying current with the latest in DevOps and cloud technologies</p>
    </div>
  </div>
</section>

<section style="padding: 4rem 0;">
  <div class="wrapper text-center">
    <h2>Let's Connect</h2>
    <p class="text-muted" style="margin-bottom: 2rem;">
      I'm always interested in discussing DevOps challenges, sharing knowledge, and exploring collaboration opportunities.
    </p>
    
    <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
      <a href="mailto:{{ site.author.email }}" class="btn">
        📧 Email Me
      </a>
      <a href="https://linkedin.com/in/{{ site.author.linkedin }}" class="btn btn-outline" target="_blank">
        💼 LinkedIn
      </a>
      <a href="https://github.com/{{ site.author.github }}" class="btn btn-outline" target="_blank">
        💻 GitHub
      </a>
    </div>
  </div>
</section>

<style>
@media (max-width: 768px) {
  .wrapper > div[style*="grid-template-columns: 1fr 1fr"] {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
  }
}</style>