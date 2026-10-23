# Gilded — Design Notes

Reference: **Akame** — `https://colorlib.com/wp/template/akame/`  
Live preview: `https://preview.colorlib.com/theme/akame/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/akame-free-template.jpg  
Shipped: https://gilded.free.componentdock.com

Gilded is a single-page hair-salon landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Akame" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Playfair Display**, **Playfair Display:wght@400;500;600;700**

## Design tokens (`apps/gilded/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#bca858` | brand |
| `--color-brand-dark` | `#a08f3d` | brand dark |
| `--color-brown` | `#785028` | brown |
| `--color-ink` | `#252525` | Ink — dark bands and footer (#252525 from the original). |
| `--color-ink-dark` | `#000000` | ink dark |
| `--color-paper` | `#f6f9f9` | Paper — light section backgrounds (default white, alt #f6f9f9). |
| `--color-mist` | `#6e6e6e` | Mist — muted body text (#6e6e6e from the original). |
| `--color-primary-50` | `#fbf8ef` | primary 50 |
| `--color-primary-100` | `#f5eed6` | primary 100 |
| `--color-primary-200` | `#eadcac` | primary 200 |
| `--color-primary-300` | `#ddc77d` | primary 300 |
| `--color-primary-400` | `#d0b55c` | primary 400 |
| `--color-primary-500` | `#bca858` | primary 500 |
| `--color-primary-600` | `#a08f3d` | primary 600 |
| `--color-primary-700` | `#7e7032` | primary 700 |
| `--color-primary-800` | `#665b2c` | primary 800 |
| `--color-primary-900` | `#564d27` | primary 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Welcome hero | see fidelity note below |
| 3 | `About` | About | see fidelity note below |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `WhyChooseUs` | Why Choose Us | see fidelity note below |
| 6 | `Work` | Our Work portfolio | see fidelity note below |
| 7 | `Experts` | Experts team | see fidelity note below |
| 8 | `Blog` | Blog | see fidelity note below |
| 9 | `CtaBand` | CTA band | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Gilded", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width welcome section with a background image, a level-1 headline, and a call-to-action button.

### `About`
The system SHALL render an about split section with a heading and introductory copy.

### `Services`
The system SHALL render an "Our Services" section with at least three service cards.

### `WhyChooseUs`
The system SHALL render a "Why Choose Us" band with at least four feature items.

### `Work`
The system SHALL render an "Our Work" section with at least four portfolio tiles.

### `Experts`
The system SHALL render an "Our Experts" section with at least four member cards.

### `Blog`
The system SHALL render a "Latest News" section with at least three post cards.

### `CtaBand`
The system SHALL render a call-to-action band with a headline and a button.

### `Footer`
The system SHALL render a footer with the site name, opening times, and social links.

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
- **Provenance ban.** No file under `apps/gilded/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gilded/public/CNAME` = `gilded.free.componentdock.com`
  and the package `homepage` = `https://gilded.free.componentdock.com`.
