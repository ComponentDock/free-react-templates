# Bold — Design Notes

Reference: **Bold** — `https://colorlib.com/wp/template/bold/`  
Live preview: `https://preview.colorlib.com/theme/bold/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bold-free-template.jpg  
Shipped: https://bold.free.componentdock.com

Bold is a single-page startup/marketing landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Bold" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Raleway**, **Raleway:wght@400;500;600;700;800**

## Design tokens (`apps/bold/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff5f0` | primary 50 |
| `--color-primary-100` | `#ffe8dd` | primary 100 |
| `--color-primary-200` | `#ffd1bd` | primary 200 |
| `--color-primary-300` | `#ffb594` | primary 300 |
| `--color-primary-400` | `#ffa585` | primary 400 |
| `--color-primary-500` | `#ff926b` | primary 500 |
| `--color-primary-600` | `#f57a4d` | primary 600 |
| `--color-primary-700` | `#e05f33` | primary 700 |
| `--color-primary-800` | `#c24a24` | primary 800 |
| `--color-primary-900` | `#a03a1c` | primary 900 |
| `--color-ink` | `#000000` | Dark text #000, dark footer #262626. |
| `--color-night` | `#262626` | night |
| `--color-paper` | `#f8f9fa` | paper |
| `--color-mist` | `#f9f9f9` | mist |
| `--color-muted` | `#7b7b7b` | muted |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | Original font: "Raleway" (Google Fonts, loaded in index.html). |
| `--font-display` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Achievements` | Achievements section | see fidelity note below |
| 4 | `Brands` | Brand trust section | see fidelity note below |
| 5 | `FeatureRows` | Feature rows | see fidelity note below |
| 6 | `Testimonial` | Testimonial section | see fidelity note below |
| 7 | `ContactForm` | Contact form | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Bold", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, and a call-to-action button.

### `Achievements`
The system SHALL render an achievements section with three metrics.

### `Brands`
The system SHALL render a brand trust section with a heading and three columns.

### `FeatureRows`
The system SHALL render three alternating feature rows, each with a heading, a blurb, and a "Learn more" button.

### `Testimonial`
The system SHALL render a testimonial section with a heading, a quote, and a reviewer.

### `ContactForm`
The system SHALL render a contact form with a heading, a company-size selector, and a submit button.

### `Footer`
The system SHALL render a footer with link columns, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/bold/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bold/public/CNAME` = `bold.free.componentdock.com`
  and the package `homepage` = `https://bold.free.componentdock.com`.
