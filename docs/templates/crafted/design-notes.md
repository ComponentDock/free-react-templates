# Crafted — Design Notes

Reference: **Crafted** — `https://colorlib.com/wp/template/crafted/`  
Live preview: `https://preview.colorlib.com/theme/crafted/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/crafted-free-template.jpg  
Shipped: https://crafted.free.componentdock.com

Crafted is a single-page creative-agency landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Crafted" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@500;600;700**, **Roboto**

## Design tokens (`apps/crafted/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eff8ff` | primary 50 |
| `--color-primary-100` | `#dbeeff` | primary 100 |
| `--color-primary-200` | `#b6dcff` | primary 200 |
| `--color-primary-300` | `#85c6ff` | primary 300 |
| `--color-primary-400` | `#4ba0f9` | primary 400 |
| `--color-primary-500` | `#4ba0f9` | primary 500 |
| `--color-primary-600` | `#2b7fd9` | primary 600 |
| `--color-primary-700` | `#1f63ab` | primary 700 |
| `--color-primary-800` | `#1a4d84` | primary 800 |
| `--color-primary-900` | `#163a63` | primary 900 |
| `--color-sun` | `#f8b600` | sun |
| `--color-aqua` | `#4cd3e3` | aqua |
| `--color-ink` | `#222222` | ink |
| `--color-paper` | `#f9f9ff` | paper |
| `--color-counter` | `#f4f8ff` | counter |
| `--color-body` | `#777777` | body |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Brands` | Brand strip | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `About` | About section with stats | see fidelity note below |
| 6 | `Portfolio` | Portfolio section | see fidelity note below |
| 7 | `Team` | Team section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `CtaBand` | CTA band | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Crafted", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, and two call-to-action buttons.

### `Brands`
The system SHALL render a strip of client brand tiles between the hero and the services section.

### `Services`
The system SHALL render a services section with a heading and three service tiles, each with an icon, title, and blurb.

### `About`
The system SHALL render an about section with a heading, a blurb, and four stat counters.

### `Portfolio`
The system SHALL render a portfolio section with a heading, three project cards, and a "View all Works" button.

### `Team`
The system SHALL render a team section with a heading and member cards.

### `Testimonials`
The system SHALL render a testimonials carousel with quotes and controls.

### `CtaBand`
The system SHALL render a call-to-action band with a heading and a button.

### `Blog`
The system SHALL render a blog section with a heading and three article cards.

### `Footer`
The system SHALL render a footer with an about blurb, navigation links, a newsletter signup, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/crafted/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/crafted/public/CNAME` = `crafted.free.componentdock.com`
  and the package `homepage` = `https://crafted.free.componentdock.com`.
