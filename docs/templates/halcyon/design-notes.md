# Halcyon — Design Notes

Reference: **Wellspa** — `https://colorlib.com/wp/template/wellspa/`  
Live preview: `https://preview.colorlib.com/theme/wellspa/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/wellspa-free-template.jpg  
Shipped: https://halcyon.free.componentdock.com

Halcyon is a single-page spa & wellness template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Wellspa" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@400;600;700**, **Playfair Display**

## Design tokens (`apps/halcyon/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffa188` | brand |
| `--color-brand-dark` | `#ff8362` | Deeper peach for hover states. |
| `--color-slate` | `#364d59` | Dark slate used for accents (footer overlays, nav shadows). |
| `--color-ink` | `#212529` | Near-black headings/body text. |
| `--color-paper` | `#f8f9fa` | Light section background (bootstrap-style neutrals). |
| `--color-line` | `#ced4da` | Borders / dividers. |
| `--color-mist` | `#6c757d` | Secondary body text. |
| `--color-primary-50` | `#fff5f1` | primary 50 |
| `--color-primary-100` | `#ffe9e1` | primary 100 |
| `--color-primary-200` | `#ffd3c2` | primary 200 |
| `--color-primary-300` | `#ffb99d` | primary 300 |
| `--color-primary-400` | `#ffa188` | primary 400 |
| `--color-primary-500` | `#ff8e6b` | primary 500 |
| `--color-primary-600` | `#ff8362` | primary 600 |
| `--color-primary-700` | `#ef6a4a` | primary 700 |
| `--color-primary-800` | `#d14f31` | primary 800 |
| `--color-primary-900` | `#a83a20` | primary 900 |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-serif` | `'Playfair Display', Georgia, 'Times New Roman', serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Discount` | Discount call-to-action | see fidelity note below |
| 6 | `Features` | Features section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `BigQuote` | Big quote section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed top navigation bar with the site name "Halcyon", the page navigation, and a dark-mode toggle.

### `Hero`
The system SHALL render a full-height hero with a background image, a dark overlay, a headline, supporting copy and a call-to-action button.

### `About`
The system SHALL render an about section with a serif heading, paragraphs, social icons and two overlapping photos.

### `Services`
The system SHALL render a services section with a heading and four service cards, each with an image, a title and a description.

### `Discount`
The system SHALL render a discount section on a light peach background with a heading, copy and a contact button.

### `Features`
The system SHALL render a features section over a background image with four bordered cards, each with an icon, a title and a description.

### `Testimonials`
The system SHALL render a testimonials section with a heading, a carousel of testimonial cards (photo, name, quote) and prev/next controls.

### `BigQuote`
The system SHALL render a section with a large serif quote, attribution and two overlapping photos.

### `Footer`
The system SHALL render a footer with a wordmark, navigation links, social icons and a copyright bar.

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
- **Provenance ban.** No file under `apps/halcyon/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/halcyon/public/CNAME` = `halcyon.free.componentdock.com`
  and the package `homepage` = `https://halcyon.free.componentdock.com`.
