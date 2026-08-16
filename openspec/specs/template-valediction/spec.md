# Template: Valediction (Footer)

## Purpose

Valediction is a footer-component demo in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Bootstrap Footer 17"
design (source: https://colorlib.com/wp/template/bootstrap-footer-17/), built
under a DIFFERENT name (**Valediction** — a formal farewell address, the
seventeenth entry in the footer series' ending-themed naming: Colophon →
Envoi → Epilogue → Coda → Outro → Finale → Postlude → Stretto → Fermata →
Finis → Tailpiece → Terminus → Capstone → Omega → Ultimo → Adieu →
**Valediction**; a single lowercase word, kebab-case, no collision with
`apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-16), per
the monorepo naming mandate, with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The page is a footer-only component demo: a
white filler section (source labels it "Footer #07", `padding: 12em 0`) →
the footer — a **NEAR-BLACK** band (`background: #121212`; base
`footer { padding: 7em 0 }` applies fully — top AND bottom, NO `padding-top:
0` override like footer-06), **Poppins** typeface (body 15px / line-height
1.8). Everything is CENTERED in a single column (`col-md-12 text-center`):
(1) **Logo + menu + socials row** — `h2.footer-heading` → `a.logo`
**"Colorlib.com"** (white, 30px, weight 700), `p.menu` with SIX uppercase
links **Home / Agent / About / Listing / Blog / Contact**
(`rgba(255,255,255,.6)`, `margin: 0 10px`, uppercase, letter-spacing 1px,
`margin-bottom: 30px`), then `ul.ftco-footer-social.p-0` with THREE circular
social chips — **Twitter, Facebook, Instagram** — each a 40×40 circle
(`background: transparent; border: 1px solid #a3de83` — a **LIME-GREEN**
outline chip; icon `span` centered absolutely, font-size 20px, inherits the
LIME accent `#a3de83`; on hover the icon turns white via
`.ftco-footer-social li a:hover { color: #fff }`); (2) **Copyright row**
(`row.mt-5`) — `p.copyright` **"Copyright © <year> All rights reserved |
This template is made with ♥ by Colorlib.com"** (heart `i.ion-ios-heart`,
`aria-hidden`; `p` color `rgba(255,255,255,.3)`; the Colorlib link
`target="_blank"` renders LIME `#a3de83` via `.footer-07 a`; recreation
replaces the Colorlib attribution with the Component Dock link per
convention). This variant has **NO newsletter form, NO link columns, NO
images** — the simplest footer in the whole series: a single centered column
of logo → menu → socials → copyright. The only interactivity is the social
chips' hover (white icon) and the source's Bootstrap tooltips
(`data-toggle="tooltip"` — optional; an `aria-label`/`title` on each icon
link suffices in the recreation). No navbar, no hero; no behavior beyond the
static links.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 17" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a filler
  strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-17/. TEMPLATES.md has ONE
  copy (line 793, `- [ ]` unchecked). This prep: Bootstrap Footer 17 →
  **Valediction**. When the implementer finishes, that row gets bookkept
  `[x]`.
- **PREVIEW PATH QUIRK (series-wide — see the colophon/terminus/capstone/
  omega/ultimo/adieu preps):** `https://preview.colorlib.com/theme/bootstrap-footer-17/`
  returns **HTTP 404** ("Not Found" — a 9-byte body). The footer series is
  served under the **`/theme/bft/`** prefix (NOT `/theme/bootstrap/`): the
  live preview is `https://preview.colorlib.com/theme/bft/bootstrap-footer-17/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-17/` (HTTP 200,
  8,956 bytes HTML, `<title>Footer 07</title>` — the title is the variant
  label, not the series number). Stylesheets: `css/ionicons.min.css` (icon
  font — glyphs `ion-logo-twitter`, `ion-logo-facebook`,
  `ion-logo-instagram`, `ion-ios-heart`) + `css/style.css` (220,421 bytes —
  the FULL shared FTCO sheet bundling rules for many variants; only the
  `.footer-07` block and the shared helpers apply to this page). No Google
  Fonts `<link>` — cf-fonts inline `@font-face` blocks load **Poppins**;
  body rule: `font-family: "Poppins", Arial, sans-serif`, `font-size: 15px`,
  `line-height: 1.8` (headings: same family, weight 400, line-height 1.5).
  Scripts: `js/jquery.min.js`, `js/popper.js`, `js/bootstrap.min.js`,
  `js/main.js` (the social chips carry `data-toggle="tooltip"
data-placement="top" title="..."` Bootstrap tooltips; the copyright year
  is injected by `document.write(new Date().getFullYear())`; the recreation
  uses React's current year — no JS tooltip library needed, `title` +
  `aria-label` suffice).
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-17.jpg`, 1200×972 AVIF, viewed in browser):** screenshot
  matches the live DOM (NO variance — only the JS-rendered copyright year
  differs: static capture shows 2021, live shows the current year). A white
  demo area with "Footer #07" centered; below it a solid **near-black**
  footer band. Centered: a bold white **"Colorlib.com"** logo wordmark; under
  it a row of uppercase light-gray links (HOME AGENT ABOUT LISTING BLOG
  CONTACT); under that THREE small circular social chips (dark circles with
  light icons — the CSS gives them a **lime-green outline border** `#a3de83`
  on transparent background, which reads as dark circles with green-tinted
  icons on the near-black band); at the bottom the muted copyright line with
  the "Colorlib.com" link in **lime green**. High-contrast minimal aesthetic;
  the ONLY colors are near-black `#121212`, white, muted whites
  (`rgba(255,255,255,.3/.6)`), and the lime accent `#a3de83`. NO images
  anywhere in the footer.
- **Structure (DOM order, 1:1):**
  `section.ftco-section` (`padding: 12em 0`; no background — white),
  `div.container` → `div.row.justify-content-center` →
  `div.col-md-6.text-center` → `h2` "Footer #07", `margin-bottom: 0`) →
  `footer.footer-07` (`background: #121212`; `footer { padding: 7em 0 }`
  applies FULLY — both top and bottom, no override) → `div.container`:
  - **Row 1 — Logo/menu/socials** — `div.row.justify-content-center` →
    `div.col-md-12.text-center`:
    - `h2.footer-heading` (`font-size: 30px; color: #fff; font-weight: 700;
margin-bottom: 30px`) → `a.logo` **"Colorlib.com"** (white via
      `.footer-07 .footer-heading .logo { color: #fff }`)
    - `p.menu` (`margin-bottom: 30px`) → SIX `a` links: **"Home"**,
      **"Agent"**, **"About"**, **"Listing"**, **"Blog"**, **"Contact"**
      (all `color: rgba(255,255,255,.6); margin: 0 10px; text-transform:
uppercase; letter-spacing: 1px` via `.footer-07 .menu a`)
    - `ul.ftco-footer-social.p-0` → THREE `li.ftco-animate` (scroll-anim
      hook only — no CSS dependency in the recreation):
      - `li` → `a` (`data-toggle="tooltip" data-placement="top"
title="Twitter"`) → `span.ion-logo-twitter` — **Twitter**
      - `li` → `a` (`title="Facebook"`) → `span.ion-logo-facebook` —
        **Facebook**
      - `li` → `a` (`title="Instagram"`) → `span.ion-logo-instagram` —
        **Instagram**
      - chip styling: `li` `display: inline-block; margin: 0 10px 0 0`; `a`
        `height: 40px; width: 40px; display: block; border-radius: 50%;
position: relative; background: transparent; border: 1px solid
#a3de83` (footer-07 overrides the base `rgba(0,0,0,.05)` bg); `span`
        `position: absolute; font-size: 20px; top: 50%; left: 50%;
transform: translate(-50%,-50%)`; hover: `color: #fff` (icon turns
        white; border stays lime)
  - **Row 2 — Copyright** — `div.row.mt-5` → `div.col-md-12.text-center` →
    `p.copyright` — **"Copyright © <year> All rights reserved | This
    template is made with ♥ by Colorlib.com"** (heart `i.ion-ios-heart`,
    `aria-hidden`; `p` color `rgba(255,255,255,.3)` via `.footer-07 p`; the
    "Colorlib.com" link `href="https://colorlib.com" target="_blank"` renders
    lime `#a3de83` via `.footer-07 a`; recreation replaces the Colorlib
    attribution with the Component Dock link per convention)
- **Grid behavior (Bootstrap 4.3.1, reproduce responsively):** EVERYTHING is
  centered in a single column — `row.justify-content-center` +
  `col-md-12.text-center` for the logo/menu/socials, `row.mt-5` +
  `col-md-12.text-center` for the copyright. The menu links flow inline
  (flex-wrap naturally) and center; the social `li`s are inline-block and
  center; below md nothing reflows — the column is always full width and
  text stays centered. No column splits, no order flips, no horizontal
  scroll. The `col-md-6` wrapper only affects the FILLER label (narrower
  centered box on md+).
- **Icons:** ionicons — `ion-logo-twitter`, `ion-logo-facebook`,
  `ion-logo-instagram` (BRAND logo glyphs inside circular chips), plus
  `ion-ios-heart` (copyright heart). lucide-react equivalents: `Twitter`,
  `Facebook`, `Instagram` (deprecated brand icons — **probe each with a
  `typeof` check** per the skill's icon guidance; if the lucide version
  dropped them, use inline SVG paths or the `data:image/svg` approach);
  heart → lucide `Heart` or a ♥ text glyph, `aria-hidden`.
- **Images:** **NONE** — this variant has no thumbnails, no product, no
  instagram grid, no backgrounds. No picsum placeholders needed at all.

## Design tokens (from the reference — `.footer-07` + shared helpers)

| Token             | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Source                                                                                                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Font family       | **Poppins** — `body { font-family: "Poppins", Arial, sans-serif; font-size: 15px; line-height: 1.8; font-weight: normal; }`; headings: same family, weight 400, line-height 1.5 (cf-fonts loads weights 300–900; recreation needs 400 + 700 for the logo heading)                                                                                                                                                                                                                                                                           | `css/style.css` body + headings rules                                                                                                                                                                |
| Footer background | **`#121212`** (near-black) — `.footer-07 { background: #121212; }` (the base `footer { padding: 7em 0 }` applies FULLY — top AND bottom, NO `padding-top: 0` override like footer-06)                                                                                                                                                                                                                                                                                                                                                       | `.footer-07` + `footer`                                                                                                                                                                              |
| Accent color      | **`#a3de83`** (lime green) — `.footer-07 a { color: #a3de83; }` (ALL links — menu links inherit it but their own rule overrides to `rgba(255,255,255,.6)`; the social chips' border and the copyright Colorlib link use it)                                                                                                                                                                                                                                                                                                                 | `.footer-07 a`                                                                                                                                                                                       |
| Logo heading      | `h2.footer-heading` → `a.logo`: **`font-size: 30px; color: #fff; font-weight: 700; margin-bottom: 30px`** (the logo wordmark — NOT uppercase)                                                                                                                                                                                                                                                                                                                                                                                               | `.footer-07 .footer-heading`, `.footer-07 .footer-heading .logo`                                                                                                                                     |
| Menu              | `p.menu`: **`margin-bottom: 30px`**; links `a`: **`color: rgba(255,255,255,.6); margin: 0 10px; text-transform: uppercase; letter-spacing: 1px`** (no explicit font-size — inherits body 15px; no hover color change in source beyond the global `a:hover { text-decoration: none }`)                                                                                                                                                                                                                                                       | `.footer-07 .menu`, `.footer-07 .menu a`                                                                                                                                                             |
| Social chips      | `ul.ftco-footer-social.p-0` — `li` `list-style: none; display: inline-block; margin: 0 10px 0 0`; `a` **40×40 circle** — `height: 40px; width: 40px; display: block; border-radius: 50%; position: relative; background: transparent; border: 1px solid #a3de83` (footer-07 overrides the base `rgba(0,0,0,.05)` background with transparent + **lime outline**); `span` (icon) `position: absolute; font-size: 20px; top: 50%; left: 50%; transform: translate(-50%,-50%)`; **hover: `color: #fff`** (icon turns white; border stays lime) | `.ftco-footer-social li`, `.ftco-footer-social li a`, `.ftco-footer-social li a span`, `.footer-07 .ftco-footer-social li a`, `.ftco-footer-social li a:hover`                                       |
| Copyright text    | `p.copyright`: **`color: rgba(255,255,255,.3)`** — "Copyright © <year> All rights reserved                                                                                                                                                                                                                                                                                                                                                                                                                                                  | This template is made with ♥ by Colorlib.com" (heart `i.ion-ios-heart` `aria-hidden`; the Colorlib link renders `#a3de83` via `.footer-07 a`; recreation: heart `aria-hidden` + Component Dock link) | `.footer-07 p` + DOM |
| Links (general)   | `.footer-07 a { color: #a3de83; }`; `a { transition: .3s all ease; }`; `a:hover, a:focus { text-decoration: none !important; outline: none !important; }` (global)                                                                                                                                                                                                                                                                                                                                                                          | `.footer-07 a`, `css/style.css` top rules                                                                                                                                                            |
| Filler area       | `.ftco-section`: **`padding: 12em 0`**, NO background (white), centered `h2` "Footer #07" (`margin-bottom: 0`) inside `col-md-6` (narrower centered box on md+)                                                                                                                                                                                                                                                                                                                                                                             | `.ftco-section`, `.ftco-section h2`                                                                                                                                                                  |
| Icons             | ionicons: `ion-logo-twitter`, `ion-logo-facebook`, `ion-logo-instagram` (brand logo glyphs in the circular chips → lucide `Twitter`/`Facebook`/`Instagram`, **probe with `typeof`** — deprecated brand icons may be dropped in the installed lucide version; fall back to inline SVG paths), `ion-ios-heart` (copyright → lucide `Heart` or ♥ text, `aria-hidden`)                                                                                                                                                                          | `css/ionicons.min.css` classes in DOM                                                                                                                                                                |
| Images            | **NONE** — no image roles in this variant. No picsum seeds needed                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | DOM                                                                                                                                                                                                  |
| Mobile behavior   | Nothing reflows: the single `col-md-12` column is always full-width and `text-center`; menu links and social chips stay inline and centered at every breakpoint; `row.mt-5` keeps the copyright separated. The `col-md-6` filler label box narrows on md+. No horizontal scroll                                                                                                                                                                                                                                                             | Bootstrap classes + `.footer-07` rules                                                                                                                                                               |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Valediction app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler section and the footer inside the
  main landmark
- **AND** the document title SHALL be "Valediction — Footer"

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
  **"Footer #07"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Near-black footer band

The system SHALL render the near-black footer band with the source's
background, full 7em padding, and Poppins typeface.

#### Scenario: Footer band renders near-black

- **GIVEN** the filler section is rendered
- **WHEN** the user inspects the footer
- **THEN** a semantic `<footer>` SHALL render with `background: #121212` and
  the source's `padding: 7em 0` on BOTH top and bottom (NO `padding-top: 0`
  override in this variant — unlike footer-06)
- **AND** the font family SHALL be Poppins (body 15px, line-height 1.8;
  headings line-height 1.5)
- **AND** the page SHALL have a main landmark and a semantic `<footer>`
  landmark

### Requirement: Logo, menu, and socials row

The system SHALL render the centered logo wordmark, the six uppercase menu
links, and the three circular social chips, matching the source's styling.

#### Scenario: Logo/menu/socials render centered

- **GIVEN** the footer band is rendered
- **WHEN** the user inspects the top of the footer
- **THEN** a centered block SHALL render (`row.justify-content-center` →
  `col-md-12 text-center`) containing:
  - a logo wordmark link **"Colorlib.com"** (white, 30px, weight 700,
    `margin-bottom: 30px` — the recreation may use its own brand name)
  - a menu of SIX links in `rgba(255,255,255,.6)`, uppercase,
    letter-spacing 1px, `margin: 0 10px`: **"Home"**, **"Agent"**,
    **"About"**, **"Listing"**, **"Blog"**, **"Contact"** (with ~30px
    margin below)
  - THREE circular social chips (`li` inline-block, `margin-right: 10px`):
    each a **40×40 circle** — `border-radius: 50%`, `background:
transparent`, `border: 1px solid #a3de83` (lime outline), with a 20px
    brand icon centered inside (Twitter, Facebook, Instagram — in that
    order)
- **AND** each social chip SHALL be a link with an accessible name
  (the source uses Bootstrap `title` tooltips — the recreation adds
  `aria-label` + `title`)
- **AND** hovering a social chip SHALL turn its icon white (the source's
  `.ftco-footer-social li a:hover { color: #fff }`; the lime border stays)

### Requirement: Copyright row

The system SHALL render the centered copyright row with the source's muted
text, the heart, and the mandatory Component Dock link.

#### Scenario: Copyright row renders

- **GIVEN** the logo/menu/socials row is rendered
- **WHEN** the user inspects the bottom of the footer
- **THEN** a second centered row SHALL render (`row.mt-5` →
  `col-md-12 text-center`) with the copyright line in
  `rgba(255,255,255,.3)`: **"Copyright © <current year> All rights reserved
  | This template is made with ♥ by Component Dock"** (the source shows
  "...made with ♥ by Colorlib.com" with the link `target="_blank"`; the
  heart SHALL be `aria-hidden` (decorative) and the "Component Dock" text
  SHALL link to `https://www.componentdock.com/` per convention — ColorLib
  must NOT appear anywhere in `apps/valediction`)

### Requirement: Responsive layout

The system SHALL reproduce the source's single-centered-column layout at
every breakpoint with no horizontal overflow.

#### Scenario: Layout is stable across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at any breakpoint (mobile, md, lg, xl)
- **THEN** the logo, menu links, social chips, and copyright SHALL remain
  centered in a single full-width column at every breakpoint (the source
  uses `col-md-12 text-center` rows — nothing reflows below md)
- **AND** the menu links SHALL wrap naturally when the viewport is too
  narrow (inline links with `margin: 0 10px`), staying centered
- **AND** the social chips SHALL stay inline and centered
- **AND** the page SHALL never overflow horizontally

### Requirement: Accessibility

The system SHALL expose semantic landmarks, accessible icon links, and
keyboard-operable interactivity.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark and a semantic `<footer>`
  landmark
- **AND** the three social icon-only links SHALL have accessible names
  ("Twitter", "Facebook", "Instagram" — via `aria-label`; the source relies
  on Bootstrap `title` tooltips, which are insufficient on their own)
- **AND** the decorative heart SHALL carry `aria-hidden`
- **AND** all links SHALL have visible text or accessible names (no
  unnamed icon-only links)
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring

## Verification checklist

- [ ] `npm run verify:app valediction` passes (typecheck + lint + knip +
      fallow + 100% coverage tests + build)
- [ ] Document title "Valediction — Footer"
- [ ] Filler: white section (source `padding: 12em 0`) with a centered demo
      label (narrower `col-md-6` box on md+)
- [ ] Footer band: NEAR-BLACK — `background: #121212`, FULL `padding: 7em 0`
      (top AND bottom — NO `padding-top: 0` override); semantic `<footer>` +
      main landmark; Poppins (body 15px/1.8)
- [ ] Logo/menu/socials row: centered `col-md-12 text-center` — white 30px
      weight-700 logo wordmark link (mb-30px); SIX uppercase letterspaced
      menu links (Home, Agent, About, Listing, Blog, Contact) in
      `rgba(255,255,255,.6)` with `margin: 0 10px` + mb-30px; THREE circular
      40×40 chips (transparent bg, `border: 1px solid #a3de83`, 20px brand
      icons: Twitter, Facebook, Instagram) — hover turns icon white
- [ ] Copyright row: `row.mt-5` centered — "Copyright © <current year> All
      rights reserved | This template is made with ♥ by Component Dock"
      (`rgba(255,255,255,.3)`; heart `aria-hidden`; Component Dock link →
      `https://www.componentdock.com/`); NO ColorLib reference anywhere in
      `apps/valediction` (provenance lives only here + TEMPLATES.md + PR)
- [ ] NO newsletter form and NO link columns in this variant (simplest
      footer in the series)
- [ ] NO images anywhere in the footer (no picsum needed)
- [ ] Responsive: single centered column at every breakpoint; menu links
      wrap naturally; social chips stay inline/centered; no horizontal
      overflow
- [ ] Poppins via Google Fonts `<link>` in `index.html` (weights 400 + 700
      for the logo heading; the source loads 300–900)
- [ ] Icons: lucide `Twitter`/`Facebook`/`Instagram` (probe each with
      `typeof` — deprecated brand icons may be dropped; fall back to inline
      SVG paths) + `Heart` (aria-hidden) or ♥ text glyph for the copyright
      line
