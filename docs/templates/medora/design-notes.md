# Medora — Design Notes

Reference: **Medical Wordpress Themes** — `https://colorlib.com/wp/template/medical-wordpress-themes/`  
Live preview: `https://preview.colorlib.com/theme/medical-wordpress-themes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/medical-website-templates.jpg  
Shipped: https://medora.free.componentdock.com

Medora is a single-page medical clinic website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Medical Wordpress Themes" category design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design tokens (`apps/medora/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#1a73e8` | brand |
| `--color-brand-dark` | `#1464cc` | brand dark |
| `--color-brand-50` | `#eef4fc` | brand 50 |
| `--color-brand-100` | `#d9e8fa` | brand 100 |
| `--color-ink` | `#111827` | Ink — headings (#111827 from the source page CSS). |
| `--color-body` | `#374151` | Body — paragraph text (#374151 from the source page CSS). |
| `--color-mist` | `#4b5563` | Mist — muted / meta text (#4b5563 from the source page CSS). |
| `--color-paper` | `#f5f6f7` | Paper — utility bar + light section backgrounds (#f5f6f7). |
| `--color-charcoal` | `#0f1b2d` | Charcoal — dark navy footer. |
| `--color-primary-50` | `#eef4fc` | primary 50 |
| `--color-primary-100` | `#d9e8fa` | primary 100 |
| `--color-primary-200` | `#b0d1f5` | primary 200 |
| `--color-primary-300` | `#83b8f0` | primary 300 |
| `--color-primary-400` | `#4d9ceb` | primary 400 |
| `--color-primary-500` | `#2a86e9` | primary 500 |
| `--color-primary-600` | `#1a73e8` | primary 600 |
| `--color-primary-700` | `#1464cc` | primary 700 |
| `--color-primary-800` | `#1152a8` | primary 800 |
| `--color-primary-900` | `#0e4186` | primary 900 |
| `--font-sans` | `ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif` | Original uses a system sans-serif stack (no Google Font import). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `UtilityBar` | Utility bar | see fidelity note below |
| 2 | `Navbar` | Quick-access feature bar | see fidelity note below |
| 3 | `Hero` | Hero with overlay caption | see fidelity note below |
| 4 | `FeatureBar` | — | no dedicated spec block |
| 5 | `Welcome` | Welcome section | see fidelity note below |
| 6 | `Departments` | Departments section | see fidelity note below |
| 7 | `Doctors` | Doctors section | see fidelity note below |
| 8 | `Facilities` | Facilities section | see fidelity note below |
| 9 | `Appointment` | Appointment form | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `UtilityBar`
The system SHALL render a thin top utility bar above the header with contact information and an appointment link.

### `Navbar`
The system SHALL render a row of four blue feature tiles with icons and labels linking to their sections.

### `Hero`
The system SHALL render a full-width hero with a doctor photo, a dark overlay caption box, and a blue CTA button.

### `FeatureBar`
*anchors only* — Quick access

### `Welcome`
The system SHALL render a white welcome/about section with text on the left and a photo on the right.

### `Departments`
The system SHALL render a departments/services grid of six cards.

### `Doctors`
The system SHALL render a "find a doctor" grid of doctor cards.

### `Facilities`
The system SHALL render a facilities section with text on one side and a photo on the other.

### `Appointment`
The system SHALL render an appointment/contact section with a validated request form and clinic details.

### `Footer`
The system SHALL render a dark footer with a copyright line and a Component Dock credit link.

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
- **Provenance ban.** No file under `apps/medora/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/medora/public/CNAME` = `medora.free.componentdock.com`
  and the package `homepage` = `https://medora.free.componentdock.com`.
