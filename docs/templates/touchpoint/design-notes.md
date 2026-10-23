# Touchpoint — Design Notes

Reference: **Contact Form 01** — `https://colorlib.com/wp/template/contact-form-01/`  
Live preview: `https://preview.colorlib.com/theme/contact-form-01/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-01.jpg  
Shipped: https://touchpoint.free.componentdock.com

Recreation of ColorLib "Contact Form 01" — a clean, minimal two-column contact page with a form on the left and a blue contact-info card on the right. Uses Bootstrap Framework.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/touchpoint/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-brand-blue` | `#3b82f6` | brand blue |
| `--color-brand-blue-light` | `#60a5fa` | brand blue light |
| `--color-page-bg` | `#f5f5f5` | page bg |

> The spec has no section-level requirements; the order below is read from `apps/touchpoint/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactForm` | — | no dedicated spec block |
| 2 | `ContactInfo` | — | no dedicated spec block |
| 3 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `ContactForm`
*anchors only* — Contact form · Name · alert · Email · Subject · Message

### `ContactInfo`
*anchors only* — Contact us

### `Footer`
*anchors only* — Component Dock

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
- **Provenance ban.** No file under `apps/touchpoint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/touchpoint/public/CNAME` = `touchpoint.free.componentdock.com`
  and the package `homepage` = `https://touchpoint.free.componentdock.com`.
