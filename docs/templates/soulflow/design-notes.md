# Soulflow — Design Notes

Reference: **Yogalife** — `https://colorlib.com/wp/template/yogalife/`  
Live preview: `https://preview.colorlib.com/theme/yogalife/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/yogalife-free-template.jpg  
Shipped: https://soulflow.free.componentdock.com

Soulflow is a yoga & meditation studio template with a navbar, hero slider, welcome, our programs, watch video, yoga pricing and yoga features.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;700**, **Work Sans**

## Design tokens (`apps/soulflow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-soulflow-teal` | `#87e5da` | Soulflow brand palette — teal accent, serif headings, sans body |
| `--color-soulflow-dark` | `#1a1a1a` | soulflow dark |
| `--color-soulflow-muted` | `#6b7280` | soulflow muted |
| `--color-soulflow-light` | `#f8f9fa` | soulflow light |
| `--font-serif` | `'Playfair Display', Georgia, serif` | font serif |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Welcome` | — | no dedicated spec block |
| 4 | `Programs` | — | no dedicated spec block |
| 5 | `Video` | — | no dedicated spec block |
| 6 | `Pricing` | — | no dedicated spec block |
| 7 | `Features` | — | no dedicated spec block |
| 8 | `Gallery` | — | no dedicated spec block |
| 9 | `Events` | — | no dedicated spec block |
| 10 | `Testimonials` | — | no dedicated spec block |
| 11 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle menu · Soulflow

### `Hero`
*anchors only* — Hero slider · Previous slide · Next slide

### `Welcome`
*anchors only* — Welcome To Soulflow · Hello there! · See The Yoga Pricing

### `Programs`
*anchors only* — Our Programs

### `Video`
*anchors only* — Play video · Watch Video

### `Pricing`
*anchors only* — Yoga Pricing · Get Started

### `Features`
*anchors only* — Yoga Features

### `Gallery`
*anchors only* — Our Gallery

### `Events`
*anchors only* — Upcoming Events

### `Testimonials`
*anchors only* — What People Say

### `Footer`
*anchors only* — Facebook · Twitter · Instagram · YouTube

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
- **Provenance ban.** No file under `apps/soulflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/soulflow/public/CNAME` = `soulflow.free.componentdock.com`
  and the package `homepage` = `https://soulflow.free.componentdock.com`.
