# Template: Hammerly (Construction Company)

## Purpose

Recreation of ColorLib **Webuilder** — a construction company website template.
- **Source:** https://colorlib.com/wp/template/webuilder/
- **Preview:** https://preview.colorlib.com/theme/webuilder/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `hammerly` (never reuse the ColorLib source name)

## Design Tokens

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| brand-primary | `#ffcd00` | Buttons, highlights, CTA, address bar bg, nav active |
| dark-bg | `#1e2126` | Very dark sections: top bar, quote area, services |
| dark-gray | `#31353d` | Counter/stats section bg |
| body-text | `#444444` | Primary text color |
| section-light | `#f5f5f5` | Testimonials, clients bg |
| section-gray | `#e8e8e8` | Divider/light sections |
| white | `#ffffff` | Nav bar bg, text on dark sections |

### Typography
- **Primary font:** `"Montserrat", sans-serif` (headings, nav)
- **Secondary font:** `"Open Sans", sans-serif` (body, quotes)
- **Tertiary font:** `"PT Sans", sans-serif` (accents)
- **Nav links:** Montserrat, uppercase, bold
- **Hero headline:** Montserrat, large, bold, `#ffcd00` yellow
- **Body text:** Open Sans, 14-16px, `#444444`

### Buttons
- Yellow CTA buttons: `#ffcd00` bg, dark text, bold Montserrat
- Quote area button: yellow bg with dark text

## Visual Reference (Screenshot Analysis)

Modern construction aesthetic:
- **Top bar:** Dark `#1e2126` with phone/address/hours in white, social icons right
- **Navigation:** White bar, "WEBUILDER" logo (hard hat icon + dark text), nav links, cart icon with yellow badge
- **Hero:** Full-width bg image (construction worker with yellow hard hat + tool belt), large yellow "WE INNOVATE" headline, "We are weBuilder" subtext, decorative yellow lines
- **Overall:** Clean professional construction; yellow `#ffcd00` + dark charcoal; Montserrat font; modern and polished

## Section Structure (page order)

| # | Section | CSS class | Background |
|---|---------|-----------|------------|
| 1 | Top Bar | (header top) | `#1e2126` dark |
| 2 | Navigation | `main_menu_area` | White |
| 3 | Hero Slider | `main_slider_area` | Bg image + overlay |
| 4 | Get Quote CTA | `get_quote_area` | `#1e2126` dark |
| 5 | Who We Are | `who_we_are_area` | White |
| 6 | Our Services | `our_service_area` | `#1e2126` dark |
| 7 | Our Projects | `our_project_area` | White |
| 8 | Work With Us CTA | `work_area` | Bg image + overlay |
| 9 | Our Team | `our_team_area` | White |
| 10 | Counter/Stats | `counter_area` | `#31353d` dark gray |
| 11 | Testimonials | `testimonials_area` | `#f5f5f5` light |
| 12 | Latest News | `latest_news_area` | White |
| 13 | Clients/Partners | `clients_area` | `#f5f5f5` light |
| 14 | Address/Contact | `address_area` | `#ffcd00` yellow |

## Requirements

### Top Bar

#### Scenario: Top bar displays contact info

- **GIVEN** the user views the page
- **THEN** the top bar shows phone number, address, and business hours
- **AND** social media icon links are on the right
- **AND** the top bar background is dark (#1e2126)

### Navigation

#### Scenario: Navigation displays all menu items

- **GIVEN** the user views the page
- **THEN** the nav shows links: Home, Projects, Services, About Us, Blog, Contact
- **AND** the logo "Hammerly" with a hard hat icon is on the left
- **AND** a cart icon with a badge count is on the right
- **AND** the active nav link is highlighted in yellow

### Hero Slider

#### Scenario: Hero section shows innovation message

- **GIVEN** the user views the page
- **THEN** a full-width hero with a construction bg image is shown
- **AND** a dark overlay covers the image
- **AND** a large yellow headline reads "WE INNOVATE"
- **AND** a subtext reads "We are Hammerly"
- **AND** decorative yellow lines are on the left side

### Get Quote CTA

#### Scenario: Quote bar prompts contact

- **GIVEN** the user scrolls past the hero
- **THEN** a dark bar with a quote question is shown
- **AND** a yellow CTA button prompts the user to get a quote

### Who We Are

#### Scenario: About section shows company info

- **GIVEN** the user scrolls to about section
- **THEN** a "Who We Are" heading is displayed
- **AND** a two-column layout shows image + text
- **AND** an "All About Us" sub-heading is present

### Our Services

#### Scenario: Services section on dark background

- **GIVEN** the user scrolls to services
- **THEN** the section has a dark (#1e2126) background
- **AND** service categories are shown: Pre-Construction, New-Construction, Remodel & Remodel
- **AND** each has a description and icon

### Our Projects

#### Scenario: Projects gallery

- **GIVEN** the user scrolls to projects
- **THEN** an "Our Projects" heading is displayed
- **AND** project cards show images and titles (e.g. "Jahanara Vila")
- **AND** a "Great & Awesome Works" sub-heading is present

### Work With Us CTA

#### Scenario: CTA section with bg image

- **GIVEN** the user scrolls to the work section
- **THEN** a background image with dark overlay is shown
- **AND** "Work With Us" heading is displayed
- **AND** a yellow "Get Offer" CTA button is present

### Our Team

#### Scenario: Team section displays members

- **GIVEN** the user scrolls to team
- **THEN** an "Our Team" heading is shown
- **AND** team member cards show photo, name, and role

### Counter/Stats

#### Scenario: Stats section shows project counts

- **GIVEN** the user scrolls to counter section
- **THEN** a dark gray (#31353d) background is shown
- **AND** counter stats display (e.g. "245 Total Projects", "535" another stat)

### Testimonials

#### Scenario: Testimonials on light background

- **GIVEN** the user scrolls to testimonials
- **THEN** a light (#f5f5f5) background is shown
- **AND** client quotes with photos and names are displayed
- **AND** a "Golden Word" sub-heading is present

### Latest News

#### Scenario: Blog posts displayed

- **GIVEN** the user scrolls to news
- **THEN** a "Latest News" heading is shown
- **AND** blog post cards with thumbnails, titles, and dates are in a grid

### Clients/Partners

#### Scenario: Client logos carousel

- **GIVEN** the user scrolls to clients
- **THEN** a light (#f5f5f5) background is shown
- **AND** partner/client logos are displayed in a carousel

### Address/Contact

#### Scenario: Contact bar on yellow background

- **GIVEN** the user scrolls to the address section
- **THEN** the section has a yellow (#ffcd00) background
- **AND** office address, phone, and email are displayed

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/hammerly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/hammerly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification Checklist

- [ ] All 14 sections render in correct order
- [ ] Brand color #ffcd00 used for CTAs, highlights, address bar
- [ ] Top bar + services + quote area use #1e2126 dark
- [ ] Counter section uses #31353d dark gray
- [ ] Montserrat font loaded for headings/nav
- [ ] Open Sans loaded for body text
- [ ] Hero full-width bg image + dark overlay
- [ ] Work area uses bg image + overlay
- [ ] All section headings match original hierarchy
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
