# Paragon — Design Notes

Reference: **Ideal** — `https://colorlib.com/wp/template/ideal/`  
Live preview: `https://preview.colorlib.com/theme/ideal/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ideal-free-template.jpg  
Shipped: https://paragon.free.componentdock.com

Paragon is a single-page interior-design / architecture studio homepage template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400**

## Design tokens (`apps/paragon/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#207561` | brand |
| `--color-brand-dark` | `#185748` | brand dark |
| `--color-brand-active` | `#154d40` | brand active |
| `--color-ink` | `#000000` | ink |
| `--color-mist` | `#888888` | mist |
| `--color-faint` | `#b3b3b3` | faint |
| `--color-line` | `#ced4da` | line |
| `--color-smoke` | `#f8f9fa` | smoke |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `Intro` | Intro / experience section | see fidelity note below |
| 4 | `Services` | Featured services | see fidelity note below |
| 5 | `Projects` | Latest projects | see fidelity note below |
| 6 | `Testimonials` | Testimonials | see fidelity note below |
| 7 | `Blog` | Blog section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary · Secondary · Open menu · Close menu · Mobile

### `HeroSlider`
The system SHALL render a full-width hero photo slider with a centered headline, subtext, CTA button, and dot indicators.

### `Intro`
The system SHALL render a two-column intro with a mission headline and a green-bordered experience box.

### `Services`
The system SHALL render a 2×2 grid of service cards with an image, a category label, a title, and an arrow link.

### `Projects`
The system SHALL render a project carousel with an overlapping caption panel.

### `Testimonials`
The system SHALL render a centered testimonial slider with quotes and author names.

### `Blog`
The system SHALL render a four-column blog post grid.

### `Footer`
The system SHALL render a light footer with a dot-grid pattern background, widget columns, a newsletter form, and a copyright bar.

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
- **Provenance ban.** No file under `apps/paragon/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/paragon/public/CNAME` = `paragon.free.componentdock.com`
  and the package `homepage` = `https://paragon.free.componentdock.com`.
