# Sidequest — Design Notes

Reference: **Colorlib Sidebar V07** — `https://colorlib.com/wp/template/colorlib-sidebar-v07/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-sidebar-v07/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-sidebar-v07.jpg  
Shipped: https://sidequest.free.componentdock.com

Recreation of ColorLib Sidebar V07 — a two-panel split layout with a dark content area showing a blog post list on the left and a white "GET STARTED" onboarding checklist sidebar on the right. The sidebar features a progress bar, completed/pending step items, and a user profile at the bottom.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans:wght@400;600;700**

## Design tokens (`apps/sidequest/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#66bb6a` | brand |
| `--color-brand-dark` | `#4caf50` | brand dark |
| `--color-content-bg` | `#5c6370` | content bg |
| `--color-sidebar-bg` | `#ffffff` | sidebar bg |
| `--color-text-primary` | `#ffffff` | text primary |
| `--color-text-secondary` | `#b0bec5` | text secondary |
| `--color-text-dark` | `#212529` | text dark |
| `--color-text-muted` | `#757575` | text muted |
| `--color-progress-track` | `#e0e0e0` | progress track |
| `--color-check-green` | `#4caf50` | check green |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContentPanel` | — | no dedicated spec block |
| 2 | `Sidebar` | Onboarding sidebar | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `ContentPanel`
*anchors only* — Close

### `Sidebar`
The sidebar SHALL display a "GET STARTED" heading, a progress bar showing completion percentage, and a list of onboarding steps.

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
- **Provenance ban.** No file under `apps/sidequest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sidequest/public/CNAME` = `sidequest.free.componentdock.com`
  and the package `homepage` = `https://sidequest.free.componentdock.com`.
