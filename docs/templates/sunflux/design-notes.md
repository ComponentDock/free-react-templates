# Sunflux — Design Notes

Reference: **Solarshift** — `https://colorlib.com/wp/template/solarshift/`  
Live preview: `https://preview.colorlib.com/theme/solarshift/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/solarshift-template.jpg  
Shipped: https://sunflux.free.componentdock.com

A Solar Energy Business template with hero, stats bar, services, roi calculator, installation timeline and cta banner sections. Recreation of the ColorLib **SolarShift** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Manrope**, **Manrope:wght@300;400;500;600;700;800**

## Design tokens (`apps/sunflux/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0fdf4` | primary 50 |
| `--color-primary-100` | `#dcfce7` | primary 100 |
| `--color-primary-200` | `#bbf7d0` | primary 200 |
| `--color-primary-300` | `#86efac` | primary 300 |
| `--color-primary-400` | `#4ade80` | primary 400 |
| `--color-primary-500` | `#22c55e` | primary 500 |
| `--color-primary-600` | `#16a34a` | primary 600 |
| `--color-primary-700` | `#15803d` | primary 700 |
| `--color-primary-800` | `#166534` | primary 800 |
| `--color-primary-900` | `#14532d` | primary 900 |
| `--color-primary-950` | `#052e16` | primary 950 |
| `--color-accent-100` | `#fef3c7` | Accent amber #F59E0B — "Best Value" corner badges |
| `--color-accent-400` | `#fbbf24` | accent 400 |
| `--color-accent-500` | `#f59e0b` | accent 500 |
| `--color-accent-600` | `#d97706` | accent 600 |
| `--color-accent-700` | `#b45309` | accent 700 |
| `--font-sans` | `'Manrope', ui-sans-serif, system-ui, sans-serif` | Display/body font — Manrope |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders all navigation links | see fidelity note below |
| 2 | `Hero` | Hero section displays savings calculator | see fidelity note below |
| 3 | `StatsBar` | Stats bar displays counters | see fidelity note below |
| 4 | `Services` | Services section displays cards | see fidelity note below |
| 5 | `RoiCalculator` | Savings calculator computes results | see fidelity note below |
| 6 | `InstallationTimeline` | Installation timeline displays steps | see fidelity note below |
| 7 | `Testimonials` | Testimonials carousel navigates | see fidelity note below |
| 8 | `CtaBanner` | CTA banner displays | see fidelity note below |
| 9 | `Faq` | FAQ accordion expands and collapses | see fidelity note below |
| 10 | `ContactForm` | Contact form validates inputs | see fidelity note below |
| 11 | `Footer` | Footer renders correctly | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see a sticky header with the Sunflux brand, navigation links, dark mode toggle, and a "Get Free Quote" CTA button.

### `Hero`
The hero section SHALL display a headline, description, CTA buttons, social proof stats, and a savings calculator widget.

### `StatsBar`
The stats section SHALL display 4 key metrics.

### `Services`
The services section SHALL display 3 service cards with titles, icons, and descriptions.

### `RoiCalculator`
The savings calculator SHALL compute annual savings, CO2 offset, payback period, and federal tax credit based on state and bill inputs.

### `InstallationTimeline`
The installation timeline SHALL show a 4-step process with visual indicators.

### `Testimonials`
The testimonials section SHALL display customer reviews in a carousel with navigation controls.

### `CtaBanner`
The CTA banner SHALL display a call-to-action heading and buttons.

### `Faq`
The FAQ section SHALL display at least 5 questions with expand/collapse behavior.

### `ContactForm`
The contact form SHALL validate required fields and show error messages for invalid input.

### `Footer`
The footer SHALL display brand info, link columns, contact details, social icons, copyright, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/sunflux/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sunflux/public/CNAME` = `sunflux.free.componentdock.com`
  and the package `homepage` = `https://sunflux.free.componentdock.com`.
