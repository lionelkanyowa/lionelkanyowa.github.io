# Progress log

Running log of the website revamp. Newest entry first. Each entry: what changed, what's
next, and any open decisions. Appended via the `progress-logger` agent.

---

## 2026-08-09 — Deploy migrated to GitHub Actions + Jekyll 4 (local == prod)

**Done this session.**
- Replaced the legacy `github-pages` gem with `jekyll ~> 4.4` + pinned plugins in the
  `Gemfile`; regenerated `Gemfile.lock` and added the `x86_64-linux` platform for CI.
- Added `.github/workflows/jekyll.yml` — builds with `bundle exec jekyll build`
  (`JEKYLL_ENV=production`) and deploys to Pages via `upload-pages-artifact` /
  `deploy-pages`. Ruby pinned through `.ruby-version` (4.0.6) so CI matches local.
- Verified both `bundle exec jekyll build` and `bundle exec jekyll serve` work locally on
  Ruby 4.0.6 — same Jekyll and lockfile CI will use, so local output matches production.
- Updated `CLAUDE.md` (stack, plugins, preview/deploy) to the new toolchain.

**Next.**
- **Manual, one-time (Lionel):** GitHub → Settings → Pages → Build and deployment →
  Source → **GitHub Actions**. Deploy runs on push to `main`.
- Then merge the branch; the workflow publishes to lionelkanyowa.com (CNAME preserved).

**Open decisions.**
- None on the toolchain — resolved. Remaining product items are in the entry below.

---

## 2026-08-09 — Real build complete and verified

**Done this session.**
- Rebuilt the whole site to the design system, replacing the old 3.1k-line CSS with a
  clean token-based `assets/css/main.css` (both themes, serif/sans/mono roles).
- New `_layouts/default.html` (Fraunces + JetBrains Mono webfonts, pre-paint theme
  script, skip link), `_includes/header.html` (LK monogram, mono nav, mobile menu),
  `_includes/footer.html` (colophon, footer nav, GitHub/LinkedIn/Medium/email),
  `_layouts/page.html` and `_layouts/post.html`.
- Rewrote `theme-toggle.js`: system-aware theme toggle with localStorage, code-tab
  switching, mobile-nav close, and click-to-load YouTube facades.
- Built pages: Home (`index.html`), About (`about.html`), Journey (`journey.html`),
  Study Log index (`studylog.md`) + intro post, Writing (`writing.md`), Videos
  (`videos.md`), reframed Projects (`projects.md`), lean Resources (`resources.md`).
- Data-driven: `_data/articles.yml` and `_data/videos.yml` (empty, with guidance);
  `_includes/video.html` facade. Graceful empty states on Writing/Videos.
- Updated `_config.yml` (new title/description, IA nav, permalinks, kramdown+rouge).
- Removed obsolete pages: `devops-roadmap.md`, `articles.md`, `debug.md`, old `about.md`.
- Installed standalone Jekyll 4 locally (Ruby 4.0 can't run the pinned github-pages gem);
  built and visually verified every page in both light and dark themes via the browser.

**Next.**
- Populate `_data/articles.yml` and `_data/videos.yml` as content appears.
- Write real study-log entries; the intro post is a starter to keep or replace.
- Final logo/favicon (still the "LK" initials mark) and confirm the Medium username in
  `_config.yml` (currently a TODO guess).
- Optionally remove now-unused images (`logo.png`, `profile.jpg`, `profile-about.jpg`).
- Commit when Lionel gives the word (nothing committed yet).

**Open decisions.**
- Faith/Sabbath kept off the site for now (removed from About + footer). `.claude/me.md`
  still permits a light touch elsewhere — align if he wants it off entirely.
- Whether to migrate deploy to GitHub Actions + Jekyll 4 so local matches prod.

---

## 2026-08-08 — Mockups approved; real build started

**Done this session.**
- Iterated the home mockup and built an About mockup: reframed bio (expanding beyond
  infrastructure into SWE, mental models over shiny tools), homelab specifics (OPNsense
  firewall, open-source services on Proxmox), removed Sabbath/camera lines, dropped the
  "title says network" clause, and added a tabbed Ruby/JS code card showing a simple
  even/odd loop.
- Added Lionel's real photo, optimized to `assets/images/lionel-about.jpg`.
- Both mockups approved. Design direction locked; logo stays as the "LK" initials mark
  for now.

**Next.**
- Build the real site in CLAUDE.md order: rebuild `assets/css/main.css` from the design
  tokens → `_layouts`/`_includes` (header mark, footer, fonts) → `_config.yml` nav/meta
  → Home → About → Journey → Study Log (`_posts`) → Writing (`_data/articles.yml`) →
  Videos (`_data/videos.yml` + facade include) → Resources.
- Verify with `bundle exec jekyll build`.

**Open decisions.**
- Whether faith/Sabbath stays off the site entirely (removed from About + footer for now).
- Final webfonts (targeting Fraunces + JetBrains Mono) and whether to self-host.
- Resources page content still needs refocusing away from DevOps.

---

## 2026-08-08 — Kickoff: direction, design system, and scaffolding

**Context.** Revamping `lionelkanyowa.com` away from the DevOps-engineer framing toward
documenting the Launch School software-engineering journey. Minimalist, monochrome + one
accent.

**Decisions made.**
- Keep the stack: Jekyll on GitHub Pages, vanilla frontend. No framework migration.
- Design: warm monochrome ground + a single deep-crimson accent, used sparingly.
  Serif headings / sans body / mono labels. **Design is not themed after any language.**
- Writing strategy: longer essays published on Medium and linked from `_data/articles.yml`;
  plus a **built-in study log** (`_posts`) for short reflections after study sessions.
- Logo: drop the old DevOps/cloud logos and the ruby-gem idea. New direction: a clean,
  language-neutral mark (LK monogram in progress).
- IA: Home · About · Journey · Projects · Study Log · Writing · Videos · Resources.

**Done this session.**
- Reviewed the existing site (layouts, includes, 3.1k-line CSS, all content pages).
- Built a home-page mockup as a Claude artifact; iterated on feedback (de-emphasized the
  language theme, replaced the code card with a study-log card, new monogram).
- Added project scaffolding: `CLAUDE.md` (senior-dev operating instructions + design
  system + IA + workflow), `.claude/me.md` (project-scoped context and voice), this log,
  `.gitignore`, and three subagents (`progress-logger`, `content-writer`,
  `frontend-designer`).

**Next.**
- Get final sign-off on the revised mockup (accent level, monogram, study-log card).
- Then implement for real, in order: design tokens + `main.css` rebuild → `_layouts` /
  `_includes` (header with new mark, footer) → Home → About → Journey → Study Log →
  Writing → Videos → Resources.
- Set up `_data/articles.yml` and `_data/videos.yml`; add facade YouTube embed include.

**Open decisions.**
- Final webfont choices (serif + mono) and whether to self-host.
- Whether Resources stays top-level or folds under Journey.
- Final monogram/logo lockup and favicon.
