# Turfly — Design Notes

Reference: **Lawncare** — `https://colorlib.com/wp/template/lawncare/`  
Live preview: `https://preview.colorlib.com/theme/lawncare/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lawncare-free-template.jpg  
Shipped: https://turfly.free.componentdock.com

Turfly is a single-page lawn care & landscaping landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Lawncare" website template design (see TEMPLATES.md), built under a DIFFERENT name ("Turfly") with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@400;700;900**

## Design tokens (`apps/turfly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0f9e8` | primary 50 |
| `--color-primary-100` | `#d8efc5` | primary 100 |
| `--color-primary-200` | `#b5e09a` | primary 200 |
| `--color-primary-300` | `#8bcc68` | primary 300 |
| `--color-primary-400` | `#4e9525` | primary 400 |
| `--color-primary-500` | `#3d7a1e` | primary 500 |
| `--color-primary-600` | `#2f5e17` | primary 600 |
| `--color-primary-700` | `#224511` | primary 700 |
| `--color-primary-800` | `#162e0b` | primary 800 |
| `--color-primary-900` | `#0b1706` | primary 900 |
| `--color-accent-300` | `#fde68a` | Yellow accent from ColorLib .btn_1 / seasonal cards (#fbd341). |
| `--color-accent-400` | `#fbd341` | accent 400 |
| `--color-accent-500` | `#e9be2a` | accent 500 |
| `--color-cream` | `#f9f9f9` | Light section backgrounds. |
| `--color-charcoal` | `#343a40` | Dark footer background (#343a40). |
| `--color-ink` | `#212529` | ink |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar navigation | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `SeasonalTips` | Seasonal Tips section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Blog` | Blog section | see fidelity note below |
| 8 | `Newsletter` | Newsletter subscription | see fidelity note below |
| 9 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see a sticky dark navbar with the Turfly logo and navigation links (Home, Services, About, Blog, Contact) plus a "Get a Quote" CTA.

### `Hero`
Users SHALL see a hero section with a background image, the headline "Lawn care for everyone", a description, and two CTA buttons.

### `Services`
Users SHALL see three service cards (Garden Care, Lawn Mowing, Lawn Treatment) each with an icon, title, and description.

### `About`
Users SHALL see an about section with the heading "Welcome to Turfly", a five-item feature checklist, a "Learn More" CTA, and a lawn image.

### `SeasonalTips`
Users SHALL see four seasonal tip cards (Spring, Summer, Autumn, Winter) each with an image, season badge, title, and description.

### `Testimonials`
Users SHALL see three client testimonial cards each with an avatar, 5-star rating, quote, name, and role.

### `Blog`
Users SHALL see three blog post cards each with an image, date, title, excerpt, and "Read More" link.

### `Newsletter`
Users SHALL see a green newsletter banner with a heading, email input, and subscribe button. Submitting the form clears the email field.

### `Footer`
Users SHALL see a four-column footer (brand, services, contact, newsletter) with a copyright line and a "Made with Component Dock" link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/turfly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/turfly/public/CNAME` = `turfly.free.componentdock.com`
  and the package `homepage` = `https://turfly.free.componentdock.com`.
