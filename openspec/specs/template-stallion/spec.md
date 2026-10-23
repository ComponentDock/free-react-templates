# Template: Stallion (Gym & Fitness Landing)

## Purpose

A gym/fitness landing page with hero banner, top courses carousel, CTA banner, features, BMI calculator, image gallery, testimonials. It also includes brand logos, and footer CTA. Recreation of ColorLib **Fitness**.

- **Source slug:** `fitness`
- **Preview URL:** `https://preview.colorlib.com/theme/fitness/`
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/fitness-free-template.jpg`

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/fitness/ (HTTP 200, 32,185 B, fetched 2026-10-23) and its theme stylesheet `theme/fitness/css/main.css` (66,862 B, sha256 `3ee635d8a8d0…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#f6214b` | 71 declarations — `b`, `sup` |
| Other chromatic values | `#4cd3e3`, `#38a4ff`, `#f44a40` | `#4cd3e3` × 7 (.genric-btn.success); `#38a4ff` × 6 (.genric-btn.info); `#f44a40` × 6 (.genric-btn.danger) |
| Surface | `#ffffff` | 123 declarations — `.genric-btn.default:hover`, `.text-white` |
| Ink / dark surface | `#222222` | 27 declarations — `h1`, `h2` |
| Typeface | `"Poppins", sans-serif` (3 rules — body)<br>`FontAwesome` (1 rule — .sf-arrows .sf-with-ul:after) | `font-family` declarations in the theme sheet |
| Body type | `color: #777777; font-size: 14px; font-weight: 300; line-height: 1.625em` | `body{…}` rule |
| Radii | `3px`, `8px`, `8.5px` | `3px` (.genric-btn.radius); `8px` (.primary-radio); `8.5px` (.default-switch) |

Palette in order of use: `#ffffff` ×123, `#f6214b` ×71, `#222222` ×27, `#f9f9ff` ×22, `#777777` ×14, `#cccccc` ×8.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Page renders all sections

The Stallion template SHALL render a header with navigation, hero banner, top courses, CTA banner, features, BMI calculator, gallery, testimonials, brands, final CTA, and footer.

#### Scenario: Header and navigation visible

- **WHEN** the Stallion app loads
- **THEN** the header contains a logo, email, phone number, and navigation links (Home, About, Courses, Trainers, Gallery, Contact)

#### Scenario: Hero banner visible

- **WHEN** the Stallion app loads
- **THEN** the hero section displays "Shape your" and "Perfect body" headings with a "Become a Member" button

#### Scenario: Course cards visible

- **WHEN** the Stallion app loads
- **THEN** four course cards are displayed with titles (Target Specific Muscle, Weightlifting, Flex Your Muscle, Cardio Blast) and prices ($275, $200, $225, $180)

#### Scenario: CTA banner visible

- **WHEN** the Stallion app loads
- **THEN** a "Get into shape now" heading and "Book Now" button are visible

#### Scenario: Features visible

- **WHEN** the Stallion app loads
- **THEN** three feature cards are displayed (Smart Security, Unlimited Colors, Endless Support)

#### Scenario: BMI calculator visible

- **WHEN** the Stallion app loads
- **THEN** a BMI calculator form with height and weight inputs and a "Calculate" button is visible

#### Scenario: Gallery visible

- **WHEN** the Stallion app loads
- **THEN** six gallery images are displayed

#### Scenario: Testimonials visible

- **WHEN** the Stallion app loads
- **THEN** three testimonial cards with names, roles, and quotes are displayed

#### Scenario: Brands visible

- **WHEN** the Stallion app loads
- **THEN** five brand placeholders are displayed

#### Scenario: Final CTA visible

- **WHEN** the Stallion app loads
- **THEN** an "It's never late to start" heading and "Become a Member" button are visible

#### Scenario: Footer visible

- **WHEN** the Stallion app loads
- **THEN** the footer contains About Us, Contact Us, Newsletter sections and a link to "https://www.componentdock.com/" labeled "Component Dock"

### Requirement: BMI calculator computes result

The BMI calculator SHALL compute and display the BMI when valid height and weight are submitted.

#### Scenario: Valid BMI calculation

- **WHEN** the user enters height "70" inches and weight "170" lbs
- **AND** clicks "Calculate"
- **THEN** a BMI result of "24.4" is displayed

#### Scenario: Invalid inputs show no result

- **WHEN** the user enters height "0" and weight "0"
- **AND** submits the form
- **THEN** no BMI result is displayed

#### Scenario: Partial invalid inputs show no result

- **WHEN** the user enters height "70" and weight "0"
- **AND** submits the form
- **THEN** no BMI result is displayed

### Requirement: Mobile navigation toggle

The header SHALL support a mobile navigation toggle that shows/hides the mobile menu.

#### Scenario: Toggle mobile menu

- **WHEN** the user clicks the mobile menu button
- **THEN** the mobile navigation menu becomes visible
- **AND** the button label changes to "Close menu"

#### Scenario: Close mobile menu on link click

- **WHEN** the mobile menu is open
- **AND** the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Footer links to Component Dock

The footer SHALL include a link to the Component Dock website.

#### Scenario: Component Dock link present

- **WHEN** the footer renders
- **THEN** a link to "https://www.componentdock.com/" with text "Component Dock" is present

### Requirement: Document title

The app SHALL set the document title on load.

#### Scenario: Title set on mount

- **WHEN** the Stallion app loads
- **THEN** the document title is "Stallion — Gym & Fitness Template"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/stallion/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/stallion/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] BMI calculator computes result — a BMI result of "24.4" is displayed
- [ ] Mobile navigation toggle — the mobile navigation menu becomes visible
- [x] Document title — the document title is "Stallion — Gym & Fitness Template"
