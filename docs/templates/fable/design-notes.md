# Fable — Design Notes

Reference: **Stories** — `https://colorlib.com/wp/template/stories/`  
Live preview: `https://preview.colorlib.com/theme/stories/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/stories-free-template.jpg  
Shipped: https://fable.free.componentdock.com

Fable is a single-page food & lifestyle blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Stories" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;700**, **Poppins**

## Design tokens (`apps/fable/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff4ec` | primary 50 |
| `--color-primary-100` | `#ffe6d5` | primary 100 |
| `--color-primary-200` | `#ffc8aa` | primary 200 |
| `--color-primary-300` | `#ffa573` | primary 300 |
| `--color-primary-400` | `#ff8242` | primary 400 |
| `--color-primary-500` | `#fd5f00` | primary 500 |
| `--color-primary-600` | `#e35600` | primary 600 |
| `--color-primary-700` | `#bd4800` | primary 700 |
| `--color-primary-800` | `#963a00` | primary 800 |
| `--color-primary-900` | `#6f2b00` | primary 900 |
| `--color-brand` | `#fd5f00` | brand |
| `--color-accent` | `#ffd615` | accent |
| `--color-ink` | `#333333` | ink |
| `--color-coal` | `#1f1f1f` | coal |
| `--color-paper` | `#f8f9fa` | paper |
| `--color-counter-from` | `#6b75ff` | counter from |
| `--color-counter-to` | `#59b7ff` | counter to |
| `--color-meta` | `#999999` | meta |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-serif` | `'Playfair Display', Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `RecentStories` | Recent stories section | see fidelity note below |
| 4 | `BlogSection` | About section | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Counter` | Counter section | see fidelity note below |
| 7 | `Subscribe` | Newsletter subscribe | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Fable", anchor links to the page's sections, and a dark-mode toggle button.

### `HeroSlider`
The system SHALL render a full-width hero slider with two slides, each split between a food photograph and a solid yellow text panel.

### `RecentStories`
The system SHALL render a "Recent Stories" section with a heading (yellow square dot after the last word) and three large photo cards with category overlays.

### `BlogSection`
The system SHALL render a dark "About Stories"-style section with a heading, paragraph, and an italic serif signature.

### `About`
The system SHALL render a dark "About Stories"-style section with a heading, paragraph, and an italic serif signature.

### `Counter`
The system SHALL render a counter section over a background image with numbered stat blocks.

### `Subscribe`
The system SHALL render a subscribe section with a heading, an email input, and a submit button.

### `Footer`
The system SHALL render a dark footer with four columns, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/fable/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fable/public/CNAME` = `fable.free.componentdock.com`
  and the package `homepage` = `https://fable.free.componentdock.com`.
