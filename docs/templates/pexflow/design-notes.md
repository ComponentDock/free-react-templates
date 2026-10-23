# Pexflow — Design Notes

Reference: **Pexcon** — `https://colorlib.com/wp/template/pexcon/`  
Live preview: `https://preview.colorlib.com/theme/pexcon/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pexcon-free-template.jpg  
Shipped: https://pexflow.free.componentdock.com

Recreation of the ColorLib **Pexcon** template (https://colorlib.com/wp/template/pexcon/) as a single-page React application. Live preview analyzed: https://preview.colorlib.com/theme/pexcon/ **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/pexflow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff5e13` | brand |
| `--color-brand-dark` | `#001b5e` | brand dark |
| `--color-heading` | `#001b5e` | heading |
| `--color-body` | `#556172` | body |
| `--color-muted` | `#83868c` | muted |
| `--color-light-bg` | `#f7f7f7` | light bg |
| `--color-alt-bg` | `#fbf9ff` | alt bg |
| `--color-primary-50` | `#fff7ed` | primary 50 |
| `--color-primary-100` | `#ffedd5` | primary 100 |
| `--color-primary-200` | `#ffd4a8` | primary 200 |
| `--color-primary-300` | `#ffb470` | primary 300 |
| `--color-primary-400` | `#ff8a3d` | primary 400 |
| `--color-primary-500` | `#ff5e13` | primary 500 |
| `--color-primary-600` | `#e04d0e` | primary 600 |
| `--color-primary-700` | `#b83c0b` | primary 700 |
| `--color-primary-800` | `#8c2e09` | primary 800 |
| `--color-primary-900` | `#6b2307` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar navigation | see fidelity note below |
| 2 | `Hero` | Hero / Banner section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Experience` | Experience / Counter section | see fidelity note below |
| 6 | `Projects` | Projects section with filter | see fidelity note below |
| 7 | `Stats` | Stats / Counter strip | see fidelity note below |
| 8 | `Reviews` | Reviews / Testimonials | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky top navbar with logo, navigation links, and a "Get a Quote" CTA button, with mobile hamburger toggle.

### `Hero`
The template SHALL display a full-width hero with light gray background, headline, subtext paragraph, and a "View project" CTA button.

### `About`
The template SHALL display a two-column about section with image on the left and text on the right, featuring "Engineering Your Dreams With Us" heading and two feature items.

### `Services`
The template SHALL display a services section with section title "Our Services" and three service cards in columns.

### `Experience`
The template SHALL display an experience section with heading, counter showing years of experience, and a right-side image.

### `Projects`
The template SHALL display a projects section with filterable gallery and filter tabs for All, Buildings, Rebuild, Architecture.

### `Stats`
The template SHALL display a stats section with four counter blocks on a dark background.

### `Reviews`
The template SHALL display a reviews section with client testimonials in a grid layout.

### `Blog`
The template SHALL display a blog section with three recent post cards.

### `Footer`
The template SHALL display a dark footer with four columns: logo/about, services links, gallery, and contact info, plus a copyright bar with Component Dock link.

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
- **Provenance ban.** No file under `apps/pexflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pexflow/public/CNAME` = `pexflow.free.componentdock.com`
  and the package `homepage` = `https://pexflow.free.componentdock.com`.
