# Jotdown — Design Notes

Reference: **Contact Form V19** — `https://colorlib.com/wp/template/contact-form-v19/`  
Live preview: `https://preview.colorlib.com/theme/contact-form-v19/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v19.jpg  
Shipped: https://jotdown.free.componentdock.com

A centered single-column contact form overlaying a muted map background, with an email input field (envelope icon), a message textarea. It also includes and a rectangular blue submit button. Recreation of ColorLib **Contact Form V19**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:wght@400;500;600;700**

## Design tokens (`apps/jotdown/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#3563e9` | Brand blue — from the original ColorLib Contact Form V19 design. |
| `--color-brand-dark` | `#2948b8` | brand dark |
| `--color-ink` | `#2d3748` | Text colors. |
| `--color-body` | `#a0aec0` | body |
| `--color-border` | `#e2e8f0` | Input borders. |
| `--color-error` | `#f44336` | error |
| `--color-card` | `#ffffff` | Card. |
| `--color-map-tint` | `#e8edf5` | Map overlay tint. |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | Font. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactForm` | Contact form card | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `ContactForm`
The form SHALL be rendered in a centered white card with a heading, email input, message textarea, and submit button.

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
- **Provenance ban.** No file under `apps/jotdown/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jotdown/public/CNAME` = `jotdown.free.componentdock.com`
  and the package `homepage` = `https://jotdown.free.componentdock.com`.
