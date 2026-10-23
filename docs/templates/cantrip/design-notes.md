# Cantrip — Design Notes

Reference: **Colorlib Wizard 13** — `https://colorlib.com/wp/template/colorlib-wizard-13/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-wizard-13/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-13.jpg  
Shipped: https://cantrip.free.componentdock.com

A Bootstrap Wizards template with accordion wizard navigation, step 1, step 2 and step 3 sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto Slab**, **Roboto Slab:wght@300;400;700**

## Design tokens (`apps/cantrip/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#6dab3c` | brand |
| `--color-brand-hover` | `#5f9434` | brand hover |
| `--color-focus` | `#f65300` | focus |
| `--color-ink` | `#222222` | Text and surface colors from the original. |
| `--color-muted` | `#999999` | muted |
| `--color-surface` | `#f8f8f8` | surface |
| `--color-border` | `#ebebeb` | border |
| `--font-slab` | `'Roboto Slab', ui-serif, Georgia, serif` | Roboto Slab from Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `AccordionWizard` | Accordion wizard navigation | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `AccordionWizard`
Users SHALL be able to expand/collapse each step panel by clicking its header.

### `Footer`
The footer SHALL display a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/cantrip/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cantrip/public/CNAME` = `cantrip.free.componentdock.com`
  and the package `homepage` = `https://cantrip.free.componentdock.com`.
