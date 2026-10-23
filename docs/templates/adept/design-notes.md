# Adept — Design Notes

Reference: **Expert** — `https://colorlib.com/wp/template/expert/`  
Live preview: `https://preview.colorlib.com/theme/expert/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/expert-free-template.jpg  
Shipped: https://adept.free.componentdock.com

Adept is a consulting/business onepage template that recreates the ColorLib Expert design (https://colorlib.com/wp/template/expert/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;600;700**, **Oswald**

## Design tokens (`apps/adept/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#352961` | brand |
| `--color-brand-light` | `#4a3d82` | brand light |
| `--color-brand-dark` | `#241a45` | brand dark |
| `--color-accent` | `#007bff` | Accent — blue CTAs (#007bff from the original). |
| `--color-ink` | `#212529` | Ink — dark text (#212529). |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds (#f8f9fa). |
| `--color-mist` | `#6c757d` | Mist — muted text (#6c757d). |
| `--color-muted` | `#ebeef0` | Muted card bg (#ebeef0). |
| `--color-divider` | `#dee2e6` | Border color. |
| `--color-primary-50` | `#f0eef5` | Primary scale — deep purple. |
| `--color-primary-100` | `#d9d3e8` | primary 100 |
| `--color-primary-200` | `#b3a7d1` | primary 200 |
| `--color-primary-300` | `#8d7bba` | primary 300 |
| `--color-primary-400` | `#6a52a3` | primary 400 |
| `--color-primary-500` | `#352961` | primary 500 |
| `--color-primary-600` | `#2d2252` | primary 600 |
| `--color-primary-700` | `#241a45` | primary 700 |
| `--color-primary-800` | `#1c1336` | primary 800 |
| `--color-primary-900` | `#140d28` | primary 900 |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | Fonts: Oswald (headings) + Muli (body). |
| `--font-display` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `About` | About Section | see fidelity note below |
| 4 | `Projects` | Projects Gallery | see fidelity note below |
| 5 | `Process` | Process Steps | see fidelity note below |
| 6 | `Testimonials` | Testimonials | see fidelity note below |
| 7 | `Services` | Services Grid | see fidelity note below |
| 8 | `Pricing` | Pricing Tiers | see fidelity note below |
| 9 | `Contact` | Contact Form | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Adept · Contact Us

### `Hero`
The template SHALL include a hero section with a heading, description, call-to-action button, and background image.

### `About`
The template SHALL include an about section with a heading and three stat counters.

### `Projects`
The template SHALL include a projects gallery section with four portfolio items.

### `Process`
The template SHALL include a process/approach section with three numbered steps.

### `Testimonials`
The template SHALL include a testimonials section with customer quotes.

### `Services`
The template SHALL include a services section with six service items.

### `Pricing`
The template SHALL include a pricing section with three plan tiers.

### `Contact`
The template SHALL include a contact section with form fields and contact information.

### `Footer`
The template SHALL include a footer with about text, navigation links, subscribe form, and Component Dock branding.

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
- **Provenance ban.** No file under `apps/adept/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/adept/public/CNAME` = `adept.free.componentdock.com`
  and the package `homepage` = `https://adept.free.componentdock.com`.
