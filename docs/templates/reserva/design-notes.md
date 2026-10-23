# Reserva — Design Notes

Reference: **Colorlib Wizard 19** — `https://colorlib.com/wp/template/colorlib-wizard-19/`  
Live preview: `https://colorlib.com/etc/bwiz/colorlib-wizard-19/index.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-19.jpg  
Shipped: https://reserva.free.componentdock.com

A three-step room booking wizard form for accommodation businesses. Step 1 ("Account") collects email, country, password, daily budget, and newsletter subscription. Step 2 ("Room type") presents radio buttons for Single room, Family room, and Business room. Step 3 ("Extra details") provides a textarea for room description.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/reserva/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-blue` | `#6dbdfe` | brand blue |
| `--color-brand-blue-dark` | `#3aa6fe` | brand blue dark |
| `--color-brand-gray` | `#999999` | brand gray |
| `--color-brand-border` | `#ebebeb` | brand border |
| `--color-brand-text` | `#222222` | brand text |
| `--color-brand-muted` | `#999999` | brand muted |
| `--color-brand-secondary-bg` | `#ebebeb` | brand secondary bg |
| `--color-brand-secondary-hover` | `#d2d2d2` | brand secondary hover |
| `--color-brand-radio-label` | `#666666` | brand radio label |
| `--color-brand-select-hover` | `#6dbdfe` | brand select hover |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `StepIndicator` | Step indicator bar with three steps | see fidelity note below |
| 2 | `AccountStep` | Step 1 — Account form | see fidelity note below |
| 3 | `RoomTypeStep` | — | no dedicated spec block |
| 4 | `ExtraDetailsStep` | Step 3 — Extra details | see fidelity note below |
| 5 | `FormActions` | — | no dedicated spec block |
| 6 | `Footer` | Form completes on Finish | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `StepIndicator`
The form SHALL display a step indicator bar at the top with three labeled steps: Account, Room type, Extra details.

### `AccountStep`
The form SHALL display account fields on step 1: email, country dropdown, password, daily budget dropdown, and newsletter checkbox.

### `RoomTypeStep`
*anchors only* — room_type · What type of room would you want?

### `ExtraDetailsStep`
The form SHALL advance to step 3 showing a textarea for room description.

### `FormActions`
*anchors only* — Previous

### `Footer`
The form SHALL show a completion action when the user clicks Finish.

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
- **Provenance ban.** No file under `apps/reserva/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/reserva/public/CNAME` = `reserva.free.componentdock.com`
  and the package `homepage` = `https://reserva.free.componentdock.com`.
