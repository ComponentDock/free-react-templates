# Template: Converge (Marketing Conference Landing)

Recreation of ColorLib "Confpro"
(https://colorlib.com/wp/template/confpro/).

## Purpose

Converge is a marketing conference landing template with a navbar, hero, countdown, intro, topics, schedule, speakers and footer. It recreates the ColorLib **Confpro** design (https://colorlib.com/wp/template/confpro/, preview: https://preview.colorlib.com/theme/confpro/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design tokens (from ColorLib preview CSS)

| Token         | Value            | Usage                                               |
| ------------- | ---------------- | --------------------------------------------------- |
| Brand primary | `#7f66ff`        | Purple/violet — buttons, active states, accent text |
| Dark navy     | `#0a2642`        | Header background, section overlays, headings       |
| Body text     | `#68727c`        | Paragraph copy                                      |
| Muted text    | `#a5a5a5`        | Secondary text                                      |
| Salmon accent | `#ffa07f`        | Link underlines                                     |
| Orange CTA    | `#ff9000`        | Call-to-action button variant                       |
| Font family   | Roboto (300–900) | All text via Google Fonts `<link>`                  |

## Sections (in order)

1. **Navbar** — fixed top, dark navy bg, logo ("converge"), nav links (Home, About, Schedule, News, Contact), Login/Register, "Get Tickets" CTA, mobile hamburger
2. **Hero** — full-screen dark section with background image, large heading ("2025 Marketing Conference"), date/location info, "Get Tickets" CTA, slide dots
3. **Countdown** — parallax background, 4-unit countdown (Days, Hours, Minutes, Seconds) with live ticker
4. **Intro** — white bg, centered heading ("The Best Marketing Conference"), descriptive paragraph, "Get Tickets" CTA
5. **Topics** — tabbed section with 6 tabs (Marketing Intro, Strategy, Cyber, Online, Stories, Special Guest), each showing heading + text + image
6. **Schedule** — two-column layout (Day 1 / Day 2), each with 5 sessions showing time, title, host name, avatar
7. **Speakers** — 3×2 grid of speaker cards with photo, name, role on dark navy overlay
8. **CTA** — orange background section with "Get Your Tickets Now!" heading, description, ticket button
9. **Footer** — dark navy, 3-column: about + social icons, newsletter form, Instagram gallery; footer bar with Component Dock link

## Requirements

### Feature: Navbar

#### Scenario: Renders logo, nav links, login/register, and Get Tickets CTA

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** it renders logo, nav links, login/register, and Get Tickets CTA

#### Scenario: Mobile menu toggles open/closed

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** mobile menu toggles open/closed

#### Scenario: Clicking a nav link closes mobile menu

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** clicking a nav link closes mobile menu

### Feature: Hero

#### Scenario: Displays conference year, title, date, and location

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** it displays conference year, title, date, and location

#### Scenario: Shows Get Tickets CTA and slide dots

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** it shows Get Tickets CTA and slide dots

### Feature: Countdown

#### Scenario: Shows all 4 time units with labels

- **Given** the page is rendered
- **When** the Countdown is inspected
- **Then** it shows all 4 time units with labels

#### Scenario: Counts down each second

- **Given** the page is rendered
- **When** the Countdown is inspected
- **Then** Counts down each second

#### Scenario: Shows 00:00:00:00 when target is past

- **Given** the page is rendered
- **When** the Countdown is inspected
- **Then** it shows 00:00:00:00 when target is past

### Feature: Intro

#### Scenario: Renders heading, descriptive text, and Get Tickets link

- **Given** the page is rendered
- **When** the Intro is inspected
- **Then** it renders heading, descriptive text, and Get Tickets link

### Feature: Topics

#### Scenario: Renders all 6 tab buttons

- **Given** the page is rendered
- **When** the Topics is inspected
- **Then** it renders all 6 tab buttons

#### Scenario: Shows first topic by default

- **Given** the page is rendered
- **When** the Topics is inspected
- **Then** it shows first topic by default

#### Scenario: Switches content when a different tab is clicked

- **Given** the page is rendered
- **When** the Topics is inspected
- **Then** it switches content when a different tab is clicked

### Feature: Schedule

#### Scenario: Renders Day 1 and Day 2 columns with session titles, times, and hosts

- **Given** the page is rendered
- **When** the Schedule is inspected
- **Then** it renders Day 1 and Day 2 columns with session titles, times, and hosts

### Feature: Speakers

#### Scenario: Renders all 6 speaker cards with names, roles, and images

- **Given** the page is rendered
- **When** the Speakers is inspected
- **Then** it renders all 6 speaker cards with names, roles, and images

### Feature: CTA

#### Scenario: Renders heading, description, and Get Tickets button

- **Given** the page is rendered
- **When** the CTA is inspected
- **Then** it renders heading, description, and Get Tickets button

### Feature: Footer

#### Scenario: Renders logo, about text, newsletter form, Instagram gallery (8 images)

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** it renders logo, about text, newsletter form, Instagram gallery (8 images)

#### Scenario: Contains Component Dock link in footer bar

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** it contains Component Dock link in footer bar

#### Scenario: Social media icons (Facebook, Twitter, Dribbble) via inline SVGs

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** Social media icons (Facebook, Twitter, Dribbble) via inline SVGs

### Feature: App

#### Scenario: Composes all sections with correct landmarks

- **Given** the page is rendered
- **When** the App is inspected
- **Then** Composes all sections with correct landmarks

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/converge/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/converge/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar — Given** the page is rendered
- [ ] Hero — Given** the page is rendered
- [ ] Countdown — Given** the page is rendered
- [ ] Intro — Given** the page is rendered
- [ ] Topics — Given** the page is rendered
- [ ] Schedule — Given** the page is rendered
- [ ] Speakers — Given** the page is rendered
- [ ] CTA — Given** the page is rendered
- [ ] App — Given** the page is rendered
