# Gazette — Design Notes

Reference: **Balita** — `https://colorlib.com/wp/template/balita/`  
Live preview: `https://preview.colorlib.com/theme/balita/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/balita-free-template.jpg  
Shipped: https://gazette.free.componentdock.com

Gazette is a single-page blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Balita" minimal blog website template design (see TEMPLATES.md, Blog category, line 244), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;700**

## Design tokens (`apps/gazette/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | brand |
| `--color-brand-hover` | `#3395ff` | brand hover |
| `--color-ink` | `#000000` | ink |
| `--color-body` | `#6c757d` | body |
| `--color-meta` | `#b3b3b3` | meta |
| `--color-line` | `#e6e6e6` | line |
| `--color-cardline` | `#efefef` | cardline |
| `--color-surface` | `#f7f7f7` | surface |
| `--color-tag` | `#f2f2f2` | tag |
| `--color-search` | `#212121` | search |
| `--color-searchfocus` | `#333333` | searchfocus |
| `--font-sans` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | Josefin Sans (300/400/700) — Google Fonts via index.html |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar | see fidelity note below |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | Hero slider | see fidelity note below |
| 4 | `BlogSection` | — | no dedicated spec block |
| 5 | `MorePosts` | More blog posts | see fidelity note below |
| 6 | `Sidebar` | Sidebar | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The system SHALL render a black utility top bar with social icons on the left and a search field on the right.

### `Navbar`
*anchors only* — Primary · Toggle dark mode · Mobile

### `Hero`
The system SHALL render a full-width featured-post slider with three photo slides, each carrying a category chip, meta line, headline, and excerpt over a dark overlay.

### `BlogSection`
*anchors only* — Pagination · Previous page · Next page

### `MorePosts`
The system SHALL render a horizontal "More Blog Posts" list of three entries, each with a 200px photo and a bordered text block.

### `Sidebar`
The system SHALL render a right sidebar with a search box, an author bio card, popular posts, categories, and tags.

### `Footer`
The system SHALL render a black footer with a paragraph column, latest posts, quick links, social links, and a copyright bar.

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
- **Provenance ban.** No file under `apps/gazette/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gazette/public/CNAME` = `gazette.free.componentdock.com`
  and the package `homepage` = `https://gazette.free.componentdock.com`.
