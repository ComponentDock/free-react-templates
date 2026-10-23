# Lantern — Design Notes

Reference: **Quitelight** — `https://colorlib.com/wp/template/quitelight/`  
Live preview: `https://preview.colorlib.com/theme/quitelight/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/quitelight-free-template.jpg  
Shipped: https://lantern.free.componentdock.com

Lantern is a single-page news/blog website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Quitelight" starter blog template (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/lantern/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f9b500` | brand |
| `--color-ink` | `#111111` | ink |
| `--color-coal` | `#191919` | coal |
| `--color-mist` | `#f8f8f8` | mist |
| `--color-mist-2` | `#f2f2f2` | mist 2 |
| `--color-ash` | `#aaaaaa` | ash |
| `--color-grey` | `#cccccc` | grey |
| `--color-lt-black` | `#888888` | lt black |
| `--color-tag-red` | `#e14a3d` | tag red |
| `--color-tag-blue` | `#58adee` | tag blue |
| `--color-tag-green` | `#36d98a` | tag green |
| `--color-tag-indigo` | `#365b99` | tag indigo |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Page header | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `ArticleGrid` | Article grid | see fidelity note below |
| 4 | `Sidebar` | Sidebar | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render an overlay page header with the brand, a search control, a hamburger menu, and a navigation bar with one dropdown sub-menu.

### `Hero`
The system SHALL render a full-height hero with a featured article on the left and a HOT NEWS carousel on the right.

### `ArticleGrid`
The system SHALL render a light-grey section with a grid of article cards, trending and video feature blocks, and a LOAD MORE control.

### `Sidebar`
The system SHALL render a sidebar with a top-stories list, a newest-videos list, and two ad placeholders.

### `Footer`
The system SHALL render a dark footer with a newsletter subscribe form and a bottom bar.

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
- **Provenance ban.** No file under `apps/lantern/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lantern/public/CNAME` = `lantern.free.componentdock.com`
  and the package `homepage` = `https://lantern.free.componentdock.com`.
