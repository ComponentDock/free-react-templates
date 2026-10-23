# Sportium — Design Notes

Reference: **Sportsfit** — `https://colorlib.com/wp/template/sportsfit/`  
Live preview: `https://preview.colorlib.com/theme/sportsfit/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/sportsfit-free-template.jpg  
Shipped: https://sportium.free.componentdock.com

Recreation of ColorLib Sportsfit (https://colorlib.com/wp/template/sportsfit/) — a fitness/gym landing page. The new name is "Sportium".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**

## Design tokens (`apps/sportium/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#fff7ed` | Sportium brand palette — orange fitness theme (#f98c00) |
| `--color-brand-100` | `#ffedd5` | brand 100 |
| `--color-brand-200` | `#fed7aa` | brand 200 |
| `--color-brand-300` | `#fdba74` | brand 300 |
| `--color-brand-400` | `#f98c00` | brand 400 |
| `--color-brand-500` | `#f97316` | brand 500 |
| `--color-brand-600` | `#ea580c` | brand 600 |
| `--color-brand-700` | `#c2410c` | brand 700 |
| `--color-coral` | `#db5246` | coral |
| `--color-gold` | `#fba40e` | gold |
| `--color-heading` | `#262626` | heading |
| `--color-body` | `#535353` | body |
| `--color-muted` | `#a5a5a5` | muted |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with logo and navigation | see fidelity note below |
| 2 | `Hero` | Hero section with CTA | see fidelity note below |
| 3 | `Features` | Feature boxes | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Testimonials` | Testimonials section | see fidelity note below |
| 6 | `Gallery` | Gallery section | see fidelity note below |
| 7 | `Courses` | Courses section | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Footer` | Footer with newsletter and branding | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The page SHALL render a sticky header with the Sportium logo (Dumbbell icon + brand name), desktop navigation links (Home, About Us, Classes & Services, Blog, Contact), and a phone number.

### `Hero`
The page SHALL render a full-width hero section with a background image overlay, "Get fit with us" headline, subtitle about classes, and a "Join Now" CTA button.

### `Features`
The page SHALL render 3 feature boxes (Pilates with trainer, Swimming Pool, Healthy diet plan) each with an icon, title, description, and learn-more link.

### `About`
The page SHALL render a split about section with subtitle, title, description text, CTA button, and an image.

### `Testimonials`
The page SHALL render 3 testimonial cards with avatar images, names, roles, text, and star ratings on a parallax background.

### `Gallery`
The page SHALL render a horizontally scrollable gallery of 5 images.

### `Courses`
The page SHALL render 6 course cards (Weight Loss Class, Yoga Classes, Spinning Class, Private Fit Class, Nutrition Classes, Pilates Class) in a grid layout.

### `Blog`
The page SHALL render 3 blog post cards with images, titles, dates, descriptions, and "Read More" links on a parallax background.

### `Footer`
The page SHALL render a footer with logo, navigation links, newsletter email form, and a "Made with Component Dock" copyright link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/sportium/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sportium/public/CNAME` = `sportium.free.componentdock.com`
  and the package `homepage` = `https://sportium.free.componentdock.com`.
