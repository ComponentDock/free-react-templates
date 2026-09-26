# Template: CodeLens (Developer Portfolio)

## Purpose

CodeLens is a single-page developer portfolio template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Martin" developer portfolio template design, built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NAMING NOTE: the ColorLib source name "Martin" is FORBIDDEN as the app name.
> **CodeLens** (code + lens — captures the developer/tech portfolio theme) is
> the new, original name — single lowercase word, no collision with `apps/`,
> `openspec/specs/`, `docs/templates/` or TEMPLATES.md (verified 2026-09-26).
> Source slug: `martin`, preview URL: `https://preview.colorlib.com/theme/martin/`.

## Design reference (replication findings)

- **Original:** ColorLib "Martin" — free developer portfolio website
  template (source: https://colorlib.com/wp/template/martin/).
- **Live preview DOM analyzed (verified 2026-09-26):**
  `https://preview.colorlib.com/theme/martin/` — HTTP 200, full rendered
  DOM + `css/style.css` extracted. The TEMPLATES.md screenshot was also
  reviewed. Martin is a developer portfolio with a bold yellow accent,
  Poppins typography, split-layout hero carousel, and dark overlay
  subscribe section.

### Design tokens

| Token | Value | Source |
|---|---|---|
| Font family | `"Poppins", Arial, sans-serif` | `css/style.css` body rule |
| Font weights | 300 (body), 400, 500, 600, 700, 800 | @font-face declarations |
| Body font size | 20px, line-height 1.8 | `css/style.css` body rule |
| Body background | `#f7f7f7` (light gray) | `css/style.css` body rule |
| Text color | `#1a1a1a` (near-black) | `css/style.css` body rule |
| Heading color | `rgba(0, 0, 0, 0.8)` | `css/style.css` h1-h6 rule |
| Link/accent color | `#ffdd00` (bright yellow) | `css/style.css` a rule |
| Button background | `#ffdd00` (yellow) | `.btn-primary` rule |
| Button text | `#000` (black) | `.btn-primary` rule |
| Button border | `2px solid #ffdd00` | `.btn-primary` rule |
| Button border-radius | `1px` (nearly square) | `.btn` rule |
| Nav overlay background | `rgba(0, 43, 220, 0.9)` (blue) | `#colorlib-main-nav` rule |
| Subscribe section | Dark overlay on background image | `#colorlib-subscribe .overlay` |
| Footer background | `#fff` (white) | `.colorlib-footer` rule |
| Selection background | `#b7c2c2` | `::selection` rule |
| Logo underline | 4px white line below text | `.colorlib-logo:after` |

### Section order (1:1, from live DOM)

1. **Header** — fixed top, white logo "M." with 4px white underline, nav toggle hamburger
2. **Hero carousel** — Owl Carousel, full-height split layout: 3/4 background image left + 1/4 text right ("I'm Martin, a developer from Berlin." + "Hire me now →" CTA), social media links (Twitter, Facebook, Instagram, Dribbble) bottom-right
3. **Services** — "What I Do" heading, "Strategy, design and a bit of magic" subheading, 3-column layout: Explore (magnifying glass icon: Design Sprints, Product Strategy, UX Strategy), Create (layers icon: Information, UX/UI Design, Branding), Learn (lightbulb icon: Prototyping, User Testing, UI Testing)
4. **Case Studies / Work** — "Work" heading, "Happy spending my time to this projects" subheading, Owl Carousel of 50/50 split items (image left + description right with tags, title, description, "See details" button)
5. **About / Subscribe** — dark overlay section, bio text with "Read my resume here" link, "Subscribe Newsletter" heading, email input + "Subscribe Now" button
6. **Footer** — two columns: "Lets Talk" CTA (left) + Info (right: email, phone, address, social icons)
7. **Copyright bar** — centered copyright text with attribution

## Requirements

### Requirement: Header with logo and nav toggle

The app SHALL render a fixed header with a "C." logo (white text with underline) and a hamburger nav toggle button.

#### Scenario: Desktop header shows logo

- **WHEN** the page loads on a desktop viewport
- **THEN** the header displays the brand link "C." with a white underline

#### Scenario: Mobile toggle opens and closes nav

- **WHEN** the user clicks the hamburger toggle
- **THEN** the full-screen navigation overlay appears
- **WHEN** the user clicks a nav link
- **THEN** the overlay closes

### Requirement: Hero carousel with split layout

The app SHALL render a full-height hero section with a carousel. Each slide has a 3/4 background image on the left and 1/4 text area on the right with a heading and CTA.

#### Scenario: Hero displays heading and CTA

- **WHEN** the page loads
- **THEN** the hero shows a heading (e.g. "I'm a developer from Berlin.") and a "Hire me now" link

#### Scenario: Social media links visible

- **WHEN** the page loads
- **THEN** social media links (Twitter, Facebook, Instagram, Dribbble) are visible at the bottom-right of the hero

### Requirement: Services section with 3 columns

The app SHALL render a services section with "What I Do" heading, subheading, and 3 service cards (Explore, Create, Learn), each with an icon and list of sub-services.

#### Scenario: Services display all three columns

- **WHEN** the page loads
- **THEN** three service cards are visible: Explore, Create, Learn
- **THEN** each card shows its sub-services list

### Requirement: Work / Case studies carousel

The app SHALL render a case studies section with "Work" heading and a carousel of project items, each with a 50/50 split: image left, description right (tags, title, description, "See details" button).

#### Scenario: Work section displays project cards

- **WHEN** the page loads
- **THEN** the work section shows project items with image, tags, title, and description

#### Scenario: Work section has CTA button

- **WHEN** the page loads
- **THEN** each project card has a "See details" button

### Requirement: About / Subscribe section with dark overlay

The app SHALL render an about/subscribe section with a dark overlay background, bio text, a "Read my resume" link, a "Subscribe Newsletter" heading, an email input, and a "Subscribe Now" button.

#### Scenario: Subscribe section displays newsletter form

- **WHEN** the page loads
- **THEN** the subscribe section shows an email input and "Subscribe Now" button

#### Scenario: Subscribe form validates email

- **WHEN** the user enters an invalid email and submits
- **THEN** the form shows a validation error

### Requirement: Footer with CTA and info

The app SHALL render a footer with two columns: "Lets Talk" CTA (left) and "Info" (right with email, phone, address, social icons).

#### Scenario: Footer displays contact info

- **WHEN** the page loads
- **THEN** the footer shows email, phone, and address details

#### Scenario: Footer has Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to `https://www.componentdock.com/`

### Requirement: Copyright bar

The app SHALL render a copyright bar at the bottom with current year and "Made with Component Dock" attribution.

#### Scenario: Copyright shows current year

- **WHEN** the page loads
- **THEN** the copyright text includes the current year

## Verification checklist

- [ ] Header with logo and hamburger toggle renders
- [ ] Hero carousel displays with split layout (image + text)
- [ ] Social media links visible in hero
- [ ] Services section shows 3 columns with icons and sub-services
- [ ] Work section shows carousel of project cards with tags and CTAs
- [ ] Subscribe section has dark overlay, email input, and submit button
- [ ] Footer shows contact info and social icons
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Copyright bar shows current year
- [ ] Mobile responsive: nav overlay, stacked columns, full-width sections
- [ ] Design tokens match: Poppins font, #ffdd00 yellow accent, #f7f7f7 bg, 1px border-radius buttons
- [ ] No ColorLib references in app code (only in spec and TEMPLATES.md)
