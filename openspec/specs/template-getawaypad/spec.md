# Template: GetawayPad (Vacation Rental / Apartment)

## Purpose

Recreation of ColorLib's **Vacation Rental** apartment booking template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/vacation-rental/
- **Preview (analyzed):** https://preview.colorlib.com/theme/vacationrental/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/vacationrental-free-template.jpg
- **Package:** `@free-react-templates/getawaypad`
- **Surge target:** `https://getawaypad.free.componentdock.com`

## Design Tokens

Extracted from the preview's `css/style.css`:

| Token               | Value                                         | Usage                                           |
| ------------------- | --------------------------------------------- | ----------------------------------------------- |
| Brand / primary     | `#fd7792`                                     | Buttons, star ratings, price text, icon circles |
| Background light    | `#f3f4f7`                                     | Alternating section backgrounds (`.bg-light`)   |
| Service icon circle | `#a3cb4c`                                     | Green circle on service cards                   |
| Text dark           | `#000000`                                     | Headings, strong text                           |
| Text body           | `#666666`                                     | Paragraph copy, secondary text                  |
| Font family         | `Poppins, Arial, sans-serif`                  | Global body + headings                          |
| Button radius       | `4px`                                         | All `.btn` elements                             |
| Button style        | uppercase, letter-spacing 3px, font-size 11px | All CTA buttons                                 |
| Card shadow         | `0px 10px 27px -9px rgba(0,0,0,0.11)`         | Service cards, room cards                       |
| Card border-radius  | `5px`                                         | Service card `.services-wrap`                   |
| Hero overlay        | semi-transparent dark on parallax bg          | Hero section                                    |

## Section Structure (order from preview DOM)

1. **Top Bar** — phone number + email + social media icons (Facebook, Twitter, Instagram)
2. **Navbar** — dark background, logo "GetawayPad" (word "Pad" highlighted in brand color), nav links: Home, About, Services, Apartment Room, Blog, Contact, hamburger for mobile
3. **Hero** — full-viewport-height with parallax background image, dark overlay, centered-left text: subheading "Welcome to GetawayPad", heading "Rent an apartment for your vacation", two buttons: "Learn more" (primary pink) + "Contact us" (white outline)
4. **Book Your Apartment** — form section with fields: Full Name, Check-In (date), Check-Out (date), Adults (select), Children (select), Phone number, Time, "Book Apartment Now" submit button
5. **Services** — 3-column service cards with image header, title, paragraph, and "Read more" button (Map Direction, Accommodation Services, Great Experience)
6. **Apartment Rooms** — 2×2 grid of room cards, each with: background image, 5-star rating, room name (Suite Room, Standard Room, Family Room, Deluxe Room), amenity list (Max, Size, View, Bed), "View Room Details" link
7. **Testimonials** — "Happy Clients & Feedbacks" heading, testimonial cards with: user circular avatar, quote icon, paragraph, author name + position
8. **CTA Intro** — full-width parallax background with overlay (call-to-action banner): "Ready to get started" heading + "Book now" / "Contact us" buttons
9. **Blog** — 3-column blog entries, each with: background image, title, date + author + comment count, short paragraph
10. **Footer** — 4-column: Logo + description, Services list, Tag cloud, Subscribe form (email + submit) + Social links (Twitter, Facebook, Instagram), copyright + Terms/Privacy links + Component Dock link

## Requirements

### Requirement: Top Bar Contact Info

The template SHALL display a top bar with phone number, email address, and social media icons (Facebook, Twitter, Instagram).

#### Scenario: Contact info displays

- **WHEN** the user is on any page
- **THEN** a top bar shows phone number "+00 1234 567" and email "emailsample@email.com"
- **AND** social media icons (Facebook, Twitter, Instagram) are visible

### Requirement: Navbar Navigation

The template SHALL display a sticky dark navbar with the logo "GetawayPad" (with "Pad" in brand color) and navigation links.

#### Scenario: Logo and navigation display

- **WHEN** the user is on any page
- **THEN** the logo "GetawayPad" is visible (with "Pad" in brand color)
- **AND** navigation links "Home", "About", "Services", "Apartment Room", "Blog", "Contact" are visible

#### Scenario: Mobile hamburger menu

- **WHEN** the viewport is mobile width (< 768px)
- **THEN** a hamburger menu icon is visible
- **AND** clicking it opens a slide-in mobile menu with all nav links

### Requirement: Hero Section

The template SHALL display a full-viewport-height hero with parallax background, dark overlay, heading, and two CTA buttons.

#### Scenario: Hero displays with booking CTA

- **WHEN** the user lands on the page
- **THEN** a full-viewport-height hero with parallax background is displayed
- **AND** the subheading "Welcome to GetawayPad" is shown
- **AND** the heading "Rent an apartment for your vacation" is displayed
- **AND** two buttons appear: "Learn more" (primary) and "Contact us" (white outline)

### Requirement: Booking Form

The template SHALL display a booking form with 7 input fields and a submit button.

#### Scenario: Booking form displays

- **WHEN** the user scrolls to the booking section
- **THEN** a form with "Book your apartment" heading is displayed
- **AND** fields for Full Name, Check-In, Check-Out, Adults, Children, Phone, Time are visible
- **AND** a "Book Apartment Now" submit button is present

### Requirement: Services Section

The template SHALL display 3 service cards in a row with image, title, description, and CTA button.

#### Scenario: Three service cards display

- **WHEN** the user scrolls past the booking form
- **THEN** three service cards appear in a row
- **AND** each has an image, title ("Map Direction", "Accommodation Services", "Great Experience"), paragraph, and "Read more" button

### Requirement: Apartment Rooms

The template SHALL display 4 room cards in a 2×2 grid with alternating image/text layout.

#### Scenario: Four room cards display

- **WHEN** the user scrolls to the rooms section
- **THEN** an "Apartment Room" heading is shown
- **AND** four room cards are displayed in a 2×2 grid
- **AND** each card shows 5-star rating, room name, amenity list, and "View Room Details" link

#### Scenario: Room cards alternate layout

- **WHEN** the rooms section is visible
- **THEN** the first row shows image on left, text on right
- **AND** the second row shows text on left, image on right

### Requirement: Testimonials

The template SHALL display testimonials with circular avatars, quote icons, and author info.

#### Scenario: Testimonials display

- **WHEN** the user scrolls to testimonials
- **THEN** "Happy Clients & Feedbacks" heading is shown
- **AND** testimonial cards appear with circular avatars, quote icons, paragraph text, author name, and position

### Requirement: CTA Banner

The template SHALL display a full-width parallax CTA banner with overlay.

#### Scenario: CTA banner displays

- **WHEN** the user scrolls past testimonials
- **THEN** a full-width parallax banner with overlay is shown
- **AND** "Ready to get started" heading is displayed
- **AND** "Book now" and "Contact us" buttons are present

### Requirement: Blog Section

The template SHALL display 3 blog cards in a row with image, title, meta info, and excerpt.

#### Scenario: Three blog entries display

- **WHEN** the user scrolls to the blog section
- **THEN** three blog cards appear in a row
- **AND** each has a background image, title, date, author, comment count, and paragraph

### Requirement: Footer

The template SHALL display a 4-column footer with logo, services, tag cloud, subscribe form, social links, and copyright.

#### Scenario: Footer layout

- **WHEN** the user scrolls to the footer
- **THEN** four columns are shown: Logo + description, Services list, Tag cloud, Subscribe form
- **AND** social media links (Twitter, Facebook, Instagram) are visible
- **AND** a copyright line with Terms and Privacy links is at the bottom

#### Scenario: Newsletter subscribe form

- **WHEN** the footer is visible
- **THEN** an email input with placeholder "Enter email address" is displayed
- **AND** a paper-plane submit button is present

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is visible
- **THEN** a link to https://www.componentdock.com/ is present with text "Component Dock"

## Verification Checklist

- [ ] All sections present in correct order matching preview DOM
- [ ] Brand color `#fd7792` applied to buttons, stars, price, icon circles
- [ ] Font Poppins applied globally
- [ ] Buttons have 4px border-radius, uppercase, letter-spacing 3px
- [ ] Hero is full viewport height with parallax bg and dark overlay
- [ ] Booking form has 7 fields + submit button
- [ ] Services section has 3 cards with image + title + CTA
- [ ] Room cards in 2×2 grid with alternating image/text layout
- [ ] Testimonials have circular avatars, quote icons
- [ ] CTA banner has parallax background
- [ ] Blog has 3 cards with meta info
- [ ] Footer is 4-column with subscribe form and social links
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in app code
- [ ] All images use picsum.photos placeholders (deterministic seeds)
- [ ] Mobile responsive: hamburger menu, stacked columns
- [ ] 100% test coverage
