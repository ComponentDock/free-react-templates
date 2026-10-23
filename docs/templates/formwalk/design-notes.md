# Formwalk — Design Notes

Reference: **Colorlib Wizard 30** — `https://colorlib.com/wp/template/colorlib-wizard-30/`  
Live preview: `https://colorlib.com/etc/bwiz/colorlib-wizard-30/index.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-30.jpg  
Shipped: https://formwalk.free.componentdock.com

- **Recreation of ColorLib source**: Colorlib Wizard 30 (`https://colorlib.com/wp/template/colorlib-wizard-30/`) **Preview URL**: `https://colorlib.com/etc/bwiz/colorlib-wizard-30/index.html` **New Name**: `formwalk` (App directory: `apps/formwalk`, Package: `@free-react-templates/formwalk`) **Category**: Forms / Multi-step Form Wizard **…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;600;700**

## Design tokens (`apps/formwalk/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--color-brand` | `#3760e5` | FormWalk palette — blue wizard aesthetic |
| `--color-brand-hover` | `#2b4ab3` | brand hover |
| `--color-card` | `#ffffff` | card |
| `--color-step-inactive` | `#cccccc` | step inactive |
| `--color-border` | `#e5e5e5` | border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Wizard` | Full-page background with centered wizard card | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Wizard`
The page SHALL display a full-page background image with a centered white wizard card.

### `Footer`
The template footer SHALL link to Component Dock.

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
- **Provenance ban.** No file under `apps/formwalk/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formwalk/public/CNAME` = `formwalk.free.componentdock.com`
  and the package `homepage` = `https://formwalk.free.componentdock.com`.
