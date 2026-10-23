# Formlink — Design Notes

Reference: **Contact Form 06** — `https://colorlib.com/wp/template/contact-form-06/`  
Live preview: `https://preview.colorlib.com/theme/contact-form-06/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-06.jpg  
Shipped: https://formlink.free.componentdock.com

Formlink is a split-layout contact form page in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/formlink/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-teal` | `#5b8fa6` | brand teal |
| `--color-brand-teal-dark` | `#4a7a91` | brand teal dark |
| `--color-bg-page` | `#ffffff` | bg page |
| `--color-text-body` | `#333333` | text body |
| `--color-text-heading` | `#000000` | text heading |
| `--color-text-muted` | `#777777` | text muted |
| `--color-input-border` | `#dddddd` | input border |
| `--color-input-focus` | `#5b8fa6` | input focus |
| `--color-card-shadow` | `rgba(0, 0, 0, 0.15)` | card shadow |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactCard` | Two-column contact card | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock branding | see fidelity note below |

## Section-by-section fidelity

### `ContactCard`
The application SHALL render a two-column card with white left panel (form) and background map image right panel, wrapped in a shadow container with rounded corners.

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
- **Provenance ban.** No file under `apps/formlink/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formlink/public/CNAME` = `formlink.free.componentdock.com`
  and the package `homepage` = `https://formlink.free.componentdock.com`.
