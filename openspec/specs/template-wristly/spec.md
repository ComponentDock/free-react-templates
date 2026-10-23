# Template: Wristly (Smartwatch Landing)

## Purpose

Wristly is a smartwatch product landing page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Watch" website
template design (source: https://colorlib.com/wp/template/watch/), built under a
DIFFERENT name (Wristly — evokes wrist-worn tech) per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **wristly** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`watch`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/`.

## Design reference (replication findings)

- **Original:** ColorLib "Watch" — a smartwatch product landing page with navbar,
  hero banner, video section, feature cards, about split, services grid, product
  showcase on dark bg, reviews, FAQ accordion, and footer with newsletter + social.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/watch/`
  (reachable; DOM fetched — navbar, hero, 8 sections, footer).
- **Stack of the source:** Bootstrap 4 + jQuery + Font Awesome + custom CSS.
  Recreation uses the monorepo stack + lucide-react icons + picsum.photos
  placeholders + Google Fonts Poppins.

### Section order (1:1, confirmed from preview DOM)

1. **Navbar** — logo text "Wristly" + nav links: Home, About, Features, Products, Reviews, FAQ
2. **Hero/Banner** — dark gradient bg (blue-to-teal), "Feel the Future on Your Wrist" headline, subtitle, "Shop Now" CTA button (gradient blue→cyan, pill shape)
3. **About split** — image left (picsum), text right: "Brand new tech to blow your mind", description, "Get Started" CTA
4. **Features grid** — 4 cards with lucide icons + title + description around a central product image (2-column on desktop)
5. **Services** — 6 service cards (3×2 grid) with icons: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews
6. **Products** — dark bg (#1a1a2e), 4 product cards with image + "Apple Watch" name + price £399 + "Pre Order" button
7. **Reviews** — 3 reviewer cards with star ratings
8. **FAQ** — accordion with 4 items
9. **Footer** — about column, newsletter form, social links; Component Dock attribution

## Design tokens (from preview stylesheet)

- **Brand color:** `#235ee7` (blue) — primary CTAs, links
- **Accent gradient:** linear-gradient(0deg, #235ee7, #4ae7fa) — buttons, social hover
- **Dark bg:** `#1a1a2e` — products section
- **Section alt bg:** `#f9f9ff` — alternating sections
- **Body text:** `#777777`; headings `#222222`
- **Font:** Poppins (weights 300, 400, 500, 600, 700) via Google Fonts
- **Button:** pill (border-radius 25px), gradient bg, white text, padding 0 30px/60px
- **Section spacing:** ~80px vertical padding (Tailwind py-20)

## Requirements

### Feature: Page composition

#### Scenario: Page composition

The system SHALL render all sections in order with Poppins font, centered content, and proper spacing.

### Feature: Navbar

#### Scenario: Navbar

The system SHALL render a sticky navbar with "Wristly" logo and 6 nav links.

### Feature: Hero

#### Scenario: Hero

The system SHALL render a hero with dark gradient bg, headline, subtitle, and gradient pill CTA.

### Feature: About section

#### Scenario: About section

Split layout: image left, text right with heading, paragraph, and CTA.

### Feature: Features

#### Scenario: Features

4 feature cards with icons in a responsive grid around a central product image.

### Feature: Services

#### Scenario: Services

6 service cards in a 3×2 grid with lucide-react icons.

### Feature: Products

#### Scenario: Products

Dark bg section with 4 product cards: image, name, price, "Pre Order" button.

### Feature: Reviews

#### Scenario: Reviews

3 reviewer cards with name, text, and star ratings (lucide-react Star icon).

### Feature: FAQ accordion

#### Scenario: FAQ accordion

4 FAQ items with expand/collapse toggle using aria-expanded.

### Feature: Footer

#### Scenario: Footer

Footer with Component Dock link (https://www.componentdock.com/), about text, newsletter, social icons.

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/wristly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/wristly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] `apps/wristly` exists; package `@free-react-templates/wristly`
- [ ] `public/CNAME` = `wristly.free.componentdock.com`
- [ ] `homepage` = `https://wristly.free.componentdock.com`
- [ ] No `colorlib.com` strings in `apps/wristly`
- [ ] Footer links "Component Dock" → https://www.componentdock.com/
- [ ] 100% coverage via Vitest + Testing Library
- [ ] `scripts/verify-app.sh wristly` passes
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page composition — The system render all sections in order with Poppins font, centered content, and proper spacing
- [ ] Navbar — The system render a sticky navbar with "Wristly" logo and 6 nav links
- [ ] Hero — The system render a hero with dark gradient bg, headline, subtitle, and gradient pill CTA
- [ ] About section — Split layout: image left, text right with heading, paragraph, and CTA
- [ ] Features — 4 feature cards with icons in a responsive grid around a central product image
- [ ] Services — 6 service cards in a 3×2 grid with lucide-react icons
- [ ] Products — Dark bg section with 4 product cards: image, name, price, "Pre Order" button
- [ ] Reviews — 3 reviewer cards with name, text, and star ratings (lucide-react Star icon)
- [ ] FAQ accordion — 4 FAQ items with expand/collapse toggle using aria-expanded
