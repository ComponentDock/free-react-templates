# Propwell — Design Notes

Reference: **Leramiz** — `https://colorlib.com/wp/template/leramiz/`  
Live preview: `https://preview.colorlib.com/theme/leramiz/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/leramiz-free-template.jpg  
Shipped: https://propwell.free.componentdock.com

Propwell is a real estate landing page with a header bar, hero, filter bar, recent properties, services, featured listings and looking property.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Source Sans Pro**, **Source Sans Pro:wght@300;400;600;700**

## Design tokens (`apps/propwell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-teal-50` | `#f0faf7` | Propwell brand palette — teal accent #30caa0, dark bg #324a4e |
| `--color-teal-100` | `#d1f1e8` | teal 100 |
| `--color-teal-200` | `#a3e3d1` | teal 200 |
| `--color-teal-300` | `#6ed0b5` | teal 300 |
| `--color-teal-400` | `#30caa0` | teal 400 |
| `--color-teal-500` | `#28a882` | teal 500 |
| `--color-teal-600` | `#208668` | teal 600 |
| `--color-teal-700` | `#196550` | teal 700 |
| `--color-teal-800` | `#124338` | teal 800 |
| `--color-teal-900` | `#0b2220` | teal 900 |
| `--color-dark-50` | `#f2f3f4` | dark 50 |
| `--color-dark-100` | `#d5d8da` | dark 100 |
| `--color-dark-200` | `#aab1b5` | dark 200 |
| `--color-dark-300` | `#808a90` | dark 300 |
| `--color-dark-400` | `#56636b` | dark 400 |
| `--color-dark-500` | `#324a4e` | dark 500 |
| `--color-dark-600` | `#2a3e42` | dark 600 |
| `--color-dark-700` | `#213236` | dark 700 |
| `--color-dark-800` | `#17252a` | dark 800 |
| `--color-dark-900` | `#0e191d` | dark 900 |
| `--color-primary` | `#30caa0` | primary |
| `--color-primary-dark` | `#28a882` | primary dark |
| `--color-text-dark` | `#252525` | text dark |
| `--color-text-gray` | `#707070` | text gray |
| `--color-bg-dark` | `#324a4e` | bg dark |
| `--font-sans` | `'Source Sans Pro', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `FilterBar` | — | no dedicated spec block |
| 4 | `RecentProperties` | — | no dedicated spec block |
| 5 | `Services` | — | no dedicated spec block |
| 6 | `FeaturedListings` | — | no dedicated spec block |
| 7 | `LookingProperty` | — | no dedicated spec block |
| 8 | `PopularPlaces` | — | no dedicated spec block |
| 9 | `Reviews` | — | no dedicated spec block |
| 10 | `LatestNews` | — | no dedicated spec block |
| 11 | `Partners` | — | no dedicated spec block |
| 12 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
*anchors only* — banner · Main navigation · Propwell · Register · Login

### `Hero`
*anchors only* — Hero · Find your place with our · Discover the best properties in your area with Propwell · View Detail

### `FilterBar`
*anchors only* — Property search filter · Search properties · Search keyword · Select city · Select state

### `RecentProperties`
*anchors only* — Recent properties · Latest properties available in your area

### `Services`
*anchors only* — Our services

### `FeaturedListings`
*anchors only* — Featured listings · Explore our top featured properties

### `LookingProperty`
*anchors only* — Property categories · Looking Property · Find the type of property you are looking for

### `PopularPlaces`
*anchors only* — Popular places · Explore properties in popular locations

### `Reviews`
*anchors only* — Customer reviews · Previous review · Next review

### `LatestNews`
*anchors only* — Latest news · Stay updated with our latest articles

### `Partners`
*anchors only* — Partners · Our Partners

### `Footer`
*anchors only* — contentinfo · Newsletter signup · Email address · Subscribe

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
- **Provenance ban.** No file under `apps/propwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/propwell/public/CNAME` = `propwell.free.componentdock.com`
  and the package `homepage` = `https://propwell.free.componentdock.com`.
