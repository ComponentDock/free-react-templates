# Template: MicDrop (Podcast / Media)

## Purpose

Recreation of ColorLib "The Hustle Hour" — a dark-themed podcast website template.

- **Source slug:** `the-hustle-hour`
- **Source URL:** https://colorlib.com/wp/template/the-hustle-hour/
- **Preview URL:** https://preview.colorlib.com/theme/the-hustle-hour/ (404 at time of prep — fallback to screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hustlehour-template-1771943880509.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Description:** Podcast website with episode archives, audio players, guest profiles, newsletter signup, and platform distribution links.

## Requirements

### Requirement: Navbar displays logo, navigation links, dark mode toggle, and CTA

The navbar SHALL show the MicDrop logo with a red microphone icon, navigation links (Episodes, About, Sponsors, Newsletter, Blog, Contact), a dark mode toggle, and a red "Listen Now" CTA button.

#### Scenario: Navbar renders all elements

- **GIVEN** the user visits the page
- **THEN** the navbar shows "MicDrop" logo with a red microphone icon on the left
- **AND** navigation links are visible: Episodes, About, Sponsors, Newsletter, Blog, Contact
- **AND** a dark mode toggle (moon icon) is visible
- **AND** a red "Listen Now" CTA button is visible on the right

#### Scenario: Navbar is sticky on scroll

- **GIVEN** the user scrolls down the page
- **THEN** the navbar remains fixed at the top

### Requirement: Hero displays headline, subtitle, and CTAs

The hero section SHALL display a red pill badge, a headline with red accent, subtitle text, two CTA buttons, and platform distribution links.

#### Scenario: Hero renders headline and CTAs

- **GIVEN** the user sees the hero section
- **THEN** a red pill badge shows "New Episode Every Tuesday"
- **AND** the headline reads "Stories That Spark Ideas" with "Spark Ideas" in red
- **AND** subtitle text describes the podcast value proposition
- **AND** a red "Listen Latest Episode" button with a music note icon is visible
- **AND** a dark outline "Subscribe" button is visible

#### Scenario: Platform links are displayed

- **GIVEN** the user sees the hero section below the CTAs
- **THEN** "Available on" text is shown
- **AND** pill links for Spotify, Apple Podcasts, Google Podcasts, and YouTube are visible

### Requirement: Stats bar shows key metrics

The stats bar SHALL display four key podcast metrics in white text on a dark background.

#### Scenario: Stats bar renders all metrics

- **GIVEN** the user sees the stats bar below the hero
- **THEN** "500+" Episodes is displayed
- **AND** "2M+" Downloads is displayed
- **AND** "Top 50" Tech Podcast is displayed
- **AND** "4.8" Rating is displayed

### Requirement: Secondary stats section highlights reach

The secondary stats section SHALL show four red-highlighted metrics on a light background.

#### Scenario: Light stats section renders metrics

- **GIVEN** the user scrolls past the dark hero area
- **THEN** a light background section shows red stats: "200+" Episodes Published, "1M+" Total Downloads, "50+" Countries Reached, "4.9" Average Rating

### Requirement: Episodes section shows recent episodes

The episodes section SHALL display a grid of episode cards with thumbnails, titles, dates, durations, and play buttons.

#### Scenario: Episodes grid renders cards

- **GIVEN** the user scrolls to the episodes section
- **THEN** a grid of episode cards is displayed
- **AND** each card shows episode title, date, duration, and a play button

### Requirement: Guest profiles are displayed

The guests section SHALL show guest profile cards with photos, names, roles, and bios.

#### Scenario: Guest cards render correctly

- **GIVEN** the user scrolls to the guests section
- **THEN** guest cards show name, role/title, and a short bio
- **AND** a photo placeholder is shown for each guest

### Requirement: Newsletter form captures email

The newsletter section SHALL provide an email input and subscribe button with form validation.

#### Scenario: Newsletter form renders

- **GIVEN** the user scrolls to the newsletter section
- **THEN** a heading invites subscription
- **AND** an email input field and "Subscribe" button are visible

#### Scenario: Form validation prevents empty submission

- **GIVEN** the user clicks Subscribe without entering an email
- **THEN** the form does not submit

### Requirement: Footer contains site links and Component Dock attribution

The footer SHALL display navigation links, social icons, and a link to Component Dock.

#### Scenario: Footer renders correctly

- **GIVEN** the user scrolls to the footer
- **THEN** the footer shows navigation links
- **AND** social media icons are visible
- **AND** "More templates at Component Dock" links to https://www.componentdock.com/

### Requirement: Dark mode toggle works

The dark mode toggle SHALL switch between light and dark themes.

#### Scenario: Toggle activates dark mode

- **GIVEN** the user clicks the dark mode toggle
- **THEN** the page switches to dark mode

#### Scenario: Toggle deactivates dark mode

- **GIVEN** the page is in dark mode
- **AND** the user clicks the dark mode toggle
- **THEN** the page switches back to light mode

### Requirement: Responsive design on mobile

The template SHALL be responsive with a hamburger menu and stacked layout on small screens.

#### Scenario: Mobile layout

- **GIVEN** the user views the page on a small screen
- **THEN** the navbar shows a hamburger menu icon
- **AND** sections stack vertically
