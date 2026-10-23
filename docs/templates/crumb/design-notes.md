# Crumb — Design Notes

Reference: **Foode** — `https://colorlib.com/wp/template/foode/`  
Live preview: `https://preview.colorlib.com/theme/foode/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/foode-free-template.jpg  
Shipped: https://crumb.free.componentdock.com

Crumb is a single-page food-blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Foode" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Dancing Script**, **Merriweather**, **Merriweather:ital,wght@0,300;0,400;1,300;1,400**, **Poppins**

## Design tokens (`apps/crumb/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#e59f80` | primary |
| `--color-primary-50` | `#fdf3ef` | primary scale so shared Button/ButtonLink (bg-primary-600) render terracotta |
| `--color-primary-100` | `#fbe7de` | primary 100 |
| `--color-primary-200` | `#f7cfbe` | primary 200 |
| `--color-primary-300` | `#f0b49c` | primary 300 |
| `--color-primary-400` | `#eaa688` | primary 400 |
| `--color-primary-500` | `#e59f80` | primary 500 |
| `--color-primary-600` | `#d98760` | primary 600 |
| `--color-primary-700` | `#c06e4b` | primary 700 |
| `--color-primary-800` | `#9c5739` | primary 800 |
| `--color-primary-900` | `#7d452e` | primary 900 |
| `--color-ink` | `#191919` | ink |
| `--color-body` | `#595959` | body |
| `--color-muted` | `#a6a6a6` | muted |
| `--color-mist` | `#bbbbbb` | mist |
| `--color-soft` | `#f2f4f5` | soft |
| `--color-chip` | `#ebebeb` | chip |
| `--color-panel` | `#f8f2ef` | panel |
| `--font-serif` | `'Merriweather', ui-serif, Georgia, serif` | font serif |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-script` | `'Dancing Script', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Hero slider | see fidelity note below |
| 2 | `HeroSlider` | — | no dedicated spec block |
| 3 | `FeaturedCarousel` | Featured posts carousel | see fidelity note below |
| 4 | `BlogList` | Blog post list | see fidelity note below |
| 5 | `Sidebar` | Sidebar widgets | see fidelity note below |
| 6 | `InstagramStrip` | Instagram strip | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a full-width hero carousel of blog-post slides.

### `HeroSlider`
*anchors only* — Featured story

### `FeaturedCarousel`
The system SHALL render a "featured posts" carousel with numbered indicators.

### `BlogList`
The system SHALL render the main blog feed with five posts and pagination.

### `Sidebar`
The system SHALL render a sidebar with About, Subscribe & Follow, Latest Posts, Newsletter, and Popular Tags widgets.

### `InstagramStrip`
The system SHALL render an Instagram section with six square photo tiles.

### `Footer`
The system SHALL render a footer with labeled social links and a copyright bar.

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
- **Provenance ban.** No file under `apps/crumb/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/crumb/public/CNAME` = `crumb.free.componentdock.com`
  and the package `homepage` = `https://crumb.free.componentdock.com`.
