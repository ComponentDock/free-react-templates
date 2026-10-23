# Formforge — Design Notes

Reference: **Colorlib Wizard 28** — `https://colorlib.com/wp/template/colorlib-wizard-28/`  
Live preview: `https://colorlib.com/etc/bwiz/colorlib-wizard-28/index.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-28.jpg  
Shipped: https://formforge.free.componentdock.com

FormForge is a multi-step form wizard that recreates the ColorLib Wizard 28 design under a different name. It provides a three-step flow (Personal Info, Address, Payment) with a vibrant gradient background, green accent colors, and Roboto/Montserrat typography.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat:wght@400;600;700**

## Design tokens (`apps/formforge/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-green` | `#36c240` | brand green |
| `--color-brand-green-hover` | `#22ae2c` | brand green hover |
| `--color-brand-gradient-start` | `#4158d0` | brand gradient start |
| `--color-brand-gradient-mid` | `#c850c0` | brand gradient mid |
| `--color-brand-gradient-end` | `#ffcc70` | brand gradient end |
| `--color-brand-card` | `#ffffff` | brand card |
| `--color-brand-text` | `#333333` | brand text |
| `--color-brand-label` | `#666666` | brand label |
| `--color-brand-muted` | `#999999` | brand muted |
| `--color-brand-border` | `#e5e5e5` | brand border |
| `--color-brand-progress-bg` | `#f5f5f5` | brand progress bg |
| `--color-brand-btn-back` | `#999999` | brand btn back |
| `--color-brand-btn-back-hover` | `#666666` | brand btn back hover |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Footer with Component Dock link | see fidelity note below |
| 2 | `ProgressBar` | Progress bar | see fidelity note below |
| 3 | `StepIndicator` | — | no dedicated spec block |
| 4 | `PersonalInfoStep` | Step 1 — Personal Info | see fidelity note below |
| 5 | `AddressStep` | Step 2 — Address | see fidelity note below |
| 6 | `PaymentStep` | Step 3 — Payment | see fidelity note below |
| 7 | `FormActions` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Footer`
The template footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

### `ProgressBar`
The wizard SHALL display a progress bar showing the current step percentage with a green fill (#36c240) on a light gray track.

### `StepIndicator`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `PersonalInfoStep`
Step 1 SHALL display fields for Full name, Email, and Phone number with labels and a Next button.

### `AddressStep`
Step 2 SHALL display fields for Building Number, Street, Town, and Zip code with Back and Next buttons.

### `PaymentStep`
Step 3 SHALL display fields for Card Holder Name, Card Number (with icon), CVC (with icon), and Expiration with Back and Submit buttons.

### `FormActions`
*anchors only* — Back · Submit · Next

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
- **Provenance ban.** No file under `apps/formforge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formforge/public/CNAME` = `formforge.free.componentdock.com`
  and the package `homepage` = `https://formforge.free.componentdock.com`.
