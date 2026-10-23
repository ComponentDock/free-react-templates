# Feature — Design Notes

Reference: **Article** — `https://colorlib.com/wp/template/article/`  
Live preview: `https://preview.colorlib.com/theme/article/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/article-free-template.jpg  
Shipped: https://feature.free.componentdock.com

Feature is a single-page personal / editorial blog template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Fira Sans**, **Grand Hotel**, **Lora**, **Open Sans**

## Design tokens (`apps/feature/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-400` | `#f75b26` | brand 400 |
| `--color-brand-500` | `#f6490d` | brand 500 |
| `--color-brand-600` | `#dd3f08` | brand 600 |
| `--color-gold-400` | `#f7af1d` | gold 400 |
| `--color-ink-body` | `#333333` | ink body |
| `--color-ink-heading` | `#4d4d4d` | ink heading |
| `--color-ink-soft` | `rgba(0, 0, 0, 0.7)` | ink soft |
| `--color-meta-500` | `#808080` | meta 500 |
| `--color-card-100` | `#fafafa` | card 100 |
| `--color-footer-100` | `#f6f6f6` | footer 100 |
| `--color-line-300` | `#e6e6e6` | line 300 |
| `--color-line-dash` | `#d9d9d9` | line dash |
| `--color-line-page` | `#b3b3b3` | line page |
| `--font-display` | `'Grand Hotel', cursive` | font display |
| `--font-serif` | `'Lora', ui-serif, Georgia, serif` | font serif |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-numeral` | `'Fira Sans', ui-sans-serif, system-ui, sans-serif` | font numeral |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `BlogList` | Blog entries | see fidelity note below |
| 4 | `Pagination` | Pagination | see fidelity note below |
| 5 | `Sidebar` | Sidebar | see fidelity note below |
| 6 | `InstagramStrip` | Instagram strip | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |
| 8 | `BackToTop` | Back-to-top | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navbar with the script logo and the uppercase menu.

### `HeroSlider`
The system SHALL render a full-width hero slider with four slides, each with a numbered text block.

### `BlogList`
The system SHALL render four blog entries in the left content column, each with a `#fafafa` card (category row, title, image, share rail, meta row, article body and Continue Reading link).

### `Pagination`
The system SHALL render a square-edge pagination bar below the blog list.

### `Sidebar`
The system SHALL render the right widget sidebar (30% width, 100% on mobile) with search, About Me, Recent Post, Categories, Video Post, Tags, Gallery, Blockquote, Paragraph and Subscribe blocks.

### `InstagramStrip`
The system SHALL render an Instagram strip with eight square tiles above the footer.

### `Footer`
The system SHALL render a light-grey three-column footer with a copyright bar.

### `BackToTop`
The system SHALL provide a back-to-top button.

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
- **Provenance ban.** No file under `apps/feature/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/feature/public/CNAME` = `feature.free.componentdock.com`
  and the package `homepage` = `https://feature.free.componentdock.com`.
