# Alignwell — Design Notes

Reference: **Chiropractic** — `https://colorlib.com/wp/template/chiropractic/`  
Live preview: `https://preview.colorlib.com/theme/chiropractic/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/chiropractic-free-template.jpg  
Shipped: https://alignwell.free.componentdock.com

Recreate the ColorLib Chiropractic template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application under the name "AlignWell".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700**

## Design tokens (`apps/alignwell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-sans` | `'Lato', system-ui, sans-serif` | font sans |
| `--color-brand` | `#007bff` | brand |
| `--color-brand-dark` | `#0056b3` | brand dark |
| `--color-ink` | `#1c1c1e` | ink |
| `--color-ink-dark` | `#121214` | ink dark |
| `--color-mist` | `#6b7280` | mist |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar and navigation | see fidelity note below |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `Appointment` | Appointment booking form | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Team` | Team section | see fidelity note below |
| 7 | `About` | About section with stats | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Gallery` | Gallery section | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The template SHALL display a top bar with contact email, help desk link, and social media icons. The sticky navbar SHALL include the AlignWell brand logo, navigation links (Home, About, Services, Team, Gallery, Blog, Contact), and a "Make an Appointment" CTA button. The navbar SHALL support a mobile hamburger menu.

### `Navbar`
*anchors only* — Primary · Mobile · AlignWell · Make an Appointment

### `Hero`
The template SHALL display a hero section with a background image, overlay, headline text, description, and a "Book an Appointment" CTA button.

### `Appointment`
The template SHALL display a split appointment section with a booking form on the left (name, phone, service select, doctor select, date, time, submit) and business hours + emergency phone on the right. The form SHALL show a success message on valid submission.

### `Services`
The template SHALL display a 3-column grid of 6 services, each with an icon, title, description, and "Read more" link.

### `Team`
The template SHALL display horizontally scrollable staff cards with name, role, photo, and social icons.

### `About`
The template SHALL display an about section with an image, description text, and three stat counters (45+ Years of Experience, 2342+ Happy Customers, 30+ Awards Winning).

### `Testimonials`
The template SHALL display a dark-background testimonials section with client quotes, avatars, names, and roles.

### `Gallery`
The template SHALL display a grid of 8 work/treatment images with hover overlay and labels.

### `Blog`
The template SHALL display 3 blog post cards with image, author, date, and title.

### `Footer`
The template SHALL display a 4-column footer with brand info, services list, contact information, and business hours. The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/alignwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/alignwell/public/CNAME` = `alignwell.free.componentdock.com`
  and the package `homepage` = `https://alignwell.free.componentdock.com`.
