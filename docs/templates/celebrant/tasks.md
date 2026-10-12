# Celebrant — implementation tasks

Recreation of ColorLib **"Wedding Officiant"** (source slug `wedding-officiant`,
TEMPLATES.md line 3106) — a mint-and-white one-page wedding-officiant site: a
**white sticky header** with a grey "Get Quote" pill, a **full-width cover-photo
hero with no text** and a mint `#cae8d5` band behind it, **Amiri serif** headings
(section titles **italic**) over **Quicksand** body text, an alternating
image/text services list, a **three-slide carousel on a mint panel**, **six
icon cards** with 70 px mint discs, a **seven-item FAQ accordion** (first open),
and a flat **`#333333` footer** with a mint "Send" pill. Section order:
**header → cover hero → Our Services → Marriages I Officiate → six feature cards
→ FAQ → footer**.

Preview: `https://preview.colorlib.com/theme/weddingofficiant/` (**HTTP 200**,
28,350 B, `<title>Wedding Officiant &mdash; Website by Colorlib</title>`) — note
the canonical hyphenated slug `…/theme/wedding-officiant/` **404s**. Stylesheet
`css/style.css` (**HTTP 200**, 24,244 B, sha256
`e8fb899c61fd254d91b06b551ab5f277d71e10f9f664de8ee4b486d41f48072d`).
Screenshot `weddingofficiant-free-template.jpg` (HTTP 200, **AVIF** despite the
`.jpg` name, 118,200 B, 1200×946 → converted to PNG and inspected). Full
research: `docs/templates/celebrant/design-notes.md`.

Spec: `openspec/specs/template-celebrant/spec.md`. New name: **celebrant** (the
professional who officiates a ceremony — single lowercase word, no `apps/` or
spec-folder collision; extends the Wedding family run: lensly · vows · nuptial ·
knot · wedlock · nuptials · betrothal · trousseau · paperie · affiance · troth ·
espousal · matrimony · **celebrant**). Never reuse the source slug
`wedding-officiant`, the wordmark "Wedding Officiant", the sample couple
"Joshua & Selene", the date string "July 20th, 2019", the section title
"Marriages I Officiate", the lorem copy, or the string `Colorlib`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/celebrant`
- [ ] Rename package to `@free-react-templates/celebrant`; set
      `"homepage": "https://celebrant.free.componentdock.com"`
- [ ] `public/CNAME` = `celebrant.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/celebrant`
      (`grep -c "free-react-templates/celebrant" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an
      existing app — Tailwind v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Quicksand:wght@400;500;700&display=swap`
      (Amiri = all headings incl. the italic section titles; Quicksand = body,
      nav, logo, footer, buttons). Both verified on Google Fonts (HTTP 200)
- [ ] Icons: `lucide-react` (`Menu`, `X`, `ChevronDown`, `ChevronLeft`,
      `ChevronRight`, `Gem`, `Church`, `Home`, `Mail`, `Wine`, `CalendarCheck`,
      `Heart`, `Facebook`, `Twitter`, `Instagram`, `Linkedin`)
- [ ] `@theme` tokens in `src/index.css`: `--color-brand: #cae8d5`,
      `--color-brand-link: #95d1ab`, `--color-dark: #343a40`,
      `--color-cta: #6c757d` (Get Quote pill), `--color-ink: #000`,
      `--color-nav: rgba(0,0,0,0.5)`, `--color-body: #808080`,
      `--color-card-copy: rgba(0,0,0,0.8)`, `--color-faq-border: #dee3e2`,
      `--color-divider: #edf0f5`, `--color-footer: #333333`,
      `--color-footer-text: #737373`, `--color-footer-link: #999999`,
      `--color-dot: rgba(0,0,0,0.3)`; `--font-display: "Amiri", serif`,
      `--font-sans: "Quicksand", sans-serif`; radii: 30 px pills
- [ ] Sanity pass at 320 / 768 / 1440 px for horizontal overflow (the source's
      `100vh` hero + `overflow: hidden` band is the risky part)

## Header (`Header`) (TDD)

- [ ] Red: asserts a **white sticky** bar with the **Celebrant** wordmark
      (Quicksand `1.2rem` / 900 / uppercase / `#000`), six links — Home · About ·
      Services · FAQ · Blog · Contact — in `rgba(0,0,0,0.5)` with a `#000`
      hover, the active link `#000` with a **2 px `#cae8d5` underline**, and a
      **"Get Quote" pill** (`#6c757d`, white label, radius 30 px)
- [ ] Green: `<Header />` — sticky white bar, `aria-current="page"` on the
      active item, the CTA anchors to the footer contact block
- [ ] Guard: assert six links + the CTA, the mint underline on the active item,
      keyboard-operable mobile disclosure with `aria-expanded` that closes on
      `Escape`, and no ColorLib strings

## Cover hero (`Hero`) (TDD)

- [ ] Red: asserts a full-width cover photo (`background-size: cover`, centred)
      **`100vh` tall with a 450 px floor**, **no heading / subtext / button**,
      and a **mint `#cae8d5` band** behind it starting ~30 % down and extending
      past the right edge
- [ ] Green: `<Hero />` — a `section#home` with the photo as a seeded picsum
      background and the mint band as an absolutely-positioned `aria-hidden`
      decoration inside an `overflow-hidden` wrapper
- [ ] Guard: assert the decoration is `aria-hidden`, the image comes from
      `picsum.photos/seed/celebrant-`, and there is no text content inside the
      hero landmark content

## Section title (`SectionTitle`) + media rows (`Services`) (TDD)

- [ ] Red: asserts a centred **italic Amiri `2rem`** title with a 30 px bottom
      margin, then **four media rows in two columns** — Initial Consultation ·
      Ceremony Editing · The Marriage License · Planning Meeting — each an
      `align-items-center` flex row of a **`flex: 0 0 250px`** image and a text
      block with `0 30px` padding, an **Amiri 20 px / 700 `#000`** title link
      and a grey paragraph; rows 2 and 4 image-right
- [ ] Green: `<SectionTitle />` + `<Services />` (two `lg:grid-cols-2` columns,
      alternation via order utilities reset below `lg`)
- [ ] Guard: assert the italic title treatment, honest count of four rows, the
      mint `#cae8d5` hover/focus wash on a row, image-first stacking on mobile,
      and `picsum.photos/seed/celebrant-` sources

## Marriages carousel (`Marriages`) (TDD)

- [ ] Red: asserts a centred italic title, a **mint `#cae8d5` panel** behind the
      slider, **three slides** each with a **500 px tall** full-width cover photo
      and a centred caption (small date line, **Amiri `h3`** couple name,
      paragraph), **40 px circular white prev/next buttons** and **8 px dot
      indicators** (`rgba(0,0,0,0.3)` inactive → black active)
- [ ] Green: `<Marriages />` — a small self-contained carousel (index state, no
      new dependency), three **distinct** couple entries (source repeats one
      caption three times), auto-advance ≥ 5 s
- [ ] Guard: assert real `<button>`s with accessible names for arrows and dots,
      keyboard operability (arrows + Home/End or per-dot activation), focus
      rings, no auto-advance under `prefers-reduced-motion: reduce`, and
      deterministic picsum slides

## Feature grid (`Features`) (TDD)

- [ ] Red: asserts **six white cards in a 2 × 3 grid** — Wedding Ring · Wedding
      Venue · Honeymoon · Invitation · Red Wine Tasting · Wedding Planner — each
      with a **70 × 70 px `#cae8d5` icon disc**, an **Amiri `1.5rem` / 700**
      title and a `rgba(0,0,0,0.8)` paragraph; card padding 30 px, no border and
      **no shadow**
- [ ] Green: `<Features />` with a typed card array mapping to `lucide-react`
      glyphs; **fix the source typos** ("Inivitation" → "Invitation",
      "Red Wine Tast" → "Red Wine Tasting"), drop the source's empty spacer span
- [ ] Guard: assert exactly six cards, disc colours, one heading level per card,
      decorative discs `aria-hidden`, and single-column stacking on mobile

## FAQ (`Faq`) (TDD)

- [ ] Red: asserts a centred italic title and **seven distinct question rows** in
      `1px #dee3e2` cards, each question **left-aligned, 20 px, radius 0**, black
      when open and gray when collapsed, with a chevron that rotates 180° in
      0.3 s; the **first row open on load** and its body with no top padding
- [ ] Green: `<Faq />` — single-open accordion (the source's
      `data-parent="#accordion-v1"` behaviour) built from real `<button>`s with
      `aria-expanded` + `aria-controls`, panel `role="region"` labelled by the
      question
- [ ] Guard: assert exactly seven rows with **distinct** question text, the
      first-open default, keyboard toggling, no focus loss on toggle, and the
      collapsed/open colour + chevron rotation classes

## Footer (`Footer`) (TDD)

- [ ] Red: asserts a flat **`#333333`** band with an **Amiri white "About Us"**
      heading + `#737373` paragraph, a **"Quick Links"** list (About Us ·
      Services · Testimonials · Contact Us, `#999999`, hover white), a
      **"Subscribe Newsletter"** block (labelled email input, `Enter Email`
      placeholder, **mint `#cae8d5` "Send" pill with a black label**, radius
      30 px), **"Follow Us"** with four named social links, a `#edf0f5`
      hairline, and a centred `#737373` copyright line with a heart glyph plus
      **exactly one** `https://www.componentdock.com/` link branded
      "Component Dock" (new tab, `rel="noreferrer"`) and the computed current
      year
- [ ] Green: `<Footer />` (the source's licence line credits ColorLib — the
      Component Dock link is the required repo replacement per AGENTS.md rule 5)
- [ ] Guard: assert the newsletter validation/confirmation happens locally with
      no external POST, per-field error without clearing input, the four social
      links' accessible names, the current year, and **zero** ColorLib strings

## Page shell

- [ ] Red: asserts banner / main / contentinfo landmarks and the document title
      "Celebrant — Wedding Officiant Template"
- [ ] Green: `<App>` composing Header + hero + services + marriages + features +
      FAQ + Footer (section order 1:1 with the source)
- [ ] Guard: assert one `<h1>` (the header wordmark) and an ordered heading
      outline (h2 per section, h3 per card/slide)

## Quality gates

- [ ] `scripts/verify-app.sh celebrant` green (typecheck + lint + knip + fallow
      + vitest **100 %** lines/functions/branches/statements + build)
- [ ] `npm run spec:validate` green
- [ ] Grep the app for `colorlib`, `Colorlib`, `wedding-officiant`,
      `Wedding Officiant`, `Joshua`, `Selene`, `July 20th, 2019`,
      `Marriages I Officiate`, `Inivitation`, `Red Wine Tast` → **zero** hits
      (comments included)
- [ ] No copied assets: no `css/style.css`, no Bootstrap/jQuery/owl.carousel /
      AOS / fancybox / jquery.sticky bundles, no `hero_1–4.jpg` / `img_1–4.jpg`,
      no icomoon or flaticon icon fonts, no `weddingofficiant-*` files
- [ ] PR description lists: source template + slug, preview URL (**note the
      hyphenated slug 404s; the demo is `…/theme/weddingofficiant/`**), design
      tokens used (mint `#cae8d5`, link `#95d1ab`, hover `#343a40`, CTA
      `#6c757d`, ink `#000` / `rgba(0,0,0,0.5)`, body `#808080`, card copy
      `rgba(0,0,0,0.8)`, FAQ border `#dee3e2`, divider `#edf0f5`, footer
      `#333333` / `#737373` / `#999999`, dot `rgba(0,0,0,0.3)`, radii 30 px +
      50 % circles, Amiri + Quicksand) and every delta (own name/brand/couple
      copy, typo fixes, three distinct carousel entries, picsum photography,
      lucide icons, accessible accordion + carousel, Component Dock footer link)
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Wedding Officiant` item
      `[x]` with the live `https://celebrant.free.componentdock.com` URL +
      homepage and run `npm run readme:status`
