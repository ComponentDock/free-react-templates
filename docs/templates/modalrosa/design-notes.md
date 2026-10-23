# Modalrosa — Design Notes

Reference: **Modal 13** — `https://colorlib.com/wp/template/modal-13/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/modal-13/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-13.jpg  
Shipped: https://modalrosa.free.componentdock.com

A centered full-viewport page with a Bootstrap-style light pink modal popup featuring an email subscription form, Instagram branding. It also includes and a "No, thanks" / "Subscribe" dual-button layout. Recreation of the ColorLib "Modal 13" template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/modalrosa/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f9eaf2` | ModalRosa brand pink — matching the original Modal 13 light pink. |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Roboto via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LaunchSection` | Launch section | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |
| 3 | `OfferModal` | Offer modal shell | see fidelity note below |

## Section-by-section fidelity

### `LaunchSection`
The system SHALL render a full-viewport centered launch section with a heading and a launch button.

### `Footer`
The system SHALL render a footer linking to Component Dock.

### `OfferModal`
The system SHALL render a centered (max-width 500px) rounded (7px) modal dialog with a light pink background.

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
- **Provenance ban.** No file under `apps/modalrosa/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/modalrosa/public/CNAME` = `modalrosa.free.componentdock.com`
  and the package `homepage` = `https://modalrosa.free.componentdock.com`.
