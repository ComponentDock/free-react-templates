# Tribune — Design Notes

Reference: **Plataforma** — `https://colorlib.com/wp/template/plataforma/`  
Live preview: `https://preview.colorlib.com/theme/plataforma/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/plataforma-free-template.jpg  
Shipped: https://tribune.free.componentdock.com

A Conference / Event template with hero, services strip, about, schedule, gallery and pricing sections. Recreation of the ColorLib **Plataforma** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:wght@400;600;700;800**

## Design tokens (`apps/tribune/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#1162fb` | primary |
| `--color-primary-dark` | `#0062cc` | primary dark |
| `--color-dark-bg` | `#212529` | dark bg |
| `--color-dark-surface` | `#343a40` | dark surface |
| `--color-muted` | `#6c757d` | muted |
| `--color-border` | `#dee2e6` | border |
| `--color-light-bg` | `#f8f9fa` | light bg |
| `--font-sans` | `'Nunito Sans', Arial, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/tribune/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Services` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Schedule` | — | no dedicated spec block |
| 6 | `Gallery` | — | no dedicated spec block |
| 7 | `Testimonials` | — | no dedicated spec block |
| 8 | `Pricing` | — | no dedicated spec block |
| 9 | `Speakers` | — | no dedicated spec block |
| 10 | `Newsletter` | — | no dedicated spec block |
| 11 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle navigation · Buy ticket

### `Hero`
*anchors only* — timer · Countdown timer · Join Conference · I have read and accept the terms and conditions · Join now · Conference 2025

### `Services`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `About`
*anchors only* — What is all about us? · Join now

### `Schedule`
*anchors only* — tablist · tabpanel · Conference Schedule

### `Gallery`
*anchors only* — Conference Gallery

### `Testimonials`
*anchors only* — Previous testimonial · Next testimonial · Happy Clients

### `Pricing`
*anchors only* — Conference Ticket Pricing · Enjoy All The Features · Buy Ticket

### `Speakers`
*anchors only* — Conference Speakers

### `Newsletter`
*anchors only* — Subscribe to our Newsletter · Subscribe

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
- **Provenance ban.** No file under `apps/tribune/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tribune/public/CNAME` = `tribune.free.componentdock.com`
  and the package `homepage` = `https://tribune.free.componentdock.com`.
