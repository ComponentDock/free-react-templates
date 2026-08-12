# Template: Gallery (Portfolio Template)

## Purpose

Gallery is a single-page portfolio showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Portfolio Wordpress Themes" entry in TEMPLATES.md (see TEMPLATES.md
— listed THREE times, all rows are the same source slug: line 478, line 1486
and line 2551; implement ONE app and mark ALL THREE rows `[x]` at
bookkeeping), built under a different name with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The reference is a minimal white portfolio page: a pure-white navbar with a
bold sans-serif logo on the LEFT and a hamburger menu trigger on the RIGHT; a
centered hero with a dark-gray headline whose last word is set in a VIVID
ROYAL BLUE accent ("...showcase your work") over a light-gray sub-line; a
centered row of PILL filter buttons (active "All" in blue, inactive category
pills white with a light border); a tight 3-column MASONRY photography grid;
and a floating vertical icon rail fixed on the right edge of the viewport.
Gallery recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Portfolio Wordpress Themes" — a portfolio-themes
  ROUNDUP/listicle page, not a single free template
  (source: https://colorlib.com/wp/template/portfolio-wordpress-themes/; the
  article is "25 Best WordPress Portfolio Themes 2026 (Free + Premium)" —
  10 free picks: Astra, Blocksy, Neve, Inspiro, Phlox, Sydney, Kadence,
  Hello Elementor, GeneratePress, Hestia; 15 premium picks: Bridge, Uncode,
  Kalium, TheGem, Stockholm, Divi, POFO, Norebro, Jevelin, Kallyas, Webify,
  Ronneby, Litho, Brando, Massive Dynamic). All demo links on that page are
  third-party (ThemeForest affiliate) links; there is no ColorLib-hosted
  free template behind this slug.
- **Live preview UNREACHABLE:** `https://preview.colorlib.com/theme/portfolio-wordpress-themes/`
  returned HTTP 404, and the slug is absent from
  `preview.colorlib.com/assets/js/products.js`. Per `docs/replication.md`,
  the design is reconstructed from the TEMPLATES.md screenshot
  (`portfolio-website-templates-1.jpg`, 1200×891, AVIF — converted to PNG
  and viewed in the browser + pixel-sampled for exact tokens) as the sole
  visual reference.
- **NOTE — the screenshot depicts a third-party theme:** the capture shows
  the PORTFOLIO demo of "Jevelin" (a Shufflehound theme featured in the
  roundup). Per the fidelity rules we do NOT copy that theme's name or
  assets — we recreate the VISUAL DESIGN shown in the screenshot (white
  navbar, blue-accent hero, pill filters, masonry grid, floating rail)
  under the new name "Gallery".
- **Visual design (from screenshot):**
  - Capture chrome (NOT part of the recreated page): the demo is framed in a
    macOS-style browser-window mockup (red/yellow/green traffic dots) on a
    dark-gray ground, and there is a stray text-cursor artifact right after
    the headline's final word. Both are capture artifacts — do not recreate.
  - Header: full-width pure-white bar. Bold dark sans-serif logo wordmark on
    the LEFT, hamburger menu icon on the RIGHT (the reference shows the
    hamburger at desktop width — nav links are collapsed into the menu;
    links reconstructed: Home / Portfolio / About / Contact).
  - Hero: centered — h1 "Simple and clean portfolio to showcase your work"
    (dark gray ≈ `#333333`, the word "work" set in vivid royal blue ≈
    `#2846f8`), followed by a light-gray sub-line (lorem copy: "Vivamus
    fermentum, augue a gravida gravida, odio..."), then a centered row of
    PILL filter buttons: "All" (blue background, white text) + "Art",
    "Graphic design", "Hand pens", "Offices", "Packaging", "Shopping"
    (white background, light-gray border, gray text).
  - Portfolio grid: masonry-style 3-column photography grid with very tight
    gaps (images nearly touch). Visible items in the capture: white/black
    sneakers floating over a blurred urban street, the Turning Torso tower
    against a cyan sky, a modern building with yellow balconies, green
    foliage at the bottom edge. Hover state not visible — reconstructed as
    an overlay with the item title + category.
  - Right edge: floating vertical icon rail fixed on the viewport (6 icons
    in the reference — the theme's demo switcher: home, grid, cart, help,
    globe, mail; recreated as a site utility rail with lucide equivalents).
  - Footer: not visible in the capture (cut off) — reconstructed per the
    repo standard (site name, nav links, socials, copyright).
  - Aesthetic: minimal, airy, high-contrast — pure white + near-black text +
    ONE vivid blue accent; photography-driven; generous white space.
- **Structure (1:1 as visible; remainder reconstructed):**
  1. Navbar: white bar, bold logo left ("Gallery"), hamburger right
     (visible at all widths, matching the reference); hamburger opens an
     overlay/slide-in menu with the nav links; repo-standard dark-mode
     toggle.
  2. Hero: centered headline (blue accent word), light-gray sub-line, pill
     filter row (All active by default).
  3. Portfolio grid: masonry 3-column photo grid, ≥12 items across the 6
     categories (Art, Graphic design, Hand pens, Offices, Packaging,
     Shopping), filtered client-side by the active pill; item hover shows a
     title + category overlay.
  4. Utility rail: fixed right-edge vertical stack of icon links (Home,
     Portfolio, Help, Globe, Mail) with aria-labels.
  5. Footer: site name, nav links, social icons, copyright bar.
- **Design tokens (screenshot-derived; no stylesheet available — pixel
  samples from the 1200×891 capture):**
  - Colors: pure white **`#ffffff`** (page + navbar + inactive pills);
    vivid royal blue **`#2846f8`** (accent word + active pill; sampled avg
    RGB (40,70,248); anti-aliased pill samples `#2a53ff` — treat the token
    as `#2846f8`); headline text ≈ **`#333333`** (sampled `#303038`);
    sub-text ≈ **`#888888`** (sampled `#787878`–`#b0b0b0`); pill border
    light gray ≈ **`#e0e0e0`**; footer dark ≈ **`#1f1f1f`** (repo
    standard). Put the blue + neutrals in `@theme`.
  - Fonts: clean modern sans — the reference face is Open Sans-like; use
    **Open Sans** (or Poppins/Inter as a documented equivalent) via Google
    Fonts `<link>`; the logo/wordmark in a heavier weight (700–800).
  - Buttons/pills: **border-radius 50px** (pill), padding ≈ 8px 20px,
    font-size ≈ 13–14px; active = blue bg + white text; inactive = white bg
    - 1px `#e0e0e0` border + gray text; hover = blue border/text.
  - Grid: masonry 3 columns, gap ≈ 4px (reference images nearly touch),
    varied aspect ratios to sell the masonry rhythm.
  - Section rhythm: hero centered with generous `py-20`-ish padding; grid
    full-bleed tight; footer dark.
- **Recreation decisions:** same kind of minimal portfolio showcase — white
  navbar with left logo + right hamburger (opens a nav overlay); hero with a
  blue-accent word and pill filters that actually FILTER the grid
  client-side (the reference uses AJAX filtering); masonry grid via CSS
  columns (`columns-3`, `break-inside-avoid`) or a grid with varied row
  spans; seeded picsum photos (`picsum.photos/seed/gallery-<n>/<w>/<h>`:
  12 items, varied heights e.g. 600×800 / 600×450 / 600×700); floating
  utility rail; lucide-react icons (Menu, X, Home, LayoutGrid, HelpCircle,
  Globe, Mail, and socials as inline SVG — lucide-react removed brand
  icons); Open Sans via Google Fonts `<link>`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome; no assets copied.

Gallery lives in `apps/gallery` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a white top navigation bar with a bold logo on the
left and a hamburger menu trigger on the right (visible at all widths,
matching the reference).

#### Scenario: Navbar content

- **GIVEN** the Gallery page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Gallery" on the left in a
  bold sans-serif weight
- **AND** a hamburger menu trigger SHALL be shown on the right

#### Scenario: Menu overlay

- **GIVEN** the navbar is rendered
- **WHEN** the user clicks the hamburger trigger
- **THEN** a menu overlay SHALL open listing the navigation links (Home,
  Portfolio, About, Contact)
- **AND** clicking the close control SHALL close it

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a centered hero with a headline whose last word is
set in the brand blue, a light-gray sub-line, and a row of pill filter
buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 heading (e.g. "Simple and clean
  portfolio to showcase your work") centered on the page
- **AND** the accent word of the heading (e.g. "work") SHALL be styled in
  the brand blue `#2846f8`
- **AND** it SHALL show a light-gray sub-line below the heading
- **AND** it SHALL NOT render a call-to-action button (matches the
  reference screenshot)

#### Scenario: Filter pill row

- **GIVEN** the hero is displayed
- **WHEN** the filter row is shown
- **THEN** it SHALL show an "All" pill with a blue background and white
  text (active by default)
- **AND** it SHALL show category pills (Art, Graphic design, Hand pens,
  Offices, Packaging, Shopping) with a white background, a light-gray
  border and gray text

### Requirement: Portfolio grid

The system SHALL render a masonry-style 3-column photography grid whose
items are filtered client-side by the active filter pill.

#### Scenario: Grid content

- **GIVEN** the portfolio grid is rendered
- **WHEN** the "All" filter is active
- **THEN** the grid SHALL show every portfolio item (≥12), each with a
  photo and a category from the pill list
- **AND** the grid SHALL lay items out in three columns with a tight gap

#### Scenario: Category filtering

- **GIVEN** the portfolio grid is rendered
- **WHEN** the user clicks a category pill (e.g. "Art")
- **THEN** the pill SHALL become active (blue background, white text)
- **AND** the grid SHALL show only items of that category
- **AND** clicking "All" SHALL restore the full grid

#### Scenario: Item hover overlay

- **GIVEN** a portfolio item is displayed
- **WHEN** the user hovers or focuses the item
- **THEN** an overlay SHALL appear showing the item title and category
- **AND** the item SHALL be keyboard-accessible (focusable)

### Requirement: Utility rail

The system SHALL render a fixed vertical rail of icon links on the right
edge of the viewport.

#### Scenario: Rail content

- **GIVEN** the page is rendered
- **WHEN** the utility rail is displayed
- **THEN** it SHALL show a vertical stack of icon links (e.g. Home,
  Portfolio, Help, Globe, Mail)
- **AND** each icon-only link SHALL have an accessible name (aria-label)
- **AND** the rail SHALL stay fixed while the page scrolls

### Requirement: Footer

The system SHALL render a footer with the site name, navigation links,
social icons and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Gallery"
- **AND** it SHALL show navigation links (Home, Portfolio, About, Contact)
- **AND** it SHALL show social icon links
- **AND** it SHALL show a copyright line in the bottom bar

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Gallery app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the
  hero, grid and rail in the main landmark, and the Footer in the
  contentinfo landmark
- **AND** the document title SHALL be "Gallery — Portfolio Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-gallery`.
- [ ] App renders all sections 1:1 in the order above (navbar → hero with
      filters → portfolio grid → utility rail → footer).
- [ ] Design tokens match the reference: white `#ffffff` bg, vivid royal
      blue `#2846f8` accent (word + active pill), `#333333` headline,
      `#888888` sub-text, `#e0e0e0` pill borders; Open Sans (or documented
      equivalent) via Google Fonts; pill radius 50px; masonry 3 columns,
      tight gap.
- [ ] Font loaded via Google Fonts `<link>`; no font or image assets copied
      from the original; the Jevelin name/appearance is NOT reproduced
      (only the generic layout/design language).
- [ ] All images are seeded picsum placeholders
      (`picsum.photos/seed/gallery-<n>/<w>/<h>`) with varied heights so the
      grid reads as masonry.
- [ ] `vite.config.ts` registers `injectUiSource()` (see conventions).
- [ ] 100% Vitest coverage on `apps/gallery` (lines/functions/branches/
      statements).
- [ ] PR description includes: source template (ColorLib "Portfolio
      Wordpress Themes" roundup entry — listed THREE times in TEMPLATES.md:
      lines 478, 1486, 2551), preview URL (unreachable — 404; screenshot-
      only reference, note that the screenshot depicts the featured
      "Jevelin" portfolio demo whose visual design is recreated under the
      new name), design tokens used, what differs (name, placeholder
      images, reconstructed nav links/footer, client-side filtering).
