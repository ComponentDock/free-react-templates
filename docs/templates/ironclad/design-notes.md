# Ironclad — Design Notes

Reference: **Wilcon** — `https://colorlib.com/wp/template/wilcon/`  
Live preview: `https://preview.colorlib.com/theme/wilcon/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/wilcon-free-template.jpg  
Shipped: https://ironclad.free.componentdock.com

A construction company website template with hero section, features strip, about section, CTA bar, services, stats/counter. It also includes project gallery, testimonials, and footer. Recreation of ColorLib **Wilcon**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700;900**

## Design tokens (`apps/ironclad/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#f4f8ed` | Ironclad brand palette — construction green (#82ae46) from the original design |
| `--color-brand-100` | `#e6efd6` | brand 100 |
| `--color-brand-200` | `#cde0ad` | brand 200 |
| `--color-brand-300` | `#aeca7a` | brand 300 |
| `--color-brand-400` | `#82ae46` | brand 400 |
| `--color-brand-500` | `#6d9638` | brand 500 |
| `--color-brand-600` | `#577a2c` | brand 600 |
| `--color-brand-700` | `#435e23` | brand 700 |
| `--color-brand-800` | `#374c1e` | brand 800 |
| `--color-brand-900` | `#2f401c` | brand 900 |
| `--color-accent-400` | `#f8b732` | Secondary — golden yellow (#f8b732) |
| `--color-accent-500` | `#e5a420` | accent 500 |
| `--color-dark` | `#1b1b1b` | Dark surfaces |
| `--color-dark-light` | `#222222` | dark light |
| `--color-body` | `#7d8494` | Body text |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Roboto — the original template's typeface |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | CTA bar shows services heading and quote button | see fidelity note below |
| 2 | `Navbar` | Navbar displays navigation with mobile toggle | see fidelity note below |
| 3 | `Hero` | Hero section displays construction company heading | see fidelity note below |
| 4 | `FeaturesStrip` | Features strip shows three service highlights | see fidelity note below |
| 5 | `AboutSection` | About section displays company information | see fidelity note below |
| 6 | `CtaBar` | — | no dedicated spec block |
| 7 | `ServicesSection` | Services section shows three service cards | see fidelity note below |
| 8 | `StatsSection` | Stats section displays project and customer counters | see fidelity note below |
| 9 | `ProjectsSection` | Projects section shows six project cards | see fidelity note below |
| 10 | `Testimonials` | Testimonials section shows quotes with navigation | see fidelity note below |
| 11 | `Footer` | Footer displays navigation, contact, and newsletter | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The CTA bar SHALL display "Providing Personalized and High Quality Services" with a "Request A Quote" button.

### `Navbar`
The navbar SHALL display the brand name, navigation links, and an "Inquire Now" CTA button with a mobile hamburger toggle.

### `Hero`
The hero section SHALL display the heading "We Build Great Projects" with a background image, description text, and two CTA buttons ("Our Services" and "Request A Quote").

### `FeaturesStrip`
The features strip SHALL display three feature items with icons, titles, and descriptions.

### `AboutSection`
The about section SHALL display a welcome heading, company description, and video play button.

### `CtaBar`
*anchors only* — Providing Personalized and High Quality Services · We can manage your dream building. A small river named Duden flows by their place. · Request A Quote

### `ServicesSection`
The services section SHALL display three service cards (Architecture, Renovation, Construction) with images, icons, titles, descriptions, and "Read more" links.

### `StatsSection`
The stats section SHALL display 48,000 projects completed and 54,900 happy customers with the heading "Best Provider for Industrial Services".

### `ProjectsSection`
The projects section SHALL display six project cards with images, category, title, and location.

### `Testimonials`
The testimonials section SHALL display testimonial quotes with previous/next navigation buttons.

### `Footer`
The footer SHALL display quick links, service links, contact information, a newsletter form, and a link to componentdock.com.

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
- **Provenance ban.** No file under `apps/ironclad/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ironclad/public/CNAME` = `ironclad.free.componentdock.com`
  and the package `homepage` = `https://ironclad.free.componentdock.com`.
