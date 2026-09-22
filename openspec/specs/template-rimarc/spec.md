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

## Gherkin requirements

### R1 — Navbar
**Scenario: Top navigation is visible and functional**
- Given the user is on the homepage
- Then a fixed/sticky top navigation bar is visible
- And the nav contains the site logo/brand name
- And the nav contains links to all sections (Home, Team, Statistics, Latest Videos, Shop, Contact)
- And a "Book tickets" CTA button is visible in the nav

### R2 — Hero Section
**Scenario: Hero displays headline, countdown, and CTA**
- Given the user is on the homepage
- Then a full-width hero section is displayed with a background image
- And the headline "National leagues 2020 season begins" is shown
- And a countdown timer is displayed (days, hours, minutes, seconds)
- And a "Book tickets" primary button (red #e02529, no border-radius) is visible
- And the hero supports a carousel/slider for multiple slides

### R3 — Latest Match
**Scenario: Latest match shows two teams and result**
- Given the user is on the homepage
- Then a "Latest results" section is displayed
- And today's basketball match is shown with two teams
- And each team has a name and logo image
- And the match score/status is visible

### R4 — Team Section
**Scenario: Team roster shows player cards**
- Given the user is on the homepage
- Then a "Team" section is displayed
- And player cards are shown in a grid (2 columns)
- And each player card has a photo background, name, and position/title
- And each card has a "View portfolio" outlined button (#e02529 border)
- And at least 4 players are displayed

### R5 — Statistics Section
**Scenario: Player statistics tabs and slider**
- Given the user is on the homepage
- Then a "Player statistics" section is displayed
- And tabbed navigation allows switching between stat categories
- And a carousel/slider shows player stat cards
- And each card shows player name and point total (e.g. "95.5 point")
- And a league table is also viewable

### R6 — Latest Videos Section
**Scenario: Video carousel displays basketball content**
- Given the user is on the homepage
- Then a "Latest Videos" section is displayed
- And a carousel of video thumbnails is shown
- And each video item has a thumbnail, play icon overlay, and title
- And at least 4 videos are in the carousel

### R7 — Product/Shop Section
**Scenario: Product grid with add-to-cart**
- Given the user is on the homepage
- Then a product/shop section is displayed
- And product items are shown in a grid (4 columns on desktop)
- And each product has an image, name, and price
- And each product has an "Add to cart" button
- And the products are displayed in tabbed groups (multiple carousels)

### R8 — Footer
**Scenario: Footer contains widgets and copyright**
- Given the user scrolls to the bottom
- Then a dark footer is displayed
- And footer widgets show About text, recent posts, and contact info
- And a copyright notice is shown
- And a link to Component Dock (https://www.componentdock.com/) is present

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
