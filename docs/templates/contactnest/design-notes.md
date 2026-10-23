# Contactnest — Design Notes

Reference: **Contact Form V6** — `https://colorlib.com/wp/template/contact-form-v6/`  
Live preview: `https://preview.colorlib.com/theme/contact-form-v6/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v6.jpg  
Shipped: https://contactnest.free.componentdock.com

ContactNest is a single-page MODAL CONTACT FORM in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700**

## Design tokens (`apps/contactnest/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff6b6b` | brand |
| `--color-card` | `#ffffff` | Card and text colors from the original. |
| `--color-heading` | `#333333` | heading |
| `--color-label` | `#999999` | label |
| `--color-input-border` | `#e0e0e0` | input border |
| `--color-close-bg` | `#e0e0e0` | close bg |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ModalCard` | Modal card heading | see fidelity note below |

## Section-by-section fidelity

### `ModalCard`
The system SHALL display a "Contact Us" heading in large bold text inside the modal card.

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
- **Provenance ban.** No file under `apps/contactnest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/contactnest/public/CNAME` = `contactnest.free.componentdock.com`
  and the package `homepage` = `https://contactnest.free.componentdock.com`.
