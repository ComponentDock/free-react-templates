# Lumen — Design Notes

Reference: **Glint** — `https://colorlib.com/wp/template/glint/`  
Live preview: `https://preview.colorlib.com/theme/glint/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/glint-simple-website-template.jpeg  
Shipped: https://lumen.free.componentdock.com

Recreate the ColorLib "Glint" creative agency portfolio template as a React 19 + Tailwind CSS 4 + TypeScript app. The design features a dark (near-black) background with green (#39b54a) accent, Montserrat headings, and Lora body text. Sections: hero, about with stats, services grid, portfolio works, clients, contact form, and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lora**, **Lora:ital,wght@0,400;0,700;1,400**, **Montserrat**

## Design tokens (`apps/lumen/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eafae0` | primary 50 |
| `--color-primary-100` | `#ccf2c4` | primary 100 |
| `--color-primary-200` | `#a8e8a0` | primary 200 |
| `--color-primary-300` | `#7ddb76` | primary 300 |
| `--color-primary-400` | `#39b54a` | primary 400 |
| `--color-primary-500` | `#33a242` | primary 500 |
| `--color-primary-600` | `#2b8a38` | primary 600 |
| `--color-primary-700` | `#22702e` | primary 700 |
| `--color-primary-800` | `#1a5724` | primary 800 |
| `--color-primary-900` | `#123e1a` | primary 900 |
| `--color-link` | `#0087cc` | Secondary — link color from ColorLib #0087cc. |
| `--color-surface-dark` | `#111111` | Background tones. |
| `--color-surface-darker` | `#050505` | surface darker |
| `--color-surface-light` | `#f1f1f1` | surface light |
| `--color-text-muted` | `#757575` | Text tones. |
| `--color-text-gray` | `#828282` | text gray |
| `--color-text-dark` | `#000000` | text dark |
| `--color-text-light` | `#ffffff` | text light |
| `--color-border` | `#e8e8e8` | border |
| `--font-sans` | `'Lora', Georgia, serif` | font sans |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with logo and navigation links | see fidelity note below |
| 2 | `Hero` | Hero section with headline, subtitle, CTAs, and social links | see fidelity note below |
| 3 | `About` | About section with heading and stat counters | see fidelity note below |
| 4 | `Services` | Services section with six service cards | see fidelity note below |
| 5 | `Works` | Works section with portfolio grid | see fidelity note below |
| 6 | `Clients` | Clients section with client name grid | see fidelity note below |
| 7 | `Contact` | Contact section with form and contact info | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link and back-to-top | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a fixed top navbar with the logo "Lumen" and links to Home, About, Services, Works, Clients, and Contact. On mobile, a hamburger button SHALL toggle the navigation menu.

### `Hero`
The hero section SHALL display "Welcome to Lumen" as the headline, a subtitle describing the agency, two CTA buttons ("Start a Project" and "More About Us"), social media icon links, and a scroll-down indicator.

### `About`
The about section SHALL display "Hello There" / "We Are Lumen" headings, a description paragraph, and three stat counters: Awards Received, Cups of Coffee, and Projects Completed.

### `Services`
The services section SHALL display six service items: Brand Identity, Illustration, Marketing, Web Design, Packaging Design, and Web Development. Each card SHALL have an icon, title, and description.

### `Works`
The works section SHALL display six portfolio items in a responsive grid. Each item SHALL show an image with a hover overlay displaying the project title.

### `Clients`
The clients section SHALL display a grid of client names with the heading "Our Clients" and a subtitle about honoring partnerships.

### `Contact`
The contact section SHALL display a form with name, email, subject, and message fields, plus a contact info sidebar showing address, email, and phone. The form SHALL validate required fields before submission.

### `Footer`
The footer SHALL display the logo, navigation links, copyright, a "Component Dock" attribution linking to https://www.componentdock.com/, and a back-to-top button.

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
- **Provenance ban.** No file under `apps/lumen/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lumen/public/CNAME` = `lumen.free.componentdock.com`
  and the package `homepage` = `https://lumen.free.componentdock.com`.
