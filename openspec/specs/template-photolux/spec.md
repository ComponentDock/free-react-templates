# Template: PhotoLux (Photography / Personal Portfolio)
<!-- prep-status: shipped-as=optic -->
> **SHIPPED-UNDER** — the ColorLib `credo` design this prep describes already
> ships as `apps/optic` (<https://optic.free.componentdock.com>).
> Do not scaffold `apps/photolux`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-optic/spec.md`.

## Purpose

Recreation of ColorLib **Credo** — a photographer/personal portfolio template.

- **Source:** https://colorlib.com/wp/template/credo/
- **Preview:** https://preview.colorlib.com/theme/credo/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **New name:** `photolux` (never reuse source name "credo")
- **Package:** `@free-react-templates/photolux`
- **Surge target:** `photolux.free.componentdock.com`

## Design tokens (extracted from preview)

| Token | Value |
|-------|-------|
| **Brand color** | `#fab95b` (golden amber) |
| **Dark color** | `#000000` (black) |
| **Light background** | `#eff1f3` (light gray) |
| **Section alt background** | `#f7f7f7` |
| **White** | `#ffffff` |
| **Text dark** | `#212529` |
| **Text muted** | `#666666` / `#888888` / `#999999` |
| **Font family** | Nunito (weights 300, 400, 700) via Google Fonts |
| **Button radius** | 30px (pill shape) |
| **Button padding** | 10px 30px |
| **Button primary** | black bg, white text |
| **Progress bar radius** | 4px |
| **Social circle** | 50% radius, pill shape |
| **Card radius** | 2px / 4px |

### Visual notes from screenshot/preview

- Clean, minimal photographer portfolio with dark hero overlay on a full-width cover image.
- Centered logo ("Credo") in the header with navigation links split on both sides.
- Hero has a large portrait photo on the right, text + CTA button on the left over a dark semi-transparent overlay.
- Services section: light gray background (`#eff1f3`), 2×2 grid with numbered/icon service cards.
- About section: two-column — left has image + paragraphs, right has animated progress bars.
- Portfolio section: masonry-style 3-column photo grid with hover overlay + search icon.
- Testimonials: carousel/slider on brand color (#fab95b) background, blockquotes with citations.
- Blog section: light background, 3-column card layout (image + white content area + title, date, excerpt, read more link).
- Contact section: brand color (#fab95b) background, form with dark send button.
- Footer: light background, 4-column layout (brand/address, Services, Resources, Quick Links, social icons), copyright with heart icon.

## Requirements

### Feature: PhotoLux template behaviour

#### Scenario: Navbar renders with centered logo and split nav links

- **GIVEN** the page loads
- **WHEN** the user views the header
- **THEN** the logo "PhotoLux" is centered between two sets of navigation links
- **AND** left nav links are: Home, About, Services
- **AND** right nav links are: Photography, Blog, Contact
- **AND** all nav links are scroll anchors to their respective sections

#### Scenario: Hero section displays portrait and intro

- **GIVEN** the page loads
- **WHEN** the user views the hero section
- **THEN** a heading "I'm [Name]" is displayed
- **AND** a subtitle line shows role and secondary role separated by a pipe
- **AND** introductory paragraph text is shown
- **AND** a "Contact Me" CTA button links to the contact section
- **AND** a portrait image appears on the right side (or below on mobile)
- **AND** the section has a dark overlay background

#### Scenario: Services section shows service cards

- **GIVEN** the page loads
- **WHEN** the user scrolls to the services section
- **THEN** a "Services" heading is centered at the top
- **AND** four service cards are displayed in a 2×2 grid
- **AND** each card has an icon, title, and description paragraph
- **AND** the section background is light gray

#### Scenario: About section shows progress bars

- **GIVEN** the page loads
- **WHEN** the user scrolls to the about section
- **THEN** an "About Me" heading is displayed
- **AND** a portrait/photo image appears on the left column
- **AND** biographical text paragraphs appear below the image
- **AND** the right column shows skill labels with progress bars
- **AND** each progress bar has a skill name, percentage label, and filled bar

#### Scenario: Photography portfolio displays image grid

- **GIVEN** the page loads
- **WHEN** the user scrolls to the photography section
- **THEN** a "My Photography" heading is centered
- **AND** a 3-column masonry-style grid of images is displayed
- **AND** each image has a hover overlay with a search icon
- **AND** clicking an image opens a lightbox/fancybox

#### Scenario: Testimonials carousel shows client quotes

- **GIVEN** the page loads
- **WHEN** the user scrolls to the testimonials section
- **THEN** a "What Clients Are Saying" heading is displayed on brand color background
- **AND** a carousel shows blockquotes with client quotes
- **AND** each quote includes a cite with the client name
- **AND** the carousel auto-plays and is navigable

#### Scenario: Blog posts section displays post cards

- **GIVEN** the page loads
- **WHEN** the user scrolls to the blog section
- **THEN** a "Blog Posts" heading is centered
- **AND** three blog post cards are displayed in a 3-column layout
- **AND** each card has a featured image, title, date, excerpt, and "Read More" link
- **AND** the section background is light

#### Scenario: Contact form collects user messages

- **GIVEN** the page loads
- **WHEN** the user scrolls to the contact section
- **THEN** a "Say Hello" heading is displayed on brand color background
- **AND** a form with first name, full name, email, subject, and message fields is shown
- **AND** a "Send Message" button submits the form
- **AND** form inputs have placeholder text

#### Scenario: Footer displays brand info and links

- **GIVEN** the page loads
- **WHEN** the user scrolls to the footer
- **THEN** the brand name and address are shown in the first column
- **AND** Services, Resources, and Quick Links columns each show a list of links
- **AND** social media icons (Twitter, Facebook, Instagram, Dribbble, LinkedIn) are shown
- **AND** a copyright line includes a link to Component Dock

#### Scenario: Navigation scrolls to sections smoothly

- **GIVEN** the page loads
- **WHEN** the user clicks a nav link (e.g., "About")
- **THEN** the page smooth-scrolls to the corresponding section
- **AND** the active nav link updates based on scroll position

#### Scenario: Mobile responsive layout

- **GIVEN** the page loads on a mobile viewport
- **WHEN** the user views the page
- **THEN** the navbar collapses into a hamburger menu
- **AND** the hero portrait stacks below the text
- **AND** service cards stack into a single column
- **AND** the portfolio grid adjusts to fewer columns
- **AND** the footer columns stack vertically

## Verification checklist

- [ ] All sections match the original's structure and order 1:1
- [ ] Brand color `#fab95b` is used as the primary accent
- [ ] Font is Nunito (Google Fonts, weights 300/400/700)
- [ ] Buttons are pill-shaped (30px radius)
- [ ] Navbar is centered logo with split links
- [ ] Hero has dark overlay + portrait + CTA
- [ ] Services: 2×2 grid with icons
- [ ] About: progress bars with skill percentages
- [ ] Portfolio: masonry grid with hover overlay
- [ ] Testimonials: carousel on brand background
- [ ] Blog: 3-column cards with read more
- [ ] Contact: form on brand background
- [ ] Footer: 4-column layout with social icons + Component Dock link
- [ ] Mobile responsive (hamburger, stacked layouts)
- [ ] Smooth scroll navigation
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage
- [ ] `npm run verify:app photolux` passes
