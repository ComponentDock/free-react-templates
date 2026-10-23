# Supperhouse — Design Notes

Reference: **Restaurant** — `https://colorlib.com/wp/template/restaurant/`  
Live preview: `https://preview.colorlib.com/theme/restaurant/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/restaurant-free-restaurant-website-template.jpg  
Shipped: https://supperhouse.free.componentdock.com

Supperhouse is a single-page restaurant landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Restaurant" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/supperhouse/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f42f2c` | Supperhouse brand palette — red #f42f2c from the original restaurant design. |
| `--color-brand-dark` | `#d42522` | brand dark |
| `--color-ink` | `#222222` | Ink — dark charcoal headings/footer (#222 from the original). |
| `--color-ink-dark` | `#111111` | ink dark |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds. |
| `--color-mist` | `#777777` | Mist — muted body text (#777 from the original). |
| `--color-primary-50` | `#fef2f2` | primary 50 |
| `--color-primary-100` | `#fee2e2` | primary 100 |
| `--color-primary-200` | `#fecaca` | primary 200 |
| `--color-primary-300` | `#fca5a5` | primary 300 |
| `--color-primary-400` | `#f87171` | primary 400 |
| `--color-primary-500` | `#f42f2c` | primary 500 |
| `--color-primary-600` | `#d42522` | primary 600 |
| `--color-primary-700` | `#b91c1c` | primary 700 |
| `--color-primary-800` | `#991b1b` | primary 800 |
| `--color-primary-900` | `#7f1d1d` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Font: Poppins for everything. |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `Dishes` | Top Rated Dishes | see fidelity note below |
| 4 | `VideoSection` | Video section | see fidelity note below |
| 5 | `Features` | Features | see fidelity note below |
| 6 | `Menus` | Featured Food Menus | see fidelity note below |
| 7 | `Chefs` | Chefs / Team | see fidelity note below |
| 8 | `Blog` | Blog | see fidelity note below |
| 9 | `Contact` | Contact | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky navigation bar with the site name "Supperhouse", navigation links (Home, Dish, Chefs, Blog, Contact), and a hamburger menu for mobile.

### `Hero`
The system SHALL render a full-width hero with a background image, subtitle, heading, body text, and a CTA button.

### `Dishes`
The system SHALL render a "Our Top Rated Dishes" section with 3 dish cards in a grid.

### `VideoSection`
The system SHALL render a video promo section with a background image, play button, heading, and subtitle.

### `Features`
The system SHALL render 4 feature cards in a grid with icons.

### `Menus`
The system SHALL render a carousel with slide items showing menu descriptions and images.

### `Chefs`
The system SHALL render a team section with 4 chef cards that show a red overlay on hover.

### `Blog`
The system SHALL render a blog section with 4 blog post cards.

### `Contact`
The system SHALL render a split contact section with a map placeholder and a contact form.

### `Footer`
The system SHALL render a dark footer with 3 columns, newsletter form, social icons, and a Component Dock link.

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
- **Provenance ban.** No file under `apps/supperhouse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/supperhouse/public/CNAME` = `supperhouse.free.componentdock.com`
  and the package `homepage` = `https://supperhouse.free.componentdock.com`.
