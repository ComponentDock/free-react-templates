# Facade — Design Notes

Reference: **Arclabs** — `https://colorlib.com/wp/template/arclabs/`  
Live preview: `https://preview.colorlib.com/theme/arclabs/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/arclabs-free-template.jpg  
Shipped: https://facade.free.componentdock.com

Facade is a single-page architecture landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Arclabs" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto Condensed**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/facade/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#cea06c` | brand |
| `--color-brand-dark` | `#b98a55` | Deeper tan for hover states. |
| `--color-ink` | `#263a4e` | Ink — headings and dark text (navy #263a4e from the original). |
| `--color-mist` | `#87898f` | Mist — muted body text (#87898f from the original). |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds (#f9f9ff / #f7f7f7). |
| `--color-coal` | `#0e1424` | Coal — footer background (#0e1424 from the original stylesheet). |
| `--color-primary-50` | `#faf3ea` | primary 50 |
| `--color-primary-100` | `#f3e3d0` | primary 100 |
| `--color-primary-200` | `#e8cba4` | primary 200 |
| `--color-primary-300` | `#dcb17a` | primary 300 |
| `--color-primary-400` | `#cea06c` | primary 400 |
| `--color-primary-500` | `#b98a55` | primary 500 |
| `--color-primary-600` | `#a07346` | primary 600 |
| `--color-primary-700` | `#7f5a38` | primary 700 |
| `--color-primary-800` | `#61452c` | primary 800 |
| `--color-primary-900` | `#46311f` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Roboto Condensed" (headings) + "Roboto" (body). |
| `--font-display` | `'Roboto Condensed', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Feature tiles | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Projects` | — | no dedicated spec block |
| 6 | `CallToAction` | Call-to-action section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Brands` | Brand logos section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Facade", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a tagline, a headline, a "View project" button, and social links.

### `Features`
The system SHALL render four feature tiles: "Creative Design", "Experienced Style", "Product Research", and "Affordable Price".

### `About`
The system SHALL render an about section with a heading "We are world number one Company" and a "Read More" link.

### `Projects`
*anchors only* — Recent Work · View Our Project · Architecture, Modern Design

### `CallToAction`
The system SHALL render a call-to-action section with a heading, a video play button, and a duration label.

### `Testimonials`
The system SHALL render a testimonials section with a heading and at least three client quotes.

### `Brands`
The system SHALL render a brand logos strip.

### `Footer`
The system SHALL render a footer with link columns, a newsletter signup, a social links row, and a copyright line.

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
- **Provenance ban.** No file under `apps/facade/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/facade/public/CNAME` = `facade.free.componentdock.com`
  and the package `homepage` = `https://facade.free.componentdock.com`.
