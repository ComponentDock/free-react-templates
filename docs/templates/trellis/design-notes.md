# Trellis — Design Notes

Reference: **Monarch** — `https://colorlib.com/wp/template/monarch/`  
Live preview: `https://preview.colorlib.com/theme/monarch/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/monarch-colorlib-template.jpg  
Shipped: https://trellis.free.componentdock.com

Trellis is a single-page architecture portfolio template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Monarch" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **-apple-system**

## Design tokens (`apps/trellis/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#8db1ab` | brand |
| `--color-brand-dark` | `#7b9c96` | brand dark |
| `--color-ink` | `#212529` | Ink — headings (#212529 from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d from the original). |
| `--color-paper` | `#f8f9fa` | Paper — light chip backgrounds (#f8f9fa from the original). |
| `--color-charcoal` | `#141b25` | Charcoal — dark navbar + copyright bar (#141b25 from the original). |
| `--color-primary-50` | `#f4f8f7` | primary 50 |
| `--color-primary-100` | `#e2eeec` | primary 100 |
| `--color-primary-200` | `#c5ddd9` | primary 200 |
| `--color-primary-300` | `#a4c7c1` | primary 300 |
| `--color-primary-400` | `#8db1ab` | primary 400 |
| `--color-primary-500` | `#7ba39c` | primary 500 |
| `--color-primary-600` | `#6b9189` | primary 600 |
| `--color-primary-700` | `#5a7a73` | primary 700 |
| `--color-primary-800` | `#4a645e` | primary 800 |
| `--color-primary-900` | `#3b4f4a` | primary 900 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Portfolio` | Portfolio section | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a dark navigation bar with anchor links to the page's sections and a dark-mode toggle button.

### `Portfolio`
The system SHALL render a portfolio section with a grid of twelve project image cards.

### `Footer`
The system SHALL render a footer with a brand blurb, a "Connect with us" social block, link columns, and a copyright bar.

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
- **Provenance ban.** No file under `apps/trellis/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/trellis/public/CNAME` = `trellis.free.componentdock.com`
  and the package `homepage` = `https://trellis.free.componentdock.com`.
