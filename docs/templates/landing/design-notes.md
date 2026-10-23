# Landing — Design Notes

Reference: **Landing Page Wordpress Themes** — `https://colorlib.com/wp/template/landing-page-wordpress-themes/`  
Live preview: `https://preview.colorlib.com/theme/landing-page-wordpress-themes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/landing-page-themes.jpg  
Shipped: https://landing.free.componentdock.com

Landing Page is a single-page app landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Landing Page Wordpress Themes" entry in TEMPLATES.md (App Landing Page category), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/landing/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f7f3fc` | primary 50 |
| `--color-primary-100` | `#efe7f9` | primary 100 |
| `--color-primary-200` | `#dfd0f2` | primary 200 |
| `--color-primary-300` | `#c3a8e8` | primary 300 |
| `--color-primary-400` | `#a37cdd` | primary 400 |
| `--color-primary-500` | `#7c44d6` | primary 500 |
| `--color-primary-600` | `#6d22bd` | primary 600 |
| `--color-primary-700` | `#5a1b9c` | primary 700 |
| `--color-primary-800` | `#4a1680` | primary 800 |
| `--color-primary-900` | `#3d1266` | primary 900 |
| `--color-ink` | `#1d1d1d` | ink |
| `--color-paper` | `#f4f4f4` | paper |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `About` | About split section | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Landing", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, and a call-to-action button.

### `Features`
The system SHALL render a features section with a heading and at least three feature cards, each with an icon, a title, and a blurb.

### `About`
The system SHALL render an about split section with a heading, a blurb, and a call-to-action button.

### `Footer`
The system SHALL render a footer with link columns, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/landing/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/landing/public/CNAME` = `landing.free.componentdock.com`
  and the package `homepage` = `https://landing.free.componentdock.com`.
