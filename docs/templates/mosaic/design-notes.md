# Mosaic — Design Notes

Reference: **Snipp** — `https://colorlib.com/wp/template/snipp/`  
Live preview: `https://preview.colorlib.com/theme/snipp/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/snipp-free-template.jpg  
Shipped: https://mosaic.free.componentdock.com

Mosaic is a single-page digital agency / creative studio landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:ital,wght@0,100..900;1,100..900**

## Design tokens (`apps/mosaic/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ee76ad` | brand |
| `--color-peach` | `#efac78` | peach |
| `--color-sky` | `#78d5ef` | sky |
| `--color-azure` | `#29bae4` | azure |
| `--color-ink` | `#404044` | ink |
| `--color-muted` | `#6c757d` | muted |
| `--color-paper` | `#f8faff` | paper |
| `--color-cocoa` | `#3c312e` | cocoa |
| `--color-green` | `#79efb4` | green |
| `--color-blush` | `#fce7f1` | Tinted service-icon chip backgrounds. |
| `--color-cream` | `#fdf2ea` | cream |
| `--color-frost` | `#def4fb` | frost |
| `--color-mint` | `#ebfdf4` | mint |
| `--color-primary-50` | `#f5fbfe` | primary 50 |
| `--color-primary-100` | `#e9f7fc` | primary 100 |
| `--color-primary-200` | `#d3eef9` | primary 200 |
| `--color-primary-300` | `#a9e1f4` | primary 300 |
| `--color-primary-400` | `#8ad7f0` | primary 400 |
| `--color-primary-500` | `#78d5ef` | primary 500 |
| `--color-primary-600` | `#5fb8d8` | primary 600 |
| `--color-primary-700` | `#4a9cbd` | primary 700 |
| `--color-primary-800` | `#3d80a0` | primary 800 |
| `--color-primary-900` | `#326983` | primary 900 |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | Original typeface: Work Sans (light weights for large headings). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `FeaturedWorks` | Featured works and About split | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Newsletter` | Newsletter parallax band | see fidelity note below |
| 6 | `Works` | Featured works and About split | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `CounterBand` | Counter band | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky dark navbar with the brand "Mosaic.", the section links Home, About, Services, Portfolio, Case Studies, Contact, and a white filled pill CTA "Get in touch".

### `Hero`
The system SHALL render a full-viewport hero on the brand gradient with a subtle dot-network pattern overlay, a centered headline with an emphasized word, and a ghost CTA.

### `FeaturedWorks`
The system SHALL render an asymmetric masonry grid of 6 portfolio tiles, each with an image, a category tag, and a designer credit, followed by an About heading with a CTA.

### `Services`
The system SHALL render a centered heading "Our Services" with a blurb and exactly 4 service cards, each with a hexagon icon chip, a title, and a blurb.

### `Newsletter`
The system SHALL render a parallax band on the brand gradient with a centered "Subscribe to our Newsletter" heading, a blurb, and an email input with a paper-plane icon button.

### `Works`
The system SHALL render an asymmetric masonry grid of 6 portfolio tiles, each with an image, a category tag, and a designer credit, followed by an About heading with a CTA.

### `Testimonials`
The system SHALL render a light-background section with a centered heading "Customer Says", the subtitle "Our satisfied customer says", and 5 testimonial cards with avatar, quote, and name/role.

### `CounterBand`
The system SHALL render a blue band (#29bae4) with the heading "Our achievements" and 3 counters (400, 1000, 8000) that animate from 0 to their target when scrolled into view.

### `Blog`
The system SHALL render a light-background section with a centered heading "Blog", the subtitle "Recent Blog", and 3 blog entries with date, author, comment count, title, and excerpt.

### `Footer`
The system SHALL render a dark footer (#3c312e) with 3 widget columns (About, Quick Links, Contact Information), social icon circles, a copyright line, and a "Component Dock" link.

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
- **Provenance ban.** No file under `apps/mosaic/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/mosaic/public/CNAME` = `mosaic.free.componentdock.com`
  and the package `homepage` = `https://mosaic.free.componentdock.com`.
