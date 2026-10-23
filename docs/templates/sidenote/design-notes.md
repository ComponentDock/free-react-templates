# Sidenote — Design Notes

Reference: **Colorlib Sidebar V03** — `https://colorlib.com/wp/template/colorlib-sidebar-v03/`  
Live preview: `https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v03/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-sidebar-v03.jpg  
Shipped: https://sidenote.free.componentdock.com

A newsletter signup sidebar panel on a bright blue background, with a right-hand email form and a left-hand blog post grid. Recreation of ColorLib Sidebar V03.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700;800**

## Design tokens (`apps/sidenote/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4361ee` | brand |
| `--color-brand-hover` | `#3651d4` | brand hover |
| `--color-surface` | `#ffffff` | surface |
| `--color-content-bg` | `#f8f9fa` | content bg |
| `--color-card-bg` | `#ffffff` | card bg |
| `--color-ink` | `#222222` | ink |
| `--color-body-text` | `#333333` | body text |
| `--color-muted` | `#999999` | muted |
| `--color-border` | `#e0e0e0` | border |
| `--color-sidebar-text` | `#ffffff` | sidebar text |
| `--font-family-body` | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font family body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `CloseButton` | — | no dedicated spec block |
| 2 | `PostGrid` | Post grid | see fidelity note below |
| 3 | `NewsletterSidebar` | Newsletter form | see fidelity note below |
| 4 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `CloseButton`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `PostGrid`
The template SHALL render a grid of 4 blog post cards in the main content area. Each card SHALL display a thumbnail image, a title, and a posted date.

### `NewsletterSidebar`
The template SHALL provide a newsletter signup form with a required email input and a submit button. The form SHALL prevent default browser submission.

### `Footer`
The template SHALL render a footer that links to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/sidenote/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sidenote/public/CNAME` = `sidenote.free.componentdock.com`
  and the package `homepage` = `https://sidenote.free.componentdock.com`.
