# Searcharc — Design Notes

Reference: **Colorlib Search 3** — `https://colorlib.com/wp/template/colorlib-search-3/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-search-3/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-3.jpg  
Shipped: https://searcharc.free.componentdock.com

Recreation of ColorLib "Colorlib Search 3" — a standalone search form widget with a category dropdown, text input, and green search button arranged in a horizontal card on a lavender background.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/searcharc/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-lavender` | `#a598ee` | Lavender background (#a598ee) |
| `--color-btn-green` | `#63c76a` | Search button green (#63c76a) |
| `--color-btn-green-hover` | `#50c058` | btn green hover |
| `--color-input-text` | `#555555` | Text colors |
| `--color-input-placeholder` | `#888888` | input placeholder |
| `--color-arrow` | `#e5e5e5` | Dropdown arrow |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Font |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchForm` | Centered search form card | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `SearchForm`
The search form SHALL be displayed as a white card centered vertically and horizontally on the page, with a max-width of approximately 790px, subtle box-shadow, and rounded corners.

### `Footer`
The page SHALL display a footer with a link to https://www.componentdock.com/ labeled "Component Dock".

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
- **Provenance ban.** No file under `apps/searcharc/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/searcharc/public/CNAME` = `searcharc.free.componentdock.com`
  and the package `homepage` = `https://searcharc.free.componentdock.com`.
