# Template: ArtGallery

## Purpose

Recreation of ColorLib **Art Museum** template as a free React museum and art gallery website template.

- Source slug: `art-museum`
- Preview URL: https://preview.colorlib.com/theme/art-museum/ (unreachable — fell back to screenshot analysis)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/artmuseum-free-template-1.jpg
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

| Token                 | Value                       | Notes                                            |
| --------------------- | --------------------------- | ------------------------------------------------ |
| Font family (heading) | `"Playfair Display", serif` | Elegant serif for hero heading, section headings |
| Font family (body)    | `"Poppins", sans-serif`     | Clean sans-serif for body text and navigation    |
| Brand accent          | `#7ec843`                   | Lime green — icons, headings, CTA buttons        |
| Dark navy             | `#1a2b3c`                   | Top bar background, dark sections                |
| Light gray bg         | `#f5f5f5`                   | Info card backgrounds                            |
| Body text             | `#333333`                   | Default paragraph color                          |
| Muted text            | `#777777`                   | Secondary/meta text                              |
| Button radius         | `0` (rectangular)           | Sharp corners on CTA buttons                     |

## Requirements

### Requirement: Top bar with utility links and social icons

The template SHALL display a thin dark navy top bar with utility links and social icons.

#### Scenario: Utility bar renders correctly

- **WHEN** the user loads the page
- **THEN** a thin dark navy top bar is displayed
- **AND** "Visit Us" and "Buy Ticket" links are on the left
- **AND** social icons (Facebook, Twitter, Instagram) are on the right

### Requirement: Transparent navbar with mobile menu

The template SHALL display a transparent navbar overlaid on the hero that becomes solid on scroll, with a mobile hamburger menu.

#### Scenario: Logo and navigation links are visible

- **WHEN** the user loads the page
- **THEN** the navbar is transparent and overlaid on the hero
- **AND** the logo shows a green circle icon with "ArtGallery" text on the left
- **AND** navigation links: Home, About, Gallery, Events, Ticket, Blog, Contact, Pages

#### Scenario: Mobile menu toggle works

- **WHEN** the viewport is below lg breakpoint
- **THEN** the hamburger menu icon is visible
- **AND** clicking it opens the mobile navigation drawer

#### Scenario: Navbar becomes solid on scroll

- **WHEN** the user scrolls past the hero section
- **THEN** the navbar background becomes solid dark

### Requirement: Full-viewport hero with art background

The template SHALL display a full-viewport hero section with an art background image, dark overlay, exhibition heading, and green CTA button.

#### Scenario: Hero displays exhibition announcement and CTA

- **WHEN** the user is on the homepage
- **THEN** a full-viewport hero section shows with a painting/art background image and dark overlay
- **AND** the subheading "Opening on 21st February, 2025" is centered
- **AND** the heading "Exhibition on Modern Era" is displayed in large serif font
- **AND** a description paragraph is shown below the heading
- **AND** a "Get Started" button (lime green, rectangular) is centered

### Requirement: Three info cards with icons

The template SHALL display three info cards in a row on a white background with green icons.

#### Scenario: Info cards render correctly

- **WHEN** the info section is visible
- **THEN** three cards are displayed in a row on white background
- **AND** card 1 shows: clock icon (green), "Opening Hours" heading
- **AND** card 2 shows: rocket icon (green), "Ongoing Exhibitions" heading
- **AND** card 3 shows: calendar icon (green), "Opening Events" heading

### Requirement: Decorative quote section

The template SHALL display a decorative quote with description text.

#### Scenario: Quote renders correctly

- **WHEN** the quote section is visible
- **THEN** a large decorative quote text is displayed
- **AND** a description paragraph is shown to the right of the quote

### Requirement: Image gallery with lightbox

The template SHALL display a grid of artwork images that opens a lightbox overlay on click.

#### Scenario: Gallery grid displays correctly

- **WHEN** the gallery section is visible
- **THEN** a heading "Our Gallery" is shown
- **AND** a grid of artwork images is displayed
- **AND** clicking an image opens a lightbox overlay

### Requirement: Upcoming events section

The template SHALL display upcoming event cards with date, title, description, and location.

#### Scenario: Events render correctly

- **WHEN** the events section is visible
- **THEN** a heading "Upcoming Events" is shown
- **AND** event cards display: date, title, description, location

### Requirement: Ticket pricing section

The template SHALL display ticket pricing cards with features and buy buttons.

#### Scenario: Ticket pricing renders correctly

- **WHEN** the ticket section is visible
- **THEN** ticket information or pricing cards are displayed with prices and features

### Requirement: Blog post previews

The template SHALL display blog post preview cards with image, title, excerpt, and date.

#### Scenario: Blog renders correctly

- **WHEN** the blog section is visible
- **THEN** a heading "Latest News" is shown
- **AND** blog post cards display: image, title, excerpt, date

### Requirement: Contact form and map placeholder

The template SHALL display a contact form with fields and a map placeholder.

#### Scenario: Contact renders correctly

- **WHEN** the contact section is visible
- **THEN** a contact form with fields (name, email, subject, message) is displayed
- **AND** a map placeholder is shown

### Requirement: Dark footer with Component Dock link

The template SHALL display a dark footer with multiple columns, social icons, and a Component Dock link.

#### Scenario: Footer renders correctly

- **WHEN** the user scrolls to the footer
- **THEN** a dark footer is displayed with multiple columns of links
- **AND** social media icons are included
- **AND** a copyright line with "Component Dock" link is at the bottom

#### Scenario: Footer links are accessible

- **WHEN** the footer is visible
- **THEN** all footer links have visible text and are keyboard navigable
