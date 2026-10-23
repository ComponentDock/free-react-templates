# Spellbind — Design Notes

Reference: **Colorlib Wizard 15** — `https://colorlib.com/wp/template/colorlib-wizard-15/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-wizard-15/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-15.jpg  
Shipped: https://spellbind.free.componentdock.com

Spellbind is a single-page THREE-STEP VERTICAL WIZARD in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto Slab**, **Roboto Slab:wght@400;700**

## Design tokens (`apps/spellbind/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#222222` | Spellbind brand palette — dark page, medium-blue accent. |
| `--color-page-dark` | `#1a1a1a` | page dark |
| `--color-accent` | `#4966b1` | Accent — medium blue: current step circle, checked tile border, slider, buttons. |
| `--color-accent-dark` | `#3a5299` | accent dark |
| `--color-panel` | `#f8f8f8` | Panel — content + actions right column background. |
| `--color-ink` | `#222222` | Ink — body text, headings, bold input text. |
| `--color-muted` | `#999999` | Muted — idle step number/title, captions, search icon, Previous button. |
| `--color-muted-dark` | `#666666` | muted dark |
| `--color-desc` | `#555555` | Desc — paragraph description text. |
| `--color-line` | `#ebebeb` | Line — input borders, connector line, idle circle bg. |
| `--color-btn-prev` | `#e8e8e8` | Button Previous — bg and text. |
| `--color-slider` | `#e8e8e8` | Slider — track and handle. |
| `--color-search-btn` | `#666666` | Search button bg. |
| `--color-search-btn-hover` | `#4d4d4d` | search btn hover |
| `--color-error` | `#f63726` | Error — invalid input border + alert icon. |
| `--color-container` | `#ffffff` | Container white. |
| `--color-ink-dark` | `#f5f5f5` | Ink dark — for dark mode variant. |
| `--color-page-dark-mode` | `#111111` | Page dark — dark mode page. |
| `--color-panel-dark` | `#2a2a2a` | Panel dark — dark mode panel. |
| `--color-container-dark` | `#1e1e1e` | Container dark — dark mode container. |
| `--color-primary-50` | `#eef2fa` | primary 50 |
| `--color-primary-100` | `#d5ddf0` | primary 100 |
| `--color-primary-200` | `#b0bee3` | primary 200 |
| `--color-primary-300` | `#8a9fd6` | primary 300 |
| `--color-primary-400` | `#6b85c4` | primary 400 |
| `--color-primary-500` | `#4966b1` | primary 500 |
| `--color-primary-600` | `#3a5299` | primary 600 |
| `--color-primary-700` | `#2d4080` | primary 700 |
| `--color-primary-800` | `#223066` | primary 800 |
| `--color-primary-900` | `#1a244d` | primary 900 |
| `--font-sans` | `'Roboto Slab', ui-serif, Georgia, serif` | Roboto Slab font family. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Timeline` | Vertical step timeline | see fidelity note below |
| 2 | `PersonalInfoStep` | Personal info step | see fidelity note below |
| 3 | `BankStep` | Connect Bank Account step | see fidelity note below |
| 4 | `GoalsStep` | Set Financial Goals step | see fidelity note below |
| 5 | `StepActions` | Action buttons | see fidelity note below |

## Section-by-section fidelity

### `Timeline`
The system SHALL render the numbered-circle vertical timeline with exactly three steps — Personal info, Connect Bank Account, Set Financial Goals — connected by a vertical line, with the current step highlighted blue.

### `PersonalInfoStep`
The first step SHALL contain the "Personal information" heading, the description, and the name/email/phone/birth-date/SSN fields in the source's 680px layout.

### `BankStep`
The second step SHALL contain the bank search row and the eight radio tiles with the first selected.

### `GoalsStep`
The third step SHALL contain the monthly-spend money slider and the live readout.

### `StepActions`
The system SHALL render the grey Previous (hidden on the first step) and the solid blue Next/Finish buttons in the source's layout.

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
- **Provenance ban.** No file under `apps/spellbind/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/spellbind/public/CNAME` = `spellbind.free.componentdock.com`
  and the package `homepage` = `https://spellbind.free.componentdock.com`.
