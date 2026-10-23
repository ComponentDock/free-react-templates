# Flamingo — Design Notes

Reference: **Fantom** — `https://colorlib.com/wp/template/fantom/`  
Live preview: `https://preview.colorlib.com/theme/fantom/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fantom-free-template.jpg  
Shipped: https://flamingo.free.componentdock.com

Flamingo is a single-page blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Fantom" blog website template (see TEMPLATES.md, Blog section, line 260; duplicate at line 1707 — mark EVERY copy `[x]` when done), built under a different name with the monorepo stack: Vite + React 19 + T…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Great Vibes**, **Open Sans**, **Roboto**

## Design tokens (`apps/flamingo/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#ff2f92` | primary |
| `--color-hover-pink` | `#cc2675` | hover pink |
| `--color-heading` | `#222222` | heading |
| `--color-body` | `#777777` | body |
| `--color-meta` | `#999999` | meta |
| `--color-muted` | `#cccccc` | muted |
| `--color-line` | `#eeeeee` | line |
| `--color-footer` | `#222222` | footer |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-script` | `'Great Vibes', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header with script logo, pink nav bar and search | see fidelity note below |
| 2 | `Hero` | Hero featured-posts slider | see fidelity note below |
| 3 | `BlogSection` | — | no dedicated spec block |
| 4 | `Footer` | Footer with about, newsletter, Instagram and socials | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a two-row header: a centered script-style wordmark logo above a magenta navigation bar with uppercase links and a search icon.

### `Hero`
The system SHALL render a hero section with featured post cards overlaid on photos.

### `BlogSection`
*anchors only* — Blog posts · Pagination

### `Footer`
The system SHALL render a dark footer with four widget columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/flamingo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/flamingo/public/CNAME` = `flamingo.free.componentdock.com`
  and the package `homepage` = `https://flamingo.free.componentdock.com`.
