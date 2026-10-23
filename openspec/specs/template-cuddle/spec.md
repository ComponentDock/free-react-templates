# Template: Cuddle (Charity & Donation Landing Page)

Recreation of ColorLib **Lovecare** (https://colorlib.com/wp/template/lovecare/) — preview: https://preview.colorlib.com/theme/lovecare/

## Purpose

A charity/donation landing page template with hero, donation widget, causes carousel, volunteer showcase, testimonials, blog, and footer — all styled with warm gold/teal brand colors, Patrick Hand display font, and Poppins body font.

## Requirements

### Requirement: Navbar renders with transparent background and scrolled state

Users SHALL see a fixed navbar with logo on left and navigation links on right.

#### Scenario: Desktop navbar visible

- **WHEN** viewport width ≥ 992px
- **THEN** logo and nav links (Home, About, Causes, Blog, Contact) are visible

#### Scenario: Mobile hamburger menu

- **WHEN** viewport width < 992px
- **THEN** hamburger button is visible and toggles mobile menu

#### Scenario: Scrolled navbar state

- **WHEN** user scrolls > 80px
- **THEN** navbar gains white background and shadow

### Requirement: Hero section displays background image, overlay, heading, CTAs, and donation widget

Users SHALL see a full-screen hero with child portrait background, gold/white heading in Patrick Hand font, two CTAs, and a right-side donation widget.

#### Scenario: Hero content renders

- **WHEN** page loads
- **THEN** hero shows bg image + dark overlay + H1 "Raising Hope / To the Homeless & Hopeless People" in Patrick Hand

#### Scenario: Primary CTA scrolls to causes

- **WHEN** "Join Us" button clicked
- **THEN** page scrolls smoothly to causes/donate section

#### Scenario: Video CTA interaction

- **WHEN** "Watch Video" link clicked
- **THEN** lightbox/modal opens (or no-op for static build)

#### Scenario: Donation widget renders

- **WHEN** page loads
- **THEN** right sidebar shows stats box ($1,850,000 raised) + form with 5 fields (name, email, cause select, amount, payment radios)

### Requirement: Donation widget form handles input

Users SHALL be able to interact with the donation form fields.

#### Scenario: Form submission prevented

- **WHEN** form submitted with valid data
- **THEN** default submit is prevented (no backend)

#### Scenario: Cause select updates value

- **WHEN** cause dropdown changed
- **THEN** selected value updates

#### Scenario: Payment radio selection

- **WHEN** payment radio changed
- **THEN** selection updates visually

### Requirement: Intro/About section renders two-column layout with feature cards

Users SHALL see a two-column section with image left, content right, and three feature cards.

#### Scenario: Intro section renders

- **WHEN** page loads
- **THEN** section shows left image + right content with heading "We Help Thousands of Children to Get Their Education" + 3 feature cards (Start Donating, Join Community, Be Volunteer)

### Requirement: Counter section displays four statistics over background image

Users SHALL see a section with background image and four stat cards.

#### Scenario: Counter stats render

- **WHEN** page loads
- **THEN** four stat cards show $60M, 9200, 5800, 2750 over bg image

### Requirement: Causes carousel displays cause cards with progress

Users SHALL see a horizontal carousel of cause cards with category badge, title, progress bar, and raised/goal amounts.

#### Scenario: Causes carousel renders

- **WHEN** page loads
- **THEN** 3+ cause cards visible in carousel

#### Scenario: Carousel navigation

- **WHEN** next/prev or pagination clicked
- **THEN** corresponding slide shown

### Requirement: CTA/Image section renders split layout

Users SHALL see left content with heading and two CTAs, right background image.

#### Scenario: CTA/Image section renders

- **WHEN** page loads
- **THEN** left side shows "The Smallest Act of Kindness..." heading + Donate Now / Become Volunteer buttons, right side shows bg image

### Requirement: Volunteers grid displays four volunteer cards

Users SHALL see a responsive grid of 4 volunteer cards with photo, name, role, and social icons.

#### Scenario: Volunteers grid renders

- **WHEN** page loads
- **THEN** 4 volunteer cards in responsive grid (1 col mobile, 2 col tablet, 4 col desktop)

#### Scenario: Volunteer card shows social links

- **WHEN** volunteer card renders
- **THEN** Twitter, Facebook, Google, Instagram icons present with aria-labels

### Requirement: Testimonials carousel displays testimonial cards

Users SHALL see a carousel of testimonial cards with quote, author, and role.

#### Scenario: Testimonials carousel renders

- **WHEN** page loads
- **THEN** testimonial cards visible with navigation

### Requirement: CTA Banner section renders

Users SHALL see a full-width banner with heading and volunteer CTA button.

#### Scenario: CTA Banner renders

- **WHEN** page loads
- **THEN** "Do You Care Our Children?" heading + "Be A Volunteer" button visible

### Requirement: Blog section displays three blog cards

Users SHALL see a responsive grid of 3 blog cards with image, meta, title, excerpt, and read more link.

#### Scenario: Blog grid renders

- **WHEN** page loads
- **THEN** 3 blog cards in responsive grid

### Requirement: Footer renders with three columns and Component Dock credit

Users SHALL see a dark teal footer with about column, recent posts, contact info, and copyright bar linking to Component Dock.

#### Scenario: Footer renders

- **WHEN** page loads
- **THEN** 3 columns: About + socials, Recent Posts (2), Contact Info

#### Scenario: Copyright bar links Component Dock

- **WHEN** footer copyright bar renders
- **THEN** link to https://www.componentdock.com/ with text "Component Dock"

### Requirement: Design tokens applied correctly

The template SHALL use the specified design tokens.

#### Scenario: Brand colors used

- **WHEN** any component renders
- **THEN** primary gold #d49a3a used for buttons/accents, teal #042628 for footer, warm beige #f3f0eb for section backgrounds

#### Scenario: Fonts loaded

- **WHEN** page loads
- **THEN** Patrick Hand for headings, Poppins for body via Google Fonts

#### Scenario: Button radius

- **WHEN** buttons render
- **THEN** 40px (pill) radius applied

### Requirement: Accessibility standards met

The template SHALL meet WCAG AA basics.

#### Scenario: Semantic HTML

- **WHEN** page renders
- **THEN** nav, main, section, footer elements used appropriately

#### Scenario: Heading hierarchy

- **WHEN** page renders
- **THEN** h1 → h2 → h3 hierarchy maintained

#### Scenario: Form labels

- **WHEN** donation form renders
- **THEN** all inputs have associated labels

#### Scenario: Focus visible

- **WHEN** interactive elements focused
- **THEN** visible focus ring shown

#### Scenario: Image alt text

- **WHEN** images render
- **THEN** descriptive alt text present

#### Scenario: ARIA labels on icon buttons

- **WHEN** social links or carousel controls render
- **THEN** aria-label present

### Requirement: Responsive breakpoints work

The template SHALL adapt to mobile, tablet, desktop.

#### Scenario: Mobile hero stacks

- **WHEN** viewport < 992px
- **THEN** hero sidebar stacks below main content (`.col-lg-6` / `col-md-5 order-lg-last` split ends at 992)

#### Scenario: Grid responsiveness

- **WHEN** viewport < 768px
- **THEN** grids show 1 column
- **WHEN** viewport < 992px
- **THEN** grids show 2 columns (`col-md-6`)
- **WHEN** viewport ≥ 992px
- **THEN** grids show 3-4 columns (`col-lg-4`)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/cuddle/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/cuddle/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar renders with transparent background and scrolled state — logo and nav links (Home, About, Causes, Blog, Contact) are visible
- [ ] Hero section displays background image, overlay, heading, CTAs, and donation widget — hero shows bg image + dark overlay + H1 "Raising Hope / To the Homeless & Hopeless People" in Patrick Hand
- [ ] Donation widget form handles input — default submit is prevented (no backend)
- [x] Intro/About section renders two-column layout with feature cards — section shows left image + right content with heading "We Help Thousands of Children to Get Their Education" + 3 feature cards…
- [ ] Counter section displays four statistics over background image — four stat cards show $60M, 9200, 5800, 2750 over bg image
- [ ] Causes carousel displays cause cards with progress — 3+ cause cards visible in carousel
- [ ] CTA/Image section renders split layout — left side shows "The Smallest Act of Kindness..." heading + Donate Now / Become Volunteer buttons, right side shows bg image
- [ ] Volunteers grid displays four volunteer cards — 4 volunteer cards in responsive grid (1 col mobile, 2 col tablet, 4 col desktop)
- [ ] Testimonials carousel displays testimonial cards — testimonial cards visible with navigation
- [ ] CTA Banner section renders — "Do You Care Our Children?" heading + "Be A Volunteer" button visible
- [ ] Blog section displays three blog cards — 3 blog cards in responsive grid
- [ ] Design tokens applied correctly — primary gold #d49a3a used for buttons/accents, teal #042628 for footer, warm beige #f3f0eb for section backgrounds
- [ ] Accessibility standards met — nav, main, section, footer elements used appropriately
- [ ] Responsive breakpoints work — hero sidebar stacks below main content (`.col-lg-6` / `col-md-5 order-lg-last` split ends at 992)
