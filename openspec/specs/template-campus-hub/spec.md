# Template: CampusHub (Education)

## Purpose

CampusHub is a single-page education/university template in the
free-react-templates monorepo. It is a React 19 + Vite + Tailwind CSS 4 +
TypeScript recreation of the ColorLib "University" free template (source:
https://colorlib.com/wp/template/university/), built under a DIFFERENT name
(**CampusHub**), with the monorepo stack.

- **Source:** https://colorlib.com/wp/template/university/
- **Preview:** https://preview.colorlib.com/theme/university/
- **New name:** `campus-hub` (apps/campus-hub, @free-react-templates/campus-hub)
- **Deploy target:** https://campus-hub.free.componentdock.com
- **Category:** Education
- **Screenshot reference:** https://colorlib.com/wp/wp-content/uploads/sites/2/university-free-template.jpg

## Design Tokens

Extracted from the live preview stylesheet (style.css + bootstrap.css at
preview.colorlib.com/theme/university/).

### Colors

| Token                   | Value             | Usage                              |
| ----------------------- | ----------------- | ---------------------------------- |
| `--color-primary`       | `#11cbd7`         | Brand teal/cyan — buttons, links, headings |
| `--color-primary-hover` | `#0eaab4`         | Button hover state                 |
| `--color-primary-dark`  | `#0d9ea8`         | Active/pressed button state        |
| `--color-text`          | `#000000`         | Headings, strong text              |
| `--color-text-body`     | `#4d4d4d`         | Body text                          |
| `--color-text-muted`    | `#999999`         | Secondary text, metadata           |
| `--color-bg`            | `#ffffff`         | Default section background         |
| `--color-bg-light`      | `#f8f9fa`         | Alternating section backgrounds (`.bg-light`) |
| `--color-border`        | `#e3e3e3`         | Borders, dividers                  |
| `--color-overlay`       | `rgba(0,0,0,0.1)` | Hero image overlay (very subtle)   |

### Fonts

| Font     | Family                           | Usage                          |
| -------- | -------------------------------- | ------------------------------ |
| Body     | `'Rubik', arial, sans-serif`     | All text (weights 300, 400, 500) |

### Button Shape

- **Default border-radius:** `4px` (slightly rounded rectangle)
- **Hero search button border-radius:** `0px` (sharp corners, full-width)
- **Teacher card circles / icon buttons:** `50%` (fully circular)
- **Primary button:** bg `#11cbd7`, white text, 2px transparent border
- **Hover:** outline with `#11cbd7` border, text `#000`, no bg

## Section Structure (DOM order)

1. **Navbar** — Sticky top, light background (`#f8f9fa`). Brand "CampusHub" left. Nav links: Home, Courses (dropdown with HTML/WordPress/Laravel/JavaScript/Python), Categories (dropdown), Blog, About, Contact. Right side: Login / Register links.
2. **Hero** — Full-width with background image + very subtle dark overlay (rgba(0,0,0,0.1)). Centered content: heading "Find Online Courses That Suit You", search form with text input + two dropdown selects (category, price) + "Search" button (primary teal, sharp corners).
3. **Welcome** — Two-column split. Left: video thumbnail (block-16). Right: "Welcome to University" heading + paragraph + "Read More" button (primary, reversed).
4. **Four Info Cards** — 4-column grid on white background. Each card: icon (flaticon style) + heading + short description + "Read More" link with arrow icon. Cards: Knowledge is Power, Senior High School, College of Arts & Sciences, Unmatched Professor.
5. **Education is Life (Stats)** — Light background (`#f8f9fa`). Two-column: left = large image, right = "Education is Life" heading + description + 4 stat counters in 2x2 grid (Students: 12,921, Schools: 51, Books: 3,902, Graduates: 1,921). Each stat has a flaticon icon + animated counter number + label.
6. **Popular Courses** — Light background. Heading "Popular Courses" + "Enroll Now" CTA button. Horizontal carousel (owl-carousel) of course cards (block-19): image thumbnail + course title + description + enrollment progress (e.g. "2,219/6,000") + price (strikethrough original + "Free" or paid). 6 cards total.
7. **Teachers** — White background. Heading "Teachers". 3-column grid of flip cards (block-2): front = background photo + name + role overlay; back = blockquote testimonial + small author photo + name + role. Flip on hover.
8. **Blog** — Light background. Heading "Blog". Two-column layout: left = 1 large featured post card (block-20, image + title + date/author/comments meta). Right = 4 smaller horizontal post cards (block-21, thumbnail + title + meta row).
9. **CTA Band** — "Create cool websites" heading with description and icon links.
10. **Footer** — Dark background. 4 columns: (a) Brand name + description, (b) Quick Links in 2 sub-columns (Home, About Us, Courses, Pages, News, Support, Contact, Privacy), (c) Blog recent posts with date/author/comments, (d) Contact Information. Bottom: Component Dock attribution link.

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name
"CampusHub", navigation links (Home, Courses with dropdown, Categories with
dropdown, Blog, About, Contact), and Login/Register links on the right.

#### Scenario: Navbar renders correctly

- **GIVEN** the page is loaded
- **WHEN** the navigation bar is displayed
- **THEN** it SHALL show the brand "CampusHub" on the left
- **AND** it SHALL show nav links: Home, Courses, Categories, Blog, About, Contact
- **AND** it SHALL show Login / Register links on the right
- **AND** it SHALL be sticky at the top of the viewport

#### Scenario: Navbar dropdowns

- **GIVEN** the page is loaded
- **WHEN** the user hovers over "Courses"
- **THEN** a dropdown SHALL appear with items: HTML, WordPress, Laravel, JavaScript, Python

### Requirement: Hero section

The system SHALL render a full-width hero section with a background image,
a very subtle dark overlay, a search heading, and a search form.

#### Scenario: Hero content

- **GIVEN** the page is loaded
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the heading "Find Online Courses That Suit You"
- **AND** it SHALL show a search form with a text input, two dropdown selects, and a search button
- **AND** it SHALL have a background image with a subtle dark overlay

### Requirement: Welcome section

The system SHALL render a two-column welcome section with a video thumbnail
on the left and a heading + description + CTA on the right.

#### Scenario: Welcome content

- **GIVEN** the page is loaded
- **WHEN** the welcome section is displayed
- **THEN** it SHALL show the heading "Welcome to CampusHub"
- **AND** it SHALL show a descriptive paragraph
- **AND** it SHALL show a "Read More" button

### Requirement: Four info cards

The system SHALL render four info cards in a row, each with an icon, heading,
description, and "Read More" link.

#### Scenario: Info cards content

- **GIVEN** the page is loaded
- **WHEN** the info cards section is displayed
- **THEN** it SHALL show 4 cards with headings: "Knowledge is Power", "Senior High School", "College of Arts & Sciences", "Unmatched Professor"
- **AND** each card SHALL have an icon, a description, and a "Read More" link with arrow

### Requirement: Education stats section

The system SHALL render a two-column section with an image on the left and
a heading, description, and four animated stat counters on the right.

#### Scenario: Stats content

- **GIVEN** the page is loaded
- **WHEN** the stats section is displayed
- **THEN** it SHALL show the heading "Education is Life"
- **AND** it SHALL show 4 stat counters: Students (12,921), Schools (51), Books (3,902), Graduates (1,921)
- **AND** each counter SHALL have an icon and a label

### Requirement: Popular courses carousel

The system SHALL render a horizontal carousel of course cards with images,
titles, descriptions, enrollment counts, and prices.

#### Scenario: Course cards

- **GIVEN** the page is loaded
- **WHEN** the courses section is displayed
- **THEN** it SHALL show the heading "Popular Courses"
- **AND** it SHALL show a "Enroll Now" CTA button
- **AND** it SHALL show a carousel of course cards with image, title, description, enrollment progress, and price

### Requirement: Teachers section

The system SHALL render a 3-column grid of teacher flip cards with
front (photo + name + role) and back (testimonial + author info).

#### Scenario: Teacher cards

- **GIVEN** the page is loaded
- **WHEN** the teachers section is displayed
- **THEN** it SHALL show the heading "Teachers"
- **AND** it SHALL show 3 teacher cards with names and roles
- **AND** each card SHALL have a front (photo + name + role) and back (blockquote testimonial)

#### Scenario: Teacher card flip

- **GIVEN** the teachers section is visible
- **WHEN** the user hovers over a teacher card
- **THEN** the card SHALL flip to reveal the testimonial on the back

### Requirement: Blog section

The system SHALL render a blog section with one featured post and
four smaller horizontal posts.

#### Scenario: Blog content

- **GIVEN** the page is loaded
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Blog"
- **AND** it SHALL show 1 large featured post with image, title, and meta
- **AND** it SHALL show 4 smaller posts with thumbnail, title, and meta (date, author, comments)

### Requirement: CTA band

The system SHALL render a call-to-action band with a heading and icon links.

#### Scenario: CTA content

- **GIVEN** the page is loaded
- **WHEN** the CTA band is displayed
- **THEN** it SHALL show the heading "Create cool websites"

### Requirement: Footer

The system SHALL render a footer with brand info, quick links, recent blog
posts, and contact information. The footer SHALL link to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is loaded
- **WHEN** the footer is displayed
- **THEN** it SHALL show 4 columns: brand name + description, Quick Links, Blog posts, Contact Information
- **AND** it SHALL include a link to https://www.componentdock.com/

## Verification Checklist

- [ ] Navbar renders with brand, nav links, dropdowns, and Login/Register
- [ ] Hero has background image, overlay, heading, and search form
- [ ] Welcome section has two-column layout with heading and CTA
- [ ] Four info cards render with icons, headings, and "Read More" links
- [ ] Stats section has animated counters (Students, Schools, Books, Graduates)
- [ ] Popular courses carousel renders course cards with images, titles, prices
- [ ] Teachers section has 3 flip cards with hover interaction
- [ ] Blog section has 1 featured + 4 smaller posts
- [ ] CTA band renders "Create cool websites"
- [ ] Footer has 4 columns and Component Dock link
- [ ] All design tokens match: Rubik font, #11cbd7 primary, 4px button radius
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code
- [ ] Tailwind @theme configured with brand color
