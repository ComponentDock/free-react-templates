# Newsflow — Design Notes

Reference: **Viral** — `https://colorlib.com/wp/template/viral/`  
Live preview: `https://preview.colorlib.com/theme/viral/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/viralstory-free-template.jpg  
Shipped: https://newsflow.free.componentdock.com

Newsflow is a single-page viral news / magazine website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;500;700;900**

## Design tokens (`apps/newsflow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e91e63` | brand |
| `--color-brand-dark` | `#c2185b` | brand dark |
| `--color-cta-start` | `#ff9800` | cta start |
| `--color-cta-end` | `#ff5722` | cta end |
| `--color-surface` | `#ffffff` | surface |
| `--color-surface-alt` | `#f8f9fa` | surface alt |
| `--color-text-primary` | `#333333` | text primary |
| `--color-text-secondary` | `#777777` | text secondary |
| `--color-text-muted` | `#999999` | text muted |
| `--font-family-sans` | `'Roboto', sans-serif` | font family sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar displays welcome message and social links | see fidelity note below |
| 2 | `Navbar` | Navbar displays logo, navigation, and CTA | see fidelity note below |
| 3 | `TrendingStories` | Trending stories section | see fidelity note below |
| 4 | `MainContent` | Main content grid | see fidelity note below |
| 5 | `MoreStories` | More stories section | see fidelity note below |
| 6 | `Newsletter` | Newsletter signup form | see fidelity note below |
| 7 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The template SHALL render a top bar with a welcome message on the left and social media icon links on the right.

### `Navbar`
The template SHALL render a navigation bar with the site logo, navigation links, a search button, and an "Add Post" CTA button.

### `TrendingStories`
The template SHALL render a trending stories section with three horizontal story cards.

### `MainContent`
The template SHALL render a magazine-style content grid with a large feature card and two smaller sidebar cards.

### `MoreStories`
The template SHALL render a "more stories" section with three story cards in a grid.

### `Newsletter`
The template SHALL render a newsletter signup section with an email input and subscribe button.

### `Footer`
The template SHALL render a footer with site info, navigation links, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/newsflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/newsflow/public/CNAME` = `newsflow.free.componentdock.com`
  and the package `homepage` = `https://newsflow.free.componentdock.com`.
