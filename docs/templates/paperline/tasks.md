# Paperline (ColorLib Resume) — Tasks & Design Notes

> Prep artifacts written on `main` by the prep stream. Implementation ships
> later on `feat/template-paperline`. This folder + the spec are the claim
> marker: the implementer starts here, no research needed.
> Full measured evidence: `openspec/specs/template-paperline/spec.md` and
> `docs/templates/paperline/design-notes.md`.

## Identity

| Thing | Value |
|---|---|
| New name | **Paperline** (one word, the printed sheet a CV is set on; `git grep -il paperline origin/main` = 0 hits, absent from `TEMPLATES.md`, not a ColorLib slug — `template/paperline/`, `theme/paperline/` and `theme/bootstrap/paperline/` all **404**) |
| App / package | `apps/paperline` · `@free-react-templates/paperline` |
| Deploy target | `paperline.free.componentdock.com` |
| Source | ColorLib **Resume** — https://colorlib.com/wp/template/resume/ |
| Preview | https://preview.colorlib.com/theme/resume/ (HTTP 200, **28,886 B**, sha256 `cc2e8ddf…`; sheet `css/main.css` **32,634 B** sha256 `3c52be27…`; script `js/main.js` **3,246 B** sha256 `fc730b44…`; `<title>` = "Resume"; `theme/bootstrap/resume/` **404**, `theme/bb/resume/` **404**, `/downloads/free/resume.zip` **404** — no alias twin, **no archive**) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/resume-free-website-template.jpg (AVIF, **1200×935** — top fold: gradient hero + cut-out portrait + thin/bold/thin name block + white "LET US TALK" pill, with the services band's first rows visible) |
| Category | Portfolio / personal résumé & CV, single page |
| TEMPLATES.md rows | line **2422** (`## Personal (53)`), line **2724** (`## Resume (20)`) — both `[x]`, wrongly credited to the `resume` app |
| Why no app exists | `docs/row-multiplicity.md` §2 APP-WRONG-DESIGN: the `resume` app recreates a different ColorLib design (**Personalportfolio** — coral `#ec5b53`, Rufina headings, navy `#000a2d`); `row-excl / spec-excl` = **0 / 17**. Last slug in the bucket. |

## Structure (1:1, DOM order from the live preview, 1440×900, doc ≈6,897 px)

1. **Header + hero (one band, 915 px)** — `header.default-header` is
   `position:absolute` (56 px, 0 px in flow) over the `#62bdfc → #8490ff`
   vertical gradient. Wordmark 127×30 at x 165; five white 14 px/600 uppercase
   links at 20 px padding; `Pages` dropdown (gradient panel, no radius,
   margin-top 15) with two entries. Hero: portrait **546×767** at (150,148)
   (transparent cut-out, edges dissolving into the gradient), copy at x 735,
   540 wide — `h1` 36 px/**100** white at y 331 (`span` uppercase **700**),
   paragraph 14/300 white at y 501, white **pill** CTA **165×38** radius 20
   (8 px 40 px, uppercase 14/600 black) at y 601.
2. **Services (864 px, white)** — centred 36/600 title + 14/300 subtitle, then
   a 2×2 grid of 570×216 cards: 60 px flat illustration, 18/600 title link
   (gradient band on hover), 14/300 blurb.
3. **About (1,012 px, `#f9f9ff`)** — left column 540 wide: paragraph, "Tools
   Expertness" (18/600, 40 px bottom pad), five skill bars (85 / 80 / 40 / 70 /
   75 %; label right-aligned 14/400, track 540×16 white + 1 px `#bababa` +
   radius 10, fill **10 px** gradient). Right: white card **458×610** —
   458×340 photo + 35 px padded centred block (name, role, phone, e-mail) and a
   **192×49** gradient "Hire Me" pill (radius 25).
4. **Qualifications (735 px, white)** — 100/80 padding, two centred 540 columns,
   `.single-qly` entries at 30 px vertical padding, 24/600 uppercase company
   names, 18/600 roles, hairline **1 px `#ddd` at 70 %** between entries
   (2 experience entries left; 3 education entries right).
5. **Projects (1,633 px, `#f9f9ff`)** — staggered mosaic: left column
   `image (540×330) → title → blurb` ×2 with 100 px gaps; right column
   `title → blurb → image` ×2. 18/600 titles, 14/300 blurbs, images
   `scale(.9)` on hover.
6. **Features (634 px, white with 100 px top padding only)** — six cards,
   **350×171** on `#f9f9ff`, 30/30/15 padding, 20 px icon + 18/600 title row,
   14/300 blurb; hover flips the whole card to the gradient with white type.
7. **Contact (672 px, white)** — centred title, then a 1,110 px two-column
   form: three **540×47** fields (15 px padding, 12 px text, 0 radius, 1 px
   `rgba(0,0,0,.15)`), **540×180** textarea, **193×44** gradient submit
   (radius 25, arrow inset 30 → 20 px on hover) and the `.alert-msg` slot.
8. **Footer (432 px, `#222222`)** — 5/5/2 widgets (About Us + runtime-year
   copyright, Newsletter with a `#191919` field + 40×37 gradient arrow, Follow
   Us with 4 `#cccccc` icons), 100/120 padding.

## Tasks (implementation order)

- [ ] Scaffold `apps/paperline` from the simplest existing app; rename package
      to `@free-react-templates/paperline`, set `homepage` +
      `public/CNAME` = `paperline.free.componentdock.com`; keep
      `injectUiSource()` in `vite.config.ts`; `npm install` at the root so the
      lockfile registers the workspace
- [ ] Tailwind `@theme` tokens: `--color-brand-from #62bdfc`,
      `--color-brand-to #8490ff`, `--color-ink #222222`,
      `--color-body #777777`, `--color-tint #f9f9ff`,
      `--color-footer-field #191919`; Poppins 100–700 via `index.html` link
- [ ] `Header` (absolute → fixed gradient bar on scroll, mobile panel,
      dropdown of #qualification/#feature) + tests
- [ ] `Hero` (gradient band, masked portrait, three-line `h1`, pill CTA) + tests
- [ ] `Services` (2×2, lucide marks, gradient title hover) + tests
- [ ] `About` (paragraph, five static bars with `role="progressbar"` semantics,
      458×610 résumé card, Hire Me pill) + tests
- [ ] `Qualifications` (two columns of centred entries, `#ddd` rules) + tests
- [ ] `Projects` (staggered mosaic, image-first vs image-last, `scale(.9)`
      hover) + tests
- [ ] `Features` (six cards, gradient hover) + tests
- [ ] `Contact` (four fields, native validation + e-mail pattern, local success
      message) + tests
- [ ] `Footer` (three widgets, local newsletter capture, runtime year,
      Component Dock credit) + tests
- [ ] Global: `prefers-reduced-motion`, focus rings, `aria-label`s on the
      icon-only social links, empty `alt` on decorative art
- [ ] Verify `scrollWidth === clientWidth` at 1440 / 1199 / 991 / 800 / 414 / 390
- [ ] `scripts/verify-app.sh paperline` green; open the PR describing the source
      mapping (`apps/paperline` recreates ColorLib **resume**), then merge
- [ ] After merge: re-open → flip rows **2422** and **2724** to `[x]` with the
      production link, and decrement the "designs without an app" census

## Notes for the implementer

- This is **not** the `apps/resume` design. Nothing ports: different palette
  (gradient vs coral), different type (Poppins vs Rufina/Rubik), different
  band list. Do not copy components from it.
- The hero portrait is a **transparent cut-out** in the source — the illusion
  is the whole point. Mask a placeholder portrait into the gradient; never put
  a rectangle on the band.
- No carousel, no parallax, no counters, no animation library. The only motion
  is the sticky header, hover fills, `scale(.9)` on project images and the
  arrow slide in the submit button.
- Zero source assets are copied: portrait/project/skills imagery is
  `https://picsum.photos/seed/paperline-<n>/<w>/<h>`, service and feature marks
  come from `lucide-react`.
