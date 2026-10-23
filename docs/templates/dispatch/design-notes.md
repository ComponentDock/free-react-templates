# Dispatch — Design Notes

Reference: **Avision** — `https://colorlib.com/wp/template/avision/`  
Live preview: `https://preview.colorlib.com/theme/avision/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/avision-free-template.jpg  
Shipped: https://dispatch.free.componentdock.com

Dispatch is a single-page magazine/blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Avision" blog/magazine website template design (see TEMPLATES.md, Blog category, line 242), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Ubuntu**, **Ubuntu:wght@400;500;700**, **Work Sans**

## Design tokens (`apps/dispatch/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-pill` | `#899091` | pill |
| `--color-accent` | `#2ddf80` | accent |
| `--color-tan` | `#937c6f` | tan |
| `--color-page` | `#f7f7f7` | page |
| `--color-chip` | `#ededed` | chip |
| `--color-dark` | `#1f1f1f` | dark |
| `--color-ink` | `#111111` | ink |
| `--color-muted` | `#a5a5a5` | muted |
| `--color-line` | `#d7d7d7` | line |
| `--color-subline` | `#888888` | subline |
| `--font-display` | `'Ubuntu', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `TaggedGrid` | — | no dedicated spec block |
| 4 | `VideoSection` | Section panels with tag filters | see fidelity note below |
| 5 | `LatestArticles` | — | no dedicated spec block |
| 6 | `Sidebar` | Sidebar | see fidelity note below |
| 7 | `Footer` | Footer with subscribe | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary · Search · Toggle dark mode · Open menu · dialog · Menu

### `HeroSlider`
The system SHALL render a full-viewport slider with 3 slides, each showing a category pill, a headline, a Continue Reading link, and a similar-posts strip, plus a "next" panel and navigation arrows.

### `TaggedGrid`
*anchors only* — No articles found in this category.

### `VideoSection`
The system SHALL render section headers with optional pill tag filters.

### `LatestArticles`
*anchors only* — Latest Articles · No articles found in this category. · Load More

### `Sidebar`
The system SHALL render a gray sidebar with "Top Stories", "Newest Videos", and "Future Events" carousels plus two advertising blocks, in that order.

### `Footer`
The system SHALL render a near-black footer with logo, social icons, copyright, and a subscribe panel.

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
- **Provenance ban.** No file under `apps/dispatch/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dispatch/public/CNAME` = `dispatch.free.componentdock.com`
  and the package `homepage` = `https://dispatch.free.componentdock.com`.
