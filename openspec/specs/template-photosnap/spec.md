# Template: Photosnap (Personal)

> Recreation of ColorLib "Louie" (https://colorlib.com/wp/template/louie/)
> Preview: https://preview.colorlib.com/theme/louie/

## Purpose

Photosnap is a photographer portfolio template for creative professionals. It features a sidebar navigation layout with a dark aesthetic, a hero section with large typography and a signature element, an Instagram-style photo grid gallery, and a dark footer with recent photos, archives, and contact information. The template uses a clean, editorial design with Poppins and Montserrat fonts, a cyan/teal brand color, and elegant typography including a cursive signature font.

## Design Tokens

Extracted from the ColorLib Louie preview CSS (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#78d5ef` | Cyan/teal — links, active states, accents |
| Brand accent | `#c4ac7d` | Gold — secondary accent, signature hover |
| Dark background | `#242423` | Footer background — near-black |
| Sidebar bg | implied dark | Left sidebar navigation area |
| Text primary | `#212529` | Dark headings and body text |
| Text secondary | `#6c757d` | Gray — captions, secondary text |
| White | `#FFFFFF` | Light sections, card backgrounds |
| Light gray | `#f8f9fa` | Subtle backgrounds |
| Error/loader | `#F96D00` | Orange — loader spinner accent |
| Font body | `"Poppins", sans-serif` | Body text, headings |
| Font display | `"Montserrat", sans-serif` | Display text, large headings |
| Font signature | `"Herr Von Muellerhoff", cursive` | Signature element |
| Button radius | Bootstrap defaults | Rounded buttons |
| Avatar radius | `50%` | Circular profile images |
| Surface (measured) | `#ccb78f` | paints it ×14 — `background` on `.ftco-bread`; style.css (71,039 B, sha256 116b552fc644) · <https://preview.colorlib.com/theme/louie/> |

### Buttons

- Primary buttons: `#78d5ef` background, dark text, Bootstrap rounded corners
- Hover: darker cyan `#56caeb`

### Section Backgrounds

- Sidebar: dark (implied by layout, no explicit bg in CSS — dark aside)
- Hero: full-width with background image
- Instagram grid: white/light background
- Footer: `#242423` dark near-black

<!-- role-rule-tokens: louie/typeface -->
**Role rule (measured 2026-10-25):** 2 rule(s) own typeface; strongest `body{font-family:"Montserrat", Arial, s}` — the design declares `Montserrat, Work Sans`; this prep states `Poppins`, which no rule that owns the body typeface declares. The sibling prep `photomuse` states the measured value.
<!-- /role-rule-tokens -->

## Requirements

### Requirement: Sidebar Navigation

The template SHALL render a fixed left sidebar with a profile image, name "Louie Smith" (replaced with "Photosnap"), navigation links (Home, Collection, About Me, My Services, Blog, Contact), a newsletter signup form, and social links (Twitter, Facebook, Instagram).

#### Scenario: Sidebar content visible

- **WHEN** the page loads
- **THEN** the sidebar displays the brand name and profile image
- **THEN** all 6 navigation links are visible
- **THEN** a newsletter email input and submit are visible
- **THEN** social media icons are visible

#### Scenario: Mobile sidebar toggle

- **WHEN** the user clicks the hamburger menu on mobile
- **THEN** the sidebar slides in from the left
- **WHEN** the user clicks a navigation link
- **THEN** the sidebar closes

### Requirement: Hero Section

The template SHALL render a full-width hero section with a large background image, the name "Louie Smith" (replaced with "Photosnap") as a large faded watermark, a headline "A Photographer. I Capture Life", a descriptive paragraph, a cursive signature element, and social media icons.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** a large faded watermark text is displayed behind the content
- **THEN** the headline "A Photographer. I Capture Life" is visible
- **THEN** a descriptive paragraph about the photographer is shown
- **THEN** a cursive signature is displayed
- **THEN** Twitter, Facebook, and Instagram icons are visible

#### Scenario: Hero layout

- **WHEN** the hero renders on desktop
- **THEN** the content is centered over the full-width background image

### Requirement: Instagram Gallery Section

The template SHALL render a gallery section titled "Follow me on Instagram" with a row of 5 equal-width photo thumbnails, each with an Instagram icon overlay on hover.

#### Scenario: Gallery grid

- **WHEN** the user scrolls to the gallery section
- **THEN** the heading "Follow me on Instagram" is displayed
- **THEN** 5 photo thumbnails are shown in a single row
- **THEN** each photo has an Instagram icon overlay on hover

#### Scenario: Photo lightbox

- **WHEN** the user clicks a photo
- **THEN** a lightbox modal opens showing the full image

### Requirement: Footer

The template SHALL render a dark footer with three columns: Recent Photos (6 thumbnail grid), Archives (monthly list), and Have a Questions? (address, phone, email), plus a copyright line.

#### Scenario: Footer content

- **WHEN** the user scrolls to the footer
- **THEN** the "Recent Photos" section shows 6 photo thumbnails
- **THEN** the "Archives" section lists monthly entries with counts
- **THEN** the "Have a Questions?" section shows address, phone, and email
- **THEN** a copyright line with Component Dock attribution is visible

### Requirement: Page composition

The template SHALL compose all sections in a single page with a sidebar landmark and a main content landmark, with a document title.

#### Scenario: Full page render

- **WHEN** the Photosnap app is rendered
- **THEN** the page SHALL compose the Sidebar in the complementary landmark, the hero in the banner landmark, the gallery in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Photosnap — Photographer Portfolio"

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
`apps/photosnap/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/photosnap/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Sidebar Navigation — the sidebar displays the brand name and profile image
- [ ] Hero Section — a large faded watermark text is displayed behind the content
- [x] Instagram Gallery Section — the heading "Follow me on Instagram" is displayed
- [ ] Page composition — the page SHALL compose the Sidebar in the complementary landmark, the hero in the banner landmark, the gallery in the main landmark, and the Footer in the contentinfo landmark
