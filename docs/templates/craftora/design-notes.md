# Craftora — Design Notes

Reference: **Chimper** — `https://colorlib.com/wp/template/chimper/`  
Live preview: `https://preview.colorlib.com/theme/chimper/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/chimper-free-template.jpg  
Shipped: https://craftora.free.componentdock.com

Craftora is a single-page web-agency landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Chimper" website template design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Quicksand**, **Quicksand:wght@300;400;500;700;900**

## Design tokens (`apps/craftora/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#ecebfb` | primary 50 |
| `--color-primary-100` | `#d6d5f6` | primary 100 |
| `--color-primary-200` | `#adaaf0` | primary 200 |
| `--color-primary-300` | `#837fe9` | primary 300 |
| `--color-primary-400` | `#4d4bcf` | primary 400 |
| `--color-primary-500` | `#0d0cb5` | primary 500 |
| `--color-primary-600` | `#0b0a9c` | primary 600 |
| `--color-primary-700` | `#090880` | primary 700 |
| `--color-primary-800` | `#070762` | primary 800 |
| `--color-primary-900` | `#050542` | primary 900 |
| `--color-paper` | `#cccccc` | paper |
| `--color-band` | `#000000` | band |
| `--color-night` | `#333333` | night |
| `--color-ghost` | `#f2f4f5` | ghost |
| `--color-ink` | `#4d4d4d` | ink |
| `--color-muted` | `#737373` | muted |
| `--font-sans` | `'Quicksand', ui-sans-serif, system-ui, sans-serif` | Original font: "Quicksand" (Google Fonts, loaded in index.html). |
| `--font-display` | `'Quicksand', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar | see fidelity note below |
| 2 | `Navbar` | Navigation bar | see fidelity note below |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `Welcome` | Welcome / services section | see fidelity note below |
| 5 | `Values` | Values section | see fidelity note below |
| 6 | `Projects` | Featured projects section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `CtaBand` | Call-to-action band | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The system SHALL render a top utility bar above the navbar with contact details and social links.

### `Navbar`
The system SHALL render a navigation bar with the site name "Craftora", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-viewport hero with a rotating headline and a "Hire Us" button.

### `Welcome`
The system SHALL render a black welcome band with a play button, a welcome heading, and four service items with icons, blurbs, and "Read More" links.

### `Values`
The system SHALL render a values section with three numbered items.

### `Projects`
The system SHALL render a featured projects section with a heading, three project cards, and a "Show All Works" button.

### `Testimonials`
The system SHALL render a testimonials carousel with four quotes and navigation controls.

### `Blog`
The system SHALL render a blog section with three article cards.

### `CtaBand`
The system SHALL render a full-width brand-colored call-to-action band.

### `Footer`
The system SHALL render a footer with an about blurb, link columns, social links, a newsletter form, and a copyright line.

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
- **Provenance ban.** No file under `apps/craftora/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/craftora/public/CNAME` = `craftora.free.componentdock.com`
  and the package `homepage` = `https://craftora.free.componentdock.com`.
