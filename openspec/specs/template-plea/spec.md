# Template: Plea (Counseling / Legal Services)

## Purpose

A Counseling / Legal Services template with top, hero, intro feature boxes, how it works, about and services sections. Recreation of ColorLib's **Counselor** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/counselor/
- **Preview:** https://preview.colorlib.com/theme/counselor/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/counselor-free-template.jpg
- **New name:** `plea` (app: `apps/plea`, package: `@free-react-templates/plea`)
- **Surge target:** `https://plea.free.componentdock.com`

### Design tokens (extracted from live preview CSS `css/style.css`)

| Token                 | Value                         | Usage                                                |
| --------------------- | ----------------------------- | ---------------------------------------------------- |
| Brand color           | `#589167` (green)             | Primary buttons, accent highlights, icon backgrounds |
| Text primary          | `#1a1a1a`                     | Headings, body text                                  |
| Text secondary        | `#6c757d`                     | Subtitles, muted copy                                |
| Background white      | `#ffffff`                     | Main content sections                                |
| Background warm       | `#f5f4f0`                     | Alternating section backgrounds (warm off-white)     |
| Background light gray | `#f7f7f7`                     | Light sections (pricing)                             |
| Footer background     | `#1a1a1a` (dark)              | Footer area                                          |
| Top bar background    | `#589167` (green)             | Phone/email bar                                      |
| Navbar background     | `#1a1a1a` (dark)              | Sticky navigation                                    |
| Font family           | `"Roboto", Arial, sans-serif` | All text (weights 300, 400, 500, 700)                |
| Button border-radius  | `0px` (sharp/square)          | Primary and white buttons                            |
| Button primary bg     | `#589167`                     | CTA buttons                                          |
| Button primary hover  | `#4a7d59` (darker green)      | Hover state                                          |

## Requirements

### Requirement: Top bar

The system SHALL render a top bar with phone number, email address, and social media icons (Facebook, Twitter, Instagram, Dribbble).

#### Scenario: Displays phone, email, and social icons

- **WHEN** the user loads the page
- **THEN** a top bar shows phone number "+00 1234 567"
- **AND** it shows email "youremail@email.com"
- **AND** it displays social media icons for Facebook, Twitter, Instagram, Dribbble

### Requirement: Navbar

The system SHALL render a sticky dark navigation bar with the brand name "Plea" and navigation links.

#### Scenario: Brand and navigation links

- **WHEN** the user loads the page
- **THEN** a dark navbar shows the brand name "Plea"
- **AND** it contains navigation links: Home, About, Practice Areas, Attorney, Blog, Contact
- **AND** the navbar becomes sticky on scroll

### Requirement: Hero section

The system SHALL render a full-width hero section with a background image, dark overlay, heading, subtitle, and CTA button.

#### Scenario: Full-width hero with heading and CTA

- **WHEN** the user loads the page
- **THEN** a hero section displays with a background image and dark overlay
- **AND** the heading reads "Counseling For Your Better Life"
- **AND** a subtitle describes counseling services
- **AND** a CTA button links to the appointment section

### Requirement: Intro feature boxes

The system SHALL display three feature boxes with icons and labels in the intro section.

#### Scenario: Three feature boxes with icons

- **WHEN** the user scrolls to the intro section
- **THEN** three feature boxes are displayed in a row
- **AND** they show "100% Confidential", "Qualified Team", "Individual Approach"
- **AND** each has an icon with a colored background

### Requirement: How It Works section

The system SHALL display a three-step process section with icons and descriptions.

#### Scenario: Three-step process

- **WHEN** the user scrolls to the "How It Works" section
- **THEN** three steps are shown: "Make Schedule", "Start Discussion", "Enjoy Plan"
- **AND** each step has an icon and brief description
- **AND** steps are connected visually (arrows or numbering)

### Requirement: About section

The system SHALL display a split layout section with an image on the left and text on the right.

#### Scenario: Split layout with image and text

- **WHEN** the user scrolls to the about section
- **THEN** a split layout shows an image on the left and text on the right
- **AND** the heading reads "Best Counseling Funding Network Worldwide"

### Requirement: Services section

The system SHALL display three service cards with icons, titles, and descriptions.

#### Scenario: Three-column service cards

- **WHEN** the user scrolls to the services section
- **THEN** three service cards are displayed in a row
- **AND** each card has an icon, title, and description
- **AND** cards use the brand green color for icon accents

### Requirement: Testimonials section

The system SHALL display a carousel of client testimonials with quotes, names, and avatars.

#### Scenario: Carousel with client quotes

- **WHEN** the user scrolls to the testimonials section
- **THEN** a carousel shows client testimonials
- **AND** each testimonial has a quote, client name, and avatar
- **AND** the section has a dark overlay background

### Requirement: Pricing section

The system SHALL display three pricing tiers with plan names, prices, feature lists, and CTA buttons.

#### Scenario: Three pricing tiers

- **WHEN** the user scrolls to the pricing section
- **THEN** three pricing cards are displayed
- **AND** the section has a light gray background
- **AND** each card shows a plan name, price, features list, and CTA button

### Requirement: Appointment section

The system SHALL display a contact form with fields for Name, Email, Phone, Date, Subject, and Message.

#### Scenario: Contact form with background image

- **WHEN** the user scrolls to the appointment section
- **THEN** a form displays with fields: Name, Email, Phone, Date, Subject, Message
- **AND** the section has a background image with dark overlay
- **AND** a submit button uses the brand green color

### Requirement: Blog section

The system SHALL display three blog post cards with images, dates, titles, and excerpts.

#### Scenario: Recent blog posts

- **WHEN** the user scrolls to the blog section
- **THEN** three blog post cards are shown
- **AND** each has an image, date, title, and excerpt

### Requirement: Footer

The system SHALL display a multi-column footer with brand info, navigation links, contact details, and a "Made with Component Dock" attribution.

#### Scenario: Multi-column footer

- **WHEN** the user scrolls to the footer
- **THEN** the footer shows the brand name "Plea" with social icons
- **AND** it has columns: Explore, Legal, Company, Contact
- **AND** contact info shows address, phone, and email
- **AND** a "Made with Component Dock" attribution links to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/plea/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/plea/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Top bar — a top bar shows phone number "+00 1234 567"
- [x] Navbar — a dark navbar shows the brand name "Plea"
- [ ] Hero section — a hero section displays with a background image and dark overlay
- [ ] Intro feature boxes — three feature boxes are displayed in a row
- [x] How It Works section — three steps are shown: "Make Schedule", "Start Discussion", "Enjoy Plan"
- [ ] About section — a split layout shows an image on the left and text on the right
- [ ] Services section — three service cards are displayed in a row
- [ ] Testimonials section — a carousel shows client testimonials
- [ ] Pricing section — three pricing cards are displayed
- [ ] Appointment section — a form displays with fields: Name, Email, Phone, Date, Subject, Message
- [ ] Blog section — three blog post cards are shown
