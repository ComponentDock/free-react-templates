# Equity — Design Notes

Reference: **Inves** — `https://colorlib.com/wp/template/inves/`  
Live preview: `https://preview.colorlib.com/theme/inves/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/inves-free-template.jpg  
Shipped: https://equity.free.componentdock.com

Equity is a single-page investment-consulting website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Inves" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Georgia**, **Nunito**, **Nunito:wght@300;400;600;700;800**

## Design tokens (`apps/equity/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-100` | `#f3eaf4` | primary 100 |
| `--color-primary-200` | `#e0c9e2` | primary 200 |
| `--color-primary-300` | `#c8a3cc` | primary 300 |
| `--color-primary-400` | `#a97eae` | primary 400 |
| `--color-primary-500` | `#93628f` | primary 500 |
| `--color-primary-600` | `#7f4782` | primary 600 |
| `--color-primary-700` | `#6b3c6e` | primary 700 |
| `--color-primary-800` | `#57305a` | primary 800 |
| `--color-primary-900` | `#442546` | primary 900 |
| `--color-ink` | `#25262a` | Ink (body text/headings) and light section surface from the reference. |
| `--color-muted` | `#939393` | muted |
| `--color-surface` | `#f4f5f9` | surface |
| `--color-footer` | `#333333` | footer |
| `--font-sans` | `'Nunito', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Nunito', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-serif` | `Georgia, 'Times New Roman', serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero carousel | see fidelity note below |
| 3 | `FeaturedStrip` | Featured services strip | see fidelity note below |
| 4 | `Investors` | Investors section | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Services` | Featured services strip | see fidelity note below |
| 7 | `Leadership` | Leadership section | see fidelity note below |
| 8 | `Press` | Press section | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Contact` | Contact section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky top navigation bar with the site name "Equity" (purple), anchor links to all sections, and a mobile toggle.

### `Hero`
The system SHALL render a full-viewport hero carousel with at least two slides, each with a headline, subtext, and a white-outline CTA.

### `FeaturedStrip`
The system SHALL render a 3-column row of image cards that overlaps the hero's bottom edge.

### `Investors`
The system SHALL render an "Our Investors" heading followed by a row of four client logos.

### `About`
The system SHALL render an about block with a playable video figure, welcome copy, and four stat counters.

### `Services`
The system SHALL render a 3-column row of image cards that overlaps the hero's bottom edge.

### `Leadership`
The system SHALL render three centered team cards with photo, name, role, bio, and social buttons.

### `Press`
The system SHALL render a "Press Releases" list with three news items, each with a thumbnail, title, date, and excerpt.

### `Testimonials`
The system SHALL render a dark photo-background testimonial carousel with white quote cards and author names.

### `Blog`
The system SHALL render a "Our Blog" heading with two post cards.

### `Contact`
The system SHALL render a light-background contact section with a form and a "Call Us" info block.

### `Footer`
The system SHALL render a dark footer with About Us, Features links, a paragraph column, a newsletter form, social icons, and a copyright line.

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
- **Provenance ban.** No file under `apps/equity/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/equity/public/CNAME` = `equity.free.componentdock.com`
  and the package `homepage` = `https://equity.free.componentdock.com`.
