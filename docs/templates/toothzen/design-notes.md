# Toothzen — Design Notes

Reference: **Dentamax** — `https://colorlib.com/wp/template/dentamax/`  
Live preview: `https://preview.colorlib.com/theme/dentamax/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dentamax-free-template.jpg  
Shipped: https://toothzen.free.componentdock.com

A Dental Clinic template with hero, services, features and appointment, about, team and counter sections. Recreation of ColorLib's "Dentamax" template as a React 19 + Vite + Tailwind 4 + TypeScript dental clinic website.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/toothzen/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-tooth-blue` | `#007bff` | Toothzen brand palette — recreated from the ColorLib "Dentamax" design |
| `--color-tooth-dark-blue` | `#0f4883` | tooth dark blue |
| `--color-tooth-teal` | `#65d8ea` | tooth teal |
| `--color-tooth-teal-light` | `#e1f9fb` | tooth teal light |
| `--color-tooth-text` | `#212529` | tooth text |
| `--color-tooth-muted` | `#6c757d` | tooth muted |
| `--color-tooth-footer-text` | `#6c8faf` | tooth footer text |
| `--color-tooth-light-bg` | `#f8f9fa` | tooth light bg |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Transparent navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services strip | see fidelity note below |
| 4 | `Features` | Features and appointment form | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Team` | Team section | see fidelity note below |
| 7 | `Counter` | Counter section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Newsletter` | Newsletter section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed navbar with the brand name "Toothzen" (dark blue with teal accent), navigation links (Home, About, Services, Team, Blog, Contact), and an Appointment CTA button. On mobile, the navbar SHALL show a hamburger toggle that opens/closes a slide-down mobile menu.

### `Hero`
The system SHALL render a full-width hero section with a gradient overlay (peach → tan → teal), a background image, a headline "Achieve Desired Perfect Smile", descriptive text, and two CTA buttons ("Make an Appointment" and "Our Services").

### `Services`
The system SHALL render 4 service cards (Emergency Service, Qualified Dentist, General Treatment, Online Appointment) with teal circular icons, white card backgrounds, headings, and descriptions.

### `Features`
The system SHALL render a "Make An Appointment" section with a gradient background, 4 feature items (Easy Booking, Experience, Flexible Schedule, Best Price Guarantee), and an appointment form with Name, Phone, Date, Time, Service fields and a submit button.

### `About`
The system SHALL render an About section with the heading "We Are Toothzen A Dental Clinic", a clinic image, descriptive text, and a "Get in touch with us" CTA link.

### `Team`
The system SHALL render a Team section with the heading "Our Qualified Dentist", 4 dentist cards with photos, names, roles, and social media icon links.

### `Counter`
The system SHALL render a counter section with a background image and 3 animated stat items (Year Experience, Our Staff, Services Provided) that count up when scrolled into view.

### `Testimonials`
The system SHALL render a Testimonials section with the heading "What Our Clients Say" and 3 testimonial cards with quotes, star ratings, and client names.

### `Blog`
The system SHALL render a Blog section with the heading "Recent Posts" and 3 blog post cards with images, titles, dates, and "Read more" links.

### `Newsletter`
The system SHALL render a Newsletter section with a background image, heading "Subscribe to our Newsletter", an email input, and a "Subscribe" button.

### `Footer`
The system SHALL render a footer with the brand name, link columns (Toothzen, Explore, Info), copyright notice, and a "Made with Component Dock" link pointing to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/toothzen/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/toothzen/public/CNAME` = `toothzen.free.componentdock.com`
  and the package `homepage` = `https://toothzen.free.componentdock.com`.
