# Template: SlideSync (Carousel / Testimonials Component)

- **Design Category**: Carousel / Testimonials Slider
- **Source**: ColorLib `carousel-12` (`https://colorlib.com/wp/template/carousel-12/`)
- **Preview URL**: `https://preview.colorlib.com/theme/carousel-12/`
- **Stack**: React 19, Tailwind CSS 4, Lucide Icons, TypeScript

## Purpose

SlideSync is a fully responsive, modern React 19 component template recreating the ColorLib `carousel-12` template. It features an interactive testimonial/content carousel slider with smooth transitions, navigation controls (arrows and pagination dots), author avatars, rating stars, and a clean card-based layout ideal for client testimonials, product highlights, or feature showcases.

## Design Tokens (Extracted from Reference & Visual Inspection)

- **Primary Brand Color**: `#ff5722` (Deep Orange / Coral Accent)
- **Secondary Accent**: `#333333` (Dark Neutral Text / Backgrounds)
- **Neutral Backgrounds**: `#f8f9fa` (Section Light Background), `#ffffff` (Card Background)
- **Text Colors**: `#212529` (Headings), `#6c757d` (Muted / Subtext)
- **Font Family**: `"Poppins", sans-serif`
- **Border Radius**: `0.5rem` (rounded-lg) for cards, `9999px` (rounded-full) for avatar images and pill buttons
- **Shadows**: Soft elevation shadows (`shadow-md`, `shadow-xl`)

## Sections

1. **Header / Navigation Bar**: Clean sticky header with brand logo, nav links (Home, Features, Testimonials, Pricing, Contact), and a "Get Started" CTA button.
2. **Hero Section**: Engaging hero banner with bold headline, subtitle, primary action button, and a feature highlight badge.
3. **Interactive Carousel Section**: The core component featuring card slides with quotation marks, star ratings, testimonial copy, author name, title/company, and round avatar thumbnails. Includes previous/next navigation arrows and active indicator pagination dots.
4. **Features Grid Section**: 3-column grid highlighting key benefits or features with icons, titles, and descriptions.
5. **Call to Action (CTA) Banner**: High-conversion banner inviting users to get started with an email input and submit button.
6. **Footer**: Clean multi-column footer with brand links, social media icons, copyright, and mandatory Component Dock attribution (`https://www.componentdock.com/`).

## Requirements

### Requirement: Carousel Slider Navigation

Users SHALL be able to browse carousel slides using navigation arrows and pagination dots.

#### Scenario: User clicks next and previous navigation arrows

- **WHEN** the user clicks the "Next" navigation button
- **THEN** the carousel transitions to show the next slide
- **AND** the active pagination dot updates to reflect the current slide

#### Scenario: User clicks a pagination dot

- **WHEN** the user clicks a pagination dot for a specific slide
- **THEN** the carousel instantly displays that slide
- **AND** the corresponding pagination dot becomes active

### Requirement: Component Dock Footer Attribution

The footer SHALL display a link to Component Dock.

#### Scenario: Footer displays Component Dock link

- **WHEN** the footer is rendered
- **THEN** a visible link pointing to `https://www.componentdock.com/` with text containing "Component Dock" is present

### Requirement: Section Composition

The application SHALL compose all required sections.

#### Scenario: All sections are present

- **WHEN** the application renders
- **THEN** the Navbar, Hero, Carousel, Features, Newsletter, and Footer sections are all visible

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/slidesync/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/slidesync/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Carousel Slider Navigation — the carousel transitions to show the next slide
- [ ] Section Composition — the Navbar, Hero, Carousel, Features, Newsletter, and Footer sections are all visible
