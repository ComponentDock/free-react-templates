# Creed — Design Notes

Reference: **Faith 2** — `https://colorlib.com/wp/template/faith-2/`  
Live preview: `https://preview.colorlib.com/theme/faith-2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/faith2-free-template.jpg  
Shipped: https://creed.free.componentdock.com

Creed is a church website template with a navbar, hero, about band, activities, donate, blog and footer. It recreates the ColorLib **Faith 2** design (https://colorlib.com/wp/template/faith-2/, preview: https://preview.colorlib.com/theme/faith2/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/creed/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f9f5f3` | primary 50 |
| `--color-primary-100` | `#f0e6df` | primary 100 |
| `--color-primary-200` | `#e0ccbe` | primary 200 |
| `--color-primary-300` | `#ccab97` | primary 300 |
| `--color-primary-400` | `#ac8a74` | primary 400 |
| `--color-primary-500` | `#9a7560` | primary 500 |
| `--color-primary-600` | `#836050` | primary 600 |
| `--color-primary-700` | `#6c4e42` | primary 700 |
| `--color-primary-800` | `#5a4239` | primary 800 |
| `--color-primary-900` | `#4d3a33` | primary 900 |
| `--color-primary-950` | `#2a1d1a` | primary 950 |
| `--color-surface` | `#eff4f6` | surface |
| `--color-dark-header` | `#1b1b1b` | dark header |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |

> The spec has no section-level requirements; the order below is read from `apps/creed/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Cta` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Activities` | — | no dedicated spec block |
| 6 | `Donate` | — | no dedicated spec block |
| 7 | `Blog` | — | no dedicated spec block |
| 8 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Next Big Event: · Church Camp — Dec 25 · Creed · Send Donations

### `Hero`
*anchors only* — Previous slide · Next slide

### `Cta`
*anchors only* — Duis elementum diam eget eros tincidunt, at venenatis nunc tincidunt · Visitors Info

### `About`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Activities`
*anchors only* — Church Activities · Upcoming Events · See All Events → · Latest Sermons · See More →

### `Donate`
*anchors only* — Donate to our Charities · Donate

### `Blog`
*anchors only* — Latest News · Stay up to date with the latest happenings at our church and community events. · Read More →

### `Footer`
*anchors only* — Facebook · Twitter · Creed · Contact Us · Sunday Worship: 10:30 AM · Useful Links

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
- **Provenance ban.** No file under `apps/creed/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/creed/public/CNAME` = `creed.free.componentdock.com`
  and the package `homepage` = `https://creed.free.componentdock.com`.
