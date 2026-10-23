# Enigma — Design Notes

Reference: **Riddle** — `https://colorlib.com/wp/template/riddle/`  
Live preview: `https://preview.colorlib.com/theme/riddle/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/riddle-free-template.jpg  
Shipped: https://enigma.free.componentdock.com

A portfolio template with intro and portfolio sections. Recreation of ColorLib **Riddle** portfolio template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;600;700**

## Design tokens (`apps/enigma/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-black` | `#000000` | brand black |
| `--color-dark-teal` | `#001418` | dark teal |
| `--color-gray-accent` | `#979797` | gray accent |
| `--color-light-gray` | `#efefef` | light gray |
| `--color-body-text` | `#333333` | body text |
| `--color-white` | `#ffffff` | white |
| `--font-body` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font body |
| `--font-sans` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Intro` | Intro section SHALL display headline with highlighted span | see fidelity note below |
| 3 | `Portfolio` | Portfolio section SHALL have filter tabs and hover overlay | see fidelity note below |
| 4 | `Footer` | Footer SHALL display CTA, social links, and Component Dock branding | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Toggle navigation menu · Mobile navigation

### `Intro`
The intro section MUST display a centered headline with a highlighted "digital designer" span.

### `Portfolio`
The portfolio section MUST display filterable portfolio items with hover overlay effects.

### `Footer`
The footer MUST display a call-to-action, social media links, and Component Dock copyright.

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
- **Provenance ban.** No file under `apps/enigma/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/enigma/public/CNAME` = `enigma.free.componentdock.com`
  and the package `homepage` = `https://enigma.free.componentdock.com`.
