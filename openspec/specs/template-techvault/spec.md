# Template: TechVault (E-Commerce Tech Store)

## Purpose

An E-Commerce Tech Store template with navigation and search, hero banner with product and newsletter signup sections. Recreation of ColorLib "Onetech" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page site for a tech/electronics e-commerce store.

- **ColorLib source:** https://colorlib.com/wp/template/onetech/
- **Preview URL:** https://preview.colorlib.com/theme/onetech/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/onetech-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, packages/ui shared components
- **Deploy target:** techvault.free.componentdock.com

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/onetech/ (HTTP 200, 267,120 B, fetched 2026-10-23) and its theme stylesheet `theme/onetech/styles/index.min.css` (98,053 B, sha256 `6c8ec9eeb1ec…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#0a70b9` | 40 declarations — `.button`, `.logo a` |
| Other chromatic values | `#d42f2f`, `#0e8ce4`, `#0e8ce4cc` | `#d42f2f` × 12 (.banner_price); `#0e8ce4` × 9 (.ui-quote); `#0e8ce4cc` × 2 (.product_cart_button:hover) |
| Surface | `#ffffff` | 47 declarations — `.text-bg-primary`, `.text-bg-success` |
| Ink / dark surface | `#000000` | 40 declarations — `.text-bg-info`, `.text-bg-light` |
| Typeface | `Rubik, sans-serif` (3 rules — body)<br>`Montserrat, sans-serif` (1 rule — .banner_text) | `font-family` declarations in the theme sheet |
| Body type | `font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); line-height: var(--bs-body-line-height); color: var(--bs-body-color)` | `body{…}` rule |
| Radii | `50%`, `5px`, `8px` | `50%` (.cart_count); `5px` (.button); `8px` (.bestsellers_item) |

Palette in order of use: `#ffffff` ×47, `#000000` ×40, `#0a70b9` ×40, `#0000001a` ×19, `#0000008f` ×15, `#d42f2f` ×12.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Page structure and layout

The template SHALL render a complete single-page e-commerce storefront with a header, hero banner, product sections, newsletter, and footer.

#### Scenario: Page loads with all sections visible

- **WHEN** the user opens the page
- **THEN** the TopBar with contact info is visible
- AND the Header with logo "TechVault" and search bar is visible
- AND the MainNav with categories and menu items is visible
- AND the Hero Banner with product spotlight is visible

#### Scenario: All product sections render

- **WHEN** the user scrolls through the page
- **THEN** a "Characteristics" section with 4 feature tiles is visible
- AND a "Deals of the Week" section with a countdown timer is visible
- AND a "Popular Categories" section with category cards is visible
- AND an "Adverts" section with 2 banner columns is visible
- AND a "Best Sellers" section with a product grid is visible
- AND a "Hot New Arrivals" section with tabbed listings is visible
- AND a "Brands" section with brand logos is visible

### Requirement: Navigation and search

The template SHALL provide a functional navigation bar with category and main menu items, plus a search form.

#### Scenario: Navigation items are accessible

- **WHEN** the user views the navigation
- **THEN** the categories menu shows product categories (Computers, Cameras, Hardware, Smartphones, etc.)
- AND the main nav shows links (Home, Super Deals, Featured Brands, Pages, Blog, Contact)

#### Scenario: Search form is present

- **WHEN** the user views the header
- **THEN** a search input with placeholder "Search for products..." is visible
- AND a category dropdown ("All Categories") is adjacent to the search input

### Requirement: Hero banner with product spotlight

The template SHALL display a hero banner with a featured product, price, and call-to-action.

#### Scenario: Banner shows product details

- **WHEN** the user views the banner
- **THEN** a headline "New Era of Smartphones" is visible
- AND a crossed-out original price ($530) and discounted price ($460) are shown
- AND a "Shop Now" button is present

### Requirement: Deals of the Week with countdown

The template SHALL show a deals section with a product card and countdown timer display.

#### Scenario: Deal card displays correctly

- **WHEN** the user views the deals section
- **THEN** the title "Deals of the Week" is visible
- AND a product image, category, name, and prices (original/discounted) are shown
- AND a countdown timer with hours, minutes, and seconds is displayed

### Requirement: Newsletter signup

The template SHALL provide a newsletter email subscription form.

#### Scenario: Newsletter form renders

- **WHEN** the user reaches the newsletter section
- **THEN** the title "Sign up for Newsletter" is visible
- AND an email input with placeholder "Enter your email address" is present
- AND a "Subscribe" button is present

#### Scenario: Newsletter form prevents default submit

- **WHEN** the user enters an email and clicks Subscribe
- **THEN** the form does not navigate away (demo mode, preventDefault)

### Requirement: Footer with Component Dock link

The template SHALL display a footer with contact info, navigation links, and a link to Component Dock.

#### Scenario: Footer sections are present

- **WHEN** the user views the footer
- **THEN** a contact column with phone number is visible
- AND a "Find it Fast" column with category links is visible
- AND a "Customer Care" column with support links is visible

#### Scenario: Copyright links to Component Dock

- **WHEN** the user views the copyright bar
- **THEN** a link to https://www.componentdock.com/ is present
- AND the text "Made with Component Dock" or similar branding is shown

### Requirement: Responsive design

The template SHALL be responsive and adapt to mobile screen sizes.

#### Scenario: Mobile layout adapts

- **WHEN** the user views the page on a mobile device (width < 768px)
- **THEN** the navigation collapses to a hamburger menu icon
- AND product grids stack to fewer columns
- AND the footer columns stack vertically

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/techvault/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/techvault/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page structure and layout — the TopBar with contact info is visible
- [ ] Navigation and search — the categories menu shows product categories (Computers, Cameras, Hardware, Smartphones, etc.)
- [x] Hero banner with product spotlight — a headline "New Era of Smartphones" is visible
- [x] Deals of the Week with countdown — the title "Deals of the Week" is visible
- [x] Newsletter signup — the title "Sign up for Newsletter" is visible
- [ ] Responsive design — the navigation collapses to a hamburger menu icon
