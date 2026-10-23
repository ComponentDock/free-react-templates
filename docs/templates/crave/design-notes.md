# Crave — Design Notes

Reference: **Sneaky** — `https://colorlib.com/wp/template/sneaky/`  
Live preview: `https://preview.colorlib.com/theme/sneaky/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/sneaky-free-template.jpg  
Shipped: https://crave.free.componentdock.com

Crave is a single-page restaurant landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@400;600;700**, **Open Sans**

## Design tokens (`apps/crave/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e22104` | brand |
| `--color-primary-50` | `#fef2f0` | primary 50 |
| `--color-primary-100` | `#fde1db` | primary 100 |
| `--color-primary-200` | `#fbc4b8` | primary 200 |
| `--color-primary-300` | `#f89a83` | primary 300 |
| `--color-primary-400` | `#f46644` | primary 400 |
| `--color-primary-500` | `#e22104` | primary 500 |
| `--color-primary-600` | `#c41a03` | primary 600 |
| `--color-primary-700` | `#a31503` | primary 700 |
| `--color-primary-800` | `#871303` | primary 800 |
| `--color-primary-900` | `#6f1204` | primary 900 |
| `--color-primary-950` | `#3c0601` | primary 950 |
| `--color-heading` | `#2f2d4e` | Dark navy headings from the original |
| `--color-cream` | `#fff8f7` | Warm off-white background sections |
| `--font-heading` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | Fonts: "Josefin Sans" for headings, "Open Sans" for body |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `HeroBanner` | — | no dedicated spec block |
| 3 | `AboutSection` | Component Dock attribution | see fidelity note below |
| 4 | `FeaturedFood` | — | no dedicated spec block |
| 5 | `OfferBanner` | — | no dedicated spec block |
| 6 | `FoodMenu` | — | no dedicated spec block |
| 7 | `CtaBanner` | — | no dedicated spec block |
| 8 | `ChefSection` | — | no dedicated spec block |
| 9 | `ReservationForm` | — | no dedicated spec block |
| 10 | `BlogSection` | — | no dedicated spec block |
| 11 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Crave

### `HeroBanner`
*anchors only* — Foods the · Book Now · Watch Video

### `AboutSection`
The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.

### `FeaturedFood`
*anchors only* — Featured Food · Fresh taste and great price

### `OfferBanner`
*anchors only* — Italian Pizza Offer · Read More

### `FoodMenu`
*anchors only* — Food Menu · Delicious food

### `CtaBanner`
*anchors only* — Some Trendy And Popular Courses Offered · Under replenish give saying thing · Reservation

### `ChefSection`
*anchors only* — Our Chef · Talent &amp; experience member

### `ReservationForm`
*anchors only* — Reservation · Get a table at Crave · Book A Table · Thank you! Your reservation request has been received. · Make Reservation

### `BlogSection`
*anchors only* — Our Blog · Latest food and recipe news

### `Footer`
*anchors only* — Subscribe · Newsletter · You can trust us. We only send promo offers. · Component Dock

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
- **Provenance ban.** No file under `apps/crave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/crave/public/CNAME` = `crave.free.componentdock.com`
  and the package `homepage` = `https://crave.free.componentdock.com`.
