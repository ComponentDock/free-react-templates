# Tressly — Design Notes

Reference: **Hairsal** — `https://colorlib.com/wp/template/hairsal/`  
Live preview: `https://preview.colorlib.com/theme/hairsal/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hairsal-free-template.jpg  
Shipped: https://tressly.free.componentdock.com

Tressly is a single-page hair-salon landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "HairSal" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@500;600;700**, **Poppins**

## Design tokens (`apps/tressly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-leaf-50` | `#f7fbf0` | leaf 50 |
| `--color-leaf-100` | `#edf7dd` | leaf 100 |
| `--color-leaf-200` | `#dbeebd` | leaf 200 |
| `--color-leaf-300` | `#c2e294` | leaf 300 |
| `--color-leaf-400` | `#a8d76a` | leaf 400 |
| `--color-leaf-500` | `#8bc34a` | leaf 500 |
| `--color-leaf-600` | `#6aa52f` | leaf 600 |
| `--color-leaf-700` | `#527f26` | leaf 700 |
| `--color-leaf-800` | `#436522` | leaf 800 |
| `--color-leaf-900` | `#385521` | leaf 900 |
| `--color-primary-50` | `#f7fbf0` | primary = brand green (drives shared Button/ButtonLink defaults) |
| `--color-primary-100` | `#edf7dd` | primary 100 |
| `--color-primary-200` | `#dbeebd` | primary 200 |
| `--color-primary-300` | `#c2e294` | primary 300 |
| `--color-primary-400` | `#a8d76a` | primary 400 |
| `--color-primary-500` | `#8bc34a` | primary 500 |
| `--color-primary-600` | `#6aa52f` | primary 600 |
| `--color-primary-700` | `#527f26` | primary 700 |
| `--color-primary-800` | `#436522` | primary 800 |
| `--color-primary-900` | `#385521` | primary 900 |
| `--color-mist-100` | `#f4f5f9` | mist 100 |
| `--color-mist-200` | `#edf0f5` | mist 200 |
| `--color-ink-900` | `#25262a` | ink 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | About section with opening hours | see fidelity note below |
| 4 | `Services` | Featured services | see fidelity note below |
| 5 | `AboutTressly` | About Tressly | see fidelity note below |
| 6 | `Experience` | Experience band | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Tressly", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background image, a level-1 headline, and a call-to-action button.

### `About`
The system SHALL render an about section with a heading, supporting copy, and opening hours.

### `Services`
The system SHALL render a featured-services section with at least three icon cards.

### `AboutTressly`
The system SHALL render an "About Tressly" section with a heading and supporting copy.

### `Experience`
The system SHALL render a full-width "Experience Our Outstanding Services" band with a background image and a play link.

### `Footer`
The system SHALL render a footer with the site name, quick links, a newsletter form, and social links.

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
- **Provenance ban.** No file under `apps/tressly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tressly/public/CNAME` = `tressly.free.componentdock.com`
  and the package `homepage` = `https://tressly.free.componentdock.com`.
