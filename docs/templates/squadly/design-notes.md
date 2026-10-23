# Squadly — Design Notes

Reference: **Equipo** — `https://colorlib.com/wp/template/equipo/`  
Live preview: `https://preview.colorlib.com/theme/equipo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/equipo-free-template.jpg  
Shipped: https://squadly.free.componentdock.com

Squadly is a heavy equipment rental landing page template featuring a hero, features/services section, about with stats, testimonials, blog, and a branded footer. It recreates the ColorLib Equipo design under a different name using React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/squadly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e6f2ff` | primary 50 |
| `--color-primary-100` | `#b3d9ff` | primary 100 |
| `--color-primary-200` | `#80bfff` | primary 200 |
| `--color-primary-300` | `#4da6ff` | primary 300 |
| `--color-primary-400` | `#1a8cff` | primary 400 |
| `--color-primary-500` | `#007bff` | primary 500 |
| `--color-primary-600` | `#0062cc` | primary 600 |
| `--color-primary-700` | `#004a99` | primary 700 |
| `--color-primary-800` | `#003166` | primary 800 |
| `--color-primary-900` | `#001933` | primary 900 |
| `--color-accent-400` | `#f96d00` | accent 400 |
| `--color-accent-500` | `#e06200` | accent 500 |
| `--color-surface` | `#f8f9fa` | surface |
| `--color-ink` | `#212529` | ink |
| `--color-muted` | `#6c757d` | muted |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar displays contact information | see fidelity note below |
| 2 | `Navbar` | Navbar provides site navigation | see fidelity note below |
| 3 | `Hero` | Hero section displays headline and CTAs | see fidelity note below |
| 4 | `Features` | Features section shows services and quote form | see fidelity note below |
| 5 | `AboutCounter` | — | no dedicated spec block |
| 6 | `CTABanner` | CTA banner promotes the company | see fidelity note below |
| 7 | `Services` | Features section shows services and quote form | see fidelity note below |
| 8 | `Testimonials` | Testimonials section shows customer reviews | see fidelity note below |
| 9 | `Blog` | Blog section shows recent posts | see fidelity note below |
| 10 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The template SHALL display a top bar with a phone number and physical address.

### `Navbar`
The navbar SHALL show the site name, navigation links, and a CTA button, with a mobile hamburger menu.

### `Hero`
The hero section SHALL show a background image, heading text, and two CTA buttons.

### `Features`
The features section SHALL display 4 feature items and a quote request form.

### `AboutCounter`
*anchors only* — Years of Experience · Customers Served · Number of Equipment · Number of Staff

### `CTABanner`
The CTA banner SHALL display a heading and appointment button.

### `Services`
The features section SHALL display 4 feature items and a quote request form.

### `Testimonials`
The testimonials section SHALL display customer testimonial cards.

### `Blog`
The blog section SHALL display blog post cards with read more links.

### `Footer`
The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/squadly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/squadly/public/CNAME` = `squadly.free.componentdock.com`
  and the package `homepage` = `https://squadly.free.componentdock.com`.
