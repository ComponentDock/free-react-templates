# Kraft — Design Notes

Reference: **Cardboard** — `https://colorlib.com/wp/template/cardboard/`  
Live preview: `https://preview.colorlib.com/theme/cardboard/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cardboard-free-template.jpg  
Shipped: https://kraft.free.componentdock.com

Kraft is a single-page creative agency / portfolio template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "CardBoard" design (see TEMPLATES.md — line 356, first unchecked item whose prep did not exist on main), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Serif Display**, **Roboto Mono**

## Design tokens (`apps/kraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffc107` | brand |
| `--color-brand-dark` | `#d39e00` | brand dark |
| `--color-footer` | `#ffc809` | footer |
| `--color-night` | `#343a40` | night |
| `--color-fog` | `#f8f9fa` | fog |
| `--color-ink` | `#212529` | ink |
| `--color-mist` | `#6c757d` | mist |
| `--color-line` | `#dee2e6` | line |
| `--font-sans` | `'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, monospace` | font sans |
| `--font-display` | `'DM Serif Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Dark navigation bar | see fidelity note below |
| 2 | `Hero` | Full-viewport hero | see fidelity note below |
| 3 | `Portfolio` | Portfolio grid | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Services` | Services row | see fidelity note below |
| 6 | `Testimonials` | Testimonial carousel | see fidelity note below |
| 7 | `CtaBand` | Call-to-action band | see fidelity note below |
| 8 | `Footer` | Amber footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a dark navbar with the site brand, primary links, a Services dropdown, and a search field.

### `Hero`
The system SHALL render a full-height hero with a photographic background, dark overlay, headline, kicker, and a circular play button.

### `Portfolio`
The system SHALL render a "Latest Work" section with a 2×2 grid of image items that reveal a caption overlay on hover.

### `About`
The system SHALL render a split "Who We Are" section with an amber eyebrow, serif heading, outline button, and a dotted-background image composition.

### `Services`
The system SHALL render a four-column services row with amber icons.

### `Testimonials`
The system SHALL render a light-background testimonial carousel with avatar, name, and quote cards.

### `CtaBand`
The system SHALL render an amber full-width CTA band with a heading and an outline button.

### `Footer`
The system SHALL render the signature amber footer with about text, social links, contact info, quick links, and the bottom credit bar.

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
- **Provenance ban.** No file under `apps/kraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/kraft/public/CNAME` = `kraft.free.componentdock.com`
  and the package `homepage` = `https://kraft.free.componentdock.com`.
