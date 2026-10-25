# Devfolio — task outline

Recreation of the ColorLib **Trace Developer** developer-portfolio design (`trace-developer`) at `apps/devfolio`.
The spec is the authority: `openspec/specs/template-devfolio/spec.md`. Design notes:
`docs/templates/devfolio/design-notes.md`. Check boxes only as work ships.

> The page is **six bands and a footer, no motion, no gradients**. Its whole personality is one typeface (Inter at
> **650**, `-0.05em` tracking), four colours (ink / navy / paper / lime), 1 px hairlines, and a fake editor card in
> the hero. Build the **hero + editor card first** — it is the template — then the two project cards, then the
> about band with its three principles, then the tools grid, the blue contact panel and the footer. Everything the
> page argues (case studies, working demos, source) collapses into **one accessible dialog**, so that is the only
> real behaviour to build. **Do not** reproduce the ColorLib footer credit, the 12 px overflow at 1024, the
> invisible focus ring on dark grounds, or the seven-page site structure.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/devfolio`; rename the package to `@free-react-templates/devfolio`
- [ ] `"homepage": "https://devfolio.free.componentdock.com"`, `public/CNAME` the same
- [ ] keep `injectUiSource()` in `vite.config.ts` untouched; `npm install` at the root once (registers the
      workspace in `package-lock.json`)
- [ ] Google Fonts `<link>` for **inter variable** (`family=Inter:wght@400..700&display=swap`) in `index.html`
- [ ] `@theme` in `src/index.css`: `--color-ink #18212f`, `--color-muted #5d6776`, `--color-line #dbe1e8`,
      `--color-brand #2459d3`, `--color-navy #15243a`, `--color-paper #f9fafc`, `--color-lime #d9f77c`,
      `--color-about #edf1f7`, `--color-rule #c9d2df`, `--font-mono` (system stack)
- [ ] delete the copied app's sections; `src/App.tsx` composes the seven bands in order

## 1 — Primitives

- [ ] `Button` — three variants, all radius **5**, `padding: 12px 19px`, `min-height: 47px`, 12.8 px/600,
      `inline-flex`, **25 px** label→glyph gap: `lime` (`#d9f77c` fill / `#15243a` text, hero only),
      `outline-light` (transparent, 1 px `#6b7e98`, white, hero), `solid-ink` (ink fill, white, default)
- [ ] `Eyebrow` (mono, 11.2 px, uppercase, `0.09em`, `--muted`, with `#b9c7d9` / `#dbe7ff` variants for the dark
      bands)
- [ ] `Tag` (mono 10.6 px, 1 px `--line`, radius 3, `3px 8px`, `#4c5b6d`)
- [ ] `Section` (72 px vertical padding) + `Split` (7/5 or 5/7, `align-items: center`, 24 px gutter, no negative
      margins) + `SectionTop` (heading left, 330 px lede right, stacks at `lg`)
- [ ] `FocusRing` — the reference's `#a44711` ring only clears ~1.9:1 on navy/blue; ship a two-tone ring
      (`outline` + `box-shadow`) and apply it globally
- [ ] `SkipLink` → `#main`

## 2 — Chrome

- [ ] `Navbar` — **87 px**, `padding: 24px 0`, 1 px `--line` bottom, not sticky; mono `#2459d3` glyph + 16/700
      name; four links at **14 px** `gap: 30px`; *Get in touch ↗* boxed (radius 5, `7px 13px`)
- [ ] `MobileMenu` — `Menu` button below `sm` with `aria-controls` / `aria-expanded`, 44 px touch target, closes on
      link activation and `Escape` (focus back to the button); nav visible with JS off
- [ ] `Footer` — 104 px, `padding: 26px 0`, 1 px `--line` top, brand line + *Setup & publishing guide* ·
      **Component Dock** (`https://www.componentdock.com/`), sample-data note below

## 3 — Hero (768 px, `#15243a`)

- [ ] band `padding: 84px 0 62px`, **7/5** split, `align-items: center`
- [ ] eyebrow `ARI MORGAN / FRONTEND DEVELOPER` → **invent the persona** (never the source's name)
- [ ] `h1` **89.6 px** (`clamp(3rem,6.3vw,5.6rem)`) `/ 1.08 / 650 / -0.05em`, `max-width: 780px`, three authored
      lines, **middle line `#d9f77c`**
- [ ] intro 17.3 px, `max-width: 480px`, `#c7d1e0`
- [ ] two buttons 27 px below (`lime` / `outline-light`)
- [ ] `EditorCard` (`<aside>` with an accessible name): `#0e1c30`, 1 px `#53657e`, radius **9**, shadow
      `0 20px 35px #08111c40`; head `● ● ●` (`aria-hidden`) + `about-me.json`; `<pre>` 13.44 px / lh 2 with
      `#8cb8ff` keys and `#d9f77c` strings rendered **from a typed object**; foot `Small details. Better
      experiences.` · `UTF-8`; stacks under the copy with `margin-top: 35px`
- [ ] `HeroFoot` — `1px #42516a` rule, 54 px below, three cells `01 Working demos · 02 Technical case studies ·
      03 Source you can read`, numerals white/500

## 4 — `#work` (1,269 px)

- [ ] `SectionTop`: eyebrow `SELECTED WORK / 2026`, two-line `h2` 52.8 px, right-hand 330 px lede; **stacks at
      `lg`** (the reference only stacks below 576 and crowds 992–1100)
- [ ] `ProjectCard` × 2 — `6/6` split, 1 px `--line`, radius 8, white, 26 px apart, visual well
      (`padding: 35px`, `min-height: 360px`, `#e4eafa` / `#e6eddf`), copy `padding: 38px`, `h3` 32 px, blurb
      14.4 px muted, three tags, two actions
- [ ] images: `https://picsum.photos/seed/devfolio-1/1200/833` and `…-2…`, `1px #c0cde0`, radius 6, shadow
      `0 16px 28px #17283c1a`
- [ ] both actions wired to the dialog (case study / demo view) — **no dead anchors**

## 5 — `#about` (688 px, `#edf1f7`)

- [ ] band `#edf1f7` with `border-block: 1px var(--line)`, **5/7** split (heading left, body right)
- [ ] eyebrow `HOW I APPROACH THE WORK` + three-line `h2`
- [ ] two paragraphs, then `.principles`: `border-top: 1px #c9d2df`, 35 px above, three articles with
      23 px padding and `#c9d2df` bottom rules, titles 17.3 px/650

## 6 — Tools / experience (371 px)

- [ ] **5/7** split, eyebrow `TOOLS / EXPERIENCE`, two-line `h2`, *Experience and résumé →* link (→ `#/resume`)
- [ ] 2 × 2 grid `gap: 25px`, four cells (browser / workflow / exploring / values), titles 16 px/650,
      bodies 13.9 px `#5d6776`; 1 column below `sm`

## 7 — `#contact` (385 px) and the panel

- [ ] blue **panel**: `#2459d3`, radius 8, `padding: 50px`, `margin-bottom: 60px`, *not* full-bleed
- [ ] eyebrow `#dbe7ff`, `h2` 64 px, one **white** button (`mailto:`), `#e1e9ff` note *"Demo contact address.
      Replace it with your own before publishing."*
- [ ] no form

## 8 — `CaseStudyDialog` + working demo

- [ ] `role="dialog"`, `aria-modal="true"`, accessible name, focus into the sheet, `Escape` / backdrop / close
      button dismiss and restore focus to the trigger
- [ ] content per project: facts `dl` (Role / Stack / Data / Status), six numbered sections, `.decision` callout
      (mono architecture flow optional)
- [ ] demo block: labelled search input, `<select>` of statuses/types, *Clear filters*, `aria-live="polite"` count,
      authored empty state
- [ ] `filterRecords(records, query, category)` as a pure module; **derive** the visible list during render
- [ ] unknown category → *All*; *Clear filters* resets and **returns focus to search**
- [ ] records invented: 8 issues (`ISS-101`…`ISS-108`) and 5 releases (`v1.1.0`…`v1.3.0`) with the same shapes

## 9 — Résumé view (`#/resume`)

- [ ] hash route (no new dependency): person + role line, Experience (2 roles × 3 bullets), Selected projects
      (the two), Tools and skills, Education; print-friendly
- [ ] either ship the view or drop the nav item — never a dead link

## 10 — Verify

- [ ] `npm run typecheck && npm run lint` clean; `scripts/verify-app.sh devfolio` green at 100 % coverage
- [ ] band heights 87 / 768 / 1,269 / 688 / 371 / 385 / 104 ±5 % at 1440; document ≈ 3,732 px
- [ ] no horizontal overflow at 320 / 390 / 768 / **1024** / 1280 / 1440
- [ ] contrast: `#5d6776` on paper, `#c7d1e0` on navy, `#dbe7ff` and white on `#2459d3`; focus ring ≥ 3:1 on all
      three grounds
- [ ] **no** ColorLib string anywhere in `apps/devfolio`; footer links Component Dock; persona fully invented
- [ ] `#d9f77c` appears exactly three times (hero line, JSON strings, hero CTA)
