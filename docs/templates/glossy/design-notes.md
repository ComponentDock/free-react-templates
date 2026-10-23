# Glossy — Design Notes

Reference: **Eden** — `https://colorlib.com/wp/template/eden/`  
Live preview: `https://preview.colorlib.com/theme/eden/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/eden-free-template.jpg  
Shipped: https://glossy.free.componentdock.com

Glossy is a single-page magazine/blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Eden" website template (see TEMPLATES.md, Megazine), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@400;600;700**, **Open Sans**

## Design tokens (`apps/glossy/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff7a7f` | brand |
| `--color-heading` | `#33353b` | heading |
| `--color-body` | `#797979` | body |
| `--color-blush` | `#fbf1f2` | blush |
| `--color-borderline` | `#e8edf1` | borderline |
| `--color-inputborder` | `#f0e9ff` | inputborder |
| `--color-metagray` | `#999999` | metagray |
| `--font-display` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `HeaderTop` | Header top bar | see fidelity note below |
| 2 | `Navbar` | Navigation bar | see fidelity note below |
| 3 | `FeaturedGrid` | Featured grid (fullwidth block) | see fidelity note below |
| 4 | `EditorPicks` | Editor Picks section | see fidelity note below |
| 5 | `TravelNews` | Travel News video section | see fidelity note below |
| 6 | `FashionNews` | Fashion News blocks | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `HeaderTop`
The system SHALL render a header-top bar with social icons on the left, the site logo centered, and a search icon + About/Subscribe links on the right.

### `Navbar`
The system SHALL render a navigation bar below the header-top bar with links to Home, Categories, Archive, Blog (with dropdown), Latest news, and Contact us, and a dark-mode toggle.

### `FeaturedGrid`
The system SHALL render an asymmetric featured grid: one large post card (image, category, title, date/author), one centered post card, and two stacked smaller post cards.

### `EditorPicks`
The system SHALL render an "Editor Picks" section with a centered heading and subtitle, a large featured card, two horizontal image-left/text-right cards, and a full-width ad banner at the bottom.

### `TravelNews`
The system SHALL render a "Travel News" section on a light-pink background with a video post (thumbnail, circular play button, category/date, heading, comment/like/view counts) and additional post cards.

### `FashionNews`
The system SHALL render two "Fashion News" blocks: a three-column card grid and a two-column latest-news grid, each with a centered heading and subtitle.

### `Footer`
The system SHALL render a footer with four widget columns (About Us, Contact Info, Important Link, Newsletter), a copyright bar, and social links.

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
- **Provenance ban.** No file under `apps/glossy/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/glossy/public/CNAME` = `glossy.free.componentdock.com`
  and the package `homepage` = `https://glossy.free.componentdock.com`.
