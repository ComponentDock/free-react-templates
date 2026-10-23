# Aurae — Design Notes

Reference: **Ahana** — `https://colorlib.com/wp/template/ahana/`  
Live preview: `https://preview.colorlib.com/theme/ahana/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ahana-free-template.jpg  
Shipped: https://aurae.free.componentdock.com

Aurae is a single-page yoga/wellness landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Ahana" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**, **Playfair Display**

## Design tokens (`apps/aurae/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f2786f` | Aurae brand palette — coral/salmon from Ahana css/style.css |
| `--color-brand-dark` | `#e0605a` | brand dark |
| `--color-brand-light` | `#f9f2f0` | brand light |
| `--color-accent-warm` | `#fdb07d` | Gradient accent |
| `--color-accent-coral` | `#f65d5d` | accent coral |
| `--color-accent-green` | `#8abe56` | Green accent for notes/badges |
| `--color-ink` | `#333333` | Dark ink for headings |
| `--color-ink-dark` | `#222222` | ink dark |
| `--color-body` | `#666666` | Body text |
| `--color-mist` | `#999999` | mist |
| `--color-paper` | `#f9f2f0` | Light backgrounds |
| `--color-paper-alt` | `#fafafa` | paper alt |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Fonts |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |
| `--color-primary-50` | `#fdf2f1` | Primary scale for shared Button/ButtonLink |
| `--color-primary-100` | `#fce4e2` | primary 100 |
| `--color-primary-200` | `#f9c9c6` | primary 200 |
| `--color-primary-300` | `#f5a39e` | primary 300 |
| `--color-primary-400` | `#f2786f` | primary 400 |
| `--color-primary-500` | `#f2786f` | primary 500 |
| `--color-primary-600` | `#e0605a` | primary 600 |
| `--color-primary-700` | `#c44a44` | primary 700 |
| `--color-primary-800` | `#a23b36` | primary 800 |
| `--color-primary-900` | `#86332f` | primary 900 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and mobile menu | see fidelity note below |
| 2 | `Hero` | Hero section with yoga headline and CTAs | see fidelity note below |
| 3 | `About` | About section with feature cards | see fidelity note below |
| 4 | `Classes` | Popular classes with trainer info | see fidelity note below |
| 5 | `Trainers` | Trainers section with profiles | see fidelity note below |
| 6 | `Testimonials` | Testimonials slider | see fidelity note below |
| 7 | `Events` | Events section | see fidelity note below |
| 8 | `Pricing` | Pricing plans | see fidelity note below |
| 9 | `Signup` | Signup form with validation | see fidelity note below |
| 10 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display the Aurae logo, desktop navigation links (Home, About, Classes, Trainers, Events, Pricing, Contact), a "Join Now" CTA button, and a mobile hamburger menu.

### `Hero`
The hero section SHALL display a yoga headline, descriptive subtext, and CTA buttons with a background image.

### `About`
The about section SHALL display "Welcome to Aurae" heading and 3 feature cards (Full Rejuvenation, Extension of Spring, Against Aging).

### `Classes`
The classes section SHALL display 3 class cards (Artistic Yoga, Traditional Hatha, Yoga Therapy) with trainer names and book-now links.

### `Trainers`
The trainers section SHALL display 3 trainer profiles with name, role, certificate, and contact links.

### `Testimonials`
The testimonials section SHALL display a review with quote, author, role, star rating, and navigation buttons.

### `Events`
The events section SHALL display 3 upcoming event cards with title, date, and participant count.

### `Pricing`
The pricing section SHALL display 4 tiers (Beginner $59, Intermediate $99, Advanced $159, Professional $199) with features and get-started buttons.

### `Signup`
The signup section SHALL display a CTA heading, email input, and submit button with validation.

### `Footer`
The footer SHALL display company info, quick links, about links, open time, contact info, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/aurae/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/aurae/public/CNAME` = `aurae.free.componentdock.com`
  and the package `homepage` = `https://aurae.free.componentdock.com`.
