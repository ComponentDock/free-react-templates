# Dwellix — Design Notes

Reference: **Rehomes** — `https://colorlib.com/wp/template/rehomes/`  
Live preview: `https://preview.colorlib.com/theme/rehomes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/rehomes-free-template.jpg  
Shipped: https://dwellix.free.componentdock.com

A real estate property listing template with search functionality, property cards, category browsing, why-choose-us features, blog posts, and a newsletter footer. Lime-green accent (`#92c800`) on light background, Poppins font.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/dwellix/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#92c800` | brand |
| `--color-brand-dark` | `#7ab300` | brand dark |
| `--color-heading` | `#2a303b` | heading |
| `--color-body-text` | `#636a76` | body text |
| `--color-body-bg` | `#ffffff` | body bg |
| `--color-section-alt` | `#f8f9fa` | section alt |
| `--color-footer-bg` | `#19181d` | footer bg |
| `--color-border` | `#ebebeb` | border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopHeader` | Top header with contact info and social links | see fidelity note below |
| 2 | `Navbar` | Navigation bar with logo and menu | see fidelity note below |
| 3 | `SearchBar` | Property search bar with filters | see fidelity note below |
| 4 | `FeaturedProperties` | Featured property listings | see fidelity note below |
| 5 | `WhyChooseUs` | Why Choose Us section | see fidelity note below |
| 6 | `PropertyCategories` | Property categories section | see fidelity note below |
| 7 | `CtaBanner` | Call-to-action banner | see fidelity note below |
| 8 | `LatestNews` | Latest news blog section | see fidelity note below |
| 9 | `Partners` | Partner logos section | see fidelity note below |
| 10 | `Footer` | Footer with brand, contact, cities, newsletter | see fidelity note below |

## Section-by-section fidelity

### `TopHeader`
The template SHALL display a top header bar with email, phone number, and social media icons.

### `Navbar`
The template SHALL display a sticky navigation bar with the DWELLIX logo, navigation links, and a Contact Us button.

### `SearchBar`
The template SHALL display a search form with dropdown filters and a search button.

### `FeaturedProperties`
The template SHALL display 6 property cards in a 3-column grid with images, details, and pricing.

### `WhyChooseUs`
The template SHALL display 3 feature items with icons and descriptions.

### `PropertyCategories`
The template SHALL display 5 category cards in an asymmetric grid with gradient overlays.

### `CtaBanner`
The template SHALL display a CTA banner with a background image, heading, and app store buttons.

### `LatestNews`
The template SHALL display 3 blog post cards with images, titles, and metadata.

### `Partners`
The template SHALL display a row of 5 partner logo placeholders.

### `Footer`
The template SHALL display a 4-column footer with brand info, contact details, property cities, and a newsletter form. The copyright line MUST link to Component Dock.

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
- **Provenance ban.** No file under `apps/dwellix/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dwellix/public/CNAME` = `dwellix.free.componentdock.com`
  and the package `homepage` = `https://dwellix.free.componentdock.com`.
