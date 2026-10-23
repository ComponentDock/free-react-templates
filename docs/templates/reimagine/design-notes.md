# Reimagine — Design Notes

Reference: **Dinomuz** — `https://colorlib.com/wp/template/dinomuz/`  
Live preview: `https://preview.colorlib.com/theme/dinomuz/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dinomuz-free-creative-website-template.jpg  
Shipped: https://reimagine.free.componentdock.com

Reimagine is a single-page creative agency template in the free-react-templates monorepo. It is a React recreation of the ColorLib "Dinomuz" free template (source: https://colorlib.com/wp/template/dinomuz/), built under a DIFFERENT name (**Reimagine**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;500;600**

## Design tokens (`apps/reimagine/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e66686` | Reimagine brand palette — pink-to-orange gradient (design tokens) |
| `--color-brand-light` | `#e66587` | brand light |
| `--color-accent` | `#f09359` | accent |
| `--color-accent-light` | `#f09458` | accent light |
| `--color-bg-alt` | `#f9f9ff` | bg alt |
| `--color-ink` | `#222222` | ink |
| `--color-body` | `#777777` | body |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Banner / Hero | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Portfolio` | Portfolio / Amazing Works section | see fidelity note below |
| 6 | `Story` | Story section | see fidelity note below |
| 7 | `Newsletter` | Newsletter subscription | see fidelity note below |
| 8 | `FooterWidgets` | Footer widgets | see fidelity note below |
| 9 | `Footer` | Footer widgets | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a responsive navbar with logo and navigation links.

### `Hero`
The system SHALL render a full-width gradient hero section with centered white text and a CTA button.

### `Features`
The system SHALL render a 3-column feature cards section on a white background.

### `Services`
The system SHALL render an 8-card service grid on a gradient background with hover overlays.

### `Portfolio`
The system SHALL render a portfolio carousel with work items.

### `Story`
The system SHALL render a story section with gradient background and a 2-column layout.

### `Newsletter`
The system SHALL render a newsletter signup form on a light background.

### `FooterWidgets`
The system SHALL render a 3-column footer widget area with contact info.

### `Footer`
The system SHALL render a 3-column footer widget area with contact info.

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
- **Provenance ban.** No file under `apps/reimagine/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/reimagine/public/CNAME` = `reimagine.free.componentdock.com`
  and the package `homepage` = `https://reimagine.free.componentdock.com`.
