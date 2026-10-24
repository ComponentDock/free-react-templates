# Template: PageDraft (Agency / Web Services)
<!-- prep-status: shipped-as=nexus -->
> **SHIPPED-UNDER** — the ColorLib `pageone` design this prep describes already
> ships as `apps/nexus` (<https://nexus.free.componentdock.com>).
> Do not scaffold `apps/pagedraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-nexus/spec.md`.

## Purpose

Recreation of the ColorLib "PageOne" template as a modern React SPA.

- **Source:** https://colorlib.com/wp/template/pageone/
- **Preview:** https://preview.colorlib.com/theme/pageone/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `pagedraft` (apps/pagedraft, @free-react-templates/pagedraft)
- **Deploy target:** pagedraft.free.componentdock.com

## Design tokens (extracted from preview CSS)

| Token             | Value                          |
| ----------------- | ------------------------------ |
| Font family       | `"Poppins", sans-serif`        |
| Brand primary     | `#ec1e64` (hot pink / magenta) |
| Brand hover       | `#ee3574` / `#f04b83`          |
| Dark section bg   | `#1d1d1d`                      |
| Light section bg  | `#f8f9fa`                      |
| Text primary      | `#212529`                      |
| Text muted        | `#6c757d`                      |
| Footer text       | `#888`                         |
| Footer bg         | `#f8f9fa`                      |
| Button radius     | `0.25rem`                      |
| Avatar radius     | `50%` (circular)               |
| Hero heading size | `80px` desktop / `50px` mobile |

## Section structure (from live preview DOM)

1. **Mobile Menu** — slide-in mobile nav overlay
2. **Navbar** — sticky top nav; logo "PageDraft." left; links: Home, Services (dropdown), Process, Clients, About, Contact; hamburger on mobile
3. **Hero** (#home-section) — white bg; large bold heading; CTA button; 6 service-category pill links (Technology, Marketing, Product & Design, Strategic Consulting, Business Synergies, Fundraising)
4. **Service Categories** (section-1, pt-0) — row of category cards with short descriptions below hero
5. **Services** (#services-section, bg-light) — heading "Services" + intro paragraph + 4-column grid of service cards (Graphic Design, Web Development, Branding, Iconography) each with icon, title, description
6. **Process** (#process-section, section-3) — heading "Our Process" + intro + 6 numbered steps (01–06): Information Gathering, Planning, Design, Development, Testing and Delivery, Maintenance — each with number badge, title, description
7. **Clients** (#clients-section, section-4, dark #1d1d1d bg) — client testimonial carousel/grid; 5 clients (Goldline, Foxhub, Ideaa, Nirastate, Treva) each with name, quote, avatar
8. **Features** (section-5, bg-light) — heading "Features" + 6-column grid: Illustration, 24/7 Support, Easy to Use, Web Development, Intuitive, Documentation — each with icon, title, description
9. **About** (#about-section, section-6) — "Office and Team" heading; two-column: left = office description (3 paragraphs), right = office image; below = "Our Team" heading + 4 team member cards (Bradley Costa CEO, Chanice Muir CTO, Alisha Ellison Designer, Bradley Costa Developer) each with circular photo, name, role, description
10. **Contact** (#contact-section) — 3 quick-contact items (address, phone, email) with circular icon badges; embedded map
11. **Footer** (bg #f8f9fa) — 3-column: About (logo + description), Pages (Blog, About, Contact), Resources (Blog, Home); bottom bar with copyright + Component Dock link

## Requirements

### Navbar

Feature: Sticky navigation bar

#### Scenario: Desktop nav displays all links

- **GIVEN** the user is on a desktop viewport
- **WHEN** the page loads
- **THEN** the navbar shows logo "PageDraft." on the left
- **AND** links "Home", "Services", "Process", "Clients", "About", "Contact" are visible

#### Scenario: Navbar becomes sticky on scroll

- **GIVEN** the user scrolls past the hero
- **THEN** the navbar sticks to the top with white background and subtle shadow

#### Scenario: Mobile hamburger opens slide-in menu

- **GIVEN** the user is on a mobile viewport
- **WHEN** the hamburger icon is tapped
- **THEN** a slide-in mobile menu appears with all nav links

#### Scenario: Mobile menu closes on link tap

- **GIVEN** the mobile menu is open
- **WHEN** a nav link is tapped
- **THEN** the menu closes and the page scrolls to the section

### Hero

Feature: Hero section

#### Scenario: Hero displays heading and CTA

- **GIVEN** the user views the page
- **THEN** a large heading "We are a web agency based in Los Angeles, CA" is displayed
- **AND** a CTA button is visible below the heading

#### Scenario: Service category pills are shown

- **GIVEN** the user views the hero
- **THEN** 6 service-category links are displayed: Technology, Marketing, Product & Design, Strategic Consulting, Business Synergies, Fundraising

#### Scenario: Hero heading is responsive

- **GIVEN** the user is on a mobile viewport
- **THEN** the heading font size reduces to ~50px

### Service Categories

Feature: Service category cards below hero

#### Scenario: Category cards display with descriptions

- **GIVEN** the user scrolls below the hero
- **THEN** category cards with short descriptions are visible in a row layout

### Services

Feature: Services section

#### Scenario: Services heading and intro are displayed

- **GIVEN** the user scrolls to the services section
- **THEN** heading "Services" and an intro paragraph are visible

#### Scenario: Four service cards are shown in a grid

- **GIVEN** the user views the services section
- **THEN** 4 service cards are displayed: Graphic Design, Web Development, Branding, Iconography
- **AND** each card has an icon, title, and description paragraph

### Process

Feature: Process section

#### Scenario: Six process steps are displayed

- **GIVEN** the user scrolls to the process section
- **THEN** heading "Our Process" and intro paragraph are visible
- **AND** 6 numbered steps are shown: 01 Information Gathering, 02 Planning, 03 Design, 04 Development, 05 Testing and Delivery, 06 Maintenance
- **AND** each step has a pink number badge, title, and description

### Clients

Feature: Clients testimonials section

#### Scenario: Client testimonials on dark background

- **GIVEN** the user scrolls to the clients section
- **THEN** the section has a dark background (#1d1d1d)
- **AND** 5 client testimonials are displayed: Goldline, Foxhub, Ideaa, Nirastate, Treva
- **AND** each testimonial shows client name, quote, and avatar

### Features

Feature: Features section

#### Scenario: Features grid on light background

- **GIVEN** the user scrolls to the features section
- **THEN** heading "Features" and intro paragraph are visible
- **AND** 6 feature cards are displayed: Illustration, 24/7 Support, Easy to Use, Web Development, Intuitive, Documentation
- **AND** each card has an icon, title, and description

### About

Feature: About section

#### Scenario: Office description with image

- **GIVEN** the user scrolls to the about section
- **THEN** "Our Office" heading and 3 paragraphs of description are shown
- **AND** an office photo is displayed alongside the text

#### Scenario: Team member cards

- **GIVEN** the user views the about section
- **THEN** "Our Team" heading is visible
- **AND** 4 team member cards are displayed with circular photos, names, roles, and descriptions

### Contact

Feature: Contact section

#### Scenario: Quick contact items

- **GIVEN** the user scrolls to the contact section
- **THEN** 3 contact items are displayed: address, phone, email
- **AND** each has a circular icon badge with brand-pink border

### Footer

Feature: Site footer

#### Scenario: Footer layout

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has a light gray background (#f8f9fa)
- **AND** 3 columns are shown: About (logo + description), Pages (Blog, About, Contact), Resources (Blog, Home)
- **AND** a bottom bar contains copyright text and a link to https://www.componentdock.com/

#### Scenario: Footer links navigate correctly

- **GIVEN** the user clicks a footer page link
- **THEN** the browser navigates to the corresponding section or page

## Verification checklist

- [ ] Navbar: sticky on scroll, all links present, mobile hamburger works
- [ ] Hero: heading renders, CTA button visible, service pills shown
- [ ] Service Categories: cards display with descriptions below hero
- [ ] Services: 4 cards in grid, each with icon + title + description
- [ ] Process: 6 numbered steps with pink badges, titles, descriptions
- [ ] Clients: dark bg, 5 testimonials with avatars
- [ ] Features: 6 cards on light bg, icons + titles + descriptions
- [ ] About: office description + image, 4 team member cards with circular photos
- [ ] Contact: 3 contact items with circular icon badges
- [ ] Footer: 3 columns, Component Dock link in bottom bar
- [ ] Responsive: mobile menu, stacked layouts, reduced font sizes
- [ ] Design tokens: Poppins font, #ec1e64 brand, #1d1d1d dark, #f8f9fa light
- [ ] No ColorLib references in app code
- [ ] public/CNAME = pagedraft.free.componentdock.com
- [ ] homepage = https://pagedraft.free.componentdock.com
