# Zesty — Design Notes

Reference: **Yummy** — `https://colorlib.com/wp/template/yummy/`  
Live preview: `https://preview.colorlib.com/theme/yummy/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/yummy-minimal-food-blog-website-template.jpg  
Shipped: https://zesty.free.componentdock.com

Zesty is a minimal food-blog home-page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **PT Sans**, **PT Sans:wght@400;700**

## Design tokens (`apps/zesty/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fc0254` | brand |
| `--color-ink` | `#353535` | ink |
| `--color-meta` | `#878787` | meta |
| `--color-section` | `#f8f9fb` | section |
| `--color-footer` | `#eaedf2` | footer |
| `--color-copyright` | `#b8c1d0` | copyright |
| `--color-paper` | `#fff` | paper |
| `--font-body` | `'PT Sans', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `PageTopRecipes` | Page-top recipes | see fidelity note below |
| 3 | `TopRecipes` | Top recipes | see fidelity note below |
| 4 | `CategoryFilter` | Categories filter | see fidelity note below |
| 5 | `FeaturedRecipes` | Featured recipes | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `PageTopRecipes`
The system SHALL render a hero block of five recipe cards in a 6/3/3 grid: one large card in the center column and two small cards on each side.

### `TopRecipes`
The system SHALL render a "Top Recipes this Week" section on a `#F8F9FB` background, introduced by an overlapping pink `#FC0254` title bar.

### `CategoryFilter`
The system SHALL render a filterable grid of five recipe cards with four filter pills.

### `FeaturedRecipes`
The system SHALL render a "Featured Recipes" section with two horizontal cards on a `#F8F9FB` background, introduced by the same overlapping pink title bar.

### `Footer`
The system SHALL render a `#EAEDF2` footer with brand blurb, subscribe form, social links, and the ColorLib copyright line.

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
- **Provenance ban.** No file under `apps/zesty/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/zesty/public/CNAME` = `zesty.free.componentdock.com`
  and the package `homepage` = `https://zesty.free.componentdock.com`.
