# Scout — Design Notes

Reference: **Colorlib Wizard 18** — `https://colorlib.com/wp/template/colorlib-wizard-18/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-wizard-18/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-18.jpg  
Shipped: https://scout.free.componentdock.com

A three-step feedback/review wizard form. Step 1 shows star ratings for Overall Quality, Ease of Use, Features & Functionality, Customer Support, and Value of Money. Step 2 shows a textarea for a written review. Step 3 shows contact information fields (First Name, Last Name, Email, Phone).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700;800;900**, **Poppins**

## Design tokens (`apps/scout/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#f8f8f8` | Scout brand palette — teal accent on light gray background. |
| `--color-accent` | `#1abc9c` | Accent — teal: buttons, step indicators, active states. |
| `--color-accent-light` | `#43d7ba` | accent light |
| `--color-accent-dark` | `#148f77` | accent dark |
| `--color-panel` | `#ffffff` | Panel — white card container. |
| `--color-ink` | `#222222` | Ink — body text, headings. |
| `--color-muted` | `#999999` | Muted — labels, placeholders. |
| `--color-line` | `#ebebeb` | Input border. |
| `--color-star` | `#fbd91b` | Star gold. |
| `--color-primary-50` | `#e8f8f5` | primary 50 |
| `--color-primary-100` | `#c6f0e7` | primary 100 |
| `--color-primary-200` | `#9de6d4` | primary 200 |
| `--color-primary-300` | `#73dbc2` | primary 300 |
| `--color-primary-400` | `#52d4b4` | primary 400 |
| `--color-primary-500` | `#1abc9c` | primary 500 |
| `--color-primary-600` | `#148f77` | primary 600 |
| `--color-primary-700` | `#0e7060` | primary 700 |
| `--color-primary-800` | `#095148` | primary 800 |
| `--color-primary-900` | `#043330` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Font families. |
| `--font-heading` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-button` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font button |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `RatingsStep` | Step 1 shows star ratings | see fidelity note below |
| 2 | `ReviewStep` | Step 2 shows review textarea | see fidelity note below |
| 3 | `ContactStep` | Step 3 shows contact information | see fidelity note below |
| 4 | `StepFooter` | — | no dedicated spec block |
| 5 | `Footer` | Form completes on Finish | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `RatingsStep`
The form SHALL display five star-rating categories on step 1 with an illustration on the left.

### `ReviewStep`
The form SHALL advance to step 2 showing a textarea for written review.

### `ContactStep`
The form SHALL advance to step 3 showing contact fields with "03/03" indicator and a "Finish" button.

### `StepFooter`
*anchors only* — Previous · Finish · Next

### `Footer`
The form SHALL show a completion action when the user clicks Finish on the last step.

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
- **Provenance ban.** No file under `apps/scout/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/scout/public/CNAME` = `scout.free.componentdock.com`
  and the package `homepage` = `https://scout.free.componentdock.com`.
