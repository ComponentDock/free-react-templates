# Wander — Design Notes

Reference: **Hepta** — `https://colorlib.com/wp/template/hepta/`  
Live preview: `https://preview.colorlib.com/theme/hepta/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hepta-free-template.jpg  
Shipped: https://wander.free.componentdock.com

Wander is a single-page travel & tours website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Abril Fatface**, **Mukta Mahee**

## Design tokens (`apps/wander/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#65c0ba` | brand |
| `--color-brand-dark` | `#4fa59f` | brand dark |
| `--color-light-bg` | `#fafafa` | light bg |
| `--color-border-soft` | `#e0e0e0` | border soft |
| `--color-ink` | `#000000` | ink |
| `--color-body` | `#6c757d` | body |
| `--color-meta` | `#ced4da` | meta |
| `--color-footer` | `#1a1a1a` | footer |
| `--font-display` | `'Abril Fatface', 'Times New Roman', serif` | font display |
| `--font-sans` | `'Mukta Mahee', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Welcome` | Welcome section | see fidelity note below |
| 4 | `Experience` | Experience features | see fidelity note below |
| 5 | `Slider` | Slider | see fidelity note below |
| 6 | `Blog` | Recent blog posts | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Destinations` | Top destinations | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main

### `Hero`
The system SHALL render a full-viewport hero with a background photo, a subtle dark overlay, centered headline, subheading, CTA button, and a scroll-down link.

### `Welcome`
The system SHALL render a two-column split section with an image on the left and text with a video-play link on the right.

### `Experience`
The system SHALL render a pale-background section with a centered heading and a grid of six feature cards.

### `Slider`
The system SHALL render a centered heading followed by a full-height image carousel with six slides.

### `Blog`
The system SHALL render a teal band with a white diagonal slant at its top, a centered heading, and three white blog cards.

### `Testimonials`
The system SHALL render a pale-background section with a centered heading and three testimonial cards.

### `Destinations`
The system SHALL render a section with a centered heading and a grid of four destination cards with star ratings.

### `Footer`
The system SHALL render a near-black footer with four widget columns, a newsletter form, a copyright bar, and social links.

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
- **Provenance ban.** No file under `apps/wander/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wander/public/CNAME` = `wander.free.componentdock.com`
  and the package `homepage` = `https://wander.free.componentdock.com`.
