# Template: Turntable (DJ / Music Event)

## Purpose

Turntable is a single-page DJ/music event landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Dj" free template (source:
https://colorlib.com/wp/template/dj/), built under a DIFFERENT name
(**Turntable**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

The original is a Bootstrap 4 single-page template with a dark (black)
background, gold/amber (`#e4ae50`) brand accent, two Google Fonts
(Nunito body + Montserrat headings), AOS scroll animations, and a
multi-section layout: transparent navbar overlaying a hero with a
background image, Featured Events (3-column cards with date badges),
Upcoming Events (asymmetric 1+2 grid), a video+text split section, and
a 3-column dark footer with subscribe form and embedded video.

## Naming

The ColorLib source name "Dj" is FORBIDDEN as the app name. **Turntable**
is the new, original name — single lowercase word, kebab-case `turntable`,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `turntable` in all three).
Source slug + preview URL recorded in the design reference below.

## Design reference (replication findings)

- **Original:** ColorLib "Dj" (page title: "Dj — Colorlib Website
  Template"). Listed in TEMPLATES.md under the DJ/Music section
  (first `- [ ]` item at line 2265). Source slug: `dj`.
- **Source URL:** https://colorlib.com/wp/template/dj/
- **Preview URL — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/dj/`
  HTTP 200, full page HTML retrieved. Stylesheets referenced:
  `css/bootstrap.min.css`, `css/style.css`, `css/animate.css`,
  `css/aos.css`, plus icon font `fonts/icomoon/style.css` and
  `fonts/flaticon/font/flaticon.css`. Scripts: Bootstrap, jQuery, AOS,
  Owl Carousel, Magnific Popup, mediaelementplayer.
- **Live DOM structure (from fetched HTML + CSS, verified):**
  - `div.site-wrap` → `div.site-navbar.mt-4` (absolute, transparent
    overlay on hero) → `div.site-mobile-menu` (slide-in off-canvas)
  - `div.site-hero` — full-viewport hero with background image
    (`images/dj.jpg`), heading "DJ Kathy Music Fest", subtext, CTA
    button "Join Us" (btn-outline-primary)
  - `div.site-section` (Featured Events) — centered heading with
    `.w-border`, 3-column `.event` cards each with image, date badge
    (`.date` absolute overlay with day+month), title, description, "Info"
    link
  - `div.site-section` (Upcoming Events) — `.site-block-retro` asymmetric
    grid: left column (full height image+title), right column with two
    stacked image+title blocks
  - `section.site-section` (Video + About) — split 6/6: left has video
    image with `.popup-vimeo` play button overlay, right has heading,
    lead text, paragraphs, "Join Us" primary button
  - `footer.site-footer` — 3-column: About Us + Navigations, Follow Us
    (social icons) + Subscribe (email form), Watch Video (embedded
    video thumbnail with play overlay); copyright bar at bottom

- **Screenshot (`dj-free-template.jpg`):** Dark-themed DJ/music event
  page. Hero with a dark atmospheric image (turntable/DJ equipment),
  prominent gold date badge ("25 JUL"), gold heading accent, gold CTA
  button. Event cards below with overlaid date badges in gold circles.
  Overall aesthetic: moody nightclub feel, dark backgrounds, gold
  highlights, white semi-transparent body text.

## Design tokens

| Token              | Value                                | Notes                                                                      |
| ------------------ | ------------------------------------ | -------------------------------------------------------------------------- |
| `--color-bg`       | `#000` (pure black)                  | Page and section backgrounds — dark theme throughout                       |
| `--color-brand`    | `#e4ae50` (gold/amber)               | Primary accent: buttons, date badges, links, headings, footer underline    |
| `--color-text`     | `rgba(255, 255, 255, 0.5)`          | Body text — semi-transparent white on black                                |
| `--color-text-white` | `#fff`                             | Headings, navbar links, active states                                      |
| `--color-footer-text` | `#737373`                          | Footer paragraph text                                                      |
| `--color-footer-link` | `#999`                             | Footer links → hover: white                                                |
| `--color-form-border` | `#333`                             | Form control border                                                        |
| `--color-form-focus` | `#e4ae50`                          | Form control focus border                                                  |
| `--font-body`      | `'Nunito', sans-serif` (400)         | Body text, paragraphs; base 1.1rem, line-height 1.7                        |
| `--font-heading`   | `'Montserrat', sans-serif` (700)     | Section headings, navbar brand                                             |
| `--btn`            | uppercase, letter-spacing .2rem      | Padding 15px 20px, border-width 2px; `btn-primary`: white on gold          |
|                    |                                      | `btn-outline-primary`: gold border + text, hover fills gold                 |
| `--section-py`     | 40px mobile / 70px desktop           | `.site-section` vertical padding                                           |
| `--footer-py`      | 4em mobile / 7em desktop             | `.site-footer` vertical padding                                            |
| `--date-badge`     | Absolute overlay on image            | Gold circle/badge with day+month stacked vertically                        |
| `--play-btn`       | 70px circle, radius 50%, white bg    | Gold icon, absolute centered on image; `.block-16` video play overlay      |
| `--navbar-brand`   | White bold, "Dj." with gold dot      | `.text-primary` dot after brand name                                       |

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar overlaying the hero section
with brand name, navigation links, and mobile hamburger menu.

#### Scenario: Desktop navbar

- **GIVEN** the Turntable app is rendered on a desktop viewport (>992px)
- **THEN** the navbar SHALL display absolutely positioned over the hero
  with transparent background
- **AND** the brand SHALL show "Turntable" in white bold with a gold dot
  accent
- **AND** navigation links SHALL be: Home, DJs, Shows (with dropdown),
  Events, About, Contact
- **AND** link text SHALL be semi-transparent white, turning full white
  on hover
- **AND** the dropdown (for Shows) SHALL show on hover with white
  background, border, and shadow

#### Scenario: Mobile menu

- **GIVEN** a viewport at or below 992px
- **THEN** a hamburger icon SHALL appear on the right
- **WHEN** the user taps the hamburger
- **THEN** a slide-in mobile menu SHALL appear from the right (300px
  width, white background, off-canvas transform)
- **AND** a close icon SHALL dismiss the menu

### Requirement: Hero section

The system SHALL render a full-width hero with a background image,
heading, description, and CTA button.

#### Scenario: Hero content

- **GIVEN** the Turntable app is rendered
- **THEN** the hero SHALL display a full-viewport background image
  (placeholder via picsum.photos)
- **AND** the heading SHALL be "DJ Kathy Music Fest" (or similar
  DJ/event headline)
- **AND** a short description paragraph SHALL appear below the heading
- **AND** a "Join Us" CTA button (btn-outline-primary) SHALL link to
  events or signup

### Requirement: Featured Events section

The system SHALL display a 3-column grid of event cards, each with an
image, date badge, title, description, and info link.

#### Scenario: Event card layout

- **GIVEN** the Featured Events section is visible
- **THEN** a centered heading "Featured Events" with a bottom border
  divider SHALL render
- **AND** three event cards SHALL display in a 3-column grid (stacking
  on mobile)
- **AND** each card SHALL have: a full-width image, an absolute date
  badge overlay (day + month stacked), a title link, a description
  paragraph, and an "Info" link
- **AND** the date badge SHALL use the gold brand color (`#e4ae50`)

### Requirement: Upcoming Events section

The system SHALL display an asymmetric grid of upcoming events with
background images and overlaid titles.

#### Scenario: Asymmetric grid layout

- **GIVEN** the Upcoming Events section is visible
- **THEN** a centered heading "Upcoming Events" SHALL render
- **AND** the layout SHALL show one large event block on the left
  (full height) with two smaller blocks stacked on the right
- **AND** each block SHALL use a background image with an overlaid
  heading on a gold highlight badge

### Requirement: Video + About section

The system SHALL display a split 6/6 layout with a video thumbnail on
the left and descriptive text with CTA on the right.

#### Scenario: Split content layout

- **GIVEN** the video/about section is visible
- **THEN** the left column SHALL show an image with a circular play
  button overlay (70px white circle, gold icon, centered)
- **AND** the right column SHALL display the heading "We Love Music",
  a lead paragraph, body text, and a gold "Join Us" primary button

### Requirement: Footer

The system SHALL render a 3-column dark footer with About Us, social
links + subscribe form, and a video embed, plus a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the Turntable app is rendered
- **THEN** the footer SHALL display three columns:
  1. "About Us" paragraph + "Navigations" link list
  2. "Follow Us" social icons (Facebook, Twitter, Instagram, LinkedIn) +
     "Subscribe" email form (input + button)
  3. "Watch Video" embedded video thumbnail with play button overlay
- **AND** the footer heading underline SHALL be the gold brand color
  (`#e4ae50`, 40px wide, 2px height)
- **AND** a copyright bar at the bottom SHALL link to Component Dock

#### Scenario: Subscribe form

- **GIVEN** the subscribe form is rendered in the footer
- **THEN** an email input (white border, transparent bg, white
  placeholder text) SHALL be present
- **AND** a "Subscribe" button SHALL be attached to the input
- **AND** the form SHALL NOT submit to a real endpoint (mock only)

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics with proper landmarks,
labels, and ARIA attributes.

#### Scenario: Semantic structure

- **GIVEN** the Turntable app is rendered
- **THEN** the navbar SHALL use `<nav>` with `aria-label`
- **AND** the hero, events, and video sections SHALL use `<section>`
  elements
- **AND** the footer SHALL use `<footer>`
- **AND** all interactive elements SHALL have visible focus-visible rings
- **AND** images SHALL have descriptive alt text
- **AND** the subscribe form SHALL have a labeled email input

### Requirement: Footer — Component Dock credit

#### Scenario: Attribution

- **GIVEN** the Turntable app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- turntable` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/dj/: black `#000` page, gold
      `#e4ae50` accent, Nunito body font, Montserrat headings, transparent
      navbar over hero image, 3-column event cards with date badges,
      asymmetric upcoming events grid, video+text split section, 3-column
      dark footer with subscribe form.
- [ ] Behavior check: navbar links work, mobile menu slides in/out,
      hover states on links and buttons, subscribe form handles input
      (mock), play button visible on video thumbnails.
- [ ] Responsive check at 768px: hero stacks, event cards stack to 1
      column, footer columns stack, no horizontal overflow.
