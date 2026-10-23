# Sideframe — Design Notes

Reference: **Colorlib Sidebar V04** — `https://colorlib.com/wp/template/colorlib-sidebar-v04/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-sidebar-v04/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-sidebar-v04.jpg  
Shipped: https://sideframe.free.componentdock.com

A right-side contact form panel on a deep purple/indigo background, with a chat toggle button and a left-hand blog post grid on a gray background. Recreation of ColorLib Sidebar V04.

## Typography

Fonts loaded by `index.html` (Google Fonts): **-apple-system**

## Design tokens (`apps/sideframe/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4a3f6b` | brand |
| `--color-brand-light` | `#5c5280` | brand light |
| `--color-ink` | `#222222` | ink |
| `--color-muted` | `#999999` | muted |
| `--color-border` | `#d1d5db` | border |
| `--color-surface` | `#e5e7eb` | surface |
| `--font-sans` | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `PostGrid` | Post grid | see fidelity note below |
| 2 | `ChatToggleButton` | — | no dedicated spec block |
| 3 | `ContactSidebar` | Contact sidebar | see fidelity note below |
| 4 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `PostGrid`
The template SHALL render a 2-column responsive grid of 8 blog post cards in the main content area. Each card SHALL display a thumbnail image, a title, and a posted date. The grid SHALL collapse to 1 column on mobile.

### `ChatToggleButton`
*anchors only* — Open contact form

### `ContactSidebar`
The template SHALL render a right-side contact form sidebar with a deep purple (#4a3f6b) background, a "Get in touch" heading, name and email input fields, a message textarea, and a "SEND" submit button. The sidebar SHALL be toggleable via a chat icon button.

### `Footer`
The template SHALL render a footer containing a "Made with Component Dock" line with a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/sideframe/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sideframe/public/CNAME` = `sideframe.free.componentdock.com`
  and the package `homepage` = `https://sideframe.free.componentdock.com`.
