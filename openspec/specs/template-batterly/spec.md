# Template: Batterly (Bakery / Cake Shop)

## Purpose

Recreation of ColorLib's "Cakes" template for a bakery / cake-shop website.

- **ColorLib source:** https://colorlib.com/wp/template/cakes/
- **Preview URL:** https://preview.colorlib.com/theme/cakes/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cakes-colorlib-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **New name:** `batterly` (apps/batterly, @free-react-templates/batterly)
- **Deploy URL:** https://batterly.free.componentdock.com

## Design tokens (from preview CSS)

| Token                | Value                                                 | Notes                                                                 |
| -------------------- | ----------------------------------------------------- | --------------------------------------------------------------------- |
| Brand color          | `#F04506`                                             | Orange-red, used for buttons, accents, links, subtitles, hover states |
| Brand gradient       | `linear-gradient(to left, #F04506, #d83e06, #F04506)` | Primary `.btn` background                                             |
| Card background      | `#FFF5F2`                                             | Warm pink-cream for product cards                                     |
| Footer background    | `#FFF7F3`                                             | Warm cream                                                            |
| Body text            | `#000` / `#5E5E5E`                                    | Headings black, body muted grey                                       |
| Section title span   | `color: #F04506`, `letter-spacing: 0.2em`             | Subtitle/accent text above headings                                   |
| Body font            | `"DM Sans", sans-serif`                               | 16px body text                                                        |
| Heading font         | `"Quicksand", sans-serif`                             | h1–h6, buttons, nav                                                   |
| Decorative font      | `"Lobster", cursive`                                  | Hero watermark "Delicious" text                                       |
| Button border-radius | `30px`                                                | All primary buttons are pill-shaped                                   |
| Button shadow        | `0px 17px 27px rgba(240,69,6,0.27)`                   | Orange-tinted drop shadow                                             |
| Section padding      | `110px` top/bottom                                    | `.section-padding40`                                                  |
| Card border-radius   | `0 0 60px 0`                                          | Bottom-right rounded corners on product cards                         |

## Sections (from preview DOM analysis)

### 1. Header / Navbar

- Sticky header with white background
- Logo (left)
- Navigation: Home, Product, About, Blog (dropdown), Contact
- Right side: phone number link (`+10 (56) 745 3095`), "Order Online" button (pill, orange-border)
- Mobile hamburger menu

### 2. Hero Section

- Full-width hero with background image (cake hero image)
- Decorative watermark text "Delicious" in Lobster font, oversized, semi-transparent orange
- Main heading: "Delicious Cake For Everyone"
- Paragraph description
- "Explore Menu" CTA button (pill, orange gradient)
- Floating decorative shape at bottom-left

### 3. Popular Items (Product Carousel)

- Section subtitle: "Most Popular"
- Section heading: "Our Exclusive Cakes"
- 3–4 product cards in horizontal carousel
- Each card: product image, name, short description, price + "Order Now" button
- Card style: warm pink background (#FFF5F2), bottom-right border-radius 60px
- Products: Chocolate, Sweetheart, Blackforest, + extras in carousel

### 4. About Section

- Split layout: image (left 6 cols) + text (right 5 cols)
- Subtitle: "Fresh & Delicious"
- Heading: "A Simple Way to Eating Delicious"
- Paragraph text
- "Our Story" CTA button (pill, orange)

### 5. Services / Features

- Section subtitle: "Our Features"
- Section heading: "Quality is Our First Priority"
- 3 feature cards in a row (icon + title + description)
- Note: original has "Pet Boarding" placeholder text (likely copy-paste artifact from another template) — recreate with bakery-relevant copy
- Decorative floating shape

### 6. Video Section

- Full-width section with dark background image
- Centered play button (YouTube popup link)
- Minimal content — just the video trigger

### 7. Testimonials

- Section subtitle: "Testimonial"
- Section heading: "What Customers Say"
- Carousel of testimonial cards
- Each card: quote text, author avatar, author name, role/title

### 8. Instagram Feed

- Full-width horizontal carousel of Instagram-style images
- Dark overlay on hover with Instagram icon
- Auto-scrolling

### 9. Footer

- Warm cream background (#FFF7F3)
- 4-column layout:
  - Col 1: Logo + description paragraph + social media icons (Twitter, Facebook, LinkedIn, Pinterest)
  - Col 2: "Quick Links" — Home, About, Services, Blog, Contact
  - Col 3: Cake varieties list (Blackforest, etc.)
  - Col 4: "Contact Us" — address, phone number
- Footer bottom: copyright text with heart icon

## Gherkin requirements

### Feature: Batterly — Bakery Cake Shop Template

```gherkin
Feature: Batterly bakery template
  As a visitor to the Batterly bakery website
  I want to browse cakes, learn about the bakery, and contact them
  So that I can order cakes or visit the bakery

  Background:
    Given the Batterly template is loaded
    And the browser is at the root URL

  # --- Header ---
  Scenario: Navbar displays navigation links
    Then I should see a navigation bar
    And I should see links for "Home", "Product", "About", "Blog", "Contact"
    And the navigation should be sticky on scroll

  Scenario: Header shows contact CTA
    Then I should see a phone number link
    And I should see an "Order Online" button

  # --- Hero ---
  Scenario: Hero section displays main heading
    Then I should see a hero section
    And I should see the heading "Delicious Cake For Everyone"
    And I should see an "Explore Menu" button

  Scenario: Hero has decorative watermark
    Then I should see the decorative text "Delicious"
    And it should use a cursive/script font style

  # --- Popular Items ---
  Scenario: Product cards display cake information
    Then I should see a section with heading "Our Exclusive Cakes"
    And I should see at least 3 product cards
    And each card should show a cake name, description, price, and order button

  # --- About ---
  Scenario: About section shows bakery story
    Then I should see an about section with a split layout
    And I should see a heading "A Simple Way to Eating Delicious"
    And I should see an "Our Story" button

  # --- Services ---
  Scenario: Features section displays bakery services
    Then I should see a section with heading "Quality is Our First Priority"
    And I should see at least 3 feature cards with icons and descriptions

  # --- Video ---
  Scenario: Video section has play button
    Then I should see a video section with a play button overlay

  # --- Testimonials ---
  Scenario: Testimonials show customer reviews
    Then I should see a section with heading "What Customers Say"
    And I should see at least 2 testimonial cards with quotes
    And each card should show an author name and role

  # --- Instagram ---
  Scenario: Instagram feed displays images
    Then I should see an Instagram gallery section
    And I should see multiple image tiles in a carousel

  # --- Footer ---
  Scenario: Footer shows site information
    Then I should see a footer with 4 columns
    And I should see a logo and social media links
    And I should see quick navigation links
    And I should see contact information

  Scenario: Footer has Component Dock attribution
    Then I should see a footer link to "https://www.componentdock.com/"
    And it should be labeled "Component Dock"

  # --- Accessibility ---
  Scenario: Page is accessible
    Then all images should have alt text
    And all interactive elements should be keyboard-focusable
    And the page should use semantic HTML elements
```

## Verification checklist

- [ ] All sections present in DOM order matching preview
- [ ] Brand color #F04506 used consistently for accents, buttons, links
- [ ] Three fonts loaded: DM Sans (body), Quicksand (headings), Lobster (decorative)
- [ ] Pill-shaped buttons with orange gradient and drop shadow
- [ ] Product cards with warm pink background and bottom-right border-radius
- [ ] Hero has background image + decorative watermark
- [ ] Testimonial carousel with avatars
- [ ] Instagram image feed with hover overlay
- [ ] Footer with 4 columns + Component Dock link
- [ ] No ColorLib references in app code (only in this spec)
- [ ] Placeholder images from picsum.photos with deterministic seeds
- [ ] Google Fonts loaded via index.html link tags
- [ ] Responsive layout (mobile hamburger menu, stacked columns)
- [ ] Semantic HTML (header, main, section, footer, nav)
