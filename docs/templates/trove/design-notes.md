# Trove — Design Notes

Reference: **Bounty** — `https://colorlib.com/wp/template/bounty/`  
Live preview: `https://preview.colorlib.com/theme/bounty/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bounty-free-template.jpg  
Shipped: https://trove.free.componentdock.com

Trove is a single-page blog/magazine landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Bounty" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**, **Rubik**

## Design tokens (`apps/trove/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#7c32ff` | brand |
| `--color-brand-deep` | `#c738d8` | brand deep |
| `--color-indigo-deep` | `#415094` | indigo deep |
| `--color-muted` | `#828bb2` | muted |
| `--color-widget` | `#1e1c27` | widget |
| `--color-night` | `#000000` | night |
| `--color-soft` | `#f9f9ff` | soft |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | — | no dedicated spec block |
| 2 | `StoriesStrip` | Top stories strip | see fidelity note below |
| 3 | `FeaturedSlider` | Featured post slider | see fidelity note below |
| 4 | `PostGrid` | Post grid and pagination | see fidelity note below |
| 5 | `Pagination` | Post grid and pagination | see fidelity note below |
| 6 | `Sidebar` | Sidebar widgets | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
*anchors only* — Toggle search · Main · Search · Close search

### `StoriesStrip`
The system SHALL render a full-width strip of story cards above the featured slider, each with a thumbnail, title, and date.

### `FeaturedSlider`
The system SHALL render a featured area of large image slides with bottom-left overlay text.

### `PostGrid`
The system SHALL render a two-column grid of post cards plus a pagination row.

### `Pagination`
The system SHALL render a two-column grid of post cards plus a pagination row.

### `Sidebar`
The system SHALL render a right-side sidebar with four dark widgets: about, popular posts, categories, and tags.

### `Footer`
The system SHALL render a black footer with an About Us column, a Newsletter subscribe form, an Instagram feed, and social links.

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
- **Provenance ban.** No file under `apps/trove/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/trove/public/CNAME` = `trove.free.componentdock.com`
  and the package `homepage` = `https://trove.free.componentdock.com`.
