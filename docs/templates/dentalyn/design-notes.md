# Dentalyn — Design Notes

Reference: **Dento** — `https://colorlib.com/wp/template/dento/`  
Live preview: `https://preview.colorlib.com/theme/dento/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dento-free-template.jpg  
Shipped: https://dentalyn.free.componentdock.com

Dentalyn is a free dental clinic landing page template that recreates the ColorLib Dento design under a new name. It provides a professional, modern dental clinic website with sections for hero, about, services, pricing, appointment booking, team, testimonials, blog, and footer — built with React 19, Tailwind CSS 4, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**

## Design tokens (`apps/dentalyn/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#ecfeff` | primary 50 |
| `--color-primary-100` | `#cffafe` | primary 100 |
| `--color-primary-200` | `#a5f3fc` | primary 200 |
| `--color-primary-300` | `#67e8f9` | primary 300 |
| `--color-primary-400` | `#0891b2` | primary 400 |
| `--color-primary-500` | `#0e7490` | primary 500 |
| `--color-primary-600` | `#0f766e` | primary 600 |
| `--color-primary-700` | `#115e59` | primary 700 |
| `--color-primary-800` | `#134e4a` | primary 800 |
| `--color-primary-900` | `#042f2e` | primary 900 |
| `--color-card` | `#f4f4f4` | Card/row backgrounds. |
| `--color-smoke` | `#707070` | Muted copy. |
| `--color-mist` | `#b7b7b7` | mist |
| `--color-ink` | `#212529` | ink |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays navigation and branding | see fidelity note below |
| 2 | `Hero` | Hero section displays heading and CTAs | see fidelity note below |
| 3 | `About` | About section shows skill bars | see fidelity note below |
| 4 | `Stats` | Stats section displays counters | see fidelity note below |
| 5 | `Services` | Services section lists dental services | see fidelity note below |
| 6 | `Pricing` | Pricing section shows table | see fidelity note below |
| 7 | `Appointment` | Appointment form collects booking info | see fidelity note below |
| 8 | `Team` | Team section shows dentist cards | see fidelity note below |
| 9 | `Testimonials` | Testimonials section displays patient quotes | see fidelity note below |
| 10 | `Blog` | Blog section shows recent posts | see fidelity note below |
| 11 | `Footer` | Footer has contact info and newsletter | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template navbar SHALL display the site name "Dentalyn", navigation links for Home, About, Services, Pricing, Blog, and Contact, a "Book Now" call-to-action button, and a dark mode toggle.

### `Hero`
The hero section SHALL display a heading about dental care access, a subtitle describing the clinic, and two call-to-action buttons ("Get Started" and "Contact Us").

### `About`
The about section SHALL display a heading, description text, an image, and three skill bars (Experience Dentist 80%, Modern Equipment 65%, Friendly Staff 85%).

### `Stats`
The stats section SHALL display four statistics: 20 Years Of Experience, 700+ Happy Patients, 120 Certificate, 40+ Dentist.

### `Services`
The services section SHALL display six service types in a grid with a dark overlay background and a video play button.

### `Pricing`
The pricing section SHALL display a table with service names, stages, and prices, plus a "Read More" button.

### `Appointment`
The appointment section SHALL provide a form with Name, Phone, Email, Address, Schedule, Time, and Message fields plus a submit button.

### `Team`
The team section SHALL display three dentist cards with photos, names, roles, and social links.

### `Testimonials`
The testimonials section SHALL display patient testimonials with photos, quotes, names, and roles on a dark background.

### `Blog`
The blog section SHALL display three blog post cards with thumbnails, titles, excerpts, dates, and comment counts.

### `Footer`
The footer SHALL display contact information, opening hours, quick links, a newsletter form, social links, and a Component Dock attribution link.

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
- **Provenance ban.** No file under `apps/dentalyn/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dentalyn/public/CNAME` = `dentalyn.free.componentdock.com`
  and the package `homepage` = `https://dentalyn.free.componentdock.com`.
