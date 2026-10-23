# Dwelling — Design Notes

Reference: **Aler** — `https://colorlib.com/wp/template/aler/`  
Live preview: `https://preview.colorlib.com/theme/aler/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/aler-free-template.jpg  
Shipped: https://dwelling.free.componentdock.com

Dwelling is a one-page real estate landing page template, recreating the ColorLib "Aler" design (https://colorlib.com/wp/template/aler/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato:wght@300;400;700;900**

## Design tokens (`apps/dwelling/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#00c8a0` | brand |
| `--color-brand-dark` | `#00a885` | brand dark |
| `--color-navy` | `#103230` | navy |
| `--color-text-dark` | `#111111` | text dark |
| `--color-text-muted` | `#666666` | text muted |
| `--color-bg-light` | `#f7f7f7` | bg light |
| `--color-heading` | `'Montserrat', sans-serif` | heading |
| `--color-body` | `'Lato', sans-serif` | body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero carousel with property showcase | see fidelity note below |
| 3 | `SearchBar` | Property search functionality | see fidelity note below |
| 4 | `LatestProperties` | Featured properties | see fidelity note below |
| 5 | `WhyChooseUs` | Why Choose Us features | see fidelity note below |
| 6 | `FeaturedProperties` | — | no dedicated spec block |
| 7 | `TeamAgents` | Agent profiles | see fidelity note below |
| 8 | `Categories` | Property categories | see fidelity note below |
| 9 | `Testimonials` | Client testimonials | see fidelity note below |
| 10 | `Contact` | Contact form and info | see fidelity note below |
| 11 | `Footer` | Full-page layout with navigation and footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Dwelling · Submit Property

### `Hero`
The hero section SHALL display a full-width carousel with property slides containing name, price, location, and navigation controls.

### `SearchBar`
The search bar SHALL provide location input, property type, city, and price range filters with a search button.

### `LatestProperties`
The featured properties section SHALL show 4 featured property cards with images, prices, and details.

### `WhyChooseUs`
The Why Choose Us section SHALL display 4 feature cards on a dark background with icons and descriptions.

### `FeaturedProperties`
*anchors only* — Featured · Property

### `TeamAgents`
The team section SHALL display 3 agent cards with photos, names, roles, and social media links.

### `Categories`
The categories section SHALL show 5 property type categories (Apartment, Villa, House, Restaurant, Office) with icons and counts.

### `Testimonials`
The testimonials section SHALL display 3 testimonial cards with quotes, star ratings, and author info.

### `Contact`
The contact section SHALL provide contact information (Address, Phone, Support) and a message form with Name, Email, Subject, Message fields and a Send button.

### `Footer`
The template SHALL render a sticky navbar with logo, navigation links, and a CTA button. The footer SHALL link to https://www.componentdock.com/ and include quick links, useful links, and contact info.

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
- **Provenance ban.** No file under `apps/dwelling/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dwelling/public/CNAME` = `dwelling.free.componentdock.com`
  and the package `homepage` = `https://dwelling.free.componentdock.com`.
