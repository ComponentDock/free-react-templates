# Edifica — Design Notes

Reference: **Homebuilder** — `https://colorlib.com/wp/template/homebuilder/`  
Live preview: `https://preview.colorlib.com/theme/homebuilder/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/homebuilder-free-template.jpg  
Shipped: https://edifica.free.componentdock.com

Edifica is a construction and home builder landing page template. It showcases services, company expertise, project portfolio, client testimonials, and a blog, with a newsletter signup and quote request form.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/edifica/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff8e1` | primary 50 |
| `--color-primary-100` | `#ffecb3` | primary 100 |
| `--color-primary-200` | `#ffe082` | primary 200 |
| `--color-primary-300` | `#ffd54f` | primary 300 |
| `--color-primary-400` | `#fdbe34` | primary 400 |
| `--color-primary-500` | `#f5b800` | primary 500 |
| `--color-primary-600` | `#d4a000` | primary 600 |
| `--color-primary-700` | `#a67c00` | primary 700 |
| `--color-primary-800` | `#7a5a00` | primary 800 |
| `--color-primary-900` | `#4d3800` | primary 900 |
| `--color-accent-400` | `#007bff` | Accent blue — reference section accent #007bff. |
| `--color-accent-500` | `#0069d9` | accent 500 |
| `--color-accent-600` | `#0056b3` | accent 600 |
| `--color-navy` | `#00043c` | Navbar dark navy (#00043c). |
| `--color-charcoal` | `#252525` | Footer dark (#252525). |
| `--color-smoke` | `#808080` | Body text (reference gray). |
| `--color-ink` | `rgba(0, 0, 0, 0.8)` | Headings (reference rgba(0,0,0,0.8)). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services grid | see fidelity note below |
| 4 | `Services2` | — | no dedicated spec block |
| 5 | `AboutSplit` | About section with tabs | see fidelity note below |
| 6 | `Counter` | Counter statistics | see fidelity note below |
| 7 | `WorkGallery` | Project gallery | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Newsletter` | Newsletter signup | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The template SHALL display a dark navy navigation bar with the brand name "Edifica." and navigation links for Home, About, Services, Projects, Blog, and Contact, plus a search icon.

### `Hero`
The template SHALL display a fullscreen hero section with a background image, dark overlay, and centered white text including a subheading and main heading.

### `Services`
The template SHALL display a 4-column services grid with icons, headings, and descriptions for Construction, House Renovation, Painting, and Architecture Design.

### `Services2`
*anchors only* — Why Choose Us

### `AboutSplit`
The template SHALL display a split about section with a video thumbnail on the left and tabbed content (Our Mission, Our Vision, Our Value) on the right.

### `Counter`
The template SHALL display a statistics bar with four metrics: 50 Years Experienced, 8,500 Projects Done, 378 Professional Experts, 1,200 Machineries Equipments.

### `WorkGallery`
The template SHALL display a 3x2 grid of project images with hover overlay showing category and title.

### `Testimonials`
The template SHALL display a blue-background testimonials section with heading "Happy Clients" and three testimonial cards.

### `Blog`
The template SHALL display a 3-column blog section with image cards showing date, author, comment count, and article title.

### `Newsletter`
The template SHALL display a golden-background newsletter section with heading "Subscribe to our Newsletter", an email input, and a subscribe button.

### `Footer`
The template SHALL display a dark-background footer with About Us section, social links, Services/About/Resources link columns, a Request A Quote form, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/edifica/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/edifica/public/CNAME` = `edifica.free.componentdock.com`
  and the package `homepage` = `https://edifica.free.componentdock.com`.
