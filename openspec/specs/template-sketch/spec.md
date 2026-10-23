# Template: Sketch (Design Agency Landing)

## Purpose

Sketch is a single-page design agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Design" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean design agency page with blue accents: a navbar with
logo and navigation, a hero ("Create, Code, and Launch." + features + quote),
an achievements stats row, a "How it works" 3-step process, a services section
with checklist, a testimonials carousel, a blog posts grid, and a dark footer
with social links and navigation columns. Sketch recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Design" — free design agency website template
  (source: https://colorlib.com/wp/template/design/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/design/`
  (HTTP 200, the rendered page) + stylesheet `css/style.css`.
- **Brand color:** #1264fa (vibrant blue), hover #2671fa
- **Font:** Montserrat (300, 400, 700)
- **Buttons:** rounded-full pill shape, brand bg, white text
- **Section order (1:1):**
  1. Navbar: Logo "Sketch", nav links (Home, Services, Work, About), CTA "Get Started"
  2. Hero: Split — left: h1 + subtitle + CTA + 2 feature cards; right: image + quote overlay
  3. Achievements: 4 stat cards (99.55%, 98,000+, 99.99%, 1M+)
  4. HowItWorks: Section title + 3 steps with icons
  5. Services: Two-column — text/checklist/CTA + image
  6. Testimonials: 3 testimonial cards (image, quote, author)
  7. Blog: 5 blog entries with date, title, description
  8. Footer: About, social links, navigation columns, copyright + Component Dock link

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/design/ (HTTP 200, 24,919 B, sha256 `dcc4eaa0a6ef…`, fetched 2026-10-23) and its design stylesheet(s) `style.css`, `style.css`, `inline-style-0`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#1264fa` | 29 declarations — `.btn.btn-primary`, `a` |
| Other chromatic values | `#000839` (5), `#2671fa` (2), `#2b74fb` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 11 declarations — `#overlayer`, `.site-nav .site-navigation .site-menu > li.cta-button a:hover` |
| Ink / dark surface | `#000000` | 9 declarations — `.site-mobile-menu-close > span:before, .site-mobile-menu-close > span:after`, `.site-nav .site-navigation .site-menu .has-children .dropdown a` |
| Typeface | `Montserrat` (2 rules — `body`) | `font-family` declarations in the design sheet |
| Radii | `50%`, `30px`, `4px`, `2px` | `50%` (`.feature .icon-wrap:before`); `30px` (`.btn`); `4px` (`.control__indicator`); `2px` (`.burger:before, .burger span, .burger:after`) |

Palette in order of use: `#1264fa` ×29, `#ffffff` ×11, `#000000` ×9, `#000839` ×5, `#f8f9fa` ×5, `#2671fa` ×2, `#e6e6e6` ×2, `#dae1e7` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `theme/design/fonts/icomoon/style.css` — 79,820 B, sha256 `b696dfc59a40…`; `theme/design/css/style.css` — 27,802 B, sha256 `4567f225ba66…`.

## Requirements

### Requirement: Navbar displays navigation and branding

The navbar SHALL display the "Sketch" logo, navigation links (Home, Services, Work, About), and a "Get Started" CTA button.

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the "Sketch" logo, all four navigation links, and the "Get Started" CTA

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation menu opens with all links visible

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero section displays headline and features

The hero SHALL display the heading "Create, Code, and Launch.", a subtitle paragraph, a "Get Started" CTA, two feature cards, a hero image, and a quote overlay.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the hero shows the h1 heading "Create, Code, and Launch." and a "Get Started" button linking to #get-started

#### Scenario: Hero shows feature cards

- **WHEN** the page loads
- **THEN** the hero shows "High Quality" and "Creative Solutions" feature cards

### Requirement: Achievements section shows statistics

The achievements section SHALL display 4 stat cards: 99.55% ratings, 98,000+ customers, 99.99% uptime, 1M+ love.

#### Scenario: All stats render

- **WHEN** the page loads
- **THEN** all four stat values and their titles are visible

### Requirement: HowItWorks shows 3-step process

The section SHALL display a "How it works" title and three steps: Create Account, Create Orders, Ship & Track.

#### Scenario: Steps render in order

- **WHEN** the page loads
- **THEN** steps 1, 2, and 3 are displayed with titles and descriptions

### Requirement: Services section displays offerings

The services section SHALL show a title, heading, paragraph, checklist of 3 items, a CTA button, and an image.

#### Scenario: Checklist and CTA render

- **WHEN** the page loads
- **THEN** "Modern responsive design", "Performance optimized", and "SEO friendly structure" are listed, and a "Get Started" CTA is visible

### Requirement: Testimonials display client feedback

The testimonials section SHALL show at least 3 testimonial cards with author images, quotes, and names.

#### Scenario: Testimonial cards render

- **WHEN** the page loads
- **THEN** testimonial cards for Adam Aderson, Sarah Mitchell, and James Cooper are visible

### Requirement: Blog section shows recent posts

The blog section SHALL display a "Latest Blog Posts" title and at least 3 blog entries with dates, titles, and descriptions.

#### Scenario: Blog entries render

- **WHEN** the page loads
- **THEN** at least 3 blog articles are displayed with dates and titles

### Requirement: Footer links to Component Dock

The footer SHALL include an About section, social media links, navigation columns, and a copyright line linking to https://www.componentdock.com/.

#### Scenario: Footer Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to "https://www.componentdock.com/" labeled "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/sketch/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/sketch/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar displays navigation and branding — the navbar shows the "Sketch" logo, all four navigation links, and the "Get Started" CTA
- [x] Hero section displays headline and features — the hero shows the h1 heading "Create, Code, and Launch." and a "Get Started" button linking to #get-started
- [ ] Achievements section shows statistics — all four stat values and their titles are visible
- [ ] HowItWorks shows 3-step process — steps 1, 2, and 3 are displayed with titles and descriptions
- [x] Services section displays offerings — "Modern responsive design", "Performance optimized", and "SEO friendly structure" are listed, and a "Get Started" CTA is visible
- [ ] Testimonials display client feedback — testimonial cards for Adam Aderson, Sarah Mitchell, and James Cooper are visible
- [ ] Blog section shows recent posts — at least 3 blog articles are displayed with dates and titles
