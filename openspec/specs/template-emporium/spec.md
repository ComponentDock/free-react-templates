# Template: Emporium (E-commerce Fashion Store)

> **⚠️ SUPERSEDED — do not implement.** ColorLib "Coza Store" already shipped
> as **Mannequin** (apps/mannequin) via PR #495
> (https://mannequin.free.componentdock.com). All three TEMPLATES.md "Coza
> Store" rows are marked `[x]` with the mannequin URL. This spec was prepped
> in parallel by the prep stream while Mannequin was in flight; delete on
> next cleanup.

## Purpose

Emporium is a multi-section e-commerce fashion storefront in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Coza Store" free e-commerce template (source:
https://colorlib.com/wp/template/coza-store/), built under a DIFFERENT name
(**Emporium** — a large retail store; a fitting name for a fashion e-commerce
storefront, and a well-known architectural noun for a sizeable marketplace —
per the monorepo naming mandate: never reuse the ColorLib source name), with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a classic clean, minimalist high-fashion e-commerce template:
a thin black TOP UTILITY BAR, a sticky-ish NAVBAR with a search/wishlist/cart
icon cluster, a full-width HERO SLIDER (carousel) with large fashion
photography + serif headlines ("NEW ARRIVALS", "Men Collection 2018") and a
pill CTA, a 3-COLUMN CATEGORY banner grid (Women / Men / Accessories), a large
PRODUCT OVERVIEW section with a left FILTER SIDEBAR (category, price, color
swatches, size) and a product grid of cards (image + name + price + optional
badge), a wide PROMO banner, a NEWSLETTER subscribe section ("Special Offer
for Subscribers"), and a 4-column FOOTER with a copyright bar.

The design is a **"black + white/gray with a pop of periwinkle color"** high
fashion aesthetic: an off-white/light-gray page, deep-black text, a
periwinkle-lavender primary CTA, elegant **serif** headlines over a modern
**sans-serif** body.

The whole template is one scrolling storefront page. Emporium recreates the
structure 1:1 with matching layout, tokens, typography, and content kinds (no
ColorLib assets copied; all photography is replaced with
`https://picsum.photos/seed/emporium-<n>/<w>/<h>` placeholders — one
deterministic seed per image).

> NAMING NOTE: the ColorLib source name `coza-store` / "Coza Store" is
> FORBIDDEN as the app name. **Emporium** is the new, original name — single
> lowercase word, no collision with `apps/`, `openspec/specs/`,
> `docs/templates/` (verified 2026-08-16). Source slug + preview URL are
> recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Coza Store" — free e-commerce fashion store
  template (tags on the ColorLib listing: **Bootstrap 5**, **Business**,
  **eCommerce**). Listed in TEMPLATES.md at line 568 (`- [ ] **Coza Store**`).
  Source slug `coza-store`; the preview URL is
  https://preview.colorlib.com/theme/coza-store/.
- **Live preview DOM — UNREACHABLE (verified 2026-08-16):** the preview URL
  `https://preview.colorlib.com/theme/coza-store/` returns **HTTP 404**
  ("Not Found") both via `curl` and in-browser, as does the equivalent HTTPS
  path — NO `main.css`/`css/*` stylesheet could be fetched. Per the fallback
  rule in `docs/replication.md` the **screenshot is the reference** for this
  prep (noted so the implementer knows the preview is down and should rely on
  the screenshot + this spec's token notes; if the preview later comes back,
  they may refine tokens from the real CSS).
- **Visual design (screenshot `cozastore-free-template.jpg`, 1200×946,
  verified 2026-08-16 via vision):** minimalist high-fashion storefront, a
  **monochrome black/white/light-gray palette with a periwinkle-lavender
  accent**:
  - Page background: clean off-white / very light gray (~~`#f5f5f5`); hero
    area a slightly darker textured light gray (~~`#e0e0e0`).
  - Text: deep black (`#000`).
  - **Accent/periwinkle CTA**: the "SHOP NOW" hero pill button is
    periwinkle-lavender (~`#717fe0`) with white text — the one pop of color.
  - Small **pink/red "New" badge** next to "Features" in the nav.
  - Typography: **serif** (Playfair-Display-like) for big headlines
    ("NEW ARRIVALS"), **sans-serif** (Open-Sans/Lato-like) for nav, subheads,
    category labels, body.
  - Header: thin BLACK top bar (left "Free shipping for standard order over
    $100"; right Help/FAQs · My Account · USD currency); main navbar with
    black-uppercase "COZA STORE" logo, links Home/Shop/Features(+New
    badge)/Blog/About/Contact, and a right icon cluster (search, heart
    wishlist, cart-bag with a "0" count badge).
  - Hero: full-width banner, male model shot, small subhead "Men Collection
    2018", big serif "NEW ARRIVALS", periwinkle pill "SHOP NOW".
  - Category grid: 3 columns (Women/Spring 2018 · Men/Spring 2018 ·
    Accessories/New Trend), white cards over the light-gray page.
  - Footer top edge visible: bold uppercase "PRODUCT OVERVIEW" heading.

### Observed structure & section order (Coza Store → Emporium)

1. **Top utility bar** — thin black full-width strip.
2. **Navbar** — logo + links + search/wishlist/cart icon cluster with cart
   count badge.
3. **Hero slider (carousel)** — full-width fashion banner(s), serif
   headline + periwinkle pill CTA ("SHOP NOW"); slide captions like "Men
   Collection 2018" / "NEW ARRIVALS".
4. **Category grid** — 3-column banner cards: Women / Men / Accessories,
   each with a small label line (e.g. "Spring 2018", "New Trend").
5. **Product Overview** — the core section (the "PRODUCT OVERVIEW" heading
   seen in the footer-top edge of the screenshot actually labels this
   store section): left FILTER SIDEBAR (category list, price range, color
   swatches, size) + right PRODUCT GRID of cards (product image, name,
   price; optional "New"/sale badge).
6. **Newsletter subscribe** — "Special Offer for Subscribers" heading +
   email input + subscribe button.
7. **Footer** — multi-column (Categories / Links / Help / Newsletter) +
   copyright bar + the mandatory Component Dock link.

> NOTE for the implementer: the live preview is down, so the EXACT section
> inventory above is reconstructed from the (verified) screenshot + the known
> structure of this popular Coza Store free template. Before coding, re-check
> the preview; if it is back, reconcile the section order/names 1:1 with the
> DOM and update this spec. If it stays down, follow the screenshot + this
> list (the screenshot captures the top bar, navbar, hero, category grid, and
> product-overview heading; the newsletter + footer arrangement follows the
> standard Coza Store layout).

- **Design tokens (from screenshot):**
  - Off-white / light-gray page background **~`#f5f5f5`** (section cards
    white `#fff` on it).
  - Hero/section soft gray **~`#e0e0e0`**.
  - Deep black **`#000`/`#111`** — headlines, nav, footer headings, product
    names.
  - **Periwinkle-lavender primary `#717fe0`** — hero "SHOP NOW" pill button
    (white text) — the template's one brand accent (recreate as the `@theme`
    brand color).
  - Small red/pink new-badge **(e.g. `#e53935` / `#ff5f6d`)** — used on the
    nav "Features" and on product "New" badges.
  - Neutral warm grays `#666`/`#999` for body copy, prices, meta.
  - Buttons: **pill / fully-rounded** (large `border-radius`), uppercase
    bold label, decent padding; the primary accent is periwinkle.
  - Fonts: **serif** (Playfair Display) for hero/feature headlines; **sans**
    (Open Sans or Poppins) for everything else. Load both via Google Fonts
    `<link>`.
  - Cards: white, subtle spacing rhythm, generous section padding.
  - Photography placeholders: `https://picsum.photos/seed/emporium-<n>/<w>/<h>`
    — assign one stable seed per image (hero slides, category banners, product
    shots); fashion-fashion placeholder images (dark/neutral subjects) choose
    `picsum` seeds that render moody, garment-like photos.

## Requirements

### Requirement: Top utility bar

The system SHALL render a thin full-width black utility strip above the navbar.

#### Scenario: Utility strip

- **GIVEN** the Emporium app is rendered
- **WHEN** the page loads
- **THEN** a thin black full-width bar SHALL appear at the very top
- **AND** it SHALL show a shipping notice on the left (recreate the content
  kind: "Free shipping for standard order over $100" paraphrased)
- **AND** it SHALL show utility links/controls on the right (Help/FAQs ·
  My Account · a currency selector "USD")

### Requirement: Navbar

The system SHALL render a navbar with a logo, navigation links, and a
search/wishlist/cart icon cluster with a cart count badge.

#### Scenario: Navbar content

- **GIVEN** the Emporium app is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand logo "Emporium" (black, bold,
  uppercase, sans)
- **AND** it SHALL show the nav links Home · Shop · Features · Blog · About ·
  Contact
- **AND** the "Features" link SHALL carry a small red/pink "New" badge
- **AND** it SHALL show a right icon cluster: search, wishlist (heart),
  and a cart with a visible "0" count badge

### Requirement: Hero slider

The system SHALL render a full-width hero carousel with fashion photography, a
serif headline, and a periwinkle pill CTA.

#### Scenario: Hero slide

- **GIVEN** the Emporium app is rendered and the hero is in view
- **THEN** the hero SHALL show a full-width banner with a fashion photo
  (picsum placeholder) and a soft-gray backdrop
- **AND** it SHALL show a small sans overline (e.g. "Men Collection 2018")
- **AND** it SHALL show a large SERIF headline (e.g. "NEW ARRIVALS")
- **AND** it SHALL show a **periwinkle (`#717fe0`) pill (fully-rounded)**
  button with white uppercase text "SHOP NOW"
- **AND** the hero SHALL support multiple slides via a carousel (prev/next
  controls and/or dots) — recreate with React state

### Requirement: Category grid

The system SHALL render a 3-column grid of category banner cards.

#### Scenario: Category cards

- **GIVEN** the Emporium app is rendered and the category section is in view
- **THEN** the section SHALL show exactly three category cards: Women · Men ·
  Accessories
- **AND** each card SHALL show an image (picsum placeholder) on a white card
  over the light-gray page
- **AND** each card SHALL show its category name and a small label line
  (e.g. "Spring 2018" / "New Trend")

### Requirement: Product overview (filters + grid)

The system SHALL render the main store section with a filter sidebar and a
product grid.

#### Scenario: Section heading

- **GIVEN** the Emporium app is rendered and the product section is in view
- **THEN** the section SHALL show a bold uppercase heading "Product Overview"

#### Scenario: Filter sidebar

- **AND** there SHALL be a LEFT filter sidebar containing:
  - a category list/filter
  - a price-range filter
  - color swatches (clickable color dots)
  - a size filter
- **AND** each filter SHALL be a real, working interactive control rendered
  with React state (selecting a filter updates the product grid)

#### Scenario: Product grid

- **AND** the section SHALL show a product GRID of cards (recreate several
  products; picsum placeholder images)
- **AND** each product card SHALL show: product image, product name, and
  price
- **AND** optional "New"/sale badge SHALL render where configured

### Requirement: Newsletter

The system SHALL render a newsletter subscribe section.

#### Scenario: Newsletter subscribe

- **GIVEN** the Emporium app is rendered and the newsalert section is in view
- **THEN** the section SHALL show a heading (content kind: "Special Offer for
  Subscribers" paraphrased)
- **AND** it SHALL show an email input and a submit/subscribe button
- **AND** submitting a valid email SHALL show a confirmation message (a11y:
  labelled input, non-empty validation, aria-live on the confirmation)

### Requirement: Footer

The system SHALL render a multi-column footer with the mandatory Component
Dock link.

#### Scenario: Footer content

- **GIVEN** the Emporium app is rendered
- **WHEN** the page bottom is visible
- **THEN** the footer SHALL show multiple columns (e.g. Categories · Links ·
  Help · Newsletter) and a copyright bar
- **AND** the footer SHALL link to `https://www.componentdock.com/` (branded
  "Component Dock" — the required repo convention)

### Requirement: Page metadata

The system SHALL set a descriptive document title.

#### Scenario: Document title

- **GIVEN** the Emporium app is rendered
- **WHEN** the document loads
- **THEN** the document title SHALL be "Emporium — Fashion Store"

## Verification checklist

- [ ] `openspec/specs/template-emporium/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/emporium/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] `npm run spec:validate` passes.
- [ ] Fidelity: structure matches the Coza Store storefront 1:1 (thin black
      top utility bar → navbar with search/wishlist/cart icon cluster →
      full-width hero slider with serif headline + periwinkle pill "SHOP NOW"
      → 3-column category grid (Women/Men/Accessories) → "Product Overview"
      section with left filter sidebar + product grid → newsletter subscribe →
      multi-column footer + copyright + Component Dock). If the live preview
      comes back, reconcile the exact section order/names against the DOM.
- [ ] Tokens used in the app (`@theme`): off-white/light-gray page `#f5f5f5`,
      white cards, hero soft-gray `#e0e0e0`, deep black `#000/#111`,
      **periwinkle `#717fe0`** (primary pill CTA, white text), red/pink
      `#e53935` new-badge, warm grays `#666/#999` meta; buttons fully-rounded
      (pill), uppercase bold; **Playfair Display** serif for headlines +
      **Open Sans/Poppins** sans for body via Google Fonts `<link>`.
- [ ] No ColorLib references in `apps/emporium` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] Assets: ALL photography is picsum placeholders
      (`https://picsum.photos/seed/emporium-<n>/<w>/<h>`, one stable seed per
      image); NO copied ColorLib images/fonts/CSS. Icons via `lucide-react`
      (search, heart, shopping-bag, etc.).
- [ ] Interactivity wired with React state: hero carousel (slides +
      prev/next/dots), filter sidebar affecting the product grid, cart badge
      count, newsletter form validation + confirmation (aria-live).
- [ ] Mobile: verify the navbar (consider a collapsible/hamburger menu at
      small widths — a documented bug class for these templates), the 3-column
      category cards reflow to stacked/2-col, the product grid reflows (1–2
      cols), filter sidebar stacks above the products, and the top utility
      bar wraps.
