# Betrothal — implementation tasks

Recreation of ColorLib **"Dreamwed"** (source slug `dreamwed`) — a romantic
single-page wedding / save-the-date site on a **clean white canvas** with a warm
**ochre/gold accent `#d48f4c`**. Header is centred (ring icon above the wordmark,
centred nav row with a Pages dropdown + search). The hero is a full-width couple
photo under a dark scrim with white copy (uppercase date line · display-serif
couple names with a `⚭` interpunct + **gold flourish ornament** · paragraph ·
**square gold "R.S.V.P" button**). Each section heading is a **gold uppercase
eyebrow** over a dark serif H2 separated by a **gold wave ornament image** — the
template's signature motif. Section order: **header → hero → story → countdown →
gallery → events slider → rsvp → wedding-time → footer**. Gallery and RSVP bands
are background photos with overlays. White cards/forms use a soft diffuse shadow
(`0px 5px 30px rgba(53,53,53,0.06)`); buttons are **square (no radius)**.
Fonts: headings **"Arima Madurai", cursive**, body **"Work Sans", sans-serif**.
Preview: `https://preview.colorlib.com/theme/dreamwed/` (**HTTP 200**, 34,516 B,
`<title>Dream | Template</title>`); stylesheet
`https://preview.colorlib.com/theme/dreamwed/css/style.css` (**HTTP 200**,
30,285 B — 132 rule groups, `@font-face` for Arima Madurai + Work Sans).
Screenshot `dreamwed-free-template.jpg` (HTTP 200, served **AVIF** despite the
`.jpg` name, 69,828 B → converted to PNG and inspected): white page, ochre
accents, photo hero with centred white script names + gold flourish + square gold
button, "Save The Date / Our Story Wedding" heading with a gold wave ornament and
a large circular centre photo.

Spec: `openspec/specs/template-betrothal/spec.md`. New name: **betrothal** (a
wedding/union synonym — keeps the Wedding family's naming run: lensly · vows ·
nuptial · knot · wedlock · nuptials · **betrothal**). Never reuse the source slug
`dreamwed`, the name "Dreamwed"/"Dream", the source's nav labels
(`Home`/`Wedding Plans`/`Photo Album`/`Blog`/`Pages`/`Story`/`Gallery`/`Rsvp`/
`Guestbook`/`Blog Details`), the couple names `Irenne & Jenkins` / `Irenne
Steele` / `Georgia Jenkins`, the date `September 19th, 2020` / `Sunday 19 March,
2019`, the placeholder blurb text, the string `Colorlib`, or any copy verbatim.
Design notes: `docs/templates/betrothal/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/betrothal`
- [ ] Rename package to `@free-react-templates/betrothal`; set
      `"homepage": "https://betrothal.free.componentdock.com"`
- [ ] `public/CNAME` = `betrothal.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/betrothal`
      (`grep -c "free-react-templates/betrothal" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an
      existing app — Tailwind v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@400;500;700&family=Work+Sans:wght@400;500;600;700&display=swap`
      (Arima Madurai = headings/display, Work Sans = body/UI). Icons:
      `lucide-react` (`Ring`/`Heart`, `Menu`, `X`, `Search`, `ChevronDown`,
      `Clock`, `MapPin`, `Camera`, `Church`, `Send`, plus social glyphs)
- [ ] `@theme` tokens in `src/index.css`: `--color-brand: #d48f4c`
      (buttons, active nav underline, eyebrows, ornaments), `--color-ink:
      #353535`, `--color-surface: #ffffff`, `--color-card-shadow: rgba(53, 53,
      53, 0.06)`, `--color-overlay: rgba(53, 53, 53, 0.7)`; radii
      `--radius-gallery: 5px`; fonts `--font-display: "Arima Madurai", cursive`
      and `--font-body: "Work Sans", sans-serif`
- [ ] `src/components/` split: `Header.tsx` (centred logo + nav + dropdown +
      search), `Hero.tsx`, `Story.tsx`, `Countdown.tsx`, `Gallery.tsx`,
      `Events.tsx`, `Rsvp.tsx`, `WeddingTime.tsx`, `Footer.tsx`, plus
      `SectionTitle.tsx` (eyebrow + H2 + gold wave ornament) and
      `Ornament.tsx` (the decorative divider)

## Shared SectionTitle + ornament (`SectionTitle`, `Ornament`) (TDD)

- [ ] Red: `SectionTitle` asserts a small **uppercase gold `#d48f4c`** eyebrow
      over a **dark serif H2** (`--font-display`) with a **gold wave ornament**
      divider beneath; the ornament is decorative only (`aria-hidden`)
- [ ] Green: `<SectionTitle eyebrow heading />` reusing a lucide/`Ornament`
      divider element; centred by default, `align="left"` variant for the
      Story/RSVP text blocks

## Header (`Header`) (TDD)

- [ ] Red: header asserts a centred layout — ring mark + wordmark "Betrothal"
      above a centred nav row; nav has Home, Wedding Plans, Photo Album, Blog,
      Pages (dropdown: Story, Gallery, Rsvp, Guestbook, Blog Details) + a
      search toggle; active link asserts colour **`#d48f4c`** with an underline
- [ ] Green: `<Header>` with the ring logo (`Ring`/`Heart` lucide icon),
      wordmark, nav and a keyboard-operable dropdown + search control
- [ ] Guard: assert `aria-expanded` on the dropdown/mobile toggle and a mobile
      collapse at small widths; assert **no** `href="#"` dead anchors

## Hero (`Hero`) (TDD)

- [ ] Red: hero asserts a full-width photo band (`set-bg` equivalent) with a
      dark scrim, centred **white** copy — uppercase date line, display-serif
      couple names with an interpunct separator, a gold flourish ornament, a
      paragraph, and a **square** (`border-radius:0`) gold R.S.V.P button
      (`background:#d48f4c; color:#fff; padding:14px 35px 10px; font-weight:700`)
- [ ] Green: `<Hero>` using `https://picsum.photos/seed/betrothal-1/1920/1080`
      (placeholder — a delta, no ColorLib asset copied) under a dark overlay
- [ ] Guard: assert the button is square (no radius) and that contrast of white
      copy over the scrim is legible

## Story (`Story`) (TDD)

- [ ] Red: asserts eyebrow "Save The Date" + H2 "Our Story Wedding" + wave
      ornament + lead paragraph; then a row with **two circular portraits**
      (`border-radius:50%`, 300×300, each with a name, a blurb and small social
      icons) flanking a **large centre photo**
- [ ] Green: `<Story>` — three-column layout, circular portraits via
      `rounded-full`, centre photo `https://picsum.photos/seed/betrothal-2/800/1000`
      (portraits `seed/betrothal-3` / `seed/betrothal-4`, 300×300)

## Countdown (`Countdown`) (TDD)

- [ ] Red: asserts a date heading + a row of four items — Days, Hours, Minutes,
      Seconds (`countdown__item`) — each a number over a label
- [ ] Green: `<Countdown>` with a static target date (rendered values may be
      fixed or live-updated; a live tick is an optional nicety)
- [ ] Guard: assert the four labels exist and the widget is accessible

## Gallery (`Gallery`) (TDD)

- [ ] Red: asserts the section-title renders over a **background-photo band**
      with eyebrow "Our Gallery" + H2 "Let's Save Your Best Moments" + wave
      ornament; then an **8-image grid** (4 columns × 2, `p-0` edge-to-edge,
      `border-radius:5px`) each with a **dark hover overlay**
      (`rgba(53,53,53,0.7)`)
- [ ] Green: `<Gallery>` using `picsum.photos/seed/betrothal-<5..12>/600/800`
- [ ] Guard: assert exactly eight images, the 5px radius, and a hover overlay

## Events slider (`Events`) (TDD)

- [ ] Red: asserts H2 "Wedding Events" and a slider of **5+ event items**, each
      a **circular icon** + a time + a title + a blurb (own equivalents of
      The Church / Ceremony Wedding / Wedding Party / Cake Cutting /
      Photography)
- [ ] Green: `<Events>` — a horizontally scrollable/carousel row (a CSS
      scroll-snap or an accessible list is fine; **avoid adding a carousel
      dependency** — AGENTS.md rule 6), icons from lucide-react
- [ ] Guard: assert each item has a time, a title and a blurb, and the row is
      keyboard-scrollable

## RSVP (`Rsvp`) (TDD)

- [ ] Red: asserts a **split band** over a background photo — left: a white form
      card (`padding:80px 50px 85px`, shadow `0px 5px 30px rgba(53,53,53,0.06)`)
      with a Name input, an Email input, a guest-count dropdown, an event
      dropdown and an **"I Am Attending"** button; right: a text block with an
      eyebrow + H2 "Are You Attending?" + paragraph
- [ ] Green: `<Rsvp>` with controlled inputs and a `preventDefault` submit (no
      external service)
- [ ] Guard: assert labels are associated with inputs (`htmlFor`/`id`),
      the submit does not navigate, and required-field validation is present

## Wedding Time (`WeddingTime`) (TDD)

- [ ] Red: asserts eyebrow "Location & Time" + H2 "Where & When" + lead, then a
      row of **three white cards** (`0px 5px 35px rgba(53,53,53,0.06)`) — each a
      title (Ceremony / Wedding Party / Photography), a **time range** and an
      **address line**
- [ ] Green: `<WeddingTime>` with own titles/times/address (no source copy)
- [ ] Guard: assert three cards, each with a time range and an address

## Footer (`Footer`) (TDD)

- [ ] Red: asserts a closing heading, a logo mark, a small social row, a
      copyright bar with the **computed current year**, and exactly one
      `https://www.componentdock.com/` link branded "Component Dock"
      (new tab, `rel="noreferrer"`)
- [ ] Green: `<Footer />` (the source footer is only a copyright bar + social
      row; the Component Dock link is a required repo addition)

## Quality gates

- [ ] `scripts/verify-app.sh betrothal` green (typecheck + lint + knip + fallow
      + vitest **100 %** lines/functions/branches/statements + build)
- [ ] `npm run spec:validate` green
- [ ] Grep the app for `colorlib`, `Colorlib`, `dreamwed`, "Dream", the source's
      nav labels, the couple names `Irenne`/`Jenkins`/`Steele`/`Georgia`, and
      the source dates → **zero** hits (comments included)
- [ ] No copied assets: no `style.css`, no `bootstrap.min.css`, no
      `owl.carousel`/`nice-select`/`slicknav` CSS/JS files, no `hero-bg.jpg` /
      `rsvp.jpg` / `gallery-title.jpg` / `icon_2.png`, no jQuery
- [ ] PR description lists: source template + slug, preview URL, design tokens
      used (brand `#d48f4c`, ink `#353535`, white surfaces, card shadow
      `rgba(53,53,53,0.06)`, overlay `rgba(53,53,53,0.7)`, gallery radius 5px,
      circular portraits, square buttons, fonts Arima Madurai + Work Sans), and
      every delta (own name/brand/couple/copy, placeholder photography,
      Component Dock footer link, accessible dropdowns/labels)
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Dreamwed` item `[x]` with
      the live `https://betrothal.free.componentdock.com` URL + homepage and run
      `npm run readme:status`
