# Artistry — Design Notes

Reference: **Jony** — `https://colorlib.com/wp/template/jony/`  
Live preview: `https://preview.colorlib.com/theme/jony/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jony-free-template.jpg  
Shipped: https://artistry.free.componentdock.com

Artistry is a personal portfolio template for creative directors and designers. It features a dark, moody aesthetic with deep brown/burgundy tones and a golden amber accent.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/artistry/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#db9a64` | Artistry brand palette — golden amber accent, dark moody backgrounds |
| `--color-brand-dark` | `#c48a55` | brand dark |
| `--color-accent` | `#fd8e5e` | Secondary accent — orange |
| `--color-dark-navy` | `#001d38` | Dark backgrounds |
| `--color-dark-brown` | `#311e25` | dark brown |
| `--color-dark-alt` | `#3b2930` | dark alt |
| `--color-ink` | `#1f1f1f` | Text colors |
| `--color-muted` | `#4d4d4d` | muted |
| `--color-mist` | `#7e7e7e` | mist |
| `--color-primary-50` | `#fdf6ed` | primary 50 |
| `--color-primary-100` | `#f9e6cc` | primary 100 |
| `--color-primary-200` | `#f2cc99` | primary 200 |
| `--color-primary-300` | `#e8ac66` | primary 300 |
| `--color-primary-400` | `#e09840` | primary 400 |
| `--color-primary-500` | `#db9a64` | primary 500 |
| `--color-primary-600` | `#c48a55` | primary 600 |
| `--color-primary-700` | `#a67245` | primary 700 |
| `--color-primary-800` | `#885b38` | primary 800 |
| `--color-primary-900` | `#6e4a2e` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `AboutSkills` | About / Skills Section | see fidelity note below |
| 4 | `Services` | Services Section | see fidelity note below |
| 5 | `Gallery` | Gallery Section | see fidelity note below |
| 6 | `Testimonials` | Testimonials Section | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The template SHALL render a sticky header with the "Artistry" brand, 5 navigation links (Home, Works, Services, About, Blog), and a "Let's Talk" border button.

### `Hero`
The template SHALL render a full-width hero section with a dark background, a headline greeting, a role subtitle in golden amber, a portrait image on the right, and a "View Works" outlined button.

### `AboutSkills`
The template SHALL render a two-column section with a bold headline, descriptive text and a "Download CV" button on the left, and 3 skill progress bars on the right.

### `Services`
The template SHALL render a services section titled "My Services" with 3 service cards displayed in a row, each with an icon, title, and description.

### `Gallery`
The template SHALL render a gallery section titled "My Works" with a 2×2 grid of portfolio items, each with a category tag and project title, and a "More Works" button.

### `Testimonials`
The template SHALL render a testimonials section titled "What Clients say" with a carousel of testimonial cards, each showing a quote, author avatar, name, and role.

### `Footer`
The template SHALL render a two-part footer: a dark CTA section with "Do you have any Project? Let's Talk" headline and description text, social links row, and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/artistry/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/artistry/public/CNAME` = `artistry.free.componentdock.com`
  and the package `homepage` = `https://artistry.free.componentdock.com`.
