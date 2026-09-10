# Musecraft — Creative Digital Agency Landing

Recreation of ColorLib "Boxus" (https://colorlib.com/wp/template/boxus/).

## Purpose

Deliver a faithful React recreation of the ColorLib Boxus creative digital agency
landing page under the name "Musecraft". The template features a dark navy
design with green, yellow, and pink accent sections, fixed navbar, hero,
services grid, portfolio masonry, team cards, blog + testimonials, video offer,
skill progress bars, and contact form. Footer links Component Dock.

## Design tokens (extracted from preview CSS)

| Token          | Value                                                 | Usage                          |
| -------------- | ----------------------------------------------------- | ------------------------------ |
| Background     | #221C5A                                               | Page + all section backgrounds |
| Green accent   | #32DB8A                                               | Services section title pill    |
| Yellow accent  | #FFBA42                                               | Portfolio/video section pill   |
| Pink accent    | #E64B77                                               | About/contact section pill     |
| White          | #FFFFFF                                               | Section headings, nav links    |
| Muted text     | #5B5881                                               | Footer text                    |
| Body dark text | #23214C                                               | Light backgrounds (none here)  |
| Fonts          | Montserrat (headings), Roboto (body), PT Serif (desc) |

## Requirements

### Requirement: Navbar with navigation links

The page SHALL display a fixed top navbar with brand name "Musecraft" and
links to all sections: Home, Services, Portfolio, About, News, Skills, Contact.

#### Scenario: Navbar renders all links

- **WHEN** the page loads
- **THEN** the navbar shows the Musecraft brand and all 7 navigation links

#### Scenario: Mobile menu toggle

- **WHEN** the mobile toggle button is clicked
- **THEN** the mobile navigation menu opens
- **AND** clicking it again closes the menu

### Requirement: Hero section with headline

The hero section SHALL display the headline "We Craft Awesome Web And Graphic Design Solutions"
with a subtitle and call-to-action button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the hero shows the main heading with highlighted "Graphic Design Solutions" text
- **AND** a "Discover More" button links to #services

### Requirement: Services section with 8 service cards

The services section SHALL display 8 service items (Branding, Mobile Apps, Web,
Graphic, Services, PSD, HTML, PHP) with icons and descriptions.

#### Scenario: Services renders all cards

- **WHEN** the services section loads
- **THEN** 8 service cards are displayed with icons and descriptions

### Requirement: Portfolio section with project grid

The portfolio section SHALL display a 2x2 grid of portfolio items with hover
overlay and a "Load More" button.

#### Scenario: Portfolio renders grid and load more

- **WHEN** the portfolio section loads
- **THEN** 4 portfolio items are displayed in a grid
- **AND** a "Load More" button is visible

### Requirement: Crafters/Team section

The crafters section SHALL display team member cards with names, roles, and
descriptions for Robert Williams, John Doe, and John Doe.

#### Scenario: Team members display

- **WHEN** the crafters section loads
- **THEN** 3 team member cards are shown with names and roles

### Requirement: Stories/Blog section with testimonials

The stories section SHALL display 4 blog post items and 3 testimonials.

#### Scenario: Blog and testimonials render

- **WHEN** the stories section loads
- **THEN** 4 blog items are displayed with authors and categories
- **AND** 3 testimonials are shown with quotes and attribution

### Requirement: Offer section with video and features

The offer section SHALL display a video feature area and a grid of 7 feature items.

#### Scenario: Offer renders video and features

- **WHEN** the offer section loads
- **THEN** a video player placeholder with play button is shown
- **AND** 7 feature items are displayed in a grid

### Requirement: Expertise section with skill progress bars

The expertise section SHALL display 4 skill bars (HTML 81%, CSS 93%, PSD 72%,
Design 99%) with animated progress fills.

#### Scenario: Skills render with correct percentages

- **WHEN** the expertise section loads
- **THEN** 4 skill bars are shown with labels and percentage values

### Requirement: Contact section with form

The contact section SHALL display a form with Name, Email, Subject, Message
fields and a "Send Message" submit button.

#### Scenario: Contact form renders

- **WHEN** the contact section loads
- **THEN** a form with 4 input fields and a submit button is shown

### Requirement: Footer with Component Dock link

The footer SHALL link to https://www.componentdock.com/ branded as
"Component Dock". It SHALL NOT contain any ColorLib attribution.

#### Scenario: Footer shows Component Dock link

- **WHEN** the footer renders
- **THEN** a "Component Dock" link points to https://www.componentdock.com/
- **AND** no ColorLib text or links appear in the app
