# Footercrest — Design Notes

Reference: **Bootstrap Footer 16** — `https://colorlib.com/wp/template/bootstrap-footer-16/`  
Live preview: `https://preview.colorlib.com/theme/bft/bootstrap-footer-16/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-16.jpg  
Shipped: https://footercrest.free.componentdock.com

Recreation of ColorLib's **Bootstrap Footer 16** — a deep purple/charcoal footer with a prominent newsletter subscription section (pill-shaped input + button on a slightly lighter purple background), a three-column link grid (Information, Application, API) with checkmark-circle icons, and a brand/copyright block.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/footercrest/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-footer-bg` | `#302939` | Design tokens: deep purple-charcoal footer |
| `--color-newsletter-left` | `#322b3c` | newsletter left |
| `--color-newsletter-right` | `#372f42` | newsletter right |
| `--color-submit-btn` | `#352d3f` | submit btn |
| `--color-section-bg` | `#f0eff5` | section bg |
| `--color-subheading` | `rgba(255, 255, 255, 0.3)` | subheading |
| `--color-heading` | `#ffffff` | heading |
| `--color-link` | `rgba(255, 255, 255, 0.5)` | link |
| `--color-copyright` | `rgba(255, 255, 255, 0.3)` | copyright |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Footer content — three-column link grid | see fidelity note below |

## Section-by-section fidelity

### `Footer`
The footer SHALL display three columns of links below the newsletter section: "Information" (5 links), "Application" (3 links), and "API" (3 links), each preceded by a checkmark-circle icon.

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
- **Provenance ban.** No file under `apps/footercrest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/footercrest/public/CNAME` = `footercrest.free.componentdock.com`
  and the package `homepage` = `https://footercrest.free.componentdock.com`.
