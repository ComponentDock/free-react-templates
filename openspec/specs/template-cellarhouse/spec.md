# Template: Cellarhouse (E-Commerce / Liquor Store — Bootstrap)

## Purpose

Cellarhouse is a single-page liquor/beverage e-commerce website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Liquor Store" HTML template design (see TEMPLATES.md,
E-Commerce category, line 1586), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib
references in app code — provenance lives in this spec, TEMPLATES.md, and the
PR.

## Design reference (replication findings)

- **Original:** ColorLib "Liquor Store" — free liquor/beverage e-commerce HTML
  template (page `<title>` "Liquor Store - Free Bootstrap 4 Template by
  Colorlib"; source: https://colorlib.com/wp/template/liquorstore/). Single
  page: terracotta top bar (phone + email + social icons + Sign Up / Log In),
  dark transparent navbar over hero (logo "Liquor store" + Home / About /
  Products dropdown / Blog / Contact + cart icon with badge + dropdown
  mini-cart), full-screen hero with dark overlay bg photo and italic headline
  "Good Drink for Good Moments." with "Shop Now" + "Read more" buttons, 3-column
  intro strip (Online Support 24/7, Money Back Guarantee, Free Shipping &
  Return on terracotta bg), About section (image left + "Since 1905" text
  right with 115-year counter), 6-column liquor category grid (Brandy, Gin,
  Rum, Tequila, Vodka, Whiskey), "Tastefully Yours" products section (8
  product cards in 4×2 with badges Sale/Best Seller/New Arrival, action icons),
  testimonial carousel on dark bg photo, Recent Blog (2 entries side by side),
  dark footer (Logo + socials, My Accounts, Information, Quick Link, Have a
  Questions? with address/phone/email, copyright).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/liquorstore/` (fetched full HTML + CSS
  `css/style.css`). Screenshot: `liquorstore-free-template.jpg` from
  TEMPLATES.md.
- **Visual design (live DOM + CSS):** Warm, rustic e-commerce aesthetic with
  a terracotta/burnt-orange brand palette. The top bar is solid terracotta
  `#a23f25`, the intro strip and buttons use `#b7472a`, hero has a dark
  overlay on a bar/drinks photo. Dark `#1a1a1a` footer. Spectral font used
  in the Cloudflare font-face preload (loaded via `<style>` in head) but
  the CSS uses system fonts. Bootstrap 4 grid. Product cards with image
  hover overlay showing bag/heart/eye action icons. Category grid with
  circular product-type images.

## Design tokens (from `css/style.css` of the live preview)

- **Brand terracotta:** `#a23f25` — top bar (`.wrap`) background. Slightly
  lighter `#b7472a` — social hover, `.ftco-intro` background, buttons.
  Bootstrap primary `#007bff` — `.btn-primary` but should be overridden to
  match brand palette (use `#b7472a` instead).
- **Text colors:** `#212529` (Bootstrap body dark), `rgba(255,255,255,0.7)`
  on dark backgrounds (footer, hero overlay), `rgba(255,255,255,0.5)` for
  footer links, `rgba(255,255,255,0.8)` for footer headings. Top bar phone/
  email: `rgba(255,255,255,0.6)`.
- **Fonts:** System fonts (`-apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`). The preview
  head preload references Spectral (weights 200–800) — recreate by loading
  Spectral from Google Fonts for headings to match the visual aesthetic.
- **Backgrounds:** page white `#fff`; hero dark overlay on bg photo;
  `.ftco-intro` `#b7472a`; `.testimony-section` dark bg photo with overlay;
  `.ftco-footer` `#1a1a1a`; copyright bar `bg-black` (pure black).
- **Buttons (`.btn-primary`):** Bootstrap default styling — `border-radius:
  0.25rem`, `padding: 0.375rem 0.75rem`. Hero buttons: `.btn-primary` (solid
  brand) + `.btn-white.btn-outline-white` (white outline). Product action
  icons: 60×60px white-bordered squares with hover. "View All Products" button
  full-width primary.
- **Top bar (`.wrap`):** 35px height, bg `#a23f25`, phone/email left (12px
  white 60%), social icons right (12px white), Sign Up/Log In (13px
  uppercase 200 white 80%). Navbar absolute positioned over hero (top 35px),
  bg transparent, dark variant.
- **Hero (`.hero-wrap`):** Full-width bg photo cover, `.overlay` dark
  semi-transparent, `.slider-text` height 750px, h1 white 80px italic
  bold (`font-style: italic; font-weight: 700`), text rotated -4deg.
  Brand spans in h1. Two buttons: primary + white outline.
- **Intro strip (`.ftco-intro`):** bg `#b7472a`, 3 columns each with icon
  (flaticon) + h2 title + paragraph. White text on terracotta bg.
- **About section (`.ftco-section.ftco-no-pb`):** Two columns — left: bg
  image; right: `.heading-section` with `.subheading` + h2 "Desire Meets A
  New Taste" + paragraphs + year counter (115 years, `data-number` animated).
- **Category grid:** 6 equal columns (`.sort`), each with bg image circle
  + h3 label (Brandy, Gin, Rum, Tequila, Vodka, Whiskey). Hover scale.
- **Products (`.ftco-section`):** 4-column product cards (`.product`),
  image bg cover 350px height, hover shows `.desc` overlay with action icons
  (bag, heart, eye). `.text` below with `.sale`/`.seller`/`.new` badge
  (position absolute top-left), `.category` label, h2 name, `.price`.
  "View All Products" full-width button.
- **Testimonials (`.testimony-section`):** Dark bg photo + overlay,
  centered white heading "Happy Clients", owl-carousel of testimony cards
  with quote icon, paragraph, user image + name + position.
- **Blog (`.ftco-section`):** 2-column layout, each `.blog-entry` with bg
  image left + `.text.p-4.bg-light` right (date, heading link, excerpt,
  "Continue" link).
- **Footer (`.ftco-footer`, bg `#1a1a1a`):** 5 columns — Logo + socials,
  My Accounts (links), Information (links), Quick Link (links), Have a
  Questions? (address, phone, email with icons). Copyright bar below
  "Copyright © <year> All rights reserved | This template is made with ♥ by
  Component Dock" — "Component Dock" MUST link https://www.componentdock.com/
  (replacing ColorLib credit).

## Requirements

### Requirement: Top bar and navigation

The system SHALL render a terracotta top bar with phone/email on the left,
social icons and Sign Up/Log In on the right. Below it, a dark transparent
navbar with logo "Liquor store" (word "store" styled differently), nav links
(Home, About, Products dropdown, Blog, Contact), and a cart icon with badge
and dropdown mini-cart.

#### Scenario: Top bar displays contact info and social links

```
Given the user loads the page
Then a terracotta top bar displays phone and email on the left
And social icons (Facebook, Twitter, Instagram, Dribbble) are on the right
And "Sign Up" and "Log In" links appear on the far right
```

#### Scenario: Navbar displays with cart dropdown

```
Given the user loads the page
Then the navbar shows "Liquor store" logo on the left
And nav links "Home", "About", "Products", "Blog", "Contact" are visible
And a cart icon with a badge count appears on the right
And clicking the cart shows a dropdown with product items and "View All" link
```

#### Scenario: Products dropdown opens

```
Given the user hovers over or clicks "Products"
Then a dropdown appears with "Products", "Single Product", "Cart", "Checkout"
```

### Requirement: Hero section

The system SHALL render a full-width hero with a dark-overlay background photo,
an italic serif headline "Good Drink for Good Moments." with brand-styled
spans, and two buttons: "Shop Now" (primary) and "Read more" (white outline).

#### Scenario: Hero displays headline and CTAs

```
Given the user loads the page
Then the hero shows "Good Drink for Good Moments." as a large italic heading
And a "Shop Now" primary button is visible
And a "Read more" white outline button is visible
```

### Requirement: Intro features strip

The system SHALL render a terracotta 3-column strip with icon cards:
Online Support 24/7, Money Back Guarantee, Free Shipping & Return. Each
has an icon, title, and description on a `#b7472a` background.

#### Scenario: Intro strip displays three features

```
Given the user scrolls past the hero
Then three feature cards are visible on a terracotta background
And the titles are "Online Support 24/7", "Money Back Guarantee",
  "Free Shipping & Return"
```

### Requirement: About section

The system SHALL render a two-column about section: a background image on the
left, and text content on the right with subheading "Since 1905", heading
"Desire Meets A New Taste", two paragraphs, and an animated year counter
("115 Years of Experience In Business").

#### Scenario: About section displays with counter

```
Given the user scrolls to the about section
Then "Since 1905" subheading and "Desire Meets A New Taste" heading appear
And a year counter displays "115 Years of Experience In Business"
```

### Requirement: Liquor category grid

The system SHALL render a 6-column grid of liquor categories (Brandy, Gin,
Rum, Tequila, Vodka, Whiskey), each with a circular background image and a
label below.

#### Scenario: Category grid displays six types

```
Given the user scrolls to the categories section
Then six category cards are visible in a row
And each shows a product type image and label
And the labels are "Brandy", "Gin", "Rum", "Tequila", "Vodka", "Whiskey"
```

### Requirement: Products section

The system SHALL render a "Tastefully Yours" products section with a centered
heading and 8 product cards in a 4×2 grid. Each card has an image with hover
overlay showing action icons (bag, heart, eye), a badge (Sale, Best Seller, or
New Arrival), category label, product name, and price. A "View All Products"
button spans the bottom.

#### Scenario: Products section displays cards

```
Given the user scrolls to the products section
Then "Tastefully Yours" heading is centered above the grid
And 8 product cards are visible (4 per row, 2 rows)
And each card shows an image, badge, category, name, and price
```

#### Scenario: Product card hover shows action icons

```
Given the user hovers over a product card image
Then an overlay appears with bag, heart, and eye icons
```

### Requirement: Testimonials section

The system SHALL render a testimonial carousel on a dark background photo with
overlay. The section has centered white heading "Happy Clients" and a carousel
of testimony cards with a quote icon, paragraph text, and user info (image,
name, position).

#### Scenario: Testimonial carousel displays

```
Given the user scrolls to the testimonials section
Then "Happy Clients" heading is displayed in white
And testimony cards appear in a carousel
And each card shows a quote, user image, name, and position
```

### Requirement: Blog section

The system SHALL render a "Recent Blog" section with 2 blog entries side by
side. Each entry has a background image on the left and text content (date,
heading, excerpt, "Continue" link) on a light background on the right.

#### Scenario: Blog entries display

```
Given the user scrolls to the blog section
Then "Recent Blog" heading is centered
And 2 blog entries are visible side by side
And each shows an image, date, heading, excerpt, and "Continue" link
```

### Requirement: Footer

The system SHALL render a dark footer with 5 columns: Logo + socials, My
Accounts (links), Information (links), Quick Link (links), Have a Questions?
(address, phone, email). Below, a copyright bar with "Component Dock" linking
to https://www.componentdock.com/.

#### Scenario: Footer columns display

```
Given the user scrolls to the footer
Then five columns are visible: logo/socials, My Accounts, Information,
  Quick Link, Have a Questions?
And social icons (Twitter, Facebook, Instagram) appear under the logo
```

#### Scenario: Footer copyright links Component Dock

```
Given the user reads the footer copyright
Then it says "This template is made with ♥ by Component Dock"
And "Component Dock" links to https://www.componentdock.com/
```

## Verification checklist

- [ ] Terracotta top bar with phone, email, social icons, Sign Up/Log In
- [ ] Dark transparent navbar with logo, nav links (Home, About, Products
      dropdown, Blog, Contact), cart icon with badge and dropdown
- [ ] Hero: bg photo with overlay, italic "Good Drink for Good Moments."
      headline, "Shop Now" + "Read more" buttons
- [ ] Intro strip: 3 terracotta columns (Online Support 24/7, Money Back
      Guarantee, Free Shipping & Return)
- [ ] About section: image left, "Since 1905" + "Desire Meets A New Taste"
      + year counter
- [ ] Category grid: 6 columns (Brandy, Gin, Rum, Tequila, Vodka, Whiskey)
      with images and labels
- [ ] Products: "Tastefully Yours" heading, 8 product cards (4×2) with
      badges, hover overlay with action icons, "View All Products" button
- [ ] Testimonials: dark bg photo, "Happy Clients", carousel with quote,
      user info
- [ ] Blog: 2 entries side by side with images, dates, headings, excerpts
- [ ] Dark footer: logo/socials, My Accounts, Information, Quick Link,
      Have a Questions? + copyright with "Component Dock" link
- [ ] Design tokens: terracotta `#a23f25` / `#b7472a`, dark `#1a1a1a`
      footer, italic serif hero heading
- [ ] No ColorLib references in app code
- [ ] Footer links https://www.componentdock.com/
