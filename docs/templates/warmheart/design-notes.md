# Warmheart — Design Notes

Reference: **Kindity** — `https://colorlib.com/wp/template/kindity/`  
Live preview: `https://preview.colorlib.com/theme/kindity/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/kindity-free-template.jpg  
Shipped: https://warmheart.free.componentdock.com

A Nonprofit Charity template with hero section with stats, welcome section with stats, key features and upcoming events sections. Recreation of ColorLib "Kindity" charity template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/warmheart/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-brand` | `#ea2c58` | brand |
| `--color-brand-dark` | `#c91e48` | brand dark |
| `--color-bg-alt` | `#f9f9ff` | bg alt |
| `--color-text-primary` | `#222222` | text primary |
| `--color-text-muted` | `#777777` | text muted |
| `--color-border` | `#eeeeee` | border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and donate CTA | see fidelity note below |
| 2 | `Hero` | Hero section with stats | see fidelity note below |
| 3 | `Welcome` | Welcome section with stats | see fidelity note below |
| 4 | `MajorCauses` | Major Causes section with cause cards | see fidelity note below |
| 5 | `KeyFeatures` | Key Features section | see fidelity note below |
| 6 | `UpcomingEvents` | Upcoming Events section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a navigation bar with brand name, seven nav links, and a "Donate Now" button.

### `Hero`
The template SHALL render a hero section with headline, description, CTA buttons, and three stat boxes.

### `Welcome`
The template SHALL render a welcome section with heading and three stat cards.

### `MajorCauses`
The template SHALL render three cause cards with progress bars and donate buttons.

### `KeyFeatures`
The template SHALL render three feature cards with icons and descriptions.

### `UpcomingEvents`
The template SHALL render three event cards with dates and join buttons.

### `Testimonials`
The template SHALL render three testimonial cards with donor information.

### `Footer`
The template SHALL render a footer with about section, navigation links, newsletter, and Component Dock branding.

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
- **Provenance ban.** No file under `apps/warmheart/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/warmheart/public/CNAME` = `warmheart.free.componentdock.com`
  and the package `homepage` = `https://warmheart.free.componentdock.com`.
