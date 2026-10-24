# Template: SteelOps (Construction)
<!-- prep-status: shipped-as=hardhat -->
> **SHIPPED-UNDER** — the ColorLib `constructioncompany` design this prep describes already
> ships as `apps/hardhat` (<https://hardhat.free.componentdock.com>).
> Do not scaffold `apps/steelops`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-hardhat/spec.md`.

## Purpose

Recreation of the ColorLib "Constructioncompany" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source**: https://colorlib.com/wp/template/constructioncompany/
- **Preview**: https://preview.colorlib.com/theme/constructioncompany/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/constructioncompany-free-template.jpg
- **New name**: `steelops` (apps/steelops, `@free-react-templates/steelops`)
- **Surge URL**: https://steelops.free.componentdock.com

## Design tokens

Extracted from the live preview CSS (`assets/css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Brand / accent | `#ff5f13` | Bright orange — used for CTA buttons, hover states, nav active, section accents |
| Dark navy | `#0b1c39` / `#0e132a` | Headings, body text |
| Deep blue-navy | `#161e46` | Button text on white-btn variant |
| Dark background | `#191a33` / `#1f2b7b` | Header overlay, counter overlay cards |
| White | `#ffffff` | Page background, white-btn base |
| Light gray bg | `#f5f5f5` / `#f7f7fd` | Section alternating backgrounds |
| Testimonial bg | `#f9fafc` | Testimonial section background |
| News card bg | `#00235b` | Dark blue news cards |
| News date badge | `#c94500` | Date badge accent (darker orange-red) |
| Accent blue | `#1696e7` | Theme overlay background |
| Body font | Barlow (200–900) | Primary font for body, headings, nav |
| Heading font | Teko (300–700) | Used for section titles, hero sub-lines, team roles |
| Button radius | 5px (primary .btn), 0px (white-btn) | Orange primary button has 5px radius; white variant is square |
| Button shadow | `-8px 8px 0 #ca611b` | Hero button shadow offset; shifts on hover |
| Section padding | 120px top/bottom (`.section-padding`), 183px/170px (`.section-padding30`) | Varies by section type |
| Hero height | min-height 900px | Full-viewport slider |

### Visual design notes (from screenshot)

- Full-viewport hero with a dark construction-site image (cranes at dusk/sunset).
- Massive uppercase heading "ADVANCED CONSTRUCTION" in bright orange, stacked two lines.
- Above the heading: small uppercase sub-line with an orange left-accent bar.
- Below heading: orange "OUR SERVICES" CTA with left-accent bar.
- Semi-transparent dark header overlay with white nav links and orange "CONTACT NOW" button.
- Top info bar: phone, email, hours — white text on dark navy.
- Below hero: white background, "OUR SERVICES" section title with a large ghosted/watermark "SERVICES" text behind it (stroke-only uppercase).
- Three service cards in a row: image on top, light background caption below, with title and "Read More" arrow icon.
- Overall aesthetic: bold, industrial, high-contrast dark-hero with bright orange accents, uppercase-heavy typography.

## Section structure (top to bottom)

1. **Navbar** — transparent header over hero; top info bar (phone, email, hours, social icons); nav links (Home, About, Projects, Services, Blog, Pages, Contact); orange "CONTACT NOW" CTA button.
2. **Hero Slider** — full-viewport image slider with overlay; each slide: sub-line (Teko, uppercase with orange left bar), massive heading (Barlow, uppercase, orange or white), CTA button (orange `.btn` with shadow).
3. **Services** — section title "Our Services" with ghosted watermark text; 3 service cards (image + caption + icon); card hover: image zoom, icon background turns orange.
4. **About / Support Company** — two-column layout: left has heading + description paragraph + "Read More" button; right has image with an overlay caption card (dark blue bg, "1994 Since" text).
5. **Projects / Gallery** — section title with ghosted watermark; tab filter bar (centered); grid of project cards (3 columns, 2 rows per tab); each card: image + caption bar; hover: dark blue bg, white text, orange plus icon.
6. **Contact CTA** — full-width dark background section; heading "Let's talk with us"; contact info (phone, email); orange CTA button.
7. **Counter** — overlapping floating bar (orange bg); 3 counters: Projects, Machinery/Tools, Happy Clients with large numbers.
8. **Team** — section title "Our Team"; 3 team member cards: photo + role (Teko, orange) + name; photo hover zoom.
9. **Testimonials** — light gray bg; slider with testimonial quotes + founder info (avatar, name, role).
10. **Latest News** — section title; 2 news cards: dark blue bg; image with orange date badge; title + author info + "Read More" link.
11. **Footer** — dark background; 4 columns: logo + description, quick links, recent posts, contact info + newsletter form; bottom bar with copyright + "Component Dock" link.

## Requirements

### Feature: Navbar

#### Scenario: Transparent header renders over hero

- **GIVEN** the page loads
- **THEN** the header is transparent and positioned over the hero section
- **AND** the nav links "Home", "About", "Projects", "Services", "Blog", "Pages", "Contact" are visible
- **AND** a "CONTACT NOW" button is visible in the header

#### Scenario: Top info bar shows contact details

- **GIVEN** the page loads
- **THEN** a top bar shows a phone number, email address, and business hours
- **AND** social media icons are visible in the top bar

#### Scenario: Nav link hover highlights orange

- **GIVEN** the user hovers over a nav link
- **THEN** the link color changes to the brand orange (#ff5f13)

### Feature: Hero Slider

#### Scenario: Hero displays full-viewport image with overlay

- **GIVEN** the page loads
- **THEN** the hero section occupies the full viewport height
- **AND** a dark overlay is applied over the background image

#### Scenario: Hero shows headline and CTA

- **GIVEN** the hero slider is visible
- **THEN** a large uppercase heading is displayed
- **AND** an orange CTA button is visible below the heading

#### Scenario: Hero slides transition

- **GIVEN** there are multiple slides
- **THEN** the slider auto-advances between slides

### Feature: Services

#### Scenario: Services section shows 3 service cards

- **GIVEN** the user scrolls to the services section
- **THEN** 3 service cards are displayed in a row
- **AND** each card has an image on top and a caption below
- **AND** each card has a "Read More" arrow link

#### Scenario: Service card hover effect

- **GIVEN** the user hovers over a service card
- **THEN** the image scales up slightly
- **AND** the arrow icon background turns orange

### Feature: About / Support Company

#### Scenario: About section shows description and image

- **GIVEN** the user scrolls to the about section
- **THEN** a left column shows a heading, paragraph text, and a "Read More" button
- **AND** a right column shows an image with an overlay caption card

#### Scenario: About overlay caption

- **GIVEN** the about image is visible
- **THEN** an overlay card at the bottom shows "1994 Since" text on a dark blue background

### Feature: Projects Gallery

#### Scenario: Projects section shows filterable grid

- **GIVEN** the user scrolls to the projects section
- **THEN** a tab filter bar is displayed centered
- **AND** a grid of project cards is shown (3 columns)

#### Scenario: Project card hover

- **GIVEN** the user hovers over a project card
- **THEN** the caption bar background turns dark blue
- **AND** the text turns white
- **AND** an orange plus icon appears

### Feature: Contact CTA

#### Scenario: Contact CTA section renders

- **GIVEN** the user scrolls to the contact CTA
- **THEN** a full-width dark background section is visible
- **AND** a heading "Let's talk with us" is displayed
- **AND** contact details (phone, email) are shown
- **AND** an orange CTA button is present

### Feature: Counter

#### Scenario: Counter section shows statistics

- **GIVEN** the user scrolls to the counter section
- **THEN** 3 counter items are displayed: Projects, Machinery/Tools, Happy Clients
- **AND** each shows a large number

### Feature: Team

#### Scenario: Team section shows 3 members

- **GIVEN** the user scrolls to the team section
- **THEN** 3 team member cards are displayed in a row
- **AND** each card shows a photo, role, and name

#### Scenario: Team card hover

- **GIVEN** the user hovers over a team card
- **THEN** the photo scales up slightly

### Feature: Testimonials

#### Scenario: Testimonials section shows slider

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a testimonial slider is displayed
- **AND** each slide shows a quote and founder info (name + role)

### Feature: Latest News

#### Scenario: News section shows 2 news cards

- **GIVEN** the user scrolls to the news section
- **THEN** 2 news cards are displayed
- **AND** each card has a dark blue background
- **AND** each card shows an image with an orange date badge, a title, author info, and a "Read More" link

### Feature: Footer

#### Scenario: Footer renders with 4 columns

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has a dark background
- **AND** 4 columns are visible: logo + description, quick links, recent posts, contact info + newsletter

#### Scenario: Footer includes Component Dock link

- **GIVEN** the footer is visible
- **THEN** a "Component Dock" link pointing to https://www.componentdock.com/ is present in the footer

#### Scenario: Footer copyright bar

- **GIVEN** the footer is visible
- **THEN** a copyright bar is shown at the bottom

## Verification checklist

- [ ] Header renders transparent over hero with correct nav links
- [ ] Hero section is full-viewport with overlay and large heading
- [ ] Hero slider auto-advances
- [ ] Services section shows 3 cards with hover effects
- [ ] About section has two-column layout with overlay caption
- [ ] Projects section has filterable tab bar and card grid
- [ ] Project cards have hover state (dark blue bg + white text + orange icon)
- [ ] Contact CTA section has dark bg with heading and button
- [ ] Counter section shows 3 statistics
- [ ] Team section shows 3 member cards with hover zoom
- [ ] Testimonials section has slider with quotes
- [ ] News section shows 2 dark blue cards with date badges
- [ ] Footer has 4 columns, dark bg, Component Dock link, copyright bar
- [ ] Brand color #ff5f13 used throughout for CTAs and accents
- [ ] Fonts: Barlow for body/headings, Teko for section titles and sub-lines
- [ ] Ghosted watermark text behind section titles (stroke-only uppercase)
- [ ] All images use picsum.photos placeholders
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
