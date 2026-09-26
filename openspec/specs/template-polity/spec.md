# Template: Polity (Political / Party Landing Page)

## Purpose

Polity is a single-page political/party landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Politics" free template (source:
https://colorlib.com/wp/template/politics/, preview:
https://preview.colorlib.com/theme/politics/), built under a DIFFERENT
name (**Polity**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a Bootstrap 4 + jQuery template with a fixed header
(top bar + nav), fullscreen hero banner with dark overlay, election
countdown timer, 3-column services grid, split about section with
background image, masonry gallery, stat counters with overlay,
accordion goals section with video, brand logo carousel, 4-column
blog grid, and a dark footer with newsletter + social links.

**WHAT MAKES POLITY DISTINCT (signature behaviors):**

1. **Fullscreen hero with dark overlay + CTA.** A background image
   (banner-bg.jpg) fills the viewport, covered by a semi-transparent
   black overlay (`rgba(0,0,0,0.5)`). Centered text: uppercase
   subtitle ("Don't look further, This is our Leader"), large white h1
   ("Support Our Party"), paragraph, and a pill-shaped blue CTA button
   ("Get Started").

2. **Election countdown timer in a split card.** Below the hero, a
   light-background (`#f9f9ff`) split card: left side has "Election is
   knocking at door" heading + paragraph; right side is a solid blue
   (`#3898f8`) block with a countdown timer (days, hours, minutes,
   seconds) rendered in white text. This is a political-campaign
   specific element unique to this template.

3. **3-column services with image hover zoom.** Three cards in a row
   with image thumbnails, h4 titles, and paragraph descriptions. On
   hover, images scale 1.1× with a slight rotation (-2deg), and the
   title turns blue.

4. **Split about section with CSS background image.** The left half
   uses a CSS `::after` pseudo-element to render a full-height
   background image (`about-img.jpg`). The right half contains a
   heading ("Who we are to Serve the nation"), paragraph, and two
   sub-service items with Linearicons icons (diamond, phone) in a
   horizontal row.

5. **Masonry-style gallery.** Four images in a 2-row masonry layout:
   row 1 = 8-col + 4-col; row 2 = 6-col + 6-col. Images have hover
   opacity transition. Lightbox via Magnific Popup in the original
   (recreation can skip lightbox or use a simple modal).

6. **Stat counters on dark overlay.** A background image with dark
   overlay (`rgba(0,0,0,0.7)`) hosts 4 counters: "2K+ Projects
   Completed", "5.5K Total Employees", "959 Happy Clients", "367
   Tickets Submited". Each stat has a circular blue indicator ring
   and white text. Uses jQuery counterUp + waypoints in the original.

7. **Accordion goals + video section.** Left column: 4 accordion items
   (Success, Info, danger, Warning) with chevron icons that rotate
   90° when open; open item turns blue. Right column: background video
   image with dark overlay and a centered play button linking to YouTube.

8. **Brand logo carousel.** A light-background strip with 5+ grayscale
   brand logos that become full-color on hover. Uses Owl Carousel in
   the original.

9. **4-column blog grid.** Four blog cards: each has an image with
   hover zoom, a black date badge, h4 title, short excerpt, and a
   bottom bar with heart/bubble icons for likes and comments.

10. **Dark footer with newsletter + Instagram feed.** Three-column
    footer on dark navy (`#04091e`): left = link list, center =
    newsletter signup (email input + subscribe button), right =
    Instagram image grid (3×3). Bottom row: copyright text + social
    icon squares (dark bg, blue on hover).

## Design Tokens (extracted from preview CSS)

| Token                | Value                        | Usage                               |
| ---------------------| ----------------------------- | ----------------------------------- |
| Font family          | "Poppins", sans-serif         | All text                            |
| Primary brand color  | #3898f8                       | Buttons, links, accents, counters   |
| Body text            | #777                          | Paragraphs, general text            |
| Headings             | #222                          | h1–h6                               |
| Light background     | #f9f9ff                       | Cards, countdown, about, brands     |
| Header top bar       | #222222                       | Top bar background                  |
| Footer background    | #04091e                       | Dark navy footer                    |
| Banner overlay       | rgba(0,0,0,0.5)               | Hero dark overlay                   |
| Counter overlay      | rgba(0,0,0,0.7)               | Stats section overlay               |
| Primary button       | #3898f8, border-radius: 25px  | Pill-shaped CTA buttons             |
| Section gap          | 120px vertical padding        | Between major sections              |
| Selection            | #3898f8                       | Text selection highlight            |
| Social icon bg       | #111111                       | Footer social squares               |
| Footer social hover  | #3898f8                       | Footer social icon hover            |
| Date badge           | #000 background, white text   | Blog card date label                |

## Gherkin Requirements

### Requirement: Fixed header with top bar and navigation

The system SHALL display a fixed header with a dark top bar (social
icons + contact info) and a white main navigation bar with logo and
menu links.

#### Scenario: Top bar renders social links and contact

- **GIVEN** the Polity app is rendered
- **THEN** a dark (#222222) top bar SHALL display social icons
  (Facebook, Twitter, Dribbble, Behance)
- **AND** contact info (phone number, email) SHALL appear on the right

#### Scenario: Main navigation renders correctly

- **GIVEN** the Polity app is rendered
- **THEN** a white fixed navigation bar SHALL display below the top bar
- **AND** it SHALL contain a logo and menu links: Home, About, Service,
  Team, Blog (with dropdown), Contact
- **AND** the active link SHALL be visually distinguished

#### Scenario: Header scrolled state

- **GIVEN** the header is at the top of the page
- **WHEN** the user scrolls down
- **THEN** the header SHALL gain a box-shadow and semi-transparent
  background (`rgba(255,255,255,0.9)`)

### Requirement: Fullscreen hero banner with dark overlay

The system SHALL display a fullscreen hero section with a background
image, dark overlay, centered text, and a CTA button.

#### Scenario: Hero content renders

- **GIVEN** the Polity app is rendered
- **THEN** a fullscreen hero banner SHALL display with a dark overlay
- **AND** an uppercase subtitle text SHALL appear ("Don't look further,
  This is our Leader" or similar)
- **AND** a large white heading SHALL display ("Support Our Party" or
  similar)
- **AND** a paragraph description SHALL appear
- **AND** a pill-shaped blue (#3898f8) CTA button ("Get Started") SHALL
  be rendered

#### Scenario: Hero button hover

- **GIVEN** the hero banner is displayed
- **WHEN** the user hovers the CTA button
- **THEN** the button SHALL transition to a transparent background
  with a white border

### Requirement: Election countdown timer

The system SHALL display a split countdown card with text on the left
and a countdown timer on a blue background on the right.

#### Scenario: Countdown layout renders

- **GIVEN** the Polity app is rendered
- **THEN** a light-background (#f9f9ff) card SHALL display
- **AND** the left side SHALL show a heading ("Election is knocking
  at door" or similar) and a paragraph
- **AND** the right side SHALL show a countdown timer on a blue
  (#3898f8) background with white text

#### Scenario: Countdown displays time units

- **GIVEN** the countdown card is visible
- **THEN** the countdown SHALL display days, hours, minutes, and
  seconds in separate columns

### Requirement: 3-column services section

The system SHALL display a services section with a centered heading
and three service cards in a row.

#### Scenario: Services render with images and text

- **GIVEN** the Polity app is rendered
- **THEN** a "What we Offer" section heading SHALL display
- **AND** three service cards SHALL render in a row
- **AND** each card SHALL contain an image thumbnail, an h4 title,
  and a paragraph description

#### Scenario: Service card hover effect

- **GIVEN** a service card is displayed
- **WHEN** the user hovers the card
- **THEN** the image SHALL scale up (1.1×) with a slight rotation
- **AND** the title SHALL turn blue (#3898f8)

### Requirement: Split about section with background image

The system SHALL display a split about section with a background image
on the left and content on the right.

#### Scenario: About section layout

- **GIVEN** the Polity app is rendered
- **THEN** a light-background (#f9f9ff) section SHALL display
- **AND** the left half SHALL show a full-height background image
- **AND** the right half SHALL show a heading ("Who we are to Serve
  the nation" or similar), a paragraph, and two sub-service items

#### Scenario: Sub-service items render

- **GIVEN** the about section is displayed
- **THEN** two sub-service items SHALL render in a horizontal row
- **AND** each SHALL contain an icon (e.g. diamond, phone), an h4
  title link, and a paragraph

### Requirement: Masonry gallery section

The system SHALL display a gallery with a centered heading and a
masonry-style grid of images.

#### Scenario: Gallery grid layout

- **GIVEN** the Polity app is rendered
- **THEN** a "Our Gallery" section heading SHALL display
- **AND** four images SHALL render in a 2-row masonry layout:
  row 1 = 8-col + 4-col; row 2 = 6-col + 6-col

#### Scenario: Gallery hover effect

- **GIVEN** a gallery image is displayed
- **WHEN** the user hovers the image
- **THEN** the image SHALL transition to reduced opacity (0.7)

### Requirement: Stat counters on dark overlay

The system SHALL display a stats section with a dark overlay
background and four circular counters.

#### Scenario: Counter section renders

- **GIVEN** the Polity app is rendered
- **THEN** a dark-overlay section SHALL display with four counters
- **AND** each counter SHALL show a number with a suffix (e.g. "2K+",
  "5.5K", "959", "367")
- **AND** each counter SHALL have a circular blue (#3898f8) indicator
- **AND** each counter SHALL have a label (e.g. "Projects Completed")

### Requirement: Accordion goals section with video

The system SHALL display a goals/feedback section with an accordion
on the left and a video play area on the right.

#### Scenario: Accordion renders with four items

- **GIVEN** the Polity app is rendered
- **THEN** a "Goals to Achieve" section heading SHALL display
- **AND** four accordion items SHALL render (Success, Info, Danger,
  Warning or similar)
- **AND** each item SHALL have a heading and expandable content

#### Scenario: Accordion interaction

- **GIVEN** the accordion is displayed
- **WHEN** the user clicks an accordion heading
- **THEN** that item SHALL expand to show its content
- **AND** the heading background SHALL turn blue (#3898f8)
- **AND** the chevron icon SHALL rotate 90°

#### Scenario: Video play area renders

- **GIVEN** the accordion section is displayed
- **THEN** the right side SHALL show a background image with dark
  overlay and a centered play button

### Requirement: Brand logo carousel

The system SHALL display a brand/partner logo carousel strip.

#### Scenario: Brand carousel renders

- **GIVEN** the Polity app is rendered
- **THEN** a light-background strip SHALL display with brand logos
- **AND** logos SHALL be grayscale by default
- **AND** on hover, logos SHALL transition to full color

### Requirement: 4-column blog grid

The system SHALL display a blog section with a centered heading and
four blog cards.

#### Scenario: Blog cards render

- **GIVEN** the Polity app is rendered
- **THEN** a "Latest From Our Blog" section heading SHALL display
- **AND** four blog cards SHALL render in a row
- **AND** each card SHALL contain an image, a date badge, an h4 title,
  a short excerpt, and a bottom bar with like/comment counts

#### Scenario: Blog card hover effect

- **GIVEN** a blog card is displayed
- **WHEN** the user hovers the card
- **THEN** the image SHALL scale up (1.1×)
- **AND** the title SHALL turn blue (#3898f8)

### Requirement: Dark footer with newsletter and social

The system SHALL display a dark-footer section with links, newsletter
signup, Instagram feed, and social icons.

#### Scenario: Footer layout

- **GIVEN** the Polity app is rendered
- **THEN** a dark navy (#04091e) footer SHALL display
- **AND** three columns SHALL render: links, newsletter, Instagram feed
- **AND** a bottom row SHALL show copyright text and social icon squares

#### Scenario: Newsletter signup form

- **GIVEN** the footer is displayed
- **THEN** an email input and "Subscribe" button SHALL render
- **AND** the button SHALL be styled as a blue pill button

#### Scenario: Social icon hover

- **GIVEN** the footer is displayed
- **WHEN** the user hovers a social icon square
- **THEN** the background SHALL turn blue (#3898f8) and the icon SHALL
  turn white

### Requirement: Footer attribution

The system SHALL include the required Component Dock attribution.

#### Scenario: Component Dock credit

- **GIVEN** the Polity app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- polity` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual match vs the live preview at
      https://preview.colorlib.com/theme/politics/: fixed header with
      dark top bar, fullscreen hero with dark overlay + blue CTA,
      election countdown split card, 3-column services, split about
      with background image, masonry gallery, stat counters on overlay,
      accordion + video, brand carousel, 4-col blog, dark footer with
      newsletter + social.
- [ ] All design tokens applied: Poppins font, #3898f8 primary,
      #f9f9ff light bg, #04091e footer, #222 headings, pill buttons
      (25px radius), 120px section gaps.
- [ ] Responsive check at 768px and 480px: no horizontal overflow,
      stacked layout, countdown/stats grid collapses.
- [ ] No ColorLib references in any app file; footer links
      https://www.componentdock.com/.
