# Template: GymFlow (Fitness / Gym)

## Purpose

GymFlow is a single-page gym/fitness landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Gymlife" free
template (source: https://colorlib.com/wp/template/gymlife/, preview:
https://preview.colorlib.com/theme/gymlife/), built under a DIFFERENT name
(**GymFlow**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 gym template using Muli + Oswald Google Fonts.
It has a dark-themed, high-contrast aesthetic with an orange (`#f36100`) accent
color throughout. The page features a sticky nav header, a full-width hero with
overlay text, a "Why Choose Us" feature grid, a classes showcase, a dark CTA
banner, a pricing table, a photo gallery grid, a team section, a contact form,
and a dark footer with social links.

## Design Tokens

| Token          | Value                              | Source                        |
| -------------- | ---------------------------------- | ----------------------------- |
| Brand color    | `#f36100` (vibrant orange)        | `css/style.css` — btn, accents |
| Text primary   | `#111111`                          | Body text                     |
| Text secondary | `#a9a9a9`                          | Muted text, subheadings       |
| Text light     | `#fff` / `#ffffff`                 | On dark backgrounds           |
| Background dark| `#000000`, `#0a0a0a`, `#252525`   | Banner, footer, sections      |
| Heading font   | `"Oswald", sans-serif`             | Headings, buttons, nav        |
| Body font      | `"Muli", sans-serif`               | Body text, paragraphs        |
| Button radius  | `60px` (pill)                      | `.btn-normal`                 |
| Button bg      | `#f36100`                          | Primary CTA buttons           |
| Button hover   | `#f36100` background, darker       | Hover state                   |
| Section bg     | Alternating white / dark (`#0a0a0a`)| `spad` = white, dark = banner/footer |
| Social icons   | Font Awesome (fa-facebook, etc.)   | Footer social links           |

## Visual Description (from TEMPLATES.md screenshot + live preview)

Dark, bold gym aesthetic. Black/dark backgrounds dominate with bright orange
(`#f36100`) accents on CTAs, pricing highlights, and section dividers. Hero is
a full-width dark image with centered white text overlay. Section titles use
large Oswald uppercase headings with a thin orange underline accent. The
classes section shows cards with gym images and hover overlays. The pricing
section has three-column cards with the middle one highlighted. The gallery is
a masonry-style image grid. The footer is dark with a multi-column layout
(address, links, newsletter form, social icons).

## Requirements

### Header / Navigation

#### Scenario: Sticky header with logo and navigation links

- **GIVEN** the user loads the GymFlow page
- **THEN** a header is visible with the logo on the left
- **AND** navigation links include Home, About, Classes, Schedule, Pricing, Team, Contact
- **AND** the header becomes sticky on scroll
- **AND** a hamburger menu icon appears on mobile viewports

### Hero Section

#### Scenario: Full-width hero banner with CTA

- **GIVEN** the user loads the GymFlow page
- **THEN** a full-width hero section is displayed
- **AND** it contains a headline text centered on a dark overlay image
- **AND** a call-to-action button styled with brand color #f36100 and pill shape (border-radius 60px)
- **AND** the CTA button has white text on orange background

### Why Choose Us Section

#### Scenario: Feature grid showing gym advantages

- **GIVEN** the user scrolls to the Why Choose Us section
- **THEN** 4 feature items are displayed in a grid
- **AND** each feature has an icon, a title, and a short description
- **AND** the section has a white background
- **AND** the section title uses Oswald font with an orange underline

### Classes Section

#### Scenario: Gym class showcase cards

- **GIVEN** the user scrolls to the Classes section
- **THEN** class cards are displayed in a responsive grid
- **AND** each card shows a class image, class name, and a brief description
- **AND** cards have a hover overlay effect
- **AND** the section has a white background with spad padding

### Banner / CTA Section

#### Scenario: Dark full-width CTA banner

- **GIVEN** the user scrolls past the Classes section
- **THEN** a full-width dark banner section is displayed
- **AND** it contains a motivational headline and a CTA button
- **AND** the background is a dark image with overlay
- **AND** the button uses the brand orange color

### Pricing Section

#### Scenario: Three-column pricing table

- **GIVEN** the user scrolls to the Pricing section
- **THEN** 3 pricing cards are displayed side by side
- **AND** each card shows a plan name, price, and a list of features
- **AND** one card (the recommended plan) is highlighted with the brand orange color
- **AND** each card has a "Join Now" button
- **AND** the section has a white background

### Gallery Section

#### Scenario: Photo gallery grid

- **GIVEN** the user scrolls to the Gallery section
- **THEN** a grid of gym photos is displayed
- **AND** images are arranged in a multi-column masonry layout
- **AND** images have hover effects (e.g., zoom or overlay)
- **AND** the section has a dark background

### Team Section

#### Scenario: Team member showcase

- **GIVEN** the user scrolls to the Team section
- **THEN** team member cards are displayed
- **AND** each card shows a photo, name, and role/title
- **AND** social media icons are shown below each member
- **AND** the section has a white background

### Contact / Get In Touch Section

#### Scenario: Contact form and info

- **GIVEN** the user scrolls to the Get In Touch section
- **THEN** a contact form is displayed with fields for name, email, subject, and message
- **AND** a "Send Message" button is present with brand orange styling
- **AND** contact information (address, phone, email) is displayed alongside the form

### Footer

#### Scenario: Dark footer with multi-column layout

- **GIVEN** the user scrolls to the bottom of the page
- **THEN** a dark footer section is displayed
- **AND** it contains columns for About text, Quick Links, and a Newsletter signup
- **AND** social media icons are visible
- **AND** a copyright line with Component Dock attribution is present

## Verification Checklist

- [ ] Header: sticky on scroll, responsive hamburger menu, Oswald font nav
- [ ] Hero: full-width dark image overlay, centered white text, orange pill CTA
- [ ] Why Choose Us: 4-item feature grid, icons, white bg, Oswald headings
- [ ] Classes: card grid with images, hover overlays, white bg
- [ ] Banner: dark full-width CTA, motivational text, orange button
- [ ] Pricing: 3-column cards, highlighted middle plan, feature lists
- [ ] Gallery: masonry image grid, dark bg, hover effects
- [ ] Team: member cards with photos, names, roles, social icons
- [ ] Contact: form + info side by side, orange CTA button
- [ ] Footer: dark, multi-column, newsletter form, social links, copyright
- [ ] Design tokens: #f36100 brand, Oswald headings, Muli body, 60px pill buttons
- [ ] Responsive: all sections stack properly on mobile
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
