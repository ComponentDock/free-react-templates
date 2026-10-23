# Toggly — Design Notes

Reference: **Checkbox 06** — `https://colorlib.com/wp/template/checkbox-06/`  
Live preview: `https://preview.colorlib.com/theme/checkbox-06/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-06.jpg  
Shipped: https://toggly.free.componentdock.com

Toggly is a single-page UI-component demo template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600**

## Design tokens (`apps/toggly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-pink` | `#ff7bb0` | brand pink |
| `--color-track-unchecked` | `#e6e6e6` | track unchecked |
| `--color-track-checked` | `#ffe1ed` | track checked |
| `--color-halo-pink` | `rgba(255, 123, 176, 0.5)` | halo pink |
| `--font-poppins` | `'Poppins', Arial, sans-serif` | font poppins |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ToggleShowcase` | Switch Toggle sub-heading | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `ToggleShowcase`
The system SHALL render a small centered sub-heading "Switch Toggle" below the main heading.

### `Footer`
The system SHALL render a minimal footer linking `https://www.componentdock.com/` ("Component Dock") — required by repo convention on every template (the original has no footer).

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
- **Provenance ban.** No file under `apps/toggly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/toggly/public/CNAME` = `toggly.free.componentdock.com`
  and the package `homepage` = `https://toggly.free.componentdock.com`.
