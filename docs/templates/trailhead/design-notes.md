# Trailhead — Design Notes

Reference: **Hikers** — `https://colorlib.com/wp/template/hikers/`  
Live preview: `https://preview.colorlib.com/theme/hikers/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hikers-free-template.jpg  
Shipped: https://trailhead.free.componentdock.com

Trailhead is a single-page blog/magazine template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Hikers" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;700;900**

## Design tokens (`apps/trailhead/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#2f89fc` | primary |
| `--color-primary-50` | `#eaf4ff` | primary scale so shared Button/ButtonLink (bg-primary-600) render brand blue |
| `--color-primary-100` | `#d4e8fe` | primary 100 |
| `--color-primary-200` | `#a9d2fd` | primary 200 |
| `--color-primary-300` | `#7bb8fb` | primary 300 |
| `--color-primary-400` | `#51a1fa` | primary 400 |
| `--color-primary-500` | `#2f89fc` | primary 500 |
| `--color-primary-600` | `#1f76e8` | primary 600 |
| `--color-primary-700` | `#0d5fc9` | primary 700 |
| `--color-primary-800` | `#0b4c9e` | primary 800 |
| `--color-primary-900` | `#093a78` | primary 900 |
| `--color-ink` | `#000000` | ink |
| `--color-body` | `#808080` | body |
| `--color-entry` | `#666666` | entry |
| `--color-meta` | `#b3b3b3` | meta |
| `--color-soft` | `#edf0f5` | soft |
| `--color-faint` | `#d9d9d9` | faint |
| `--color-fainter` | `#bfbfbf` | fainter |
| `--color-nature` | `#28a745` | nature |
| `--color-travel` | `#dc3545` | travel |
| `--color-lifestyle` | `#ffc107` | lifestyle |
| `--color-sports` | `#007bff` | sports |
| `--color-footer` | `#333333` | footer |
| `--color-footer-link` | `#999999` | footer link |
| `--color-footer-text` | `#737373` | footer text |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | Muli (Google Fonts via index.html) — the original's only font. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header and navigation | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `FeaturedStrip` | Featured strip | see fidelity note below |
| 4 | `RetroLayout` | Retro layout | see fidelity note below |
| 5 | `PopularPosts` | Popular Posts | see fidelity note below |
| 6 | `CategoryColumns` | Category columns | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a white header with a bold logo, social icon circles, a centered navigation bar with a dropdown, and a mobile menu toggle.

### `HeroSlider`
The system SHALL render a full-width hero carousel with overlaid post content and circular prev/next controls.

### `FeaturedStrip`
The system SHALL render a bordered strip of three small featured post links.

### `RetroLayout`
The system SHALL render a photo-card section with one tall card, one medium card, and two small cards, each with overlaid text.

### `PopularPosts`
The system SHALL render a "Popular Posts" section with one large featured post and three compact post rows.

### `CategoryColumns`
The system SHALL render four category columns (Sports, Travel, Lifestyle, Nature), each with a heading, a View All button, one large post, and three small posts.

### `Footer`
The system SHALL render a dark footer with About Us text, Quick Menu links, a Subscribe form, social links, and a copyright bar.

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
- **Provenance ban.** No file under `apps/trailhead/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/trailhead/public/CNAME` = `trailhead.free.componentdock.com`
  and the package `homepage` = `https://trailhead.free.componentdock.com`.
