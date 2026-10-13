# Template: BeckCraft (Personal Portfolio)

## Purpose

Recreation of ColorLib **Beckham** — a personal portfolio/resume template with green accent.

- **Source:** https://colorlib.com/wp/template/beckham/
- **Preview:** https://preview.colorlib.com/theme/beckham/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `beckcraft` (never reuse source name "beckham")

## Design Tokens

Extracted from `css/style.css` at preview.colorlib.com/theme/beckham/:

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#79efb4` | Mint green — primary accent, buttons, highlights |
| `--brand-secondary` | `#2f89fc` | Blue — secondary accent |
| `--text-dark` | `#212529` | Near-black — headings, body text |
| `--text-muted` | `#6c757d` | Gray — secondary text |
| `--text-light` | `#8c8c8c` | Light gray — tertiary text |
| `--white` | `#fff` | White — text on dark, card bg |
| `--bg-light` | `#f8f9fa` | Off-white — page background |
| `--bg-dark` | `#121212` | Dark — footer background |
| `--bg-black` | `#000` | Black — footer sections |

### Fonts
| Token | Value | Usage |
|-------|-------|-------|
| `--font-body` | `"Montserrat", sans-serif` | All text (headings + body) |
| `--font-alt` | `"Poppins", Arial, sans-serif` | Alternate headings |

### Border Radius
| Value | Usage |
|-------|-------|
| `0` | Most elements — sharp rectangular style |
| `16px` | Cards, containers |
| `30px` | Pill-shaped buttons |
| `50%` | Circular elements (avatar, social icons) |

## Section Structure (in page order)

1. **Navbar** — sticky top, logo "Beckham Muff", nav links with anchor scroll
2. **Hero Slider** — 2-slide carousel with dark overlay. Each slide: "Hello! I'm Beckham Muff" greeting, "I'm from Berlin" location, "A Web Designer" title. Full-width background images.
3. **About** — "About" heading, "Hi! I'm Beckham Muff" subheading, description paragraph. "Checkout my resume" + "Contact me here!" CTAs. Contact info (email, phone).
4. **Services** — "What i do" / "My services" heading. 8 service items in grid: UI/UX Design, Mobile App Design, Responsive Design, Product Strategy, Design Sprints, UX Strategy, HTML/CSS, Prototyping.
5. **Portfolio** — "Portfolio" / "Checkout a few of my works" heading. 3 portfolio items: Illustration, Web Design, UI/UX Design. Each with image, title, description.
6. **Counter** — Statistics section with animated counters.
7. **Footer** — Contact info, copyright, "Made with Component Dock" branding.

## Requirements

### Navbar

#### Scenario: Sticky navbar with navigation links

- **GIVEN** the page loads
- **THEN** a sticky navbar is visible at the top
- **AND** it contains the logo "BeckCraft"
- **AND** it shows nav links for Home, About, Services, Portfolio, Contact

#### Scenario: Navbar remains visible on scroll

- **GIVEN** the user scrolls down
- **THEN** the navbar stays fixed at the top of the viewport

### Hero Slider

#### Scenario: Hero carousel displays slides

- **GIVEN** the page loads
- **THEN** a full-width hero carousel is visible
- **AND** slide 1 shows "Hello! I'm Beckham Muff" greeting
- **AND** each slide shows "A Web Designer" title
- **AND** each slide has a dark overlay on the background image

#### Scenario: Hero carousel auto-plays

- **GIVEN** the hero is visible
- **WHEN** 5 seconds pass
- **THEN** the carousel advances to the next slide automatically

### About

#### Scenario: About section displays with contact info

- **GIVEN** the about section scrolls into view
- **THEN** the heading reads "About"
- **AND** "Hi! I'm Beckham Muff" subheading is visible
- **AND** a description paragraph is shown
- **AND** "Checkout my resume" and "Contact me here!" CTAs are visible
- **AND** contact info (email, phone) is displayed

### Services

#### Scenario: Services section shows 8 service items

- **GIVEN** the services section is in view
- **THEN** the heading reads "My services"
- **AND** 8 service items are displayed in a grid
- **AND** the services include: UI/UX Design, Mobile App Design, Responsive Design, Product Strategy, Design Sprints, UX Strategy, HTML/CSS, Prototyping

### Portfolio

#### Scenario: Portfolio section shows 3 work items

- **GIVEN** the portfolio section is in view
- **THEN** the heading reads "Portfolio"
- **AND** 3 portfolio items are displayed
- **AND** each item has an image, title, and description
- **AND** the items are: Illustration, Web Design, UI/UX Design

### Counter

#### Scenario: Counter section displays statistics

- **GIVEN** the counter section scrolls into view
- **THEN** statistics are shown
- **AND** the counters animate on scroll

### Footer

#### Scenario: Footer displays contact info and copyright

- **GIVEN** the footer is visible
- **THEN** contact information is shown
- **AND** a copyright notice is displayed
- **AND** "Made with Component Dock" branding is present

## Verification Checklist

- [ ] Navbar: sticky, logo, nav links, anchor scroll
- [ ] Hero: 2-slide carousel with dark overlay, greeting, title
- [ ] About: heading, subheading, description, CTAs, contact info
- [ ] Services: 8 items in grid with icons, titles
- [ ] Portfolio: 3 items with images, titles, descriptions
- [ ] Counter: animated statistics
- [ ] Footer: contact info, copyright, Component Dock
- [ ] Design tokens: mint green (#79efb4), Montserrat font, sharp + pill buttons
- [ ] Responsive: stacked layouts on mobile
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
