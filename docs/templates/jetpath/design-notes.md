# Jetpath — Design Notes

Reference: **Travelers** — `https://colorlib.com/wp/template/travelers/`  
Live preview: `https://preview.colorlib.com/theme/travelers/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/travelers-free-template.jpg  
Shipped: https://jetpath.free.componentdock.com

Jetpath is a single-page travel and tours template with a search-driven hero, a destination grid, three tour packages, a "why choose us" feature row, testimonials and a newsletter capture.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/jetpath/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-jet-teal` | `#0d9488` | Jetpath brand palette — teal/navy travel agency |
| `--color-jet-teal-light` | `#14b8a6` | jet teal light |
| `--color-jet-navy` | `#0f172a` | jet navy |
| `--color-jet-navy-light` | `#1e293b` | jet navy light |
| `--color-jet-orange` | `#f97316` | jet orange |
| `--color-jet-text` | `#1e293b` | jet text |
| `--color-jet-muted` | `#64748b` | jet muted |
| `--color-jet-light` | `#f1f5f9` | jet light |
| `--color-jet-white` | `#ffffff` | jet white |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar With Search | see fidelity note below |
| 2 | `Hero` | Hero And Destinations | see fidelity note below |
| 3 | `Destinations` | Hero And Destinations | see fidelity note below |
| 4 | `Packages` | Tour Packages | see fidelity note below |
| 5 | `WhyChooseUs` | Why Choose Us, Testimonials And Newsletter | see fidelity note below |
| 6 | `Testimonials` | Why Choose Us, Testimonials And Newsletter | see fidelity note below |
| 7 | `Newsletter` | Why Choose Us, Testimonials And Newsletter | see fidelity note below |
| 8 | `Footer` | Component Dock Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL expose the brand, section links, a `Search` button, a mobile menu toggle and a `Subscribe` entry point.

### `Hero`
The hero SHALL headline the agency offer with a search affordance, and a destinations section SHALL present region cards, the reference's first region being `Asia`.

### `Destinations`
The hero SHALL headline the agency offer with a search affordance, and a destinations section SHALL present region cards, the reference's first region being `Asia`.

### `Packages`
The packages section SHALL render three priced tour cards showing the price, the trip length (`5 Days / 4 Nights`) and the number of tours available (e.g. `8 tours available`, `12 tours available`).

### `WhyChooseUs`
The page SHALL render a feature row (including `24/7 Support` and `500+ Destinations`), a testimonial section, and a newsletter form whose `Subscribe` button reports success inline.

### `Testimonials`
The page SHALL render a feature row (including `24/7 Support` and `500+ Destinations`), a testimonial section, and a newsletter form whose `Subscribe` button reports success inline.

### `Newsletter`
The page SHALL render a feature row (including `24/7 Support` and `500+ Destinations`), a testimonial section, and a newsletter form whose `Subscribe` button reports success inline.

### `Footer`
The footer SHALL link `https://www.componentdock.com/` alongside the agency's link columns and social icons.

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
- **Provenance ban.** No file under `apps/jetpath/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jetpath/public/CNAME` = `jetpath.free.componentdock.com`
  and the package `homepage` = `https://jetpath.free.componentdock.com`.
