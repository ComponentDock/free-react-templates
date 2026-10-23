# Verve — Design Notes

Reference: **Racks** — `https://colorlib.com/wp/template/racks/`  
Live preview: `https://preview.colorlib.com/theme/racks/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/racks-free-template.jpg  
Shipped: https://verve.free.componentdock.com

Verve is a single-page services/portfolio landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Racks" website template design (https://colorlib.com/wp/template/racks/), built under a **different name** with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:wght@400;500;600;700**

## Design tokens (`apps/verve/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eaf8fd` | primary 50 |
| `--color-primary-100` | `#d2f0fa` | primary 100 |
| `--color-primary-200` | `#a8e3f5` | primary 200 |
| `--color-primary-300` | `#78d5ef` | primary 300 |
| `--color-primary-400` | `#56caeb` | primary 400 |
| `--color-primary-500` | `#29bae4` | primary 500 |
| `--color-primary-600` | `#1a9ecb` | primary 600 |
| `--color-primary-700` | `#1580a8` | primary 700 |
| `--color-primary-800` | `#136686` | primary 800 |
| `--color-primary-900` | `#124f66` | primary 900 |
| `--color-hero` | `#448ef6` | Hero overlay blue (ColorLib .slider-item .overlay). |
| `--color-accent-400` | `#f29bc4` | Pink accent (ColorLib .ftco-counter background). |
| `--color-accent-500` | `#ee76ad` | accent 500 |
| `--color-accent-600` | `#e05599` | accent 600 |
| `--color-mint` | `#79efb4` | Service icon tinted pairs (ColorLib .services .icon.color-1..4). |
| `--color-peach` | `#efac78` | peach |
| `--color-ink` | `#404044` | ink |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | Work Sans (display + body) via Google Fonts <link> in index.html. |
| `--font-display` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `CtaBand` | Call-to-action band | see fidelity note below |
| 5 | `Works` | Works section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Counter` | Achievements counter | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Verve", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, and a "Watch Video" button.

### `Services`
The system SHALL render a services section with a heading and four service cards, each with an icon, a title, and a blurb.

### `CtaBand`
The system SHALL render a cyan call-to-action band with a heading and a "View more details" link.

### `Works`
The system SHALL render a works section with a heading and at least three project cards.

### `Testimonials`
The system SHALL render a testimonials section with a heading, quotes, and reviewers.

### `Counter`
The system SHALL render an achievements band with a heading and three stats.

### `Blog`
The system SHALL render a blog section with a heading and three posts.

### `Footer`
The system SHALL render a footer with link columns, a newsletter form, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/verve/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/verve/public/CNAME` = `verve.free.componentdock.com`
  and the package `homepage` = `https://verve.free.componentdock.com`.
