# Gearly — Design Notes

Reference: **Dreams** — `https://colorlib.com/wp/template/dreams/`  
Live preview: `https://preview.colorlib.com/theme/dreams/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dreams-free-template.jpg  
Shipped: https://gearly.free.componentdock.com

Gearly is a single-page driving-school landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Dreams" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700;800**

## Design tokens (`apps/gearly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f3bd00` | brand |
| `--color-brand-dark` | `#d9a800` | brand dark |
| `--color-navy` | `#0c2b4b` | Navy — dark footer/secondary buttons (#0c2b4b from the original). |
| `--color-ink` | `#111111` | Ink — headings (#111111 from the original). |
| `--color-mist` | `#444444` | Mist — muted body text (#444444 from the original). |
| `--color-paper` | `#f5f5f5` | Paper — light section backgrounds (#f5f5f5 from the original). |
| `--color-primary-50` | `#fffbe6` | primary 50 |
| `--color-primary-100` | `#fff4bf` | primary 100 |
| `--color-primary-200` | `#ffe980` | primary 200 |
| `--color-primary-300` | `#ffdb40` | primary 300 |
| `--color-primary-400` | `#fccc00` | primary 400 |
| `--color-primary-500` | `#f3bd00` | primary 500 |
| `--color-primary-600` | `#e0a800` | primary 600 |
| `--color-primary-700` | `#c99300` | primary 700 |
| `--color-primary-800` | `#a87a00` | primary 800 |
| `--color-primary-900` | `#8a6500` | primary 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Original font: "Open Sans" (Google Fonts via index.html). |
| `--font-display` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Features` | Feature section | see fidelity note below |
| 4 | `About` | About strip | see fidelity note below |
| 5 | `ApplicationForm` | Application form | see fidelity note below |
| 6 | `Pricing` | Pricing | see fidelity note below |
| 7 | `Team` | Team | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Gearly", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background image, an overline, a level-1 headline, and two call-to-action buttons.

### `Features`
The system SHALL render a feature section with a heading column and three feature items.

### `About`
The system SHALL render an about section with a "Looking for lessons?" heading and a "Learn more" button.

### `ApplicationForm`
The system SHALL render an "Application Form" section with name, email, phone, date, course type, and car type fields plus a submit button.

### `Pricing`
The system SHALL render an "Our Pricing" section with three pricing cards, each with a price, a plan name, a feature list, and a call-to-action button.

### `Team`
The system SHALL render an "Our Instructors" section with instructor cards.

### `Footer`
The system SHALL render a footer with the site name, a short tagline, quick links, and social links.

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
- **Provenance ban.** No file under `apps/gearly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gearly/public/CNAME` = `gearly.free.componentdock.com`
  and the package `homepage` = `https://gearly.free.componentdock.com`.
