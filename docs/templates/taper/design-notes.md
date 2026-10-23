# Taper — Design Notes

Reference: **Brber** — `https://colorlib.com/wp/template/brber/`  
Live preview: `https://preview.colorlib.com/theme/brber/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/brber-free-template.jpg  
Shipped: https://taper.free.componentdock.com

Taper is a single-page barber-shop landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Brber" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The recreation carries the NEW name "Taper" (never the source name).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@300;400;500;600;700**, **Poppins**

## Design tokens (`apps/taper/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#d19f68` | brand |
| `--color-brand-dark` | `#af804d` | brand dark |
| `--color-brand-light` | `#e0bb8f` | brand light |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds (#f9f9ff from the original). |
| `--color-ink` | `#1d2434` | Ink — headings (#1d2434 from the original). |
| `--color-mist` | `#999999` | Mist — muted body text (#999999 from the original). |
| `--color-primary-50` | `#faf3ea` | primary 50 |
| `--color-primary-100` | `#f3e3d0` | primary 100 |
| `--color-primary-200` | `#e8cba7` | primary 200 |
| `--color-primary-300` | `#dcb07b` | primary 300 |
| `--color-primary-400` | `#d3a374` | primary 400 |
| `--color-primary-500` | `#d19f68` | primary 500 |
| `--color-primary-600` | `#c08a4e` | primary 600 |
| `--color-primary-700` | `#af804d` | primary 700 |
| `--color-primary-800` | `#8f6638` | primary 800 |
| `--color-primary-900` | `#6f4f2c` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services grid | see fidelity note below |
| 5 | `Team` | Barbers team | see fidelity note below |
| 6 | `Pricing` | Pricing list | see fidelity note below |
| 7 | `Gallery` | Gallery | see fidelity note below |
| 8 | `Testimonials` | — | no dedicated spec block |
| 9 | `BlogSection` | — | no dedicated spec block |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Taper", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background image, a level-1 headline, and a call-to-action button.

### `About`
The system SHALL render an about section with a heading and supporting copy.

### `Services`
The system SHALL render a "Professional Services" section with at least three service cards.

### `Team`
The system SHALL render a team section with at least three member cards with names and roles.

### `Pricing`
The system SHALL render a "Our Best Pricing" section with at least six priced items.

### `Gallery`
The system SHALL render a gallery section with a heading and at least four photo tiles.

### `Testimonials`
*anchors only* — 5 out of 5 stars · What Our Clients Say · JONT NICOLIN KOOK

### `BlogSection`
*anchors only* — Hipos and tricks from recent blog

### `Footer`
The system SHALL render a footer with the site name, a short tagline, quick links, a newsletter field, and social links.

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
- **Provenance ban.** No file under `apps/taper/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/taper/public/CNAME` = `taper.free.componentdock.com`
  and the package `homepage` = `https://taper.free.componentdock.com`.
