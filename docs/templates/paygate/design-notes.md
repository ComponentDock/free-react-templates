# Paygate — Design Notes

Reference: **Colorlib Wizard 25** — `https://colorlib.com/wp/template/colorlib-wizard-25/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-wizard-25/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-25.jpg  
Shipped: https://paygate.free.componentdock.com

Recreation of ColorLib "Colorlib Wizard 25" — a 3-step payment account creation wizard with step indicators, form fields, and confirmation. Preview URL: https://preview.colorlib.com/theme/colorlib-wizard-25/ (404 at time of research; screenshot used as primary reference). Source slug: `colorlib-wizard-25`.

## Design tokens (`apps/paygate/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#1a73e8` | primary |
| `--color-primary-hover` | `#1557b0` | primary hover |
| `--color-muted` | `#666` | muted |
| `--color-body` | `#26282b` | body |
| `--color-page-bg` | `#f6f6f6` | page bg |
| `--color-border-light` | `#eee` | border light |
| `--color-step-inactive` | `#ccc` | step inactive |
| `--color-step-muted` | `#999` | step muted |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Footer | see fidelity note below |
| 2 | `StepIndicator` | Step Indicator | see fidelity note below |
| 3 | `PersonalStep` | Step 1 — Personal Information | see fidelity note below |
| 4 | `BankStep` | Step 2 — Bank Information | see fidelity note below |
| 5 | `ConfirmStep` | Step 3 — Confirmation | see fidelity note below |
| 6 | `NavigationButtons` | Navigation | see fidelity note below |

## Section-by-section fidelity

### `Footer`
The wizard SHALL display a footer linking to Component Dock.

### `StepIndicator`
The wizard SHALL display a horizontal step indicator with 3 numbered circles and connecting lines.

### `PersonalStep`
The wizard SHALL display personal information fields.

### `BankStep`
The wizard SHALL display bank information fields.

### `ConfirmStep`
The wizard SHALL display a confirmation/review view.

### `NavigationButtons`
The wizard SHALL provide Previous and Next navigation buttons.

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
- **Provenance ban.** No file under `apps/paygate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/paygate/public/CNAME` = `paygate.free.componentdock.com`
  and the package `homepage` = `https://paygate.free.componentdock.com`.
