# Griddle — Design Notes

Reference: **Burger** — `https://colorlib.com/wp/template/burger/`  
Live preview: `https://preview.colorlib.com/theme/burger/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/burger-free-template.jpg  
Shipped: https://griddle.free.componentdock.com

Griddle is a burger restaurant template with a header bar, hero slider, menu grid, about band, video section, testimonials and instagram grid.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700;800**, **Raleway**

## Design tokens (`apps/griddle/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f0542c` | brand |
| `--color-brand-gold` | `#f2c64d` | brand gold |
| `--color-ink` | `#040e27` | Ink — dark overlay color (#040E27). |
| `--color-heading` | `#1f1f1f` | Heading — near-black (#1F1F1F). |
| `--color-body` | `#4d4d4d` | Body — gray body text (#4D4D4D). |
| `--color-light` | `#f8f9fa` | Light — off-white section background (#f8f9fa). |
| `--color-primary-500` | `#f47a5e` | Primary scale — maps brand orange to the shared Button/ButtonLink system. |
| `--color-primary-600` | `#f0542c` | primary 600 |
| `--color-primary-700` | `#d8401b` | primary 700 |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Headings font: Montserrat; body font: Raleway. |

> The spec has no section-level requirements; the order below is read from `apps/griddle/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | — | no dedicated spec block |
| 2 | `HeroSlider` | — | no dedicated spec block |
| 3 | `MenuGrid` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `VideoSection` | — | no dedicated spec block |
| 6 | `Testimonials` | — | no dedicated spec block |
| 7 | `InstagramGrid` | — | no dedicated spec block |
| 8 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
*anchors only* — Primary · Instagram · Twitter · Facebook · Call us · Toggle menu

### `HeroSlider`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `MenuGrid`
*anchors only* — Burger Menu · Best Ever Burgers

### `About`
*anchors only* — About Us · Burger Bachelor Restaurant

### `VideoSection`
*anchors only* — Play video · Burger · Bachelor · How we make delicious Burger

### `Testimonials`
*anchors only* — Testimonials · Happy Customers

### `InstagramGrid`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Footer`
*anchors only* — Email for newsletter · Stay Connected · Sign Up · Stay connected with us to get exclusive offers! · Component Dock

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
- **Provenance ban.** No file under `apps/griddle/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/griddle/public/CNAME` = `griddle.free.componentdock.com`
  and the package `homepage` = `https://griddle.free.componentdock.com`.
