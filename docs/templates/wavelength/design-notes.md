# Wavelength — Design Notes

Reference: **Radios** — `https://colorlib.com/wp/template/radios/`  
Live preview: `https://preview.colorlib.com/theme/radios/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/radios-free-template.jpg  
Shipped: https://wavelength.free.componentdock.com

Wavelength is a single-page radio-station website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Radios" design (see TEMPLATES.md — line 483, first unchecked item whose prep did not exist on main), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design tokens (`apps/wavelength/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#7cbd1e` | brand |
| `--color-brand-hover` | `#90c740` | brand hover |
| `--color-brand-deep` | `#6ea71b` | brand deep |
| `--color-ink` | `#000000` | ink |
| `--color-body` | `#4d4d4d` | body |
| `--color-footer` | `#333333` | footer |
| `--color-footer-muted` | `#737373` | footer muted |
| `--color-footer-link` | `#b3b3b3` | footer link |
| `--color-post-date` | `#a6a6a6` | post date |
| `--color-bullet` | `#cccccc` | bullet |
| `--color-mist` | `#f8f9fa` | mist |
| `--color-line` | `#e6e6e6` | line |
| `--color-sun` | `#ffc107` | sun |
| `--font-sans` | `system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero with audio player | see fidelity note below |
| 3 | `ShowCards` | Show cards band | see fidelity note below |
| 4 | `WeeklyProgram` | Weekly Radio Program | see fidelity note below |
| 5 | `Testimonials` | Testimonial carousel | see fidelity note below |
| 6 | `Subscribe` | Subscribe band | see fidelity note below |
| 7 | `DjGrid` | DJ team grid | see fidelity note below |
| 8 | `NewsSection` | — | no dedicated spec block |
| 9 | `SocialBand` | Social band | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a transparent navbar overlaid on the hero with a logo, desktop menu, and a mobile hamburger.

### `Hero`
The system SHALL render a full-viewport photo hero with a headline, intro line, and a styled audio player.

### `ShowCards`
The system SHALL render a row of four photo cards pulled up over the hero, each with a lime-boxed title and a black-boxed schedule.

### `WeeklyProgram`
The system SHALL render a retro two-column program block: one tall card on the left and two stacked cards on the right.

### `Testimonials`
The system SHALL render a light-gray testimonial section with a carousel of six white slides and bar-style pagination.

### `Subscribe`
The system SHALL render a photo-background subscribe band with an email input and a lime Subscribe button.

### `DjGrid`
The system SHALL render a grid of six DJ cards whose photos reveal a green overlay with name, role, and social icons on hover.

### `NewsSection`
*anchors only* — News & Events

### `SocialBand`
The system SHALL render a solid lime-green band with six social icon links.

### `Footer`
The system SHALL render a dark gray footer with About, Navigations, Follow Us, and Watch Live Streaming columns plus a copyright bar.

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
- **Provenance ban.** No file under `apps/wavelength/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wavelength/public/CNAME` = `wavelength.free.componentdock.com`
  and the package `homepage` = `https://wavelength.free.componentdock.com`.
