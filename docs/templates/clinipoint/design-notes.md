# Clinipoint — Design Notes

Reference: **Medica** — `https://colorlib.com/wp/template/medica/`  
Live preview: `https://preview.colorlib.com/theme/medica/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/medica-free-template.jpg  
Shipped: https://clinipoint.free.componentdock.com

Clinipoint is a health and medical clinic landing page template featuring a gradient top bar, sticky navbar, hero banner with dark overlay, contact info cards, three-column welcome cards (emergency/doctors/appointment), services grid on gradient background, doctor profiles, testimonials on dark background, stats counter, appointment booki…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700;800**, **Roboto**

## Design tokens (`apps/clinipoint/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-primary` | `#2f88fd` | brand primary |
| `--color-brand-accent` | `#3de6fa` | brand accent |
| `--color-brand-gradient-start` | `#3de6fa` | brand gradient start |
| `--color-brand-gradient-end` | `#243eff` | brand gradient end |
| `--color-brand-hero-overlay` | `#001c64` | brand hero overlay |
| `--color-brand-services-overlay` | `#001c64` | brand services overlay |
| `--color-brand-testimonials-overlay` | `#000000` | brand testimonials overlay |
| `--color-brand-footer` | `#172538` | brand footer |
| `--color-brand-footer-bottom` | `#0b131e` | brand footer bottom |
| `--color-brand-footer-text` | `#b8bdc3` | brand footer text |
| `--color-brand-heading` | `#1d1d1d` | brand heading |
| `--color-brand-body` | `#5f5f5f` | brand body |
| `--font-heading` | `'Open Sans', sans-serif` | font heading |
| `--font-body` | `'Roboto', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Gradient top bar displays social links and quick menu | see fidelity note below |
| 2 | `Navbar` | Sticky navbar with logo and navigation | see fidelity note below |
| 3 | `Hero` | Hero section displays medical services tagline | see fidelity note below |
| 4 | `ContactInfo` | Contact info section shows 3 info cards | see fidelity note below |
| 5 | `Welcome` | Welcome section with 3 feature cards and about text | see fidelity note below |
| 6 | `Services` | Hero section displays medical services tagline | see fidelity note below |
| 7 | `Doctors` | Doctors section shows 4 doctor profiles | see fidelity note below |
| 8 | `Testimonials` | Testimonials section on dark background | see fidelity note below |
| 9 | `Stats` | Stats counter section with 4 metrics | see fidelity note below |
| 10 | `AppointmentForm` | Appointment booking form with image | see fidelity note below |
| 11 | `Footer` | Footer with 4 columns and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
Users SHALL see a gradient top bar (cyan to blue) with social media icons on the left and quick links (FAQ, Book, Appointment, Contacts, email) on the right.

### `Navbar`
Users SHALL see a sticky navbar with the Clinipoint logo, navigation links (Home, About, Services, Doctors, Contact), and a search icon.

### `Hero`
Users SHALL see a full-width hero with dark overlay, headline "We provide top medical services", subtitle "More than 30 professionals", and two CTA buttons.

### `ContactInfo`
Users SHALL see a contact info bar with 3 cards: operating hours, phone numbers, and address.

### `Welcome`
Users SHALL see a section with 3 stacked cards (emergency info, doctors info, appointment form) and a "Welcome to Clinipoint Health Center" text area with specialty list and doctor image.

### `Services`
Users SHALL see a full-width hero with dark overlay, headline "We provide top medical services", subtitle "More than 30 professionals", and two CTA buttons.

### `Doctors`
Users SHALL see 4 doctor cards with photos, names, specialties, and social links.

### `Testimonials`
Users SHALL see a dark-background testimonials section with patient quotes and author info.

### `Stats`
Users SHALL see a gradient section with 4 counter cards: Patients since opening, Specialist Doctors, Years of Experience, Pro Bono Works.

### `AppointmentForm`
Users SHALL see a two-column layout with an appointment form (name, specialty, phone, doctor, email, date) on the left and a medical illustration on the right.

### `Footer`
Users SHALL see a dark footer with 4 columns (logo+description, latest news, quick links, contact info) and a bottom bar with copyright and Component Dock link.

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
- **Provenance ban.** No file under `apps/clinipoint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/clinipoint/public/CNAME` = `clinipoint.free.componentdock.com`
  and the package `homepage` = `https://clinipoint.free.componentdock.com`.
