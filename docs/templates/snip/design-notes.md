# Snip — Design Notes

Reference: **Hairsalone** — `https://colorlib.com/wp/template/hairsalone/`  
Live preview: `https://preview.colorlib.com/theme/hairsalone/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hairsalone-free-template.jpg  
Shipped: https://snip.free.componentdock.com

Snip is a single-page barber-shop landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Hairsalone" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Karla**, **Rufina**, **Rufina:wght@400;700**

## Design tokens (`apps/snip/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff4495` | brand |
| `--color-brand-dark` | `#d92d7d` | brand dark |
| `--color-brand-light` | `#ff7cb3` | brand light |
| `--color-navy` | `#140c40` | Navy — headings + dark footer (#00044A / #140C40 from the original). |
| `--color-navy-dark` | `#0a0630` | navy dark |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds (#f9f9ff from the original). |
| `--color-lavender` | `#f0e9ff` | Lavender — alternating light section background (#f0e9ff original). |
| `--color-mist` | `#999999` | Mist — muted body text (#999999 from the original). |
| `--color-primary-50` | `#fff0f7` | primary 50 |
| `--color-primary-100` | `#ffdceb` | primary 100 |
| `--color-primary-200` | `#ffb8d6` | primary 200 |
| `--color-primary-300` | `#ff8fbe` | primary 300 |
| `--color-primary-400` | `#ff66a5` | primary 400 |
| `--color-primary-500` | `#ff4495` | primary 500 |
| `--color-primary-600` | `#d92d7d` | primary 600 |
| `--color-primary-700` | `#b02064` | primary 700 |
| `--color-primary-800` | `#871a4d` | primary 800 |
| `--color-primary-900` | `#5e1336` | primary 900 |
| `--font-sans` | `'Karla', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Rufina" (serif headings) + "Karla" (sans body). |
| `--font-display` | `'Rufina', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `Pricing` | Pricing | see fidelity note below |
| 6 | `Team` | Expert team | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Snip", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero slider with background images, a level-1 headline per slide, and call-to-action buttons.

### `About`
The system SHALL render an about section with a heading and supporting copy.

### `Services`
The system SHALL render a services section with at least three icon cards.

### `Pricing`
The system SHALL render a pricing list with at least three priced rows.

### `Team`
The system SHALL render an expert team section with member cards.

### `Footer`
The system SHALL render a footer with the site name, useful links, contact details, and social links.

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
- **Provenance ban.** No file under `apps/snip/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/snip/public/CNAME` = `snip.free.componentdock.com`
  and the package `homepage` = `https://snip.free.componentdock.com`.
