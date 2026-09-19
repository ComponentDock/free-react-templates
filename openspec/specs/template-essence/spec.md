# Template: Essence (Ecommerce Shop)

## Purpose

Essence is a full-page ecommerce shop homepage template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Aroma" website template design (source:
https://colorlib.com/wp/template/aroma/), built under a DIFFERENT name
(Essence) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Aroma" — ecommerce shop homepage template
  (source: https://colorlib.com/wp/template/aroma/, category "Ecommerce").
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/aroma/`) is REACHABLE (HTTP 200,
  ~31 KB HTML + css/style.css ~57 KB). Structure below comes from the
  live preview DOM.
- **Screenshot note:** the TEMPLATES.md screenshot (`aroma-free-template.jpg`)
  shows a clean, light ecommerce shop layout with a blue-accented hero banner
  featuring a product image on the left and shop promotional text on the right,
  a product carousel, a grid of trending products, a parallax offer section,
  a best sellers carousel, a blog news section, and a newsletter subscription
  area above a dark navy footer.
- **Design tokens extracted from css/style.css:**
  - Brand primary color: #384aeb (indigo-blue — buttons, accent borders, nav
    hover, active states, hero banner left stripe, carousel overlays, radio
    checked state, pagination active, form focus accents)
  - Dark primary: #222 (near-black — headings, nav links, body text)
  - Secondary text: #777 (gray — body paragraphs, prices)
  - Muted text: #999999 (light gray — meta info, placeholders)
  - Subtitle text: #555555 (medium gray — subheadings, hero subtext)
  - Link text: #cccccc (light gray — footer links, form elements)
  - Warning accent: #fbd600 (yellow — star ratings only)
  - Error/register: #c5322d (red — register button, radio checked border)
  - Hero banner bg: #F1F6F7 (light blue-gray)
  - Hero banner left stripe: #384aeb (indigo, 5-35% width depending on
    breakpoint)
  - Offer section bg: parallax background image on light/white base
  - Footer bg: #002347 (dark navy)
  - Footer bottom bg: rgba(0,35,71,0.98) (slightly transparent navy)
  - Button style: border-radius: 30px (pill), solid #384aeb bg, white text,
    12px 50px padding, 1px border #384aeb. Hover = transparent bg, #222 text.
    Secondary button (.button-header): transparent bg, #222 text, #EEE border.
  - Font family: "Roboto" (body, 15px, 400 weight, 1.667 line-height),
    "Oswald" (headings, footer titles — 400/500/600 weights)
  - Hero carousel slides: image with overlay link (#384aeb bg) that slides up
    on hover showing product name + category
  - Product cards: border:0, white bg, image with action overlay (search,
    cart, heart icons) on hover — semi-transparent white bg slides up from
    bottom, icon buttons #8894ff bg → #384aeb on hover. Category label,
    title, price below.
  - Offer section: parallax bg image, centered text, "Up To 50% Off" heading,
    "Winter Sale" subheading, "Shop Now" pill button
  - Blog cards: image top, meta info (author, comments), title, excerpt,
    "Read More →" link. Hover = title/link turn #384aeb.
  - Newsletter/subscribe: white card bg with subtle blue shadow
    (rgba(56,74,235,0.1)), email input with rounded border, pill subscribe
    button
  - Footer: 4-column layout, dark navy bg (#002347), white text, widget
    titles with #384aeb icon badges, gallery images, contact info with
    FontAwesome icons
  - Border radius: 30px for buttons and inputs (pill shapes), 0 for cards
  - Section intro: heading with #384aeb bottom-border accent underline
    (section-intro__style, 2px solid #384aeb, padding-bottom 8px)
  - Carousel: Owl Carousel with default theme

## Section order (1:1, from live preview DOM)

1. **Header/Navbar** (header_area, main_menu): fixed-position navbar with
   shadow, logo image left, nav links center (Home, Shop [dropdown with
   sub-items], Blog [dropdown], Pages [dropdown], Contact), right side has
   search icon, shopping cart icon with badge (3), and "Buy Now" button
   (#EEE border, transparent bg, pill shape). Mobile: hamburger toggler
   with #384aeb bars.

2. **Hero Banner** (hero-banner): #F1F6F7 bg with #384aeb left vertical
   stripe (5-35% width, responsive). Two-column layout: left = hero product
   image (d-none on mobile), right = text content: "Shop is fun" subtitle,
   "Browse Our Premium Product" heading (Roboto, uppercase, 50px desktop),
   description paragraph, "Browse Now" pill button (#384aeb).

3. **Hero Carousel** (section-margin mt-0, owl-carousel hero-carousel):
   Owl Carousel with 3 slides. Each slide: full-width product image with
   overlay link (#384aeb bg, slides up on hover) showing product name
   ("Wireless Headphone") and category ("Accessories Item"). The overlay
   has opacity transition on slide hover.

4. **Trending Products** (section-margin calc-60px): section intro with
   "Popular Item in the market" subtitle + "Trending Product" heading with
   #384aeb accent underline. 4-column grid (col-xl-3) of 8 product cards.
   Each card: product image, hover overlay with search/cart/heart icon
   buttons, category label, product title (link), price ($150.00).
   Products: Quartz Belt Watch, Women Freshwash, Room Flash Light (x2),
   Man Office Bag, Charging Car (x2), Bluetooth Speaker.

5. **Offer/Parallax** (section offer, parallax bg): full-width section with
   parallax background image. Left-aligned content (col-xl-5):
   "Up To 50% Off" heading (Oswald, 50px), "Winter Sale" subheading,
   description text, "Shop Now" pill button with #384aeb active style.

6. **Best Sellers Carousel** (section-margin calc-60px, owl-carousel): same
   section intro as Trending ("Popular Item in the market" + "Best Sellers"
   with accent underline). Owl Carousel of 8 product cards (same card
   structure as Trending Products, same items repeated).

7. **Blog/Latest News** (section blog): section intro with "Popular Item in
   the market" + "Latest News" heading with accent underline. 3-column grid
   of blog cards. Each card: image, meta info (By Admin, 2 Comments),
   title, excerpt, "Read More →" link with arrow icon.

8. **Newsletter/Subscribe** (subscribe-position): centered subscribe card
   with white bg and subtle blue shadow. "Get Update From Anywhere" heading
   (Oswald, 28-36px, uppercase), description text, email input (rounded),
   "Subscribe Now" pill button.

9. **Footer** (footer, footer-area): dark navy bg (#002347), 4-column layout:
   - Col 1: "Our Mission" (large title) + 2 paragraphs
   - Col 2: "Quick Links" (Home, Shop, Blog, Product, Brand, Contact)
   - Col 3: "Gallery" (6 thumbnail images in flex-wrap grid)
   - Col 4: "Contact Us" (address with icon badges, phone numbers, emails)
   Footer bottom: copyright text with heart icon and Component Dock link
   (replaces Colorlib attribution).

## Implementation notes

- Use Tailwind CSS 4 `@theme` for brand color (#384aeb) and dark navy (#002347)
- Replace FontAwesome icons with lucide-react (ti-search → Search,
  ti-shopping-cart → ShoppingCart, ti-heart → Heart, ti-comments-smiley →
  MessageCircle, ti-arrow-right → ArrowRight, fa-location-arrow → MapPin,
  fa-phone → Phone, fa-envelope → Mail)
- Owl Carousel → React Slick or a lightweight carousel library
- Parallax effect: CSS `background-attachment: fixed` or Intersection Observer
- Replace product/blog images with `https://picsum.photos/seed/essence-<n>/<w>/<h>`
- Replace "Aroma" brand name with "Essence" throughout
- Footer: replace Colorlib link with Component Dock link
- Hero banner: responsive left stripe width via Tailwind breakpoints
- Product card hover overlay: CSS transform translateY + opacity transition
- Mobile responsive: navbar collapses, hero hides left image, grid adapts
- Subscribe form: rounded input + pill button, centered in container

## Gherkin requirements

```gherkin
Feature: Essence - Ecommerce Shop Homepage Template

  Scenario: Header navbar renders with brand and navigation
    Given the page loads
    Then the navbar displays the brand logo "Essence"
    And navigation links are visible: Home, Shop, Blog, Pages, Contact
    And Shop, Blog, and Pages links show dropdown submenus on hover
    And a search icon, shopping cart icon with badge, and "Buy Now" button
      are displayed on the right
    And the navbar has a subtle shadow

  Scenario: Hero banner displays promotional content
    Given the page loads
    Then a hero banner with light blue-gray (#F1F6F7) background is shown
    And a blue (#384aeb) vertical stripe appears on the left side
    And a product image is displayed on the left (hidden on mobile)
    And "Shop is fun" subtitle and "Browse Our Premium Product" heading
      are shown on the right
    And a "Browse Now" pill button (#384aeb) is displayed

  Scenario: Hero carousel shows product slides with hover overlays
    Given the hero banner is visible
    Then a carousel of 3 product slides is displayed below the hero
    And each slide shows a full-width product image
    And hovering a slide reveals an overlay with product name and category
    And the overlay slides up from the bottom with a blue (#384aeb) background

  Scenario: Trending products grid displays eight product cards
    Given the carousel is visible
    Then a "Trending Product" section heading with blue accent underline is shown
    And an 8-card grid (4 columns) of products is displayed
    And each card shows a product image, category, title, and price
    And hovering a card reveals action buttons (search, cart, heart)
    And action buttons have #8894ff background, changing to #384aeb on hover

  Scenario: Offer parallax section displays promotional content
    Given the trending products section is visible
    Then a full-width parallax section with background image is shown
    And "Up To 50% Off" heading (Oswald font, large) is displayed
    And "Winter Sale" subheading and description text are shown
    And a "Shop Now" pill button is displayed

  Scenario: Best sellers carousel displays product cards
    Given the offer section is visible
    Then a "Best Sellers" section with blue accent underline is shown
    And an Owl Carousel of 8 product cards is displayed
    And each card uses the same structure as trending product cards

  Scenario: Blog news section displays three blog cards
    Given the best sellers section is visible
    Then a "Latest News" section with blue accent underline is shown
    And 3 blog cards are displayed in a row
    And each card shows an image, author ("By Admin"), comment count,
      title, excerpt, and "Read More →" link
    And hovering a blog card highlights the title and link in #384aeb

  Scenario: Newsletter subscribe section displays subscription form
    Given the blog section is visible
    Then a centered subscribe card with white background and subtle blue
      shadow is shown
    And "Get Update From Anywhere" heading is displayed
    And an email input field with rounded border is present
    And a "Subscribe Now" pill button is displayed

  Scenario: Footer displays four-column content in dark navy
    Given the subscribe section is visible
    Then a dark navy (#002347) footer is displayed
    And four columns are shown: Our Mission, Quick Links, Gallery, Contact Us
    And footer widget titles have blue (#384aeb) icon badges
    And gallery shows 6 thumbnail images in a flex grid
    And contact info shows address, phone, and email with FontAwesome icons
    And the footer bottom shows copyright with Component Dock link

  Scenario: All sections match the original ColorLib Aroma design
    Given the page loads with all sections
    Then the section order matches: Header, Hero Banner, Hero Carousel,
      Trending Products, Offer Parallax, Best Sellers, Blog News,
      Newsletter Subscribe, Footer
    And the brand color #384aeb is used for buttons, accents, and highlights
    And buttons have pill shape (border-radius: 30px)
    And headings use Oswald font, body uses Roboto font
    And the footer uses dark navy (#002347) background
```

## Verification checklist

- [ ] Header navbar with brand "Essence" and nav links renders correctly
- [ ] Hero banner with blue stripe and promotional content
- [ ] Hero carousel with 3 slides and hover overlays
- [ ] Trending Products grid (8 cards) with hover action buttons
- [ ] Offer parallax section with promotional content
- [ ] Best Sellers carousel with 8 product cards
- [ ] Blog/Latest News section with 3 blog cards
- [ ] Newsletter subscribe section with email form
- [ ] Footer with 4 columns, dark navy bg, and Component Dock link
- [ ] Brand color #384aeb used for buttons, accents, and highlights
- [ ] Pill-shaped buttons (border-radius: 30px) throughout
- [ ] Oswald font for headings, Roboto for body text
- [ ] Dark navy (#002347) footer background
- [ ] No ColorLib references in app code
- [ ] Responsive layout works on mobile
- [ ] Component Dock link in footer (replaces Colorlib attribution)
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] TypeCheck passes (TypeScript strict)
- [ ] Build succeeds (Vite production build)
