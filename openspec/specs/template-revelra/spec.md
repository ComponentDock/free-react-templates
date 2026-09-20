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

## Gherkin Requirements

### Feature: Revelra — Event Conference Landing Page

#### Scenario: Navbar renders with correct links
- **Given** the user visits the Revelra landing page
- **When** the navbar loads
- **Then** it shows: Home, Speakers, Events, News, Contact links
- **And** it is fixed to the top of the viewport
- **And** it collapses into a hamburger menu on mobile

#### Scenario: Hero slider displays conference headlines
- **Given** the user visits the page
- **When** the hero slider section renders
- **Then** it displays 3 slides with background images
- **And** each slide has a heading, description paragraph, and CTA button
- **And** navigation dots allow switching between slides
- **And** slides auto-advance

#### Scenario: Event info boxes show key details
- **Given** the hero section has loaded
- **When** the user scrolls to the event info section
- **Then** 4 icon boxes are displayed in a row: Date, Location, Speaker, Price
- **And** each box has an icon, title, and description text

#### Scenario: Countdown timer displays until event date
- **Given** the event info section has loaded
- **When** the countdown section renders
- **Then** a heading "Counter until the big event" is displayed
- **And** a countdown timer shows days, hours, minutes, seconds
- **And** the section has a parallax background image

#### Scenario: About section describes the event
- **Given** the countdown section has loaded
- **When** the user scrolls to the About section
- **Then** a section title "About the event" is displayed
- **And** a paragraph of descriptive text is shown below it

#### Scenario: Speakers grid shows team members
- **Given** the About section has loaded
- **When** the user scrolls to the Speakers section
- **Then** a section title "Our speakers" is displayed
- **And** 8 speaker cards are shown in a grid
- **And** each card has an image, name, and social media links

#### Scenario: Pricing table shows tier options
- **Given** the Speakers section has loaded
- **When** the user scrolls to the Pricing section
- **Then** a section title "Pricing table" is displayed
- **And** 3 pricing cards are shown: Early Bird (active/highlighted), Standard, Premium
- **And** each card shows price, feature list, and a CTA button
- **And** the active card has a different background color

#### Scenario: Events calendar lists upcoming events
- **Given** the Pricing section has loaded
- **When** the user scrolls to the Events Calendar section
- **Then** a table lists upcoming events with calendar icon header
- **And** each row shows event name, date, time, and location

#### Scenario: Partners carousel displays brand logos
- **Given** the Events Calendar has loaded
- **When** the user scrolls to the Partners section
- **Then** a section title "Our partners" is displayed
- **And** a carousel of brand logos is shown
- **And** the section has a light gray background (#f0f2f6)

#### Scenario: Get Tickets CTA section
- **Given** the Partners section has loaded
- **When** the user scrolls to the CTA section
- **Then** a heading "Get your tickets" is displayed on a parallax background
- **And** descriptive text and a CTA button are shown
- **And** text is white on the dark background

#### Scenario: Footer with newsletter and social links
- **Given** the CTA section has loaded
- **When** the user scrolls to the footer
- **Then** 3 columns are shown: About text with social icons, Instagram gallery, Newsletter form
- **And** the newsletter has an email input and "SUBSCRIBE" button
- **And** a copyright bar at the bottom contains "Made with Component Dock" link

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
