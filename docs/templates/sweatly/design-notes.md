# Sweatly — Design Notes

Reference: **Workout** — `https://colorlib.com/wp/template/workout/`  
Live preview: `https://preview.colorlib.com/theme/workout/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/workout-free-template.jpg  
Shipped: https://sweatly.free.componentdock.com

Sweatly is a single-page gym / fitness-club website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;700;900**

## Design tokens (`apps/sweatly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c83660` | brand |
| `--color-brand-dark` | `#ad2d52` | brand dark |
| `--color-ink` | `#25262a` | Ink — dark text/headings (#000 / #25262a from the original). |
| `--color-ink-dark` | `#000` | ink dark |
| `--color-muted` | `#989898` | Muted — secondary text (#989898 from the original). |
| `--color-primary-50` | `#fdf2f5` | primary 50 |
| `--color-primary-100` | `#fbe3e9` | primary 100 |
| `--color-primary-200` | `#f6c3d1` | primary 200 |
| `--color-primary-300` | `#ef98b0` | primary 300 |
| `--color-primary-400` | `#e26487` | primary 400 |
| `--color-primary-500` | `#c83660` | primary 500 |
| `--color-primary-600` | `#ad2d52` | primary 600 |
| `--color-primary-700` | `#8f2444` | primary 700 |
| `--color-primary-800` | `#771f3a` | primary 800 |
| `--color-primary-900` | `#661d34` | primary 900 |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | Original font: "Muli" (300/400/700/900). |
| `--font-display` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Sticky header with mobile menu | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `FeatureCarousel` | Features carousel section | see fidelity note below |
| 4 | `Banner` | Parallax banner (Get The Result You Want) | see fidelity note below |
| 5 | `Classes` | Classes section | see fidelity note below |
| 6 | `Schedule` | Schedule section with day tabs | see fidelity note below |
| 7 | `Trainers` | Trainers section | see fidelity note below |
| 8 | `Services` | Services section | see fidelity note below |
| 9 | `Contact` | Contact section with form | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a navbar over the hero with the site name "Sweatly" (white wordmark + brand-pink dot), anchor links, and a hamburger trigger on small screens that opens an off-canvas mobile menu with a close control.

### `Hero`
The system SHALL render a full-height hero with a dark photo background and overlay, a large white headline, a lead paragraph, and an outline CTA button.

### `FeatureCarousel`
The system SHALL render a section titled "Setup Your Body With Workout" with a grey subheading "Stay Healthy" and a carousel of six icon feature cards.

### `Banner`
The system SHALL render a full-width photo band with a dark overlay, a white heading "Get The Result You Want", and a lead line.

### `Classes`
The system SHALL render a "Our Classes" section with ten horizontal class cards in a two-column grid, each with a thumbnail image, a class name, a trainer, and a duration.

### `Schedule`
The system SHALL render a "Schedule" section with seven day tabs (S M T W T F S) and a per-day panel of timed class cards.

### `Trainers`
The system SHALL render an "Our Trainers" section with four round-avatar person cards, each with a name, a "Trainer" position line, and a bio.

### `Services`
The system SHALL render a "Services" section with twelve icon feature cards in a three-column grid.

### `Contact`
The system SHALL render a "Contact Us" section on a light background with a contact form (first name, last name, subject, email, message) and a "Send Message" submit button.

### `Footer`
The system SHALL render a dark footer with an about column, a links column, a newsletter subscribe form, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/sweatly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sweatly/public/CNAME` = `sweatly.free.componentdock.com`
  and the package `homepage` = `https://sweatly.free.componentdock.com`.
