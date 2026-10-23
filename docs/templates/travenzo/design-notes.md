# Travenzo — Design Notes

Reference: **Colorlib Search 15** — `https://colorlib.com/wp/template/colorlib-search-15/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-search-15/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-15.jpg  
Shipped: https://travenzo.free.componentdock.com

Recreation of ColorLib "Colorlib Search 15" — a travel/hotel booking search form widget. Dark card overlay on a scenic background with tabbed search (Hotels / Car / Flight), destination input, date pickers, traveller dropdown, checkboxes, and a full-width green CTA button.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**

## Design tokens (`apps/travenzo/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-travenzo-card` | `#1a2238` | travenzo card |
| `--color-travenzo-card-light` | `#243049` | travenzo card light |
| `--color-travenzo-green` | `#28a745` | travenzo green |
| `--color-travenzo-green-hover` | `#218838` | travenzo green hover |
| `--color-travenzo-text` | `#ffffff` | travenzo text |
| `--color-travenzo-muted` | `#8899aa` | travenzo muted |
| `--color-travenzo-input-bg` | `#ffffff` | travenzo input bg |
| `--color-travenzo-input-text` | `#333333` | travenzo input text |
| `--color-travenzo-border` | `#2a3a52` | travenzo border |
| `--color-travenzo-tab-active` | `#ffffff` | travenzo tab active |
| `--color-travenzo-tab-inactive` | `#7788aa` | travenzo tab inactive |
| `--font-body` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font body |

> The spec has no section-level requirements; the order below is read from `apps/travenzo/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchCard` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `SearchCard`
*anchors only* — Decrease adults · Increase adults · Decrease children · Increase children · Decrease rooms · Increase rooms

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
- **Provenance ban.** No file under `apps/travenzo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/travenzo/public/CNAME` = `travenzo.free.componentdock.com`
  and the package `homepage` = `https://travenzo.free.componentdock.com`.
