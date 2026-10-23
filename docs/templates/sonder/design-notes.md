# Sonder — Design Notes

Reference: **Philosophy** — `https://colorlib.com/wp/template/philosophy/`  
Live preview: `https://preview.colorlib.com/theme/philosophy/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/philosophy-free-lifestyle-blog-website-template.jpg  
Shipped: https://sonder.free.componentdock.com

Sonder is a single-page lifestyle blog website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Philosophy" starter blog template (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Libre Baskerville**, **Libre Baskerville:ital,wght@0,400;0,700;1,400**, **Poppins**

## Design tokens (`apps/sonder/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0054a5` | brand |
| `--color-charcoal` | `#111111` | charcoal |
| `--color-coal` | `#151515` | coal |
| `--color-mist` | `#f2f2f2` | mist |
| `--color-pill` | `#01aef0` | pill |
| `--color-chip` | `#e2e2e2` | chip |
| `--color-ink` | `#000000` | ink |
| `--color-meta` | `#767676` | meta |
| `--color-meta-2` | `#727272` | meta 2 |
| `--color-meta-3` | `#656565` | meta 3 |
| `--font-serif` | `'Libre Baskerville', ui-serif, Georgia, serif` | font serif |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `FeaturedPosts` | Featured posts | see fidelity note below |
| 3 | `BlogGrid` | Masonry blog grid | see fidelity note below |
| 4 | `PopularTags` | Popular posts and tags | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Header social links · Search · Primary · Mobile

### `FeaturedPosts`
The system SHALL render a featured block of three posts (one large, two small) with category pills, titles, authors, and dates.

### `BlogGrid`
The system SHALL render a light-grey masonry-style grid of blog post cards in mixed formats, followed by pagination.

### `PopularTags`
The system SHALL render a white section with popular post mini-cards and a tag cloud.

### `Footer`
The system SHALL render a dark footer with link columns, a newsletter subscribe form, and a bottom bar.

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
- **Provenance ban.** No file under `apps/sonder/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sonder/public/CNAME` = `sonder.free.componentdock.com`
  and the package `homepage` = `https://sonder.free.componentdock.com`.
