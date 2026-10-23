# Divine — Design Notes

Reference: **Colorlib Wizard 5** — `https://colorlib.com/wp/template/colorlib-wizard-5/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-wizard-5/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg  
Shipped: https://divine.free.componentdock.com

Divine is a single-page four-step ORDER WIZARD in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/divine/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-page-bg` | `#f5e6d0` | page bg |
| `--color-card-bg` | `#ffffff` | card bg |
| `--color-accent` | `#f0a37a` | accent |
| `--color-accent-hover` | `#e08960` | accent hover |
| `--color-text-primary` | `#333333` | text primary |
| `--color-text-secondary` | `#999999` | text secondary |
| `--color-input-border` | `#e0e0e0` | input border |
| `--color-step-inactive` | `#d9d9d9` | step inactive |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Footer links to Component Dock | see fidelity note below |
| 2 | `StepIndicator` | Progress indicator shows step progress | see fidelity note below |
| 3 | `StepBilling` | Page loads with step 1 active (Billing Details) | see fidelity note below |
| 4 | `StepShipping` | — | no dedicated spec block |
| 5 | `StepPayment` | — | no dedicated spec block |
| 6 | `StepConfirm` | — | no dedicated spec block |
| 7 | `NavButtons` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Footer`
The page footer SHALL include a link to https://www.componentdock.com/.

### `StepIndicator`
A horizontal progress bar with 4 labeled segments SHALL be displayed, highlighting the active step in the peach accent color.

### `StepBilling`
A four-step order wizard SHALL be displayed with a split-screen layout: a decorative left panel (hidden on mobile) and a white form card on the right.

### `StepShipping`
*anchors only* — Shipping Information · Shipping Method · Select Method · Standard Shipping (5-7 days) · Express Shipping (2-3 days) · Overnight Shipping (1 day)

### `StepPayment`
*anchors only* — Payment Method · Name on Card · Name on Card is required · Card Number · Card Number is required · Expiry Date

### `StepConfirm`
*anchors only* — Order Confirmation · Billing Details · Shipping · Payment

### `NavButtons`
*anchors only* — Back · Confirm · Next

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
- **Provenance ban.** No file under `apps/divine/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/divine/public/CNAME` = `divine.free.componentdock.com`
  and the package `homepage` = `https://divine.free.componentdock.com`.
