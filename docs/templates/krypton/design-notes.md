# Krypton — Design Notes

Reference: **Labs** — `https://colorlib.com/wp/template/labs/`  
Live preview: `https://preview.colorlib.com/theme/labs/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/labs-digital-agency-website-template.jpg  
Shipped: https://krypton.free.componentdock.com

Krypton is a single-page digital agency landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Labs" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/krypton/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f3eefa` | primary 50 |
| `--color-primary-100` | `#e0d0f5` | primary 100 |
| `--color-primary-200` | `#c4a8ec` | primary 200 |
| `--color-primary-300` | `#a47be2` | primary 300 |
| `--color-primary-400` | `#8352d4` | primary 400 |
| `--color-primary-500` | `#6420b1` | primary 500 |
| `--color-primary-600` | `#541a95` | primary 600 |
| `--color-primary-700` | `#44157a` | primary 700 |
| `--color-primary-800` | `#34105f` | primary 800 |
| `--color-primary-900` | `#240b44` | primary 900 |
| `--color-secondary-300` | `#8faad4` | secondary 300 |
| `--color-secondary-400` | `#5d80c0` | secondary 400 |
| `--color-secondary-500` | `#4a6ba8` | secondary 500 |
| `--color-ink` | `#1a1a2e` | ink |
| `--color-body` | `#555555` | body |
| `--color-mist` | `#f8f9fa` | mist |
| `--color-peach` | `#fdf2ee` | peach |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Portfolio` | Portfolio section | see fidelity note below |
| 6 | `Team` | Team section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Contact` | Contact form | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky navigation bar with the brand name "Krypton" on the left, navigation links (Home, About, Services, Portfolio, Blog, Contact) in the center, a CTA button on the right, a dark mode toggle, and a hamburger menu on mobile.

### `Hero`
The template SHALL display a full-width hero slider with background images, dark overlay, headline, subtitle, and CTA buttons. The slider auto-advances every 5 seconds and supports manual navigation via arrow buttons and dot indicators.

### `Services`
The template SHALL display a services section with a heading and 4 service cards in a responsive grid, each with an icon, title, and description.

### `About`
The template SHALL display an about section with company description and 3 stat counters (projects, clients, awards).

### `Portfolio`
The template SHALL display a portfolio section with filterable project thumbnails. Clicking a filter shows only items in that category.

### `Team`
The template SHALL display a team section with member cards showing photo, name, role, and social links.

### `Testimonials`
The template SHALL display a testimonials section with 3 client testimonial cards showing quote, author photo, name, and company.

### `Blog`
The template SHALL display a blog section with 3 recent post cards showing thumbnail, date, title, excerpt, and a "Read More" link.

### `Contact`
The template SHALL display a contact form with name, email, subject, and message fields that validate required fields and clear on submit.

### `Footer`
The template SHALL display a footer with brand name, contact info, quick links, newsletter form, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/krypton/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/krypton/public/CNAME` = `krypton.free.componentdock.com`
  and the package `homepage` = `https://krypton.free.componentdock.com`.
