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

## Gherkin Requirements

### Hero Banner
- **Scenario:** Hero banner displays centered content
  - Given the page loads
  - When the hero banner is visible
  - Then it shows the heading "Fashion for Upcoming Winter"
  - And a subtitle paragraph below the heading
  - And a "View Collection" button below the subtitle
  - And the banner has a dark overlay on the background image

- **Scenario:** Hero CTA button navigates correctly
  - Given the hero banner is displayed
  - When the user clicks "View Collection"
  - Then the user is navigated to the collection/shop page

### Hot Deals
- **Scenario:** Hot deals section shows two equal cards
  - Given the page loads
  - When the user scrolls to the hot deals section
  - Then two side-by-side deal cards are visible
  - And each card shows "Hot Deals of this Month" heading
  - And each card shows "shop now" subtext

### Client Logos
- **Scenario:** Client logos carousel renders
  - Given the page loads
  - When the user scrolls to the client logos section
  - Then 5 client logo images are displayed in a carousel

### Featured Products
- **Scenario:** Featured products grid shows products
  - Given the page loads
  - When the user scrolls to the featured products section
  - Then a "Featured Products" heading is displayed
  - And at least 5 product cards are visible
  - And each card has a product image, name, and price

- **Scenario:** Product card hover shows action icons
  - Given the featured products grid is displayed
  - When the user hovers over a product card
  - Then heart and cart icon buttons appear as an overlay

- **Scenario:** Product grid is horizontally scrollable
  - Given the featured products grid is displayed
  - When the user scrolls horizontally
  - Then additional product cards scroll into view

- **Scenario:** Product pagination shows page numbers
  - Given the featured products grid is displayed
  - Then pagination with page numbers (01–09) is shown below

### Newsletter Subscription
- **Scenario:** Newsletter section displays correctly
  - Given the page loads
  - When the user scrolls to the newsletter section
  - Then a "Subscribe for Our Newsletter" heading is shown
  - And a subtitle "We won't send any kind of spam" is below
  - And an email input field is present
  - And a "Get Started" button is present

- **Scenario:** Newsletter form submits email
  - Given the newsletter section is visible
  - When the user enters a valid email and clicks "Get Started"
  - Then the form attempts subscription submission

### Footer
- **Scenario:** Footer shows four columns
  - Given the page loads
  - When the user scrolls to the footer
  - Then an "About Us" column with text is visible
  - And a "Newsletter" column with email input is visible
  - And an "Instagram Feed" column with 8 thumbnails is visible
  - And a "Follow Us" column with social icons is visible

- **Scenario:** Footer social icons are interactive
  - Given the footer is displayed
  - When the user hovers over a social icon
  - Then the icon color changes to the brand blue

- **Scenario:** Footer copyright links to Component Dock
  - Given the footer is displayed
  - When the user views the copyright line
  - Then it links to https://www.componentdock.com/

### Navigation
- **Scenario:** Navbar displays logo and navigation links
  - Given the page loads
  - When the user views the header
  - Then a logo image is displayed on the left
  - And navigation links (Home, Shop, Blog, Pages, Contact) are visible
  - And right-side utility icons (search, user, heart, cart) are visible

- **Scenario:** Navigation links highlight on hover
  - Given the navbar is displayed
  - When the user hovers over a nav link
  - Then the link color changes to brand blue `#1641ff`

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
