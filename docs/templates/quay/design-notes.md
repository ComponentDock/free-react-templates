# Quay — Design Notes

Reference: **Harbor** — `https://colorlib.com/wp/template/harbor/`  
Live preview: `https://preview.colorlib.com/theme/harbor/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/harbor-free-template.jpg  
Shipped: https://quay.free.componentdock.com

Quay is a single-page interior-design studio website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/quay/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#3e64ff` | brand |
| `--color-brand-hover` | `#1845ff` | brand hover |
| `--color-primary-600` | `#3e64ff` | Shared Button/ButtonLink theme (packages/ui uses primary-600/700). |
| `--color-primary-700` | `#1845ff` | primary 700 |
| `--color-ink` | `#000000` | ink |
| `--color-body` | `#212529` | body |
| `--color-muted` | `#6c757d` | muted |
| `--color-fog` | `#c9ccd4` | fog |
| `--color-mist` | `#f6f5f5` | mist |
| `--color-line` | `#e9ecef` | line |
| `--font-serif` | `'Playfair Display', ui-serif, Georgia, serif` | font serif |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `Work` | Work section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Testimonials` | Testimonials section | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed/sticky white navbar with a centered logo and navigation links on both sides, plus a mobile menu toggle.

### `Hero`
The system SHALL render a full-viewport hero with a rotating background slideshow and a white overlay card with the headline, blurb, and CTA.

### `Work`
The system SHALL render an "Our Work" section with a header row and a 2×2 grid of portfolio cards.

### `Services`
The system SHALL render a brand-blue "What We Do" section with a heading, intro text, and six service cards.

### `Testimonials`
The system SHALL render a centered testimonials carousel.

### `Footer`
The system SHALL render a light-gray footer with about text, feature links, a subscribe form, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/quay/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/quay/public/CNAME` = `quay.free.componentdock.com`
  and the package `homepage` = `https://quay.free.componentdock.com`.
