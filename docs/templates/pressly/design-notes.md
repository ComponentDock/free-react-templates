# Pressly — Design Notes

Reference: **Magaznpro** — `https://colorlib.com/wp/template/magaznpro/`  
Live preview: `https://preview.colorlib.com/theme/magaznpro/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/magaznpro-free-template.jpg  
Shipped: https://pressly.free.componentdock.com

Pressly is a single-page magazine / news website template in the free-react-templates monorepo. It is a React recreation of the ColorLib "Magaznpro" magazine template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:wght@400;500;700**

## Design tokens (`apps/pressly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#ff00dd` | accent |
| `--color-heading` | `#000000` | heading |
| `--color-body` | `#646464` | body |
| `--color-meta` | `#5e5e5e` | meta |
| `--color-social-grey` | `#d4d4e1` | social grey |
| `--color-section-border` | `#e8e9ff` | section border |
| `--color-light-bg` | `#fff6fe` | light bg |
| `--color-card-border` | `#f0e9ff` | card border |
| `--color-badge-teal` | `#00ceb2` | badge teal |
| `--color-badge-blue` | `#0154f7` | badge blue |
| `--color-badge-orange` | `#f04506` | badge orange |
| `--color-badge-yellow` | `#fbce0f` | badge yellow |
| `--color-badge-purple` | `#dd00ff` | badge purple |
| `--color-footer-bg` | `#1a1a2e` | footer bg |
| `--color-primary` | `#ff00dd` | primary |
| `--color-primary-50` | `#fff0fb` | primary 50 |
| `--color-primary-100` | `#ffe0f7` | primary 100 |
| `--color-primary-200` | `#ffc2ef` | primary 200 |
| `--color-primary-300` | `#ff94e3` | primary 300 |
| `--color-primary-400` | `#ff55d1` | primary 400 |
| `--color-primary-500` | `#ff22c3` | primary 500 |
| `--color-primary-600` | `#ff00dd` | primary 600 |
| `--color-primary-700` | `#d400b8` | primary 700 |
| `--color-primary-800` | `#ab0093` | primary 800 |
| `--color-primary-900` | `#7a006a` | primary 900 |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with social icons, logo, and controls | see fidelity note below |
| 2 | `HeroCarousel` | Hero carousel | see fidelity note below |
| 3 | `TrendingNow` | Trending Now section | see fidelity note below |
| 4 | `WhatsNew` | What's New section | see fidelity note below |
| 5 | `Technology` | Technology section | see fidelity note below |
| 6 | `InstagramStrip` | Instagram strip | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |
| 8 | `BackToTop` | Back-to-top button | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a top header with social icon links on the left, a centered "Pressly" wordmark, and search + dropdown + sign-in on the right.

### `HeroCarousel`
The system SHALL render a full-width hero carousel with large images and white overlay cards.

### `TrendingNow`
The system SHALL render a "TRENDING NOW" section with a large card and a grid of 5 smaller cards.

### `WhatsNew`
The system SHALL render a tabbed "What's New" section with tabs and articles.

### `Technology`
The system SHALL render a Technology section on a light pink background with a 3-column layout.

### `InstagramStrip`
The system SHALL render a row of 6 square images with hover overlay.

### `Footer`
The system SHALL render a dark footer with 4 columns and a copyright line.

### `BackToTop`
The system SHALL render a floating back-to-top button.

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
- **Provenance ban.** No file under `apps/pressly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pressly/public/CNAME` = `pressly.free.componentdock.com`
  and the package `homepage` = `https://pressly.free.componentdock.com`.
