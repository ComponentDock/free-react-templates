# Compass — Design Notes

Reference: **Pointer** — `https://colorlib.com/wp/template/pointer/`  
Live preview: `https://preview.colorlib.com/theme/pointer/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pointer-free-template.jpg  
Shipped: https://compass.free.componentdock.com

Compass is a single-page business / consulting-agency homepage template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Pointer" design (see TEMPLATES.md, line 477 — Bootstrap category), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700;900**

## Design tokens (`apps/compass/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e81050` | brand |
| `--color-royal` | `#505288` | royal |
| `--color-mist` | `#f8f9fa` | mist |
| `--color-ink` | `#000000` | ink |
| `--color-smoke` | `#737373` | smoke |
| `--color-faint` | `#999999` | faint |
| `--color-line` | `#e6e6e6` | line |
| `--color-footer` | `#333333` | footer |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `CtaBigImage` | Big-image CTA section | see fidelity note below |
| 4 | `Team` | Team section | see fidelity note below |
| 5 | `Approach` | Approach section | see fidelity note below |
| 6 | `Services` | Services section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Features` | Features section | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Contact` | Contact section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Mobile navigation · Compass

### `Hero`
The system SHALL render a full-viewport photo hero with an overlay, a centered headline, subtext, and a call-to-action button.

### `CtaBigImage`
The system SHALL render a photo carousel with an overlapping pink caption panel.

### `Team`
The system SHALL render a team grid of photo cards with hover social icons.

### `Approach`
The system SHALL render an intro row and three numbered approach steps.

### `Services`
The system SHALL render a light-gray services band with six service cards.

### `Testimonials`
The system SHALL render a testimonial slider with quote slides and dots.

### `Features`
The system SHALL render a two-column features section.

### `Blog`
The system SHALL render a blog section with three post cards.

### `Contact`
The system SHALL render a contact section with a form and contact details.

### `Footer`
The system SHALL render a footer with widget columns, a newsletter form, social links, and a copyright bar.

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
- **Provenance ban.** No file under `apps/compass/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/compass/public/CNAME` = `compass.free.componentdock.com`
  and the package `homepage` = `https://compass.free.componentdock.com`.
