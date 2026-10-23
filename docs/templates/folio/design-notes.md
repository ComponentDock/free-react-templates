# Folio — Design Notes

Reference: **Mellisa** — `https://colorlib.com/wp/template/mellisa/`  
Live preview: `https://preview.colorlib.com/theme/mellisa/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/mellisa-colorlib-template.jpg  
Shipped: https://folio.free.componentdock.com

Folio is a single-page author/writer portfolio template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Mellisa" personal author template, built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **EB Garamond**, **Playfair Display**, **Playfair Display:wght@400;500;600;700;800;900**, **Poppins**

## Design tokens (`apps/folio/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffa62b` | brand |
| `--color-brand-dark` | `#e89520` | brand dark |
| `--color-surface` | `#161616` | Dark surface for footer (#161616). |
| `--font-heading` | `'Playfair Display', Georgia, serif` | font heading |
| `--font-serif` | `'EB Garamond', Georgia, serif` | font serif |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `IntroQuote` | Intro quote section | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `BooksGallery` | Books gallery | see fidelity note below |
| 6 | `StatsCounter` | Statistics counter | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed-top navigation bar with the site name "Folio", navigation links (Home, About, Books, News, Contact), and a dark-mode toggle.

### `Hero`
The system SHALL render a full-viewport hero section with a dark overlay on a background image, a subtitle, and a large author name heading.

### `IntroQuote`
The system SHALL render a centered intro section with a play icon and a quote.

### `About`
The system SHALL render a 2-column about section with an image and bio text.

### `BooksGallery`
The system SHALL render a books/projects section with a heading and a grid of book cards.

### `StatsCounter`
The system SHALL render a statistics section with numbered counters.

### `Footer`
The system SHALL render a dark footer with site name, widgets, and a Component Dock link.

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
- **Provenance ban.** No file under `apps/folio/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/folio/public/CNAME` = `folio.free.componentdock.com`
  and the package `homepage` = `https://folio.free.componentdock.com`.
