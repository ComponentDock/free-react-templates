# Scribble — Design Notes

Reference: **Suppablog** — `https://colorlib.com/wp/template/suppablog/`  
Live preview: `https://preview.colorlib.com/theme/suppablog/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/suppablog-free-creative-blog-template-for-writters.jpg  
Shipped: https://scribble.free.componentdock.com

Scribble is a minimal single-page blog landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Suppablog" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Libre Baskerville**, **Libre Baskerville:ital,wght@0,400;1,400**, **Montserrat**

## Design tokens (`apps/scribble/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0697ae` | brand |
| `--color-blush` | `#d8588c` | blush |
| `--color-ink` | `#242424` | ink |
| `--color-charcoal` | `#2d2d2d` | charcoal |
| `--color-coal` | `#333333` | coal |
| `--color-body` | `#5b5b5b` | body |
| `--color-ash` | `#848484` | ash |
| `--color-mist` | `#aabdbd` | mist |
| `--color-fog` | `#c0d3d3` | fog |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-serif` | `'Libre Baskerville', ui-serif, Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Slide-in sidebar | see fidelity note below |
| 2 | `BlogList` | Blog post list | see fidelity note below |
| 3 | `FeaturedImage` | Featured image panel | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The system SHALL render a slide-in sidebar (hidden by default) containing a search field, the site title and description, navigation links, and a footer attribution line; the menu toggle SHALL open and close it.

### `BlogList`
The system SHALL render the blog list with one featured post and at least five regular posts, each with a title, category, and date; the featured post SHALL also have an excerpt with a read-more link.

### `FeaturedImage`
The system SHALL render a fixed full-height featured image panel on the right half of the viewport.

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
- **Provenance ban.** No file under `apps/scribble/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/scribble/public/CNAME` = `scribble.free.componentdock.com`
  and the package `homepage` = `https://scribble.free.componentdock.com`.
