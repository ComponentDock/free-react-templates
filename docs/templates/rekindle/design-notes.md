# Rekindle — Design Notes

Reference: **Revive** — `https://colorlib.com/wp/template/revive/`  
Live preview: `https://preview.colorlib.com/theme/revive/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/revive-free-template-1.jpg  
Shipped: https://rekindle.free.componentdock.com

Rekindle is a single-page blog/magazine template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Revive" template (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;500;600**, **Playfair Display**

## Design tokens (`apps/rekindle/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-ink` | `#13113a` | ink |
| `--color-muted` | `#706f87` | muted |
| `--color-mist` | `#f9f9ff` | mist |
| `--font-serif` | `'Playfair Display', Georgia, serif` | font serif |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Banner` | Home banner | see fidelity note below |
| 3 | `BlogGrid` | Blog post grid | see fidelity note below |
| 4 | `Pagination` | Pagination | see fidelity note below |
| 5 | `Sidebar` | Sidebar | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation

### `Banner`
The system SHALL render a full-width image slider with an overlaid headline and a vertical share strip.

### `BlogGrid`
The system SHALL render a two-column grid of blog post cards with metadata, an excerpt, a read-more link, and a category tag.

### `Pagination`
The system SHALL render pagination controls below the post grid.

### `Sidebar`
The system SHALL render a right sidebar with a search widget, an Instagram grid, a categories list, popular posts, a newsletter form, and share icons.

### `Footer`
The system SHALL render a black footer with an about column, a newsletter form, an Instagram feed, social links, and a copyright bar.

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
- **Provenance ban.** No file under `apps/rekindle/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rekindle/public/CNAME` = `rekindle.free.componentdock.com`
  and the package `homepage` = `https://rekindle.free.componentdock.com`.
