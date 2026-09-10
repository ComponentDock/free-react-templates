# Tasks & Design Notes: CryptForge (`bitcoin`)

## Overview

Recreation of ColorLib **Bitcoin** (`https://colorlib.com/wp/template/bitcoin/`) under the name **CryptForge**. A cryptocurrency landing page with a hero banner displaying live price, a currency converter, service features, pricing cards, and a blog section.

## Section Order & Architecture

1. **Navbar**: Fixed header with brand logo ("CryptForge"), nav links (Home, Convert, Features, Pricing, Blog). Starts transparent, transitions to `rgba(34,34,34,0.9)` on scroll. Hidden on mobile, replaced by hamburger menu.
2. **Banner / Hero**: Full-height section with background image + dark navy overlay (`rgba(4,9,30,0.85)`). Centered content: uppercase subtitle "Currently Purchase Rate", large bold price ($12,356), description paragraph, "Buy Bitcoin" solid orange CTA (`#f78f3d`, 3px radius).
3. **Currency Converter**: Gradient-background card that overlaps the banner by 105px (negative margin). Contains: heading "The Currency Converter", subtitle, Bitcoin image on left, two columns of form inputs with transparent bg + gold borders, and a white action button on the right.
4. **Simple Services (3-column)**: Three equal columns, each with an icon image, linked heading, and description paragraph. Hover turns heading orange. White background.
5. **About Us**: Split layout on dark `#222` background. Left: image carousel (use picsum.photos). Right: Bitcoin icon, heading "Exchange Bitcoin is not that tough Anymore", descriptive text. Uses `container-fluid` for full-width.
6. **Features / Why Choose Us**: Centered heading + subtitle. 3x2 grid of feature cards, each with a Lucide icon (replacing Linearicons), title, and description. Hover turns title orange. Cards have 30px padding and smooth transitions.
7. **Stats / Chart**: Light `#f9f9ff` background. Split: chart/diagram image left, heading "Ups and Downs of Bitcoin (Realtime)" + text + "View Details" gradient button right.
8. **Call-to-Action**: Full-width gradient section (`#f3c400 → #f88845`). Centered white text: heading "Huge Transaction in last Week", description, white "Buy Bitcoin Now!" button (hover → transparent + dark border).
9. **Pricing (3 cards)**: Centered heading "Purchase whatever you want". Three bordered cards (Ripple $7999, Ethereum $9999, Bitcoin $5999). Each: light top with name, middle text, bottom with large price + "Get Started" button (dark `#222` bg, hover → gold `#ca9814`).
10. **Blog (3 cards)**: Centered heading "Latest Posts from our Blog". Three cards: thumbnail image, linked title, excerpt, author info (avatar + name + date). Hover turns title orange.
11. **Footer**: Dark navy `#04091e` background. 4-column layout: About Us text, Top Products link list, Newsletter (email input in `#1e2235` bg + orange submit), social icons (Facebook, Twitter, Dribbble, Behance in `#111` bg boxes). Bottom bar: copyright with Component Dock link, social icon buttons.

## Design Fidelity Notes

- **Colors**: Primary orange `#f78f3d`, gradient `#f3c400 → #f88845`, heading `#222`, body `#777`, light bg `#f9f9ff`, dark bg `#222`, footer `#04091e`. All via Tailwind `@theme` custom colors.
- **Typography**: Poppins font (Google Fonts, weights 300/400/500/600/700). Light body (300), semibold headings (600). Large hero price at 100px on desktop, responsive down.
- **Buttons**: Primary uses gradient background + 25px radius (pill). Banner uses solid orange + 3px radius. Call-to-action uses white bg. All have 0.3s ease transitions.
- **Spacing**: `.section-gap` = `padding: 120px 0`. Converter overlaps banner by 105px. Card internal padding 30-35px.
- **Layout**: Bootstrap-style grid (col-lg-4, col-md-6, etc.) → Tailwind grid/flex equivalents. Full-height banner with `min-h-screen`. Responsive breakpoints at 768px, 800px, 991px, 1024px.
- **Icons**: Replace Linearicons (`lnr-*`) with Lucide React equivalents: `lnr-user` → `User`, `lnr-license` → `Award`, `lnr-phone` → `Phone`, `lnr-rocket` → `Rocket`, `lnr-diamond` → `Gem`, `lnr-bubble` → `MessageCircle`, `lnr-arrow-right` → `ArrowRight`.
- **Images**: All placeholder via `picsum.photos/seed/cryptforge-<n>/<w>/<h>` with deterministic seeds. No original assets copied.
- **Interactivity**: Navbar scroll listener (IntersectionObserver or scroll event), converter form inputs (controlled state), pricing card hover effects, blog card hover effects.
