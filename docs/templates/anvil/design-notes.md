# Anvil — Design Notes

Reference: **Industrie** — `https://colorlib.com/wp/template/industrie/`  
Live preview: `https://preview.colorlib.com/theme/industrie/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/industrie-free-template.jpg  
Shipped: https://anvil.free.componentdock.com

Anvil is a single-page industrial landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Industrie" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:wght@300;400;600;700;900**, **Roboto Mono**

## Design tokens (`apps/anvil/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f23a2e` | brand |
| `--color-brand-dark` | `#d92a1f` | Deeper red for hover states. |
| `--color-ink` | `#343a40` | Ink — headings and dark text (#343a40 / #25262a from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d from the original). |
| `--color-paper` | `#edf0f5` | Paper — light section backgrounds (#edf0f5 from the original). |
| `--color-coal` | `#25262a` | Coal — dark section background (#25262a from the original). |
| `--color-primary-50` | `#fef2f2` | primary 50 |
| `--color-primary-100` | `#fde4e3` | primary 100 |
| `--color-primary-200` | `#fbcdcb` | primary 200 |
| `--color-primary-300` | `#f7a7a3` | primary 300 |
| `--color-primary-400` | `#f2736d` | primary 400 |
| `--color-primary-500` | `#f23a2e` | primary 500 |
| `--color-primary-600` | `#e02b20` | primary 600 |
| `--color-primary-700` | `#bc2117` | primary 700 |
| `--color-primary-800` | `#9b2018` | primary 800 |
| `--color-primary-900` | `#802019` | primary 900 |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Nunito Sans" (body) + "Roboto Mono" (mono accents). |
| `--font-display` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-mono` | `'Roboto Mono', ui-monospace, monospace` | font mono |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Stats` | Stats section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Grow` | Grow section with testimonial | see fidelity note below |
| 6 | `Projects` | Projects section | see fidelity note below |
| 7 | `Promo` | Promo strip | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Anvil", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline and a "Get In Touch" button.

### `Stats`
The system SHALL render a stats section with a heading and at least three stat counters.

### `Services`
The system SHALL render a services section with a heading and at least four service cards.

### `Grow`
The system SHALL render a "Let's grow together" section with a checklist and a testimonial quote.

### `Projects`
The system SHALL render a projects section with a heading and a project gallery.

### `Promo`
The system SHALL render a promo strip inviting visitors to request a quotation.

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
- **Provenance ban.** No file under `apps/anvil/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/anvil/public/CNAME` = `anvil.free.componentdock.com`
  and the package `homepage` = `https://anvil.free.componentdock.com`.
