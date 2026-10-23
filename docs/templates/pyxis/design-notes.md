# Pyxis — Design Notes

Reference: **Ozberk** — `https://colorlib.com/wp/template/ozberk/`  
Live preview: `https://preview.colorlib.com/theme/ozberk/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ozberk-free-fullscreen-business-website-template.jpg  
Shipped: https://pyxis.free.componentdock.com

Pyxis is a single-page business/agency landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Ozberk" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/pyxis/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-brand` | `#edbf3a` | brand |
| `--color-brand-dark` | `#d4a82e` | brand dark |
| `--color-heading` | `#222222` | heading |
| `--color-body` | `#777777` | body |
| `--color-overlay` | `rgba(0, 0, 0, 0.6)` | overlay |
| `--color-primary-50` | `#fef9e7` | primary 50 |
| `--color-primary-100` | `#fdf0c4` | primary 100 |
| `--color-primary-200` | `#fbe39d` | primary 200 |
| `--color-primary-300` | `#f9d474` | primary 300 |
| `--color-primary-400` | `#f5c54d` | primary 400 |
| `--color-primary-500` | `#edbf3a` | primary 500 |
| `--color-primary-600` | `#d4a82e` | primary 600 |
| `--color-primary-700` | `#b08a24` | primary 700 |
| `--color-primary-800` | `#8c6d1b` | primary 800 |
| `--color-primary-900` | `#6b5314` | primary 900 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Banner` | Hero banner | see fidelity note below |
| 3 | `TeamForce` | Team section | see fidelity note below |
| 4 | `Features` | Features grid | see fidelity note below |
| 5 | `VideoSection` | Video section | see fidelity note below |
| 6 | `TestimonialSection` | Testimonial section | see fidelity note below |
| 7 | `ServiceSection` | Service section | see fidelity note below |
| 8 | `ContactSection` | Contact section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky top navigation bar with the site name "Pyxis" and anchor links to the page sections.

### `Banner`
The system SHALL render a fullscreen hero banner with a background image, dark overlay, heading text, and a CTA button.

### `TeamForce`
The system SHALL render a team section with a heading, paragraph, image, and CTA button.

### `Features`
The system SHALL render a 2-column grid of 6 feature cards, each with an icon, title, and description.

### `VideoSection`
The system SHALL render a video section with a dark overlay background, play button, heading, and subtitle.

### `TestimonialSection`
The system SHALL render a testimonial section with a counter and a testimonial card.

### `ServiceSection`
The system SHALL render a service section with a background image and a 2×3 grid of service items.

### `ContactSection`
The system SHALL render a contact section with 4 columns of contact information.

### `Footer`
The system SHALL render a footer with a newsletter form, link columns, social icons, and a Component Dock copyright link.

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
- **Provenance ban.** No file under `apps/pyxis/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pyxis/public/CNAME` = `pyxis.free.componentdock.com`
  and the package `homepage` = `https://pyxis.free.componentdock.com`.
