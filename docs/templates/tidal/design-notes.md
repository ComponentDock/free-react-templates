# Tidal — Design Notes

Reference: **Pacific** — `https://colorlib.com/wp/template/pacific/`  
Live preview: `https://preview.colorlib.com/theme/pacific/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pacific-free-template.jpg  
Shipped: https://tidal.free.componentdock.com

Tidal is a travel agency landing template with a navbar, hero, search bar, services, destination select, tour packages, about band and testimonials.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/tidal/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f15d30` | brand |
| `--color-brand-dark` | `#d44a20` | brand dark |
| `--color-primary-blue` | `#007bff` | primary blue |
| `--color-footer-bg` | `#33313b` | footer bg |
| `--color-text-primary` | `#212529` | text primary |
| `--color-text-secondary` | `#6c757d` | text secondary |
| `--color-light-bg` | `#e9ecef` | light bg |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `SearchBar` | — | no dedicated spec block |
| 4 | `Services` | — | no dedicated spec block |
| 5 | `DestinationSelect` | — | no dedicated spec block |
| 6 | `TourPackages` | — | no dedicated spec block |
| 7 | `AboutSection` | Component Dock attribution | see fidelity note below |
| 8 | `Testimonials` | — | no dedicated spec block |
| 9 | `Blog` | — | no dedicated spec block |
| 10 | `FooterCTA` | — | no dedicated spec block |
| 11 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Mobile navigation · Tidal

### `Hero`
*anchors only* — Hero · Discover Your Favorite Place with Us · Travel to any corner of the world, without going around in circles · Search Destination

### `SearchBar`
*anchors only* — Search · Destination · Date · Guests

### `Services`
*anchors only* — Services · Our Services · It&apos;s time to start your adventure

### `DestinationSelect`
*anchors only* — Destinations · Explore · Select Your Destination · Popular Destination

### `TourPackages`
*anchors only* — Tour Packages · Popular Packages · Our Tour Packages

### `AboutSection`
The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.

### `Testimonials`
*anchors only* — Testimonials · Tourist Feedback

### `Blog`
*anchors only* — Blog · Our Blog · Latest Blog Posts · Read More

### `FooterCTA`
*anchors only* — Call to action · We Are Tidal, A Travel Agency · Explore Now

### `Footer`
*anchors only* — Tidal · Quick Links · Destinations · Support · Component Dock

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
- **Provenance ban.** No file under `apps/tidal/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tidal/public/CNAME` = `tidal.free.componentdock.com`
  and the package `homepage` = `https://tidal.free.componentdock.com`.
