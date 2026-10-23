# Buzz — Design Notes

Reference: **Br** — `https://colorlib.com/wp/template/br/`  
Live preview: `https://preview.colorlib.com/theme/br/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/br-free-template.jpg  
Shipped: https://buzz.free.componentdock.com

Buzz is a single-page barber-shop landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Br" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The recreation carries the NEW name "Buzz" (never the source name).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Yeseva One**

## Design tokens (`apps/buzz/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#eb592d` | brand |
| `--color-brand-dark` | `#c94a24` | brand dark |
| `--color-brand-light` | `#f4815e` | brand light |
| `--color-paper` | `#fdf9f6` | Paper — warm light section backgrounds (#fdf9f6 from the original). |
| `--color-ink` | `#222222` | Ink — headings (dark charcoal #222222 from the original). |
| `--color-mist` | `#777777` | Mist — muted body text (#777777 from the original). |
| `--color-primary-50` | `#fef3ef` | primary 50 |
| `--color-primary-100` | `#fde3da` | primary 100 |
| `--color-primary-200` | `#fbc5b3` | primary 200 |
| `--color-primary-300` | `#f8a084` | primary 300 |
| `--color-primary-400` | `#f3734f` | primary 400 |
| `--color-primary-500` | `#ef552b` | primary 500 |
| `--color-primary-600` | `#eb592d` | primary 600 |
| `--color-primary-700` | `#c94a24` | primary 700 |
| `--color-primary-800` | `#a53e20` | primary 800 |
| `--color-primary-900` | `#86331c` | primary 900 |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Yeseva One', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services grid | see fidelity note below |
| 5 | `Pricing` | Pricing | see fidelity note below |
| 6 | `Team` | Barbers team | see fidelity note below |
| 7 | `Testimonials` | — | no dedicated spec block |
| 8 | `Appointment` | Appointment form | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Buzz", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background image, a level-1 headline, and a call-to-action button.

### `About`
The system SHALL render an about section with a heading, a blurb, and opening hours.

### `Services`
The system SHALL render an "Our Services" section with at least three service cards.

### `Pricing`
The system SHALL render an "Our Pricing" section with at least three priced items.

### `Team`
The system SHALL render a team section with three member cards with names and roles.

### `Testimonials`
*anchors only* — 5 out of 5 stars · Testimonial · Watson, web developer

### `Appointment`
The system SHALL render a "Make an Appointment" section with a heading and a form with a submit button.

### `Footer`
The system SHALL render a footer with the site name, a short tagline, quick links, a newsletter field, and social links.

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
- **Provenance ban.** No file under `apps/buzz/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/buzz/public/CNAME` = `buzz.free.componentdock.com`
  and the package `homepage` = `https://buzz.free.componentdock.com`.
