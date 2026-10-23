# Propel — Design Notes

Reference: **Express** — `https://colorlib.com/wp/template/express/`  
Live preview: `https://preview.colorlib.com/theme/express/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/express-free-template.jpg  
Shipped: https://propel.free.componentdock.com

Propel is a single-page business / startup corporate landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Express" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;600;700**, **Open Sans**

## Design tokens (`apps/propel/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0e49b5` | brand |
| `--color-brand-dark` | `#0c3e9a` | brand dark |
| `--color-ink` | `#212529` | ink |
| `--color-muted` | `#6c757d` | muted |
| `--color-smoke` | `#f8f9fa` | smoke |
| `--color-fog` | `#f0f0f0` | fog |
| `--color-footer` | `#efefef` | footer |
| `--color-faint` | `#ccc` | faint |
| `--color-meta` | `#999` | meta |
| `--color-footlink` | `#777` | footlink |
| `--color-foottext` | `#888` | foottext |
| `--color-list` | `#4a4a4a` | list |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header + navigation | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Startup` | Startup / Best Company section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Blog` | Blog Posts section | see fidelity note below |
| 6 | `Contact` | Contact section | see fidelity note below |
| 7 | `HalfContent` | Half-content CTA panels | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render an absolute, transparent-over-hero navbar with the brand logo on the left and a nav menu on the right; on mobile the menu SHALL be reachable via a burger toggle.

### `Hero`
The system SHALL render a full-viewport hero with a photo background, a dark overlay, the main headline, a lead paragraph, a white pill CTA button, and a "Watch the video" link.

### `Startup`
The system SHALL render a "Startup" section with a centered heading, two alternating media rows (text + image), a bullet list, and white "Learn more" buttons.

### `Services`
The system SHALL render a "Services" section with a heading and five numbered service cards in a row.

### `Blog`
The system SHALL render a "Blog Posts" section with two rows of two alternating image/text post cards.

### `Contact`
The system SHALL render a "Contact" section with a centered heading and a white contact form.

### `HalfContent`
The system SHALL render two 50/50 half-content panels, "Start Your Business" (image left) and "Grow Your Business" (image right), each with a check list and a brand-blue button.

### `Footer`
The system SHALL render a light footer with four widget columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/propel/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/propel/public/CNAME` = `propel.free.componentdock.com`
  and the package `homepage` = `https://propel.free.componentdock.com`.
