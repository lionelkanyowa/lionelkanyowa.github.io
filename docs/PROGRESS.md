# Progress log

Running log of the website revamp. Newest entry first. Each entry: what changed, what's
next, and any open decisions. Appended via the `progress-logger` agent.

---

## 2026-08-15 — Per-course progress tracking on the Journey roadmap

**Done this session.**
- Added `_data/curriculum.yml` as the single source of truth for the roadmap courses: a
  `prep` list (LS95, RB100) and a `core` list of two branches (backend/Ruby, 8 courses;
  frontend/JavaScript, 6 courses). Each course has a `status` of `done` / `current` /
  `upcoming`. Header comments in the file document how to update it.
- `journey.html` now loops over `site.data.curriculum` for both the Prep Work stage and
  the Core Curriculum split, replacing the hardcoded course `<li>`s.
- Per-course visual markers added to `assets/css/main.css`: `.course.done` = filled accent
  (teal) disc with a CSS checkmark; `.course.current` = accent ring with a box-shadow halo
  plus an "in progress" `.c-tag` pill and brighter/bolder text; `.course.upcoming` = hollow
  hairline dot with muted text — teal fills in as courses are cleared.
- Added derived branch sub-status: for each Core branch, Liquid counts done/current/total
  and renders a `.branch-status` chip — "Complete" (filled accent pill), "In progress ·
  N/M" (teal text), or "Not started" (muted) — computed from course statuses so it can't
  drift out of sync. Added a `.branch-head` flex wrapper to place the chip opposite the
  branch tag.
- Kept the existing Ruby-red / JS-yellow track colors as branch identity; teal/grey is a
  separate progress axis. Added a reusable `.sr-only` utility and screen-reader status text
  so progress is announced to assistive tech.
- Seeded real current status in the data: LS95 = done, RB100 = current; all Core courses =
  upcoming (both branches show "Not started").
- Verified via the running Jekyll dev server: Prep renders LS95 done + RB100
  current-with-tag; both Core branches derive "Not started" with 8 and 6 courses; a
  temporary demo state (3 backend done + 1 current) correctly produced "In progress ·
  3/8" with teal checks, the current ring+tag, and hollow upcoming markers — then reverted
  to the truthful all-upcoming state before committing.
- Committed as `feat: add per-course progress status to the Journey roadmap` (`0e28b62`;
  `_data/curriculum.yml` + `journey.html` + `main.css`) on branch
  `claude/homepage-preview-cards-3ba03c`, fast-forwarded onto `origin/main` to trigger the
  GitHub Actions Pages deploy. `gh` CLI was unavailable, so no PR was opened.

**Next.**
- Confirm the deploy succeeded (repo Actions tab) and the live Journey page reflects the
  new per-course markers and branch chips.
- As courses are actually completed, update `_data/curriculum.yml` status fields (one-word
  edits) — no template changes needed.

**Open decisions.**
- Design decision confirmed with Lionel: ship the data-driven per-course + derived-branch
  approach, and extend the same treatment to Prep Work (not just Core).

---

## 2026-08-15 — Journey page focused on the roadmap

**Done this session.**
- Reworked `journey.html` to make the roadmap the main event. Removed the duplicate
  philosophy intro: the page previously had two competing framing sections (hero "Building
  a Foundation" + paragraph, then a second "Why I'm choosing mastery over speed" sec-head +
  paragraph) that repeated the same point and buried the roadmap below the fold. Deleted
  the second section entirely.
- Hero is now one tight block: eyebrow "The journey", h1 "Mastery over speed" (with "over
  speed" as the italic accent em), and a single 3-sentence lede fused from Lionel's own
  phrasing, ending by handing the reader into the roadmap ("the road from my first Ruby
  program, through Core, to Capstone").
- Made the roadmap the visual main event: added a "The roadmap" eyebrow label and wrapped
  the `.track` timeline in a new `.roadmap` surface panel (`var(--surface)` background,
  1px hairline border, 16px radius, `clamp()` padding, soft shadow) so it reads as a
  distinct board rather than loose text under prose.
- Emphasized the current stage: `.stage.now .st-label` is now a filled accent pill (accent
  bg, accent-ink text, 999px radius); the "now" timeline marker (`::before`) gets a soft
  accent ring via `box-shadow` + `color-mix`. Bumped `.stage h3` size and stage spacing.
- CSS added to `assets/css/main.css` in the journey-track section (`.roadmap-label`,
  `.roadmap`, `.roadmap .stage` overrides).
- Verified via the running Jekyll dev server: h1 renders "Mastery over speed" with the em
  on "over speed"; the old second sec-head is confirmed gone; roadmap panel has the
  surface bg / 16px radius / hairline border; the "Now" label renders as an accent pill.
  Core Curriculum Ruby/JS branches still lay out side by side at desktop (399px each
  within the 952px panel) and collapse to a single column at mobile (375px) with no
  horizontal overflow; panel padding clamps to 24px on mobile.
- Committed as two commits on `claude/homepage-preview-cards-3ba03c`: "feat: focus the
  Journey page on the roadmap" (`3381c14`, `journey.html` + `main.css`) and "chore: log
  homepage doorway-hub session" (`5a7f862`, `docs/PROGRESS.md`). Fast-forwarded
  `origin/main` (`73e2d41` → `5a7f862`) to trigger the GitHub Actions Pages deploy. `gh`
  CLI was unavailable, so no PR was opened; the fast-forward rewrote nothing.

**Next.**
- Confirm the deploy succeeded (repo Actions tab) and the live Journey page at
  lionelkanyowa.com/journey/ reflects the merged hero and roadmap panel.

---

## 2026-08-15 — Homepage reworked into a doorway hub

**Done this session.**
- Reworked the homepage (`index.html`) away from reproducing the Journey, Writing, and
  Videos pages inline (visitors had effectively seen the whole site on first scroll) into
  a hub of doorway cards.
- New structure: (1) Hero — thesis, portrait, single primary "Follow the journey →" CTA;
  the mini-log was removed from the hero aside. (2) Featured Study Log section ("The
  running log") showing the latest 2 entries as richer cards with date/title/excerpt —
  kept deliberately as the one piece of live, return-worthy content (Lionel asked to keep
  the study log on home). (3) "Explore" grid of doorway cards — Journey, Projects, Videos,
  About — each just a mono index, title, one-line teaser, and arrow routing to the full
  page.
- Added a conditional Writing door that renders only when `_data/articles.yml` has
  entries (currently `[]`, so hidden). Keeps `/writing/` from being orphaned once the
  first Medium article is published, with no code change needed then.
- Removed the full inline Journey course list, Writing list, and inline video players
  from the homepage.
- CSS (`assets/css/main.css`): added `.log-feature`/`.log-card` and `.doors`/`.door` card
  styles using existing design tokens; doorway grid is 4-across on desktop, collapsing to
  2×2 (≤900px) then 1-col (≤520px).
- Verified via the running Jekyll dev server: 2 study-log cards and 4 doorway cards render
  with correct titles; Writing door correctly hidden while `articles.yml` is empty; no
  Liquid/build errors; doorway grid confirmed as a clean 4-across strip at 1280px.
- Committed on branch `claude/homepage-preview-cards-3ba03c` (commit `73e2d41`) and
  fast-forwarded `origin/main` (`0a32e12` → `73e2d41`) to trigger the GitHub Actions Pages
  deploy. `gh` CLI was unavailable, so no PR was opened; the fast-forward rewrote nothing.

**Next.**
- Confirm the deploy succeeded (repo Actions tab) and the live site at
  lionelkanyowa.com reflects the new homepage.
- When the first Medium article is added to `_data/articles.yml`, the Writing door will
  appear automatically — sanity-check the 5-card grid layout at that point (5 cards in the
  4-col grid will leave one on a second row).

---

## 2026-08-11 — Authentic headlines, hero portrait, accurate job title

**Shipped this session.**
- **Headlines rewritten** to a plainer, first-person voice (moving away from polished/
  agency-tagline phrasing, and away from generic template labels): home hero
  ("I'm learning to build software, in the open."), Projects ("What I'm building."),
  Study log ("Thoughts from each study session."), Videos ("Documenting the journey on
  YouTube."), and the mastery section ("Why I'm choosing mastery over speed") on both home
  and Journey. Matching home section headings updated too.
- **Hero portrait added.** Replaced the home hero's terminal-style study-log card with a
  circular portrait (`assets/images/lionel-avatar.jpg` — a face-centered 640×640 crop of
  `lionel-about.jpg`, made with ImageMagick) plus a compact latest-2 study-log card. Gives
  social visitors a familiar face above the fold. `.hero-aside` / `.hero-avatar` /
  `.mini-log` styles added; dead `.log-card`/`.hlog` CSS removed.
- **Removed the duplicate** full study-log section from the home page (the hero card now
  carries the latest-log teaser; the full archive lives on `/studylog/`).
- **Job title corrected** site-wide to **Network and Systems Administrator** (hero lede,
  home + About meta descriptions, `_config.yml`, Videos copy). Saved as a standing rule in
  memory so it isn't shortened again.
- Verified in dark, light, and mobile; deployed to `main`.

**Next.** Substance still the priority — a first real Projects entry, and study-log cadence.

---

## 2026-08-09 — Study log: LinkedIn sharing + optional per-post images

**Shipped this session.**
- **Share on LinkedIn** — each study-log post now has a footer button linking to
  `linkedin.com/sharing/share-offsite/?url=<post URL>`. No content duplication: LinkedIn
  scrapes the post's own OpenGraph tags to build the preview card. Restrained outlined
  mono button (teal on hover), styled via existing tokens in `assets/css/main.css`
  (`.post-share` / `.share-linkedin`). Markup in `_layouts/post.html`.
- **Optional per-post image** — set `image:` (and `image_alt:`) in a post's front matter to
  render a framed lead image AND make it that post's LinkedIn card (seo-tag reads
  `page.image`). Omit it → text-only post with the site default `og-image.png` card. The
  layout guards against the inherited default so it never renders as a lead image.
  New styles: `.post-figure` / `figcaption`.
- **`future: true`** added to `_config.yml` so same-day entries timestamped ahead of build
  time still publish (Jekyll skips future-dated posts by default). Preview launch config
  added at `.claude/launch.json` (uses `--future`).
- **New entry:** `_posts/2026-08-09-switching-to-ruby.md` — the Python→Ruby switch, Intro to
  Ruby ch. 1, the simplified Apple Notes / active-recall note system. Lead image at
  `assets/images/studylog/2026-08-09-switching-to-ruby.jpg` (Ruby-code close-up, 1500×1000).
- Verified end-to-end via local build: og:image resolves to the post image when set and
  falls back otherwise; share URL is correctly encoded; visually confirmed lead image +
  footer button in the browser.

**Notes for next time.**
- LinkedIn caches cards on first fetch — use the Post Inspector to refresh after image
  changes. Cards only resolve against the live prod URL, not localhost.
- To add an image to any future post: drop a ~1200×630+ landscape file in
  `assets/images/studylog/` and set `image:` + `image_alt:` in the front matter.
- Deploying this session (Lionel will share to LinkedIn manually once live).

---

## 2026-08-09 — LIVE. Quick wins + Journey corrections shipped

**The site is live at https://lionelkanyowa.com** — Jekyll 4 built and deployed by
`.github/workflows/jekyll.yml` (GitHub Actions → Pages). Pages source is set to
"GitHub Actions". Every push to `main` auto-deploys (~1 min). Verify runs via the public
API: `.../actions/runs`.

**Shipped this session (post-launch):**
- **Accent color** changed ruby-red → deep **teal** (`--accent` `#0E6E66` / `#45C9BC`),
  decoupled from any language. Docs/tokens updated.
- **Socials** wired from `_config.yml`: GitHub, LinkedIn, X (`layoiscoding`), Instagram
  (`layoiscoding`), YouTube (`lionelkanyowa`), Medium (`lionelkanyowa`), email. Footer
  colophon line removed.
- **Copy:** home hero → "Building understanding before building software."; About
  condensed to Lionel's own words (removed the "How I work" cards + subhead); Journey page
  hero → "Building a Foundation".
- **Writing** hidden from home and pulled from nav until the first Medium article exists
  (re-add the nav item in `_config.yml`; the home/section auto-shows once
  `_data/articles.yml` has entries).
- **First video** added (`_data/videos.yml`: `O0khMFrNBFc`).
- **Quick wins:** LK monogram favicon (`favicon.svg` + 16/32/180 PNGs); 1200×630 social
  card (`assets/images/og-image.png`) wired through seo-tag (config `defaults` +
  `summary_large_image`); styled `404.html`; removed unused `logo.png`/`profile*.jpg` and
  old `favicon.ico`.
- **Journey Core Curriculum split** — Backend·Ruby / Frontend·JavaScript with functional
  red/yellow markers (`--track-ruby` / `--track-js`, used ONLY here). Corrected to reality:
  **Prep Work** (LS95, RB100) is the current stage; it's **one Ruby track**, backend-first
  **then** frontend (sequential, not parallel); full course lists (RB101–RB185 backend,
  LS202–JS235 frontend); assessments intentionally not listed. Synced on home + `/journey/`.
- **Housekeeping:** excluded `CLAUDE.md`/`README.md`/`docs` from the published build.

**Toolchain reminder:** local Ruby is 4.0.6, so the project uses modern Jekyll 4 (not the
`github-pages` gem). Preview with `bundle exec jekyll serve --livereload`.

**Process note:** a mid-session edit collision overwrote a manual `index.html` change once.
Lesson applied: always **re-read a file immediately before editing** it, and avoid both
parties live-editing the same file. Git history is now the safety net.

**Open / next — highest-leverage first:**
- **Substance** (the real gap): a first genuine **Projects** entry (home-lab write-up with
  a diagram, or a small tool with a README), and building a **study-log** cadence. The
  intro post is a starter to keep or replace.
- **Contact + positioning:** consider a contact CTA and resume/LinkedIn prominence
  (deferred from the audit).
- **Logo:** still the "LK" initials mark — revisit if a bespoke mark is wanted; favicon
  will need regenerating if it changes.
- When the first article publishes: add it to `_data/articles.yml` and re-add "Writing" to
  `_config.yml` navigation.

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
