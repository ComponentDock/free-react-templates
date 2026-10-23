# Cabinet — Design Notes

Reference: **Furn** — `https://colorlib.com/wp/template/furn/`  
Live preview: `https://preview.colorlib.com/theme/furn/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/furn-free-template.jpg  
Shipped: https://cabinet.free.componentdock.com

Cabinet is a premium furniture e-commerce landing page featuring a clean, minimal design with warm earth tones. The template showcases products in a tabbed interface, highlights the brand's manufacturing story, and includes a newsletter signup and structured footer with a Component Dock link.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**

## Design tokens (`apps/cabinet/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fd8f5f` | brand |
| `--color-brand-dark` | `#e57a4a` | brand dark |
| `--color-navy` | `#1f2b7b` | Navy — dark blue headings / announcement bar (#1f2b7b). |
| `--color-navy-dark` | `#16205a` | navy dark |
| `--color-warm` | `#f2e1d9` | Warm — warm section accent background (#f2e1d9). |
| `--color-ink` | `#2a2a2a` | Body text color. |
| `--color-border` | `#ececec` | Border color. |
| `--color-swatch-forest` | `#2f5d50` | Product swatch colors. |
| `--color-swatch-stone` | `#c9c3b8` | swatch stone |
| `--color-swatch-tan` | `#b07a4e` | swatch tan |
| `--color-swatch-oak` | `#c8a06a` | swatch oak |
| `--color-swatch-cream` | `#efe6d8` | swatch cream |
| `--color-swatch-charcoal` | `#3a3a3c` | swatch charcoal |
| `--color-swatch-walnut` | `#6b4a2f` | swatch walnut |
| `--color-swatch-brass` | `#c9a227` | swatch brass |
| `--color-swatch-linen` | `#e6ddd0` | swatch linen |
| `--color-swatch-slate` | `#5a6472` | swatch slate |
| `--color-primary-50` | `#fff5ed` | primary 50 |
| `--color-primary-100` | `#ffe8d5` | primary 100 |
| `--color-primary-200` | `#ffd1aa` | primary 200 |
| `--color-primary-300` | `#ffb374` | primary 300 |
| `--color-primary-400` | `#fd8f5f` | primary 400 |
| `--color-primary-500` | `#fd8f5f` | primary 500 |
| `--color-primary-600` | `#e57a4a` | primary 600 |
| `--color-primary-700` | `#c4643a` | primary 700 |
| `--color-primary-800` | `#a15030` | primary 800 |
| `--color-primary-900` | `#7e3f26` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Fonts: Poppins (Google Font). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `AnnouncementBar` | Announcement bar with rotating messages | see fidelity note below |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `PopularProducts` | Recommended products | see fidelity note below |
| 5 | `AboutSection` | About section | see fidelity note below |
| 6 | `RecommendedProducts` | — | no dedicated spec block |
| 7 | `Newsletter` | Newsletter signup | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `AnnouncementBar`
The page SHALL display a full-width announcement bar with rotating promotional messages at the top of the page.

### `Navbar`
*anchors only* — Main navigation · Mobile navigation · Cabinet

### `Hero`
The page SHALL display a full-width hero section with a heading, subtitle, and call-to-action button.

### `PopularProducts`
The page SHALL display a grid of recommended products.

### `AboutSection`
The page SHALL display an image-with-text section describing the brand's manufacturing story.

### `RecommendedProducts`
*anchors only* — Products you may like · Hand-picked pieces that sit well with what you have been looking at. · View all

### `Newsletter`
The page SHALL display a newsletter signup form with email input and subscribe button.

### `Footer`
The page SHALL display a footer with navigation links and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/cabinet/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cabinet/public/CNAME` = `cabinet.free.componentdock.com`
  and the package `homepage` = `https://cabinet.free.componentdock.com`.
