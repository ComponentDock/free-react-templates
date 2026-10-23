# Slidesync — Design Notes

Reference: **Carousel 12** — `https://colorlib.com/wp/template/carousel-12/`  
Live preview: `https://preview.colorlib.com/theme/carousel-12/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-12.jpg  
Shipped: https://slidesync.free.componentdock.com

SlideSync is a fully responsive, modern React 19 component template recreating the ColorLib `carousel-12` template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter:wght@400;500;600;700;800;900**, **Poppins**

## Design tokens (`apps/slidesync/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff5722` | Brand palette: deep orange / coral accent for product highlights |
| `--color-primary-50` | `#fff3e0` | primary 50 |
| `--color-primary-100` | `#ffe0b2` | primary 100 |
| `--color-primary-200` | `#ffcc80` | primary 200 |
| `--color-primary-300` | `#ffb74d` | primary 300 |
| `--color-primary-400` | `#ffa726` | primary 400 |
| `--color-primary-500` | `#ff5722` | primary 500 |
| `--color-primary-600` | `#f4511e` | primary 600 |
| `--color-primary-700` | `#e64a19` | primary 700 |
| `--color-primary-800` | `#d84315` | primary 800 |
| `--color-primary-900` | `#bf360c` | primary 900 |
| `--color-primary-950` | `#870000` | primary 950 |
| `--color-accent-50` | `#fff3e0` | accent 50 |
| `--color-accent-100` | `#ffe0b2` | accent 100 |
| `--color-accent-200` | `#ffcc80` | accent 200 |
| `--color-accent-300` | `#ffb74d` | accent 300 |
| `--color-accent-400` | `#ffa726` | accent 400 |
| `--color-accent-500` | `#ff5722` | accent 500 |
| `--color-accent-600` | `#f4511e` | accent 600 |
| `--color-accent-700` | `#e64a19` | accent 700 |
| `--color-accent-800` | `#d84315` | accent 800 |
| `--color-accent-900` | `#bf360c` | accent 900 |
| `--color-accent-950` | `#870000` | accent 950 |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Carousel` | Carousel Slider Navigation | see fidelity note below |
| 4 | `Features` | — | no dedicated spec block |
| 5 | `Newsletter` | — | no dedicated spec block |
| 6 | `Footer` | Component Dock Footer Attribution | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — SlideSync · Home · Products

### `Hero`
*anchors only* — Beautiful Carousel Showcase · Explore Carousel · View Features

### `Carousel`
Users SHALL be able to browse carousel slides using navigation arrows and pagination dots.

### `Features`
*anchors only* — Powerful Carousel Features

### `Newsletter`
*anchors only* — alert · Stay Updated · Get the latest travel inspiration and carousel tips delivered to your inbox. · Email address · Subscribing... · Subscribed!

### `Footer`
The footer SHALL display a link to Component Dock.

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
- **Provenance ban.** No file under `apps/slidesync/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/slidesync/public/CNAME` = `slidesync.free.componentdock.com`
  and the package `homepage` = `https://slidesync.free.componentdock.com`.
