# Spine — Design Notes

Reference: **Abcbook** — `https://colorlib.com/wp/template/abcbook/`  
Live preview: `https://preview.colorlib.com/theme/abcbook/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/abcbook-free-template.jpg  
Shipped: https://spine.free.componentdock.com

Spine is a single-page book-shop landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/spine/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff1616` | brand |
| `--color-brand-dark` | `#d60f0f` | brand dark |
| `--color-ink` | `#1a1a1a` | Ink — headings (#1a1a1a from the original). |
| `--color-muted` | `#9498a7` | muted |
| `--color-secondary` | `#454e6d` | Secondary — #454E6D (footer links, inactive tab text). |
| `--color-darkblue` | `#232f55` | Dark blue — #232F55 (footer h4, subscribe input text). |
| `--color-edge` | `#eee1e0` | Edge — #EEE1E0 (card borders, underline). |
| `--color-section` | `#fef4f4` | section |
| `--color-gold` | `#ff5700` | Gold — #FF5700 (rating stars). |
| `--color-primary-50` | `#ffecec` | primary 50 |
| `--color-primary-100` | `#ffd6d6` | primary 100 |
| `--color-primary-200` | `#ffadad` | primary 200 |
| `--color-primary-300` | `#ff8585` | primary 300 |
| `--color-primary-400` | `#ff4d4d` | primary 400 |
| `--color-primary-500` | `#ff1616` | primary 500 |
| `--color-primary-600` | `#ff1616` | primary 600 |
| `--color-primary-700` | `#d60f0f` | primary 700 |
| `--color-primary-800` | `#ad0c0c` | primary 800 |
| `--color-primary-900` | `#850a0a` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Original fonts: Playfair Display (headings) + Roboto (body). |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `BestSelling` | Best Selling Books Ever | see fidelity note below |
| 4 | `FeaturedWeek` | Featured This Week | see fidelity note below |
| 5 | `LatestPublished` | Latest Published items | see fidelity note below |
| 6 | `CtaBanners` | CTA banners | see fidelity note below |
| 7 | `Subscribe` | Subscribe newsletter | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render the two-row header: top utility row (logo, search, FAQ / Track Order, cart, Sign in) and the sticky main nav row.

### `HeroSlider`
The system SHALL render the full-width 580px hero slider with three identical slides, each with a dark background image, the pill tag, the serif headline (with the source's `<br>` line break), the red Browse Store button, and white carousel dots.

### `BestSelling`
The system SHALL render the pale-pink best-selling band with a centered serif section title and a horizontally scrollable row of eight book cards with arrow buttons.

### `FeaturedWeek`
The system SHALL render the red split-card featured carousel with the "Featured This Week" title row and a "View All" text link.

### `LatestPublished`
The system SHALL render the tab-filtered book grid: title row, five category tabs, five tab panels of book cards, and a red-outline Browse More button.

### `CtaBanners`
The system SHALL render the two promotional banner cards below the grid.

### `Subscribe`
The system SHALL render the Join Newsletter band: background image, pink band behind the lower half, white serif heading, grey copy, and the pill email form.

### `Footer`
The system SHALL render the four-column pink footer with the mandatory Component Dock credit.

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
- **Provenance ban.** No file under `apps/spine/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/spine/public/CNAME` = `spine.free.componentdock.com`
  and the package `homepage` = `https://spine.free.componentdock.com`.
