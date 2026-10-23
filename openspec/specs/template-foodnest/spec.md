# Template: Foodnest (Food & Restaurant)

## Purpose

A restaurant landing template with hero, restaurant intro, services, special menu, our menu, testimonials and blog sections. Recreation of the ColorLib **Foody** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source slug:** `foody`
- **ColorLib page:** https://colorlib.com/wp/template/foody/
- **Live preview:** https://preview.colorlib.com/theme/foody/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, Vitest + Testing Library
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/foody-free-template.jpg

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`):

| Token | Value | Usage |
|---|---|---|
| Brand color (primary) | `#ff7404` (warm orange) | CTA buttons, active nav items, links, price text, hover states |
| Brand hover | `#ff9037` (lighter orange) | Button hover/active/focus states |
| Background | `#ffffff` (white) | Page base background |
| Background light | `#f7f7f7` / `#f8f9fa` | Service section (`.bg-light`) |
| Text dark | `#000000` (black) | Headings, footer labels |
| Text muted | `#868e96` (gray) | Body text |
| Text secondary | `#ced4da` (light gray) | Subtle text |
| Text danger | `#cf1d16` (red) | Heart icon in loader/footer |
| Font body | `"Open Sans", Arial, sans-serif` (Google Fonts) | All text (headings + body) |
| Button shape | `border-radius: 0px` (square corners) | All `.btn` and `.form-control` |
| Navbar | `background: black`, white text, orange active/hover | Dark header bar |
| Section slants | CSS clip-path `top-slant-white` / `bottom-slant-gray` | Diagonal section separators |
| Loader | Circular SVG spinner, `#cf1d16` stroke | Page loading animation |

## Sections (in order)

1. **Header/Navbar** — Dark (black) navbar, brand "Foody" left, nav links right: Home, Recipes, Services (dropdown: Food Catering, Drink & Beverages, Wedding & Birthday), About, News. "Contact Us" CTA button on far right. Mobile hamburger toggle.
2. **Hero Slider** — Owl-carousel with 2 slides. Each: full-width background image, centered text with heading, paragraph, white outline CTA "Get Started". AOS fade-up animations.
3. **Services** — 4-column icon grid on `bg-light` with bottom slant. Each: icon (flaticon), orange heading (e.g. "Enjoy Eating"), description paragraph. Icons: dinner, fish, coffee, meat.
4. **The Restaurant** — Centered heading "The Restaurant" + paragraph. 3 images in a row (dishes + about images). AOS fade animations.
5. **Special Menu** — Owl-carousel of dish cards. Each: dish image + overlaid text with price (orange) and dish name heading. Horizontal scrolling carousel.
6. **Our Menu** — `bg-light` with slant sections. 2-column layout, 4 items each. Each item: background image left, text right (dish name, description, price in orange). Alternating text/image order.
7. **Testimonial** — Carousel with blockquotes. Each: quote text, author image (round), author name, role. Clean centered layout.
8. **Blog** — `bg-light` with top slant. 2-column blog cards. Each: background image, date, title, excerpt, "Read More" orange button.
9. **Footer** — Newsletter subscribe section (email input + "Subscribe" button). Then 3 columns: About Us + social icons (Twitter, Facebook, LinkedIn, Instagram), Opening Hours + Contact Info, Quick Links. Copyright line with Component Dock attribution.

## Requirements

### Feature: Foodnest template behaviour

#### Scenario: Dark navbar renders navigation

- **GIVEN** the user visits the Foodnest page
- **THEN** a dark (black) navigation bar is visible at the top
- **AND** it displays the brand name "Foody" (or "Foodnest" in recreation)
- **AND** it contains links: Home, Recipes, Services, About, News
- **AND** a "Contact Us" button is on the right

#### Scenario: Mobile hamburger opens navigation

- **GIVEN** the viewport width is less than 768px
- **WHEN** the user taps the hamburger toggle
- **THEN** a collapsible navigation menu appears
- **AND** all nav links are accessible

#### Scenario: Hero slider displays slides

- **GIVEN** the user is on the homepage
- **THEN** a full-width image slider is visible
- **AND** each slide shows a heading, paragraph, and "Get Started" CTA button
- **AND** the CTA button has a white outline style

#### Scenario: Services section shows four service blocks

- **GIVEN** the user scrolls to the Services section
- **THEN** four service blocks are displayed in a row
- **AND** each block has an icon, orange heading, and description text
- **AND** the section has a light background with a slanted bottom edge

#### Scenario: Restaurant section displays heading and images

- **GIVEN** the user scrolls to the Restaurant section
- **THEN** a centered heading "The Restaurant" is shown with a paragraph
- **AND** three images are displayed in a row below

#### Scenario: Special Menu carousel shows dish cards

- **GIVEN** the user scrolls to the Special Menu section
- **THEN** a horizontal carousel of dish cards is displayed
- **AND** each card shows a dish image with price and name overlaid

#### Scenario: Our Menu shows two-column dish layout

- **GIVEN** the user scrolls to the Our Menu section
- **THEN** a two-column layout with dish items is displayed
- **AND** each item has a background image, dish name, description, and price
- **AND** prices are displayed in orange
- **AND** items alternate text/image ordering

#### Scenario: Testimonials carousel displays quotes

- **GIVEN** the user scrolls to the Testimonial section
- **THEN** a carousel of testimonials is shown
- **AND** each testimonial contains a quote, author image, name, and role

#### Scenario: Blog section shows two post cards

- **GIVEN** the user scrolls to the Blog section
- **THEN** two blog post cards are displayed
- **AND** each card has a background image, date, title, excerpt, and "Read More" button

#### Scenario: Footer has newsletter and info columns

- **GIVEN** the user scrolls to the footer
- **THEN** a newsletter subscription section with email input and "Subscribe" button is visible
- **AND** three info columns are displayed: About Us, Opening Hours + Contact Info, Quick Links
- **AND** social icons (Twitter, Facebook, LinkedIn, Instagram) are shown
- **AND** the footer contains a "Made with ❤ by Component Dock" copyright line

#### Scenario: Brand orange is used consistently

- **GIVEN** the user views any section of the page
- **THEN** CTA buttons use the orange brand color (#ff7404)
- **AND** price text uses the orange brand color
- **AND** active nav items use the orange brand color
- **AND** buttons have square corners (border-radius: 0)

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
`apps/foodnest/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/foodnest/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Dark navbar with brand and nav links renders correctly
- [ ] Mobile hamburger menu toggles navigation
- [ ] Hero slider shows 2 slides with background images, headings, CTAs
- [x] "Get Started" CTA has white outline style
- [ ] Services section: 4 blocks with icons, orange headings, descriptions
- [ ] Slanted section separators (CSS clip-path) render
- [ ] Restaurant section: heading + paragraph + 3 images
- [ ] Special Menu carousel with dish cards (price + name + image)
- [ ] Our Menu: 2-column layout with alternating text/image
- [ ] Testimonials: carousel with blockquotes and author info
- [ ] Blog: 2 post cards with image, date, title, excerpt, Read More
- [ ] Footer: newsletter form, 3 info columns, social icons
- [ ] Orange (#ff7404) used for CTAs, prices, active nav
- [ ] Square button corners (border-radius: 0)
- [ ] Open Sans font throughout
- [x] Footer links to https://www.componentdock.com/
- [x] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
