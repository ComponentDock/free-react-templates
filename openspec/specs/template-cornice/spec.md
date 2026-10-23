# Template: Cornice (Architecture / Construction)

## Purpose

Recreation of ColorLib "Complex" — a modern architecture and construction company
single-page template with hero carousel, tabbed services, project gallery, team
accordion, testimonials, and newsletter.

- **ColorLib source:** https://colorlib.com/wp/template/complex/
- **Preview URL:** https://preview.colorlib.com/theme/complex/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `cornice` (apps/cornice, @free-react-templates/cornice)

## Design tokens

Extracted from preview HTML/CSS at https://preview.colorlib.com/theme/complex/css/style.css
and inline styles.

| Token              | Value                                              | Usage                                                                 |
| ------------------ | -------------------------------------------------- | --------------------------------------------------------------------- |
| Font family        | `Poppins` (weights 300, 400, 500, 700)             | All text, loaded via Google Fonts                                     |
| Accent / brand     | `#F7B633` (golden yellow)                          | Active nav underline, tab active state, button accents, counter icons |
| Hero gradient      | `linear-gradient(45deg, #43DDE6 0%, #9870FC 100%)` | Screenshot shows cyan-to-purple gradient overlay on hero              |
| Dark surfaces      | `#1E2022`, `#252525`, `#25282a`                    | Footer, newsletter, dark section backgrounds                          |
| Body text          | `#333333`, `#4d4d4d`, `#666666`, `#999999`         | Primary text, secondary text, muted text                              |
| Light bg           | `#fafafa`, `#ededed`, `whitesmoke`, `#fff`         | Section backgrounds, card backgrounds                                 |
| Interactive accent | `#00b7ea`                                          | Secondary accent (visible in CSS)                                     |
| Gradient utility   | `linear-gradient(45deg, #43DDE6, #9870FC)`         | Hero overlay, newsletter overlay                                      |
| Overlay            | `rgba(0,0,0,0.4)` – `rgba(0,0,0,0.7)`              | Hero, parallax, newsletter dark overlays                              |
| Button radius      | Default Bootstrap (`border-radius: 4px`)           | Buttons use `.btn-primary` style                                      |
| Section paddings   | ~80–100px vertical padding                         | Standard ColorLib section rhythm                                      |

### Visual design (from screenshot)

The screenshot shows a macOS browser frame mockup containing the template:

- Dark architectural building images as hero backgrounds
- Transparent navbar with white "COMPLEX" logo and white nav links
- Active nav item underlined with golden yellow
- Hero carousel with bold white headline "Our Obsession Is Distinctive Interiors" centered on dark building imagery
- Semi-transparent white tab bar overlapping the hero bottom
- White service cards with yellow icons and dark text
- Parallax sections with dark overlay images
- Overall aesthetic: modern, minimal, corporate architecture — cool darks with warm yellow accents

## Section structure (top to bottom)

1. **Navbar** — Logo ("Cornice"), nav links: Home, Projects (dropdown: Commercial, Apartment, House, Building), Services, Blog, About, Contact. Transparent over hero, sticky on scroll. Active link has yellow underline.

2. **Hero Carousel** — Full-viewport-height slider (4 slides). Each slide has a dark background image (architecture/buildings) with dark overlay, centered white headline + subtext. Carousel dots at bottom. Slides rotate automatically.

3. **Service Tabs** — Horizontal tab bar with 4 tabs, each with a line icon + text:
   - Planning & Design
   - General Constructing
   - Construction Management
   - Building Modeling

   Active tab has white solid background. Tab content is two-column: left = building image on light gray bg, right = paragraph + bulleted list. Each tab shows its own image + description.

4. **Services Grid** — 6 service cards in 3-column grid (2 rows of 3):
   - General Constructing, Building Modeling, Design Build
   - Construction Services, Pre-Construction Design, Construction Management

   Each card: yellow icon + uppercase title + description paragraph. White background with subtle drop shadow.

5. **Counter Section** — Full-width parallax background (construction site image) with dark overlay. 4 counters in a row:
   - Projects: 1,539
   - Employees: 3,653
   - Constructor: 5,987
   - Partners: 3,999

   Each counter has a white icon, animated number, and label below.

6. **Projects Gallery** — Heading "Our Projects" centered with description. 6 project cards in a masonry-like asymmetric grid:
   - Row 1: col-4 (Apartment Interior Design) + col-8 (Office Space)
   - Row 2: col-6 (Condo Building) + col-6 (Kitchen Interior)
   - Row 3: col-8 (Commercial Building) + col-4 (Hotel Building)

   Each card: background image with hover overlay showing search icon, title below.

7. **About / Team Section** — Full-width parallax background with dark overlay. Split layout:
   - Left half: 4 team member cards in 2x2 grid, each with background image + name + role overlaid at bottom
     - Ian Moore (Electrician), Jack Clark (Engineer), Kiven Lewis (Architect), Charles Scott (Assistant Engineer)
   - Right half: description paragraph + 3-panel accordion FAQ:
     - "Who we are" (expanded by default)
     - "What we do?"
     - "Why Choose us"

8. **Testimonials** — Heading "Client Says:" centered. Owl-carousel slider with 3 testimonials:
   - Andrew Field — avatar + quote
   - Mark Bubble — avatar + quote
   - Adam Smith — avatar + quote

   Each item: circular avatar image on left, name + blockquote on right.

9. **Newsletter** — Dark background (overlay on image) with heading "Subscribe Newsletter", subtitle, and email input + "Subscribe Now" button row. Golden yellow primary button.

10. **Footer** — Multi-section footer:
    - **Contact info bar** (dark bg): 3 columns — address, email/website, phone
    - **4-column footer**: About + social icons (Twitter, Facebook, LinkedIn, Dribbble), Information links (Our Company, Certification, Services, Career, Core Values, History, FAQ), Instagram photo grid (6 thumbnails), Contact Info
    - **Copyright bar**: "All rights reserved | Made with Component Dock"

## Requirements

### Feature: Cornice Template

Background:
- **GIVEN** the user visits "https://cornice.free.componentdock.com"
- **AND** the page is fully loaded

**--- Navbar ---**

#### Scenario: Navbar displays logo and navigation links

- **THEN** the "Cornice" logo text is visible
- **AND** links "Home", "Projects", "Services", "Blog", "About", "Contact" are visible
- **AND** the "Home" link has a golden-yellow underline indicating it is active

#### Scenario: Navbar becomes sticky on scroll

- **WHEN** the user scrolls down past 100px
- **THEN** the navbar should have a solid background (not transparent)

#### Scenario: Projects dropdown shows on hover

- **WHEN** the user hovers over "Projects"
- **THEN** a dropdown appears with "Commercial", "Apartment", "House", "Building"

**--- Hero Carousel ---**

#### Scenario: Hero carousel displays with slides

- **THEN** a full-viewport hero section is visible
- **AND** a headline text is displayed centered in white
- **AND** carousel indicator dots are visible at the bottom

#### Scenario: Hero carousel auto-rotates

- **WHEN** the user waits 5 seconds
- **THEN** the hero slide should change to the next slide

#### Scenario: Hero carousel navigates via dots

- **WHEN** the user clicks the second carousel dot
- **THEN** the second hero slide should be displayed

**--- Service Tabs ---**

#### Scenario: Service tabs are visible with icons

- **THEN** 4 service tabs are displayed: "Planning & Design", "General Constructing", "Construction Management", "Building Modeling"
- **AND** the "Planning & Design" tab is active by default

#### Scenario: Clicking a tab shows its content

- **WHEN** the user clicks the "General Constructing" tab
- **THEN** a two-column layout appears: image on the left, description on the right
- **AND** the description contains a paragraph and a bulleted list

#### Scenario: Tab switching updates the active state

- **WHEN** the user clicks the "Building Modeling" tab
- **THEN** the "Building Modeling" tab is visually active
- **AND** the "Planning & Design" tab is no longer active

**--- Services Grid ---**

#### Scenario: Services grid displays 6 service cards

- **THEN** 6 service cards are displayed in a 3-column grid
- **AND** each card shows a yellow icon, a title, and a description

#### Scenario: Service cards are evenly spaced

- **THEN** all 6 service cards should be visible without overlap

**--- Counter Section ---**

#### Scenario: Counter section shows 4 animated counters

- **THEN** 4 counters are visible: "Projects", "Employees", "Constructor", "Partners"
- **AND** each counter displays a number

#### Scenario: Counter section has a parallax background

- **THEN** the counter section has a background image with a dark overlay

**--- Projects Gallery ---**

#### Scenario: Projects section displays heading

- **THEN** the heading "Our Projects" is visible
- **AND** a description paragraph appears below the heading

#### Scenario: Projects gallery displays 6 project cards

- **THEN** 6 project cards are displayed in an asymmetric grid layout
- **AND** each card shows a project image with a hover overlay containing a search icon
- **AND** each card has a title below the image

**--- About / Team Section ---**

#### Scenario: Team section displays team members

- **THEN** the heading "Our Team" is visible
- **AND** 4 team member cards are displayed in a 2x2 grid
- **AND** each card shows a name and role: "Ian Moore (Electrician)", "Jack Clark (Engineer)", "Kiven Lewis (Architect)", "Charles Scott (Assistant Engineer)"

#### Scenario: Accordion FAQ is interactive

- **THEN** the "Who we are" accordion panel is expanded by default
- **WHEN** the user clicks "What we do?"
- **THEN** the "What we do?" panel expands with content
- **AND** the "Who we are" panel collapses

#### Scenario: "Why Choose us" panel is collapsible

- **WHEN** the user clicks "Why Choose us"
- **THEN** the "Why Choose us" panel expands with content

**--- Testimonials ---**

#### Scenario: Testimonials carousel displays client quotes

- **THEN** the heading "Client Says:" is visible
- **AND** a testimonial carousel shows at least one client quote with an avatar and name

#### Scenario: Testimonial carousel navigates

- **WHEN** the user navigates to the next testimonial
- **THEN** a different client name and quote should be displayed

**--- Newsletter ---**

#### Scenario: Newsletter section displays form

- **THEN** the heading "Subscribe Newsletter" is visible
- **AND** an email input field with placeholder "Enter your email" is visible
- **AND** a "Subscribe Now" button is visible

#### Scenario: Newsletter form submission

- **WHEN** the user enters a valid email address in the newsletter input
- **AND** clicks "Subscribe Now"
- **THEN** the form should attempt to submit

**--- Footer ---**

#### Scenario: Footer contact info bar displays

- **THEN** a contact bar shows: address "291 South 21th Street, Suite 721 New York NY 10016", email/website info, and phone numbers

#### Scenario: Footer 4-column layout

- **THEN** the footer shows 4 columns: "About Cornice", "Information", "Instagram", "Contact Info"
- **AND** social icons (Twitter, Facebook, LinkedIn, Dribbble) are visible in the About column
- **AND** the Information column lists: "Our Company", "Certification", "Our services", "Career", "Core Values", "Company History", "FAQ"
- **AND** the Instagram column shows 6 thumbnail images
- **AND** the Contact Info column shows address, phone, and email

#### Scenario: Footer copyright

- **THEN** the copyright bar reads "All rights reserved" and links to "Component Dock"

**--- Accessibility ---**

#### Scenario: Keyboard navigation

- **GIVEN** the user tabs through the page
- **THEN** all interactive elements receive visible focus indicators
- **AND** the carousel can be navigated via keyboard

#### Scenario: Semantic HTML

- **THEN** the page uses semantic landmarks: nav, main, footer
- **AND** all images have alt text
- **AND** form inputs have associated labels

**--- Responsive ---**

#### Scenario: Mobile layout

- **GIVEN** the viewport is 375px wide
- **THEN** the navbar collapses to a hamburger menu
- **AND** the hero carousel is full-width
- **AND** the services grid stacks to a single column
- **AND** the project grid stacks to a single column
- **AND** the team grid stacks to a single column
- **AND** the footer columns stack vertically

#### Scenario: Tablet layout

- **GIVEN** the viewport is 768px wide
- **THEN** the services grid shows 2 columns
- **AND** the project grid shows 2 columns

## Verification checklist

- [ ] `npm run verify:app -- cornice` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 29 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Cornice Template
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
