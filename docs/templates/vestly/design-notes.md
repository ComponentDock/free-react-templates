# Vestly — Design Notes

Reference: **Invest** — `https://colorlib.com/wp/template/invest/`  
Live preview: `https://preview.colorlib.com/theme/invest/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/invest-free-template.jpg  
Shipped: https://vestly.free.componentdock.com

Recreation of ColorLib **Invest** template. **Source slug:** `invest` **Preview URL:** https://preview.colorlib.com/theme/invest/ **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/invest-free-template.jpg **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript **Category:** Cryptocurrency / blockchain investment landing…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**

## Design tokens (`apps/vestly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffa800` | brand |
| `--color-brand-hover` | `#e69600` | brand hover |
| `--color-dark` | `#11100e` | dark |
| `--color-footer-bg` | `#15191f` | footer bg |
| `--color-copyright-bg` | `#1a1e24` | copyright bg |
| `--color-heading` | `#212121` | heading |
| `--color-body-text` | `#a5a5a5` | body text |
| `--color-body-text-alt` | `#838383` | body text alt |
| `--color-slider-dot-active` | `#bda994` | slider dot active |
| `--color-slider-dot-inactive` | `#d2d2d2` | slider dot inactive |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Fonts: Open Sans (body) via Google Fonts (loaded in index.html). |

> The spec has no section-level requirements; the order below is read from `apps/vestly/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `HeroSlider` | — | no dedicated spec block |
| 3 | `Intro` | — | no dedicated spec block |
| 4 | `Services` | — | no dedicated spec block |
| 5 | `Converter` | — | no dedicated spec block |
| 6 | `Info` | No source-site references in the app | see fidelity note below |
| 7 | `News` | — | no dedicated spec block |
| 8 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Search · Blockchain

### `HeroSlider`
*anchors only* — Hero slider · Previous slide · Next slide

### `Intro`
*anchors only* — Buy and Sell Bitcoin

### `Services`
*anchors only* — Previous services · Next services · Read More

### `Converter`
*anchors only* — Amount · From currency · Result · To currency

### `Info`
The application SHALL NOT carry the source design's provenance: no file under `apps/vestly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.

### `News`
*anchors only* — Latest News in Crypto

### `Footer`
*anchors only* — contentinfo · Blockchain · Useful Links · Subscribe to our newsletter · Component Dock

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
- **Provenance ban.** No file under `apps/vestly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vestly/public/CNAME` = `vestly.free.componentdock.com`
  and the package `homepage` = `https://vestly.free.componentdock.com`.
