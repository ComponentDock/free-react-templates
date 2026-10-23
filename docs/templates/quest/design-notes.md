# Quest — Design Notes

Reference: **Dorne** — `https://colorlib.com/wp/template/dorne/`  
Live preview: `https://preview.colorlib.com/theme/dorne/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dorne-directory-listing-free-template.jpg  
Shipped: https://quest.free.componentdock.com

Quest is a single-page directory & listing website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Dorne" website template (source: https://colorlib.com/wp/template/dorne/ — "Dorne

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700;800**

## Design tokens (`apps/quest/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-opensans` | `'Open Sans', sans-serif` | font opensans |
| `--color-brand` | `#7643ea` | brand |
| `--color-brand-dark` | `#341a79` | brand dark |
| `--color-brand-darker` | `#0e0223` | brand darker |
| `--color-brand-hover` | `#5d25dd` | brand hover |
| `--color-text-primary` | `#2a2a2a` | text primary |
| `--color-text-secondary` | `#848484` | text secondary |
| `--color-bg-light` | `#f9f9f9` | bg light |
| `--color-bg-grey` | `#f4f6f8` | bg grey |
| `--color-teal` | `#30c0a3` | teal |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar mobile toggle | see fidelity note below |
| 2 | `Hero` | Hero search form has tabs and selects | see fidelity note below |
| 3 | `Categories` | Category cards display correctly | see fidelity note below |
| 4 | `About` | — | no dedicated spec block |
| 5 | `EditorsPick` | — | no dedicated spec block |
| 6 | `FeaturedDestinations` | — | no dedicated spec block |
| 7 | `FeaturedRestaurants` | — | no dedicated spec block |
| 8 | `FeaturedEvents` | Featured sections show correct card counts | see fidelity note below |
| 9 | `Clients` | Footer links to Component Dock | see fidelity note below |
| 10 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar SHALL include a mobile toggle button that shows/hides the mobile navigation menu.

### `Hero`
The hero section SHALL display a tabbed search form with Places and Events tabs, with Places active by default. Each tab shows destination, category, and price range selects plus a Search button.

### `Categories`
The categories section SHALL show 5 category cards with icons and labels: Hotels, Restaurants, Shopping, Beauty & Spa, Cinema.

### `About`
*anchors only* — Discover your city with · Quest

### `EditorsPick`
*anchors only* — Cities you must see · Editor&apos;s pick

### `FeaturedDestinations`
*anchors only* — Featured destinations · Editor&apos;s pick

### `FeaturedRestaurants`
*anchors only* — Featured Restaurants · Editor&apos;s pick

### `FeaturedEvents`
Each featured section SHALL display the correct number of cards: Editor's Pick shows 3 cities, Featured Destinations shows 5 destinations, Featured Restaurants shows 5 restaurants, Featured Events shows 6 events.

### `Clients`
The footer SHALL display "Made with" text with a heart icon and a link to componentdock.com branded as "Component Dock".

### `Footer`
The footer SHALL display "Made with" text with a heart icon and a link to componentdock.com branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/quest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/quest/public/CNAME` = `quest.free.componentdock.com`
  and the package `homepage` = `https://quest.free.componentdock.com`.
