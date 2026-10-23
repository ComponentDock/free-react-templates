# Sundale — Design Notes

Reference: **South** — `https://colorlib.com/wp/template/south/`  
Live preview: `https://preview.colorlib.com/theme/south/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/south-free-template.jpg  
Shipped: https://sundale.free.componentdock.com

Sundial is a single-page real estate agency template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "South" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**

## Design tokens (`apps/sundale/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-tan-50` | `#faf6f3` | Brand palette — warm brown/tan #947054 from the real estate design |
| `--color-tan-100` | `#f2ebe3` | tan 100 |
| `--color-tan-200` | `#e6d5c6` | tan 200 |
| `--color-tan-300` | `#d4b8a0` | tan 300 |
| `--color-tan-400` | `#c19b7a` | tan 400 |
| `--color-tan-500` | `#947054` | tan 500 |
| `--color-tan-600` | `#7d5d46` | tan 600 |
| `--color-tan-700` | `#664a38` | tan 700 |
| `--color-tan-800` | `#4f382a` | tan 800 |
| `--color-tan-900` | `#38261c` | tan 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/sundale/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `FeaturedProperties` | — | no dedicated spec block |
| 4 | `CallToAction` | — | no dedicated spec block |
| 5 | `Testimonials` | — | no dedicated spec block |
| 6 | `AgentSection` | — | no dedicated spec block |
| 7 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Search · Toggle menu

### `Hero`
*anchors only* — Search for your home · Search

### `FeaturedProperties`
*anchors only* — Featured Properties · Suspendisse dictum enim sit amet libero malesuada feugiat. · For Sale · Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.

### `CallToAction`
*anchors only* — Are you looking for a place to rent? · Suspendisse dictum enim sit amet libero malesuada feugiat. · Search

### `Testimonials`
*anchors only* — Client testimonials · Suspendisse dictum enim sit amet libero malesuada feugiat.

### `AgentSection`
*anchors only* — Jeremy Scott · Realtor

### `Footer`
*anchors only* — Subscribe · About Us · Useful Links · Newsletter · Stay updated with our latest listings and news. · Contact

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
- **Provenance ban.** No file under `apps/sundale/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sundale/public/CNAME` = `sundale.free.componentdock.com`
  and the package `homepage` = `https://sundale.free.componentdock.com`.
