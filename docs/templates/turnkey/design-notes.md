# Turnkey — Design Notes

Reference: **Holmes** — `https://colorlib.com/wp/template/holmes/`  
Live preview: `https://preview.colorlib.com/theme/holmes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/holmes-free-template.jpg  
Shipped: https://turnkey.free.componentdock.com

Turnkey is a real estate template with a navbar, hero, properties, city gallery, testimonials, blog and footer. It recreates the ColorLib **Holmes** design (https://colorlib.com/wp/template/holmes/, preview: https://preview.colorlib.com/theme/holmes/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/turnkey/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ea6c5d` | brand |
| `--color-brand-dark` | `#d55a4b` | brand dark |
| `--color-heading` | `#222222` | heading |
| `--color-body` | `#777777` | body |
| `--color-light` | `#f9f9ff` | light |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Properties` | — | no dedicated spec block |
| 4 | `CityGallery` | — | no dedicated spec block |
| 5 | `Testimonials` | — | no dedicated spec block |
| 6 | `Blog` | — | no dedicated spec block |
| 7 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Sell / Rent Property · Login / Register · Turn

### `Hero`
*anchors only* — Choose location · Property type · Number of bedrooms · Price range

### `Properties`
*anchors only* — Properties in Various Cities · Who are in extremely love with eco friendly system.

### `CityGallery`
*anchors only* — Find Home in Your City · It won&apos;t be a bigger problem to find one.

### `Testimonials`
*anchors only* — Feedback from Our Real Clients · It won&apos;t be a bigger problem to find one.

### `Blog`
*anchors only* — Latest Blog Posts · Stay updated with our latest news and insights.

### `Footer`
*anchors only* — Email for newsletter · Subscribe · Facebook · Twitter · Dribbble

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
- **Provenance ban.** No file under `apps/turnkey/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/turnkey/public/CNAME` = `turnkey.free.componentdock.com`
  and the package `homepage` = `https://turnkey.free.componentdock.com`.
