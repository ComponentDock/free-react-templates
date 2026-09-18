# Template: Zephyrine (Creative Agency)

## Purpose

Recreation of ColorLib **Dinomuz** — a creative agency website template with a bold
pink-to-orange gradient aesthetic, boxed layout, and portfolio-focused design.

- **Source:** https://colorlib.com/wp/template/dinomuz/
- **Preview:** https://preview.colorlib.com/theme/dinomuz/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dinomuz-free-creative-website-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview CSS (`css/main.css`).

| Token             | Value                                      | Usage                                |
| ----------------- | ------------------------------------------ | ------------------------------------ |
| Font family       | `"Poppins", sans-serif`                    | All text (weights 300, 500, 600)     |
| Brand gradient    | `linear-gradient(0deg, #e66587, #f09458)`  | Banner, service area, story area, icons, CTA buttons |
| Primary pink      | `#e66686`                                  | Accent color, links, icon tints      |
| Primary orange    | `#f09359`                                  | Accent color, icon tints             |
| Text dark         | `#222222`                                  | Headings, body text                  |
| Text gray         | `#777777`                                  | Body text, descriptions              |
| Section bg white  | `#ffffff`                                  | Featured area, subscription area     |
| Section bg light  | `#f9f9ff`                                  | Amazing works area                   |
| Button radius     | `20px`                                     | `.primary-btn` pill shape            |
| Button style      | Transparent + white border, gradient fill on hover | CTA buttons throughout       |
| Footer bg         | `rgba(0,0,0,0.25)`                        | Dark overlay footer                  |
| Layout            | Boxed (68.75% width, centered)             | Entire page content                  |
| Body background   | Dark textured image (placeholder)          | Full page behind boxed content       |

## Section Structure (order preserved)

1. **Header** — Logo left, nav links (Home, Generic, Elements) right, hamburger menu toggle
2. **Banner/Hero** — Full-width gradient background, centered layout (col-lg-8):
   - Subtitle: "Re-imagining the way" (uppercase, small, white)
   - Headline: "We grow money, Guaranteed" (uppercase, white, large)
   - CTA button: "Get Started" with arrow icon (pill-shaped, gradient fill)
3. **Featured Area** — 3-column row (col-md-4), white background, padding 70px 0 80px:
   - Card: icon circle (gradient bg) + title (uppercase) + description paragraph
   - Cards: "Stunning Visuals", "Clean Code", "Punctuality"
4. **Service Area** — Gradient background, 4-column grid (col-lg-3 col-sm-6), 8 items:
   - Each: image thumbnail (10rem height) + overlay with hover reveal + title + description
   - Services: Creative Design, Driving Lesson, Climbing Stairs, Bike Accident, Car Driving, Beach Hotel, Under Passway, Dawn to Dusk
   - Overlay: white semi-transparent (`rgba(255,255,255,0.89)`) with fade-in on hover
5. **Amazing Works** — Carousel (5 items), light lavender background (#f9f9ff), padding 100px:
   - Section title: "Our Amazing Works" + subtitle "Re-imagining the way"
   - Each item: image thumbnail + centered caption (title + description)
   - Items: "Vector Illustration" × 5
6. **Story Area** — Gradient background, 2-column layout (col-lg-3 + col-lg-6):
   - Left: "Our Untold Story" title + subtitle
   - Right: "From the part of beginning" heading + paragraph + "Get Started" CTA button
7. **Subscription Area** — White background, centered, padding 100px:
   - Title: "Subscribe for our Newsletter"
   - Email input + submit button
8. **Footer Widget Area** — 3-column layout (col-md-4), padding 70px 0 100px:
   - Each: icon circle (gradient bg) + title (uppercase) + description
   - Widgets: Address, Email Address, Phone Number
9. **Footer** — Dark overlay (`rgba(0,0,0,0.25)`), flex layout:
   - Logo left, copyright center, social icons right (Facebook, Twitter, Dribbble)

## Gherkin Requirements

```gherkin
Feature: Zephyrine creative agency template

  Scenario: Page loads with correct layout
    Given I visit the Zephyrine page
    Then I should see a boxed layout centered on the page
    And the body should have a dark textured background

  Scenario: Header displays logo and navigation
    Given I visit the Zephyrine page
    Then I should see a logo in the header
    And I should see navigation links for Home, Generic, and Elements
    And I should see a hamburger menu button

  Scenario: Hero banner shows gradient with headline and CTA
    Given I visit the Zephyrine page
    Then I should see a gradient banner (pink to orange)
    And I should see the subtitle "Re-imagining the way"
    And I should see the headline "We grow money, Guaranteed"
    And I should see a "Get Started" button with arrow icon

  Scenario: Featured area shows three feature cards
    Given I visit the Zephyrine page
    When I scroll to the featured area
    Then I should see three feature cards
    And each card should have an icon, title, and description

  Scenario: Service area shows eight service cards in grid
    Given I visit the Zephyrine page
    When I scroll to the service area
    Then I should see eight service cards in a 4-column grid
    And each card should have an image thumbnail and overlay on hover

  Scenario: Amazing works carousel displays portfolio items
    Given I visit the Zephyrine page
    When I scroll to the amazing works area
    Then I should see a carousel of portfolio items
    And each item should have an image and caption

  Scenario: Story area shows narrative with CTA
    Given I visit the Zephyrine page
    When I scroll to the story area
    Then I should see "Our Untold Story" heading
    And I should see a paragraph and "Get Started" CTA button

  Scenario: Subscription area shows newsletter form
    Given I visit the Zephyrine page
    When I scroll to the subscription area
    Then I should see "Subscribe for our Newsletter" heading
    And I should see an email input and submit button

  Scenario: Footer widgets show contact information
    Given I visit the Zephyrine page
    When I scroll to the footer widget area
    Then I should see three contact widgets (Address, Email, Phone)
    And each widget should have an icon and description

  Scenario: Footer shows copyright and social links
    Given I visit the Zephyrine page
    Then I should see a footer with logo, copyright text, and social icons
    And the footer should link to Component Dock
```

## Verification Checklist

- [ ] Boxed layout (68.75% width centered) with dark textured body background
- [ ] Gradient banner with subtitle, headline, and pill-shaped CTA button
- [ ] 3 feature cards with gradient icon circles
- [ ] 8 service cards in 4-col grid with hover overlay
- [ ] Carousel of 5 portfolio items on light background
- [ ] Story section with gradient background, 2-col layout, CTA
- [ ] Newsletter subscription form
- [ ] 3-column footer widgets with gradient icon circles
- [ ] Dark footer with logo, copyright, social links, Component Dock link
- [ ] Poppins font loaded (weights 300, 500, 600)
- [ ] Brand gradient applied to banners, service area, story area, icons, buttons
- [ ] All sections match original order 1:1
