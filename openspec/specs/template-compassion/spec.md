# Template: Compassion (Church / Charity Template)

## Purpose

Compassion is a single-page church/charity website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Inward" church website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Inward" — free responsive Bootstrap 4 church
  website template (source: https://colorlib.com/wp/template/inward/).
  TEMPLATES.md has TWO copies of this item (line 1274 in the Charity
  category and line 1301 in the Church category — mark BOTH `[x]` when
  done). Both rows reference the same screenshot (`inward-free-template.jpg`).
- **Demo DOM analyzed:** REACHABLE. `https://preview.colorlib.com/theme/inward/`
  returns HTTP 200 (curl verified 2026-09-15, ~18 KB rendered HTML).
  Page title: "Inward Church Website Template". The rendered page is the
  full template: transparent navbar, full-viewport hero slider, split
  worship/events section, audio sermon cards, latest events grid, personal
  testimony carousel, 4-column footer. Stylesheets analyzed: `css/style.css`
  (carries all component tokens below); Bootstrap 4 utilities from
  `css/bootstrap.css`; icons are Ionicons + FontAwesome glyphs.
- **Screenshot:** `inward-free-template.jpg` (1200x946, verified via
  vision_analyze 2026-09-15) — consistent with the live preview: a hand
  raised against warm bokeh/nature background hero with "Welcome to Inward"
  serif heading and "Request a Prayer" outlined button; split camp
  meeting / upcoming events section below; clean modern church aesthetic
  throughout. The DOM is the ground truth for copy and section order.
- **Visual design (from live preview DOM + screenshot vision):** warm,
  reverent church aesthetic. Muted blue **`#6A99CB`** brand/accent color
  on links, dropdown hovers, and navbar brand accent; lighter hover blue
  **`#90b3d8`** on button hover; dark **`#262626`** footer with
  **`#2e2e2e`** border-top; white page background; **`#b3b3b3`** body
  text color; **`#000`** headings. Buttons are uppercase with
  **letter-spacing .2em**, **border-radius 0** (sharp/square corners),
  2px borders. Headings use elegant serif **Playfair Display** (h1/h2/h3,
  40px hero, ~32px section headings); body uses clean sans-serif
  **Open Sans** (15px, weight 400). Sermon cards are **black background**
  with white text; testimony slider uses **circular pastor photos**
  (border-radius 50%) on a **`#fafafa`** light section. The demo brands
  itself "INWARD"; recreation uses the NEW name **Compassion**.

- **Structure (1:1, section order — from the live DOM):**
  1. **Navbar** — transparent/absolute on desktop (overlays hero), solid
     black on mobile. Uppercase wordmark "Compassion" left; nav links
     Home (active) / About / Messages (dropdown) / Events / Contact;
     hamburger toggle on mobile.
  2. **Hero** — full-viewport background image with dark overlay.
     Center-aligned: white Playfair Display h1 "Welcome to Compassion",
     subtext, white outlined "Request a Prayer" button.
  3. **Worship Time** — split layout: LEFT = background image with dark
     overlay, white heading "Camp Meeting Will Start Soon", countdown
     timer, "Join Now" button; RIGHT = white background, "Upcoming Events"
     heading, 4 event list items with date and "More Info" links.
  4. **Audio Sermons** — light gray background, centered heading, 3-column
     grid of black sermon cards with images, titles, metadata, audio players.
  5. **Latest Events** — white background, centered heading, 3-column grid
     of event cards with thumbnails, titles, dates, descriptions.
  6. **Personal Testimony** — light background, centered heading, carousel
     with circular pastor photos, blockquotes, dot pagination.
  7. **Footer** — dark #262626 background, 4-column grid: church info +
     social icons, The Church links, Messages links, contact info.
     Component Dock attribution.

## Requirements

### Requirement: Navbar renders all navigation links

Users SHALL see the brand "Compassion" and navigation links (Home, About, Messages, Events, Contact) in the navbar. The Messages link SHALL display a dropdown with Audio Sermons, Past Messages, Bible Reading, and End Time Prophecy.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays brand "Compassion"
- **AND** links Home, About, Messages, Events, Contact are visible
- **AND** Home is marked as active

#### Scenario: Messages dropdown opens on hover

- **WHEN** the user hovers over the Messages link
- **THEN** a dropdown appears with Audio Sermons, Past Messages, Bible Reading, End Time Prophecy

#### Scenario: Mobile navbar toggles on hamburger click

- **WHEN** the user clicks the hamburger toggle
- **THEN** the navigation links become visible

### Requirement: Hero displays welcome heading and CTA

Users SHALL see a full-viewport hero section with a background image, dark overlay, the heading "Welcome to Compassion", and a "Request a Prayer" button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the hero section is visible
- **THEN** the heading "Welcome to Compassion" is displayed
- **AND** a "Request a Prayer" button is shown

### Requirement: Worship Time section displays countdown and events

Users SHALL see a split layout with a camp meeting countdown on the left and upcoming events list on the right.

#### Scenario: Camp meeting countdown displays

- **WHEN** the worship time section is visible
- **THEN** the left panel shows "Camp Meeting Will Start Soon"
- **AND** a countdown timer with weeks, days, hours, minutes, seconds is displayed

#### Scenario: Upcoming events list renders correctly

- **WHEN** the worship time section is visible
- **THEN** the right panel shows "Upcoming Events" heading
- **AND** 4 events are listed with dates and "More Info" links

### Requirement: Audio Sermons section displays sermon cards

Users SHALL see 3 sermon cards in a grid with images, titles, author/date metadata, and audio players on a light gray background.

#### Scenario: Sermon cards render correctly

- **WHEN** the audio sermons section is visible
- **THEN** 3 sermon cards are displayed in a grid
- **AND** each card has an image, title, metadata, and audio player

### Requirement: Latest Events section displays event cards

Users SHALL see 3 event cards in a grid with thumbnails, titles, date/category metadata, and descriptions.

#### Scenario: Event cards render correctly

- **WHEN** the latest events section is visible
- **THEN** 3 event cards are displayed with thumbnails and descriptions

### Requirement: Personal Testimony section displays carousel

Users SHALL see a testimony carousel with circular pastor photos, blockquotes, attributions, and dot pagination.

#### Scenario: Testimony carousel shows pastor quotes

- **WHEN** the personal testimony section is visible
- **THEN** a testimony with a circular photo, blockquote, and attribution is shown
- **AND** dot pagination is visible

#### Scenario: Navigation buttons cycle through testimonies

- **WHEN** the user clicks the next button
- **THEN** the next testimony is displayed
- **AND** the dot indicator updates

### Requirement: Footer displays church information and links

Users SHALL see a dark footer with 4 columns: church info + social icons, The Church links, Messages links, and contact info. The footer MUST link to Component Dock.

#### Scenario: Footer renders all sections

- **WHEN** the footer is visible
- **THEN** "Compassion Church" name is displayed
- **AND** social media icons (Twitter, Facebook, LinkedIn, Instagram) are shown
- **AND** The Church links section is present
- **AND** Messages links section is present
- **AND** contact info is present
- **AND** the copyright line links to Component Dock
