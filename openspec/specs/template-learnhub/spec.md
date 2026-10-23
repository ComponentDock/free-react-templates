# Template: Learnhub (Online Education Platform)

Recreation of ColorLib **Etrain** (https://colorlib.com/wp/template/etrain/).

## Purpose

Provide a free React template for online education platforms, featuring course listings, testimonials, stats, and a blog section. Recreates the ColorLib Etrain design with navy + coral-gold accent palette, Poppins/Roboto typography, and responsive mobile-first layout.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/etrain/ (HTTP 200, 43,695 B, fetched 2026-10-23) and its theme stylesheet `theme/etrain/css/style.min.css` (98,896 B, sha256 `4b2d68f0590c…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ff663b` | 47 declarations — `.btn_4`, `.button` |
| Other chromatic values | `#0c2e60`, `#415094`, `#ba4a2b` | `#0c2e60` × 34 (.skip-link); `#415094` × 7 (.genric-btn.default); `#ba4a2b` × 7 (.special_cource .single_special_cource .special_cource_text h4) |
| Surface | `#ffffff` | 49 declarations — `.pswp__kit-caption`, `select:where(.nice-select` |
| Ink / dark surface | `#0c2e60` | 34 declarations — `.skip-link`, `h1` |
| Typeface | `Roboto, sans-serif` (9 rules — body)<br>`Poppins, sans-serif` (4 rules — h1) | `font-family` declarations in the theme sheet |
| Body type | `font-size: 14px` | `body{…}` rule |
| Radii | `3px`, `5px`, `50%` | `3px` (.owl-theme:where(.kit-owl) .owl-nav [class*=owl-]); `5px` (select:where(.nice-select); `50%` (.single-post-area .blog-author img) |

Palette in order of use: `#ffffff` ×49, `#ff663b` ×47, `#707070` ×42, `#0c2e60` ×34, `#f9f9ff` ×25, `#edeff2` ×15.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with navigation and mobile menu

The template SHALL render a sticky top navbar with brand logo, navigation links (Home, About, Courses, Blog, Contact), a Login CTA button, and a responsive hamburger menu for mobile.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on desktop
- **THEN** the navbar shows "Learnhub" brand, all 5 nav links, and a Login button

#### Scenario: Mobile menu toggles open and closed

- **WHEN** the user taps the hamburger icon on mobile
- **THEN** the mobile menu opens showing all nav links and a Login button
- **AND** tapping the close icon hides the menu

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and the user taps a nav link
- **THEN** the mobile menu closes

### Requirement: Hero section with CTAs

The template SHALL render a hero section with a gradient navy background, learner count badge, headline, description, and two call-to-action buttons.

#### Scenario: Hero renders headline and CTAs

- **WHEN** the page loads
- **THEN** the hero shows "Advance Your Career with Expert-Led Courses" heading
- **AND** shows "Browse Courses" and "Start Free Trial" buttons

### Requirement: Features section

The template SHALL render a "Why Learnhub?" section with three feature cards (Flexible Learning, Expert Instructors, Career Support).

#### Scenario: Features render all cards

- **WHEN** the page loads
- **THEN** three feature cards are visible with titles and descriptions

### Requirement: About section

The template SHALL render a split-layout about section with an image and descriptive text with bullet points.

#### Scenario: About renders content

- **WHEN** the page loads
- **THEN** the about section shows "Learn Skills That Matter for Your Career" heading
- **AND** shows two bullet points and a Read More link

### Requirement: Stats section

The template SHALL render a gradient stats bar with four statistics.

#### Scenario: Stats render all values

- **WHEN** the page loads
- **THEN** four stats are visible: 250 Courses, 15,000 Students, 92% Career Advancement, 45 Countries

### Requirement: Courses section

The template SHALL render a "Featured Courses" section with three course cards showing images, categories, prices, titles, descriptions, duration, enrollment counts, instructor info, and star ratings.

#### Scenario: Courses render all cards

- **WHEN** the page loads
- **THEN** three course cards are visible with titles, prices, and instructor names

### Requirement: Platform section

The template SHALL render a split-layout platform section highlighting advanced learning features.

#### Scenario: Platform renders features

- **WHEN** the page loads
- **THEN** the platform section shows "Learn Anywhere" and "Verified Certificates" features

### Requirement: Testimonials section

The template SHALL render a testimonials section with three student success story cards.

#### Scenario: Testimonials render all cards

- **WHEN** the page loads
- **THEN** three testimonial cards are visible with names, roles, and quotes

### Requirement: Blog section

The template SHALL render a blog section with three blog post cards.

#### Scenario: Blog renders all cards

- **WHEN** the page loads
- **THEN** three blog cards are visible with categories, titles, and engagement counts

### Requirement: Footer with Component Dock attribution

The template SHALL render a footer with brand info, newsletter form, contact details, social links, and a "Component Dock" attribution linking to componentdock.com.

#### Scenario: Footer renders all sections

- **WHEN** the page loads
- **THEN** the footer shows brand description, newsletter form, contact info, and social links
- **AND** a "Component Dock" link pointing to https://www.componentdock.com/

#### Scenario: Newsletter form handles submit

- **WHEN** the user types an email and clicks Subscribe
- **THEN** the form does not navigate (preventDefault)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/learnhub/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/learnhub/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with navigation and mobile menu — the navbar shows "Learnhub" brand, all 5 nav links, and a Login button
- [x] Hero section with CTAs — the hero shows "Advance Your Career with Expert-Led Courses" heading
- [ ] Features section — three feature cards are visible with titles and descriptions
- [x] About section — the about section shows "Learn Skills That Matter for Your Career" heading
- [ ] Stats section — four stats are visible: 250 Courses, 15,000 Students, 92% Career Advancement, 45 Countries
- [ ] Courses section — three course cards are visible with titles, prices, and instructor names
- [x] Platform section — the platform section shows "Learn Anywhere" and "Verified Certificates" features
- [ ] Testimonials section — three testimonial cards are visible with names, roles, and quotes
- [ ] Blog section — three blog cards are visible with categories, titles, and engagement counts
