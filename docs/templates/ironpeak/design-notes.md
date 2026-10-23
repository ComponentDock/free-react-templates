# Ironpeak — Design Notes

Reference: **Fitnezz** — `https://colorlib.com/wp/template/fitnezz/`  
Live preview: `https://preview.colorlib.com/theme/fitnezz/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fitnezz-free-template.jpg  
Shipped: https://ironpeak.free.componentdock.com

Ironpeak is a fitness and gym landing page with featured classes, a schedule grid, trainer profiles, testimonials and blog cards. It recreates the ColorLib **Fitnezz** design (https://colorlib.com/wp/template/fitnezz/).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;700;800**

## Design tokens (`apps/ironpeak/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f4b214` | brand |
| `--color-brand-dark` | `#d9a00e` | brand dark |
| `--color-ink` | `#1a1a2e` | Ink — dark text/headings. |
| `--color-ink-dark` | `#121220` | ink dark |
| `--color-muted` | `#6b7280` | Muted — secondary text. |
| `--color-primary-50` | `#fef9e7` | primary 50 |
| `--color-primary-100` | `#fef0c7` | primary 100 |
| `--color-primary-200` | `#fde08a` | primary 200 |
| `--color-primary-300` | `#fcd04d` | primary 300 |
| `--color-primary-400` | `#f7be24` | primary 400 |
| `--color-primary-500` | `#f4b214` | primary 500 |
| `--color-primary-600` | `#d9a00e` | primary 600 |
| `--color-primary-700` | `#b8820b` | primary 700 |
| `--color-primary-800` | `#946709` | primary 800 |
| `--color-primary-900` | `#7a5408` | primary 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Fonts: Open Sans for all text. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Navbar renders brand and navigation links | see fidelity note below |
| 2 | `Hero` | Hero section displays heading and CTAs | see fidelity note below |
| 3 | `FeaturedClasses` | Featured Classes section shows class cards | see fidelity note below |
| 4 | `Schedule` | Schedule section shows class times in a grid | see fidelity note below |
| 5 | `Trainers` | Trainers section displays trainer profiles | see fidelity note below |
| 6 | `Testimonials` | Testimonials section shows client quotes | see fidelity note below |
| 7 | `Blog` | Blog section shows post cards | see fidelity note below |
| 8 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Header`
The navbar SHALL display the brand name "Ironpeak" with golden accent, navigation links (Home, About, Classes, Schedule, Trainers, Contact), and a "Become a Member" CTA button. The navbar SHALL be dark-backgrounded and sticky. On mobile, a hamburger menu SHALL toggle the nav links.

### `Hero`
The hero SHALL show a full-width background image with dark overlay, the heading "Health is wealth", a description paragraph, and two CTAs ("Get Started" linking to classes, "Download").

### `FeaturedClasses`
The featured classes section SHALL display four class cards in a grid, each with an image, price ($30.99), and class name. The section heading SHALL read "Featured Classes" with decorative background text "The Classes".

### `Schedule`
The schedule section SHALL display four schedule items in a 2-column grid, each with an image, class name, description, time, date, and "Join from $15" button.

### `Trainers`
The trainers section SHALL display three trainer cards in a grid, each with a round portrait image, name, and role "Gym Trainer".

### `Testimonials`
The testimonials section SHALL display three testimonial cards, each with a quote, author photo, author name, and author role.

### `Blog`
The blog section SHALL display two blog post cards, each with an image, title, date, description, and "Read More" button.

### `Footer`
The footer SHALL display About Us, Contact Info, Quick Links, and Newsletter sections on a dark background. The footer copyright line SHALL include "More templates at Component Dock" linking to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/ironpeak/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ironpeak/public/CNAME` = `ironpeak.free.componentdock.com`
  and the package `homepage` = `https://ironpeak.free.componentdock.com`.
