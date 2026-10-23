# Smokehouse — Design Notes

Reference: **Steak** — `https://colorlib.com/wp/template/steak/`  
Live preview: `https://preview.colorlib.com/theme/steak/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/steak-free-template.jpg  
Shipped: https://smokehouse.free.componentdock.com

A restaurant template with hero, about, menu, reservation, services, counter, news and map sections. Recreation of ColorLib's **Steak** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page restaurant website.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700**

## Design tokens (`apps/smokehouse/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fba83b` | brand |
| `--color-brand-hover` | `#fa9716` | brand hover |
| `--color-brand-light` | `#fcbe6d` | brand light |
| `--color-text-dark` | `#212529` | text dark |
| `--color-text-muted` | `#999999` | text muted |
| `--color-heading` | `#000000` | heading |
| `--color-bg-light` | `#f8f9fa` | bg light |
| `--color-border-gray` | `#cccccc` | border gray |
| `--font-sans` | `'Playfair Display', arial, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/smokehouse/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `AboutSection` | — | no dedicated spec block |
| 4 | `ServicesSection` | — | no dedicated spec block |
| 5 | `MenuSection` | — | no dedicated spec block |
| 6 | `CounterSection` | — | no dedicated spec block |
| 7 | `NewsSection` | — | no dedicated spec block |
| 8 | `TestimonialSection` | — | no dedicated spec block |
| 9 | `ReservationSection` | — | no dedicated spec block |
| 10 | `MapSection` | — | no dedicated spec block |
| 11 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
*anchors only* — Main navigation · Toggle menu · Mobile navigation

### `Hero`
*anchors only* — Scroll down · Welcome To Smokehouse · Food &amp; Restaurant · Play Video

### `AboutSection`
*anchors only* — Welcome To Smokehouse · Food &amp; Restaurant · Read More

### `ServicesSection`
*anchors only* — Restaurant Services

### `MenuSection`
*anchors only* — Our Menu

### `CounterSection`
*anchors only* — Today&apos;s Fun Facts

### `NewsSection`
*anchors only* — News &amp; Events

### `TestimonialSection`
*anchors only* — Previous testimonial · Next testimonial · Testimonials

### `ReservationSection`
*anchors only* — Reservation form · partySize · date · time · name · phone

### `MapSection`
*anchors only* — Map placeholder

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
- **Provenance ban.** No file under `apps/smokehouse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/smokehouse/public/CNAME` = `smokehouse.free.componentdock.com`
  and the package `homepage` = `https://smokehouse.free.componentdock.com`.
