# Template: Outro (Footer)

## Purpose

Outro is a footer-component demo in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Bootstrap Footer 05"
design (source: https://colorlib.com/wp/template/bootstrap-footer-05/), built
under a DIFFERENT name (**Outro** — the concluding section of a piece of
music or a performance, continuing the footer series' ending-themed naming:
Colophon → Envoi → Epilogue → Coda → **Outro**; a single lowercase word,
kebab-case, no collision with `apps/`, `openspec/specs/` or
`docs/templates/` — verified 2026-08-16), per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The
page is a footer-only component demo: a light-gray `70vh` filler area
(labeled "Footer #5" in the source) → the footer itself — a WHITE `#fff`
band (`padding: 4rem 0`, `border-top: 1px solid #efefef`) with a top row
(subscribe email input with an in-field right-arrow submit button | four
centered nav links | four circular social icons) separated by a bottom
border, then a second row (legal links left | bold blue 30px brand logo
centered | muted copyright right). One brand color, `#3e64ff`, used for the
logo, link hovers, and social hovers. No images, no buttons with text.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 05" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a 70vh
  filler strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-05/. TEMPLATES.md has ONE
  copy (line 781, `- [ ]` unchecked). This prep: Bootstrap Footer 05 →
  **Outro**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (same as the rest of the series — see the colophon
  prep):** `https://preview.colorlib.com/theme/bootstrap-footer-05/` returns
  **HTTP 404** ("Not Found"). The footer series is served under the
  **`/theme/bft/`** prefix (NOT `/theme/bootstrap/`): the live preview is
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-05/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-05/` (HTTP 200,
  18,093 bytes HTML, `<title>Footer 05</title>`). Stylesheets:
  `fonts/icomoon/style.css` (icon font), `css/bootstrap.min.css`
  (**Bootstrap v4.5.3**, shared with the series), `css/style.css` (9,331
  bytes — a SHARED sheet bundling the custom rules of MANY footer designs
  `.footer-14398`, `.footer-59391`, `.footer-95942`, `.footer-48201`, …).
  **The footer-05 DOM uses ONLY `.footer-59391`** (verified: no other
  `footer-\d+` class in the HTML) — ignore every other block in the sheet.
  No JS behavior needed (jquery/popper/bootstrap.min.js are loaded but the
  footer is static — the recreation needs none of them). No Google Fonts
  `<link>` — the footer declares `"Poppins", sans-serif` which falls back to
  a system stack in the preview; the recreation ADDS the Google Fonts
  Poppins `<link>` in index.html.
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-05.jpg`, viewed in browser):** clean, airy, minimalist,
  LIGHT. Screenshot matches the live DOM exactly (NO variance): light-gray
  (`#f8f9fa`) demo area with "Footer #5" centered; below it a WHITE footer
  with a faint top border. Top row: rectangular light-gray email input
  (`#e6e6e6`) with an integrated right-pointing arrow submit, centered small
  gray links (Features / Blog / Pricing / Services), and four LIGHT-GRAY
  CIRCULAR social icons with dark glyphs on the right. Bottom row: small
  gray legal links (Terms / About / Privacy / Contact) left, the bold
  BRIGHT-BLUE "Colorlib" logo centered, and a muted copyright line right.
  Clean sans-serif throughout (Poppins declared on the footer).
- **Structure (DOM order, 1:1):** `div.content.d-flex.align-items-center.bg-light`
  (height 70vh, `h2.w-100.text-center` "Footer #5") →
  `footer.footer-59391` (bg `#fff`, `border-top: 1px solid #efefef`,
  `padding: 4rem 0`, Poppins) →
  `div.border-bottom.pb-5.mb-4` (row-1 wrapper; Bootstrap `border-bottom:
1px solid #dee2e6`, `padding-bottom: 3rem`, `margin-bottom: 1.5rem`) →
  `div.container` → `div.row.align-items-center`:
  1. `div.col-lg-3` — `form.subscribe.mb-4.mb-lg-0` → `div.form-group`
     (position relative):
     - `input[type="email"].form-control` placeholder "Enter your email"
       (height 45px, `border: none`, bg `#e6e6e6`)
     - `button` (absolute, `top: .5rem; right: .3rem`, no border/bg,
       `font-size: 1.5rem`, `transform: rotate(180deg)`) →
       `span.icon-keyboard_backspace` (a left-arrow glyph rotated 180° →
       renders as a right-pointing send arrow)
  2. `div.col-lg-6.text-lg-center` — `ul.list-unstyled.nav-links.nav-left.mb-4.mb-lg-0`:
     **Features, Blog, Pricing, Services** (4 inline links)
  3. `div.col-lg-3` — `ul.list-unstyled.nav-links.social.nav-right.text-lg-right`:
     FOUR `li > a` circular social links, each `> span` icon-font glyph:
     `icon-twitter`, `icon-instagram`, `icon-facebook`, `icon-pinterest`
     then a second `div.container` → `div.row.align-items-center`:
  4. `div.col-lg-4.text-lg-center.site-logo.order-1.order-lg-2.mb-3.mb-lg-0`
     — `a.m-0.p-0` **"Colorlib"** (brand logo → recreation **"Outro"**,
     30px, `#3e64ff`, weight 900)
  5. `div.col-lg-4.order-2.order-lg-1.mb-3.mb-lg-0` —
     `ul.list-unstyled.nav-links.m-0.nav-left`: **Terms, About, Privacy,
     Contact** (4 inline links)
  6. `div.col-lg-4.text-lg-right.order-3.order-lg-3` — `p.m-0.text-muted`
     > `small` "© 2019. All Rights Reserved." (Bootstrap `text-muted` =
     > `#6c757d`; the recreation SHALL use "© <current year> Outro" + the
     > mandatory Component Dock link)
- **Grid behavior (Bootstrap 4.5.3, reproduce responsively):** Row 1 =
  `col-lg-3` (25% subscribe) + `col-lg-6` (50% nav, centered) + `col-lg-3`
  (25% socials, right-aligned). Below lg all three stack full-width
  (subscribe first, then nav, then socials; `mb-4` bottom margins on
  mobile). Row 2 = 3× `col-lg-4` (33.33% each) with explicit order classes:
  on lg+ the DOM order renders links → logo → copyright (orders lg-1/lg-2/
  lg-3), logo centered; below lg the ORDER FLIPS to logo → links →
  copyright (orders 1/2/3), logo first. `mb-3 mb-lg-0` on the row-2 columns
  (bottom margins on mobile only).

## Design tokens (from the reference — `.footer-59391` only)

| Token             | Value                                                                                                                                                                                                                                          | Source                                        |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Font family       | **Poppins** — `.footer-59391` sets `font-family: "Poppins", sans-serif` (body/h1-h6 stack is Roboto; the footer overrides). NOT loaded in the preview (system fallback) — the recreation adds the Google Fonts `<link>` for Poppins            | `css/style.css` `.footer-59391`               |
| Footer background | **`#fff`** (WHITE) — footer band, `padding: 4rem 0`, `border-top: 1px solid #efefef` (faint gray top border)                                                                                                                                   | `.footer-59391`                               |
| Brand color       | **`#3e64ff`** (vivid indigo-blue) — logo, nav-link hover, social hover                                                                                                                                                                         | `.footer-59391 .site-logo a`, hovers          |
| Brand logo        | `.site-logo a`: **30px, `font-weight: 900`, color `#3e64ff`**                                                                                                                                                                                  | `.footer-59391 .site-logo a`                  |
| Nav links         | `li` inline-block; `a` **`#777`, `padding: 10px`**, hover → **`#3e64ff`**; `.nav-left li:first-child` `padding-left: 0`; `.nav-right li:last-child` `padding-right: 0`                                                                         | `.footer-59391 .nav-links *`                  |
| Subscribe input   | `.form-group` position relative, `margin-bottom: 0`; `input[type="email"]`: **height 45px, `border: none`, bg `#e6e6e6`**; focus/active: NO outline, NO box-shadow; placeholder **`#b3b3b3`, 14px**                                            | `.footer-59391 .subscribe .form-group *`      |
| Submit button     | Absolute (`top: .5rem; right: .3rem`), `border: none`, `background: none`, `font-size: 1.5rem`, `line-height: 0`, `transform: rotate(180deg)` — the `icon-keyboard_backspace` left-arrow glyph rotates to a RIGHT-POINTING send arrow; no text | `.footer-59391 .subscribe .form-group button` |
| Social circles    | `li` inline-block; `a` **40×40px, `border-radius: 50%`, bg `#e6e6e6`, color `#333333`**, `padding: 0`; glyph centered via absolute translate; hover → **`#3e64ff`** (glyph color)                                                              | `.footer-59391 .social li a`                  |
| Copyright         | Bootstrap `.text-muted` = **`#6c757d`**, `small` text, `m-0`; right-aligned on lg+, below-lg it stays right (order-3)                                                                                                                          | DOM + Bootstrap `text-muted`                  |
| Row-1 divider     | Wrapper `div.border-bottom.pb-5.mb-4`: Bootstrap `border-bottom: 1px solid #dee2e6`, `padding-bottom: 3rem` (pb-5), `margin-bottom: 1.5rem` (mb-4)                                                                                             | Bootstrap classes on the wrapper              |
| Filler area       | `.content`: `height: 70vh`, Bootstrap `bg-light` = **`#f8f9fa`**, `d-flex align-items-center` with a centered `h2.w-100.text-center` label "Footer #5"                                                                                         | `.content` + Bootstrap classes                |
| Link transition   | `a { transition: .3s all ease; }`; `a, a:hover { text-decoration: none !important; }` (global)                                                                                                                                                 | `css/style.css` top rules                     |
| Mobile behavior   | Row 1 stacks below lg (`col-lg-*`); row 2 order flips (logo first on mobile, links first on lg+); `mb-*` utility margins on mobile — no horizontal scroll                                                                                      | Bootstrap classes                             |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Outro app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler area and the footer inside the
  main landmark
- **AND** the document title SHALL be "Outro — Footer"

### Requirement: Filler demo area

The system SHALL render the light-gray filler strip above the footer,
matching the source's demo-content role.

#### Scenario: Filler renders with a centered label

- **GIVEN** the page is rendered
- **WHEN** the top of the page loads
- **THEN** a `#f8f9fa` light-gray area SHALL be visible filling the viewport
  above the footer (the source uses `height: 70vh`; the recreation may use a
  similar min-height so the footer still peeks into the first viewport)
- **AND** a centered level-2 heading SHALL label the demo (the source shows
  **"Footer #5"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Subscribe form

The system SHALL render the email subscribe form with the in-field submit
arrow, styled per the reference tokens, with an accessible name (the source
has no label — the recreation adds one per monorepo conventions).

#### Scenario: Email input and arrow submit render

- **GIVEN** the filler area is rendered
- **WHEN** the user inspects the top-left of the footer
- **THEN** a subscribe form SHALL render inside a relative-positioned
  wrapper with an email text input of **45px height, `#e6e6e6` background,
  no border**, placeholder **"Enter your email"** in `#b3b3b3` (14px)
- **AND** a submit button SHALL render inside the input (absolutely
  positioned top-right, no background/border) showing a **right-pointing
  arrow** icon (`font-size: 1.5rem`) — the source rotates a
  `keyboard_backspace` glyph 180°; lucide's `ArrowRight`/`Send` gives the
  same visual without the rotation hack (documented deviation, same look)
- **AND** the input SHALL have an accessible name (e.g. `aria-label="Email
address"`) and the button an accessible name (e.g. `aria-label="Subscribe"`)
- **AND** focus/active SHALL NOT show the default outline or box-shadow
  (the source removes them; keep a visible focus-visible ring per monorepo
  a11y conventions)

### Requirement: Nav links row

The system SHALL render the four centered nav links with the source's exact
copy and styling.

#### Scenario: Nav links render centered

- **GIVEN** the subscribe form is rendered
- **WHEN** the user inspects the center of the footer's top row
- **THEN** four inline links SHALL render centered: **Features, Blog,
  Pricing, Services** (in that order)
- **AND** each link SHALL be `#777` with `10px` padding, hover → `#3e64ff`

### Requirement: Social circles

The system SHALL render the four circular social links as circles with the
source's styling, with accessible names (the source uses bare icon spans).

#### Scenario: Circular social icons render

- **GIVEN** the nav links are rendered
- **WHEN** the user inspects the right side of the footer's top row
- **THEN** four social links SHALL render as **40×40px circles**
  (`border-radius: 50%`, bg `#e6e6e6`, glyph color `#333333`), right-aligned:
  1. **Twitter**
  2. **Instagram**
  3. **Facebook**
  4. **Pinterest**
- **AND** each circle SHALL contain a centered brand glyph, hover → `#3e64ff`
- **NOTE (lucide-react limitation):** lucide-react REMOVED brand icons
  (Twitter/Instagram/Facebook/Pinterest are `undefined` exports) — render
  the four brand glyphs as inline SVGs (simple-icons paths), matching the
  skill's brand-icon guidance. Probe every icon import with the `typeof`
  check before committing.

### Requirement: Brand, legal links, and copyright row

The system SHALL render the second row with the renamed brand logo, the
four legal links, and the copyright line, plus the mandatory Component Dock
credit (the source brands "Colorlib" — the Component Dock link is the
monorepo addition per conventions.md; NO ColorLib reference in app code).

#### Scenario: Logo, legal links, and copyright render

- **GIVEN** the footer's top row is rendered
- **WHEN** the user inspects the footer's second row
- **THEN** a brand link SHALL render centered on lg+ reading **"Outro"** in
  **30px, weight 900, `#3e64ff`** (the source's `.site-logo a` treatment)
- **AND** four inline legal links SHALL render on the left on lg+ (first in
  DOM order): **Terms, About, Privacy, Contact** (`#777`, `10px` padding,
  hover `#3e64ff`)
- **AND** a muted (`#6c757d`) small-text copyright SHALL render on the
  right, reading **"© <current year> Outro"** (the source shows a fixed
  "© 2019. All Rights Reserved.")
- **AND** the footer SHALL contain a link to
  `https://www.componentdock.com/` branded as "Component Dock" (e.g. in the
  copyright line or brand column)

### Requirement: Responsive layout

The system SHALL reproduce the source's responsive grid behavior, including
the row-2 order flip below the lg breakpoint.

#### Scenario: Columns adapt across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the lg breakpoint (≥992px)
- **THEN** the top row SHALL render subscribe (25%) | nav (50%, centered) |
  socials (25%, right) side by side (`col-lg-3/6/3`)
- **AND** the second row SHALL render links | logo (centered) | copyright
  side by side (`col-lg-4` ×3, orders lg-1/lg-2/lg-3)
- **AND** below the lg breakpoint the top row SHALL stack full-width
  (subscribe → nav → socials) and the second row SHALL flip to **logo →
  links → copyright** (orders 1/2/3), each column full-width
- **AND** the page SHALL never overflow horizontally

### Requirement: Accessibility

The system SHALL expose semantic landmarks, accessible social/form controls,
and keyboard-operable interactivity.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark and a semantic `<footer>`
  landmark
- **AND** all icon-only controls (the 4 social links + the submit arrow)
  SHALL have accessible names (Twitter, Instagram, Facebook, Pinterest,
  Subscribe)
- **AND** the email input SHALL have a programmatic label
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring

## Verification checklist

- [ ] `npm run verify:app outro` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Outro — Footer"
- [ ] Filler: `#f8f9fa` area (~70vh) with a centered demo label
- [ ] Footer band: WHITE `#fff`, `padding: 4rem 0`, `border-top: 1px solid
    #efefef`; semantic `<footer>` + main landmark
- [ ] Subscribe form: 45px `#e6e6e6` borderless email input, placeholder
      "Enter your email" (`#b3b3b3` 14px), absolute right-pointing arrow
      submit button (no text) — both with accessible names; no default
      focus outline, focus-visible ring present
- [ ] Nav links: Features, Blog, Pricing, Services — `#777`, padding 10px,
      hover `#3e64ff`, centered on lg+
- [ ] Socials: 4 circular links (Twitter, Instagram, Facebook, Pinterest) —
      40×40px, `border-radius: 50%`, bg `#e6e6e6`, glyph `#333333`, hover
      `#3e64ff` (inline SVG brand icons per lucide limitation); `aria-label`s
      on each; right-aligned
- [ ] Row 2: brand "Outro" 30px weight 900 `#3e64ff` centered on lg+;
      legal links Terms, About, Privacy, Contact left; "© <current year>
      Outro" muted `#6c757d` right + Component Dock link
      `https://www.componentdock.com/`
- [ ] Responsive: col-lg-3/6/3 top row + col-lg-4 ×3 bottom row on lg+;
      stacked full-width below lg with the row-2 order flip (logo first);
      no horizontal overflow
- [ ] Poppins via Google Fonts `<link>` in `index.html`
- [ ] NO images needed (the source footer is image-free — no picsum
      placeholders required); NO ColorLib reference anywhere in `apps/outro`
      (provenance lives only here + TEMPLATES.md + PR)
