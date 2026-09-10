# Template: PackWell (Logistics / Freight)

## Purpose

Recreation of ColorLib **Carries** — a logistics and freight services website template.

- **ColorLib source:** https://colorlib.com/wp/template/carries/
- **Live preview:** https://preview.colorlib.com/theme/carries/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/carries-free-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **New app name:** `packwell` (apps/packwell)

## Design Tokens (extracted from preview CSS)

### Colors

| Token          | Hex       | Usage                                  |
| -------------- | --------- | -------------------------------------- |
| brand-primary  | `#0083ff` | Links, hover accents                   |
| brand-accent   | `#f39c12` | CTA buttons, promo highlights, border  |
| dark-bg        | `#3c4a62` | Service catalog top section, footer bg |
| dark-footer    | `#212121` | Footer bottom area                     |
| light-bg       | `#f4f7f9` | Promo top area, alternating sections   |
| gray-bg        | `#f1f1f1` | About area, blog area backgrounds      |
| text-primary   | `#333`    | Body text                              |
| text-secondary | `#585858` | Secondary text                         |
| text-muted     | `#a1a7b2` | Muted/caption text                     |
| white          | `#fff`    | Button text, hero overlays             |

### Typography

- **Font family:** `'Roboto', sans-serif` (Google Fonts)
- **Headings:** bold weight, white on dark backgrounds

### Buttons

- **Primary CTA:** background `#f39c12`, color `#fff`, border `2px solid #f39c12`, border-radius `3px`, padding `12px 30px`
- **Secondary/outline:** border `2px solid #fff`, color `#fff`, transparent background, same border-radius

### Radii

- Buttons: `3px`
- Blog cards: `5px` (image corners)
- Some elements: `0 50px 50px 0` (asymmetric for service labels)
- Icons: `50%` (circular service icons)

### Section Backgrounds

| Section        | Background                                    |
| -------------- | --------------------------------------------- |
| Hero slider    | Full-width background images (dark overlay)   |
| About          | `#f1f1f1` gray                                |
| Service top    | `#3c4a62` dark blue-gray                      |
| Service bottom | `#f4f7f9` light                               |
| Promo top      | `#f4f7f9` light + decorative bg image right   |
| Promo bottom   | Full-width dark image (`promo_bottom_bg.jpg`) |
| Testimonial    | Dark image background                         |
| Newsletter     | White background                              |
| Footer         | `#3c4a62` dark blue-gray, bottom `#212121`    |

## Requirements

### Requirement: Hero section renders with slider and CTAs

Users SHALL see a full-width hero section with background images, a heading "WE MAKE STRONGEST SERVICE ABOVE THE WORLD", description text, and two CTA buttons ("Our Service" and "Get A Quote").

#### Scenario: Hero section loads

- **WHEN** the user visits PackWell
- **THEN** a full-width hero section is visible
- **AND** the heading "WE MAKE STRONGEST SERVICE ABOVE THE WORLD" is displayed
- **AND** a "Get A Quote" button is visible
- **AND** the hero has a dark overlay on the background image

### Requirement: Navbar renders with logo and navigation links

Users SHALL see a sticky navbar with the PackWell logo, navigation links (Home, About, Services, Blog, Contact), and icon buttons (Search, User, Shopping Bag).

#### Scenario: Navbar loads

- **WHEN** the user visits PackWell
- **THEN** the PackWell brand name is displayed
- **AND** navigation links are visible
- **AND** the navbar is sticky on scroll

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu opens
- **AND** when a nav link is clicked the menu closes

### Requirement: Blog/Service cards render with freight types

Users SHALL see three service cards (Ocean Freight, Air Freight, Street Freight) each with an icon, title, description, and Read More link.

#### Scenario: Service cards load

- **WHEN** the user scrolls to the blog cards section
- **THEN** three cards are displayed: Ocean Freight, Air Freight, Street Freight
- **AND** each card has a circular icon, title, and description
- **AND** each card has a Read More link

### Requirement: About section with quote form and stats

Users SHALL see a split layout with a "Get A Quote" form on the left and about content with stats on the right.

#### Scenario: About section loads

- **WHEN** the user scrolls to the about area
- **THEN** the heading "We have 25 years experience in this passion" is visible
- **AND** a Get A Quote form with fields (Name, Email, Phone, Type, Quantity, Destination, Message) is present
- **AND** stats are displayed: 120 Project Done, 100 Happy Clients, 30 Team Members

#### Scenario: Quote form submits

- **WHEN** the user fills in the form and clicks Send
- **THEN** a confirmation message is displayed

### Requirement: Service area with catalog and why choose us

Users SHALL see a dark section with "Our Service" heading, service description, and "Why Choose Us?" feature list, plus four service cards below.

#### Scenario: Service area loads

- **WHEN** the user scrolls to the service area
- **THEN** the heading "Our Service" is displayed
- **AND** a "Why Choose Us?" section with check items is visible
- **AND** four service cards are shown: Ware House, Road Freight, Sea Freight, Air Freight

### Requirement: Promo area with feature highlights and CTA banner

Users SHALL see four feature items (Our Location, Latest News, 24/7 Support, Fast Delivery) and a dark parallax CTA banner.

#### Scenario: Promo area loads

- **WHEN** the user scrolls to the promo area
- **THEN** four feature highlights are displayed with icons
- **AND** a dark CTA banner with "We provide international freight & logistics service worldwide" is visible

### Requirement: Testimonial slider with navigation

Users SHALL see client testimonials with photo dots, prev/next navigation arrows, and the active testimonial quote, name, and role.

#### Scenario: Testimonials load

- **WHEN** the user scrolls to the testimonials section
- **THEN** the heading "What Client's Say" is displayed
- **AND** the first testimonial is shown by default
- **AND** prev/next arrows and photo dots allow navigation

### Requirement: Newsletter subscription form

Users SHALL see a newsletter section with a "Weekly Newsletter" heading, email input, and Subscribe button.

#### Scenario: Newsletter form loads

- **WHEN** the user scrolls to the newsletter section
- **THEN** the heading "Weekly Newsletter" is visible
- **AND** an email input and Subscribe button are present

#### Scenario: Newsletter form submits

- **WHEN** the user enters a valid email and clicks Subscribe
- **THEN** a "Thank you for subscribing" message is displayed

### Requirement: Footer with three columns and Component Dock link

Users SHALL see a footer with three columns (About Us, Latest Tweets, Customer Service), a copyright bar, and a link to https://www.componentdock.com/.

#### Scenario: Footer loads

- **WHEN** the user scrolls to the footer
- **THEN** three columns display: About Us, Latest Tweets, Customer Service
- **AND** a copyright bar is at the bottom
- **AND** a link to Component Dock (https://www.componentdock.com/) is present

## Verification Checklist

- [ ] Hero slider works with multiple slides
- [ ] Navbar is sticky
- [ ] About section matches original layout and colors
- [ ] Service catalog shows 4 service cards in correct layout
- [ ] Promo section renders with correct background treatment
- [ ] Feature highlights render with icons
- [ ] Testimonial slider works
- [ ] Newsletter form is functional (email input + submit)
- [ ] Footer has 3 columns + Component Dock link
- [ ] All design tokens match the ColorLib reference
- [ ] Responsive on mobile/tablet/desktop
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
