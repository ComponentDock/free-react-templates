# Peony — Design Notes

Reference: **Camille** — `https://colorlib.com/wp/template/camille/`  
Live preview: `https://preview.colorlib.com/theme/camille/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/camille-free-template.jpg  
Shipped: https://peony.free.componentdock.com

Peony is a single-page beauty-salon landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Camille" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Pacifico**, **Playfair Display**, **Work Sans**

## Design tokens (`apps/peony/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f18c8e` | brand |
| `--color-brand-dark` | `#d96a6c` | brand dark |
| `--color-plum` | `#563b4c` | plum |
| `--color-blush` | `#f7b9bb` | blush |
| `--color-paper` | `#f7f5f6` | Paper — light section backgrounds (default white, alt #f7f5f6). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d from the original). |
| `--color-primary-50` | `#fdf2f3` | primary 50 |
| `--color-primary-100` | `#fbe5e6` | primary 100 |
| `--color-primary-200` | `#f8cfd1` | primary 200 |
| `--color-primary-300` | `#f4adb0` | primary 300 |
| `--color-primary-400` | `#f18c8e` | primary 400 |
| `--color-primary-500` | `#ec7174` | primary 500 |
| `--color-primary-600` | `#e2565a` | primary 600 |
| `--color-primary-700` | `#c64549` | primary 700 |
| `--color-primary-800` | `#a23c3f` | primary 800 |
| `--color-primary-900` | `#863639` | primary 900 |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |
| `--font-script` | `'Pacifico', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Welcome hero | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Booking` | Booking band | see fidelity note below |
| 6 | `Team` | Stylist team | see fidelity note below |
| 7 | `Gallery` | Gallery | see fidelity note below |
| 8 | `Pricing` | Pricing | see fidelity note below |
| 9 | `Testimony` | Testimony band | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Peony", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero section with a background image, a level-1 headline, and a call-to-action button.

### `About`
The system SHALL render an about section with a heading and four service features.

### `Services`
The system SHALL render a services section with a heading and at least four numbered service cards.

### `Booking`
The system SHALL render a booking band with the heading "Make an Appointment" and a service selector.

### `Team`
The system SHALL render a "Stylist" section with at least four member cards.

### `Gallery`
The system SHALL render a gallery section with the heading "Working on a Salon" and at least six photo tiles.

### `Pricing`
The system SHALL render an "Our Prices" section with at least four pricing cards, each with a price and a feature list.

### `Testimony`
The system SHALL render a "Happy Customer" testimony band.

### `Footer`
The system SHALL render a footer with the site name, link columns, and contact details.

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
- **Provenance ban.** No file under `apps/peony/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/peony/public/CNAME` = `peony.free.componentdock.com`
  and the package `homepage` = `https://peony.free.componentdock.com`.
