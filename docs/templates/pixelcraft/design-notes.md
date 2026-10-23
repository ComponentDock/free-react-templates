# Pixelcraft — Design Notes

Reference: **Boxus** — `https://colorlib.com/wp/template/boxus/`  
Live preview: `https://preview.colorlib.com/theme/boxus/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/boxus-creative-digital-agency-free-website-template.jpg  
Shipped: https://pixelcraft.free.componentdock.com

A Creative Agency template with hero, services, portfolio, about / crafters, stories and expertise sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;700**, **PT Serif**, **Roboto**

## Design tokens (`apps/pixelcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-navy` | `#221c5a` | navy |
| `--color-navy-body` | `#23214c` | navy body |
| `--color-green-title` | `#32db8a` | green title |
| `--color-green-num` | `#55b286` | green num |
| `--color-pink-brand` | `#e54b76` | pink brand |
| `--color-pink-hover` | `#ee87a4` | pink hover |
| `--color-yellow-timeline` | `#ffba42` | yellow timeline |
| `--color-yellow-progress` | `#ffbb42` | yellow progress |
| `--color-pink-progress` | `#e74c78` | pink progress |
| `--color-blue-progress` | `#4c9ee7` | blue progress |
| `--color-gray-text` | `#727190` | gray text |
| `--font-heading` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-body` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font body |
| `--font-subtitle` | `'PT Serif', Georgia, serif` | font subtitle |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Portfolio` | Portfolio section | see fidelity note below |
| 5 | `About` | About / Crafters section | see fidelity note below |
| 6 | `Stories` | Stories section | see fidelity note below |
| 7 | `Offer` | Offer section | see fidelity note below |
| 8 | `Expertise` | Expertise section | see fidelity note below |
| 9 | `Contact` | Contact section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a dark navy navbar with the site name "Pixelcraft", section links (Home, Services, Portfolio, About, Stories, Contact), and a hamburger toggle that opens a mobile menu on small screens.

### `Hero`
The system SHALL render a dark navy hero with a background image, centered logo, big title and subtitle.

### `Services`
The system SHALL render a services section with a green title block (number 01) on the left and a 2×2 grid of service cards on the right.

### `Portfolio`
The system SHALL render a portfolio section with a green title block (number 02) on the right and a grid of portfolio items with hover overlays.

### `About`
The system SHALL render an about section with a green title block (number 03) on the left, about text, a timeline and team member cards.

### `Stories`
The system SHALL render a stories/news section with a green title block (number 04) on the right and numbered blog posts.

### `Offer`
The system SHALL render an offer/video section with a green title block (number 05) on the left, a video thumbnail and an icon carousel.

### `Expertise`
The system SHALL render a skills/expertise section with a green title block (number 06) on the right and progress bars.

### `Contact`
The system SHALL render a contact section with a green title block (number 07) on the left, descriptive text, a form and an embedded map.

### `Footer`
The system SHALL render a dark navy footer with copyright text, social icons and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/pixelcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pixelcraft/public/CNAME` = `pixelcraft.free.componentdock.com`
  and the package `homepage` = `https://pixelcraft.free.componentdock.com`.
