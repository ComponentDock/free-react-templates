# Nomad — Design Notes

Reference: **Explore** — `https://colorlib.com/wp/template/explore/`  
Live preview: `https://preview.colorlib.com/theme/explore/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/explore-free-template.jpg  
Shipped: https://nomad.free.componentdock.com

Nomad is a single-page travel-blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Explore" website template (see TEMPLATES.md, Blog section, line 258), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Abril Fatface**, **Poppins**

## Design tokens (`apps/nomad/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-coral` | `#ff895d` | coral |
| `--color-sky` | `#78d5ef` | sky |
| `--color-body` | `#666666` | body |
| `--color-muted` | `#b3b3b3` | muted |
| `--color-footer` | `#141313` | footer |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Abril Fatface', cursive` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with logo, dropdown menu and scroll state | see fidelity note below |
| 2 | `Hero` | Hero split slider | see fidelity note below |
| 3 | `Intro` | Intro statement | see fidelity note below |
| 4 | `BlogSection` | Blog section with article cards | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar over the hero with the site logo and a multi-dropdown menu that turns solid white on scroll.

### `Hero`
The system SHALL render a full-height two-slide hero: text column on the left, photo column on the right, with a dark overlay and bottom dots.

### `Intro`
The system SHALL render a centered one-line introduction under the hero.

### `BlogSection`
The system SHALL render a main column of five large article cards.

### `Footer`
The system SHALL render a near-black footer with four widget columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/nomad/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/nomad/public/CNAME` = `nomad.free.componentdock.com`
  and the package `homepage` = `https://nomad.free.componentdock.com`.
