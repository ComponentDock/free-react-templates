# Template: Sarto (Ecommerce)

## Purpose

Recreation of ColorLib "Fashiop" (https://colorlib.com/wp/template/fashiop/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template. Sarto is a fashion e-commerce landing page with a bold blue brand palette, full-width hero banner, product grid with hover icons, newsletter subscription, and a multi-column footer.

## Requirements

### Requirement: TopBar displays contact and account links

Users SHALL see a top bar with phone number on the left and Login/Register, My Account, Contact Us links on the right.

#### Scenario: TopBar renders phone number and links

- **WHEN** the page loads
- **THEN** the top bar displays "Call Us: 012 44 5698 7456 896"
- **AND** "Login/Register", "My Account", "Contact Us" links are visible

### Requirement: Navbar provides navigation and icon actions

Users SHALL see a navbar with the "Sarto" logo, desktop nav links (Home, Shop, Blog, Pages, Contact), and icon buttons (search, user, heart, cart). Mobile users SHALL see a hamburger toggle.

#### Scenario: Desktop navbar renders logo and links

- **WHEN** the page loads on desktop
- **THEN** the "Sarto" logo links to #home
- **AND** nav links Home, Shop, Blog, Pages, Contact are visible

#### Scenario: Navbar renders icon buttons

- **WHEN** the page loads
- **THEN** Search, Account, Wishlist, Cart icon buttons are visible

#### Scenario: Mobile menu toggle

- **WHEN** on mobile and user clicks the hamburger
- **THEN** the mobile menu opens
- **AND** clicking a link closes the menu

### Requirement: Hero section displays fashion banner

Users SHALL see a full-width hero banner with headline "Fashion for Upcoming Winter", subtext, and a "View Collection" CTA button.

#### Scenario: Hero renders content

- **WHEN** the page loads
- **THEN** the heading "Fashion for Upcoming Winter" is visible
- **AND** the "View Collection" button links to #shop

### Requirement: Hot Deals section shows two deal cards

Users SHALL see two side-by-side deal cards with background images, headings, and "shop now" text.

#### Scenario: Hot deals renders two cards

- **WHEN** the page loads
- **THEN** two "Hot Deals of this Month" headings are visible
- **AND** "shop now" text appears on each card

### Requirement: Clients Logo section shows partner logos

Users SHALL see a row of 5 partner logo placeholder images.

#### Scenario: Client logos render

- **WHEN** the page loads
- **THEN** 5 client logo images are visible

### Requirement: Featured Products section displays product grid

Users SHALL see a heading "Featured Products", 10 product cards with name, price, and hover action buttons (wishlist + cart), plus pagination controls.

#### Scenario: Products render with details

- **WHEN** the page loads
- **THEN** "Featured Products" heading is visible
- **AND** 10 product cards with name "Long Sleeve T-Shirt" and price "$150.00" are displayed

#### Scenario: Product hover actions

- **WHEN** the page loads
- **THEN** each product has "Add to wishlist" and "Add to cart" buttons

#### Scenario: Pagination controls

- **WHEN** the page loads
- **THEN** Previous page and Next page buttons are visible

### Requirement: Newsletter section accepts email subscriptions

Users SHALL see a newsletter heading, subtext, email input, and "Get Started" button. Submitting a valid email shows a confirmation message.

#### Scenario: Newsletter form renders

- **WHEN** the page loads
- **THEN** "Subscribe for Our Newsletter" heading is visible
- **AND** email input and "Get Started" button are present

#### Scenario: Successful subscription

- **WHEN** user enters a valid email and clicks Get Started
- **THEN** "Thank you for subscribing!" confirmation is shown

#### Scenario: Empty email submission

- **WHEN** user clicks Get Started without entering email
- **THEN** the form remains visible (no confirmation)

### Requirement: Footer links to Component Dock

Users SHALL see a 4-column footer (About Us, Newsletter, Instagram Feed, Follow Us) with a bottom bar containing a "Component Dock" link to https://www.componentdock.com/.

#### Scenario: Footer sections render

- **WHEN** the page loads
- **THEN** About Us, Newsletter, Instagram Feed, Follow Us sections are visible
- **AND** 8 Instagram feed images are displayed
- **AND** social media links (Facebook, Twitter, Instagram, LinkedIn) open in new tabs

#### Scenario: Component Dock attribution

- **WHEN** the page loads
- **THEN** a "Component Dock" link points to https://www.componentdock.com/

### Requirement: Design tokens match ColorLib Fashiop

The template SHALL use brand blue #1641ff, Roboto font family, Poppins accent font, and the specified spacing/color tokens from the original CSS.

#### Scenario: Brand color is applied

- **WHEN** the page renders
- **THEN** interactive elements use the brand blue (#1641ff) accent color

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/sarto/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/sarto/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] TopBar displays contact and account links — the top bar displays "Call Us: 012 44 5698 7456 896"
- [ ] Navbar provides navigation and icon actions — the "Sarto" logo links to #home
- [ ] Hero section displays fashion banner — the heading "Fashion for Upcoming Winter" is visible
- [ ] Hot Deals section shows two deal cards — two "Hot Deals of this Month" headings are visible
- [ ] Clients Logo section shows partner logos — 5 client logo images are visible
- [ ] Featured Products section displays product grid — "Featured Products" heading is visible
- [ ] Newsletter section accepts email subscriptions — "Subscribe for Our Newsletter" heading is visible
