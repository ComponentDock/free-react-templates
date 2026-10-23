# Bistrox — Design Notes

Reference: **Tasty** — `https://colorlib.com/wp/template/tasty/`  
Live preview: `https://preview.colorlib.com/theme/tasty/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/tasty-free-template.jpg  
Shipped: https://bistrox.free.componentdock.com

A restaurant landing template with hero slider, reservation form, tabbed menu, specials, testimonials, blog, and instagram grid. Recreation of ColorLib **Tasty**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;600;700**

## Design tokens (`apps/bistrox/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f96d00` | brand |
| `--color-brand-hover` | `#e06200` | brand hover |
| `--color-brand-light` | `#ffb400` | brand light |
| `--color-text-dark` | `#212529` | text dark |
| `--color-text-muted` | `#999999` | text muted |
| `--color-bg-light` | `#f8f9fa` | bg light |
| `--color-border-gray` | `#cccccc` | border gray |
| `--font-sans` | `'Muli', arial, sans-serif` | font sans |
| `--font-heading` | `'Muli', arial, sans-serif` | font heading |

> The spec has no section-level requirements; the order below is read from `apps/bistrox/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `ReservationForm` | — | no dedicated spec block |
| 4 | `AboutSection` | — | no dedicated spec block |
| 5 | `MenuSection` | — | no dedicated spec block |
| 6 | `SpecialtiesParallax` | — | no dedicated spec block |
| 7 | `SpecialtiesGrid` | — | no dedicated spec block |
| 8 | `TestimonialSection` | — | no dedicated spec block |
| 9 | `BlogSection` | — | no dedicated spec block |
| 10 | `InstagramGrid` | — | no dedicated spec block |
| 11 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle menu · Bistrox

### `Hero`
*anchors only* — Bistrox Restaurant · Book a table for yourself at a time convenient for you · Tasty & Delicious Food · Book a table

### `ReservationForm`
*anchors only* — Name · Phone · Date · Time · Person

### `AboutSection`
*anchors only* — About Bistrox · Our chef cooks the most delicious food for you

### `MenuSection`
*anchors only* — Our Menu · Bistrox Menu · Make a Reservation

### `SpecialtiesParallax`
*anchors only* — Our Specialties

### `SpecialtiesGrid`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `TestimonialSection`
*anchors only* — Previous testimonial · Next testimonial

### `BlogSection`
*anchors only* — Blog & News · Read more

### `InstagramGrid`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Footer`
*anchors only* — Twitter · Facebook · Instagram

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
- **Provenance ban.** No file under `apps/bistrox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bistrox/public/CNAME` = `bistrox.free.componentdock.com`
  and the package `homepage` = `https://bistrox.free.componentdock.com`.
