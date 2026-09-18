# Soulflow — Yoga & Meditation Studio Template

Recreation of ColorLib "Yogalife" (https://colorlib.com/wp/template/yogalife/).

## Design Tokens

- **Primary accent:** `#87e5da` (teal/mint)
- **Heading font:** Playfair Display (serif)
- **Body font:** Work Sans (sans-serif)
- **Button shape:** pill (border-radius: 30px)
- **Section backgrounds:** white, light gray (`#f8f9fa`)
- **Hero overlay:** `rgba(0,0,0,0.6)`
- **Footer:** dark (#000) with white headings, muted links
- **Dark text:** #000, white text: #fff

## Sections (in order)

1. **Navbar** — Logo "Soulflow", nav links: Home, Yoga Classes (dropdown), Events, About Studio, Contact
2. **Hero Slider** — 2-slide carousel with overlay, captions:
   - "Yoga for everybody" / "Welcome To Soulflow"
   - "Enjoy With Us" / "Yoga & Meditation"
3. **Welcome** — Split layout: image left, text right
   - "Welcome To Soulflow" heading (serif)
   - "Hello there!" caption (teal)
   - Description paragraph
   - "See The Yoga Pricing" pill button
4. **Our Programs** (bg-light) — 3×2 grid of 6 program cards
   - Each: image, title, category, instructor, schedule/difficulty icons
5. **Watch Video** — Video section with play button overlay
6. **Yoga Pricing** — 3-column pricing cards
7. **Yoga Features** — 4 feature cards: Peace of Mind, Mindfulness, Meditation, Yoga Carpet
8. **Our Gallery** — Image grid with lightbox popup
9. **Upcoming Events** — Media-with-text event listings
10. **Testimonials** — "What People Say" slider
11. **Footer** — About, Quick Menu, Ministries, Social Icons, Component Dock link

## Scenarios

### Gherkin

Feature: Soulflow Template
Scenario: Page loads with all sections
When I visit the Soulflow page
Then I see the navbar with "Soulflow" logo
And I see the hero slider
And I see the welcome section
And I see 6 program cards
And I see the video section
And I see the pricing section
And I see the features section
And I see the gallery
And I see upcoming events
And I see testimonials
And I see the footer with Component Dock link

Scenario: Navigation dropdown
When I hover over "Yoga Classes" in the navbar
Then I see a dropdown with class options

Scenario: Mobile menu toggle
Given I am on a mobile viewport
When I click the hamburger menu
Then the mobile navigation opens

Scenario: Pricing cards display
When I scroll to the pricing section
Then I see 3 pricing tiers with prices and feature lists
