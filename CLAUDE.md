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
toward documenting his software-engineering journey through Launch School. Minimalist,
elegant, monochrome with a single accent.

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
  legible contrast in both themes.

## Design system

Monochrome ground with one accent. **The design is not themed after any programming
language** — no gem/mascot/syntax motifs. See `.claude/me.md`.

Tokens (define as CSS custom properties; style everything through them, never hardcode):

| Token          | Light     | Dark      |
| -------------- | --------- | --------- |
| `--ground`     | `#F7F6F3` | `#14110F` |
| `--surface`    | `#FFFFFF` | `#1C1815` |
| `--surface-2`  | `#F1EFEA` | `#221D19` |
| `--ink`        | `#1A1613` | `#F3EFE9` |
| `--ink-soft`   | `#423C37` | `#D8D2CA` |
| `--muted`      | `#6C6560` | `#A29A90` |
| `--hairline`   | `#E5E1DB` | `#2C2621` |
| `--accent`     | `#0E6E66` | `#45C9BC` |
| `--accent-ink` | `#FFFFFF` | `#07211E` |

- Neutrals are warm (slight red bias) so they read as chosen, not default grey.
- The accent is a deep teal used **sparingly** — links on hover, the current-stage
  marker, one primary button, small labels. It is a deliberate complementary color,
  chosen to be independent of any programming language (not "Ruby red").
- **Two functional track colors** (`--track-ruby` red, `--track-js` yellow) exist for one
  purpose only: labeling the Ruby (backend) vs JavaScript (frontend) split in the Journey's
  Core Curriculum. They are small markers (a tag + a left border), never used elsewhere and
  never as a general accent. Teal remains the site's only real accent.
- **Both themes** via tokens: `@media (prefers-color-scheme: dark)` for OS default, plus
  `:root[data-theme="dark"]` / `[data-theme="light"]` overrides for the manual toggle.

Typography (three roles):

- **Display / headings** — a serif with character (target: Fraunces or Spectral). Elegance
  and craft.
- **Body / UI** — a clean humanist sans (system stack is acceptable; or Inter/IBM Plex Sans).
- **Labels, metadata, code** — a monospace (target: JetBrains Mono or IBM Plex Mono). Reads
  as engineering precision, not as any one language.

Load webfonts self-hosted or via `<link>` in `_layouts/default.html`; keep the set small
(a couple weights each). Set a type scale and stay on it; `text-wrap: balance` on headings.

## Information architecture

- **Home** — thesis hero, where he's building toward, latest study-log / writing / videos.
- **About** — the systems-to-software story; who he is and how he works.
- **Journey** — replaces the old DevOps roadmap. Launch School path as mastery-based
  stages (current stage marked). Not a certificate checklist.
- **Projects** — real work, reframed beyond infrastructure.
- **Study Log** — built-in Jekyll blog (`_posts`). Short, frequent reflections written
  after study sessions. Owned on-site.
- **Writing** — longer essays published on **Medium**, surfaced here as a linked list from
  `_data/articles.yml`.
- **Videos** — YouTube, curated in `_data/videos.yml`, rendered as click-to-load facades.
- **Resources** — kept; refocused on software-engineering / CS fundamentals.

Keep top-level nav lean (~6 items). Resources can fold under Journey if nav feels heavy.

## Workflow

- Work on a feature branch (currently `claude/website-revamp-ruby-695cb4`); never commit
  straight to `main`. Commit/push only when Lionel asks.
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
