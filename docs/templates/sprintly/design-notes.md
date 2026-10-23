# Sprintly — Design Notes

Reference: **Activitar** — `https://colorlib.com/wp/template/activitar/`  
Live preview: `https://preview.colorlib.com/theme/activitar/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/activitar-free-template.jpg  
Shipped: https://sprintly.free.componentdock.com

Sprintly is a dark-themed fitness and sport landing page template. It recreates the ColorLib "Activitar" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript application with 100% test coverage.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:wght@400;600;700;800**, **Oswald**

## Design tokens (`apps/sprintly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#fff7ed` | brand 50 |
| `--color-brand-100` | `#ffedd5` | brand 100 |
| `--color-brand-200` | `#fed7aa` | brand 200 |
| `--color-brand-300` | `#fdba74` | brand 300 |
| `--color-brand-400` | `#fb923c` | brand 400 |
| `--color-brand-500` | `#e16521` | brand 500 |
| `--color-brand-600` | `#c2410c` | brand 600 |
| `--color-brand-700` | `#9a3412` | brand 700 |
| `--color-brand-800` | `#7c2d12` | brand 800 |
| `--color-brand-900` | `#431407` | brand 900 |
| `--color-gold` | `#ffca04` | Gold accent — from the original design |
| `--color-dark-50` | `#f7f7f7` | Dark surface palette |
| `--color-dark-100` | `#e1e1e1` | dark 100 |
| `--color-dark-200` | `#afb4bf` | dark 200 |
| `--color-dark-300` | `#8f8fa8` | dark 300 |
| `--color-dark-400` | `#7b7b7b` | dark 400 |
| `--color-dark-500` | `#2d2d2d` | dark 500 |
| `--color-dark-600` | `#222222` | dark 600 |
| `--color-dark-700` | `#1a1a1a` | dark 700 |
| `--color-dark-800` | `#131313` | dark 800 |
| `--color-dark-900` | `#0a0a0a` | dark 900 |
| `--font-heading` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | Oswald for headings, Nunito Sans for body — Google Fonts via index.html |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section with three cards | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Programs` | Programs section with four cards | see fidelity note below |
| 6 | `ClassTimetable` | Class timetable | see fidelity note below |
| 7 | `Pricing` | Pricing section with three plans | see fidelity note below |
| 8 | `WhyChooseUs` | Why Choose Us section | see fidelity note below |
| 9 | `VideoCta` | — | no dedicated spec block |
| 10 | `Blog` | Blog section with three posts | see fidelity note below |
| 11 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar SHALL display a logo, navigation links, and a mobile menu toggle.

### `Hero`
The hero section SHALL display a large heading, subtitle, and CTA button.

### `Features`
The features section SHALL display 3 feature cards with titles and descriptions.

### `About`
The about section SHALL display a heading and description.

### `Programs`
The programs section SHALL display 4 program cards.

### `ClassTimetable`
The timetable section SHALL display a weekly schedule grid.

### `Pricing`
The pricing section SHALL display 3 pricing plans.

### `WhyChooseUs`
The section SHALL display 6 items with icons and descriptions.

### `VideoCta`
*anchors only* — Play video · Gym In Downtown · Get Started Today

### `Blog`
The blog section SHALL display 3 blog post cards.

### `Footer`
The footer SHALL link to Component Dock and display contact info.

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
- **Provenance ban.** No file under `apps/sprintly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sprintly/public/CNAME` = `sprintly.free.componentdock.com`
  and the package `homepage` = `https://sprintly.free.componentdock.com`.
