# Paddle — Design Notes

Reference: **Bootstrap Buttons 18** — `https://colorlib.com/wp/template/bootstrap-buttons-18/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap-buttons-18/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-18.jpg  
Shipped: https://paddle.free.componentdock.com

Paddle is a single-page button/UI-kit showcase template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600**

## Design tokens (`apps/paddle/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-paddle-primary` | `#4ba1fa` | paddle primary |
| `--color-paddle-primary-hover` | `#1987f9` | paddle primary hover |
| `--color-paddle-secondary` | `#f9243f` | paddle secondary |
| `--color-paddle-secondary-hover` | `#e40622` | paddle secondary hover |
| `--color-paddle-tertiary` | `#fc6946` | paddle tertiary |
| `--color-paddle-tertiary-hover` | `#fb4014` | paddle tertiary hover |
| `--color-paddle-quarternary` | `#a7e52d` | paddle quarternary |
| `--color-paddle-quarternary-hover` | `#8dc224` | paddle quarternary hover |
| `--color-paddle-dark` | `#343a40` | paddle dark |
| `--color-paddle-heading` | `#212529` | paddle heading |
| `--color-paddle-text` | `#212529` | paddle text |
| `--color-paddle-border` | `#e6e6e6` | paddle border |
| `--color-social-facebook` | `#4f69a2` | social facebook |
| `--color-social-twitter` | `#69b6f0` | social twitter |
| `--color-social-linkedin` | `#2884ba` | social linkedin |
| `--color-social-pinterest` | `#d03940` | social pinterest |
| `--color-social-dribbble` | `#ea6294` | social dribbble |
| `--font-paddle` | `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font paddle |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Pagination` | Pagination | see fidelity note below |
| 2 | `Dropdowns` | Dropdown buttons | see fidelity note below |
| 3 | `Groups` | Group buttons | see fidelity note below |
| 4 | `CheckboxesRadios` | Checkboxes | see fidelity note below |
| 5 | `SocialButtons` | Radio buttons | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Pagination`
The system SHALL render the circular pagination with the blue active state.

### `Dropdowns`
The system SHALL render four full-width round dropdown toggles with working menus.

### `Groups`
The system SHALL render the two joined button groups with the repeated end labels.

### `CheckboxesRadios`
The system SHALL render five custom checkboxes in the brand colors with the exact labels and checked states.

### `SocialButtons`
The system SHALL render five custom radios in the brand colors with the exact labels and checked states.

### `Footer`
The system SHALL render a minimal footer linking `https://www.componentdock.com/` ("Component Dock") — required by repo convention on every template (the original has no footer).

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
- **Provenance ban.** No file under `apps/paddle/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/paddle/public/CNAME` = `paddle.free.componentdock.com`
  and the package `homepage` = `https://paddle.free.componentdock.com`.
