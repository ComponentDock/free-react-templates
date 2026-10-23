# Maxim — Design Notes

Reference: **Neutral** — `https://colorlib.com/wp/template/neutral/`  
Live preview: `https://preview.colorlib.com/theme/neutral/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/neutral-free-template.jpg  
Shipped: https://maxim.free.componentdock.com

Recreate the ColorLib Neutral law firm template as "Maxim" — a single-page React website with hero, counter stats, about section, testimonials carousel, vertical-tabbed practice areas, attorney grid, blog cards, contact form, and footer. Built with React 19, Tailwind CSS 4, and TypeScript. Source: https://colorlib.com/wp/template/neutral/

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:wght@200;300;400;600;700;800;900**

## Design tokens (`apps/maxim/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#1a73e8` | brand |
| `--color-brand-hover` | `#1557b0` | brand hover |
| `--color-dark` | `#212529` | dark |
| `--color-ink` | `#212529` | ink |
| `--color-muted` | `#6c757d` | muted |
| `--color-surface` | `#f8f9fa` | surface |
| `--color-edge` | `#e9ecef` | edge |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `Counter` | Counter Stats | see fidelity note below |
| 4 | `About` | About Section | see fidelity note below |
| 5 | `Testimonials` | Testimonials | see fidelity note below |
| 6 | `PracticeAreas` | Practice Areas | see fidelity note below |
| 7 | `Attorneys` | Attorneys | see fidelity note below |
| 8 | `Blog` | Blog | see fidelity note below |
| 9 | `Contact` | Contact Form | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Mobile navigation · Request a Quote

### `Hero`
The template SHALL display a full-height hero with background image, dark overlay, headline, subtitle, and CTA button.

### `Counter`
The template SHALL display 4 animated stat cards showing firm metrics.

### `About`
The template SHALL display a two-column about layout with image and welcome text.

### `Testimonials`
The template SHALL display a carousel of client testimonials with prev/next navigation and dot indicators.

### `PracticeAreas`
The template SHALL display 10 law practice areas in a vertical tabbed layout.

### `Attorneys`
The template SHALL display 4 attorney cards in a grid with photo, name, role, and social links.

### `Blog`
The template SHALL display 3 blog post cards with image, date, title, and excerpt.

### `Contact`
The template SHALL display a contact form with name, email, subject, message fields and office info sidebar.

### `Footer`
The template SHALL display a footer with about text, navigation links, social icons, and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/maxim/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/maxim/public/CNAME` = `maxim.free.componentdock.com`
  and the package `homepage` = `https://maxim.free.componentdock.com`.
