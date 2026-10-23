# Mortar — Design Notes

Reference: `https://colorlib.com/wp/template/grunt/` (the design page the spec records)  
Live preview: `https://preview.colorlib.com/theme/grunt/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/buildream-free-template.jpg — the ROW's slug `buildream`, not the spec's `grunt`  
Shipped: https://mortar.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `buildream` for this app while the spec records `grunt`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

A Creative Agency template with hero, services, about, team, portfolio showcases project and gallery sections. Recreation of the ColorLib **Grunt** creative agency template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/mortar/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef0fb` | primary 50 |
| `--color-primary-100` | `#d5d9f5` | primary 100 |
| `--color-primary-200` | `#aab3eb` | primary 200 |
| `--color-primary-300` | `#808de1` | primary 300 |
| `--color-primary-400` | `#5e72e4` | primary 400 |
| `--color-primary-500` | `#5465d9` | primary 500 |
| `--color-primary-600` | `#4a5bcf` | primary 600 |
| `--color-primary-700` | `#3b49b8` | primary 700 |
| `--color-primary-800` | `#2d38a1` | primary 800 |
| `--color-primary-900` | `#1f288a` | primary 900 |
| `--color-accent-400` | `#f5365c` | accent 400 |
| `--color-accent-500` | `#e0264d` | accent 500 |
| `--color-ink` | `#1a1a2e` | ink |
| `--color-smoke` | `#7f7f7f` | smoke |
| `--color-surface` | `#ffffff` | surface |
| `--color-mist` | `#f7f8fc` | mist |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with site name and navigation links | see fidelity note below |
| 2 | `Hero` | Hero section displays agency headline and CTA | see fidelity note below |
| 3 | `Services` | Services section shows 6 service cards | see fidelity note below |
| 4 | `About` | About section shows agency description | see fidelity note below |
| 5 | `Team` | Team section shows member profiles | see fidelity note below |
| 6 | `Portfolio` | Portfolio showcases project work | see fidelity note below |
| 7 | `Testimonials` | Testimonials section displays client quotes | see fidelity note below |
| 8 | `Gallery` | Gallery shows photo grid | see fidelity note below |
| 9 | `Contact` | Contact form is functional | see fidelity note below |
| 10 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky navigation bar with the site name "Mortar." and navigation links to all major sections.

### `Hero`
The template SHALL display a hero section with a background image, heading text, subtext, and a call-to-action button.

### `Services`
The template SHALL display a services section with exactly 6 service items in a responsive grid.

### `About`
The template SHALL display an about section with an image and descriptive text.

### `Team`
The template SHALL display a team section with 2 member profiles including photos, roles, bios, and social links.

### `Portfolio`
The template SHALL display a portfolio section with 3 project showcases in alternating layouts, each with an image, description, and testimonial.

### `Testimonials`
The template SHALL display a testimonials section with 4 client testimonial cards on a light background.

### `Gallery`
The template SHALL display a gallery section with a 6-item photo grid that supports lightbox preview on click.

### `Contact`
The template SHALL display a contact form with name, email, subject, and message fields, plus a submit button.

### `Footer`
The template footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/mortar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/mortar/public/CNAME` = `mortar.free.componentdock.com`
  and the package `homepage` = `https://mortar.free.componentdock.com`.
