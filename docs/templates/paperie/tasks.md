# Paperie — implementation tasks

Recreation of ColorLib **"Invits"** (source slug `invits`) — a romantic
single-page invitation site on a **white page** with a **magenta-purple brand
`#800098`**, an orange-brown heading ink `#362d2b`, **Playfair Display** headings
over **Poppins** body text, and **watercolour flower / leaf sprigs** used as the
recurring ornament motif. Section order: **header → hero → our story → schedule
(services) → memories → gift → RSVP form → map → partners → footer**. The
signature element is the hero's **540 px rotating purple circle**
(`rgba(129,29,146,.85)`) carrying a white dashed ring, the date with a white dash
on each side, the couple names in 65 px Playfair Display, and a white uppercase
tagline. The schedule band sits on `#fefcfa` with three **237 px ringed circular
photos** split by 2 px gold `#e09513` rules; the RSVP band is a **570 px white
card** (`box-shadow: 0 0 86px 0 rgba(0,0,0,.06)`) with four sprigs pinned inside
it and two large leaf branches hanging outside; buttons and fields share a **5 px
radius**, circles are 50 %.

Preview: `https://preview.colorlib.com/theme/invits/` (**HTTP 200**, 32,391 B,
`<title>Wedding HTML-5 Template</title>`) — the slug's official archive
`https://preview.colorlib.com/downloads/free/invits.zip` is **404**, so the live
preview is the only DOM/CSS reference. Stylesheet
`assets/css/style.css` (**HTTP 200**, 59,750 B, sha256 `8f8973ab0b14d7203d0821603845a1fcd3296f63c88d17d462210cedcacdc1c9`),
behaviour `assets/js/main.js` (**HTTP 200**, 7,652 B, sha256
`aaae1b72b46dd516654176286f32f68e5577627155ccd6388ae44d145b3b8da3`).
Screenshot `invits-free-template.jpg` (HTTP 200, served **AVIF** despite the
`.jpg` name, 181,443 B, 1200×946 → converted to PNG and inspected): cream page,
slim header with the purple "Invits." wordmark and a right-hand nav, purple
circle hero over the couple photo, then the "OUR STORY" band with a sprig above
the heading.

Spec: `openspec/specs/template-paperie/spec.md`. New name: **paperie** (a
stationer's house — the source is an invitation design; keeps the Wedding
family's naming run: lensly · vows · nuptial · knot · wedlock · nuptials ·
betrothal · trousseau · **paperie**). Never reuse the source slug `invits`, the
name "Invits", the source's nav labels (`Our Story`/`Location`/`Gallery`/
`Guest Book`/`Pages`/`Blog`/`Blog Details`/`Element`/`contact`), the couple names
`Julia & Jakson`, the date `Feb 14 2020`, the schedule titles
`Rehearsal Dinner`/`The Ceremony`/`Afterparty`, the schedule date
`July 20, 2020`, the time `12:00PM-2:00PM`, the venue
`The Sierra Resort 14 / Pacific Grove Monterey, CA`, the column headings
`WEDDING PLANNER FAQS`/`ABOUT US`/`Instagram`, the footer links, the string
`Colorlib`, or any copy verbatim.

Design notes: `docs/templates/paperie/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/paperie`
- [ ] Rename package to `@free-react-templates/paperie`; set
      `"homepage": "https://paperie.free.componentdock.com"`
- [ ] `public/CNAME` = `paperie.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/paperie`
      (`grep -c "free-react-templates/paperie" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an
      existing app — Tailwind v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap`
      (Playfair Display = headings/display, Poppins = body/UI/nav). The source
      imports the legacy form
      `css?family=Playfair+Display|Poppins:100i,200,...,900&display=swap`; both
      faces verified on Google Fonts (HTTP 200). Icons: `lucide-react`
      (`Menu`, `X`, `ChevronDown`, `Plus`, `ArrowUp`, `Heart`, `MapPin`,
      `Mail`, `Phone`)
- [ ] `@theme` tokens in `src/index.css`: `--color-brand: #800098`,
      `--color-brand-dark: #620672` (button hover sweep),
      `--color-hero-circle: rgba(129, 29, 146, 0.85)`, `--color-ink: #362d2b`,
      `--color-body: #222222`, `--color-nav: #002e5b`,
      `--color-story: #978e98` (story paragraphs / copyright),
      `--color-placeholder: #a3a3a3`, `--color-field-line: #d9d9d9`,
      `--color-footer-link: #868c98`, `--color-blush: #daad9e`,
      `--color-gold: #e09513`, `--color-dot: #ff0b0b`,
      `--color-schedule-bg: #fefcfa`, `--color-footer-bg: #f9f7f4`,
      `--radius-field: 5px`; fonts
      `--font-display: "Playfair Display", serif` and
      `--font-body: "Poppins", sans-serif`
- [ ] `src/components/` split: `Header.tsx` (wordmark + nav + Pages dropdown +
      sticky-on-scroll), `Hero.tsx` (fade slider + rotating circle),
      `OurStory.tsx`, `Schedule.tsx`, `Memories.tsx` (grid + lightbox),
      `Gift.tsx`, `RsvpForm.tsx`, `MapBand.tsx`, `Partners.tsx`, `Footer.tsx`,
      plus `SectionTitle.tsx` (sprig + uppercase H2) and `Sprig.tsx` /
      `LeafBranch.tsx` (inline-SVG ornaments, `aria-hidden`)

## Ornaments (`Sprig`, `LeafBranch`, `SectionTitle`) (TDD)

- [ ] Red: `SectionTitle` asserts a 120 × 69 sprig above a Playfair Display 40 px
      / 700 uppercase `#362d2b` heading (66 px below it); `Sprig` and
      `LeafBranch` are decorative only (`aria-hidden`, no text)
- [ ] Green: small **inline SVG** flower sprig (used above the story heading, the
      memories / partners / form titles, the schedule cards and the four corners
      of the RSVP card) and a large watercolour-style leaf branch (used at the
      story / memories band edges and outside the RSVP card). **No ColorLib asset
      copied**

## Header (`Header`) (TDD)

- [ ] Red: asserts a slim white row — the "Paperie" wordmark in `#800098` with a
      **bright red `#ff0b0b` full stop** left, and six capitalize-case nav links
      in `#002e5b` (Our Story, Location, Gallery, Guest Book, Pages ⌄
      [Blog, Blog Details, Element], Contact) with `padding:39px 19px`, hover →
      `#800098`
- [ ] Green: `<Header>` with a keyboard-operable dropdown (white panel,
      `border-top:5px solid #800098`, radius `0 37px 0px 24px`, shadow
      `0 0 10px 3px rgba(0,0,0,.05)`, 14 px `#0b1c39` rows, hover `#800098` —
      **keep the odd radius quirk**) and a sticky-on-scroll state: fixed white
      bar, nav padding `26px 20px`, `box-shadow: 0 10px 15px rgba(25,25,25,.1)`,
      0.5 s fade-down, z-index 9999
- [ ] Guard: `aria-expanded` on the dropdown + mobile toggle; a mobile bar below
      992 px (dark grey `#4c4c4c`, "Menu" button `#222`, radius 4 px, white
      uppercase + hamburger, panel of 41 px white 14 px rows with a `+` on the
      Pages group); **no** `href="#"` dead anchors

## Hero (`Hero`) (TDD)

- [ ] Red: asserts a full-bleed photo band (800 px at ≥1200 px, 750/560/400 px at
      the lower breakpoints) under `rgba(0,0,0,.1)`, with a circular
      `rgba(129,29,146,.85)` panel 540 / 450 / 350 / 220 px per breakpoint
      wearing a **white dashed ring inset ~19 px** and rotating 30 s linear
      (disabled under `prefers-reduced-motion`); inside — a white uppercase 23 px
      date line flanked by two 57 × 2 px white dashes at ±76 px, the couple names
      in Playfair Display 65 px / 700 white capitalize, a white uppercase 23 px
      tagline
- [ ] Green: `<Hero>` — two slides that cross-**fade** (slick shipped
      `autoplay:false, fade:true, arrows:false, dots:false`, so no controls are
      visible); placeholders
      `picsum.photos/seed/paperie-1/1920/1080` and `seed/paperie-2/1920/1080`
- [ ] Guard: assert the circle ring is dashed, the rotation is suppressed under
      reduced motion, the slider is pause-able and keyboard/touch operable, and
      the copy is legible over the scrim

## Our Story (`OurStory`) (TDD)

- [ ] Red: asserts a two-column band (`padding:200px 0 100px`) — a portrait photo
      (530 × 625) with a sprig (215 × 302) at its bottom-left, and a text column
      with a 106 × 61 sprig above the Playfair Display 40 px / 700 uppercase
      heading, then two 16 px / 30 px paragraphs in `#978e98`; pale flower
      line-art (~359 × 361) flush at each band edge (xl only)
- [ ] Green: `<OurStory>` with own copy; placeholder
      `picsum.photos/seed/paperie-3/1060/1250`
- [ ] Guard: assert the ornaments are `aria-hidden`, the paragraph colour token
      is `#978e98`, and the edge shapes are hidden below xl

## Schedule (`Schedule`) (TDD)

- [ ] Red: asserts a `#fefcfa` band (`padding:170px 0 110px`) with three centred
      columns — each a **237 px circular photo** wearing
      `10px solid rgba(255,255,255,.8)` and `border-radius:50%`, a sprig tucked
      behind its right edge, a Playfair Display 35 px title, a Playfair Display
      20 px date (54 px below), an uppercase 16 px time line in `#daad9e` with
      `letter-spacing:10px` (15 px below), and a two-line venue address in
      `#090908`; **2 px × 75 px `#e09513` vertical rules** between columns, none
      after the last
- [ ] Green: `<Schedule>` with own event names/dates/times/venue; placeholders
      `picsum.photos/seed/paperie-<4..6>/480/480`
- [ ] Guard: assert three columns, the ring on each circle, the gold divider
      present on the first two cards only (and hidden below lg), and the sprig is
      `aria-hidden`

## Memories (`Memories`) (TDD)

- [ ] Red: asserts `SectionTitle` (sprig + Playfair Display 40 px / 700 uppercase
      title 66 px below), then a **3 × 2 no-gutter grid** (tiles 390 × 482 at
      1440 px, images edge to edge) where hovering a tile reveals a
      `rgba(0,0,0,.6)` overlay plus a **40 px white-bordered circle with a plus
      glyph** and insets the tile by 10 px
- [ ] Green: `<Memories>` using `picsum.photos/seed/paperie-<7..12>/780/964`; the
      plus affordance opens a `<dialog>`-based lightbox (**no new dependency**);
      pale edge line-art (259 × 532 / 283 × 535) as `LeafBranch`s
- [ ] Guard: assert exactly six tiles, no gutters, an overlay on hover/focus, and
      that the lightbox is keyboard-operable with a labelled close control

## Gift banner (`Gift`) (TDD)

- [ ] Red: asserts a full-bleed photo band (`padding:160px 0 170px`) with a white
      bottom-up gradient wash, content offset one column from the left — a
      Playfair Display 70 px / 700 capitalize `#362d2b` title, a 30 px line of
      copy (60 px below) and a `#800098` R.S.V.P action (150 × 60, radius 5 px,
      `letter-spacing:1px`, white 16 px label) whose hover sweeps a `#620672`
      fill up from the baseline (scaleY 0 → 1, cubic-bezier(.5,1.6,.4,.7))
- [ ] Green: `<Gift>` with own title/copy; placeholder background
      `picsum.photos/seed/paperie-13/1920/1200`
- [ ] Guard: assert the sweep is present on hover **and** `focus-visible`, and
      that the wash does not hide the call to action

## RSVP form (`RsvpForm`) (TDD)

- [ ] Red: asserts a centred white card (`padding:100px 82px 70px`,
      `box-shadow: 0 0 86px 0 rgba(0,0,0,.06)`) with a sprig above the uppercase
      Playfair Display title, **four ~100 × 87 sprigs** pinned inside its
      corners, two large leaf branches (~499 × 493 upper-left at
      `top:-62px; left:-143px`, ~432 × 555 lower-right at
      `bottom:2px; right:-133px`, z-index -1) outside it, then a Name field, an
      Email field, a guest-count select (4 options) and a 140 px message
      textarea — fields 60 px tall, `1px solid #d9d9d9`, radius 5 px,
      capitalized `#a3a3a3` labels (textarea label `letter-spacing:2px`) — and a
      centred `#800098` submit action
- [ ] Green: `<RsvpForm>` with controlled inputs, a **real keyboard-accessible
      `<select>`** styled to the source's nice-select skin (60 px box, chevron
      inset 41 px from the right), `preventDefault` submit and a local
      confirmation (the source posts nowhere — `action="#"`)
- [ ] Guard: assert every field has an associated `<label>` (`htmlFor`/`id`),
      required-field validation, no navigation on submit, and the ornaments are
      `aria-hidden`

## Map band (`MapBand`) (TDD)

- [ ] Red: asserts a full-width, 500 px tall, lazily loaded map band
- [ ] Green: `<MapBand>` with an **OpenStreetMap embed iframe** (the source
      embeds Google Maps **with an API key** — do not reuse the key or any keyed
      provider; the repo's existing templates use either an OSM embed or the
      key-less `maps.google.com/...&output=embed` form)
- [ ] Guard: assert the iframe has a `title`, `loading="lazy"` and no API key in
      the URL

## Partners (`Partners`) (TDD)

- [ ] Red: asserts `SectionTitle` (sprig + uppercase Playfair Display 40 px / 700
      title) above a row of **five ~170 px partner marks**, five up on desktop
      with fewer at the tablet/mobile breakpoints, slowly auto-scrolling and
      pausing on hover
- [ ] Green: `<Partners>` — a CSS-marquee or scroll-snap row of five neutral
      monochrome marks (own designs; **avoid adding a carousel dependency** —
      AGENTS.md rule 6), animation off under `prefers-reduced-motion`
- [ ] Guard: assert five marks, the pause-on-hover behaviour, and that the row
      does not break keyboard access

## Footer (`Footer`) (TDD)

- [ ] Red: asserts a `#f9f7f4` band
      (`padding-top:200px; padding-bottom:74px`, 70 px/0 on mobile) with four
      columns — wordmark + blurb + e-mail / phone / street address, then
      `WEDDING PLANNER FAQS`, `ABOUT US` and `Instagram` (6 images in a 3 × 2
      grid of 90 px cells); headings Poppins 18 px / 500 uppercase `#362d2b`
      (38 px below), links 16 px / 300 `#868c98` that shift 5 px right in
      `#800098` on hover; a 1 px `#dddddd` rule closes the band above the centred
      16 px / 32 px copyright line in `#978e98` with a purple heart glyph and
      **exactly one** `https://www.componentdock.com/` link branded
      "Component Dock" (new tab, `rel="noreferrer"`), plus the computed current
      year
- [ ] Green: `<Footer />` (the source's copyright credits Colorlib — the
      Component Dock link is the required repo replacement per AGENTS.md rule 5)
- [ ] Guard: assert the four columns, six Instagram cells, the copyright year,
      and the single Component Dock link

## Page shell

- [ ] Red: asserts banner / main / contentinfo landmarks and the document title
      "Paperie — Wedding Template"
- [ ] Green: `<App>` composing Header + 8 sections + Footer, plus the
      scroll-to-top control (50 px `#800098` circle, white `ArrowUp`, fades in
      after 300 px of scroll, bottom 18 px / right 31 px)
- [ ] Guard: assert one `<h1>` (the hero couple names), ordered headings, and the
      scroll-to-top control is reachable by keyboard and `aria-label`led

## Quality gates

- [ ] `scripts/verify-app.sh paperie` green (typecheck + lint + knip + fallow +
      vitest **100 %** lines/functions/branches/statements + build)
- [ ] `npm run spec:validate` green
- [ ] Grep the app for `colorlib`, `Colorlib`, `invits`, "Invits", the source nav
      labels, `Julia`/`Jakson`, `Feb 14 2020`, the schedule titles
      (`Rehearsal Dinner`, `The Ceremony`, `Afterparty`), `July 20, 2020`,
      `12:00PM-2:00PM`, `Sierra Resort`, `Pacific Grove`, `WEDDING PLANNER FAQS`
      → **zero** hits (comments included)
- [ ] No copied assets: no `style.css`, no `bootstrap.min.css` /
      `owl.carousel` / `slick` / `slicknav` / `nice-select` / `magnific-popup` /
      `animate.min.css` / `fontawesome` / `themify-icons` files, no
      `homeHero_*.jpg` / `gft.jpg` / `hero_circle.png` / `story-img.jpg` /
      `service[1-3].png` / `memories[1-5].jpg` / `instra[1-6].jpg` /
      `shape_left.png` / `shape_right.png` / `from-top.png` / `from-bottom.png`,
      no jQuery, no Google Maps API key
- [ ] PR description lists: source template + slug, preview URL, design tokens
      used (brand `#800098`, hover sweep `#620672`, hero circle
      `rgba(129,29,146,.85)` + dashed white ring, ink `#362d2b`, nav `#002e5b`,
      story `#978e98`, blush `#daad9e`, gold `#e09513`, wordmark dot `#ff0b0b`,
      schedule `#fefcfa`, footer `#f9f7f4`, field border `#d9d9d9`, radii 5 px /
      50 % / `0 37px 0px 24px`, shadows `0 0 86px rgba(0,0,0,.06)` and
      `0 10px 15px rgba(25,25,25,.1)`, fonts Playfair Display + Poppins) and
      every delta (own name/brand/couple/copy, picsum photography, SVG sprigs,
      Component Dock footer link, accessible dropdown/select/lightbox, OSM map
      instead of the keyed Google embed, two-slide fade slider without the
      source's hidden controls)
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Invits` item `[x]` with
      the live `https://paperie.free.componentdock.com` URL + homepage and run
      `npm run readme:status`
