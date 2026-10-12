# Trousseau — implementation tasks

Recreation of ColorLib **"Honey"** (source slug `honey`) — a bright single-page
wedding site on a **white canvas** with a hot **pink accent `#ff2f92`** and white
**ornate flourish ornaments**. Header is one slim row (logo + wordmark left,
uppercase 12px nav with a Pages dropdown + a search icon, active link pink). The
hero is a full-bleed couple photo with centred copy — a small white uppercase
"THE WEDDING OF" over the couple names in **pink display serif**, bracketed by
white flourish ornaments. Section order: **header → hero → story → timer →
journey → moments → reservation → arrangement → gift-registry → footer**. The
timer band is a background photo with a **translucent white panel**
(`rgba(255,255,255,0.3)`) holding a four-cell countdown; the story band is a
three-column row (framed photo · centred text + pink button · framed photo);
cards use **`0px 10px 30px 0px rgba(153,153,153,0.1)`** and everything is
**square (no border-radius)**. Fonts: headings **"Playfair Display", serif**,
body **"Roboto", sans-serif**.
Preview: `https://preview.colorlib.com/theme/honey/` (**HTTP 200**, 22,117 B,
`<title>Honey Wedding Multi</title>`); stylesheet
`https://preview.colorlib.com/theme/honey/css/style.css` (**HTTP 200**, 66,582 B
— `h1..h6` Playfair Display 600, body Roboto, `.main_btn` pink square,
`.timer_inner .timer` translucent panel, `.res_form_inner` max-width 555px).
Screenshot `honey-free-template.jpg` (HTTP 200, served **AVIF** despite the
`.jpg` name, 96,550 B, 1200×946 → converted to PNG and inspected): white page,
slim header with a centred uppercase nav, photo hero with a white flourish
ornament above and below "James & Julie" set in **pink**, then the
"Cordially Invited" three-column story band with a **square pink "VIEW OUR
STORY" button**.

Spec: `openspec/specs/template-trousseau/spec.md`. New name: **trousseau** (the
bridal trousseau — keeps the Wedding family's naming run: lensly · vows ·
nuptial · knot · wedlock · nuptials · betrothal · **trousseau**). Never reuse the
source slug `honey`, the name "Honey"/"Honey wedding", the source's nav labels
(`Home`/`Our Story`/`Accomodation`/`Gallery`/`Pages`/`Bridesmaid`/`Groomsmen`/
`Elements`/`Blog`/`Contact`), the couple names `James & Julie` / `Travor james`
/ `Julia Robberts`, the venue `Santa Monica Rocky Beach`, the date `On the 13th
of may, 2018` / `Friday, 20 May 2018`, the journey names `Abbie Norman`/`Bess
Wolfe`/`Mathilda Moss`/`Blake Hunter`/`Norman Ramsey`/`Tommy Phillips`, the
journey card titles `Love at first sight`/`First Kissing`/`Living Together`/
`Cherished Proposal`, the string `Colorlib`, or any copy verbatim.
Design notes: `docs/templates/trousseau/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/trousseau`
- [ ] Rename package to `@free-react-templates/trousseau`; set
      `"homepage": "https://trousseau.free.componentdock.com"`
- [ ] `public/CNAME` = `trousseau.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/trousseau`
      (`grep -c "free-react-templates/trousseau" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an
      existing app — Tailwind v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Roboto:wght@300;400;500;700&display=swap`
      (Playfair Display = headings/display, Roboto = body/UI). Icons:
      `lucide-react` (`Heart`, `Menu`, `X`, `Search`, `ChevronDown`, `Expand`,
      `Clock`, `MapPin`, `Calendar`, `Gift`, plus social glyphs)
- [ ] `@theme` tokens in `src/index.css`: `--color-brand: #ff2f92`
      (hero names, active nav, buttons, links), `--color-ink: #222222`,
      `--color-muted: #777777`, `--color-placeholder: #999999`,
      `--color-soft: #f9f9ff` (footer band), `--color-line: #eeeeee`,
      `--color-line-2: #cccccc`, `--color-card-shadow: rgba(153, 153, 153, 0.1)`,
      `--color-timer-panel: rgba(255, 255, 255, 0.3)`; fonts
      `--font-display: "Playfair Display", serif` and
      `--font-body: "Roboto", sans-serif`; **no radii tokens** (everything
      square)
- [ ] `src/components/` split: `Header.tsx` (logo + uppercase nav + dropdown +
      search), `Hero.tsx`, `Story.tsx`, `Timer.tsx`, `Journey.tsx`,
      `Moments.tsx`, `Reservation.tsx`, `Arrangement.tsx`, `GiftRegistry.tsx`,
      `Footer.tsx`, plus `SectionTitle.tsx` (centred H2 + intro) and
      `Ornament.tsx` (the decorative white flourish, `aria-hidden`)

## Shared SectionTitle + ornament (`SectionTitle`, `Ornament`) (TDD)

- [ ] Red: `SectionTitle` asserts a centred display-serif H2 (`--font-display`,
      36px, `#222222`) over a light muted intro paragraph (`#777777`); the
      `Ornament` is decorative only (`aria-hidden`, no text)
- [ ] Green: `<SectionTitle heading intro />` and `<Ornament variant />` as a
      small inline SVG flourish (used by the hero, the journey card corners and
      the reservation card sides)

## Header (`Header`) (TDD)

- [ ] Red: header asserts a slim row — logo mark + wordmark "Trousseau" left; a
      12px uppercase nav (Home, Our Story, Accomodation, Gallery, Pages ▾
      [Bridesmaid, Groomsmen, Elements], Blog, Contact) + a search toggle;
      active link asserts colour **`#ff2f92`**
- [ ] Green: `<Header>` with a keyboard-operable dropdown + search control;
      the header stays in flow over the hero (`position:absolute`) and scrolls
      away — **no** sticky/fixed bar (the source's `navbarFixed()` is commented
      out, so its `navbar_fixed` shadow rule never fires; verified live)
- [ ] Guard: assert `aria-expanded` on the dropdown/mobile toggle and a mobile
      collapse at small widths; assert **no** `href="#"` dead anchors

## Hero (`Hero`) (TDD)

- [ ] Red: hero asserts a full-bleed photo band with a dark scrim, centred
      **white** copy — a 14px uppercase letter-spaced "The Wedding of" line over
      the couple names in a **48px display serif coloured pink `#ff2f92`** —
      bracketed by a white flourish ornament above and below (`aria-hidden`)
- [ ] Green: `<Hero>` using `https://picsum.photos/seed/trousseau-1/1920/1080`
      (placeholder — a delta, no ColorLib asset copied) under a dark overlay;
      the photo layer drifts against the scroll via a scroll-linked transform
      (`translateY ≈ scroll/2`, reproducing the source's
      `$('.bg-parallax').parallax()`), **off** under
      `prefers-reduced-motion: reduce` — no new dependency
- [ ] Guard: assert the names are pink `#ff2f92`, the ornaments are decorative,
      and white copy over the scrim is legible; assert the parallax transform is
      absent when reduced motion is preferred

## Story (`Story`) (TDD)

- [ ] Red: asserts a three-column band — framed photo · centred `story_text`
      (`h3` "Cordially Invited" 36px display serif `#222222`, a small muted
      14px/24px line with the date + couple names + venue, and a **square**
      (`border-radius:0`) pink `main_btn` "View Our Story") · framed photo
- [ ] Green: `<Story>` — three-column layout; placeholders
      `picsum.photos/seed/trousseau-2/700/900` (left) and
      `seed/trousseau-3/700/900` (right), each with a decorative ornate frame
- [ ] Guard: assert the button is square and pink, and the frame overlay is
      `aria-hidden`

## Timer (`Timer`) (TDD)

- [ ] Red: asserts a background-photo band with **white** type — an `h5`
      "Until we getting married" (36px display bold), a **translucent white
      panel** (`rgba(255,255,255,0.3)`, max-width 560px) holding **four cells**
      (flex 25%) — days, hours, Minutes, seconds — each a 36px display-serif
      italic number over a 14px Roboto label, and a "are remaining" line beneath
- [ ] Green: `<Timer>` with a static (or `setInterval`-ticked) target date; the
      panel background is the translucent token
- [ ] Guard: assert the four labels exist, the panel uses
      `rgba(255,255,255,0.3)`, and the widget is accessible

## Journey (`Journey`) (TDD)

- [ ] Red: asserts `SectionTitle` "Our Love Journey" + intro; then a row of
      **three circular photos** (each an `h4` name + a small muted role line),
      **four bordered soft-shadowed text cards** (`padding:45px 90px`, shadow
      `0px 10px 30px 0px rgba(153,153,153,0.1)`, each an `h4` title + a blurb,
      with a corner flourish on alternating cards), then a **second row of three
      circular photos**
- [ ] Green: `<Journey>` — circles via `rounded-full`, own names/roles/card
      titles + blurbs; placeholders
      `picsum.photos/seed/trousseau-<10..15>/400/400`
- [ ] Guard: assert six circles total in two rows of three, four cards each with
      a title + blurb, and the corner flourish is `aria-hidden`

## Moments gallery (`Moments`) (TDD)

- [ ] Red: asserts `SectionTitle` "Special Moments Captured" + intro, then a
      **six-across grid** (`flex: 0 0 16.66%`, 3px gutters, edge-to-edge bleed)
      of six images, each with a dark hover overlay + an expand affordance
- [ ] Green: `<Moments>` using `picsum.photos/seed/trousseau-<4..9>/600/600`;
      the expand affordance opens a `<dialog>`-based lightbox (no lightbox
      dependency)
- [ ] Guard: assert exactly six images, the 3px gutters, a hover overlay, and
      that the lightbox is keyboard-operable with a labelled close control

## Reservation (`Reservation`) (TDD)

- [ ] Red: asserts a centred white card (max-width 555px, `padding:75px 50px`,
      shadow `0px 10px 30px 0px rgba(153,153,153,0.1)`) with `SectionTitle`
      "Reservation Form" + paragraph, then a **Name** text field, an **Email
      address** field, a **Meal Preferences** select (3 options), a **Number of
      guests** select (3 options) and a **square pink "Confirm Now"** submit
      button; all fields `border:1px solid #eeeeee; border-radius:0`
- [ ] Green: `<Reservation>` with controlled inputs/selects and a
      `preventDefault` submit (no external service)
- [ ] Guard: assert labels are associated with fields (`htmlFor`/`id`), the
      submit does not navigate, required-field validation is present, and the
      decorative side flourishes are `aria-hidden`

## Arrangement (`Arrangement`) (TDD)

- [ ] Red: asserts `SectionTitle` "Arrengement in progress" (the source's own
      typo, kept verbatim per the spec) + intro, then
      **four white cards** (shadow `0px 10px 30px 0px rgba(153,153,153,0.1)`) —
      each a photo, an `h4` title (18px display bold, hovers pink), a blurb, and
      a **Date / Time / Address** block
- [ ] Green: `<Arrangement>` with own titles/times/addresses (no source copy);
      placeholders `picsum.photos/seed/trousseau-<16..19>/640/420`
- [ ] Guard: assert four cards, each with a title, a blurb, and Date, Time and
      Address lines

## Gift Registry (`GiftRegistry`) (TDD)

- [ ] Red: asserts `SectionTitle` "Gift Registry" + intro, then a row of **five
      registry marks** rendered muted (`opacity:.5`) that reach full opacity on
      hover
- [ ] Green: `<GiftRegistry>` — a static/wrapping flex row (or CSS scroll-snap)
      of five neutral monochrome marks (own designs; **avoid adding a carousel
      dependency** — AGENTS.md rule 6)
- [ ] Guard: assert five marks, the muted default and the hover opacity, and
      that the row does not break keyboard access

## Footer (`Footer`) (TDD)

- [ ] Red: asserts a centred `#f9f9ff` band — a logo mark, a `f_menu` row
      (Home, Our Story, Accomodation, Gallery, Pages, Blog, Contact, 12px
      uppercase, hover pink), a small social row, a copyright bar with the
      **computed current year**, and exactly one `https://www.componentdock.com/`
      link branded "Component Dock" (new tab, `rel="noreferrer"`)
- [ ] Green: `<Footer />` (the source footer is a logo + menu + social + credit;
      the Component Dock link is a required repo addition)

## Quality gates

- [ ] `scripts/verify-app.sh trousseau` green (typecheck + lint + knip + fallow
      + vitest **100 %** lines/functions/branches/statements + build)
- [ ] `npm run spec:validate` green
- [ ] Grep the app for `colorlib`, `Colorlib`, `honey`, "Honey", the source's
      nav labels, the couple names `James`/`Julie`/`Travor`/`Robberts`, the
      venue `Santa Monica`, the journey names (`Abbie`/`Wolfe`/`Mathilda`/
      `Blake`/`Ramsey`/`Phillips`) and the card titles (`Love at first sight`,
      `First Kissing`, `Living Together`, `Cherished Proposal`) → **zero** hits
      (comments included)
- [ ] No copied assets: no `style.css`, no `bootstrap.css`, no
      `owl.carousel`/`nice-select`/`simpleLightbox`/`animate.css` CSS/JS files,
      no `home-banner.jpg` / `timer-bg.png` / `timer-shap-*.png` /
      `story-1.jpg` / `story-2.jpg` / `contact-shap-*.png` /
      `journey-shap-*.jpg` / `c-logo-*.png`, no jQuery
- [ ] PR description lists: source template + slug, preview URL, design tokens
      used (brand `#ff2f92`, ink `#222222`, muted `#777777`, soft `#f9f9ff`,
      borders `#eeeeee`/`#cccccc`, card shadow `rgba(153,153,153,0.1)`, timer
      panel `rgba(255,255,255,0.3)`, square everything, fonts Playfair Display +
      Roboto), and every delta (own name/brand/couple/copy, placeholder
      photography, SVG ornaments, Component Dock footer link, accessible
      dropdowns/labels)
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Honey` item `[x]` with
      the live `https://trousseau.free.componentdock.com` URL + homepage and run
      `npm run readme:status`
