# Sidebarix — Design Notes

Reference: **Colorlib Sidebar V02** — `https://colorlib.com/wp/template/colorlib-sidebar-v02/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-sidebar-v02/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-sidebar-v02.jpg  
Shipped: https://sidebarix.free.componentdock.com

A left-profile-panel sidebar layout with a blog post grid. Recreation of ColorLib Sidebar V02.

## Typography

Fonts loaded by `index.html` (Google Fonts): **-apple-system**

## Design tokens (`apps/sidebarix/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#1da1f2` | brand |
| `--color-ink` | `#222222` | ink |
| `--color-muted` | `#999999` | muted |
| `--color-border` | `#e5e7eb` | border |
| `--color-surface` | `#ffffff` | surface |
| `--font-sans` | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ProfileSidebar` | — | no dedicated spec block |
| 2 | `CloseButton` | — | no dedicated spec block |
| 3 | `PostGrid` | — | no dedicated spec block |
| 4 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `ProfileSidebar`
*anchors only* — Profile sidebar · Verified · Favourite Tags · Activity · Location · Fav Profiles

### `CloseButton`
*anchors only* — Close

### `PostGrid`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Footer`
*anchors only* — Component Dock

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
- **Provenance ban.** No file under `apps/sidebarix/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sidebarix/public/CNAME` = `sidebarix.free.componentdock.com`
  and the package `homepage` = `https://sidebarix.free.componentdock.com`.
