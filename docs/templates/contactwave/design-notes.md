# Contactwave — Design Notes

Reference: **Contact Form V5** — `https://colorlib.com/wp/template/contact-form-v5/`  
Live preview: `https://preview.colorlib.com/theme/contact-form-v5/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v5.jpeg  
Shipped: https://contactwave.free.componentdock.com

ContactWave is a free, advanced contact form template that recreates the ColorLib "Contact Form V5" design. It features floating labels, a budget range slider, product type radio selection, and client-side validation — all built with React, Tailwind CSS, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@300;400;500;600;700**

## Design tokens (`apps/contactwave/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-bg` | `#f5f5f5` | brand bg |
| `--color-brand-card` | `#ffffff` | brand card |
| `--color-brand-heading` | `#222222` | brand heading |
| `--color-brand-text` | `#333333` | brand text |
| `--color-brand-label` | `#999999` | brand label |
| `--color-brand-placeholder` | `#aaaaaa` | brand placeholder |
| `--color-brand-border` | `#e0e0e0` | brand border |
| `--color-brand-error` | `#e74c3c` | brand error |
| `--color-brand-success` | `#27ae60` | brand success |
| `--color-brand-button` | `#333333` | brand button |
| `--color-brand-button-text` | `#ffffff` | brand button text |
| `--font-display` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactForm` | Renders the contact form heading | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `ContactForm`
The app SHALL display a "Contact Us" heading centered at the top of the form card.

### `Footer`
The app SHALL render a footer with a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/contactwave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/contactwave/public/CNAME` = `contactwave.free.componentdock.com`
  and the package `homepage` = `https://contactwave.free.componentdock.com`.
