# Soulflow — Yoga & Meditation Studio Template

Recreation of ColorLib "Yogalife" (https://colorlib.com/wp/template/yogalife/).

## Purpose

Soulflow is a yoga & meditation studio template with a navbar, hero slider, welcome, our programs, watch video, yoga pricing and yoga features. It recreates the ColorLib **Yogalife** design (https://colorlib.com/wp/template/yogalife/, preview: https://preview.colorlib.com/theme/yogalife/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

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

## Requirements

### Gherkin

Feature: Soulflow Template

#### Scenario: Page loads with all sections

- **WHEN** I visit the Soulflow page
- **THEN** I see the navbar with "Soulflow" logo
- **AND** I see the hero slider
- **AND** I see the welcome section
- **AND** I see 6 program cards
- **AND** I see the video section
- **AND** I see the pricing section
- **AND** I see the features section
- **AND** I see the gallery
- **AND** I see upcoming events
- **AND** I see testimonials
- **AND** I see the footer with Component Dock link

#### Scenario: Navigation dropdown

- **WHEN** I hover over "Yoga Classes" in the navbar
- **THEN** I see a dropdown with class options

#### Scenario: Mobile menu toggle

- **GIVEN** I am on a mobile viewport
- **WHEN** I click the hamburger menu
- **THEN** the mobile navigation opens

#### Scenario: Pricing cards display

- **WHEN** I scroll to the pricing section
- **THEN** I see 3 pricing tiers with prices and feature lists
