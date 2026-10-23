# Civicore — Design Notes

Reference: **Comport** — `https://colorlib.com/wp/template/comport/`  
Live preview: `https://preview.colorlib.com/theme/comport/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/comport-free-template.jpg  
Shipped: https://civicore.free.componentdock.com

Civicore is a job board template with a navbar, hero, search bar, feature cards, categories, jobs, newsletter, testimonials, news and download.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600**, **Poppins**

## Design tokens (`apps/civicore/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff9902` | brand |
| `--color-brand-dark` | `#e08900` | brand dark |
| `--color-ink` | `#222` | ink |
| `--color-paper` | `#f9f9f9` | paper |
| `--color-footer-bg` | `#04091e` | footer bg |
| `--color-mist` | `#777` | mist |
| `--color-blue` | `#00afed` | blue |
| `--color-teal` | `#0088cc` | teal |
| `--color-green` | `#2dc100` | green |
| `--color-primary-50` | `#fff8ed` | primary 50 |
| `--color-primary-100` | `#ffefd5` | primary 100 |
| `--color-primary-200` | `#ffdba3` | primary 200 |
| `--color-primary-300` | `#ffc166` | primary 300 |
| `--color-primary-400` | `#ffad3a` | primary 400 |
| `--color-primary-500` | `#ff9902` | primary 500 |
| `--color-primary-600` | `#e08900` | primary 600 |
| `--color-primary-700` | `#b86e00` | primary 700 |
| `--color-primary-800` | `#8f5500` | primary 800 |
| `--color-primary-900` | `#6b3f00` | primary 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

> The spec has no section-level requirements; the order below is read from `apps/civicore/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `SearchBar` | — | no dedicated spec block |
| 4 | `Features` | — | no dedicated spec block |
| 5 | `Categories` | — | no dedicated spec block |
| 6 | `Jobs` | — | no dedicated spec block |
| 7 | `Newsletter` | — | no dedicated spec block |
| 8 | `Testimonials` | — | no dedicated spec block |
| 9 | `News` | — | no dedicated spec block |
| 10 | `Download` | — | no dedicated spec block |
| 11 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary · Mobile · Civicore · Login · Sign Up

### `Hero`
*anchors only* — Find Your Dream · Explore Now

### `SearchBar`
*anchors only* — Category · Location · Keyword

### `Features`
*anchors only* — Why Choose Us · Explore Now

### `Categories`
*anchors only* — Find Job by Category

### `Jobs`
*anchors only* — tablist · Job type · tabpanel

### `Newsletter`
*anchors only* — Email address · Get Job Information Daily · Subscribe to our newsletter and never miss out on the latest opportunities. · Thank you for subscribing! · Subscribe

### `Testimonials`
*anchors only* — Happy Employees · Hear from professionals who found success through our platform.

### `News`
*anchors only* — Latest News · Stay informed with the latest career advice, industry trends, and job market insights.

### `Download`
*anchors only* — Download Our App · App Store · Play Store

### `Footer`
*anchors only* — Email address · Facebook · Twitter · Dribbble

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
- **Provenance ban.** No file under `apps/civicore/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/civicore/public/CNAME` = `civicore.free.componentdock.com`
  and the package `homepage` = `https://civicore.free.componentdock.com`.
