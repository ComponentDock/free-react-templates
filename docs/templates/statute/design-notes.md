# Statute — Design Notes

Reference: **Primelaw** — `https://colorlib.com/wp/template/primelaw/`  
Live preview: `https://preview.colorlib.com/theme/primelaw/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/primelaw-free-template.jpg  
Shipped: https://statute.free.componentdock.com

Statute is a law-firm landing-page template in the free-react-templates monorepo. It is a React recreation of the ColorLib "PrimeLaw" free template (source: https://colorlib.com/wp/template/primelaw/, preview: https://preview.colorlib.com/theme/primelaw/), built under a DIFFERENT name (**Statute**), with the monorepo stack: Vite + React 1…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:wght@300;400;500;600;700**

## Design tokens (`apps/statute/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#b99566` | Statute brand palette — golden/amber theme for law firm. |
| `--color-brand-dark` | `#a27c4a` | brand dark |
| `--color-brand-light` | `#f1eae0` | brand light |
| `--color-dark-bg` | `#16181b` | Dark section backgrounds. |
| `--color-darker-bg` | `#1a1a1a` | darker bg |
| `--color-light-bg` | `#f7f7f7` | Light section background. |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | Fonts: Work Sans. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services & Quote section | see fidelity note below |
| 4 | `About` | About section (image left, text right) | see fidelity note below |
| 5 | `Counter` | Counter stats | see fidelity note below |
| 6 | `About2` | About section 2 (text left, image right) | see fidelity note below |
| 7 | `Testimonials` | Testimonial section | see fidelity note below |
| 8 | `Steps` | Steps/CTA section | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |
| 11 | `FooterBottom` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a responsive dark navbar with logo text and navigation links.

### `Hero`
The system SHALL render a hero section with a background image, dark overlay, centered headline, subtext, and a CTA button.

### `Services`
The system SHALL render a 2-column section with a "Request A Quote" form on the left and 4 service cards on the right.

### `About`
The system SHALL render a 2-column about section with an image on the left and text content on the right.

### `Counter`
The system SHALL render a 4-column stats row with parallax background and animated counters.

### `About2`
The system SHALL render a second about section with text on the left and an image on the right (reversed layout).

### `Testimonials`
The system SHALL render a testimonial section with a centered heading and testimonial cards.

### `Steps`
The system SHALL render a golden/amber CTA section with 3 numbered steps.

### `Blog`
The system SHALL render a blog section with a centered heading and 3 blog post cards.

### `Footer`
The system SHALL render a dark footer with 4 columns: Brand info, Useful Links, Quick Links, and Contact info, followed by a copyright bar.

### `FooterBottom`
*anchors only* — love · Component Dock

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
- **Provenance ban.** No file under `apps/statute/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/statute/public/CNAME` = `statute.free.componentdock.com`
  and the package `homepage` = `https://statute.free.componentdock.com`.
