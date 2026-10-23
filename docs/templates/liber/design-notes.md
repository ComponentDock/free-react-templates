# Liber — Design Notes

Reference: **Book** — `https://colorlib.com/wp/template/book/`  
Live preview: `https://preview.colorlib.com/theme/book/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/book-free-template.jpg  
Shipped: https://liber.free.componentdock.com

Liber is an author book landing template with a navbar, hero banner, about band, feature cards, counters, pricing, courses and app download. It recreates the ColorLib **Book** design (https://colorlib.com/wp/template/book/, preview: https://preview.colorlib.com/theme/book/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/liber/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f53f51` | brand |
| `--color-brand-dark` | `#d63040` | brand dark |
| `--color-ink` | `#222222` | Ink — dark headings (#222222 from the original). |
| `--color-ink-dark` | `#1a1a1a` | ink dark |
| `--color-paper` | `#f9f9ff` | Paper — light section background (#f9f9ff from the original). |
| `--color-mist` | `#777777` | Mist — muted body text (#777777 from the original). |
| `--color-teal` | `#4cd3e3` | Teal accent (#4cd3e3). |
| `--color-teal-dark` | `#3ab8cc` | teal dark |
| `--color-sky` | `#38a4ff` | Blue accent (#38a4ff). |
| `--color-sky-dark` | `#2d8de6` | sky dark |
| `--color-primary-50` | `#fef2f3` | primary 50 |
| `--color-primary-100` | `#fde6e8` | primary 100 |
| `--color-primary-200` | `#fbd0d5` | primary 200 |
| `--color-primary-300` | `#f7a8b2` | primary 300 |
| `--color-primary-400` | `#f17687` | primary 400 |
| `--color-primary-500` | `#f53f51` | primary 500 |
| `--color-primary-600` | `#d63040` | primary 600 |
| `--color-primary-700` | `#b42232` | primary 700 |
| `--color-primary-800` | `#971f2e` | primary 800 |
| `--color-primary-900` | `#801f2d` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Font: Poppins (from the original). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Features` | — | no dedicated spec block |
| 5 | `Counters` | — | no dedicated spec block |
| 6 | `Pricing` | — | no dedicated spec block |
| 7 | `Courses` | — | no dedicated spec block |
| 8 | `AppDownload` | — | no dedicated spec block |
| 9 | `Testimonials` | — | no dedicated spec block |
| 10 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Mobile navigation · Liber

### `Hero`
*anchors only* — Author: Travor James · New Adventure · Buy Now for $9.99

### `About`
*anchors only* — Author signature · Dr. Travor James

### `Features`
*anchors only* — Some Features that Made us Unique · What sets our work apart from the rest.

### `Counters`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Pricing`
*anchors only* — Purchase Whatever You Want · Choose the format that suits you best. · Purchase Now

### `Courses`
*anchors only* — Top Courses That Are Open for Students · Learn the craft from an award-winning author. · For Sale · View Course

### `AppDownload`
*anchors only* — Download Our App for All Platforms · Available on · App Store · Play Store

### `Testimonials`
*anchors only* — What Our Readers Say About Us · Real feedback from our beloved community.

### `Footer`
*anchors only* — alert · Liber · Quick Links · Newsletter · Stay updated with our latest releases. · Thanks for subscribing!

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
- **Provenance ban.** No file under `apps/liber/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/liber/public/CNAME` = `liber.free.componentdock.com`
  and the package `homepage` = `https://liber.free.componentdock.com`.
