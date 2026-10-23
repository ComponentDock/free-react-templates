# Roam — Design Notes

Reference: **Fantasy** — `https://colorlib.com/wp/template/fantasy/`  
Live preview: `https://preview.colorlib.com/theme/fantasy/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fantasy-free-template.jpg  
Shipped: https://roam.free.componentdock.com

Roam is a single-page travel-blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Fantasy" travel blog website template (see TEMPLATES.md, Blog section, line 259; duplicate at line 2983 — mark EVERY copy `[x]` when done), built under a different name with the monorepo stack: Vite + R…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@700**, **Roboto**

## Design tokens (`apps/roam/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#f8b600` | primary |
| `--color-ink` | `#081113` | ink |
| `--color-body` | `#777777` | body |
| `--color-section` | `#f9f9ff` | section |
| `--color-footer` | `#f1f9ff` | footer |
| `--color-aqua` | `#4cd3e3` | aqua |
| `--color-azure` | `#38a4ff` | azure |
| `--color-sky` | `#52c5fd` | sky |
| `--color-muted` | `#cccccc` | muted |
| `--color-line` | `#dddddd` | line |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header with wordmark logo, nav links and search | see fidelity note below |
| 2 | `Hero` | Hero banner carousel | see fidelity note below |
| 3 | `CategoryCarousel` | Travel category carousel | see fidelity note below |
| 4 | `LatestPosts` | Latest blog posts grid | see fidelity note below |
| 5 | `PlacesGrid` | Different places masonry grid | see fidelity note below |
| 6 | `PopularPosts` | Popular posts grid | see fidelity note below |
| 7 | `Footer` | Footer with newsletter and socials | see fidelity note below |
| 8 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a header with a serif wordmark logo, a small uppercase tagline, centered nav links, a search icon and a mobile hamburger.

### `Hero`
The system SHALL render a full-width hero with a background-photo carousel of featured posts.

### `CategoryCarousel`
The system SHALL render a "travel category" section with a horizontal card carousel.

### `LatestPosts`
The system SHALL render a 4-card blog posts grid.

### `PlacesGrid`
The system SHALL render a staggered grid of 6 place cards with overlay titles.

### `PopularPosts`
The system SHALL render a 3-column grid of thumbnail post rows.

### `Footer`
The system SHALL render a light-blue footer with a newsletter subscribe form, social icons and a copyright bar.

### `BackToTop`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

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
- **Provenance ban.** No file under `apps/roam/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/roam/public/CNAME` = `roam.free.componentdock.com`
  and the package `homepage` = `https://roam.free.componentdock.com`.
