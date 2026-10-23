# Formpost — Design Notes

Reference: **Contact Form 09** — `https://colorlib.com/wp/template/contact-form-09/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/contact-form-09/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-09.jpg  
Shipped: https://formpost.free.componentdock.com

Formpost is a contact form 09 with a contact info, contact form and footer. It recreates the ColorLib **Contact Form 09** design (https://colorlib.com/wp/template/contact-form-09/, preview: https://preview.colorlib.com/theme/bootstrap/contact-form-09/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display:wght@400;500;600;700**

## Design tokens (`apps/formpost/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c4a56e` | brand |
| `--color-brand-dark` | `#b89a62` | brand dark |
| `--color-bg-page` | `#191919` | bg page |
| `--color-text-primary` | `#ffffff` | text primary |
| `--color-text-secondary` | `#aaaaaa` | text secondary |
| `--color-card-surface` | `#2a2a2a` | card surface |
| `--color-input-border` | `#444444` | input border |

> The spec has no section-level requirements; the order below is read from `apps/formpost/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `PageTitle` | — | no dedicated spec block |
| 2 | `ContactInfo` | — | no dedicated spec block |
| 3 | `ContactForm` | — | no dedicated spec block |
| 4 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `PageTitle`
*anchors only* — Contact Form #09

### `ContactInfo`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `ContactForm`
*anchors only* — name · email · subject · message

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
- **Provenance ban.** No file under `apps/formpost/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formpost/public/CNAME` = `formpost.free.componentdock.com`
  and the package `homepage` = `https://formpost.free.componentdock.com`.
