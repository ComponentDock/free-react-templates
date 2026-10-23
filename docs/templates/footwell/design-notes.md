# Footwell — Design Notes

Reference: **Bootstrap Footer 01** — `https://colorlib.com/wp/template/bootstrap-footer-01/`  
Live preview: `https://preview.colorlib.com/theme/bft/bootstrap-footer-01/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-01.jpg  
Shipped: https://footwell.free.componentdock.com

Recreation of ColorLib's "Bootstrap Footer 01" — a dark-themed website footer with a CTA banner, multi-column link sections, and social media icons. This is a focused footer component template, not a full-page website template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/footwell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-footer-bg` | `#141d2a` | Design tokens: dark navy footer with purple accent |
| `--color-footer-text` | `#ffffff` | footer text |
| `--color-footer-muted` | `#666873` | footer muted |
| `--color-cta-accent` | `#8186d5` | cta accent |
| `--color-cta-shadow` | `rgba(52, 58, 64, 0.2)` | cta shadow |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Footer renders with dark navy background | see fidelity note below |

## Section-by-section fidelity

### `Footer`
The footer component SHALL render with a dark navy (#141d2a) background and white text color.

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
- **Provenance ban.** No file under `apps/footwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/footwell/public/CNAME` = `footwell.free.componentdock.com`
  and the package `homepage` = `https://footwell.free.componentdock.com`.
