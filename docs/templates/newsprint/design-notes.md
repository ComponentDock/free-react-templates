# Newsprint — Design Notes

Reference: **Magdesign** — `https://colorlib.com/wp/template/magdesign/`  
Live preview: `https://preview.colorlib.com/theme/magdesign/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/magdesign-free-template.jpg  
Shipped: https://newsprint.free.componentdock.com

Newsprint is a single-page magazine-blog landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Magdesign" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/newsprint/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#f79918` | accent |
| `--color-teal` | `#10495c` | teal |
| `--color-ink` | `#212529` | ink |
| `--color-body` | `#888888` | body |
| `--color-soft` | `#f8f9fa` | soft |
| `--color-line` | `#dee2e6` | line |
| `--color-primary` | `#f79918` | primary scale so shared Button/ButtonLink (bg-primary-600) render accent orange |
| `--color-primary-50` | `#fef4e6` | primary 50 |
| `--color-primary-100` | `#fde8cc` | primary 100 |
| `--color-primary-200` | `#fbd099` | primary 200 |
| `--color-primary-300` | `#f9b866` | primary 300 |
| `--color-primary-400` | `#f7a03f` | primary 400 |
| `--color-primary-500` | `#f79918` | primary 500 |
| `--color-primary-600` | `#f79918` | primary 600 |
| `--color-primary-700` | `#d97f0e` | primary 700 |
| `--color-primary-800` | `#b5650b` | primary 800 |
| `--color-primary-900` | `#8f4f09` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `TrendingSlider` | Trending slider | see fidelity note below |
| 3 | `FeaturedGrid` | Featured posts grid | see fidelity note below |
| 4 | `PopularSlider` | Most popular slider | see fidelity note below |
| 5 | `CategoryBlock` | Category sections | see fidelity note below |
| 6 | `Subscribe` | Newsletter subscribe | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky top navigation bar with a centered site name, a search input, social icons, a hamburger toggle, and section links.

### `TrendingSlider`
The system SHALL render a "Trending" section with a slider of large horizontal feature post cards, each with a thumbnail, category tags, date, headline, excerpt, and author byline.

### `FeaturedGrid`
The system SHALL render a three-column grid of vertical post cards below the Trending slider.

### `PopularSlider`
The system SHALL render a "Most Popular Posts" section with a slider of horizontal post rows and prev/next controls.

### `CategoryBlock`
The system SHALL render two category blocks (Sports and Business), each with a heading and a small list of post rows.

### `Subscribe`
The system SHALL render a light-background subscribe section with an email input and a Subscribe button.

### `Footer`
The system SHALL render a footer with a CTA heading, widget columns, social icons, and a copyright bar with Terms & Conditions / Privacy Policy links.

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
- **Provenance ban.** No file under `apps/newsprint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/newsprint/public/CNAME` = `newsprint.free.componentdock.com`
  and the package `homepage` = `https://newsprint.free.componentdock.com`.
