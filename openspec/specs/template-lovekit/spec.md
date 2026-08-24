# Template: Lovekit (Non-Profit / Charity Template)

## Purpose

Lovekit is a single-page non-profit / charity landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Lovecare" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Lovecare" — non-profit charity template
  (source: https://colorlib.com/wp/template/lovecare/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/lovecare/
  (HTTP 200, full rendered DOM + `css/style.css` (84KB) extracted).
  The TEMPLATES.md screenshot (`lovecare-colorlib-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (LoveCare brand, Home/About/Causes/Blog/Contact)
  → Hero ("Raising Hope" / "To the Homeless & Hopeless People" + parallax
  background + Join Us / Watch Video buttons) → Intro/Donation (split: left
  = welcome text + about blurb + 3 feature cards; right = fund counter
  "$1,850,000" + donation form with name/email/cause/amount) → Statistics
  (parallax bg, "Technical Statistics" + 4 counters: $60M / 9200 / 5800 / 2750) → Causes (carousel of 4 cause cards with progress bars, light bg)
  → CTA Image (parallax bg, quote + Donate Now + Volunteer buttons) →
  Volunteers (grid of 4 team member cards with photos) → Testimonials
  (parallax bg, carousel of testimonials) → CTA banner ("Do You Care Our
  Children?" + Be A Volunteer button) → Blog (3 recent post cards) → Footer
  (brand, recent posts, newsletter, social, copyright).
- **Design tokens extracted from `css/style.css`:**
  - Primary **gold/amber `#D49A3A`** (buttons, accents, counters).
  - Dark teal backgrounds: `#0A686E`, `#0A4F53`, `#082729`, `#112D2E`
    (footer, parallax overlays).
  - Light backgrounds: `#F3F0EB` (section bg-light), `#F8F9FA`, `#E9ECEF`.
  - Text dark: `#212529`, muted: `#6C757D`.
  - Fonts: **"Patrick Hand"** (display/headings — handwritten style) +
    **"Poppins"** (body text).
  - Buttons: primary = gold bg, white text, `border-radius: 40px` (pill);
    secondary = outlined.
  - Card borders: `border-radius: 4px`.
  - Parallax sections use `background-image` with dark overlay.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/lovekit-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied; icon-font classes replaced
  with lucide equivalents; Fund counter is static text (no counter animation
  dependency needed).

Lovekit lives in `apps/lovekit` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "LoveKit",
anchor links to the page's sections, and a mobile hamburger toggle.

#### Scenario: Navbar content

- **GIVEN** the Lovekit page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand name "LoveKit" and links to Home, About, Causes, Blog, and Contact
- **AND** the navbar SHALL show a mobile hamburger toggle for small screens

#### Scenario: Navbar responsive collapse

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the hamburger toggle
- **THEN** the navigation links SHALL expand/collapse

### Requirement: Hero section

The system SHALL render a full-width parallax hero with a background image,
a "Raising Hope" subheading, a headline, and two CTA buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a subheading "Raising Hope"
- **AND** a headline "To the Homeless & Hopeless People"
- **AND** a primary "Join Us" button and a secondary "Watch the Video" button

### Requirement: Intro / Donation section

The system SHALL render a split section: left side with welcome text and
feature cards; right side with a fund-raised counter and a donation form.

#### Scenario: Intro text side

- **GIVEN** the page is rendered
- **WHEN** the intro section is displayed
- **THEN** it SHALL show a "Welcome to Lovekit Charity" subheading
- **AND** a heading about education/charity
- **AND** three feature cards with icons and labels

#### Scenario: Donation form side

- **GIVEN** the page is rendered
- **WHEN** the donation form is displayed
- **THEN** it SHALL show a fund-raised counter (e.g. "$1,850,000")
- **AND** a "Donate Now" subheading
- **AND** input fields for name and email
- **AND** a cause selection dropdown (Food, Medical Health, Education, Environment)
- **AND** an amount input with currency prefix
- **AND** radio buttons for donation frequency (One Time / Monthly / Yearly)
- **AND** a "Send Message" submit button

#### Scenario: Form submit prevention

- **GIVEN** the donation form is displayed
- **WHEN** the user clicks submit
- **THEN** the form SHALL NOT navigate away (preventDefault)

### Requirement: Statistics section

The system SHALL render a parallax statistics section with 4 counter items.

#### Scenario: Statistics content

- **GIVEN** the page is rendered
- **WHEN** the statistics section is displayed
- **THEN** it SHALL show 4 statistics with icons and values
- **AND** values SHALL include "$60M", "9200", "5800", "2750"

### Requirement: Causes section

The system SHALL render a causes carousel on a light background with
cause cards including progress bars.

#### Scenario: Causes content

- **GIVEN** the page is rendered
- **WHEN** the causes section is displayed
- **THEN** it SHALL show a "Our Causes" subheading and "Our Causes & Help Us" heading
- **AND** it SHALL render at least 4 cause cards
- **AND** each card SHALL show an image, title, description, and a progress bar

### Requirement: CTA image section

The system SHALL render a full-width parallax section with an inspirational
quote and two CTA buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA image section is displayed
- **THEN** it SHALL show a quote about kindness
- **AND** a "Donate Now!" primary button and a "Become A Volunteer" secondary button

### Requirement: Volunteers section

The system SHALL render a volunteer team grid with member cards.

#### Scenario: Volunteers content

- **GIVEN** the page is rendered
- **WHEN** the volunteers section is displayed
- **THEN** it SHALL show a "Meet Our Volunteer" subheading and "Our Volunteer" heading
- **AND** it SHALL render at least 4 volunteer cards
- **AND** each card SHALL show a photo, name, and role

### Requirement: Testimonials section

The system SHALL render a parallax testimonial section with a carousel.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a "Testimonial" subheading and "What People Says" heading
- **AND** it SHALL render at least 2 testimonial entries

### Requirement: CTA banner

The system SHALL render a call-to-action banner with a headline and button.

#### Scenario: CTA banner content

- **GIVEN** the page is rendered
- **WHEN** the CTA banner is displayed
- **THEN** it SHALL show "Do You Care Our Children?" heading
- **AND** a "Be A Volunteer" button

### Requirement: Blog section

The system SHALL render a recent blog posts section with 3 post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show an "Our Blog" subheading and "Recent From Blog" heading
- **AND** it SHALL render at least 3 blog post cards
- **AND** each card SHALL show an image, title, and a "Read More" link

### Requirement: Footer

The system SHALL render a footer with brand info, recent posts, and
a link to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand name "LoveKit"
- **AND** a "Recent Posts" column with at least 2 entries
- **AND** a copyright notice
- **AND** a link to https://www.componentdock.com/ (branded "Component Dock")

### Requirement: Dark mode

The system SHALL support dark mode toggle.

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user toggles dark mode
- **THEN** the `.dark` class SHALL be toggled on `document.documentElement`
- **AND** the page SHALL apply dark mode styles

## Verification checklist

- [ ] Navbar renders with brand + nav links + mobile toggle
- [ ] Hero shows subheading, headline, two CTA buttons, parallax bg
- [ ] Intro split: left welcome + features, right fund counter + donation form
- [ ] Donation form has name, email, cause select, amount, frequency radios, submit
- [ ] Statistics section shows 4 counters with icons
- [ ] Causes section shows 4+ cards with progress bars
- [ ] CTA image section shows quote + two buttons
- [ ] Volunteers section shows 4 team member cards
- [ ] Testimonials section shows testimonial entries
- [ ] CTA banner shows headline + button
- [ ] Blog section shows 3 post cards with images
- [ ] Footer shows brand, recent posts, Component Dock link
- [ ] Dark mode toggle works
- [ ] All sections match the original Lovecare layout order
- [ ] Design tokens: gold #D49A3A primary, Patrick Hand + Poppins fonts, pill buttons
