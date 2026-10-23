# Skylark — Design Notes

Reference: **Flyplane** — `https://colorlib.com/wp/template/flyplane/`  
Live preview: `https://preview.colorlib.com/theme/flyplane/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/flyplane-free-template.jpg  
Shipped: https://skylark.free.componentdock.com

Skylark is a single-page travel & flight booking website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:wght@400;600;700;800**

## Design tokens (`apps/skylark/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-ink` | `#1d2a3b` | ink |
| `--color-brand` | `#4657f0` | brand |
| `--color-brand-deep` | `#3a48cc` | brand deep |
| `--color-star` | `#f9b71c` | star |
| `--color-muted` | `#747e8c` | muted |
| `--color-cloud` | `#f4f8fb` | cloud |
| `--color-night` | `#191b26` | night |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `FilterSearch` | Filter search | see fidelity note below |
| 4 | `SpecialOffers` | Special Offers | see fidelity note below |
| 5 | `Benefit` | Our Benefit | see fidelity note below |
| 6 | `FeaturePlaces` | Feature Places | see fidelity note below |
| 7 | `Gallery` | Destination Gallery | see fidelity note below |
| 8 | `News` | News Latest | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · menu · menuitem · Open menu · Mobile navigation · Close menu

### `Hero`
The system SHALL render a full-width photo hero with a centered white headline, subtext, and a white CTA button.

### `FilterSearch`
The system SHALL render a white search form overlapping the hero bottom with Where, Date, and Guests fields and a blue Search Plane submit button.

### `SpecialOffers`
The system SHALL render a "Special Offers" section with a title + intro row and three destination cards with photo, title, location, and price badge.

### `Benefit`
The system SHALL render an "Our Benefit" section on the #f4f8fb band with a 2×2 benefit grid and a 2×2 photo grid.

### `FeaturePlaces`
The system SHALL render a "Feature Places" section with a centered title and a carousel of destination cards (photo + overlapping rating/destination text box).

### `Gallery`
The system SHALL render a photo-backed "Destination Gallery" section with a slider of huge country-name slides and a white controls bar.

### `News`
The system SHALL render a "News Latest" section with recent-post rows on the left and two blog cards on the right.

### `Footer`
The system SHALL render a dark footer with logo, about text, social circles, nav links, and a copyright bar with the Component Dock attribution.

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
- **Provenance ban.** No file under `apps/skylark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/skylark/public/CNAME` = `skylark.free.componentdock.com`
  and the package `homepage` = `https://skylark.free.componentdock.com`.
