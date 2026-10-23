# Dossier — Design Notes

Reference: **Alias** — `https://colorlib.com/wp/template/alias/`  
Live preview: `https://preview.colorlib.com/theme/jackco/` (the ROW's slug `jackco`, probed 200 on 2026-10-23) — the spec names `alias` and records no demo.  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jackco-colorlib-template.jpg — the ROW's slug `jackco`, not the spec's `alias`  
Shipped: https://dossier.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `jackco` for this app while the spec records `alias`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

A Personal / CV Portfolio template with navbar with navigation, about section with portrait, skills with progress bars and services sections. Recreate the ColorLib "Alias" template (https://colorlib.com/wp/template/alias/) as a React 19 + Vite + Tailwind CSS 4 one-page personal/CV portfolio site under the name "Dossier".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/dossier/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-leaf-50` | `#f0fdf0` | leaf 50 |
| `--color-leaf-100` | `#dcfce7` | leaf 100 |
| `--color-leaf-200` | `#bbf7d0` | leaf 200 |
| `--color-leaf-300` | `#86efac` | leaf 300 |
| `--color-leaf-400` | `#4ebe2a` | leaf 400 |
| `--color-leaf-500` | `#22c55e` | leaf 500 |
| `--color-leaf-600` | `#16a34a` | leaf 600 |
| `--color-leaf-700` | `#15803d` | leaf 700 |
| `--color-leaf-800` | `#166534` | leaf 800 |
| `--color-leaf-900` | `#14532d` | leaf 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins — the original template's typeface (Google Fonts via index.html) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation links | see fidelity note below |
| 2 | `Hero` | Hero section with name and CTAs | see fidelity note below |
| 3 | `About` | About section with portrait and buttons | see fidelity note below |
| 4 | `Skills` | Skills with progress bars | see fidelity note below |
| 5 | `Testimonials` | Client testimonials | see fidelity note below |
| 6 | `Services` | Services grid | see fidelity note below |
| 7 | `Benefits` | Benefits callout | see fidelity note below |
| 8 | `Portfolio` | Portfolio image grid | see fidelity note below |
| 9 | `Resume` | Resume timeline | see fidelity note below |
| 10 | `Blog` | Blog posts | see fidelity note below |
| 11 | `Contact` | Contact form and details | see fidelity note below |
| 12 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar MUST display the brand "Dossier" and navigation links: Home, About, Services, Portfolio, Resume, Blog, Contact. On mobile it MUST collapse to a hamburger menu.

### `Hero`
The hero MUST show a name heading, subtitle text, and two call-to-action buttons ("More On Me" and "Hire Me") over a background image with dark overlay.

### `About`
The about section MUST show a heading "About Me", descriptive text, "Hire Me" and "Download CV" buttons, and a portrait image.

### `Skills`
The skills section MUST display 5 progress bars with labels (Design 85%, HTML5 98%, CSS3 97%, WordPress 88%, Bootstrap 92%) and correct ARIA attributes.

### `Testimonials`
The testimonials section MUST display testimonial cards with quotes, author names, and roles.

### `Services`
The services section MUST show 6 service cards each with an icon, title, description, and "Learn More" link.

### `Benefits`
The benefits section MUST display the heading "Big Benefits for Small Business", subheading "All in One Place", and descriptive text.

### `Portfolio`
The portfolio section MUST display a grid of 6 portfolio items with images and hover-overlay titles.

### `Resume`
The resume section MUST show two columns: Education and Experience, each with timeline entries including title, date, and description.

### `Blog`
The blog section MUST display 3 blog post cards with images, titles, dates, and excerpts.

### `Contact`
The contact section MUST show a form (name, email, subject, message fields + submit button) and contact details (address, phone, email).

### `Footer`
The footer MUST show copyright text and a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/dossier/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dossier/public/CNAME` = `dossier.free.componentdock.com`
  and the package `homepage` = `https://dossier.free.componentdock.com`.
