# Frolic — Design Notes

Reference: **Kiddy** — `https://colorlib.com/wp/template/kiddy/`  
Live preview: `https://preview.colorlib.com/theme/kiddy/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/kiddy-free-template.jpeg  
Shipped: https://frolic.free.componentdock.com

Frolic is a single-page kids' activity / playground landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Kiddy" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400**, **Indie Flower**

## Design tokens (`apps/frolic/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-coral` | `#fd4d40` | coral |
| `--color-cherry` | `#dc3545` | cherry |
| `--color-lagoon` | `#16c3b0` | lagoon |
| `--color-sunflower` | `#fdb62f` | sunflower |
| `--color-leaf` | `#71bc42` | leaf |
| `--color-lake` | `#17a2b8` | lake |
| `--color-amber` | `#ffc107` | amber |
| `--color-ink` | `#364d59` | Neutral surfaces and type from the reference. |
| `--color-mist` | `#f6f5f5` | mist |
| `--color-footer` | `#343a40` | footer |
| `--color-muted` | `#777` | muted |
| `--color-hero-gray` | `#b3b3b3` | hero gray |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-cursive` | `'Indie Flower', cursive` | font cursive |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header quick-contact bar | see fidelity note below |
| 2 | `Hero` | Hero cover | see fidelity note below |
| 3 | `Features` | Feature blocks | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Packages` | Packages section | see fidelity note below |
| 6 | `Pricing` | Pricing section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Cta` | — | no dedicated spec block |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render the top header row with the site logo on the left and quick-contact info (address + opening hours) with icons on the right.

### `Hero`
The system SHALL render a full-height light-gray hero with a cursive eyebrow, a bold white headline, subtext, a red button, and a kid photo on the right.

### `Features`
The system SHALL render three colored feature cards in a 3-column row.

### `About`
The system SHALL render a light-gray (#f6f5f5) split section with a photo on the left and heading, paragraphs, and an amber button on the right.

### `Packages`
The system SHALL render a teal-blue (#17a2b8) section with a centered heading and three white package cards.

### `Pricing`
The system SHALL render a pricing section with an intro column and two colored pricing cards.

### `Testimonials`
The system SHALL render a light-gray section with a centered heading, a coral testimonial panel with three slides, and a stats row.

### `Cta`
*anchors only* — Call to action

### `Footer`
The system SHALL render a dark footer with an about blurb, a newsletter form, navigation columns, and a copyright bar.

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
- **Provenance ban.** No file under `apps/frolic/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/frolic/public/CNAME` = `frolic.free.componentdock.com`
  and the package `homepage` = `https://frolic.free.componentdock.com`.
