# Rentora — Design Notes

Reference: **Rental** — `https://colorlib.com/wp/template/rental/`  
Live preview: `https://preview.colorlib.com/theme/rental/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/rental-free-template.jpg  
Shipped: https://rentora.free.componentdock.com

Rentora is a single-page real-estate website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/rentora/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#cfb579` | brand |
| `--color-brand-hover` | `#d8b25a` | brand hover |
| `--color-golddark` | `#bd9c50` | golddark |
| `--color-ink` | `#14303a` | ink |
| `--color-navy` | `#1b212e` | navy |
| `--color-soft` | `#f9f9ff` | soft |
| `--color-circle` | `#e9eef2` | circle |
| `--color-muted` | `#797979` | muted |
| `--color-kicker` | `#666666` | kicker |
| `--color-line` | `#afb5be` | line |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Team` | Team section | see fidelity note below |
| 4 | `Passion` | Passion section | see fidelity note below |
| 5 | `Apartments` | Apartment listings | see fidelity note below |
| 6 | `Room` | Room section | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `CtaBand` | — | no dedicated spec block |
| 9 | `Blog` | Blog | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a transparent navbar over the hero with a brand, centered navigation links, and a gold "Submit property" button.

### `Hero`
The system SHALL render an 800px split hero with a text column, a photo with a curved mask, a gold play button, and social icons.

### `Team`
The system SHALL render a team split with a photo block, a heading, a three-item checklist, and a Read More button.

### `Passion`
The system SHALL render a dark passion section with a title and four icon cards.

### `Apartments`
The system SHALL render an apartment section with a title, a View More link, and three listing cards.

### `Room`
The system SHALL render two full-bleed alternating photo rows with white overlay text cards.

### `Testimonials`
The system SHALL render a testimonial carousel with four slides.

### `CtaBand`
*anchors only* — Reserve a viewing

### `Blog`
The system SHALL render a blog section with a title and four posts.

### `Footer`
The system SHALL render a dark footer with four columns, a newsletter form, and a copyright bar.

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
- **Provenance ban.** No file under `apps/rentora/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rentora/public/CNAME` = `rentora.free.componentdock.com`
  and the package `homepage` = `https://rentora.free.componentdock.com`.
