# Bluecoast — Design Notes

Reference: **Bluesky** — `https://colorlib.com/wp/template/bluesky/`  
Live preview: `https://preview.colorlib.com/theme/bluesky/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bluesky-free-template.jpg  
Shipped: https://bluecoast.free.componentdock.com

A real estate website template with hero carousel, property search, recent listings, city exploration, testimonials, and newsletter signup. Recreation of ColorLib **Bluesky**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700;800**

## Design tokens (`apps/bluecoast/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-blue` | `#487fee` | brand blue |
| `--color-brand-green` | `#32fa95` | brand green |
| `--color-brand-primary` | `#3f6fce` | brand primary |
| `--color-accent-green` | `#2cd983` | accent green |
| `--color-text-dark` | `#282828` | text dark |
| `--color-text-gray` | `#828282` | text gray |
| `--color-text-light` | `#a5a5a5` | text light |
| `--color-footer-dark` | `#282828` | footer dark |
| `--font-heading` | `'Montserrat', sans-serif` | font heading |
| `--font-body` | `'Montserrat', sans-serif` | font body |

> The spec has no section-level requirements; the order below is read from `apps/bluecoast/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | — | no dedicated spec block |
| 2 | `HeroSlider` | — | no dedicated spec block |
| 3 | `SearchBar` | — | no dedicated spec block |
| 4 | `RecentProperties` | — | no dedicated spec block |
| 5 | `CitiesGrid` | — | no dedicated spec block |
| 6 | `Testimonials` | — | no dedicated spec block |
| 7 | `Newsletter` | — | no dedicated spec block |
| 8 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
*anchors only* — BlueCoast

### `HeroSlider`
*anchors only* — Hero slider · Previous slide · Next slide

### `SearchBar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `RecentProperties`
*anchors only* — Recent Properties

### `CitiesGrid`
*anchors only* — Find properties in these cities · Search your dream home

### `Testimonials`
*anchors only* — What our clients say · Testimonials from happy homeowners

### `Newsletter`
*anchors only* — Are you buying or selling? · Subscribe to our newsletter for the latest property updates and market insights.

### `Footer`
*anchors only* — BlueCoast · Latest Properties · Component Dock

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
- **Provenance ban.** No file under `apps/bluecoast/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bluecoast/public/CNAME` = `bluecoast.free.componentdock.com`
  and the package `homepage` = `https://bluecoast.free.componentdock.com`.
