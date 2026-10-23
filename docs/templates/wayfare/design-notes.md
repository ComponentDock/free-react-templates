# Wayfare — Design Notes

Reference: **Colorlib Search 11** — `https://colorlib.com/wp/template/colorlib-search-11/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-search-11/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-11.jpg  
Shipped: https://wayfare.free.componentdock.com

A travel search form component for hotel booking websites. Features a full-viewport background image with dark overlay, tabbed search type selector, and a search form with destination, dates, travelers, flight/car options, and an orange search button.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/wayfare/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f57224` | brand |
| `--color-brand-hover` | `#e0601a` | brand hover |
| `--color-surface` | `rgba(30, 30, 30, 0.85)` | surface |
| `--color-surface-light` | `rgba(50, 50, 50, 0.6)` | surface light |
| `--font-family-heading` | `'Poppins', sans-serif` | font family heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchTabs` | SearchTabs | see fidelity note below |
| 2 | `SearchForm` | SearchForm | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `SearchTabs`
The component SHALL render four tab buttons (HOTEL ONLY, HOTEL+FLIGHT, HOTEL+FLIGHT+CAR, HOTEL+CAR) with appropriate icons, defaulting to HOTEL ONLY as active.

### `SearchForm`
The component SHALL render a form with destination text input, check-in/check-out date inputs, travelers dropdown, "Add a Flight" and "Add a Car" checkboxes, and a Search button. Flight checkbox SHALL default to checked.

### `Footer`
The footer SHALL display the brand name "Wayfare", a tagline, and a link to https://www.componentdock.com/ labeled "Component Dock".

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
- **Provenance ban.** No file under `apps/wayfare/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wayfare/public/CNAME` = `wayfare.free.componentdock.com`
  and the package `homepage` = `https://wayfare.free.componentdock.com`.
