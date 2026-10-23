# Queryvane — Design Notes

Reference: **Search Form Bar 17** — `https://colorlib.com/wp/template/search-form-bar-17/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/search-form-bar-17/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-17.jpg  
Shipped: https://queryvane.free.componentdock.com

Recreation of ColorLib "Search Form Bar 17" (https://colorlib.com/wp/template/search-form-bar-17/). A toggleable search form bar with a navbar, overlay search panel, and Component Dock footer. Preview was unreachable; design based on screenshot analysis. <!-- live-token-reverify:2026-10-22 -->

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**

## Design tokens (`apps/queryvane/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#2563eb` | brand |
| `--color-overlay` | `#f3f4f6` | Search overlay background from the original design. |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays brand and navigation | see fidelity note below |
| 2 | `SearchOverlay` | Search overlay toggles on icon click | see fidelity note below |
| 3 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display the brand name "Queryvane" on the left and navigation links (Home, About, Contact) on the right, with a search icon toggle button.

### `SearchOverlay`
The search overlay SHALL appear below the navbar when the search icon is clicked, and SHALL hide when the close button is clicked.

### `Footer`
The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/queryvane/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/queryvane/public/CNAME` = `queryvane.free.componentdock.com`
  and the package `homepage` = `https://queryvane.free.componentdock.com`.
