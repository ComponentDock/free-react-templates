# Formvolt — Design Notes

Reference: **Contact Form V3** — `https://colorlib.com/wp/template/contact-form-v3/`  
Live preview: `https://colorlib.com/etc/cf/ContactFrom_v3/index.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v3.jpg  
Shipped: https://formvolt.free.componentdock.com

Recreate the ColorLib "Contact Form V3" template as a React + Tailwind CSS component. The original features two side-by-side green gradient contact cards on a nature background — one for "Say Hi" (simple contact) and one for "Get a Quote" (extended with service/budget dropdowns), toggled by radio buttons.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/formvolt/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#6abf3b` | Brand green gradient — from the original Contact Form V3 design. |
| `--color-brand-dark` | `#5aa532` | brand dark |
| `--color-brand-light` | `#a3d944` | brand light |
| `--color-ink` | `#ffffff` | Text colors. |
| `--color-label` | `rgba(255, 255, 255, 0.85)` | label |
| `--color-placeholder` | `rgba(255, 255, 255, 0.6)` | placeholder |
| `--color-border` | `rgba(255, 255, 255, 0.4)` | Input borders. |
| `--color-error` | `#ef4444` | error |
| `--color-card-start` | `#a3d944` | Card. |
| `--color-card-end` | `#6abf3b` | card end |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactCards` | Two contact cards rendered side by side | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `ContactCards`
The template SHALL render two green gradient contact cards centered on the page, stacked vertically on mobile and side by side on desktop.

### `Footer`
The footer SHALL display a "More templates at Component Dock" link pointing to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/formvolt/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formvolt/public/CNAME` = `formvolt.free.componentdock.com`
  and the package `homepage` = `https://formvolt.free.componentdock.com`.
