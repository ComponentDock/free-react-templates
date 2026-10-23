# Piston — Design Notes

Reference: **Bodyfit** — `https://colorlib.com/wp/template/bodyfit/`  
Live preview: `https://preview.colorlib.com/theme/bodyfit/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bodyfit-free-template-1.jpg  
Shipped: https://piston.free.componentdock.com

Piston is a single-page gym/fitness landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Bodyfit" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:wght@300;400;500;600;700;800**

## Design tokens (`apps/piston/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#78d5ef` | Piston brand palette — light blue/cyan primary, yellow/gold accent. |
| `--color-brand-dark` | `#5cc4e3` | brand dark |
| `--color-accent` | `#e5ce48` | Accent — yellow/gold from the info bar and highlights. |
| `--color-accent-dark` | `#d4bd2e` | accent dark |
| `--color-dark` | `#141414` | Dark backgrounds. |
| `--color-darker` | `#0d0d0d` | darker |
| `--color-ink` | `#212529` | Body text. |
| `--color-mist` | `#6c757d` | Muted text. |
| `--color-paper` | `#ffffff` | Paper — white background. |
| `--color-primary-50` | `#eef9fd` | primary 50 |
| `--color-primary-100` | `#d4f1f9` | primary 100 |
| `--color-primary-200` | `#a9e3f3` | primary 200 |
| `--color-primary-300` | `#78d5ef` | primary 300 |
| `--color-primary-400` | `#5cc4e3` | primary 400 |
| `--color-primary-500` | `#3ab3d7` | primary 500 |
| `--color-primary-600` | `#2896b8` | primary 600 |
| `--color-primary-700` | `#1e7a97` | primary 700 |
| `--color-primary-800` | `#1a6478` | primary 800 |
| `--color-primary-900` | `#185265` | primary 900 |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | Font: Work Sans from Google Fonts. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and mobile menu | see fidelity note below |
| 2 | `Hero` | Hero carousel with gym headline and CTA | see fidelity note below |
| 3 | `InfoBar` | Info bar with contact details | see fidelity note below |
| 4 | `About` | About section with video play button | see fidelity note below |
| 5 | `Services` | Services section ("Our Process") with icon cards | see fidelity note below |
| 6 | `Programs` | Programs section with fitness program list | see fidelity note below |
| 7 | `StatsCounter` | Stats counter section | see fidelity note below |
| 8 | `Coaches` | Coaches section with profiles | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `Packages` | Packages (pricing) section | see fidelity note below |
| 11 | `Blog` | Blog section | see fidelity note below |
| 12 | `Gallery` | Gallery section | see fidelity note below |
| 13 | `AppointmentForm` | Appointment booking form | see fidelity note below |
| 14 | `Footer` | Footer with company info and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display the Piston logo, desktop navigation links (Home, Program, Coaches, Schedule, About, Blog, Contact), and a mobile hamburger menu toggle.

### `Hero`
The hero section SHALL display an image carousel with gym-related headlines and a "Get Started Now" call-to-action button.

### `InfoBar`
The info bar SHALL display phone number, address, and opening hours in a horizontal strip with a yellow (#e5ce48) background.

### `About`
The about section SHALL display a split layout with an image (with play button overlay) on one side and a "Welcome to Piston" heading with description on the other.

### `Services`
The services section SHALL display 4 service cards (Analyze Your Goal, Work Hard On It, Improve Your Performance, Achieve Perfect Body) on a dark background with icons.

### `Programs`
The programs section SHALL display a heading, description, "View Full Programs" outline button, and 5 program items (Body Building, Aerobic Classes, Weight Lifting, Yoga Classes, Cardio Training) with icons.

### `StatsCounter`
The counter section SHALL display 4 animated stat counters (Happy Customers, Perfect Bodies, Working Hours, Success Stories) on a dark parallax background.

### `Coaches`
The coaches section SHALL display 4 coach profiles (Oscar Brook, Leonard Smith, James Buffer, Maricar Collins) with photo, role, and social media links.

### `Testimonials`
The testimonials section SHALL display customer testimonials with quotes, author avatars, names, and roles on a dark parallax background.

### `Packages`
The packages section SHALL display 3 pricing cards (Muscle Build Pro, Women Strength Training, Fat Burning Pro) with images, descriptions, prices, and "Enroll Now" links.

### `Blog`
The blog section SHALL display 3 blog post cards with images, dates, author, comment counts, titles, and excerpts.

### `Gallery`
The gallery section SHALL display a 4-column image grid with hover overlay showing a search icon.

### `AppointmentForm`
The appointment section SHALL display a form with fields for First Name, Last Name, Date, Time, Phone, and Message, plus an "Appointment" submit button.

### `Footer`
The footer SHALL display 4 columns (About Us with social links, Recent Blog, Services links, Have a Questions? with contact info), a copyright line, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/piston/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/piston/public/CNAME` = `piston.free.componentdock.com`
  and the package `homepage` = `https://piston.free.componentdock.com`.
