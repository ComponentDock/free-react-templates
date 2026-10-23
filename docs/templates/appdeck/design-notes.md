# Appdeck — Design Notes

Reference: **Prantokon** — `https://colorlib.com/wp/template/prantokon/`  
Live preview: `https://preview.colorlib.com/theme/prantokon/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/prantokon-free-template.jpg  
Shipped: https://appdeck.free.componentdock.com

Appdeck is a single-page app-landing **showcase** template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Prantokon" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700;800**

## Design tokens (`apps/appdeck/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e8f4fd` | primary 50 |
| `--color-primary-100` | `#cce8fb` | primary 100 |
| `--color-primary-200` | `#9fd1f7` | primary 200 |
| `--color-primary-300` | `#66b3f1` | primary 300 |
| `--color-primary-400` | `#3399ec` | primary 400 |
| `--color-primary-500` | `#0f7cdd` | primary 500 |
| `--color-primary-600` | `#0d68c0` | primary 600 |
| `--color-primary-700` | `#0b549c` | primary 700 |
| `--color-primary-800` | `#094278` | primary 800 |
| `--color-primary-900` | `#073159` | primary 900 |
| `--color-accent-500` | `#ff9800` | accent 500 |
| `--color-accent-600` | `#e08600` | accent 600 |
| `--color-ink` | `#1f2937` | ink |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins (display + body) via Google Fonts <link> in index.html. |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Showcase` | Showcase section | see fidelity note below |
| 4 | `CtaBand` | CTA band | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Appdeck", anchor links, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-viewport hero with a headline, a subline, and call-to-action buttons over a darkened photo background.

### `Showcase`
The system SHALL render a showcase section listing the template's home-page variants as cards.

### `CtaBand`
The system SHALL render a call-to-action band with a headline and a purchase button.

### `Footer`
The system SHALL render a dark footer with a copyright line.

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
- **Provenance ban.** No file under `apps/appdeck/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/appdeck/public/CNAME` = `appdeck.free.componentdock.com`
  and the package `homepage` = `https://appdeck.free.componentdock.com`.
