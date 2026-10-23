# Template: Tadpole (Kindergarten / Preschool Website Template)

## Purpose

Tadpole is a single-page kindergarten/preschool landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Kindergarten" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

- **Source:** https://colorlib.com/wp/template/kindergarten/
- **Preview:** https://preview.colorlib.com/theme/kindergarten/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/kindergarten-free-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **App name:** `tadpole` (apps/tadpole)

## Requirements

### Requirement: TopBar displays contact information and social links

WHEN the page loads
THEN a top bar shows address, phone, and email
AND social media icons (Facebook, Twitter, Instagram) are displayed

#### Scenario: Top bar renders contact details

- **WHEN** the page loads
- **THEN** the top bar displays the email address, phone number, and physical address
- **AND** each contact detail has an associated icon

#### Scenario: Social media icons are clickable

- **WHEN** the page loads
- **THEN** Facebook, Twitter, and Instagram icons are rendered as links
- **AND** each icon has an aria-label for accessibility

### Requirement: Navbar provides navigation and mobile menu

WHEN the page loads
THEN the navbar displays logo and navigation links
AND an "Enroll Now" CTA button is visible

#### Scenario: Navigation links are rendered

- **WHEN** the page loads
- **THEN** links for Home, About, Programs, Teachers, Events, Gallery, Blog, Contact are visible
- **AND** the logo "Tadpole" is displayed

#### Scenario: Navbar becomes sticky on scroll

- **WHEN** the user scrolls past 100px
- **THEN** the navbar gets a white background with shadow

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** clicking a link closes the menu

### Requirement: Hero section displays headline and CTAs

WHEN the page loads
THEN the hero section shows a headline about kids learning and growing
AND a subtext describing the kindergarten
AND call-to-action buttons are displayed

#### Scenario: Hero content is visible

- **WHEN** the page loads
- **THEN** the headline "Where Little Minds Grow Big Dreams" is displayed
- **AND** "Explore Programs" and "Learn More" buttons are present

### Requirement: Features section shows service cards

WHEN the page loads
THEN three feature cards are displayed with icons

#### Scenario: Feature cards render correctly

- **WHEN** the page loads
- **THEN** cards for "Playful Learning", "Creative Arts", and "Nature Exploration" appear
- **AND** each card has a colored icon circle and description text

### Requirement: About section displays content

WHEN the page loads
THEN the about section shows an image and descriptive text

#### Scenario: About content is visible

- **WHEN** the page loads
- **THEN** the heading "A Place Where Every Child Matters" is displayed
- **AND** a "Discover More" CTA button is present

### Requirement: Programs section shows curriculum cards

WHEN the page loads
THEN three program cards are displayed on a green background

#### Scenario: Program cards render correctly

- **WHEN** the page loads
- **THEN** cards for "Tiny Tots", "Little Explorers", and "Big Beginnings" appear
- **AND** each card has a "Learn More" button

### Requirement: Teachers section shows staff cards

WHEN the page loads
THEN three teacher cards are displayed with photos

#### Scenario: Teacher cards render correctly

- **WHEN** the page loads
- **THEN** cards for Sarah Mitchell, James Wilson, and Emily Chen appear
- **AND** each card shows name, role, and portrait image

### Requirement: Events section shows countdown timer

WHEN the page loads
THEN a countdown timer displays days, hours, minutes, seconds

#### Scenario: Countdown timer updates

- **WHEN** the page loads
- **THEN** the countdown shows numeric values for Days, Hours, Minutes, Seconds
- **AND** the timer updates every second
- **AND** an "RSVP Now" button is present

### Requirement: Testimonials section shows parent feedback

WHEN the page loads
THEN a testimonial carousel displays quotes from parents

#### Scenario: Testimonial navigation works

- **WHEN** the user clicks the next arrow
- **THEN** the next testimonial slide is shown
- **WHEN** the user clicks a dot indicator
- **THEN** the corresponding testimonial is displayed

### Requirement: Blog section shows recent posts

WHEN the page loads
THEN three blog post cards are displayed

#### Scenario: Blog cards render correctly

- **WHEN** the page loads
- **THEN** three blog posts with titles, dates, and excerpts appear
- **AND** each card has a "Read More" link

### Requirement: Footer displays links and newsletter

WHEN the page loads
THEN the footer shows about text, navigation links, programs list, and newsletter form

#### Scenario: Newsletter form works

- **WHEN** the user enters an email and submits the form
- **THEN** the input field is cleared

#### Scenario: Component Dock attribution is present

- **WHEN** the page loads
- **THEN** a link to componentdock.com is displayed with "Component Dock" text

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/tadpole/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/tadpole/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] TopBar displays contact information and social links — the top bar displays the email address, phone number, and physical address
- [ ] Navbar provides navigation and mobile menu — links for Home, About, Programs, Teachers, Events, Gallery, Blog, Contact are visible
- [x] Hero section displays headline and CTAs — the headline "Where Little Minds Grow Big Dreams" is displayed
- [x] Features section shows service cards — cards for "Playful Learning", "Creative Arts", and "Nature Exploration" appear
- [ ] About section displays content — the heading "A Place Where Every Child Matters" is displayed
- [x] Programs section shows curriculum cards — cards for "Tiny Tots", "Little Explorers", and "Big Beginnings" appear
- [ ] Teachers section shows staff cards — cards for Sarah Mitchell, James Wilson, and Emily Chen appear
- [ ] Events section shows countdown timer — the countdown shows numeric values for Days, Hours, Minutes, Seconds
- [ ] Testimonials section shows parent feedback — the next testimonial slide is shown
- [ ] Blog section shows recent posts — three blog posts with titles, dates, and excerpts appear
