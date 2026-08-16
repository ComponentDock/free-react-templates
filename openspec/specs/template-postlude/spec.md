# Template: Postlude (Footer)

## Purpose

Postlude is a footer-component demo in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Bootstrap Footer 07"
design (source: https://colorlib.com/wp/template/bootstrap-footer-07/), built
under a DIFFERENT name (**Postlude** — a piece of music played at the end of
a performance or service, continuing the footer series' ending-themed naming:
Colophon (01) → Epilogue (02) → Envoi (03) → Coda (04) → Outro (05) → Finale
(06) → **Postlude** (07); a single lowercase word, kebab-case, no collision
with `apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-16),
per the monorepo naming mandate, with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The page is a footer-only component demo: a
light-gray `70vh` filler area (labeled "Footer #7" in the source) → the
footer itself — a BLACK `#000` band (`padding: 7rem 0`) with a left column
(white 1.5rem logo + gray blurb paragraph), three nav-link columns (5 / 5 / 3
links), a right column (five social icons + a PINK pill "Contact Us" button),
and a centered copyright row separated by a `#404040` top border. One brand
color, `#e42c64` (vivid pink/magenta), used ONLY for the tertiary "Contact
Us" button. The footer is DARK: black background, white logo, gray links that
whiten on hover. No images, no forms.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 07" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a 70vh
  filler strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-07/. TEMPLATES.md has ONE
  copy (line 783, `- [ ]` unchecked). This prep: Bootstrap Footer 07 →
  **Postlude**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (same as the rest of the series — see the colophon
  prep):** `https://preview.colorlib.com/theme/bootstrap-footer-07/` returns
  **HTTP 404** ("Not Found"). The footer series is served under the
  **`/theme/bft/`** prefix (NOT `/theme/bootstrap/`): the live preview is
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-07/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-07/` (HTTP 200,
  18,009 bytes HTML, `<title>Footer 07</title>`). Stylesheets:
  `fonts/icomoon/style.css` (icon font), `css/bootstrap.min.css`
  (**Bootstrap v4.5.3**, shared with the series), `css/style.css` (1,425
  bytes — a DEDICATED sheet containing ONLY the `.footer-48201` rules,
  verified: no other `footer-\d+` class anywhere in the HTML or the sheet).
  No JS behavior needed (jquery/popper/bootstrap.min.js are loaded but the
  footer is static — the recreation needs none of them). No Google Fonts
  `<link>` — the page declares `"Roboto", sans-serif` on `body` which falls
  back to a system stack in the preview; the recreation ADDS the Google
  Fonts Roboto `<link>` in index.html. NOTE: this design uses **Roboto**
  (body font), NOT Poppins like footer-05/06.
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-07.jpg`, viewed in browser):** sleek, high-contrast,
  DARK, corporate/creative-agency aesthetic. Screenshot matches the live DOM
  exactly (NO variance): light-gray (`#f8f9fa`) demo area with "Footer #7"
  centered; below it a SOLID BLACK footer. Top-left: bold WHITE "Colorlib"
  logo (1.5rem) with a small gray lorem paragraph under it. Center: three
  columns of stacked gray links (no headings) — Home/About Us/Portfolio/
  Services/Contact; Clients/Team/Career/Testimonials/Journal; Privacy
  Policy/Terms & Conditions/Partners. Right: five small gray social icons
  (Instagram, Twitter, Facebook, Pinterest, Dribbble) centered, and below
  them a VIVID PINK pill button "Contact Us" (white text, `border-radius:
30px`). Bottom: a thin `#404040` divider line above a centered small
  copyright "© 2019-2020 All Rights Reserved.". Clean sans-serif throughout
  (Roboto).
- **Structure (DOM order, 1:1):** `div.content.d-flex.align-items-center.bg-light`
  (height 70vh, `h2.w-100.text-center` "Footer #7") →
  `footer.footer-48201` (bg `#000`, `color: #777`, `padding: 7rem 0`,
  NO border-top on the footer itself) → `div.container` → `div.row`:
  1. `div.col-md-4.pr-md-5` — `a.footer-site-logo.d-block.mb-4` **"Colorlib"**
     (brand logo → recreation **"Postlude"**, 1.5rem, `#fff`) + `p` (Lorem
     ipsum blurb, no class)
  2. `div.col-md` — `ul.list-unstyled.nav-links`: **Home, About Us,
     Portfolio, Services, Contact** (5 links, NO column heading)
  3. `div.col-md` — `ul.list-unstyled.nav-links`: **Clients, Team, Career,
     Testimonials, Journal** (5 links, NO column heading)
  4. `div.col-md` — `ul.list-unstyled.nav-links`: **Privacy Policy, Terms &
     Conditions, Partners** (3 links, NO column heading)
  5. `div.col-md.text-md-center` — `ul.social.list-unstyled`: FIVE `li > a`
     icon-only social links (each `> span` icon-font glyph): `icon-instagram`,
     `icon-twitter`, `icon-facebook`, `icon-pinterest`, `icon-dribbble`,
     then `p` (no class) → `a.btn.btn-tertiary` **"Contact Us"**
     then a second `div.row`:
  6. `div.col-12.text-center` → `div.copyright.mt-5.pt-5` → `p > small`
     "© 2019-2020 All Rights Reserved." (recreation SHALL use
     "© <current year> Postlude" + the mandatory Component Dock link)
- **Grid behavior (Bootstrap 4.5.3, reproduce responsively):** Row 1 =
  `col-md-4` (logo+blurb, 33.33%, with `pr-md-5` = `padding-right: 3rem` on
  md+) + `col-md` ×3 (equal-width link columns) + `col-md text-md-center`
  (socials+button, text centered on md+). On md+ (≥768px) all five columns
  share one row; below md (576–767px and down) each `col-md-*`/`col-md`
  column stacks FULL-WIDTH in DOM order (logo → nav1 → nav2 → nav3 →
  socials+button). Row 2 = `col-12 text-center`, full-width, with the
  copyright block padded by `mt-5 pt-5` (Bootstrap = `margin-top: 3rem`,
  `padding-top: 3rem`) above the `#404040` border-top. No order flips.

## Design tokens (from the reference — `.footer-48201` only)

| Token             | Value                                                                                                                                                                                                                                                                                                           | Source                                |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Font family       | **Roboto** — `body` sets `font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...` (NOT Poppins like footer-05/06; `.footer-48201` declares NO font-family, it inherits body). NOT loaded in the preview (system fallback) — the recreation adds the Google Fonts `<link>` for Roboto | `css/style.css` `body`                |
| Footer background | **`#000`** (BLACK) — `padding: 7rem 0`, `color: #777`; NO `border-top` on the footer itself                                                                                                                                                                                                                     | `.footer-48201`                       |
| Brand color       | **`#e42c64`** (vivid pink/magenta) — used ONLY for the `.btn.btn-tertiary` "Contact Us" button (bg); nothing else is branded                                                                                                                                                                                    | `.footer-48201 .btn.btn-tertiary`     |
| Brand logo        | `.footer-site-logo`: **1.5rem, `color: #fff`, `display: block`, `margin-bottom: 1.5rem` (Bootstrap `mb-4`)**                                                                                                                                                                                                    | `.footer-48201 .footer-site-logo`     |
| Blurb paragraph   | Plain `p`, inherits `color: #777`, default size; no class                                                                                                                                                                                                                                                       | DOM                                   |
| Nav links         | `li` **`display: block`, `margin-bottom: 10px`**; `a` **`color: gray`** (≈#808080), hover → **`#fff`**; NO column headings anywhere                                                                                                                                                                             | `.footer-48201 .nav-links li`, `li a` |
| Social icons      | `li` inline-block; `a` **`color: gray`, `padding: 7px`**, hover → **`#fff`**; no circle backgrounds (unlike footer-05's 40px circles — plain glyphs)                                                                                                                                                            | `.footer-48201 .social li a`          |
| Tertiary button   | `.btn.btn-tertiary`: **`background-color: #e42c64`, `color: #fff`, `border-radius: 30px` (PILL), `border: none`, `padding: 10px 20px`**; no box-shadow                                                                                                                                                          | `.footer-48201 .btn.btn-tertiary`     |
| Copyright divider | `div.copyright`: **`border-top: 1px solid #404040`**; wrapper `div.row` → `div.col-12.text-center` → `div.copyright.mt-5.pt-5` (Bootstrap `mt-5` = `margin-top: 3rem`, `pt-5` = `padding-top: 3rem`)                                                                                                            | `.footer-48201 .copyright` + classes  |
| Copyright text    | `p > small` (Bootstrap `small` = 80% font-size, inherits `#777`) — centered; source "© 2019-2020 All Rights Reserved." → recreation **"© <current year> Postlude"** + Component Dock link                                                                                                                       | DOM + Bootstrap classes               |
| Filler area       | `.content`: `height: 70vh`, Bootstrap `bg-light` = **`#f8f9fa`**, `d-flex align-items-center` with a centered `h2.w-100.text-center` label "Footer #7"                                                                                                                                                          | `.content` + Bootstrap classes        |
| Link transition   | `a { transition: .3s all ease; }`; `a, a:hover { text-decoration: none !important; }` (global)                                                                                                                                                                                                                  | `css/style.css` top rules             |
| Icons             | icomoon (FontAwesome codepoints): `icon-instagram` `\f16d`, `icon-twitter` `\f099`, `icon-facebook` `\f09a`, `icon-pinterest` `\f0d2`, `icon-dribbble` `\f17d` — brand glyphs only                                                                                                                              | `fonts/icomoon/style.css`             |
| Mobile behavior   | All five columns stack full-width below md (768px) in DOM order; `pr-md-5` right-padding on the logo column md+ only; copyright row always full-width — no horizontal scroll                                                                                                                                    | Bootstrap classes                     |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Postlude app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler area and the footer inside the
  main landmark
- **AND** the document title SHALL be "Postlude — Footer"

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
  **"Footer #7"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Brand column

The system SHALL render the left brand column with the renamed logo and the
blurb paragraph.

#### Scenario: Logo and blurb render

- **GIVEN** the filler area is rendered
- **WHEN** the user inspects the top-left of the footer
- **THEN** a brand link SHALL render reading **"Postlude"** in **1.5rem,
  `#fff`**, block-displayed with a 1.5rem bottom margin (the source's
  `.footer-site-logo.d-block.mb-4` treatment; source brand "Colorlib")
- **AND** a `#777` paragraph of placeholder blurb text SHALL render below the
  logo (the source shows lorem ipsum; keep the same kind of content — a
  short company description)

### Requirement: Nav link columns

The system SHALL render the three stacked link columns with the source's
exact link copy and NO column headings (the source columns are heading-free).

#### Scenario: Three columns render with links

- **GIVEN** the brand column is rendered
- **WHEN** the user inspects the middle of the footer
- **THEN** three columns of stacked links SHALL render in this order, each
  `li` block-displayed with a 10px bottom margin, links `gray` (hover →
  `#fff`):
  1. **Home, About Us, Portfolio, Services, Contact** (5 links)
  2. **Clients, Team, Career, Testimonials, Journal** (5 links)
  3. **Privacy Policy, Terms & Conditions, Partners** (3 links)
- **AND** none of the columns SHALL have a heading (matching the source)

### Requirement: Social icons and CTA

The system SHALL render the five icon-only social links and the pink pill
"Contact Us" button in the right column, centered on md+, with accessible
names (the source uses bare icon spans).

#### Scenario: Social icons and button render

- **GIVEN** the nav link columns are rendered
- **WHEN** the user inspects the right of the footer
- **THEN** five social links SHALL render inline, each `gray` with `7px`
  padding, hover → `#fff`, no circle backgrounds, in this order:
  1. **Instagram**
  2. **Twitter**
  3. **Facebook**
  4. **Pinterest**
  5. **Dribbble**
- **AND** a button SHALL render below the icons reading **"Contact Us"** as a
  **pill** (`border-radius: 30px`, `padding: 10px 20px`, `background:
#e42c64`, white text, no border)
- **NOTE (lucide-react limitation):** lucide-react REMOVED brand icons
  (Instagram/Twitter/Facebook/Pinterest/Dribbble are `undefined` exports) —
  render the five brand glyphs as inline SVGs (simple-icons paths), matching
  the skill's brand-icon guidance. Probe every icon import with the `typeof`
  check before committing. lucide's `Mail`-style substitutes do NOT match —
  use real brand glyphs.

### Requirement: Copyright row

The system SHALL render the centered copyright line below a `#404040`
divider, with the renamed brand plus the mandatory Component Dock credit
(the source brands "Colorlib © 2019-2020 All Rights Reserved." — the
Component Dock link is the monorepo addition per conventions.md; NO ColorLib
reference in app code).

#### Scenario: Copyright renders centered

- **GIVEN** the social icons and CTA are rendered
- **WHEN** the user inspects the bottom of the footer
- **THEN** a 1px `#404040` top border SHALL render across the footer width
  (the source's `.copyright` border-top), with ~3rem spacing above it
  (`mt-5 pt-5`)
- **AND** a small (80%-scale) centered text line SHALL read **"© <current
  year> Postlude"** (the source shows a fixed "© 2019-2020 All Rights
  Reserved.")
- **AND** the footer SHALL contain a link to
  `https://www.componentdock.com/` branded as "Component Dock" (e.g. in the
  copyright line or brand column)

### Requirement: Responsive layout

The system SHALL reproduce the source's responsive grid behavior: five equal
columns on md+, full-width stacking below md, centered right column on md+.

#### Scenario: Columns adapt across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the md breakpoint (≥768px)
- **THEN** the five columns SHALL render side by side in one row: logo+blurb
  at ~33% (`col-md-4`, with `pr-md-5` right padding), three link columns
  equal-width (`col-md`), and the socials+CTA column with centered text
  (`text-md-center`)
- **AND** below the md breakpoint the five columns SHALL stack full-width in
  DOM order (brand → nav1 → nav2 → nav3 → socials+CTA)
- **AND** the copyright row SHALL always be full-width and centered
- **AND** the page SHALL never overflow horizontally

### Requirement: Accessibility

The system SHALL expose semantic landmarks, accessible social controls, and
keyboard-operable interactivity.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark and a semantic `<footer>`
  landmark
- **AND** the five icon-only social links SHALL have accessible names
  (Instagram, Twitter, Facebook, Pinterest, Dribbble)
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring

## Verification checklist

- [ ] `npm run verify:app postlude` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Postlude — Footer"
- [ ] Filler: `#f8f9fa` area (~70vh) with a centered demo label
- [ ] Footer band: BLACK `#000`, `color: #777`, `padding: 7rem 0`, NO
      border-top on the footer; semantic `<footer>` + main landmark
- [ ] Brand column: "Postlude" logo 1.5rem `#fff` block + `mb-4`; `#777`
      blurb paragraph below
- [ ] Three heading-free link columns, exact copy: (Home, About Us,
      Portfolio, Services, Contact) / (Clients, Team, Career, Testimonials,
      Journal) / (Privacy Policy, Terms & Conditions, Partners) — `block` li
      with 10px bottom margin, `gray` links, hover `#fff`
- [ ] Right column: 5 social icons (Instagram, Twitter, Facebook, Pinterest,
      Dribbble) inline `gray`, padding 7px, hover `#fff`, no circles —
      inline SVG brand icons per lucide limitation, `aria-label`s; below
      them the pink PILL button "Contact Us" (`bg #e42c64`, white text,
      `border-radius: 30px`, `padding: 10px 20px`, no border)
- [ ] Copyright row: 1px `#404040` border-top with `mt-5 pt-5` spacing;
      "© <current year> Postlude" small centered + Component Dock link
      `https://www.componentdock.com/`
- [ ] Responsive: 5 columns side-by-side on md+ (logo ~33% with `pr-md-5`,
      links equal, socials+CTA centered), stacked full-width below md in DOM
      order; no horizontal overflow
- [ ] Roboto via Google Fonts `<link>` in `index.html`
- [ ] NO images needed (the source footer is image-free — no picsum
      placeholders required); NO ColorLib reference anywhere in `apps/postlude`
      (provenance lives only here + TEMPLATES.md + PR)
