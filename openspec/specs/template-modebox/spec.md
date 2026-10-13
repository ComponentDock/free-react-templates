# Template: ModeBox (Fashion E-Commerce)

## Purpose

ModeBox is a single-page fashion e-commerce homepage in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Fashiop" free
template (source: https://colorlib.com/wp/template/fashiop/), built under a
DIFFERENT name (**ModeBox**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Preview URL: https://preview.colorlib.com/theme/fashiop/

The original is a Bootstrap 4 jQuery template: a full-width hero banner with
overlay text, dual "Hot Deals" image cards, a client logo carousel, a 5-column
scrollable featured products grid with hover icon overlays, a newsletter
subscription section, and a 4-column footer with Instagram feed and social
links. The design is clean and minimal with a light background, blue accent
color, and Roboto typography.

**WHAT MAKES MODEBOX DISTINCT (signature behaviors):**

1. **Full-width hero banner with dark overlay and centered CTA.** The banner
   uses a background image (`banner-bg.jpg`) with a `rgba(0,0,0,0.33)` dark
   overlay. White centered text reads "Fashion for Upcoming Winter" with a
   subtitle paragraph. A white-background pill button ("View Collection") with
   `border-radius: 5px` sits below. The banner spans the full viewport width
   with `background-size: cover`.

2. **Dual "Hot Deals" image cards side by side.** Two equal-width cards
   (`col-lg-6`) each contain a full-width product image with a centered text
   overlay: "Hot Deals of this Month" heading + "shop now" subtext. Cards have
   a black (`#000`) background with hover transition. Clicking navigates to
   product category.

3. **Client logo carousel.** A horizontal row of 5 grayscale partner/client
   logos in an Owl Carousel slider, full-width `container-fluid`, light
   background.

4. **5-column scrollable Featured Products grid.** The products section uses a
   custom `.col` class (`flex: 0 0 20%` = 5 columns) for a horizontally
   scrollable row of 10 product cards. Each card has: product image with
   overlay hover icons (heart + cart), product name link (`h4`), and price
   (`h5`). Pagination dots (1–9) sit below. The grid uses `overflow-x: scroll`
   on the row.

5. **Newsletter subscription section.** A centered section with light lavender
   background (`#f9f9ff`), heading "Subscribe for Our Newsletter", subtitle
   "We won't send any kind of spam", an email input field, and a "Get Started"
   button (`#1641ff` blue, absolute-positioned to the right of the input).

6. **4-column footer with Instagram feed and social icons.** The footer has:
   - About Us (text)
   - Newsletter (email + arrow button)
   - Instagram Feed (8 thumbnail grid, 2 rows of 4)
   - Follow Us (social icons: Facebook, Twitter, Dribbble, Behance)
   Footer bottom: copyright line with heart icon linking to the original
   creator. Footer background is white, section title weight 600, blue accent
   links.

## Design Tokens

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Brand Blue | `#1641ff` | Primary accent: active nav, buttons, links, hover states |
| Dark Text | `#222222` | Headings, nav text, footer titles |
| Body Text | `#777777` | Body copy, secondary text, footer social text |
| Page BG | `#ffffff` | Default page background |
| Section BG Light | `#f9f9ff` | Newsletter subscription area background |
| Nav BG | `#f8f8f8` | Main navigation bar background |
| Overlay | `rgba(0,0,0,0.33)` | Hero banner dark overlay |
| Hot Deals BG | `#000000` | Hot deals card background |
| Border/Grey | `#e4e4e4` | Icon hover background, dividers |
| Button White BG | `#f9f9ff` | White CTA button default background |

### Typography
| Element | Font | Weight | Size |
|---------|------|--------|------|
| Body | Roboto | 400 | 14px |
| Headings (h1–h6) | Roboto | 500 | varies |
| Nav links | Roboto | 500 | 12px |
| Section title h2 | Roboto | 500 | 36px |
| Footer title | Roboto | 600 | 16px |
| Product price | Roboto | — | — |

Google Fonts import: `https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700|Roboto:300,400,500,700`

### Button Styles
| Button | BG | Color | Radius | Padding |
|--------|-----|-------|--------|---------|
| White CTA (hero) | `#f9f9ff` | `#222222` | 5px | 0 35px, line-height 50px |
| Newsletter "Get Started" | `#1641ff` | `#fff` | — | absolute positioned |
| Footer sub-btn | `#1641ff` | — | — | arrow icon |
| Icon hover | `#e4e4e4` | `#1641ff` | — | 70x80px |

### Section Backgrounds
- Hero banner: background image + `rgba(0,0,0,0.33)` overlay
- Hot deals: `#000` solid
- Featured products: white
- Newsletter subscription: `#f9f9ff` light lavender
- Footer: white
- Section spacing: `padding: 120px 0` (60px on mobile)

## Requirements

### Hero Banner

#### Scenario: Hero Banner

- **Scenario:** Hero banner displays centered content
- **GIVEN** the page loads
- **WHEN** the hero banner is visible
- **THEN** it shows the heading "Fashion for Upcoming Winter"
- **AND** a subtitle paragraph below the heading
- **AND** a "View Collection" button below the subtitle
- **AND** the banner has a dark overlay on the background image
- **Scenario:** Hero CTA button navigates correctly
- **GIVEN** the hero banner is displayed
- **WHEN** the user clicks "View Collection"
- **THEN** the user is navigated to the collection/shop page

### Hot Deals

#### Scenario: Hot Deals

- **Scenario:** Hot deals section shows two equal cards
- **GIVEN** the page loads
- **WHEN** the user scrolls to the hot deals section
- **THEN** two side-by-side deal cards are visible
- **AND** each card shows "Hot Deals of this Month" heading
- **AND** each card shows "shop now" subtext

### Client Logos

#### Scenario: Client Logos

- **Scenario:** Client logos carousel renders
- **GIVEN** the page loads
- **WHEN** the user scrolls to the client logos section
- **THEN** 5 client logo images are displayed in a carousel

### Featured Products

#### Scenario: Featured Products

- **Scenario:** Featured products grid shows products
- **GIVEN** the page loads
- **WHEN** the user scrolls to the featured products section
- **THEN** a "Featured Products" heading is displayed
- **AND** at least 5 product cards are visible
- **AND** each card has a product image, name, and price
- **Scenario:** Product card hover shows action icons
- **GIVEN** the featured products grid is displayed
- **WHEN** the user hovers over a product card
- **THEN** heart and cart icon buttons appear as an overlay
- **Scenario:** Product grid is horizontally scrollable
- **GIVEN** the featured products grid is displayed
- **WHEN** the user scrolls horizontally
- **THEN** additional product cards scroll into view
- **Scenario:** Product pagination shows page numbers
- **GIVEN** the featured products grid is displayed
- **THEN** pagination with page numbers (01–09) is shown below

### Newsletter Subscription

#### Scenario: Newsletter Subscription

- **Scenario:** Newsletter section displays correctly
- **GIVEN** the page loads
- **WHEN** the user scrolls to the newsletter section
- **THEN** a "Subscribe for Our Newsletter" heading is shown
- **AND** a subtitle "We won't send any kind of spam" is below
- **AND** an email input field is present
- **AND** a "Get Started" button is present
- **Scenario:** Newsletter form submits email
- **GIVEN** the newsletter section is visible
- **WHEN** the user enters a valid email and clicks "Get Started"
- **THEN** the form attempts subscription submission

### Footer

#### Scenario: Footer

- **Scenario:** Footer shows four columns
- **GIVEN** the page loads
- **WHEN** the user scrolls to the footer
- **THEN** an "About Us" column with text is visible
- **AND** a "Newsletter" column with email input is visible
- **AND** an "Instagram Feed" column with 8 thumbnails is visible
- **AND** a "Follow Us" column with social icons is visible
- **Scenario:** Footer social icons are interactive
- **GIVEN** the footer is displayed
- **WHEN** the user hovers over a social icon
- **THEN** the icon color changes to the brand blue
- **Scenario:** Footer copyright links to Component Dock
- **GIVEN** the footer is displayed
- **WHEN** the user views the copyright line
- **THEN** it links to https://www.componentdock.com/

### Navigation

#### Scenario: Navigation

- **Scenario:** Navbar displays logo and navigation links
- **GIVEN** the page loads
- **WHEN** the user views the header
- **THEN** a logo image is displayed on the left
- **AND** navigation links (Home, Shop, Blog, Pages, Contact) are visible
- **AND** right-side utility icons (search, user, heart, cart) are visible
- **Scenario:** Navigation links highlight on hover
- **GIVEN** the navbar is displayed
- **WHEN** the user hovers over a nav link
- **THEN** the link color changes to brand blue `#1641ff`

## Verification Checklist

- [ ] Hero banner renders with dark overlay and centered white text
- [ ] Hero CTA button has 5px radius and white background
- [ ] Hot deals section shows two equal-width image cards
- [ ] Client logos carousel renders 5 logos
- [ ] Featured products grid shows 5-column layout on desktop
- [ ] Product cards have hover overlay with heart + cart icons
- [ ] Product grid is horizontally scrollable on mobile
- [ ] Newsletter section has `#f9f9ff` lavender background
- [ ] Newsletter input + "Get Started" button layout is correct
- [ ] Footer has 4 columns: About, Newsletter, Instagram, Social
- [ ] Instagram feed shows 8 thumbnails (2x4 grid)
- [ ] Footer copyright links to componentdock.com
- [ ] All fonts use Roboto family
- [ ] Brand blue `#1641ff` used for accents consistently
- [ ] Section spacing is 120px vertical padding
- [ ] Responsive: stacks to single column on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
