# Shuttercraft — Design Notes

Reference: **Photography** — `https://colorlib.com/wp/template/photography/`  
Live preview: `https://preview.colorlib.com/theme/photography/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/photography-free-photography-website-template.jpg  
Shipped: https://shuttercraft.free.componentdock.com

Recreation of ColorLib Photography (`https://colorlib.com/wp/template/photography/`). A photographer portfolio/personal site featuring a hero carousel with full-bleed background images, about section with portrait + text, dark-themed masonry gallery, call-to-action banner, blog grid, split contact form with image, and a dark footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/shuttercraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#7a77ff` | brand |
| `--color-brand-dark` | `#6560e0` | brand dark |
| `--color-brand-green` | `#8cfe86` | brand green |
| `--color-ink` | `#222222` | ink |
| `--color-ink-light` | `#777777` | ink light |
| `--color-paper` | `#f9f9ff` | paper |
| `--color-gallery` | `#222222` | gallery |
| `--color-primary-50` | `#f0f0ff` | primary 50 |
| `--color-primary-100` | `#e0e0ff` | primary 100 |
| `--color-primary-200` | `#c4c4ff` | primary 200 |
| `--color-primary-300` | `#a8a8ff` | primary 300 |
| `--color-primary-400` | `#9191ff` | primary 400 |
| `--color-primary-500` | `#7a77ff` | primary 500 |
| `--color-primary-600` | `#6560e0` | primary 600 |
| `--color-primary-700` | `#504bc0` | primary 700 |
| `--color-primary-800` | `#3c37a0` | primary 800 |
| `--color-primary-900` | `#282380` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation links | see fidelity note below |
| 2 | `Hero` | Hero carousel with slides | see fidelity note below |
| 3 | `About` | About section with portrait and text | see fidelity note below |
| 4 | `Gallery` | Gallery section with masonry grid | see fidelity note below |
| 5 | `CallToAction` | Call-to-action banner | see fidelity note below |
| 6 | `Blog` | Blog section with post cards | see fidelity note below |
| 7 | `Contact` | Contact section with form | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a navigation bar with the site name "Shuttercraft" and links to Home, About, Gallery, Blog, and Contact sections.

### `Hero`
The template SHALL render a hero section with a full-bleed background image carousel containing 3 slides with headings and subtitles, prev/next navigation, and auto-advance.

### `About`
The template SHALL render an about section with a portrait image on the left and a heading, description paragraph, and "Hire Me Now" button on the right.

### `Gallery`
The template SHALL render a dark-background gallery section with a heading and a masonry-style grid of 16 images.

### `CallToAction`
The template SHALL render a gradient call-to-action section with a heading and a button.

### `Blog`
The template SHALL render a blog section with a heading and 3 blog post cards, each containing an image, title, excerpt, author info, date, and like/comment counts.

### `Contact`
The template SHALL render a contact section with an image on the left and a form on the right with name, email, and message fields.

### `Footer`
The template SHALL render a footer with copyright text, a link to Component Dock, and social media icons.

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
- **Provenance ban.** No file under `apps/shuttercraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shuttercraft/public/CNAME` = `shuttercraft.free.componentdock.com`
  and the package `homepage` = `https://shuttercraft.free.componentdock.com`.
