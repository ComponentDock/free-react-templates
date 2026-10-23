# Closet — Design Notes

Reference: **Little Closet** — `https://colorlib.com/wp/template/little-closet/`  
Live preview: `https://preview.colorlib.com/theme/little-closet/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/littlecloset-free-template.jpg  
Shipped: https://closet.free.componentdock.com

Closet is a fashion boutique template with a navbar, hero, popular products, newsletter and footer. It recreates the ColorLib **Little Closet** design (https://colorlib.com/wp/template/little-closet/, preview: https://preview.colorlib.com/theme/littlecloset/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700**, **Roboto**

## Design tokens (`apps/closet/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#00b894` | brand |
| `--color-brand-dark` | `#00a381` | brand dark |
| `--color-ink` | `#000000` | Ink — black headings and navbar. |
| `--color-paper` | `#ffffff` | Paper — white page background. |
| `--color-slate` | `#f8f8f8` | Slate — light section background. |
| `--color-mist` | `#999999` | Mist — muted text. |
| `--color-body` | `#555555` | Body — dark body text. |
| `--color-primary-50` | `#e6f9f4` | Primary scale for shared ui Button/ButtonLink. |
| `--color-primary-100` | `#ccf3e9` | primary 100 |
| `--color-primary-200` | `#99e7d3` | primary 200 |
| `--color-primary-300` | `#66dbbd` | primary 300 |
| `--color-primary-400` | `#00b894` | primary 400 |
| `--color-primary-500` | `#00a381` | primary 500 |
| `--color-primary-600` | `#008f6f` | primary 600 |
| `--color-primary-700` | `#007a5d` | primary 700 |
| `--color-primary-800` | `#00664c` | primary 800 |
| `--color-primary-900` | `#004d39` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Fonts: Playfair Display italic for headings, Roboto for body. |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

> The spec has no section-level requirements; the order below is read from `apps/closet/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `PopularProducts` | — | no dedicated spec block |
| 4 | `Newsletter` | — | no dedicated spec block |
| 5 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle menu · Search items · User account · Shopping cart

### `Hero`
*anchors only* — Hero slider · Previous slide · Next slide

### `PopularProducts`
*anchors only* — Popular products · Popular on Closet

### `Newsletter`
*anchors only* — Newsletter · Email address · Sign Up for a Newsletter · Subscribe

### `Footer`
*anchors only* — contentinfo · Back to top · About Closet · Customer Care · Information · Contact Us

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
- **Provenance ban.** No file under `apps/closet/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/closet/public/CNAME` = `closet.free.componentdock.com`
  and the package `homepage` = `https://closet.free.componentdock.com`.
