# Template: Pastella (Cake Shop)

## Purpose

Recreation of ColorLib **Cakes** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page site for a bakery / cake shop.

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

## Gherkin Requirements

### Feature: Pastella — Cake Shop Template

#### Scenario: Navbar displays correctly
- **Given** the user loads the page
- **Then** a sticky navbar is visible at the top
- **And** it contains the logo, navigation links (Home, Product, About, Blog, Contact)
- **And** a phone number and "Order Online" button are shown
- **And** on mobile (< 992px) a hamburger menu icon appears

#### Scenario: Hero section renders
- **Given** the user loads the page
- **Then** a full-width hero section is displayed with a background image
- **And** the script accent word "Delicious" is shown
- **And** the heading "Delicious Cake For Everyone" is visible
- **And** a description paragraph is below the heading
- **And** an "Explore Menu" pill button is present

#### Scenario: Popular Items section displays cake cards
- **Given** the user scrolls to the Popular Items section
- **Then** the section heading "Most Popular" and subheading "Our Exclusive Cakes" are shown
- **And** 4 cake cards are displayed in a responsive grid
- **And** each card shows an image, cake name, short description, and price
- **And** each card has an "Order Now" pill button

#### Scenario: About section layout
- **Given** the user scrolls to the About section
- **Then** a split layout is shown: image on the left, text on the right
- **And** the heading reads "Fresh & Delicious" with subheading "A Simple Way to Eating Delicious"
- **And** a description paragraph is present
- **And** an "Our Story" pill button is displayed

#### Scenario: Features section displays services
- **Given** the user scrolls to the Features section
- **Then** the heading "Our Features / Quality is Our First Priority" is shown
- **And** 3 service cards are displayed in a row
- **And** each card has an icon, title, and description

#### Scenario: Video area with play button
- **Given** the user scrolls to the Video section
- **Then** a dark-background section with a centered play button icon is visible
- **And** clicking the play button opens a popup/modal (video embed placeholder)

#### Scenario: Testimonials carousel
- **Given** the user scrolls to the Testimonials section
- **Then** the heading "Testimonial / What Customers Say" is displayed
- **And** a carousel of testimonial cards is shown
- **And** each card contains a quote, avatar image, name, and role

#### Scenario: Newsletter signup
- **Given** the user scrolls to the Newsletter section
- **Then** an email input field and submit button are visible

#### Scenario: Footer renders with links
- **Given** the user scrolls to the Footer
- **Then** a multi-column footer is shown with About, Quick Links, Product links, and Contact sections
- **And** the footer includes an address and phone number
- **And** a copyright bar with "Component Dock" attribution is at the bottom

#### Scenario: Responsive layout
- **Given** the user views the page on a mobile device (< 576px)
- **Then** the navbar collapses to a hamburger menu
- **And** the hero text scales down appropriately
- **And** cake cards stack vertically
- **And** the about section stacks image above text
- **And** service cards stack vertically

## Verification Checklist

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
