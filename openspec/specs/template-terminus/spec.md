# Template: Terminus (Footer)

## Purpose

Terminus is a footer-component demo in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Bootstrap Footer 12"
design (source: https://colorlib.com/wp/template/bootstrap-footer-12/), built
under a DIFFERENT name (**Terminus** — "the end point of a journey", the
twelfth entry in the footer series' ending-themed naming: Colophon → Envoi →
Epilogue → Coda → Outro → Finale → Postlude → Stretto → Fermata → Finis →
Tailpiece → **Terminus**; a single lowercase word, kebab-case, no collision
with `apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-16),
per the monorepo naming mandate, with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The page is a footer-only component demo: a
light-gray (`#f8f8f8`) filler section (source labels it "Footer #02",
`padding: 12em 0`) → the footer — a very dark charcoal band
(`background: #131719`, `padding: 5em 0`) whose top edge is straddled by a
white pill-shaped newsletter form (`.subscribe`, `margin-top: -105px` —
the form overhangs the filler/footer boundary), Poppins typeface (body
15px / line-height 1.8). Below the newsletter the grid splits: a **brand
column** ("Colorlib.com" uppercase wordmark, lorem paragraph, "read more →"
link) and FOUR border-divided link columns **"Discover"** (Buy & Sell,
Merchant, Giving back, Help & Support), **"About"** (Staff, Team, Careers,
Blog), **"Resources"** (Security, Global, Charts, Privacy), **"Social"**
(Facebook, Twitter, Instagram, Googleplus). Then a hairline partner bar
("Our Partner:" + six "Company 01"–"06" wordmarks + "See All →") and a
bottom bar with the copyright line ("…made with ♥ by Colorlib.com") on the
left and legal links Terms / Privacy / Compliances on the right. The accent
color is a muted sandy tan `#bba387` (links, read-more, See All) with the
subscribe button in a slightly deeper tan `#bfa88e`. This is the THIRD dark
variant of the series (after Stretto/footer-08 gold and Tailpiece/footer-11
violet) — tan accent, white newsletter pill, partner bar. No navbar, no hero,
no images, no forms beyond the newsletter.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 12" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a filler
  strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-12/. TEMPLATES.md has ONE
  copy (line 788, `- [ ]` unchecked). This prep: Bootstrap Footer 12 →
  **Terminus**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (series-wide — see the colophon/tailpiece preps):**
  `https://preview.colorlib.com/theme/bootstrap-footer-12/` returns **HTTP
  404** ("Not Found" — a 9-byte body). The footer series is served under the
  **`/theme/bft/`** prefix (NOT `/theme/bootstrap/`): the live preview is
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-12/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-12/` (HTTP 200,
  12,139 bytes HTML, `<title>Footer 02</title>` — the title is the variant
  label, not the series number). Stylesheets: `css/ionicons.min.css` (icon
  font — glyphs `ion-logo-ionic`, `ion-ios-arrow-round-forward`,
  `ion-ios-heart`) + `css/style.css` (223,345 bytes — the FULL shared FTCO
  sheet bundling rules for many variants; only the `.footer-02` block and
  the shared helpers apply to this page). No Google Fonts `<link>` —
  cf-fonts inline `@font-face` blocks load **Poppins** weights 300–900; body
  rule: `font-family: "Poppins", Arial, sans-serif`, `font-size: 15px`,
  `line-height: 1.8`. No JS behavior needed (jquery/popper/bootstrap.min.js
  load but the footer is static; the newsletter form has `action="#"` and no
  handler — none needed in the recreation).
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-12.jpg`, 1200×972 AVIF, viewed in browser):** screenshot
  matches the live DOM (NO variance): a large white/light-gray demo area with
  "Footer #02" centered; below it a VERY DARK charcoal footer band. Top of
  the band: a WHITE pill (rounded, subtle top shadow) containing a
  transparent email input + a tan uppercase "SUBSCRIBE" pill button — the
  pill overhangs the boundary between the light filler and the dark footer.
  Below: five content columns — (1) uppercase "COLORLIB.COM" wordmark + gray
  lorem paragraph + tan "read more →"; (2–5) "Discover", "About",
  "Resources", "Social" link columns separated by faint vertical hairlines,
  each with four low-contrast white links. Then a hairline-divided partner
  row: "Our Partner:" + six small gray uppercase "Company 01"–"06" marks
  (each with a tiny white Ionic logo glyph) + tan "See All →". Bottom row:
  left "Copyright ©2021 All rights reserved | This template is made with ♡
  by Colorlib.com", right "Terms / Privacy / Compliances". Clean, dark,
  minimal; the ONLY accents are the tan `#bba387` link color and the tan
  subscribe button `#bfa88e`.
- **Structure (DOM order, 1:1):**
  `section.ftco-section` (`padding: 12em 0`, `background: #f8f8f8`,
  `div.container` → `div.row.justify-content-center` →
  `div.col-md-6.text-center` → `h2` "Footer #02", `margin-bottom: 0`) →
  `footer.footer-02` (`background: #131719`; footer global `padding: 5em 0`)
  → `div.container`:
  - **Newsletter block** — `div.row.justify-content-center` →
    `div.col-10.col-lg-6` → `div.subscribe.mb-5` (**`margin-top: -105px`** —
    pulls the pill UP over the filler/footer boundary) →
    `form.subscribe-form` (`border-radius: 40px; background: #fff;
padding: 3px; box-shadow: 0 -12px 21px -15px rgba(0,0,0,.1)`) →
    `div.form-group.d-flex` (no bottom margin): `input.form-control.rounded-left`
    (type text, `placeholder="Enter email address"`, transparent bg, no
    border, 16px, `height: 56px`, `color: rgba(0,0,0,.3)`) +
    `input.form-control.submit.px-3` (type submit, `value="Subscribe"`,
    `width: 150px; height: 56px; font-size: 14px; background: #bfa88e;
color: #fff; text-transform: uppercase; letter-spacing: 1px;
border-radius: 40px`)
  - **Main grid** — `div.row`:
    - Brand column — `div.col-md-4.col-lg-5` → `div.row` →
      `div.col-md-12.col-lg-8.mb-md-0.mb-4`: `h2.footer-heading`
      (`font-size: 19px; color: rgba(255,255,255,.9); margin-bottom: 20px`;
      NO `:after` underline in this variant) containing `a.logo`
      (→ recreation uses its own brand; `color: #fff;
text-transform: uppercase`) + `p` (lorem "A small river named Duden
      flows by their place and supplies it with the necessary regelialia…";
      `color: rgba(255,255,255,.3)` — keep the same KIND of content) +
      `a` "read more" (accent `#bba387`) + `span.ion-ios-arrow-round-forward`
    - Link columns — `div.col-md-8.col-lg-7` → `div.row` → FOUR
      `div.col-md-3.mb-md-0.mb-4.border-left` columns
      (`border-left` border-color `rgba(255,255,255,.05)` then overridden
      `border: none` — render no visible border, or at most a faint hairline;
      the override wins): each `h2.footer-heading` (19px,
      `rgba(255,255,255,.9)`, mb 20px) + `ul.list-unstyled` → `li` →
      `a.py-1.d-block` (color `rgba(255,255,255,.4)`, hover `#fff`,
      `transition: .3s all ease`):
      1. **"Discover"** — Buy & Sell, Merchant, Giving back, Help & Support
      2. **"About"** — Staff, Team, Careers, Blog
      3. **"Resources"** — Security, Global, Charts, Privacy
      4. **"Social"** — Facebook, Twitter, Instagram, Googleplus
  - **Partner bar** — `div.row.partner-wrap.mt-5`
    (`border-top: 1px solid rgba(255,255,255,.05)`,
    `border-bottom: 1px solid rgba(255,255,255,.05)`, `padding: 1em 0`) →
    `div.col-md-12` → `div.row.align-items-center`: `div.col` → `h3.mb-0`
    **"Our Partner:"** (14px, `rgba(255,255,255,.4)`) + `div.col-md-9` →
    `p.partner-name.mb-0` with SIX `a` links (13px, `text-transform:
uppercase`, `color: rgba(255,255,255,.4)`, `margin-right: 10px`), each
    `span.ion-logo-ionic.mr-2` (white glyph) + text **"Company 01" …
    "Company 06"** + `div.col.text-md-right` → `p.mb-0` → `a.btn-custom`
    **"See All"** (14px, accent `#bba387`) + arrow span
  - **Bottom bar** — `div.row.mt-5` → `div.col-md-6.col-lg-8` → `p.copyright`
    (`color: rgba(255,255,255,.4)`, `font-size: 14px`): "Copyright © <year>
    All rights reserved | This template is made with ♥ by Colorlib.com"
    (heart `ion-ios-heart`, `aria-hidden`, link to `https://colorlib.com` —
    the recreation replaces the Colorlib attribution with the Component Dock
    link per convention) + `div.col-md-6.col-lg-4.text-md-right` → `p.mb-0`
    with THREE legal links **"Terms"**, **"Privacy"**, **"Compliances"**
    (`mr-md-3` spacing, link color = accent `#bba387` via `.footer-02 a`)
- **Grid behavior (Bootstrap 4.5.3, reproduce responsively):** newsletter
  row `col-10 col-lg-6` (centered, 10/12 below lg, 6/12 on lg+). Main grid:
  brand `col-md-4 col-lg-5`, links wrapper `col-md-8 col-lg-7` → inner FOUR
  `col-md-3` columns — on lg the 4 link columns sit side by side inside the
  7/12 wrapper; on md the brand drops to 4/12 and the wrapper to 8/12; below
  md EVERYTHING stacks full-width with `mb-4` gaps (`mb-md-0` removes them
  on md+). Partner bar `col` + `col-md-9` + `col.text-md-right`; bottom
  `col-md-6 col-lg-8` + `col-md-6 col-lg-4 text-md-right`. No order flips,
  no horizontal scroll.
- **Icons:** ionicons — `ion-ios-arrow-round-forward` (read more + See All →
  lucide `ArrowRight`), `ion-ios-heart` (copyright heart → lucide `Heart` or
  a ♥ text glyph, `aria-hidden`), `ion-logo-ionic` (six partner marks —
  lucide REMOVED brand icons, and Ionic is a brand mark: render the partner
  glyphs as tiny inline SVGs or neutral lucide glyphs per company, or plain
  text wordmarks with a small lucide icon such as `Hexagon`/`Circle`/`Zap`;
  probe every import with the `typeof` check per the skill's icon guidance).
  NO circular social buttons in this variant — the Social column is plain
  text links.
- **Images:** NONE — this footer variant has no photos, thumbnails or
  backgrounds (the previous dark variant Tailpiece/footer-11 had news
  thumbnails; footer-12 does not). No picsum seeds needed. No footer bg
  image either — solid `#131719` only.

## Design tokens (from the reference — `.footer-02` + helpers)

| Token               | Value                                                                                                                                                                                                                                                                                                                                      | Source                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Font family         | **Poppins** — `body { font-family: "Poppins", Arial, sans-serif; font-size: 15px; line-height: 1.8; font-weight: normal; }` (the Bootstrap default body rule is overridden later in the shared sheet); cf-fonts loads weights 300–900 (recreation needs 400 + 700 at most)                                                                 | `css/style.css` body rules                                                    |
| Footer background   | **`#131719`** (very dark charcoal) — `.footer-02 { background: #131719; }`; footer global `padding: 5em 0` (DARK variant, third in the series; NO decorative blob, NO photo band)                                                                                                                                                          | `.footer-02` + `footer`                                                       |
| Brand accent        | **`#bba387`** (muted sandy tan) — `.footer-02 a`: ALL links (read more, See All, copyright credit, Terms/Privacy/Compliances). Subscribe button uses the slightly deeper tan **`#bfa88e`**. The ONLY two accents in the design                                                                                                             | `.footer-02 a`, `.subscribe-form .form-group .submit`                         |
| Column headings     | `.footer-heading`: **`font-size: 19px`, `color: rgba(255,255,255,.9)`, `margin-bottom: 20px`**; NO `:after` underline in this variant; `a.logo` inside the brand heading: `color: #fff; text-transform: uppercase`                                                                                                                         | `.footer-02 .footer-heading`, `.footer-02 .footer-heading .logo`              |
| Body/paragraph text | `p`: **`color: rgba(255,255,255,.3)`** (brand lorem paragraph); body copy 15px/1.8 Poppins                                                                                                                                                                                                                                                 | `.footer-02 p`                                                                |
| Column links        | **`color: rgba(255,255,255,.4)`** — `ul.list-unstyled li a` (all four link columns); `a.py-1.d-block` rhythm; hover → **`#fff`**; `transition: .3s all ease`; no underlines                                                                                                                                                                | `.footer-02 .list-unstyled li a` (+ `:hover`)                                 |
| Newsletter pill     | `.subscribe` **`margin-top: -105px`** (overhangs the filler/footer boundary — critical fidelity detail); `form.subscribe-form`: **`border-radius: 40px; background: #fff; padding: 3px; box-shadow: 0 -12px 21px -15px rgba(0,0,0,.1)`**; `div.form-group.d-flex` no bottom margin                                                         | `.footer-02 .subscribe`, `.footer-02 .subscribe-form`                         |
| Email input         | `input.form-control.rounded-left`: **transparent bg, no border, `font-size: 16px`, `height: 56px`, `color: rgba(0,0,0,.3)`**; placeholder same `rgba(0,0,0,.3)`; no focus box-shadow                                                                                                                                                       | `.footer-02 .subscribe-form .form-group input` (+ placeholders, `:focus`)     |
| Subscribe button    | `input.submit.px-3` (value "Subscribe"): **`width: 150px; height: 56px; font-size: 14px; background: #bfa88e; color: #fff; text-transform: uppercase; letter-spacing: 1px; border-radius: 40px`**; border none                                                                                                                             | `.footer-02 .subscribe-form .form-group .submit`                              |
| Link column grid    | Brand `col-md-4 col-lg-5` → inner `col-md-12 col-lg-8 mb-md-0 mb-4`; links wrapper `col-md-8 col-lg-7` → FOUR `col-md-3 mb-md-0 mb-4 border-left`; `.border-left` set to `rgba(255,255,255,.05)` then overridden `border: none` (render at most a faint hairline)                                                                          | Bootstrap classes + `.footer-02 .border-left`                                 |
| Partner bar         | `.partner-wrap`: **`border-top/bottom: 1px solid rgba(255,255,255,.05)`, `padding: 1em 0`**, `mt-5`; `h3` "Our Partner:" 14px `rgba(255,255,255,.4)`; `.partner-name a` 13px uppercase `rgba(255,255,255,.4)`, `margin-right: 10px`, icon `span` **white**; "See All" `.btn-custom` 14px                                                   | `.footer-02 .partner-wrap` (+ `h3`, `.partner-name a`, `span`, `.btn-custom`) |
| Copyright           | `p.copyright`: **`color: rgba(255,255,255,.4)`, `font-size: 14px`**; heart `ion-ios-heart` `aria-hidden`; source credit "…made with ♥ by Colorlib.com" → recreation **"© <current year> Terminus. All rights reserved. Made with ♥ by <a>Component Dock</a>"**; legal links Terms / Privacy / Compliances (`mr-md-3`) right-aligned on md+ | `.footer-02 .copyright` + DOM                                                 |
| Filler area         | `.ftco-section`: **`padding: 12em 0`, `background: #f8f8f8`**, centered `h2` "Footer #02" (`margin-bottom: 0`)                                                                                                                                                                                                                             | `.ftco-section`, `.ftco-section h2`                                           |
| Link transition     | `a { transition: .3s all ease; }`; `a:hover, a:focus { text-decoration: none !important; outline: none !important; }` (global)                                                                                                                                                                                                             | `css/style.css` top rules                                                     |
| Icons               | ionicons: `ion-ios-arrow-round-forward` → lucide `ArrowRight`; `ion-ios-heart` → lucide `Heart` (or ♥ text, `aria-hidden`); `ion-logo-ionic` (partner marks) → lucide removed brand icons — use tiny inline SVG marks or neutral lucide glyphs per company (probe with `typeof`)                                                           | `css/ionicons.min.css` classes in DOM                                         |
| Images              | **NONE** — no photos/thumbnails/backgrounds anywhere in this variant; solid `#131719` footer band only                                                                                                                                                                                                                                     | DOM + CSS audit                                                               |
| Mobile behavior     | Newsletter `col-10 col-lg-6`; main grid: brand 4/12 + links 8/12 on md, 5/12 + 7/12 on lg, stacked full-width with `mb-4` gaps below md; partner `col` / `col-md-9` / `col.text-md-right`; bottom `col-md-6 col-lg-8` + `col-md-6 col-lg-4 text-md-right`; no horizontal scroll                                                            | Bootstrap classes                                                             |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Terminus app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler section and the footer inside the
  main landmark
- **AND** the document title SHALL be "Terminus — Footer"

### Requirement: Filler demo area

The system SHALL render the light-gray filler strip above the footer,
matching the source's demo-content role.

#### Scenario: Filler renders with a centered label

- **GIVEN** the page is rendered
- **WHEN** the top of the page loads
- **THEN** a `#f8f8f8` light-gray section SHALL be visible above the footer
  with the source's `padding: 12em 0` rhythm (the recreation may use a
  similar min-height so the footer + newsletter pill still peek into the
  first viewport)
- **AND** a centered level-2 heading SHALL label the demo (the source shows
  **"Footer #02"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Dark footer band

The system SHALL render the very dark charcoal footer band with the source's
background, padding, and Poppins typeface.

#### Scenario: Footer band renders dark

- **GIVEN** the filler section is rendered
- **WHEN** the user inspects the footer
- **THEN** a semantic `<footer>` SHALL render with `background: #131719` and
  `padding: 5em 0`
- **AND** the font family SHALL be Poppins (body 15px, line-height 1.8)
- **AND** the page SHALL have a main landmark and a semantic `<footer>`
  landmark

### Requirement: Newsletter block

The system SHALL render the white pill newsletter form straddling the
filler/footer boundary, with an email input and a tan subscribe button.

#### Scenario: Newsletter pill overhangs the boundary

- **GIVEN** the footer band is rendered
- **WHEN** the user inspects the top of the footer
- **THEN** a white pill form SHALL render (border-radius 40px, white
  background, 3px padding, subtle top shadow `0 -12px 21px -15px
rgba(0,0,0,.1)`) centered in a `col-10 col-lg-6` row
- **AND** the pill SHALL be pulled up `105px` (`margin-top: -105px`) so it
  visually overhangs the boundary between the light filler and the dark
  footer band
- **AND** the pill SHALL contain a transparent borderless email input (16px,
  56px tall, placeholder "Enter email address" in `rgba(0,0,0,.3)`)
- **AND** a **"Subscribe"** button SHALL render at the pill's right end
  (150×56px, `background: #bfa88e`, white uppercase 14px text with 1px letter
  spacing, border-radius 40px)
- **AND** the form SHALL be a real `<form>` with a submit input (no backend
  needed — the source uses `action="#"` with no handler)

### Requirement: Brand column

The system SHALL render the brand column: uppercase wordmark, lorem
paragraph, and a tan "read more" link with an arrow.

#### Scenario: Brand column renders with read-more

- **GIVEN** the newsletter block is rendered
- **WHEN** the user inspects the first grid column
- **THEN** a `.footer-heading` SHALL render (19px, `rgba(255,255,255,.9)`,
  `margin-bottom: 20px`) containing an uppercase white brand wordmark (the
  source shows "Colorlib.com" — the recreation uses its own brand, e.g.
  **"Terminus"**, keep the uppercase treatment)
- **AND** a short lorem paragraph SHALL render below it (the source uses "A
  small river named Duden flows by their place…" — keep the same kind of
  content; `color: rgba(255,255,255,.3)`)
- **AND** a **"read more"** link SHALL render in the brand accent
  (`#bba387`) followed by a forward-arrow glyph (lucide `ArrowRight`)

### Requirement: Link columns

The system SHALL render the four border-divided link columns with the
source's exact headings and links.

#### Scenario: Four link columns render

- **GIVEN** the brand column is rendered
- **WHEN** the user inspects the right side of the grid
- **THEN** FOUR columns SHALL render (each `col-md-3` inside the
  `col-md-8 col-lg-7` wrapper; below md they stack full-width with `mb-4`
  gaps), each with a `.footer-heading` (19px, `rgba(255,255,255,.9)`) and a
  stacked `ul` of `py-1 d-block` links (`rgba(255,255,255,.4)`, hover
  `#fff`):
  1. **Discover** — Buy & Sell, Merchant, Giving back, Help & Support
  2. **About** — Staff, Team, Careers, Blog
  3. **Resources** — Security, Global, Charts, Privacy
  4. **Social** — Facebook, Twitter, Instagram, Googleplus
- **AND** the columns SHALL be visually separated by at most a faint
  hairline (`rgba(255,255,255,.05)` — the source overrides the border to
  `none`, so a subtle divider or none is faithful)
- **AND** links SHALL use `transition: .3s all ease` and no underlines

### Requirement: Partner bar

The system SHALL render the hairline partner bar with "Our Partner:", six
company wordmarks, and a tan "See All" link.

#### Scenario: Partner bar renders with company marks

- **GIVEN** the four link columns are rendered
- **WHEN** the user inspects below the main grid
- **THEN** a bar SHALL render with hairline top/bottom borders
  (`rgba(255,255,255,.05)`, `padding: 1em 0`, `mt-5` top margin)
- **AND** a small **"Our Partner:"** label SHALL render (14px,
  `rgba(255,255,255,.4)`)
- **AND** SIX partner wordmark links SHALL render ("Company 01" …
  "Company 06", 13px uppercase `rgba(255,255,255,.4)`, 10px spacing, each
  with a small white glyph — the source uses the Ionic logo mark; the
  recreation may use tiny inline SVG marks or neutral lucide glyphs since
  lucide removed brand icons)
- **AND** a **"See All"** link SHALL render right-aligned in the brand
  accent (`#bba387`) with a forward-arrow glyph

### Requirement: Bottom bar

The system SHALL render the bottom bar with the copyright line, the heart,
the mandatory Component Dock link, and the three legal links.

#### Scenario: Copyright and legal links render

- **GIVEN** the partner bar is rendered
- **WHEN** the user inspects the bottom of the footer
- **THEN** a row SHALL render (left `col-md-6 col-lg-8`, right
  `col-md-6 col-lg-4 text-md-right` on md+; stacked below md)
- **AND** the left side SHALL render a 14px `rgba(255,255,255,.4)` line:
  **"© <current year> Terminus. All rights reserved. Made with ♥ by
  Component Dock"** (the source shows "Copyright © <year> All rights
  reserved | This template is made with ♥ by Colorlib.com")
- **AND** the heart SHALL be `aria-hidden` (decorative)
- **AND** the "Component Dock" text SHALL link to
  `https://www.componentdock.com/` (per convention, the Colorlib attribution
  is replaced — ColorLib must NOT appear anywhere in `apps/terminus`)
- **AND** the right side SHALL render three legal links in the brand accent:
  **Terms**, **Privacy**, **Compliances** (spacing `mr-md-3`)

### Requirement: Responsive layout

The system SHALL reproduce the source's grid: newsletter `col-10 col-lg-6`,
brand `col-md-4 col-lg-5` / links `col-md-8 col-lg-7` with four `col-md-3`
columns, stacked below md.

#### Scenario: Grid adapts across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the lg breakpoint (≥992px)
- **THEN** the newsletter pill SHALL span 6/12 centered, the brand column
  5/12, and the four link columns side by side inside the 7/12 wrapper
- **AND** at the md breakpoint (≥768px) the brand column SHALL span 4/12 and
  the link wrapper 8/12, with the four link columns still side by side
- **AND** below md all columns SHALL stack full-width with ~1.5rem gaps (the
  source uses `mb-4` on each column, removed via `mb-md-0` on md+)
- **AND** the page SHALL never overflow horizontally

### Requirement: Accessibility

The system SHALL expose semantic landmarks, an accessible newsletter form,
and keyboard-operable interactivity.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark and a semantic `<footer>`
  landmark
- **AND** the newsletter email input SHALL have a programmatic label (the
  source uses a bare placeholder — the recreation adds a visually-hidden
  `<label>` or `aria-label`)
- **AND** the decorative heart SHALL carry `aria-hidden`
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring
- **AND** icon-only elements (partner glyphs) SHALL carry `aria-hidden` or
  be part of the link's accessible name

## Verification checklist

- [ ] `npm run verify:app terminus` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Terminus — Footer"
- [ ] Filler: `#f8f8f8` section (source `padding: 12em 0`) with a centered
      demo label
- [ ] Footer band: DARK — `background: #131719`, `padding: 5em 0`; semantic
      `<footer>` + main landmark; Poppins (body 15px/1.8)
- [ ] Newsletter: white pill (`border-radius: 40px`, `padding: 3px`, shadow
      `0 -12px 21px -15px rgba(0,0,0,.1)`) centered `col-10 col-lg-6`,
      `margin-top: -105px` overhanging the filler/footer boundary; real
      `<form>` + labeled email input (16px/56px, transparent, placeholder
      "Enter email address") + "Subscribe" button (150×56, `#bfa88e`, white
      uppercase 14px, ls 1px, radius 40px)
- [ ] Brand column: `.footer-heading` (19px, `rgba(255,255,255,.9)`, mb 20px)
      with uppercase white wordmark (own brand, NOT Colorlib) + lorem
      paragraph (`rgba(255,255,255,.3)`) + "read more" link (`#bba387`) +
      ArrowRight
- [ ] Four link columns (Discover / About / Resources / Social) with exact
      links, `py-1 d-block` rhythm, `rgba(255,255,255,.4)` → hover `#fff`,
      faint hairline or no divider between columns
- [ ] Partner bar: hairline top/bottom (`rgba(255,255,255,.05)`, `padding:
    1em 0`), "Our Partner:" (14px `rgba(255,255,255,.4)`), SIX "Company
      01"–"06" wordmarks (13px uppercase, white glyph, 10px spacing) +
      "See All" (`#bba387`) + ArrowRight
- [ ] Bottom bar: left "© <current year> Terminus. All rights reserved. Made
      with ♥ by Component Dock" (14px `rgba(255,255,255,.4)`, heart
      `aria-hidden`, Component Dock link); right Terms / Privacy /
      Compliances (`#bba387`, `mr-md-3`); NO ColorLib reference anywhere in
      `apps/terminus` (provenance lives only here + TEMPLATES.md + PR)
- [ ] Responsive: newsletter 10/12 below lg; brand 4/12 md + 5/12 lg; four
      link columns side by side on md+, stacked with `mb-4` gaps below md;
      no horizontal overflow
- [ ] Poppins via Google Fonts `<link>` in `index.html` (weights 400 + 700
      suffice; the source loads 300–900)
- [ ] Images: NONE required (no photos/thumbnails/backgrounds in this
      variant)
- [ ] Icons: lucide `ArrowRight`, `Heart` (aria-hidden), partner glyphs as
      tiny inline SVGs / neutral lucide icons (lucide removed brand icons —
      probe imports with `typeof`)
