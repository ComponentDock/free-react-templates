# Techvault — Design Notes

Reference: **Onetech** — `https://colorlib.com/wp/template/onetech/`  
Live preview: `https://preview.colorlib.com/theme/onetech/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/onetech-free-template.jpg  
Shipped: https://techvault.free.componentdock.com

An E-Commerce Tech Store template with navigation and search, hero banner with product and newsletter signup sections. Recreation of ColorLib **Onetech** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page site for a tech/electronics e-commerce store.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600;700;800**, **Rubik**

## Design tokens (`apps/techvault/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e8f4fd` | primary 50 |
| `--color-primary-100` | `#c5e4f9` | primary 100 |
| `--color-primary-200` | `#9ad3f4` | primary 200 |
| `--color-primary-300` | `#62bcec` | primary 300 |
| `--color-primary-400` | `#0e8ce4` | primary 400 |
| `--color-primary-500` | `#0c7acc` | primary 500 |
| `--color-primary-600` | `#0a66ac` | primary 600 |
| `--color-primary-700` | `#08528c` | primary 700 |
| `--color-primary-800` | `#063e6c` | primary 800 |
| `--color-primary-900` | `#042a4c` | primary 900 |
| `--color-accent-peach` | `#ffa07f` | Peach accent (ColorLib link underline / hover). |
| `--color-sale` | `#df3b3b` | Red sale accent (ColorLib discount prices). |
| `--color-mist` | `#fafafa` | Light backgrounds (ColorLib body / sections). |
| `--color-ice` | `#eff6fa` | ice |
| `--color-smoke` | `#828282` | Muted copy (ColorLib paragraph text). |
| `--color-ash` | `#474747` | ash |
| `--color-ink` | `#000000` | ink |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Header` | Hero banner with product spotlight | see fidelity note below |
| 3 | `MainNav` | — | no dedicated spec block |
| 4 | `Banner` | Hero banner with product spotlight | see fidelity note below |
| 5 | `Characteristics` | — | no dedicated spec block |
| 6 | `DealsOfTheWeek` | — | no dedicated spec block |
| 7 | `PopularCategories` | — | no dedicated spec block |
| 8 | `Adverts` | — | no dedicated spec block |
| 9 | `BestSellers` | — | no dedicated spec block |
| 10 | `HotNewArrivals` | — | no dedicated spec block |
| 11 | `Brands` | Page structure and layout | see fidelity note below |
| 12 | `Newsletter` | Newsletter signup | see fidelity note below |
| 13 | `Footer` | Footer with Component Dock link | see fidelity note below |
| 14 | `Copyright` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — English · Register · Sign in

### `Header`
The template SHALL display a hero banner with a featured product, price, and call-to-action.

### `MainNav`
*anchors only* — Main navigation · Categories

### `Banner`
The template SHALL display a hero banner with a featured product, price, and call-to-action.

### `Characteristics`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `DealsOfTheWeek`
*anchors only* — Deals of the Week · Hurry Up · Offer ends in: · Add to Cart

### `PopularCategories`
*anchors only* — Popular Categories

### `Adverts`
*anchors only* — Smartphone Deals · Up to 40% off on selected models · Gaming Accessories · Premium gear for gamers

### `BestSellers`
*anchors only* — Best Sellers

### `HotNewArrivals`
*anchors only* — Hot New Arrivals

### `Brands`
The template SHALL render a complete single-page e-commerce storefront with a header, hero banner, product sections, newsletter, and footer.

### `Newsletter`
The template SHALL provide a newsletter email subscription form.

### `Footer`
The template SHALL display a footer with contact info, navigation links, and a link to Component Dock.

### `Copyright`
*anchors only* — Component Dock

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
- **Provenance ban.** No file under `apps/techvault/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/techvault/public/CNAME` = `techvault.free.componentdock.com`
  and the package `homepage` = `https://techvault.free.componentdock.com`.
