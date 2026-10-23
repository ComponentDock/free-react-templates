# Novus — Design Notes

Reference: **03 Comming Soon** — `https://colorlib.com/wp/template/03-comming-soon/`  
Live preview: `https://preview.colorlib.com/theme/03-comming-soon/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-18.jpg  
Shipped: https://novus.free.componentdock.com

Recreation of ColorLib "Coming Soon V18" (https://colorlib.com/wp/template/03-comming-soon/). A centered coming soon page with countdown timer, email subscription form, and social media links on a dark gradient background.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/novus/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-cyan` | `#00d2ff` | Novus brand tokens — dark gradient + cyan accent |
| `--color-brand-cyan-hover` | `#00b8e6` | brand cyan hover |
| `--color-brand-cyan-focus` | `#66e0ff` | brand cyan focus |
| `--color-brand-dark-start` | `#0f0c29` | brand dark start |
| `--color-brand-dark-mid` | `#302b63` | brand dark mid |
| `--color-brand-dark-end` | `#24243e` | brand dark end |
| `--color-input-bg` | `rgba(255, 255, 255, 0.1)` | input bg |
| `--color-input-border` | `rgba(255, 255, 255, 0.2)` | input border |
| `--color-social-facebook` | `#3b5998` | Social brand colors |
| `--color-social-twitter` | `#1da1f2` | social twitter |
| `--color-social-google` | `#dd4b39` | social google |
| `--color-social-instagram` | `#e1306c` | social instagram |
| `--color-social-pinterest` | `#bd081c` | social pinterest |
| `--color-body` | `#ffffff` | Text colors |
| `--color-paragraph` | `rgba(255, 255, 255, 0.7)` | paragraph |
| `--color-muted` | `rgba(255, 255, 255, 0.5)` | muted |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Hero` | Hero section renders with heading and description | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Hero`
Users SHALL see a "We're Coming Soon" heading and descriptive paragraph on page load.

### `Footer`
Users SHALL see a footer link to Component Dock.

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
- **Provenance ban.** No file under `apps/novus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/novus/public/CNAME` = `novus.free.componentdock.com`
  and the package `homepage` = `https://novus.free.componentdock.com`.
