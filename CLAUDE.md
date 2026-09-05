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

A complete revamp of Lionel's personal site: away from the old DevOps-engineer framing,
toward documenting his software-engineering journey through Launch School while serving
equally as a credible portfolio for future software-engineering opportunities. Minimalist,
warm, monochrome with a single accent.

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

Monochrome ground with one accent. **The design is not themed after any programming
language** — no gem/mascot/syntax motifs. See `.claude/me.md`.

The canonical brand identity is **Interlock v1.1**. Always identify it as v1.1 in
documentation, handoffs, and asset discussions; never use an earlier version number. Its
three optical cuts are: the solid favicon cut at 16px, the widened-gap icon cut from
20–32px, and the standard interlocking cut above 32px.

Tokens (define as CSS custom properties; style everything through them, never hardcode):

| Token           | Dark      |
| --------------- | --------- |
| `--ground`      | `#14110F` |
| `--surface`     | `#1C1815` |
| `--surface-2`   | `#221D19` |
| `--ink`         | `#F3EFE9` |
| `--ink-soft`    | `#D8D2CA` |
| `--muted`       | `#A29A90` |
| `--hairline`    | `#2C2621` |
| `--accent`      | `#9A4316` |
| `--accent-text` | `#D9824B` |
| `--accent-ink`  | `#FFFFFF` |

- Neutrals are warm (slight red bias) so they read as chosen, not default grey.
- The accent is a deep burnt orange used **sparingly** — links on hover, the current-stage
  marker, one primary button, and small labels. It is warm and personal without being tied
  to a programming language.
- **Two functional track colors** (`--track-ruby` red, `--track-js` yellow) exist for one
  purpose only: labeling the Ruby (backend) vs JavaScript (frontend) split in the Journey's
  Core Curriculum. They are small markers (a tag + a left border), never used elsewhere and
  never as a general accent. Burnt orange remains the site's only real accent.
- The site is intentionally dark-only. Do not add a theme toggle or system/light override
  unless Lionel explicitly changes that product decision.

Typography is intentionally ordinary and human:

- Use the native humanist sans stack for display, body, interface text, labels, and
  metadata. Hierarchy comes from size, weight, spacing, and content—not a decorative
  type pairing.
- Reserve monospace for code, filenames, and literal course codes. Do not use it as the
  site's visual identity.
- Avoid the fashionable serif-heading + monospace-label portfolio treatment. It made the
  site feel generated rather than personal.
- Do not load webfonts unless there is a specific, reviewed reason. Set a restrained type
  scale and keep `text-wrap: balance` on headings.

## Information architecture

- **Home** — thesis hero, where he's building toward, latest study-log / writing / videos.
- **About** — the systems-to-software story; who he is and how he works.
- **Journey** — replaces the old DevOps roadmap. Launch School path as mastery-based
  stages (current stage marked). Not a certificate checklist.
- **Projects** — selected home-lab, infrastructure, and software-engineering work that
  demonstrates engineering judgment. Include the problem, constraints, decisions,
  tradeoffs, and lessons; do not turn the page into an inventory of tools or services.
- **Study Log** — built-in Jekyll blog (`_posts`). Short, frequent reflections written
  on a realistic weekly cadence. Owned on-site and shareable on LinkedIn.
- **Writing** — longer essays published on **Medium**, surfaced here as a linked list from
  `_data/articles.yml`.
- **Videos** — YouTube, curated in `_data/videos.yml`, rendered as click-to-load facades.
- **Resources** — kept; refocused on software-engineering / CS fundamentals.

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
