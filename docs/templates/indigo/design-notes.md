# Indigo — Design Notes

Reference: **Parason** — `https://colorlib.com/wp/template/parason/`  
Live preview: `https://preview.colorlib.com/theme/parason/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/parason-free-template.jpeg  
Shipped: https://indigo.free.componentdock.com

Indigo is a free SaaS software landing page template, a faithful React recreation of the ColorLib "Parason" design. It targets startups, SaaS products, and web application landing pages with a hero section, feature highlights, pricing plans, testimonials, and a newsletter footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Rajdhani**, **Rajdhani:wght@400;600;700**, **Roboto**

## Design tokens (`apps/indigo/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#21146a` | primary |
| `--color-hero-bg` | `#22195b` | hero bg |
| `--color-heading` | `#3a414e` | heading |
| `--color-body` | `#797979` | body |
| `--color-magnolia` | `#faf9ff` | magnolia |
| `--color-footer-bg` | `#0e1424` | footer bg |
| `--color-footer-text` | `#7b838a` | footer text |
| `--color-white` | `#ffffff` | white |
| `--color-border` | `#ebebeb` | border |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Rajdhani', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Features` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `OfferFeatures` | — | no dedicated spec block |
| 6 | `Solutions` | Page loads with all sections | see fidelity note below |
| 7 | `Pricing` | Pricing cards display correctly | see fidelity note below |
| 8 | `Testimonials` | — | no dedicated spec block |
| 9 | `ClientLogos` | — | no dedicated spec block |
| 10 | `Footer` | Footer contains Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Indigo · Sign up

### `Hero`
*anchors only* — Advanced software made simple · Get Started

### `Features`
*anchors only* — Awesome Soft Feature

### `About`
*anchors only* — Leading the Digital Entertainment Revolution · Know More

### `OfferFeatures`
*anchors only* — Features We Offer

### `Solutions`
Users SHALL see the complete landing page with all 10 sections rendered in order.

### `Pricing`
Users SHALL see three pricing plans with prices, feature lists, and buy buttons.

### `Testimonials`
*anchors only* — Client Says Me · Trusted by teams worldwide to deliver results that matter.

### `ClientLogos`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Footer`
Users SHALL see a link to Component Dock in the footer.

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
- **Provenance ban.** No file under `apps/indigo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/indigo/public/CNAME` = `indigo.free.componentdock.com`
  and the package `homepage` = `https://indigo.free.componentdock.com`.
