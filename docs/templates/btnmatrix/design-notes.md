# Btnmatrix — Design Notes

Reference: **Bootstrap Buttons 20** — `https://colorlib.com/wp/template/bootstrap-buttons-20/`  
Live preview: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-20/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-20.jpg  
Shipped: https://btnmatrix.free.componentdock.com

Recreation of ColorLib [Bootstrap Buttons 20](https://colorlib.com/wp/template/bootstrap-buttons-20/) (preview URL: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-20/`). Design category: UI Components & Buttons Showroom. Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide Icons (`lucide-react`).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600**

## Design tokens (`apps/btnmatrix/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-btnmatrix-primary` | `#3e64ff` | btnmatrix primary |
| `--color-btnmatrix-primary-hover` | `#002ad7` | btnmatrix primary hover |
| `--color-btnmatrix-secondary` | `#5edfff` | btnmatrix secondary |
| `--color-btnmatrix-secondary-hover` | `#00c6f7` | btnmatrix secondary hover |
| `--color-btnmatrix-tertiary` | `#ff4893` | btnmatrix tertiary |
| `--color-btnmatrix-tertiary-hover` | `#e1005c` | btnmatrix tertiary hover |
| `--color-btnmatrix-quarternary` | `#01d28e` | btnmatrix quarternary |
| `--color-btnmatrix-quarternary-hover` | `#016c49` | btnmatrix quarternary hover |
| `--color-btnmatrix-facebook` | `#4f69a2` | btnmatrix facebook |
| `--color-btnmatrix-twitter` | `#69b6f0` | btnmatrix twitter |
| `--color-btnmatrix-linkedin` | `#2884ba` | btnmatrix linkedin |
| `--color-btnmatrix-pinterest` | `#d03940` | btnmatrix pinterest |
| `--color-btnmatrix-dribbble` | `#ea6294` | btnmatrix dribbble |
| `--color-btnmatrix-heading` | `#212529` | btnmatrix heading |
| `--color-btnmatrix-white` | `#ffffff` | btnmatrix white |
| `--font-btnmatrix` | `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font btnmatrix |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `PickYourStyle` | — | no dedicated spec block |
| 2 | `PickYourColor` | — | no dedicated spec block |
| 3 | `SocialGrid` | Social action grid | see fidelity note below |
| 4 | `SocialButtons` | Social brand buttons | see fidelity note below |
| 5 | `Footer` | Footer attribution | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `PickYourStyle`
*anchors only* — Pick Your Style · Default Primary · Default with icon

### `PickYourColor`
*anchors only* — Pick Your Color · Default Primary · Default Secondary · Default Tertiary · Default Quarternary

### `SocialGrid`
The app SHALL display a 4-column social action grid with Twitter, Facebook, and Dribbble buttons in standard, outline, rounded, and outline-rounded configurations.

### `SocialButtons`
The app SHALL display a "Social Buttons" section with rows for Facebook, Twitter, LinkedIn, Pinterest, and Dribbble featuring icon-only, round, outline, outline-round, and badge count variants.

### `Footer`
The app SHALL display a footer linking to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/btnmatrix/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnmatrix/public/CNAME` = `btnmatrix.free.componentdock.com`
  and the package `homepage` = `https://btnmatrix.free.componentdock.com`.
