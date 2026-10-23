# Residium — Design Notes

Reference: **Hus** — `https://colorlib.com/wp/template/hus/`  
Live preview: `https://preview.colorlib.com/theme/hus/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hus-free-template.jpg  
Shipped: https://residium.free.componentdock.com

Residium is a real estate landing page with a navbar, hero slider, about band, facilities, property certificates and apartments carousel. It recreates the ColorLib **Hus** design (https://colorlib.com/wp/template/hus/, preview: https://preview.colorlib.com/theme/hus/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@200;300;400;500;600;700**, **Roboto**

## Design tokens (`apps/residium/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-red-50` | `#fff5f5` | red 50 |
| `--color-red-100` | `#ffe0e0` | red 100 |
| `--color-red-200` | `#ffc2c2` | red 200 |
| `--color-red-300` | `#ff8a8a` | red 300 |
| `--color-red-400` | `#ff5252` | red 400 |
| `--color-red-500` | `#ff2424` | red 500 |
| `--color-red-600` | `#e61e1e` | red 600 |
| `--color-red-700` | `#b31818` | red 700 |
| `--color-red-800` | `#8c1414` | red 800 |
| `--color-red-900` | `#6b1010` | red 900 |
| `--color-orange-50` | `#fff8f3` | orange 50 |
| `--color-orange-100` | `#ffe8d9` | orange 100 |
| `--color-orange-200` | `#ffd1b3` | orange 200 |
| `--color-orange-300` | `#ffb388` | orange 300 |
| `--color-orange-400` | `#ff7e3d` | orange 400 |
| `--color-orange-500` | `#ff5e13` | orange 500 |
| `--color-orange-600` | `#e6550f` | orange 600 |
| `--color-orange-700` | `#b3420c` | orange 700 |
| `--color-orange-800` | `#8c330a` | orange 800 |
| `--color-orange-900` | `#6b2708` | orange 900 |
| `--color-navy-50` | `#f0f3fa` | navy 50 |
| `--color-navy-100` | `#d5ddf0` | navy 100 |
| `--color-navy-200` | `#aabadf` | navy 200 |
| `--color-navy-300` | `#8097ce` | navy 300 |
| `--color-navy-400` | `#5b73bd` | navy 400 |
| `--color-navy-500` | `#415094` | navy 500 |
| `--color-navy-600` | `#354379` | navy 600 |
| `--color-navy-700` | `#29335e` | navy 700 |
| `--color-navy-800` | `#1e2545` | navy 800 |
| `--color-navy-900` | `#13182c` | navy 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Oswald — the original template's heading typeface |
| `--font-heading` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font heading |

> The spec has no section-level requirements; the order below is read from `apps/residium/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `HeroSlider` | — | no dedicated spec block |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Facilities` | — | no dedicated spec block |
| 5 | `Certificates` | — | no dedicated spec block |
| 6 | `Apartments` | — | no dedicated spec block |
| 7 | `Testimonials` | — | no dedicated spec block |
| 8 | `CTA` | — | no dedicated spec block |
| 9 | `LatestNews` | — | no dedicated spec block |
| 10 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Mobile navigation · Residium · Login

### `HeroSlider`
*anchors only* — We Create your dream apartment · View Project

### `About`
*anchors only* — Years of Experience · We are Residium · Real Estate Company

### `Facilities`
*anchors only* — Our Facilities · Learn more

### `Certificates`
*anchors only* — Property · Certificates

### `Apartments`
*anchors only* — Previous · Next · Featured Apartments

### `Testimonials`
*anchors only* — What Our Clients Say

### `CTA`
*anchors only* — Get a free · Have any questions in mind? · Contact Us · Say Hello,

### `LatestNews`
*anchors only* — Our Latest News · Read more

### `Footer`
*anchors only* — Newsletter signup · Email address · Subscribe

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
- **Provenance ban.** No file under `apps/residium/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/residium/public/CNAME` = `residium.free.componentdock.com`
  and the package `homepage` = `https://residium.free.componentdock.com`.
