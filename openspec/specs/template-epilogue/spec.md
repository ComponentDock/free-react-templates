# Template: Epilogue (Footer)

## Purpose

Epilogue is a footer-component demo in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Bootstrap Footer 02"
design (source: https://colorlib.com/wp/template/bootstrap-footer-02/), built
under a DIFFERENT name (**Epilogue** — the closing section of a literary work,
a fitting name for a footer template, continuing the back-matter naming of the
sibling Footer 01 recreation "Colophon"; a single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/` or `docs/templates/` — verified
2026-08-16), per the monorepo naming mandate, with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript. The page is a footer-only component
demo: a light-gray `70vh` filler area (labeled "Footer #2" in the source) →
the footer itself — a dark charcoal `#202126` band (`padding: 7rem 0`) with
three columns (About Us + subscribe form with a fused orange pill Send button,
Latest Tweet list, Instagram 2×2 gallery) and a bottom bar split by a hairline
border (menu links left, site logo right).

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 02" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a 70vh filler
  strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-02/. TEMPLATES.md has ONE
  copy (line 778, `- [ ]` unchecked). This prep: Bootstrap Footer 02 →
  **Epilogue**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (same as Footer 01 — verified again):** the standard
  `https://preview.colorlib.com/theme/bootstrap-footer-02/` returns **HTTP
  404** ("Not Found"). The "Bootstrap *" series is served under the
  **`/theme/bft/`** prefix: the real preview is
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-02/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-02/` (HTTP 200,
  19,444 bytes HTML, `<title>Footer 02</title>`). Stylesheets:
  `css/bootstrap.min.css` (**Bootstrap v4.5.3**, 160,392 bytes),
  `fonts/icomoon/style.css` (icon font, 79,820 bytes), `css/style.css` (the
  template CSS — **3,882 bytes / 122 lines**, all custom rules below are from
  it). No JS libs beyond Bootstrap bundle + jQuery/popper (not needed by the
  footer); no Google Fonts `<link>` (fonts come from system stacks).
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-02.jpg`, 1200×972, viewed in browser):** matches the live
  DOM (only variance: the screenshot renders the tweet glyphs in orange while
  the current CSS colors the tweet icon spans white `#fff` — follow the live
  DOM/CSS as authoritative). Large light-gray (`#f8f9fa`) demo area with
  "Footer #2" centered in dark text; below it the deep charcoal `#202126`
  footer with three columns — "About Us" (blurb, phone + envelope quick-info
  with orange `#f88020` icons, dark-gray pill email input with an orange
  pill "Send" button fused inside its right edge), "Latest Tweet" (three
  italic serif tweet snippets with icon glyphs), "Instagram" (2×2 grid of
  square photos with 5px gutters); then a bottom bar separated by a hairline
  `rgba(255,255,255,.1)` border: inline menu (Home / About / Our works /
  Services / Blog / Contacts — white, stacking on mobile) left and the site
  logo right (the source brands "Colorlib" — the recreation uses the NEW name
  **Epilogue**).
- **Structure (DOM order, 1:1):** `div.content.d-flex.align-items-center.bg-light`
  (height `70vh`, `h2.w-100.text-center` "Footer #2") → `footer.footer-32892.pb-0`
  (bg `#202126`, `padding: 7rem 0`, color `#888`, font-size 16px) →
  `div.site-section > div.container > div.row`:
  1. `div.col-md.pr-md-5` — **About Us**: `h3` "About Us"; `p.mb-4` blurb;
     `ul.list-unstyled.quick-info.mb-4`: 2× `li > a.d-flex.align-items-center`
     — `span.icon.icon-phone.mr-3` + "+1 291 3912 329", `span.icon.icon-envelope.mr-3`
     - "info@gmail.com"; `form.subscribe` — `input.form-control` (placeholder
       "Enter your e-mail") + `input.btn.btn-submit` value "Send"
  2. `div.col-md.mb-4.mb-md-0` — **Latest Tweet**: `ul.list-unstyled.tweets`:
     3× `li.d-flex` — `div.mr-4 > span.icon.icon-twitter` + tweet text
  3. `div.col-md-3.mb-4.mb-md-0` — **Instagram**: `div.row.gallery` with two
     `div.col-6` columns, each holding 2 `a > img` (images img_1..4.jpg)
  4. `div.col-12` — bottom bar: `div.py-5.footer-menu-wrap.d-md-flex.align-items-center`:
     `ul.list-unstyled.footer-menu.mr-auto` — Home / About / Our works /
     Services / Blog / Contacts; `div.site-logo-wrap.ml-auto > a.site-logo`
     "Colorlib"
- **Grid behavior (Bootstrap 4.5.3, reproduce responsively):** the three
  columns are `col-md` (equal-width auto, ~50% each on md+) and `col-md-3`
  (25% on md+) — all three fit one row on md+; below md all three stack
  full-width. The bottom bar is `d-md-flex`: menu left (`mr-auto`) + logo
  right (`ml-auto`) on md+, stacking (menu links become block) below 768px.

## Design tokens (from the reference)

| Token             | Value                                                                                                                                                                                                                                                                                                                       | Source                                    |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| Font family       | **Roboto** body stack (`"Roboto", -apple-system, ...`); footer + footer `h3` use **Poppins**; footer paragraphs and tweets use **Source Serif Pro** (serif)                                                                                                                                                                 | `css/style.css` `body`, `.footer-32892`   |
| Footer background | **`#202126`** (deep charcoal) — footer band, `padding: 7rem 0`, text `#888`, font-size 16px                                                                                                                                                                                                                                 | `.footer-32892`                           |
| Accent            | **`#f88020`** (vibrant orange) — quick-info icons AND the fused subscribe Send button                                                                                                                                                                                                                                       | `.quick-info li .icon`, `.btn-submit`     |
| Input background  | **`#292b31`** (lighter charcoal) — email input; text `#fff`, placeholder `#ccc` 14px                                                                                                                                                                                                                                        | `.subscribe .form-control`                |
| Headings          | `h3`: **20px, `#fff`, `margin-bottom: 30px`**, font Poppins                                                                                                                                                                                                                                                                 | `.footer-32892 h3`                        |
| Muted text        | **`#888`** — footer body text; tweet text 15px **italic** Source Serif Pro, `margin-bottom: 20px` per item; tweet icon spans `#fff` (screenshot shows orange — CSS wins)                                                                                                                                                    | `.footer-32892`, `.tweets li`             |
| Quick info        | `li` `#fff` 16px, `margin-bottom: 10px`; icon 20px `#f88020`                                                                                                                                                                                                                                                                | `.quick-info li`, `.quick-info li .icon`  |
| Subscribe form    | Input: bg `#292b31`, **`border-radius: 30px`**, height **55px**, `padding-left: 30px` + `padding-right: 130px`, no border. Send button: bg `#f88020`, height **47px**, radius 30px, white bold, **absolutely positioned `top: 4px; right: 4px` INSIDE the input** (fused pill-in-pill), shadow `0 2px 2px 0 rgba(0,0,0,.2)` | `.subscribe .form-control`, `.btn-submit` |
| Gallery           | `row.gallery` with `-5px` outer gutters and 5px column padding (square photos, 2×2); link hover `opacity: .5`                                                                                                                                                                                                               | `.row.gallery`, `.gallery a`              |
| Bottom bar        | `border-top: 1px solid rgba(255,255,255,.1)`, `padding-top: 2rem`, `margin-top: 7rem`; menu links `#fff`, `padding: 10px` (first child `padding-left: 0`); below 768px links stack block with `padding-left: 0`                                                                                                             | `.footer-menu-wrap`, `.footer-menu li a`  |
| Logo              | `.site-logo`: **20px, `#fff`** (no uppercase/letter-spacing in this footer)                                                                                                                                                                                                                                                 | `.site-logo`                              |
| Light filler      | **`#f8f9fa`** (Bootstrap `light`) — the 70vh demo area above the footer                                                                                                                                                                                                                                                     | Bootstrap `bg-light` / `.content`         |
| Section rhythm    | Filler 70vh; footer `padding: 7rem 0`; bottom bar `margin-top: 7rem`                                                                                                                                                                                                                                                        | `.content`, `.footer-32892`               |
| Mobile behavior   | Below md: three columns stack; bottom bar stacks with menu links as block rows and logo below                                                                                                                                                                                                                               | Bootstrap classes + media query           |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Epilogue app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler area and the footer inside the
  main landmark
- **AND** the document title SHALL be "Epilogue — Footer"

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
  **"Footer #2"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: About Us column

The system SHALL render the About Us column with the source's blurb,
quick-info contact lines (orange icons), and the fused subscribe form.

#### Scenario: About Us content renders

- **GIVEN** the footer is rendered
- **WHEN** the user inspects the first column
- **THEN** the column SHALL show the heading **"About Us"** (20px white) and a
  short paragraph blurb
- **AND** two quick-info links SHALL show an orange (`#f88020`) icon and white
  text: a phone line **"+1 291 3912 329"** and an email line
  **"info@gmail.com"** (16px, 10px spacing)
- **AND** a subscribe form SHALL show an email input (placeholder "Enter your
  e-mail", 55px tall, `#292b31` pill) with a **"Send"** button (orange
  `#f88020` pill, 47px, white bold) fused into its right edge (absolute
  `top: 4px; right: 4px`)
- **AND** submitting an invalid email SHALL show a per-field error and block
  submission
- **AND** submitting a valid email SHALL show a success message (the source
  has no backend — validate client-side, screen-reader friendly)

### Requirement: Latest Tweet column

The system SHALL render the Latest Tweet column with three italic serif tweet
items and icon glyphs.

#### Scenario: Tweet items render

- **GIVEN** the About Us column is rendered
- **WHEN** the user inspects the second column
- **THEN** the column SHALL show the heading **"Latest Tweet"** (20px white)
- **AND** three tweet items SHALL be visible, each with an icon glyph on the
  left and italic serif text (15px, `margin-bottom: 20px`) on the right
- **AND** the tweet text SHALL be paraphrased placeholder copy of the same
  kind (the source repeats one lorem tweet three times)

### Requirement: Instagram gallery column

The system SHALL render the Instagram column as a 2×2 grid of square photos.

#### Scenario: Gallery renders

- **GIVEN** the Latest Tweet column is rendered
- **WHEN** the user inspects the third column
- **THEN** the column SHALL show the heading **"Instagram"** (20px white)
- **AND** a 2×2 grid of four square images SHALL be visible (two `col-6`
  rows with 5px gutters; hover `opacity: .5`)
- **AND** each image SHALL link somewhere and have alt text (the source uses
  bare images — the recreation SHALL add descriptive alt attributes)
- **NOTE (image sourcing):** use seeded picsum placeholders
  (`https://picsum.photos/seed/epilogue-<n>/400/400`, n = 1..4) — subject
  photos are not critical for a footer gallery; no asset copying.

### Requirement: Bottom menu bar

The system SHALL render the bottom bar with the source's menu links and the
renamed site logo, plus the mandatory Component Dock credit.

#### Scenario: Menu bar renders with links and logo

- **GIVEN** the gallery column is rendered
- **WHEN** the user scrolls to the bottom bar
- **THEN** a hairline `rgba(255,255,255,.1)` top border SHALL separate the bar
  from the columns above (`margin-top: 7rem`, `padding-top: 2rem`)
- **AND** the inline menu SHALL show links **Home / About / Our works /
  Services / Blog / Contacts** in white (10px padding; first item
  `padding-left: 0`), stacked as block rows below 768px
- **AND** the site logo SHALL read **"Epilogue"** in white 20px on the right
  (the source brands "Colorlib" — provenance stays out of app code)
- **AND** the footer SHALL contain a link to
  `https://www.componentdock.com/` branded as "Component Dock" (e.g. a
  "Made with Component Dock" line near the logo or copyright — the monorepo
  mandate per conventions.md)

### Requirement: Responsive layout

The system SHALL reproduce the source's responsive grid behavior.

#### Scenario: Columns adapt across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the md breakpoint (≥768px)
- **THEN** the three columns SHALL fit in one row (About Us and Latest Tweet
  equal-width, Instagram 25%)
- **AND** below 768px all three columns SHALL stack full-width
- **AND** below 768px the bottom bar SHALL stack with menu links as block
  rows (padding-left 0) and the logo below

### Requirement: Accessibility

The system SHALL expose semantic landmarks, accessible icons, and
keyboard-operable interactivity.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark and a semantic `<footer>`
  landmark
- **AND** all icon glyphs (phone, envelope, tweet icons) SHALL have
  `aria-hidden` with the text making the link's purpose clear (the source
  uses bare icon-font spans)
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring
- **AND** the form SHALL have a labeled input (the source has no label —
  the recreation SHALL use a visually-hidden `<label>` or `aria-label`)

## Verification checklist

- [ ] `npm run verify:app epilogue` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Epilogue — Footer"
- [ ] Filler: `#f8f9fa` area (~70vh) with a centered demo label
- [ ] Footer: `#202126` bg, `padding: 7rem 0`, muted `#888` body text
- [ ] About Us column: h3 "About Us" (20px white) + blurb + quick-info
      (orange `#f88020` phone/envelope icons, white 16px text) + subscribe
      form: `#292b31` 55px pill input (padding-right 130px) with orange
      47px pill "Send" button fused at `top:4px; right:4px`; zod validation +
      error/success states
- [ ] Latest Tweet: h3 + 3 items, italic serif text, icon glyphs
- [ ] Instagram: h3 + 2×2 square image grid (5px gutters, hover opacity .5,
      alt text; picsum seeds `epilogue-1..4`)
- [ ] Bottom bar: hairline `rgba(255,255,255,.1)` border-top, margin-top 7rem;
      menu Home/About/Our works/Services/Blog/Contacts white; logo
      "Epilogue" 20px white right; Component Dock link
      `https://www.componentdock.com/`
- [ ] Responsive: 3 columns in one row on md+ (Instagram 25%); stacked below
      768px; menu links stack block below 768px
- [ ] Fonts: Roboto + Poppins + Source Serif Pro via Google Fonts `<link>` in
      `index.html`
- [ ] NO ColorLib reference anywhere in `apps/epilogue` (provenance lives only
      here + TEMPLATES.md + PR)
