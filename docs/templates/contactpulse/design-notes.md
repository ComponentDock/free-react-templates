# Contactpulse — Design Notes

Reference: **Contact Form V14** — `https://colorlib.com/wp/template/contact-form-v14/`  
Live preview: `https://preview.colorlib.com/theme/contact-form-v14/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v14.jpg  
Shipped: https://contactpulse.free.componentdock.com

A centered single-column contact form on a vibrant full-page gradient background with underline-style inputs. It also includes field validation indicators, and a dark pill-shaped submit button. Recreation of ColorLib **Contact Form V14**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/contactpulse/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-golden` | `#f7c948` | brand golden |
| `--color-brand-pink` | `#e84393` | brand pink |
| `--color-brand-dark` | `#333333` | brand dark |
| `--color-brand-green` | `#28a745` | brand green |
| `--color-brand-red` | `#dc3545` | brand red |
| `--color-text-heading` | `#222222` | text heading |
| `--color-text-label` | `#555555` | text label |
| `--color-text-body` | `#666666` | text body |
| `--color-input-border` | `#e0e0e0` | input border |
| `--color-textarea-bg` | `#f5f5f5` | textarea bg |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactForm` | — | no dedicated spec block |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `ContactForm`
*anchors only* — Invalid · Valid · message

### `Footer`
The page SHALL include a branded footer.

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
- **Provenance ban.** No file under `apps/contactpulse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/contactpulse/public/CNAME` = `contactpulse.free.componentdock.com`
  and the package `homepage` = `https://contactpulse.free.componentdock.com`.
