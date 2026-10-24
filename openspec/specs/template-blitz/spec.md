# Template: Blitz (Business)

Recreation of ColorLib "Rango" (https://colorlib.com/wp/template/rango/), preview
`https://preview.colorlib.com/theme/rango/`, rebuilt from scratch on
Vite + React 19 + Tailwind CSS 4 + TypeScript (no assets copied).

## Purpose

Blitz is a creative agency landing page template featuring a fixed navbar, hero slider section, icon boxes, about/features section with vertical content blocks, services carousel, features grid, call-to-action banner, text line section, newsletter form, and multi-column footer.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 — repaired 2026-10-23 (the first capture read a plugin sheet, not the design system) -->
Measured from the live preview on 2026-10-23, not sampled off the screenshot:

- `https://preview.colorlib.com/theme/rango/` — HTTP 200, 29,985 B,
  sha256 `04e954caed66…`.
- design sheet `styles/main_styles.css` — HTTP 200, 26,362 B,
  sha256 `02645bf23652…` (232 rules, 89 hex-colour declarations, 28 distinct).
- breakpoint sheet `styles/responsive.css` — HTTP 200, 7,780 B,
  sha256 `44ec82494b49…` (109 rules, 5 colour declarations).
- **Correction:** the previous capture read `plugins/icon-font/styles.css`
  (an 8,232 B icon-font plugin) and produced an empty palette census. Plugin
  sheets (`plugins/*`, `styles/bootstrap4/bootstrap.min.css`) are grid/reset/icon
  scaffolding — the design system is `styles/main_styles.css`. CSS values are
  canonical over any screenshot sample.

| Token | Value | Evidence in `main_styles.css` |
| --- | --- | --- |
| Brand purple (primary) | `#452b78` | 14 declarations — `.button` (2px border), `.button a` (label), `.section_title span`, `.newsletter_email`, `.services_slider .owl-item.center .services_item_inner`, `.footer_logo a`, `.v_slider .slick-dots li.slick-active button` |
| Accent orange | `#ff6b09` | 9 declarations — `.logo a span`, `::selection`, `.hamburger_container:hover i`, `.double_arrow:hover i`, `.hero_slider_nav div::before` |
| Ink | `#28262d` | 4 declarations — `h1…h6`, `.person_name`, `.footer_col_title` |
| Muted text | `#6e6e6e` (body), `#909090` (`.person_title`, `.footer_col ul li a`) | `body`, meta text |
| Surface | `#ffffff` | 27 declarations — `body`, `.services_item`, `.text_line`, links |
| Newsletter band | `#1b0d37` | `.newsletter { background: #1b0d37 }` |
| Header tint | `rgba(27, 11, 51, 0.52)` fixed · `rgba(27, 11, 51, 0.92)` scrolled | `.header`, `.header.scrolled` |
| Rotated hero side band | `#301b55`, `h2` `#9878e2`, `p` `#ffffff` | `.hero_side_text_container`, `.hero_side_text h2` |
| Features band | `#fafbfb` | `.features` |
| CTA band | `#b0d5db` fallback under `.cta_background` photo | `.cta` |
| Lavender family | `#d6cbed` inactive dots · `#d4caeb` services arrows · `#9c83ce` centre-card icon · `#9988ba` placeholders · `#a2baff` hero arrows | dots/arrows/placeholder rules |
| Peach accents | `#ffd9bf` (`::selection` background), `#ffa07f` (`p a`) | selection/links |
| Footer | credit `#cacaca`, social icons `#bab6c3` → hover `#1b0d37` | `.footer_cr`, `.footer_social ul li a i` |
| Typeface | **Poppins** body (`font-size: 15px; line-height: 2; font-weight: 400`), **Roboto** button labels (14px / 700 / uppercase) | `body`, `.button a` |
| Type scale | h1 48px → 36px → 24px; h2 24px → 20px; h3 18px | `h1`–`h3` + `responsive.css` overrides |
| Button shape | rectangular, **no radius**: `.button` 174×54, `border: 2px solid #452b78`, transparent fill, uppercase label at `line-height: 50px`; hover fills `#452b78` with white label; mobile 140×40 | `.button`, `.button a` |
| Radii | only `50%` (5 rules: slick dots, `.hero_slider_nav div`, `.person_image`) | `border-radius` census |
| Band order (DOM) | `header` → hero slider (arrows + rotated `#301b55` side text) → `icon_boxes` (3-up) → `v_slider_section` (dark purple about band, person cards) → `services` (7-card carousel, centre card purple) → `features` (`#fafbfb`, 3-col, centre image + button) → `cta` (full-bleed photo, white copy) → `text_line` (white, image bottom-right) → `newsletter` (`#1b0d37`) → `footer` | element class order in the fetched HTML |

Palette in order of use: `#ffffff` ×27, `#452b78` ×14, `#ff6b09` ×9,
`#9988ba` ×5, `#28262d` ×4, `#909090` ×3, `#ffa07f` ×2, `#ffd9bf` ×2,
`#d6cbed` ×2, `#1b0d37` ×2, `#cacaca` ×2, `#6e6e6e` ×1, `#ff6347` ×1,
`#db5246` ×1, `#fefefe` ×1, `#301b54` ×1, `#1b0b32` ×1, `#a2baff` ×1,
`#251343` ×1, `#301b55` ×1, `#9878e2` ×1, `#000` ×1, `#9c83ce` ×1,
`#d4caeb` ×1, `#452b77` ×1, `#fafbfb` ×1, `#b0d5db` ×1, `#bab6c3` ×1
(89 declarations across the design and breakpoint sheets).

- Put brand purple, accent orange, ink and surface in `@theme`
  (`--color-brand`, `--color-accent`, `--color-ink`, `--color-surface`) and use
  them through utilities / `cn()`.
- Keep buttons and cards **square** (the sheet's only radius is `50%`); the
  orange is a text/hover accent, purple is the fill colour.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers
  reuse the listed values.

## Requirements

### Requirement: Navigation bar

Blitz SHALL display a fixed navigation bar with the logo "Blitz" (stressed "z" in accent color), desktop navigation links (Home, About Us, Services, Portfolio, Blog, Contact), a search toggle, and a hamburger menu for mobile viewports.

#### Scenario: Desktop navigation

- **WHEN** the page loads on a desktop viewport
- **THEN** all navigation links are visible in the header
- **AND** the logo links to #home

#### Scenario: Search toggle

- **WHEN** the user clicks the search toggle button
- **THEN** a search input field appears in the navigation

#### Scenario: Mobile menu

- **WHEN** the user clicks the hamburger button on mobile
- **THEN** a dropdown menu with all navigation links appears
- **AND** clicking a link closes the menu

### Requirement: Hero section

Blitz SHALL display a full-width hero section with a background image, overlay, headline "Modern design easy to use", subtitle text, and a "Discover More" CTA button.

#### Scenario: Hero content

- **WHEN** the hero section is rendered
- **THEN** the headline "Modern design easy to use" is displayed
- **AND** a CTA button links to the services section

#### Scenario: Navigation arrows

- **WHEN** the hero section is rendered
- **THEN** previous/next slide buttons are displayed
- **AND** a scroll-down indicator links to the icon boxes section

### Requirement: Icon boxes section

Blitz SHALL display a three-column icon boxes section with a heading, CTA, and four feature cards (Great team, Modern Design, Online Marketing, Easy to use).

#### Scenario: Feature cards

- **WHEN** the icon boxes section is rendered
- **THEN** all four feature items with icons, titles, and descriptions are visible

### Requirement: About section

Blitz SHALL display an about section on a dark purple background with an image on the left and three feature blocks on the right, each containing a heading, description, and person card.

#### Scenario: About content

- **WHEN** the about section is rendered
- **THEN** three feature blocks with headings and person info (Michael Smith, Manager) are visible

### Requirement: Services section

Blitz SHALL display a services section with a grid of service cards, each containing an icon, title, description, and "Discover More" link.

#### Scenario: Service cards

- **WHEN** the services section is rendered
- **THEN** at least 7 service cards are displayed with unique icons and titles

### Requirement: Features section

Blitz SHALL display a features section with a three-column layout: left features, center image with CTA, and right features.

#### Scenario: Feature items

- **WHEN** the features section is rendered
- **THEN** four feature items (Responsive, Clean code, Retina ready, Great team) are visible

### Requirement: Call to action section

Blitz SHALL display a CTA section with a background image, overlay, headline "We love our customers", description text, and a person image.

#### Scenario: CTA content

- **WHEN** the CTA section is rendered
- **THEN** the headline and description are displayed

### Requirement: Text line section

Blitz SHALL display a text line section with an image and "We integrate the future" headline with description and CTA button.

#### Scenario: Text line content

- **WHEN** the text line section is rendered
- **THEN** the headline and CTA button are visible

### Requirement: Newsletter section

Blitz SHALL display a newsletter section with a dark background, heading "Subscribe to our newsletter", email input, and subscribe button.

#### Scenario: Newsletter form

- **WHEN** the newsletter section is rendered
- **THEN** an email input and subscribe button are present
- **AND** the form handles submission

### Requirement: Footer

Blitz SHALL display a footer with the brand logo, social icons (Pinterest, Facebook, Twitter, Dribbble, LinkedIn), link columns (Services, Menu, About), and a copyright bar linking to Component Dock.

#### Scenario: Footer links

- **WHEN** the footer is rendered
- **THEN** a link to https://www.componentdock.com/ is present with target="_blank"

#### Scenario: Social icons

- **WHEN** the footer is rendered
- **THEN** social media icons for Pinterest, Facebook, Twitter, Dribbble, and LinkedIn are visible

#### Scenario: Copyright

- **WHEN** the footer is rendered
- **THEN** the copyright notice includes the current year

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/blitz/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/blitz/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navigation bar — all navigation links are visible in the header
- [x] Hero section — the headline "Modern design easy to use" is displayed
- [ ] Icon boxes section — all four feature items with icons, titles, and descriptions are visible
- [ ] About section — three feature blocks with headings and person info (Michael Smith, Manager) are visible
- [ ] Services section — at least 7 service cards are displayed with unique icons and titles
- [ ] Features section — four feature items (Responsive, Clean code, Retina ready, Great team) are visible
- [ ] Call to action section — the headline and description are displayed
- [ ] Text line section — the headline and CTA button are visible
- [ ] Newsletter section — an email input and subscribe button are present
