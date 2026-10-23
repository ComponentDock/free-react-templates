# Violet — Design Notes

Reference: **Sierra** — `https://colorlib.com/wp/template/sierra/`  
Live preview: `https://preview.colorlib.com/theme/sierra/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/sierra-free-template.jpg  
Shipped: https://violet.free.componentdock.com

Violet is a single-page startup landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/violet/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f3f1ff` | primary 50 |
| `--color-primary-100` | `#e7e2ff` | primary 100 |
| `--color-primary-200` | `#d4ccff` | primary 200 |
| `--color-primary-300` | `#b8acff` | primary 300 |
| `--color-primary-400` | `#9b8aff` | primary 400 |
| `--color-primary-500` | `#8574f5` | primary 500 |
| `--color-primary-600` | `#6e5de0` | primary 600 |
| `--color-accent-300` | `#9fd3ff` | Blue accent (ColorLib #6ebdfe / #70bafe). |
| `--color-accent-400` | `#6ebdfe` | accent 400 |
| `--color-smoke` | `#7c8d93` | Muted copy (ColorLib #7c8d93). |
| `--color-ink` | `#0b1033` | ink |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `Testimonials` | Testimonials section | see fidelity note below |
| 5 | `Team` | Team section | see fidelity note below |
| 6 | `Contact` | Contact section | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Violet", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a freebie subheading, and a "Discover" button.

### `Features`
The system SHALL render a features section with a heading and three feature cards, each with a title, a blurb, and a "Read More" link.

### `Testimonials`
The system SHALL render a testimonials section with a heading, a quote, and a reviewer.

### `Team`
The system SHALL render a team section with a heading and three member cards, each with a name and a role.

### `Contact`
The system SHALL render a contact section with a heading, contact details, and a "used worldwide" map band.

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
- **Provenance ban.** No file under `apps/violet/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/violet/public/CNAME` = `violet.free.componentdock.com`
  and the package `homepage` = `https://violet.free.componentdock.com`.
