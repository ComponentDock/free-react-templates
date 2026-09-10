# Template: Bizmark (Business / Consulting)

## Purpose

Recreation of ColorLib's **Bizcon** template — a business/consulting website
with a gradient-orange accent, clean corporate aesthetic, and animated decorative
elements.

- **Source slug:** `bizcon`
- **ColorLib page:** https://colorlib.com/wp/template/bizcon/
- **Preview URL:** https://preview.colorlib.com/theme/bizcon/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bizcon-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the preview CSS (`css/style.css`) and live DOM:

| Token            | Value                                                    | Notes                                |
| ---------------- | -------------------------------------------------------- | ------------------------------------ |
| Primary gradient | `linear-gradient(131deg, #feb47b, #ff7e5f)`              | Orange → salmon, used on all CTAs    |
| Accent / hover   | `#ff7e5f`                                                | Coral-orange                         |
| Secondary accent | `#ff8b23`                                                | Bright orange                        |
| Banner bg        | `#f0eed4` (fallback on mobile), white + bg image desktop | Light yellow-green tint              |
| Section bg       | `#f7f7f7`                                                | Light gray (services area)           |
| Headings color   | `#2f373d`                                                | Dark blue-gray                       |
| Body text color  | `#646464` / `#666666`                                    | Medium gray                          |
| Footer bg        | `#303030`                                                | Dark charcoal                        |
| Body font        | Roboto, sans-serif                                       | 14px base, line-height 1.929         |
| Heading font     | Poppins, sans-serif                                      | Weight 600–800                       |
| Button radius    | `50px` (fully rounded pills)                             | White text on gradient               |
| Green accent     | `#e3f1da`                                                | Light green, service card decoration |
| Border accent    | `#fdcb9e`                                                | Warm tan border on icons             |

## Section Order (from live preview DOM)

1. **Navbar** — Sticky top, logo left, nav links right (Home, About, Blog dropdown, Page dropdown, Contact). Mobile hamburger collapse.
2. **Banner (Hero)** — Full-height (~880px desktop, ~650px mobile). Left-aligned headline "Lead from Front in Business Innovation." + subtext + gradient "Learn More" button + "Intro Video" link with play icon. Animated decorative SVG/icon blobs float around (purely decorative).
3. **About** — Two-column: illustration image right, text left. Headline "We Have 24 Year Experience in consulting" + sub-headline + paragraph + "Read More" gradient button. Decorative animated blobs.
4. **Services** — Gray background (`#f7f7f7`). Left column: intro text + "Load More" button. Two service cards: "Business Opportunity" and "Commercial Approach" — each with icon, title, paragraph, "Learn More" link with arrow.
5. **Testimonials (Reviews)** — "Customer Are Saying" centered section title. Thumbnail avatars on left, main slide with quote icon, testimonial text, reviewer name and title. Carousel/slider.
6. **Portfolio** — Masonry/card-columns layout. One quote card ("Explore Our Best Practice Area") + four project cards each with image, title "Startup Project", short description.
7. **Advisory Service** — Mirror of About section (image left, text right). "We Providing high quality adviser service" headline + sub-headline + paragraph + "Read More" button. Decorative animated blobs.
8. **Blog** — "Update From Blog" centered section. Three blog cards in a row: each with image, category + date, title, comments + likes count.
9. **Footer** — Four columns (Top Products, Quick Links, Features, Resources) + Newsletter column with email input + "Subscribe" gradient button. Light background.
10. **Copyright** — Dark (`#303030`) bar with copyright text.

## Requirements

### Requirement: Navbar

The system SHALL render a sticky top navigation bar with the site name "Bizmark" on the left, navigation links (Home, About, Blog, Page, Contact) on the right, and a hamburger toggle button visible on mobile viewports. Clicking the hamburger toggle SHALL expand the mobile nav menu, and clicking a link SHALL collapse it.

#### Scenario: Navbar content

- **GIVEN** the Bizmark page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Bizmark" and navigation links
- **AND** the navbar SHALL be sticky at the top of the viewport

#### Scenario: Mobile hamburger toggle

- **GIVEN** the Bizmark page is rendered on a mobile viewport
- **WHEN** the user taps the hamburger toggle button
- **THEN** the mobile nav menu SHALL expand with all navigation links
- **AND** tapping a link SHALL collapse the menu

### Requirement: Banner

The system SHALL render a full-width hero section with a level-1 headline containing "Lead from", a "Learn More" gradient button, an "Intro Video" link, and decorative animated blobs. A hero image SHALL be displayed on desktop.

#### Scenario: Hero content

- **GIVEN** the Bizmark page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a level-1 headline containing "Lead from"
- **AND** it SHALL show a "Learn More" button with gradient styling
- **AND** it SHALL show an "Intro Video" link
- **AND** decorative animated blobs SHALL be present

### Requirement: About section

The system SHALL render an about section with a two-column layout (image on one side, text on the other), a headline mentioning "Experience" and "consulting", a paragraph of body text, and a "Read More" gradient button.

#### Scenario: About content

- **GIVEN** the Bizmark page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a headline mentioning "Experience" and "consulting"
- **AND** it SHALL show a "Read More" button
- **AND** it SHALL show an illustration image

### Requirement: Services section

The system SHALL render a services section with a light gray background, a headline "We Provide Best Services", an introductory text block with a "Load More" button, and at least two service cards each with an icon, title, description, and "Learn More" link.

#### Scenario: Services content

- **GIVEN** the Bizmark page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL have a light gray background
- **AND** it SHALL show a headline "We Provide Best Services"
- **AND** it SHALL show at least two service cards with icons, titles, and "Learn More" links

### Requirement: Testimonials

The system SHALL render a testimonials section with a centered headline "Customer Are Saying", thumbnail avatar buttons for navigation, and a main quote display showing testimonial text, reviewer name, and reviewer title. Clicking a thumbnail SHALL switch the displayed testimonial.

#### Scenario: Testimonials content

- **GIVEN** the Bizmark page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a headline "Customer Are Saying"
- **AND** it SHALL show thumbnail avatar buttons
- **AND** clicking a thumbnail SHALL display the corresponding testimonial quote

### Requirement: Portfolio

The system SHALL render a portfolio section with a masonry-style grid containing a quote card with "Explore Our Best Practice Area" and at least four project cards, each with an image, title, and short description.

#### Scenario: Portfolio content

- **GIVEN** the Bizmark page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL show a quote card with "Explore Our Best Practice Area"
- **AND** it SHALL show at least four project cards with images and titles

### Requirement: Advisory service section

The system SHALL render an advisory service section that mirrors the About section layout (image on one side, text on the other), with a headline about "adviser service", body text, and a "Read More" gradient button.

#### Scenario: Advisory content

- **GIVEN** the Bizmark page is rendered
- **WHEN** the advisory service section is displayed
- **THEN** it SHALL show a headline about "adviser service"
- **AND** it SHALL show an illustration image
- **AND** it SHALL show a "Read More" button

### Requirement: Blog section

The system SHALL render a blog section with a centered headline "Update From Blog" and at least three blog post cards, each with an image, category label, date, title, and comment/like counts.

#### Scenario: Blog content

- **GIVEN** the Bizmark page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show a headline "Update From Blog"
- **AND** it SHALL show at least three blog cards with images, categories, dates, titles, and engagement counts

### Requirement: Footer

The system SHALL render a footer with four link columns (Top Products, Quick Links, Features, Resources), a newsletter section with an email input and "Subscribe" button, and a dark copyright bar with a link to componentdock.com.

#### Scenario: Footer content

- **GIVEN** the Bizmark page is rendered
- **WHEN** the footer section is displayed
- **THEN** it SHALL show four link columns
- **AND** it SHALL show a newsletter section with email input and "Subscribe" button

#### Scenario: Copyright bar

- **GIVEN** the Bizmark page is rendered
- **WHEN** the copyright bar is displayed
- **THEN** it SHALL show a dark bar with copyright text
- **AND** it SHALL contain a link to componentdock.com

## Verification Checklist

- [ ] Navbar: sticky, logo + links, mobile hamburger toggle
- [ ] Banner: headline, subtext, gradient CTA button, video link, decorative blobs
- [ ] About: two-column image + text, headline, "Read More" CTA
- [ ] Services: gray bg, intro text, 2 service cards with icons
- [ ] Testimonials: centered headline, thumbnail carousel, quote + reviewer
- [ ] Portfolio: masonry grid, quote card + 4 project cards
- [ ] Advisory Service: mirror about layout (reversed), headline + image + CTA
- [ ] Blog: 3 blog cards with image, category, date, title, engagement
- [ ] Footer: 4 link columns + newsletter with email input
- [ ] Copyright: dark bar with copyright text
- [ ] Design tokens: gradient buttons (#feb47b → #ff7e5f), pill shape (50px radius), Poppins headings, Roboto body
- [ ] Responsive: all sections stack properly at mobile widths
- [ ] No ColorLib references in app code — provenance only in spec + TEMPLATES.md
- [ ] Footer links to componentdock.com
