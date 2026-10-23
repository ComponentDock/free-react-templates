# Dentalink — Design Notes

Reference: **Dentist** — `https://colorlib.com/wp/template/dentist/`  
Live preview: `https://preview.colorlib.com/theme/dentist/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dentist-free-template-1.jpg  
Shipped: https://dentalink.free.componentdock.com

Dentalink is a dental clinic landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Dentist" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/dentalink/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#67bc00` | brand |
| `--color-brand-dark` | `#4a8a00` | brand dark |
| `--color-ink` | `#04091e` | Ink — dark navy (#04091e from the original). |
| `--color-ink-light` | `#0a1530` | ink light |
| `--color-paper` | `#f9f9ff` | Soapstone — light section background (#f9f9ff from the original). |
| `--color-mist` | `#777777` | Mist — muted body text (#777777 from the original). |
| `--color-primary-50` | `#f0fbe0` | primary 50 |
| `--color-primary-100` | `#dcf5b8` | primary 100 |
| `--color-primary-200` | `#b8ec71` | primary 200 |
| `--color-primary-300` | `#8dde22` | primary 300 |
| `--color-primary-400` | `#67bc00` | primary 400 |
| `--color-primary-500` | `#4a8a00` | primary 500 |
| `--color-primary-600` | `#3a6e00` | primary 600 |
| `--color-primary-700` | `#2c5400` | primary 700 |
| `--color-primary-800` | `#1f3c00` | primary 800 |
| `--color-primary-900` | `#142600` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (headings + body). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header Navigation | see fidelity note below |
| 2 | `Hero` | Hero / Banner Section | see fidelity note below |
| 3 | `OpeningHours` | Opening Hours Section | see fidelity note below |
| 4 | `Services` | Services Section | see fidelity note below |
| 5 | `About` | About Section | see fidelity note below |
| 6 | `Testimonials` | Testimonials Section | see fidelity note below |
| 7 | `Team` | Team Section | see fidelity note below |
| 8 | `Features` | Features Section | see fidelity note below |
| 9 | `Appointment` | Appointment Section | see fidelity note below |
| 10 | `Blog` | Blog Section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
Users SHALL see a fixed header with logo, phone/email contact bar, navigation links (Home, About, Services, Opening Hours, Blog, Pricing, Contact), and social media icon links.

### `Hero`
Users SHALL see a full-width hero banner with dark overlay, heading, subheading, and CTA button.

### `OpeningHours`
Users SHALL see a white card with opening hours, a green "open now" indicator, and a schedule table.

### `Services`
Users SHALL see a grid of 4 service cards each with image, title, and description.

### `About`
Users SHALL see a dark-background split-layout section with image, heading, description, and 2 sub-feature items.

### `Testimonials`
Users SHALL see client testimonials with avatars, quotes, names, and titles.

### `Team`
Users SHALL see team member cards with photos, names, and roles.

### `Features`
Users SHALL see 6 feature items in a 2-column grid with icons and descriptions.

### `Appointment`
Users SHALL see a booking form with patient name, phone, email, DOB, appointment date, message, and confirm button.

### `Blog`
Users SHALL see blog post cards with image, date, title, and excerpt.

### `Footer`
Users SHALL see a dark footer with Top Products links, Contact Us info, Newsletter signup, copyright with Component Dock link, and social icons.

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
- **Provenance ban.** No file under `apps/dentalink/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dentalink/public/CNAME` = `dentalink.free.componentdock.com`
  and the package `homepage` = `https://dentalink.free.componentdock.com`.
