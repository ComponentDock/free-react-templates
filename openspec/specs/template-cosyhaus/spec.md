# Template: Cosyhaus (Interior Design Landing)

## Purpose

Cosyhaus is a single-page interior design landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Theinterior" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark-accented interior design page with red (#ff1313)
accents: a hero slider ("Modern Interior & Design"), info highlight columns,
a professional services band, a 3-card services grid, a 6-image gallery,
a team showcase, a testimonial carousel, brand logos, a CTA banner, blog
posts, and a dark footer with newsletter, address columns, and social links.
Cosyhaus recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Theinterior" — free interior design website template
  (source: https://colorlib.com/wp/template/theinterior/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/theinterior/`
  (HTTP 200, 626 lines). The rendered DOM is the reference below; the
  TEMPLATES.md screenshot (`theinterior-free-template.jpg`) confirms the
  visual design (light sections, red accents, dark footer).
- **Section order (1:1):** Navbar → Hero → Info Highlights → Professional
  Services → Services Grid → Gallery → Team → Testimonials → Brand Logos →
  CTA Banner → Blog → Footer.
- **Design tokens (from css/style.css):**
  - Brand red: `#ff1313` (buttons, accents, CTA, hover)
  - Dark background: `#16161a` (overlays)
  - Footer background: `#0b1416`
  - Heading ink: `#10285d`
  - Body text: `#635c5c`
  - Light background: `#ffffff` / `#f7f7f7`
  - Heading font: Barlow Condensed
  - Body font: Barlow
- **Colors mapped to Tailwind theme tokens in `src/index.css`.**

## Requirements

### Requirement: Navbar with navigation and dark mode toggle

Cosyhaus SHALL display a sticky header with the "Cosyhaus" logo, navigation
links (Home, About, Services, Gallery, Blog, Contact), a dark mode toggle
button, a "Contact Us" CTA button, and a responsive mobile hamburger menu.

#### Scenario: Navbar renders all navigation links

- **WHEN** I visit the Cosyhaus page
- **THEN** I see links for "Home", "About", "Services", "Gallery", "Blog", "Contact"
- **AND** I see a "Contact Us" button

#### Scenario: Dark mode toggle works

- **WHEN** I click the dark mode toggle button
- **THEN** the document root element has the CSS class "dark"

#### Scenario: Mobile menu opens and closes

- **WHEN** I click the "Open menu" button
- **THEN** a mobile navigation panel appears
- **AND** I see a "Close menu" button

### Requirement: Hero section with headline

Cosyhaus SHALL display a full-width hero section with a background image
overlay, a "Welcome to Cosyhaus" tagline, and the headline "Modern Interior
& Design".

#### Scenario: Hero displays headline and tagline

- **WHEN** I visit the Cosyhaus page
- **THEN** I see the text "Modern Interior & Design"
- **AND** I see the tagline "Welcome to Cosyhaus"

### Requirement: Info highlights section

Cosyhaus SHALL display a dark-background section with three info columns
(Clean and Services, Clean and Modern, Elegant and Modern).

#### Scenario: Three highlight cards render

- **WHEN** I visit the Cosyhaus page
- **THEN** I see three info cards with titles "Clean and Services", "Clean and Modern", "Elegant and Modern"

### Requirement: Professional services banner

Cosyhaus SHALL display a full-width background image section with the heading
"Our Professional Services", descriptive text, and a "Discover More About Us"
CTA button.

#### Scenario: Professional services section displays CTA

- **WHEN** I visit the Cosyhaus page
- **THEN** I see the heading "We will create modern and first class interior"
- **AND** I see a "Discover More About Us" link

### Requirement: Services grid with three cards

Cosyhaus SHALL display three service cards (Lighting, Interior Design, Office
Decoration) each with an image, title, short description, and longer
description.

#### Scenario: Three service cards render

- **WHEN** I visit the Cosyhaus page
- **THEN** I see service cards for "Lighting", "Interior Design", "Office Decoration"
- **AND** I see the section heading "Best Interior Services"

### Requirement: Gallery with project images

Cosyhaus SHALL display a 4-column asymmetric grid of 6 project gallery items
with overlay labels and arrow links.

#### Scenario: Gallery shows six items

- **WHEN** I visit the Cosyhaus page
- **THEN** I see at least 6 gallery items with images

### Requirement: Team section with three members

Cosyhaus SHALL display three team member cards with circular photos, names,
and roles.

#### Scenario: Three team members display

- **WHEN** I visit the Cosyhaus page
- **THEN** I see 3 team members with names and "Creative Director" roles

### Requirement: Testimonial carousel

Cosyhaus SHALL display a testimonial carousel with author quotes, names, and
roles, with prev/next navigation and dot indicators.

#### Scenario: Testimonial shows author info

- **WHEN** I visit the Cosyhaus page
- **THEN** I see a testimonial with author "Christine Eve"

#### Scenario: Testimonial navigation works

- **WHEN** I click the "Next testimonial" button
- **THEN** the next testimonial appears

### Requirement: CTA banner with contact button

Cosyhaus SHALL display a CTA banner with "Are you Searching For a
First-Class Consultant?" and a "Contact Us" button.

#### Scenario: CTA banner has contact button

- **WHEN** I visit the Cosyhaus page
- **THEN** I see "Are you Searching For a First-Class Consultant?"
- **AND** I see a "Contact Us" link

### Requirement: Blog section with two posts

Cosyhaus SHALL display two blog post cards with images, dates, author stats,
titles, and "Read more" links.

#### Scenario: Two blog posts render

- **WHEN** I visit the Cosyhaus page
- **THEN** I see 2 blog post titles
- **AND** I see 2 "Read more" links

### Requirement: Footer with Component Dock link and newsletter

Cosyhaus SHALL display a dark footer with logo, description, phone/email,
address columns, Instagram grid, social icons, newsletter form with
validation, and a "Made with Component Dock" attribution linking to
https://www.componentdock.com/.

#### Scenario: Footer links to Component Dock

- **WHEN** I visit the Cosyhaus page
- **THEN** the footer contains a link to "https://www.componentdock.com/"

#### Scenario: Footer newsletter accepts valid email

- **WHEN** I enter "jane@example.com" in the newsletter email field
- **AND** I click "Subscribe"
- **THEN** I see "Thanks for subscribing!"

#### Scenario: Footer newsletter rejects invalid email

- **WHEN** I enter "not-an-email" in the newsletter email field
- **AND** I click "Subscribe"
- **THEN** I see an error message about valid email

### Requirement: Document title

Cosyhaus SHALL set the document title to "Cosyhaus — Interior Design Template" on mount.

#### Scenario: Page title updates

- **WHEN** I visit the Cosyhaus page
- **THEN** the document title is "Cosyhaus — Interior Design Template"
