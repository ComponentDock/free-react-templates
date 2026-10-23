# Healix — Design Notes

Reference: **Medex** — `https://colorlib.com/wp/template/medex/`  
Live preview: `https://preview.colorlib.com/theme/medex/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/medex-free-template.jpg  
Shipped: https://healix.free.componentdock.com

A medical template with topbar with contact, statistics counter, about section with features, doctor profiles, blog and app sections. Build a medical and healthcare website template that faithfully recreates the ColorLib Medex design as a React 19 + Tailwind CSS 4 + TypeScript application under the name "Healix".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700;900**

## Design tokens (`apps/healix/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-blue` | `#2086c2` | brand blue |
| `--color-brand-blue-light` | `#299adc` | brand blue light |
| `--color-brand-green` | `#3bc053` | brand green |
| `--color-body` | `#666666` | body |
| `--color-body-dark` | `#333333` | body dark |
| `--color-section-light` | `#f2f2f2` | section light |
| `--color-section-dark` | `#1a1a2e` | section dark |
| `--font-family-heading` | `'Roboto', sans-serif` | font family heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar with contact information | see fidelity note below |
| 2 | `Navbar` | Navbar with navigation and CTA | see fidelity note below |
| 3 | `HeroBanner` | Hero banner with appointment search | see fidelity note below |
| 4 | `AppointmentSection` | Appointment form section | see fidelity note below |
| 5 | `StatsCounter` | Statistics counter | see fidelity note below |
| 6 | `AboutSection` | About section with features | see fidelity note below |
| 7 | `Departments` | Departments grid | see fidelity note below |
| 8 | `Doctors` | Doctor profiles | see fidelity note below |
| 9 | `BlogSection` | Blog section | see fidelity note below |
| 10 | `Testimonials` | Testimonials | see fidelity note below |
| 11 | `Footer` | Footer with Component Dock attribution | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The template SHALL display a top bar with phone number, email address, and physical address.

### `Navbar`
The template SHALL display a dark navigation bar with logo, navigation links, and an emergency phone CTA.

### `HeroBanner`
The template SHALL display a full-height hero section with headline and appointment search form.

### `AppointmentSection`
The template SHALL display a welcome section with an appointment booking form.

### `StatsCounter`
The template SHALL display key statistics with animated counters.

### `AboutSection`
The template SHALL display an about section with clinic description and feature highlights.

### `Departments`
The template SHALL display department cards with background images.

### `Doctors`
The template SHALL display doctor profiles with names and specialties.

### `BlogSection`
The template SHALL display latest blog posts with titles, excerpts, dates, and read more links.

### `Testimonials`
The template SHALL display patient testimonials with names and quotes.

### `Footer`
The template SHALL display a footer with contact info, department links, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/healix/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/healix/public/CNAME` = `healix.free.componentdock.com`
  and the package `homepage` = `https://healix.free.componentdock.com`.
