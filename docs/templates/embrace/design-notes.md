# Embrace — Design Notes

Reference: **Charity** — `https://colorlib.com/wp/template/charity/`  
Live preview: `https://preview.colorlib.com/theme/charity/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/charity-free-non-profit-donation-website-template.jpg  
Shipped: https://embrace.free.componentdock.com

Embrace is a charity & donation template. It recreates the ColorLib **Charity** design (https://colorlib.com/wp/template/charity/, preview: https://preview.colorlib.com/theme/charity/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700**, **Montserrat**

## Design tokens (`apps/embrace/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#e55e2a` | primary |
| `--color-primary-500` | `#e55e2a` | primary 500 |
| `--color-primary-600` | `#d14e1f` | primary 600 |
| `--color-primary-700` | `#b8431a` | primary 700 |
| `--color-dark` | `#1a1a2e` | dark |
| `--color-light` | `#f8f9fa` | light |
| `--color-ink` | `#1a1a2e` | ink |
| `--color-surface` | `#ffffff` | surface |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Causes` | — | no dedicated spec block |
| 4 | `Donors` | — | no dedicated spec block |
| 5 | `Testimonials` | — | no dedicated spec block |
| 6 | `SuccessStories` | — | no dedicated spec block |
| 7 | `NewsAboutGallery` | — | no dedicated spec block |
| 8 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle navigation · Embrace · Donate

### `Hero`
*anchors only* — Donate · Together we can make a difference · Donate Now

### `Causes`
*anchors only* — Raised: · Goal: · Donate Now! · Most Popular Causes · See all causes

### `Donors`
*anchors only* — Latest Donations · Donated

### `Testimonials`
*anchors only* — Previous testimonial · Next testimonial · What People Say

### `SuccessStories`
*anchors only* — Success Stories · Read More

### `NewsAboutGallery`
*anchors only* — News · View All News · About Us · Learn More · Gallery · View All Gallery

### `Footer`
*anchors only* — About Us · Contact Info · Donation · Donate Now · Component Dock · Back to top

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
- **Provenance ban.** No file under `apps/embrace/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/embrace/public/CNAME` = `embrace.free.componentdock.com`
  and the package `homepage` = `https://embrace.free.componentdock.com`.
