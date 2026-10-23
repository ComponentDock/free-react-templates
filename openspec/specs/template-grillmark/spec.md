# Template: Grillmark (Steakhouse Restaurant)

> **Original ColorLib source:** [Steakshop](https://preview.colorlib.com/theme/steakshop/)
> **Preview URL:** https://preview.colorlib.com/theme/steakshop/

## Purpose

Grillmark is a steakhouse restaurant template with a navbar, hero, banner bottom, breakfast, lunch, reservation, chef, food gallery and brands. It recreates the ColorLib **Steakshop** design (https://colorlib.com/wp/template/steakshop/, preview: https://preview.colorlib.com/theme/steakshop/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens

| Token            | Value                                                                                  | Notes              |
| ---------------- | -------------------------------------------------------------------------------------- | ------------------ |
| Heading font     | Pacifico, cursive                                                                      | h1–h6              |
| Body font        | Roboto, sans-serif                                                                     | 14px base          |
| Brand color      | #f42f2c                                                                                | Primary red        |
| Brand light      | #f48464                                                                                | Gradient endpoint  |
| Brand gradient   | linear-gradient(90deg, #f42f2c 0%, #f48464 100%)                                       | Buttons, accents   |
| Heading color    | #222222                                                                                | All headings       |
| Body text color  | #777777                                                                                | Paragraphs, labels |
| Button style     | White bg, red border 1px, border-radius 2px, uppercase, letter-spacing 1px             |
| Button hover     | White text, bg #f42f2c, transparent border, box-shadow 0 20px 20px rgba(244,47,44,0.1) |
| Reservation card | White bg, padding 70px 50px, box-shadow, inputs bottom-border only                     |
| Footer           | Dark bg with overlay, 5-column grid                                                    |
| Main title       | Centered, margin-bottom 75px, h1 font-size 36px                                        |

## Sections

1. **Navbar** — Responsive top navigation with site logo, nav links (Home, About, Breakfast, Lunch, Reservation, Chef, Gallery, Contact), and a hamburger menu on mobile.
2. **Hero** — Full-screen background image with dark overlay, tagline text, and call-to-action button.
3. **BannerBottom** — Overlapping banner below hero with video play icon, headline "Premium cuts, expertly crafted", and "Explore Menu" CTA.
4. **Breakfast** — Two-column layout: left side with heading, description text, and details; right side with overlapping food images.
5. **Lunch** — Two-column layout: left side with overlapping images; right side with heading, description, and a chef testimonial (avatar, name, title).
6. **Reservation** — Background image with a centered white card containing a reservation form (Name, Email, Phone, People, Date/Time, Event type, submit button).
7. **Chef** — Large chef image on the left with text and signature on the right; four small circular food thumbnails overlapping the chef area.
8. **FoodGallery** — Horizontal scrolling carousel of food images with navigation arrows.
9. **Brands** — "In association with" heading followed by a row of partner brand logos (text-based with opacity).
10. **Footer** — Five-column layout (Top Products, Quick Links, Features, Resources, Newsletter), bottom bar with copyright, Component Dock link, and social icons (Facebook, Twitter, Dribbble, Behance).

## Requirements

### Navbar

Feature: Navbar

#### Scenario: Renders the site name and navigation links

- **GIVEN** the Grillmark page is loaded
- **THEN** the "Grillmark" logo link is visible
- **AND** the navigation links "Home", "About", "Breakfast", "Lunch", "Reservation", "Chef", "Gallery", "Contact" are visible

#### Scenario: Opens and closes the mobile hamburger menu

- **GIVEN** the Grillmark page is loaded
- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu is visible
- **WHEN** the user clicks the close button
- **THEN** the mobile navigation menu is not visible

### Hero

Feature: Hero

#### Scenario: Displays the hero headline and call-to-action

- **GIVEN** the Grillmark page is loaded
- **THEN** the hero headline "Premium cuts, expertly crafted" is visible
- **AND** the "Explore Menu" call-to-action button is visible

#### Scenario: Shows the background image

- **GIVEN** the Grillmark page is loaded
- **THEN** a background image is displayed with an accessible name

### BannerBottom

Feature: BannerBottom

#### Scenario: Shows the video play icon and headline

- **GIVEN** the Grillmark page is loaded
- **THEN** the banner headline "Premium cuts, expertly crafted" is visible
- **AND** the video play button is visible
- **AND** the "Explore Menu" link is visible

### Breakfast

Feature: Breakfast

#### Scenario: Displays the breakfast section heading and description

- **GIVEN** the Grillmark page is loaded
- **THEN** the breakfast heading "Daily Food Courses with Drinks" is visible
- **AND** the breakfast description text is visible

#### Scenario: Shows food images

- **GIVEN** the Grillmark page is loaded
- **THEN** food images are displayed in the breakfast section

### Lunch

Feature: Lunch

#### Scenario: Displays the lunch section heading and description

- **GIVEN** the Grillmark page is loaded
- **THEN** the lunch heading is visible
- **AND** the lunch description text is visible

#### Scenario: Shows the chef testimonial

- **GIVEN** the Grillmark page is loaded
- **THEN** the chef testimonial avatar image is visible
- **AND** the chef name "Walter White" is visible
- **AND** the chef title "Head Chef" is visible

### Reservation

Feature: Reservation

#### Scenario: Displays the reservation form

- **GIVEN** the Grillmark page is loaded
- **THEN** the reservation form is visible
- **AND** the "Name" input field is visible
- **AND** the "Email" input field is visible
- **AND** the "Phone" input field is visible
- **AND** the "Number of People" select is visible
- **AND** the "Date" input is visible
- **AND** the "Time" input is visible
- **AND** the "Event" select is visible
- **AND** the "Make Reservation" button is visible

#### Scenario: Shows validation error for empty submission

- **GIVEN** the Grillmark page is loaded
- **WHEN** the user clicks the "Make Reservation" button
- **THEN** a validation error message is displayed

#### Scenario: Shows success message on valid submission

- **GIVEN** the Grillmark page is loaded
- **WHEN** the user fills in valid reservation details
- **AND** the user clicks the "Make Reservation" button
- **THEN** a success confirmation message is displayed

### Chef

Feature: Chef

#### Scenario: Displays the chef section content

- **GIVEN** the Grillmark page is loaded
- **THEN** the chef image is visible
- **AND** the chef section heading is visible
- **AND** the chef signature text is visible

#### Scenario: Shows the food thumbnails

- **GIVEN** the Grillmark page is loaded
- **THEN** four food thumbnail images are visible in the chef section

### FoodGallery

Feature: FoodGallery

#### Scenario: Displays the food gallery carousel

- **GIVEN** the Grillmark page is loaded
- **THEN** the food gallery section heading is visible
- **AND** food gallery images are displayed
- **AND** left and right navigation arrows are visible

#### Scenario: Scrolls the gallery with navigation arrows

- **GIVEN** the Grillmark page is loaded
- **WHEN** the user clicks the right arrow
- **THEN** the gallery scrolls right
- **WHEN** the user clicks the left arrow
- **THEN** the gallery scrolls left

### Brands

Feature: Brands

#### Scenario: Displays the brands section

- **GIVEN** the Grillmark page is loaded
- **THEN** the "In association with" heading is visible
- **AND** brand partner logos are displayed

### Footer

Feature: Footer

#### Scenario: Displays footer columns and links

- **GIVEN** the Grillmark page is loaded
- **THEN** the footer shows "Top Products" column
- **AND** the footer shows "Quick Links" column
- **AND** the footer shows "Features" column
- **AND** the footer shows "Resources" column
- **AND** the footer shows "Newsletter" column

#### Scenario: Newsletter subscription form works

- **GIVEN** the Grillmark page is loaded
- **WHEN** the user enters a valid email in the newsletter field
- **AND** the user clicks the subscribe button
- **THEN** a subscription confirmation is displayed

#### Scenario: Footer contains Component Dock link

- **GIVEN** the Grillmark page is loaded
- **THEN** a link to "https://www.componentdock.com/" labeled "Component Dock" is visible in the footer

#### Scenario: Footer social icons are visible

- **GIVEN** the Grillmark page is loaded
- **THEN** the Facebook, Twitter, Dribbble, and Behance social icons are visible in the footer

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/grillmark/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/grillmark/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar — the "Grillmark" logo link is visible
- [x] Hero — the hero headline "Premium cuts, expertly crafted" is visible
- [x] BannerBottom — the banner headline "Premium cuts, expertly crafted" is visible
- [x] Breakfast — the breakfast heading "Daily Food Courses with Drinks" is visible
- [ ] Lunch — the lunch heading is visible
- [ ] Reservation — the reservation form is visible
- [ ] Chef — the chef image is visible
- [ ] FoodGallery — the food gallery section heading is visible
- [x] Brands — the "In association with" heading is visible
