# Umami — Design Notes

Reference: **Yummy 2** — `https://colorlib.com/wp/template/yummy-2/`  
Live preview: `https://preview.colorlib.com/theme/yummy/` (the only path: the
slug's own directory 404s — `colorlibPreviewAliases` maps `yummy-2 → yummy`;
this row owns the shared directory, see §Reference identity)  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/yummy-free-template.jpg  
Shipped: https://umami.free.componentdock.com

Umami is a single-page food magazine / recipe-blog landing template in the free-react-templates monorepo.

## Reference identity — catalogue URL collision (measured 2026-10-24)

Two catalogue entries claim `https://preview.colorlib.com/theme/yummy/`, and the
directory can only render one of them:

| key | post | thumbnail | what the directory serves |
| --- | --- | --- | --- |
| `yummy` | `/wp/template/yummy-2/` — "Food **Magazine**" (this row) | `yummy-free-template.jpg` | **this design** |
| `catalog-134132` | `/wp/template/yummy/` — "Creative Food **Blog**" | `yummy-minimal-food-blog-website-template-768x632.jpg` | no — that design has no demo |

Evidence (re-probed 2026-10-24): the live page is 21,709 B, its sheet
`css/style.css` is 42,720 B (sha256 `d08c771dd457…`), and the `yummy-2` post's
own `og:image` is `yummy-free-template.jpg` — the same image as this row's
screenshot. Every alternative prefix 404s (`theme/yummy-2/`, `theme/yummy2/`,
`theme/bootstrap/yummy/`), so the blog design is unreachable and the magazine
design is the one this brief may prescribe. The full chain is in
`openspec/specs/template-umami/spec.md` §Reference identity.

## Typography

Fonts loaded by `index.html` (Google Fonts): **PT Sans**, **PT Sans:wght@400;700**, **Playfair Display**

## Design tokens (`apps/umami/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fc0254` | brand |
| `--color-brand-secondary` | `#ff5581` | brand secondary |
| `--color-ink` | `#353535` | ink |
| `--color-ink-dark` | `#222` | ink dark |
| `--color-meta` | `#878787` | meta |
| `--color-blurb` | `#7a818d` | blurb |
| `--color-copyright` | `#b8c1d0` | copyright |
| `--color-divider` | `#e5e5e5` | divider |
| `--color-section` | `#f8f9fb` | section |
| `--color-footer` | `#eaedf2` | footer |
| `--color-paper` | `#fff` | paper |
| `--font-body` | `'PT Sans', ui-sans-serif, system-ui, sans-serif` | font body |
| `--font-logo` | `'Playfair Display', ui-serif, Georgia, serif` | font logo |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header with logo, nav, and search | see fidelity note below |
| 2 | `PageTopRecipes` | Hero page-top-recipe grid | see fidelity note below |
| 3 | `TopRecipes` | Top Recipes this Week | see fidelity note below |
| 4 | `FeaturedRecipes` | Featured Recipes | see fidelity note below |
| 5 | `Footer` | Footer with newsletter | see fidelity note below |
| 6 | `BackToTop` | — | no dedicated spec block |
| 7 | `CookieBanner` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a header with a centered serif-italic wordmark logo, a centered navigation bar with a dropdown and a search toggle, and a mobile menu.

### `PageTopRecipes`
The system SHALL render a 3-column recipe grid whose center column holds a large featured recipe with an overlapping caption box, flanked by four smaller posts.

### `TopRecipes`
The system SHALL render a light-grey section with a pink section-title box and a two-column layout of a large recipe card and a list of small recipe cards.

### `FeaturedRecipes`
The system SHALL render a section with a pink section-title box and a large featured recipe card plus smaller recipe cards.

### `Footer`
The system SHALL render a footer with brand info, a newsletter subscribe form, social links, and a copyright bar.

### `BackToTop`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `CookieBanner`
*anchors only* — dialog

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
- **Provenance ban.** No file under `apps/umami/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/umami/public/CNAME` = `umami.free.componentdock.com`
  and the package `homepage` = `https://umami.free.componentdock.com`.
