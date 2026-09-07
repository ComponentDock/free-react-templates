# Template: Bizcraft (Classic Corporate Website)

## Purpose

Bizcraft is a full-page corporate/business website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "BizPro" free template (source: https://colorlib.com/wp/template/bizpro/),
built under a DIFFERENT name (**Bizcraft**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-based one-page business site with a full-width
hero slider, about section, services grid, portfolio gallery, team showcase,
skill progress bars, client testimonials, pricing table, blog preview,
partner logos, and a contact section with map. The design uses a bold red
accent (#d73e4d) on dark (#232a34) and light (#f3f3f3) section backgrounds.

- **Source slug:** `bizpro`
- **Source URL:** https://colorlib.com/wp/template/bizpro/
- **Preview URL:** https://preview.colorlib.com/theme/bizpro/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bizpro-free-classic-website-template.jpg
- **Category:** Corporate / Business Website
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from `css/style.css` of the ColorLib preview (fetched 2026-09-07):

| Token | Value | Source |
|-------|-------|--------|
| Body font | `"Raleway", sans-serif` (weights 400, 500, 700) | style.css `@import` Google Fonts |
| Heading font | `"Raleway", sans-serif` (weight 700, uppercase) | style.css |
| Body text color | `#6f6f6f` | style.css `body` |
| Heading color | `#292929` | style.css `h1-h6` |
| Body font-size | `14px` | style.css `body` |
| H1 | `48px` | style.css |
| H2 | `36px` | style.css |
| H3 | `28px` | style.css |
| H4 | `24px` | style.css |
| H5 | `22px` | style.css |
| H6 | `18px` | style.css |
| Brand / accent color | `#d73e4d` (bold red) | `.p-color`, `.p-color-bg` |
| Brand hover | `#e04f5d` (lighter red) | preloader animation |
| Preloader accent | `#e62d3f` / `#ee2438` | preloader keyframes |
| Service section bg | `#232a34` (dark charcoal) | `#service-section` |
| Skill section bg | `#232a34` (dark charcoal) | `#skill-section` |
| Pricing section bg | `#f3f3f3` (light gray) | `#pricing-section` |
| Footer bg | `#1e1e1e` (very dark) | `footer` |
| Button border-radius | `0` (sharp/square) | `.banner .project-button`, contact button |
| Icon circle border-radius | `50%` (round) | `#about-us .icon` |
| Theme title underline | `25px × 3px`, `#d73e4d` | `.theme-title h2:before` |
| Theme title spacing | `margin: 95px 0 0 0` | `.theme-title` |
| Middle banner bg | Parallax image, `rgba(0,0,0,0.8)` overlay | `.page-middle-banner` |
| Partner section | Logo carousel (owl-carousel) | `#partner-section` |
| Nav link hover | `#d73e4d` | `.theme-main-menu` |
| Active nav | `#d73e4d` | `.theme-main-menu .navbar-nav>li.active>a` |

### Color palette

| Role | Hex | Notes |
|------|-----|-------|
| Accent / CTA | `#d73e4d` | Red — buttons, hover, skill bars, active states |
| Dark background | `#232a34` | Services, skills sections |
| Very dark | `#1e1e1e` | Footer |
| Light gray bg | `#f3f3f3` | Pricing section |
| Heading text | `#292929` | All headings |
| Body text | `#6f6f6f` | Paragraphs |
| White | `#fff` | Cards, banner text, pricing tables |
| Border gray | `#dfdfdf` | Pricing table borders |

## Section structure (from preview HTML)

1. **Header / Navbar** — Logo left, right-aligned nav links: HOME, ABOUT, SERVICES, PORTFOLIO, TEAM, SKILLS, CLIENTS, PRICING, BLOG (with dropdown), CONTACT. Sticky on scroll.
2. **Hero / Banner** — Full-width revolution slider with parallax images, centered heading + subtitle + CTA button (square, red border).
3. **About Us** — Section title with red underline, 3-column grid of about items with round icons (border-radius 50%), heading + description + "more" link.
4. **Services** — Dark background (#232a34), section title (white text), 3-column grid of service cards with icon + heading + description. Hover turns card red-accent.
5. **Portfolio / Projects** — Filterable gallery with menu tabs (active = red bg), masonry-style image grid with hover overlay (scale + opacity).
6. **Middle Banner** — Parallax background image with dark overlay, centered heading + CTA button.
7. **Team** — Section title, 3-column grid of team members with photo, name, role, social links overlay on hover.
8. **Skills** — Dark background (#232a34), split layout: image left, progress bars right. Skill bars with red (#d73e4d) fill, labeled (e.g. HTML/CSS, Photoshop, etc.).
9. **Clients** — Testimonial slider with client avatar, quote, name.
10. **Pricing** — Light gray (#f3f3f3) bg, 3-column pricing tables with feature list, red CTA button, bordered cards.
11. **Blog** — 3-column grid of blog post cards with image, date, title, excerpt, "read more" link.
12. **Partners** — Logo carousel (owl-carousel), horizontal scrolling partner logos.
13. **Contact** — Two-column: left = contact info (address, phone, email) with red icons; right = contact form (name, email, subject, message, send button).
14. **Footer** — Dark (#1e1e1e), centered logo, social media icon links, copyright text.

## Requirements

### Requirement: Page renders with navbar and hero banner

The page SHALL render a sticky navbar with logo and navigation links, and a full-width hero banner with heading, subtitle, and CTA button.

#### Scenario: Navbar renders with all nav links

- **GIVEN** the user loads the page
- **WHEN** the page finishes rendering
- **THEN** a navbar is visible at the top
- **AND** the navbar contains a logo on the left
- **AND** the navbar contains links: Home, About, Services, Portfolio, Team, Skills, Clients, Pricing, Blog, Contact
- **AND** clicking a nav link scrolls to the corresponding section

#### Scenario: Hero banner renders with CTA

- **GIVEN** the user loads the page
- **WHEN** the hero section is visible
- **THEN** a large heading is displayed centered on a dark/image background
- **AND** a subtitle is displayed below the heading
- **AND** a CTA button ("GET STARTED" or equivalent) is visible with square corners and red border

### Requirement: About section renders with icon cards

The About section SHALL display a section title with red underline and a grid of about items with round icons.

#### Scenario: About section renders correctly

- **GIVEN** the user scrolls to the About section
- **WHEN** the section is visible
- **THEN** a section title "ABOUT US" is displayed with a red underline (25px wide)
- **AND** three about-item cards are displayed in a row
- **AND** each card has a round icon (50% border-radius), a heading, and a description

### Requirement: Services section renders on dark background

The Services section SHALL display on a dark (#232a34) background with service cards.

#### Scenario: Services section renders on dark background

- **GIVEN** the user scrolls to the Services section
- **WHEN** the section is visible
- **THEN** the section background is dark (#232a34)
- **AND** section title text is white
- **AND** service cards are displayed in a 3-column grid
- **AND** each card has an icon, heading, and description
- **AND** hovering a card highlights it with the accent color (#d73e4d)

### Requirement: Portfolio section with filterable gallery

The Portfolio section SHALL display a filterable image gallery with menu tabs.

#### Scenario: Portfolio filter tabs work

- **GIVEN** the user scrolls to the Portfolio section
- **WHEN** the filter tabs are visible
- **THEN** multiple category tabs are displayed (e.g. All, Web Design, Branding, Graphics)
- **AND** the active tab has a red (#d73e4d) background
- **AND** clicking a tab filters the gallery images
- **AND** images have a hover overlay effect

### Requirement: Team section displays team members

The Team section SHALL display team member cards with photos and social links.

#### Scenario: Team members render correctly

- **GIVEN** the user scrolls to the Team section
- **WHEN** the section is visible
- **THEN** team member cards are displayed in a 3-column grid
- **AND** each card shows a photo, member name, and role
- **AND** hovering a card reveals social media icon links

### Requirement: Skills section with progress bars

The Skills section SHALL display on a dark background with labeled progress bars.

#### Scenario: Skills progress bars render

- **GIVEN** the user scrolls to the Skills section
- **WHEN** the section is visible
- **THEN** the section background is dark (#232a34)
- **AND** skill bars are displayed with labels (e.g. HTML/CSS, Photoshop)
- **AND** the filled portion uses the accent color (#d73e4d)
- **AND** skill percentages or levels are shown

### Requirement: Clients section with testimonials

The Clients section SHALL display client testimonials in a slider.

#### Scenario: Client testimonials render

- **GIVEN** the user scrolls to the Clients section
- **WHEN** the section is visible
- **THEN** a client testimonial is displayed with an avatar image, quote text, and client name
- **AND** navigation dots or arrows allow cycling through testimonials

### Requirement: Pricing section with pricing tables

The Pricing section SHALL display pricing cards on a light gray (#f3f3f3) background.

#### Scenario: Pricing tables render correctly

- **GIVEN** the user scrolls to the Pricing section
- **WHEN** the section is visible
- **THEN** the section background is light gray (#f3f3f3)
- **AND** three pricing cards are displayed in a row
- **AND** each card shows a plan name, price, feature list, and a CTA button
- **AND** the CTA button has a red (#d73e4d) background
- **AND** cards have white background with light border (#dfdfdf)

### Requirement: Blog section with post cards

The Blog section SHALL display blog post preview cards.

#### Scenario: Blog posts render correctly

- **GIVEN** the user scrolls to the Blog section
- **WHEN** the section is visible
- **THEN** blog post cards are displayed in a 3-column grid
- **AND** each card shows an image, date, title, excerpt, and "read more" link
- **AND** the "read more" link uses the accent color (#d73e4d)

### Requirement: Contact section with form

The Contact section SHALL display contact information and a contact form.

#### Scenario: Contact form renders

- **GIVEN** the user scrolls to the Contact section
- **WHEN** the section is visible
- **THEN** a two-column layout is displayed
- **AND** the left column shows contact info (address, phone, email) with red (#d73e4d) icons
- **AND** the right column shows a form with fields: Name, Email, Subject, Message
- **AND** a "SEND MESSAGE" button with red background is visible

### Requirement: Footer with social links

The Footer SHALL display centered content on a dark background.

#### Scenario: Footer renders correctly

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer is visible
- **THEN** the footer background is very dark (#1e1e1e)
- **AND** a logo is centered at the top
- **AND** social media icon links are displayed inline
- **AND** a copyright line with "Component Dock" link is shown

### Requirement: Responsive layout

The template SHALL be responsive across viewport widths.

#### Scenario: Mobile layout adjusts

- **GIVEN** the user views the page on a narrow viewport (< 768px)
- **WHEN** the layout adjusts
- **THEN** the navbar collapses to a hamburger menu
- **AND** multi-column grids stack to single column
- **AND** all sections remain readable and accessible

## Verification checklist

- [ ] Navbar renders with all 10 nav links, sticky on scroll
- [ ] Hero banner has heading, subtitle, and square CTA button
- [ ] About section has round icons and red underline title
- [ ] Services section has dark (#232a34) background with 3-column cards
- [ ] Portfolio has filterable gallery with red active tab
- [ ] Team section shows member cards with social overlays
- [ ] Skills section on dark bg with red progress bars
- [ ] Clients section with testimonial slider
- [ ] Pricing section on #f3f3f3 bg with 3 pricing cards
- [ ] Blog section with 3-column post cards
- [ ] Contact section with form and info columns
- [ ] Footer on #1e1e1e with social icons and Component Dock link
- [ ] All section titles use Raleway font, uppercase, with red underline
- [ ] Brand color #d73e4d used consistently for accents/CTAs
- [ ] Responsive layout works on mobile viewports
