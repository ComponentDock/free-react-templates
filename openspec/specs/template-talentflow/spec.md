---
name: talentflow
description: HR consulting landing page — recreation of ColorLib Humanresources
source: https://colorlib.com/wp/template/humanresources/
preview: https://preview.colorlib.com/theme/humanresources/
design_tokens:
  font: "Work Sans" (Google Fonts)
  primary: "#0389FF" (blue)
  text_body: "#999999"
  text_heading: "#000000"
  bg_light: "#f8f9fa"
  bg_white: "#ffffff"
  button_radius: 0 (square, uppercase, letter-spacing 0.1em)
  counter_text: "#0389FF"
---

# Template: Talentflow (Business)

## Purpose

Talentflow is a professional HR consulting landing page template, recreating the ColorLib "Humanresources" design under a new name. It provides a complete single-page marketing site with navbar, hero, features, about/accordion, stats counters, team, testimonials, blog, and footer sections.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/humanresources/ (HTTP 200, 30,690 B, sha256 `d9181863296b…`, fetched 2026-10-23) and its design stylesheet(s) `style.min.css`, `reveal.min.css`, `mobile-nav.min.css`, `sliders.min.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#0389ff` | 4 declarations — `.custom-pagination .next.active a,.custom-pagination .prev.active a,.custom-pagination li.`, `.templateux-counter .templateux-number` |
| Other chromatic values | `#173651` (3), `#36a1ff` (2), `#1263b3` (2) | secondary hues in the same sheet |
| Surface | `#ffffff` | 42 declarations — `.custom-pagination .next.active a,.custom-pagination .prev.active a,.custom-pagination li.`, `::-moz-selection` |
| Ink / dark surface | `#000000` | 27 declarations — `::-moz-selection`, `::selection` |
| Typeface | `Work Sans` (3 rules — `.kit-mobile-nav__panel`) | `font-family` declarations in the design sheet |
| Radii | `8px`, `50%`, `4px`, `10px` | `8px` (`.btn,.btn.py-3`); `50%` (`.comment-list li .vcard img`); `4px` (`.comment-list li .comment-body .reply`); `10px` (`.templateux-navbar .desktop-submenu`) |
| Gradients | 3 declarations | `.block-thumbnail-1:before,.block-thumbnail-1.show-text:before`, `.templateux-cover:before` |

Palette in order of use: `#ffffff` ×42, `#000000` ×27, `#999999` ×5, `#0389ff` ×4, `#cccccc` ×3, `#173651` ×3, `#b3b3b3` ×2, `#36a1ff` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `theme/humanresources/css/style.min.css?v=3.0.0` — 32,484 B, sha256 `e11f9e371a15…`; `theme/humanresources/kit/reveal.min.css?v=3.0.0` — 5,719 B, sha256 `034383ecd11c…`; `theme/humanresources/kit/mobile-nav.min.css?v=3.0.0` — 3,909 B, sha256 `2189e00916f5…`; `theme/humanresources/kit/sliders.min.css?v=3.0.0` — 2,576 B, sha256 `0f2df79b679b…`.

## Requirements

### Requirement: Navbar with mobile toggle

Users SHALL see a sticky navbar with the "Talentflow" logo and navigation links (Home, About, Services, Team, Blog, Contact). On mobile, a hamburger button SHALL toggle the navigation menu.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays "Talentflow" logo and links for Home, About, Services, Team, Blog, Contact

#### Scenario: Mobile hamburger toggles menu

- **WHEN** the user clicks the hamburger button on mobile
- **THEN** the mobile navigation menu expands and the button label changes to "Close menu"

### Requirement: Hero section with CTA

Users SHALL see a full-width hero section with a background image, headline "We Are Your Partners in Human Resource", a subtext paragraph, a "Get Started" button, and a "Learn More" text link.

#### Scenario: Hero renders headline and buttons

- **WHEN** the hero section is visible
- **THEN** the headline reads "We Are Your Partners in Human Resource" and a "Get Started" button is present

### Requirement: Features section with three cards

Users SHALL see three feature cards (Corporate Collaboration, Strategic Partners, Infinite Posibilities) each with an icon, title, description, and "Learn More" link.

#### Scenario: Three feature cards are displayed

- **WHEN** the features section is visible
- **THEN** three cards are rendered with titles "Corporate Collaboration", "Strategic Partners", and "Infinite Posibilities"

### Requirement: About section with image and accordion

Users SHALL see a two-column about section with an image carousel on the left and a "Why Us?" accordion on the right with four expandable items.

#### Scenario: Accordion expands and collapses

- **WHEN** the user clicks an accordion item title
- **THEN** the item content expands and clicking it again collapses it

### Requirement: Stats counters section

Users SHALL see three statistics: Number of Clients (99,399), Number of Personnel (199), and Years of Experience (24).

#### Scenario: Three stat counters are displayed

- **WHEN** the stats section is visible
- **THEN** values "99,399", "199", and "24" are displayed with their labels

### Requirement: Team section with leadership cards

Users SHALL see "The Leadership" heading and three team member cards (Bob Miller, Jean Smith, David Wilson) with name, role, and bio that reveals on hover.

#### Scenario: Three team members are rendered

- **WHEN** the team section is visible
- **THEN** three cards show names "Bob Miller", "Jean Smith", and "David Wilson" with role "CEO and Co-Founder"

### Requirement: Testimonials section

Users SHALL see a "Happy Customers" heading with a centered blockquote testimonial.

#### Scenario: Testimonial quote is displayed

- **WHEN** the testimonials section is visible
- **THEN** a blockquote with the text "Far far away, behind the word mountains" is displayed

### Requirement: Blog section with post cards

Users SHALL see "Our Blog" heading and four blog post cards in a 2x2 asymmetric layout with title, date, and author.

#### Scenario: Four blog posts are rendered

- **WHEN** the blog section is visible
- **THEN** four cards show titles "When she reached the first", "Duden flows by their place", "Italic Mountains", and "Behind the word mountains"

### Requirement: Footer with Component Dock link

Users SHALL see a footer with About text, Learn More links, Support links, About Us links, social icons (Facebook, Twitter, GitHub), and a copyright line linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is visible
- **THEN** a link to "https://www.componentdock.com/" is present with text "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/talentflow/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/talentflow/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with mobile toggle — the navbar displays "Talentflow" logo and links for Home, About, Services, Team, Blog, Contact
- [x] Hero section with CTA — the headline reads "We Are Your Partners in Human Resource" and a "Get Started" button is present
- [x] Features section with three cards — three cards are rendered with titles "Corporate Collaboration", "Strategic Partners", and "Infinite Posibilities"
- [ ] About section with image and accordion — the item content expands and clicking it again collapses it
- [ ] Stats counters section — values "99,399", "199", and "24" are displayed with their labels
- [x] Team section with leadership cards — three cards show names "Bob Miller", "Jean Smith", and "David Wilson" with role "CEO and Co-Founder"
- [x] Testimonials section — a blockquote with the text "Far far away, behind the word mountains" is displayed
- [x] Blog section with post cards — four cards show titles "When she reached the first", "Duden flows by their place", "Italic Mountains", and "Behind the word mountains"
