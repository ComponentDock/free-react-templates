# Dynamo — Design Notes

Reference: **Industry Inc** — `https://colorlib.com/wp/template/industry-inc/`  
Live preview: `https://preview.colorlib.com/theme/industryinc/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/industryinc-free-template.jpg  
Shipped: https://dynamo.free.componentdock.com

Dynamo is a single-page industrial / energy-company website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Industry Inc" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**

## Design tokens (`apps/dynamo/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-100` | `#fff7d6` | primary 100 |
| `--color-primary-200` | `#ffefad` | primary 200 |
| `--color-primary-300` | `#ffe783` | primary 300 |
| `--color-primary-400` | `#ffd94d` | primary 400 |
| `--color-primary-500` | `#ffd000` | primary 500 |
| `--color-primary-600` | `#ffc000` | primary 600 |
| `--color-primary-700` | `#e6ad00` | primary 700 |
| `--color-primary-800` | `#cc9900` | primary 800 |
| `--color-primary-900` | `#b38600` | primary 900 |
| `--color-navy-800` | `#304a5f` | navy 800 |
| `--color-navy-900` | `#081624` | navy 900 |
| `--color-ink-800` | `#17172d` | ink 800 |
| `--color-ink-900` | `#03031b` | ink 900 |
| `--color-muted-400` | `#718090` | muted 400 |
| `--color-muted-500` | `#646470` | muted 500 |
| `--color-muted-600` | `#999` | muted 600 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Open Sans for body and headings (Google Fonts via index.html). |
| `--font-heading` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `Clients` | Clients section | see fidelity note below |
| 6 | `Testimonials` | Testimonial section | see fidelity note below |
| 7 | `CtaBand` | CTA band | see fidelity note below |
| 8 | `VideoSection` | Video section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a dark topbar, a centered navigation with brand, contact info boxes, a yellow search button, and section links.

### `HeroSlider`
The system SHALL render a full-width hero slider of at least two slides, each with a background image, a three-line headline on yellow highlight blocks, and two call-to-action buttons.

### `Services`
The system SHALL render a white services grid overlapping the hero bottom with six service items (icon + title + blurb).

### `Features`
The system SHALL render a features section on a background image with three cards (image, title, blurb, Read More link).

### `Clients`
The system SHALL render a centered client blurb heading followed by a logo carousel.

### `Testimonials`
The system SHALL render a split testimonial section with a background image on the left and a dark box on the right containing a heading and a quote carousel.

### `CtaBand`
The system SHALL render a solid yellow call-to-action band with a white headline on the left and a dark "contact us" button on the right.

### `VideoSection`
The system SHALL render a video section with text and a "Read More" button on the left and a play button over a background image on the right.

### `Footer`
The system SHALL render a dark footer with an about column (brand + social icons), three link columns, and a bottom bar with copyright and a footer menu.

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
- **Provenance ban.** No file under `apps/dynamo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dynamo/public/CNAME` = `dynamo.free.componentdock.com`
  and the package `homepage` = `https://dynamo.free.componentdock.com`.
