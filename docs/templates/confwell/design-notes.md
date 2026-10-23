# Confwell — Design Notes

Reference: **Colorlib Wizard 3** — `https://colorlib.com/wp/template/colorlib-wizard-3/`  
Live preview: `https://colorlib.com/etc/bwiz/colorlib-wizard-3/index.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-3.jpg  
Shipped: https://confwell.free.componentdock.com

- **Recreation of ColorLib source**: Colorlib Wizard 3 (`https://colorlib.com/wp/template/colorlib-wizard-3/`) **Preview URL**: `https://colorlib.com/etc/bwiz/colorlib-wizard-3/index.html` **New Name**: `confwell` (App directory: `apps/confwell`, Package: `@free-react-templates/confwell`) **Category**: Forms / Multi-step Event Registratio…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Arvo**, **Arvo:wght@400;700**, **Times New Roman**

## Design tokens (`apps/confwell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-sans` | `'Arvo', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-serif` | `'Times New Roman', ui-serif, Georgia, serif` | font serif |
| `--color-slate-800` | `#1e293b` | ConfWell palette — dark event wizard aesthetic |
| `--color-slate-900` | `#0f172a` | slate 900 |
| `--color-brand` | `#ffffff` | brand |
| `--color-muted` | `#cccccc` | muted |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Wizard` | Step navigation between wizard steps | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Wizard`
The wizard SHALL allow navigation between 3 steps using Previous and Next buttons.

### `Footer`
The wizard SHALL include a footer that links to Component Dock.

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
- **Provenance ban.** No file under `apps/confwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/confwell/public/CNAME` = `confwell.free.componentdock.com`
  and the package `homepage` = `https://confwell.free.componentdock.com`.
