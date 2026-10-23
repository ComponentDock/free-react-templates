# Maverick — Design Notes

Reference: **Clark** — `https://colorlib.com/wp/template/clark/`  
Live preview: `https://preview.colorlib.com/theme/clark/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/clark-free-template.jpg  
Shipped: https://maverick.free.componentdock.com

Maverick is a single-page personal portfolio / CV website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/maverick/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffbd39` | brand |
| `--color-brand-dark` | `#e6a91f` | brand dark |
| `--color-ink` | `#000000` | ink |
| `--color-card` | `rgba(255, 255, 255, 0.1)` | card |
| `--color-counter` | `#191919` | counter |
| `--color-track` | `#1a1a1a` | track |
| `--color-watermark` | `rgba(255, 255, 255, 0.1)` | watermark |
| `--color-muted` | `rgba(255, 255, 255, 0.7)` | muted |
| `--color-faint` | `rgba(255, 255, 255, 0.6)` | faint |
| `--font-sans` | `'Poppins', Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Resume` | Resume grid | see fidelity note below |
| 5 | `Services` | Services cards | see fidelity note below |
| 6 | `Skills` | Skills progress bars | see fidelity note below |
| 7 | `Projects` | Projects grid | see fidelity note below |
| 8 | `Blog` | Blog cards | see fidelity note below |
| 9 | `CounterBand` | Counter band | see fidelity note below |
| 10 | `HireMe` | Hire-me band | see fidelity note below |
| 11 | `Contact` | Contact section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a fixed header with a logo and the full navigation menu.

### `Hero`
The system SHALL render a black hero with the intro headline and two CTA buttons.

### `About`
The system SHALL render a two-column About section with a portrait, personal details, a stat counter and a download button.

### `Resume`
The system SHALL render a Resume section with six education/experience cards and a download button.

### `Services`
The system SHALL render a Services section with six icon cards that flip to an amber background on hover.

### `Skills`
The system SHALL render a Skills section with six amber progress bars.

### `Projects`
The system SHALL render a Projects section with a masonry grid of photo tiles and a hover overlay.

### `Blog`
The system SHALL render a Blog section with three article cards.

### `CounterBand`
The system SHALL render a photo-backed stats band with four animated counters.

### `HireMe`
The system SHALL render an amber full-width freelancing call-to-action.

### `Contact`
The system SHALL render a Contact section with four info boxes and a contact form.

### `Footer`
The system SHALL render a black four-column footer.

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
- **Provenance ban.** No file under `apps/maverick/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/maverick/public/CNAME` = `maverick.free.componentdock.com`
  and the package `homepage` = `https://maverick.free.componentdock.com`.
