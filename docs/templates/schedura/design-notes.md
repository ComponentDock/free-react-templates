# Schedura — Design Notes

Reference: **Calendar 13** — `https://colorlib.com/wp/template/calendar-13/`  
Live preview: `https://preview.colorlib.com/theme/calendar-13/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-13.jpg  
Shipped: https://schedura.free.componentdock.com

Schedura is a bootstrap calendar component page. It recreates the ColorLib **Calendar 13** design (https://colorlib.com/wp/template/calendar-13/, preview: https://preview.colorlib.com/theme/bootstrap/calendar-13/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/schedura/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#f78b65` | accent |
| `--color-accent-light` | `#f2d1c5` | accent light |
| `--color-muted` | `#999999` | muted |
| `--color-border` | `#ced4da` | border |
| `--color-border-active` | `#0089ec` | border active |
| `--color-border-focus` | `#80bdff` | border focus |
| `--color-text-input` | `#495057` | text input |
| `--color-outfocus` | `#dddddd` | outfocus |
| `--color-disabled-bg` | `#f5f5f5` | disabled bg |

> The spec has no section-level requirements; the order below is read from `apps/schedura/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `DatePicker` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `DatePicker`
*anchors only* — Pick A Date · dialog · Date picker · Previous month · Next month · Close

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
- **Provenance ban.** No file under `apps/schedura/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/schedura/public/CNAME` = `schedura.free.componentdock.com`
  and the package `homepage` = `https://schedura.free.componentdock.com`.
