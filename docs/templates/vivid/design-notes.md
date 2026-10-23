# Vivid — Design Notes

Reference: **Creative Agency** — `https://colorlib.com/wp/template/creative-agency/`  
Live preview: `https://preview.colorlib.com/theme/creative-agency/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/free-creative-agency-website-template.jpg  
Shipped: https://vivid.free.componentdock.com

Vivid is a creative-agency landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Creative Agency" free template (source: https://colorlib.com/wp/template/creative-agency/), built under a DIFFERENT name (Vivid — evoking the vibrant, creative energy of the original's design), with the monorep…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;700**, **Varela Round**

## Design tokens (`apps/vivid/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#6195ff` | primary |
| `--color-body` | `#868f9b` | body |
| `--color-heading` | `#10161a` | heading |
| `--color-grey-bg` | `#fafafa` | grey bg |
| `--color-grey-border` | `#eeeeee` | grey border |
| `--color-dark-bg` | `#1c1d21` | dark bg |
| `--font-heading` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-sans` | `'Varela Round', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Portfolio` | Portfolio section | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `WhyChooseUs` | Why Choose Us section | see fidelity note below |
| 7 | `Stats` | Stats section | see fidelity note below |
| 8 | `Pricing` | Pricing section | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `Team` | Team section | see fidelity note below |
| 11 | `Blog` | Blog section | see fidelity note below |
| 12 | `Contact` | Contact section | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed navbar with the site logo on the left and navigation links on the right. The navbar SHALL be transparent over the hero and switch to dark background on scroll.

### `Hero`
The system SHALL render a full-screen hero with a dark background image overlay, a heading, description, and two CTA buttons.

### `About`
The system SHALL render a 3-column feature cards section with icons, titles, and descriptions.

### `Portfolio`
The system SHALL render a 6-item portfolio grid on a grey background.

### `Services`
The system SHALL render a 6-item services grid with icons and descriptions.

### `WhyChooseUs`
The system SHALL render a split layout with feature checklist on the left and an image on the right.

### `Stats`
The system SHALL render a parallax dark background section with 4 stat counters.

### `Pricing`
The system SHALL render 3 pricing cards with plan names, prices, feature lists, and purchase buttons.

### `Testimonials`
The system SHALL render a dark background section with a testimonial carousel.

### `Team`
The system SHALL render 3 team member cards with photos, names, roles, and social links.

### `Blog`
The system SHALL render 3 blog cards on a grey background.

### `Contact`
The system SHALL render contact info and a contact form.

### `Footer`
The system SHALL render a dark footer with logo, social links, and copyright.

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
- **Provenance ban.** No file under `apps/vivid/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vivid/public/CNAME` = `vivid.free.componentdock.com`
  and the package `homepage` = `https://vivid.free.componentdock.com`.
