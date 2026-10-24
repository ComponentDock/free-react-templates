# Template: Batter (Creative Digital Agency Landing Page)

## Purpose

Recreation of ColorLib "Go Crepe" (https://colorlib.com/wp/template/go-crepe/) as a React 19 + Tailwind CSS 4 + TypeScript template. Batter is a creative digital agency landing page with a hero banner, feature grid, about story, portfolio works, newsletter signup, and footer with contact widgets.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 · live re-read 2026-10-24s -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/go-crepe/ (HTTP 200, 18,588 B) and its theme
stylesheet `theme/go-crepe/css/main.css` (37,031 B, sha256 `aed66c98895a4c2b…`).
CSS values are canonical over any screenshot sample. The screenshot
(`go-crepe-creative-digital-agency-website-template.jpg`) agrees: white nav over
a purple→teal gradient banner.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| **Section gradient — the design's lead surface** | `linear-gradient(135deg, #49e3ce 0%, #9920ed 100%)` | 12 declarations, one shared group: `.banner-area`, `.story-area`, `.story-area-2`, `.footer-widget-area`, `body:after`, `.primary-btn:after`, `.single-feature .icon:after`, `.single-widget .icon:after`, `.footer-social a:after` |
| Gradient stops | `#49e3ce` teal × 8 · `#9920ed` purple × 4 | `.banner-area` paints the gradient; `#49e3ce` also paints `nav a:hover`; `.single-feature .icon span` uses `linear-gradient(0deg, #9920ed, #49e3ce)` |
| Button brand | `#9820ec` | 18 declarations — `.genric-btn.primary`, `.genric-btn.primary:hover`, `.genric-btn.primary-border` |
| Deep-indigo ink accent | `#3c408f` | 3 declarations — `b, i, sup, sub, u, del`; `.story-area .primary-btn span` |
| Other chromatic values | `#56e4d2`, `#38a4ff`, `#f4e700`, `#f44a40` | `#56e4d2` × 7 (.genric-btn.success); `#38a4ff` × 6 (.genric-btn.info); `#f4e700` × 6 (.genric-btn.warning); `#f44a40` × 6 (.genric-btn.danger) |
| Surface | `#ffffff` | 60 declarations — `.text-white`, `.button-area` |
| Secondary surface | `#f9f9ff` | 29 declarations — `.genric-btn.default` |
| Ink / dark surface | `#222222` | 13 declarations — `h1`…`h6` |
| Typeface | `"Poppins", sans-serif` (3 rules — body) | `font-family` declaration in the theme sheet |
| Body type | `color: #777777; font-size: 14px; font-weight: 300; line-height: 1.5em` | `body{…}` rule |
| Radii | `20px` (buttons), `3px` (cards/inputs), `8px` (radio), `50%` (dots) | `.primary-btn` `border-radius: 20px`; `.genric-btn.radius` `3px`; `.primary-radio` `8px`; `.unordered-list li:before` `50%` |

Palette in order of use: `#ffffff` ×60, `#f9f9ff` ×29, `#9820ec` ×18, `#222222`
×13, `#49e3ce` ×8, `#777777` ×7, `#56e4d2` ×7, `#38a4ff` ×6, `#f4e700` ×6,
`#f44a40` ×6, `#9920ed` ×4, `#3c408f` ×3.

**Prep correction (2026-10-24s).** The first backfill recorded only the button
brand and mis-stated its count as 17; it omitted the two colours the design is
actually built from — the teal→purple **section gradient** and the indigo ink
accent. Both rows above are measured from the same sheet, not copied from the
app.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with navigation and mobile toggle

The template SHALL render a sticky navbar with logo, navigation links (Home, About, Works, Contact), and a hamburger menu toggle on mobile.

#### Scenario: Desktop navigation

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the "Batter" logo and all four navigation links

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger button on mobile
- **THEN** the mobile menu expands showing all navigation links
- **AND** the button icon changes to a close icon

### Requirement: Hero section with CTA

The template SHALL render a full-width hero section with a dark gradient background, heading text, subtext, and an orange CTA button linking to the contact section.

#### Scenario: Hero content

- **WHEN** the hero section is visible
- **THEN** it displays the heading "Instead of eating, you should feel the garnishing"
- **AND** it shows a "Get Started" CTA button linking to #contact

### Requirement: Features grid with three cards

The template SHALL render a 3-column features section with three feature cards, each containing an icon, title, and description.

#### Scenario: Feature cards display

- **WHEN** the features section is visible
- **THEN** three cards are displayed: "Stunning Visuals", "Clean Code", and "Punctuality"
- **AND** each card has a descriptive paragraph

### Requirement: Story section with dark background

The template SHALL render a dark-background story section with a title on the left and a white content card on the right containing a heading, paragraph, and CTA button.

#### Scenario: Story content

- **WHEN** the story section is visible
- **THEN** it displays "Our Untold Story" heading
- **AND** a white card with "From the part of beginning" heading and a CTA button

### Requirement: Portfolio works grid

The template SHALL render a portfolio grid with six work items, each showing a placeholder image, title, and description.

#### Scenario: Works display

- **WHEN** the works section is visible
- **THEN** six portfolio items are displayed in a responsive grid
- **AND** each item has an image, title, and description

### Requirement: Newsletter signup form

The template SHALL render a newsletter section with a heading, email input field, and submit button.

#### Scenario: Newsletter form

- **WHEN** the newsletter section is visible
- **THEN** it displays "Subscribe for our Newsletter" heading
- **AND** an email input with placeholder "Email address"
- **AND** a "Get Started" submit button

### Requirement: Footer widgets with contact info

The template SHALL render a dark-background footer widget section with three contact info blocks: address, email, and phone.

#### Scenario: Contact widgets

- **WHEN** the footer widgets section is visible
- **THEN** three blocks are displayed: Address, Email Address, and Phone Number
- **AND** each block has an icon and contact details

### Requirement: Footer with Component Dock link

The template SHALL render a footer with the logo, copyright text linking to Component Dock, and social media icons.

#### Scenario: Footer content

- **WHEN** the footer is visible
- **THEN** it displays the "Batter" logo
- **AND** copyright text with a link to https://www.componentdock.com/
- **AND** social media icon links (Facebook, Twitter, Dribbble, Behance)

### Requirement: App integration renders all sections

The template SHALL render all sections in the correct order: Navbar, Hero, Features, Story, Works, Newsletter, FooterWidgets, Footer.

#### Scenario: Full page render

- **WHEN** the App component mounts
- **THEN** all eight sections are rendered in order
- **AND** no console errors occur

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/batter/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/batter/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with navigation and mobile toggle — the navbar displays the "Batter" logo and all four navigation links
- [ ] Hero section with CTA — it displays the heading "Instead of eating, you should feel the garnishing"
- [x] Features grid with three cards — three cards are displayed: "Stunning Visuals", "Clean Code", and "Punctuality"
- [x] Story section with dark background — it displays "Our Untold Story" heading
- [ ] Portfolio works grid — six portfolio items are displayed in a responsive grid
- [x] Newsletter signup form — it displays "Subscribe for our Newsletter" heading
- [ ] Footer widgets with contact info — three blocks are displayed: Address, Email Address, and Phone Number
- [ ] App integration renders all sections — all eight sections are rendered in order
