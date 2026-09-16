# Template: RedIron (Construction Company)

## Purpose

Recreation of the ColorLib **Sintec** construction company template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** [ColorLib Sintec](https://colorlib.com/wp/template/sintec/)
- **Preview:** https://preview.colorlib.com/theme/sintec/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/sintec-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript · packages/ui
- **Deploy target:** https://rediron.free.componentdock.com

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#e22104` | Buttons, active nav links, hover accents, icon tints |
| `--color-accent` | `#ec473a` | Stat counter numbers |
| `--color-text-dark` | `#202e31` | Headings, nav links |
| `--color-text-muted` | `#888888` | Body text, meta info |
| `--color-bg-light` | `#f6f6f6` | Top bar, about section background |
| `--color-bg-dark` | `#16191a` | Footer background |
| `--color-white` | `#ffffff` | Testimonial cards, portfolio overlay, dropdowns |
| `--font-heading` | `"Heebo", sans-serif` | Banner headings (h3 hero), banner subtitle |
| `--font-body` | `"Roboto", sans-serif` | Body text, nav links, button text, top bar |
| `--radius` | `0px` | All buttons, dropdowns — square corners throughout |
| `--radius-testimonial` | `5px` | Testimonial cards |
| `--radius-avatar` | `100%` | Circular testimonial avatars |
| `--radius-badge` | `50px` | Cart badge (pill shape) |
| `--btn-padding` | `0px 51px` | `.main_btn` horizontal padding |
| `--btn-line-height` | implicit from font | Square CTA button |
| `--btn-hover` | Inverts: white bg, #e22104 text, 1px white border | On hover |

## Section structure (DOM order from preview)

### 1. Top Bar
- Light grey background (`#f6f6f6`)
- Left: phone icon + number, location pin + address
- Right: "Follow us:" label + social icon list (Facebook, Twitter, Instagram, Skype, Vimeo)
- Font: Roboto, 14px, muted `#888888`, icon color `#e22104`

### 2. Header / Navbar
- Transparent background (becomes `#fff` on sticky scroll)
- Left: logo image (red background rectangle with white text "Sintac" in screenshot)
- Center/Right: nav links — Home, About, Services, Project, Blog (dropdown), Contact
- Far right: cart icon with badge (red pill `#e22104` bg), search icon
- Nav links: `#202e31`, hover/active → `#e22104`
- Dropdown: white bg, `#202e31` links, hover → `#e22104` bg + white text
- Mobile: hamburger toggler with 3 bars

### 3. Hero / Banner
- Full-width section with parallax city skyline background image
- Dark overlay (data-stellar parallax)
- Centered content:
  - Subtitle: "Future construction" (24px, Heebo, with a thin underline decoration)
  - Headline: "Make your dream home with sintac" (60px, Heebo, 500 weight, white text)
  - CTA button: "get a quote" — `.main_btn` (red `#e22104` bg, white text, square corners)
- Padding: ~150px top/bottom

### 4. About Section
- Light grey background (`#f6f6f6`), `area-padding`
- Two-column layout (image left hidden on mobile, text right):
  - Left: illustration image (construction worker with hardhat, shown in screenshot)
  - Right:
    - Heading: "WE ARE ON EXPERT THIS FIELD BUILDINGS SOLUTIONS SINCE 1974." (bold)
    - Paragraph of descriptive text
    - CTA button: "learn more" (`.main_btn`)

### 5. Services Section
- White background, `area-padding`
- Centered heading: "What We Provide" with red underline decoration + subtitle
- 4-column grid (2-col on mobile):
  - Each: icon image + title (h5) + short description paragraph
  - Services: Architecture Design, Building Construction, Building Renovation, Building Maintenance
  - Icon images (small construction-themed icons)

### 6. Stats / Numbers Section
- White background with padding
- Two-column layout:
  - Left: illustration image (construction worker/toolbox)
  - Right:
    - Heading: "Providing Personalized And High Quality Service."
    - Description paragraph
    - 3 stat counters in a row:
      - "15K+" / "happy customer"
      - "10K+" / "Project Done"
      - "9/10" / "Average Rating"
    - Counter numbers: `#ec473a` (accent red), 27px, bold
    - Labels: `#888`, 16px

### 7. Portfolio Section
- White background, `area-padding`
- Centered heading: "Our Recent Project" with red underline + subtitle
- Filter tabs: all, buildings, offices, rebuild, architecture
- 2-column masonry-style grid:
  - Each card: full-width image, hover overlay with white bg + category label + project title
  - 4 project items (all showing "Desert Work, Dubai" / construction category)

### 8. Testimonials Section
- White background, `area-padding`
- Centered heading: "Customer reviews" with red underline + subtitle
- Carousel of testimonial cards:
  - Each card: white bg, 5px border-radius, subtle shadow, quote icon background image
  - Left: circular avatar (95px, 2px border `#ecf3f5`)
  - Right: name (h4), designation "Chief Customer", paragraph quote
  - Hover: cursor pointer

### 9. Blog / News Section
- White background, `area-padding`
- Centered heading: "Our Recent News" with red underline + subtitle
- 3-column grid:
  - Each card: image thumb, meta row (calendar icon + date, folder icon + category), title link (h4)
  - Date format: "Feb 14, 2019"

### 10. Footer
- Dark background (`#16191a`), generous top padding
- 3-column layout:
  - Col 1: "Useful Links" — two sub-columns of link lists with angle-right icons
  - Col 2: "Business Hours" — Mon-Fri 9-18, Sat 9-16, Sun Closed
  - Col 3: "Email Newsletter" — email input + subscribe button (red, square), privacy policy link
- Footer bottom bar: copyright text, heart icon, "Component Dock" link (replaces Colorlib attribution)

## Gherkin requirements

```gherkin
Feature: RedIron — Construction Company Template

  Background:
    Given the app is loaded at the root URL

  Scenario: Top bar displays contact and social info
    Then the top bar shows a phone number
    And the top bar shows a physical address
    And the top bar shows social media icons (Facebook, Twitter, Instagram, Skype, Vimeo)
    And the top bar has a light grey background

  Scenario: Navbar renders with all navigation links
    Then the navbar shows a logo
    And the navbar has links: Home, About, Services, Project, Blog, Contact
    And the active link is highlighted in the primary color
    And a cart icon with a badge is visible
    And a search icon is visible

  Scenario: Navbar becomes opaque on scroll
    When the user scrolls past the hero section
    Then the navbar background changes to white

  Scenario: Hero section displays headline and CTA
    Then the hero shows a background image with dark overlay
    And the subtitle reads "Future construction"
    And the headline reads a construction-themed message
    And a "Get a Quote" CTA button is visible in the primary color

  Scenario: About section shows company info
    Then the about section displays an illustration on the left
    And the about section shows a heading about expertise since 1974
    And the about section has a "Learn More" CTA button

  Scenario: Services section displays 4 service cards
    Then the services heading reads "What We Provide"
    And 4 service cards are displayed in a grid
    And each card has an icon, title, and description

  Scenario: Stats section shows 3 counters
    Then the stats section shows "15K+" happy customers
    And the stats section shows "10K+" projects done
    And the stats section shows "9/10" average rating
    And the stat numbers use the accent color

  Scenario: Portfolio section with filter tabs
    Then the portfolio heading reads "Our Recent Project"
    And filter tabs are shown: all, buildings, offices, rebuild, architecture
    And 4 portfolio cards are displayed in a 2-column grid
    And hovering a card reveals a white overlay with project details

  Scenario: Testimonials carousel
    Then the testimonials heading reads "Customer reviews"
    And testimonial cards show an avatar, name, designation, and quote
    And cards have rounded corners and subtle shadow

  Scenario: Blog section shows 3 article cards
    Then the blog heading reads "Our Recent News"
    And 3 blog cards are displayed in a 3-column grid
    And each card shows an image, date, category, and title

  Scenario: Footer displays links, hours, and newsletter
    Then the footer has a dark background
    And the footer shows useful links in two sub-columns
    And the footer shows business hours
    And the footer has an email newsletter input with subscribe button
    And the footer bottom bar links to Component Dock
```

## Verification checklist

- [ ] All 10 sections rendered in correct DOM order
- [ ] Design tokens applied: primary `#e22104`, accent `#ec473a`, dark `#202e31`, muted `#888888`
- [ ] Fonts: Heebo for headings, Roboto for body
- [ ] Buttons: square corners (`radius: 0`), red bg, white text, hover inverts
- [ ] Top bar: grey bg, phone + address + social icons
- [ ] Navbar: transparent → white on scroll, all nav links, cart badge, search
- [ ] Hero: parallax bg, dark overlay, centered headline + CTA
- [ ] About: 2-col (image left, text right), `#f6f6f6` bg
- [ ] Services: 4 cards in grid, icon + title + desc
- [ ] Stats: 3 counters with accent color numbers
- [ ] Portfolio: filter tabs, 2-col grid, hover overlay
- [ ] Testimonials: carousel, circular avatars, quote cards with shadow
- [ ] Blog: 3-col cards with image, meta, title
- [ ] Footer: dark bg, 3-col layout, newsletter form, Component Dock link
- [ ] Footer credits Component Dock (no ColorLib reference)
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Placeholder images via picsum.photos
- [ ] Responsive: single column on mobile, 2-col on tablet, full grid on desktop
