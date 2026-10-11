# Template: Premiere (Coming Soon)

## Purpose

Premiere is a coming-soon / launch page in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Coming Soon 2"
template (source slug `comingsoon_02` — a single centred column over a
full-bleed cross-fading photo slideshow: white uppercase headline, a one-line
sub-line, a row of four translucent countdown circles, and a pill email input
plus a purple pill Subscribe button), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source:** https://colorlib.com/wp/template/comingsoon_02/
  (page title "Coming Soon V02 - Free Full-Screen Website Template 2026",
  HTTP 200, 109,311 B, verified 2026-10-11)
- **Preview:** https://preview.colorlib.com/theme/comingsoon_02/ returns
  **HTTP 404** (9 B, `text/plain`, verified 2026-10-11). The ColorLib template
  page exposes only the anchor preview `https://preview.colorlib.com/#comingsoon_02`
  and a downloadable source zip
  (`https://preview.colorlib.com/downloads/free/comingsoon_02.zip`, HTTP 200,
  647,366 B, `application/zip`, 19 entries). Replication therefore used that
  official source zip (`index.html` + `css/style.css` + `js/snippet.js`) as the
  DOM/CSS/behaviour reference, plus the TEMPLATES.md screenshot.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-2.jpg
  (served as AVIF, 1200×972; reviewed visually 2026-10-11)
- **New name:** `premiere` (apps/premiere, `@free-react-templates/premiere`) —
  the source demo brand "Coming Soon 2" / "Coming Soon V02" is never reused
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

The reference is a single full-viewport screen, not a scrolling site. A fixed
full-bleed photograph sits behind the entire viewport and cross-fades between
three photos every 7 s; above it a `rgba(0,0,0,0.8)` overlay dims the photo.
Centred vertically and horizontally is one column: the uppercase white
headline "Coming Soon" (Poppins-Bold 50px), a white Lato-Light 25px sub-line
("Our website is under construction, follow us for update now!"), a wrapping
row of four 155px circles (1px `rgba(255,255,255,0.3)` border, radius 50%)
each holding a large white number over a small uppercase purple label
(Days / Hours / Minutes / Seconds), then a form: a 500px white pill input
(height 70px, radius 35px, purple Lato-Bold text, `#999999` placeholder
"Enter Email Address") beside a purple `#846add` pill "Subscribe" button
(min-width 160px, height 70px, radius 35px, white uppercase label) that
darkens to `#5d43b5` on hover.

The whole design is one purple accent (`#846add`) over a dark photo: the
Subscribe fill, the countdown labels, and the input text. Everything else is
white on the dimmed photo — headline, sub-line, countdown numbers (all `#fff`)
— with `#999999` placeholders and the `#c80000` validation bubble.

> **Provenance note:** this spec was first prepped as commit `e88e31f7f`
> ("docs: prep Premiere (ColorLib Comingsoon_02)") and then accidentally
> deleted, together with its `docs/templates/premiere/` notes, by the Skybound
> bookkeeping commit `ba3eb40f9` ("point skybound checklist/README link at the
> live deploy domain"). This run re-prepped the same item under the same
> established name (`premiere`) so the prepped-spec stock stayed complete; the
> replication findings below were re-verified against the live references.

## Design reference (replication findings)

- **Original:** ColorLib "Coming Soon 2" (source:
  https://colorlib.com/wp/template/comingsoon_02/). Listed in TEMPLATES.md
  `## Uncategorized (15)` at line 3033; the slug appears exactly once (no
  duplicate `- [x]` line). No implementation exists for this item
  (`apps/premiere` absent, TEMPLATES.md line 3033 still `- [x]`).
- **Preview URL:** https://preview.colorlib.com/theme/comingsoon_02/ →
  **HTTP 404** (verified 2026-10-11). Fallback (documented): the official
  source zip `https://preview.colorlib.com/downloads/free/comingsoon_02.zip`
  (HTTP 200, 647,366 B) was downloaded and extracted to
  `/tmp/prep/src02/comingsoon_02/` (`index.html`, 2,232 B; `css/style.css`,
  10,186 B; `js/snippet.js`, 4,003 B; `README.md`, 1,260 B; plus
  `images/bg01.jpg`, `images/bg02.jpg`, `images/bg03.jpg` and the `fonts/`
  woff2 set). Reference artifacts: `/tmp/prep/comingsoon_02.zip`,
  `/tmp/prep/src02/`, `/tmp/prep/shot2.png` (converted screenshot).
  Research date: 2026-10-11. The source HTML/CSS/JS is authoritative for
  section structure, copy, tokens, and behaviour.
- **Screenshot:** `coming-soon-2.jpg` (reviewed visually 2026-10-11) confirms
  the layout: a full-bleed dark photograph of a speckled aloe/agave plant
  under a heavy black wash; centred near the top third the bold uppercase
  white headline "COMING SOON"; directly under it the pale sub-line "Our
  website is under construction, follow us for update now!"; below that a
  single horizontal row of four thin translucent white circles with large
  white numbers ("35", "17", "59", "58") and small purple uppercase labels
  (DAYS / HOURS / MINUTES / SECONDS); at the bottom of the column a white
  pill input reading "Enter Email Address" with a purple pill button reading
  "SUBSCRIBE" to its right. No logo, no navigation, no footer band.
- **Stylesheets in the reference:** a single `css/style.css` (no framework,
  no jQuery, no CDN — the snippet is self-contained: it carries a small
  Bootstrap-4-style reboot and its own namespaced utility classes). The
  recreation uses Tailwind 4 (which resets itself) + React state; the reboot
  and all source class names are NEVER copied.
- **Key theme rules (verified in `css/style.css`):**
  - Brand purple `#846add`: `.how-btn1{background-color:#846add}` (Subscribe
    button), `.s2-txt1{color:#846add}` (countdown labels) and
    `.s2-txt2{color:#846add}` (input text); hover darken
    `.how-btn1:hover{background-color:#5d43b5}`
  - Focus glow: `.focus-input100{color:rgba(132,106,221,0.5)}` +
    `.input100:focus + .focus-input100{animation:anim-shadow .5s
ease-in-out forwards}` where `anim-shadow{to{box-shadow:0 0 80px 30px;
opacity:0}}` — radius 35px, full-size, `z-index:-1`
  - Overlay: `.overlay1::before{background-color:rgba(0,0,0,0.8)}`
    (100% × 100%, `z-index:-1`)
  - Layout: `.size1{width:100%;min-height:100vh}` (page + column);
    `.simpleslide100{position:fixed;top:0;left:0;width:100%;height:100%;
z-index:0}` with `.simpleslide100-item{position:absolute;width:100%;
height:100%}` and `.bg-img1{background-position:center;
background-repeat:no-repeat;background-size:cover}`;
    `.where1{margin:0 5px 20px 5px}` (form row spacing)
  - Countdown circle: `.size2{width:155px;height:155px}` +
    `.bor1{border:1px solid rgba(255,255,255,0.3);border-radius:50%}`;
    cells are `.flex-col-c-m` (column, centred) with 15px side margins
  - Countdown number: `.l2-txt1{font-family:Lato-Bold;font-size:40px;
line-height:1;color:#fff}`; label `.s2-txt1{font-family:Lato-Regular;
font-size:12px;line-height:1;color:#846add;text-transform:uppercase}`
  - Headline: `.l1-txt1{font-family:Poppins-Bold;font-size:50px;
line-height:1.1;color:#fff;text-transform:uppercase}`
  - Sub-line: `.m2-txt1{font-family:Lato-Light;font-size:25px;
line-height:1.2;color:#fff}`
  - Input: `.wrap-input100{position:relative;width:500px;
max-width:calc(100% - 10px);z-index:1}` +
    `.input100{display:block;width:100%;background:#fff;height:70px;
border-radius:35px;padding:0 40px}`; text `.s2-txt2` Lato-Bold 15px/1.4
    `#846add`; placeholder `.placeholder0` `#999999`
  - Button: `.size3{min-width:160px;height:70px}` +
    `.how-btn1{border-radius:35px;background-color:#846add;padding:0 20px}` +
    label `.s2-txt3{font-family:Lato-Bold;font-size:15px;line-height:1.4;
color:#fff;text-transform:uppercase}` + `.trans-04{transition:all .4s}`
  - Spacing rhythm: `.p-t-50/.p-b-50` (column padding), `.p-b-25` (headline),
    `.p-b-48` (sub-line), `.p-b-33` (countdown row), `.p-b-9` (number),
    `.m-l-15/.m-r-15/.m-b-20` (countdown cells), `.p-l-15/.p-r-15` (column)
  - Validation bubble: `.alert-validate::before{content:attr(data-validate);
background-color:#fff;border:1px solid #c80000;border-radius:16px;
padding:5px 30px 6px 10px;right:12px;max-width:70%;font-family:Lato-Bold;
color:#c80000;font-size:15px;line-height:1.4;transition:opacity .4s}` +
    `::after{content:"\f06a";font-family:FontAwesome;color:#c80000;
font-size:20px;right:18px}` (shown on hover, and always ≤992px) —
    recreation uses a lucide-react `AlertCircle` instead
  - Fonts (source, self-hosted `@font-face` woff2): Poppins-Bold (headline)
    and Lato-Light / Lato-Regular / Lato-Bold (sub-line, numbers, labels,
    input, button) — recreation loads Poppins + Lato from Google Fonts via
    `<link>` in `index.html`
- **Content map (source DOM):** `.simpleslide100` (fixed background layer)
  with three `.simpleslide100-item.bg-img1` children carrying inline
  `background-image` (`images/bg01.jpg` visible, `bg02.jpg` / `bg03.jpg`
  `display:none`) → `.size1.overlay1` (the screen; `::before` dark overlay)
  → `.size1.flex-col-c-m.p-l-15.p-r-15.p-t-50.p-b-50` (centred column)
  containing `h3.l1-txt1.txt-center.p-b-25` ("Coming Soon"),
  `p.m2-txt1.txt-center.p-b-48` ("Our website is under construction, follow
  us for update now!"), `div.flex-w.flex-c-m.cd100.p-b-33` with four
  `.flex-col-c-m.size2.bor1.m-l-15.m-r-15.m-b-20` cells — each a
  `span.l2-txt1.p-b-9.days|hours|minutes|seconds` (35 / 17 / 50 / 39) over a
  `span.s2-txt1` label (Days / Hours / Minutes / Seconds) — and
  `form.w-full.flex-w.flex-c-m.validate-form` with
  `div.wrap-input100.validate-input.where1[data-validate="Valid email is
required: ex@abc.xyz"]` (`input.input100.placeholder0.s2-txt2[type=text
name=email placeholder="Enter Email Address"]` + `span.focus-input100`)
  and `button.flex-c-m.size3.s2-txt3.how-btn1.trans-04.where1`
  ("Subscribe"). `js/snippet.js` drives three behaviours, all framework-free:
  e-mail validation on submit (bubble class toggled off on focus),
  a per-second countdown (config `{"Y":0,"M":0,"D":35,"h":18,"m":0,"s":0}`;
  a past target falls back to `now + D days + h hours`; hours/minutes/seconds
  zero-padded via `('0'+n).slice(-2)`), and a 7 s cross-fading background
  slideshow (1 s opacity transition, skipped under
  `prefers-reduced-motion: reduce`).

## Design tokens

| Token                | Value                                                                                                        | Where                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| brand purple         | `#846add`                                                                                                    | Subscribe fill, countdown labels, input text |
| brand-hover purple   | `#5d43b5`                                                                                                    | Subscribe hover background                   |
| focus glow           | `rgba(132,106,221,0.5)` → `box-shadow 0 0 80px 30px`, opacity 0, `.5s ease-in-out`                           | input focus ring animation                   |
| headline text        | `#fff`                                                                                                       | `.l1-txt1` (Poppins-Bold 50px, uppercase)    |
| sub-line text        | `#fff`                                                                                                       | `.m2-txt1` (Lato-Light 25px)                 |
| countdown number     | `#fff`                                                                                                       | `.l2-txt1` (Lato-Bold 40px)                  |
| countdown label      | `#846add`                                                                                                    | `.s2-txt1` (Lato-Regular 12px uppercase)     |
| input text           | `#846add`                                                                                                    | `.s2-txt2` (Lato-Bold 15px)                  |
| muted / placeholder  | `#999999`                                                                                                    | `.placeholder0`                              |
| button label         | `#fff`                                                                                                       | `.s2-txt3` (Lato-Bold 15px uppercase)        |
| overlay              | `rgba(0,0,0,0.8)`                                                                                            | full-screen darkening over the photo         |
| error red            | `#c80000`                                                                                                    | validation bubble border/text/icon           |
| base body text       | `#666666` (over `#212529` reboot)                                                                            | page text                                    |
| fonts                | Poppins-Bold + Lato-Light/Regular/Bold (source: self-hosted woff2)                                           | headline / body                              |
| radii                | 35px (input, button), 50% (countdown circles), 16px (validation bubble)                                      | shapes                                       |
| input pill           | `500px` wide (`max-width: calc(100% - 10px)`), `70px` tall, `padding 0 40px`                                 | form                                         |
| button pill          | `min-width:160px`, `70px` tall, `padding 0 20px`                                                             | form                                         |
| countdown circle     | `155px`, `1px solid rgba(255,255,255,0.3)`, radius 50%                                                       | four circles                                 |
| page / column        | `min-height:100vh`, `padding 50px 15px`                                                                      | layout                                       |
| background slideshow | fixed, full viewport, 3 photos, `7 s` interval, `1 s` fade                                                   | photo layer                                  |
| transition           | `all .4s`                                                                                                    | button, focus glow                           |
| spacing rhythm       | 25px (headline), 48px (sub-line), 33px (countdown row), 9px (number), 15px/20px (cells), 5px/20px (form row) | padding/margins                              |

## Requirements

### Feature: Full-screen layout and photo background

The page is a single full-viewport screen over a fixed, cross-fading photo
slideshow, dimmed by a heavy dark overlay.

#### Scenario: Page renders as one full-height screen over a photo

- **Given** the page loads at desktop width
- **When** the layout renders
- **Then** a single column occupies `min-height:100vh` with 50px vertical and
  15px horizontal padding, centred both axes
- **And** behind it a fixed full-viewport photo layer renders (three
  deterministic placeholder photos, e.g.
  `picsum.photos/seed/premiere-bg-1|2|3`, `object-cover`, centred)
- **And** the photo layer cross-fades to the next photo every 7 s with a 1 s
  opacity transition, and does not start under
  `prefers-reduced-motion: reduce` (source behaviour)
- **And** a `rgba(0,0,0,0.8)` overlay sits between the photo and the content
- **And** there is NO navbar and NO scrolling section below the fold

### Feature: Countdown row

Four translucent circles in one wrapping row, each with a live value.

#### Scenario: Countdown renders and ticks

- **Given** the column renders
- **When** the countdown is visible
- **Then** four circles render in a centred wrapping row, each 155px with a
  `1px solid rgba(255,255,255,0.3)` border and radius 50%, with 15px side and
  20px bottom margins
- **And** each circle stacks a white Lato-Bold 40px number above an uppercase
  `#846add` Lato-Regular 12px label — Days, Hours, Minutes, Seconds
- **And** the values update once per second toward a target date, with hours,
  minutes, and seconds zero-padded to two digits (source pads
  `('0'+n).slice(-2)`; days are not padded)
- **And** when the configured target is already in the past the countdown
  runs toward `now + 35 days + 18 hours` instead, so it never reads zero of
  everything (source rule)

### Feature: Headline and sub-line

The two centred text blocks above the countdown.

#### Scenario: Copy renders with the reference typography

- **Given** the column renders
- **When** the text is visible
- **Then** the headline reads an uppercase coming-soon line (source: "Coming
  Soon") in Poppins-Bold 50px/1.1 white with 25px bottom padding
- **And** the sub-line below reads a single under-construction sentence
  (source: "Our website is under construction, follow us for update now!")
  in Lato-Light 25px/1.2 white with 48px bottom padding
- **And** the copy is the same _kind_ as the source (paraphrasable) and never
  reuses the source demo brand "Coming Soon 2" / "Coming Soon V02"

### Feature: Email form

A pill input beside a purple pill Subscribe button, with inline validation.

#### Scenario: Form renders and validates as in the reference

- **Given** the column renders
- **When** the form is visible
- **Then** a white pill input renders ("Enter Email Address" placeholder),
  500px wide capped at `calc(100% - 10px)`, 70px tall, radius 35px, 40px
  horizontal padding, `#846add` Lato-Bold 15px text, `#999999` placeholder
- **And** a purple `#846add` pill button "Subscribe" renders beside it
  (wrapping below on narrow widths), `min-width:160px`, 70px tall, radius
  35px, 20px horizontal padding, white uppercase Lato-Bold 15px label,
  darkening to `#5d43b5` on hover with a `.4s` transition
- **And** both controls sit in a wrapping centred row with `margin 0 5px 20px`
- **And** focusing the input plays the source's glow animation — a 35px-radius
  full-size shadow layer in `rgba(132,106,221,0.5)` expanding to
  `0 0 80px 30px` and fading out over `.5s ease-in-out`
- **And** submitting with an empty or malformed e-mail addresses the field
  with a white bubble (`#c80000` 1px border, radius 16px, Lato-Bold 15px
  `#c80000` text) plus a lucide `AlertCircle` warning glyph, shown on hover
  and always at ≤992px, cleared on focus; a valid submit is accepted (React
  state, no navigation)
- **And** the button keeps an accessible label and the input a
  `<label>`/`aria-label`

### Feature: Design tokens & typography

The recreation exposes the reference palette and fonts as Tailwind 4
`@theme` tokens.

#### Scenario: Theme tokens match the reference

- **Given** the app's `src/index.css` theme
- **When** the tokens are declared
- **Then** the palette includes: brand `#846add`, hover `#5d43b5`, focus
  glow `rgba(132,106,221,0.5)`, overlay `rgba(0,0,0,0.8)`, placeholder
  `#999999`, error `#c80000`, white text roles
- **And** Poppins (headline) and Lato (body, numbers, labels, controls) load
  via Google Fonts `<link>` in `index.html`
- **And** shapes are radius 35px (input, button), 50% (countdown circles) and
  16px (validation bubble); transitions are `.5s` (focus glow) and `.4s`
  (button)

### Feature: Footer attribution

A single Component Dock attribution, per the monorepo rule.

#### Scenario: Attribution links Component Dock

- **Given** the page renders
- **When** the attribution is visible
- **Then** it reads a Component-Dock attribution (e.g. "Made with ♥ by
  Component Dock") linking `https://www.componentdock.com/`, branded
  "Component Dock" — never ColorLib, "Colorlib", "Coming Soon 2", or the
  source slug

## Verification checklist

- [x] Layout 1:1 with the reference: one vertically centred column
      (`min-height:100vh`, 50px/15px padding) over a fixed full-viewport
      photo layer with a `rgba(0,0,0,0.8)` overlay; no navbar, no sections
      below the fold
- [x] Background slideshow cross-fades three deterministic placeholder photos
      every 7 s over 1 s, and is skipped under `prefers-reduced-motion:
    reduce`
- [x] Headline: uppercase, Poppins-Bold 50px/1.1 white, 25px bottom padding;
      sub-line Lato-Light 25px/1.2 white, 48px bottom padding
- [x] Countdown: four 155px circles (`1px solid rgba(255,255,255,0.3)`,
      radius 50%) in a centred wrapping row with 15px/20px margins; white
      Lato-Bold 40px numbers above uppercase `#846add` Lato-Regular 12px
      labels (Days/Hours/Minutes/Seconds); live 1-second tick; h/m/s
      zero-padded; past target falls back to now + 35 d + 18 h
- [x] Form: white pill input (500px / `calc(100% - 10px)`, 70px, radius 35px,
      40px padding, `#846add` Lato-Bold 15px, `#999999` placeholder) + purple
      `#846add` pill "Subscribe" (min-width 160px, 70px, radius 35px, 20px
      padding, white uppercase label → `#5d43b5` hover, `.4s`); wrapping
      centred row with `margin 0 5px 20px`
- [x] Input focus plays the glow animation (35px-radius layer,
      `rgba(132,106,221,0.5)` → `box-shadow 0 0 80px 30px`, opacity 0,
      `.5s ease-in-out`)
- [x] Validation: invalid/empty e-mail → white bubble (`1px solid #c80000`,
      radius 16px, Lato-Bold 15px `#c80000`) with a lucide `AlertCircle`
      glyph, shown on hover and always at ≤992px, cleared on focus; valid
      submit accepted (React state, no navigation)
- [x] Poppins (headline) + Lato (body) via Google Fonts `<link>`; radii 35px /
      50% / 16px; transitions `.5s` / `.4s`
- [x] All images are `picsum.photos/seed/premiere-*` placeholders; icons from
      `lucide-react` (`AlertCircle` replaces the source FontAwesome `\f06a`);
      no copied assets, font files, or CSS; no jQuery, no framework, no CDN
- [x] Component Dock attribution links `https://www.componentdock.com/`
- [x] Zero `colorlib` / "Coming Soon 2" / "Coming Soon V02" / `comingsoon_02`
      references anywhere in `apps/premiere` (comments included)
- [x] App folder `apps/premiere`, package `@free-react-templates/premiere`,
      `homepage` `https://premiere.free.componentdock.com`, `public/CNAME`
      `premiere.free.componentdock.com`, lockfile registers the workspace
- [x] `vite.config.ts` keeps `injectUiSource()`; tests at 100% coverage;
      `scripts/verify-app.sh premiere` passes
