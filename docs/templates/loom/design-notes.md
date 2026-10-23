# Loom — Design Notes

Reference: **Bootstrap Footer 10** — `https://colorlib.com/wp/template/bootstrap-footer-10/`  
Live preview: `https://preview.colorlib.com/theme/bft/bootstrap-footer-10/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-10.jpg  
Shipped: https://loom.free.componentdock.com

Loom is a responsive newsletter-subscription footer with a dark background, an email signup form, multi-column navigation and social icons. It recreates the ColorLib **Bootstrap Footer 10** design (https://colorlib.com/wp/template/bootstrap-footer-10/).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/loom/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-footer-bg` | `#1a1a2e` | Design tokens: dark newsletter footer with teal accent |
| `--color-footer-text` | `#b0b0c0` | footer text |
| `--color-footer-heading` | `#ffffff` | footer heading |
| `--color-footer-link` | `#8888a0` | footer link |
| `--color-footer-border` | `#2a2a40` | footer border |
| `--color-cta-teal` | `#0ea5e9` | cta teal |
| `--color-cta-teal-hover` | `#0284c7` | cta teal hover |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Footer renders with semantic markup | see fidelity note below |

## Section-by-section fidelity

### `Footer`
Users SHALL see a `<footer>` element with `role="contentinfo"` and a dark background.

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
- **Provenance ban.** No file under `apps/loom/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loom/public/CNAME` = `loom.free.componentdock.com`
  and the package `homepage` = `https://loom.free.componentdock.com`.
