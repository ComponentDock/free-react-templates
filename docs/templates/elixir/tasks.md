# Elixir — Implementation Tasks

Source design: **Pharma** (`https://colorlib.com/wp/template/pharma/`) → recreation
name **elixir**. Shipped at https://elixir.free.componentdock.com.

Scope: a pharmacy / supplement store home page — photo hero, three overlapping
promo tiles, a popular-products grid, a new-products strip, testimonials, two
photo CTA halves and a three-column footer. Single page; the source's
shop/cart/about/contact pages are out of scope.

## Component breakdown

Render order as composed in `apps/elixir/src/App.tsx`:

### 1. Navbar
- Wordmark, nav links (Home, Store, a dropdown with four sub-links, About,
  Contact), optional search toggle and cart badge.
- Scenario — links: **WHEN** the page loads; **THEN** the nav shows Home, Store,
  About and Contact.
- Scenario — mobile menu: **WHEN** the viewport is narrow; **THEN** the nav
  collapses behind a menu toggle.

### 2. Hero
- Photo background, uppercase kicker, `h1` "Welcome To Elixir", teal CTA.
- Scenario — hero copy: **WHEN** the page loads; **THEN** the hero shows the
  kicker, the `h1` and a "Shop Now" button.
- Scenario — CTA: **WHEN** the CTA is activated; **THEN** it does not navigate
  away from the page.

### 3. FeatureBanners
- Three promo tiles (teal / green / amber) overlapping the hero's bottom edge:
  "Free Shipping", "Season Sale 50% Off", "Buy A Gift Card".
- Scenario — three tiles: **WHEN** the page loads; **THEN** three promo tiles
  with their own fill colours are visible.

### 4. PopularProducts
- Six product cards on white; two carry a `Sale` chip and a struck list price.
- Scenario — grid: **WHEN** the page loads; **THEN** six product cards render in
  a 3-per-row grid at desktop width.
- Scenario — sale pricing: **WHEN** a card is on sale; **THEN** the old price is
  struck through and the current price follows an em dash.

### 5. NewProducts
- Four cards on a light band, horizontally scrollable, no arrow chrome.

### 6. Testimonials
- Four quotes: avatar, italic serif quote, name.

### 7. CtaBanners
- Two photo halves with `h2` + link: "Pharma Products", "Rated by Experts".

### 8. Footer
- Three columns (About Us, Quick Links, Contact Info) + copyright + Component
  Dock link.
- Scenario — Component Dock link: **WHEN** the page loads; **THEN** the footer
  contains a link to "https://www.componentdock.com/" labelled "Component Dock".

### Cross-cutting requirements

- **Page title** — "Elixir — Pharmacy & Supplements".
- **Design tokens** — brand teal `#51eaea`, ink `#25262a`, body `#8c92a0`,
  paper `#fff` / `#edf0f5`; radii 4px on inputs/cards, 50% on avatars.
- **No source-site references in the app** — no file under `apps/elixir/` may
  contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's
  name; the footer credits Component Dock instead.

## Verification

- [x] `apps/elixir` ships on https://elixir.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order matches the reference: hero → promo tiles → popular → new
      products → testimonials → CTA halves → footer
- [x] Brand teal and the green/amber tile fills are present
- [x] No source-designer name, source URL or source template name under
      `apps/elixir/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link Component Dock
  (`https://www.componentdock.com/`).
- **Provenance ban.** No `colorlib.com` URL, designer name or source template
  name under `apps/elixir/` (AGENTS.md rule 5).
- **Deploy identity.** `public/CNAME` = `elixir.free.componentdock.com`, package
  `homepage` = `https://elixir.free.componentdock.com`.
