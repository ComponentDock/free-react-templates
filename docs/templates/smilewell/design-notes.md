# Smilewell — Design Notes

Reference: **Toothsy** — `https://colorlib.com/wp/template/toothsy/`  
Live preview: `https://preview.colorlib.com/theme/toothsy/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/toothsy-free-template.jpg  
Shipped: https://smilewell.free.componentdock.com

Smilewell is a dental clinic landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Toothsy" dental website template, built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito**, **Nunito:wght@300;400;600;700;800**

## Design tokens (`apps/smilewell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eafafa` | primary 50 |
| `--color-primary-100` | `#c5f5f5` | primary 100 |
| `--color-primary-200` | `#8aeaea` | primary 200 |
| `--color-primary-300` | `#51eaea` | primary 300 |
| `--color-primary-400` | `#3cd8d8` | primary 400 |
| `--color-primary-500` | `#28c0c0` | primary 500 |
| `--color-primary-600` | `#1d9e9e` | primary 600 |
| `--color-primary-700` | `#157a7a` | primary 700 |
| `--color-primary-800` | `#0e5858` | primary 800 |
| `--color-primary-900` | `#083838` | primary 900 |
| `--color-brand` | `#51eaea` | Brand cyan for direct reference. |
| `--color-secondary` | `#499bea` | Secondary blue. |
| `--color-gradient-start` | `#51eaea` | Gradient start/end. |
| `--color-gradient-end` | `#499bea` | gradient end |
| `--color-card` | `#f4f5f9` | Card/row backgrounds. |
| `--color-smoke` | `#737373` | Muted copy. |
| `--color-mist` | `#939393` | mist |
| `--color-ink` | `#212529` | Dark text. |
| `--color-footer` | `#333333` | Footer dark. |
| `--font-sans` | `'Nunito', ui-sans-serif, system-ui, sans-serif` | Nunito (headings + body) via Google Fonts — matching the ColorLib font. |
| `--font-display` | `'Nunito', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero / Welcome Section | see fidelity note below |
| 3 | `Services` | Services Section | see fidelity note below |
| 4 | `AboutStats` | About / Stats Section | see fidelity note below |
| 5 | `Team` | Team Section | see fidelity note below |
| 6 | `Testimonials` | Testimonials Section | see fidelity note below |
| 7 | `Blog` | Blog Section | see fidelity note below |
| 8 | `Contact` | Contact Section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Smile

### `Hero`
Users SHALL see a full-width welcome section with split layout: text left, large dental image right.

### `Services`
Users SHALL see a 6-card service grid with flaticon icons on a white background.

### `AboutStats`
Users SHALL see a gradient-background section with video placeholder and 4 stat counters.

### `Team`
Users SHALL see 3 team member cards with photos, names, roles, and social icons.

### `Testimonials`
Users SHALL see a testimonials carousel with client quotes, avatars, and names.

### `Blog`
Users SHALL see a blog layout with one featured post and 4 compact post entries.

### `Contact`
Users SHALL see a contact form with fields and a sidebar text block.

### `Footer`
Users SHALL see a dark footer with about text, features links, newsletter, social icons, and Component Dock link.

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
- **Provenance ban.** No file under `apps/smilewell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/smilewell/public/CNAME` = `smilewell.free.componentdock.com`
  and the package `homepage` = `https://smilewell.free.componentdock.com`.
