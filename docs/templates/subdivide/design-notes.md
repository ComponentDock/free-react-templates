# Subdivide — Design Notes

Reference: **Bootstrap Footer 06** — `https://colorlib.com/wp/template/bootstrap-footer-06/`  
Live preview: `https://preview.colorlib.com/theme/bft/bootstrap-footer-06/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-06.jpg  
Shipped: https://subdivide.free.componentdock.com

Recreation of ColorLib's "Bootstrap Footer 06" — a centered, multi-column footer with five link columns, a bottom bar containing social icons, copyright, and app store links. This is a focused footer component template, not a full-page website template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/subdivide/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-footer-bg` | `#ffffff` | Design tokens: multi-column footer with deep purple accent |
| `--color-footer-text` | `#777777` | footer text |
| `--color-footer-heading` | `#333333` | footer heading |
| `--color-footer-link` | `#777777` | footer link |
| `--color-footer-link-hover` | `#4200ff` | footer link hover |
| `--color-footer-social` | `#cccccc` | footer social |
| `--color-footer-social-hover` | `#4200ff` | footer social hover |
| `--color-footer-divider` | `#efefef` | footer divider |
| `--color-footer-copyright` | `#777777` | footer copyright |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Footer renders with white background | see fidelity note below |

## Section-by-section fidelity

### `Footer`
The footer component SHALL render with a white background and generous vertical padding (7rem top and bottom).

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
- **Provenance ban.** No file under `apps/subdivide/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/subdivide/public/CNAME` = `subdivide.free.componentdock.com`
  and the package `homepage` = `https://subdivide.free.componentdock.com`.
