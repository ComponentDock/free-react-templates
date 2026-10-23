# Colloquium — Design Notes

Reference: **Convention** — `https://colorlib.com/wp/template/convention/`  
Live preview: `https://preview.colorlib.com/theme/convention/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/convention-free-template.jpg  
Shipped: https://colloquium.free.componentdock.com

Colloquium is a conference & event website template. It recreates the ColorLib **Convention** design (https://colorlib.com/wp/template/convention/, preview: https://preview.colorlib.com/theme/convention/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Barlow**, **Barlow Condensed**, **Barlow Condensed:wght@400;500;600;700**

## Design tokens (`apps/colloquium/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#ff2d9b` | primary |
| `--color-primary-hover` | `#e6288c` | primary hover |
| `--color-dark` | `#1a1a2e` | dark |
| `--color-dark-alt` | `#0d0d1a` | dark alt |
| `--color-light` | `#f8f9fa` | light |
| `--color-body` | `#333333` | body |
| `--color-muted` | `#999999` | muted |
| `--color-heading` | `#222222` | heading |
| `--font-heading` | `'Barlow Condensed', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-sans` | `'Barlow', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/colloquium/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `CounterStats` | — | no dedicated spec block |
| 6 | `Schedule` | — | no dedicated spec block |
| 7 | `Speakers` | — | no dedicated spec block |
| 8 | `Gallery` | — | no dedicated spec block |
| 9 | `Testimonials` | — | no dedicated spec block |
| 10 | `Pricing` | — | no dedicated spec block |
| 11 | `Blog` | — | no dedicated spec block |
| 12 | `CTA` | — | no dedicated spec block |
| 13 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — Facebook · Twitter · Instagram · LinkedIn

### `Navbar`
*anchors only* — Colloquium · Buy Ticket

### `Hero`
*anchors only* — Hurry Up! Don&#39;t Waste Time · Biggest Developer Conference 2025 · Days · Hours · Minutes · Seconds

### `About`
*anchors only* — Years of Experience · Welcome to Colloquium · We Make Your Event Memorable &amp; Successful

### `CounterStats`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Schedule`
*anchors only* — Event Schedule · Conference Schedule

### `Speakers`
*anchors only* — Facebook · Twitter · Instagram · LinkedIn

### `Gallery`
*anchors only* — Event Gallery · Our Event Gallery

### `Testimonials`
*anchors only* — Previous testimonial · Next testimonial · Testimonials · What People Say

### `Pricing`
*anchors only* — Pricing Plan · Choose Your Plan · Popular · Get Started

### `Blog`
*anchors only* — Latest News · From Our Blog

### `CTA`
*anchors only* — First Name · Last Name · Phone Number · Select Price

### `Footer`
*anchors only* — Facebook · Twitter · Instagram · LinkedIn

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
- **Provenance ban.** No file under `apps/colloquium/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/colloquium/public/CNAME` = `colloquium.free.componentdock.com`
  and the package `homepage` = `https://colloquium.free.componentdock.com`.
