# Gateway — Design Notes

Reference: **Modal 06** — `https://colorlib.com/wp/template/modal-06/`  
Live preview: `https://preview.colorlib.com/theme/modal-06/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-06.jpg  
Shipped: https://gateway.free.componentdock.com

Gateway is a single-page signup-form modal demo in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;700**

## Design tokens (`apps/gateway/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#5eb7b7` | brand |
| `--color-navy` | `#1b2a49` | navy |
| `--color-mint` | `#47e4bb` | mint |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LaunchSection` | Launch section | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |
| 3 | `SignupModal` | Signup modal shell | see fidelity note below |

## Section-by-section fidelity

### `LaunchSection`
The system SHALL render a full-viewport centered launch section with a heading and a teal 4px-radius launch button.

### `Footer`
The system SHALL render the standard Component Dock attribution footer.

### `SignupModal`
The system SHALL render a wide (900px) centered modal dialog with a close button, square corners, and a two-panel body.

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
- **Provenance ban.** No file under `apps/gateway/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gateway/public/CNAME` = `gateway.free.componentdock.com`
  and the package `homepage` = `https://gateway.free.componentdock.com`.
