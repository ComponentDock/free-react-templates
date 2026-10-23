# Cellarly — Design Notes

Reference: **Liquorstore** — `https://colorlib.com/wp/template/liquorstore/`  
Live preview: `https://preview.colorlib.com/theme/liquorstore/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/liquorstore-free-template.jpg  
Shipped: https://cellarly.free.componentdock.com

Cellarly is a liquor store template with a top bar, navbar, hero, feature cards, about band, category grid, product grid and testimonials.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Spectral**, **Spectral:wght@400;500;600;700**

## Design tokens (`apps/cellarly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f96d00` | Cellarly brand palette — warm amber/orange. |
| `--color-brand-dark` | `#d45d00` | brand dark |
| `--color-heading` | `#222222` | Heading color — dark charcoal. |
| `--color-ink` | `#777777` | Body text — medium grey. |
| `--color-border` | `#ececec` | Border / divider color. |
| `--color-surface` | `#ffffff` | White background. |
| `--color-bg-light` | `#f8f9fa` | Light grey background for sections. |
| `--color-dark` | `#1a1a2e` | Dark navbar / footer. |
| `--color-dark-bottom` | `#111111` | dark bottom |
| `--color-primary-50` | `#fff4e6` | Primary scale for shared UI Button/ButtonLink primary variants. |
| `--color-primary-100` | `#ffe0b2` | primary 100 |
| `--color-primary-200` | `#ffcc80` | primary 200 |
| `--color-primary-300` | `#ffb74d` | primary 300 |
| `--color-primary-400` | `#ffa726` | primary 400 |
| `--color-primary-500` | `#f96d00` | primary 500 |
| `--color-primary-600` | `#d45d00` | primary 600 |
| `--color-primary-700` | `#b35000` | primary 700 |
| `--color-primary-800` | `#8c3f00` | primary 800 |
| `--color-primary-900` | `#662d00` | primary 900 |
| `--font-heading` | `'Spectral', Georgia, 'Times New Roman', serif` | Fonts: Spectral for headings, Roboto for body. |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/cellarly/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | — | no dedicated spec block |
| 4 | `Features` | — | no dedicated spec block |
| 5 | `About` | — | no dedicated spec block |
| 6 | `CategoryGrid` | — | no dedicated spec block |
| 7 | `ProductGrid` | — | no dedicated spec block |
| 8 | `Testimonials` | — | no dedicated spec block |
| 9 | `BlogSection` | — | no dedicated spec block |
| 10 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — Facebook · Twitter · Instagram

### `Navbar`
*anchors only* — Shopping cart · Cellarly · View All &rarr;

### `Hero`
*anchors only* — Good · Drink · Moments · Shop Now · Read more

### `Features`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `About`
*anchors only* — Since 1905 · Desire Meets A New Taste · Years of Experience In Business

### `CategoryGrid`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `ProductGrid`
*anchors only* — Our Delightful Offerings · Tastefully Yours

### `Testimonials`
*anchors only* — Testimonial · Happy Clients

### `BlogSection`
*anchors only* — Blog · Recent Blog · Continue

### `Footer`
*anchors only* — Facebook · Twitter · Instagram

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
- **Provenance ban.** No file under `apps/cellarly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cellarly/public/CNAME` = `cellarly.free.componentdock.com`
  and the package `homepage` = `https://cellarly.free.componentdock.com`.
