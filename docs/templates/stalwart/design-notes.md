# Stalwart — Design Notes

Reference: **Congoro** — `https://colorlib.com/wp/template/congoro/`  
Live preview: `https://preview.colorlib.com/theme/congoro/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/congoro-colorlib-template.jpg  
Shipped: https://stalwart.free.componentdock.com

Stalwart is a single-page construction-company website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Barlow**, **Barlow:wght@300;400;500;600;700**, **Oswald**

## Design tokens (`apps/stalwart/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff1a35` | brand |
| `--color-brand-dark` | `#cc031b` | brand dark |
| `--color-ink` | `#0a0a0a` | ink |
| `--color-night` | `#1e1e1e` | night |
| `--color-night-soft` | `#2a2a2a` | night soft |
| `--color-body` | `#656565` | body |
| `--color-muted` | `#c1c1c1` | muted |
| `--color-mist` | `#f2f4f8` | mist |
| `--color-team-name` | `#33384e` | team name |
| `--font-display` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | Oswald for display headings + buttons, Barlow for body/nav |
| `--font-sans` | `'Barlow', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `ContactStrip` | Contact strip | see fidelity note below |
| 4 | `PromiseSection` | Promise and values | see fidelity note below |
| 5 | `Services` | Services | see fidelity note below |
| 6 | `Gallery` | Gallery | see fidelity note below |
| 7 | `About` | About | see fidelity note below |
| 8 | `Team` | Team | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |
| 10 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a transparent header with a logo box, nav links, a search control, a Free Quote button, and a mobile menu, that turns red when sticky.

### `Hero`
The system SHALL render a full-height hero photo under a red overlay with a watermark word, a headline, and a Discover Work text link.

### `ContactStrip`
The system SHALL render a red strip overlapping the hero bottom with a white help box and three contact-info columns.

### `PromiseSection`
The system SHALL render a centered section heading with a red slash prefix and a promise section with a photo block and a text column.

### `Services`
The system SHALL render a services section on a light-grey background with photo cards and a red View Details hover box.

### `Gallery`
The system SHALL render a three-tile gallery with hover captions.

### `About`
The system SHALL render an about section inside a red-bordered box with a heading and a Learn More button.

### `Team`
The system SHALL render a team carousel with member cards.

### `Footer`
The system SHALL render a near-black footer with brand, link columns, a newsletter form, and a copyright bar.

### `BackToTop`
*anchors only* — Back to top

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
- **Provenance ban.** No file under `apps/stalwart/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stalwart/public/CNAME` = `stalwart.free.componentdock.com`
  and the package `homepage` = `https://stalwart.free.componentdock.com`.
