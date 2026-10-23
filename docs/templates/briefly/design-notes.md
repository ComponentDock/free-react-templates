# Briefly — Design Notes

Reference: **Lawful** — `https://colorlib.com/wp/template/lawful/`  
Live preview: `https://preview.colorlib.com/theme/lawful/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lawful-free-template.jpg  
Shipped: https://briefly.free.componentdock.com

Briefly is a law-firm landing page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Lawful" template design, built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;500;600;700**, **Raleway**

## Design tokens (`apps/briefly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fef1f5` | primary 50 |
| `--color-primary-100` | `#fde3eb` | primary 100 |
| `--color-primary-200` | `#fcc7d7` | primary 200 |
| `--color-primary-300` | `#fa9dba` | primary 300 |
| `--color-primary-400` | `#f13d80` | primary 400 |
| `--color-primary-500` | `#e91c6d` | primary 500 |
| `--color-primary-600` | `#d8105f` | primary 600 |
| `--color-primary-700` | `#b60a4f` | primary 700 |
| `--color-primary-800` | `#980c46` | primary 800 |
| `--color-primary-900` | `#800e3f` | primary 900 |
| `--color-salmon-300` | `#f9a88a` | Button gradient end (.primary-btn gradient #f13d80 -> #f48464). |
| `--color-salmon-400` | `#f48464` | salmon 400 |
| `--color-salmon-500` | `#f06d48` | salmon 500 |
| `--color-charcoal` | `#191919` | Dark section backgrounds. |
| `--color-onyx` | `#222222` | onyx |
| `--color-smoke` | `#7f7f7f` | Muted copy (#999999 / #7f7f7f). |
| `--color-ink` | `#1a1a1a` | ink |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with brand, navigation, CTA, and dark mode toggle | see fidelity note below |
| 2 | `Hero` | Hero section with background image and CTA | see fidelity note below |
| 3 | `Stats` | Stats counters section | see fidelity note below |
| 4 | `AboutVideo` | About video section with play button and author attribution | see fidelity note below |
| 5 | `AboutSuccess` | Success cards section | see fidelity note below |
| 6 | `Services` | Services section with three service cards | see fidelity note below |
| 7 | `ServiceDetail` | Service detail split section | see fidelity note below |
| 8 | `Team` | Team section with three members | see fidelity note below |
| 9 | `CTA` | Hero section with background image and CTA | see fidelity note below |
| 10 | `Blog` | Blog section with three posts | see fidelity note below |
| 11 | `Footer` | Footer with Component Dock attribution | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a sticky top navbar with the "Briefly" brand logo, navigation links (Home, About, Services, Team, Blog, Contact), a "Get Free Quote" CTA button, and a dark-mode toggle button.

### `Hero`
The template SHALL render a full-width hero section with a background image, dark overlay, heading "We Combine Business with Finance", subtext, and a gradient CTA button.

### `Stats`
The template SHALL render a four-column stats section with icons and counters for Qualified Lawyers (596+), Solved Cases (20,650+), Trusted Clients (2.5k), and Achievements (50+).

### `AboutVideo`
The template SHALL render a two-column about section with a video/image placeholder on the left, heading, description, "Learn More" CTA, and author attribution on the right.

### `AboutSuccess`
The template SHALL render four "Road to Success" feature cards in a grid layout, each with an icon, title, and description.

### `Services`
The template SHALL render a services section with heading "Services Offered By Us" and three service cards, each with an image, title, and description.

### `ServiceDetail`
The template SHALL render a two-column service detail section with heading, description, and author quote on the left, and a 2x2 image grid on the right.

### `Team`
The template SHALL render a team section with heading "Meet Our Experienced Team" and three team member cards with photos, names, and roles.

### `CTA`
The template SHALL render a full-width hero section with a background image, dark overlay, heading "We Combine Business with Finance", subtext, and a gradient CTA button.

### `Blog`
The template SHALL render a blog section with heading "Latest From Our Blog Posts" and three blog post cards with images, dates, authors, titles, and descriptions.

### `Footer`
The template SHALL render a four-column footer with About, Navigation Links, Newsletter form, and Instagram Feed. The copyright bar SHALL link to https://www.componentdock.com/ (branded "Component Dock").

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
- **Provenance ban.** No file under `apps/briefly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/briefly/public/CNAME` = `briefly.free.componentdock.com`
  and the package `homepage` = `https://briefly.free.componentdock.com`.
