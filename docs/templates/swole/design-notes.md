# Swole — Design Notes

Reference: **Fitfloss** — `https://colorlib.com/wp/template/fitfloss/`  
Live preview: `https://preview.colorlib.com/theme/fitfloss/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fitfloss-free-template.jpg  
Shipped: https://swole.free.componentdock.com

Swole is a single-page fitness-studio website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Fitfloss" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Anton**, **Oswald**

## Design tokens (`apps/swole/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff0000` | brand |
| `--color-brand-hover` | `#ee390f` | brand hover |
| `--color-brand-soft` | `#ff3333` | brand soft |
| `--color-brand-social` | `#fe3233` | brand social |
| `--color-ink` | `#222222` | ink |
| `--color-black` | `#000000` | black |
| `--color-body` | `#777777` | body |
| `--color-line` | `#eeeeee` | line |
| `--color-surface` | `#fafafa` | surface |
| `--font-display` | `'Anton', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `Courses` | Popular courses | see fidelity note below |
| 4 | `Schedule` | Schedule table | see fidelity note below |
| 5 | `Features` | Feature cards | see fidelity note below |
| 6 | `About` | About section | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `MemberCta` | Become a member CTA | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main · Toggle menu · Blog · Pages

### `Hero`
The system SHALL render a full-screen hero with a background photo, a dark gradient overlay, a tagline, a large headline, and a CTA button.

### `Courses`
The system SHALL render an "Our Popular Courses" section with three course cards.

### `Schedule`
The system SHALL render a "Get Your Schedule" section with a photo column and a class schedule table with a red header row.

### `Features`
The system SHALL render a "Why You Should Choose Us" section with four feature cards.

### `About`
The system SHALL render a split about section with text on the left and a photo on the right.

### `Testimonials`
The system SHALL render a "What Customer's Say About Us" testimonial carousel with black-bordered cards.

### `MemberCta`
The system SHALL render a dark "Many more Features are Waiting!" call-to- action section.

### `Footer`
The system SHALL render a red footer with About Us, Contact, and Newsletter columns plus a copyright bar with social icons.

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
- **Provenance ban.** No file under `apps/swole/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/swole/public/CNAME` = `swole.free.componentdock.com`
  and the package `homepage` = `https://swole.free.componentdock.com`.
