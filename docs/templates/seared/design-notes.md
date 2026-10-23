# Seared — Design Notes

Reference: **Diner** — `https://colorlib.com/wp/template/diner/`  
Live preview: `https://preview.colorlib.com/theme/diner/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/diner-free-template.jpg  
Shipped: https://seared.free.componentdock.com

A Restaurant / Fine Dining template with buttons & shapes and site header and navigation sections. Recreation of ColorLib's **Diner** template as a React 19 + Vite + Tailwind 4 + TypeScript site.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700;800**, **Playfair Display**

## Design tokens (`apps/seared/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-sans` | `'Open Sans', sans-serif` | font sans |
| `--font-serif` | `'Playfair Display', serif` | font serif |
| `--color-brand` | `#fdb44b` | brand |
| `--color-brand-light` | `#fec97d` | brand light |
| `--color-ink` | `#000000` | ink |
| `--color-body` | `#999999` | body |
| `--color-body-light` | `#b3b3b3` | body light |
| `--color-border` | `#cccccc` | border |
| `--color-hover` | `#e6e6e6` | hover |
| `--color-light-bg` | `#f2f2f2` | light bg |
| `--color-near-white` | `#f7f7f7` | near white |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Site header and navigation display correctly | see fidelity note below |
| 3 | `Features` | — | no dedicated spec block |
| 4 | `Specialties` | — | no dedicated spec block |
| 5 | `Testimonials` | — | no dedicated spec block |
| 6 | `FeatureMenu` | — | no dedicated spec block |
| 7 | `Chef` | — | no dedicated spec block |
| 8 | `MenuPricing` | — | no dedicated spec block |
| 9 | `Events` | — | no dedicated spec block |
| 10 | `WhyChooseUs` | — | no dedicated spec block |
| 11 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Hero`
- **Given** the user loads the page - **Then** a sticky site header is visible at the top - **And** a logo (letter "D" or equivalent) is on the left - **And** navigation links include: Home, About Us, Our Menu, Our Blog, Reserve A Table, Contact - **And** a mobile hamburger menu toggle is visible on small screens

### `Features`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Specialties`
*anchors only* — Scroll left · Scroll right · Our Specialties

### `Testimonials`
*anchors only* — Previous testimonial · Next testimonial

### `FeatureMenu`
*anchors only* — Feature Menu · View All Menu

### `Chef`
*anchors only* — Master Chef · Meet Our Chef

### `MenuPricing`
*anchors only* — Menu List with Price

### `Events`
*anchors only* — Events &amp; News

### `WhyChooseUs`
*anchors only* — Why Choose Us

### `Footer`
*anchors only* — Email for newsletter · Subscribe · Seared Restaurant · Service Hours · Lunch Service: · Dinner Service:

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
- **Provenance ban.** No file under `apps/seared/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/seared/public/CNAME` = `seared.free.componentdock.com`
  and the package `homepage` = `https://seared.free.componentdock.com`.
