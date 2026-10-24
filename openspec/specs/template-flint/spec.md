# Template: Flint (Minimal Design Studio Landing)

## Purpose

Flint is a single-page minimal design-studio landing template in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free "Spark" website template design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Spark" — Bootstrap 5 app/agency landing template
  (source: https://colorlib.com/wp/template/spark/). TEMPLATES.md carries TWO
  copies of this item (lines 626 and 1177 — duplicate rows exist for some items;
  the implementer must mark ALL copies when done). Both rows previously credited
  `apps/spark`, an app that actually renders the "Appco" design (25 exclusive
  copy matches vs 0 for Spark) — so the Spark design was shipped **unbuilt**.
  This template closes that gap.
- **Preview URL:** `https://preview.colorlib.com/theme/spark/` — HTTP 200,
  24,939 B rendered DOM, fetched with `curl -4` (the preview host IP-bans IPv6).
  Page title: "Spark &mdash; Free Bootstrap 5 Website Template by Colorlib".
  Stylesheets: `fonts/icomoon/style.css`, `fonts/flaticon/font/flaticon.css`,
  `css/tiny-slider.css`, `css/aos.css`, **`css/style.css`** (main, 60,200 B,
  sha256 `d463cfe083c7c28d840c28f17681fec630bfa1d2830fcbd387f3d38249031d35`).
  Scripts: bootstrap bundle, tiny-slider, aos, navbar, counter, custom.
- **Screenshot:** `spark-free-templatel.jpg` (1200×946, viewed) — hero is a
  full-viewport interior photo (sofa, plant, mirror) with a **35 % solid teal
  panel** down the left edge; white Playfair Display headline over the teal,
  a white card overlapping the photo edge, and a white testimonial under the
  headline. Below: white section with a big serif headline + a two-column
  quote/paragraph block, then a services row of four round teal icon chips.
  Footer is pale grey. The demo brands itself "Spark"; our recreation uses the
  NEW name **Flint**.
- **Visual design (from DOM + CSS tokens + screenshot):** restrained editorial
  minimalism — Playfair Display serif headings on white, teal `#367f7c` as the
  single chromatic accent, generous 7rem section rhythm, 30px pill buttons,
  thin 50×2px teal rules above section headings, and photo-led bands.
- **Structure (1:1, index page):**
  1. `.site-mobile-menu` — 300px white panel that slides in from the right
     (`transform: translateX(100%)` when shut, `padding-top: 20px`), header with
     a ✕ close control, `#fff` body; nav links 14px `#000`, hover/active
     `#367f7c`; nested sub-menu links indent 20/40/60px.
  2. `nav.site-nav` — **absolute** over the hero (not sticky), `padding: 20px 0`,
     `z-index: 9`; `.logo` 24px `font-weight: 700` Playfair Display `#fff`;
     nav links white 14px with a `Dropdown` item (Menu One → Sub Menu One/Two/
     Three, Menu Two, Menu Three), then Our products · Features · Blog ·
     Contact Us; hamburger toggle on mobile.
  3. `div.hero` — `background-image: url(images/hero_bg_1.jpg)`, `background-size:
cover`, height `100vh` with `min-height: 800px`; `:before` = 35 % wide
     `#367f7c` panel pinned left (`z-index: 2`), `:after` = full-bleed
     `rgba(0,0,0,.35)` scrim (`z-index: 1`); container `z-index: 3`.
     Left `col-lg-6`: `.subheading` "Welcome" 13px `#fff`; `h1.heading` 50px
     (40px under `lg`) weight 700 `#fff`, `margin-bottom: 50px` — "Design is not
     just what it looks like design is how it works"; then `.testionial-hero`
     (`max-width: 300px`): `.quote` `&ldquo;` Playfair 50px `#fff`,
     `blockquote` Georgia italic 16px `#fff`, `.author` 40px round avatar +
     name 700 + `Lublin, Poland` in `rgba(255,255,255,.5)`.
  4. `div.section.section-1.pb-0` — `.section` padding `7rem 0`; left `col-lg-6`:
     `.line` 50×2px `#367f7c`, `h2.heading` Playfair ~2rem weight 700, then a
     nested two-column row: a Georgia italic 18px `.block-testimonial` with a
     round avatar, beside three body paragraphs; right `col-lg-6`:
     `.img-wrap` (`position: relative`) with the photo and an overlaid white
     `.text` card — `padding: 40px`, `width: 80%`, floated right,
     `margin-top: -50px`, `z-index: 5`, `h3` 20px weight 700 — "We love
     minimal" + paragraph.
  5. `div.section.section-2` — centred `.line` + `h2` "Our Services
     Includes..." (text-center); `.row.g-5` of four `col-lg-3` `.feature`
     blocks: a 90×90 `border-radius: 50%` chip on `rgba(54,127,124,.1)` holding
     a 50px teal icon, `h3` 20px weight 700, 14px paragraph.
  6. `div.post-entries.section` — centred `.line` + `h2`; four `col-lg-3`
     `.media-entry` cards (`h-100`): a 200px-tall cover image link, then a white
     `.m-body` (`padding: 20px 20px 50px`): `.date` 12px, `h3` 16px weight 700
     whose link is `#000` → `#367f7c` on hover, 14px paragraph, and a `.more`
     "Read More" row — 13px bold label plus a 30px circular arrow button
     (`border: 1px solid #efefef`, border turns `#367f7c` on hover).
  7. `div.section` testimonials — three `col-lg-4` `.testionial-hero.dark`
     blocks (same testimonial component, ink colour instead of white).
  8. `div.py-5.bg-primary` — teal CTA band (`#367f7c`, `padding: 3rem 0`):
     `col-lg-7` `h3` white "Get started with our products" (left on `lg`),
     `col-lg-5` right-aligned `a.btn.btn-outline-white` "Get started".
  9. `div.site-footer` — `background: #efefef`, `font-size: 14px`,
     `color: #888`, `padding: 70px 0`; widgets: `col-lg-4` "About Flint."
     (16px `#000` weight 700 heading + paragraph) and "Connect" (six 30×30
     `border-radius: 50%` social chips on `#777`, hover `#45a39f`),
     `col-lg-2` "Links" and "Company" lists (`#777` links, teal on hover),
     `col-lg-3` "Contact" (address, two phone links, one mailto). Bottom row:
     centred copyright line.
  10. `div.loader` — Bootstrap spinner preloader (`z-index: 7700`, fixed centre).
      Recreation **omits** the preloader (it is page chrome, not a section, and
      would only add an artificial delay).
- **Design tokens extracted from `css/style.css` (60,200 B):**
  - Brand teal **`#367f7c`** — 31 declarations (`.bg-primary`, `.btn-primary`,
    `.line`, `.feature` icon colour, footer links, hover accents). Darker
    **`#2b6663`** (4; `:active`/focus border), **`#2e6c69`** (hover fill),
    lighter **`#45a39f`** (footer social hover).
  - Surfaces: `#fff` (44), `#f8f9fa` (4, mobile-menu toggle border),
    `#e9ecef` (4), **`#efefef`** (2; footer band + arrow border),
    icon chip `rgba(54,127,124,.1)`.
  - Ink: `#000` (18; headings/logo), `#212529` (15; body default),
    `#6c757d` (8; muted), footer text `#888` / link `#777`.
  - Type: **Playfair Display** (headings + logo, `h1` 2.5rem/50px hero weight 700) and **Open Sans** (body, 14px), with **Georgia** serif italic for
    blockquotes. Sizes: `h1` 2.5rem, `h2` 2rem, `h3` 1.75rem (feature/media
    headings override to 20px/16px).
  - Radii: buttons **30px** pills (`padding: 12px 30px`, 12px uppercase text,
    `letter-spacing: .1rem`), circles for avatars (40px), feature chips (90px,
    `50%`), footer social chips (30px), `.more .arrow` (30px, `50%`).
  - Rhythm: `.section` `padding: 7rem 0`; `.post-entries` `70px 0`;
    footer `70px 0`; CTA `.py-5` `3rem 0`; hero `100vh` / `min-height: 800px`;
    `.section-1` `padding-bottom: 2rem`.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/flint-<n>/<w>/<h>`); icons → lucide-react (`Lamp`,
  `BedDouble`, `Armchair`, `Bath` for the four service chips, `ArrowRight`,
  `ChevronDown`, `X`, `Menu`); brand social icons as inline SVG (lucide-react
  removed brand icons); fonts via Google Fonts `<link>` (Playfair Display +
  Open Sans); brand teal in `@theme`; the CTA reuses shared `ButtonLink` from
  `packages/ui` with pill/uppercase overrides. Footer credits Component Dock
  instead of the source's own credit line.

## Design tokens

<!-- brand-claim:2026-10-24 -->

| Token                       | Value                                                                                  | Evidence in the reference                                                                                                                                                          |
| --------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand (most-used chromatic) | `#367f7c`                                                                              | 31 declarations — `.bg-primary`, `.btn-primary`, `.line`, `.feature [class^="flaticon-"]`; style.css (60,200 B, sha256 d463cfe083c7) · <https://preview.colorlib.com/theme/spark/> |
| Brand dark / hover          | `#2b6663` · `#2e6c69`                                                                  | 4 + 4 declarations — `.btn-primary:active`, `.btn-primary:hover`                                                                                                                   |
| Brand light                 | `#45a39f`                                                                              | `.site-footer .social li a:hover` background                                                                                                                                       |
| Surface                     | `#fff`                                                                                 | 44 declarations — `.hero > .container .heading`, `.media-entry .m-body`                                                                                                            |
| Section / footer band       | `#efefef`                                                                              | `.site-footer` background, `.media-entry .more .arrow` border                                                                                                                      |
| Ink                         | `#000`                                                                                 | 18 declarations — `h1, h2, h3, .logo`, `.site-footer .widget h3`                                                                                                                   |
| Body / muted                | `#212529` · `#6c757d` · `#888`                                                         | body colour, `.nav-link.disabled`, `.site-footer` colour                                                                                                                           |
| Typeface                    | `Playfair Display` (headings, logo) + `Open Sans` (body 14px) + `Georgia` (blockquote) | `font-family` declarations in the design sheet                                                                                                                                     |
| Radii                       | `30px` pills · `50%` circles                                                           | `.btn { padding: 12px 30px; border-radius: 30px }`, `.feature` chip 90px, `.author .img img` 40px                                                                                  |
| Hero geometry               | `100vh` / `min-height: 800px`, 35 % teal panel, `rgba(0,0,0,.35)` scrim                | `.hero`, `.hero:before`, `.hero:after`                                                                                                                                             |

Palette in order of use: `#fff` ×44, `#367f7c` ×31, `#000` ×18, `#212529` ×15,
`#6c757d` ×8, `#f8f9fa` ×4, `#e9ecef` ×4, `#2b6663` ×4, `#efefef` ×2.

- Put the accent (`--color-brand`), surface and ink in `@theme` and use them
  through utilities / `cn()`.
- Do not invent shades: hovers reuse the sheet's own `#2e6c69` / `#2b6663`
  and `#45a39f`.
- Reuse the sheet's radii exactly: 30px pills, 40px avatars, 90px icon chips,
  30px arrow circles — no extra rounding.

## Requirements

### Requirement: Overlay navigation with dropdown

The system SHALL render an absolute navigation bar over the hero with the site
name "Flint", a desktop menu that includes a "Dropdown" sub-menu, and a mobile
hamburger toggle that opens a right-hand slide-in panel.

#### Scenario: Desktop navigation content

- **GIVEN** the Flint page is rendered
- **THEN** the navigation SHALL show the site name "Flint"
- **AND** it SHALL show the links Home, About us, Dropdown, Our products,
  Features, Blog and Contact Us
- **AND** the Dropdown item SHALL expose Menu One, Menu Two, Menu Three and the
  Sub Menu One/Two/Three entries

#### Scenario: Mobile panel opens and closes

- **WHEN** the user clicks the "Open menu" toggle
- **THEN** the mobile panel SHALL become visible
- **AND** the toggle SHALL report `aria-expanded="true"`
- **WHEN** the user clicks the panel's "Close menu" control
- **THEN** the panel SHALL be hidden again

#### Scenario: Selecting a mobile link closes the panel

- **GIVEN** the mobile panel is open
- **WHEN** the user activates a navigation link inside the panel
- **THEN** the panel SHALL close

### Requirement: Full-viewport split hero

The system SHALL render a full-viewport photographic hero with a solid teal
panel down the left edge, a white display headline, and a testimonial beneath it.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **THEN** it SHALL show the subheading "Welcome"
- **AND** the headline "Design is not just what it looks like design is how it
  works"
- **AND** a quotation with the attribution "Mark Vaughn" and "Lublin, Poland"
- **AND** the hero SHALL be at least the viewport height

### Requirement: Editorial introduction section

The system SHALL render a two-column introduction: an editorial headline with a
pull quote and body copy on the left, and a photograph carrying an offset white
caption card on the right.

#### Scenario: Introduction content

- **GIVEN** the introduction section is rendered
- **THEN** it SHALL show a serif headline beginning "Separated they live in
  Bookmarksgrove"
- **AND** a pull quote from the same copy
- **AND** three body paragraphs
- **AND** a caption card headed "We love minimal"

### Requirement: Services grid

The system SHALL render four service blocks with circular teal icon chips under
the centred heading "Our Services Includes...".

#### Scenario: Services render

- **GIVEN** the services section is rendered
- **THEN** it SHALL show the heading "Our Services Includes..."
- **AND** exactly four service titles "Reduce costs to a minimum"
- **AND** each service SHALL show an icon

### Requirement: Blog cards with read-more affordance

The system SHALL render four blog cards, each with a cover image, date, title,
summary and a "Read More" affordance linking to the article.

#### Scenario: Blog cards render

- **GIVEN** the blog section is rendered
- **THEN** it SHALL show four "Read More" links
- **AND** each card SHALL show a publication date
- **AND** each card title SHALL be a link

### Requirement: Testimonial row

The system SHALL render three ink-coloured testimonials in a row.

#### Scenario: Testimonials render

- **GIVEN** the testimonial section is rendered
- **THEN** it SHALL show three quotations
- **AND** each SHALL show an author name and location

### Requirement: Call-to-action band

The system SHALL render a teal call-to-action band with a heading and a
get-started link.

#### Scenario: CTA renders

- **GIVEN** the CTA band is rendered
- **THEN** it SHALL show the heading "Get started with our products"
- **AND** a "Get started" link

### Requirement: Footer with contact details and social links

The system SHALL render a pale-grey footer with an about column, connected
social chips, two link columns and a contact column.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **THEN** it SHALL show the widgets "About Flint.", "Connect", "Links",
  "Company" and "Contact"
- **AND** it SHALL show an address, a phone number and an email address
- **AND** each social chip SHALL be a labelled link

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5).

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/flint/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/flint/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing
  at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] `apps/flint` exists with package name `@free-react-templates/flint`
- [ ] `vite.config.ts` registers `injectUiSource()` (see docs/conventions.md)
- [ ] Fonts Playfair Display + Open Sans loaded via Google Fonts `<link>`
- [ ] Brand teal `#367f7c` (+ `#2e6c69`, `#2b6663`, `#45a39f`) and `#efefef`
      defined in `@theme`
- [ ] Section order matches the reference 1:1 (nav + mobile panel → split hero →
      introduction → services → blog cards → testimonials → CTA → footer)
- [ ] Per-app gate passes: `scripts/verify-app.sh flint` (typecheck + lint +
      100% coverage tests + build)
- [ ] Full gate passes on merge (CI `npm run gate`), nightly sweep green
- [ ] TEMPLATES.md: mark BOTH Spark rows (lines 626 and 1177) `[~]` → `[x]` +
      Surge URL after merge
- [ ] `npm run readme:status` regenerates the README Templates status table
- [ ] PR description states: source template (ColorLib Spark), preview URL,
      design tokens, what differs (rename, picsum placeholders, preloader omitted)
