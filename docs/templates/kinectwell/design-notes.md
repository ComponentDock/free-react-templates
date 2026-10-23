# Kinectwell — Design Notes

Reference: **Physical Therapy** — `https://colorlib.com/wp/template/physical-therapy/`  
Live preview: `https://preview.colorlib.com/theme/physical-therapy/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/physicaltherapy-free-templatel.jpg  
Shipped: https://kinectwell.free.componentdock.com

Kinectwell is a professional physical therapy and rehabilitation landing page template. It provides a single-page marketing site for physiotherapy clinics, chiropractors, and massage therapy practices with sections for navigation, hero, about, services, why-choose-us, appointment CTA, testimonials, and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/kinectwell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0f9f0` | primary 50 |
| `--color-primary-100` | `#d4f0d4` | primary 100 |
| `--color-primary-200` | `#a8e0a8` | primary 200 |
| `--color-primary-300` | `#77cc6d` | primary 300 |
| `--color-primary-400` | `#5cb852` | primary 400 |
| `--color-primary-500` | `#4a9e40` | primary 500 |
| `--color-primary-600` | `#3d8234` | primary 600 |
| `--color-primary-700` | `#2f6628` | primary 700 |
| `--color-primary-800` | `#224a1c` | primary 800 |
| `--color-primary-900` | `#152e10` | primary 900 |
| `--color-brand` | `#77cc6d` | brand |
| `--color-brand-hover` | `#5cb852` | brand hover |
| `--color-heading` | `#333333` | heading |
| `--color-body` | `#777777` | body |
| `--color-alt-bg` | `#f9f9f9` | alt bg |
| `--color-footer-bg` | `#222222` | footer bg |
| `--color-footer-text` | `#cccccc` | footer text |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Hero Section | see fidelity note below |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `About` | About Section | see fidelity note below |
| 4 | `Services` | Services Section | see fidelity note below |
| 5 | `WhyChooseUs` | Why Choose Us Section | see fidelity note below |
| 6 | `AppointmentCTA` | Appointment CTA | see fidelity note below |
| 7 | `Testimonials` | Testimonials Section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The template SHALL render a hero section with an eyebrow text, headline, description paragraph, CTA button, and hero image.

### `Hero`
The template SHALL render a hero section with an eyebrow text, headline, description paragraph, CTA button, and hero image.

### `About`
The template SHALL render an about section with a heading, description, feature checklist, learn-more button, and an image.

### `Services`
The template SHALL render a services section with three service cards (Physical Therapy, Chiropractic Therapy, Massage Therapy), each with an icon, title, and description.

### `WhyChooseUs`
The template SHALL render a why-choose-us section with four feature items (Professional Staff, Certified Equipment, Emergency Services, Opening Hours).

### `AppointmentCTA`
The template SHALL render a full-width green appointment call-to-action section with a headline, description, and button.

### `Testimonials`
The template SHALL render a testimonials section with three patient testimonial cards, each containing a quote, patient name, role, and avatar image.

### `Footer`
The template SHALL render a footer with the site logo and about blurb, Quick Links navigation, Services navigation, copyright notice, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/kinectwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/kinectwell/public/CNAME` = `kinectwell.free.componentdock.com`
  and the package `homepage` = `https://kinectwell.free.componentdock.com`.
