# Arcane — Design Notes

Reference: **Colorlib Wizard 22** — `https://colorlib.com/wp/template/colorlib-wizard-22/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-wizard-22/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-22.jpg  
Shipped: https://arcane.free.componentdock.com

- **Recreation of ColorLib source**: Colorlib Wizard 22 (`https://colorlib.com/wp/template/colorlib-wizard-22/`) **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-22/` (unreachable at prep time — 404; fallback to ColorLib listing page CSS + screenshot) **New Name**: `arcane` (App directory: `apps/arcane`, Package: `@fre…

## Design tokens (`apps/arcane/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-primary` | `#1a73e8` | brand primary |
| `--color-brand-primary-hover` | `#1464cc` | brand primary hover |
| `--color-brand-accent` | `#77cc6d` | brand accent |
| `--color-brand-accent-hover` | `#65b55c` | brand accent hover |
| `--color-brand-text` | `#26282b` | brand text |
| `--color-brand-border` | `#eeeeee` | brand border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SuccessScreen` | — | no dedicated spec block |
| 2 | `Footer` | Split-screen form wizard layout | see fidelity note below |
| 3 | `StepIndicator` | — | no dedicated spec block |
| 4 | `PersonalInfoStep` | — | no dedicated spec block |
| 5 | `BookingDetailsStep` | — | no dedicated spec block |
| 6 | `ConfirmationStep` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `SuccessScreen`
*anchors only* — Booking Confirmed! · Start Over

### `Footer`
The application SHALL provide a responsive split-screen layout with a visual panel on the left and a form wizard on the right.

### `StepIndicator`
*anchors only* — Booking progress

### `PersonalInfoStep`
*anchors only* — fullName · alert · email · phone

### `BookingDetailsStep`
*anchors only* — date · alert · timeSlot · serviceType · notes

### `ConfirmationStep`
*anchors only* — terms · alert · Confirmation · Summary · Name: · Email:

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
- **Provenance ban.** No file under `apps/arcane/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/arcane/public/CNAME` = `arcane.free.componentdock.com`
  and the package `homepage` = `https://arcane.free.componentdock.com`.
