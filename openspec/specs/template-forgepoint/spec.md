# Template: ForgePoint (Industrial / Manufacturing)

## Purpose

An Industrial / Manufacturing template with header / nav, hero / slider, services, safe industry solutions, gallery / works and team sections. Recreation of the ColorLib "Inds" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source slug:** `inds`
- **ColorLib page:** https://colorlib.com/wp/template/inds/
- **Live preview:** https://preview.colorlib.com/theme/inds/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/inds-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, lucide-react (icons), `packages/ui` shared components where possible.

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
|---|---|---|
| Primary brand color | `#f27420` (orange) | CTA buttons, accent elements, "Get a Quote" button |
| Dark navy | `#021a47` | Dark section backgrounds, hover states, header background |
| Deepest navy | `#00163e` | Footer background, darkest areas |
| Text primary | `#0b1c39` | Headings, body text |
| Link accent | `#1696e7` (blue) | Hyperlink color |
| Gold accent | `#dca73a` | Secondary accent, testimonial quote icon |
| Background light | `#f7f7f7` | Alternating section backgrounds |
| Background white | `#ffffff` | Main content background |
| Font primary | `"Barlow", sans-serif` | Main headings and body text (weights 200-900) |
| Font secondary | `"Roboto", sans-serif` | Body text fallback (weights 300-900) |
| Button style | `.btn` + `.hero-btn` / `.get-btn` / `.white-btn` | Orange fill for primary CTAs, white fill for secondary |
| Hero | Dark overlay on slider images, text animations | Multiple slides with fadeInUp animations |

## Requirements

### Header / Navbar

Feature: Header Navbar

#### Scenario: Top info bar and main navigation

- **GIVEN** the user is on the page
- **THEN** a top info bar displays phone number, email, and business hours
- **AND** a main navbar shows the logo, navigation links, and a "Get a Quote" CTA button
- **AND** the nav links are: Home, About, Industries, Works, Blog (with submenu), Pages, Contact, Element

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is narrow (< 992px)
- **WHEN** the user taps the hamburger icon
- **THEN** the navigation menu slides open with all links visible

### Hero / Slider

Feature: Hero Slider

#### Scenario: Hero slider displays on load

- **GIVEN** the user is on the page
- **THEN** a full-width hero slider is visible with background images
- **AND** each slide has the heading "Industrial Solutions!"
- **AND** each slide has a subtitle paragraph
- **AND** each slide has an "Our Services" CTA button

#### Scenario: Slider auto-advance

- **GIVEN** the hero slider is visible
- **WHEN** the user waits
- **THEN** the slider automatically transitions to the next slide
- **AND** navigation dots or arrows are available for manual control

### Services

Feature: Services Section

#### Scenario: Three service cards

- **GIVEN** the user scrolls past the hero
- **THEN** a services area is visible with three service cards in a row
- **AND** each card has an icon, title, and an arrow button
- **AND** the services are: Automotive Manufacturing, Heavy Industry Market, Industry Analysis

#### Scenario: Service card hover

- **GIVEN** the service cards are visible
- **WHEN** the user hovers over a card
- **THEN** the card lifts slightly with a shadow effect

### Safe Industry Solutions

Feature: Safe Industry Solutions

#### Scenario: About/solutions section with image and mission

- **GIVEN** the user scrolls to the safe industry area
- **THEN** the heading reads "Safe Industrial Solutions That Saves our Valuable Time and Money!"
- **AND** two paragraphs of descriptive text are displayed
- **AND** an "Our Services" button is available
- **AND** an "Our Mission" alert box with an image is displayed on the right

#### Scenario: Mission alert box

- **GIVEN** the safe industry section is visible
- **THEN** the "Our Mission" box has a colored background and displays a mission statement

### Gallery / Works

Feature: Gallery Section

#### Scenario: Portfolio grid

- **GIVEN** the user scrolls to the gallery area
- **THEN** a grid of project images is displayed
- **AND** each project has an image and title "Floride Chemicals Factory"
- **AND** each project has a "Read more" link
- **AND** the grid shows 8 projects in a 4-column layout

#### Scenario: Gallery hover effect

- **GIVEN** the gallery items are visible
- **WHEN** the user hovers over a project
- **THEN** an overlay appears with the project title and link

### Team

Feature: Team Section

#### Scenario: Team member profiles

- **GIVEN** the user scrolls to the team area
- **THEN** the heading reads "Our Team Best Members"
- **AND** four team member cards are displayed
- **AND** each card has a photo, name ("Bruce Roberts"), and role
- **AND** a "Contact Us" button is available

#### Scenario: Team card hover

- **GIVEN** the team cards are visible
- **WHEN** the user hovers over a card
- **THEN** social media icons or an overlay appears

### Testimonials

Feature: Testimonials

#### Scenario: Testimonial carousel

- **GIVEN** the user scrolls to the testimonial area
- **THEN** a carousel shows customer testimonials
- **AND** each testimonial has a quote icon, review text, founder name ("Jessya Inn"), and role ("Co Founder")
- **AND** navigation dots are present to cycle through testimonials

#### Scenario: Testimonial auto-advance

- **GIVEN** the testimonials section is visible
- **WHEN** the user waits
- **THEN** the carousel automatically advances to the next testimonial

### Blog / David Droga

Feature: Blog Section

#### Scenario: Two blog post cards

- **GIVEN** the user scrolls to the blog area
- **THEN** two blog post items are displayed side by side
- **AND** each post has an image, date/author info, title, and "Read more" link
- **AND** the blog titles reference advertising/industry topics

#### Scenario: Blog hover effect

- **GIVEN** the blog cards are visible
- **WHEN** the user hovers over a post
- **THEN** an overlay or shadow effect appears

### Call to Action

Feature: CTA Section

#### Scenario: Work with us CTA

- **GIVEN** the user scrolls past the blog
- **THEN** a section with heading "Want To Work With Us? Hit The Button." is visible
- **AND** a "Let's Work Together" white button is displayed

#### Scenario: CTA button hover

- **GIVEN** the CTA section is visible
- **WHEN** the user hovers over the "Let's Work Together" button
- **THEN** the button changes to an orange (#f27420) background

### Footer

Feature: Footer

#### Scenario: Footer layout

- **GIVEN** the user reaches the page bottom
- **THEN** a dark navy (#00163e) footer is visible
- **AND** the footer has four columns: About Us (with logo and description), Contact Info (phone, email), Photo Gallery, Important Links
- **AND** social media icon links are present
- **AND** a bottom bar shows copyright information

#### Scenario: Footer copyright

- **GIVEN** the footer is visible
- **THEN** the copyright line is present
- **AND** a link to https://www.componentdock.com/ ("Component Dock") is present (replacing ColorLib attribution)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/forgepoint/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/forgepoint/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] All sections render in correct order: Header → Hero Slider → Services → Safe Industry → Gallery → Team → Testimonials → Blog → CTA → Footer
- [ ] Barlow + Roboto fonts loaded via Google Fonts `<link>` in index.html
- [ ] Primary orange `#f27420` used for CTA buttons, accent elements
- [ ] Dark navy `#021a47` and `#00163e` used for dark backgrounds
- [ ] Text color `#0b1c39` for primary headings
- [ ] Link color `#1696e7` for hyperlinks
- [ ] Gold accent `#dca73a` for testimonial accents
- [ ] Hero slider with auto-advance and navigation controls
- [ ] Gallery grid with hover overlays
- [ ] Team cards with hover social icons
- [ ] Responsive: hamburger nav on mobile, stacked layouts on small screens
- [x] Footer links to https://www.componentdock.com/ (branded "Component Dock")
- [x] No references to ColorLib in app source (provenance only in spec)
- [ ] Placeholder images via `https://picsum.photos/seed/forgepoint-<n>/<w>/<h>`
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes (`npx tsc --noEmit`)
- [ ] Lint passes (`npx oxlint src/`)
- [ ] Build succeeds (`npx vite build`)
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
