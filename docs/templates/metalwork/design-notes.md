# Metalwork — Design Notes

Reference: **Industrial** — `https://colorlib.com/wp/template/industrial/`  
Live preview: `https://preview.colorlib.com/theme/industrial/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/industrial-free-template.jpg  
Shipped: https://metalwork.free.componentdock.com

Metalwork is a single-page industrial company template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Industrial" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;600;900**, **Oxygen**

## Design tokens (`apps/metalwork/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-100` | `#ffe8de` | primary 100 |
| `--color-primary-200` | `#ffd1bd` | primary 200 |
| `--color-primary-300` | `#ffb394` | primary 300 |
| `--color-primary-400` | `#ff9463` | primary 400 |
| `--color-primary-500` | `#ffb394` | primary 500 |
| `--color-primary-600` | `#fd5f00` | primary 600 |
| `--color-primary-700` | `#ff7e31` | primary 700 |
| `--color-primary-800` | `#ca4c00` | primary 800 |
| `--color-primary-900` | `#b14200` | primary 900 |
| `--color-surface` | `#f8f9fa` | surface |
| `--color-dark-700` | `#343a40` | dark 700 |
| `--font-sans` | `'Oxygen', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `Features` | Features ("We'll Handle Any Problems and Solve Them") | see fidelity note below |
| 4 | `ServicesRow` | Services row | see fidelity note below |
| 5 | `AboutBlock` | About blocks | see fidelity note below |
| 6 | `Projects` | Projects grid | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `CtaBand` | CTA band | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a dark navbar with the site wordmark, section links, a Services dropdown, and a search form.

### `HeroSlider`
The system SHALL render a full-height image slider with two slides, each with a dark top gradient, a play button, an orange-highlighted uppercase headline, and subtext.

### `Features`
The system SHALL render a white section with a centered heading, a center photo column, and four feature cards (icon + title + blurb) in two side columns.

### `ServicesRow`
The system SHALL render a light-background row of three centered icon services.

### `AboutBlock`
The system SHALL render two alternating image/text about blocks, each with a large heading, a paragraph, and a Read More link.

### `Projects`
The system SHALL render a heading block and a full-bleed 3-column grid of six project tiles (image, title, plus icon) with a hover overlay.

### `Testimonials`
The system SHALL render a light-background section with a heading and a carousel of customer testimonials (avatar, name, role, quote).

### `Blog`
The system SHALL render a blog section with a heading and three media-style blog cards (image, date meta, title, excerpt, read-more link).

### `CtaBand`
The system SHALL render an orange band with a white heading, white lead text, and an outlined "Download This Template" button.

### `Footer`
The system SHALL render a footer with brand/about + social icons, Contact Info, and Quick Links columns plus a copyright bar.

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
- **Provenance ban.** No file under `apps/metalwork/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/metalwork/public/CNAME` = `metalwork.free.componentdock.com`
  and the package `homepage` = `https://metalwork.free.componentdock.com`.
