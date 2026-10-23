# Pings — Design Notes

Reference: **Dropdown 15** — `https://colorlib.com/wp/template/dropdown-15/`  
Live preview: `https://preview.colorlib.com/theme/dropdown-15/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-15.jpg  
Shipped: https://pings.free.componentdock.com

Pings is a single-page UI-component demo template showcasing a notifications dropdown menu. A bell icon with a badge count triggers a dropdown panel listing notification items with avatars and text descriptions, some marked as unread. The design uses Bootstrap-style dropdown mechanics with smooth opacity/margin transitions.

## Design tokens (`apps/pings/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | brand |
| `--color-brand-hover` | `#0069d9` | brand hover |
| `--color-bg-page` | `#ffffff` | bg page |
| `--color-bg-menu` | `#ffffff` | bg menu |
| `--color-bg-unread` | `#fffaef` | bg unread |
| `--color-bg-hover` | `#f9f9f9` | bg hover |
| `--color-text-body` | `#b3b3b3` | text body |
| `--color-text-heading` | `#212529` | text heading |
| `--color-text-notification` | `#bfbfbf` | text notification |
| `--color-text-strong` | `#000000` | text strong |
| `--color-border` | `#efefef` | border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `NotificationsDropdown` | Toggle opens notifications dropdown | see fidelity note below |
| 2 | `Footer` | Page renders with heading and footer | see fidelity note below |

## Section-by-section fidelity

### `NotificationsDropdown`
Users SHALL be able to open and close the notifications dropdown by clicking the bell icon.

### `Footer`
Users SHALL see a page titled "Dropdown" with a "Pings" branded footer linking to Component Dock.

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
- **Provenance ban.** No file under `apps/pings/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pings/public/CNAME` = `pings.free.componentdock.com`
  and the package `homepage` = `https://pings.free.componentdock.com`.
