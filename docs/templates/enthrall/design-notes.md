# Enthrall — Design Notes

Reference: **Colorlib Wizard 14** — `https://colorlib.com/wp/template/colorlib-wizard-14/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-wizard-14/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-14.jpg  
Shipped: https://enthrall.free.componentdock.com

Enthrall is a single-page THREE-STEP LINEAR WIZARD in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/enthrall/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#8be7ac` | Enthrall brand palette — mint-green page, electric-green accent. |
| `--color-page-dark` | `#6bc98d` | page dark |
| `--color-accent` | `#1ed760` | Accent — electric green: current/hover tab, buttons, focus borders. |
| `--color-accent-dark` | `#18b34f` | accent dark |
| `--color-card` | `#ffffff` | Card white. |
| `--color-ink` | `#222222` | Ink — body text (#222 from the original). |
| `--color-muted` | `#999999` | Muted — idle tab title, select text, placeholders, Previous button. |
| `--color-line` | `#ebebeb` | Line — input borders, Previous button border. |
| `--color-tab-idle` | `#f8f8f8` | Tab idle background. |
| `--color-error` | `#f63726` | Error — invalid input border + error message text. |
| `--color-ink-dark` | `#f5f5f5` | Ink dark — for dark mode variant. |
| `--color-page-dark-mode` | `#1a3a2a` | Page dark — dark mode page. |
| `--color-card-dark` | `#2a2a2a` | Card dark — dark mode card. |
| `--color-primary-50` | `#eefbf3` | primary 50 |
| `--color-primary-100` | `#d6f5e1` | primary 100 |
| `--color-primary-200` | `#b0eac6` | primary 200 |
| `--color-primary-300` | `#7ddaa5` | primary 300 |
| `--color-primary-400` | `#43c47d` | primary 400 |
| `--color-primary-500` | `#1ed760` | primary 500 |
| `--color-primary-600` | `#18b34f` | primary 600 |
| `--color-primary-700` | `#158f40` | primary 700 |
| `--color-primary-800` | `#147236` | primary 800 |
| `--color-primary-900` | `#125d2e` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins font family. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `StepTabs` | Step tab navigation | see fidelity note below |
| 2 | `AboutStep` | About step (profile + name/email) | see fidelity note below |
| 3 | `AccountStep` | Account step (job medallions) | see fidelity note below |
| 4 | `AddressStep` | Address step (street/city/country) | see fidelity note below |
| 5 | `StepActions` | Action buttons | see fidelity note below |

## Section-by-section fidelity

### `StepTabs`
The system SHALL render exactly three flat step tabs — About, Account, Address — with the current tab highlighted green and hover feedback.

### `AboutStep`
The first step SHALL contain the circular avatar uploader and the three required personal fields in the source's layout.

### `AccountStep`
The second step SHALL contain the "What are you doing ?" question and three circular icon radios with Coder selected by default.

### `AddressStep`
The third step SHALL contain the two two-column rows with the native country select.

### `StepActions`
The system SHALL render the outlined Previous (hidden on the first step) and the solid green Next/Finish buttons in the source's layout.

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
- **Provenance ban.** No file under `apps/enthrall/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/enthrall/public/CNAME` = `enthrall.free.componentdock.com`
  and the package `homepage` = `https://enthrall.free.componentdock.com`.
