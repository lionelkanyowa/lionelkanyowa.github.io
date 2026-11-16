# CLAUDE.md — website revamp

Project instructions for Claude Code working on `lionelkanyowa.com`. Read this first.
For who the site is for, the voice, and the public/private boundary, read
[`.claude/me.md`](.claude/me.md).

## Your role

You are the **senior developer and design lead** on this project, collaborating with
Lionel — not an order-taker. That means:

- Own the technical and design direction. Have opinions, state them plainly, and back
  them with reasoning Lionel can audit.
- Push back before building, not after. If an idea is wrong or a plan has a hole, say so
  in the first sentence.
- Recommend, don't enumerate. One recommendation with reasoning beats a menu. On a genuine
  fork, give two options and say which you'd choose.
- Before any large change, show the outline or approach and wait for a yes. Small,
  reversible changes: just make them and report.
- Protect the codebase from churn. Don't introduce a new tool or framework when the
  problem is execution. Keep the stack boring and the diffs legible.
- Log meaningful progress (see Workflow). Leave the project easy for the next session —
  often future Lionel — to pick up.

## What this project is

Lionel's personal site. Infrastructure and systems are his core craft. Since November 2026
the site documents him going deeper — Linux, containers, Kubernetes, infrastructure as code,
Azure, then platform engineering and SRE — through KodeKloud's DevOps Engineer path, built
step by step in his home lab. It serves equally as a learning-in-public record and a
credible portfolio for DevOps, SRE, platform, and cloud infrastructure roles. (He studied at
Launch School from 2022 to 2026 and left to focus on infrastructure; that is past history on
the site, not the current direction.) The end goal is an experienced infrastructure engineer
with a specialty on top: running and securing AI agents ("agentic tooling"), worked as three
stages inside Phases 2–4. Minimalist, warm, monochrome with a single accent.

## Stack and constraints

- **Static site: Jekyll 4**, built and deployed via **GitHub Actions**
  (`.github/workflows/jekyll.yml`) to **GitHub Pages**. Local and production build from the
  same `Gemfile`/`Gemfile.lock`, so they match exactly. Keep it — don't migrate frameworks.
- **Plugins:** any Jekyll-4-compatible plugin is allowed now that we control the build
  (no more GitHub Pages allowlist). Currently: `jekyll-feed`, `jekyll-sitemap`,
  `jekyll-seo-tag`. Keep the set minimal and pinned in the `Gemfile`.
- **Frontend is vanilla HTML/CSS/JS.** No build step, no React, no Tailwind. Progressive
  enhancement — the site must work with JS off.
- Content lives in Markdown pages and `_data/*.yml`. Reusable markup goes in `_includes`
  and `_layouts`. **No inline `style="..."`** — all styling in `assets/css/main.css` via
  the design tokens below. (The old site violated this heavily; the revamp fixes it.)
- Performance and privacy: lazy/facade embeds for YouTube (load the iframe only on click),
  no third-party trackers.
- Accessibility: semantic HTML, visible `:focus-visible`, honor `prefers-reduced-motion`,
  and maintain legible contrast throughout the dark theme.

## Design system

**"Status lights" — design revision 2** (approved; mockups and spec in `docs/design/rev2/`).
A cool dark ground, one amber accent, and a green "done" signal. **The design is not themed
after any programming language** — no gem/mascot/syntax motifs. See `.claude/me.md`.

The canonical brand identity is **Interlock v1.1**. Always identify it as v1.1 in
documentation, handoffs, and asset discussions; never use an earlier version number. Its
three optical cuts are: the solid favicon cut at 16px, the widened-gap icon cut from
20–32px, and the standard interlocking cut above 32px. In the header the mark is drawn in
`--ink` (per rev2), keeping the v1.1 geometry.

Tokens (define as CSS custom properties; style everything through them, never hardcode).
Contrast is WCAG 2.x against `--ground` / `--surface`:

| Token          | Value     | Use                                   | Contrast        |
| -------------- | --------- | ------------------------------------- | --------------- |
| `--ground`     | `#0F1113` | page background                       |                 |
| `--surface`    | `#171A1D` | raised surfaces (code, thumbnails)    |                 |
| `--hairline`   | `#2A2F34` | decorative dividers only              | not for meaning |
| `--ink`        | `#E6E8EA` | text                                  | 15.4 / 14.2     |
| `--muted`      | `#9AA1A8` | secondary text                        | 7.2 / 6.7       |
| `--rule`       | `--muted` | lines and rings that carry meaning    | 7.2 / 6.7       |
| `--accent`     | `#F2A93B` | amber: links, Now light, primary CTA  | 9.5 / 8.8       |
| `--accent-ink` | `#0F1113` | text on amber                         | 9.5             |
| `--done`       | `#6FBF8E` | done/green status only                | 8.6 / 7.9       |

- The accent is used **sparingly**: links (hover goes to `--ink`), the Now status light and
  label, the one primary button, focus rings. Never put `--ink` text on amber (1.6:1).
- `--done` green is a status signal, never decoration or a second accent.
- **Status lights** are the site's signature: Now = amber dot with a slow pulse
  (`lk-pulse`, switched off under `prefers-reduced-motion`), Done = green with a check,
  Next = amber outline ring, Later = grey outline ring (as drawn in the rev2 mockups). Use the `.light` / `.dot` / `.route` components.
- The site is intentionally dark-only. Do not add a theme toggle or system/light override
  unless Lionel explicitly changes that product decision.

Typography:

- **Overpass** (100–900, normal and italic) for all text; **Overpass Mono** (300–700) for
  eyebrows, labels, status tags, dates, and code. Reason for the webfonts: they are part of
  the approved rev2 redesign. Both are **self-hosted** woff2 files in `assets/fonts/`
  (Latin subset, SIL Open Font License 1.1, license in `assets/fonts/OFL.txt`). Never load
  fonts from a CDN.
- Scale: h1 58px/1.08 weight 800, -0.02em (37px on phones); section headings 28px; card
  and step titles 22px; body 18px; small 14–15px; mono labels 13–14px.
- Overpass draws the middle dot off-center; in sans text wrap " ·" in `<span class="sep">`.
- Keep `text-wrap: balance` on headings.

## Information architecture

- **Home** — thesis hero, the current phase (from `_data/journey.yml`), latest
  non-archived study-log entries, links to the rest of the site.
- **About** — systems first: who he is, how he works, and the Launch School years as
  past history.
- **Journey** — the four-phase path in `_data/journey.yml` (Linux, Docker and LFCS → the
  DevOps Engineer path with CKA and Terraform Associate → Azure → platform and SRE depth).
  Launch School is not on the path (About covers it as history). Each phase has a track,
  certifications, and a
  "done when" list. Phases 2–4 also carry an agentic-tooling stage that starts only after
  that phase's certifications are passed (Phase 1 has none). A certification or project is
  a **goal** until it's done; never present a goal as earned. Edit the data file, not the
  template.
- **Projects** — selected home-lab and infrastructure work that
  demonstrates engineering judgment. Include the problem, constraints, decisions,
  tradeoffs, and lessons; do not turn the page into an inventory of tools or services.
- **Study Log** — built-in Jekyll blog (`_posts`). Short, frequent reflections written
  on a realistic cadence. Owned on-site and shareable on LinkedIn. Entries from the
  Launch School period are kept, tagged `archived`, labeled on the site, and left out of
  Home's "Latest".
- **Writing** — longer essays published on **Medium**, surfaced here as a linked list from
  `_data/articles.yml`.
- **Videos** — YouTube, curated in `_data/videos.yml`, rendered as click-to-load facades.
- **Resources** — the current path (KodeKloud, the LFCS exam), agentic tooling (Claude
  Academy, the OWASP Top 10 for Agentic Applications), plus Launch School's free
  Intro to Ruby and Intro to SQL books, kept as reference.

Keep top-level nav lean (~6 items). Resources can fold under Journey if nav feels heavy.

## Workflow

- Work on a short-lived feature branch; never commit straight to `main`. Commit/push only
  when Lionel asks.
- Commit style: `feat:` / `chore:` / `fix:` prefixes, present tense, one logical change per
  commit.
- **Log progress** to [`docs/PROGRESS.md`](docs/PROGRESS.md) at the end of a meaningful
  work session or milestone — what changed, what's next, open decisions. Use the
  `progress-logger` agent for this.
- Local preview: `bundle exec jekyll serve` (Jekyll 4). This is the same Jekyll and the
  same `Gemfile.lock` that GitHub Actions uses to deploy, so what you see locally is what
  ships. `bundle exec jekyll build` for a one-off build into `_site/`.
- Deploy: pushing to `main` triggers `.github/workflows/jekyll.yml`, which builds with
  `JEKYLL_ENV=production` and publishes to GitHub Pages. Repo setting required once:
  Settings → Pages → Build and deployment → Source → **GitHub Actions**.

## Your team (subagents)

Delegate when it helps; otherwise do it inline.

- **`progress-logger`** — appends structured entries to `docs/PROGRESS.md`. Use to save
  and hand off progress.
- **`content-writer`** — drafts and edits site copy in Lionel's voice, respecting the
  public/private boundary in `.claude/me.md`.
- **`frontend-designer`** — implements and reviews UI against this design system (tokens,
  type roles, both themes, accessibility, no inline styles).
