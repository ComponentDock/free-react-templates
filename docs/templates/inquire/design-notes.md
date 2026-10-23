# Inquire — Design Notes

Reference: **Colorlib Contact Form** — `https://colorlib.com/wp/template/colorlib-contact-form/`  
Live preview: **none** — no demo is served for this design (design page 200, `theme/<slug>/` and `theme/bootstrap/<slug>/` 404, no catalog entry; probed 2026-10-23). The TEMPLATES.md screenshot is the sole visual reference.  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-contact-form-template.png  
Shipped: https://inquire.free.componentdock.com

Recreation of ColorLib "Colorlib Contact Form" (https://colorlib.com/wp/template/colorlib-contact-form/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page contact form.

## Design tokens (`apps/inquire/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#28a745` | brand |
| `--color-card` | `#ffffff` | Card and text colors from the original. |
| `--color-title` | `#999999` | title |
| `--color-subtitle` | `#666666` | subtitle |
| `--color-border` | `#e0e0e0` | border |
| `--color-placeholder` | `#aaaaaa` | placeholder |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactForm` | Centered white contact card | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `ContactForm`
The template SHALL render a white card centered on the page containing the form title, subtitle, and form fields.

### `Footer`
The template SHALL render a footer linking to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/inquire/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/inquire/public/CNAME` = `inquire.free.componentdock.com`
  and the package `homepage` = `https://inquire.free.componentdock.com`.
