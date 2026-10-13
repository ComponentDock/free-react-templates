# Template: Rimarc (Sports — Basketball)

## Purpose

Recreation of the ColorLib "Thebasketball" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/thebasketball/
- **Preview:** https://preview.colorlib.com/theme/thebasketball/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/thebasketball-free-template.jpg
- **New name:** `rimarc` (app: `apps/rimarc`, package: `@free-react-templates/rimarc`)
- **Surge target:** `rimarc.free.componentdock.com`

## Design tokens

| Token | Value | Source |
|---|---|---|
| Primary brand | `#e02529` (bright red) | CSS `.primary-btn`, accent throughout |
| Dark background | `#100303` (near-black) | Hero, main page bg |
| Section dark bg | `#111111` | Alternate section backgrounds |
| Card dark bg | `#211E1E`, `#2F2C2C` | Statistics, product items |
| White text | `#ffffff` | All text on dark backgrounds |
| Heading font | `"Oswald"` (Google Fonts) | Headings, section titles, nav |
| Body font | `"Roboto"` (Google Fonts) | Body text, descriptions |
| Button radius | 0 (square/rectangular) | `.primary-btn` — no border-radius |
| Button letter-spacing | 3px | Bold, uppercase feel |
| Accent blue | `#2f76c7` | Minor link/hover accent |
| Light section bg | `#f7f5fa`, `#f5f5f5` | Not used heavily (mostly dark) |

## Visual design (from screenshot analysis)

Dark-themed basketball/sports site. Hero with large background imagery and countdown timer. Red (#e02529) is the dominant accent color against near-black backgrounds. Oswald gives a strong, sporty heading style. Sections use alternating dark shades (#100303 vs #111111). The overall feel is energetic and bold — a sports arena aesthetic.

## Requirements

### R1 — Navbar

#### Scenario: Top navigation is visible and functional

- **GIVEN** the user is on the homepage
- **THEN** a fixed/sticky top navigation bar is visible
- **AND** the nav contains the site logo/brand name
- **AND** the nav contains links to all sections (Home, Team, Statistics, Latest Videos, Shop, Contact)
- **AND** a "Book tickets" CTA button is visible in the nav

### R2 — Hero Section

#### Scenario: Hero displays headline, countdown, and CTA

- **GIVEN** the user is on the homepage
- **THEN** a full-width hero section is displayed with a background image
- **AND** the headline "National leagues 2020 season begins" is shown
- **AND** a countdown timer is displayed (days, hours, minutes, seconds)
- **AND** a "Book tickets" primary button (red #e02529, no border-radius) is visible
- **AND** the hero supports a carousel/slider for multiple slides

### R3 — Latest Match

#### Scenario: Latest match shows two teams and result

- **GIVEN** the user is on the homepage
- **THEN** a "Latest results" section is displayed
- **AND** today's basketball match is shown with two teams
- **AND** each team has a name and logo image
- **AND** the match score/status is visible

### R4 — Team Section

#### Scenario: Team roster shows player cards

- **GIVEN** the user is on the homepage
- **THEN** a "Team" section is displayed
- **AND** player cards are shown in a grid (2 columns)
- **AND** each player card has a photo background, name, and position/title
- **AND** each card has a "View portfolio" outlined button (#e02529 border)
- **AND** at least 4 players are displayed

### R5 — Statistics Section

#### Scenario: Player statistics tabs and slider

- **GIVEN** the user is on the homepage
- **THEN** a "Player statistics" section is displayed
- **AND** tabbed navigation allows switching between stat categories
- **AND** a carousel/slider shows player stat cards
- **AND** each card shows player name and point total (e.g. "95.5 point")
- **AND** a league table is also viewable

### R6 — Latest Videos Section

#### Scenario: Video carousel displays basketball content

- **GIVEN** the user is on the homepage
- **THEN** a "Latest Videos" section is displayed
- **AND** a carousel of video thumbnails is shown
- **AND** each video item has a thumbnail, play icon overlay, and title
- **AND** at least 4 videos are in the carousel

### R7 — Product/Shop Section

#### Scenario: Product grid with add-to-cart

- **GIVEN** the user is on the homepage
- **THEN** a product/shop section is displayed
- **AND** product items are shown in a grid (4 columns on desktop)
- **AND** each product has an image, name, and price
- **AND** each product has an "Add to cart" button
- **AND** the products are displayed in tabbed groups (multiple carousels)

### R8 — Footer

#### Scenario: Footer contains widgets and copyright

- **GIVEN** the user scrolls to the bottom
- **THEN** a dark footer is displayed
- **AND** footer widgets show About text, recent posts, and contact info
- **AND** a copyright notice is shown
- **AND** a link to Component Dock (https://www.componentdock.com/) is present

## Verification checklist

- [ ] Navbar renders with all nav links and "Book tickets" CTA
- [ ] Hero section has background image, headline, countdown, CTA
- [ ] Countdown timer counts down correctly (JS interval)
- [ ] Latest Match shows team logos, names, and score
- [ ] Team section shows player cards in grid with photos and names
- [ ] Statistics section has tabbed navigation and carousel slider
- [ ] Latest Videos section shows video carousel with thumbnails
- [ ] Product section shows items in grid with "Add to cart" buttons
- [ ] Footer has 3 widget columns and copyright
- [ ] Footer links to https://www.componentdock.com/
- [ ] All sections use dark backgrounds (#100303 / #111111)
- [ ] Primary button color is #e02529 with no border-radius
- [ ] Oswald used for headings, Roboto for body
- [ ] Responsive layout (mobile-friendly)
- [ ] No ColorLib references in app code
