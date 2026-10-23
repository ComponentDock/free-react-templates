# Chime — Design Notes

Reference: **Dropdown 04** — `https://colorlib.com/wp/template/dropdown-04/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/dropdown-04/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-04.jpg  
Shipped: https://chime.free.componentdock.com

Chime is a single-page UI-component demo template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/chime/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#726df3` | brand |
| `--color-brand-hover` | `#5a55d9` | brand hover |
| `--color-bg-page` | `#6c81f4` | bg page |
| `--color-bg-menu` | `#ffffff` | bg menu |
| `--color-text-body` | `#333333` | text body |
| `--color-text-heading` | `#ffffff` | text heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `NotificationDropdown` | Notifications trigger | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `NotificationDropdown`
The system SHALL render the transparent trigger exactly like the reference: white bell icon with a green unread dot on the left, the label "Notifications", no caret, on the flat periwinkle page background.

### `Footer`
The system SHALL render the mandatory monorepo footer with the Component Dock credit link (the source demo has no footer — this is a monorepo addition per conventions.md).

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
- **Provenance ban.** No file under `apps/chime/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/chime/public/CNAME` = `chime.free.componentdock.com`
  and the package `homepage` = `https://chime.free.componentdock.com`.
