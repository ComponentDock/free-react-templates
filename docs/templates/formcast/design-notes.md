# Formcast — Design Notes

Reference: **Contact Form V20** — `https://colorlib.com/wp/template/contact-form-v20/`  
Live preview: `https://preview.colorlib.com/theme/contact-form-v20/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v20.jpg  
Shipped: https://formcast.free.componentdock.com

FormCast is a centered contact form template that recreates ColorLib Contact Form V20 (https://colorlib.com/wp/template/contact-form-v20/). It features a full-screen muted map-like gradient background with a centered white card, envelope icon, two-column name/email fields, a message textarea, and a coral-red send button.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**

## Design tokens (`apps/formcast/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ef4444` | Brand coral-red — from the original Contact Form V20 design. |
| `--color-brand-dark` | `#dc2626` | brand dark |
| `--color-brand-light` | `#f87171` | brand light |
| `--color-ink` | `#1f2937` | Text colors. |
| `--color-label` | `#374151` | label |
| `--color-placeholder` | `#9ca3af` | placeholder |
| `--color-border` | `#d1d5db` | Input borders. |
| `--color-error` | `#ef4444` | error |
| `--color-card` | `#ffffff` | Card. |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | Original font: "Inter" via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactCard` | — | no dedicated spec block |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `ContactCard`
*anchors only* — Drop Us A Message

### `Footer`
The template SHALL display a footer with a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/formcast/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formcast/public/CNAME` = `formcast.free.componentdock.com`
  and the package `homepage` = `https://formcast.free.componentdock.com`.
