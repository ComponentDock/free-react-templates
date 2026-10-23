# Typeface — Design Notes

Reference: **Wordify** — `https://colorlib.com/wp/template/wordify/`  
Live preview: `https://preview.colorlib.com/theme/wordify/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/wordify-free-template.jpg  
Shipped: https://typeface.free.componentdock.com

Typeface is a minimal blog/magazine home-page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Wordify" template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inconsolata**, **Inconsolata:wght@300;400**, **Josefin Sans**

## Design tokens (`apps/typeface/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#6610f2` | brand |
| `--color-brand-hover` | `#8540f5` | brand hover |
| `--color-brand-dark` | `#510bc4` | brand dark |
| `--color-brand-darker` | `#3d0894` | brand darker |
| `--color-footer` | `#262626` | footer |
| `--color-card-border` | `#efefef` | card border |
| `--color-line` | `#e6e6e6` | line |
| `--color-input` | `#f7f7f7` | input |
| `--color-ink` | `#000` | ink |
| `--color-body` | `#6c757d` | body |
| `--color-muted` | `#b3b3b3` | muted |
| `--color-page` | `#ccc` | page |
| `--font-heading` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-body` | `'Inconsolata', 'SFMono-Regular', Menlo, Monaco, Consolas, monospace` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top utility bar | see fidelity note below |
| 2 | `Logo` | Site logo | see fidelity note below |
| 3 | `Navbar` | Navigation bar | see fidelity note below |
| 4 | `HeroSlider` | Hero slider | see fidelity note below |
| 5 | `BlogGrid` | Latest Posts grid | see fidelity note below |
| 6 | `Sidebar` | Sidebar | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The system SHALL render a purple top bar with social icons on the left and a search field on the right.

### `Logo`
The system SHALL render the brand as a huge centered logo below the top bar.

### `Navbar`
The system SHALL render an uppercase nav with plain links and two dropdowns.

### `HeroSlider`
The system SHALL render a full-width hero carousel of featured posts.

### `BlogGrid`
The system SHALL render the "Latest Posts" section with a two-column card grid and pagination.

### `Sidebar`
The system SHALL render a right sidebar with search, author bio, popular posts, categories, and tags.

### `Footer`
The system SHALL render a dark footer with about, latest posts, link columns, social links, and a copyright bar.

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
- **Provenance ban.** No file under `apps/typeface/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/typeface/public/CNAME` = `typeface.free.componentdock.com`
  and the package `homepage` = `https://typeface.free.componentdock.com`.
