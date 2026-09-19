# Template: SellCraft (E-Commerce / Online Store)

## Purpose

Recreation of ColorLib **Selling** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page e-commerce storefront.

- **Source:** https://colorlib.com/wp/template/selling/
- **Preview:** https://preview.colorlib.com/theme/selling/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/selling-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, packages/ui

## Design Tokens

Extracted from preview CSS (`css/style.css`) and DOM analysis.

| Token | Value | Notes |
|-------|-------|-------|
| Brand primary | `#f16821` | Orange — CTAs, active nav, accents |
| Brand accent | `#f23a2e` | Red-orange — hover states |
| Text dark | `#333333` | Headings, body text |
| Text muted | `#737373` / `#999999` | Subtitles, meta |
| Background page | `#fff` | White base |
| Background alt | `#f4f5f9` / `#f8f9fa` | Alternating section bg (bg-light) |
| Background card | `#fff` | Product/team cards |
| Border | `#dee2e6` / `#e9ecef` | Subtle dividers |
| Font family | `"Muli", sans-serif` | Google Fonts: weights 300, 400, 700, 900 |
| Button radius | `7px` | Rounded buttons |
| Avatar radius | `50%` | Team member photos |
| Button style | Outlined (border + bg transparent → fill on hover) for primary; solid fill for secondary | Hero has "Shop Now" (outlined) + "Club Membership" (outlined) |

### Section Backgrounds

| Section | Background |
|---------|------------|
| Top bar | `#f8f9fa` (bg-light) |
| Navbar | `#fff` (white) |
| Hero | Full-width background image with dark overlay `rgba(0,0,0,0.4)` |
| Popular Products | `#fff` (white) |
| Newsletter | `#f4f5f9` (bg-light) |
| Featured Products | `#fff` (white) |
| About Company | `#fff` (white, border-bottom) |
| Team | `#f4f5f9` (bg-light) |
| Special Promo | Background image with dark overlay `rgba(0,0,0,0.6)` |
| Services | `#fff` (white) |
| Testimonials | `#f4f5f9` (bg-light) |
| Blog | `#fff` (white) |
| Contact | `#fff` (white) |
| Footer | `#fff` (white) |

## Page Structure (section order)

1. **TopBar** — phone number, email, social icons (Facebook, Twitter, Instagram, LinkedIn)
2. **Navbar** — logo "SellCraft" (h1) + nav links (Home, Products, About Us, Special, Testimonials, Blog, Contact); sticky on scroll
3. **Hero** — full-width background image, dark overlay, "Shop With Us" heading, subtitle paragraph, two outlined CTA buttons ("Shop Now", "Club Membership")
4. **PopularProducts** — section subtitle "Popular Products", heading "Our Products", descriptive paragraph, 6 product cards in a 3-column grid (image + name + price + Cart/View buttons)
5. **Newsletter** — heading "Get notified on each updates.", email subscription form with input + button
6. **FeaturedProducts** — heading "Featured Products", 2 detailed product cards (image + "About This Product" description + price + action buttons)
7. **AboutCompany** — heading "About Us", company description text, with image
8. **Team** — section subtitle "Team", heading "Leadership", 3 team member cards (circular photo + name + role)
9. **SpecialPromo** — full-width background image with dark overlay, "Special Promo" subtitle, "Summer Sale" heading, description, CTA button
10. **Services** — section subtitle "Our Services", heading "We Offer Services", 6 service items in 3-column grid (icon + title + description)
11. **Testimonials** — section subtitle "People Says", heading "Testimonials", carousel of testimonial cards (quote + author info)
12. **Blog** — section subtitle "Blog", heading "Blog Posts", 3 blog cards (image + date + title + excerpt + "Read More" link)
13. **Contact** — heading "Get In Touch", contact form (name, email, subject, message, submit button)
14. **Footer** — 4 columns: About Us (logo + text), Quick Links, Follow Us (social icons), Featured Product (product card); copyright bar

## Gherkin Requirements

### TopBar
```gherkin
Scenario: Top bar displays contact info
  Given the page is loaded
  Then the top bar shows a phone number "(+1) 234 5678 9101"
  And an email "shop@yourdomain.com"
  And social media icon links (Facebook, Twitter, Instagram, LinkedIn)
```

### Navbar
```gherkin
Scenario: Navbar shows logo and navigation links
  Given the page is loaded
  Then the navbar displays the "SellCraft" logo
  And navigation links: Home, Products, About Us, Special, Testimonials, Blog, Contact

Scenario: Navbar sticks on scroll
  Given the user scrolls down
  Then the navbar remains fixed at the top of the viewport
```

### Hero
```gherkin
Scenario: Hero section displays headline and CTAs
  Given the page is loaded
  Then the hero shows heading "Shop With Us"
  And a descriptive subtitle paragraph
  And two buttons: "Shop Now" and "Club Membership"
  And the background is a full-width image with dark overlay
```

### PopularProducts
```gherkin
Scenario: Popular products grid shows 6 items
  Given the page is loaded
  Then the "Popular Products" section displays 6 product cards
  And each card has an image, product name, and price
  And each card has "Cart" and "View" buttons

Scenario: Products are displayed in a responsive grid
  Given the viewport is desktop
  Then products are shown in 3 columns
  Given the viewport is mobile
  Then products are shown in a single column
```

### Newsletter
```gherkin
Scenario: Newsletter section has email input
  Given the page is loaded
  Then the newsletter section shows heading "Get notified on each updates."
  And an email input field
  And a subscribe button
```

### FeaturedProducts
```gherkin
Scenario: Featured products show detailed cards
  Given the page is loaded
  Then the "Featured Products" section displays 2 product cards
  And each card has an image, "About This Product" description, and price
  And each card has action buttons
```

### AboutCompany
```gherkin
Scenario: About section shows company info
  Given the page is loaded
  Then the "About Us" section displays a heading and company description
```

### Team
```gherkin
Scenario: Team section shows leadership members
  Given the page is loaded
  Then the "Leadership" section displays 3 team member cards
  And each card has a circular photo, name, and role
```

### SpecialPromo
```gherkin
Scenario: Special promo banner displays
  Given the page is loaded
  Then a full-width promo section shows "Special Promo" subtitle and "Summer Sale" heading
  And a background image with dark overlay
  And a CTA button
```

### Services
```gherkin
Scenario: Services grid shows 6 items
  Given the page is loaded
  Then the "We Offer Services" section displays 6 service items
  And each item has an icon, title, and description
  And items are arranged in a 3-column grid
```

### Testimonials
```gherkin
Scenario: Testimonials carousel works
  Given the page is loaded
  Then the "Testimonials" section displays testimonial cards
  And cards show a quote and author information
  And cards cycle in a carousel
```

### Blog
```gherkin
Scenario: Blog section shows recent posts
  Given the page is loaded
  Then the "Blog Posts" section displays 3 blog cards
  And each card has an image, date, title, excerpt, and "Read More" link
```

### Contact
```gherkin
Scenario: Contact form renders all fields
  Given the page is loaded
  Then the "Get In Touch" section displays a contact form
  And the form has fields: name, email, subject, message
  And a submit button

Scenario: Contact form validates required fields
  Given the user clicks submit with empty fields
  Then validation errors appear for required fields
```

### Footer
```gherkin
Scenario: Footer shows four columns
  Given the page is loaded
  Then the footer displays 4 columns: About Us, Quick Links, Follow Us, Featured Product
  And a copyright notice at the bottom
  And the footer links to https://www.componentdock.com/ as "Component Dock"
```

## Verification Checklist

- [ ] TopBar renders phone, email, social icons
- [ ] Navbar renders logo + all nav links, sticks on scroll
- [ ] Hero renders heading, subtitle, two CTA buttons, background image
- [ ] PopularProducts renders 6 product cards in responsive grid
- [ ] Newsletter renders email input + subscribe button
- [ ] FeaturedProducts renders 2 detailed product cards
- [ ] AboutCompany renders heading + description
- [ ] Team renders 3 member cards with circular photos
- [ ] SpecialPromo renders full-width banner with overlay
- [ ] Services renders 6 items in 3-column grid
- [ ] Testimonials renders carousel with quotes
- [ ] Blog renders 3 post cards
- [ ] Contact renders form with all fields + validation
- [ ] Footer renders 4 columns + Component Dock link
- [ ] All sections match ColorLib Selling section order 1:1
- [ ] Brand color #f16821 used for CTAs and accents
- [ ] Font Muli (or Mulish) loaded from Google Fonts
- [ ] Responsive: mobile-friendly layout at all breakpoints
- [ ] No ColorLib references in app code (provenance only in spec)
