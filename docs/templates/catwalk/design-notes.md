# Catwalk — Design Notes

Reference: **Topmodel** — `https://colorlib.com/wp/template/topmodel/`  
Live preview: `https://preview.colorlib.com/theme/topmodel/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/topmodel-free-template.jpg  
Shipped: https://catwalk.free.componentdock.com

Catwalk is a single-page model agency landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Topmodel" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/catwalk/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#daa592` | brand |
| `--color-peach` | `#cd866c` | peach |
| `--color-peach-deep` | `#d59883` | peach deep |
| `--color-peach-light` | `#dfb2a1` | peach light |
| `--color-mist` | `#6c757d` | Body text (#6c757d). |
| `--color-ink` | `#212529` | Near-black headings/text (#212529). |
| `--color-paper` | `#f8f9fa` | Light section background (bg-light #f8f9fa). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `SearchBar` | Model search bar | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Stats` | Stats strip | see fidelity note below |
| 6 | `About` | About section | see fidelity note below |
| 7 | `Models` | Model cards | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Events` | Events section | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Catwalk", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width photo hero with an eyebrow label, a headline, a subheadline, and a call-to-action button.

### `SearchBar`
The system SHALL render a search bar with five attribute selects and a search button.

### `Services`
The system SHALL render a services section with four icon cards.

### `Stats`
The system SHALL render a stats strip with four counters.

### `About`
The system SHALL render an about section with an eyebrow, a heading, and three feature items.

### `Models`
The system SHALL render a popular models section with at least six model cards, each with stats.

### `Testimonials`
The system SHALL render a testimonials section with at least one quote and navigation controls.

### `Events`
The system SHALL render an events section with an image, an eyebrow, a heading, and descriptive paragraphs.

### `Blog`
The system SHALL render a blog section with at least three post cards.

### `Footer`
The system SHALL render a footer with link columns, contact details, and a copyright line.

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
- **Provenance ban.** No file under `apps/catwalk/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/catwalk/public/CNAME` = `catwalk.free.componentdock.com`
  and the package `homepage` = `https://catwalk.free.componentdock.com`.
