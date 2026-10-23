# Template: Loaf (Bakery Template Spec)

## Purpose

Loaf is a business landing page with a navbar, hero, about band, categories, video, testimonials, blog and footer. It recreates the ColorLib **Bakery** design (https://colorlib.com/wp/template/bakery/, preview: https://preview.colorlib.com/theme/bakery/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Provenance

- **Source:** ColorLib "Bakery" — https://colorlib.com/wp/template/bakery/
- **Preview:** https://preview.colorlib.com/theme/bakery/
- **Screenshot:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/bakery-free-template.jpg)

## Design Tokens (extracted from preview CSS)

| Token         | Value     | Usage                                    |
| ------------- | --------- | ---------------------------------------- |
| Brand color   | `#d1ab7f` | Buttons, accents, borders, active states |
| Body text     | `#777777` | Paragraphs, secondary text               |
| Heading text  | `#222222` | h1–h6, strong elements                   |
| Surface bg    | `#f9f9ff` | Alternating section backgrounds          |
| Navy bg       | `#04091e` | Footer background, hero overlay base     |
| Font family   | Poppins   | All text (300–700 weights)               |
| Button radius | 25px      | Primary CTA buttons                      |

## Sections (in order)

1. **Navbar** — Fixed white navbar with logo "Loaf" (left border accent #d1ab7f). Links: Home, About, Category, Video, Review, Blog, Contact. Mobile hamburger toggle.

2. **Hero** — Full-width section with background image and dark overlay (rgba(4,9,30,0.5)). Centered white text: H1 "Whenever we bake, bake with our heart", subtitle "Love with baking items", description paragraph, "Check Our Menu" CTA button (rounded, brand color).

3. **About** — Two-column layout on white background. Left: heading "Brand new app to blow your mind", sub-heading, description, "Get Started Now" button. Right: image with rounded corner accent.

4. **Categories** — Three-column grid on light surface (#f9f9ff). Each item: circular food image, h4 title (Pizza, Bread, Burgers), short description. "View Full Menu" button centered.

5. **Video** — Two-column layout. Left: heading, description, "Get Started Now" button (dark #222 bg). Right: background image with dark overlay and circular play button icon.

6. **Testimonials** — Full-width section with dark background image + overlay. "Enjoy our Client's Review" heading. Three testimonial cards: circular avatar, name, 5-star rating, review paragraph.

7. **Blog** — Three-column grid on white. Each card: image, uppercase title, author/date metadata, excerpt text.

8. **Footer** — Dark navy (#04091e) background. Three columns: "About Us" with description, "Newsletter" with email input + button, "Follow Us" with social icons. Bottom bar: copyright text + "More templates at Component Dock" link to https://www.componentdock.com/

## Requirements

### Gherkin Requirements

Feature: Loaf bakery template

#### Scenario: Navbar displays brand and navigation

- **GIVEN** the page loads
- **THEN** the navbar shows "Loaf" as the brand
- **AND** the navbar has links: Home, About, Category, Video, Review, Blog, Contact

#### Scenario: Hero section renders

- **GIVEN** the page loads
- **THEN** the hero shows heading "Whenever we bake, bake with our heart"
- **AND** the hero shows subtitle "Love with baking items"
- **AND** the hero shows a "Check Our Menu" button

#### Scenario: About section renders

- **GIVEN** the page loads
- **THEN** the about section shows heading "Brand new app to blow your mind"
- **AND** the about section shows a "Get Started Now" button

#### Scenario: Categories section shows food items

- **GIVEN** the page loads
- **THEN** the categories section shows three items
- **AND** each category item has a title (Pizza, Bread, or Burgers)
- **AND** the section shows a "View Full Menu" button

#### Scenario: Video section renders

- **GIVEN** the page loads
- **THEN** the video section shows a heading
- **AND** the video section shows a "Get Started Now" button

#### Scenario: Testimonials section renders

- **GIVEN** the page loads
- **THEN** the testimonials section shows heading "Enjoy our Client's Review"
- **AND** there are three testimonial cards with names and review text

#### Scenario: Blog section renders

- **GIVEN** the page loads
- **THEN** the blog section shows heading "Latest posts from our Blog"
- **AND** there are three blog cards with titles

#### Scenario: Footer renders with Component Dock link

- **GIVEN** the page loads
- **THEN** the footer shows "About Us" heading
- **AND** the footer shows a newsletter section
- **AND** the footer links to https://www.componentdock.com/
- **AND** the footer text mentions "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/loaf/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/loaf/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Notes

- All images use picsum.photos with seeded URLs (no copied assets)
- Social icons are inline SVGs (lucide-react brand icons removed)
- Font loaded via Google Fonts <link> in index.html
- Single-page layout (all sections in App.tsx)

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
