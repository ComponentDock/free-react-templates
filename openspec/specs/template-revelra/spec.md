# Template: Revelra (Event Conference)

## Purpose

Recreation of ColorLib's **Evento** template for event/conference landing pages.

- **Source:** https://colorlib.com/wp/template/evento/
- **Preview:** https://preview.colorlib.com/theme/evento/
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Category:** Event / Conference / Multi-section landing page

## Design Tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| `brand` | `#f50136` | Primary red — buttons, accents, active states |
| `heading` | `#18181c` | Dark near-black for titles and headings |
| `body` | `#838383` | Medium gray for body text |
| `surface-dark` | `#18181c` | Navbar, dark section backgrounds |
| `surface-darker` | `#0b031b` / `#080113` | Deepest dark backgrounds (footer, CTA) |
| `surface-accent` | `#1f1039` | Purple-dark accent in certain sections |
| `surface-light` | `#f7f7f7` / `#f0f2f6` | Light gray section backgrounds |
| `white` | `#ffffff` | Text on dark backgrounds, card surfaces |
| Font primary | Montserrat, sans-serif | Headings, navigation, body |
| Font secondary | Georgia, Verdana, Roboto, serif | Occasional accent text |
| Button radius | 50px (pill shape) | Rounded-full pill buttons |
| General radius | 4px | Cards, inputs |
| Small radius | 2px | Minor elements |

## Requirements

### Feature: Revelra — Event Conference Landing Page

#### Scenario: Navbar renders with correct links

- **GIVEN** the user visits the Revelra landing page
- **WHEN** the navbar loads
- **THEN** it shows: Home, Speakers, Events, News, Contact links
- **AND** it is fixed to the top of the viewport
- **AND** it collapses into a hamburger menu on mobile

#### Scenario: Hero slider displays conference headlines

- **GIVEN** the user visits the page
- **WHEN** the hero slider section renders
- **THEN** it displays 3 slides with background images
- **AND** each slide has a heading, description paragraph, and CTA button
- **AND** navigation dots allow switching between slides
- **AND** slides auto-advance

#### Scenario: Event info boxes show key details

- **GIVEN** the hero section has loaded
- **WHEN** the user scrolls to the event info section
- **THEN** 4 icon boxes are displayed in a row: Date, Location, Speaker, Price
- **AND** each box has an icon, title, and description text

#### Scenario: Countdown timer displays until event date

- **GIVEN** the event info section has loaded
- **WHEN** the countdown section renders
- **THEN** a heading "Counter until the big event" is displayed
- **AND** a countdown timer shows days, hours, minutes, seconds
- **AND** the section has a parallax background image

#### Scenario: About section describes the event

- **GIVEN** the countdown section has loaded
- **WHEN** the user scrolls to the About section
- **THEN** a section title "About the event" is displayed
- **AND** a paragraph of descriptive text is shown below it

#### Scenario: Speakers grid shows team members

- **GIVEN** the About section has loaded
- **WHEN** the user scrolls to the Speakers section
- **THEN** a section title "Our speakers" is displayed
- **AND** 8 speaker cards are shown in a grid
- **AND** each card has an image, name, and social media links

#### Scenario: Pricing table shows tier options

- **GIVEN** the Speakers section has loaded
- **WHEN** the user scrolls to the Pricing section
- **THEN** a section title "Pricing table" is displayed
- **AND** 3 pricing cards are shown: Early Bird (active/highlighted), Standard, Premium
- **AND** each card shows price, feature list, and a CTA button
- **AND** the active card has a different background color

#### Scenario: Events calendar lists upcoming events

- **GIVEN** the Pricing section has loaded
- **WHEN** the user scrolls to the Events Calendar section
- **THEN** a table lists upcoming events with calendar icon header
- **AND** each row shows event name, date, time, and location

#### Scenario: Partners carousel displays brand logos

- **GIVEN** the Events Calendar has loaded
- **WHEN** the user scrolls to the Partners section
- **THEN** a section title "Our partners" is displayed
- **AND** a carousel of brand logos is shown
- **AND** the section has a light gray background (#f0f2f6)

#### Scenario: Get Tickets CTA section

- **GIVEN** the Partners section has loaded
- **WHEN** the user scrolls to the CTA section
- **THEN** a heading "Get your tickets" is displayed on a parallax background
- **AND** descriptive text and a CTA button are shown
- **AND** text is white on the dark background

#### Scenario: Footer with newsletter and social links

- **GIVEN** the CTA section has loaded
- **WHEN** the user scrolls to the footer
- **THEN** 3 columns are shown: About text with social icons, Instagram gallery, Newsletter form
- **AND** the newsletter has an email input and "SUBSCRIBE" button
- **AND** a copyright bar at the bottom contains "Made with Component Dock" link

## Verification Checklist

- [ ] Navbar is fixed-top, collapses on mobile, links scroll to sections
- [ ] Hero slider has 3 slides with auto-advance and dot navigation
- [ ] Event info boxes: 4 columns, icons, responsive (2x2 on mobile)
- [ ] Countdown timer is functional (JS-driven)
- [ ] About section text is centered, readable
- [ ] Speakers grid: 8 cards, responsive layout (4→2→1 columns)
- [ ] Pricing: 3 cards, "Early Bird" highlighted as active
- [ ] Events calendar: table with rows, responsive
- [ ] Partners: logo carousel, auto-scrolling
- [ ] CTA: parallax background, white text, red pill button
- [ ] Footer: 3 columns, newsletter form, social icons, copyright with Component Dock link
- [ ] All colors match design tokens (brand #f50136, dark #18181c, body #838383)
- [ ] Font: Montserrat loaded via Google Fonts
- [ ] Buttons: pill-shaped (rounded-full), brand color
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage
