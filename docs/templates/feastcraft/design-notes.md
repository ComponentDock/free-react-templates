# Feastcraft — Design Notes

Reference: **Meal2** — `https://colorlib.com/wp/template/meal2/`  
Live preview: `https://preview.colorlib.com/theme/meal2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/meal2-free-template.jpg  
Shipped: https://feastcraft.free.componentdock.com

A free restaurant website template with food menus, desserts, events, galleries, and testimonials. Recreation of ColorLib "Meal2".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito**, **Playfair Display**, **Playfair Display:wght@400;700;800**

## Design tokens (`apps/feastcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-playfair` | `'Playfair Display', serif` | font playfair |
| `--font-nunito` | `'Nunito', sans-serif` | font nunito |
| `--color-orange` | `#ff5200` | orange |
| `--color-orange-hover` | `#ff6014` | orange hover |
| `--color-peach` | `#fee2b3` | peach |
| `--color-charcoal` | `#333333` | charcoal |
| `--color-heading` | `#000000` | heading |
| `--color-muted` | `#999999` | muted |

> The spec has no section-level requirements; the order below is read from `apps/feastcraft/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `PopularFoods` | — | no dedicated spec block |
| 4 | `PopularDesserts` | — | no dedicated spec block |
| 5 | `Testimonials` | — | no dedicated spec block |
| 6 | `PhotoGallery` | — | no dedicated spec block |
| 7 | `Events` | — | no dedicated spec block |
| 8 | `BookTable` | — | no dedicated spec block |
| 9 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Feastcraft · Book a table

### `Hero`
*anchors only* — Enjoy Your Healthy Delicious Meal · Treat Yourself · Explore now

### `PopularFoods`
*anchors only* — Select your Meal · Popular Foods

### `PopularDesserts`
*anchors only* — Choose Desserts · Popular Desserts

### `Testimonials`
*anchors only* — Previous testimonial · Next testimonial · Testimonials · Satisfied Customers

### `PhotoGallery`
*anchors only* — dialog · Gallery lightbox · Close lightbox

### `Events`
*anchors only* — Events · Enjoy Our Events

### `BookTable`
*anchors only* — Book a table · Book A Table Now

### `Footer`
*anchors only* — Instagram · Twitter · Facebook · LinkedIn · Pinterest

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
- **Provenance ban.** No file under `apps/feastcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/feastcraft/public/CNAME` = `feastcraft.free.componentdock.com`
  and the package `homepage` = `https://feastcraft.free.componentdock.com`.
