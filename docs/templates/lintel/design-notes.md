# Lintel — Design Notes

Reference: **Marga** — `https://colorlib.com/wp/template/marga/`  
Live preview: `https://preview.colorlib.com/theme/marga/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/marga-free-template.jpg  
Shipped: https://lintel.free.componentdock.com

Lintel is a single-page architecture/interior-design landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Marga" website template design (see TEMPLATES.md), built under a **different name** with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700**

## Design tokens (`apps/lintel/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#43ab92` | brand |
| `--color-brand-dark` | `#36907b` | brand dark |
| `--color-ink` | `#212529` | Ink — headings (#000 / #212529 from the original). |
| `--color-mist` | `#666666` | Mist — muted body text (#666666 from the original). |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds (#f8f9fa from the original). |
| `--color-coal` | `#c9ccd4` | Coal — footer band (#c9ccd4 from the original). |
| `--color-slate` | `#364d59` | Slate — dark accent (#364d59 from the original). |
| `--color-primary-50` | `#effaf7` | primary 50 |
| `--color-primary-100` | `#d7f2ea` | primary 100 |
| `--color-primary-200` | `#b3e4d6` | primary 200 |
| `--color-primary-300` | `#85d1bd` | primary 300 |
| `--color-primary-400` | `#5cbda5` | primary 400 |
| `--color-primary-500` | `#43ab92` | primary 500 |
| `--color-primary-600` | `#36907b` | primary 600 |
| `--color-primary-700` | `#2d7464` | primary 700 |
| `--color-primary-800` | `#285d52` | primary 800 |
| `--color-primary-900` | `#234d45` | primary 900 |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | Original font: "DM Sans" (Google Fonts, linked in index.html). |
| `--font-display` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero carousel | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Projects` | Projects section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Blog` | Blog section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Lintel", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero carousel with three slides, each with a headline, subtext, and a "Contact Us" button.

### `About`
The system SHALL render an about section with a heading and a blurb.

### `Services`
The system SHALL render a services section with a heading and six service cards.

### `Projects`
The system SHALL render a projects section with a heading and a project gallery.

### `Testimonials`
The system SHALL render a testimonials section with a quote carousel.

### `Blog`
The system SHALL render a blog section with a heading and post cards.

### `Footer`
The system SHALL render a footer with link columns, a newsletter form, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/lintel/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lintel/public/CNAME` = `lintel.free.componentdock.com`
  and the package `homepage` = `https://lintel.free.componentdock.com`.
