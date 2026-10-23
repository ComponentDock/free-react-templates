# Formgate — Design Notes

Reference: **Contact Form 19** — `https://colorlib.com/wp/template/contact-form-19/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/contact-form-19/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-19.jpg  
Shipped: https://formgate.free.componentdock.com

Minimalist single-page contact form recreating ColorLib "Contact Form 19" under the original name **FormGate**. A centered white card on a light gray background containing a "Get Started" heading and a clean form with underline-style inputs, a budget dropdown, message textarea, and a coral "SEND MESSAGE" button.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter:wght@400;500;600;700**

## Design tokens (`apps/formgate/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-coral` | `#e07060` | brand coral |
| `--color-brand-coral-dark` | `#c95a4a` | brand coral dark |
| `--color-bg-page` | `#f5f5f5` | bg page |
| `--color-text-primary` | `#222222` | text primary |
| `--color-text-secondary` | `#999999` | text secondary |
| `--color-text-input` | `#333333` | text input |
| `--color-input-border` | `#e0e0e0` | input border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactForm` | — | no dedicated spec block |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `ContactForm`
*anchors only* — name · email · budget · message

### `Footer`
The footer SHALL display a "More templates at Component Dock" link pointing to componentdock.com.

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
- **Provenance ban.** No file under `apps/formgate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formgate/public/CNAME` = `formgate.free.componentdock.com`
  and the package `homepage` = `https://formgate.free.componentdock.com`.
