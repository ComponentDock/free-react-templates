# Template: Pediment (Architecture / Interior Design)

## Purpose

Recreation of ColorLib's **Staging** template
(`https://colorlib.com/wp/template/staging/`).
Live preview: `https://preview.colorlib.com/theme/staging/`.
Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/staging-free-template.jpg`.

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript (strict).

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/staging/ (HTTP 200, 42,584 B, fetched 2026-10-23) and its theme stylesheet `theme/staging/css/style.css` (48,874 B, sha256 `531e38baf07e…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#dfa667` | 24 declarations — `.site-btn`, `.section-title span` |
| Surface | `#ffffff` | 34 declarations — `.primary-btn`, `a:hover` |
| Ink / dark surface | `#111111` | 39 declarations — `h1`, `h2` |
| Typeface | `"Poppins", sans-serif` (13 rules — html)<br>`"Aldrich", sans-serif` (6 rules — h1) | `font-family` declarations in the theme sheet |
| Radii | `4px`, `50%`, `0 0 0 4px` | `4px` (.primary-btn:hover:before); `50%` (.testimonial__carousel:after); `0 0 0 4px` (.primary-btn:before) |

Palette in order of use: `#b7b7b7` ×59, `#111111` ×39, `#ffffff` ×34, `#dfa667` ×24, `#707070` ×7, `#353535` ×3.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar renders logo, nav links, and phone number

The navbar SHALL display the template logo, navigation links (Home, Projects, About, Blog, Contact), and a phone number.

#### Scenario: Desktop navbar content

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the logo "Pediment", all navigation links, and the phone number "+01 123 456 789"

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu opens with all links visible

### Requirement: Hero section shows heading and CTA buttons

The hero section SHALL display a heading, primary CTA button, secondary CTA button, and social media links.

#### Scenario: Hero content

- **WHEN** the hero section renders
- **THEN** it displays the heading "Quality is not only our standard.", a "See Project" button linking to #projects, and a "Discover more" button linking to #about

### Requirement: About section shows heading and description

The about section SHALL display a section label, heading, description paragraphs, and a CTA button.

#### Scenario: About content

- **WHEN** the about section renders
- **THEN** it displays the label "who are we", the heading "We propose and discuss design rules", description text, and a "Learn More" button

### Requirement: Projects section shows project cards

The projects section SHALL display a heading and 4 project cards with category, title, and image.

#### Scenario: Projects grid

- **WHEN** the projects section renders
- **THEN** it displays 4 project cards with titles and category labels

### Requirement: Services section shows service cards and counter stats

The services section SHALL display 4 service cards with icons, titles, descriptions, and counter statistics.

#### Scenario: Services and stats

- **WHEN** the services section renders
- **THEN** it displays 4 service cards (Interior Design, Office Design, Home Design, Design drawing) and 4 counter stats (85, 127, 36, 74)

### Requirement: Testimonials section shows client quotes and avatars

The testimonials section SHALL display client quotes with star ratings, names, roles, and avatar images.

#### Scenario: Testimonials content

- **WHEN** the testimonials section renders
- **THEN** it displays 3 testimonial quotes with client names and roles

### Requirement: Team section shows team members

The team section SHALL display team member cards with background images, names, roles, and social links.

#### Scenario: Team members

- **WHEN** the team section renders
- **THEN** it displays 3 team members with names, roles, and social media links

### Requirement: CTA section shows heading and button

The call-to-action section SHALL display a heading and a contact button.

#### Scenario: CTA content

- **WHEN** the CTA section renders
- **THEN** it displays the heading and a "Contact Us" button

### Requirement: Blog section shows blog cards

The blog section SHALL display blog post cards with category, title, image, and read more link.

#### Scenario: Blog posts

- **WHEN** the blog section renders
- **THEN** it displays 3 blog cards with categories and titles

### Requirement: Footer renders with Component Dock link

The footer SHALL display a newsletter form, Company and Services link columns, Get In Touch information, and a copyright notice with a Component Dock link.

#### Scenario: Footer content

- **WHEN** the footer renders
- **THEN** it displays the newsletter heading "Ready To Work With Us?", Company links, Services links, Get In Touch info, and a "Component Dock" link pointing to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/pediment/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/pediment/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar renders logo, nav links, and phone number — the navbar displays the logo "Pediment", all navigation links, and the phone number "+01 123 456 789"
- [ ] Hero section shows heading and CTA buttons — it displays the heading "Quality is not only our standard.", a "See Project" button linking to #projects, and a "Discover more" button linking to #about
- [x] About section shows heading and description — it displays the label "who are we", the heading "We propose and discuss design rules", description text, and a "Learn More" button
- [ ] Projects section shows project cards — it displays 4 project cards with titles and category labels
- [ ] Services section shows service cards and counter stats — it displays 4 service cards (Interior Design, Office Design, Home Design, Design drawing) and 4 counter stats (85, 127, 36, 74)
- [ ] Testimonials section shows client quotes and avatars — it displays 3 testimonial quotes with client names and roles
- [ ] Team section shows team members — it displays 3 team members with names, roles, and social media links
- [x] CTA section shows heading and button — it displays the heading and a "Contact Us" button
- [ ] Blog section shows blog cards — it displays 3 blog cards with categories and titles
