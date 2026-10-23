# Mane — Design Notes

Reference: **Haircare** — `https://colorlib.com/wp/template/haircare/`  
Live preview: `https://preview.colorlib.com/theme/haircare/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/haircare-free-template.jpg  
Shipped: https://mane.free.componentdock.com

Mane is a single-page hair-salon landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Haircare" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Barlow Condensed**, **Barlow Condensed:wght@300;400;500;600;700**, **Poppins**

## Design tokens (`apps/mane/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#bf925b` | brand |
| `--color-brand-dark` | `#a3773f` | brand dark |
| `--color-brand-light` | `#d4b183` | brand light |
| `--color-plum` | `#563b4c` | Plum — dark footer (#563b4c from the original). |
| `--color-plum-dark` | `#3d2b37` | plum dark |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds (#f8f9fa from the original). |
| `--color-ink` | `#1a1a1a` | Ink — headings (near-black from the original). |
| `--color-mist` | `#999999` | Mist — muted body text (#999999 from the original). |
| `--color-primary-50` | `#faf4ec` | primary 50 |
| `--color-primary-100` | `#f3e6d3` | primary 100 |
| `--color-primary-200` | `#e8cfa9` | primary 200 |
| `--color-primary-300` | `#dcb67c` | primary 300 |
| `--color-primary-400` | `#d0a45f` | primary 400 |
| `--color-primary-500` | `#bf925b` | primary 500 |
| `--color-primary-600` | `#a3773f` | primary 600 |
| `--color-primary-700` | `#865e33` | primary 700 |
| `--color-primary-800` | `#6b4b2a` | primary 800 |
| `--color-primary-900` | `#4f3820` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Barlow Condensed', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Services` | Services | see fidelity note below |
| 4 | `Booking` | Booking form | see fidelity note below |
| 5 | `Team` | Team | see fidelity note below |
| 6 | `Gallery` | Gallery | see fidelity note below |
| 7 | `Pricing` | Pricing | see fidelity note below |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Haircare", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background image, a level-1 headline, and a category split (For Men / For Women).

### `Services`
The system SHALL render a services section with at least four service cards.

### `Booking`
The system SHALL render a "Make an Appointment" section with a booking form and contact phone.

### `Team`
The system SHALL render a team section with at least four member cards with names and roles.

### `Gallery`
The system SHALL render a gallery section with a heading and at least four photo tiles.

### `Pricing`
The system SHALL render a pricing section with priced tiers.

### `Testimonials`
The system SHALL render a testimonials section with a heading, a quote, and an author.

### `Footer`
The system SHALL render a footer with the site name, quick links, a contact column, and social links.

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
- **Provenance ban.** No file under `apps/mane/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/mane/public/CNAME` = `mane.free.componentdock.com`
  and the package `homepage` = `https://mane.free.componentdock.com`.
