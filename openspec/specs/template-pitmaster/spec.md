# Template: Pitmaster (Restaurant — Steakhouse)

## Purpose

Recreation of ColorLib "Steakshop" — a steakhouse restaurant single-page website with a dramatic hero, alternating food sections, reservation form, chef feature, image gallery, brand carousel, and dark-overlay footer.

- **Source:** https://colorlib.com/wp/template/steakshop/
- **Preview:** https://preview.colorlib.com/theme/steakshop/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **App folder:** `apps/pitmaster`
- **Package:** `@free-react-templates/pitmaster`

## Design Tokens

| Token | Value | Notes |
|---|---|---|
| heading-font | `Pacifico` (cursive) | Google Fonts `<link>` |
| body-font | `Roboto` (sans-serif) | 400/500 weights |
| brand-red | `#f42f2c` | Primary CTA, button hover, form accents |
| brand-red-end | `#f48464` | Gradient end for CTA backgrounds |
| heading-color | `#222222` | All h1–h6 |
| body-color | `#777777` | Paragraph text |
| text-dark | `#000000` | Nav links, footer overlay |
| border-light | `#eeeeee` | Form bottom borders, dividers |
| bg-white | `#ffffff` | Banner content card, form card |
| footer-overlay | `rgba(0,0,0,0.75)` | Footer dark overlay |
| button-radius | `2px` | Sharp rectangle buttons |
| section-padding | `150px 0` (80px mobile) | Standard section gap |
| font-size-heading | `36px–42px` | h1 in sections and banner |

## Requirements

### Feature: Pitmaster template behaviour

#### Scenario: Navbar renders with fixed sidebar layout

- **GIVEN** the page loads
- **WHEN** the user sees the navigation
- **THEN** a fixed right-side vertical sidebar nav is visible (desktop)
- **AND** a hamburger menu trigger appears on small screens (<1920px)
- **AND** nav items include: Home, About, Menu, Book Table, Chefs, Pages, Blog, Contact
- **AND** nav link text is Roboto 12px, capitalize, black (#000)
- **AND** active state shows red (#f42f2c) background

#### Scenario: Hero banner displays full-screen background with video popup

- **GIVEN** the page loads
- **WHEN** the hero section renders
- **THEN** a full-screen background image covers the viewport
- **AND** a dark overlay (rgba(0,0,0,0.2)) sits over the image
- **AND** a video play button (circular, pulsing animation) appears at bottom-left with text "Watch video"
- **AND** a white banner content card overlaps the hero bottom

#### Scenario: Banner bottom card shows headline and CTA

- **GIVEN** the hero section is visible
- **WHEN** the banner bottom card renders
- **THEN** a white background card contains the top text "STEAK SHOP OFFERS BEST STEAK IN TOWN" (uppercase, letter-spacing)
- **AND** a heading h1 in Pacifico, 42px, #222222
- **AND** descriptive paragraph text in Roboto, #777777
- **AND** an "Explore Menu" primary button (border 1px solid #f42f2c, border-radius 2px, white bg, hover → red bg)

#### Scenario: Breakfast section shows text and image side by side

- **GIVEN** the page loads
- **WHEN** the breakfast section renders
- **THEN** left side has heading "Daily Food Courses with Drinks" in Pacifico
- **AND** two paragraph texts in Roboto
- **AND** a "See Full Menu" primary button
- **AND** right side shows two overlapping food images (picsum placeholder)

#### Scenario: Lunch section mirrors breakfast with chef attribution

- **GIVEN** the page loads
- **WHEN** the lunch section renders
- **THEN** layout is reversed (images left, text right)
- **AND** heading "Daily Food Courses with Drinks" in Pacifico
- **AND** two paragraph texts
- **AND** a chef attribution row with avatar thumbnail, name, and title
- **AND** images use overlapping layout (positioned absolute)

#### Scenario: Reservation section has background image with form card

- **GIVEN** the page loads
- **WHEN** the reservation section renders
- **THEN** a background image covers the section
- **AND** a white form card with box-shadow overlays the right side
- **AND** form fields: Name, Email, Phone Number, Number of People (select), Date/Time, Event (select)
- **AND** form input borders are #eeeeee bottom border only
- **AND** a "Make Reservation" button (primary style)
- **AND** form field focus removes outline

#### Scenario: Chef section features a chef photo and item thumbnails

- **GIVEN** the page loads
- **WHEN** the chef section renders
- **THEN** a large chef photo appears left of center
- **AND** right side has heading, two paragraphs, and a signature image
- **AND** below, a row of 4 small food item thumbnails (hover → lightbox popup)

#### Scenario: Food gallery renders as image carousel

- **GIVEN** the page loads
- **WHEN** the gallery section renders
- **THEN** a full-width carousel of food images displays
- **AND** images fill the full viewport width (fluid)
- **AND** carousel auto-scrolls (owl-carousel style)

#### Scenario: Brands section shows partner logos in carousel

- **GIVEN** the page loads
- **WHEN** the brands section renders
- **THEN** a heading "In associasion with" centered with description text
- **AND** a carousel of partner brand logos (5 logos, horizontally scrolling)
- **AND** each logo is vertically centered in its cell

#### Scenario: Footer has dark overlay with columns

- **GIVEN** the page loads
- **WHEN** the footer renders
- **THEN** a dark overlay (#000, 75% opacity) covers a background image
- **AND** four columns: Top Products, Resources, Newsletter, and a wider Newsletter column
- **AND** newsletter has email input + arrow button
- **AND** footer bottom has copyright text and social icons (Facebook, Twitter, Dribbble, Behance)
- **AND** footer links section MUST include Component Dock attribution (per conventions)

## Verification Checklist

- [ ] All sections render in correct order: Hero → Banner Bottom → Breakfast → Lunch → Reservation → Chef → Gallery → Brands → Footer
- [ ] Pacifico font loaded for headings, Roboto for body
- [ ] Brand red (#f42f2c) used for buttons, accents, form hover states
- [ ] Buttons have 2px border-radius, sharp rectangle style
- [ ] Hero has full-screen background image with dark overlay
- [ ] Banner content card overlaps hero (negative margin)
- [ ] Reservation form has card with box-shadow on background image
- [ ] Footer has dark overlay (75% black) over background image
- [ ] Footer links to Component Dock (no ColorLib reference)
- [ ] All images use picsum.photos/seed/pitmaster-N placeholders
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
