# Template: Clareo (Photography Portfolio)

## Purpose

Recreation of ColorLib "Imahe" (https://colorlib.com/wp/template/imahe/) as a React 19 + Vite + Tailwind CSS 4 template. Photography portfolio with bold yellow accent, full-screen hero, services grid, about section, gallery, blog, instagram feed, and footer.

## Requirements

### Requirement: Navigation bar with responsive mobile menu

The template SHALL display a fixed navigation bar with logo and menu items, with a hamburger toggle on mobile.

#### Scenario: Desktop navigation

- **WHEN** the page loads on desktop
- **THEN** the navbar shows the logo "Clareo" with camera icon and all menu items (Home, Services, About, Gallery, Blog, Contact)

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger button on mobile
- **THEN** the mobile menu opens with all navigation links visible

#### Scenario: Mobile menu close

- **WHEN** the user clicks a navigation link in the mobile menu
- **THEN** the mobile menu closes

### Requirement: Hero section with background image

The template SHALL display a full-screen hero section with a background image, dark overlay, heading, subtitle, and CTA button.

#### Scenario: Hero content

- **WHEN** the hero section renders
- **THEN** it displays a heading "Classy Rebel Fashion Photoshoot", a subtitle, and a "View Gallery" button linking to the gallery section

### Requirement: Services section with three service cards

The template SHALL display three service cards in a row with icons, titles, and descriptions.

#### Scenario: Services display

- **WHEN** the services section renders
- **THEN** it shows Photography, Image Processing, and Videography cards with icons and descriptions

### Requirement: About section with split layout

The template SHALL display a split layout with an image on the left and text on the right.

#### Scenario: About content

- **WHEN** the about section renders
- **THEN** it displays the heading "We Are Clareo a Photography Studio" and descriptive paragraphs

### Requirement: Gallery section with image grid and hover captions

The template SHALL display a grid of gallery images that show captions on hover.

#### Scenario: Gallery grid

- **WHEN** the gallery section renders
- **THEN** it displays 8 images in a 4-column grid

#### Scenario: Hover caption

- **WHEN** the user hovers over a gallery image
- **THEN** a caption overlay becomes visible

### Requirement: Blog section with post cards

The template SHALL display three blog post cards with images, dates, and titles.

#### Scenario: Blog posts

- **WHEN** the blog section renders
- **THEN** it shows 3 blog posts with titles, dates, and author names

### Requirement: Instagram section with image tiles

The template SHALL display a row of 8 Instagram-style image tiles.

#### Scenario: Instagram feed

- **WHEN** the instagram section renders
- **THEN** it displays 8 image tiles with accessible labels

### Requirement: Footer with Component Dock link

The template SHALL display a footer with four columns and a copyright linking to Component Dock.

#### Scenario: Footer columns

- **WHEN** the footer renders
- **THEN** it shows About, Information, Recent Blog, and Contact Info columns

#### Scenario: Component Dock attribution

- **WHEN** the footer copyright renders
- **THEN** it contains a link to https://www.componentdock.com/ labeled "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/clareo/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/clareo/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar with responsive mobile menu — the navbar shows the logo "Clareo" with camera icon and all menu items (Home, Services, About, Gallery, Blog, Contact)
- [x] Hero section with background image — it displays a heading "Classy Rebel Fashion Photoshoot", a subtitle, and a "View Gallery" button linking to the gallery section
- [ ] Services section with three service cards — it shows Photography, Image Processing, and Videography cards with icons and descriptions
- [x] About section with split layout — it displays the heading "We Are Clareo a Photography Studio" and descriptive paragraphs
- [ ] Gallery section with image grid and hover captions — it displays 8 images in a 4-column grid
- [ ] Blog section with post cards — it shows 3 blog posts with titles, dates, and author names
- [ ] Instagram section with image tiles — it displays 8 image tiles with accessible labels
