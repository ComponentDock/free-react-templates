# Steppr — Design Notes

Reference: **Colorlib Wizard 21** — `https://colorlib.com/wp/template/colorlib-wizard-21/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-wizard-21/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-21.jpg  
Shipped: https://steppr.free.componentdock.com

Steppr is a multi-step wizard form for account registration with payment details. It provides a clean, guided UX with three steps: Account Information, Payment Information, and a Confirmation Summary.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Raleway**, **Raleway:wght@400;500;600;700;800**

## Design tokens (`apps/steppr/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e8f4fd` | primary 50 |
| `--color-primary-100` | `#c5e3fa` | primary 100 |
| `--color-primary-200` | `#9ed0f6` | primary 200 |
| `--color-primary-300` | `#6eb9f0` | primary 300 |
| `--color-primary-400` | `#359bfa` | primary 400 |
| `--color-primary-500` | `#2f8be0` | primary 500 |
| `--color-primary-600` | `#2878c4` | primary 600 |
| `--color-primary-700` | `#1e5e9c` | primary 700 |
| `--color-primary-800` | `#154574` | primary 800 |
| `--color-primary-900` | `#0c2d4c` | primary 900 |
| `--color-primary-950` | `#061a30` | primary 950 |
| `--color-accent-50` | `#f0f9e8` | accent 50 |
| `--color-accent-100` | `#d8f0c5` | accent 100 |
| `--color-accent-200` | `#bde69e` | accent 200 |
| `--color-accent-300` | `#9ed973` | accent 300 |
| `--color-accent-400` | `#6eba2a` | accent 400 |
| `--color-accent-500` | `#5fa125` | accent 500 |
| `--color-accent-600` | `#4d851f` | accent 600 |
| `--color-accent-700` | `#3b6818` | accent 700 |
| `--color-accent-800` | `#2a4c12` | accent 800 |
| `--color-accent-900` | `#192f0b` | accent 900 |
| `--color-accent-950` | `#0c1a06` | accent 950 |
| `--font-raleway` | `'Raleway', sans-serif` | font raleway |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `StepIndicator` | Step indicator shows correct state | see fidelity note below |
| 2 | `AccountStep` | Account information form | see fidelity note below |
| 3 | `PaymentStep` | Payment information form | see fidelity note below |
| 4 | `ConfirmStep` | Confirmation summary | see fidelity note below |
| 5 | `NavigationButtons` | — | no dedicated spec block |
| 6 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `StepIndicator`
The step indicator SHALL visually distinguish active, completed, and pending steps.

### `AccountStep`
Step 1 SHALL collect username, email, password, and confirm password.

### `PaymentStep`
Step 2 SHALL collect card type, card number, CVC, and expiry date.

### `ConfirmStep`
Step 3 SHALL display all entered data in a read-only summary table.

### `NavigationButtons`
*anchors only* — Next step · Submit

### `Footer`
The footer SHALL link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/steppr/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/steppr/public/CNAME` = `steppr.free.componentdock.com`
  and the package `homepage` = `https://steppr.free.componentdock.com`.
