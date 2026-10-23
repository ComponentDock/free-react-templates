# Pose — Design Notes

Reference: **Stylistic** — `https://colorlib.com/wp/template/stylistic/`  
Live preview: `https://preview.colorlib.com/theme/stylistic/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/stylistic-free-template.jpg  
Shipped: https://pose.free.componentdock.com

Pose is a single-page model-agency template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Stylistic" design (see TEMPLATES.md — three duplicate rows at lines 231, 1189, 1731; ALL must be marked `[x]` when done), built under a NEW name with the monorepo stack: Vite + React 19 + Tailwind CSS…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**, **Vidaloka**

## Design tokens (`apps/pose/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f34573` | brand |
| `--color-ink` | `#212529` | ink |
| `--color-night` | `#191919` | night |
| `--color-dark` | `#343a40` | dark |
| `--color-mist` | `#6c757d` | mist |
| `--color-cloud` | `#f8f9fa` | cloud |
| `--color-primary-50` | `#fef2f5` | primary 50 |
| `--color-primary-100` | `#fde3ea` | primary 100 |
| `--color-primary-200` | `#fbc3d2` | primary 200 |
| `--color-primary-300` | `#f897ab` | primary 300 |
| `--color-primary-400` | `#f56a89` | primary 400 |
| `--color-primary-500` | `#f34573` | primary 500 |
| `--color-primary-600` | `#dd2557` | primary 600 |
| `--color-primary-700` | `#b81b46` | primary 700 |
| `--color-primary-800` | `#97193e` | primary 800 |
| `--color-primary-900` | `#7f1939` | primary 900 |
| `--font-display` | `'Vidaloka', ui-serif, Georgia, serif` | font display |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Welcome hero | see fidelity note below |
| 3 | `FeaturedModels` | Featured model | see fidelity note below |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Services` | Services | see fidelity note below |
| 6 | `TopModels` | Top models | see fidelity note below |
| 7 | `Blog` | Recent Blog | see fidelity note below |
| 8 | `Testimony` | Testimony | see fidelity note below |
| 9 | `Appointment` | Contact / Appointment | see fidelity note below |
| 10 | `Quote` | Quote band | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Pose", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width, dark hero section with a headline.

### `FeaturedModels`
The system SHALL render a featured model section with the heading "A Professional Model Agency" and at least four model cards.

### `About`
*anchors only* — Hello! Pose · A Professional Model Agency

### `Services`
The system SHALL render a dark services band with at least four cards.

### `TopModels`
The system SHALL render an "Our Tops Model's" section with at least eight model tiles.

### `Blog`
The system SHALL render a "Recent Blog" section with at least three post cards.

### `Testimony`
The system SHALL render a client testimony band.

### `Appointment`
The system SHALL render an appointment section with "Contact Us", "Become A Model?" and "Model Courses" content.

### `Quote`
The system SHALL render a "Request a Quote" band.

### `Footer`
The system SHALL render a dark footer with the site name and link columns.

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
- **Provenance ban.** No file under `apps/pose/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pose/public/CNAME` = `pose.free.componentdock.com`
  and the package `homepage` = `https://pose.free.componentdock.com`.
