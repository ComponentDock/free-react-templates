# Maison — Design Notes

Reference: **Loaft** — `https://colorlib.com/wp/template/loaft/`  
Live preview: `https://preview.colorlib.com/theme/loaft/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/loaft-free-template.jpg  
Shipped: https://maison.free.componentdock.com

Maison is a single-page architecture/interior landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Rajdhani**, **Rajdhani:wght@500;600;700**, **Roboto**

## Design tokens (`apps/maison/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f5ca56` | brand |
| `--color-brand-dark` | `#f8b600` | brand dark |
| `--color-ink` | `#222222` | Ink — headings (#222222 from the original). |
| `--color-mist` | `#777777` | Mist — muted body text (#777777 from the original). |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds (#f9f9ff from the original). |
| `--color-coal` | `#000410` | Coal — dark footer band (#000410 from the original). |
| `--color-primary-50` | `#fdf8e8` | primary 50 |
| `--color-primary-100` | `#fbf0c9` | primary 100 |
| `--color-primary-200` | `#f8e19a` | primary 200 |
| `--color-primary-300` | `#f5ca56` | primary 300 |
| `--color-primary-400` | `#f0b22b` | primary 400 |
| `--color-primary-500` | `#d99a17` | primary 500 |
| `--color-primary-600` | `#b87d12` | primary 600 |
| `--color-primary-700` | `#946113` | primary 700 |
| `--color-primary-800` | `#7a4e16` | primary 800 |
| `--color-primary-900` | `#684118` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Rajdhani', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Divider` | — | no dedicated spec block |
| 4 | `Projects` | Projects section | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Counters` | Counters band | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Cta` | — | no dedicated spec block |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Maison", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width split hero with a photo, a headline, and a call-to-action button.

### `Divider`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Projects`
The system SHALL render a projects section with a heading and at least three project cards.

### `Services`
The system SHALL render a services section with a heading and at least three service cards.

### `Testimonials`
The system SHALL render a testimonials section with a heading and a testimonial card.

### `Counters`
The system SHALL render a stats band with at least three counters.

### `Blog`
The system SHALL render a blog section with a heading and at least three blog post cards.

### `Cta`
*anchors only* — Join us today without any hesitation · Learn More

### `Footer`
The system SHALL render a footer with an about column, a newsletter form, a social column, and a copyright line.

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
- **Provenance ban.** No file under `apps/maison/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/maison/public/CNAME` = `maison.free.componentdock.com`
  and the package `homepage` = `https://maison.free.componentdock.com`.
