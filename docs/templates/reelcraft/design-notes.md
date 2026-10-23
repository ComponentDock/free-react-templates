# Reelcraft — Design Notes

Reference: **Videograph** — `https://colorlib.com/wp/template/videograph/`  
Live preview: `https://preview.colorlib.com/theme/videograph/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/videograph-free-template.jpg  
Shipped: https://reelcraft.free.componentdock.com

A dark, cinematic video production / videographer portfolio site. Recreation of the ColorLib **Videograph** template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;500;600;700**, **Play**

## Design tokens (`apps/reelcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#00bfe7` | brand |
| `--color-brand-dark` | `#00a5ca` | brand dark |
| `--color-surface` | `#100028` | Dark surfaces. |
| `--color-surface-dark` | `#0a0119` | surface dark |
| `--color-ink` | `#ffffff` | Ink — body text on light backgrounds. |
| `--color-ink-dark` | `#e0e0e0` | ink dark |
| `--color-paper` | `#1a1a2e` | Paper — light section background. |
| `--color-mist` | `#999999` | Mist — muted body text. |
| `--color-primary-50` | `#e6f9fd` | primary 50 |
| `--color-primary-100` | `#b3f0f8` | primary 100 |
| `--color-primary-200` | `#80e7f3` | primary 200 |
| `--color-primary-300` | `#4ddee9` | primary 300 |
| `--color-primary-400` | `#1ad5e0` | primary 400 |
| `--color-primary-500` | `#00bfe7` | primary 500 |
| `--color-primary-600` | `#00a5ca` | primary 600 |
| `--color-primary-700` | `#008bad` | primary 700 |
| `--color-primary-800` | `#007190` | primary 800 |
| `--color-primary-900` | `#005773` | primary 900 |
| `--font-sans` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Play" (headings/buttons) + "Josefin Sans" (body). |
| `--font-display` | `'Play', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero section with slider | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `WorkGallery` | Work gallery | see fidelity note below |
| 5 | `Counter` | Counter stats | see fidelity note below |
| 6 | `Team` | Team section | see fidelity note below |
| 7 | `Blog` | Blog section | see fidelity note below |
| 8 | `CallToAction` | Call to action | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary · Mobile · Reel · Craft · Get a Quote

### `Hero`
The page SHALL display a full-width hero section with background image and text overlay.

### `Services`
The page SHALL display a services section with a title column and a 2x2 grid of service items.

### `WorkGallery`
The page SHALL display a masonry-style portfolio gallery with hover effects.

### `Counter`
The page SHALL display animated counter statistics.

### `Team`
The page SHALL display team member cards with hover reveals.

### `Blog`
The page SHALL display blog post cards.

### `CallToAction`
The page SHALL display a CTA section with dark background and heading.

### `Footer`
The page SHALL display a multi-column dark footer with Component Dock link.

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
- **Provenance ban.** No file under `apps/reelcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/reelcraft/public/CNAME` = `reelcraft.free.componentdock.com`
  and the package `homepage` = `https://reelcraft.free.componentdock.com`.
