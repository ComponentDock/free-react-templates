# Carosle — Design Notes

Reference: **Carousel 04** — `https://colorlib.com/wp/template/carousel-04/`  
Live preview: `https://preview.colorlib.com/theme/carousel-04/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-04.jpg  
Shipped: https://carosle.free.componentdock.com

- Recreation of ColorLib **Carousel V04** (`https://colorlib.com/wp/template/carousel-04/`).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/carosle/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | brand |
| `--color-brand-dark` | `#0056b3` | brand dark |
| `--color-ink` | `#1a1a2e` | ink |
| `--color-ink-dark` | `#0f0f1a` | ink dark |
| `--font-family-sans` | `'Poppins', sans-serif` | font family sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Carousel` | Testimonial Carousel Section | see fidelity note below |
| 3 | `Footer` | Footer Component | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Revolve · Home · Slides · About · Contact

### `Carousel`
#### Scenario: Testimonial Carousel Section - The template must display a clean, centered testimonial carousel featuring quote cards with quotation marks icon, descriptive quote text, author name, and role/title. - Interactive slide navigation (prev/next controls and clickable pagination dots).

### `Footer`
#### Scenario: Footer Component - Professional footer featuring brand info, quick navigation links, newsletter signup, and mandatory Component Dock attribution (`https://www.componentdock.com/`).

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
- **Provenance ban.** No file under `apps/carosle/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/carosle/public/CNAME` = `carosle.free.componentdock.com`
  and the package `homepage` = `https://carosle.free.componentdock.com`.
