# Template: Pastella (Cake Shop)

## Purpose

Recreation of ColorLib "Cakes" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page site for a bakery / cake shop.

- **ColorLib source:** https://colorlib.com/wp/template/cakes/
- **Preview URL:** https://preview.colorlib.com/theme/cakes/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cakes-colorlib-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, packages/ui shared components
- **Deploy target:** pastella.free.componentdock.com

## Design Tokens

Extracted from the live preview stylesheet (`assets/css/style.css`):

| Token              | Value                  | Usage                                         |
| ------------------ | ---------------------- | --------------------------------------------- |
| Brand primary      | `#F04506` (orange-red) | Buttons, header hover, active states           |
| Brand secondary    | `#A85432` (brown)      | Testimonial card accents                       |
| Brand tertiary     | `#FF9F67` (peach)      | Hover highlights                               |
| Background light   | `#FFF5F2` (blush pink) | Popular items section, services section        |
| Background footer  | `#FFF7F3` (warm white) | Footer area                                   |
| Text dark          | `#1A1A1A` / `#391F14`  | Headings, body text                            |
| Text medium        | `#5E5E5E` / `#635c5c`  | Paragraphs, descriptions                       |
| Text light         | `#777` / `#797979`     | Muted captions                                 |
| Font primary       | `"Quicksand", sans-serif` | Body text, buttons                           |
| Font heading       | `"DM Sans", sans-serif`   | Section headings, slider CTA                 |
| Font accent/script | `"Lobster", cursive`      | "Delicious" hero accent, logo script          |
| Button radius      | `30px` (pill shape)    | All buttons                                    |
| Button shadow      | `0 17px 27px rgba(...)` | Primary CTA buttons                           |

## Visual Design (from screenshot)

Warm-toned bakery site with peach/pink backgrounds. Hero has a full-width slider with cake imagery and script-font "Delicious" accent. Popular items displayed in a 3-column card grid with round "Order Now" buttons. About section is a split layout (image + text). Services section shows 3 feature cards with icons. Video area with play popup. Testimonials carousel. Newsletter signup. Warm, inviting palette throughout.

## Section Structure (in order)

1. **Navbar** — sticky header: logo (left), nav links (Home, Product, About, Blog, Contact), phone number, "Order Online" CTA button. Mobile hamburger menu.
2. **Hero** — full-width slider area with background image, script "Delicious" accent, headline "Delicious Cake For Everyone", description paragraph, "Explore Menu" pill button.
3. **Popular Items** — section heading "Most Popular / Our Exclusive Cakes", 4-column grid of cake cards. Each card: image, cake name, description, price + "Order Now" pill button.
4. **About / Support** — split layout: image left, text right. Heading "Fresh & Delicious / A Simple Way to Eating Delicious", paragraph, "Our Story" pill button.
5. **Features / Services** — section heading "Our Features / Quality is Our First Priority", 3-column grid of service cards. Each: icon, title, description.
6. **Video Area** — dark background section with centered play button (popup video).
7. **Testimonials** — section heading "Testimonial / What Customers Say", carousel of testimonial cards (quote, avatar, name, role).
8. **Newsletter** — email signup form with heading and input + button.
9. **Footer** — 3-column layout: About paragraph, Quick Links, Product links, Contact info (address, phone). Copyright bar at bottom with Component Dock attribution.

## Requirements

### Feature: Pastella — Cake Shop Template

#### Scenario: Navbar displays correctly

- **GIVEN** the user loads the page
- **THEN** a sticky navbar is visible at the top
- **AND** it contains the logo, navigation links (Home, Product, About, Blog, Contact)
- **AND** a phone number and "Order Online" button are shown
- **AND** on mobile (< 992px) a hamburger menu icon appears

#### Scenario: Hero section renders

- **GIVEN** the user loads the page
- **THEN** a full-width hero section is displayed with a background image
- **AND** the script accent word "Delicious" is shown
- **AND** the heading "Delicious Cake For Everyone" is visible
- **AND** a description paragraph is below the heading
- **AND** an "Explore Menu" pill button is present

#### Scenario: Popular Items section displays cake cards

- **GIVEN** the user scrolls to the Popular Items section
- **THEN** the section heading "Most Popular" and subheading "Our Exclusive Cakes" are shown
- **AND** 4 cake cards are displayed in a responsive grid
- **AND** each card shows an image, cake name, short description, and price
- **AND** each card has an "Order Now" pill button

#### Scenario: About section layout

- **GIVEN** the user scrolls to the About section
- **THEN** a split layout is shown: image on the left, text on the right
- **AND** the heading reads "Fresh & Delicious" with subheading "A Simple Way to Eating Delicious"
- **AND** a description paragraph is present
- **AND** an "Our Story" pill button is displayed

#### Scenario: Features section displays services

- **GIVEN** the user scrolls to the Features section
- **THEN** the heading "Our Features / Quality is Our First Priority" is shown
- **AND** 3 service cards are displayed in a row
- **AND** each card has an icon, title, and description

#### Scenario: Video area with play button

- **GIVEN** the user scrolls to the Video section
- **THEN** a dark-background section with a centered play button icon is visible
- **AND** clicking the play button opens a popup/modal (video embed placeholder)

#### Scenario: Testimonials carousel

- **GIVEN** the user scrolls to the Testimonials section
- **THEN** the heading "Testimonial / What Customers Say" is displayed
- **AND** a carousel of testimonial cards is shown
- **AND** each card contains a quote, avatar image, name, and role

#### Scenario: Newsletter signup

- **GIVEN** the user scrolls to the Newsletter section
- **THEN** an email input field and submit button are visible

#### Scenario: Footer renders with links

- **GIVEN** the user scrolls to the Footer
- **THEN** a multi-column footer is shown with About, Quick Links, Product links, and Contact sections
- **AND** the footer includes an address and phone number
- **AND** a copyright bar with "Component Dock" attribution is at the bottom

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile device (< 576px)
- **THEN** the navbar collapses to a hamburger menu
- **AND** the hero text scales down appropriately
- **AND** cake cards stack vertically
- **AND** the about section stacks image above text
- **AND** service cards stack vertically

## Verification checklist

- [ ] All 9 sections present in correct order
- [ ] Navbar: sticky, responsive hamburger, logo, nav links, CTA button
- [ ] Hero: background image, script accent, heading, description, CTA pill
- [ ] Popular Items: 4 cards with image, name, description, price, order button
- [ ] About: split layout (image left, text right), heading, paragraph, CTA
- [ ] Features: 3 service cards with icon, title, description
- [ ] Video: dark section, centered play button
- [ ] Testimonials: carousel with quote, avatar, name, role
- [ ] Newsletter: email input + submit
- [ ] Footer: multi-column links, contact info, copyright with Component Dock
- [ ] Design tokens applied: #F04506 brand, Quicksand/DM Sans/Lobster fonts, 30px pill buttons, #FFF5F2 backgrounds
- [ ] Responsive at 576px, 768px, 992px breakpoints
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images via picsum.photos with deterministic seeds
