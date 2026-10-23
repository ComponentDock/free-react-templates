# Jotter — Design Notes

Reference: **Elen** — `https://colorlib.com/wp/template/elen/`  
Live preview: `https://preview.colorlib.com/theme/elen/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/elen-free-template.jpg  
Shipped: https://jotter.free.componentdock.com

Jotter is a single-page personal blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Elen" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Poppins**, **Work Sans**, **Work Sans:wght@300;400;500;600;700**

## Design tokens (`apps/jotter/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#f05d23` | accent |
| `--color-sidebar` | `rgba(0, 0, 0, 0.04)` | Sidebar — the fixed left column background (rgba(0,0,0,0.04)). |
| `--color-ink` | `#000000` | Ink — black headings and nav text. |
| `--color-subheading` | `#bfbfbf` | Subheading — the light grey #BFBFBF hero greeting text. |
| `--color-meta` | `#b3b3b3` | Meta — the #B3B3B3 muted text for the hero CTA and blog meta row. |
| `--color-footer` | `#132238` | Footer — the dark navy #132238 footer background. |
| `--font-heading` | `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font heading |
| `--font-menu` | `'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font menu |

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
- **Provenance ban.** No file under `apps/jotter/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jotter/public/CNAME` = `jotter.free.componentdock.com`
  and the package `homepage` = `https://jotter.free.componentdock.com`.
