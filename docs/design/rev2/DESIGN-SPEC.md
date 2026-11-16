# lionelkanyowa.com redesign: Status lights (Revision 2)

These three HTML files are static mockups of the approved look. Copy the LAYOUT and LOOK. The COPY in them is out of date (Launch School era); use the new copy from the Stage 2 prompt instead.

Files
- home-1440.html: Home, desktop (content max-width 1208px, 64px side padding)
- home-390.html: Home, phone
- journey-1440.html: Journey, desktop

Tokens
- Background #0F1113, raised surface #171A1D, hairlines/borders #2A2F34
- Text #E6E8EA, secondary text #9AA1A8
- Accent (amber) #F2A93B; links use it, hover goes to #E6E8EA
- Done / green status #6FBF8E
- Type: Overpass (100-900, normal and italic) for all text, Overpass Mono (300-700) for eyebrows, labels and status tags. Self-host the woff2 files; the font URLs in the mockups (/_blob/...) only work inside the design tool.
- Sizes: h1 58px/1.08 weight 800, letter-spacing -0.02em; section headings 28px; card titles 22px; body 18px; small 14-15px; mono labels 13-14px
- Header 72px tall; nav links 15px weight 500, 44px min touch height
- Status lights: Now = amber dot with a slow pulse (lk-pulse keyframes, off under prefers-reduced-motion), Done = green, Next/Later = grey outline
- Logo mark: the inline L/K SVG in the header

Notes
- [CONFIRM ...] lines in the mockups are review markers, not site copy. Don't ship them.
- Dark-only site; no theme toggle.
