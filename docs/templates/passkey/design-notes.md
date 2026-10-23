# Passkey — Design Notes

Reference: **Dropdown 06** — `https://colorlib.com/wp/template/dropdown-06/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/dropdown-06/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-06.jpg  
Shipped: https://passkey.free.componentdock.com

Passkey is a single-page UI-component demo template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@400;500;700**

## Design tokens (`apps/passkey/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-pink` | `#fa697c` | brand pink |
| `--color-brand-pink-hover` | `#f83851` | brand pink hover |
| `--color-bg-page` | `#fafafa` | bg page |
| `--color-text-heading` | `#000000` | text heading |
| `--color-text-body` | `rgba(0, 0, 0, 0.7)` | text body |
| `--color-text-placeholder` | `rgba(0, 0, 0, 0.4)` | text placeholder |
| `--color-border-input` | `rgba(0, 0, 0, 0.05)` | border input |
| `--color-border-input-focus` | `rgba(0, 0, 0, 0.1)` | border input focus |
| `--color-bg-menu` | `#ffffff` | bg menu |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SignInDropdown` | Dropdown menu behavior | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `SignInDropdown`
The system SHALL open the sign-in menu on trigger click, close it on outside click, Escape, or submit, and keep only one menu open at a time.

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
- **Provenance ban.** No file under `apps/passkey/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/passkey/public/CNAME` = `passkey.free.componentdock.com`
  and the package `homepage` = `https://passkey.free.componentdock.com`.
