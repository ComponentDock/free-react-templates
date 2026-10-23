# Shingle — Design Notes

Reference: **Roofing** — `https://colorlib.com/wp/template/roofing/`  
Live preview: `https://preview.colorlib.com/theme/roofing/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/roofing-free-template.jpg  
Shipped: https://shingle.free.componentdock.com

Shingle is a single-page roofing services template. It is an original React recreation of the ColorLib free "Roofing" template (preview: https://preview.colorlib.com/theme/roofing/ — roofing company landing), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**

## Design tokens (`apps/shingle/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | brand |
| `--color-brand-dark` | `#0062cc` | brand dark |
| `--color-gold` | `#d9ba2b` | gold |
| `--color-dark` | `#202020` | dark |
| `--color-paper` | `#f8f9fa` | paper |
| `--color-ink` | `#212529` | ink |
| `--color-mist` | `#6c757d` | mist |
| `--color-primary-50` | `#e7f3ff` | primary 50 |
| `--color-primary-100` | `#c0dfff` | primary 100 |
| `--color-primary-200` | `#86c5ff` | primary 200 |
| `--color-primary-300` | `#42a5ff` | primary 300 |
| `--color-primary-400` | `#007bff` | primary 400 |
| `--color-primary-500` | `#007bff` | primary 500 |
| `--color-primary-600` | `#0062cc` | primary 600 |
| `--color-primary-700` | `#004999` | primary 700 |
| `--color-primary-800` | `#003166` | primary 800 |
| `--color-primary-900` | `#001833` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Top bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Stats` | — | no dedicated spec block |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Projects` | — | no dedicated spec block |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Pricing` | — | no dedicated spec block |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a gold top bar with the logo "Shingle" and social media icon links (Facebook, Twitter, Instagram, LinkedIn).

### `Hero`
The system SHALL render a full-width hero with a background image, dark overlay, subtitle, heading, and a gold outlined CTA button.

### `About`
*anchors only* — We have been installing roofs for over 45 years · Get a Quote · Select Service · Select Services · Send Message

### `Stats`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Services`
The system SHALL render 6 service cards: Skylights, Waterproofing, Industrial Roofing, Residential Roofing, Gutter Cleaning, Commercial Roofing.

### `Projects`
*anchors only* — Done Projects

### `Testimonials`
The system SHALL render 3 testimonial cards with client quotes.

### `Blog`
The system SHALL render 3 blog post cards with image, date, author, title, and "Read more" link.

### `Pricing`
*anchors only* — Pricing · Get Started

### `Footer`
The system SHALL render a multi-column footer with brand, services list, business hours, and contact information. It MUST link to componentdock.com.

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
- **Provenance ban.** No file under `apps/shingle/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shingle/public/CNAME` = `shingle.free.componentdock.com`
  and the package `homepage` = `https://shingle.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Evidence: https://preview.colorlib.com/theme/roofing/ — HTTP 200 on 2026-10-23; measured `css/style.min.css` (197,792 bytes). Title served: "Roofing | Roof Installation, Repair and Solar-Ready Roofs".

- Hex census: `#d9ba2b` 83, `#000000` 48, `#6c757d` 20, `#212529` 18, `#f8f9fa` 16 (count = literal occurrences in the sheet).
- Typefaces: Body + headings: `Poppins`; Icons: `Font Awesome 7 Brands`.
- Radii: `50%` (20), `var(--bs-border-radius)` (13), `4px` (11).
- Section order (shipped): `Navbar -> Hero -> About -> Stats -> Services -> Projects -> Testimonials -> Blog -> Pricing -> Footer`.

### Deltas measured against the shipped app

- The rebuilt sheet's primary is gold: `--bs-primary: #d9ba2b` and `--bs-link-color-rgb: 217, 186, 43` (83 literal occurrences). Stock `#007bff` has **0 hits**.
- `apps/shingle` still carries `--color-brand #007bff` / `--color-brand-dark #0062cc` from the pre-rebuild design, with `#d9ba2b` demoted to a secondary `--color-gold`. Palette DRIFT on a rebuilt demo.
- The rebuild also drops the classic photo hero the app models (`Hero`), so layout drift is expected as well as colour drift.
