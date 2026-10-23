# Supper — Design Notes

Reference: **Meal** — `https://colorlib.com/wp/template/meal/`  
Live preview: `https://preview.colorlib.com/theme/meal/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/meal-free-template.jpg  
Shipped: https://supper.free.componentdock.com

Supper is a restaurant template with a navbar, hero, feature cards, about band, chefs, menu band, reservation, testimonials, contact and footer. It recreates the ColorLib **Meal** design (https://colorlib.com/wp/template/meal/, preview: https://preview.colorlib.com/theme/meal/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Playfair Display**, **Playfair Display:wght@400;700;800**

## Design tokens (`apps/supper/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-playfair` | `'Playfair Display', serif` | font playfair |
| `--font-opensans` | `'Open Sans', sans-serif` | font opensans |
| `--color-coral` | `#ff7a5c` | coral |
| `--color-coral-dark` | `#e8684a` | coral dark |
| `--color-charcoal` | `#000000` | charcoal |
| `--color-light-bg` | `#f8f9fa` | light bg |
| `--color-muted` | `#999999` | muted |
| `--color-body-text` | `#666666` | body text |

> The spec has no section-level requirements; the order below is read from `apps/supper/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Features` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Chefs` | — | no dedicated spec block |
| 6 | `Menu` | — | no dedicated spec block |
| 7 | `Reservation` | — | no dedicated spec block |
| 8 | `Testimonials` | — | no dedicated spec block |
| 9 | `Contact` | — | no dedicated spec block |
| 10 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Hero`
*anchors only* — Welcome to Supper · Reserve A Table

### `Features`
*anchors only* — Learn More · Find your best food

### `About`
*anchors only* — The Restaurant · It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

### `Chefs`
*anchors only* — Meet The Chefs

### `Menu`
*anchors only* — Menu

### `Reservation`
*anchors only* — Reservation form · Reservation · Book your table with us · Name · Email · Phone

### `Testimonials`
*anchors only* — Previous review · Next review · Customer Reviews

### `Contact`
*anchors only* — Contact form · Get In Touch · Name · Email · Phone · Message

### `Footer`
*anchors only* — Facebook · Twitter · Instagram

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
- **Provenance ban.** No file under `apps/supper/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/supper/public/CNAME` = `supper.free.componentdock.com`
  and the package `homepage` = `https://supper.free.componentdock.com`.
