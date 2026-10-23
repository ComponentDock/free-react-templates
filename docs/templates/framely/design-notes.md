# Framely — Design Notes

Reference: **Boto** — `https://colorlib.com/wp/template/boto/`  
Live preview: `https://preview.colorlib.com/theme/boto/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/boto-photography-website-template.jpeg  
Shipped: https://framely.free.componentdock.com

Framely is a single-page photography-studio website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Boto" design (see TEMPLATES.md — listed under Bootstrap, line 350, first unchecked), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Arimo**, **Arimo:ital,wght@0,400;0,700;1,400**, **Raleway**

## Design tokens (`apps/framely/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#8db952` | brand |
| `--color-brand-dark` | `#7aa844` | brand dark |
| `--color-ink` | `#222222` | Ink — headings + active nav links (#222222). |
| `--color-ash` | `#7e858b` | Ash — body copy + nav links (#7E858B). |
| `--color-heart` | `#d32a2a` | Heart — footer credit heart icon (#d32a2a). |
| `--color-frost` | `#f3f3f3` | Frost — light neutrals used by the source (post-tag pills #F3F3F3). |
| `--color-primary-50` | `#f4f9ee` | primary 50 |
| `--color-primary-100` | `#e6f1d9` | primary 100 |
| `--color-primary-200` | `#cde3b4` | primary 200 |
| `--color-primary-300` | `#b1d48c` | primary 300 |
| `--color-primary-400` | `#97c56a` | primary 400 |
| `--color-primary-500` | `#8db952` | primary 500 |
| `--color-primary-600` | `#7aa844` | primary 600 |
| `--color-primary-700` | `#648c37` | primary 700 |
| `--color-primary-800` | `#4f6e2c` | primary 800 |
| `--color-primary-900` | `#3d5623` | primary 900 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `HeroSlider` | Hero photo slider | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a white header with social icons, a centered logo, utility switches, and a navigation menu with an active-link indicator.

### `HeroSlider`
The system SHALL render a coverflow-style photo carousel with synced captions and lightbox interaction.

### `Footer`
The system SHALL render a minimal centered footer with a copyright bar.

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
- **Provenance ban.** No file under `apps/framely/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/framely/public/CNAME` = `framely.free.componentdock.com`
  and the package `homepage` = `https://framely.free.componentdock.com`.
