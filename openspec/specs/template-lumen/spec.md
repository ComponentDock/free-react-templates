---
title: Lumen — Creative Agency / Portfolio Template
slug: lumen
colorlib_source: glint
colorlib_url: https://colorlib.com/wp/template/glint/
preview_url: https://preview.colorlib.com/theme/glint/
status: in_progress
---

# Template: Lumen (Creative Agency / Portfolio)

## Purpose

Recreate the ColorLib "Glint" creative agency portfolio template as a React 19 +
Tailwind CSS 4 + TypeScript app. The design features a dark (near-black)
background with green (#39b54a) accent, Montserrat headings, and Lora body
text. Sections: hero, about with stats, services grid, portfolio works,
clients, contact form, and footer.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/glint/ (HTTP 200, 45,900 B, sha256 `f3f5bc0f1c62…`, fetched 2026-10-23) and its design stylesheet(s) `style.min.css`, `photoswipe.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#b3262a` | 3 declarations — `.alert-box--error`, `.js-sample-form [aria-invalid=true]` |
| Other chromatic values | `#ffff00` (1), `#ffd900` (1), `#ffd1d2` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 60 declarations — `.pswp__caption__center`, `.pswp__caption__center h4` |
| Ink / dark surface | `#000000` | 43 declarations — `.kit-form-status.is-sending`, `.pswp__caption__center` |
| Typeface | `montserrat-regular` (14 rules — `blockquote cite`)<br>`montserrat-medium` (9 rules — `.btn,button,input[type=submit],input[type=reset],input[type=button]`) | `font-family` declarations in the design sheet |
| Radii | `50%`, `3px`, `4px`, `1000px` | `50%` (`.home-social i`); `3px` (`.alert-box`); `4px` (`.kit-form-status`); `1000px` (`.btn--pill,button.btn--pill`) |
| Gradients | 2 declarations | `.pswp__caption__center`, `.s-home .shadow-overlay` |

Palette in order of use: `#ffffff` ×60, `#000000` ×43, `#111111` ×4, `#b3262a` ×3, `#f1f1f1` ×2, `#b8b8b8` ×2, `#757575` ×2, `#151515` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `theme/glint/css/style.min.css?v=3.0.2` — 61,732 B, sha256 `21d32b4862ef…`; `theme/glint/vendor/photoswipe/5.4.4/photoswipe.css?v=3.0.2` — 7,423 B, sha256 `b0eaaae0b9de…`.

## Requirements

### Requirement: Navbar renders with logo and navigation links

The template SHALL render a fixed top navbar with the logo "Lumen" and links
to Home, About, Services, Works, Clients, and Contact. On mobile, a hamburger
button SHALL toggle the navigation menu.

#### Scenario: Desktop navbar shows all links

- **WHEN** the page loads on a wide viewport
- **THEN** the navbar displays the "Lumen" logo and links to all six sections

#### Scenario: Mobile hamburger toggles menu

- **WHEN** the user clicks the hamburger button on a narrow viewport
- **THEN** the mobile menu opens with all navigation links visible
- **WHEN** the user clicks a link in the mobile menu
- **THEN** the menu closes

### Requirement: Hero section with headline, subtitle, CTAs, and social links

The hero section SHALL display "Welcome to Lumen" as the headline, a subtitle
describing the agency, two CTA buttons ("Start a Project" and "More About Us"),
social media icon links, and a scroll-down indicator.

#### Scenario: Hero renders headline and CTAs

- **WHEN** the hero section renders
- **THEN** the headline "Welcome to Lumen" is visible
- **AND** both CTA buttons are present and link to the correct sections

### Requirement: About section with heading and stat counters

The about section SHALL display "Hello There" / "We Are Lumen" headings,
a description paragraph, and three stat counters: Awards Received, Cups of
Coffee, and Projects Completed.

#### Scenario: About shows stats

- **WHEN** the about section renders
- **THEN** all three stat counters display their labels and values

### Requirement: Services section with six service cards

The services section SHALL display six service items: Brand Identity,
Illustration, Marketing, Web Design, Packaging Design, and Web Development.
Each card SHALL have an icon, title, and description.

#### Scenario: All six services render

- **WHEN** the services section renders
- **THEN** all six service titles are visible with their descriptions

### Requirement: Works section with portfolio grid

The works section SHALL display six portfolio items in a responsive grid.
Each item SHALL show an image with a hover overlay displaying the project title.

#### Scenario: Works grid displays all items

- **WHEN** the works section renders
- **THEN** six portfolio images with correct alt text are visible

### Requirement: Clients section with client name grid

The clients section SHALL display a grid of client names with the heading
"Our Clients" and a subtitle about honoring partnerships.

#### Scenario: All client names render

- **WHEN** the clients section renders
- **THEN** all six client names are visible

### Requirement: Contact section with form and contact info

The contact section SHALL display a form with name, email, subject, and
message fields, plus a contact info sidebar showing address, email, and
phone. The form SHALL validate required fields before submission.

#### Scenario: Contact form submits on valid input

- **WHEN** the user fills in name, email, and message and clicks Send Message
- **THEN** a success message is displayed

#### Scenario: Contact form blocks on missing fields

- **WHEN** the user clicks Send Message without filling required fields
- **THEN** no success message is shown

### Requirement: Footer with Component Dock link and back-to-top

The footer SHALL display the logo, navigation links, copyright, a "Component
Dock" attribution linking to https://www.componentdock.com/, and a back-to-top
button.

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present
- **AND** a back-to-top link is present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/lumen/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/lumen/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar renders with logo and navigation links — the navbar displays the "Lumen" logo and links to all six sections
- [x] Hero section with headline, subtitle, CTAs, and social links — the headline "Welcome to Lumen" is visible
- [ ] About section with heading and stat counters — all three stat counters display their labels and values
- [ ] Services section with six service cards — all six service titles are visible with their descriptions
- [ ] Works section with portfolio grid — six portfolio images with correct alt text are visible
- [ ] Clients section with client name grid — all six client names are visible
- [ ] Contact section with form and contact info — a success message is displayed
