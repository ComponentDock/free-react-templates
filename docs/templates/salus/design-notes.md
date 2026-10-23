# Salus — Design Notes

Reference: **Docmed** — `https://colorlib.com/wp/template/docmed/`  
Live preview: `https://preview.colorlib.com/theme/docmed/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/docmed-free-template.jpg  
Shipped: https://salus.free.componentdock.com

Salus is a single-page medical/hospital landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@200;300;400;500;600;700**

## Design tokens (`apps/salus/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#009dff` | brand |
| `--color-brand-deep` | `#0181f5` | brand deep |
| `--color-sky` | `#5db2ff` | sky |
| `--color-band` | `#83c4ff` | band |
| `--color-tint` | `#f5fbff` | tint |
| `--color-ink` | `#1f1f1f` | ink |
| `--color-body` | `#727272` | body |
| `--color-muted` | `#919191` | muted |
| `--color-fade` | `#bababa` | fade |
| `--color-line` | `#e8e8e8` | line |
| `--color-form` | `#e5e6e9` | form |
| `--color-primary-50` | `#e6f6ff` | primary 50 |
| `--color-primary-100` | `#ccecff` | primary 100 |
| `--color-primary-200` | `#99d9ff` | primary 200 |
| `--color-primary-300` | `#66c6ff` | primary 300 |
| `--color-primary-400` | `#33b3ff` | primary 400 |
| `--color-primary-500` | `#009dff` | primary 500 |
| `--color-primary-600` | `#0084d9` | primary 600 |
| `--color-primary-700` | `#006bb3` | primary 700 |
| `--color-primary-800` | `#00538c` | primary 800 |
| `--color-primary-900` | `#003a66` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: Poppins (200–700) — Google Fonts. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Header top bar | see fidelity note below |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `HeroSlider` | Hero slider | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Welcome` | Welcome section | see fidelity note below |
| 6 | `Departments` | Departments section | see fidelity note below |
| 7 | `Testimonials` | Testimonials slider | see fidelity note below |
| 8 | `BusinessTabs` | Business tabs | see fidelity note below |
| 9 | `ExpertDoctors` | Expert doctors slider | see fidelity note below |
| 10 | `EmergencyBand` | Emergency contact band | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |
| 12 | `AppointmentModal` | Appointment modal | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The system SHALL render a light-blue utility bar above the header with social icons on the left and contact info on the right.

### `Navbar`
*anchors only* — Main · Toggle menu · Mobile

### `HeroSlider`
The system SHALL render a full-width hero carousel with three slides, each showing a headline, excerpt, and CTA button.

### `Services`
The system SHALL render a blue band with three service cards, each with an icon, title, description, and a call-to-action.

### `Welcome`
The system SHALL render a welcome section with two overlapping images on the left and a heading, description, checklist, and "Learn More" button on the right.

### `Departments`
The system SHALL render a centered "Our Departments" title followed by a grid of six department cards, each with an image, title, description, and "Learn More" link.

### `Testimonials`
The system SHALL render a full-width testimonial carousel with image background and dark overlay, each slide showing a quote icon, testimonial text, and author name.

### `BusinessTabs`
The system SHALL render three tabs on a light background, each with an icon, heading, paragraph, and an image.

### `ExpertDoctors`
The system SHALL render an "Expert Doctors" title and a carousel of doctor cards, each with a photo, name, and specialty.

### `EmergencyBand`
The system SHALL render two emergency panels with background images, the first with an emergency heading and phone number, the second with an appointment heading and button.

### `Footer`
The system SHALL render a dark footer with a logo/blurb column, a Departments links column, a Useful Links column, an Address column, and a copyright bar.

### `AppointmentModal`
The system SHALL render a modal dialog with an appointment form opened by the "Make an Appointment" buttons.

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
- **Provenance ban.** No file under `apps/salus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/salus/public/CNAME` = `salus.free.componentdock.com`
  and the package `homepage` = `https://salus.free.componentdock.com`.
