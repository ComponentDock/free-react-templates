# Conjure — Design Notes

Reference: **Colorlib Wizard 1** — `https://colorlib.com/wp/template/colorlib-wizard-1/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-wizard-1/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-1.jpg  
Shipped: https://conjure.free.componentdock.com

Conjure is a single-page multi-step registration FORM WIZARD in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@400;600**

## Design tokens (`apps/conjure/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#f9f6f1` | Page background: warm cream #f9f6f1 |
| `--color-card` | `#ffffff` | Card: white #fff |
| `--color-accent` | `#6d7f52` | Accent olive/sage #6d7f52 — active dots, enabled Forward/Submit, subtitle, links |
| `--color-accent-hover` | `#849963` | accent hover |
| `--color-accent-link-hv` | `#89b843` | accent link hv |
| `--color-sand` | `#e9e0cf` | Sand/beige #e9e0cf — idle dots, beige buttons, focus underline |
| `--color-sand-hover` | `#cfc7b8` | sand hover |
| `--color-title` | `#453e79` | Title: deep indigo #453e79 |
| `--color-title-border` | `#dad8e4` | Title border: #dad8e4 |
| `--color-text` | `#999999` | Body/placeholder text: #999 |
| `--color-input` | `#666666` | Input text + button text: #666 |
| `--color-line` | `#e6e6e6` | Input bottom rule: #e6e6e6 |
| `--color-dropdown` | `#81acee` | Dropdown border + hover: #81acee |
| `--color-tick` | `#999999` | Radio/checkbox ring: #999 |
| `--color-primary-50` | `#f2f7ed` | Primary scale — maps accent to the primary slot for shared Button |
| `--color-primary-100` | `#e0edda` | primary 100 |
| `--color-primary-200` | `#c1dbb5` | primary 200 |
| `--color-primary-300` | `#a2c990` | primary 300 |
| `--color-primary-400` | `#83b76b` | primary 400 |
| `--color-primary-500` | `#6d7f52` | primary 500 |
| `--color-primary-600` | `#5a6a44` | primary 600 |
| `--color-primary-700` | `#475536` | primary 700 |
| `--color-primary-800` | `#344028` | primary 800 |
| `--color-primary-900` | `#212b1a` | primary 900 |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `WizardCard` | Wizard card layout | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `WizardCard`
The system SHALL render the white 920px card split 40/60 into a left image column and a right form column.

### `Footer`
The system SHALL include the required attribution footer.

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
- **Provenance ban.** No file under `apps/conjure/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/conjure/public/CNAME` = `conjure.free.componentdock.com`
  and the package `homepage` = `https://conjure.free.componentdock.com`.
