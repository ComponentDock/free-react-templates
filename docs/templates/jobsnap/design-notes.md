# Jobsnap — Design Notes

Reference: **Search Form Bar 19** — `https://colorlib.com/wp/template/search-form-bar-19/`  
Live preview: `https://preview.colorlib.com/theme/search-form-bar-19/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-19.jpg  
Shipped: https://jobsnap.free.componentdock.com

Recreation of ColorLib **Search Form Bar 19** — a simple job search template with a header, full-width hero image, and a white search card overlaying the hero bottom. The search card contains a text input with magnifying glass icon, a categories dropdown, and a blue search button in a horizontal layout.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600**

## Design tokens (`apps/jobsnap/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4a90e2` | brand |
| `--color-hero-height` | `420px` | hero height |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header renders with brand text and navigation links | see fidelity note below |
| 2 | `Hero` | Hero section displays full-width background image | see fidelity note below |
| 3 | `SearchBar` | Search form bar overlays hero bottom | see fidelity note below |
| 4 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Header`
The header SHALL display a white background with "Brand" text in blue on the left and navigation links ("Home", "About", "Contact") in blue on the right.

### `Hero`
The hero section SHALL render a full-width background image with no text overlay, filling the viewport width at approximately 420px height.

### `SearchBar`
A white search card SHALL overlay the bottom of the hero section, horizontally centered, containing a text input, categories dropdown, and search button in a horizontal row.

### `Footer`
The footer SHALL display "Made with Component Dock" with a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/jobsnap/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jobsnap/public/CNAME` = `jobsnap.free.componentdock.com`
  and the package `homepage` = `https://jobsnap.free.componentdock.com`.
