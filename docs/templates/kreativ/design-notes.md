# Kreativ — Design Notes

Reference: **Creativex 3** — `https://colorlib.com/wp/template/creativex-3/`  
Live preview: `https://preview.colorlib.com/theme/creativex/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/creativex-template-1770211073725.jpg  
Shipped: https://kreativ.free.componentdock.com

Kreativ is a single-page creative-agency landing page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Creativex 3" template (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700;800**

## Design tokens (`apps/kreativ/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fdf4ff` | primary 50 |
| `--color-primary-100` | `#fae8ff` | primary 100 |
| `--color-primary-200` | `#f5d0fe` | primary 200 |
| `--color-primary-300` | `#f0abfc` | primary 300 |
| `--color-primary-400` | `#e879f9` | primary 400 |
| `--color-primary-500` | `#d946ef` | primary 500 |
| `--color-primary-600` | `#c026d3` | primary 600 |
| `--color-primary-700` | `#a21caf` | primary 700 |
| `--color-primary-800` | `#86198f` | primary 800 |
| `--color-primary-900` | `#701a75` | primary 900 |
| `--color-accent-50` | `#fff7ed` | accent 50 |
| `--color-accent-100` | `#ffedd5` | accent 100 |
| `--color-accent-200` | `#fed7aa` | accent 200 |
| `--color-accent-300` | `#fdba74` | accent 300 |
| `--color-accent-400` | `#fb923c` | accent 400 |
| `--color-accent-500` | `#f97316` | accent 500 |
| `--color-accent-600` | `#ea580c` | accent 600 |
| `--color-accent-700` | `#c2410c` | accent 700 |
| `--color-accent-800` | `#9a3412` | accent 800 |
| `--color-accent-900` | `#7c2d12` | accent 900 |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | Inter — the original template's typeface (Google Fonts via index.html) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Awards` | Awards strip | see fidelity note below |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `Work` | Selected work | see fidelity note below |
| 6 | `Testimonials` | Testimonials | see fidelity note below |
| 7 | `Contact` | Contact section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main · Kreativ home · Kreativ · Start a Project

### `Hero`
The system SHALL render a full-height hero with a badge, a gradient headline, two call-to-action buttons, a stats row, and a scroll indicator.

### `Awards`
The system SHALL render a bordered strip listing four industry awards.

### `Services`
The system SHALL render a grey section with a heading and four service cards, each with an icon, feature list, and a Learn More link.

### `Work`
The system SHALL render a showcase of three project cards with a heading and a View All link.

### `Testimonials`
The system SHALL render a grey section with three client testimonial cards.

### `Contact`
The system SHALL render a contact section with contact info blocks and a project-quote form with validation.

### `Footer`
The system SHALL render a footer with a brand blurb, three link columns, and a bottom bar.

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
- **Provenance ban.** No file under `apps/kreativ/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/kreativ/public/CNAME` = `kreativ.free.componentdock.com`
  and the package `homepage` = `https://kreativ.free.componentdock.com`.
