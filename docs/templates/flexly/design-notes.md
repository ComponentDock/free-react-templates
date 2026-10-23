# Flexly — Design Notes

Reference: **Slim** — `https://colorlib.com/wp/template/slim/`  
Live preview: `https://preview.colorlib.com/theme/slim/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/slim-free-template.jpg  
Shipped: https://flexly.free.componentdock.com

Flexly is a fitness/gym landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Slim" website template (source: https://colorlib.com/wp/template/slim/ — "Slim

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:wght@200;300;400;600;700;800;900**

## Design tokens (`apps/flexly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fe9191` | brand |
| `--color-brand-dark` | `#fe7878` | brand dark |
| `--color-ink` | `#000000` | ink |
| `--color-light` | `#f8f9fa` | light |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `ServicesBand` | Salmon services band | see fidelity note below |
| 4 | `ProgramsSection` | Programs tabs | see fidelity note below |
| 5 | `ServicesSection` | Services cards | see fidelity note below |
| 6 | `ScheduleSection` | Schedule day tabs | see fidelity note below |
| 7 | `AboutSection` | — | no dedicated spec block |
| 8 | `TestimonialsSection` | Testimonials | see fidelity note below |
| 9 | `CoachesSection` | Coaches | see fidelity note below |
| 10 | `BlogSection` | — | no dedicated spec block |
| 11 | `ContactSection` | Contact | see fidelity note below |
| 12 | `GallerySection` | Gallery | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a transparent-over-hero navbar with a brand, eight anchor links, and a sticky white scrolled state.

### `HeroSlider`
The system SHALL render a full-height 2-slide hero carousel with a photo side carrying vertical text and a text side with tagline, headline, copy and a pill CTA.

### `ServicesBand`
The system SHALL render a solid salmon band with three icon columns under the hero.

### `ProgramsSection`
The system SHALL render a light-background section with a vertical tab list of eight fitness programs and matching content panels.

### `ServicesSection`
The system SHALL render a centered "Get a Perfect Body" heading followed by five icon service cards.

### `ScheduleSection`
The system SHALL render a "Training Schedule" section with seven day tabs and schedule rows inside each panel.

### `AboutSection`
*anchors only* — About us · A Few Words About Us · We&apos;re Functioning for Almost · Years

### `TestimonialsSection`
The system SHALL render a dark testimonials section with five quote cards.

### `CoachesSection`
The system SHALL render an "Our Coaches" section with four coach cards.

### `BlogSection`
*anchors only* — Blog · Our Blog · Latest tips, stories and workouts from the club — straight from the gym floor. · Read More · Admin

### `ContactSection`
The system SHALL render a Contact section with info blocks and a form.

### `GallerySection`
The system SHALL render a gallery section with an image grid.

### `Footer`
The system SHALL render a black footer with four widget columns and social icons.

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
- **Provenance ban.** No file under `apps/flexly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/flexly/public/CNAME` = `flexly.free.componentdock.com`
  and the package `homepage` = `https://flexly.free.componentdock.com`.
