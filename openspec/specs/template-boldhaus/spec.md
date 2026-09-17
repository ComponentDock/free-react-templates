# Template: Boldhaus (Creative Agency)

## Purpose

Boldhaus is a single-page CREATIVE AGENCY website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Dup" free template (source:
https://colorlib.com/wp/template/dup/), built under a DIFFERENT name
(**Boldhaus**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

The original is a Bootstrap 4 one-page template with a fullscreen hero,
studio showcase, achievement cards, video banner, skill progress bars,
an Owl Carousel testimonials section, contact info, and a dark-red footer
with a newsletter subscription. The dominant brand color is a bold crimson
red (#e0003b) used for button borders/hover fills, progress bars,
achievement card hover states, and section overlays on image backgrounds.
The font is Poppins (Google Fonts). The overall aesthetic is clean,
modern, and agency-oriented with generous whitespace and section-separator
gaps.

## Naming

The ColorLib source name "Dup" is FORBIDDEN as the app name. **Boldhaus**
is the new, original name — single lowercase word, kebab-case, no
collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified 2026-09-18). Source slug `dup` + preview URL
are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Dup" (page title: "Dup"). Listed in TEMPLATES.md
  under the unchecked items at line 1465.
  Source: https://colorlib.com/wp/template/dup/
- **Live preview — REACHABLE (verified 2026-09-18 by direct fetch):**
  `https://preview.colorlib.com/theme/dup/` (HTTP 200, 23,480 bytes).
  Stylesheets: `css/main.css` (33,364 bytes — all custom styling on top
  of Bootstrap 4). Fonts: Google Fonts Poppins (100/300/500 weights
  loaded via Cloudflare CDN @font-face). Scripts: jQuery 2.2.4,
  Bootstrap JS, Owl Carousel, Magnific Popup, Nice Select, custom
  `js/main.js`.
- **Live DOM structure (from the fetched HTML + CSS):**
  - `body.dup-body` → `div.dup-body-wrap`
  - **Header** (`header.default-header`): logo image + nav links
    (Home, Generic, Elements) with a hamburger menu bar icon (linearicons
    `lnr-menu`).
  - **Banner Area** (`section.banner-area.relative`): fullscreen-height
    hero with a dark overlay (`div.overlay.overlay-bg`), split into
    left content (h1 "Sleek and Clean with same perspective", paragraph,
    "Get Started" primary-btn with arrow) and right image (`banner.png`).
    Background: `#fff`. Overlay: solid dark (likely rgba dark).
  - **Studio Area** (`section.section-gap.studio-area`): red overlay
    (`rgba(224,0,59,0.8)`), split into left thumbnail image (rounded
    3px) and right content (h2 "Green Forest Studio", paragraph, "View
    More" primary-btn).
  - **Achievement Area** (`section.section-gap.achivement-area`): white
    background. Left column: h2 "Our Achievements", paragraph, "View
    More" primary-btn. Right column: 6 icon cards in a 3×2 grid
    (Behance, Dribbble, YouTube, GitHub, Trophy, Cash Prizes) — each
    card has a light bg (`#f9fcff`) icon block that turns red (`#e0003b`)
    on hover with white icon.
  - **Video Area** (`section.video-area`): background image
    (`video-area-bg.jpg`) + red overlay (`rgba(224,0,59,0.8)`), centered
    play button image + h3 "Everyone wants to be unique" (white text).
  - **Skill Area** (`section.section-gap.skill-area`): white background.
    Left column: h2 "Our Tools Expertness", paragraph, "View More"
    primary-btn. Right column: 4 labeled progress bars (Adobe Photoshop
    70%, Illustrator 60%, InDesign 50%, After Effects 80%) — bar bg
    `#e0003b`, track bg `#f9fcff`.
  - **Carousel Area** (`section.section-gap.carousel-area`): background
    image (`carousel-bg.jpg`) + red overlay (`rgba(224,0,59,0.8)`).
    Owl Carousel with 5 identical slides: left thumb image + right
    content (h2 "Glowing Milk Bottle", h5 subtitle, paragraph, white
    variant primary-btn). All slides are identical placeholders.
  - **Contact Area** (`section.contact-area`): white bg, 4 columns
    (Visit Our Office / Let's call us / Let's Email Us / Customer
    Support), each with a centered h6 heading and paragraph of contact
    details.
  - **Footer** (`footer.section-gap.footer-widget-area`): background
    image (`f-bg.jpg`) + red overlay (`rgba(224,0,59,0.8)`).
    - Subscription form: email input + "Subscribe now" primary-btn
    - 4-column widget area: About Agency, Navigation Links (×2),
      Instafeed (8 placeholder images in a flex-wrap grid)
    - Footer bottom: copyright text + social icon links (Facebook,
      Twitter, Dribbble, Behance)
- **Screenshot** (TEMPLATES.md line 1465):
  `dup-free-creative-agency-website-template.jpg` — not analyzable via
  browser tool (daemon unavailable). Design inferred from the live
  preview HTML/CSS above.

## Design tokens

| Token               | Value                                  | Notes                                                                                     |
| ------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------- |
| `--color-brand`     | `#e0003b`                              | Crimson red — primary buttons, progress bars, achievement hover, section overlays          |
| `--color-brand-rgb` | `224, 0, 59`                           | For `rgba()` overlays: `rgba(224, 0, 59, 0.8)`                                           |
| `--color-ink`       | `#222222`                              | Heading text, body text default                                                           |
| `--color-muted`     | `#777777`                              | Body paragraph text, achievement icon default color                                       |
| `--color-bg`        | `#fff`                                 | Page background, banner area, achievement area, skill area, contact area                  |
| `--color-card`      | `#f9fcff`                              | Light blue-white for progress bar tracks, achievement card backgrounds                     |
| `--font-body`       | `'Poppins', sans-serif`                | Google Fonts, weights 300/400/500 (base 14px)                                             |
| `--btn-radius`      | `25px`                                 | Pill-shaped buttons (border-radius 25px)                                                  |
| `--btn`             | `border: 1px solid #e0003b; bg: transparent; color: #222` | Normal state                                                               |
| `--btn:hover`       | `bg: #e0003b; color: #fff`            | Fill on hover                                                                              |
| `--btn-white`       | `border: 1px solid #fff; color: #fff`  | White variant (for dark backgrounds)                                                       |
| `--btn-white:hover` | `bg: #fff; color: #e0003b`            | White fill on hover, red text                                                             |
| `--section-gap`     | `section-gap` class                    | Vertical spacing between sections (Bootstrap section-gap utility)                         |
| `--overlay`         | `rgba(224, 0, 59, 0.8)`               | Semi-transparent red overlay on image-background sections                                  |
| `--progress-bar`    | `height: 5px; bg: #e0003b`             | Skill progress bars                                                                       |
| `--progress-track`  | `bg: #f9fcff`                          | Progress bar track background                                                             |
| `--card-radius`     | `3px`                                  | Subtle rounding on studio thumbnail                                                       |

## Requirements

### Requirement: Page shell and header

The system SHALL render the Poppins-font page with a sticky/transparent
header containing a logo and navigation links.

#### Scenario: Header rendering

- **GIVEN** the Boldhaus app is rendered on a desktop viewport
- **THEN** the header SHALL display a logo image on the left and
  navigation links (Home, Generic/Features, Elements/Services) on the right
- **AND** the page font SHALL be Poppins (Google Fonts, 300/400/500),
  base 14px, body text `#777777`, headings `#222222`
- **AND** the header SHALL include a hamburger menu icon for mobile viewports

### Requirement: Hero banner

The system SHALL render a fullscreen-height hero section with a dark
overlay, a headline + paragraph + CTA on the left, and an image on the
right.

#### Scenario: Hero content

- **GIVEN** the Boldhaus app is rendered on a desktop viewport
- **THEN** a fullscreen-height banner SHALL render with a dark overlay
- **AND** the left half SHALL show an h1 headline ("Sleek and Clean with
  same perspective" or equivalent agency headline), a supporting
  paragraph, and a "Get Started" pill-shaped primary button
- **AND** the right half SHALL show a hero illustration/image
  (placeholder via picsum)

#### Scenario: Hero responsive layout

- **GIVEN** the viewport is at or below 768px
- **THEN** the hero SHALL stack vertically with the text above the image
- **AND** the height SHALL adapt to content (not forced fullscreen on mobile)

### Requirement: Studio showcase section

The system SHALL render a red-overlay section with an image thumbnail on
the left and text content on the right.

#### Scenario: Studio section rendering

- **GIVEN** the Boldhaus app is scrolled to the studio section
- **THEN** a section with red semi-transparent overlay (`rgba(224,0,59,0.8)`)
  SHALL render over a background image
- **AND** the left column SHALL show a rounded thumbnail image
- **AND** the right column SHALL show an h2 ("Green Forest Studio" or
  agency equivalent), a paragraph, and a "View More" primary button

### Requirement: Achievements grid

The system SHALL render a white-background section with descriptive text
on the left and a 3×2 grid of icon achievement cards on the right.

#### Scenario: Achievement cards

- **GIVEN** the Boldhaus app is scrolled to the achievements section
- **THEN** the left column SHALL show an h2 ("Our Achievements"), a
  paragraph, and a "View More" primary button
- **AND** the right column SHALL render 6 icon cards in a responsive grid
- **AND** each card SHALL have a light `#f9fcff` background with a
  centered icon and label below it
- **WHEN** the user hovers over an achievement card
- **THEN** the card background SHALL transition to `#e0003b` (red) and
  the icon SHALL turn white

### Requirement: Video banner

The system SHALL render a full-width section with a background image, red
overlay, a play button, and a white headline.

#### Scenario: Video section rendering

- **GIVEN** the Boldhaus app is scrolled to the video section
- **THEN** a full-width section with a background image and red
  overlay (`rgba(224,0,59,0.8)`) SHALL render
- **AND** a play button icon SHALL be centered
- **AND** a white h2/h3 headline ("Everyone wants to be unique" or
  equivalent) SHALL render below the play button
- **AND** clicking the play button SHALL open a YouTube video in a new
  tab (or be a non-functional placeholder)

### Requirement: Skills / progress bars

The system SHALL render a white-background section with descriptive text
on the left and labeled progress bars on the right.

#### Scenario: Progress bar rendering

- **GIVEN** the Boldhaus app is scrolled to the skills section
- **THEN** the left column SHALL show an h2 ("Our Tools Expertness"),
  a paragraph, and a "View More" primary button
- **AND** the right column SHALL render 4 labeled progress bars
- **AND** each progress bar SHALL show the tool name above a thin
  (5px) bar with `#f9fcff` track and `#e0003b` fill
- **AND** the bars SHALL be at their specified widths (Photoshop 70%,
  Illustrator 60%, InDesign 50%, After Effects 80%)

### Requirement: Carousel / testimonials

The system SHALL render a full-width carousel section with background
image, red overlay, and slides containing an image + text content.

#### Scenario: Carousel rendering

- **GIVEN** the Boldhaus app is scrolled to the carousel section
- **THEN** a section with background image and red overlay SHALL render
- **AND** a carousel with 3-5 slides SHALL be displayed
- **AND** each slide SHALL have a left image thumbnail and right content
  (h2 heading, h5 subtitle, paragraph, white variant "View More" button)
- **AND** the carousel SHALL auto-advance with navigation dots/arrows

#### Scenario: Carousel responsive

- **GIVEN** the viewport is at or below 768px
- **THEN** the carousel SHALL stack the image above the text content

### Requirement: Contact info

The system SHALL render a white-background 4-column contact section with
centered address blocks.

#### Scenario: Contact columns

- **GIVEN** the Boldhaus app is scrolled to the contact section
- **THEN** 4 centered columns SHALL render: Office Address, Phone
  Numbers, Email Addresses, Customer Support
- **AND** each column SHALL have an h6 heading and a paragraph of
  contact details (use placeholder data)
- **AND** the columns SHALL collapse to 2×2 on tablet and 1-column
  on mobile

### Requirement: Footer

The system SHALL render a dark-background footer with a newsletter
subscription form, 4-column widget area, social links, and copyright.

#### Scenario: Footer newsletter

- **GIVEN** the Boldhaus app is scrolled to the footer
- **THEN** a newsletter subscription form SHALL render at the top of the
  footer with an email input and a "Subscribe now" pill button
- **AND** the footer SHALL have a background image with red overlay

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **THEN** a 4-column widget area SHALL show: About Agency (link list),
  Navigation Links (link list), another Navigation Links column, and
  Instafeed (grid of 8 placeholder images)
- **AND** the footer bottom SHALL show copyright text and social icon
  links (Facebook, Twitter, Dribbble, Behance)

#### Scenario: Component Dock attribution

- **GIVEN** the footer is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics.

#### Scenario: Semantics

- **GIVEN** the Boldhaus app is rendered
- **THEN** all sections SHALL use semantic HTML (`<header>`, `<section>`,
  `<footer>`, `<nav>`, `<main>`)
- **AND** all images SHALL have meaningful alt text
- **AND** all interactive elements SHALL have visible focus rings
- **AND** the navigation SHALL be accessible via keyboard

### Requirement: Section ordering

The template sections SHALL appear in this exact order:

1. Header (logo + nav)
2. Hero Banner (fullscreen, dark overlay, split layout)
3. Studio Showcase (red overlay, split layout)
4. Achievements (white bg, text + icon grid)
5. Video Banner (background image, red overlay)
6. Skills / Progress Bars (white bg, text + bars)
7. Carousel / Testimonials (background image, red overlay)
8. Contact Info (white bg, 4 columns)
9. Footer (dark bg, subscription + widgets + social + copyright)

## Verification checklist

- [ ] `npm run verify:app -- boldhaus` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/dup/: fullscreen hero with
      dark overlay, red-overlay studio section, achievement icon grid,
      video banner, progress bars, carousel, contact columns, dark
      footer with subscription form.
- [ ] Behavior check: carousel auto-advances, achievement cards
      animate on hover, progress bars display at correct widths,
      responsive layout stacks correctly on mobile.
- [ ] Responsive check at 768px (sections stack, no horizontal overflow).
- [ ] Footer links to https://www.componentdock.com/.
