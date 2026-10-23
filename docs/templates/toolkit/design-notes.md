# Toolkit — Design Notes

Reference: **Tools Ui Kit** — `https://colorlib.com/wp/template/tools-ui-kit/`  
Live preview: `https://preview.colorlib.com/theme/tools-ui-kit/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/tools-free-template.jpg  
Shipped: https://toolkit.free.componentdock.com

A UI kit template with hero, navbar, basic elements showcase and footer sections. Recreation of ColorLib **Tools Ui Kit** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter:wght@300;400;500;600;700**

## Design tokens (`apps/toolkit/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef2ff` | primary 50 |
| `--color-primary-100` | `#dde8fc` | primary 100 |
| `--color-primary-200` | `#bdd4fa` | primary 200 |
| `--color-primary-300` | `#8bb5f5` | primary 300 |
| `--color-primary-400` | `#5b86e5` | primary 400 |
| `--color-primary-500` | `#3d6fd1` | primary 500 |
| `--color-primary-600` | `#2d54b0` | primary 600 |
| `--color-primary-700` | `#24438e` | primary 700 |
| `--color-primary-800` | `#1e3775` | primary 800 |
| `--color-primary-900` | `#1a2f61` | primary 900 |
| `--color-primary-950` | `#111d3d` | primary 950 |
| `--color-accent-400` | `#36d1dc` | accent 400 |
| `--color-accent-500` | `#20b8c4` | accent 500 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays navigation and social links | see fidelity note below |
| 2 | `Hero` | Hero section displays title and CTA | see fidelity note below |
| 3 | `BasicElements` | Basic Elements section showcases UI components | see fidelity note below |
| 4 | `Footer` | Footer displays copyright and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see a transparent navbar with the logo "Tools Kit.", a COMPONENTS dropdown, a DOWNLOAD link, and social icons (Facebook, Twitter, Instagram).

### `Hero`
Users SHALL see a hero section with a blue gradient background, the heading "Tools UI Kit.", a subtitle, and a "DOWNLOAD TOOLS" button.

### `BasicElements`
Users SHALL see a "Basic Elements" section with button variants, form elements, cards, and alerts.

### `Footer`
Users SHALL see a footer with copyright text and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/toolkit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/toolkit/public/CNAME` = `toolkit.free.componentdock.com`
  and the package `homepage` = `https://toolkit.free.componentdock.com`.
