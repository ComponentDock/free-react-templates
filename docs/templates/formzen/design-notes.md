# Formzen — Design Notes

Reference: **Contact Form V10** — `https://colorlib.com/wp/template/contact-form-v10/`  
Live preview: `https://preview.colorlib.com/theme/contact-form-v10/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v10.jpg  
Shipped: https://formzen.free.componentdock.com

Recreation of ColorLib "Contact Form V10" (https://colorlib.com/wp/template/contact-form-v10/). A minimalist contact form page with a light gray background, centered white card with subtle shadow, and a clean purple-branded send button.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter:wght@400;500;600;700**

## Design tokens (`apps/formzen/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#7c6bc4` | brand |
| `--color-brand-dark` | `#6a5aad` | brand dark |
| `--color-bg-page` | `#f3f4f6` | bg page |
| `--color-text-heading` | `#1f2937` | text heading |
| `--color-text-primary` | `#374151` | text primary |
| `--color-text-placeholder` | `#9ca3af` | text placeholder |
| `--color-input-border` | `#e5e7eb` | input border |
| `--color-card-surface` | `#ffffff` | card surface |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactForm` | — | no dedicated spec block |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `ContactForm`
*anchors only* — name · email · phone · message

### `Footer`
The page SHALL display a footer linking to Component Dock.

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
- **Provenance ban.** No file under `apps/formzen/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formzen/public/CNAME` = `formzen.free.componentdock.com`
  and the package `homepage` = `https://formzen.free.componentdock.com`.
