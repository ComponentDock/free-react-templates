# Keyhold — Design Notes

Reference: **Findstate** — `https://colorlib.com/wp/template/findstate/`  
Live preview: `https://preview.colorlib.com/theme/findstate/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/findstate-free-template.jpg  
Shipped: https://keyhold.free.componentdock.com

Keyhold is a single-page real-estate website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Findstate" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;600;700**

## Design tokens (`apps/keyhold/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#d4ca68` | brand |
| `--color-brand-dark` | `#c4b85a` | brand dark |
| `--color-ink` | `#000000` | ink |
| `--color-mist` | `#f8f9fa` | mist |
| `--color-body` | `rgba(0, 0, 0, 0.8)` | body |
| `--color-muted` | `rgba(0, 0, 0, 0.4)` | muted |
| `--color-soft` | `rgba(0, 0, 0, 0.7)` | soft |
| `--color-footer-link` | `rgba(255, 255, 255, 0.8)` | footer link |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Property search bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `SearchBar` | — | no dedicated spec block |
| 4 | `FeaturedProperties` | Featured properties | see fidelity note below |
| 5 | `WhyChooseUs` | Why choose us | see fidelity note below |
| 6 | `Counter` | Stats counter | see fidelity note below |
| 7 | `CityListings` | City listings | see fidelity note below |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `Agents` | Agents | see fidelity note below |
| 10 | `Blog` | Blog strip | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a horizontal property search form with four fields and a submit button.

### `Hero`
The system SHALL render a full-height hero with a background photo, a white-to-transparent overlay, a left gold gradient panel, a headline, a CTA button, and a scroll indicator.

### `SearchBar`
*anchors only* — status · Location · Property Type · Property Status · Price Limit · Search Property

### `FeaturedProperties`
The system SHALL render an "Exclusive Offer For You" section with a subheading, heading, and three property cards.

### `WhyChooseUs`
The system SHALL render a split "Why Choose Us?" section with an image half and four feature rows.

### `Counter`
The system SHALL render a photo-background counter section with four animated stats and a gold panel.

### `CityListings`
The system SHALL render a "Find Properties In Your City" section with six city listing cards.

### `Testimonials`
The system SHALL render a light-background "Happy Clients" testimonial carousel.

### `Agents`
The system SHALL render an "Our Agents" section with four agent cards.

### `Blog`
The system SHALL render a "Recent Blog" section with four blog entries.

### `Footer`
The system SHALL render a gold footer with four link columns, a contact column, social icons, and a copyright bar.

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
- **Provenance ban.** No file under `apps/keyhold/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/keyhold/public/CNAME` = `keyhold.free.componentdock.com`
  and the package `homepage` = `https://keyhold.free.componentdock.com`.
