# Website runbook

This is the practical guide for maintaining `lionelkanyowa.com` without an assistant.
The site is a Jekyll 4 static site hosted on GitHub Pages and deployed by GitHub Actions.

## Quick reference

| Task | File or command |
| --- | --- |
| Preview locally | `bundle exec jekyll serve --livereload` |
| Production-style check | `JEKYLL_ENV=production bundle exec jekyll build` |
| Site settings and navigation | `_config.yml` |
| Study-log posts | `_posts/YYYY-MM-DD-title.md` |
| Journey/course status | `_data/curriculum.yml` |
| Videos | `_data/videos.yml` |
| Medium articles | `_data/articles.yml` |
| Page copy | Root `.html` and `.md` files |
| Site styles | `assets/css/main.css` |
| Header logo | `_includes/header.html` and `assets/css/main.css` |
| Favicons | `favicon.svg` and `assets/images/favicons/` |
| Default social card | `assets/images/og-image.svg` and `.png` |
| Deployment workflow | `.github/workflows/jekyll.yml` |
| Domain | `CNAME` |

## First-time local setup

The required Ruby version is stored in `.ruby-version`. Install that version with your
Ruby version manager, then install Bundler and the locked dependencies:

```sh
ruby --version
gem install bundler
bundle install
```

Check that `ruby --version` matches `.ruby-version`. Do not regenerate `Gemfile.lock`
just to get around a version mismatch; fix the local Ruby version first.

If `bundle` says "command not found", Bundler is missing from the active Ruby installation
or its executable directory is not on `PATH`. Re-select the project's Ruby version, run
`gem install bundler`, and open a new terminal.

## Safe workflow for any change

Start from an up-to-date `main`, then make a small branch:

```sh
git switch main
git pull --ff-only
git switch -c codex/short-description
git status
```

Make the edit, preview it, and check the generated site:

```sh
bundle exec jekyll serve --livereload
JEKYLL_ENV=production bundle exec jekyll build
git diff --check
git diff
```

The preview is normally available at `http://127.0.0.1:4000`. Stop it with `Ctrl-C`.
Jekyll writes the generated site to `_site/`; never edit that directory because it will
be replaced on the next build.

When the change is ready:

```sh
git add path/to/changed-file
git commit -m "chore: describe the content change"
git push -u origin your-branch-name
```

Open a pull request, review the rendered change, and merge it into `main`. A push to
`main` triggers the Pages workflow. In GitHub, open **Actions**, choose **Build and deploy
Jekyll site**, and confirm both the build and deploy jobs are green. Then check the live
page in a private window.

## Publish a study-log entry

Aim for one useful entry each week. It does not need to summarize every study session;
capture the most important thing that changed in your understanding that week.

Create `_posts/YYYY-MM-DD-short-title.md`:

```markdown
---
layout: post
title: "A clear, specific title"
date: 2026-09-04 19:30:00 -0400
description: "One sentence used in previews and search results."
---

Write the entry here.
```

Use Michigan's current UTC offset in the date (`-0400` during daylight saving time,
`-0500` otherwise). The filename date and front-matter date should agree. Scheduled posts
remain unpublished until their timestamp. Add `--future` to the local preview command only
when you intentionally need to review one early.

For an optional lead and social image, place a landscape image in
`assets/images/studylog/` and add:

```yaml
image: /assets/images/studylog/example.jpg
image_alt: "A literal description of the image"
```

Before publishing, check the title, description, date, image alt text, code blocks,
mobile layout, previous/next links, and the LinkedIn share URL.

## Update Journey progress

Edit `_data/curriculum.yml`. Each course has one status:

- `done` — completed
- `current` — in progress
- `upcoming` — not started

Keep only the truthful current course marked `current`. The Journey page calculates
branch progress from this file, so do not edit progress labels in `journey.html`.

## Add a YouTube video

Add the newest item at the top of `_data/videos.yml`:

```yaml
- id: VIDEO_ID
  title: A human-written video title
  meta: September 2026 · short context
  duration: "10:42"
```

The ID is the value after `v=` in a standard YouTube URL. `duration` is optional. Preview
the Videos page and click the thumbnail once to verify the privacy-friendly facade loads
the correct video.

## Add a Medium article

Follow the commented example in `_data/articles.yml` and add the newest article first.
When the first article is added, also add Writing to the `navigation` list in
`_config.yml`. The Writing doorway on the home page appears automatically once the data
file is non-empty.

Medium is the permanent home for longer essays. The website should surface and link to
them, not duplicate their full text. Study-log entries remain owned by this site and can
be shared to LinkedIn from each post.

## Add or update a project

Projects may come from any of three areas: the home lab, infrastructure work, or software
engineering. Curate them by what they reveal about how you think, not by category.

A useful project entry should explain:

1. The problem and why it mattered.
2. The constraints you worked within.
3. The approach you chose and the alternatives you rejected.
4. The implementation, with diagrams or code where they clarify the work.
5. The result, limitations, and what you would change next time.

Do not publish employer-specific systems, internal details, private addresses, secrets, or
an inventory of home-lab services. One honest case study is stronger than several cards
that only list technologies.

## Update a page or navigation

Top-level page copy lives in files such as `about.html`, `projects.md`, and `resources.md`.
Navigation lives in `_config.yml`. Restart the Jekyll preview after changing `_config.yml`;
Jekyll does not reliably reload configuration changes while running.

Keep the public voice direct, specific, and first-person. Do not publish private employer
details, family or health information, salary, private religious study, or facts that
have not been verified. The full boundary is documented in `.claude/me.md`.

## Images

- Use descriptive lowercase filenames with hyphens.
- Prefer compressed JPEG or WebP for photographs and SVG for simple vector artwork.
- Give every meaningful image accurate alt text; use empty alt text only for decoration.
- Avoid uploading the full-resolution camera original when a web-sized export will do.
- For social cards, use a landscape image at least 1200 × 630 pixels.

## Interlock v1.1 brand mark, favicons, and social card

Interlock v1.1 is the canonical identity-system version. Always call it v1.1 in notes,
asset names, and handoffs. The small-size mark is drawn directly in
`_includes/header.html`; its size and color are controlled by `.brand-mark` in
`assets/css/main.css`. Keep the adjacent name as real text. Use the solid favicon cut at
16px, the widened-gap icon cut from 20–32px, and the standard interlocking cut above 32px.
Do not enlarge the solid favicon cut into visible logo sizes.

On the dark `#14110F` site ground, an exposed mark must use the lighter orange `#D9824B`.
Reserve `#9A4316` for filled surfaces such as buttons and the favicon background. The
favicon uses an off-white mark so it stays legible against that field.

After editing `favicon.svg`, regenerate its PNG fallbacks from the repository root:

```sh
rsvg-convert --width 16 --height 16 favicon.svg --output assets/images/favicons/favicon-16x16.png
rsvg-convert --width 32 --height 32 favicon.svg --output assets/images/favicons/favicon-32x32.png
```

The Apple touch icon has its own SVG source because it uses the standard cut at a larger
scale. Regenerate its PNG separately:

```sh
rsvg-convert --width 180 --height 180 assets/images/favicons/apple-touch-icon.svg --output assets/images/favicons/apple-touch-icon.png
```

The editable default LinkedIn/Open Graph artwork is `assets/images/og-image.svg`. After
changing it, regenerate the published PNG:

```sh
rsvg-convert --width 1200 --height 630 assets/images/og-image.svg --output assets/images/og-image.png
```

Do not replace the header with one of the exported lockup SVGs. Those files contain live
system-font text and can clip or change appearance across computers. Preserve the simple
path-based mark and HTML name instead.

## Styling changes

Use the existing custom properties in `assets/css/main.css`. Check the dark theme,
keyboard focus, reduced-motion behavior, and at least one narrow mobile viewport. Do not
add inline styles, a JavaScript framework, a CSS framework, tracking scripts, or an eager
YouTube iframe.

## Roll back a bad deployment

Prefer a normal revert commit so history stays intact:

```sh
git switch main
git pull --ff-only
git revert BAD_COMMIT_SHA
git push origin main
```

This starts a new deployment containing the revert. Do not use `git reset --hard` or
force-push `main`. If only the deploy failed, use GitHub Actions to re-run the failed jobs
before changing code.

## Troubleshooting

### The build fails locally

Read the first Jekyll error, not only the final stack trace. Common causes are malformed
YAML front matter, invalid indentation in `_data/*.yml`, a missing `{% endif %}`, or a
Ruby/Bundler version mismatch. Run `bundle exec jekyll build --trace` for more detail.

### GitHub Actions fails

Open the failed run and inspect the first red step. If the local production build also
fails, fix the content or code. If only Actions fails, compare the Ruby version in
`.ruby-version`, the locked platforms in `Gemfile.lock`, and the workflow log.

### The live site does not change

Confirm the commit reached `main`, the deploy job completed, and the browser is not showing
a cached copy. Hard-refresh or use a private window. DNS changes can take longer, but
ordinary content deployments should appear shortly after the workflow finishes.

### A custom-domain or HTTPS problem appears

Do not casually edit `CNAME` or DNS. Confirm `CNAME` still contains
`lionelkanyowa.com`, then check **GitHub repository → Settings → Pages** for the custom
domain and HTTPS status. Compare DNS records with GitHub Pages documentation before
changing them.

## Monthly housekeeping

- Maintain the weekly study-log cadence when there is something honest to say. Stale
  content is a larger credibility risk than small visual imperfections.
- Check the home page, Journey, latest study-log entry, and one video on desktop and mobile.
- Check GitHub Actions for failed deployments and Dependabot/security alerts.
- Update Journey course status and external links.
- Review `docs/PROGRESS.md` and remove or resolve obsolete open decisions.
- Run a production build before dependency updates and again afterward.

Dependency upgrades should be isolated in their own branch and commit. Read release notes,
update only what you intend, build locally, and inspect `Gemfile.lock` before merging.
