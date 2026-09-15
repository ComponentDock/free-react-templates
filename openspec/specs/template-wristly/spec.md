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

### Requirement: Page composition

The system SHALL render all sections in order with Poppins font, centered content, and proper spacing.

### Requirement: Navbar

The system SHALL render a sticky navbar with "Wristly" logo and 6 nav links.

### Requirement: Hero

The system SHALL render a hero with dark gradient bg, headline, subtitle, and gradient pill CTA.

### Requirement: About section

Split layout: image left, text right with heading, paragraph, and CTA.

### Requirement: Features

4 feature cards with icons in a responsive grid around a central product image.

### Requirement: Services

6 service cards in a 3×2 grid with lucide-react icons.

### Requirement: Products

Dark bg section with 4 product cards: image, name, price, "Pre Order" button.

### Requirement: Reviews

3 reviewer cards with name, text, and star ratings (lucide-react Star icon).

### Requirement: FAQ accordion

4 FAQ items with expand/collapse toggle using aria-expanded.

### Requirement: Footer

Footer with Component Dock link (https://www.componentdock.com/), about text, newsletter, social icons.

## Verification checklist

- [ ] `apps/wristly` exists; package `@free-react-templates/wristly`
- [ ] `public/CNAME` = `wristly.free.componentdock.com`
- [ ] `homepage` = `https://wristly.free.componentdock.com`
- [ ] No `colorlib.com` strings in `apps/wristly`
- [ ] Footer links "Component Dock" → https://www.componentdock.com/
- [ ] 100% coverage via Vitest + Testing Library
- [ ] `scripts/verify-app.sh wristly` passes
