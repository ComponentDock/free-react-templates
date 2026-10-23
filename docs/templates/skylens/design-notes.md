# Skylens — Design Notes

Reference: **Dronephotography** — `https://colorlib.com/wp/template/dronephotography/`  
Live preview: `https://preview.colorlib.com/theme/dronephotography/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dronephotography-free-template.jpg  
Shipped: https://skylens.free.componentdock.com

A Drone Photography template with hero, services grid with three, video/how we work section and contact form with fields sections. Recreation of ColorLib "Drone Photography" as a React 19 + Vite + Tailwind 4 + TypeScript template under the name **SkyLens**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600;700**, **Oswald**

## Design tokens (`apps/skylens/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff5f21` | Brand palette — extracted from the original reference stylesheet |
| `--color-brand-hover` | `#e6571e` | brand hover |
| `--color-brand-light` | `#ff7b47` | brand light |
| `--color-heading` | `#071112` | heading |
| `--color-body` | `#10285d` | body |
| `--color-section-label` | `#70d76a` | section label |
| `--color-hero-accent` | `#31ff7a` | hero accent |
| `--color-footer-text` | `#dbdbdb` | footer text |
| `--color-footer-bg` | `#0d1b2a` | footer bg |
| `--color-white` | `#ffffff` | white |
| `--color-dark-overlay` | `rgba(7, 17, 18, 0.2)` | dark overlay |
| `--font-sans` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | Fonts — Oswald for headings/nav/buttons, Montserrat for body |
| `--font-body` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero displays centered headline and CTA | see fidelity note below |
| 3 | `About` | About section with two-column layout | see fidelity note below |
| 4 | `Services` | Services grid with three cards | see fidelity note below |
| 5 | `VideoSection` | Video/How We Work section with steps | see fidelity note below |
| 6 | `RecentProjects` | Recent projects split layout | see fidelity note below |
| 7 | `SecondServices` | Second services row with icon-only cards | see fidelity note below |
| 8 | `Testimonials` | Testimonial carousel on dark background | see fidelity note below |
| 9 | `Contact` | Contact form with fields | see fidelity note below |
| 10 | `Footer` | Footer with four columns and Component Dock link | see fidelity note below |
| 11 | `ScrollToTop` | Scroll-to-top button | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · SkyLens

### `Hero`
SkyLens SHALL display a hero section with background image, dark overlay, centered heading, subheading, and white-bordered CTA button.

### `About`
SkyLens SHALL display an about section with heading, paragraphs, black CTA, drone image, and "20 Years" badge.

### `Services`
SkyLens SHALL display three service cards with icon, title, and description.

### `VideoSection`
SkyLens SHALL display a dark-background section with play button, heading, numbered steps, and CTA.

### `RecentProjects`
SkyLens SHALL display a split layout with project image on left and text on right.

### `SecondServices`
SkyLens SHALL display three additional service cards with icon and title only.

### `Testimonials`
SkyLens SHALL display a testimonial carousel with dark background, quote, founder info, and dot navigation.

### `Contact`
SkyLens SHALL display a contact form with Name, Email, Phone, Topic, and Message fields.

### `Footer`
SkyLens SHALL display a four-column footer on dark background with logo, navigation, services, and social links.

### `ScrollToTop`
SkyLens SHALL display a circular orange back-to-top button that appears on scroll.

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
- **Provenance ban.** No file under `apps/skylens/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/skylens/public/CNAME` = `skylens.free.componentdock.com`
  and the package `homepage` = `https://skylens.free.componentdock.com`.
