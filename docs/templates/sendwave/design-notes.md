# Sendwave — Design Notes

Reference: **Contact Form 05** — `https://colorlib.com/wp/template/contact-form-05/`  
Live preview: `https://preview.colorlib.com/theme/contact-form-05/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-05.jpg  
Shipped: https://sendwave.free.componentdock.com

Sendwave is a two-column contact form page in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Contact Form 05" website template design (source: https://colorlib.com/wp/template/contact-form-05/), built under a DIFFERENT name (Sendwave) per the monorepo naming mandate, with the monorepo stack: Vi…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/sendwave/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-amber` | `#e3b04b` | brand amber |
| `--color-brand-amber-dark` | `#d99c22` | brand amber dark |
| `--color-bg-page` | `#f4f4f4` | bg page |
| `--color-text-body` | `#666666` | text body |
| `--color-text-heading` | `#000000` | text heading |
| `--color-text-info-label` | `rgba(0, 0, 0, 0.2)` | text info label |
| `--color-text-info-value` | `rgba(0, 0, 0, 0.7)` | text info value |
| `--color-text-social` | `rgba(0, 0, 0, 0.2)` | text social |
| `--color-input-border` | `rgba(0, 0, 0, 0.1)` | input border |
| `--color-input-focus` | `rgba(0, 0, 0, 0.3)` | input focus |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactCard` | Two-column contact card | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock branding | see fidelity note below |

## Section-by-section fidelity

### `ContactCard`
The application SHALL render a two-column card with white left panel and background image right panel, wrapped in a shadow container with rounded corners.

### `Footer`
The application SHALL render a footer linking to Component Dock.

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
- **Provenance ban.** No file under `apps/sendwave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sendwave/public/CNAME` = `sendwave.free.componentdock.com`
  and the package `homepage` = `https://sendwave.free.componentdock.com`.
