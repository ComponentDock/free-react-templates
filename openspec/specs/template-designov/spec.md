# Template: Designov (Personal Portfolio)
<!-- prep-status: shipped-as=boldcraft -->
> **SHIPPED-UNDER** — the ColorLib `calvin` design this prep describes already
> ships as `apps/boldcraft` (<https://boldcraft.free.componentdock.com>).
> Do not scaffold `apps/designov`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-boldcraft/spec.md`.

## Purpose

Designov is a single-page personal portfolio / designer landing page recreating
ColorLib's **Calvin** template.
- **Source:** https://colorlib.com/wp/template/calvin/
- **Preview:** https://preview.colorlib.com/theme/calvin/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `designov` (apps/designov, `@free-react-templates/designov`)

## Design Tokens (extracted from preview CSS)

| Token            | Value                          | Usage                                          |
| ---------------- | ------------------------------ | ---------------------------------------------- |
| Brand orange     | `#FF8553`                      | Primary CTA, buttons, accent, progress bars    |
| Brand hover      | `#FD8F5F`                      | Button hover state                             |
| Body font        | `"DM Sans", sans-serif`        | Body text, paragraphs, nav links               |
| Heading font     | `"Roboto Condensed", sans-serif` | H1–H5 section headings                      |
| Body text color  | `#000000`                      | Primary body text                              |
| Muted text       | `#635c5c`                      | Secondary / muted paragraphs                   |
| Light bg         | `#f7f7f7`                      | Section backgrounds (services, about)          |
| Dark heading     | `#140C40`                      | Testimonial area headings                      |
| Gold accent      | `#dca73a`                      | Skill bar text                                 |
| Light yellow     | `#FFEFAE`                      | Highlight / banner accent                      |
| Button radius    | `25px–30px`                    | Pill-shaped CTAs                               |
| Card radius      | `0px`                          | Service cards are flat (no border-radius)      |
| Social icon      | `50%`                          | Circular social icons                          |

## Sections (in order)

1. **Navbar** — Sticky transparent header: logo left, nav links (Home, Work, Service, Blog, Contact), "Let's Talk" pill button right. Mobile hamburger.
2. **Hero** — Full-height split: left column = person illustration image, right column = large headline "My name is [Name]. [Role]" + subtitle + CTA. Background: solid light.
3. **About Info Bar** — Horizontal strip below hero: "Design For: Web & Mobile" | Phone | Email + icon.
4. **Services ("My Experties")** — 2×2 grid. Each card: SVG icon + heading + paragraph + browse-btn link. Light `#f7f7f7` background.
5. **Gallery ("My Works")** — 2×2 grid of portfolio images with hover overlay showing category label. "More Work" pill button below.
6. **About Me** — Split: left = heading + paragraph text, right = 3 animated progress bars (UI Design 60%, UX 89%, Illustration 95%).
7. **Brand Logos** — Horizontal scrolling logo carousel (6 placeholder partner logos).
8. **Testimonials** — Centered testimonial slider: quote text, avatar, name, role. Light background.
9. **Blog ("Latest News")** — Horizontal slider of blog post cards: image + category badge + date/author + title link.
10. **Footer** — Two-part: (a) "Want to Work" CTA band with logo + paragraph + social icons + "Let's Talk" + "Download CV" buttons; (b) bottom bar with copyright + nav links.

## Requirements

### Navbar

#### Scenario: Navbar displays logo and navigation links

- **GIVEN** the page is loaded
- **THEN** the navbar is visible at the top
- **AND** a logo is displayed on the left
- **AND** navigation links "Home", "Work", "Service", "Blog", "Contact" are shown
- **AND** a "Let's Talk" button is displayed

#### Scenario: Navbar is sticky on scroll

- **GIVEN** the user scrolls down the page
- **THEN** the navbar remains fixed at the top of the viewport

### Hero

#### Scenario: Hero section displays headline and illustration

- **GIVEN** the page is loaded
- **THEN** a hero section is visible
- **AND** a large headline with name and role is displayed
- **AND** a subtitle text is shown below the headline
- **AND** a person illustration image is shown

#### Scenario: Hero section is full viewport height

- **GIVEN** the page is loaded
- **THEN** the hero section fills at least the visible viewport height

### About Info Bar

#### Scenario: About info bar shows contact details

- **GIVEN** the page is loaded
- **THEN** a horizontal info bar is displayed below the hero
- **AND** it shows "Design For" with specialization
- **AND** it shows a phone number
- **AND** it shows an email address

### Services

#### Scenario: Services section shows four service cards in a 2x2 grid

- **GIVEN** the page is loaded
- **THEN** a services section with heading "My Experties" is visible
- **AND** exactly 4 service cards are displayed in a 2-column layout
- **AND** each card has an icon, title, description, and link

#### Scenario: Services section has a light background

- **GIVEN** the services section is rendered
- **THEN** the section background is light grey (#f7f7f7 or similar)

### Gallery

#### Scenario: Gallery shows portfolio images in a grid

- **GIVEN** the page is loaded
- **THEN** a gallery section with heading "My Works" is visible
- **AND** 4 portfolio images are displayed in a 2-column grid
- **AND** each image shows a hover overlay with a category label

#### Scenario: Gallery has a "More Work" button

- **GIVEN** the gallery section is rendered
- **THEN** a "More Work" pill-shaped button is displayed centered below the grid

### About Me

#### Scenario: About Me section shows text and skill bars

- **GIVEN** the page is loaded
- **THEN** an "About Me" section is visible
- **AND** a paragraph of text is displayed on the left
- **AND** 3 animated progress bars are displayed on the right
- **AND** progress bar labels include "User Interface Design", "User Experience", "Illustration"

#### Scenario: Progress bars show percentage values

- **GIVEN** the About Me section is rendered
- **THEN** each progress bar has a visible percentage label

### Brand Logos

#### Scenario: Brand logos carousel displays placeholder logos

- **GIVEN** the page is loaded
- **THEN** a brand logos section is visible
- **AND** at least 5 placeholder partner logos are shown in a horizontal scroll

### Testimonials

#### Scenario: Testimonial section displays a quote with author

- **GIVEN** the page is loaded
- **THEN** a testimonial section is visible
- **AND** a quote text is displayed centered
- **AND** an avatar image, author name, and role are shown below the quote

#### Scenario: Testimonial section has a centered layout

- **GIVEN** the testimonial section is rendered
- **THEN** the content is centered within the container

### Blog

#### Scenario: Blog section shows latest news cards

- **GIVEN** the page is loaded
- **THEN** a blog section with heading "Latest News" is visible
- **AND** at least 3 blog post cards are displayed in a horizontal slider
- **AND** each card has an image, category badge, date/author line, and title link

### Footer

#### Scenario: Footer has CTA band and bottom bar

- **GIVEN** the page is loaded
- **THEN** a footer is displayed
- **AND** a "Want to Work" CTA section shows logo, paragraph, social icons, and two buttons ("Let's Talk" and "Download CV")
- **AND** a bottom bar shows copyright text and navigation links

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer is rendered
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link text references "Component Dock"

## Verification checklist

- [ ] All 10 sections present in correct order
- [ ] Brand orange `#FF8553` used for CTAs, buttons, accent elements
- [ ] Body font: DM Sans; Headings: Roboto Condensed (loaded via Google Fonts)
- [ ] Pill-shaped buttons with 25–30px border-radius
- [ ] Services: 2×2 grid with flat cards (no border-radius)
- [ ] Gallery: 2×2 grid with hover overlay on each image
- [ ] Progress bars animated with percentage labels
- [ ] Testimonial slider with avatar, name, role
- [ ] Blog cards in horizontal slider layout
- [ ] Footer CTA band + bottom bar with Component Dock link
- [ ] Responsive: mobile hamburger nav, stacked layouts on small screens
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images via picsum.photos
- [ ] 100% test coverage (Vitest + Testing Library)
