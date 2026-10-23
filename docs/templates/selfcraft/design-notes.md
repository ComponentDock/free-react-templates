# Selfcraft — Design Notes

Reference: **Personify** — `https://colorlib.com/wp/template/personify/`  
Live preview: `https://preview.colorlib.com/theme/personify/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/personify-free-template.jpg  
Shipped: https://selfcraft.free.componentdock.com

Selfcraft is a personal vCard / portfolio website in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;700;800**, **Playfair Display**

## Design tokens (`apps/selfcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f73859` | brand |
| `--color-brand-light` | `#f96982` | brand light |
| `--color-navy` | `#283149` | navy |
| `--color-body-text` | `#b3b3b3` | body text |
| `--color-heading` | `#000000` | heading |
| `--font-body` | `'Open Sans', Arial, sans-serif` | font body |
| `--font-heading` | `'Playfair Display', Times, serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Layout` | Split-screen layout with fixed profile image | see fidelity note below |
| 2 | `OffcanvasToggle` | Offcanvas slide-in navigation menu | see fidelity note below |
| 3 | `OffcanvasMenu` | — | no dedicated spec block |
| 4 | `BioView` | — | no dedicated spec block |
| 5 | `PortfolioView` | — | no dedicated spec block |
| 6 | `ResumeView` | — | no dedicated spec block |
| 7 | `ContactView` | — | no dedicated spec block |
| 8 | `Footer` | Component Dock footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Layout`
The site SHALL render a 50/50 split layout on desktop (≥576px): left half is scrollable main content, right half is a fixed full-height profile image. On mobile (<576px), the profile image stacks as a 400px banner above content.

### `OffcanvasToggle`
The site SHALL provide a fixed "Menu" toggle (top-right, uppercase, 13px, letter-spacing 0.1em) that slides a 240px-wide panel from the right edge. The panel SHALL have a dark navy (#283149) background, white nav links, and social icons.

### `OffcanvasMenu`
*anchors only* — dialog · Navigation menu · Offcanvas navigation

### `BioView`
*anchors only* — Twitter · Facebook · Instagram

### `PortfolioView`
*anchors only* — Portfolio

### `ResumeView`
*anchors only* — Resume · Experience · Education

### `ContactView`
*anchors only* — Contact · Contact Me · Full Name · Email Address · Phone · Message

### `Footer`
The site SHALL include a footer that links to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/selfcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/selfcraft/public/CNAME` = `selfcraft.free.componentdock.com`
  and the package `homepage` = `https://selfcraft.free.componentdock.com`.
