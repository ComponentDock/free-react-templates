# Givingheart — Design Notes

Reference: **Charity 2** — `https://colorlib.com/wp/template/charity-2/`  
Live preview: `https://preview.colorlib.com/theme/charity-2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/charity2-free-template.jpg  
Shipped: https://givingheart.free.componentdock.com

GivingHeart is a single-page charity landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Charity 2" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/givingheart/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#f41665` | primary |
| `--color-primary-500` | `#f41665` | primary 500 |
| `--color-primary-600` | `#d11254` | primary 600 |
| `--color-primary-700` | `#b00e47` | primary 700 |
| `--color-dark` | `#222222` | dark |
| `--color-light` | `#f9f9ff` | light |
| `--color-ink` | `#222222` | ink |
| `--color-surface` | `#ffffff` | surface |
| `--color-muted` | `#777777` | muted |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero / Banner section | see fidelity note below |
| 3 | `CTA` | — | no dedicated spec block |
| 4 | `Projects` | Projects section | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Volunteers` | Volunteers section | see fidelity note below |
| 7 | `Donate` | Donate / Contact section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a sticky top navigation bar with the site name "GivingHeart", anchor links to page sections, and a "Donate Now" CTA button.

### `Hero`
The system SHALL render a full-width hero with a dark overlay background image, a level-1 heading, and a call-to-action button.

### `CTA`
*anchors only* — Please Help them and Donate now · Donate Now

### `Projects`
The system SHALL render a projects section with a heading and 3 project cards in a 3-column grid, each with an image overlay and hover effect.

### `About`
The system SHALL render a split about section with a full-width image on the left and text content on the right, on a dark background.

### `Volunteers`
The system SHALL render a volunteers section with a heading and 4 volunteer cards in a 4-column grid, each with an image overlay and hover effect.

### `Donate`
The system SHALL render a donate section with a dark parallax background, a heading, a trust information column on the left, and a donation form on the right.

### `Footer`
The system SHALL render a footer with navigation links, social media icons, and a copyright notice linking to Component Dock.

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
- **Provenance ban.** No file under `apps/givingheart/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/givingheart/public/CNAME` = `givingheart.free.componentdock.com`
  and the package `homepage` = `https://givingheart.free.componentdock.com`.
