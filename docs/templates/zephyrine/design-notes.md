# Zephyrine — Design Notes

Reference: **Dinomuz** — `https://colorlib.com/wp/template/dinomuz/`  
Live preview: `https://preview.colorlib.com/theme/dinomuz/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dinomuz-free-creative-website-template.jpg  
Shipped: https://zephyrine.free.componentdock.com

A creative agency website template with a bold pink-to-orange gradient aesthetic, boxed layout, and portfolio-focused design. Recreation of ColorLib **Dinomuz**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;500;600**

## Design tokens (`apps/zephyrine/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-pink` | `#e66686` | brand pink |
| `--color-brand-orange` | `#f09359` | brand orange |
| `--color-brand-dark` | `#222222` | brand dark |
| `--color-brand-gray` | `#777777` | brand gray |
| `--color-brand-lavender` | `#f9f9ff` | brand lavender |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | — | no dedicated spec block |
| 2 | `Banner` | — | no dedicated spec block |
| 3 | `Featured` | — | no dedicated spec block |
| 4 | `ServiceArea` | — | no dedicated spec block |
| 5 | `AmazingWorks` | — | no dedicated spec block |
| 6 | `StoryArea` | — | no dedicated spec block |
| 7 | `Subscription` | — | no dedicated spec block |
| 8 | `FooterWidgets` | — | no dedicated spec block |
| 9 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
*anchors only* — Zephyrine

### `Banner`
*anchors only* — Re-imagining the way · We grow money, Guaranteed · Get Started

### `Featured`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `ServiceArea`
*anchors only* — Discover more about this service and what we offer. · Get Started

### `AmazingWorks`
*anchors only* — Our Amazing Works · Re-imagining the way

### `StoryArea`
*anchors only* — Our Untold Story · From the part of beginning · Get Started

### `Subscription`
*anchors only* — Subscribe for our Newsletter · Get Started

### `FooterWidgets`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Footer`
*anchors only* — Facebook · Twitter · Dribbble

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
- **Provenance ban.** No file under `apps/zephyrine/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/zephyrine/public/CNAME` = `zephyrine.free.componentdock.com`
  and the package `homepage` = `https://zephyrine.free.componentdock.com`.
