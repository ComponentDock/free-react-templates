# Tint — Design Notes

Reference: **Pastel** — `https://colorlib.com/wp/template/pastel/`  
Live preview: `https://preview.colorlib.com/theme/pastel/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pastel-free-template.jpg  
Shipped: https://tint.free.componentdock.com

Tint is an interior design studio template with a navbar, hero, about band, portfolio, call to action, numbers, video, services and testimonials.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Barlow**, **Barlow Condensed**, **Barlow:wght@300;400;500;600;700**

## Design tokens (`apps/tint/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-gold-50` | `#fefce8` | Tint brand palette — golden yellow accent from the original design (#f9cc41) |
| `--color-gold-100` | `#fef9c3` | gold 100 |
| `--color-gold-200` | `#fef08a` | gold 200 |
| `--color-gold-300` | `#fde047` | gold 300 |
| `--color-gold-400` | `#f9cc41` | gold 400 |
| `--color-gold-500` | `#eab308` | gold 500 |
| `--color-gold-600` | `#ca8a04` | gold 600 |
| `--color-gold-700` | `#a16207` | gold 700 |
| `--color-gold-800` | `#854d0e` | gold 800 |
| `--color-gold-900` | `#713f12` | gold 900 |
| `--color-navy-50` | `#f0f0f4` | Navy dark palette — dark sections (#262533) |
| `--color-navy-100` | `#d8d8e0` | navy 100 |
| `--color-navy-200` | `#b1b1c1` | navy 200 |
| `--color-navy-300` | `#8a8aa2` | navy 300 |
| `--color-navy-400` | `#636383` | navy 400 |
| `--color-navy-500` | `#4a4a66` | navy 500 |
| `--color-navy-600` | `#3c3c55` | navy 600 |
| `--color-navy-700` | `#2e2e44` | navy 700 |
| `--color-navy-800` | `#262533` | navy 800 |
| `--color-navy-900` | `#1a1926` | navy 900 |
| `--font-sans` | `'Barlow', ui-sans-serif, system-ui, sans-serif` | Barlow fonts — matching the original template |
| `--font-condensed` | `'Barlow Condensed', ui-sans-serif, system-ui, sans-serif` | font condensed |

> The spec has no section-level requirements; the order below is read from `apps/tint/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Portfolio` | — | no dedicated spec block |
| 5 | `CallToAction` | — | no dedicated spec block |
| 6 | `Stats` | — | no dedicated spec block |
| 7 | `Video` | — | no dedicated spec block |
| 8 | `Services` | — | no dedicated spec block |
| 9 | `Testimonials` | — | no dedicated spec block |
| 10 | `Blog` | — | no dedicated spec block |
| 11 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — banner · Main navigation · Tint

### `Hero`
*anchors only* — Hero banner · Here&apos;s the Preview of · Interior Design Conference of 2024 · Learn more about this

### `About`
*anchors only* — Years of Awesomeness · About Our Company · We&apos;ve been Creating · Awesomeness Since 1998 · Learn more about this

### `Portfolio`
*anchors only* — About Our Company · Some statistics that we want · Some statistics that we want to show our viewers

### `CallToAction`
*anchors only* — Get a quick response from our team · Get to Know Project Estimate? · Get a quote now

### `Stats`
*anchors only* — About Our Company · Some statistics that we want

### `Video`
*anchors only* — Video showcase · Play video · Here&apos;s the Preview of · Interior Design Conference of 2024

### `Services`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Testimonials`
*anchors only* — About Our Company · Some statistics that we want

### `Blog`
*anchors only* — About Our Company · Some statistics that we want

### `Footer`
*anchors only* — Email address · Subscribe · Newsletter · You can trust us. We only send promo offers. · Component Dock

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
- **Provenance ban.** No file under `apps/tint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tint/public/CNAME` = `tint.free.componentdock.com`
  and the package `homepage` = `https://tint.free.componentdock.com`.
