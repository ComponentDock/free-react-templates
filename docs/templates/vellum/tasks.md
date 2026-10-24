# Tasks: Vellum (Readit)

## Overview

Recreation of ColorLib **Readit** (`https://colorlib.com/wp/template/readit/`, live demo
`https://preview.colorlib.com/theme/readit/`) as **Vellum** — a blog theme shipped as one landing
page: gradient hero over a photograph, nine magazine rows, five-page pagination, four-column dark
footer.

Spec: `openspec/specs/template-vellum/spec.md` (rewritten 2026-10-24; it previously recorded a
ColorLib accordion demo — see `docs/spec-row-mismatch.md`).
Brief with measured tokens, DOM skeleton and the delta table: `docs/templates/vellum/design-notes.md`.

Row note: `TEMPLATES.md` line **282** (`## Blog (60)`) links `readit` and `vellum`; the spec now
records the same slug, so row and spec agree.

## Section order & architecture

| # | file | band | status |
| --- | --- | --- | --- |
| 0 | `src/components/Navbar.tsx` | "Vellum." wordmark, 4 links, mobile toggle, white ground past 80px | [x] |
| 1 | `src/components/Hero.tsx` | eyebrow, h1, blurb, 45° `#f200ff→#ffba42` wash at .8, scroll cue | [x] |
| 2 | `src/components/BlogList.tsx` | nine rows: image + category + 40px headline + share links + meta | [x] |
| 3 | `src/components/Pagination.tsx` | `‹ 1 2 3 4 5 ›`, page 1 current | [x] |
| 4 | `src/components/Footer.tsx` | 4 columns (wordmark/blurb/socials · latest News · Information · Have a Questions?) + credit | [x] |
| — | `src/components/SocialIcons.tsx` | three brand marks, optional hover reveal | [x] |
| — | `src/data.ts` | copy, nine entries, nav, footer content | [x] |
| — | `src/index.css` | `@theme`: gold `#ffd369`, flare `#f200ff`, ember `#ffba42`, Poppins | [x] |

## Tasks

- [x] Spec rewritten to the measured `readit` reference; Requirements aligned to the app
- [x] Brief (`design-notes.md`) rewritten with measured tokens, DOM skeleton and the delta table
- [x] Gradient hero (`45deg`, `#f200ff → #ffba42`, `opacity .8`) over a placeholder photograph
- [x] Nine magazine rows with category, linked headline, share links and `date | read time` meta
- [x] Five-page pagination with previous/next and a current page
- [x] Four-column footer: wordmark + blurb + socials, latest News ×2, Information ×4, contact rows
- [x] `tel:` / `mailto:` on the footer contact rows (the source ships dead `#`)
- [x] Footer credit to Component Dock
- [x] No source-site name, domain or URL anywhere under `apps/vellum/`
- [ ] **Navbar parity** — transparent, `position: absolute; top: 20px` over the hero, white fixed bar
      with `0 0 10px rgba(0,0,0,.1)` past 80px (currently an opaque `#343a40` bar from the first
      pixel). Also accent the middle letters of the wordmark gold, as the source accents its `it`
- [ ] **Share-chip parity** — 50 × 50 chips, `rgba(0,0,0,.05)`, 4px radius, 20px glyph, gold fill on
      hover (currently bare 20px glyphs)
- [ ] **Pagination parity** — 40px circles with `1px #e6e6e6` and a gold active fill (currently 40px
      squares with no radius)
- [ ] **Footer parity** — ground `#222831` (currently `#3c312e`), 50px social circles
      `rgba(255,255,255,.05)`, headings 20px/400 (currently 700), news meta 11px gold
- [ ] **Hero type scale** — `10vw` headline (`14vw` ≤1199.98) instead of the `5xl→8xl` ramp
- [ ] Row photography — no zoom on hover (the source keeps the image still)
- [ ] Typecheck / lint / 100% coverage / build — per-app gate, run by the implementer on any app
      change (`bash scripts/verify-app.sh vellum`)
