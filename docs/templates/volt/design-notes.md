# Volt — Design Notes

Reference: **Ionize** — `https://colorlib.com/wp/template/ionize/`  
Live preview: `https://preview.colorlib.com/theme/ionize/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ionize-free-template.jpg  
Shipped: https://volt.free.componentdock.com

Volt is a single-page blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Ionize" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Abril Fatface**, **Poppins**

## Design tokens (`apps/volt/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0028ff` | brand |
| `--color-primary` | `#0028ff` | primary scale so shared Button/ButtonLink (bg-primary-600) render brand blue |
| `--color-primary-50` | `#e8ecff` | primary 50 |
| `--color-primary-100` | `#ced8ff` | primary 100 |
| `--color-primary-200` | `#9db1ff` | primary 200 |
| `--color-primary-300` | `#6b8aff` | primary 300 |
| `--color-primary-400` | `#3356ff` | primary 400 |
| `--color-primary-500` | `#0f3aff` | primary 500 |
| `--color-primary-600` | `#0028ff` | primary 600 |
| `--color-primary-700` | `#0020cc` | primary 700 |
| `--color-primary-800` | `#001a9e` | primary 800 |
| `--color-primary-900` | `#001470` | primary 900 |
| `--color-ink` | `#000000` | ink |
| `--color-body` | `#6c757d` | body |
| `--color-meta` | `#bfbfbf` | meta |
| `--color-section` | `#f8f9fa` | section |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Abril Fatface', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Sidebar | see fidelity note below |
| 2 | `MobileNav` | Mobile navigation | see fidelity note below |
| 3 | `BlogGrid` | Blog grid layout | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The system SHALL render a fixed left sidebar (25% width on desktop) with a brand logo, vertical navigation, a newsletter subscribe form, and a credit footer, over a photo with a translucent royal-blue overlay.

### `MobileNav`
The system SHALL collapse the sidebar into an off-canvas drawer with a hamburger toggle on small screens.

### `BlogGrid`
The system SHALL render the main content area (75% width on desktop, light `#f8f9fa` background) as a masonry-style grid of blog post cards matching the demo arrangement: one featured carousel card, alternating wide horizontal cards, and rows of vertical cards.

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
- **Provenance ban.** No file under `apps/volt/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/volt/public/CNAME` = `volt.free.componentdock.com`
  and the package `homepage` = `https://volt.free.componentdock.com`.
