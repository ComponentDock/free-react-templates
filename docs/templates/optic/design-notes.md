# Optic — Design Notes

Reference: **Credo** — `https://colorlib.com/wp/template/credo/`  
Live preview: `https://preview.colorlib.com/theme/credo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/credo-free-template.jpg  
Shipped: https://optic.free.componentdock.com

A photographer personal portfolio with warm gold accent, featuring a split navbar, hero section, services grid, about with progress bars. It also includes photo gallery, testimonials carousel, blog cards, contact form, and 4-column footer. Recreation of ColorLib "Credo" (https://colorlib.com/wp/template/credo/).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito**, **Nunito:wght@300;400;700**

## Design tokens (`apps/optic/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-gold-50` | `#fef9ec` | Optic brand palette — warm gold accent from the original design (#fab95b) |
| `--color-gold-100` | `#fdf0c9` | gold 100 |
| `--color-gold-200` | `#fbe08e` | gold 200 |
| `--color-gold-300` | `#f9cf53` | gold 300 |
| `--color-gold-400` | `#fab95b` | gold 400 |
| `--color-gold-500` | `#f5a623` | gold 500 |
| `--color-gold-600` | `#d98b15` | gold 600 |
| `--color-gold-700` | `#b46d13` | gold 700 |
| `--color-gold-800` | `#925617` | gold 800 |
| `--color-gold-900` | `#784717` | gold 900 |
| `--font-sans` | `'Nunito', ui-sans-serif, system-ui, sans-serif` | Nunito — the original template's typeface (Google Fonts via index.html) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with split navigation | see fidelity note below |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Services` | Services section with four service cards | see fidelity note below |
| 4 | `About` | About section with progress bars | see fidelity note below |
| 5 | `Gallery` | Gallery section with photo grid | see fidelity note below |
| 6 | `Testimonials` | Testimonials section with carousel | see fidelity note below |
| 7 | `Blog` | Blog section with post cards | see fidelity note below |
| 8 | `Contact` | Contact section with form | see fidelity note below |
| 9 | `Footer` | Footer with links and copyright | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar SHALL display a centered logo with left and right navigation links.

### `Hero`
*anchors only* — I'm Alex Morgan · Photographer · Speaker · Contact Me

### `Services`
The services section SHALL display four photography services in a grid layout.

### `About`
The about section SHALL display bio text and skill progress bars.

### `Gallery`
The gallery section SHALL display a grid of photography images with hover overlay.

### `Testimonials`
The testimonials section SHALL display a rotating carousel of client quotes.

### `Blog`
The blog section SHALL display three blog post cards with images, titles, dates, and excerpts.

### `Contact`
The contact section SHALL display a contact form with input fields and submit button.

### `Footer`
The footer SHALL display brand info, link columns, social icons, and copyright with Component Dock link.

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
- **Provenance ban.** No file under `apps/optic/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/optic/public/CNAME` = `optic.free.componentdock.com`
  and the package `homepage` = `https://optic.free.componentdock.com`.
