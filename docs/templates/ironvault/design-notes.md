# Ironvault — Design Notes

Reference: **Fitnesstrainer** — `https://colorlib.com/wp/template/fitnesstrainer/`  
Live preview: `https://preview.colorlib.com/theme/fitnesstrainer/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fitnesstrainer-free-template.jpg  
Shipped: https://ironvault.free.componentdock.com

Ironvault is a single-page personal-fitness-trainer website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Anton**, **Poppins**

## Design tokens (`apps/ironvault/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4438b7` | brand |
| `--color-brand-light` | `#5338b7` | brand light |
| `--color-brand-dark` | `#4138b7` | brand dark |
| `--color-underline` | `#7a73cc` | underline |
| `--color-eyebrow` | `#8782ce` | eyebrow |
| `--color-ink` | `#1f1b1b` | ink |
| `--color-stat` | `#cecece` | stat |
| `--color-card` | `#fafafa` | card |
| `--color-panel` | `#f9f9ff` | panel |
| `--color-menu` | `#f0f0f0` | menu |
| `--color-line` | `#eeeeee` | line |
| `--color-body` | `#888888` | body |
| `--font-display` | `'Anton', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with off-canvas menu | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `ClientLogos` | Client logos strip | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Features` | Features section | see fidelity note below |
| 6 | `Skills` | Skills section | see fidelity note below |
| 7 | `Cta` | CTA section | see fidelity note below |
| 8 | `Gallery` | Gallery section | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a fixed top header with the site name "Ironvault" (logomark + wordmark), a hamburger trigger, and a full-screen overlay navigation menu with anchor links and a close control.

### `Hero`
The system SHALL render a full-width hero with an eyebrow, a large uppercase headline, a blurb, and a primary CTA button.

### `ClientLogos`
The system SHALL render a section titled "Some Latest Gym With me" showing a row of partner/client logos.

### `About`
The system SHALL render an about section with a photo, a heading, two paragraphs, a signature element, and a "more about me" button.

### `Features`
The system SHALL render a features section titled "Latest instoment" with three feature cards.

### `Skills`
The system SHALL render a skills section with the heading "Some Latest Gym With me", five labeled progress bars, and a photo.

### `Cta`
The system SHALL render a call-to-action section with an experience stat card and a workout CTA with button.

### `Gallery`
The system SHALL render a masonry gallery titled "Latest Player Showcase" with seven items that reveal a caption overlay on hover.

### `Testimonials`
The system SHALL render a testimonial carousel titled "Testimonial" with client quotes that can be navigated.

### `Footer`
The system SHALL render a slim footer with a copyright line.

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
- **Provenance ban.** No file under `apps/ironvault/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ironvault/public/CNAME` = `ironvault.free.componentdock.com`
  and the package `homepage` = `https://ironvault.free.componentdock.com`.
