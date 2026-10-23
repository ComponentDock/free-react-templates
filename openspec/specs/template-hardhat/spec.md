# Template: Hardhat (Construction Company Landing)

Recreation of ColorLib "ConstructionCompany" (https://colorlib.com/wp/template/constructioncompany/).

## Purpose

Recreate the ColorLib "Constructioncompany" construction company landing page as a modern React 19 + Tailwind CSS 4 + TypeScript single-page template named "Hardhat". The template provides a full-featured construction company website with top bar, navbar, hero, services, about, projects, contact CTA, stats, team, testimonials, blog, and footer sections.

## Design reference (replication findings)

- **Source:** ColorLib "ConstructionCompany" — https://colorlib.com/wp/template/constructioncompany/
- **Source slug:** `constructioncompany`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/constructioncompany/ — **HTTP 200**, 58,865 B, fetched 2026-10-23 (page `<title>`: "Construction Company - Professional Building Services"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/constructioncompany/assets/css/style.css`, fetched 2026-10-23): brand `#ff5f13`, `#1f2b7b`, `#415094`, `#4cd3e3`; dominant neutrals `#f9f9ff`, `#999999`, `#f1f1f1`; type Barlow, Teko, Lato. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/constructioncompany-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/hardhat` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: All sections render in correct order

The template SHALL display 12 sections in the correct order: TopBar, Navbar, Hero, Services, About, Projects, ContactCta, Stats, Team, Testimonial, LatestNews, Footer.

#### Scenario: Page loads with all sections

- **GIVEN** the page loads
- **THEN** all 12 sections are visible in the correct order

### Requirement: TopBar displays contact info and social links

The TopBar SHALL display phone number, email, business hours, and social media icon links.

#### Scenario: TopBar renders all contact details

- **GIVEN** the top bar is rendered
- **THEN** the phone number "+(123) 1234-567-8901" is visible
- **AND** the email "info@domain.com" is visible
- **AND** the hours "Mon - Sat 8:00 - 17:30, Sunday - CLOSED" are visible
- **AND** social media icons are present

### Requirement: Navbar displays navigation links and CTA

The navbar SHALL display the Hardhat logo, navigation links, and a "Contact Now" CTA button.

#### Scenario: Navbar renders all navigation items

- **GIVEN** the navbar is rendered
- **THEN** "Home", "About", "Projects", "Services", "Blog", "Contact" links are visible
- **AND** a "Contact Now" button is displayed

### Requirement: Hero displays heading and CTA over background image

The hero section SHALL display a subtitle, main heading, stock text, and an "Our Services" CTA button over a background image with dark gradient overlay.

#### Scenario: Hero renders heading and CTA

- **GIVEN** the hero section renders
- **THEN** "Professional Construction Services" subtitle is visible
- **AND** "Advanced" heading is visible
- **AND** "Construction" stock text is visible
- **AND** an "Our Services" button is displayed

### Requirement: Services section shows 3 service cards

The services section SHALL display 3 service cards, each with an image, title, and "Read More" link.

#### Scenario: Services renders 3 cards

- **GIVEN** the services section renders
- **THEN** the heading "Our Services" is visible
- **AND** 3 service cards are displayed
- **AND** each card has a "Read More" link

### Requirement: About section shows split layout

The about section SHALL display a left text area with "Who we are" heading, description, and "Read More" button, alongside a right image with a "1994 Since" badge.

#### Scenario: About renders split layout

- **GIVEN** the about section renders
- **THEN** "Who we are" heading is visible
- **AND** a description paragraph is visible
- **AND** a "Read More" button is visible
- **AND** "1994 Since" badge is visible

### Requirement: Projects section shows tabbed gallery

The projects section SHALL display filter tabs and a grid of project cards.

#### Scenario: Projects renders with filter tabs

- **GIVEN** the projects section renders
- **THEN** "Our Projects" heading is visible
- **AND** filter tabs "Show all", "Interior", "Recent", "Big building", "Park" are visible
- **AND** project cards are displayed in a grid

#### Scenario: Projects filtering works

- **GIVEN** the projects section is rendered
- **WHEN** the user clicks the "Interior" tab
- **THEN** only interior projects are shown

### Requirement: Contact CTA section shows call to action

The contact CTA section SHALL display a "Let's talk with us" heading, description, and "Contact Us" button over a dark background.

#### Scenario: Contact CTA renders

- **GIVEN** the contact CTA section renders
- **THEN** "Let's talk with us" heading is visible
- **AND** a "Contact Us" button is visible

### Requirement: Stats section shows counters

The stats section SHALL display 3 counter items with numbers and labels.

#### Scenario: Stats renders 3 counters

- **GIVEN** the stats section renders
- **THEN** 3 stat counters are displayed with numbers

### Requirement: Team section shows 3 team members

The team section SHALL display 3 team member cards with images, roles, and names.

#### Scenario: Team renders 3 members

- **GIVEN** the team section renders
- **THEN** "Our team" heading is visible
- **AND** 3 team member cards are displayed

### Requirement: Testimonial section shows quote

The testimonial section SHALL display a testimonial quote with author name and role.

#### Scenario: Testimonial renders

- **GIVEN** the testimonial section renders
- **THEN** "Testimonial" heading is visible
- **AND** testimonial text is visible
- **AND** author name and role are visible

### Requirement: Latest News section shows blog posts

The latest news section SHALL display 2 blog post cards with images, dates, categories, and titles.

#### Scenario: Latest News renders 2 posts

- **GIVEN** the latest news section renders
- **THEN** "Latest News" heading is visible
- **AND** 2 blog post cards are displayed

### Requirement: Footer links to Component Dock

The footer SHALL display logo, description, quick links, contact info, newsletter form, and a copyright notice that links to https://www.componentdock.com/.

#### Scenario: Footer renders with Component Dock link

- **GIVEN** the footer renders
- **THEN** quick links (About, Services, Projects, Contact Us) are visible
- **AND** contact information is visible
- **AND** a newsletter form is present
- **AND** "Component Dock" link pointing to https://www.componentdock.com/ is visible

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/hardhat/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/hardhat/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] All sections render in correct order — all 12 sections are visible in the correct order
- [ ] TopBar displays contact info and social links — the phone number "+(123) 1234-567-8901" is visible
- [x] Navbar displays navigation links and CTA — "Home", "About", "Projects", "Services", "Blog", "Contact" links are visible
- [x] Hero displays heading and CTA over background image — "Professional Construction Services" subtitle is visible
- [x] Services section shows 3 service cards — the heading "Our Services" is visible
- [x] About section shows split layout — "Who we are" heading is visible
- [x] Projects section shows tabbed gallery — "Our Projects" heading is visible
- [x] Contact CTA section shows call to action — "Let's talk with us" heading is visible
- [ ] Stats section shows counters — 3 stat counters are displayed with numbers
- [x] Team section shows 3 team members — "Our team" heading is visible
- [x] Testimonial section shows quote — "Testimonial" heading is visible
- [x] Latest News section shows blog posts — "Latest News" heading is visible
