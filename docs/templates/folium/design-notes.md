# Folium — Design Notes

Reference: **Papers** — `https://colorlib.com/wp/template/papers/`  
Live preview: `https://preview.colorlib.com/theme/papers/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/papers-free-template.jpg  
Shipped: https://folium.free.componentdock.com

Folium is a single-page business-website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Papers" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Rubik**, **Rubik:wght@300;400;500;600**

## Design tokens (`apps/folium/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#4ecca3` | primary |
| `--color-mint` | `#9de3cc` | mint |
| `--color-band` | `#fafafa` | band |
| `--color-overlay` | `#22302c` | overlay |
| `--color-primary-50` | `#e9f9f3` | primary 50 |
| `--color-primary-100` | `#d0f2e5` | primary 100 |
| `--color-primary-200` | `#a3e6cc` | primary 200 |
| `--color-primary-300` | `#74d9b3` | primary 300 |
| `--color-primary-400` | `#4ecca3` | primary 400 |
| `--color-primary-500` | `#35b28b` | primary 500 |
| `--color-primary-600` | `#2ea07b` | primary 600 |
| `--color-primary-700` | `#278b6b` | primary 700 |
| `--color-primary-800` | `#1f6f56` | primary 800 |
| `--color-primary-900` | `#175243` | primary 900 |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | Original font: Rubik (Google), weight 300 body, loaded via <link>. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero cover | see fidelity note below |
| 3 | `Intro` | Intro statement | see fidelity note below |
| 4 | `SplitOne` | Split block with play button | see fidelity note below |
| 5 | `SplitTwo` | Quote band split block | see fidelity note below |
| 6 | `Testimonials` | Testimonials flip cards | see fidelity note below |
| 7 | `Services` | What We Do services | see fidelity note below |
| 8 | `BlogSection` | Blog section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a navigation bar that is transparent over the hero and turns into a fixed white bar with a shadow after scrolling, showing the site name "Folium" and section links.

### `Hero`
The system SHALL render a full-viewport-height hero with a background photo and dark overlay, a white headline, a subheading, and an outline call-to-action button.

### `Intro`
The system SHALL render a white intro section with a single thin large headline statement.

### `SplitOne`
The system SHALL render a full-width split section with an image on the left (with a circular play button overlay) and a heading with two paragraphs of text on the right.

### `SplitTwo`
The system SHALL render a second split section on a #fafafa band with two text blocks on the left and an image with a mint quote overlay on the right.

### `Testimonials`
The system SHALL render a testimonials section with a centered heading and three flip cards that reveal a quote when hovered.

### `Services`
The system SHALL render a services section with a centered heading and six icon cards, each with an icon in a mint circle, a title, and a short description.

### `BlogSection`
The system SHALL render a blog section on a light #fafafa background with a centered heading and three image cards, each with a category label, a title, and post meta.

### `Footer`
The system SHALL render a white footer with a top border, three link columns, social icon circles, and a centered copyright line.

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
- **Provenance ban.** No file under `apps/folium/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/folium/public/CNAME` = `folium.free.componentdock.com`
  and the package `homepage` = `https://folium.free.componentdock.com`.
