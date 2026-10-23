# Momentum — Design Notes

Reference: **Action** — `https://colorlib.com/wp/template/action/`  
Live preview: `https://preview.colorlib.com/theme/action/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/action-free-template.jpg  
Shipped: https://momentum.free.componentdock.com

Momentum is a single-page startup / landing website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Action" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Jost**, **Jost:wght@400;500;600;700**

## Design tokens (`apps/momentum/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#743ad5` | brand |
| `--color-brand-pink` | `#d53a9d` | brand pink |
| `--color-ink` | `#212529` | Ink — body text (#212529 from the original). |
| `--color-muted` | `#6c757d` | Muted — secondary text (grey on light sections). |
| `--color-dark` | `#000000` | Dark — section backgrounds (#000 / #111 / #222 from the original). |
| `--color-dark-soft` | `#111111` | dark soft |
| `--color-dark-card` | `#222222` | dark card |
| `--color-light` | `#efefef` | light |
| `--color-primary-50` | `#f1eafe` | primary 50 |
| `--color-primary-100` | `#e2d3fc` | primary 100 |
| `--color-primary-200` | `#c5a6f9` | primary 200 |
| `--color-primary-300` | `#a87af5` | primary 300 |
| `--color-primary-400` | `#8b4df2` | primary 400 |
| `--color-primary-500` | `#743ad5` | primary 500 |
| `--color-primary-600` | `#743ad5` | primary 600 |
| `--color-primary-700` | `#5c2ea8` | primary 700 |
| `--font-sans` | `'Jost', ui-sans-serif, system-ui, sans-serif` | Original font: Jost (400/500/600/700) for everything. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Transparent navbar with dropdowns and mobile panel | see fidelity note below |
| 2 | `Hero` | Full-viewport hero with headline and CTA | see fidelity note below |
| 3 | `Countdown` | Event countdown section | see fidelity note below |
| 4 | `Services` | Services grid with hover-fill cards | see fidelity note below |
| 5 | `Pricing` | Pricing section | see fidelity note below |
| 6 | `MoreFeatures` | More Features dark section | see fidelity note below |
| 7 | `Testimonials` | Testimonials slider in white box | see fidelity note below |
| 8 | `Newsletter` | Newsletter form | see fidelity note below |
| 9 | `Footer` | Footer with social circles and credit | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar over the hero with a wordmark on the left, six nav entries (one a dropdown with nested submenu) on the right, and a slide-in mobile menu.

### `Hero`
The system SHALL render a full-viewport hero with a dark background image, a dark overlay, a two-line white headline, a credit line, and a gradient pill CTA.

### `Countdown`
The system SHALL render a black countdown section with a heading block, four live countdown units (Days, Hours, Minutes, Seconds), an event-ended alert, and a Get Started CTA.

### `Services`
The system SHALL render a light-grey services section with a heading and four icon cards that fill with the brand gradient on hover, followed by a white About box overlapping the next section.

### `Pricing`
The system SHALL render a black pricing section with three purple cards, each with a name, blurb, divider, price, and an outline Buy button.

### `MoreFeatures`
The system SHALL render a full-viewport dark background-image section with a heading and three dark feature cards that fill with the gradient on hover.

### `Testimonials`
The system SHALL render a white box pulled up over the dark section containing a testimonials slider with three quotes and dot navigation.

### `Newsletter`
The system SHALL render a light-grey newsletter section with an email form (name + email + Subscribe button) that validates input.

### `Footer`
The system SHALL render a centered footer with four circular social buttons and a copyright line with the author credit.

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
- **Provenance ban.** No file under `apps/momentum/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/momentum/public/CNAME` = `momentum.free.componentdock.com`
  and the package `homepage` = `https://momentum.free.componentdock.com`.
