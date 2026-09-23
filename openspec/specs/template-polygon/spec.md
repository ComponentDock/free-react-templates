# Template: Polygon (Architecture & Design Agency)

## Purpose

Recreation of ColorLib "Hexa" — an architecture/design agency website template.

- **Source:** https://colorlib.com/wp/template/hexa/
- **Preview:** https://preview.colorlib.com/theme/hexa/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/hexa/css/style.css` + inline HTML.

### Colors

| Token            | Value     | Usage                           |
| ---------------- | --------- | ------------------------------- |
| brand-primary    | `#e74208` | CTA buttons, links, accents     |
| brand-hover      | `#c23707` | Button hover state              |
| brand-dark-hover | `#b63406` | Button hover border             |
| brand-light      | `#fa9774` | Light accent (used sparingly)   |
| bg-dark          | `#262626` | Navbar, footer background       |
| bg-light         | `#f8f9fa` | Alternating section backgrounds |
| text-dark        | `#212529` | Primary text                    |
| text-muted       | `#6c757d` | Secondary text                  |
| white            | `#fff`    | Slider text, button text        |

### Typography

- **Font family:** `"Open Sans", Arial, sans-serif`
- **Weights used:** 300 (light — slider headings), 400 (body), 700 (bold), 800 (extra bold)
- **Slider heading:** 50px, weight 300, uppercase, line-height 1.2, white
- **Section headings:** standard h2 sizing, weight 700

## Requirements

### Requirement: Navbar renders correctly

The template SHALL display a dark navbar with brand name, navigation links, and a CTA button.

#### Scenario: Navbar shows all nav links

- **WHEN** the page loads
- **THEN** the navbar displays links for Home, About, Projects, Services, Blog, and Contact

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the hamburger menu on mobile
- **THEN** the mobile nav opens with all links visible

### Requirement: Hero section displays correctly

The template SHALL display a full-viewport hero slider with heading, subtext, and CTA buttons.

#### Scenario: Hero shows heading and CTAs

- **WHEN** the page loads
- **THEN** the hero section shows "Creative Design" heading and Get Started / Download buttons

### Requirement: Features section shows three cards

The template SHALL display three feature cards with icons, headings, and descriptions.

#### Scenario: Features render all cards

- **WHEN** the features section is visible
- **THEN** three cards are shown: Modern Design, Build With Love, Fast Loading

### Requirement: About sections show numbered content

The template SHALL display two about sections with numbered headings and alternating layouts.

#### Scenario: About sections render correctly

- **WHEN** the about section is visible
- **THEN** sections numbered 01 (Infrastructure) and 02 (Collaborate) are displayed

### Requirement: Projects grid shows project cards

The template SHALL display a 3-column grid of project images with hover overlays.

#### Scenario: Projects render all cards

- **WHEN** the projects section is visible
- **THEN** six project cards are shown in a grid

### Requirement: Testimonials display correctly

The template SHALL display testimonial cards with avatars, names, and quotes.

#### Scenario: Testimonials render

- **WHEN** the testimonial section is visible
- **THEN** testimonial cards with avatars and quotes are displayed

### Requirement: Footer links to Component Dock

The template SHALL display a dark footer with About, Quick Links, Follow Links, newsletter subscription, and a copyright line linking to Component Dock.

#### Scenario: Footer has Component Dock link

- **WHEN** the footer is visible
- **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is present

#### Scenario: Newsletter form accepts email

- **WHEN** the user types an email and clicks subscribe
- **THEN** the form does not navigate away (prevented default)
