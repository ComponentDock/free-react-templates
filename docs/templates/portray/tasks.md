# Portray (ColorLib Jackco) — Tasks & Design Notes

> Prep artifacts written on `main` by the prep stream. Implementation ships
> later on `feat/template-portray`. This folder + the spec are the claim
> marker: the implementer starts from here, no research needed.
> Full measured evidence: `openspec/specs/template-portray/spec.md` and
> `docs/templates/portray/design-notes.md`.

## Identity

| Thing | Value |
|---|---|
| New name | **Portray** (one word, "to present a likeness of" — the page's own subject; `git grep -il portray origin/main` = 0 hits, absent from `TEMPLATES.md`, not a ColorLib slug — `template/portray/`, `theme/portray/` and `theme/bootstrap/portray/` all 404) |
| App / package | `apps/portray` · `@free-react-templates/portray` |
| Deploy target | `portray.free.componentdock.com` |
| Source | ColorLib **Jackco** — https://colorlib.com/wp/template/jackco/ |
| Preview | https://preview.colorlib.com/theme/jackco/ (HTTP 200, **32,334 B** HTML + **60,698 B** `assets/css/style.css`, fetched 2026-10-24; Bootstrap 5.0.0-beta1 + jQuery 1.12.4 + Owl Carousel + Slick + SlickNav + Magnific Popup + Nice Select + animate.css + Font Awesome 5 + Themify Icons; `<title>` = "Resume \| Template"; no `/downloads/free/jackco.zip`, that path 404s) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/jackco-colorlib-template.jpg (AVIF 1200×946, 78,345 B — top fold) |
| TEMPLATES.md rows | lines **593**, **2398**, **2523** (`grep -c 'wp/template/jackco/'` = 3) — all `[x]` and wrongly credited to `dossier` |
| Why no app exists | `docs/row-multiplicity.md` §2 APP-WRONG-DESIGN: `dossier`'s spec names ColorLib **Alias** (`row-excl / spec-excl` = 1 / 25) |
| Category | Personal résumé / portfolio (one-page CV) |

## Structure (1:1, DOM order from the live preview, 1440×1000)

1. `header-area header-transparent` — **absolute**, 99px, transparent,
   `padding: 0 88px`, bottom rule `1px rgba(21,3,3,.2)`, `z-index: 9`. The hero
   starts at **y=0 behind it**.
2. `slider-area` / `.single-slider.slider-height` — **900px**, bg `#5AFF80`;
   left 5-col caption (`h1` 80px, `p` 40px/300, outlined `HIRE ME`, 224×69),
   right cut-out portrait 938×900 carrying its **own `#01FF56` disc**.
3. `about-area` — **1,072px**, `120px` padding, cover photo background, white
   card `max-width 1076px` / `padding: 100px`: green eyebrow (16px, 1.6px
   tracking) → 40px/400 statement → `#01FF56` CTA ink-on-green (269×61) →
   `border-top` row with **4 skill bars** (60/89/60/89 on 8px tracks).
4. `experience-top` — **684px**, centred `h2` "My Expertise" then left
   `#01FF56` box (636×347, `60px 65px 20px`) with **3 stacked 40px headings**
   (first ink, others `rgba(21,3,3,.3)`) + **27px white rotated notch**
   (`right:-15px; top:80px`) and right two `#656565` 18px paragraphs.
5. `may-about bottom-padding` — **1,056px**, `h2` "Experience" 60px, then **4
   rows** in a 9-col offset: role 30px/400 + period 16px/300 | "at <company>"
   (`at` `#928888`) | full-width 16px/300 description, **one** `#E2E2E2`
   hairline on the first row.
6. `visit-tailor-area` — **662px** `#01FF56` flex: photo 56% (cover, 662px) +
   quote 35% at 40px/300 Chivo (`padding: 20px 40px 20px 80px`).
7. `may-about section-padding` — **767px**, `h2` "Education" 60px + **2 rows**
   (same row grammar as Experience).
8. `instagram-area` — 5-slide Owl strip, **collapses to 1px live** (see risks);
   render it deliberately as a 5-tile full-bleed strip.
9. `footer` — **880px** `#01FF56`: centred statement `h2` 40px/400, then form
   column (3 underline inputs 50px + 76px textarea + dark 238×64 submit) and
   contact column (3 underlined links + outlined `DOWNLOAD RESUME` + 3 circular
   50px social buttons), 26px bottom copyright line.

## Tasks

- [ ] Scaffold `apps/portray` from the simplest shipped app; rename the package,
      set `public/CNAME` and `homepage`, register `injectUiSource()` in
      `vite.config.ts`.
- [ ] `src/index.css`: `@theme` tokens `--color-neon #01FF56`,
      `--color-band #5AFF80`, `--color-hover #00E64D`, `--color-ink #150303`,
      plus Chivo + Shippori Mincho via one Google Fonts `<link>`.
- [ ] `Header`: absolute transparent shell, wordmark (text, serif), five links
      with 1px left dividers + hover `#00E64D`, Blog submenu on a `#01FF56`
      panel (hover **and** focus), underlined "Fire me an email" CTA, sticky
      variant with `#5AFF80` + `0 10px 15px rgba(25,25,25,.1)`, `MENU +` panel
      ≤991px with `aria-expanded`.
- [ ] `Hero`: 900px `#5AFF80` band, `h1` 80px/400 Shippori −2px tracking,
      40px/300 subline, outlined square CTA, portrait + `#01FF56` disc anchored
      right, hidden ≤767px.
- [ ] `About`: photo-background band, white card, eyebrow, statement, green
      CTA, `SkillBar` ×4 (role=progressbar, aria-valuenow = width, reveal via
      IntersectionObserver with final widths when the API is missing).
- [ ] `Expertise`: centred heading, green box with three headings (ink / 30% ink
      / 30% ink) and the 27px rotated notch, two paragraphs beside it.
- [ ] `Timeline` (shared by Experience + Education): 60px heading, indented
      9-col rows, single first-row hairline, role/period/company/description,
      company link hover `#01FF56`.
- [ ] `QuoteBand`: 662px green split, cover photo left, `blockquote` right at
      40px/300, stacked photo-first ≤767px.
- [ ] `Gallery`: five equal tiles, no gaps, `#150303` 0.3 hover wash + white
      30px zoom glyph, keyboard-operable lightbox, no overflow at 390px.
- [ ] `Footer`: green band, statement, form (3 inputs + textarea + dark submit
      with inline validation and success state), contact list, outlined résumé
      button, three circular social links, copyright line linking
      **https://www.componentdock.com/** as "Component Dock".
- [ ] `BackToTop`: 40px `#01FF56` circle, appears after one viewport, smooth
      scroll, accessible name.
- [ ] Tests: render assertions per band (counts, labels, measured type sizes),
      form validation branches, submenu open/close, lightbox open/Escape,
      observer-absent fallbacks; keep 100% coverage.
- [ ] `scripts/verify-app.sh portray` green; visual A/B at 1440 and 390.

## Risks / gotchas

1. **Two greens, not one.** The band is `#5AFF80`; the disc behind the head and
   every accent is `#01FF56`. Painting the band `#01FF56` erases the portrait's
   silhouette (verified by pixel sampling: band `(90,255,128)`, disc
   `(1,255,86)`).
2. **`#01FF56` on white fails contrast** for small text — the source only uses
   it for the 16px eyebrow, the bar fills, box fills and the `border-btn` icon.
   Keep that discipline; don't set body copy or links in neon.
3. **The gallery band is broken in the source** (1px tall, Owl never sizes its
   slides). Do not "fix" it by copying the collapse; render the five tiles.
4. **The source is 9px wider than a 390px viewport.** Ship
   `overflow-x: clip`-clean layout and assert `scrollWidth === clientWidth`.
5. **Square geometry is the look.** Every button and input is `border-radius:
   0`; only the 50px social circles, the 40px back-to-top and the 179px-radius
   hero disc are round. Rounded buttons destroy the character.
6. **Serif display + sans body is the whole personality** — 80px Shippori hero
   against 40px/300 Chivo copy. Loading only one family flattens the page.
7. `body` inherits Bootstrap's `rgb(33,37,41)` in the source; set ink on the
   root element.

## Handoff

Implementer: re-open rows **593**, **2398**, **2523** on your branch before the
first commit, and re-mark them with the live URL after merge. `dossier` is not
yours — it stays credited to ColorLib **Alias**. Provenance (slug, ColorLib
links) lives only in the spec, `TEMPLATES.md` and the PR; `apps/portray` must
contain no `colorlib` string.
