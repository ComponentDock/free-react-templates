# Tidbit — Design Notes

Reference: **Miniblog** — `https://colorlib.com/wp/template/miniblog/`  
Live preview: `https://preview.colorlib.com/theme/miniblog/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/miniblog-free-template.jpg  
Shipped: https://tidbit.free.componentdock.com

Tidbit is a single-page blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Miniblog" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;700**

## Design tokens (`apps/tidbit/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#2f89fc` | accent |
| `--color-ink` | `#000000` | ink |
| `--color-body` | `#808080` | body |
| `--color-meta` | `#b3b3b3` | meta |
| `--color-soft` | `#f8f9fa` | soft |
| `--color-footer` | `#333333` | footer |
| `--color-primary` | `#2f89fc` | primary |
| `--color-primary-50` | `#eaf4ff` | primary 50 |
| `--color-primary-100` | `#d0e7ff` | primary 100 |
| `--color-primary-200` | `#a6d2ff` | primary 200 |
| `--color-primary-300` | `#74b8ff` | primary 300 |
| `--color-primary-400` | `#4aa2ff` | primary 400 |
| `--color-primary-500` | `#2f89fc` | primary 500 |
| `--color-primary-600` | `#2f89fc` | primary 600 |
| `--color-primary-700` | `#046df4` | primary 700 |
| `--color-primary-800` | `#0a58c8` | primary 800 |
| `--color-primary-900` | `#0d4a9e` | primary 900 |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero featured grid | see fidelity note below |
| 3 | `RecentPosts` | Recent Posts grid | see fidelity note below |
| 4 | `RetroSection` | Retro layout section | see fidelity note below |
| 5 | `Subscribe` | Newsletter subscribe | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main · search · dialog · Menu · Mobile

### `Hero`
The system SHALL render an asymmetric 3-column hero grid of featured-post cards, each with a background image, a dark bottom gradient, a white headline, and a date; the middle card SHALL include category tags.

### `RecentPosts`
The system SHALL render a "Recent Posts" heading followed by a 3×3 grid of post cards, each with a rounded image, a category pill, a headline, post metadata, an excerpt, and a "Read More" link.

### `RetroSection`
The system SHALL render a light-background asymmetric "retro" section with featured-post cards (image, category tag, headline, date).

### `Subscribe`
The system SHALL render a centered subscribe section with a heading, a description, an email input, and a square subscribe button.

### `Footer`
The system SHALL render a dark footer with an About Us column, two link columns, social icons, and a copyright line.

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
- **Provenance ban.** No file under `apps/tidbit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tidbit/public/CNAME` = `tidbit.free.componentdock.com`
  and the package `homepage` = `https://tidbit.free.componentdock.com`.
