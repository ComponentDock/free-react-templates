# Hex — Design Notes

Reference: **Colorlib Wizard 23** — `https://colorlib.com/wp/template/colorlib-wizard-23/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-wizard-23/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-23.jpg  
Shipped: https://hex.free.componentdock.com

Hex is a three-step account-registration wizard in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@400;700**

## Design tokens

No `@theme` token block in `apps/hex/src/index.css` — the palette is applied as utility colours in the components themselves; read the reference tokens off the shipped markup before restyling.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `StepIndicator` | Step indicator | see fidelity note below |
| 2 | `AboutStep` | Step 1 — About (account details) | see fidelity note below |
| 3 | `PersonalStep` | Step 2 — Personal details | see fidelity note below |
| 4 | `PaymentStep` | Step 3 — Payment + summary | see fidelity note below |
| 5 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `StepIndicator`
The system SHALL render the three-step progress bar as circular icon indicators with labels and connectors, marking done/current with the brand cyan.

### `AboutStep`
The system SHALL render the account form: Email Address, Username, Password and Confirm Password as full-width floating-label inputs with bottom-border underline styling.

### `PersonalStep`
The system SHALL render the personal form: First Name + Last Name side by side, a Gender radio group, a Day/Month/Year Date of Birth select trio, and full-width Phone Number and Address inputs.

### `PaymentStep`
The system SHALL render the payment form: Credit Card / Paypal selection cards, Holder Name, Card Number + CVC side by side, Expiry Month/Year selects, and a summary table echoing the values entered in steps 1–2.

### `Footer`
*anchors only* — Component Dock

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
- **Provenance ban.** No file under `apps/hex/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/hex/public/CNAME` = `hex.free.componentdock.com`
  and the package `homepage` = `https://hex.free.componentdock.com`.
