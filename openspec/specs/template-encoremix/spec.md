# Template: EncoreMix (Music Festival / Concert Event)

## Purpose

Recreation of the ColorLib **Sunfest** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- **ColorLib source:** https://colorlib.com/wp/template/sunfest/
- **Live preview:** https://preview.colorlib.com/theme/sunfest/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/sunfest-free-template.jpg
- **App name:** `encoremix` (apps/encoremix, @free-react-templates/encoremix)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Description:** A dark-themed music festival / concert event landing page with a full-screen hero featuring a cursive gradient headline, countdown timer, and dual CTA buttons; headliner artist showcase with large cards; full lineup grid; upcoming events carousel; latest news blog cards; and a dark branded footer. Cyan-to-mint gradient accent on a near-black background with Poppins typography.

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/sunfest/style.css`:

### Colors

| Token            | Value                               | Usage                                                  |
| ---------------- | ----------------------------------- | ------------------------------------------------------ |
| Brand gradient   | `linear-gradient(#00d0ff, #25ffbf)` | Hero headline, buttons, date badges, accents           |
| Cyan             | `#00d0ff`                           | Gradient start                                         |
| Mint             | `#25ffbf`                           | Gradient end                                           |
| Dark bg          | `#050505`                           | Body, nav panel, overall dark theme                    |
| White            | `#ffffff`                           | Nav text, countdown labels, card bg, body text on dark |
| Text dark        | `hsl(0, 0%, 9%)` / `#171717`        | Card headings, artist names                            |
| Text muted       | `hsl(0, 0%, 60%)`                   | Card descriptions, meta text                           |
| Section subtitle | `hsl(0, 0%, 48%)`                   | "JUST THE BEST" subtitle above section headings        |
| Section heading  | `hsl(0, 0%, 0%)`                    | Dark headings on white card sections                   |
| Body text        | `hsl(0, 0%, 90%)`                   | General body text on dark bg                           |
| Event overlay    | `rgba(0,0,0,.75)`                   | Semi-transparent overlay on event cards                |
| Card shadow      | `rgba(0, 0, 0, 0.1)`                | `50px 40px 115px` on artist/news cards                 |

### Typography

| Property          | Value                                           |
| ----------------- | ----------------------------------------------- |
| Font family       | `"Poppins", sans-serif`                         |
| Accent font       | `"mountains"` (cursive, used for hero headline) |
| Body font size    | 15px                                            |
| Font weights used | 300, 400, 500, 600, 700                         |
| Branding weight   | 800 (nav logo)                                  |
| Hero headline     | mountains cursive, gradient text fill           |

### Buttons

| Property                  | Value                               |
| ------------------------- | ----------------------------------- |
| Shape                     | Sharp corners (border-radius: 0)    |
| Primary style             | White bg, dark text                 |
| Current/active style      | Cyan-to-mint gradient bg, dark text |
| Text color (gradient btn) | `hsl(0, 0%, 0%)` on gradient bg     |

### Section backgrounds

| Section           | Background                                             |
| ----------------- | ------------------------------------------------------ |
| Header            | Transparent (overlaid on hero)                         |
| Hero              | Full-width bg image (`cover.jpg`) with dark atmosphere |
| Lineup Headliners | Bg image (`middle-cover.jpg`) with white card overlays |
| Complete Lineup   | White card bg section                                  |
| Next Events       | Bg image with semi-transparent overlays on cards       |
| Last News         | White cards on dark bg                                 |
| Footer            | Bg image (`footer-cover.jpg`)                          |

## Section Structure (top to bottom)

1. **Navbar** — Transparent header overlaid on hero. Logo "EncoreMix" left, nav links center-right (HOME, ABOUT, ARTISTS, BLOG, CONTACT), search icon far right. Responsive hamburger on mobile (full-screen slide-in panel with `#050505` bg).
2. **Hero** — Full-viewport bg image (music festival night scene). Cursive gradient headline ("Hello world!" in mountains font, `linear-gradient(#00d0ff, #25ffbf)` text fill). Date label above headline. Countdown timer (Days, Hours, Minutes, Seconds) in large white numbers with labels below. Two CTA buttons: "Buy Tickets" (white bg) and "See Lineup" (gradient bg).
3. **Lineup Artists — Headliners** — Section subtitle "JUST THE BEST", heading "The Lineup Artists-Headliners". Three featured artist cards, each with: large photo, artist name, short bio paragraph, and a small link box image. Cards alternate layout (image left/right) and have white bg with large box shadow.
4. **Complete Lineup** — Section subtitle "JUST THE BEST", heading "The Complete Lineup". 4-column grid of 8 artist thumbnails, each with portrait photo and name below. "See all lineup" gradient button centered below.
5. **Next Events** — Section subtitle "JUST THE BEST", heading "Our Next Events". Swiper/carousel of event cards. Each card: background image with semi-transparent dark overlay, event title and venue/address text centered. Navigation arrow.
6. **Last News** — Section subtitle "JUST THE BEST", heading "Our Last News". Two-column layout of blog post cards. Each card: featured image, date badge (gradient bg), post title, author + comments meta, description paragraph. White card bg with shadow.
7. **Footer** — Large "EncoreMix" brand text (bg image), email link, copyright line with "Component Dock" attribution, and social icon row (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn via lucide-react equivalents).

## Requirements

### Requirement: Hero section displays with countdown and CTAs

The page SHALL display a full-viewport hero with a gradient headline, countdown timer, and two CTA buttons.

#### Scenario: Page loads with hero visible

- **WHEN** the user visits the EncoreMix landing page
- **THEN** the hero section is visible with gradient headline text
- **AND** a countdown timer shows days, hours, minutes, seconds
- **AND** two CTA buttons are visible: "Buy Tickets" and "See Lineup"

### Requirement: Navigation with responsive hamburger menu

The navbar SHALL show logo, navigation links, and search icon with a hamburger menu on mobile.

#### Scenario: Navigation links are present

- **WHEN** the user views the page
- **THEN** the navbar shows links: HOME, ABOUT, ARTISTS, BLOG, CONTACT
- **AND** a search icon is visible
- **AND** the logo "EncoreMix" is displayed

#### Scenario: Mobile hamburger menu

- **WHEN** the viewport is mobile width
- **AND** the user taps the hamburger icon
- **THEN** a slide-in navigation panel appears with all navigation links

### Requirement: Countdown timer ticks down

The countdown timer SHALL decrement seconds in real time.

#### Scenario: Countdown timer ticks down

- **WHEN** the page has been loaded for more than one second
- **THEN** the seconds value decrements every second

### Requirement: Headliner artists section with alternating cards

The headliners section SHALL display three artist cards with alternating layout.

#### Scenario: Headliner artists section displays three artists

- **WHEN** the user scrolls to the headliners section
- **THEN** 3 headliner artist cards are displayed
- **AND** each card has a photo, name, bio text, and link

### Requirement: Complete lineup grid

The complete lineup section SHALL display 8 artists in a responsive grid.

#### Scenario: Complete lineup shows artist grid

- **WHEN** the user scrolls to the complete lineup section
- **THEN** 8 artist thumbnails are displayed in a 4-column grid
- **AND** each thumbnail shows an image and artist name
- **AND** a "See all lineup" button is centered below

### Requirement: Next events carousel with navigation

The events section SHALL display event cards in a scrollable carousel with arrow navigation.

#### Scenario: Next events carousel

- **WHEN** the user scrolls to the events section
- **THEN** event cards are displayed in a horizontal carousel
- **AND** each event card shows an image with overlay text (title + venue)
- **AND** navigation arrows allow scrolling between events

### Requirement: Latest news blog cards

The news section SHALL display blog post cards with images, metadata, and descriptions.

#### Scenario: Latest news section

- **WHEN** the user scrolls to the news section
- **THEN** 2 blog post cards are displayed side by side
- **AND** each card has an image, date badge, title, author, comments count, and description

### Requirement: Footer with Component Dock branding

The footer SHALL display brand name, contact info, social icons, and Component Dock attribution.

#### Scenario: Footer content

- **WHEN** the user scrolls to the footer
- **THEN** the footer displays the "EncoreMix" brand name
- **AND** a contact email link is shown
- **AND** social media icon links are present
- **AND** the copyright line includes a "Component Dock" link

### Requirement: Dark theme with cyan-to-mint gradient accents

The page SHALL use a dark background with cyan-to-mint gradient accents on interactive elements.

#### Scenario: Dark theme applied

- **WHEN** the page loads
- **THEN** the page background is dark (#050505)
- **AND** body text is light (hsl 0 0% 90%)
- **AND** accent elements use the cyan-to-mint gradient (#00d0ff to #25ffbf)

#### Scenario: Brand gradient on interactive elements

- **WHEN** the user views buttons and date badges
- **THEN** the "See Lineup" hero button uses the gradient background
- **AND** the "See all lineup" button uses the gradient background
- **AND** news date badges use the gradient background

## Verification Checklist

- [ ] All 7 sections render in correct order (Navbar, Hero, Headliners, Lineup, Events, News, Footer)
- [ ] Gradient text effect on hero headline (cyan #00d0ff → mint #25ffbf)
- [ ] Countdown timer functional (decrements seconds, shows d/h/m/s)
- [ ] Navigation responsive (hamburger on mobile, full nav on desktop)
- [ ] Headliner cards have alternating image/text layout
- [ ] Complete lineup grid: 4 columns on desktop, responsive breakpoints
- [ ] Events carousel/swiper functional with navigation
- [ ] News cards: 2-column layout, date badges with gradient
- [ ] Footer: brand name, email, social icons, "Component Dock" link
- [ ] Dark theme consistent across all sections
- [ ] Sharp button corners (no border-radius)
- [ ] Poppins font loaded (Google Fonts link in index.html)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] All images use picsum.photos placeholders with deterministic seeds
- [ ] lucide-react icons for social media and search
