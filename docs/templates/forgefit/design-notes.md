# Forgefit — Design Notes

Reference: **Ironforge** — `https://colorlib.com/wp/template/ironforge/`  
Live preview: `https://preview.colorlib.com/theme/ironforge/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ironforge-template-1771943626586.jpg  
Shipped: https://forgefit.free.componentdock.com

Forgefit is a single-page fitness/gym landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **Space Grotesk**, **Space Grotesk:wght@300;400;500;600;700**

## Design tokens (`apps/forgefit/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff7ed` | primary 50 |
| `--color-primary-100` | `#ffedd5` | primary 100 |
| `--color-primary-200` | `#fed7aa` | primary 200 |
| `--color-primary-300` | `#fdba74` | primary 300 |
| `--color-primary-400` | `#fb923c` | primary 400 |
| `--color-primary-500` | `#f97316` | primary 500 |
| `--color-primary-600` | `#ea580c` | primary 600 |
| `--color-primary-700` | `#c2410c` | primary 700 |
| `--color-primary-800` | `#9a3412` | primary 800 |
| `--color-primary-900` | `#7c2d12` | primary 900 |
| `--font-display` | `'Space Grotesk', ui-sans-serif, system-ui, sans-serif` | Display + body fonts — the original's pairing via Google Fonts <link> |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Counters` | Counters band | see fidelity note below |
| 4 | `Programs` | Programs section | see fidelity note below |
| 5 | `Schedule` | Schedule section | see fidelity note below |
| 6 | `Trainers` | Trainers section | see fidelity note below |
| 7 | `Pricing` | Pricing section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Faq` | FAQ section | see fidelity note below |
| 10 | `Cta` | — | no dedicated spec block |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Forgefit", anchor links to the page's sections, a "Join Now" CTA, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width dark hero with a badge, a headline, a blurb, three CTAs, and a stats row.

### `Counters`
The system SHALL render an animated stats band with four counters.

### `Programs`
The system SHALL render a programs section with at least six program cards.

### `Schedule`
The system SHALL render a weekly class schedule section.

### `Trainers`
The system SHALL render a trainers section with at least four trainer cards.

### `Pricing`
The system SHALL render a pricing section with a billing toggle and at least three tiers.

### `Testimonials`
The system SHALL render a testimonial carousel with at least one quote.

### `Faq`
The system SHALL render an FAQ section with at least three accordion questions.

### `Cta`
*anchors only* — Your Transformation Starts Today · Join Forgefit and get your first week free. No commitment, no contracts. · Claim Free Week · Talk to a Trainer

### `Footer`
The system SHALL render a footer with link columns, a newsletter signup, and a copyright line.

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
- **Provenance ban.** No file under `apps/forgefit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/forgefit/public/CNAME` = `forgefit.free.componentdock.com`
  and the package `homepage` = `https://forgefit.free.componentdock.com`.
