# Template: Pixelate (Personal Portfolio / Digital Product Designer)

**Source:** ColorLib "Calvin" — https://colorlib.com/wp/template/calvin/
**Preview:** https://preview.colorlib.com/theme/calvin/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/calvin-free-template.jpg

## Purpose

Pixelate is a personal portfolio template for digital product designers. It showcases a designer's expertise, works, skills, testimonials, and blog posts with a clean, modern aesthetic.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/calvin/ (HTTP 200, 30,844 B, fetched 2026-10-23) and its theme stylesheet `theme/calvin/assets/css/style.css` (91,814 B, sha256 `4ba2afe8e1d1…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ff8553` | 46 declarations — `.browse-btn`, `.boxed-btn:hover` |
| Other chromatic values | `#1f2b7b`, `#415094`, `#4cd3e3` | `#1f2b7b` × 19 (.contact-info .media-body h3 a:hover); `#415094` × 7 (.genric-btn.default); `#4cd3e3` × 7 (.genric-btn.success) |
| Surface | `#ffffff` | 86 declarations — `.boxed-btn:hover`, `a` |
| Ink / dark surface | `#000000` | 13 declarations — `h1`, `h2` |
| Typeface | `"Roboto Condensed", sans-serif` (4 rules — h1)<br>`"DM Sans", sans-serif` (2 rules — body) | `font-family` declarations in the theme sheet |
| Body type | `font-weight: normal; font-size: 16px` | `body{…}` rule |
| Radii | `50%`, `3px`, `8px` | `50%` (#back-top); `3px` (.genric-btn.radius); `8px` (.primary-radio) |

Palette in order of use: `#ffffff` ×86, `#ff8553` ×46, `#f9f9ff` ×27, `#1f2b7b` ×19, `#999999` ×19, `#f0e9ff` ×18.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with navigation and CTA

The template SHALL render a fixed navbar with the site logo, navigation links (Home, Work, Service, Blog, Contact), and a "Let's Talk" CTA button. The navbar SHALL include a mobile hamburger menu toggle.

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads on desktop
- **THEN** the navbar displays the "Pixelate" logo, all five nav links, and the "Let's Talk" CTA button

#### Scenario: Mobile menu toggle works

- **WHEN** the user clicks the mobile menu button
- **THEN** the mobile navigation panel opens with all nav links and the CTA

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and the user clicks a nav link
- **THEN** the mobile menu closes

### Requirement: Hero section with designer intro

The template SHALL render a hero section with a split layout: a designer portrait image on the left and a heading "My name is Alex. Digital Product Designer" with subtitle on the right.

#### Scenario: Hero displays heading and image

- **WHEN** the page loads
- **THEN** the hero section shows the designer heading, subtitle, and portrait image

### Requirement: About info bar

The template SHALL render a horizontal info bar below the hero with three items: "Design For: Web & Mobile", phone number, and email address.

#### Scenario: Info bar displays all contact info

- **WHEN** the page loads
- **THEN** the about info bar shows design specialty, phone, and email

### Requirement: Services section with 4 cards

The template SHALL render a "My Expertise" section with four service cards in a 2×2 grid, each with an icon, title, description, and "Learn more" link.

#### Scenario: All four services render

- **WHEN** the page loads
- **THEN** four service cards are displayed with icons and descriptions

### Requirement: Gallery section with hover overlay

The template SHALL render a "My Works" section with four gallery images. Each image SHALL show a category label overlay on hover. A "More Work" button SHALL be displayed below.

#### Scenario: Gallery images render with hover effect

- **WHEN** the user hovers over a gallery item
- **THEN** a category label overlay appears on that item

### Requirement: About Me with skill bars

The template SHALL render an "About Me" section with descriptive text on the left and three animated skill bars (UI Design 60%, UX 89%, Illustration 95%) on the right.

#### Scenario: Skill bars display correct percentages

- **WHEN** the page loads
- **THEN** three skill bars render with labels and percentage values

### Requirement: Brand carousel

The template SHALL render a horizontal row of six brand/partner logo placeholders with grayscale styling.

#### Scenario: Brand logos render

- **WHEN** the page loads
- **THEN** six brand placeholders are displayed

### Requirement: Testimonials section

The template SHALL render a "Client Testimonial" section with testimonial quotes, author avatars, names, and roles.

#### Scenario: Testimonials display correctly

- **WHEN** the page loads
- **THEN** testimonial quotes and author information are displayed

### Requirement: Blog section with 3 posts

The template SHALL render a "Latest News" section with three blog cards, each containing an image, category tag, date/author line, and post title.

#### Scenario: Blog cards render

- **WHEN** the page loads
- **THEN** three blog cards are displayed with images and metadata

### Requirement: Footer with Component Dock link

The template SHALL render a footer with a CTA section (logo, description, social icons, "Let's Talk" and "Download CV" buttons) and a bottom bar with copyright "Made with Component Dock" linking to https://www.componentdock.com/ and footer navigation links.

#### Scenario: Footer contains Component Dock attribution

- **WHEN** the page loads
- **THEN** the footer shows "Component Dock" as a link to https://www.componentdock.com/

#### Scenario: Footer navigation matches navbar

- **WHEN** the page loads
- **THEN** the footer navigation contains Home, Work, Service, Blog, Contact links

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/pixelate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/pixelate/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar with navigation and CTA — the navbar displays the "Pixelate" logo, all five nav links, and the "Let's Talk" CTA button
- [ ] Hero section with designer intro — the hero section shows the designer heading, subtitle, and portrait image
- [ ] About info bar — the about info bar shows design specialty, phone, and email
- [ ] Services section with 4 cards — four service cards are displayed with icons and descriptions
- [ ] Gallery section with hover overlay — a category label overlay appears on that item
- [ ] About Me with skill bars — three skill bars render with labels and percentage values
- [ ] Brand carousel — six brand placeholders are displayed
- [ ] Testimonials section — testimonial quotes and author information are displayed
- [ ] Blog section with 3 posts — three blog cards are displayed with images and metadata
