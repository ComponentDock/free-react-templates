# Blush — Design Notes

Reference: **Selene** — `https://colorlib.com/wp/template/selene/`  
Live preview: `https://preview.colorlib.com/theme/selene/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/selene-free-template.jpg  
Shipped: https://blush.free.componentdock.com

Blush is a single-page app landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Selene" website template design (see TEMPLATES.md), built under a DIFFERENT name ("Blush") with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/blush/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff0f6` | primary 50 |
| `--color-primary-100` | `#fa91b9` | primary 100 |
| `--color-primary-200` | `#ff7aa8` | primary 200 |
| `--color-primary-300` | `#ff6398` | primary 300 |
| `--color-primary-400` | `#ff4c8b` | primary 400 |
| `--color-primary-500` | `#fb397d` | primary 500 |
| `--color-primary-600` | `#e02a6b` | primary 600 |
| `--color-accent-300` | `#e0fdc2` | Lime accent (.welcome-bg-shape / highlights #ccfa87). |
| `--color-accent-400` | `#ccfa87` | accent 400 |
| `--color-smoke` | `#9597a6` | Muted copy (#9597a6). |
| `--color-ink` | `#292d4f` | ink |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `AboutSplit` | About app split section | see fidelity note below |
| 4 | `Faq` | FAQ section | see fidelity note below |
| 5 | `Stats` | Stats section | see fidelity note below |
| 6 | `Features` | Features section | see fidelity note below |
| 7 | `Pricing` | Pricing section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Blush", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, two store buttons, and a device image.

### `AboutSplit`
The system SHALL render a split section with the heading "Mobile ready", a blurb, feature icons, and an image slider.

### `Faq`
The system SHALL render an FAQ section with a heading and three collapsible accordion panels.

### `Stats`
The system SHALL render a stats section with five metrics.

### `Features`
The system SHALL render a features section with a heading and six feature cards.

### `Pricing`
The system SHALL render a pricing section with a heading, a blurb, and three plans with prices and purchase buttons.

### `Footer`
The system SHALL render a footer with download buttons, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/blush/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/blush/public/CNAME` = `blush.free.componentdock.com`
  and the package `homepage` = `https://blush.free.componentdock.com`.
