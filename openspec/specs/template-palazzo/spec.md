# Template: Palazzo (Hotel & Resort)
<!-- prep-status: shipped-as=retreat -->
> **SHIPPED-UNDER** — the ColorLib `roberto` design this prep describes already
> ships as `apps/retreat` (<https://retreat.free.componentdock.com>).
> Do not scaffold `apps/palazzo`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-retreat/spec.md`.

## Purpose

Recreation of ColorLib's **Roberto** — a hotel & resort website template.

- **Source slug:** `roberto`
- **ColorLib URL:** https://colorlib.com/wp/template/roberto/
- **Preview URL:** https://preview.colorlib.com/theme/roberto/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Hospitality / Hotel & Resort
- **Source design:** ColorLib "Roberto" — https://colorlib.com/wp/template/roberto/

## Design tokens (extracted from live preview)

| Token               | Value                         | Notes                                   |
| ------------------- | ----------------------------- | --------------------------------------- |
| Brand color         | `#1cc3b2`                     | Teal/mint green — buttons, accents      |
| Heading color       | `#2a303b`                     | Dark blue-gray for headings             |
| Body text           | `#636a76`                     | Gray paragraph text                     |
| Dark overlay        | `rgba(14, 39, 55, 0.7)`      | `#0e2737` at 70% alpha                 |
| Dark bg             | `#0e2737`                     | Used in header / dark sections          |
| Light bg            | `#e8f1f8`                     | Soft blue-gray section backgrounds      |
| Border              | `#ebebeb`                     | Light gray borders                      |
| Placeholder text    | `#afb4bf`                     | Muted gray for input placeholders       |
| White               | `#ffffff`                     | Buttons, nav text on dark               |
| Font family         | `Poppins, sans-serif`         | Google Fonts, weights 400–700           |
| Button radius       | `2px`                         | Slight rounding on `.roberto-btn`       |
| Button variant      | `2px solid #1cc3b2` border    | Transparent bg, teal border (`.btn-2`)  |
| Button hover        | bg `#1cc3b2`, text `#ffffff`  | Fills on hover                          |
| Section padding     | `100px 0`                     | Standard section rhythm                 |
| Overlay images      | bg-img + bg-overlay classes   | Dark semi-transparent overlay on images |

## Requirements

### Feature: Palazzo template behaviour

#### Scenario: Header displays navigation and contact info

Feature: Header

#### Scenario: Top header shows contact details and social links

- **GIVEN** I visit the Palazzo homepage
- **THEN** I see a phone number "(123) 456-789-1230"
- **AND** I see an email "info.colorlib@gmail.com"
- **AND** I see social icons for Facebook, Twitter, TripAdvisor, Instagram

#### Scenario: Main navigation shows menu items

- **GIVEN** I visit the Palazzo homepage
- **THEN** I see navigation links: Home, Rooms, About Us, Pages, News, Contact
- **AND** I see a "Book Now" button in the navigation

#### Scenario: Mobile hamburger menu toggles navigation

- **GIVEN** I visit the Palazzo homepage on a mobile viewport
- **WHEN** I click the hamburger menu icon
- **THEN** the navigation menu becomes visible
- **AND** the hamburger icon changes to a close icon

#### Scenario: Hero section shows rotating slides

Feature: Hero / Welcome Area

#### Scenario: Hero displays a carousel of welcome slides

- **GIVEN** I visit the Palazzo homepage
- **THEN** I see a full-width hero section with a background image
- **AND** I see the text "Hotel & Resort" as a subtitle
- **AND** I see "Welcome To Palazzo" as the main heading
- **AND** I see a "Discover Now" button with transparent border

#### Scenario: Hero slides auto-rotate

- **GIVEN** I visit the Palazzo homepage
- **WHEN** I wait for the carousel interval
- **THEN** the hero slide transitions to the next slide

#### Scenario: Hotel search form

Feature: Hotel Search Form

#### Scenario: Search form displays date and guest fields

- **GIVEN** I visit the Palazzo homepage
- **THEN** I see a "Check In" date input
- **AND** I see a "Check Out" date input
- **AND** I see a "Room" select dropdown
- **AND** I see an "Adult" select dropdown
- **AND** I see a "Children" select dropdown
- **AND** I see a "Check Availability" button

#### Scenario: Form fields are interactive

- **GIVEN** I visit the Palazzo homepage
- **WHEN** I select a check-in date
- **THEN** the check-in field updates to show the selected date

#### Scenario: About Us section

Feature: About Us

#### Scenario: About section shows hotel description with images

- **GIVEN** I visit the Palazzo homepage
- **THEN** I see an "About Us" section heading
- **AND** I see "Welcome to Palazzo Hotel Luxury" as the title
- **AND** I see a description paragraph about the hotel group
- **AND** I see a manager name "Michen Taylor"
- **AND** I see a signature image
- **AND** I see a 2x2 image grid on the right side

#### Scenario: Services section

Feature: Services

#### Scenario: Services display five amenity cards in a row

- **GIVEN** I visit the Palazzo homepage
- **THEN** I see a services section with 5 items
- **AND** the services are: Transportation, Travel Service, Spa Relaxation, Restaurant, Bar & Drink
- **AND** each service has an icon image and label

#### Scenario: Rooms carousel

Feature: Rooms

#### Scenario: Rooms section shows a carousel of room cards

- **GIVEN** I visit the Palazzo homepage
- **THEN** I see a rooms section with a carousel
- **AND** each room slide shows a background image on the left
- **AND** each room slide shows a room name, price per day, and feature list
- **AND** each room has features: Size, Capacity, Bed, Services
- **AND** each room has a "View Details" button

#### Scenario: Room carousel navigates between rooms

- **GIVEN** I visit the Palazzo homepage
- **WHEN** I click the next arrow in the rooms carousel
- **THEN** the next room slide becomes active

#### Scenario: Testimonials section

Feature: Testimonials

#### Scenario: Testimonials show guest reviews with ratings

- **GIVEN** I visit the Palazzo homepage
- **THEN** I see a "Testimonials" section heading
- **AND** I see "Our Guests Love Us" as the title
- **AND** I see an image carousel on the left
- **AND** I see testimonial quotes with 5-star ratings on the right
- **AND** each testimonial shows a name and role

#### Scenario: Projects/Gallery carousel

Feature: Projects Gallery

#### Scenario: Projects section shows image slides with hover effects

- **GIVEN** I visit the Palazzo homepage
- **THEN** I see a projects/gallery carousel
- **AND** each slide shows a full-width background image
- **AND** each slide has a category label and title overlay
- **AND** hovering reveals a description and "Discover Now" button

#### Scenario: Blog/News section

Feature: Blog

#### Scenario: Blog section shows three post cards

- **GIVEN** I visit the Palazzo homepage
- **THEN** I see a "Latest News" section heading
- **AND** I see 3 blog post cards in a row
- **AND** each card shows a thumbnail image, date, category tag, title, excerpt, and an arrow button

#### Scenario: Call to Action section

Feature: Call to Action

#### Scenario: CTA section shows contact prompt with background image

- **GIVEN** I visit the Palazzo homepage
- **THEN** I see a CTA section with a background image and dark overlay
- **AND** I see "Contact us now!" as the heading
- **AND** I see a phone number for booking
- **AND** I see a "Contact Now" button

#### Scenario: Partners section

Feature: Partners

#### Scenario: Partners section shows logos in a row

- **GIVEN** I visit the Palazzo homepage
- **THEN** I see a partners section with 5 partner logo images
- **AND** the logos are evenly spaced in a horizontal row

#### Scenario: Footer

Feature: Footer

#### Scenario: Footer shows contact info, blog links, nav links, and newsletter

- **GIVEN** I visit the Palazzo homepage
- **THEN** I see a footer with 4 columns
- **AND** the first column has a logo, phone, email, and address
- **AND** the second column has "Our Blog" with 2 recent posts
- **AND** the third column has "Links" with About Us, Our Room, Career, FAQs
- **AND** the fourth column has "Subscribe Newsletter" with an email input and submit button

#### Scenario: Footer copyright and social links

- **GIVEN** I visit the Palazzo homepage
- **THEN** I see a copyright notice in the footer
- **AND** I see social icons (Facebook, Twitter, Instagram, LinkedIn) in the footer
- **AND** the footer links to https://www.componentdock.com/

## Verification checklist

- [ ] All 11 sections present in correct order: Header → Hero → Search Form → About → Services → Rooms → Testimonials → Projects → Blog → CTA → Partners → Footer
- [ ] Brand color `#1cc3b2` used for buttons, accents, hover states
- [ ] Font: Poppins (Google Fonts link in `index.html`)
- [ ] Hero: full-width background images with dark overlay, centered text, "Discover Now" button
- [ ] Search form: 5 fields (check-in, check-out, room, adult, children) + submit button
- [ ] About: split layout — left text, right 2x2 image grid
- [ ] Services: 5 icon+label cards in a horizontal row
- [ ] Rooms: carousel with room thumbnail, price, feature list, CTA button
- [ ] Testimonials: split layout — left image carousel, right testimonial carousel with star ratings
- [ ] Projects: carousel with hover overlay effect
- [ ] Blog: 3-column post cards with image, date, category, title, excerpt
- [ ] CTA: background image with overlay, heading, phone number, button
- [ ] Partners: 5 logo images in a row
- [ ] Footer: 4-column layout (contact, blog, links, newsletter) + copyright + social icons
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images via `https://picsum.photos/seed/palazzo-<n>/<w>/<h>`
- [x] Package: `@free-react-templates/palazzo` in `apps/palazzo` — superseded: shipped as `apps/retreat`
