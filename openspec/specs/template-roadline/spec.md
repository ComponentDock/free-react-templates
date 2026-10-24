# Template: Roadline (Logistics & Transportation)
<!-- prep-status: shipped-as=packwell -->
> **SHIPPED-UNDER** — the ColorLib `carries` design this prep describes already
> ships as `apps/packwell` (<https://packwell.free.componentdock.com>).
> Do not scaffold `apps/roadline`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-packwell/spec.md`.

## Purpose

Recreation of the ColorLib "Carries" template — a transportation and logistics
agency website. The original is a multi-page Bootstrap template; this recreation
is a single-page React app matching the home page structure.

- **Source:** https://colorlib.com/wp/template/carries/
- **Preview:** https://preview.colorlib.com/theme/carries/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript · packages/ui

## Design Tokens

Extracted from the live preview's `style.css` on 2025-09-11.

| Token            | Value                             | Usage                                     |
| ---------------- | --------------------------------- | ----------------------------------------- |
| Font family      | Roboto, sans-serif                | Body + headings (Google Fonts)            |
| Brand / accent   | `#f39c12`                         | Buttons, links, icons, highlights         |
| Heading color    | `#3c4a62`                         | h1–h6 headings                            |
| Body text        | `#687284`                         | Paragraphs, body copy                     |
| Link / nav color | `#5d6b82`                         | Anchors, dark-bg base                     |
| Gray background  | `#f7f9fc`                         | Alternate section backgrounds             |
| Dark background  | `#5d6b82`                         | Footer, dark-bg sections                  |
| Orange solid     | `#f39c12`                         | Full CTA buttons                          |
| Hero overlay     | `#3c4147` at 90%                  | Dark overlay on hero slider background    |
| Button shape     | border-radius: 3px                | Hero CTA buttons, pill for circular icons |
| Button border    | 2px solid white → orange on hover | Hero CTAs                                 |
| Circular icons   | border-radius: 50%                | Social icons, promo feature icons         |
| Section padding  | 100px top/bottom                  | `.section-padding` utility                |

## Section Structure (home page, top to bottom)

1. **Navbar** — fixed-top, logo left, nav links right (Home, About, Service, Blog, Contact), utility icons (user, search, bag, language select). Semi-transparent dark background that becomes solid on scroll.
2. **Hero Slider** — full-width carousel (2+ slides), dark overlay on background image, centered text: headline + subtitle + two CTA buttons ("Our Service", "Get A Quote") with white-bordered, rounded buttons turning orange on hover.
3. **Freight Services (3 cards)** — gray background, 3-column grid. Each card: image on top, icon in circle, title (Ocean Freight, Air Freight, Street Freight), short description, "Read More" link. Cards have subtle hover animation (fadeInUp).
4. **About / Quote** — gray background, 2-column layout. Left: "Get A Quote" form (name, email, phone, type, quantity, destination, message, submit button). Right: "25 years experience" heading, paragraph, "Read More" link, 3 stat counters (120 Projects, 100 Happy Clients, 30 Team Members) with icons.
5. **Service Area** — white background, centered section title ("Our Service"), 3-column grid with service cards (icon + title + description). Below: 2-column layout — left side: "Why Choose Us?" accordion list; right side: large image. Dark overlay background with 4 stat boxes (Warehouse, Road Freight, Sea Freight, Air Freight).
6. **Promo / Features** — 3-column grid. Each column has 2 feature items: circular icon (orange on light bg), title, description. Items: Our Location, Latest News, 24/7 Support, Fast Delivery, plus more. Below: full-width parallax CTA bar with dark bg, headline about international freight, two CTA buttons.
7. **Testimonials** — section title ("What Client's Say"), carousel/slider of testimonials. Each: client name (e.g. "JABIN KANE"), testimonial text, star rating, avatar.
8. **Footer** — dark background (#5d6b82). Top: newsletter subscribe (email input + button). Bottom: 4-column grid — About Us (text + contact info), Latest Tweets, Customer Service links, Instagram feed (grid of 6 images). Copyright bar at very bottom.

## Requirements

### Feature: Hero Section

#### Scenario: Hero displays headline and CTA buttons

- **GIVEN** the visitor loads the home page
- **THEN** the hero section shows a headline "WE MAKE STRONGEST SERVICE ABOVE THE WORLD"
- **AND** two CTA buttons are visible: "Our Service" and "Get A Quote"
- **AND** both buttons have a white border and rounded corners

#### Scenario: Hero CTA buttons change color on hover

- **GIVEN** the visitor hovers over a hero CTA button
- **THEN** the button background becomes orange (#f39c12)
- **AND** the button text becomes white

### Feature: Navigation

#### Scenario: Navbar contains expected links

- **GIVEN** the visitor loads the home page
- **THEN** the navbar shows links: Home, About, Service, Blog, Contact
- **AND** utility icons are visible: user, search, bag, language selector

#### Scenario: Navbar becomes solid on scroll

- **GIVEN** the visitor scrolls down the page
- **THEN** the navbar background becomes solid (no longer transparent)

### Feature: Freight Services

#### Scenario: Three freight service cards are displayed

- **GIVEN** the visitor scrolls to the freight section
- **THEN** 3 service cards are shown in a grid
- **AND** each card has an image, icon, title, description, and "Read More" link
- **AND** the section has a gray background (#f7f9fc)

### Feature: About & Quote Form

#### Scenario: Quote form has all required fields

- **GIVEN** the visitor views the about section
- **THEN** a "Get A Quote" form is visible with fields: Name, Email, Phone, Type, Quantity, Destination, Message
- **AND** a "Send" submit button is present

#### Scenario: Stats counters display correctly

- **GIVEN** the visitor views the about section
- **THEN** 3 stat counters are shown: 120 Projects Done, 100 Happy Clients, 30 Team Members

### Feature: Service Area

#### Scenario: Services section shows service cards and stats

- **GIVEN** the visitor scrolls to the services section
- **THEN** a "Our Service" heading is displayed
- **AND** service cards are shown in a grid
- **AND** a "Why Choose Us?" section is visible
- **AND** 4 stat boxes are shown: Warehouse, Road Freight, Sea Freight, Air Freight

### Feature: Promo Features

#### Scenario: Feature items are displayed in a grid

- **GIVEN** the visitor scrolls to the features section
- **THEN** 6+ feature items are shown in a 2-column-per-row grid
- **AND** each item has a circular orange icon, title, and description
- **AND** a parallax CTA bar appears below with international freight headline

### Feature: Testimonials

#### Scenario: Testimonials carousel works

- **GIVEN** the visitor scrolls to the testimonials section
- **THEN** a "What Client's Say" heading is displayed
- **AND** a testimonial slider shows client names and quotes

### Feature: Footer

#### Scenario: Footer has newsletter and info columns

- **GIVEN** the visitor scrolls to the footer
- **THEN** a newsletter signup is visible with email input and "subscribe" button
- **AND** 4 info columns are shown: About Us, Latest Tweets, Customer Service, Instagram feed
- **AND** the footer links to https://www.componentdock.com/

#### Scenario: Footer has correct dark background

- **GIVEN** the visitor views the footer
- **THEN** the footer background is dark blue-gray (#5d6b82)
- **AND** text is white

## Verification checklist

- [ ] Hero section renders with slider, headline, and two CTA buttons
- [ ] Navbar has all links and utility icons, becomes solid on scroll
- [ ] Freight services section: 3 cards on gray background
- [ ] About section: quote form + stat counters side-by-side
- [ ] Service area: cards grid + Why Choose Us + 4 stat boxes
- [ ] Promo/features: circular icon grid + parallax CTA bar
- [ ] Testimonials: carousel with client names and quotes
- [ ] Footer: newsletter bar, 4-column info, Component Dock link
- [ ] All design tokens match (Roboto font, #f39c12 accent, #5d6b82 dark bg, #f7f9fc gray bg)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Placeholder images use picsum.photos/seed/roadline-*
- [ ] Tests pass with 100% coverage
