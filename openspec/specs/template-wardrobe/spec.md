# Template: Wardrobe (Fashion Shop)

## Purpose

Wardrobe is a single-page fashion e-commerce template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Little Closet" free template (source:
https://colorlib.com/wp/template/little-closet/), built under a
DIFFERENT name (**Wardrobe**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-based fashion shop template with a full-width
hero carousel, product cards with pricing and ratings, category tab
navigation, and a clean white/teal aesthetic targeting apparel and
accessories brands.

**Preview URL:** `https://preview.colorlib.com/theme/little-closet/` —
HTTP 404 at time of research (2026-09-19). Design analysis fell back to
the TEMPLATES.md screenshot (`littlecloset-free-template.jpg`, 1024×807).

## Design reference (replication findings)

- **Original:** ColorLib "Little Closet" — fashion shop / e-commerce
  template (source: https://colorlib.com/wp/template/little-closet/).
- **Screenshot analysis:** Viewed `littlecloset-free-template.jpg`:
  - White header with "Little Closet" brand name + handbag icon, hamburger
    menu toggle, rounded search bar, user/cart/phone icons with green
    notification badge, phone number "+1 912-252-7350" right-aligned.
  - Full-width hero with a blurred/soft lifestyle fashion photo background,
    overlaid white text "New Arrivals" (large) / "Summer Wear" (lighter),
    and a 3-card product carousel with left/right chevron navigation arrows.
    Center card: "Cool Clothing with Brown Stripes" with star rating,
    "$3.99" price, author "by Luhanna", and a green circular price badge
    "from $3.99".
  - White "Popular on Little Closet" section with category tabs: Women
    (active, teal), Men, Kids, Home Deco — separated by forward slashes.
    Below: a 3-column product grid with model photos (truncated in screenshot).
- **Design tokens (estimated from screenshot):**
  - Brand accent: teal `#26a69a` (tab active state, badges, links)
  - Page background: white `#ffffff`
  - Hero overlay: semi-transparent on fashion photo
  - Product card background: `#ffffff` with light border/shadow
  - Text: dark gray/black `#333333` for headings, `#666666` for body
  - Star rating: gold/amber `#ffc107`
  - Price badge: green `#4caf50` (circular, white text)
  - Fonts: sans-serif (likely Poppins or Open Sans — use Poppins as default)
  - Buttons/CTAs: teal `#26a69a` background, white text, rounded

## Naming

| Thing              | Value                                      |
| ------------------ | ------------------------------------------ |
| New name           | **Wardrobe**                               |
| ColorLib source    | `little-closet`                            |
| ColorLib URL       | https://colorlib.com/wp/template/little-closet/ |
| Preview URL        | https://preview.colorlib.com/theme/little-closet/ |
| App folder         | `apps/wardrobe`                            |
| Package name       | `@free-react-templates/wardrobe`           |
| Surge target       | `wardrobe.free.componentdock.com`          |
| Document title     | `Wardrobe — Fashion Shop Template`         |

## Requirements

### Requirement: Header / Navigation bar

The system SHALL render a white header with brand, search, and icon actions.

#### Scenario: Header content

- **GIVEN** the Wardrobe page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the brand name "Wardrobe" with a handbag/shopping icon
- **AND** it SHALL show a hamburger menu toggle button (mobile)
- **AND** it SHALL show a rounded search bar with placeholder "Search Item"
- **AND** it SHALL show a user icon with a green notification badge
- **AND** it SHALL show a cart icon
- **AND** it SHALL show a phone icon with the number "+1 912-252-7350"

#### Scenario: Mobile toggle

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the page loads
- **THEN** a hamburger menu toggle button SHALL be visible (aria-expanded false)
- **AND** activating it SHALL reveal the navigation links

### Requirement: Hero carousel

The system SHALL render a full-width hero section with a fashion photo background, headline text, and a product card carousel.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a full-width background image with a soft/blurred fashion photo
- **AND** it SHALL show the headline "New Arrivals" in large white text
- **AND** it SHALL show the subheading "Summer Wear" in lighter white text
- **AND** it SHALL show a product carousel with at least 3 cards

#### Scenario: Product carousel cards

- **GIVEN** the hero carousel is displayed
- **WHEN** the cards are shown
- **THEN** the center card SHALL be active/featured with a product image, name, star rating, price, and author attribution
- **AND** side cards SHALL show product images (partially visible)
- **AND** the center card SHALL show a green circular price badge ("from $3.99")
- **AND** left/right chevron navigation arrows SHALL be present

#### Scenario: Carousel navigation

- **GIVEN** the hero carousel is displayed
- **WHEN** the user activates the right arrow
- **THEN** the carousel SHALL advance to show the next set of product cards
- **AND** the left arrow SHALL advance to the previous set

### Requirement: Popular products section

The system SHALL render a "Popular" section with category tabs and a product grid.

#### Scenario: Section heading

- **GIVEN** the page is rendered
- **WHEN** the popular section is displayed
- **THEN** it SHALL show the heading "Popular on Wardrobe" centered on a white background

#### Scenario: Category tabs

- **GIVEN** the popular section is displayed
- **WHEN** the category tabs are shown
- **THEN** it SHALL show tabs: "Women", "Men", "Kids", "Home Deco"
- **AND** tabs SHALL be separated by forward slashes
- **AND** the "Women" tab SHALL be active (teal color `#26a69a`)
- **AND** other tabs SHALL be in gray/inactive color

#### Scenario: Product grid

- **GIVEN** a category tab is active
- **WHEN** the product grid is displayed
- **THEN** it SHALL show product cards in a 3-column grid (on desktop)
- **AND** each card SHALL have a product image placeholder
- **AND** cards SHALL have a light background with subtle shadow/border

#### Scenario: Tab switching

- **GIVEN** the "Women" tab is active
- **WHEN** the user clicks the "Men" tab
- **THEN** the "Men" tab SHALL become active (teal)
- **AND** the "Women" tab SHALL become inactive (gray)
- **AND** the product grid SHALL update to show men's products

### Requirement: Footer

The system SHALL render a footer with Component Dock credit.

#### Scenario: Component Dock credit

- **GIVEN** the footer is displayed
- **WHEN** the page loads
- **THEN** the footer SHALL contain a link to `https://www.componentdock.com/`
  labeled "Component Dock"

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Wardrobe app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Wardrobe — Fashion Shop Template"

## Verification checklist

- [ ] `apps/wardrobe` exists with package name `@free-react-templates/wardrobe`
- [ ] `vite.config.ts` registers `injectUiSource()` (see docs/conventions.md)
- [ ] Font Poppins loaded via Google Fonts `<link>` in index.html
- [ ] Brand teal `#26a69a`, white `#ffffff`, dark `#333333`, gray `#666666`, gold `#ffc107`, green badge `#4caf50` defined in `@theme`
- [ ] Section order matches the reference 1:1 (header → hero carousel → popular products with tabs → footer)
- [ ] Hero carousel has 3+ product cards with left/right navigation
- [ ] Category tabs switch active state and filter products
- [ ] Per-app gate passes: `scripts/verify-app.sh wardrobe` (typecheck + lint + 100% coverage tests + build)
- [ ] Full gate passes on merge (CI `npm run gate`), nightly sweep green
- [ ] TEMPLATES.md: mark Little Closet (line 1588) `[~]` → `[x]` + Surge URL + homepage after merge
- [ ] `npm run readme:status` regenerates README Templates status table after merge
- [ ] PR description states: source template (ColorLib Little Closet), preview URL, design tokens, what differs (rename, picsum placeholders)
