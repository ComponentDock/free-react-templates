# Dirly — Design Notes

Reference: **Listingo** — `https://colorlib.com/wp/template/listingo/`  
Live preview: `https://preview.colorlib.com/theme/listingo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/listingo-free-template.jpg  
Shipped: https://dirly.free.componentdock.com

Dirly is a directory & listing template with a navbar, hero, popular categories and footer. It recreates the ColorLib **Listingo** design (https://colorlib.com/wp/template/listingo/, preview: https://preview.colorlib.com/theme/listingo/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:ital,wght@0,400;0,700;1,400;1,700**, **Poppins**

## Design tokens (`apps/dirly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e8491d` | brand |
| `--color-brand-hover` | `#c93d15` | brand hover |
| `--color-heading` | `#1a1a2e` | heading |
| `--color-text-dark` | `#222222` | text dark |
| `--color-text-body` | `#555555` | text body |
| `--color-border-light` | `#ecebf0` | border light |
| `--color-bg-subtle` | `#f8f8f8` | bg subtle |
| `--color-dark-bg` | `#1a1a2e` | dark bg |
| `--color-dark-surface` | `#242440` | dark surface |
| `--font-family-heading` | `'Playfair Display', serif` | font family heading |
| `--font-family-body` | `'Poppins', sans-serif` | font family body |

> The spec has no section-level requirements; the order below is read from `apps/dirly/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `PopularCategories` | — | no dedicated spec block |
| 4 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Dirly · Sign In

### `Hero`
*anchors only* — search · Find nearby attractions · What are you finding · Location

### `PopularCategories`
*anchors only* — Discover · Most Popular Categories

### `Footer`
*anchors only* — Dirly · Quick Links · Newsletter · Subscribe to get updates on new listings and local events. · Subscribe · Component Dock

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
- **Provenance ban.** No file under `apps/dirly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dirly/public/CNAME` = `dirly.free.componentdock.com`
  and the package `homepage` = `https://dirly.free.componentdock.com`.
