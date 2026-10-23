# Ballot — Design Notes

Reference: **Checkbox 14** — `https://colorlib.com/wp/template/checkbox-14/`  
Live preview: `https://preview.colorlib.com/theme/checkbox-14/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-14.jpg  
Shipped: https://ballot.free.componentdock.com

Ballot is a custom checkbox template with a checkbox showcase and footer. It recreates the ColorLib **Checkbox 14** design (https://colorlib.com/wp/template/checkbox-14/, preview: https://preview.colorlib.com/theme/bootstrap/checkbox-14/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/ballot/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f3f0ff` | primary 50 |
| `--color-primary-100` | `#e9e3ff` | primary 100 |
| `--color-primary-200` | `#d5ccff` | primary 200 |
| `--color-primary-300` | `#b5a8ff` | primary 300 |
| `--color-primary-400` | `#9178ff` | primary 400 |
| `--color-primary-500` | `#7e0cf5` | primary 500 |
| `--color-primary-600` | `#6d0ad4` | primary 600 |
| `--color-primary-700` | `#5b09b3` | primary 700 |
| `--color-primary-800` | `#4a0792` | primary 800 |
| `--color-primary-900` | `#3a0671` | primary 900 |
| `--color-primary-950` | `#26044d` | primary 950 |
| `--color-checkbox-bg` | `#e6e6e6` | checkbox bg |
| `--color-checkbox-hover` | `#cccccc` | checkbox hover |
| `--color-checkbox-disabled` | `#e6e6e6` | checkbox disabled |

> The spec has no section-level requirements; the order below is read from `apps/ballot/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `CheckboxShowcase` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `CheckboxShowcase`
*anchors only* — Checkbox #14 · Custom checkbox component demo

### `Footer`
*anchors only* — Ballot · Custom checkbox components for React. · Component Dock

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
- **Provenance ban.** No file under `apps/ballot/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ballot/public/CNAME` = `ballot.free.componentdock.com`
  and the package `homepage` = `https://ballot.free.componentdock.com`.
