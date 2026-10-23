# Meadow — Design Notes

Reference: **Ecogreen** — `https://colorlib.com/wp/template/ecogreen/`  
Live preview: `https://preview.colorlib.com/theme/ecogreen/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ecogreen-colorlib-template.jpg  
Shipped: https://meadow.free.componentdock.com

Meadow is a single-page environment / green-NGO landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Ecogreen" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/meadow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#73b925` | brand |
| `--color-brand-deep` | `#7bc628` | brand deep |
| `--color-mint` | `#d7f1b9` | mint |
| `--color-mint-soft` | `#effae4` | mint soft |
| `--color-mist` | `#f4f6f1` | mist |
| `--color-canvas` | `#f9faf7` | canvas |
| `--color-ink` | `#1c1c1c` | ink |
| `--color-body` | `#8c8c8c` | body |
| `--color-faint` | `#b5b5b5` | faint |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar | see fidelity note below |
| 2 | `Navbar` | Navbar | see fidelity note below |
| 3 | `HeroSlider` | Hero slider | see fidelity note below |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `Campaign` | Campaign gallery | see fidelity note below |
| 6 | `DonateCta` | Donate CTA | see fidelity note below |
| 7 | `Statistics` | Statistics | see fidelity note below |
| 8 | `Volunteers` | Volunteers | see fidelity note below |
| 9 | `Testimonials` | Testimonials | see fidelity note below |
| 10 | `FundRaised` | Fund-raised banner | see fidelity note below |
| 11 | `Blog` | Blog | see fidelity note below |
| 12 | `Newsletter` | Newsletter | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The system SHALL render a dark top info bar with the brand wordmark and contact details.

### `Navbar`
The system SHALL render a green navbar with white links and a "Donate Now!" call-to-action, collapsing to a mobile drawer.

### `HeroSlider`
The system SHALL render a full-width hero photo slider with two slides, a green eyebrow, a white headline, and a green "Get Started" button.

### `Services`
The system SHALL render a "Services" section with five green-blob-icon cards.

### `Campaign`
The system SHALL render an "Our Campaign" gallery on a light band with four items, each with a photo, label chip, progress bar, and raised/goal figures.

### `DonateCta`
The system SHALL render a donate call-to-action band with three "services-2" link cards.

### `Statistics`
The system SHALL render a solid green statistics band with four counters.

### `Volunteers`
The system SHALL render an "Our Volunteer" section with four staff cards.

### `Testimonials`
The system SHALL render a testimonial slider on a light band with distinct customer cards.

### `FundRaised`
The system SHALL render a white banner with an eco-care headline and a fund-raised stat block.

### `Blog`
The system SHALL render a "Recent From Blog" section with four distinct blog cards.

### `Newsletter`
The system SHALL render a green-overlay newsletter band with a subscribe button.

### `Footer`
The system SHALL render a dark four-widget footer with a Component Dock credit.

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
- **Provenance ban.** No file under `apps/meadow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/meadow/public/CNAME` = `meadow.free.componentdock.com`
  and the package `homepage` = `https://meadow.free.componentdock.com`.
