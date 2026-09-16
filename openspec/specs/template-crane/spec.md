# Spec: Crane — Construction Company Landing Template

## Purpose

Recreate the ColorLib "Constructo" construction company landing page as a modern
React 19 + Tailwind CSS 4 + TypeScript single-page template named "Crane". The
template provides a full-featured construction company website with header,
hero slider, features, about, services, gallery, why-choose-us, testimonials,
contact CTA, and footer sections.

**Source:** https://colorlib.com/wp/template/constructo/
**Preview:** https://preview.colorlib.com/theme/constructo/

## Design Tokens (extracted from preview CSS)

- **Font:** Raleway (Google Fonts, weights 200–800)
- **Brand color (primary):** #F0542C (orange) — buttons, accents
- **Dark overlay:** #001D38 (navy) — hero overlay, CTA banner, footer bg
- **Heading color:** #001D38 (navy)
- **Body text:** #596672 (gray)
- **Secondary text:** #707070
- **White:** #fff
- **Button style:** .boxed-btn3 — orange bg, white text, rounded, padding 10px 28px
- **Overlay opacity:** 0.5 on hero/CTA sections

## Sections (in order)

1. **TopBar** — Opening hours text left, "Get a Quote" button right (desktop only)
2. **Navbar** — Logo left, nav links center (Home, About, Services, Projects, Blog, Contact), search icon right. Sticky on scroll.
3. **Hero** — Full-width carousel with dark overlay, centered heading "We Build Your Home Secure and Safe", subtext, "Our Services" CTA button
4. **Features** — 3-column grid: Creative Plan & Design, Talented Peoples, Modern Tools. Each with icon + title + description
5. **About** — Split layout: image left with decorative pattern, text right with heading, two paragraphs, "About Us" button. Bordered container.
6. **Services** — Section title "Our Services", carousel of service cards: each with image, title, description, "More" link with arrow
7. **Gallery** — Filter buttons (All, Architecture, Buildings, Bridges), 4x2 grid of project images with hover overlay showing title + arrow link
8. **Why Choose Us** — Split: left has video popup button + quote text, right has heading + description + play button
9. **Testimonials** — Section title, carousel of testimonial cards: avatar, name, role, quote text
10. **Contact CTA** — Dark overlay banner: "Are you looking for a Construction and Industrial Experts?" heading + "Contact Us" button
11. **Footer** — 4-column: About (address + social links), Popular Searches, Useful Links, Subscribe (email form). Bottom bar with Component Dock credit.

## Requirements

### Requirement: All sections render in correct order

The template SHALL display 11 sections in the correct order: TopBar, Navbar, Hero, Features, About, Services, Gallery, WhyChooseUs, Testimonials, ContactCTA, Footer.

#### Scenario: Page loads with all sections

- **GIVEN** the page loads
- **THEN** all 11 sections are visible in the correct order

### Requirement: TopBar displays opening hours and CTA

The TopBar SHALL display "Opening Hours: 10:00 AM – 7:00 PM" on the left and a "Get a Quote" button on the right (desktop only).

#### Scenario: TopBar renders on desktop

- **GIVEN** the viewport is desktop (≥1024px)
- **THEN** the opening hours text is visible
- **AND** the "Get a Quote" button is visible

### Requirement: Navbar displays navigation links

The navbar SHALL display Home, About, Services, Projects, Blog, and Contact links plus a search icon.

#### Scenario: Navbar renders all navigation items

- **GIVEN** the navbar is rendered
- **THEN** Home, About, Services, Projects, Blog, Contact links are visible
- **AND** a search icon button is present

### Requirement: Hero displays heading and CTA

The hero section SHALL display a heading "We Build Your Home Secure and Safe", subtext, and an "Our Services" CTA button over a background image with dark overlay.

#### Scenario: Hero renders heading and button

- **GIVEN** the hero section is visible
- **THEN** the heading text is present
- **AND** the "Our Services" button is visible

### Requirement: Features section shows 3 feature cards

The features section SHALL display three feature cards in a row: "Creative Plan & Design", "Talented Peoples", and "Modern Tools", each with an icon, title, and description.

#### Scenario: All three features render

- **GIVEN** the features section is visible
- **THEN** three feature cards are displayed
- **AND** each card has an icon, title, and description text

### Requirement: About section shows split layout

The about section SHALL display an image on the left and text content on the right including a heading, two paragraphs, and an "About Us" button.

#### Scenario: About section renders with content

- **GIVEN** the about section is visible
- **THEN** an image is displayed on the left
- **AND** a heading "We Serve all of your Construction Services" is visible
- **AND** an "About Us" button is present

### Requirement: Services section shows service cards

The services section SHALL display a section title "Our Services" and a row of service cards each with an image, title, description, and "More" link.

#### Scenario: Services render with cards

- **GIVEN** the services section is visible
- **THEN** the "Our Services" heading is displayed
- **AND** at least 3 service cards are visible

### Requirement: Gallery section shows filterable project grid

The gallery section SHALL display filter buttons (All, Architecture, Buildings, Bridges) and a grid of project images with hover overlay.

#### Scenario: Gallery renders with filter buttons

- **GIVEN** the gallery section is visible
- **THEN** filter buttons for All, Architecture, Buildings, Bridges are present
- **AND** project images are displayed in a grid

### Requirement: Why Choose Us section shows content

The Why Choose Us section SHALL display a heading, quote text, description, and a video play button on the left, with supporting content.

#### Scenario: Why Choose Us renders

- **GIVEN** the Why Choose Us section is visible
- **THEN** a "Why Choose Us?" heading is present
- **AND** a play button icon is visible

### Requirement: Testimonials section shows testimonial cards

The testimonials section SHALL display a section title "Testimonials" and testimonial cards with avatar, name, role, and quote.

#### Scenario: Testimonials render

- **GIVEN** the testimonials section is visible
- **THEN** the "Testimonials" heading is displayed
- **AND** at least one testimonial card with name and quote is visible

### Requirement: Contact CTA banner displays

The contact CTA SHALL display a dark overlay banner with heading text and a "Contact Us" button.

#### Scenario: Contact CTA renders

- **GIVEN** the contact CTA section is visible
- **THEN** a heading about construction experts is visible
- **AND** a "Contact Us" button is present

### Requirement: Footer links to Component Dock

The footer SHALL display four columns (About, Popular Searches, Useful Links, Subscribe) and a bottom bar with a link to https://www.componentdock.com/.

#### Scenario: Footer renders with Component Dock link

- **GIVEN** the footer is visible
- **THEN** four footer columns are present
- **AND** a link to componentdock.com is visible with text mentioning "Component Dock"
