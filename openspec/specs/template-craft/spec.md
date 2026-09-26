# Template: Craft (Personal Portfolio)

## Purpose

Craft is a single-page personal portfolio site in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Beckham"
free template (source: https://colorlib.com/wp/template/beckham/, preview:
https://preview.colorlib.com/theme/beckham/), built under a DIFFERENT
name (**Craft**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a Bootstrap 4 + jQuery portfolio template with a slide-in
side navigation (author photo + numbered menu), fullscreen hero slider
with dark overlay, split about section with oversized watermark text,
3-column services list, alternating portfolio grid with background images
and parallax, stat counters, and a dark brown footer with social links.

**WHAT MAKES CRAFT DISTINCT (signature behaviors):**

1. **Slide-in side navigation with author photo.** A full-height dark
   (#121212, 99% opacity) side nav slides in from the right. Left 30%
   shows the author photo with a dark overlay; right side has a circular
   author image, "Beckham Muff" logo text (uppercase, white), and 6
   numbered menu items (01 Home, 02 Resume, 03 Services, 04 Portfolio,
   05 Blog, 06 Contact). The nav toggle is a hamburger icon in the
   fixed header.

2. **Fullscreen hero slider (Owl Carousel).** Two slides with background
   images, dark overlay, and parallax scroll effect. Each slide has
   centered text: small uppercase link ("Hello! I'm" / "I'm from Berlin")
   + large h1 ("Beckham Muff" / "A Web Designer"). Uses scrollax.js
   for vertical parallax translation.

3. **Oversized "About" watermark text.** The about section has a massive
   (10em on desktop) "About" text positioned absolutely behind the
   content as a decorative watermark. The actual content is in a 6-col
   offset with author image, heading, paragraph, social links, and
   contact info.

4. **3-column services with icons and list items.** Three service cards,
   each with a centered icon (layers, gears, code) and a list of 3
   service items (e.g. "UI/UX Design", "Mobile App Design",
   "Responsive Design"). Cards have border and padding.

5. **Alternating portfolio grid with parallax.** Six portfolio items in
   alternating left/right layout. Each item has a background image
   (with parallax via scrollax) and a search icon overlay on hover.
   Text side shows subheading category, h2 title, paragraph, and
   "View Project" link. Items alternate image-left/text-right and
   text-left/image-right.

6. **Asymmetric stat counters.** Three counters (Clients: 420, Projects:
   890, Coffee: 1000) displayed in staggered rows (left, center, right)
   with large numbers and small labels.

7. **Dark brown footer.** A compact centered footer on dark brown
   (#3c312e) with social icons (Twitter, Facebook, Instagram) and
   contact email. Copyright text at the bottom.

## Design Tokens (extracted from preview CSS)

| Token                | Value                           | Usage                                |
| ---------------------| --------------------------------| ------------------------------------ |
| Font family (body)   | "Montserrat", sans-serif        | Body text, paragraphs                |
| Font family (accent) | "Poppins", Arial, sans-serif    | Headings, accent text                |
| Primary green        | #79efb4                         | Buttons, accents, highlights         |
| Dark background      | #121212                         | Side nav, overlays                   |
| Footer background    | #3c312e (dark brown)            | Footer bg                            |
| Overlay              | rgba(18,18,18,0.99)             | Side nav bg                          |
| Hero overlay         | rgba(0,0,0,0.5) (inferred)      | Slider image overlay                 |
| White                | #fff                            | Text on dark backgrounds             |
| Light gray           | #f8f8f8                         | Section backgrounds                  |
| Body text            | #858585 / #4d4d4d               | Paragraphs                           |
| Heading text         | #121212                         | Dark headings on light bg            |
| Heading section span | uppercase, letter-spacing: 5px  | Section subtitle labels              |
| Heading section h2   | font-weight: 700, font-size: 40px | Section titles                     |
| Counter number       | large bold number                | Stats display                        |
| Counter label        | .ftco-label style                | Small label below numbers            |
| Logo                 | 20px, uppercase, white           | Header + nav logo                    |
| Logo image           | 50×50px, border-radius: 50%      | Circular author photo in header      |
| Portfolio image      | background-image + scrollax      | Parallax portfolio items             |
| Portfolio icon       | centered search icon overlay     | Hover effect on portfolio images     |
| Button primary       | #79efb4 bg, dark text            | Primary action buttons               |

## Gherkin Requirements

### Requirement: Slide-in side navigation

The system SHALL display a slide-in side navigation with author photo
and numbered menu links.

#### Scenario: Nav toggle opens side menu

- **GIVEN** the Craft app is rendered
- **THEN** a hamburger nav toggle SHALL be visible in the header
- **WHEN** the user clicks the nav toggle
- **THEN** a full-height dark (#121212) side nav SHALL slide in from
  the right
- **AND** the left 30% SHALL show the author photo with dark overlay
- **AND** the right side SHALL show a circular author photo, the name
  "Craft" (or similar), and 6 numbered menu items

#### Scenario: Nav toggle closes side menu

- **GIVEN** the side nav is open
- **WHEN** the user clicks the nav toggle again
- **THEN** the side nav SHALL slide out

#### Scenario: Nav menu links

- **GIVEN** the side nav is open
- **THEN** 6 menu items SHALL render: Home, Resume, Services, Portfolio,
  Blog, Contact
- **AND** each item SHALL be prefixed with a two-digit number (01–06)

### Requirement: Fixed header with logo

The system SHALL display a fixed header with a circular author photo
and logo text.

#### Scenario: Header renders

- **GIVEN** the Craft app is rendered
- **THEN** a fixed header SHALL display at the top of the page
- **AND** it SHALL contain a circular 50×50px author photo
- **AND** logo text ("Craft" or similar) in uppercase white

### Requirement: Fullscreen hero slider with parallax

The system SHALL display a fullscreen hero slider with background
images, dark overlay, and parallax scroll effect.

#### Scenario: Hero slider renders

- **GIVEN** the Craft app is rendered
- **THEN** a fullscreen hero section SHALL display with a dark overlay
- **AND** at least two slides SHALL rotate (auto-play or manual)
- **AND** each slide SHALL show centered text: a small uppercase
  subtitle + a large heading (name/role)

#### Scenario: Hero parallax effect

- **GIVEN** the hero slider is displayed
- **WHEN** the user scrolls down
- **THEN** the hero text SHALL translate vertically at a different
  speed than the scroll (parallax effect)

### Requirement: Split about section with watermark text

The system SHALL display a split about section with a large decorative
watermark text behind the content.

#### Scenario: About section layout

- **GIVEN** the Craft app is rendered
- **THEN** a section SHALL display with a large "About" text (10em on
  desktop) positioned as a decorative watermark
- **AND** a 6-column content area SHALL show the author intro, social
  links (Twitter, Facebook, Instagram), and contact info (email, phone)

#### Scenario: About watermark responsive

- **GIVEN** the about section is displayed on mobile (< 992px)
- **THEN** the oversized "About" watermark text SHALL be hidden

### Requirement: 3-column services section

The system SHALL display a services section with three centered
service cards.

#### Scenario: Services render

- **GIVEN** the Craft app is rendered
- **THEN** a centered heading "My services" SHALL display
- **AND** three service cards SHALL render in a row
- **AND** each card SHALL have a centered icon and a list of 3
  service items

### Requirement: Alternating portfolio grid with parallax

The system SHALL display a portfolio section with alternating
left/right layout items using background images.

#### Scenario: Portfolio items render

- **GIVEN** the Craft app is rendered
- **THEN** a centered heading "Checkout a few of my works" SHALL display
- **AND** six portfolio items SHALL render in alternating layout
  (image-left/text-right, then text-left/image-right)
- **AND** each item SHALL have a category subheading, h2 title,
  paragraph, and "View Project" link

#### Scenario: Portfolio hover effect

- **GIVEN** a portfolio item is displayed
- **WHEN** the user hovers the image area
- **THEN** a search icon overlay SHALL appear centered on the image

#### Scenario: Portfolio parallax

- **GIVEN** portfolio items are displayed
- **WHEN** the user scrolls
- **THEN** portfolio images SHALL have a parallax scroll effect

### Requirement: Stat counters

The system SHALL display three stat counters in asymmetric rows.

#### Scenario: Counters render

- **GIVEN** the Craft app is rendered
- **THEN** three counters SHALL display: Clients (420), Projects (890),
  Coffee (1000)
- **AND** each counter SHALL show a large number and a small label
- **AND** the counters SHALL be displayed in staggered rows (left,
  center, right alignment)

### Requirement: Dark footer with social links

The system SHALL display a dark brown footer with social icons and
contact info.

#### Scenario: Footer layout

- **GIVEN** the Craft app is rendered
- **THEN** a dark brown (#3c312e) footer SHALL display
- **AND** centered social icons (Twitter, Facebook, Instagram) SHALL
  render
- **AND** a contact email link SHALL display
- **AND** a copyright line SHALL appear at the bottom

#### Scenario: Footer attribution

- **GIVEN** the footer is displayed
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics.

#### Scenario: Semantics

- **GIVEN** the Craft app is rendered
- **THEN** all sections SHALL use semantic HTML (nav, main, section,
  footer)
- **AND** the side nav SHALL have proper ARIA attributes
  (aria-expanded, aria-hidden)
- **AND** all images SHALL have descriptive alt text
- **AND** interactive elements SHALL have focus-visible rings

## Verification checklist

- [ ] `npm run verify:app -- craft` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual match vs the live preview at
      https://preview.colorlib.com/theme/beckham/: dark side nav with
      author photo, hero slider with parallax, about with watermark
      text, 3-column services, alternating portfolio grid, counters,
      dark brown footer.
- [ ] All design tokens applied: Montserrat body + Poppins headings,
      #79efb4 primary, #121212 dark, #3c312e footer, uppercase section
      subtitles with letter-spacing.
- [ ] Responsive check at 768px and 480px: side nav works on mobile,
      about watermark hidden, portfolio stacks vertically.
- [ ] No ColorLib references in any app file; footer links
      https://www.componentdock.com/.
