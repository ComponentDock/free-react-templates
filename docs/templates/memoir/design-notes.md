# Memoir — Design Notes

Reference: **Andrea** — `https://colorlib.com/wp/template/andrea/`  
Live preview: `https://preview.colorlib.com/theme/andrea/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/andrea-free-template.jpg  
Shipped: https://memoir.free.componentdock.com

Memoir is a single-page personal / lifestyle blog template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Abril Fatface**, **Lora**, **Poppins**

## Design tokens (`apps/memoir/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-sky-100` | `#e3f5fe` | sky 100 |
| `--color-sky-200` | `#b8e6fc` | sky 200 |
| `--color-sky-300` | `#7fd3f9` | sky 300 |
| `--color-sky-400` | `#4cc1f6` | sky 400 |
| `--color-sky-500` | `#1eafed` | sky 500 |
| `--color-sky-600` | `#1894cc` | sky 600 |
| `--color-sky-700` | `#1478a6` | sky 700 |
| `--color-sky-800` | `#115f85` | sky 800 |
| `--color-sky-900` | `#0e4a68` | sky 900 |
| `--color-night-900` | `#0b2533` | night 900 |
| `--color-ink-900` | `rgba(0, 0, 0, 0.8)` | ink 900 |
| `--color-body-900` | `#212529` | body 900 |
| `--color-meta-500` | `#bfbfbf` | meta 500 |
| `--color-line-200` | `#dee2e6` | line 200 |
| `--color-line-300` | `#e6e6e6` | line 300 |
| `--color-cloud-500` | `#ccc` | cloud 500 |
| `--color-soft-100` | `#f8f9fa` | soft 100 |
| `--color-soft-200` | `#fafafa` | soft 200 |
| `--font-display` | `'Abril Fatface', ui-serif, Georgia, serif` | Abril Fatface (logo), Lora (headings), Poppins (body) — Google Fonts via index.html |
| `--font-serif` | `'Lora', ui-serif, Georgia, serif` | font serif |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Layout` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Layout`
*anchors only* — Toggle sidebar

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
- **Provenance ban.** No file under `apps/memoir/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/memoir/public/CNAME` = `memoir.free.componentdock.com`
  and the package `homepage` = `https://memoir.free.componentdock.com`.
