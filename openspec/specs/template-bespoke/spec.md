# Template: Bespoke (Fashion Boutique Landing Page)

Recreation of ColorLib "Fashion" (https://colorlib.com/wp/template/fashion/)

**Reference identity (measured 2026-10-24).** The demo this app was built from is
`https://preview.colorlib.com/theme/fashion/` — HTTP **200**, **26,584 B**, theme
sheet `css/style.css` **29,430 B**, sha256 `75499322b02a2b2d…` (`#ff6363` ×30,
`#000000` ×17, `#efefef` ×5; `"Lato", sans-serif` body + `"Playfair Display",
serif` headings; `border-radius: 30px` pill). Two ColorLib entries claim that one
directory: `/wp/template/fashion/` (whose own featured image is a **bold
green→yellow gradient page that has no reachable demo** — every prefix and the
archive 404, see `template-drapery` §Reference identity) and `/wp/template/fashion-2/`
(the 2026 rebuild, whose featured image is this coral page). The directory serves
the rebuild, so the sheet above — not the bold thumbnail — is this template's
reference. The thin sibling prep `template-silhouette` describes the same page, so
this design is published twice on purpose.

## Purpose

Provide a free, production-ready fashion boutique landing page template with a hero carousel, product collections, about section, testimonials, blog grid, and a full footer. Built with React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Brand color**: #FF6363 (coral/salmon red)
- **Primary font**: "Lato", sans-serif (body)
- **Heading font**: "Playfair Display", serif (headings)
- **Background**: white (#ffffff), light gray (#f8f9fa) for testimonials
- **Text**: black (#000000), gray for body copy
- **Buttons**: border-radius 30px (pill shape), coral #FF6363 background, #FF7777 hover
- **Footer**: dark background (#000000), white text

## Requirements

### Requirement: Navbar with responsive mobile menu

The template SHALL display a navbar with the "Bespoke" logo and navigation links (Home, Collections, About, Blog, Contact). On mobile, a burger menu toggles the nav links open/closed.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads
- **THEN** the logo "Bespoke" is visible
- **AND** nav links "Home", "Collections", "About", "Blog", "Contact" are visible

#### Scenario: Mobile menu opens and closes

- **WHEN** the user clicks the mobile menu button
- **THEN** the menu expands showing all nav links
- **AND** clicking a link closes the menu

### Requirement: Hero carousel with rotating headings

The hero section SHALL display a split layout with a fashion image on the left and a carousel on the right. The carousel rotates through three headings: "Bespoke Presents", "Creative Design", "Modern Fashion" with prev/next navigation.

#### Scenario: Initial slide displays correctly

- **WHEN** the page loads
- **THEN** the heading "Bespoke Presents" is visible
- **AND** a "Learn more" link is visible

#### Scenario: Next slide advances heading

- **WHEN** the user clicks the next arrow
- **THEN** the heading changes to "Creative Design"

#### Scenario: Previous slide wraps from first

- **WHEN** the user clicks the previous arrow from the first slide
- **THEN** the heading changes to "Modern Fashion" (last slide)

#### Scenario: Next wraps to first from last

- **WHEN** the user clicks next from the last slide
- **THEN** the heading returns to "Bespoke Presents"

### Requirement: Product collections carousel

The collections section SHALL display four products (Minimal $29, Collecta $21, Nine8 $38, Hut $49) with prev/next navigation.

#### Scenario: All products render with prices

- **WHEN** the page loads
- **THEN** the "Collections" heading is visible
- **AND** products "Minimal", "Collecta", "Nine8", "Hut" are visible with their prices

#### Scenario: Product carousel navigation

- **WHEN** the user clicks "Next" or "Prev"
- **THEN** the product display updates

### Requirement: About section with stacked images

The about section SHALL display "A Fashion Boutique" heading with stacked images and a "Learn more" link.

#### Scenario: About section renders

- **WHEN** the page loads
- **THEN** "A Fashion Boutique" heading is visible
- **AND** a "Learn more" link is visible

### Requirement: Testimonials section

The testimonials section SHALL display three customer testimonials with avatars, names, and quotes.

#### Scenario: Testimonials render

- **WHEN** the page loads
- **THEN** "Testimonials" heading is visible
- **AND** "Adam Aderson", "Lukas Devlin", "Kayla Bryant" are visible

### Requirement: Blog posts grid

The blog section SHALL display four blog cards in a responsive grid with dates, titles, and excerpts.

#### Scenario: Blog posts render

- **WHEN** the page loads
- **THEN** "Blog Posts" heading is visible
- **AND** four blog cards are rendered

### Requirement: Footer with Component Dock link

The footer SHALL display about text, social icons, navigation columns, and a copyright line linking to Component Dock.

#### Scenario: Footer renders with Component Dock

- **WHEN** the page loads
- **THEN** "Component Dock" link is visible in the footer
- **AND** social icons are visible
- **AND** navigation links are visible

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
`apps/bespoke/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/bespoke/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with responsive mobile menu — the logo "Bespoke" is visible
- [ ] Hero carousel with rotating headings — the heading "Bespoke Presents" is visible
- [x] Product collections carousel — the "Collections" heading is visible
- [ ] About section with stacked images — "A Fashion Boutique" heading is visible
- [x] Testimonials section — "Testimonials" heading is visible
- [x] Blog posts grid — "Blog Posts" heading is visible
