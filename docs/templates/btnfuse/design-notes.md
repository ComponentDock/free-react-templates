# Btnfuse — Design Notes

Reference: **Bootstrap Buttons 19** — `https://colorlib.com/wp/template/bootstrap-buttons-19/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap-buttons-19/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-19.jpg  
Shipped: https://btnfuse.free.componentdock.com

BtnFuse is a dashboard-style button showcase template featuring stat card buttons with colored icon panels and numeric displays. It presents four brand colors (purple, teal, pink, green) across white-background and colored-background card buttons, each displaying an icon, a number, and a label.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600**

## Design tokens (`apps/btnfuse/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-btnfuse-purple` | `#6c5ce7` | btnfuse purple |
| `--color-btnfuse-purple-hover` | `#4430e0` | btnfuse purple hover |
| `--color-btnfuse-teal` | `#1ee3cf` | btnfuse teal |
| `--color-btnfuse-teal-hover` | `#17b7a7` | btnfuse teal hover |
| `--color-btnfuse-pink` | `#ff00c8` | btnfuse pink |
| `--color-btnfuse-pink-hover` | `#cc00a0` | btnfuse pink hover |
| `--color-btnfuse-green` | `#a1dd70` | btnfuse green |
| `--color-btnfuse-green-hover` | `#86d347` | btnfuse green hover |
| `--color-btnfuse-heading` | `#212529` | btnfuse heading |
| `--color-btnfuse-white` | `#ffffff` | btnfuse white |
| `--font-btnfuse` | `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font btnfuse |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `StatCard` | White Card Stats — Icon Left | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `StatCard`
The template SHALL display four white-background stat cards in a row with icons on the left side.

### `Footer`
The template SHALL include a footer with a link to Component Dock.

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
- **Provenance ban.** No file under `apps/btnfuse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnfuse/public/CNAME` = `btnfuse.free.componentdock.com`
  and the package `homepage` = `https://btnfuse.free.componentdock.com`.
