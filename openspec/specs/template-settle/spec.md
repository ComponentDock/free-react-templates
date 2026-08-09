# Template: Settle (Furniture E-commerce Shop)

## Purpose

Settle is a single-page furniture-and-accessories e-commerce shop template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Aranoz" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean light shop page with coral-pink accents on a pale
cyan hero: a split hero slider ("Wood & Cloth Sofa" + BUY NOW), a Featured
Category row of four image cards, a 12-item product grid ("awesome shop"),
a "Weekly Sale on 60% Off All Products" offer band, a Best Sellers row, a
"Join Our Newsletter" subscribe band, a client-logo strip, and a five-column
footer. Settle recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Aranoz" — free furniture e-commerce website template
  (source: https://colorlib.com/wp/template/aranoz/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/aranoz/`
  (HTTP 200, 41KB) + stylesheet `css/style.css` (205KB). The rendered DOM is
  the reference below; the TEMPLATES.md screenshot (`aranoz-free-template.jpg`)
  confirms the visual design (pale cyan hero, white sections, coral-pink
  buttons, Poppins sans typography, floating sofa product render).
- **Section order (1:1):**
  1. Header: "aranoz" logo + nav (Home, Shop ▾ shop category / product
     details, Pages ▾ login / tracking / product checkout / shopping cart /
     confirmation / elements, Blog ▾ blog / Single blog, Contact) + right
     icons search / heart / cart.
  2. Hero slider (`banner_part`, bg `#ecfdff`): 4 slides — "Wood & Cloth
     Sofa" / "Cloth & Wood Sofa" / "Wood & Cloth Sofa" / "Cloth $ Wood Sofa"
     - lorem copy + "buy now" button; product image right; prev/next
       controls.
  3. Featured Category (`feature_part padding_top`): h2 "Featured Category"
     - 4 image cards (bg `#f8fbff`, ~400px tall): "Premium Quality" /
       "Latest foam Sofa" / "EXPLORE NOW".
  4. Product list (`product_list section_padding`): h2 "awesome shop" +
     "shop" link; 12 product cards — "Quartz Belt Watch" + "$150.00" +
     "+ add to cart" with heart icon.
  5. Offer band (`our_offer section_padding`): split — offer image +
     "Weekly Sale on 60% Off All Products" + "book now" button.
  6. Best Sellers (`product_list best_seller section_padding`): h2 "Best
     Sellers" + "shop" link; 4 product cards.
  7. Subscribe (`subscribe_area section_padding`, background image): h5
     "Join Our Newsletter" + h2 "Subscribe to get Updated with new offers"
     - "subscribe now" button.
  8. Client logos (`client_logo padding_top`): row of 5 grayscale logo
     images.
  9. Footer (`footer_part`): 5 columns — Top Products (Managed Website,
     Manage Reputation, Power Tools, Marketing Service) / Quick Links (Jobs,
     Brand Assets, Investor Relations, Terms of Service) / Features (same
     links as Quick Links — keep the duplication) / Resources (Guides,
     Research, Experts, Agencies) / Newsletter (blurb + email input +
     "subscribe") + copyright bar.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#ff3368** (coral-pink — primary buttons, hover).
  - Hero background: **#ecfdff** (pale cyan); feature cards `#f8fbff`;
    light section backgrounds `#f9f9ff`.
  - Gradient accent (btn_1 icon / btn_2):
    `linear-gradient(16deg, #ff005a 0%, #ff5d2d 64%, #ffba00 100%)`.
  - Dark text **#2a2a2a**/**#333**; body gray **#797979**/**#777777**.
  - Font: **Poppins** (sans-serif) for everything.
  - Buttons: `btn_2` — #ff3368 bg, white text, radius 5px, ~180×60
    (140×50 mobile); `btn_1` — #ecfdff bg, radius 50px, hover → #ff3368.
  - Product cards: radius 5px, hover lift.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = pale cyan split with seeded
  picsum sofa image + headline slider + "Buy Now" ButtonLink; featured
  category = 4 image cards; product grids = seeded picsum product images,
  "$150.00" pricing, "+ Add to cart" buttons; offer band = pink CTA;
  subscribe band = heading + email input + button; all images
  picsum-seeded (`picsum.photos/seed/settle-N/w/h`); Google Fonts Poppins
  via `<link>` in `index.html`.
- **TEMPLATES.md rows to mark at ship:** lines **339, 888, 1562** (THREE
  `Aranoz` duplicates — Bootstrap, Business and E-commerce categories; mark
  ALL of them).

Settle lives in `apps/settle` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Settle", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Settle page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Settle" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero slider

The system SHALL render a full-width hero with a pale-cyan background, a
level-1 headline about a sofa, a call-to-action button, and a product image.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Wood & Cloth Sofa")
- **AND** it SHALL show a "Buy Now" call-to-action button
- **AND** it SHALL show a product image

#### Scenario: Hero slider navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user activates the next/previous controls
- **THEN** the headline SHALL cycle through the slide set (e.g. "Wood & Cloth Sofa", "Cloth & Wood Sofa")

### Requirement: Featured categories

The system SHALL render a "Featured Category" section with at least four
image cards, each with a title and an explore link.

#### Scenario: Category cards

- **GIVEN** the page is rendered
- **WHEN** the featured category section is displayed
- **THEN** it SHALL show the heading "Featured Category"
- **AND** it SHALL render four category cards (e.g. "Premium Quality", "Latest foam Sofa") each with an "Explore Now" link

### Requirement: Product grid

The system SHALL render a product section with a heading, a shop link, and
product cards showing a name, price, and an add-to-cart action.

#### Scenario: Product list

- **GIVEN** the page is rendered
- **WHEN** the product list section is displayed
- **THEN** it SHALL show the heading "awesome shop"
- **AND** it SHALL render product cards, each showing a product name (e.g. "Quartz Belt Watch"), a price (e.g. "$150.00"), and an "+ Add to cart" action

### Requirement: Offer band

The system SHALL render a split offer band with an image, a sale headline,
and a book-now button.

#### Scenario: Offer band content

- **GIVEN** the page is rendered
- **WHEN** the offer band is displayed
- **THEN** it SHALL show the headline "Weekly Sale on 60% Off All Products"
- **AND** it SHALL show a "Book Now" button

### Requirement: Best sellers

The system SHALL render a "Best Sellers" product section with at least four
product cards.

#### Scenario: Best sellers content

- **GIVEN** the page is rendered
- **WHEN** the best sellers section is displayed
- **THEN** it SHALL show the heading "Best Sellers"
- **AND** it SHALL render at least four product cards with name and price

### Requirement: Newsletter subscribe

The system SHALL render a subscribe band with a heading, supporting copy,
and a subscribe form.

#### Scenario: Subscribe content

- **GIVEN** the page is rendered
- **WHEN** the subscribe section is displayed
- **THEN** it SHALL show the heading "Subscribe to get Updated with new offers"
- **AND** it SHALL show a subscribe button

### Requirement: Client logos

The system SHALL render a client-logo strip with at least four placeholder
logo images.

#### Scenario: Logo strip

- **GIVEN** the page is rendered
- **WHEN** the client logo strip is displayed
- **THEN** it SHALL render at least four client logo images

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter form, and
social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (e.g. Top Products, Quick Links, Features, Resources)
- **AND** it SHALL show a newsletter form (e.g. "Newsletter" with subscribe input)
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Settle app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Settle — Furniture Shop Template"

## Verification checklist

- [ ] `npm run verify:app settle` passes (typecheck + lint + 100% coverage + build)
- [ ] TEMPLATES.md rows 339, 888, 1562 marked `[x]` with surge URL at ship
- [ ] `npm run readme:status` regenerated after merge
