# Scholara — Design Notes

Reference: **Universityedu** — `https://colorlib.com/wp/template/universityedu/`  
Live preview: `https://preview.colorlib.com/theme/universityedu/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/universityedu-colorlib-template.jpg  
Shipped: https://scholara.free.componentdock.com

Scholara is a single-page education/university landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Universityedu" website template design, built under a DIFFERENT name (**Scholara**) with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Chivo**, **Chivo:wght@300;400;700;900**

## Design tokens (`apps/scholara/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007a5c` | brand |
| `--color-brand-dark` | `#005e45` | brand dark |
| `--color-ink` | `#32404d` | Ink — dark slate headings (#32404D from the original). |
| `--color-ink-dark` | `#1f2a33` | ink dark |
| `--color-cream` | `#fcf2eb` | Cream — warm section background (#FCF2EB from the original). |
| `--color-mist` | `#5d646a` | Mist — muted body text (#5D646A from the original). |
| `--color-ash` | `#777777` | Light gray — secondary text (#777777 from the original). |
| `--color-cloud` | `#f1fbff` | Light blue-gray — footer/wrapper background (#F1FBFF). |
| `--color-forest` | `#305534` | Dark green — trusted section background (#305534). |
| `--color-tint` | `#eff6f0` | Brand bg — light brand tint (#EFF6F0). |
| `--color-primary-50` | `#e6f5ef` | primary 50 |
| `--color-primary-100` | `#b3e0cc` | primary 100 |
| `--color-primary-200` | `#80cca9` | primary 200 |
| `--color-primary-300` | `#4db786` | primary 300 |
| `--color-primary-400` | `#26a86e` | primary 400 |
| `--color-primary-500` | `#007a5c` | primary 500 |
| `--color-primary-600` | `#005e45` | primary 600 |
| `--color-primary-700` | `#004734` | primary 700 |
| `--color-primary-800` | `#003023` | primary 800 |
| `--color-primary-900` | `#001a12` | primary 900 |
| `--font-sans` | `'Chivo', ui-sans-serif, system-ui, sans-serif` | Original font: Chivo (Google Fonts, weights 300–900). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Hero section renders correctly | see fidelity note below |
| 2 | `Hero` | Hero section renders correctly | see fidelity note below |
| 3 | `About` | About section displays | see fidelity note below |
| 4 | `Programs` | Programs section shows two cards | see fidelity note below |
| 5 | `Resources` | Essential Resources section displays | see fidelity note below |
| 6 | `TopStories` | Top Stories section shows three cards | see fidelity note below |
| 7 | `Partners` | Partners section displays logos | see fidelity note below |
| 8 | `Trusted` | Trusted section renders split layout | see fidelity note below |
| 9 | `Footer` | Footer contains all elements | see fidelity note below |
| 10 | `ScrollToTop` | Scroll-to-top button | see fidelity note below |

## Section-by-section fidelity

### `Header`
The hero SHALL display a background image with dark overlay, the headline, the label, and a green CTA button.

### `Hero`
The hero SHALL display a background image with dark overlay, the headline, the label, and a green CTA button.

### `About`
The about section SHALL have a cream background with image, heading, and browse link.

### `Programs`
The programs section SHALL display 2 program cards in a grid.

### `Resources`
The resources section SHALL show 3 resource items with descriptions.

### `TopStories`
The top stories section SHALL display 3 story cards.

### `Partners`
The partners section SHALL display partner logos.

### `Trusted`
The trusted section SHALL display a heading with dark green background and join button.

### `Footer`
The footer SHALL show columns, newsletter form, social links, and Component Dock copyright.

### `ScrollToTop`
A scroll-to-top button SHALL appear when scrolling down.

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
- **Provenance ban.** No file under `apps/scholara/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/scholara/public/CNAME` = `scholara.free.componentdock.com`
  and the package `homepage` = `https://scholara.free.componentdock.com`.
