# Havenshore — Hotel & Resort Landing Template

## Purpose

Recreate the ColorLib "Ochean de View" hotel/resort landing template as a React application
under the name "Havenshore", matching the original's section order, layout, and design tokens.

Original: https://colorlib.com/wp/template/ocheandeview/
Preview: https://preview.colorlib.com/theme/ocheandeview/

### Design Tokens

- **Fonts:** "Cormorant Garamond" (headings), "Raleway" (body)
- **Brand/Theme:** olive-sage #85856D
- **Dark:** near-black #16161a
- **Heading text:** dark brown #3C3A34
- **Body text:** muted brown #94817E
- **Light section bg:** #FAFAF8
- **Button primary:** sage/khaki #B8B8A0 (hover: white bg, sage border)
- **Footer:** dark #16161a background
- **Section padding:** 120px top/bottom

## Requirements

### Requirement: Navbar renders with transparent header, logo, phone, and Book Now CTA

The navbar SHALL display a transparent sticky header with the logo text "Havenshore",
a phone number, a "Book Now" CTA button, and a hamburger menu icon for mobile.

#### Scenario: Desktop navbar shows logo and CTA

- **WHEN** the page loads on a wide viewport
- **THEN** the navbar shows "Havenshore" logo text, phone number, and "Book Now" link

#### Scenario: Mobile hamburger toggles menu

- **WHEN** the user clicks the hamburger menu button
- **THEN** a mobile navigation panel appears with nav links
- **WHEN** the user clicks the close button
- **THEN** the mobile navigation panel is removed

#### Scenario: Clicking a mobile nav link closes the menu

- **WHEN** the mobile menu is open and the user clicks a nav link
- **THEN** the mobile navigation panel closes

### Requirement: Hero section displays heading, tagline, and scroll arrow

The hero section SHALL display a full-width background image with overlay,
the heading "Havenshore", a tagline about going offline, and a down-arrow link.

#### Scenario: Hero renders heading and tagline

- **WHEN** the page loads
- **THEN** a heading "Havenshore" is visible
- **AND** the tagline "go offline" text is visible

### Requirement: Booking form with date inputs, guest select, and submit button

The booking form SHALL display check-in and check-out date inputs, a guest count
dropdown, and a "Check Availability" submit button.

#### Scenario: Booking form has all fields

- **WHEN** the page loads
- **THEN** "Check In", "Check Out", and "Guest" labels are visible
- **AND** a "Check Availability" button is visible

#### Scenario: Form submission is prevented

- **WHEN** the user clicks "Check Availability"
- **THEN** the page does not reload

### Requirement: Video intro section with heading, description, and play button

The video intro SHALL display a heading "The shelter is the Outcome of the Dream",
descriptive paragraphs, and a video play button overlay.

#### Scenario: Video intro renders heading

- **WHEN** the page loads
- **THEN** a heading containing "shelter is the Outcome" is visible

### Requirement: Pampering section with heading and description

The pampering section SHALL display the heading "Pampering Included" and descriptive text.

#### Scenario: Pampering renders heading

- **WHEN** the page loads
- **THEN** a heading "Pampering Included" is visible

### Requirement: About features section with three alternating image-text rows

The about features section SHALL display a heading "Joyful experiences for you and your family"
and three feature rows: "A world-class restaurant", "Swimming Pool", and "Party Center",
each with an image and descriptive text.

#### Scenario: Features render all three items

- **WHEN** the page loads
- **THEN** headings for "restaurant", "Swimming Pool", and "Party Center" are visible

### Requirement: Testimonials section with quote cards

The testimonials section SHALL display the heading "Hear what our past guests have to say"
and testimonial cards with quotes, author names, and roles.

#### Scenario: Testimonials render heading and cards

- **WHEN** the page loads
- **THEN** a heading containing "past guests" is visible
- **AND** author names are visible

### Requirement: Instagram gallery strip

The instagram gallery SHALL display a horizontal strip of images with Instagram icon overlays.

#### Scenario: Instagram images render

- **WHEN** the page loads
- **THEN** multiple Instagram images are visible in a horizontal layout

### Requirement: Footer with Component Dock link

The footer SHALL display a dark background, logo, navigation links, contact info,
social icons, and a copyright line linking to https://www.componentdock.com/.

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** a link to "https://www.componentdock.com/" is visible in the footer

#### Scenario: Footer has social links

- **WHEN** the page loads
- **THEN** Instagram, Facebook, and LinkedIn social links are visible

### Requirement: Accessibility landmarks and semantics

The template SHALL use semantic HTML landmarks and accessible names.

#### Scenario: Landmarks are present

- **WHEN** the page loads
- **THEN** banner, main, and contentinfo landmarks are present
