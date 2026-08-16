# Template: Coda (Footer)

## Purpose

Coda is a footer-component demo in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Bootstrap Footer 04"
design (source: https://colorlib.com/wp/template/bootstrap-footer-04/), built
under a DIFFERENT name (**Coda** — the concluding passage of a piece of
music or literature, a fitting name for a footer template; a single lowercase
word, kebab-case, no collision with `apps/`, `openspec/specs/` or
`docs/templates/` — verified 2026-08-16), per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The
page is a footer-only component demo: a light-gray `70vh` filler area
(labeled "Footer #4" in the source) → the footer itself — a stark SOLID
BLACK `#000` band (`padding: 7rem 0`, muted `#777` body text) with a bold
white 26px brand logo + blurb column and three right-side link columns
(Shop / Press / About), then a faint white divider line, a bottom utility
row (white legal links left, four icon-font social glyphs right), and a
muted small-text copyright row. No images, no buttons, no newsletter.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 04" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a 70vh
  filler strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-04/. TEMPLATES.md has ONE
  copy (line 780, `- [ ]` unchecked). This prep: Bootstrap Footer 04 →
  **Coda**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (same as the rest of the series — see the colophon
  prep):** `https://preview.colorlib.com/theme/bootstrap-footer-04/` returns
  **HTTP 404** ("Not Found"). The footer series is served under the
  **`/theme/bft/`** prefix (NOT `/theme/bootstrap/`): the live preview is
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-04/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-04/` (HTTP 200,
  18,675 bytes HTML, `<title>Footer 04</title>`). Stylesheets:
  `fonts/icomoon/style.css` (icon font), `css/bootstrap.min.css`
  (**Bootstrap v4.5.3**, shared with the series), `css/style.css` (10,439
  bytes — a SHARED sheet bundling the custom rules of MANY footer designs
  `.footer-14398`, `.footer-59391`, `.footer-95942`, `.footer-48201`,
  `.footer-99382`, `.footer-16371`, `.footer-39201`, …). **The footer-04 DOM
  uses ONLY `.footer-14398`** (verified: no other `footer-\d+` class in the
  HTML) — ignore every other block in the sheet. No JS libs, no Google Fonts
  `<link>` (Roboto comes from a system stack — the recreation adds the
  Google Fonts `<link>` in index.html).
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-04.jpg`, viewed in browser):** stark, high-contrast,
  minimal. Screenshot matches the live DOM exactly (NO variance): light-gray
  (`#f8f9fa`) demo area with "Footer #4" centered; below it a solid black
  footer with a bold white "Colorlib" logo + gray lorem blurb in the left
  column, three white-headed link columns (Shop / Press / About) with gray
  links, a faint divider line, then a bottom row with white legal links
  (Privacy Policy / Terms & Conditions / Code of Conduct) on the left and
  four light-gray social glyphs on the right, and a muted small-text row at
  the very bottom. Clean sans-serif throughout (Roboto).
- **Structure (DOM order, 1:1):** `div.content.d-flex.align-items-center.bg-light`
  (height 70vh, `h2.w-100.text-center` "Footer #4") → `footer.footer-14398`
  (bg `#000`, `color: #777`, `padding: 7rem 0`) →
  `div.container`:
  1. `div.row.mb-5` — FOUR columns:
     - `div.col-md-3`: `a.footer-site-logo` "Colorlib" (white, 26px, bold,
       block, `margin-bottom: 30px`) + `p` lorem blurb (inherits `#777`)
     - `div.col-md-2.ml-auto`: `h3` "Shop" + `ul.list-unstyled.links`: Sell
       online, Features, Examples, Website editors, Online retail
     - `div.col-md-2.ml-auto`: `h3` "Press" + links: Events, News, Awards,
       Testimonials, Online retail
     - `div.col-md-2.ml-auto`: `h3` "About" + links: Contact, Services,
       Team, Career, Contacts
  2. `div.row.mb-4` — divider + utility row:
     - `div.col-12.pb-4` > `div.line` (border-top `1px solid
rgba(255,255,255,0.2)`)
     - `div.col-md-6.text-md-left` > `ul.list-unstyled.link-menu.nav-left`:
       Privacy Policy, Terms & Conditions, Code of Conduct (white, inline)
     - `div.col-md-6.text-md-right` > `ul.list-unstyled.social.nav-right`:
       FOUR `li > a > span` icon-font glyphs: `icon-twitter`,
       `icon-instagram`, `icon-facebook`, `icon-pinterest`
  3. `div.row` — `div.col-md-7` > `p` > `small`: lorem placeholder copy
     (source uses Lorem ipsum here, not a real copyright — the recreation
     SHALL use "© <current year> Coda" + the mandatory Component Dock link)
- **Grid behavior (Bootstrap 4.5.3, reproduce responsively):** first row =
  `col-md-3` (25% on md+) + 3× `col-md-2` with `ml-auto` (16.67% each). The
  three auto left-margins absorb the remaining 25% equally, so on md+ the
  four columns render evenly distributed across the row. Below md all four
  columns stack full-width (brand first, then Shop / Press / About). Second
  row = 2× `col-md-6` → legal left + socials right on md+, stacked below.
  Bottom row `col-md-7` → left-aligned, full-width below md.

## Design tokens (from the reference — `.footer-14398` only)

| Token                 | Value                                                                                                                                                                                              | Source                              |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| Font family           | **Roboto** — body + headings stack `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` (+ emoji fallbacks)                         | `css/style.css` `body`, `h1..h6`    |
| Footer background     | **`#000`** (solid BLACK) — footer band, `padding: 7rem 0`, body text `#777`                                                                                                                        | `.footer-14398`                     |
| Brand logo            | `.footer-site-logo`: **white, 26px, `font-weight: bold`, `display: block`, `margin-bottom: 30px`**                                                                                                 | `.footer-14398 .footer-site-logo`   |
| Column heading        | `h3`: **white, 16px, `margin-bottom: 20px`** (NOT bold in the source)                                                                                                                              | `.footer-14398 h3`                  |
| Link list             | `li`: `margin-bottom: 10px`; `a`: **`#999`**, hover → **`#fff`**; global `transition: .3s all ease` on every `a`                                                                                   | `.footer-14398 .links li`, `a` rule |
| Legal links           | `.link-menu li` `display: inline-block`; `a` **white, `padding: 10px`**; `.nav-left li:first-child a` `padding-left: 0`; `.nav-right li:last-child a` `padding-left: 0` (source typo — keep as-is) | `.footer-14398 .link-menu *`        |
| Social glyphs         | `.social li` `display: inline-block`; `a` `padding: 10px`, **color `#ccc`** (icon-font glyphs — NOT circles, NO background, NO radius — unlike footer-01)                                          | `.footer-14398 .social li a`        |
| Divider line          | `.line`: `border-top: 1px solid rgba(255, 255, 255, 0.2)` (faint white)                                                                                                                            | `.footer-14398 .line`               |
| Bottom text           | `small` in `p` inside `col-md-7` — inherits `#777` muted gray                                                                                                                                      | DOM + `.footer-14398` color         |
| Filler area           | `.content`: `height: 70vh`, Bootstrap `bg-light` = **`#f8f9fa`**, `d-flex align-items-center` with a centered `h2.w-100.text-center` label "Footer #4"                                             | `.content` + Bootstrap classes      |
| Link hover/transition | `a { transition: .3s all ease; }`; `a, a:hover { text-decoration: none !important; }` (global)                                                                                                     | `css/style.css` top rules           |
| Mobile behavior       | First row stacks below md (`col-md-*`); second row `col-md-6` pair stacks; bottom row full-width — no horizontal scroll                                                                            | Bootstrap classes                   |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Coda app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler area and the footer inside the
  main landmark
- **AND** the document title SHALL be "Coda — Footer"

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
  **"Footer #4"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Brand column

The system SHALL render the brand column with the renamed brand logo, a
blurb paragraph, and the mandatory monorepo Component Dock credit (the
source brands "Colorlib" — the Component Dock link is the monorepo addition
per conventions.md; NO ColorLib reference in app code).

#### Scenario: Brand logo, blurb, and Component Dock link

- **GIVEN** the filler area is rendered
- **WHEN** the user scrolls to the footer's brand column
- **THEN** a brand link SHALL read **"Coda"** in white, 26px, bold, block
  layout, `margin-bottom: 30px` (the source's `.footer-site-logo` treatment)
- **AND** a muted `#777` paragraph SHALL sit below it (the source uses a
  lorem blurb — the recreation keeps the same kind of one-sentence
  description)
- **AND** the footer SHALL contain a link to
  `https://www.componentdock.com/` branded as "Component Dock" (e.g. a
  "Made with Component Dock" line in the brand column or the bottom row)

### Requirement: Link columns

The system SHALL render the three link columns with the source's exact
column headings and link sets, styled per the reference tokens.

#### Scenario: Link columns render with source copy

- **GIVEN** the brand column is rendered
- **WHEN** the user inspects the link columns
- **THEN** three columns SHALL be visible, each with a white 16px `h3`
  heading (`margin-bottom: 20px`) and a link list (`#999` links,
  `margin-bottom: 10px` per item, hover → `#fff`):
  1. **Shop** — Sell online, Features, Examples, Website editors, Online
     retail
  2. **Press** — Events, News, Awards, Testimonials, Online retail
  3. **About** — Contact, Services, Team, Career, Contacts
- **AND** the columns SHALL use the source's grid treatment (`col-md-2` +
  `ml-auto` each) so they sit evenly distributed beside the brand column on
  md+ and stack below it on smaller screens

### Requirement: Bottom utility row

The system SHALL render the divider line, the white legal link set, and the
four social glyphs exactly as the source orders them.

#### Scenario: Divider, legal links, and socials render

- **GIVEN** the link columns are rendered
- **WHEN** the user scrolls to the bottom utility row
- **THEN** a faint divider line SHALL separate the columns from the utility
  row (`border-top: 1px solid rgba(255,255,255,0.2)`)
- **AND** three white inline legal links SHALL render on the left:
  **Privacy Policy**, **Terms & Conditions**, **Code of Conduct**
  (`display: inline-block`, `padding: 10px` per link)
- **AND** four social links SHALL render on the right (icon glyphs in
  `#ccc`, `padding: 10px`, inline — **NOT circles**), in the source's order:
  1. **Twitter**
  2. **Instagram**
  3. **Facebook**
  4. **Pinterest**
- **NOTE (lucide-react limitation):** lucide-react REMOVED brand icons
  (Twitter/Instagram/Facebook/Pinterest are `undefined` exports) — render
  the four brand glyphs as inline SVGs (simple-icons paths), matching the
  skill's brand-icon guidance. Probe every icon import with the `typeof`
  check before committing.

### Requirement: Bottom copyright row

The system SHALL render the muted small-text row; the source's lorem
placeholder becomes a real copyright + the Component Dock credit.

#### Scenario: Copyright and Component Dock link render

- **GIVEN** the utility row is rendered
- **WHEN** the user scrolls to the bottom of the footer
- **THEN** a muted `#777` small-text line SHALL render, reading
  **"© <current year> Coda"** (the source shows a Lorem ipsum placeholder in
  `col-md-7`; the recreation uses a real copyright, left-aligned)
- **AND** the Component Dock link SHALL be present (brand column or this
  row), linking `https://www.componentdock.com/`

### Requirement: Responsive layout

The system SHALL reproduce the source's responsive grid behavior.

#### Scenario: Columns adapt across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the md breakpoint (≥768px)
- **THEN** the brand column (25%) and the three link columns (16.67% each,
  auto left-margins) SHALL render evenly distributed in one row, with the
  legal links and socials side-by-side (`col-md-6` pair)
- **AND** below the md breakpoint all columns SHALL stack full-width
  (brand → Shop → Press → About, then legal links above socials)
- **AND** the page SHALL never overflow horizontally

### Requirement: Accessibility

The system SHALL expose semantic landmarks, accessible social links, and
keyboard-operable interactivity.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark and a semantic `<footer>`
  landmark
- **AND** all icon-only social buttons SHALL have `aria-label`s (Twitter,
  Instagram, Facebook, Pinterest)
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring

## Verification checklist

- [ ] `npm run verify:app coda` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Coda — Footer"
- [ ] Filler: `#f8f9fa` area (~70vh) with a centered demo label
- [ ] Footer band: SOLID BLACK `#000`, `padding: 7rem 0`, body text `#777`;
      semantic `<footer>` + main landmark
- [ ] Brand column: "Coda" white 26px bold block logo (mb-30); muted `#777`
      blurb paragraph; Component Dock link
      `https://www.componentdock.com/`
- [ ] Link columns: Shop (Sell online, Features, Examples, Website editors,
      Online retail) / Press (Events, News, Awards, Testimonials, Online
      retail) / About (Contact, Services, Team, Career, Contacts) — white
      16px h3 (mb-20), links `#999` hover `#fff`, 10px item spacing
- [ ] Divider `.line`: `border-top: 1px solid rgba(255,255,255,0.2)`
- [ ] Legal links: Privacy Policy / Terms & Conditions / Code of Conduct —
      white inline-block, padding 10px, left-aligned
- [ ] Socials: 4 icon glyphs `#ccc` inline (NOT circles) — Twitter,
      Instagram, Facebook, Pinterest (inline SVG brand icons per lucide
      limitation); `aria-label`s on each; right-aligned
- [ ] Bottom row: "© <current year> Coda" small muted `#777` text +
      Component Dock link
- [ ] Responsive: 4 columns evenly spread on md+ (col-md-3 + 3× col-md-2
      ml-auto), stacked below md; legal/socials side-by-side on md+; no
      horizontal overflow
- [ ] Roboto via Google Fonts `<link>` in `index.html`
- [ ] NO images needed (the source footer is image-free — no picsum
      placeholders required); NO ColorLib reference anywhere in `apps/coda`
      (provenance lives only here + TEMPLATES.md + PR)
