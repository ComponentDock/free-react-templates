# Formpad — Design Notes

Reference: **Colorlib Wizard 4** — `https://colorlib.com/wp/template/colorlib-wizard-4/`  
Live preview: `https://colorlib.com/etc/bwiz/colorlib-wizard-4/index.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-4.jpg  
Shipped: https://formpad.free.componentdock.com

A free multi-step course registration form wizard template. Recreation of ColorLib's **Colorlib Wizard 4**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;600;700**

## Design tokens (`apps/formpad/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-brand-gold` | `#e4bd37` | brand gold |
| `--color-brand-gold-hover` | `#c9a630` | brand gold hover |
| `--color-primary-green` | `#6dab3c` | primary green |
| `--color-primary-green-hover` | `#5f9434` | primary green hover |
| `--color-text-muted` | `#666666` | text muted |
| `--color-focus-blue` | `#ceebf7` | focus blue |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Footer links to Component Dock | see fidelity note below |
| 2 | `FormHeader` | Form header with category tag and title | see fidelity note below |
| 3 | `WizardStep` | — | no dedicated spec block |
| 4 | `NavButtons` | Navigation buttons | see fidelity note below |
| 5 | `ProgressBar` | Progress indicator | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Footer`
The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

### `FormHeader`
The form header SHALL display a gold category tag pill and an uppercase heading with letter-spacing.

### `WizardStep`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `NavButtons`
Previous button SHALL be hidden on step 1 and visible on steps 2-3. Next button advances steps. Submit button appears on step 3.

### `ProgressBar`
A horizontal progress bar SHALL indicate the current step with animated fill.

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
- **Provenance ban.** No file under `apps/formpad/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formpad/public/CNAME` = `formpad.free.componentdock.com`
  and the package `homepage` = `https://formpad.free.componentdock.com`.
