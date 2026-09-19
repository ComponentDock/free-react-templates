# Template: Cerebro (Education & Courses Landing)

## Purpose

Cerebro is a single-page education & courses template — a React recreation of
the ColorLib free "Clever" template
(preview: https://preview.colorlib.com/theme/clever/ — education landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand blue `#3762f0` (buttons, links, accents), hover `#2c56df`
- Accent yellow `#e3d21b` (event date badges, course rating stars)
- Body text `#5a5a5a`, headings `rgba(0,0,0,0.8)`
- Background `#f7f7f7` (light grey sections)
- Register section overlay `rgba(214,223,251,0.7)` (blue tint)
- Footer top `#252525`, footer bottom `#1f1f1f`, borders `#4c4c4c`
- Fonts: Open Sans (headings/UI), Raleway (body paragraphs) via Google Fonts
- Border radius: 6px (buttons, cards, inputs)
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Cerebro lives in `apps/cerebro` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Top header bar

The system SHALL render a slim top bar with phone and email contact info on the
left and social follow links (Facebook, Instagram, Twitter) on the right,
matching the original's dark-background top strip.

#### Scenario: Desktop top bar

- **GIVEN** the page is rendered
- **WHEN** the top header bar is displayed
- **THEN** it SHALL show "Phone: +44 300 303 0266" and "Email: info@cerebro.com"
- **AND** it SHALL show "Follow us" with three social icon links

### Requirement: Navigation bar

The system SHALL render a responsive navbar with the site logo/name "Cerebro",
navigation links (Home, Pages dropdown, Courses, Instructors, Blog, Contact),
a search toggle, and Register/Login buttons.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the logo linking to `#home`
- **AND** it SHALL show links: Home, Pages, Courses, Instructors, Blog, Contact
- **AND** it SHALL show Register and Login buttons

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the hamburger toggle is pressed
- **THEN** the mobile menu SHALL open and the toggle SHALL report
  `aria-expanded="true"`
- **AND** pressing it again SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-width hero with a dark-overlay background image,
a centered headline "Let's Study Together", and a blue "Get Started" CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain the headline "Let's Study Together"
- **AND** it SHALL contain a "Get Started" button with brand blue background
- **AND** the background SHALL have a dark overlay over a placeholder image

### Requirement: Cool facts / stats section

The system SHALL render a row of four stat counters, each with an icon, a
number, and a label. The four stats are: Success Stories (1912), Dedicated
Tutors (123), Scheduled Events (89), Available Courses (56).

#### Scenario: Stats display

- **GIVEN** the page is rendered
- **WHEN** the cool facts section is displayed
- **THEN** it SHALL show four stat cards in a responsive 4-column grid
- **AND** each card SHALL display an icon, the number, and the label text

### Requirement: Popular courses section

The system SHALL render a "Popular Online Courses" section with three course
cards. Each card has a thumbnail image, course title, instructor name, category,
description paragraph, seat count, star rating, and a price (or "Free" badge).

#### Scenario: Course cards

- **GIVEN** the page is rendered
- **WHEN** the popular courses section is displayed
- **THEN** it SHALL show the section heading "Popular Online Courses"
- **AND** it SHALL render three course cards with title, meta info, description,
  seat/rating info, and price
- **AND** free courses SHALL display a "Free" badge

### Requirement: Best tutors section

The system SHALL render a "The Best Tutors in Town" section with a horizontal
carousel/grid of tutor cards. Each card has a portrait image, tutor name,
"Teacher" role, bio paragraph, and social media icons.

#### Scenario: Tutor cards

- **GIVEN** the page is rendered
- **WHEN** the best tutors section is displayed
- **THEN** it SHALL show the section heading "The Best Tutors in Town"
- **AND** it SHALL render at least four tutor cards with name, role, bio,
  and social links

### Requirement: Register now section

The system SHALL render a two-column register section: a contact form on the left
(Name, Email, Phone, Site fields + "Send Message" button) and a "Register Now"
text block with a countdown timer on the right. The section has a blue-tinted
overlay on a texture background.

#### Scenario: Registration form

- **GIVEN** the page is rendered
- **WHEN** the register section is displayed
- **THEN** it SHALL show a form with Name, Email, Phone, and Site inputs
- **AND** it SHALL show a full-width "Send Message" button
- **AND** it SHALL show "Register Now" heading with descriptive text

### Requirement: Upcoming events section

The system SHALL render an "Upcoming events" section with three event cards.
Each card has a thumbnail image, date badge, event title, date/time, and a
price or "Free" label.

#### Scenario: Event cards

- **GIVEN** the page is rendered
- **WHEN** the upcoming events section is displayed
- **THEN** it SHALL show the section heading "Upcoming events"
- **AND** it SHALL render three event cards with image, date, title, time, and fee

### Requirement: Blog section

The system SHALL render a "From Our Blog" section with two blog post cards.
Each card has a thumbnail image, headline, author/category meta, and a
description paragraph.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the section heading "From Our Blog"
- **AND** it SHALL render two blog cards with image, headline, meta, and excerpt

### Requirement: Footer

The system SHALL render a dark two-part footer: a top area with the site logo
and copyright text, and a bottom bar with phone/email contact info and social
follow links. The footer SHALL link to `https://www.componentdock.com/`.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a logo and copyright text in the top area
- **AND** it SHALL show phone/email info and social links in the bottom bar
- **AND** it SHALL include a link to `https://www.componentdock.com/` branded as
  "Component Dock"

## Verification checklist

- [ ] Top header bar renders with contact info and social links
- [ ] Navbar is responsive with mobile toggle
- [ ] Hero section renders with dark overlay, headline, and CTA button
- [ ] Cool facts section shows four stat counters
- [ ] Popular courses section shows three course cards
- [ ] Best tutors section shows tutor carousel/grid
- [ ] Register section renders form and countdown text
- [ ] Upcoming events section shows three event cards
- [ ] Blog section shows two blog post cards
- [ ] Footer renders with logo, copyright, contact info, social links
- [ ] Footer links to componentdock.com
- [ ] All sections use brand blue #3762f0 and accent yellow #e3d21b
- [ ] No ColorLib references in app code (only in spec and TEMPLATES.md)
- [ ] Tailwind theme tokens define brand colors and fonts
