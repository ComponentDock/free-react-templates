# Tidestone — Design Notes

Reference: **Seapalace** — `https://colorlib.com/wp/template/seapalace/`  
Live preview: `https://preview.colorlib.com/theme/seapalace/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/seapalace-free-template.jpg  
Shipped: https://tidestone.free.componentdock.com

Provide a free, production-ready React recreation of the Seapalace luxury hotel template. The template showcases a high-end hotel/residence website with a hero banner, booking form, room explorer, special facilities, testimonials, news, and a dark footer with Component Dock branding.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;600;700;800**, **Roboto**

## Design tokens (`apps/tidestone/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#cca772` | Tidestone brand palette — gold/amber #cca772 from the original design |
| `--color-brand-dark` | `#b8923f` | brand dark |
| `--color-ink` | `#222222` | Ink — dark text (#222222 from the original) |
| `--color-paper` | `#f7f9f9` | Paper — light section background (#f7f9f9 porcelain) |
| `--color-mist` | `#777777` | Mist — muted body text (#777777) |
| `--color-footer` | `#0b1a2a` | Footer dark (#0b1a2a) |
| `--color-primary-50` | `#fdf8ed` | Primary scale — gold/amber tones for shared Button/ButtonLink |
| `--color-primary-100` | `#f9edcf` | primary 100 |
| `--color-primary-200` | `#f2d99e` | primary 200 |
| `--color-primary-300` | `#e8c16a` | primary 300 |
| `--color-primary-400` | `#d9a945` | primary 400 |
| `--color-primary-500` | `#cca772` | primary 500 |
| `--color-primary-600` | `#b8923f` | primary 600 |
| `--color-primary-700` | `#9a7432` | primary 700 |
| `--color-primary-800` | `#7d5c2b` | primary 800 |
| `--color-primary-900` | `#664b26` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `BookingForm` | Booking form has required fields | see fidelity note below |
| 4 | `Welcome` | — | no dedicated spec block |
| 5 | `ExploreRooms` | — | no dedicated spec block |
| 6 | `VideoSection` | Page loads with all sections | see fidelity note below |
| 7 | `SpecialFacilities` | — | no dedicated spec block |
| 8 | `Testimonials` | — | no dedicated spec block |
| 9 | `NewsEvents` | — | no dedicated spec block |
| 10 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — banner · navigation · Main navigation · Toggle navigation menu

### `Hero`
*anchors only* — See What a Difference a Stay Makes · Luxury · Personal · Book Now

### `BookingForm`
The booking form SHALL include a keywords input, selects for arrival/rooms/departure/adult/child, and a Check Availability button.

### `Welcome`
*anchors only* — Welcome · Learn More

### `ExploreRooms`
*anchors only* — Explore Our Rooms · Book Now

### `VideoSection`
The page SHALL render all sections in the correct order: Navbar, Hero, BookingForm, Welcome, ExploreRooms, VideoSection, SpecialFacilities, Testimonials, NewsEvents, Footer.

### `SpecialFacilities`
*anchors only* — Special Facilities

### `Testimonials`
*anchors only* — Our Guest Love Us

### `NewsEvents`
*anchors only* — News & Events · Read More

### `Footer`
The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/tidestone/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tidestone/public/CNAME` = `tidestone.free.componentdock.com`
  and the package `homepage` = `https://tidestone.free.componentdock.com`.
