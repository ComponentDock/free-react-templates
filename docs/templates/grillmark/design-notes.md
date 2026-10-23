# Grillmark — Design Notes

Reference: **Steakshop** — `https://colorlib.com/wp/template/steakshop/`  
Live preview: `https://preview.colorlib.com/theme/steakshop/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/steakshop-free-template.jpg  
Shipped: https://grillmark.free.componentdock.com

Grillmark is a steakhouse restaurant template with a navbar, hero, banner bottom, breakfast, lunch, reservation, chef, food gallery and brands.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Pacifico**, **Roboto**

## Design tokens (`apps/grillmark/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f42f2c` | brand |
| `--color-brand-light` | `#f48464` | brand light |
| `--color-heading` | `#222222` | heading |
| `--color-body` | `#777777` | body |
| `--color-primary-50` | `#fef2f2` | primary 50 |
| `--color-primary-100` | `#fde6e6` | primary 100 |
| `--color-primary-200` | `#fcc5c5` | primary 200 |
| `--color-primary-300` | `#f99494` | primary 300 |
| `--color-primary-400` | `#f46060` | primary 400 |
| `--color-primary-500` | `#f42f2c` | primary 500 |
| `--color-primary-600` | `#dc1f1c` | primary 600 |
| `--color-primary-700` | `#b91715` | primary 700 |
| `--color-primary-800` | `#991717` | primary 800 |
| `--color-primary-900` | `#7f1a1a` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Fonts: Pacifico (cursive headings) + Roboto (body). |
| `--font-display` | `'Pacifico', cursive` | font display |

> The spec has no section-level requirements; the order below is read from `apps/grillmark/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `BannerBottom` | — | no dedicated spec block |
| 4 | `Breakfast` | — | no dedicated spec block |
| 5 | `Lunch` | — | no dedicated spec block |
| 6 | `Reservation` | — | no dedicated spec block |
| 7 | `Chef` | — | no dedicated spec block |
| 8 | `FoodGallery` | — | no dedicated spec block |
| 9 | `Brands` | — | no dedicated spec block |
| 10 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary · Mobile · Grillmark

### `Hero`
*anchors only* — Welcome to Grillmark · Premium cuts, expertly crafted · Explore Menu

### `BannerBottom`
*anchors only* — Play video · Premium cuts, expertly crafted · Watch our story of passion and quality · Explore Menu

### `Breakfast`
*anchors only* — Breakfast · Daily Food Courses with Drinks · Opening Hours · Location

### `Lunch`
*anchors only* — Lunch · Daily Food Courses with Drinks · Walter White · Head Chef

### `Reservation`
*anchors only* — alert · Reservation Confirmed! · Make Another Reservation · Reservation · Book Your Table · Name

### `Chef`
*anchors only* — Our Chef · Meet the Master Behind the Grill · Walter White · Head Chef & Founder

### `FoodGallery`
*anchors only* — Scroll gallery left · Scroll gallery right · Gallery · Our Signature Dishes

### `Brands`
*anchors only* — Partners · In association with

### `Footer`
*anchors only* — Subscribe · alert · Top Products · Quick Links · Features · Resources

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
- **Provenance ban.** No file under `apps/grillmark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/grillmark/public/CNAME` = `grillmark.free.componentdock.com`
  and the package `homepage` = `https://grillmark.free.componentdock.com`.
