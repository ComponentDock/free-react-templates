# Medprime — Design Notes

Reference: **Medi 2** — `https://colorlib.com/wp/template/medi-2/`  
Live preview: `https://preview.colorlib.com/theme/medi-2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/nedi-free-template.jpg  
Shipped: https://medprime.free.componentdock.com

Medprime is a medical clinic landing page template that recreates the ColorLib "Medi 2" design using React 19, Vite, Tailwind CSS 4, and TypeScript. It provides a professional medical website with sections for services, doctors, appointments, and emergency contact.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**, **Work Sans**

## Design tokens (`apps/medprime/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-primary` | `#1a73e8` | brand primary |
| `--color-brand-primary-dark` | `#1464cc` | brand primary dark |
| `--color-brand-hero-overlay` | `#001c64` | brand hero overlay |
| `--color-brand-emergency` | `#00abe7` | brand emergency |
| `--color-brand-footer` | `#152538` | brand footer |
| `--color-brand-footer-text` | `#b8bdc3` | brand footer text |
| `--color-brand-heading` | `#191d34` | brand heading |
| `--color-brand-body` | `#5c5c5c` | brand body |
| `--font-heading` | `'Work Sans', sans-serif` | font heading |
| `--font-body` | `'Roboto', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Blue-themed navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section with medical imagery | see fidelity note below |
| 3 | `Welcome` | Welcome section with doctor image | see fidelity note below |
| 4 | `Departments` | Department cards grid | see fidelity note below |
| 5 | `Doctors` | Doctor team cards | see fidelity note below |
| 6 | `BookAppointment` | Appointment booking form | see fidelity note below |
| 7 | `QualityHealth` | Quality health features section | see fidelity note below |
| 8 | `EmergencyContact` | Emergency contact bar | see fidelity note below |
| 9 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky navigation bar with a blue (#1a73e8) background, white logo text, navigation links (Home, About, Blog, Pages, Contact), and a white "Book Appointment" button.

### `Hero`
The template SHALL display a full-width hero section with a dark blue overlay on a medical-themed background image, a subtitle "THE BEST MEDICAL CENTER", a heading "Bringing health to life for the whole family.", and a "Discover More" button with white border.

### `Welcome`
The template SHALL display a two-column welcome section with a doctor image on the left and a "Welcome To Modern Clinic." heading with descriptive text and a "Our Departments" button on the right.

### `Departments`
The template SHALL display a 3-column grid of department cards (Cardiology, Neurology, Ophthalmology, Orthopedics, General Medicine, Pediatrics) with icons, titles, and descriptions on a light gray background.

### `Doctors`
The template SHALL display doctor cards with photos, names, specialties, and social media icon overlays on hover.

### `BookAppointment`
The template SHALL display a form with fields for name, email, phone, department select, date, and message, with a submit button.

### `QualityHealth`
The template SHALL display four feature cards (Quality Services, 24/7 Emergency, Expert Doctors, Trusted Care) with icons and descriptions.

### `EmergencyContact`
The template SHALL display a bright blue (#00abe7) emergency contact bar with phone number, location, and working hours.

### `Footer`
The template SHALL display a dark footer (#152538) with logo, three link columns (Services, Company, Support), copyright notice, and a "Made with Component Dock" link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/medprime/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/medprime/public/CNAME` = `medprime.free.componentdock.com`
  and the package `homepage` = `https://medprime.free.componentdock.com`.
