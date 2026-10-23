# Venture — Design Notes

Reference: **Startupbusiness** — `https://colorlib.com/wp/template/startupbusiness/`  
Live preview: `https://preview.colorlib.com/theme/startupbusiness/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/startupbusiness-free-template.jpg  
Shipped: https://venture.free.componentdock.com

Recreate the ColorLib Startupbusiness template as a React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Venture". The template provides a business startup landing page with sections for services, skills, portfolio, testimonials, features, blog, and contact.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;500;600;700**, **Muli**

## Design tokens (`apps/venture/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#04dbec` | brand |
| `--color-brand-dark` | `#03c5df` | brand dark |
| `--color-navy` | `#0b1c39` | navy |
| `--color-navy-light` | `#28395a` | navy light |
| `--color-dark-bg` | `#010e21` | dark bg |
| `--color-body-text` | `#506172` | body text |
| `--color-heading-text` | `#0b1c39` | heading text |
| `--color-muted` | `#a6b3c6` | muted |
| `--color-surface` | `#f9f9ff` | surface |
| `--font-heading` | `'Josefin Sans', sans-serif` | font heading |
| `--font-body` | `'Muli', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar functionality | see fidelity note below |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `WantToWork` | — | no dedicated spec block |
| 4 | `Services` | Services section displays cards | see fidelity note below |
| 5 | `Skills` | Skills section shows progress bars | see fidelity note below |
| 6 | `ProjectGallery` | — | no dedicated spec block |
| 7 | `Testimonials` | All sections render correctly | see fidelity note below |
| 8 | `Features` | — | no dedicated spec block |
| 9 | `Blog` | — | no dedicated spec block |
| 10 | `ContactCTA` | — | no dedicated spec block |
| 11 | `Footer` | Footer includes Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar SHALL display navigation links and a mobile menu toggle.

### `Hero`
*anchors only* — Business Synergy via · Robust Strategies · View project

### `WantToWork`
*anchors only* — View More

### `Services`
The services section SHALL display service cards with icons and descriptions.

### `Skills`
The skills section SHALL display skill progress bars with percentages.

### `ProjectGallery`
*anchors only* — View Project

### `Testimonials`
The template SHALL render all major sections in the correct order.

### `Features`
*anchors only* — Features That You Will Get · All startups need to make their business work

### `Blog`
*anchors only* — Continue Reading →

### `ContactCTA`
*anchors only* — Send us a message if you have an issue with your order. · Contact Us Now

### `Footer`
The footer SHALL include a link to Component Dock.

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
- **Provenance ban.** No file under `apps/venture/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/venture/public/CNAME` = `venture.free.componentdock.com`
  and the package `homepage` = `https://venture.free.componentdock.com`.
