# Talon — Design Notes

Reference: **Zeta** — `https://colorlib.com/wp/template/zeta/`  
Live preview: `https://preview.colorlib.com/theme/zeta/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/zeta-free-template.jpg  
Shipped: https://talon.free.componentdock.com

Talon is a single-page modern business landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Zeta" website template design (see TEMPLATES.md), built under a DIFFERENT name ("Talon") with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/talon/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff4ed` | primary 50 |
| `--color-primary-100` | `#ffe4d4` | primary 100 |
| `--color-primary-200` | `#ffc5a8` | primary 200 |
| `--color-primary-300` | `#ff9d71` | primary 300 |
| `--color-primary-400` | `#ff5a00` | primary 400 |
| `--color-primary-500` | `#f04e00` | primary 500 |
| `--color-primary-600` | `#d43e00` | primary 600 |
| `--color-primary-700` | `#a83000` | primary 700 |
| `--color-primary-800` | `#7d2400` | primary 800 |
| `--color-primary-900` | `#5c1a00` | primary 900 |
| `--color-mist` | `#f9f9f9` | Light section backgrounds. |
| `--color-lavender` | `#f5f5f5` | lavender |
| `--color-smoke` | `#666666` | Muted copy. |
| `--color-ink` | `#1a1a1a` | ink |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `SocialBar` | Social icons bar | see fidelity note below |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Features` | Features section | see fidelity note below |
| 6 | `About` | About section | see fidelity note below |
| 7 | `Milestones` | Milestones section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Talon.", anchor links to the page's sections, and a dark-mode toggle button.

### `SocialBar`
The system SHALL render a horizontal bar of social media icon links.

### `Hero`
The system SHALL render a full-width hero with a headline, blurb, and a call-to-action button.

### `Services`
The system SHALL render a services grid with 4 service cards.

### `Features`
The system SHALL render a features grid with key benefits.

### `About`
The system SHALL render an about split with text and image.

### `Milestones`
The system SHALL render counter-style milestone stats.

### `Testimonials`
The system SHALL render customer testimonials.

### `Blog`
The system SHALL render blog post previews.

### `Footer`
The system SHALL render a multi-column footer with brand info, links, and a copyright line.

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
- **Provenance ban.** No file under `apps/talon/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/talon/public/CNAME` = `talon.free.componentdock.com`
  and the package `homepage` = `https://talon.free.componentdock.com`.
