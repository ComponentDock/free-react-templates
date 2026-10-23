# Finstep — Design Notes

Reference: **Colorlib Wizard 24** — `https://colorlib.com/wp/template/colorlib-wizard-24/`  
Live preview: `https://colorlib.com/etc/bwiz/colorlib-wizard-24/index.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-24.jpg  
Shipped: https://finstep.free.componentdock.com

Recreation of ColorLib "Colorlib Wizard 24" — a 4-step financial sign-up wizard with floating labels, gradient accents, and progress tracking. Preview URL: https://colorlib.com/etc/bwiz/colorlib-wizard-24/index.html. Source slug: `colorlib-wizard-24`. **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans:wght@300;400;500;600;700**

## Design tokens (`apps/finstep/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-orange` | `#f27121` | brand orange |
| `--color-brand-pink` | `#e94057` | brand pink |
| `--color-brand-purple` | `#8a2387` | brand purple |
| `--color-focus-green` | `#6bc734` | focus green |
| `--color-heading` | `#333` | heading |
| `--color-muted` | `#666` | muted |
| `--color-step-inactive` | `#ccc` | step inactive |
| `--color-connector` | `#e5e5e5` | connector |
| `--color-input-border` | `#e5e5e5` | input border |
| `--color-btn-gray` | `#999` | btn gray |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `WizardHeader` | — | no dedicated spec block |
| 2 | `StepIndicator` | Step Indicator Bar | see fidelity note below |
| 3 | `Step1About` | Step 1 - About (Personal Information) | see fidelity note below |
| 4 | `Step2Account` | Step 2 - Account | see fidelity note below |
| 5 | `Step3Ownership` | Step 3 - Ownership | see fidelity note below |
| 6 | `Step4Financing` | Step 4 - Financing | see fidelity note below |
| 7 | `NavigationActions` | Navigation | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `WizardHeader`
*anchors only* — Sign Up To Financial · Fill all form field to go next step

### `StepIndicator`
The wizard SHALL display a horizontal step indicator bar with 4 circular step icons and gradient connectors.

### `Step1About`
The wizard SHALL display personal information fields with floating labels.

### `Step2Account`
The wizard SHALL display account fields with radio toggle and password fields.

### `Step3Ownership`
The wizard SHALL display ownership fields with dropdowns and date of birth.

### `Step4Financing`
The wizard SHALL display financing fields with inventory dropdown and balance inputs.

### `NavigationActions`
The wizard SHALL provide Previous and Next navigation buttons.

### `Footer`
The wizard SHALL display a footer linking to Component Dock.

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
- **Provenance ban.** No file under `apps/finstep/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/finstep/public/CNAME` = `finstep.free.componentdock.com`
  and the package `homepage` = `https://finstep.free.componentdock.com`.
