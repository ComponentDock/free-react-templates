# Scholarly — Design Notes

Reference: **Education Wordpress Themes** — `https://colorlib.com/wp/template/education-wordpress-themes/`  
Live preview: `https://preview.colorlib.com/theme/education-wordpress-themes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/education-website-designs.jpg  
Shipped: https://scholarly.free.componentdock.com

Scholarly is a single-page education/university landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;700;900**, **Roboto**

## Design tokens (`apps/scholarly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e8f5e9` | primary 50 |
| `--color-primary-100` | `#c8e6c9` | primary 100 |
| `--color-primary-200` | `#a5d6a7` | primary 200 |
| `--color-primary-300` | `#81c784` | primary 300 |
| `--color-primary-400` | `#4caf50` | primary 400 |
| `--color-primary-500` | `#43a047` | primary 500 |
| `--color-primary-600` | `#388e3c` | primary 600 |
| `--color-primary-700` | `#2e7d32` | primary 700 |
| `--color-primary-800` | `#1b5e20` | primary 800 |
| `--color-primary-900` | `#0d3311` | primary 900 |
| `--color-navy-800` | `#1a1a2e` | Dark navy backgrounds. |
| `--color-navy-900` | `#12121f` | navy 900 |
| `--color-smoke` | `#666666` | Muted body text. |
| `--color-ink` | `#222222` | ink |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar | see fidelity note below |
| 2 | `Navbar` | Navigation bar | see fidelity note below |
| 3 | `Hero` | Hero banner | see fidelity note below |
| 4 | `FeatureBar` | Feature bar | see fidelity note below |
| 5 | `Admission` | Admission section | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The system SHALL render a top utility bar with contact information on the left and utility links + a CTA button on the right, on a dark background.

### `Navbar`
The system SHALL render a white navigation bar with a university logo/crest, site name, navigation links, and a search icon.

### `Hero`
The system SHALL render a full-width hero section with a background image, headline text, subtext, and a call-to-action button.

### `FeatureBar`
The system SHALL render a horizontal feature bar with 4 icon+label items on a white background.

### `Admission`
The system SHALL render a split-layout admission section with an image on the left and informational content on the right.

### `Footer`
The system SHALL render a footer with university information and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/scholarly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/scholarly/public/CNAME` = `scholarly.free.componentdock.com`
  and the package `homepage` = `https://scholarly.free.componentdock.com`.
