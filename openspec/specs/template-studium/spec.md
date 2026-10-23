# Template: Studium (Education / Online Learning)

## Purpose

Recreation of ColorLib **Studylab** as a React 19 + Vite + Tailwind 4 + TypeScript
template. Studium is an online learning platform landing page featuring a hero with
registration form, course categories, course cards, testimonials, features, blog
posts, and a multi-column footer.

- **Source slug:** `studylab`
- **Preview URL:** https://preview.colorlib.com/theme/studylab/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`) and screenshot analysis.

| Token            | Value                                      | Notes                                      |
| ---------------- | ------------------------------------------ | ------------------------------------------ |
| Brand blue       | `#0062cc` / `#007bff`                      | Primary CTA buttons, links, navbar active  |
| Accent teal      | `#24d2c8`                                  | Feature icon accents, secondary highlights |
| Accent magenta   | `#ce4be8` / `#e449ad`                      | "Register Now" heading, form accents       |
| Accent orange    | `#fc9927`                                  | "See All Courses" button, highlights       |
| Light blue       | `#4986fc`                                  | Secondary button variant                   |
| Dark bg          | `#1a1a1a` / `#1d2124`                      | Footer background, dark sections           |
| Light bg         | `#f9faff` / `#f7f7f7`                      | Section alternating backgrounds            |
| Text primary     | `#16181b`                                  | Body text                                  |
| Text muted       | `#999999` / `#b3b3b3`                      | Secondary text, placeholders               |
| Font family      | `"Poppins", Arial, sans-serif`             | Global body + headings                     |
| Button radius    | `40px` / `50%`                             | Pill-shaped CTAs and category circles      |
| Section bg-light | `#f8f9fa`                                  | Alternating section backgrounds            |
| Navbar           | Dark bg (`#1a1a1a`), transparent on scroll | `.navbar-dark` Bootstrap pattern           |

### Visual design (from screenshot)

- **Hero:** Full-height background image (student with laptop on floor). Left side:
  "WELCOME TO STUDYLAB" subtitle + "We Are Online Platform For Make Learn" headline
  - description text + two CTA buttons ("Our Course" solid blue, "Learn More" outline).
    Right side: white registration card with "Register Now" heading (magenta), form
    fields (Full Name, Email, Password, Confirm Password), blue submit button, and
    "Already have an account? Sign In" link.
- **Categories section:** White background, "START LEARNING TODAY" subtitle + "Browse
  Online Course Category" heading. Six circular image thumbnails with overlay text
  (IT & Software, Music, Photography, Marketing, Health, Audio Video) each showing
  "100+ courses". Orange "See All Courses" button centered below.
- **Course cards section:** "Pick Your Course" heading. Grid of course cards with
  image thumbnails, course titles, pricing or metadata. "See All Courses" CTA.
- **Features section:** "Learn Anything You Want Today" heading with feature items.
- **Testimonials section:** Light bg, "What Are Students Says" heading with
  testimonial cards (avatar, name, quote).
- **About section:** "We Are StudyLab An Online Learning Center" heading with
  description and stats.
- **Services/features grid:** Four icon+title+description cards (Top Quality Content,
  Highly Skilled Instructor, World Class Quiz, Get Certified).
- **Blog section:** "Recent Post" heading with three blog post cards (image, title,
  "Read more" link).
- **Footer:** Dark background, four columns (About, Help Desk, Recent Courses,
  Have a Questions? / newsletter form). Copyright bar at bottom with "Component Dock"
  link.

## Requirements

### Feature: Hero section

#### Scenario: Hero renders welcome headline and registration form

- **GIVEN** the user visits the Studium landing page
- **THEN** the hero section displays "We Are Online Platform For Make Learn" headline
- **AND** the hero has a background image with overlay
- **AND** a registration form is visible with fields: Full Name, Email Address, Password, Confirm Password
- **AND** the form has a "Register Now" heading in magenta
- **AND** two CTA buttons are present: "Our Course" (solid blue) and "Learn More" (outline)
- **AND** a "Sign In" link is visible below the form

#### Scenario: Hero form has proper input types

- **GIVEN** the hero registration form
- **THEN** the Email Address field uses type "email"
- **AND** the Password field uses type "password"
- **AND** the Confirm Password field uses type "password"

### Feature: Navbar

#### Scenario: Navbar displays brand and navigation links

- **GIVEN** the user visits the Studium page
- **THEN** the navbar shows the "Studium" brand name
- **AND** navigation links include: Home, About, Course, Instructor, Blog, Contact
- **AND** the navbar is dark-themed with transparent background

### Feature: Course categories

#### Scenario: Course categories display circular thumbnails

- **GIVEN** the user scrolls to the categories section
- **THEN** the section heading reads "Browse Online Course Category"
- **AND** six category circles are displayed: IT & Software, Music, Photography, Marketing, Health, Audio Video
- **AND** each circle shows "100+ courses" text
- **AND** a "See All Courses" button is centered below the categories

#### Scenario: Category circles are clickable

- **GIVEN** the categories section
- **THEN** each category circle is a clickable element

### Feature: Course cards

#### Scenario: Course cards display course information

- **GIVEN** the user scrolls to the courses section
- **THEN** the section heading reads "Pick Your Course"
- **AND** multiple course cards are displayed in a grid
- **AND** each card has an image, title, and description
- **AND** a "See All Courses" button is available

### Feature: Features / services

#### Scenario: Features section highlights platform benefits

- **GIVEN** the user scrolls to the features section
- **THEN** four feature items are displayed: Top Quality Content, Highly Skilled Instructor, World Class Quiz, Get Certified
- **AND** each feature has an icon, title, and description

### Feature: Testimonials

#### Scenario: Testimonials section shows student reviews

- **GIVEN** the user scrolls to the testimonials section
- **THEN** the section heading reads "What Are Students Says"
- **AND** testimonial cards display student quotes
- **AND** each card has an avatar and student name

### Feature: About section

#### Scenario: About section provides platform description

- **GIVEN** the user scrolls to the about section
- **THEN** the heading reads "We Are StudyLab An Online Learning Center"
- **AND** a description paragraph is present

### Feature: Blog section

#### Scenario: Blog section displays recent posts

- **GIVEN** the user scrolls to the blog section
- **THEN** the heading reads "Recent Post"
- **AND** three blog post cards are displayed
- **AND** each card has an image, title, and "Read more" link

### Feature: Footer

#### Scenario: Footer has multi-column layout with Component Dock link

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has a dark background
- **AND** four columns are present: About, Help Desk, Recent Courses, Have a Questions?
- **AND** the footer links to https://www.componentdock.com/ as "Component Dock"
- **AND** a copyright notice is displayed

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/studium/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/studium/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Hero section renders with background image, headline, description, two CTAs, and registration form
- [ ] Navbar shows brand name + nav links with dark theme
- [ ] Course categories display six circular thumbnails with course counts
- [ ] Course cards render in a grid with images and metadata
- [ ] Features section shows four icon+title+description cards
- [ ] Testimonials display student quotes with avatars
- [ ] About section has heading and description
- [x] Blog section shows three post cards with "Read more" links
- [ ] Footer has four columns, dark background, Component Dock link
- [ ] All buttons use pill-shaped border-radius (40px)
- [ ] Font family is Poppins throughout
- [ ] Brand colors match: blue #0062cc, teal #24d2c8, magenta #ce4be8, orange #fc9927
- [ ] Sections alternate between white and light (#f9faff / #f7f7f7) backgrounds
- [x] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [x] Footer links to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
