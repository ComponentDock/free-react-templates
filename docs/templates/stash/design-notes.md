# Stash — Design Notes

Reference: **Accordion 04** — `https://colorlib.com/wp/template/accordion-04/`  
Live preview: `https://preview.colorlib.com/theme/accordion-04/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-04.jpg  
Shipped: https://stash.free.componentdock.com

Stash is a single-page accordion cloud-storage-services template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/stash/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#fafafa` | Near-white page background (brand palette: #fafafa / rgba(0,0,0,0.02)). |
| `--color-brand-gold` | `#f2dc63` | Brand golden-yellow — icon circles + active header gradient end. |
| `--color-brand-gold-light` | `#ffe97a` | Active header gradient start. |
| `--color-pill-active-bg` | `#f0d74b` | Active count-pill background. |
| `--color-pill-active-border` | `#ddbe12` | Active count-pill border. |
| `--color-panel-body` | `rgba(0, 0, 0, 0.02)` | Panel body background tint. |
| `--color-row-text` | `rgba(0, 0, 0, 0.8)` | Service row name text (weight 600). |
| `--color-row-number` | `rgba(0, 0, 0, 0.3)` | Row number span (weight 300). |
| `--color-pill-border` | `rgba(0, 0, 0, 0.1)` | Pill borders (header + row). |
| `--color-separator` | `rgba(0, 0, 0, 0.05)` | Header/row separator lines. |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Accordion` | Accordion card | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Accordion`
The system SHALL render a single centered white card (5px radius, soft shadow, clipped) containing all three storage panels.

### `Footer`
The system SHALL render a minimal footer linking `https://www.componentdock.com/` ("Component Dock") — required by repo convention on every template (the original has no footer).

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
- **Provenance ban.** No file under `apps/stash/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stash/public/CNAME` = `stash.free.componentdock.com`
  and the package `homepage` = `https://stash.free.componentdock.com`.
