# Tessera — Design Notes

Reference: **Mosaic** — `https://colorlib.com/wp/template/mosaic/`  
Live preview: `https://preview.colorlib.com/theme/mosaic/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/mosaic-free-template.jpg  
Shipped: https://tessera.free.componentdock.com

Tessera is a single-page architecture firm website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Mosaic" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**

## Design tokens (`apps/tessera/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0033c7` | brand |
| `--color-brand-dark` | `#00299e` | brand dark |
| `--color-ink` | `#212529` | Ink — headings (#212529 from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d from the original). |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds (#f8f9fa from the original). |
| `--color-charcoal` | `#141313` | Charcoal — footer background (#141313 from the original). |
| `--color-primary-50` | `#e8f1ff` | primary 50 |
| `--color-primary-100` | `#cfe2ff` | primary 100 |
| `--color-primary-200` | `#9dc2ff` | primary 200 |
| `--color-primary-300` | `#66a0ff` | primary 300 |
| `--color-primary-400` | `#3380ff` | primary 400 |
| `--color-primary-500` | `#0f63f2` | primary 500 |
| `--color-primary-600` | `#007bff` | primary 600 |
| `--color-primary-700` | `#0069d9` | primary 700 |
| `--color-primary-800` | `#0052a3` | primary 800 |
| `--color-primary-900` | `#00337a` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: Poppins (Google Fonts link in index.html). |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Stats` | Stats band | see fidelity note below |
| 5 | `Workflow` | Work flow | see fidelity note below |
| 6 | `Services` | Services | see fidelity note below |
| 7 | `Projects` | Featured projects | see fidelity note below |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `Team` | Team | see fidelity note below |
| 10 | `Blog` | Blog | see fidelity note below |
| 11 | `Clients` | Clients | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a navbar with the site name "Tessera", anchor links to the page's sections, a dark-mode toggle, and a mobile menu.

### `Hero`
The system SHALL render a two-slide hero slider that auto-advances and supports manual navigation.

### `About`
The system SHALL render an about section with an image, an "About" eyebrow, a headline, a supporting paragraph, and a read-more link.

### `Stats`
The system SHALL render a stats band with four counters and labels.

### `Workflow`
The system SHALL render a work flow section with three steps.

### `Services`
The system SHALL render a services section with four services, each with an icon and a description.

### `Projects`
The system SHALL render a projects section with filter tabs and a grid of eight project cards.

### `Testimonials`
The system SHALL render a testimonials carousel with quotes and navigation.

### `Team`
The system SHALL render a team section with three members.

### `Blog`
The system SHALL render a blog section with three recent posts.

### `Clients`
The system SHALL render a clients strip with seven client logos.

### `Footer`
The system SHALL render a footer with a brand blurb, Links and Services columns, a newsletter form, and a copyright bar.

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
- **Provenance ban.** No file under `apps/tessera/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tessera/public/CNAME` = `tessera.free.componentdock.com`
  and the package `homepage` = `https://tessera.free.componentdock.com`.
