# Inkvibe — Design Notes

Reference: **Tattooz** — `https://colorlib.com/wp/template/tattooz/`  
Live preview: `https://preview.colorlib.com/theme/tattooz/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/tattooz-free-template.jpg  
Shipped: https://inkvibe.free.componentdock.com

Inkvibe is a multi-section tattoo studio landing page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Tattooz" tattoo studio design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600;700;800**

## Design tokens (`apps/inkvibe/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff8eb` | primary 50 |
| `--color-primary-100` | `#ffecc6` | primary 100 |
| `--color-primary-200` | `#ffd588` | primary 200 |
| `--color-primary-300` | `#ffb84a` | primary 300 |
| `--color-primary-400` | `#fb9902` | primary 400 |
| `--color-primary-500` | `#e88a00` | primary 500 |
| `--color-primary-600` | `#c06a00` | primary 600 |
| `--color-primary-700` | `#9a4d02` | primary 700 |
| `--color-primary-800` | `#7d3c08` | primary 800 |
| `--color-primary-900` | `#68320b` | primary 900 |
| `--color-void` | `#0d0f11` | Dark backgrounds (ColorLib bg-1 / bg-2 / body). |
| `--color-obsidian` | `#131619` | obsidian |
| `--color-charcoal` | `#1a1d20` | charcoal |
| `--color-ink` | `#222222` | Body text on dark (ColorLib #222 / #303030 / #555). |
| `--color-slate` | `#303030` | slate |
| `--color-ash` | `#555555` | ash |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Montserrat via Google Fonts <link> in index.html. |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Portfolio` | Portfolio section | see fidelity note below |
| 6 | `Team` | Team section | see fidelity note below |
| 7 | `DiscountCta` | Discount CTA | see fidelity note below |
| 8 | `Pricing` | Pricing section | see fidelity note below |
| 9 | `BookNow` | Book Now CTA | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky dark navigation bar with the brand name "Inkvibe" and navigation links to all major sections.

### `Hero`
The system SHALL render a full-width hero section with a background image, heading, subtext, and a call-to-action button.

### `About`
The system SHALL render an about section with a heading, subheading, images, and descriptive text.

### `Services`
The system SHALL render a services section with 6 service cards in a responsive grid.

### `Portfolio`
The system SHALL render a portfolio section with a filterable gallery grid.

### `Team`
The system SHALL render a team section with 4 artist profile cards.

### `DiscountCta`
The system SHALL render a parallax discount call-to-action section.

### `Pricing`
The system SHALL render a pricing section with 3 tiers.

### `BookNow`
The system SHALL render a book-now call-to-action section.

### `Blog`
The system SHALL render a blog section with 4 post cards.

### `Footer`
The system SHALL render a 4-column footer with brand info, business hours, quick links, and a newsletter form, plus a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/inkvibe/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/inkvibe/public/CNAME` = `inkvibe.free.componentdock.com`
  and the package `homepage` = `https://inkvibe.free.componentdock.com`.
