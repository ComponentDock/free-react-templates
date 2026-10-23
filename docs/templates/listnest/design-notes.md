# Listnest — Design Notes

Reference: **Listing** — `https://colorlib.com/wp/template/listing/`  
Live preview: `https://preview.colorlib.com/theme/listing/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/listing-free-directory-website-template.jpg  
Shipped: https://listnest.free.componentdock.com

A Directory & Listing template with hero section with search, find places, featured places, browse categories and add listing cta sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700;900**

## Design tokens (`apps/listnest/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#ff3a6d` | primary |
| `--color-primary-hover` | `#f34e79` | primary hover |
| `--color-body` | `#737882` | body |
| `--color-heading` | `#3e434b` | heading |
| `--color-light-bg` | `#f3f4f7` | light bg |
| `--color-dark-bg` | `#252a33` | dark bg |
| `--color-muted` | `#909090` | muted |
| `--color-green-rating` | `#46cd38` | green rating |
| `--color-orange-rating` | `#ffb006` | orange rating |
| `--color-border` | `#edf0f5` | border |
| `--color-dropdown-bg` | `#030303` | dropdown bg |
| `--color-dropdown-text` | `#aaaaaa` | dropdown text |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section with search | see fidelity note below |
| 3 | `FindPlaces` | Find Places section | see fidelity note below |
| 4 | `FeaturedPlaces` | Featured Places section | see fidelity note below |
| 5 | `BrowseCategories` | Browse Categories section | see fidelity note below |
| 6 | `AddListing` | Add Listing CTA section | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky dark navbar with the brand name "ListNest", dropdown menus (Explore, Listing, Pages), static links (About, Blog), and an "Add Listing" button. The navbar SHALL support a mobile hamburger toggle.

### `Hero`
The system SHALL render a full-width hero section with a background image, heading "Discover great places in New York", subtitle, and a search form with two inputs and a SEARCH button.

### `FindPlaces`
The system SHALL render a "Find Places" section with a heading and 5 category image cards (1 tall + 2x2 grid layout) showing category names and listing counts.

### `FeaturedPlaces`
The system SHALL render a "Featured Places" section on a light background with 3 restaurant cards showing image, color-coded rating, name, type, reviews, price, address, phone, website, open/closed status, and action icons.

### `BrowseCategories`
The system SHALL render a "Browse Categories" section with 8 category cards showing Lucide icons and category names in a 4-column grid.

### `AddListing`
The system SHALL render an "Add Listing" call-to-action section with a heading, description, and a pink ADD LISTING button.

### `Footer`
The system SHALL render a dark footer with copyright text, a Component Dock link, and social media icons (Facebook, Twitter, Instagram).

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
- **Provenance ban.** No file under `apps/listnest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/listnest/public/CNAME` = `listnest.free.componentdock.com`
  and the package `homepage` = `https://listnest.free.componentdock.com`.
