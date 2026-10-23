# Wizardry — Design Notes

Reference: **Colorlib Wizard 27** — `https://colorlib.com/wp/template/colorlib-wizard-27/`  
Live preview: `https://colorlib.com/etc/bwiz/colorlib-wizard-27/index.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-27.jpg  
Shipped: https://wizardry.free.componentdock.com

A Bootstrap Wizards template with multi-step form wizard, form validation prevents, successful submission and navigation buttons sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat:wght@400;500;600;700;800**

## Design tokens (`apps/wizardry/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-sky` | `#33a7d7` | brand sky |
| `--color-brand-sky-dark` | `#2888b0` | brand sky dark |
| `--color-brand-indigo` | `#364cd2` | brand indigo |
| `--color-brand-indigo-dark` | `#28379e` | brand indigo dark |
| `--color-brand-blue` | `#4158d0` | brand blue |
| `--color-brand-pink` | `#c850c0` | brand pink |
| `--color-brand-gold` | `#ffcc70` | brand gold |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `StepIndicator` | — | no dedicated spec block |
| 2 | `SuccessScreen` | Successful submission completes the wizard | see fidelity note below |
| 3 | `AccountStep` | — | no dedicated spec block |
| 4 | `BillingStep` | — | no dedicated spec block |
| 5 | `AgreementStep` | — | no dedicated spec block |
| 6 | `FormActions` | — | no dedicated spec block |
| 7 | `Footer` | Footer with Component Dock branding | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `StepIndicator`
*anchors only* — Wizard steps

### `SuccessScreen`
Users SHALL see a success screen after completing all steps with valid data.

### `AccountStep`
*anchors only* — alert · Account Setup · Email Address · Password · Confirm Password

### `BillingStep`
*anchors only* — alert · Billing Setup · Card Holder Name · Card Number · Expiration (MM/YYYY)

### `AgreementStep`
*anchors only* — alert · Agreement · I read agreement and I have not any objection.

### `FormActions`
*anchors only* — Back

### `Footer`
Every template's footer SHALL link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/wizardry/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wizardry/public/CNAME` = `wizardry.free.componentdock.com`
  and the package `homepage` = `https://wizardry.free.componentdock.com`.
