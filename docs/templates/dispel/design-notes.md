# Dispel — Design Notes

Reference: **Colorlib Wizard 11** — `https://colorlib.com/wp/template/colorlib-wizard-11/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-wizard-11/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-11.jpg  
Shipped: https://dispel.free.componentdock.com

Dispel is a single-page multi-step EMPLOYEE SIGN-UP FORM WIZARD in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto Slab**, **Roboto Slab:wght@400;700**

## Design tokens (`apps/dispel/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#fa6d6a` | Page background: solid coral #fa6d6a |
| `--color-card` | `#ffffff` | Card: white #fff |
| `--color-brand` | `#fa5e5b` | Brand accent: deeper coral #fa5e5b — active tile, Next/Submit, step-heading, dropdown hover |
| `--color-brand-hover` | `#f82d2a` | brand hover |
| `--color-muted` | `#adadad` | Muted: grey #adadad — inactive tiles, Previous button |
| `--color-ink` | `#222222` | Ink: dark #222 — text, labels, chevrons, list items |
| `--color-line` | `#ebebeb` | Line: border grey #ebebeb — inputs, date group, list, dividers |
| `--color-focus` | `#666666` | Focus: input focus/valid border #666 |
| `--color-error` | `#ff1212` | Error: red #ff1212 — error border + error icon |
| `--color-asterisk` | `#b90000` | Error asterisk: dark red #b90000 |
| `--shadow-card` | `0px 3px 9.5px 0.5px rgba(0, 0, 0, 0.1)` | Card shadow |
| `--color-primary-50` | `#fef2f2` | Primary scale — maps brand to primary slot for shared Button |
| `--color-primary-100` | `#fee2e2` | primary 100 |
| `--color-primary-200` | `#fecaca` | primary 200 |
| `--color-primary-300` | `#fca5a5` | primary 300 |
| `--color-primary-400` | `#f87171` | primary 400 |
| `--color-primary-500` | `#fa5e5b` | primary 500 |
| `--color-primary-600` | `#e04845` | primary 600 |
| `--color-primary-700` | `#c03633` | primary 700 |
| `--color-primary-800` | `#9f2d2b` | primary 800 |
| `--color-primary-900` | `#7f2422` | primary 900 |
| `--font-sans` | `'Roboto Slab', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `WizardCard` | — | no dedicated spec block |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `WizardCard`
*anchors only* — First name · Last name · Gender · User name · Password · Email

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
- **Provenance ban.** No file under `apps/dispel/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dispel/public/CNAME` = `dispel.free.componentdock.com`
  and the package `homepage` = `https://dispel.free.componentdock.com`.
