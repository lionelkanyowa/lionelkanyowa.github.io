# AGENTS.md

This repository's canonical project instructions live in [`CLAUDE.md`](CLAUDE.md).
Read that file completely before making changes. Also read [`.claude/me.md`](.claude/me.md)
before editing public copy; it defines Lionel's voice, audience, and privacy boundary.

These instructions apply to every coding agent, regardless of vendor or tool:

- Preserve the existing Jekyll 4 and vanilla HTML/CSS/JavaScript stack.
- Keep the visual design minimal, warm, and personal. Reuse the design tokens in
  `assets/css/main.css`; do not add framework defaults, decorative gradients, stock
  illustrations, generic AI copy, or unnecessary animation.
- Do not invent biographical details, project outcomes, metrics, or quotes.
- Treat `_data/*.yml` and Markdown as the normal content-management interface. Avoid
  hardcoding content into layouts when a data file already owns it.
- Work on a feature branch. Do not commit, push, merge, or deploy unless Lionel asks.
- Run `bundle exec jekyll build` before handing off code changes when the local Ruby
  toolchain is available. Report clearly when it is not.
- Record meaningful milestones in `docs/PROGRESS.md` and leave the next action explicit.

For routine ownership tasks, follow [`docs/RUNBOOK.md`](docs/RUNBOOK.md).
