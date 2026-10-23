# Proxy — Design Notes

Reference: **Youragent** — `https://colorlib.com/wp/template/youragent/`  
Live preview: `https://preview.colorlib.com/theme/youragent/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/youragent-free-template.jpg  
Shipped: https://proxy.free.componentdock.com

Proxy is a professional real estate agent landing page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Mukta Mahee**, **Mukta Mahee:wght@200;300;400**, **Playfair Display**

## Design tokens (`apps/proxy/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-sky-50` | `#e7f3ff` | Proxy brand palette — real estate blue primary #007bff |
| `--color-sky-100` | `#c3e1ff` | sky 100 |
| `--color-sky-200` | `#8ec4ff` | sky 200 |
| `--color-sky-300` | `#4da3ff` | sky 300 |
| `--color-sky-400` | `#2196f5` | sky 400 |
| `--color-sky-500` | `#007bff` | sky 500 |
| `--color-sky-600` | `#0069d9` | sky 600 |
| `--color-sky-700` | `#0053b3` | sky 700 |
| `--color-sky-800` | `#003d8c` | sky 800 |
| `--color-sky-900` | `#002766` | sky 900 |
| `--font-sans` | `'Mukta Mahee', ui-sans-serif, system-ui, sans-serif` | Mukta Mahee + Playfair Display — real estate serif/sans pairing |
| `--font-serif` | `'Playfair Display', ui-serif, Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with mobile toggle | see fidelity note below |
| 2 | `Hero` | Hero section with CTAs | see fidelity note below |
| 3 | `Properties` | Property listings grid | see fidelity note below |
| 4 | `Testimonials` | Customer testimonials | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Features` | Features section | see fidelity note below |
| 7 | `Blog` | Blog section | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render an absolute-positioned transparent navbar with the logo "Proxy", four navigation links (Home, About, Blog, Contact), and a hamburger button for mobile.

### `Hero`
The template SHALL render a full-width hero section with a dark overlay background image, a heading "I'm Your Realtor, Get Your Key", descriptive subtext, and two CTA buttons.

### `Properties`
The template SHALL render a "Popular Properties" section with an 8-card grid showing property images, prices, and addresses.

### `Testimonials`
The template SHALL render a "Happy Customers" section with 3 testimonial cards, each containing a circular avatar, a blockquote, and the author's name.

### `About`
The template SHALL render a split-layout About section with a large image on the left and "About Me" heading with bio text on the right.

### `Features`
The template SHALL render a 3-column features section with icons, titles, and descriptions for "Deal On Time", "Good Reviews", and "24/7 Support".

### `Blog`
The template SHALL render a "Recent Blog Post" section on a light gray background with 3 blog post cards showing images, dates, and titles.

### `Footer`
The template SHALL render a footer on a blue background with 4-column layout (nav links, contact info, newsletter form), copyright text linking to https://www.componentdock.com/, and social media icons.

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
- **Provenance ban.** No file under `apps/proxy/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/proxy/public/CNAME` = `proxy.free.componentdock.com`
  and the package `homepage` = `https://proxy.free.componentdock.com`.
