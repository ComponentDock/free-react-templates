# Medical — Design Notes

Reference: **Medical Wordpress Themes** — **Source slug:** `medical` (`https://colorlib.com/wp/template/medical/`, HTTP 200, 110,970 B; re-checked 2026-10-24).  
Live preview: `https://preview.colorlib.com/theme/medical/` — HTTP 200, 34,704 B.  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/medical-free-clean-health-website-template.jpg — the ROW's slug `medical`, not the spec's `medical-wordpress-themes`  
Shipped: https://medical.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `medical` for this app while the spec records `medical-wordpress-themes`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Medical is a single-page healthcare template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Medical Wordpress Themes" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/medical/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#69be00` | brand |
| `--color-brand-dark` | `#5aa500` | brand dark |
| `--color-brand-50` | `#f4fbe8` | brand 50 |
| `--color-brand-100` | `#e4f5c9` | brand 100 |
| `--color-ink` | `#222222` | Ink — headings. |
| `--color-body` | `#777777` | Body — paragraph text. |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds. |
| `--color-charcoal` | `#222222` | Charcoal — dark footer. |
| `--color-primary-50` | `#f4fbe8` | primary 50 |
| `--color-primary-100` | `#e4f5c9` | primary 100 |
| `--color-primary-200` | `#c5ea8e` | primary 200 |
| `--color-primary-300` | `#a1dc4f` | primary 300 |
| `--color-primary-400` | `#82cf1f` | primary 400 |
| `--color-primary-500` | `#69be00` | primary 500 |
| `--color-primary-600` | `#5aa500` | primary 600 |
| `--color-primary-700` | `#4a8a00` | primary 700 |
| `--color-primary-800` | `#3b6f00` | primary 800 |
| `--color-primary-900` | `#2c5400` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, -apple-system, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `UtilityBar` | — | no dedicated spec block |
| 2 | `Navbar` | Navigation bar | see fidelity note below |
| 3 | `Hero` | Banner hero | see fidelity note below |
| 4 | `ServicingHours` | Offered services | see fidelity note below |
| 5 | `Appointment` | Appointment band | see fidelity note below |
| 6 | `Facilities` | Facilities | see fidelity note below |
| 7 | `Services` | Offered services | see fidelity note below |
| 8 | `Team` | — | no dedicated spec block |
| 9 | `Testimonials` | — | no dedicated spec block |
| 10 | `Blog` | Recent blogs | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `UtilityBar`
*anchors only* — BOOK APPOINTMENT

### `Navbar`
The system SHALL render a top navigation bar with the site name "Medical", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a banner section with a level-1 headline.

### `ServicingHours`
The system SHALL render an "Our Offered Services" section with service cards.

### `Appointment`
The system SHALL render an appointment band with a "Book an Appointment" call-to-action.

### `Facilities`
The system SHALL render an "Our Latest Facilities" section with at least three cards.

### `Services`
The system SHALL render an "Our Offered Services" section with service cards.

### `Team`
*anchors only* — Our Consultants

### `Testimonials`
*anchors only* — Previous testimonial · Next testimonial · Enjoy our Client&apos;s Feedback

### `Blog`
The system SHALL render an "Our Recent Blogs" section with at least two post cards.

### `Footer`
The system SHALL render a footer with the site name and link columns.

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
- **Provenance ban.** No file under `apps/medical/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/medical/public/CNAME` = `medical.free.componentdock.com`
  and the package `homepage` = `https://medical.free.componentdock.com`.
