# Template: Briefly (Law Firm Template)

> Recreation of ColorLib "Lawful"
> (https://colorlib.com/wp/template/lawful/).

## Purpose

Briefly is a law-firm landing page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Lawful"
template design, built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/lawful/
Preview URL: https://preview.colorlib.com/theme/lawful/

## Reference identity (measured 2026-10-24)

Two catalogue keys claim `https://preview.colorlib.com/theme/lawyer/`, and the
directory serves **Lawyer**, not Lawful: key `catalog-199854` (this prep's post,
`details /wp/template/lawful/`) carries a `url` copied from key `lawyer`
(`details /wp/template/lawyer/`) — a **catalogue data bug**, not a shared page.
The page under it is the Lawyer 2026 rebuild v3.0.0 (`Thoughtful conversations,
clear next steps | Lawyer`, og `lawyer-3.0.0.jpg`, `css/modern.min.css`,
`#f2c64d` gold, Poppins + Playfair Display).

Lawful's own demo is `https://preview.colorlib.com/theme/lawful/` (HTTP 200,
25,104 B, `<title>LAWFUL LAWFIRM</title>`, h1 "We Combine Business with
Finance", Bootstrap 4 + `css/style.css` 80,241 B / sha256 `37013421cbe6...`),
which matches the row thumbnail (`lawful-free-template.jpg`). The token table
below has been re-measured there: the previous table was read off
`theme/lawyer/`, so its gold `#f2c64d` / Poppins values were **Lawyer's**, not
this design's. `apps/briefly` already ships the correct palette
(`#f13d80 -> #f48464` gradient, Raleway + Playfair Display) — only the prep was
wrong.

## Design tokens

<!-- design-tokens-backfill:2026-10-23; re-measured 2026-10-24 on the lawful page -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/lawful/ (HTTP 200, 25,104 B, fetched 2026-10-24) and its theme stylesheet `theme/lawful/css/style.css` (80,241 B, sha256 `37013421cbe6…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Primary gradient | `#f13d80 → #f48464` (90deg) | `.primary-btn:after, .service-area, .contact_form .primary-btn, .single-footer-widget .click-btn { background: linear-gradient(90deg,#f13d80 0%,#f48464 100%) }` (style.css L91-95) |
| Gold button | `#f8b600` | `.genric-btn.primary { color:#fff; background:#f8b600 }`; hover inverts to `#fff` bg + `#f8b600` text/border (L1899-1910) |
| Ink / headings | `#222222` | `h1,h2,h3,h4,h5,h6 { font-family:"Playfair Display",serif; font-weight:700; color:#222222 }` (L46-49) |
| Body text | `#777777` | `body { font-size:14px; font-family:"Raleway",sans-serif; font-weight:400; color:#777777 }` (L39-43) |
| Surface | `#ffffff` | 91 declarations |
| Light section bg | `#f9f9ff` | 16 declarations (`background` on muted panels) |
| Other chromatic | `#4cd3e3` | 11 declarations |
| Typeface | `Raleway, sans-serif` (6 rules — body)<br>`Playfair Display, serif` (2 rules — h1–h6) | `font-family` declarations in the theme sheet |
| Radii | `0px` (14), `3px` (8), `8px` (6), `50%` (6) | `border-radius` census of the theme sheet — square by default, `50%` on circular social/icon chips |

Palette in order of use: `#ffffff` ×91, `#f13d80` ×40, `#222222` ×39, `#f8b600` ×19, `#777777` ×16, `#f9f9ff` ×16, `#4cd3e3` ×11, `#f48464` ×10.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with brand, navigation, CTA, and dark mode toggle

The template SHALL render a sticky top navbar with the "Briefly" brand logo, navigation links (Home, About, Services, Team, Blog, Contact), a "Get Free Quote" CTA button, and a dark-mode toggle button.

#### Scenario: Renders brand and nav links

- **WHEN** the app is rendered
- **THEN** I should see the "Briefly" logo
- **AND** I should see nav links: Home, About, Services, Team, Blog, Contact
- **AND** I should see a "Get Free Quote" CTA button

#### Scenario: Dark mode toggle works

- **WHEN** I click the dark mode toggle button
- **THEN** the document should have the "dark" class
- **AND** when I click the toggle again
- **THEN** the document should not have the "dark" class

### Requirement: Hero section with background image and CTA

The template SHALL render a full-width hero section with a background image, dark overlay, heading "We Combine Business with Finance", subtext, and a gradient CTA button.

#### Scenario: Renders hero content

- **WHEN** the app is rendered
- **THEN** I should see the heading "We Combine Business with Finance"
- **AND** I should see a "Get Free Quote" CTA button

### Requirement: Stats counters section

The template SHALL render a four-column stats section with icons and counters for Qualified Lawyers (596+), Solved Cases (20,650+), Trusted Clients (2.5k), and Achievements (50+).

#### Scenario: Renders all stat counters

- **WHEN** the app is rendered
- **THEN** I should see 596+ Qualified Lawyers
- **AND** I should see 20,650+ Solved Cases
- **AND** I should see 2.5k Trusted Clients
- **AND** I should see 50+ Achievements

### Requirement: About video section with play button and author attribution

The template SHALL render a two-column about section with a video/image placeholder on the left, heading, description, "Learn More" CTA, and author attribution on the right.

#### Scenario: Renders about section with video and author

- **WHEN** the app is rendered
- **THEN** I should see the heading "Get to Know Project Estimate?"
- **AND** I should see a "Learn More" button
- **AND** I should see the play video button
- **AND** I should see author attribution "Marvel Maison"

### Requirement: Success cards section

The template SHALL render four "Road to Success" feature cards in a grid layout, each with an icon, title, and description.

#### Scenario: Renders four success cards

- **WHEN** the app is rendered
- **THEN** I should see four "Road to Success" cards

### Requirement: Services section with three service cards

The template SHALL render a services section with heading "Services Offered By Us" and three service cards, each with an image, title, and description.

#### Scenario: Renders service cards

- **WHEN** the app is rendered
- **THEN** I should see the heading "Services Offered By Us"
- **AND** I should see three service cards

### Requirement: Service detail split section

The template SHALL render a two-column service detail section with heading, description, and author quote on the left, and a 2x2 image grid on the right.

#### Scenario: Renders service detail section

- **WHEN** the app is rendered
- **THEN** I should see the heading and description
- **AND** I should see the author attribution

### Requirement: Team section with three members

The template SHALL render a team section with heading "Meet Our Experienced Team" and three team member cards with photos, names, and roles.

#### Scenario: Renders team members

- **WHEN** the app is rendered
- **THEN** I should see the heading "Meet Our Experienced Team"
- **AND** I should see three team members

### Requirement: CTA banner section

The template SHALL render a full-width dark-overlay CTA banner with heading, description, and "Get Free Estimate" gradient button.

#### Scenario: Renders call-to-action section

- **WHEN** the app is rendered
- **THEN** I should see the heading "Get to Know Project Estimate?"
- **AND** I should see a "Get Free Estimate" button

### Requirement: Blog section with three posts

The template SHALL render a blog section with heading "Latest From Our Blog Posts" and three blog post cards with images, dates, authors, titles, and descriptions.

#### Scenario: Renders blog posts

- **WHEN** the app is rendered
- **THEN** I should see the heading "Latest From Our Blog Posts"
- **AND** I should see three blog post cards

### Requirement: Footer with Component Dock attribution

The template SHALL render a four-column footer with About, Navigation Links, Newsletter form, and Instagram Feed. The copyright bar SHALL link to https://www.componentdock.com/ (branded "Component Dock").

#### Scenario: Renders footer with Component Dock link

- **WHEN** the app is rendered
- **THEN** I should see the "Briefly" brand
- **AND** I should see a link to https://www.componentdock.com/
- **AND** I should see social links
- **AND** I should see a newsletter form
- **AND** I should see an Instagram feed grid

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/briefly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/briefly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with brand, navigation, CTA, and dark mode toggle — I should see the "Briefly" logo
- [x] Hero section with background image and CTA — I should see the heading "We Combine Business with Finance"
- [ ] Stats counters section — I should see 596+ Qualified Lawyers
- [x] About video section with play button and author attribution — I should see the heading "Get to Know Project Estimate?"
- [x] Success cards section — I should see four "Road to Success" cards
- [x] Services section with three service cards — I should see the heading "Services Offered By Us"
- [ ] Service detail split section — I should see the heading and description
- [x] Team section with three members — I should see the heading "Meet Our Experienced Team"
- [x] CTA banner section — I should see the heading "Get to Know Project Estimate?"
- [x] Blog section with three posts — I should see the heading "Latest From Our Blog Posts"

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/lawful/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#f2c64d` — nearest `#f09359` (d=52)
- `#ff5e13` — nearest `#fd7e14` (d=32)
- `#415094` — nearest `#6f42c1` (d=66)
<!-- live-palette-unverified:end -->
