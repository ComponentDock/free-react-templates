# Taskflow — Design Notes

Reference: **Work** — `https://colorlib.com/wp/template/work/`  
Live preview: `https://preview.colorlib.com/theme/work/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/work-free-template.jpg  
Shipped: https://taskflow.free.componentdock.com

TaskFlow is a single-page personal portfolio and creative agency template. It is a React recreation of the ColorLib "Work" template (preview: https://preview.colorlib.com/theme/work/), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. Design tokens captured from the original:

## Typography

Fonts loaded by `index.html` (Google Fonts): **Quicksand**, **Quicksand:wght@300;400;500;700**

## Design tokens (`apps/taskflow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#fef2f0` | TaskFlow brand palette — orange-red #F75940 from ColorLib Work design |
| `--color-brand-100` | `#fde1dc` | brand 100 |
| `--color-brand-200` | `#fbc3b9` | brand 200 |
| `--color-brand-300` | `#f8988a` | brand 300 |
| `--color-brand-400` | `#f75940` | brand 400 |
| `--color-brand-500` | `#ef3c22` | brand 500 |
| `--color-brand-600` | `#dc2d15` | brand 600 |
| `--color-brand-700` | `#b9220e` | brand 700 |
| `--color-brand-800` | `#991f11` | brand 800 |
| `--color-brand-900` | `#7f1f15` | brand 900 |
| `--font-sans` | `'Quicksand', Arial, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Sidebar navigation | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `About` | About section with accordion | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Portfolio` | Portfolio section | see fidelity note below |
| 6 | `Blog` | Blog section | see fidelity note below |
| 7 | `CtaSection` | CTA section | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The system SHALL render a fixed left sidebar with the logo "TaskFlow", navigation links (Home, Work, About, Services, Blog, Contact), and a footer with copyright and social media icon links.

### `HeroSlider`
The system SHALL render a full-height hero section with slides containing background images, dark overlays, centered headings, and CTA buttons.

### `About`
The system SHALL render an About section with overlapping images, a welcome heading, descriptive text, and a 3-panel accordion.

### `Services`
The system SHALL render a Services section with 6 expertise cards in a 2-column grid, each with an icon, title, and description.

### `Portfolio`
The system SHALL render a Work/Portfolio section with 6 project cards in a 2-column grid, each with a background image, overlay, title, tags, and metrics.

### `Blog`
The system SHALL render a Blog section with 3 post cards in a 3-column layout, each with an image, date, category, title, excerpt, and "Read More" link.

### `CtaSection`
The system SHALL render a CTA section with a light gray background, heading, description, and contact button.

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
- **Provenance ban.** No file under `apps/taskflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/taskflow/public/CNAME` = `taskflow.free.componentdock.com`
  and the package `homepage` = `https://taskflow.free.componentdock.com`.
