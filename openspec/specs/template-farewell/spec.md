# Template: Farewell (Footer)

## Purpose

Farewell is a footer-component demo in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Bootstrap Footer 18"
design (source: https://colorlib.com/wp/template/bootstrap-footer-18/), built
under a DIFFERENT name (**Farewell** — "goodbye, leave-taking", the
eighteenth entry in the footer series' ending-themed naming: Colophon → Envoi
→ Epilogue → Coda → Outro → Finale → Postlude → Stretto → Fermata → Finis →
Tailpiece → Terminus → Capstone → Omega → Ultimo → Adieu → Valediction →
**Farewell**; a single lowercase word, kebab-case, no collision with `apps/`,
`openspec/specs/` or `docs/templates/` — verified 2026-08-16), per the
monorepo naming mandate, with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript. The page is a footer-only component demo: a white filler
section (source labels it "Footer #08", `padding: 12em 0`) → the footer — a
**LIGHT GREEN-GREY band** (`background: #f1f6f5`; `.footer-08 { padding: 0;
overflow: hidden }` — overrides the base `footer { padding: 7em 0 }`, so the
columns carry their own `py-5`/`py-md-5` padding), **Poppins** typeface (body
15px / line-height 1.8; headings weight 400 / line-height 1.5). The footer
splits into a **9/3 row**: (1) **Left `col-md-9.py-5`** holding a nested row
of **"About us"** (blurb paragraph + THREE circular social chips — Twitter,
Facebook, Instagram) beside an **8/12 links block** with THREE `col-md-4`
link columns (**Discover** — Buy & Sell, Merchant, Giving back, Help &
Support; **About** — Staff, Team, Careers, Blog; **Resources** — Security,
Global, Charts, Privacy; plain `a.py-1.d-block` links, **NO checkmark
bullets** — contrast with footer-06), and below a `row.mt-md-5` copyright
bar ("Copyright © <year> All rights reserved | This template is made with ♥
by Colorlib.com" — recreation replaces the Colorlib attribution with the
Component Dock link per convention); (2) **Right `col-md-3.aside-stretch-right`**
— a solid **MINT-GREEN panel** (`#12cc94`, `:after` extends full-bleed to the
RIGHT viewport edge) holding a white **"Contact us"** heading
(`footer-heading-white`) and a **CONTACT FORM** (`form.contact-form`,
`action="#"`) — FOUR white rounded fields (Your Name, Your Email, Subject —
50px `form-control`; Message — `textarea` rows 3) + a **BLUE "Send" button**
(`background: #2f89fc !important`, white). This variant has **NO images**
and the ONLY interactive element is the static contact form (no JS handler
in source). No navbar, no hero; no behavior beyond the static form.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 18" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a filler
  strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-18/. TEMPLATES.md has ONE
  copy (line 794, `- [ ]` unchecked). This prep: Bootstrap Footer 18 →
  **Farewell**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (series-wide — see the colophon/terminus/capstone/
  omega/ultimo/adieu/valediction preps):**
  `https://preview.colorlib.com/theme/bootstrap-footer-18/` returns **HTTP
  404** ("Not Found" — a 9-byte body). The footer series is served under the
  **`/theme/bft/`** prefix (NOT `/theme/bootstrap/`): the live preview is
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-18/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-18/` (HTTP 200,
  11,522 bytes HTML, `<title>Footer 08</title>` — the title is the variant
  label, not the series number). Stylesheets: `css/ionicons.min.css` (icon
  font — glyphs `ion-logo-twitter`, `ion-logo-facebook`,
  `ion-logo-instagram`, `ion-ios-heart`) + `css/style.css` (222,389 bytes —
  the FULL shared FTCO sheet bundling rules for many variants; only the
  `.footer-08` block and the shared helpers apply to this page). No Google
  Fonts `<link>` — cf-fonts inline `@font-face` blocks load **Poppins**;
  body rule: `font-family: "Poppins", Arial, sans-serif`, `font-size: 15px`,
  `line-height: 1.8`, `font-weight: normal`; FTCO headings rule: same family,
  weight 400, line-height 1.5. No JS behavior needed (jquery/popper/
  bootstrap.min.js load but the footer is static; the contact form has
  `action="#"` and no handler — none needed in the recreation).
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-18.jpg`, 1200×972 JPEG, viewed in browser):** screenshot
  matches the live DOM (NO variance — only the JS-rendered copyright year
  differs: static capture shows 2021, live shows the current year). A white
  demo area with "Footer #08" centered; below it a **pale green-grey**
  (`#f1f6f5`) footer band. Left ~2/3: four text columns — **"About us"**
  (bold dark heading, placeholder blurb, THREE small circular grey social
  chips with white brand glyphs) plus **Discover / About / Resources** link
  columns (dark headings, muted `rgba(0,0,0,.3)` links, NO bullets); below
  them a full-width copyright line (dark-grey text, pink/red ♥ heart, the
  "Colorlib.com" link rendered teal-green `#12cc94`). Right ~1/3: a solid
  **mint/seafoam-green** (`#12cc94`) panel with a white **"Contact us"**
  heading, FOUR white rounded input fields (Your Name, Your Email, Subject,
  Message textarea) and a **medium-blue "Send" button** (`#2f89fc`, white
  text). Clean, minimalist, corporate aesthetic; the ONLY saturated colors
  are the mint panel, the blue button and the teal link accents. NO images
  anywhere in the footer.
- **Structure (DOM order, 1:1):**
  `section.ftco-section` (`padding: 12em 0`; no background — white),
  `div.container` → `div.row.justify-content-center` →
  `div.col-md-6.text-center` → `h2` **"Footer #08"**, `margin-bottom: 0`) →
  `footer.footer-08` (`background: #f1f6f5`; `padding: 0` — overrides the
  base `footer { padding: 7em 0 }`; `overflow: hidden`) →
  `div.container-fluid.px-lg-5` → `div.row`:
  - **Left block** — `div.col-md-9.py-5`:
    - `div.row`:
      - **About us column** — `div.col-md-4.mb-md-0.mb-4` → `h2.footer-heading`
        **"About us"** → `p` **"A small river named Duden flows by their
        place and supplies it with the necessary regelialia."** (the classic
        Colorlib lorem blurb) → `ul.ftco-footer-social.p-0` → THREE
        `li.ftco-animate` → `a` (href `#`, `data-toggle="tooltip"`,
        `title="Twitter"`/`"Facebook"`/`"Instagram"`) → `span.ion-logo-*`
      - **Links block** — `div.col-md-8` → `div.row.justify-content-center` →
        `div.col-md-12.col-lg-9` → `div.row` → THREE `div.col-md-4.mb-md-0.mb-4`:
        - **Col 1 — Discover** — `h2.footer-heading` **"Discover"** →
          `ul.list-unstyled` → FOUR `li` → `a.py-1.d-block`: **"Buy &amp;
          Sell"**, **"Merchant"**, **"Giving back"**, **"Help &amp; Support"**
        - **Col 2 — About** — FOUR links: **"Staff"**, **"Team"**,
          **"Careers"**, **"Blog"**
        - **Col 3 — Resources** — FOUR links: **"Security"**, **"Global"**,
          **"Charts"**, **"Privacy"**
        - (all link text `rgba(0,0,0,.3)` via `.footer-08 ul.list-unstyled li
a`; **NO checkmark bullets** in this variant — contrast with
          footer-06's `ion-ios-checkmark-circle-outline` glyphs)
    - **Copyright row** — `div.row.mt-md-5` → `div.col-md-12` →
      `p.copyright` — **"Copyright © <current year> All rights reserved |
      This template is made with ♥ by Colorlib.com"** (heart
      `i.ion-ios-heart` `aria-hidden="true"`; "Colorlib.com" is an `<a
href="https://colorlib.com" target="_blank">` link — `#12cc94` via
      `.footer-08 a`; recreation replaces the Colorlib attribution with the
      Component Dock link per convention)
  - **Right block (contact panel)** — `div.col-md-3.py-md-5.py-4.aside-stretch-right.pl-lg-5`
    (`background: #12cc94` via `.footer-08 .aside-stretch-right`; the
    `.aside-stretch-right:after` pseudo-element extends the color full-bleed
    to the RIGHT viewport edge — `position: absolute; top: 0; left: 100%;
bottom: 0; width: 360%`) → `h2.footer-heading.footer-heading-white`
    **"Contact us"** (white on md+ via
    `.footer-08 .footer-heading.footer-heading-white { color: #fff }`) →
    `form.contact-form` (`action="#"`; `width: 100%`) → FIVE `div.form-group`:
    - `input.form-control` (type text) **placeholder "Your Name"**
    - `input.form-control` (type text) **placeholder "Your Email"**
    - `input.form-control` (type text) **placeholder "Subject"**
    - `textarea.form-control` (cols 30, rows 3) **placeholder "Message"**
    - `button.form-control.submit.px-3` (type submit) **"Send"** —
      `background: #2f89fc !important; color: #fff`
- **Grid behavior (Bootstrap 4.3.1, reproduce responsively):** Footer row —
  `col-md-9` (left) + `col-md-3` (right) → **9/3 split on md+**, stacked
  full-width below md (left block first, contact panel second; the
  aside-stretch-right background turns **transparent** <md via media query
  so the panel sits on the `#f1f6f5` footer bg). Inner row: About us
  `col-md-4` + links `col-md-8` (4/8 on md+, stacked below md with `mb-4`
  gaps). The links block nests `col-md-12 col-lg-9` centered by
  `justify-content-center`; the THREE link columns are `col-md-4` →
  3-across on md+, stacked full-width below md with `mb-4` gaps. Copyright
  row `mt-md-5` (1.5rem top margin on md+ only), full width. No horizontal
  scroll.
- **Icons:** ionicons — `ion-logo-twitter`, `ion-logo-facebook`,
  `ion-logo-instagram` (social chips), `ion-ios-heart` (copyright heart).
  **lucide-react removed brand icons** (Twitter/Facebook/Instagram →
  `undefined`) — use INLINE SVG brand icons (simple-icons paths) for the
  social chips per the skill's guidance; the heart → a ♥ text glyph,
  `aria-hidden`. Social `a` elements carry `title` attributes in source —
  recreation should use `aria-label` (title is not a reliable accessible
  name).
- **Images:** **NONE** — this variant has no thumbnails, no product, no
  instagram grid, no backgrounds. No picsum placeholders needed at all.

## Design tokens (from the reference — `.footer-08` + shared FTCO helpers)

| Token             | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Source                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Font family       | **Poppins** — `body { font-family: "Poppins", Arial, sans-serif; font-size: 15px; line-height: 1.8; font-weight: normal; }`; FTCO headings rule: `h1..h5, .h1..h5 { line-height: 1.5; font-weight: 400; font-family: "Poppins", Arial, sans-serif; }` (cf-fonts loads weights 300–900; recreation needs 400)                                                                                                                                                                                | `css/style.css` body + FTCO headings rules            |
| Footer background | **`#f1f6f5`** (pale green-grey) — `.footer-08 { padding: 0; overflow: hidden; background: #f1f6f5; }` (overrides the base `footer { padding: 7em 0 }`; the columns carry their own padding: left `py-5`, right `py-md-5 py-4`)                                                                                                                                                                                                                                                              | `.footer-08` + `footer`                               |
| Brand accent      | **`#12cc94`** (mint green) — `.footer-08 a { color: #12cc94; }` (the "Colorlib.com"/Component Dock copyright link, hover targets) AND `.footer-08 .aside-stretch-right { background: #12cc94; }` (the right contact panel; `:after` extends 360% width beyond the container to the RIGHT viewport edge)                                                                                                                                                                                     | `.footer-08 a`, `.footer-08 .aside-stretch-right`     |
| Submit button     | **`#2f89fc`** (medium blue) — `button.submit { background: #2f89fc !important; color: #fff; }` (the ONLY blue element on the page)                                                                                                                                                                                                                                                                                                                                                          | `.footer-08 .contact-form .submit`                    |
| Body text         | **`#212529`** (bootstrap default dark) — headings and About-us blurb inherit it (`.footer-heading` has NO explicit color in this variant)                                                                                                                                                                                                                                                                                                                                                   | `body { color: #212529 }` + inheritance               |
| Muted text        | **`rgba(0,0,0,.3)`** — `.footer-08 p` (blurb + copyright) and `.footer-08 ul.list-unstyled li a` (all link-column links)                                                                                                                                                                                                                                                                                                                                                                    | `.footer-08 p`, `.footer-08 ul.list-unstyled li a`    |
| Column headings   | `.footer-heading`: **`font-size: 18px`, `margin-bottom: 30px`**, weight 400, color inherits dark — NO `:after` underline, NOT uppercase (same as the rest of the series); the `footer-heading-white` modifier on the contact panel is **white on md+ only** (`@media (min-width: 768px) { .footer-08 .footer-heading.footer-heading-white { color: #fff; } }`)                                                                                                                              | `.footer-08 .footer-heading` (+ white modifier)       |
| Form fields       | `input.form-control` (contact): **`height: 50px`, `background: #fff`, `color: rgba(0,0,0,.3)`, `font-size: 14px`, `border-radius: 5px`, `border: none`, `box-shadow: none`**; placeholder `rgba(0,0,0,.3) !important`; `:focus`/`:active` keep `outline: none; box-shadow: none` (no focus ring in source — recreation SHOULD add a visible focus style for a11y, see Accessibility)                                                                                                        | `.footer-08 .contact-form .form-control` (+ `:focus`) |
| Textarea          | `textarea.form-control` — **`height: inherit !important`** (rows=3 governs), same radius/colors as the inputs                                                                                                                                                                                                                                                                                                                                                                               | `.footer-08 .contact-form textarea.form-control`      |
| Submit button box | `button.form-control.submit.px-3` (type submit): **"Send"** — `background: #2f89fc !important; color: #fff`; inherits the 50px/5px-radius `form-control` shape; `px-3` horizontal padding                                                                                                                                                                                                                                                                                                   | `.footer-08 .contact-form .submit` + `.form-control`  |
| Social chips      | `ul.ftco-footer-social`: `li { list-style: none; margin: 0 10px 0 0; display: inline-block; }`; `li a { height: 40px; width: 40px; display: block; background: rgba(0,0,0,.05); border-radius: 50%; position: relative; }`; `span { position: absolute; font-size: 20px; top: 50%; left: 50%; transform: translate(-50%,-50%); }`; `li a:hover { color: #fff; }` (the `a` also gets `color: #12cc94` from `.footer-08 a` — dark glyph on a light grey circle)                               | `.ftco-footer-social` (+ `.footer-08 a`)              |
| Filler area       | `.ftco-section`: **`padding: 12em 0`**, NO background (white), centered `h2` **"Footer #08"** (`margin-bottom: 0`)                                                                                                                                                                                                                                                                                                                                                                          | `.ftco-section`, `.ftco-section h2`                   |
| Icons             | ionicons: `ion-logo-twitter` / `ion-logo-facebook` / `ion-logo-instagram` (social chips → **inline SVG brand icons** — lucide-react has NO brand icons), `ion-ios-heart` (copyright → ♥ text glyph, `aria-hidden`)                                                                                                                                                                                                                                                                          | `css/ionicons.min.css` classes in DOM                 |
| Images            | **NONE** — no image roles in this variant (no news thumbs, no product, no instagram grid, no backgrounds). No picsum seeds needed                                                                                                                                                                                                                                                                                                                                                           | DOM                                                   |
| Mobile behavior   | Footer row stacks below md (left 9/12 block first, then the contact panel); on <md the `.aside-stretch-right` background becomes **transparent** (`background: transparent; :after { display: none }`) so the panel sits on the `#f1f6f5` footer bg; `footer-heading-white` reverts to the dark inherited color <md. Inner About-us/links 4/8 split stacks with `mb-4` gaps; the THREE link columns stack full-width with `mb-4` gaps; copyright row keeps full width. No horizontal scroll | Bootstrap classes + `.footer-08` media queries        |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Farewell app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler section and the footer inside the
  main landmark
- **AND** the document title SHALL be "Farewell — Footer"

### Requirement: Filler demo area

The system SHALL render the white filler strip above the footer, matching the
source's demo-content role.

#### Scenario: Filler renders with a centered label

- **GIVEN** the page is rendered
- **WHEN** the top of the page loads
- **THEN** a white section SHALL be visible above the footer with the
  source's `padding: 12em 0` rhythm (the recreation may use a similar
  min-height so the footer band still peeks into the first viewport)
- **AND** a centered level-2 heading SHALL label the demo (the source shows
  **"Footer #08"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Light footer band

The system SHALL render the pale green-grey footer band with the source's
background, zero padding (columns carry it), and Poppins typeface.

#### Scenario: Footer band renders light

- **GIVEN** the filler section is rendered
- **WHEN** the user inspects the footer
- **THEN** a semantic `<footer>` SHALL render with `background: #f1f6f5` and
  `padding: 0` (the source overrides the base 7em footer padding; the left
  block carries `py-5` and the right panel `py-md-5 py-4`)
- **AND** the font family SHALL be Poppins (body 15px, line-height 1.8;
  headings weight 400, line-height 1.5)
- **AND** the page SHALL have a main landmark and a semantic `<footer>`
  landmark

### Requirement: About us column with social chips

The system SHALL render the About us column — heading, placeholder blurb, and
the THREE circular social icon links.

#### Scenario: About us column renders

- **GIVEN** the footer band is rendered
- **WHEN** the user inspects the top-left of the footer
- **THEN** a column SHALL render (4/12 of the left block on md+, stacked
  below md) containing:
  - the `18px` dark heading **"About us"**
  - the placeholder blurb **"A small river named Duden flows by their place
    and supplies it with the necessary regelialia."** (same kind of filler
    copy, may be paraphrased)
  - THREE inline circular social links (40×40px, `border-radius: 50%`,
    `background: rgba(0,0,0,.05)`, dark glyph centered at 20px) for
    **Twitter**, **Facebook** and **Instagram** — rendered with INLINE SVG
    brand icons (lucide-react has no brand icons)
- **AND** each social link SHALL have an accessible name (the source uses
  `title` tooltips — the recreation SHALL use `aria-label` so the accessible
  name is reliable) and SHALL be keyboard-focusable

### Requirement: Link columns

The system SHALL render the THREE link columns — Discover, About, Resources —
with the source's headings and plain muted links (NO bullets).

#### Scenario: Link columns render

- **GIVEN** the About us column is rendered
- **WHEN** the user inspects the middle of the footer
- **THEN** THREE `col-md-4` columns SHALL render side by side on md+ (stacked
  below md), each with a dark 18px `.footer-heading` and an unordered list of
  links in `rgba(0,0,0,.3)`:
  - **"Discover"** — FOUR links: **"Buy & Sell"**, **"Merchant"**,
    **"Giving back"**, **"Help & Support"**
  - **"About"** — FOUR links: **"Staff"**, **"Team"**, **"Careers"**,
    **"Blog"**
  - **"Resources"** — FOUR links: **"Security"**, **"Global"**, **"Charts"**,
    **"Privacy"**
- **AND** each link SHALL be a block-level link with ~0.25rem vertical
  padding (the source uses `a.py-1.d-block`)
- **AND** the links SHALL have NO bullet glyphs (this variant has no
  checkmark icons — contrast with footer-06/adieu)

### Requirement: Contact form panel

The system SHALL render the mint-green right panel with the white "Contact
us" heading and the FOUR-field contact form with the blue Send button.

#### Scenario: Contact panel renders

- **GIVEN** the link columns are rendered
- **WHEN** the user inspects the right side of the footer
- **THEN** a panel SHALL render (3/12 on md+, full-width below md) with
  `background: #12cc94` (mint green; the source's `:after` extends the color
  full-bleed to the right viewport edge) containing:
  - a white heading **"Contact us"** (`footer-heading-white` — white on md+,
    dark below md per the source media query)
  - a real `<form>` (no backend needed — the source uses `action="#"` with
    no handler) with FOUR labeled fields in the source order:
    **"Your Name"**, **"Your Email"**, **"Subject"** (text inputs, 50px
    tall, white, radius 5px, no border) and **"Message"** (a `textarea`,
    rows 3)
  - a submit button labeled **"Send"** (`background: #2f89fc`, white text,
    radius 5px)
- **AND** every field SHALL have a programmatic label (the source uses bare
  placeholders — the recreation adds visually-hidden `<label>`s or
  `aria-label`s)
- **AND** the email field SHALL be `type="email"` (the source uses a generic
  text input — the recreation SHOULD use the semantically correct type)

### Requirement: Copyright bar

The system SHALL render the full-width copyright line with the heart and the
mandatory Component Dock link.

#### Scenario: Copyright bar renders

- **GIVEN** the contact panel is rendered
- **WHEN** the user inspects the bottom of the left block
- **THEN** a row (`mt-md-5` on md+) SHALL render a full-width copyright line
  in `rgba(0,0,0,.3)`: **"Copyright © <current year> All rights reserved |
  This template is made with ♥ by Component Dock"** (the source shows
  "...made with ♥ by Colorlib.com" with Colorlib.com as a teal `#12cc94`
  external link)
- **AND** the heart SHALL be `aria-hidden` (decorative)
- **AND** the "Component Dock" text SHALL link to
  `https://www.componentdock.com/` per convention — ColorLib must NOT appear
  anywhere in `apps/farewell`

### Requirement: Responsive layout

The system SHALL reproduce the source's grid: 9/3 footer split, 4/8 inner
split, link columns 3-across on md+, no horizontal overflow.

#### Scenario: Grid adapts across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the md breakpoint (≥768px)
- **THEN** the footer SHALL show the 9/3 split (left block `col-md-9` +
  mint panel `col-md-3`), the inner About-us/links 4/8 split, and the THREE
  link columns 3-across
- **AND** below md the footer SHALL stack: left block first, then the
  contact panel full-width with its background turning transparent (the
  panel sits on the `#f1f6f5` footer bg and the "Contact us" heading reverts
  to dark), the About-us/links split stacked with `mb-4` gaps, and the link
  columns stacked with `mb-4` gaps
- **AND** the page SHALL never overflow horizontally

### Requirement: Accessibility

The system SHALL expose semantic landmarks, an accessible contact form, and
keyboard-operable interactivity.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark and a semantic `<footer>`
  landmark
- **AND** every form field SHALL have a programmatic label (the source uses
  bare placeholders — the recreation adds visually-hidden `<label>`s or
  `aria-label`s)
- **AND** the submit button SHALL have an accessible name (its visible
  "Send" text suffices)
- **AND** the decorative heart SHALL carry `aria-hidden`
- **AND** the social icon links SHALL have accessible names (via
  `aria-label` — the source's `title` attributes are unreliable for
  assistive tech)
- **AND** all links SHALL have visible text (the source's links all carry
  text — no icon-only links in this variant)
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring (the source removes the focus outline from the form
  fields — the recreation SHALL restore a visible focus style)

## Verification checklist

- [ ] `npm run verify:app farewell` passes (typecheck + lint + knip + fallow + 100% coverage tests + build)
- [ ] Document title "Farewell — Footer"
- [ ] Filler: white section (source `padding: 12em 0`) with a centered demo
      label
- [ ] Footer band: LIGHT — `background: #f1f6f5`, `padding: 0` (base 7em
      overridden; left block `py-5`, right panel `py-md-5 py-4`); semantic
      `<footer>` + main landmark; Poppins (body 15px/1.8, headings weight
      400/1.5)
- [ ] About us column: `col-md-4` — dark 18px heading "About us" + blurb
      (Duden river copy, paraphrased OK) + THREE circular social chips
      (40×40, radius 50%, `rgba(0,0,0,.05)` bg, 20px inline-SVG brand glyph)
      for Twitter/Facebook/Instagram, each with `aria-label`
- [ ] Link columns: THREE `col-md-4` — Discover (Buy & Sell, Merchant,
      Giving back, Help & Support), About (Staff, Team, Careers, Blog),
      Resources (Security, Global, Charts, Privacy); dark 18px headings;
      links `rgba(0,0,0,.3)`, block-level `py-1`, **NO bullets**
- [ ] Contact panel: `col-md-3` mint `#12cc94` (full-bleed right) — white
      "Contact us" heading (md+; dark <md) + real `<form>` with labeled
      fields Your Name / Your Email (`type="email"`) / Subject / Message
      (textarea rows 3), white 50px radius-5px no-border inputs, and a blue
      "Send" button (`#2f89fc`, white)
- [ ] Copyright bar: `row.mt-md-5` full-width line in `rgba(0,0,0,.3)` —
      "Copyright © <current year> All rights reserved | This template is
      made with ♥ by Component Dock" (heart `aria-hidden`, Component Dock
      link → `https://www.componentdock.com/`); NO ColorLib reference
      anywhere in `apps/farewell` (provenance lives only here + TEMPLATES.md + PR)
- [ ] NO images anywhere in the footer (this variant has no thumbnails, no
      product, no instagram grid — no picsum needed)
- [ ] Responsive: 9/3 footer split + 4/8 inner split + link columns
      3-across on md+; below md everything stacks with `mb-4` gaps and the
      mint panel background turns transparent; no horizontal overflow
- [ ] Poppins via Google Fonts `<link>` in `index.html` (weight 400
      suffices; the source loads 300–900)
- [ ] Icons: inline SVG brand icons for the social chips (lucide-react has
      NO brand icons — probe any lucide import with `typeof`); ♥ text glyph
      (`aria-hidden`) for the copyright line
