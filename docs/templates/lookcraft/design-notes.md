# Lookcraft — Design Notes

Reference: **Thelook** — `https://colorlib.com/wp/template/thelook/`  
Live preview: `https://preview.colorlib.com/theme/thelook/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/thelook-free-template.jpg  
Shipped: https://lookcraft.free.componentdock.com

A Photography Portfolio template with hero slider, gallery, blog, logo + description text, useful and instagram/contact info sections. Recreation of the ColorLib "Thelook" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page photography/artist portfolio landing page.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700;900**

## Design tokens (`apps/lookcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-navy` | `#081624` | navy |
| `--color-navy-light` | `#0d2137` | navy light |
| `--color-accent-red` | `#f44336` | accent red |
| `--color-accent-purple` | `#673ab7` | accent purple |
| `--color-surface-light` | `#f6f7f9` | surface light |
| `--color-text-secondary` | `#5c5c5c` | text secondary |
| `--color-footer-bg` | `#222222` | footer bg |
| `--color-body-text` | `#333333` | body text |
| `--color-border-light` | `#e0e0e0` | border light |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero slider with three slides | see fidelity note below |
| 3 | `Gallery` | Gallery section with split layout | see fidelity note below |
| 4 | `Blog` | Blog section on light background | see fidelity note below |
| 5 | `Footer` | Dark footer with multiple columns | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle menu · LookCraft

### `Hero`
Users SHALL see a full-width hero slider with 3 slides, each containing a background image, white semi-transparent overlay, heading, exhibition info, and a CTA button.

### `Gallery`
Users SHALL see a 2-column gallery section with 6 gallery items, each with a thumbnail and "View Gallery" button, plus a "See All Galleries" CTA.

### `Blog`
Users SHALL see a blog section with a light gray background, a section title on the left, and 2 blog items on the right.

### `Footer`
Users SHALL see a dark footer with 4 columns: logo + description, useful links, contact info, and a Component Dock link, plus a copyright bar.

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
- **Provenance ban.** No file under `apps/lookcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lookcraft/public/CNAME` = `lookcraft.free.componentdock.com`
  and the package `homepage` = `https://lookcraft.free.componentdock.com`.
