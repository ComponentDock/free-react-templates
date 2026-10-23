# Verdure — Design Notes

Reference: **Hardenero** — `https://colorlib.com/wp/template/hardenero/`  
Live preview: `https://preview.colorlib.com/theme/hardenero/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hardenero-free-template.jpg  
Shipped: https://verdure.free.componentdock.com

Verdure is a single-page professional landscaper & gardener business template. It is an original React recreation of the ColorLib free "Hardenero" template (preview: https://preview.colorlib.com/theme/hardenero/ — business/landscaper landing), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScr…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;600;700**

## Design tokens (`apps/verdure/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-verdure-50` | `#f0faf0` | Verdure brand palette — landscaper green #57b846, warm amber #f6a623 |
| `--color-verdure-100` | `#dcf2dc` | verdure 100 |
| `--color-verdure-200` | `#b8e5b8` | verdure 200 |
| `--color-verdure-300` | `#82d182` | verdure 300 |
| `--color-verdure-400` | `#57b846` | verdure 400 |
| `--color-verdure-500` | `#44a035` | verdure 500 |
| `--color-verdure-600` | `#36832a` | verdure 600 |
| `--color-verdure-700` | `#2d6624` | verdure 700 |
| `--color-verdure-800` | `#275222` | verdure 800 |
| `--color-verdure-900` | `#22441f` | verdure 900 |
| `--color-amber-400` | `#f6a623` | amber 400 |
| `--color-amber-500` | `#e5951a` | amber 500 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar | see fidelity note below |
| 2 | `Navbar` | Navigation bar | see fidelity note below |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Stats` | Stats section | see fidelity note below |
| 6 | `Services` | Services section | see fidelity note below |
| 7 | `Projects` | Projects section | see fidelity note below |
| 8 | `Assessment` | Assessment section | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `QuoteForm` | Quote form section | see fidelity note below |
| 11 | `Blog` | Blog section | see fidelity note below |
| 12 | `Pricing` | Pricing section | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The system SHALL render a top bar with email contact info, social media icons, phone number, location, and a "Request A Quote" CTA button.

### `Navbar`
The system SHALL render a dark background navbar with the brand name "Verdure" and section navigation links.

### `Hero`
The system SHALL render a full-width hero section with a background image, heading text, and two call-to-action buttons.

### `About`
The system SHALL render a two-column about section with overlapping images, an experience badge, and feature cards.

### `Stats`
The system SHALL render a stats section with a dark background image and four stat counters with icons.

### `Services`
The system SHALL render a services section with four service cards.

### `Projects`
The system SHALL render a projects section with a 3-column grid of project cards with hover overlay effects.

### `Assessment`
The system SHALL render an assessment section with a split layout — background image on one side, feature items on the other.

### `Testimonials`
The system SHALL render a testimonials section with three testimonial cards.

### `QuoteForm`
The system SHALL render a quote request form with labeled input fields.

### `Blog`
The system SHALL render a blog section with three blog post cards.

### `Pricing`
The system SHALL render a pricing section with three pricing tier cards.

### `Footer`
The system SHALL render a dark background footer with brand info, navigation, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/verdure/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/verdure/public/CNAME` = `verdure.free.componentdock.com`
  and the package `homepage` = `https://verdure.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Evidence: https://preview.colorlib.com/theme/hardenero/ — HTTP 200 on 2026-10-23; measured `css/style.min.css`, `css/garden.min.css` (277,881 bytes across 2 sheets). Title served: "Professional Gardeners & Landscapers | Hardenero".

- Hex census: `#fff` 163, `#6b942a` 79, `#0d6efd` 35, `#42601b` 16, `#a34812` 5, `#263b1c` 3, `#17310f` 2, `#4c5547` 2 (count = literal occurrences in the sheet).
- Typefaces: Body: `Poppins`; Headings: `Poppins` 600/700.
- Radii: `0` (25), `var(--bs-border-radius)` (24), `50%` (13), `4px` (11), `5px` (8).
- Section order (shipped): `TopBar -> Navbar -> Hero -> About -> Stats -> Services -> Projects -> Assessment -> Testimonials -> QuoteForm -> Blog -> Pricing -> Footer`.

### Deltas measured against the shipped app

- `apps/verdure` predates the rebuild: its scale is anchored on `#57b846` / `#f6a623`, and neither literal appears in the rebuilt sheet (**0 hits** for both). The rebuilt brand green is `#6b942a` (79 occurrences).
- The rebuilt sheet's secondary families — `#42601b`, `#263b1c`, `#17310f`, `#4c5547`, `#a34812` — are absent from the app's `@theme`, which carries an invented 50–900 ramp instead.
- Section order still matches 1:1; this is a palette/shape drift on a rebuilt demo, reported for the implementer stream.
