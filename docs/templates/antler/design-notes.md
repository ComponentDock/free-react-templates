# Antler — Design Notes

Reference: **Moose** — `https://colorlib.com/wp/template/moose/`  
Live preview: `https://preview.colorlib.com/theme/moose/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/moose-colorlib-template.jpg  
Shipped: https://antler.free.componentdock.com

Antler is a personal-blog website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Moose" website template design (source: https://colorlib.com/wp/template/moose/), built under a DIFFERENT name (Antler — a moose's antler, evoking the source's animal namesake, per the monorepo naming m…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@200;300;400;500;600;700;800;900**

## Design tokens (`apps/antler/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#588da8` | accent |
| `--color-ink` | `#313b44` | ink |
| `--color-soft` | `#f8f9fa` | soft |
| `--color-footer` | `#141b25` | footer |
| `--color-primary` | `#313b44` | primary |
| `--color-primary-50` | `#eef1f3` | primary 50 |
| `--color-primary-100` | `#d8dee2` | primary 100 |
| `--color-primary-200` | `#b2bdc5` | primary 200 |
| `--color-primary-300` | `#8b9aa5` | primary 300 |
| `--color-primary-400` | `#647886` | primary 400 |
| `--color-primary-500` | `#4a5a66` | primary 500 |
| `--color-primary-600` | `#313b44` | primary 600 |
| `--color-primary-700` | `#262d34` | primary 700 |
| `--color-primary-800` | `#1c2126` | primary 800 |
| `--color-primary-900` | `#121619` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero with giant wordmark and author card | see fidelity note below |
| 3 | `BlogList` | Alternating blog list | see fidelity note below |
| 4 | `Newsletter` | Newsletter band | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a navbar with the site wordmark on the left and Home / Articles / About / Contact links on the right.

### `Hero`
The system SHALL render a white hero with a huge outlined-part wordmark, an intro headline + paragraph, and a small author card.

### `BlogList`
The system SHALL render six full-width blog rows alternating between a white variant (image left) and a dark `#313b44` variant (image right).

### `Newsletter`
The system SHALL render a light-gray newsletter band with a heading and a subscribe form (email input + Subscribe button fused into one rounded unit).

### `Footer`
The system SHALL render a dark 3-column footer (about + socials, Info links, contact block) and a black copyright bar.

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
- **Provenance ban.** No file under `apps/antler/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/antler/public/CNAME` = `antler.free.componentdock.com`
  and the package `homepage` = `https://antler.free.componentdock.com`.
