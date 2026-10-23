# Clipper — Design Notes

Reference: **Alotan** — `https://colorlib.com/wp/template/alotan/`  
Live preview: `https://preview.colorlib.com/theme/alotan/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/alotan-free-template.jpg  
Shipped: https://clipper.free.componentdock.com

Clipper is a single-page barber-shop landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Alotan" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The recreation carries the NEW name "Clipper" (never the source name).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Dancing Script**, **Roboto**, **Roboto:wght@400;500;700;900**

## Design tokens (`apps/clipper/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff6d24` | brand |
| `--color-brand-dark` | `#e65a14` | brand dark |
| `--color-ink` | `#343a40` | Ink — headings (dark gray from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#999999 from the original). |
| `--color-paper` | `#f9f9f9` | Paper — light section/footer backgrounds (#f9f9f9 from the original). |
| `--color-primary-50` | `#fff3ec` | primary 50 |
| `--color-primary-100` | `#ffe3d1` | primary 100 |
| `--color-primary-200` | `#ffc4a3` | primary 200 |
| `--color-primary-300` | `#ff9d6b` | primary 300 |
| `--color-primary-400` | `#ff8f57` | primary 400 |
| `--color-primary-500` | `#ff7a38` | primary 500 |
| `--color-primary-600` | `#ff6d24` | primary 600 |
| `--color-primary-700` | `#e65a14` | primary 700 |
| `--color-primary-800` | `#c24a0f` | primary 800 |
| `--color-primary-900` | `#9c3d10` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-script` | `'Dancing Script', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `QuickInfo` | Quick info strip | see fidelity note below |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `Features` | Barber features | see fidelity note below |
| 6 | `Cta` | CTA band | see fidelity note below |
| 7 | `StyleSection` | — | no dedicated spec block |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Clipper", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background image and the barbershop wordmark.

### `QuickInfo`
The system SHALL render a quick-info strip with phone, location, and opening hours items.

### `Services`
The system SHALL render a "Services" section with at least three service cards, each with a title.

### `Features`
The system SHALL render a "Barber Features" section with six feature cards.

### `Cta`
The system SHALL render a call-to-action band with a discount message and an appointment button.

### `StyleSection`
*anchors only* — Play video · Good Looking Style · Start with us today

### `Footer`
The system SHALL render a footer with the site name, a short tagline, quick links, and social links.

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
- **Provenance ban.** No file under `apps/clipper/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/clipper/public/CNAME` = `clipper.free.componentdock.com`
  and the package `homepage` = `https://clipper.free.componentdock.com`.
