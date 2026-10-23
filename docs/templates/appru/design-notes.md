# Appru — Design Notes

Reference: **Appru** — `https://colorlib.com/wp/template/appru/`  
Live preview: `https://preview.colorlib.com/theme/appru/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/appru-free-template.jpg  
Shipped: https://appru.free.componentdock.com

Appru is a single-page app landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Appru" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**, **Roboto**

## Design tokens (`apps/appru/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef4fd` | primary 50 |
| `--color-primary-100` | `#dce9fb` | primary 100 |
| `--color-primary-200` | `#b9d2f7` | primary 200 |
| `--color-primary-300` | `#8ab4f1` | primary 300 |
| `--color-primary-400` | `#5a8fea` | primary 400 |
| `--color-primary-500` | `#3a6ee6` | primary 500 |
| `--color-primary-600` | `#204be3` | primary 600 |
| `--color-primary-700` | `#1a3cb8` | primary 700 |
| `--color-primary-800` | `#163091` | primary 800 |
| `--color-primary-900` | `#122a78` | primary 900 |
| `--color-azure` | `#46dbf9` | Cyan brand accent #46dbf9 (gradient start, hover accents). |
| `--color-night` | `#04091e` | Dark footer #04091e, near-black #222222. |
| `--color-ink` | `#222222` | ink |
| `--color-paper` | `#f9f9ff` | paper |
| `--color-mist` | `#f8fcff` | mist |
| `--color-muted` | `#777777` | muted |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Stats` | Stats band | see fidelity note below |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `AboutOne` | About sections | see fidelity note below |
| 6 | `AboutTwo` | — | no dedicated spec block |
| 7 | `Video` | — | no dedicated spec block |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Screenshots` | Screenshots section | see fidelity note below |
| 10 | `Pricing` | Pricing section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Appru", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, a phone mockup illustration, and two store buttons.

### `Stats`
The system SHALL render a stats band with five key figures.

### `Features`
The system SHALL render a features section with a heading and three feature tiles, each with an icon, a title, and a blurb.

### `AboutOne`
The system SHALL render two about sections (text/image and image/text) sharing the heading "We Believe that Interior beautifies the Total Architecture", each with a blurb and a call to action.

### `AboutTwo`
*anchors only* — We Believe that Interior beautifies the Total Architecture

### `Video`
*anchors only* — Play video

### `Testimonials`
The system SHALL render a testimonials section with a customer quote.

### `Screenshots`
The system SHALL render a screenshots section with a heading and a row of screenshot placeholder images.

### `Pricing`
The system SHALL render a pricing section with three plans, each with a name, an audience line, a price, a feature list, and a purchase button.

### `Footer`
The system SHALL render a footer with link columns, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/appru/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/appru/public/CNAME` = `appru.free.componentdock.com`
  and the package `homepage` = `https://appru.free.componentdock.com`.
