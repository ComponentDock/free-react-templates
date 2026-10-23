# Habitat — Design Notes

Reference: **Homes** — `https://colorlib.com/wp/template/homes/`  
Live preview: `https://preview.colorlib.com/theme/homes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/homes-free-template.jpg  
Shipped: https://habitat.free.componentdock.com

Habitat is a single-page real-estate website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500**

## Design tokens (`apps/habitat/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#8ad144` | brand |
| `--color-brand-dark` | `#74b532` | brand dark |
| `--color-navy` | `#30304e` | navy |
| `--color-muted` | `#6f6f8a` | muted |
| `--color-outline` | `#8f8fa8` | outline |
| `--color-label` | `#61616e` | label |
| `--color-select` | `#3f3f4b` | select |
| `--color-light` | `#f8f8f9` | light |
| `--color-badge` | `#e30707` | badge |
| `--color-divider` | `#f3f3f3` | divider |
| `--color-ink` | `#30304e` | ink |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `FilterSearch` | Filter search form | see fidelity note below |
| 4 | `Properties` | Property cards | see fidelity note below |
| 5 | `PopularRoom` | Popular room carousel | see fidelity note below |
| 6 | `Newsletter` | Newsletter | see fidelity note below |
| 7 | `WhyChooseUs` | Why choose us | see fidelity note below |
| 8 | `Instagram` | Instagram strip | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary · Mobile

### `Hero`
The system SHALL render a 633px hero with a background photo, a dark navy overlay, and a centered two-line headline.

### `FilterSearch`
The system SHALL render a white search form overlapping the bottom of the hero, with location/type selects, a price range, bedroom/bathroom pills, and a green search button.

### `Properties`
The system SHALL render a 3-column grid of property cards with image, title, location links, feature stats, price, and a view button.

### `PopularRoom`
The system SHALL render a dark photo section whose right half holds a carousel of white property slides with a "Best Deal" badge.

### `Newsletter`
The system SHALL render a dark navy section with a mail icon, a two-line heading, an email input, and a green subscribe button.

### `WhyChooseUs`
The system SHALL render a two-column section with a heading + paragraph on the left and a six-item check list on the right.

### `Instagram`
The system SHALL render a light-gray strip with a centered Instagram follow heading and a row of square photos.

### `Footer`
The system SHALL render a dark navy footer with a photo strip, centered logo, three widget columns, and a copyright bar.

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
- **Provenance ban.** No file under `apps/habitat/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/habitat/public/CNAME` = `habitat.free.componentdock.com`
  and the package `homepage` = `https://habitat.free.componentdock.com`.
