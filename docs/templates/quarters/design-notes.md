# Quarters — Design Notes

Reference: **Props** — `https://colorlib.com/wp/template/props/`  
Live preview: `https://preview.colorlib.com/theme/props/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/props-free-template.jpg  
Shipped: https://quarters.free.componentdock.com

A real estate landing page with a transparent navbar over a full-viewport hero, property information split panel, apartment browse grid. It also includes featured apartments collage, customer testimonials carousel, news cards, social strip, and a three-column footer. Recreation of ColorLib **Props**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Oswald**, **Oswald:wght@400;500;700**

## Design tokens (`apps/quarters/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e3c4a8` | brand |
| `--color-brand-dark` | `#ddb795` | brand dark |
| `--color-brand-hover` | `#eec60a` | brand hover |
| `--color-ink` | `#333333` | Ink — body text (#333) and price highlights (#000 via text-black). |
| `--color-soft` | `#edf0f5` | Soft — News section background (Bootstrap bg-light #EDF0F5). |
| `--color-muted` | `#777777` | Muted — property-list details (#777) / footer blurb (#737373). |
| `--color-faint` | `#737373` | faint |
| `--color-secondary` | `#6c757d` | secondary |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Quarters SHALL provide a complete real estate landing page with navbar, hero, property details, apartments, testimonials, news, social strip, and footer | see fidelity note below |
| 2 | `Hero` | Quarters SHALL provide a complete real estate landing page with navbar, hero, property details, apartments, testimonials, news, social strip, and footer | see fidelity note below |
| 3 | `PropertyInformation` | — | no dedicated spec block |
| 4 | `BrowseApartments` | — | no dedicated spec block |
| 5 | `FeaturedApartments` | — | no dedicated spec block |
| 6 | `Testimonials` | Quarters SHALL provide a complete real estate landing page with navbar, hero, property details, apartments, testimonials, news, social strip, and footer | see fidelity note below |
| 7 | `News` | Quarters SHALL provide a complete real estate landing page with navbar, hero, property details, apartments, testimonials, news, social strip, and footer | see fidelity note below |
| 8 | `SocialStrip` | — | no dedicated spec block |
| 9 | `Footer` | Quarters SHALL provide a complete real estate landing page with navbar, hero, property details, apartments, testimonials, news, social strip, and footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
Quarters SHALL provide a transparent navbar with the brand name "Quarters." and a trailing tan dot, desktop links (Home, About, Apartments with dropdown, News, Contact), and a mobile hamburger that opens a 300px slide-in panel from the right.

### `Hero`
Quarters SHALL provide a transparent navbar with the brand name "Quarters." and a trailing tan dot, desktop links (Home, About, Apartments with dropdown, News, Contact), and a mobile hamburger that opens a 300px slide-in panel from the right.

### `PropertyInformation`
*anchors only* — Property information

### `BrowseApartments`
*anchors only* — Browse apartments

### `FeaturedApartments`
*anchors only* — Featured apartments

### `Testimonials`
Quarters SHALL provide a transparent navbar with the brand name "Quarters." and a trailing tan dot, desktop links (Home, About, Apartments with dropdown, News, Contact), and a mobile hamburger that opens a 300px slide-in panel from the right.

### `News`
Quarters SHALL provide a transparent navbar with the brand name "Quarters." and a trailing tan dot, desktop links (Home, About, Apartments with dropdown, News, Contact), and a mobile hamburger that opens a 300px slide-in panel from the right.

### `SocialStrip`
*anchors only* — Social links

### `Footer`
Quarters SHALL provide a transparent navbar with the brand name "Quarters." and a trailing tan dot, desktop links (Home, About, Apartments with dropdown, News, Contact), and a mobile hamburger that opens a 300px slide-in panel from the right.

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
- **Provenance ban.** No file under `apps/quarters/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/quarters/public/CNAME` = `quarters.free.componentdock.com`
  and the package `homepage` = `https://quarters.free.componentdock.com`.
