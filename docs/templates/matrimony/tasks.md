# Matrimony — implementation tasks

Recreation of ColorLib **"Wed"** (source slug `wed`, TEMPLATES.md line 3104) —
a scarlet-and-white one-page wedding site: a **white fixed header**, a
full-bleed couple-photo hero with a **left-aligned** caption, **Playfair
Display** headings over **Roboto** body text with **Barlow** for the hero
eyebrow/countdown numerals, a **`#ff2828` brand red**, and two **red
`#ff3535` damask bands** — the countdown strip (pulled up `-73px`) and the
full-bleed gift band. Section order: **header → hero → love story → wedding
info (3 cards, middle active) → countdown strip → gallery → gift band → RSVP
form card → registry logo strip → grayscale map band → dark patterned footer →
back-to-top**.

Preview: `https://preview.colorlib.com/theme/wed/` (**HTTP 200**, 32,821 B,
`<title>Wedding | Template</title>`). Stylesheet `assets/css/style.css`
(**HTTP 200**, 57,398 B, sha256
`4f9429265f14e36dc089c39593d8180abf3128fadaf7405d29fce51f929baa33`).
Screenshot `wed-free-template.jpg` (HTTP 200, **AVIF** despite the `.jpg` name,
89,139 B, 1200×946 → converted to PNG and inspected). Full research:
`docs/templates/matrimony/design-notes.md`.

Spec: `openspec/specs/template-matrimony/spec.md`. New name: **matrimony** (the
rite/state of marriage — single lowercase word, no `apps/` or spec-folder
collision; keeps the Wedding family's naming run: lensly · vows · nuptial ·
knot · wedlock · nuptials · betrothal · trousseau · paperie · affiance · troth ·
espousal · **matrimony**). Never reuse the source slug `wed`/`Wed`/`WED`, the
nav labels verbatim (`HOME ABOUT GALLERY GUESTBOOK BLOG CONTACT US`), the couple
names `Dennis & Judith`, the date line `january 23`/`April 20, 2016`, the time
`5:30 PM`, `The Mayflower Hotel`, `1127 Connecticut Avenue,NY`,
`+(123) 456 - 7890 - 456 35 W 46nd Street NY`, the flourishes' filenames, the
string `Colorlib`, or any copy verbatim.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/matrimony`
- [ ] Rename package to `@free-react-templates/matrimony`; set
      `"homepage": "https://matrimony.free.componentdock.com"`
- [ ] `public/CNAME` = `matrimony.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/matrimony`
      (`grep -c "free-react-templates/matrimony" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an
      existing app — Tailwind v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Roboto:wght@300;400;500;700&family=Barlow:wght@400;500;600;700&display=swap`
      (Playfair Display = headings/hero/card+gift titles; Roboto = body/nav/
      footer; Barlow = hero eyebrow + countdown numerals/labels). All three
      verified on Google Fonts (HTTP 200). Icons: `lucide-react` (`Menu`, `X`,
      `ChevronDown`, `Plus`, `CalendarDays`, `Clock`, `MapPin`, `Heart`,
      `ArrowUp`, `Send`)
- [ ] `@theme` tokens in `src/index.css`: `--color-brand: #ff2828`,
      `--color-brand-dark: #da1b1b` (button hover wipe),
      `--color-band-red: #ff3535` (countdown strip + gift band),
      `--color-heart: #cd0102` (footer copyright glyph/link),
      `--color-ink: #212121`, `--color-ink-card: #2e3c40`,
      `--color-muted: #636363`, `--color-band: #f9f9f9` (wedding-info floral
      band), `--color-divider: #f4f4f4`, `--color-field: #d9d9d9`,
      `--color-field-text: #a3a3a3`, `--color-nav: #3c3e48`,
      `--color-footer: #12151a`, `--color-footer-link: #cfcfcf`,
      `--color-footer-line: #26282c`, `--color-scrim: rgba(0,0,0,0.1)`;
      shadows `--shadow-card: 0 0 9px rgba(131,93,248,0.07)`,
      `--shadow-card-hover: 0 10px 30px rgba(133,66,189,0.1)`,
      `--shadow-form: 0 0 86px rgba(0,0,0,0.06)`,
      `--shadow-header: 0 10px 15px rgba(25,25,25,0.1)`;
      radii `--radius-pill: 30px`, `--radius-field: 5px`; fonts
      `--font-display: "Playfair Display", serif`,
      `--font-body: "Roboto", sans-serif`, `--font-ui: "Barlow", sans-serif`
- [ ] `src/components/` split: `Header.tsx` (white fixed bar + dropdown + mobile
      menu), `Hero.tsx`, `LoveStory.tsx`, `WeddingInfo.tsx`, `Countdown.tsx`,
      `Gallery.tsx`, `GiftBand.tsx`, `RsvpForm.tsx`, `Registry.tsx`,
      `MapBand.tsx`, `Footer.tsx`, `BackToTop.tsx`, plus `SectionHeading.tsx`
      (title + inline-SVG red flourish + subtext) and `Flourish.tsx`
      (inline-SVG ornaments: title rule, hero eyebrow mark, laurel, gallery
      corner)

## Section heading + flourish (`SectionHeading`, `Flourish`) (TDD)

- [ ] Red: `SectionHeading` asserts a centred Playfair 40 px `#212121` title, a
      red flourish divider beneath it and a muted subtext paragraph;
      `Flourish` is decorative only (`aria-hidden`, no text)
- [ ] Green: reusable heading component + inline-SVG flourish variants (no
      ColorLib image copied)

## Header (`Header`) (TDD)

- [ ] Red: asserts a **white fixed bar** (`padding: 15px 0`, shadow
      `0 10px 15px rgba(25,25,25,0.1)`) — *not* transparent over the hero —
      with the "Matrimony" wordmark + a red laurel mark at the left and six
      uppercase links (`#3c3e48`, hover `#ff2828`): Home, About, Gallery,
      Guestbook, Blog, Contact Us
- [ ] Green: `<Header>` with anchors (`#home`, `#story`, `#gallery`, `#rsvp`,
      `#contact`); the BLOG entry is a keyboard-operable dropdown
      (Blog · Blog Details · Element → `#story`, `#registry`, `#rsvp`), a
      mobile menu below the desktop breakpoint
- [ ] Guard: `aria-expanded` on both toggles, `Escape` closes, no `href="#"`
      dead anchors, focus rings on every link

## Hero (`Hero`) (TDD)

- [ ] Red: asserts a full-bleed photo (980 px tall on desktop) under a
      `rgba(0,0,0,0.1)` scrim with a **left-aligned** caption: a Barlow 22 px
      uppercase white eyebrow (`letter-spacing: 0.3em`) preceded by a red
      flourish mark, Playfair ~99 px white couple names with a laurel flourish
      between them, and a small uppercase letterspaced white line beneath
- [ ] Green: `<Hero>` with our own couple names/tagline; placeholder
      `picsum.photos/seed/matrimony-1/1920/1080`; the source's two-slide
      owl-carousel becomes a single static slide
- [ ] Guard: assert the eyebrow mark and laurel are `aria-hidden` inline SVG,
      the caption stays legible over the photo, and entrance animations are off
      under `prefers-reduced-motion`

## Love Story (`LoveStory`) (TDD)

- [ ] Red: asserts a white band with a centred Playfair 40 px `#212121` "Our
      Love Story" title + red flourish divider + grey paragraph, then two
      columns — a **red damask panel** (Playfair 30 px white sub-heading + two
      white paragraphs, text column inset ~150 px) and a photo offset
      `bottom: -51px; left: -30px`
- [ ] Green: `<LoveStory>` with our own story copy; placeholders
      `picsum.photos/seed/matrimony-<2..3>/900/1100`
- [ ] Guard: assert the photo offset resets on small screens, the columns stack,
      and no horizontal overflow appears at 320 px

## Wedding Info (`WeddingInfo`) (TDD)

- [ ] Red: asserts a near-white `#f9f9f9` band (`padding: 195px 0 170px`) with a
      centred title + flourish + subtext and **three white cards**
      (Ceremony / Reception / Party): icon + Playfair 25 px `#2e3c40` title over
      a `2px solid #f4f4f4` rule, icon rows (date, time, venue, address), a red
      "Check out the map" link and a red pill **GET STARTED**; one card renders
      **active** (`1px solid #ff2828`, `padding-bottom: 70px`, button visible),
      the others reveal the border + button (and
      `0 10px 30px rgba(133,66,189,0.1)`) on hover/focus
- [ ] Green: `<WeddingInfo>` with our own event strings and card copy
- [ ] Guard: assert three cards, exactly one active by default, hover/focus
      parity for keyboard users, and every link/button focus-visible

## Countdown (`Countdown`) (TDD)

- [ ] Red: asserts a red `#ff3535` patterned strip pulled up `-73px` with four
      counters in the source's 3-2-2-3 column run (days · hours · mins · secs),
      Barlow 36 px white uppercase numerals over 18 px uppercase white labels
- [ ] Green: `<Countdown>` counting live to a configured wedding date, updating
      once per second, interval cleaned up on unmount, zero-padded values
- [ ] Guard: assert interval cleanup, no layout shift between ticks, accessible
      text (`aria-label="23 days"`), `aria-live` off (no per-second chatter)

## Gallery (`Gallery`) (TDD)

- [ ] Red: asserts a heading-less white band with four **565 px** tiles in a
      `4 / 8 / 8 / 4` column layout where hover/focus reveals a red wash, a
      white 24 px caption ("image 01"–"image 04") and a **circular 2 px
      white-bordered plus button**
- [ ] Green: `<Gallery>` using `picsum.photos/seed/matrimony-<4..7>/1200/1400`;
      the plus affordance opens a `<dialog>`-based lightbox (**no new
      dependency**; the source used magnific-popup)
- [ ] Guard: assert the 4/8/8/4 arrangement, single column on mobile, overlay on
      hover *and* focus, keyboard-operable lightbox with a labelled close control

## Gift band (`GiftBand`) (TDD)

- [ ] Red: asserts a full-bleed red `#ff3535` patterned band
      (`padding: 120px 0 130px`) with a centred Playfair 70 px white heading, a
      white subtitle and a **white pill button** (radius 30 px, `#362d2b`
      uppercase label) reading "Reserve your seat"
- [ ] Green: `<GiftBand>` (the source label "resarve your Seat" is a typo — do
      not reproduce it); the button anchors to the RSVP section
- [ ] Guard: assert the pill's contrast, focus ring and label; assert no copied
      damask image (CSS/SVG pattern only)

## RSVP form (`RsvpForm`) (TDD)

- [ ] Red: asserts a white card (`padding: 125px 70px 115px`, shadow
      `0 0 86px rgba(0,0,0,0.06)`) with a subtle decorative frame, a centred
      ~30 px "Are you attending?" title + red flourish, then a **Name** input,
      an **Email** input, a **Guest** select (1–4 guests, radius 5 px,
      `1px solid #d9d9d9`, `#a3a3a3` value text, chevron affordance), a message
      textarea and a red pill **CONFIRM NOW** submit
- [ ] Green: `<RsvpForm>` with controlled inputs, a real keyboard-accessible
      `<select>` styled to the nice-select look, `preventDefault` submit and a
      local confirmation in a live region (the source posts nowhere —
      `action="#"`)
- [ ] Guard: assert every field has an associated `<label>` (`htmlFor`/`id`),
      required-field validation with per-field errors, values preserved on
      invalid submit, no navigation/POST, no external endpoint

## Registry (`Registry`) (TDD)

- [ ] Red: asserts a white band (`padding-bottom: 150px`) with a centred
      "Registry Gift" title + red flourish + grey paragraph, then **six**
      ~170 px neutral placeholder cards (light border) — never the source's
      logos
- [ ] Green: `<Registry>` with six inline-SVG monogram/abstract marks (or seeded
      picsum tiles); a CSS scroll-snap strip (**no slick/owl dependency**)
      reflowing from one row of six on desktop to a scrollable row on mobile
- [ ] Guard: assert six cards, no external logo asset, keyboard-scrollable
      strip, decorative marks `aria-hidden`

## Map band (`MapBand`) (TDD)

- [ ] Red: asserts a ~235 px band with a **keyless** map embed (OpenStreetMap),
      a light `grayscale` filter and an accessible name
- [ ] Green: `<MapBand>` with an OSM `output=embed` iframe (or a static
      styled placeholder if the embed is undesirable), no Google API key, no
      Google script
- [ ] Guard: assert the src contains no API key, the iframe has a `title`, and
      it is `loading="lazy"`

## Footer (`Footer`) (TDD)

- [ ] Red: asserts a near-black `#12151a` patterned band
      (`padding: 135px 0 74px`) with the white Matrimony wordmark and three
      columns — **WEDDING INFO** / **ABOUT US** / **LOCATION** — with Roboto
      18 px uppercase white headings and 14 px capitalize `#cfcfcf` links, a
      `1px solid #26282c` hairline, then a centred 16 px `#cfcfcf` copyright
      line with a red heart glyph and **exactly one**
      `https://www.componentdock.com/` link branded "Component Dock" (new tab,
      `rel="noreferrer"`) plus the computed current year
- [ ] Green: `<Footer />` (the source's licence line credits Colorlib — the
      Component Dock link is the required repo replacement per AGENTS.md rule 5)
- [ ] Guard: assert the three columns, the current year, the single Component
      Dock link and **zero** ColorLib strings

## Back-to-top (`BackToTop`) (TDD)

- [ ] Red: asserts a **red circular** up-arrow control pinned bottom-right that
      appears after the hero and scrolls to the top
- [ ] Green: `<BackToTop>` with a `scrollY` listener (cleaned up), smooth scroll
      (instant under `prefers-reduced-motion`)
- [ ] Guard: assert the listener cleanup, the accessible name, the focus ring and
      the instant-scroll branch

## Page shell

- [ ] Red: asserts banner / main / contentinfo landmarks and the document title
      "Matrimony — Wedding Template"
- [ ] Green: `<App>` composing Header + hero + love story + wedding info +
      countdown + gallery + gift + RSVP + registry + map + Footer (section order
      1:1 with the source)
- [ ] Guard: assert one `<h1>` (the hero couple names) and an ordered heading
      outline

## Quality gates

- [ ] `scripts/verify-app.sh matrimony` green (typecheck + lint + knip + fallow
      + vitest **100 %** lines/functions/branches/statements + build)
- [ ] `npm run spec:validate` green
- [ ] Grep the app for `colorlib`, `Colorlib`, `wed`, `Wed`/`WED` (as a
      wordmark/name), `Dennis`, `Judith`, `january 23`, `April 20, 2016`,
      `5:30 PM`, `The Mayflower Hotel`, `1127 Connecticut Avenue`,
      `+(123) 456 - 7890`, `resarve` → **zero** hits (comments included)
- [ ] No copied assets: no `style.css`, no Bootstrap/jQuery/owl.carousel /
      slick / magnific-popup / animate / nice-select bundles, no
      `section_bg1–4.png` / `story1.jpg` / `story2.jpg` / `gallery1–4.png` /
      `tittle_img*.png` / `hero_shape*.png` / `shape1.png` / `brand1–6.jpg` /
      `logo*.png` / flaticon or themify icon fonts, no Google Maps API key
- [ ] PR description lists: source template + slug, preview URL, design tokens
      used (brand `#ff2828`, hover `#da1b1b`, band `#ff3535`, footer band
      `#12151a`, footer link `#cfcfcf`, ink `#212121`/`#2e3c40`/`#636363`, band
      `#f9f9f9`, divider `#f4f4f4`, field `#d9d9d9`/`#a3a3a3`, scrim
      `rgba(0,0,0,0.1)`, radii 30 px / 5 px, shadows card/form/header) and every
      delta (own name/brand/couple/event copy, "Reserve your seat" typo fix,
      picsum photography, SVG flourishes, keyless OSM map, Component Dock footer
      link, accessible dropdown/select/lightbox, back-to-top)
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Wed` item `[x]` with the
      live `https://matrimony.free.componentdock.com` URL + homepage and run
      `npm run readme:status`
