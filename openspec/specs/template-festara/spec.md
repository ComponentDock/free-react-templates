# Template: Festara (Event / Conference)

## Purpose

Recreation of the ColorLib **Eventz** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page event/conference landing page.

- **Source:** [ColorLib Eventz](https://colorlib.com/wp/template/eventz/)
- **Preview:** https://preview.colorlib.com/theme/eventz/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/evento-free-template-1.jpg
- **New name:** `festara` (apps/festara, @free-react-templates/festara)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict) · Vitest + Testing Library

## Design Tokens

Extracted from the preview's `style.css`:

| Token | Value | Usage |
|---|---|---|
| brand-primary | `#331391` | Buttons, nav hover, back-to-top, preloader spin, section accents |
| brand-secondary | `#ffdb6f` | Countdown timer numbers, video play button border |
| brand-accent | `#3e44ec` | Button hover fill sweep |
| brand-dark | `#26264b` | Heading text color (h1-h6) |
| brand-body-text | `#10285d` | Paragraph text |
| brand-nav-text | `#112957` | Nav link color |
| sponsors-bg | `#2e0e8c` | Sponsors section deep purple background |
| hero-btn-bg | `#fff` / `#331391` text | Hero "Download" button (white bg, purple text) |
| counter-color | `#ffdb6f` | Countdown timer span/p text |
| section-title-span | `#3ba0ff` | Blue subtitle label text |
| pricing-active-bg | `#31118f` | Active/hover pricing card background |
| body-bg | `#ffffff` | Page background |
| card-bg | `#fcfcfc` | Pricing card default background |
| heading-font | `"Sarabun", sans-serif` | Headings, nav links, buttons, labels |
| body-font | `"Roboto", sans-serif` | Body paragraphs |
| label-font | `"Sen", sans-serif` | Section title spans, countdown labels |
| button-radius | `0px` | All primary/CTA buttons — sharp rectangular |
| card-radius | `6px` | Pricing cards |
| blog-date-radius | `5px` | Blog date badge |
| preloader-radius | `50%` | Preloader spinner circle |

### Visual Design (from screenshot)

The template is a dark-purple-accented event/conference landing page with:

- **Header:** White sticky navbar with logo on left, nav links (Home, About, Speakers, Schedule, Blog, Contact) on right, and a purple "Get Your Ticket" CTA button.
- **Hero:** Full-width background image of a speaker at a conference, with a white overlay heading "Digital Conference For Designers", a "Committed to success" subtitle with a white left-rule, a white "Download" button, and a circular video-play button with gold border. A countdown timer (days/hrs/min/sec) sits at the bottom-right in gold text.
- **About section:** White background, two-column layout: left has heading "The Biggest Digital Conference" with paragraph text and Where/When info cards (with flaticon icons), plus a "Get Your Ticket" button. Right has a conference photo.
- **Speakers:** Dark background (conference crowd image), white heading "The Most Important Speakers", 6 speaker cards in a 3×2 grid with photo, name, and role.
- **Event Schedule:** White background, tabbed accordion with day tabs (Day 1–3), listing session items with time, title, description, and venue.
- **Gallery:** Image grid of conference/event photos with dark overlay on hover.
- **Pricing:** White background, 3 pricing cards in a row. Default state is white; active/hover state is deep purple (#31118f) with white text, scaled up.
- **Sponsors:** Deep purple (#2e0e8c) background section with "Our Top General Sponsors" heading and a row of sponsor logos.
- **Blog:** White background, "News From Blog" heading, 2 blog post cards with image, title, and meta info.
- **Footer:** Dark background, 4-column layout: About Us, Contact Info, Important Links, Newsletter with email signup form.

## Gherkin Requirements

### Feature: Festara Event Landing Page

#### Scenario: Header navigation renders correctly
- **Given** the user visits the Festara landing page
- **When** the page loads
- **Then** a sticky white header is visible
- **And** the logo text "Festara" is displayed on the left
- **And** navigation links (Home, About, Speakers, Schedule, Blog, Contact) are visible on the right
- **And** a purple "Get Your Ticket" CTA button is displayed in the header

#### Scenario: Hero section displays event details
- **Given** the user views the hero section
- **When** the hero renders
- **Then** a background image of a conference speaker is displayed
- **And** the subtitle "Committed to Success" appears with a white left-rule
- **And** the heading "Digital Conference For Designers" is displayed in large white text
- **And** a white "Download" button is visible
- **And** a circular play button with gold border is displayed
- **And** a countdown timer shows Days, Hours, Minutes, and Seconds in gold text

#### Scenario: Countdown timer counts down
- **Given** the countdown timer is displayed
- **When** the page is live
- **Then** the timer decrements each second
- **And** the values update with leading zeros where appropriate

#### Scenario: About section shows event information
- **Given** the user scrolls to the About section
- **When** the section renders
- **Then** the heading "The Biggest Digital Conference" is visible
- **And** descriptive paragraphs are shown below the heading
- **And** a "Where" info card shows a location
- **And** a "When" info card shows a date
- **And** a "Get Your Ticket" button is displayed
- **And** a conference image appears on the right side

#### Scenario: Speakers section displays team members
- **Given** the user scrolls to the Speakers section
- **When** the section renders
- **Then** a dark background image is displayed behind the section
- **And** the heading "The Most Important Speakers" appears in white
- **And** 6 speaker cards are displayed in a grid
- **And** each card shows a speaker photo, name, and role

#### Scenario: Event Schedule section has tabbed content
- **Given** the user scrolls to the Event Schedule section
- **When** the section renders
- **Then** the heading "Event Schedule" is visible
- **And** day tabs (Day 1, Day 2, Day 3) are displayed
- **And** clicking a tab shows the schedule for that day
- **And** each schedule item shows time, title, description, and venue

#### Scenario: Gallery section shows event photos
- **Given** the user scrolls to the Gallery section
- **When** the section renders
- **Then** a grid of event photos is displayed
- **And** hovering a photo shows a dark overlay

#### Scenario: Pricing section shows ticket options
- **Given** the user scrolls to the Pricing section
- **When** the section renders
- **Then** the heading "Program Pricing" is visible
- **And** 3 pricing cards are displayed
- **And** the default card background is white
- **And** hovering or activating a card turns it deep purple (#31118f) with white text
- **And** each card shows a price and a list of features
- **And** each card has a CTA button

#### Scenario: Sponsors section displays partner logos
- **Given** the user scrolls to the Sponsors section
- **When** the section renders
- **Then** a deep purple (#2e0e8c) background is displayed
- **And** the heading "Our Top General Sponsors" appears in white
- **And** a row of sponsor logos is shown

#### Scenario: Blog section shows recent posts
- **Given** the user scrolls to the Blog section
- **When** the section renders
- **Then** the heading "News From Blog" is visible
- **And** 2 blog post cards are displayed
- **And** each card shows an image, title, and meta info

#### Scenario: Footer has four columns
- **Given** the user scrolls to the footer
- **When** the footer renders
- **Then** an "About Us" column with description text is shown
- **And** a "Contact Info" column with address, phone, and email is shown
- **And** an "Important Links" column with navigation links is shown
- **And** a "Newsletter" column with email signup form is shown
- **And** a "Made with Component Dock" attribution link is present

#### Scenario: Mobile responsive layout
- **Given** the user views the page on a mobile viewport (< 768px)
- **When** the page renders
- **Then** the navigation collapses into a hamburger menu
- **And** the hero heading font size reduces
- **And** the countdown timer is hidden on very small screens
- **And** multi-column layouts stack vertically
- **And** pricing cards stack vertically

## Verification Checklist

- [ ] Header renders with logo, nav links, and CTA button
- [ ] Hero section has background image, heading, subtitle, buttons, and countdown
- [ ] Countdown timer decrements correctly
- [ ] About section has heading, text, info cards, button, and image
- [ ] Speakers section shows 6 cards in a grid on dark background
- [ ] Event Schedule has working tabs with schedule content
- [ ] Gallery shows image grid with hover overlay
- [ ] Pricing section shows 3 cards with active/hover purple state
- [ ] Sponsors section has purple background and logo row
- [ ] Blog section shows 2 post cards
- [ ] Footer has 4 columns + Component Dock attribution
- [ ] Mobile responsive: hamburger nav, stacked layouts, reduced font sizes
- [ ] All colors match design tokens from reference CSS
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] `npm run test:coverage` passes at 100%
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] Build succeeds
