# Template: Coachcraft (Life Coaching / Consulting)
<!-- prep-status: shipped-as=elevate -->
> **SHIPPED-UNDER** — the ColorLib `life-coaching` design this prep describes already
> ships as `apps/elevate` (<https://elevate.free.componentdock.com>).
> Do not scaffold `apps/coachcraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-elevate/spec.md`.

## Purpose

Recreation of ColorLib "Life Coaching" — a responsive coaching/life-coaching
website template with hero slider, services grid, animated statistics,
pricing plans, contact form, and Google Maps integration.

- **Source**: [ColorLib Life Coaching](https://colorlib.com/wp/template/life-coaching/)
- **Preview**: https://preview.colorlib.com/#life-coaching (unreachable — 404 as of 2026-09-16; falling back to screenshot)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/lifecoaching-free-template.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name**: `coachcraft` (apps/coachcraft, `@free-react-templates/coachcraft`)

## Design tokens (extracted from screenshot + ColorLib page)

| Token            | Value                                | Source                             |
| ---------------- | ------------------------------------ | ---------------------------------- |
| Brand primary    | `#a3b627` (olive/yellow-green)       | Nav active state, CTA buttons      |
| Brand secondary  | `#8fd0d2` (light teal)               | Service icon circular backgrounds  |
| Background       | `#ffffff` (white)                     | Section backgrounds                |
| Top bar bg       | `#333333` (dark gray)                | Top bar background                 |
| Text primary     | `#333333` (dark)                      | Headings, body text                |
| Text secondary   | `#666666` (muted gray)               | Subheadings, descriptions          |
| Text light       | `#ffffff` (white)                     | Hero overlay text                  |
| Nav active bg    | `#a3b627` (olive green)              | Active nav link highlight          |
| Font headings    | `'Open Sans', sans-serif`            | Headings (bold weight)             |
| Font body        | `'Open Sans', sans-serif`            | Body paragraphs                    |
| Button radius    | `4px` (slightly rounded)             | CTA buttons                        |
| Button bg        | `#a3b627` (olive green)              | "MAKE AN APPOINTMENT" button       |
| Button text      | `#ffffff` (white)                     | Button label color                 |
| Hero overlay     | Semi-transparent dark gradient       | Over hero image                    |
| Icon circles     | `#8fd0d2` background, white icons    | Service section circular icons     |

## Sections (in order, from screenshot + ColorLib page description)

1. **Top Bar** — Dark gray background (#333333). Left: phone icon + phone number. Right: social media icons (Facebook, Twitter, Instagram, Google+). White text, small font.
2. **Navigation** — White background, sticky. Logo "LIFECOACH" left (text-based, "LIFE" normal weight, "COACH" bold). Nav links: HOME, ABOUT, SERVICES, STORIES, BLOG, CONTACT. Search icon far right. Active link has olive green (#a3b627) background highlight with white text.
3. **Hero Slider** — Full-width hero with background image + dark gradient overlay. Centered text: "IMPROVING THE WORLD" (olive green uppercase subtitle), "Restart your career to be successful" (large white heading). "CONNECT WITH US" button (white outlined, rounded corners). Carousel dots at bottom.
4. **Info Bar** — Light gray or white background below hero. Three columns: phone icon + phone number + address, clock icon + opening hours, and "MAKE AN APPOINTMENT" olive green button.
5. **Services** — White background. Centered heading "We can help you in different situations" with "WE OFFER SERVICES" olive green subtitle. 4-column grid of service cards: each has a teal circular icon background, title (Career & Business, Mental & Physical Care, People & Relationships, Life coaching), and description paragraph.
6. **Statistics** — (inferred from ColorLib description: "animated statistics") Counter section showing key numbers with animation on scroll.
7. **About / Content** — (inferred: "content loading on scroll") About section with text content and possibly team imagery.
8. **Pricing Plans** — (inferred from ColorLib description: "pricing plans") Pricing table/cards with plan tiers.
9. **Blog / Stories** — (inferred from nav link "STORIES") Blog post previews or testimonials.
10. **Contact Form + Google Maps** — (inferred from ColorLib description: "integrated contact form and Google Maps") Contact section with form fields and embedded map.
11. **Footer** — Dark background. Footer links, social media icons, copyright. "Component Dock" attribution link.

## Requirements

### Feature: Top Bar

#### Scenario: Top bar displays contact info and social links

- **GIVEN** the user loads the page
- **THEN** the top bar is visible with a dark background
- **AND** a phone number is displayed on the left side
- **AND** social media icons are displayed on the right side
- **AND** the top bar text is white

### Feature: Navigation

#### Scenario: Navigation displays logo and links

- **GIVEN** the user loads the page
- **THEN** the navigation bar is visible with a white background
- **AND** the logo text "coachcraft" is displayed on the left
- **AND** navigation links are visible: "home", "about", "services", "stories", "blog", "contact"
- **AND** a search icon is visible on the right

#### Scenario: Active navigation link is highlighted

- **GIVEN** the user is on the homepage
- **THEN** the "home" nav link has an olive green background highlight

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is narrow (mobile)
- **THEN** the navigation collapses into a hamburger menu
- **WHEN** the user taps the hamburger icon
- **THEN** a mobile menu opens showing all navigation links

### Feature: Hero Slider

#### Scenario: Hero displays heading and CTA

- **GIVEN** the user is on the homepage
- **THEN** the hero section shows a background image with dark overlay
- **AND** the subtitle "IMPROVING THE WORLD" is displayed in olive green uppercase
- **AND** the heading "Restart your career to be successful" is displayed in white
- **AND** a "CONNECT WITH US" button is visible with white outlined style

#### Scenario: Hero has carousel navigation

- **GIVEN** the hero slider is visible
- **THEN** carousel dots are displayed at the bottom
- **AND** clicking a dot changes the hero slide

### Feature: Info Bar

#### Scenario: Info bar displays contact details and appointment CTA

- **GIVEN** the user scrolls past the hero
- **THEN** the info bar is visible
- **AND** a phone number section shows an icon and phone number
- **AND** an opening hours section shows an icon and schedule
- **AND** a "MAKE AN APPOINTMENT" button is visible with olive green background

### Feature: Services Section

#### Scenario: Services section displays heading and cards

- **GIVEN** the user scrolls to the services section
- **THEN** the heading "We can help you in different situations" is visible
- **AND** the subtitle "WE OFFER SERVICES" is displayed in olive green
- **AND** four service cards are displayed in a row

#### Scenario: Each service card has icon, title, and description

- **GIVEN** the services section is visible
- **THEN** each card has a teal circular icon background
- **AND** each card has a title (Career & Business, Mental & Physical Care, People & Relationships, Life coaching)
- **AND** each card has a description paragraph

### Feature: Statistics Section

#### Scenario: Statistics display animated counters

- **GIVEN** the user scrolls to the statistics section
- **THEN** counter numbers animate from zero to their target values
- **AND** each counter has a label underneath

### Feature: Pricing Plans

#### Scenario: Pricing section displays plan cards

- **GIVEN** the user scrolls to the pricing section
- **THEN** pricing plan cards are displayed
- **AND** each card shows a plan name, price, and feature list
- **AND** one plan is highlighted as recommended

### Feature: Contact Form

#### Scenario: Contact section displays form and map

- **GIVEN** the user scrolls to the contact section
- **THEN** a contact form is visible with input fields (name, email, subject, message)
- **AND** a submit button is visible
- **AND** a Google Maps embed is visible nearby

### Feature: Footer

#### Scenario: Footer displays branding and links

- **GIVEN** the user scrolls to the bottom
- **THEN** the footer has a dark background
- **AND** social media icons are displayed
- **AND** a "Component Dock" attribution link is visible
- **AND** copyright information is displayed

## Verification checklist

- [ ] Top bar: dark bg, phone number, social icons, white text
- [ ] Navigation: white bg, logo text, all nav links, search icon, active state highlight
- [ ] Hero: full-width background image, dark overlay, subtitle, heading, CTA button, carousel dots
- [ ] Info bar: phone + address, opening hours, appointment button
- [ ] Services: heading + subtitle, 4 cards with teal icons, titles, descriptions
- [ ] Statistics: animated counters with labels
- [ ] Pricing: plan cards with pricing details
- [ ] Contact: form inputs + submit button + Google Maps embed
- [ ] Footer: dark bg, social icons, Component Dock link, copyright
- [ ] Responsive: mobile hamburger, stacked layout on small screens
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Tests: 100% coverage on all components

<!-- live-palette-revalue:start -->
**Live palette re-value (2026-10-23)** — the demo `https://preview.colorlib.com/theme/lifecoaching/` answers **HTTP 200** (37,928 B); the declarations below are quoted from its own stylesheets.

| claimed | painted | d | sheet (bytes, sha256) | declaration |
| --- | --- | --- | --- | --- |
| `#8dd1d1` | `#8fd0d2` ×8 | 2 | `style.css` (80,582 B, `c8af002e5c36…`) | `background: #8fd0d2 !important; }` |

The claimed hex was a screenshot sample of the same hue; the sheet value is canonical (`docs/replication.md`).
<!-- live-palette-revalue:end -->

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/lifecoaching/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#a3b627` — nearest `#c5cf31` (d=43)
<!-- live-palette-unverified:end -->
