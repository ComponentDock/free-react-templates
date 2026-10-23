# Encoremix — Design Notes

Reference: **Sunfest** — `https://colorlib.com/wp/template/sunfest/`  
Live preview: `https://preview.colorlib.com/theme/sunfest/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/sunfest-free-template.jpg  
Shipped: https://encoremix.free.componentdock.com

A Music Festival / Concert Event template with hero, lineup artists, complete lineup, next events and last news sections. Recreation of the ColorLib **Sunfest** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Pacifico**, **Poppins**, **Poppins:wght@300;400;500;600;700;800**

## Design tokens (`apps/encoremix/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-cyan` | `#00d0ff` | brand cyan |
| `--color-brand-mint` | `#25ffbf` | brand mint |
| `--color-brand-dark` | `#050505` | brand dark |
| `--color-brand-card` | `#ffffff` | brand card |
| `--color-brand-text` | `#e6e6e6` | brand text |
| `--color-brand-heading` | `#171717` | brand heading |
| `--color-brand-meta` | `#999999` | brand meta |
| `--color-brand-subtitle` | `#7a7a7a` | brand subtitle |
| `--font-sans` | `'Poppins', sans-serif` | font sans |
| `--font-accent` | `'Pacifico', cursive` | font accent |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero section displays with countdown and CTAs | see fidelity note below |
| 3 | `LineupHeadliners` | Headliner artists section with alternating cards | see fidelity note below |
| 4 | `CompleteLineup` | Complete lineup grid | see fidelity note below |
| 5 | `NextEvents` | Next events carousel with navigation | see fidelity note below |
| 6 | `LastNews` | Latest news blog cards | see fidelity note below |
| 7 | `Footer` | Footer with Component Dock branding | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Search · Toggle menu · Close menu

### `Hero`
The page SHALL display a full-viewport hero with a gradient headline, countdown timer, and two CTA buttons.

### `LineupHeadliners`
The headliners section SHALL display three artist cards with alternating layout.

### `CompleteLineup`
The complete lineup section SHALL display 8 artists in a responsive grid.

### `NextEvents`
The events section SHALL display event cards in a scrollable carousel with arrow navigation.

### `LastNews`
The news section SHALL display blog post cards with images, metadata, and descriptions.

### `Footer`
The footer SHALL display brand name, contact info, social icons, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/encoremix/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/encoremix/public/CNAME` = `encoremix.free.componentdock.com`
  and the package `homepage` = `https://encoremix.free.componentdock.com`.
