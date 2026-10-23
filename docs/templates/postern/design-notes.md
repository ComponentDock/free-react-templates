# Postern — Design Notes

Reference: **Modal 12** — `https://colorlib.com/wp/template/modal-12/`  
Live preview: `https://preview.colorlib.com/theme/modal-12/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-12.jpg  
Shipped: https://postern.free.componentdock.com

Postern is a single-page photo newsletter-modal demo in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/postern/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | Postern brand blue — matching the original Modal 12 accent. |
| `--color-primary-50` | `#eff6ff` | primary 50 |
| `--color-primary-100` | `#dbeafe` | primary 100 |
| `--color-primary-200` | `#bfdbfe` | primary 200 |
| `--color-primary-300` | `#93c5fd` | primary 300 |
| `--color-primary-400` | `#60a5fa` | primary 400 |
| `--color-primary-500` | `#3b82f6` | primary 500 |
| `--color-primary-600` | `#2563eb` | primary 600 |
| `--color-primary-700` | `#1d4ed8` | primary 700 |
| `--color-primary-800` | `#1e40af` | primary 800 |
| `--color-primary-900` | `#1e3a8a` | primary 900 |
| `--color-primary-950` | `#172554` | primary 950 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Roboto via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LaunchSection` | Launch section | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |
| 3 | `OfferModal` | Offer modal shell | see fidelity note below |

## Section-by-section fidelity

### `LaunchSection`
The system SHALL render a full-viewport centered launch section with a heading and a blue rounded launch button.

### `Footer`
The system SHALL render the mandatory attribution footer.

### `OfferModal`
The system SHALL render a centered (max-width 500px) ROUNDED (7px) modal dialog with a photo background and dark overlay.

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
- **Provenance ban.** No file under `apps/postern/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/postern/public/CNAME` = `postern.free.componentdock.com`
  and the package `homepage` = `https://postern.free.componentdock.com`.
