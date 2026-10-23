# Litigator — Design Notes

Reference: **Justice** — `https://colorlib.com/wp/template/justice/`  
Live preview: `https://preview.colorlib.com/theme/justice/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/justice-free-template.jpg  
Shipped: https://litigator.free.componentdock.com

Litigator is a free law firm landing page template that recreates the ColorLib "Justice" design under a different name. It provides a dark-themed, professional legal services website with a hero section, practice areas, statistics, client testimonials, expertise cards, a call-to-action, and a footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Rubik**, **Rubik:wght@300;400;500;600;700**

## Design tokens (`apps/litigator/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#faf6f0` | primary 50 |
| `--color-primary-100` | `#f0e8d8` | primary 100 |
| `--color-primary-200` | `#e2d2b8` | primary 200 |
| `--color-primary-300` | `#d4bc98` | primary 300 |
| `--color-primary-400` | `#b49c73` | primary 400 |
| `--color-primary-500` | `#a08a63` | primary 500 |
| `--color-primary-600` | `#8c7855` | primary 600 |
| `--color-primary-700` | `#756347` | primary 700 |
| `--color-primary-800` | `#5e4f3a` | primary 800 |
| `--color-primary-900` | `#4a3e2e` | primary 900 |
| `--color-surface` | `#2d2d34` | surface |
| `--color-ink` | `#ffffff` | ink |
| `--color-muted` | `#9ca3af` | muted |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar provides navigation with mobile toggle | see fidelity note below |
| 2 | `Hero` | Hero section displays headline and CTA | see fidelity note below |
| 3 | `PracticeAreas` | Practice Areas section lists four legal areas | see fidelity note below |
| 4 | `Stats` | Stats section displays four statistics | see fidelity note below |
| 5 | `Testimonials` | Testimonials section provides carousel navigation | see fidelity note below |
| 6 | `Expertise` | Expertise section displays four service cards | see fidelity note below |
| 7 | `CTA` | Hero section displays headline and CTA | see fidelity note below |
| 8 | `Footer` | Footer provides contact info and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display the logo "Litigator" with a primary-colored dot, desktop navigation links, and a mobile hamburger toggle.

### `Hero`
The hero section SHALL display a background image with overlay, the headline "We Fight For Your Right", a description, and a "Free Consultation" CTA button linking to the contact section.

### `PracticeAreas`
The practice areas section SHALL display a heading, description, four practice area items with icons, and navigation links.

### `Stats`
The stats section SHALL display a heading "50 Years" and four stat cards with values and labels.

### `Testimonials`
The testimonials section SHALL display a heading "Happy Clients", a quote, author info, and prev/next navigation buttons.

### `Expertise`
The expertise section SHALL display a heading and four service cards with icons, titles, descriptions, and "Learn More" links.

### `CTA`
The hero section SHALL display a background image with overlay, the headline "We Fight For Your Right", a description, and a "Free Consultation" CTA button linking to the contact section.

### `Footer`
The footer SHALL display four columns of links, contact information, and a copyright line with a Component Dock link.

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
- **Provenance ban.** No file under `apps/litigator/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/litigator/public/CNAME` = `litigator.free.componentdock.com`
  and the package `homepage` = `https://litigator.free.componentdock.com`.
