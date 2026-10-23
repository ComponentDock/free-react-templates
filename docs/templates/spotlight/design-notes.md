# Spotlight — Design Notes

Reference: **Listed2** — `https://colorlib.com/wp/template/listed2/`  
Live preview: `https://preview.colorlib.com/theme/listed2/`  
Screenshot:   
Shipped: https://spotlight.free.componentdock.com

Spotlight is a business directory template. It recreates the ColorLib **Listed2** design (https://colorlib.com/wp/template/listed2/, preview: https://preview.colorlib.com/theme/listed2/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Quicksand**, **Quicksand:wght@300;400;500;600;700**

## Design tokens (`apps/spotlight/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#7971ea` | primary |
| `--color-primary-hover` | `#6a62d6` | primary hover |
| `--color-body` | `#4d4d4d` | body |
| `--color-heading` | `#000000` | heading |
| `--color-light-bg` | `#f4f5f9` | light bg |
| `--color-footer-bg` | `#333333` | footer bg |
| `--color-footer-text` | `#737373` | footer text |
| `--color-border` | `#edf0f5` | border |

> The spec has no section-level requirements; the order below is read from `apps/spotlight/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `MostVisitedPlaces` | — | no dedicated spec block |
| 4 | `PopularCategories` | — | no dedicated spec block |
| 5 | `WhyUs` | — | no dedicated spec block |
| 6 | `Testimonials` | — | no dedicated spec block |
| 7 | `Blog` | — | no dedicated spec block |
| 8 | `FAQ` | — | no dedicated spec block |
| 9 | `CTA` | — | no dedicated spec block |
| 10 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Mobile navigation · Spotlight

### `Hero`
*anchors only* — Find Nearby · Places · Explore top-rated attractions, activities and more! · Search

### `MostVisitedPlaces`
*anchors only* — Most Visited Places · Discover trending spots near you

### `PopularCategories`
*anchors only* — Popular Categories · Browse by category

### `WhyUs`
*anchors only* — Why Us

### `Testimonials`
*anchors only* — Previous testimonial · Next testimonial · Testimonials

### `Blog`
*anchors only* — Our Blog · See Our Daily News &amp; Updates

### `FAQ`
*anchors only* — Frequently Asked Questions · Got questions? We have answers.

### `CTA`
*anchors only* — Let&apos;s get started. Create your account · Join thousands of businesses and discover the best local spots. · Sign Up

### `Footer`
*anchors only* — Facebook · Twitter · Instagram · Email for newsletter

## Deltas from the reference

- Photographs are deterministic placeholders (`picsum.photos/seed/…`); no source asset is copied.
- Icon glyphs come from `lucide-react`, not the source's icon font.
- Copy is paraphrased to the same kind of content (headline + subtext + CTA, card title + blurb + link).
- The source's credit bar is replaced by the Component Dock credit (see delivery contract).

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/spotlight/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/spotlight/public/CNAME` = `spotlight.free.componentdock.com`
  and the package `homepage` = `https://spotlight.free.componentdock.com`.
