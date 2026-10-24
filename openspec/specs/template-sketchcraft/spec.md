# Template: SketchCraft (Personal Portfolio)
<!-- prep-status: shipped-as=boldcraft -->
> **SHIPPED-UNDER** — the ColorLib `calvin` design this prep describes already
> ships as `apps/boldcraft` (<https://boldcraft.free.componentdock.com>).
> Do not scaffold `apps/sketchcraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-boldcraft/spec.md`.

## Purpose

Recreation of ColorLib's **Calvin** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application. A personal portfolio / digital product designer landing page with hero, about bar, services, portfolio gallery, about-me with skill bars, brand logos, testimonials, blog, and a CTA footer.

- Source: https://colorlib.com/wp/template/calvin/
- Live preview: https://preview.colorlib.com/theme/calvin/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calvin-free-template.jpg

## Design tokens (extracted from preview CSS)

| Token | Value |
|---|---|
| Primary / accent | `#FF8553` (warm orange) |
| Secondary accent | `#ec703f` (darker orange, gradient stops) |
| Body background | `#FFFFFF` (white) |
| Text / headings | `#000000` (black) |
| Link / muted text | `#635c5c` (warm gray) |
| Section background alt | `#f7f7f7` (light gray) |
| Alert / warning bg | `#FFEFAE` (light yellow) |
| Alert text | `#670000` (dark red) |
| Body font | `"DM Sans", sans-serif` |
| Heading font | `"Roboto Condensed", sans-serif` |
| Button radius | `25px` (pill / rounded) |
| Card shadow | `0 10px 15px rgba(25,25,25,0.1)` |
| Progress bar | orange gradient `linear-gradient(to left, #FF8553, #ec703f, #FF8553)` |
| Avatar / brand circle | `border-radius: 50%` |

## Section order (from preview HTML)

1. **Header** — transparent sticky navbar, logo left, nav links (Home / Work / Service / Blog / Contact), "Let's Talk" CTA button right.
2. **Hero** — full-width slider area. Left: portrait image of the designer. Right: large heading "My name is Calvin, Digital Product Designer" + subtitle.
3. **About Info Bar** — horizontal info strip below hero. "Design For: Web & Mobile" | Phone | Email icon + address.
4. **Services** — "My Experties" heading, 2×2 grid of service cards. Each: icon + title + description + link text.
5. **Gallery** — "My Works" heading, 2×2 portfolio image grid with hover overlay labels. "More Work" button centered below.
6. **About Me + Skills** — left: "About Me" heading + two paragraphs + quote. Right: 3 animated progress bars (UI Design 60%, UX 89%, Illustration 95%).
7. **Brand logos** — horizontal auto-scrolling brand logo carousel (6 logos).
8. **Testimonials** — "Client Testimonial" heading, centered testimonial card carousel. Each: quote + author image + name + role.
9. **Blog** — "Latest News" heading, horizontal blog card carousel. Each: image + category badge + date/author + title link.
10. **Footer** — top CTA area: logo + blurb + social icons + "Let's Talk" button + "Download CV" button. Bottom: copyright + footer nav links (Home / Work / Service / Blog / Contact).

## Requirements

### Header

#### Scenario: Sticky transparent header renders navigation links

- **GIVEN** the user loads the page
- **WHEN** the header is visible
- **THEN** it shows links for Home, Work, Service, Blog, and Contact
- **AND** a "Let's Talk" button is visible on the right

#### Scenario: Header becomes solid on scroll

- **GIVEN** the user has scrolled past the hero
- **WHEN** the header is sticky
- **THEN** the background transitions to opaque

### Hero

#### Scenario: Hero displays portrait and headline

- **GIVEN** the user is on the homepage
- **WHEN** the hero section is rendered
- **THEN** a portrait image is displayed on the left
- **AND** a heading with the designer name and role is displayed on the right
- **AND** a subtitle line is shown below the heading

### About Info Bar

#### Scenario: Info bar shows contact details

- **GIVEN** the user views the hero area
- **WHEN** the about-info bar is visible
- **THEN** it shows "Design For: Web & Mobile"
- **AND** a phone number is displayed
- **AND** an email address with icon is displayed

### Services

#### Scenario: Services section renders four service cards

- **GIVEN** the user scrolls to the services section
- **WHEN** the section renders
- **THEN** the heading "My Experties" is displayed
- **AND** four service cards are shown in a 2-column grid
- **AND** each card has an icon, title, description, and link

#### Scenario: Service cards have consistent styling

- **GIVEN** four service cards are rendered
- **THEN** each card has a heading, paragraph, and link
- **AND** icons are rendered from lucide-react

### Gallery

#### Scenario: Gallery shows four portfolio items

- **GIVEN** the user scrolls to the gallery
- **WHEN** "My Works" section renders
- **THEN** four image cards are displayed in a 2-column grid
- **AND** each card has a hover overlay with a category label

#### Scenario: More Work button is centered

- **GIVEN** the gallery section is rendered
- **WHEN** the user views the bottom of the gallery
- **THEN** a "More Work" button is centered below the grid

### About Me + Skills

#### Scenario: About section shows text and progress bars

- **GIVEN** the user scrolls to the about-me section
- **WHEN** the section renders
- **THEN** the heading "About Me" appears on the left
- **AND** two paragraphs of bio text are shown
- **AND** a quote block is displayed
- **AND** three skill bars are shown on the right

#### Scenario: Skill bars animate to their target percentages

- **GIVEN** the skill bars are in view
- **WHEN** the section scrolls into the viewport
- **THEN** each progress bar fills to its defined percentage
- **AND** the skill name and percentage are labeled

### Brand Logos

#### Scenario: Brand logos carousel is rendered

- **GIVEN** the user scrolls to the brand area
- **WHEN** the carousel renders
- **THEN** at least 6 brand logos are displayed
- **AND** logos auto-scroll horizontally

### Testimonials

#### Scenario: Testimonial carousel displays quote cards

- **GIVEN** the user scrolls to testimonials
- **WHEN** the section renders
- **THEN** the heading "Client Testimonial" is shown
- **AND** a testimonial card is centered with a quote
- **AND** an author photo, name, and role are displayed

#### Scenario: Testimonials rotate via carousel

- **GIVEN** multiple testimonials exist
- **WHEN** the carousel is active
- **THEN** testimonials cycle through with a smooth transition

### Blog

#### Scenario: Blog section shows article cards

- **GIVEN** the user scrolls to the blog section
- **WHEN** the section renders
- **THEN** the heading "Latest News" is shown
- **AND** blog cards are displayed in a horizontal scroll
- **AND** each card has an image, category badge, date, and title link

### Footer

#### Scenario: Footer renders CTA area and bottom bar

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer renders
- **THEN** a logo and blurb paragraph are shown
- **AND** social media icon links are displayed
- **AND** a "Let's Talk" button and "Download CV" button are shown
- **AND** a bottom bar shows copyright and navigation links

#### Scenario: Footer contains Component Dock attribution

- **GIVEN** the footer is rendered
- **WHEN** the user looks at the footer
- **THEN** it links to https://www.componentdock.com/ with the text "Component Dock"

## Verification checklist

- [ ] Header: transparent sticky, nav links, CTA button, solid-on-scroll
- [ ] Hero: portrait image left, heading right, subtitle
- [ ] About info bar: design-for, phone, email with icon
- [ ] Services: heading, 2x2 grid, 4 cards with icon/title/desc/link
- [ ] Gallery: heading, 2x2 grid, hover overlays, "More Work" button
- [ ] About Me: heading, paragraphs, quote, 3 skill progress bars
- [ ] Brand logos: carousel with 6+ logos, auto-scroll
- [ ] Testimonials: heading, centered card, quote + author, carousel
- [ ] Blog: heading, horizontal card scroll, image + badge + meta + title
- [ ] Footer: CTA area (logo, blurb, social, buttons), bottom bar (copyright, nav)
- [ ] Footer: links to componentdock.com
- [ ] Design tokens: #FF8553 accent, DM Sans body, Roboto Condensed headings, pill buttons
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Vite config includes `injectUiSource()`
