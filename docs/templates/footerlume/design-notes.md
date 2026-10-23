# Footerlume — Design Notes

Reference: **Bootstrap Footer 17** — `https://colorlib.com/wp/template/bootstrap-footer-17/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap-footer-17/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-17.jpg  
Shipped: https://footerlume.free.componentdock.com

FooterLume is a minimal dark Bootstrap footer template — a near-black footer pairing a `Menu` navigation row with a row of circular social icons above a copyright bar credited to Component Dock.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/footerlume/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-footer-bg` | `#121212` | Design tokens: dark minimal footer with #121212 background |
| `--color-footer-text` | `rgba(255, 255, 255, 0.5)` | footer text |
| `--color-footer-link` | `rgba(255, 255, 255, 0.7)` | footer link |
| `--color-footer-heading` | `#ffffff` | footer heading |
| `--color-footer-muted` | `rgba(255, 255, 255, 0.3)` | footer muted |
| `--color-footer-border` | `rgba(255, 255, 255, 0.1)` | footer border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Footer Navigation And Social Row | see fidelity note below |

## Section-by-section fidelity

### `Footer`
The footer SHALL render one navigation block — the `Menu` heading over an inline list of `navLinks` — beside a row of circular social icon links (Facebook, Twitter/X, LinkedIn, Instagram, YouTube), each with an `aria-label` and opening in a new tab.

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
- **Provenance ban.** No file under `apps/footerlume/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/footerlume/public/CNAME` = `footerlume.free.componentdock.com`
  and the package `homepage` = `https://footerlume.free.componentdock.com`.
