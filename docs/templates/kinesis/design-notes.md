# Kinesis — Design Notes

Reference: **Dazko** — `https://colorlib.com/wp/template/dazko/`  
Live preview: `https://preview.colorlib.com/theme/dazko/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dazko-free-template.jpg  
Shipped: https://kinesis.free.componentdock.com

Kinesis is a single-page crossfit / fitness-gym website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Dazko" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;500;600;700;800**, **Roboto Condensed**

## Design tokens (`apps/kinesis/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#e1193e` | primary |
| `--color-blue` | `#1425af` | blue |
| `--color-stripe` | `#1d2cb5` | stripe |
| `--color-ink` | `#030513` | ink |
| `--color-heading` | `#011f39` | heading |
| `--color-section` | `#f0f4f7` | section |
| `--color-navy` | `#0a113f` | navy |
| `--color-zebra` | `#f4f6fc` | zebra |
| `--font-display` | `'Roboto Condensed', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopStrip` | Top strip | see fidelity note below |
| 2 | `Navbar` | Navbar | see fidelity note below |
| 3 | `Hero` | Hero slider | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `CounterBand` | Counter band | see fidelity note below |
| 6 | `CtaBand` | CTA band | see fidelity note below |
| 7 | `Features` | Free fitness features | see fidelity note below |
| 8 | `Classes` | Classes section | see fidelity note below |
| 9 | `Pricing` | Pricing section | see fidelity note below |
| 10 | `VideoBand` | Video band | see fidelity note below |
| 11 | `Schedules` | Schedules table | see fidelity note below |
| 12 | `Trainers` | Trainers section | see fidelity note below |
| 13 | `Testimonials` | Testimonials section | see fidelity note below |
| 14 | `Blog` | Blog section | see fidelity note below |
| 15 | `Bmi` | BMI calculator | see fidelity note below |
| 16 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopStrip`
The system SHALL render a thin absolute-positioned strip above the hero with a free-call phone line and social icons.

### `Navbar`
The system SHALL render a transparent navbar overlaid on the hero with the site wordmark, section links, a red CTA button, and a mobile toggle.

### `Hero`
The system SHALL render a full-viewport hero slider with three slides, each with a background image, dark overlay, eyebrow, italic headline, subtext, and a call-to-action button.

### `About`
The system SHALL render an about section with an eyebrow, heading, paragraph, image, and three icon list items.

### `CounterBand`
The system SHALL render a blue-striped band with four animated counters.

### `CtaBand`
The system SHALL render a call-to-action band with an eyebrow, heading, and button.

### `Features`
The system SHALL render a row of three feature cards, each with an icon, a title, and a blurb.

### `Classes`
The system SHALL render a grid of six class cards, each with an image, a hidden price badge, and a title band, plus a "View All Classes" link.

### `Pricing`
The system SHALL render three pricing plans, each with a name, price, five features with check icons, and a "Get Started" button.

### `VideoBand`
The system SHALL render a blue-striped video band with a circular play button, heading, video thumbnail, and success-story quotes.

### `Schedules`
The system SHALL render a weekly fitness schedule table with a blue header, red time column, and zebra-striped cells.

### `Trainers`
The system SHALL render four trainer cards, each with a photo and a name plate that reveals on hover.

### `Testimonials`
The system SHALL render a light-background testimonial carousel with quotes, names, and positions.

### `Blog`
The system SHALL render a blog section with a heading and cards containing a date meta, title, excerpt, and read-more link.

### `Bmi`
The system SHALL render a BMI section with unit tabs (Standard/Metric), a form with Height and Weight inputs, and a submit control.

### `Footer`
The system SHALL render a dark footer with brand + social icons, an Explore links column, a contacts column, and a copyright bar.

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
- **Provenance ban.** No file under `apps/kinesis/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/kinesis/public/CNAME` = `kinesis.free.componentdock.com`
  and the package `homepage` = `https://kinesis.free.componentdock.com`.
