# Gains — Design Notes

Reference: **Fitzone 2** — `https://colorlib.com/wp/template/fitzone-2/`  
Live preview: `https://preview.colorlib.com/theme/fitzone2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fitzone2-free-template.jpg  
Shipped: https://gains.free.componentdock.com

Gains is a single-page gym/fitness website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700;800**, **Teko**

## Design tokens (`apps/gains/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fa0347` | brand |
| `--color-brand-2` | `#fc561c` | brand 2 |
| `--color-night` | `#080a19` | night |
| `--color-ink` | `#2c3033` | ink |
| `--color-body` | `#666666` | body |
| `--color-muted` | `#555555` | muted |
| `--color-secondary` | `#888888` | secondary |
| `--color-graybg` | `#f6f5f1` | graybg |
| `--font-display` | `'Teko', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `About` | About/features section | see fidelity note below |
| 4 | `Extends` | Extends/video section | see fidelity note below |
| 5 | `Offer` | Offer/courses cards | see fidelity note below |
| 6 | `Testimonials` | Testimonials | see fidelity note below |
| 7 | `Calculate` | BMI calculator | see fidelity note below |
| 8 | `Team` | Team/trainers | see fidelity note below |
| 9 | `Subscribe` | Subscribe CTA | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main · Toggle menu · Pages · Get started

### `Hero`
The system SHALL render a full-width hero with a dark gym photo background, a huge condensed uppercase headline, and a red uppercase sub-line.

### `About`
The system SHALL render an about section with a section title, two feature groups flanking a center image, each with icon + heading + text.

### `Extends`
The system SHALL render a gradient band section with a video play button on one side and a headline with copy on the other.

### `Offer`
The system SHALL render a courses section with four image cards that reveal a title, description, and arrow button on hover.

### `Testimonials`
The system SHALL render a testimonials section on a gray background with at least three customer quotes.

### `Calculate`
The system SHALL render a calculator section on a background image with a gender selector and a gradient pill CTA button.

### `Team`
The system SHALL render a trainers section with three trainer cards, each with a photo, a social icon overlay, a name, and a role.

### `Subscribe`
The system SHALL render a subscribe section on a background image with a headline, an email input, and a gradient pill subscribe button.

### `Footer`
The system SHALL render a dark navy footer with four widget columns and a copyright row with social icons.

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
- **Provenance ban.** No file under `apps/gains/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gains/public/CNAME` = `gains.free.componentdock.com`
  and the package `homepage` = `https://gains.free.componentdock.com`.
