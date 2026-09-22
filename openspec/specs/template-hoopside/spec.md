---
name: hoopside
description: Basketball sports landing page with hero countdown, latest results, team roster, player statistics, videos, shop, and CTA
template: colorlib-thebasketball
source: https://preview.colorlib.com/theme/thebasketball/
---

## Purpose

Recreation of ColorLib Thebasketball (https://colorlib.com/wp/template/thebasketball/) — a basketball sports landing page with hero countdown, latest match results, team roster, player statistics with tabs, latest videos carousel, product shop, and a fan club CTA. The new name is "Hoopside".

### Design Tokens

- Fonts: Oswald (headings, labels) + Roboto (body text) — Google Fonts
- Primary brand color: #e02529 (vivid red — CTAs, highlights, active states)
- Secondary brand color: #2f76c7 (blue — secondary accents)
- Gold accent: #ECBA0B (highlights, star ratings)
- Dark backgrounds: #100303, #111111, #211E1E, #2F2C2C, #332D2E (section overlays, footer)
- Body text: #111111, #444444
- Muted text: #888888, #999, #b1b1b5
- Light backgrounds: #f5f5f5, #f7f5fa, #ffffff
- Button primary: #e02529 bg, white text, border-radius: 2px
- Button border: transparent with #e02529 border, border-radius: 2px
- Button pill: border-radius: 60px (some CTA buttons)
- Icon circles: 50% border-radius
- Overlay: rgba(0,0,0,0.7) on hero/video backgrounds
- Parallax backgrounds used on hero and call-to-action sections

## Requirements

### Requirement: Header with top bar and navigation

The page SHALL render a header with a top bar (team email, support email, cart), a logo, and desktop navigation links (Home, About, Player, Shop, Pages, Blog, Contact).

#### Scenario: Navigation links are present

- **WHEN** the page loads
- **THEN** links for Home, About, Player, Shop, Pages, Blog, and Contact are visible

#### Scenario: Top bar shows contact info

- **WHEN** the page loads
- **THEN** team and support email addresses are visible in the header top bar

#### Scenario: Cart icon is present

- **WHEN** the page loads
- **THEN** a cart indicator with item count is visible

### Requirement: Hero section with countdown

The page SHALL render a full-width hero section with a background image, overlay, headline about national leagues, a countdown timer (hours, minutes, seconds), and a "Book Tickets" CTA button.

#### Scenario: Hero headline renders

- **WHEN** the page loads
- **THEN** the heading "National leagues 2020 session begins" is visible

#### Scenario: Countdown timer renders

- **WHEN** the page loads
- **THEN** countdown displays for Hours, Minutes, and Seconds

#### Scenario: Book Tickets button

- **WHEN** the page loads
- **THEN** a "Book Tickets" button is visible

### Requirement: Latest Results section

The page SHALL render a latest results section with a section title, a match results table, and a featured match display showing two teams.

#### Scenario: Latest results heading

- **WHEN** the page loads
- **THEN** the heading "Latest results" is visible

#### Scenario: Match display renders

- **WHEN** the page loads
- **THEN** a match between "Costa Caribe" and "Brooklyn Nets" is displayed

#### Scenario: Join our team button

- **WHEN** the page loads
- **THEN** a "Join our team" button is visible in the results section

### Requirement: Team roster section

The page SHALL render a team section with a heading, player cards showing player images, names, and positions.

#### Scenario: Team heading renders

- **WHEN** the page loads
- **THEN** the heading "First team" is visible

#### Scenario: Player cards render

- **WHEN** the page loads
- **THEN** player cards for Grace Osborne (Center), Frances Matthews (Point guard), Florence Munoz (Shooting guard), and Victoria Lawrence (Power forward) are visible

### Requirement: Player Statistics section with tabs

The page SHALL render a statistics section with tabbed navigation (Goalkeepers, Defenders, Midfielders, Attackers), a player statistics slider, and a league points table.

#### Scenario: Statistics heading renders

- **WHEN** the page loads
- **THEN** the heading "Player statistics" is visible

#### Scenario: Tab navigation works

- **WHEN** the page loads
- **THEN** tabs for Goalkeepers, Defenders, Midfielders, and Attackers are visible

#### Scenario: Player stats display

- **WHEN** the page loads
- **THEN** player statistics with point values and "View Portfolio" buttons are visible

#### Scenario: League table renders

- **WHEN** the page loads
- **THEN** a league points table with position, team, wins, losses, points, and percentage columns is visible

### Requirement: Latest Videos section

The page SHALL render a latest videos section with a carousel of video thumbnails with titles.

#### Scenario: Videos carousel renders

- **WHEN** the page loads
- **THEN** a carousel of video items with titles is visible

### Requirement: Product/Shop section

The page SHALL render a product section with category filters and a product carousel showing items with images, names, prices, and "Add to Cart" buttons.

#### Scenario: Product section renders

- **WHEN** the page loads
- **THEN** product items with the name "Adidas Harden vol 4 Gila Monster" and price "$91.0" are visible

#### Scenario: Add to Cart buttons

- **WHEN** the page loads
- **THEN** "Add to cart" buttons are visible on product items

### Requirement: Call-to-action (Fan Club) section

The page SHALL render a call-to-action section on a parallax background with a heading and a "Register" button.

#### Scenario: CTA heading renders

- **WHEN** the page loads
- **THEN** the heading "JOIN OUR FAN CLUB AND GET FREE TICKET" is visible

#### Scenario: Register button

- **WHEN** the page loads
- **THEN** a "Register" button is visible

### Requirement: Footer

The page SHALL render a footer with contact information, latest news links, a newsletter subscription form, and a copyright bar.

#### Scenario: Footer contact info renders

- **WHEN** the page loads
- **THEN** contact details (address, phone, email) are visible in the footer

#### Scenario: Newsletter subscription

- **WHEN** the page loads
- **THEN** a newsletter subscription form with "Subscribe" button is visible

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/

## Verification Checklist

- [ ] Oswald + Roboto fonts loaded from Google Fonts
- [ ] Hero section with countdown and background image
- [ ] Latest Results with match display
- [ ] Team roster with 4 player cards
- [ ] Player Statistics with tabbed navigation
- [ ] Latest Videos carousel
- [ ] Product/Shop section with items and Add to Cart
- [ ] Fan Club CTA on parallax background
- [ ] Footer with contact, news, newsletter, and Component Dock link
- [ ] All brand colors match tokens (#e02529, #2f76c7, #ECBA0B)
- [ ] Dark section backgrounds (#111111, #211E1E, #2F2C2C)
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage
- [ ] Builds without errors
