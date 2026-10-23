# Gloss — Design Notes

Reference: **Makeupartist** — `https://colorlib.com/wp/template/makeupartist/`  
Live preview: `https://preview.colorlib.com/theme/makeupartist/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/makeupartist-colorlib-template.jpg  
Shipped: https://gloss.free.componentdock.com

Gloss is a single-page makeup-artist portfolio template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Makeup Artist" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Spartan**, **Spartan:wght@300;400;500;600;700**

## Design tokens (`apps/gloss/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e65783` | brand |
| `--color-brand-deep` | `#cf3f6d` | brand deep |
| `--color-brand-soft` | `#fceef3` | brand soft |
| `--color-maroon` | `#200204` | maroon |
| `--color-ink` | `#111111` | ink |
| `--color-muted` | `#888888` | muted |
| `--color-cream` | `#f8f2f2` | cream |
| `--color-primary-50` | `#fdf0f4` | primary 50 |
| `--color-primary-100` | `#fbe0e9` | primary 100 |
| `--color-primary-200` | `#f8c2d4` | primary 200 |
| `--color-primary-300` | `#f294b2` | primary 300 |
| `--color-primary-400` | `#ec5f8f` | primary 400 |
| `--color-primary-500` | `#e65783` | primary 500 |
| `--color-primary-600` | `#d2386a` | primary 600 |
| `--color-primary-700` | `#b32657` | primary 700 |
| `--color-primary-800` | `#93214a` | primary 800 |
| `--color-primary-900` | `#7a1f40` | primary 900 |
| `--font-sans` | `'Spartan', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Welcome hero | see fidelity note below |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Services` | — | no dedicated spec block |
| 5 | `Projects` | Latest projects | see fidelity note below |
| 6 | `Blog` | — | no dedicated spec block |
| 7 | `Shop` | — | no dedicated spec block |
| 8 | `Cta` | Discount CTA | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Gloss", a "Home" link, section links, social icons, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero section with a headline.

### `About`
*anchors only* — Best makeup services · Professional makeup

### `Services`
*anchors only* — Client love · What clients say about my work

### `Projects`
The system SHALL render a "Latest projects" gallery with at least six photo tiles.

### `Blog`
*anchors only* — From the blog · Makeup artist tips

### `Shop`
*anchors only* — Shop the collection · Beauty products · Palettes · View all products

### `Cta`
The system SHALL render a discount CTA band with a booking form.

### `Footer`
The system SHALL render a footer with contact details and a social handle.

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
- **Provenance ban.** No file under `apps/gloss/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gloss/public/CNAME` = `gloss.free.componentdock.com`
  and the package `homepage` = `https://gloss.free.componentdock.com`.
