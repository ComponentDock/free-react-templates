# Template: Mercy — Charity & Nonprofit Landing

Recreation of ColorLib "Unicare"
(https://colorlib.com/wp/template/unicare/)
Preview: https://preview.colorlib.com/theme/unicare/

## Purpose

Mercy is a charity & nonprofit landing page with a top bar, navbar, hero, about donation, services, causes, testimonials, blog and volunteers. It recreates the ColorLib **Unicare** design (https://colorlib.com/wp/template/unicare/, preview: https://preview.colorlib.com/theme/unicare/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens

| Token       | Value                | Usage                          |
| ----------- | -------------------- | ------------------------------ |
| brand       | #fd645b              | CTA buttons, donate, banner bg |
| tertiary    | #4c7bcb              | service card background        |
| primary     | #82ae46              | service card background        |
| quarternary | #20c997              | service card background        |
| active-nav  | #eec857              | active nav link color          |
| footer-bg   | #3b3b3b              | footer dark background         |
| paper       | #ffffff              | body / section background      |
| ink         | #333333              | headings                       |
| mist        | #999999              | body text                      |
| font        | Montserrat (300-800) | Google Fonts via link          |

## Sections (in order)

1. **TopBar** — phone/email left, social icons right, dark background
2. **Navbar** — brand "Mercy", links: Home, About, Volunteer, Causes, Blog, Contact, Donate (CTA pill)
3. **Hero** — full-height bg image, dark gradient overlay, heading + subheading, CTA button + video play
4. **About/Donation** — split: LEFT donation form (name, email, causes, amount, payment, donate); RIGHT welcome text + stats counters (50 Volunteers, 24400 Trusted Funds)
5. **Services** — 4-column: Become a Volunteer (coral), Quick Fundraising (blue), Start Donating (green), Get Involved (teal)
6. **Causes** — 4 cards: image, title, description, progress bar, donate button
7. **Testimonials** — dark overlay bg, carousel: avatar, stars, quote, name, role
8. **Blog** — 4 cards: image, meta (date, author), title, excerpt, read more
9. **Volunteers** — 4 team members: image, name, role, social icons
10. **CTA Banner** — coral full-width, heading, CTA button
11. **Footer** — 4 columns: brand+social+donate, Latest News, Quick Links, Contact. Copyright links Component Dock

## Requirements

### Feature: TopBar

#### Scenario: I see phone number and email

- **Given** the page loads
- **When** I look at the top bar
- **Then** I see phone number and email

#### Scenario: I see social media icons

- **Given** the page loads
- **When** I look at the top bar
- **Then** I see social media icons

### Feature: Navbar

#### Scenario: I see the brand "Mercy"

- **Given** the page loads
- **When** I look at the navbar
- **Then** I see the brand "Mercy"

#### Scenario: I see navigation links for Home, About, Volunteer, Causes, Blog, Contact

- **Given** the page loads
- **When** I look at the navbar
- **Then** I see navigation links for Home, About, Volunteer, Causes, Blog, Contact

#### Scenario: I see a Donate CTA button

- **Given** the page loads
- **When** I look at the navbar
- **Then** I see a Donate CTA button

### Feature: Hero

#### Scenario: I see heading "Help the poor in need"

- **Given** the page loads
- **When** I look at the hero
- **Then** I see heading "Help the poor in need"

#### Scenario: I see a "Become A Volunteer" button

- **Given** the page loads
- **When** I look at the hero
- **Then** I see a "Become A Volunteer" button

#### Scenario: I see a "Watch our video" link

- **Given** the page loads
- **When** I look at the hero
- **Then** I see a "Watch our video" link

### Feature: About/Donation

#### Scenario: I see a donation form with fields

- **Given** the page loads
- **When** I look at the about section
- **Then** I see a donation form with fields

#### Scenario: I see stats (Volunteers, Trusted Funds)

- **Given** the page loads
- **When** I look at the about section
- **Then** I see stats (Volunteers, Trusted Funds)

### Feature: Services

#### Scenario: I see 4 service cards

- **Given** the page loads
- **When** I look at the services section
- **Then** I see 4 service cards

### Feature: Causes

#### Scenario: I see 4 cause cards with progress bars

- **Given** the page loads
- **When** I look at the causes section
- **Then** I see 4 cause cards with progress bars

### Feature: Testimonials

#### Scenario: I see testimonial cards with star ratings

- **Given** the page loads
- **When** I look at the testimonials section
- **Then** I see testimonial cards with star ratings

### Feature: Blog

#### Scenario: I see 4 blog post cards

- **Given** the page loads
- **When** I look at the blog section
- **Then** I see 4 blog post cards

### Feature: Volunteers

#### Scenario: I see 4 team member cards

- **Given** the page loads
- **When** I look at the volunteers section
- **Then** I see 4 team member cards

### Feature: CTA Banner

#### Scenario: I see heading and CTA button

- **Given** the page loads
- **When** I look at the CTA banner
- **Then** I see heading and CTA button

### Feature: Footer

#### Scenario: I see brand info, quick links, and contact info

- **Given** the page loads
- **When** I look at the footer
- **Then** I see brand info, quick links, and contact info

#### Scenario: I see a link to componentdock.com

- **Given** the page loads
- **When** I look at the footer
- **Then** I see a link to componentdock.com
