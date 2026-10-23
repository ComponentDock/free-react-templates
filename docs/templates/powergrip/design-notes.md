# Powergrip — Design Notes

Reference: **Robust** — `https://colorlib.com/wp/template/robust/`  
Live preview: `https://preview.colorlib.com/theme/robust/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/robust-free-template.jpg  
Shipped: https://powergrip.free.componentdock.com

PowerGrip is a gym and fitness landing page template that recreates the ColorLib "Robust" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. It features a hero slider, program cards, services, class schedule, testimonials, trainers, classes, events, blog, newsletter, and a footer with Component Dock branding.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;700;900**

## Design tokens (`apps/powergrip/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fdf2f2` | primary 50 |
| `--color-primary-100` | `#fce1e1` | primary 100 |
| `--color-primary-200` | `#fac8c8` | primary 200 |
| `--color-primary-300` | `#f5a0a0` | primary 300 |
| `--color-primary-400` | `#eb6868` | primary 400 |
| `--color-primary-500` | `#dc2f2f` | primary 500 |
| `--color-primary-600` | `#c42424` | primary 600 |
| `--color-primary-700` | `#a51c1c` | primary 700 |
| `--color-primary-800` | `#881b1b` | primary 800 |
| `--color-primary-900` | `#721d1d` | primary 900 |
| `--color-brand` | `#dc2f2f` | brand |
| `--color-brand-dark` | `#c42424` | brand dark |
| `--color-ink` | `#333333` | ink |
| `--color-muted` | `#999999` | muted |
| `--color-body` | `#666666` | body |
| `--color-light` | `#f8f8f8` | light |
| `--color-overlay` | `rgba(0, 0, 0, 0.7)` | overlay |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar navigation | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `IntroPrograms` | Intro programs | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Schedule` | Class schedule | see fidelity note below |
| 6 | `Testimonials` | Testimonials | see fidelity note below |
| 7 | `Trainers` | Trainers | see fidelity note below |
| 8 | `Classes` | Classes | see fidelity note below |
| 9 | `Events` | Events | see fidelity note below |
| 10 | `Blog` | Blog | see fidelity note below |
| 11 | `Newsletter` | Newsletter | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see a sticky dark navbar with the "PowerGrip" logo and navigation links (Home, Classes, Schedule, Trainers, Events, Blog, Contact).

### `Hero`
Users SHALL see a full-width hero section with a background image, dark overlay, motivational headline, and a "Join Classes" CTA button that auto-advances.

### `IntroPrograms`
Users SHALL see three program cards (Body Building, Yoga Program, Aerobics Classes) each with an image, description, and price.

### `Services`
Users SHALL see four service cards (Cardio, Body Building, Karate, Boxing) with icons and descriptions.

### `Schedule`
Users SHALL see a weekly schedule with day tabs and class entries.

### `Testimonials`
Users SHALL see three testimonial cards with quotes and avatars over a parallax background.

### `Trainers`
Users SHALL see four trainer cards with photos and specialties.

### `Classes`
Users SHALL see three class cards with images, prices, titles, and "Learn More" links.

### `Events`
Users SHALL see three event cards with dates, organizers, titles, and locations.

### `Blog`
Users SHALL see three blog cards with images, dates, authors, titles, and excerpts.

### `Newsletter`
Users SHALL see an email subscription form with an input field and subscribe button.

### `Footer`
Users SHALL see a four-column footer (About, Quick Links, Recent Posts, Contact) with a Component Dock copyright link.

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
- **Provenance ban.** No file under `apps/powergrip/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/powergrip/public/CNAME` = `powergrip.free.componentdock.com`
  and the package `homepage` = `https://powergrip.free.componentdock.com`.
