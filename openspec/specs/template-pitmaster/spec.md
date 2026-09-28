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

## Gherkin Requirements

### Scenario: Navbar renders with fixed sidebar layout
- **Given** the page loads
- **When** the user sees the navigation
- **Then** a fixed right-side vertical sidebar nav is visible (desktop)
- **And** a hamburger menu trigger appears on small screens (<1920px)
- **And** nav items include: Home, About, Menu, Book Table, Chefs, Pages, Blog, Contact
- **And** nav link text is Roboto 12px, capitalize, black (#000)
- **And** active state shows red (#f42f2c) background

### Scenario: Hero banner displays full-screen background with video popup
- **Given** the page loads
- **When** the hero section renders
- **Then** a full-screen background image covers the viewport
- **And** a dark overlay (rgba(0,0,0,0.2)) sits over the image
- **And** a video play button (circular, pulsing animation) appears at bottom-left with text "Watch video"
- **And** a white banner content card overlaps the hero bottom

### Scenario: Banner bottom card shows headline and CTA
- **Given** the hero section is visible
- **When** the banner bottom card renders
- **Then** a white background card contains the top text "STEAK SHOP OFFERS BEST STEAK IN TOWN" (uppercase, letter-spacing)
- **And** a heading h1 in Pacifico, 42px, #222222
- **And** descriptive paragraph text in Roboto, #777777
- **And** an "Explore Menu" primary button (border 1px solid #f42f2c, border-radius 2px, white bg, hover → red bg)

### Scenario: Breakfast section shows text and image side by side
- **Given** the page loads
- **When** the breakfast section renders
- **Then** left side has heading "Daily Food Courses with Drinks" in Pacifico
- **And** two paragraph texts in Roboto
- **And** a "See Full Menu" primary button
- **And** right side shows two overlapping food images (picsum placeholder)

### Scenario: Lunch section mirrors breakfast with chef attribution
- **Given** the page loads
- **When** the lunch section renders
- **Then** layout is reversed (images left, text right)
- **And** heading "Daily Food Courses with Drinks" in Pacifico
- **And** two paragraph texts
- **And** a chef attribution row with avatar thumbnail, name, and title
- **And** images use overlapping layout (positioned absolute)

### Scenario: Reservation section has background image with form card
- **Given** the page loads
- **When** the reservation section renders
- **Then** a background image covers the section
- **And** a white form card with box-shadow overlays the right side
- **And** form fields: Name, Email, Phone Number, Number of People (select), Date/Time, Event (select)
- **And** form input borders are #eeeeee bottom border only
- **And** a "Make Reservation" button (primary style)
- **And** form field focus removes outline

### Scenario: Chef section features a chef photo and item thumbnails
- **Given** the page loads
- **When** the chef section renders
- **Then** a large chef photo appears left of center
- **And** right side has heading, two paragraphs, and a signature image
- **And** below, a row of 4 small food item thumbnails (hover → lightbox popup)

### Scenario: Food gallery renders as image carousel
- **Given** the page loads
- **When** the gallery section renders
- **Then** a full-width carousel of food images displays
- **And** images fill the full viewport width (fluid)
- **And** carousel auto-scrolls (owl-carousel style)

### Scenario: Brands section shows partner logos in carousel
- **Given** the page loads
- **When** the brands section renders
- **Then** a heading "In associasion with" centered with description text
- **And** a carousel of partner brand logos (5 logos, horizontally scrolling)
- **And** each logo is vertically centered in its cell

### Scenario: Footer has dark overlay with columns
- **Given** the page loads
- **When** the footer renders
- **Then** a dark overlay (#000, 75% opacity) covers a background image
- **And** four columns: Top Products, Resources, Newsletter, and a wider Newsletter column
- **And** newsletter has email input + arrow button
- **And** footer bottom has copyright text and social icons (Facebook, Twitter, Dribbble, Behance)
- **And** footer links section MUST include Component Dock attribution (per conventions)

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
