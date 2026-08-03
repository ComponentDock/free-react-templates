# Template: Animal Shelter (Pet Adoption Landing)

## Purpose

Animal Shelter is a single-page pet-adoption landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Animal Shelter" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a warm, adoption-focused landing page: a full-screen banner
("Adopt Us. We need your help.") with a gold CTA, an overlapping pet-photo
strip, an adoption-process explainer (4 steps), testimonials from "guardians",
a volunteer call-to-action, and a dark footer. Animal Shelter recreates that
structure section-for-section with matching layout, colors, typography, and
content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Animal Shelter" — pet adoption website template
  (source: https://colorlib.com/wp/template/animal-shelter/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/animalshelter/
  (HTTP 200 — note: the working preview slug is `animalshelter`, NOT
  `animal-shelter`; full rendered DOM + `css/main.css` (53KB) extracted; this
  non-Astro template is served directly by the preview portal — NOT in
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`animalshelter-free-template-1.jpg`) is the visual reference; the design
  below is reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Fixed header: logo + nav (Home, About Us, Cats, Dogs, Volunteer, Blog
     dropdown, Contact); transparent until scroll, then dark
     `rgba(0,0,0,0.7)`.
  2. Banner (`banner-area`, image bg + `rgba(0,0,0,0.4)` overlay): h1
     "Adopt Us. We need your help." (white, 60px, uppercase), sub-head
     paragraph, button "Find a pet to adopt".
  3. Pet image strip (`image-carusel-area`, `margin-top: -170px` so it
     overlaps the banner): 4 pet photos (c1–c4) on black.
  4. Select-pet band (`callto-top-area`, `.callto-top-wrap` bg `#f9f9ff`):
     h1 "Please select your favourite pet" + button "Fill Adoption Form".
  5. About (`home-about-area`, 2 cols): image left; right h1 "Globally
     Connected by Large Network", h5 "We are here to listen from you deliver
     exellence", paragraph, button "get details".
  6. Video (`video-area`): image bg (330px) with overlay + play button, then
     h4 "Watch this video how they live here" + paragraph.
  7. Process (`process-area`, bg `#f9f9ff`): h1 "Process to adopt a pet" +
     intro "Who are in extremely love with eco friendly system." + 4 cards —
     Pet Selection, Meeting Authority, Adoption Form Filling, Bring to new
     family (icons: thumbs-up, user, license, magic-wand).
  8. Testimonials (`testomial-area`): h1 "Testimonials from our guardians" +
     carousel cards (avatar, quote, "Mark Alviro Wiens", "CEO at Google").
  9. Volunteer CTA (`calltoaction-area`, image bg + overlay): h1 "Want to
     help? Become a Volunteer" + paragraph + buttons "View pdf details" /
     "Register now" (white bg, `#222` text).
  10. Footer (`footer-area`, bg `#1e1c27`, `pt-120 pb-80`): About Us (h6 +
      blurb), Useful Links (Home, Service, About, Case Study, Pricing, Team,
      Blog), Contact Us (icon rows: "Binghamton, New York / 4343 Hinkle
      Deegan Lake Road", "00 (953) 9865 562 / Mon to Fri 9am to 6 pm",
      "support@colorlib.com"); bottom bar: copyright + social icons
      (facebook, twitter, dribbble, behance).
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **gold #fab700** (`.primary-btn` background, `::selection`).
  - Text: body `#777777`, weight 300, 14px, line-height 1.625em; headings h1
    36px (banner h1 60px / weight 600 / white / uppercase), h4 18px, h5 16px.
  - Font: **"Poppins"** (Poppins, sans-serif) via Google Fonts.
  - Buttons: `.primary-btn` — gold bg, white text, weight 500, line-height
    42px, padding 0 30px, uppercase, square corners (no radius).
  - Section backgrounds: `#f9f9ff` (process, select-pet band), `#1e1c27`
    (footer), image backgrounds with `rgba(0,0,0,0.4)` overlay (banner, video,
    CTA); `.section-gap` = 120px 0.
  - Header: fixed, transparent; `.header-scrolled` → `rgba(0,0,0,0.7)`.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/animal-shelter-<n>/<w>/<h>`); icons → lucide-react
  (ThumbsUp, User, ClipboardList, Wand2, Home, Phone, Mail, Play, Menu,
  Sun/Moon); brand social icons (facebook/twitter/dribbble/behance — removed
  from lucide-react) → inline SVG; Poppins via Google Fonts; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.

Animal Shelter lives in `apps/animal-shelter` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Animal
Shelter", links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Animal Shelter page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Animal Shelter" and links to
  About and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero banner

The system SHALL render a full-width banner with a headline, a short
subheading, and a primary call-to-action button over a darkened image
background.

#### Scenario: Banner content

- **GIVEN** the page is rendered
- **WHEN** the banner is displayed
- **THEN** it SHALL contain a level-1 heading "Adopt Us. We need your help."
- **AND** it SHALL show a "Find a pet to adopt" button

### Requirement: Pet photo strip

The system SHALL render a strip of pet photos that overlaps the bottom of the
banner.

#### Scenario: Pet strip content

- **GIVEN** the page is rendered
- **WHEN** the photo strip is displayed
- **THEN** it SHALL show at least four pet photos

### Requirement: Select-pet band

The system SHALL render a light band prompting visitors to pick a pet with an
adoption-form button.

#### Scenario: Band content

- **GIVEN** the page is rendered
- **WHEN** the select-pet band is displayed
- **THEN** it SHALL contain a heading "Please select your favourite pet"
- **AND** it SHALL show a "Fill Adoption Form" button

### Requirement: About section

The system SHALL render a two-column about section with an image, a heading,
a tagline, and a details button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "Globally Connected by Large Network"
- **AND** it SHALL show a "get details" button

### Requirement: Video section

The system SHALL render a video teaser with a play button and a caption.

#### Scenario: Video content

- **GIVEN** the page is rendered
- **WHEN** the video section is displayed
- **THEN** it SHALL contain a heading "Watch this video how they live here"
- **AND** it SHALL show a play button

### Requirement: Adoption process section

The system SHALL render the adoption process as four step cards with icons.

#### Scenario: Process content

- **GIVEN** the page is rendered
- **WHEN** the process section is displayed
- **THEN** it SHALL contain a heading "Process to adopt a pet"
- **AND** it SHALL show the steps Pet Selection, Meeting Authority, Adoption
  Form Filling, and Bring to new family

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least one guardian
quote card.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Testimonials from our guardians"
- **AND** it SHALL show at least one testimonial card with a name and role

### Requirement: Volunteer call-to-action

The system SHALL render a volunteer CTA band with two buttons over a darkened
image background.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL contain a heading "Want to help? Become a Volunteer"
- **AND** it SHALL show "View pdf details" and "Register now" buttons

### Requirement: Footer

The system SHALL render a footer with about text, a useful-links column,
contact details, social icons, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Us" widget, a "Useful Links" column, and a
  "Contact Us" column with address, phone, and email
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Animal Shelter app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Animal Shelter — Pet Adoption Template"
