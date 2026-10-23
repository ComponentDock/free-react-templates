# Barbell — Design Notes

Reference: **Crossfit 2** — `https://colorlib.com/wp/template/crossfit-2/`  
Live preview: `https://preview.colorlib.com/theme/crossfit-2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/crossfit2-free-template.jpg  
Shipped: https://barbell.free.componentdock.com

Barbell is a single-page gym/fitness website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@400;500;600;700**, **PT Sans**

## Design tokens (`apps/barbell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#82d026` | brand |
| `--color-brand-dark` | `#6da81f` | brand dark |
| `--color-ink` | `#081624` | Ink — dark navy headings/arrows/footer (#081624 from the original). |
| `--color-ink-dark` | `#050e17` | ink dark |
| `--color-mist` | `#f3f4ff` | Mist — light surfaces (#F3F4FF from the original). |
| `--color-muted` | `#858585` | Muted — secondary text/placeholders (#858585 from the original). |
| `--color-primary-50` | `#f5fbe9` | primary 50 |
| `--color-primary-100` | `#e8f6cd` | primary 100 |
| `--color-primary-200` | `#d2ee9f` | primary 200 |
| `--color-primary-300` | `#b6e267` | primary 300 |
| `--color-primary-400` | `#9bd63c` | primary 400 |
| `--color-primary-500` | `#82d026` | primary 500 |
| `--color-primary-600` | `#6da81f` | primary 600 |
| `--color-primary-700` | `#56801c` | primary 700 |
| `--color-primary-800` | `#46661c` | primary 800 |
| `--color-primary-900` | `#3b561b` | primary 900 |
| `--font-sans` | `'PT Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `Hero` | Hero carousel | see fidelity note below |
| 3 | `Booking` | Class booking strip | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Quote` | Client quote band | see fidelity note below |
| 6 | `Lifestyle` | Lifestyle & Diet section | see fidelity note below |
| 7 | `Boxes` | Photo boxes row | see fidelity note below |
| 8 | `CallToAction` | Call-to-action band | see fidelity note below |
| 9 | `MapSection` | — | no dedicated spec block |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a transparent header over the hero with a logo, the main navigation, a phone pill, and a search button.

### `Hero`
The system SHALL render a full-width hero carousel with three slides, each with a photo background, headline, paragraph, and CTA button.

### `Booking`
The system SHALL render a two-column booking strip: a lime photo panel with a booking headline on the left and a light-grey booking form on the right.

### `Services`
The system SHALL render a "Join Our Gym Today" section with four lime service tiles.

### `Quote`
The system SHALL render a full-width photo section with an athlete quote.

### `Lifestyle`
The system SHALL render a two-column lifestyle section with text on the left and a photo on the right.

### `Boxes`
The system SHALL render three full-bleed photo columns with giant centered labels.

### `CallToAction`
The system SHALL render a lime call-to-action band with a dark Join Now button.

### `MapSection`
*anchors only* — Location map · Barbell gym location map · Main Str, no 23, NY, New York PK 23589

### `Footer`
The system SHALL render a dark footer with a copyright line and social links.

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
- **Provenance ban.** No file under `apps/barbell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/barbell/public/CNAME` = `barbell.free.componentdock.com`
  and the package `homepage` = `https://barbell.free.componentdock.com`.
