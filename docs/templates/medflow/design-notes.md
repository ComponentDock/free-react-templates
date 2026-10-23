# Medflow — Design Notes

Reference: **Medi** — `https://colorlib.com/wp/template/medi/`  
Live preview: `https://preview.colorlib.com/theme/medi/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/medi-plus-free-medical-website-template.jpg  
Shipped: https://medflow.free.componentdock.com

Medflow is a medical clinic landing page template featuring a hero banner with blue gradient overlay, welcome section with checklist, tabbed department showcase, doctor profiles, appointment booking form, quality health features, emergency contact banner, and a dark footer with department listings and hours.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**, **Work Sans**

## Design tokens (`apps/medflow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-primary` | `#0181f5` | brand primary |
| `--color-brand-primary-light` | `#5db2ff` | brand primary light |
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
| 1 | `Navbar` | Navbar displays navigation and booking CTA | see fidelity note below |
| 2 | `Hero` | Hero section displays clinic tagline | see fidelity note below |
| 3 | `Welcome` | Welcome section shows clinic intro | see fidelity note below |
| 4 | `Departments` | Departments tabbed showcase | see fidelity note below |
| 5 | `Doctors` | Doctor profiles grid | see fidelity note below |
| 6 | `BookAppointment` | Appointment booking form | see fidelity note below |
| 7 | `QualityHealth` | Quality Health feature cards | see fidelity note below |
| 8 | `EmergencyContact` | Emergency contact banner | see fidelity note below |
| 9 | `Footer` | Footer with departments and hours | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see a sticky navbar with logo, navigation links (Home, About, Departments, Doctors, Contact), and a "Book Appointment" button.

### `Hero`
Users SHALL see a full-width hero with blue gradient overlay, tagline "the best medical center", and headline "Bringing health to life for the whole family."

### `Welcome`
Users SHALL see a 2-column layout with an image on the left and "Welcome To Modern Clinic." text with checklist items on the right.

### `Departments`
Users SHALL see 6 department tabs (Dentistry, Cardiology, ENT Specialists, Neurology, Blood Screening, More) that switch content on click.

### `Doctors`
Users SHALL see 3 doctor cards in a row with photo, name, specialty, and social links (Facebook, LinkedIn, Twitter).

### `BookAppointment`
Users SHALL see a right-aligned form with doctor select dropdown, name, age, phone, email, date, time fields, and a submit button.

### `QualityHealth`
Users SHALL see 3 feature cards: Health Consultation, Find Health, and Search Doctor with icons.

### `EmergencyContact`
Users SHALL see a cyan overlay banner with "We are here for you", "Book Appointment" button, and phone number.

### `Footer`
Users SHALL see a dark footer with logo, description, social links, departments list, and operating hours. The copyright line SHALL link to Component Dock.

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
- **Provenance ban.** No file under `apps/medflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/medflow/public/CNAME` = `medflow.free.componentdock.com`
  and the package `homepage` = `https://medflow.free.componentdock.com`.
