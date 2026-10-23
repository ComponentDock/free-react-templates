# Parchment — Design Notes

Reference: **Wordsmith** — `https://colorlib.com/wp/template/wordsmith/`  
Live preview: `https://preview.colorlib.com/theme/wordsmith/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/wordsmith-free-template.jpg  
Shipped: https://parchment.free.componentdock.com

Parchment is a minimal editorial blog home-page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Wordsmith" template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Libre Baskerville**, **Libre Baskerville:ital,wght@0,400;0,700;1,400**, **Nunito Sans**

## Design tokens (`apps/parchment/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#111860` | brand |
| `--color-brand-hover` | `#0d134a` | brand hover |
| `--color-link` | `#1d28a1` | link |
| `--color-ink` | `#000` | ink |
| `--color-paper` | `#fff` | paper |
| `--color-section` | `#f2f2f2` | section |
| `--color-dropdown` | `#151515` | dropdown |
| `--color-hover-gray` | `#dddddd` | hover gray |
| `--font-heading` | `'Libre Baskerville', ui-serif, Georgia, serif` | font heading |
| `--font-body` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `FeaturedSlider` | Featured slider | see fidelity note below |
| 3 | `EntriesGrid` | Blog entries grid | see fidelity note below |
| 4 | `ExtraSection` | — | no dedicated spec block |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a white 78px header with the logo left, a centered uppercase nav with dropdowns, and a search trigger that opens a full-screen search overlay.

### `FeaturedSlider`
The system SHALL render a full-width featured slider of three posts with a black overlay and white serif headlines.

### `EntriesGrid`
The system SHALL render the light-gray content section with a responsive grid of post cards.

### `ExtraSection`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Footer`
The system SHALL render a deep navy footer on the page background with an about column, a newsletter signup, social links, and a copyright bar.

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
- **Provenance ban.** No file under `apps/parchment/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/parchment/public/CNAME` = `parchment.free.componentdock.com`
  and the package `homepage` = `https://parchment.free.componentdock.com`.
