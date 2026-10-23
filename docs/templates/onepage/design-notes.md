# Onepage — Design Notes

Reference: **One Page Wordpress Themes** — `https://colorlib.com/wp/template/one-page-wordpress-themes/`  
Live preview: `https://preview.colorlib.com/theme/one-page-wordpress-themes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/one-page-wordpress-themes-2.jpg  
Shipped: https://onepage.free.componentdock.com

OnePage is a single-page app landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "One Page Wordpress Themes" entry in TEMPLATES.md (App Landing Page category), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700;800**

## Design tokens (`apps/onepage/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef2ff` | primary 50 |
| `--color-primary-100` | `#e0e7ff` | primary 100 |
| `--color-primary-200` | `#c7d2fe` | primary 200 |
| `--color-primary-300` | `#a5b4fc` | primary 300 |
| `--color-primary-400` | `#818cf8` | primary 400 |
| `--color-primary-500` | `#4f46e5` | primary 500 |
| `--color-primary-600` | `#4338ca` | primary 600 |
| `--color-primary-700` | `#3730a3` | primary 700 |
| `--color-primary-800` | `#312e81` | primary 800 |
| `--color-primary-900` | `#1e1b4b` | primary 900 |
| `--color-ink` | `#1f2937` | ink |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins (display + body) via Google Fonts <link> in index.html. |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

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
The system SHALL render a top navigation bar with the site name "OnePage", anchor links to the page's sections, and a dark-mode toggle button.

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
- **Provenance ban.** No file under `apps/onepage/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/onepage/public/CNAME` = `onepage.free.componentdock.com`
  and the package `homepage` = `https://onepage.free.componentdock.com`.
