# Template: Pitstop (Automotive Garage & Repair Shop)

## Purpose

Pitstop is a multi-section automotive garage/repair-shop landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "AutoMotive" website template design, built under a DIFFERENT
name (Pitstop — a motorsport term for a quick service stop) per the monorepo
naming mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

- **Source:** ColorLib "AutoMotive" — automotive / garage landing template
  (source: https://colorlib.com/wp/template/automotive/)
- **Preview URL:** https://preview.colorlib.com/theme/automotive/
  (HTTP 200, ~18 KB DOM fetched 2026-09-10)
- **Name:** `pitstop` — single lowercase word, no collision with `apps/` or
  `openspec/specs/` (checked 2026-09-10 against origin/main).
- **Package:** `@free-react-templates/pitstop`
- **App folder:** `apps/pitstop`

Pitstop lives in `apps/pitstop` and uses shared components from `packages/ui`
(cn at minimum).

## Design reference (replication findings)

### Original template structure

- **Preview DOM analyzed:** https://preview.colorlib.com/theme/automotive/
  (HTTP 200, ~18 KB HTML). Page title: "AutoMotive | Template".
  Stylesheets: `css/bootstrap.min.css`, `css/font-awesome.min.css`,
  `css/elegant-icons.css`, `css/nice-select.css`, `css/jquery-ui.min.css`,
  `css/magnific-popup.css`, `css/owl.carousel.min.css`, `css/slicknav.min.css`,
  `css/style.css` (main custom styles).

### Design tokens (extracted from css/style.css)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Public Sans", sans-serif` | Google Fonts, weights 400-900 |
| Primary / brand color | `#5F67FF` | Vivid blue-purple; buttons, active states, icons |
| Dark background | `#25282C` | Header top bar, copyright bar |
| Heading color (body) | `#111111` | Default h1-h6 |
| Heading color (sections) | `#353535` | Section titles, hero title, testimonial text |
| Paragraph text | `#727171` | Body copy |
| Menu link color | `#8d8d8d` | Nav items |
| Dropdown background | `#353535` | Nav dropdown |
| Footer text | `#b4b4b4` | Footer paragraphs, addresses |
| Footer widget heading | `#ffffff` | White on dark footer bg |
| Button (primary) | `#5F67FF bg`, no border-radius, padding 14px 25px 12px | `.primary-btn` |
| Button (site) | `#5F67FF bg`, border-radius 2px, padding 14px 30px 12px | `.site-btn` |
| Testimonial quote icon | `#5F67FF` | Large quotation mark |
| Copyright heart | `#cc1111` | Red heart in copyright line |
| Copyright link | `#5F67FF` | Brand-colored link |
| Social icons bg | `#324975` | Facebook default |
| Social icons (Twitter) | `#2C85AE` | |
| Social icons (Vimeo) | `#DC4438` | |
| Social icons (Pinterest) | `#3EAFF0` | |
| Section padding | `100px top/bottom` (`.spad`) | |

### Screenshot visual design

The TEMPLATES.md preview image
(`automotive-free-template.jpg`) shows:
- Dark-themed header top bar with phone/hours + social icons
- White nav bar with logo, menu (Home/Services/Shop/Pages/Blog), cart/search
- Full-width hero with dark garage background image, white "Welcome To
  Auto-Motive Garage" heading, subtitle, and blue-purple CTA button
- "What We Do?" services section: 4 alternating image/text cards (Engine
  Overhaul, Power Steering, Oil Change, Upgrades Car)
- "We Have 20 Years Of Experience" split section: image left, checklist + CTA
  right
- "Our Products" 4-column product grid with hover overlay actions
- Testimonial carousel on white background
- "About Our Statistics" counter section with dark background image
- "Latest News" 3-column blog cards
- Dark footer with 3-column top row (booking/phone/location) and 4-column
  bottom section (about, quick links, news, address)
- Copyright bar with social icons

## Section order (1:1, index page)

1. **Header Top Bar** (`header.header__top`, bg `#25282C`):
   - Left: phone number `(+123) 4567-7890-123`, hours `Mon-Sat: 10:00 - 16:00 / Sunday Close`
   - Right: "Find us on map" link, social icons (Facebook, Twitter, Vimeo, Pinterest)
   - Icons in brand color `#5F67FF`

2. **Header / Navbar** (`header .container`):
   - Logo (left, `header__logo`)
   - Main nav (center, `header__menu`): Home (active), Services, Shop, Pages (dropdown), Blog
   - Right actions (search icon, cart icon)
   - Dropdown: About Us, Services Details, Shop Details, Blog Details, Contact
   - Active state: brand-color underline bar (`scale(0)`→`scale(1)`)

3. **Hero Section** (`section.hero`, bg image `hero-bg.jpg`):
   - Centered text: "Welcome To" (40px, light weight) + "Auto-Motive Garage" (60px, bold, white)
   - Subtitle paragraph (24px, white)
   - CTA button: "Our Services" (`.primary-btn`, `#5F67FF`)

4. **Services Section** (`section.services`, `.spad`, white bg):
   - Section title: "What We Do?" + subtitle
   - 4 service cards in 4-col grid, alternating layout:
     - Row 1: text-left (icon + title + desc), image-right
     - Row 2: text-left, image-right
     - Row 3: text-left, image-right
     - Row 4: text-left, image-right
   - Each card: icon image, h4 title, short paragraph
   - Services: Engine Overhaul, Power Steering, Oil Change, Upgrades Car

5. **Choose Us Section** (`section.chooseus`):
   - Split layout: image left (48% width, absolute positioned), text right
   - Title: "We Have 20 Years Of Experience In Auto Car"
   - Checklist (4 items with check icons)
   - CTA: "About Us" button

6. **Products Section** (`section.products`, `.spad`, white bg):
   - Section title: "Our Products" + subtitle
   - 4-col product grid (`.product__item`)
   - Each: product image with hover overlay (heart, eye, exchange icons),
     product name (h6 link), price ($800.00), "+Add To Cart" link
   - Products: High Flow Fuel, Revolution Wheels, Tone Interior Kit, Matte Gunmetal

7. **Testimonial Section** (`div.testimonial`, white bg):
   - Carousel/slider (Owl Carousel in original)
   - 3 testimonial items with large quotation icon (brand color)
   - Each: quote paragraph (30px, italic, `#353535`)
   - Dot navigation below

8. **Counter Section** (`section.counter`, bg image `counter-bg.jpg`, dark overlay):
   - Section title: "About Our Statistics" (white text)
   - 4 counter items in 4-col grid
   - Each: icon image, number "560" + "+", label
   - Labels: All Project, Project Completed, Customers Action, Awards Winner
   - Stats animate on scroll (counter effect)

9. **Latest News Section** (`section.latest`, `.spad`, white bg):
   - Section title: "Latest News" + subtitle
   - 3 blog cards in 3-col grid
   - Each: featured image with author/date overlay, title (h4 link),
     excerpt paragraph, "Continue Reading" link

10. **Footer** (`footer.footer`, bg image `footer-bg.jpg`):
    - Top row (3-col): icon + "Booking Repair / Appointment" | icon + "Contact Us Now! / Phone" | icon + "Location / Find us on map"
    - Bottom section (4-col): About (logo + description + "Contact Us" CTA) | Quick Links (Purchase, Payment, Shipping, Return, Detailing) | News (3 recent posts) | Address (address, fax, mobile, email)

11. **Copyright Bar** (`div.footer__copyright`, bg `#25282C`):
    - Left: copyright text with red heart + Colorlib attribution → replace with "Made with Component Dock" / "More templates at Component Dock" linking https://www.componentdock.com/
    - Right: social icons (Facebook, Twitter, Vimeo, Pinterest) with brand-color backgrounds

## Gherkin requirements

### Feature: Pitstop — Automotive Garage Landing Page

```gherkin
Feature: Pitstop automotive garage landing page
  As a visitor to a Pitstop automotive site
  I want a professional garage landing page
  So that I can learn about services, browse products, and contact the shop

  Background:
    Given the Pitstop app is loaded at the root URL

  # --- Header ---

  Scenario: Header top bar displays contact info and social links
    Then I should see the phone number "(+123) 4567-7890-123"
    And I should see business hours "Mon-Sat: 10:00 - 16:00 / Sunday Close"
    And I should see a "Find us on map" link
    And I should see social icon links for Facebook, Twitter, Vimeo, and Pinterest

  Scenario: Navbar displays logo, navigation menu, and action icons
    Then I should see a logo image
    And I should see navigation links: "Home", "Services", "Shop", "Blog"
    And I should see a "Pages" dropdown menu
    And I should see search and cart action icons

  Scenario: Pages dropdown reveals sub-navigation
    When I hover over or click the "Pages" nav link
    Then I should see dropdown links: "About Us", "Services Details", "Shop Details", "Blog Details", "Contact"

  Scenario: Active nav item has brand-color underline indicator
    Given "Home" is the active page
    Then the "Home" link should have a visible brand-color underline

  # --- Hero ---

  Scenario: Hero section displays welcome headline and CTA
    Then I should see the heading "Welcome To Auto-Motive Garage" (or equivalent)
    And I should see a subtitle paragraph
    And I should see a "Our Services" call-to-action button
    And the hero should have a background image

  # --- Services ---

  Scenario: Services section shows four service cards
    Then I should see a section titled "What We Do?"
    And I should see 4 service cards with the following titles:
      | title            |
      | Engine Overhaul  |
      | Power Steering   |
      | Oil Change       |
      | Upgrades Car     |

  Scenario: Each service card has icon, title, and description
    Then each service card should contain an icon image, a heading, and a paragraph

  # --- Choose Us ---

  Scenario: Choose Us section displays experience claim and checklist
    Then I should see the heading "We Have 20 Years Of Experience In Auto Car"
    And I should see 4 checklist items with check icons
    And I should see an "About Us" call-to-action button
    And I should see a background image on the left side

  # --- Products ---

  Scenario: Products section displays four product cards
    Then I should see a section titled "Our Products"
    And I should see 4 product cards with the following names:
      | name              |
      | High Flow Fuel    |
      | Revolution Wheels |
      | Tone Interior Kit |
      | Matte Gunmetal    |

  Scenario: Product card has image, hover actions, name, and price
    Then each product card should contain an image
    And each product card should show heart, eye, and exchange icons on hover
    And each product card should show a product name and price "$800.00"
    And each product card should show an "+Add To Cart" link

  # --- Testimonials ---

  Scenario: Testimonial section displays customer quotes
    Then I should see 3 testimonial quote blocks
    And each quote should display a large quotation icon in brand color
    And each quote should contain an italic paragraph
    And I should see carousel dot navigation

  Scenario: Testimonial carousel cycles through quotes
    When I click a different carousel dot
    Then the displayed quote should change

  # --- Counter ---

  Scenario: Counter section displays four statistics
    Then I should see a section titled "About Our Statistics"
    And I should see 4 counter items:
      | label              | value |
      | All Project        | 560+  |
      | Project Completed  | 560+  |
      | Customers Action   | 560+  |
      | Awards Winner      | 560+  |
    And the counter section should have a background image

  # --- Latest News ---

  Scenario: Latest News section displays three blog cards
    Then I should see a section titled "Latest News"
    And I should see 3 blog cards
    And each blog card should contain a featured image, author name, date, title, and excerpt
    And each blog card should have a "Continue Reading" link

  # --- Footer ---

  Scenario: Footer top row displays contact actions
    Then I should see 3 footer top items: "Appointment", phone number, and "Find us on map"
    And each footer top item should have an icon and heading

  Scenario: Footer bottom section displays about, links, news, and address
    Then I should see a footer logo and description paragraph
    And I should see a "Contact Us" button
    And I should see "Quick Link" section with: Purchase, Payment, Shipping, Return, Detailing
    And I should see a "News" section with 3 recent post entries
    And I should see a "My Office" section with address, fax, mobile, and email

  # --- Copyright ---

  Scenario: Copyright bar shows attribution and social links
    Then I should see a copyright line with current year
    And I should see a "Component Dock" link (not Colorlib)
    And I should see social icon links in the copyright bar
```

## Verification checklist

- [ ] All 11 sections rendered in correct order matching original
- [ ] Design tokens match: font Public Sans, primary #5F67FF, dark bg #25282C
- [ ] Buttons styled with flat edges (no or minimal border-radius) and #5F67FF bg
- [ ] Header top bar: dark bg, phone + hours, social icons, brand-colored icons
- [ ] Navbar: logo, 4 nav links + dropdown, search/cart icons, active underline
- [ ] Hero: background image, "Welcome To" / "Auto-Motive Garage" text, CTA
- [ ] Services: 4 alternating text/image cards with icons
- [ ] Choose Us: split layout with background image, checklist, CTA
- [ ] Products: 4-column grid with hover overlay, prices, add-to-cart links
- [ ] Testimonials: carousel with quote blocks, dot navigation
- [ ] Counter: 4 stat items with icons, background image section
- [ ] Latest News: 3 blog cards with images, metadata, read-more links
- [ ] Footer: dark bg, 3-column top + 4-column bottom layout
- [ ] Copyright bar: Component Dock attribution (not Colorlib), social icons
- [ ] Responsive: mobile hamburger menu, stacked layouts on small screens
- [ ] Placeholder images via `picsum.photos/seed/pitstop-<n>/<w>/<h>`
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code, comments, or data
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] All Gherkin scenarios pass
