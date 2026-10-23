# Medpact — Design Notes

Reference: **Medicare** — `https://colorlib.com/wp/template/medicare/`  
Live preview: `https://preview.colorlib.com/theme/medicare/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/medicare-free-template.jpg  
Shipped: https://medpact.free.componentdock.com

A clean, professional medical landing page with navigation, hero, services, departments, doctors, appointment form, testimonials, blog, and footer. Recreate the ColorLib "Medicare" hospital & clinics website template as "Medpact".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/medpact/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e6f2ff` | primary 50 |
| `--color-primary-100` | `#b3d9ff` | primary 100 |
| `--color-primary-200` | `#80bfff` | primary 200 |
| `--color-primary-300` | `#4da6ff` | primary 300 |
| `--color-primary-400` | `#1a8cff` | primary 400 |
| `--color-primary-500` | `#007bff` | primary 500 |
| `--color-primary-600` | `#0062cc` | primary 600 |
| `--color-primary-700` | `#004a99` | primary 700 |
| `--color-primary-800` | `#003166` | primary 800 |
| `--color-primary-900` | `#001933` | primary 900 |
| `--color-accent-50` | `#e6faf5` | accent 50 |
| `--color-accent-100` | `#b3f0e0` | accent 100 |
| `--color-accent-200` | `#80e6cc` | accent 200 |
| `--color-accent-300` | `#4ddcb7` | accent 300 |
| `--color-accent-400` | `#1ad2a3` | accent 400 |
| `--color-accent-500` | `#00b894` | accent 500 |
| `--color-accent-600` | `#009376` | accent 600 |
| `--color-accent-700` | `#006e59` | accent 700 |
| `--color-accent-800` | `#004a3b` | accent 800 |
| `--color-accent-900` | `#00251e` | accent 900 |
| `--color-brand` | `#007bff` | brand |
| `--color-brand-hover` | `#0062cc` | brand hover |
| `--color-accent` | `#00b894` | accent |
| `--color-accent-hover` | `#009376` | accent hover |
| `--color-heading` | `#2d3436` | heading |
| `--color-muted` | `#636e72` | muted |
| `--color-section-bg` | `#f8f9fa` | section bg |
| `--color-footer-bg` | `#2d3436` | footer bg |
| `--color-card-border` | `#e9ecef` | card border |
| `--font-heading` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Navigation bar | see fidelity note below |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `FeatureStrip` | Feature strip | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Services` | Services section | see fidelity note below |
| 7 | `Departments` | Departments section | see fidelity note below |
| 8 | `Doctors` | Doctors section | see fidelity note below |
| 9 | `AppointmentForm` | Appointment form | see fidelity note below |
| 10 | `Testimonials` | Testimonials section | see fidelity note below |
| 11 | `Blog` | Blog section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The page SHALL display a sticky navigation bar with the site logo, nav links (Home, About, Departments, Doctors, Blog, Contact), and an appointment CTA button.

### `Navbar`
*anchors only* — list

### `Hero`
The page SHALL display a hero section with a headline, description, and two CTA buttons (primary: Make Appointment, secondary: Our Services).

### `FeatureStrip`
The page SHALL display a feature strip with 4 icon cards (Emergency Help, Appointment, Qualified Doctors, 24/7 Service).

### `About`
The page SHALL display an about section with a heading, description, image, and checkmark list.

### `Services`
The page SHALL display a services section with 4 service cards (Cardiology, General Checkup, Neurology, Orthopedics).

### `Departments`
The page SHALL display a departments section with a grid of department cards.

### `Doctors`
The page SHALL display a doctors section with profile cards showing image, name, and specialty.

### `AppointmentForm`
The page SHALL display an appointment booking form with name, email, phone, department, date, and message fields.

### `Testimonials`
The page SHALL display a testimonials section with patient testimonial cards.

### `Blog`
The page SHALL display a blog section with post cards showing image, category, date, title, and excerpt.

### `Footer`
The page SHALL display a footer with the site logo, quick links, services links, newsletter form, and copyright with a Component Dock link.

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
- **Provenance ban.** No file under `apps/medpact/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/medpact/public/CNAME` = `medpact.free.componentdock.com`
  and the package `homepage` = `https://medpact.free.componentdock.com`.
