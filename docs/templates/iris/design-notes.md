# Iris — Design Notes

Reference: **Flash** — `https://colorlib.com/wp/template/flash/`  
Live preview: `https://preview.colorlib.com/theme/flash/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/flash-free-template.jpg  
Shipped: https://iris.free.componentdock.com

Iris is a single-page photography portfolio template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **PT Serif**, **PT Serif:wght@400;700**, **Roboto**

## Design tokens (`apps/iris/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fa333f` | brand |
| `--color-ink` | `#222222` | ink |
| `--color-body` | `#777777` | body |
| `--color-light` | `#f9f9ff` | light |
| `--color-line` | `#eeeeee` | line |
| `--color-navy` | `#1e233b` | navy |
| `--color-muted` | `#cccccc` | muted |
| `--color-night` | `#000000` | night |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-serif` | `'PT Serif', Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Fixed header with logo, navigation and dropdowns | see fidelity note below |
| 2 | `Hero` | Hero banner with headline and CTA | see fidelity note below |
| 3 | `FeatureRows` | Feature rows | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Feedback` | Client feedback section | see fidelity note below |
| 6 | `InstagramStrip` | Instagram strip | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render an absolute transparent header over the hero with a brand wordmark, six uppercase nav links (Home active), and hover dropdowns for Projects, Pages and Blog; on scroll the header SHALL become a fixed solid-black bar.

### `Hero`
The system SHALL render a black-banded hero with a rounded nature-photo card that overhangs the following section, a big serif headline, an intro paragraph and a red "Explore Gallery" button.

### `FeatureRows`
The system SHALL render four alternating photo/text feature rows, each text block as a white rounded card overlapping the photo, with a serif heading, a paragraph and a light "Explore Gallery" button.

### `Services`
The system SHALL render a centered "Services Offered by Us" title block and a mosaic of eight alternating image/text cells on light `#f9f9ff` text panels.

### `Feedback`
The system SHALL render a light `#f9f9ff` rounded panel split into a "Client's Feedback" heading on the left and a white shadowed testimonial card on the right showing the client quotes.

### `InstagramStrip`
The system SHALL render a centered white "Follow us on instagram" button over a row of six equal square photos that overlaps the footer below.

### `Footer`
The system SHALL render a black footer with three widget columns (About Me with the Component Dock credit, Newsletter with an email form, Follow Me with social links) and a bottom copyright bar.

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
- **Provenance ban.** No file under `apps/iris/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/iris/public/CNAME` = `iris.free.componentdock.com`
  and the package `homepage` = `https://iris.free.componentdock.com`.
