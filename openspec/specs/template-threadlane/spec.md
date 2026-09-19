# Template: Threadlane (E-commerce Fashion Landing)

## Purpose

Threadlane is a single-page fashion e-commerce landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Fashiop" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean, modern fashion e-commerce page: a top bar with
phone number + login/account/contact links, a navbar with logo + nav
links (Home, Shop dropdown, Blog dropdown, Pages dropdown, Contact), a
full-width hero banner ("Fashion for Upcoming Winter"), a "Hot Deals of
this Month" split-panel section, a client-logo carousel, a "Featured
Products" grid (8 product cards with images, titles, prices), a
newsletter subscription band ("Subscribe for Our Newsletter"), and a
4-column footer (About Us, Quick Links, Instagram Feed, Newsletter) with
a bottom copyright bar. Threadlane recreates that structure section-for-
section with matching layout, colors, typography, and content types (no
ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Fashiop" — free e-commerce fashion website
template (source: https://colorlib.com/wp/template/fashiop/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/fashiop/`
(HTTP 200, 21.6KB). The rendered DOM is the reference below; the
TEMPLATES.md screenshot (`fashiop-free-template.jpg`, 1200x946) confirms
the visual design (dark hero banner, clean white content sections, blue
brand accents).
- **Section order (1:1):**
1. Header (`header_area`): top bar (phone + Login/Register, My Account,
   Contact Us) + navbar (logo, Home, Shop dropdown, Blog dropdown, Pages
   dropdown, Contact Us).
2. Hero (`home_banner_area`): full-width background image, centered text
   — "Fashion for Upcoming Winter" heading + lorem paragraph + "View
   Collection" CTA button.
3. Hot Deals (`hot_deals_area section_gap`): two-column split panel with
   "Hot Deals of this Month" headings + "shop now" CTAs over dark
   background images.
4. Client Logos (`clients_logo_area`): owl-carousel of partner/client
   logo images (10 logos).
5. Featured Products (`feature_product_area section_gap`): "Featured
   Products" heading + 8 product cards in a 4-column grid. Each card:
   product image + "Add to Cart" icon overlay + title ("Long Sleeve
   TShirt") + price ("$150.00").
6. Newsletter (`subscription-area section_gap`): "Subscribe for Our
   Newsletter" + email input + submit button on light lavender bg.
7. Footer (`footer-area section_gap`): 4 columns — About Us (text +
   social icons), Quick Links (links), Instagram Feed (photo grid),
   Newsletter (form + social). Bottom bar with copyright.
- **Design tokens extracted from `css/style.css`:**
- Brand color: **#1641ff** (vivid blue) — buttons, links, accents.
- Accent: **#f8b600** (gold/amber) — sale badges, hot-deal highlights.
- Text primary: **#222222** (near-black).
- Text secondary: **#777777** (medium gray).
- Background light: **#f9f9ff** (very light lavender) — subscription area,
  alternating sections.
- Background white: **#fff** — top menu, product cards.
- Divider/border: **#eeeeee** (light gray).
- Font family: **"Roboto"** (Google Font, sans-serif).
- Buttons: blue `#1641ff` filled, border-radius 0 (square), white text,
  uppercase.
- Section spacing: 100px top/bottom padding (`.section_gap`).
- **Recreation decisions:** repo-standard Navbar (site name "Threadlane",
Home + Shop + Blog + Pages + Contact links, dark-mode toggle); hero =
seeded picsum image; hot-deals = two seeded picsum panels; products =
8 seeded picsum images; client logos = 5 placeholder SVGs; footer =
standard 4-column with Component Dock link; newsletter = email input +
submit button; all social icons via lucide-react.

## Requirements

### Header
- Given the page is loaded
  When the user views the header
  Then they see a top bar with phone number, Login/Register, My Account, and Contact Us
  And a navbar with logo, Home, Shop, Blog, Pages, Contact Us navigation links
  And the header overlays the hero section (position absolute)

### Hero Banner
- Given the page is loaded
  When the user views the hero section
  Then they see a full-width background image with centered content
  And the heading reads "Fashion for Upcoming Winter"
  And a descriptive paragraph is present
  And a "View Collection" CTA button is visible
  And the section has minimum height ~900px

### Hot Deals
- Given the page is loaded
  When the user scrolls to the Hot Deals section
  Then they see two side-by-side deal panels
  And each panel has a dark background image
  And each panel has the heading "Hot Deals of this Month"
  And each panel has a "shop now" CTA link

### Client Logos
- Given the page is loaded
  When the user scrolls to the Client Logos section
  Then they see a horizontal carousel of partner/client logos
  And the logos scroll automatically

### Featured Products
- Given the page is loaded
  When the user scrolls to Featured Products
  Then they see a "Featured Products" heading centered
  And 8 product cards in a 4-column grid layout
  And each card has a product image, title ("Long Sleeve TShirt"), and price ("$150.00")
  And each card has a hover overlay with "Add to Cart" icon

### Newsletter
- Given the page is loaded
  When the user scrolls to the newsletter section
  Then they see "Subscribe for Our Newsletter" heading
  And an email input field is present
  And a submit button is present
  And the section has a light lavender (#f9f9ff) background

### Footer
- Given the page is loaded
  When the user scrolls to the footer
  Then they see 4 columns: About Us, Quick Links, Instagram Feed, Newsletter
  And About Us has social media icons (Facebook, Twitter, Behance, Dribbble)
  And Quick Links has navigation links
  And Instagram Feed has a photo grid
  And Newsletter has an email input + submit form
  And a bottom bar shows copyright text
  And the footer links to https://www.componentdock.com/

## Verification checklist

- [ ] Header: top bar with phone + login/account/contact links
- [ ] Header: navbar with logo + 5 nav items (Home, Shop, Blog, Pages, Contact)
- [ ] Hero: full-width banner with heading, paragraph, CTA button
- [ ] Hero: minimum height ~900px, background image from picsum
- [ ] Hot Deals: two side-by-side panels with dark bg images
- [ ] Hot Deals: each has heading + "shop now" CTA
- [ ] Client Logos: horizontal carousel with placeholder logos
- [ ] Featured Products: heading + 8 cards in 4-col grid
- [ ] Product cards: image + title + price + hover overlay
- [ ] Newsletter: heading + email input + submit button, lavender bg
- [ ] Footer: 4 columns (About, Links, Instagram, Newsletter)
- [ ] Footer: social icons, Component Dock link, copyright
- [ ] Brand color #1641ff used for buttons and links
- [ ] Font: Roboto (Google Font) loaded via index.html
- [ ] No ColorLib references in app code
- [ ] Responsive layout works at mobile/tablet/desktop
- [ ] `npm run verify:app threadlane` passes (typecheck + lint + test + build)
