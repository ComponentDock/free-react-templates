# Template: Sketch (Design Agency Landing)

## Purpose

Sketch is a single-page design agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Design" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean design agency page with blue accents: a navbar with
logo and navigation, a hero ("Create, Code, and Launch." + features + quote),
an achievements stats row, a "How it works" 3-step process, a services section
with checklist, a testimonials carousel, a blog posts grid, and a dark footer
with social links and navigation columns. Sketch recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Design" — free design agency website template
  (source: https://colorlib.com/wp/template/design/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/design/`
  (HTTP 200, the rendered page) + stylesheet `css/style.css`.
- **Brand color:** #1264fa (vibrant blue), hover #2671fa
- **Font:** Montserrat (300, 400, 700)
- **Buttons:** rounded-full pill shape, brand bg, white text
- **Section order (1:1):**
  1. Navbar: Logo "Sketch", nav links (Home, Services, Work, About), CTA "Get Started"
  2. Hero: Split — left: h1 + subtitle + CTA + 2 feature cards; right: image + quote overlay
  3. Achievements: 4 stat cards (99.55%, 98,000+, 99.99%, 1M+)
  4. HowItWorks: Section title + 3 steps with icons
  5. Services: Two-column — text/checklist/CTA + image
  6. Testimonials: 3 testimonial cards (image, quote, author)
  7. Blog: 5 blog entries with date, title, description
  8. Footer: About, social links, navigation columns, copyright + Component Dock link

## Requirements

### Requirement: Navbar displays navigation and branding

The navbar SHALL display the "Sketch" logo, navigation links (Home, Services, Work, About), and a "Get Started" CTA button.

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the "Sketch" logo, all four navigation links, and the "Get Started" CTA

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation menu opens with all links visible

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero section displays headline and features

The hero SHALL display the heading "Create, Code, and Launch.", a subtitle paragraph, a "Get Started" CTA, two feature cards, a hero image, and a quote overlay.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the hero shows the h1 heading "Create, Code, and Launch." and a "Get Started" button linking to #get-started

#### Scenario: Hero shows feature cards

- **WHEN** the page loads
- **THEN** the hero shows "High Quality" and "Creative Solutions" feature cards

### Requirement: Achievements section shows statistics

The achievements section SHALL display 4 stat cards: 99.55% ratings, 98,000+ customers, 99.99% uptime, 1M+ love.

#### Scenario: All stats render

- **WHEN** the page loads
- **THEN** all four stat values and their titles are visible

### Requirement: HowItWorks shows 3-step process

The section SHALL display a "How it works" title and three steps: Create Account, Create Orders, Ship & Track.

#### Scenario: Steps render in order

- **WHEN** the page loads
- **THEN** steps 1, 2, and 3 are displayed with titles and descriptions

### Requirement: Services section displays offerings

The services section SHALL show a title, heading, paragraph, checklist of 3 items, a CTA button, and an image.

#### Scenario: Checklist and CTA render

- **WHEN** the page loads
- **THEN** "Modern responsive design", "Performance optimized", and "SEO friendly structure" are listed, and a "Get Started" CTA is visible

### Requirement: Testimonials display client feedback

The testimonials section SHALL show at least 3 testimonial cards with author images, quotes, and names.

#### Scenario: Testimonial cards render

- **WHEN** the page loads
- **THEN** testimonial cards for Adam Aderson, Sarah Mitchell, and James Cooper are visible

### Requirement: Blog section shows recent posts

The blog section SHALL display a "Latest Blog Posts" title and at least 3 blog entries with dates, titles, and descriptions.

#### Scenario: Blog entries render

- **WHEN** the page loads
- **THEN** at least 3 blog articles are displayed with dates and titles

### Requirement: Footer links to Component Dock

The footer SHALL include an About section, social media links, navigation columns, and a copyright line linking to https://www.componentdock.com/.

#### Scenario: Footer Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to "https://www.componentdock.com/" labeled "Component Dock"
