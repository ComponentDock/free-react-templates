# Dine — Design Notes

Reference: **Gourmet** — `https://colorlib.com/wp/template/gourmet/`  
Live preview: `https://preview.colorlib.com/theme/gourmet/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/gourmet-free-template.jpg  
Shipped: https://dine.free.componentdock.com

A restaurant/food landing page with dark navbar, hero slider, about section, gallery, special menu carousel, our menu grid, testimonials. It also includes blog, and footer. Recreation of ColorLib's **Gourmet**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Serif Display**, **DM Serif Display:ital@0;1**

## Design tokens (`apps/dine/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#ff7404` | primary |
| `--font-heading` | `'DM Serif Display', serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with brand and navigation links | see fidelity note below |
| 2 | `Hero` | Hero slider displays with CTA | see fidelity note below |
| 3 | `About` | About section shows restaurant info | see fidelity note below |
| 4 | `Gallery` | Gallery displays three food images | see fidelity note below |
| 5 | `SpecialMenu` | Special menu carousel shows dishes | see fidelity note below |
| 6 | `OurMenu` | Our menu grid displays items | see fidelity note below |
| 7 | `Testimonials` | Testimonials carousel shows quotes | see fidelity note below |
| 8 | `Blog` | Blog section shows posts | see fidelity note below |
| 9 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The application SHALL display a dark navbar with the brand name "Dine" and navigation links including a Services dropdown.

### `Hero`
The application SHALL display a hero section with slide headings and a call-to-action button.

### `About`
The application SHALL display an about section with a heading, description text, and signature placeholder.

### `Gallery`
The application SHALL display a gallery section with three food images.

### `SpecialMenu`
The application SHALL display a special menu section with a carousel of dish cards showing names and prices.

### `OurMenu`
The application SHALL display a 2-column menu grid with six items showing names, descriptions, and prices.

### `Testimonials`
The application SHALL display a testimonials section with three quotes including author names and roles.

### `Blog`
The application SHALL display a blog section with two post cards showing titles and dates.

### `Footer`
The application SHALL display a footer with About Us, Opening Hours, Contact Info, Quick Links, and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/dine/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dine/public/CNAME` = `dine.free.componentdock.com`
  and the package `homepage` = `https://dine.free.componentdock.com`.
