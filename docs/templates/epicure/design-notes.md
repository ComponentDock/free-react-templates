# Epicure — Design Notes

Reference: **Cuisines** — `https://colorlib.com/wp/template/cuisines/`  
Live preview: `https://preview.colorlib.com/theme/cuisines/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cuisines-free-template.jpg  
Shipped: https://epicure.free.componentdock.com

Epicure is a single-page restaurant website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Cuisines" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@400;500;600;700**

## Design tokens (`apps/epicure/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#120078` | primary |
| `--color-primary-deep` | `#0f0066` | primary deep |
| `--color-accent` | `#8bc34a` | accent |
| `--color-section-grey` | `#e6e6e6` | section grey |
| `--color-body` | `#212529` | Surfaces: white body/sidebar, light borders, muted body text. |
| `--color-muted` | `#6c757d` | muted |
| `--color-border` | `#e9ecef` | border |
| `--font-display` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | Oswald for everything — display headings uppercase, nav, buttons. |
| `--font-sans` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Sidebar navigation | see fidelity note below |
| 2 | `MobileMenu` | — | no dedicated spec block |
| 3 | `Hero` | Hero | see fidelity note below |
| 4 | `SpecialOffers` | Special Offers section | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Sidebar`
The system SHALL render a fixed white sidebar on the left with the wordmark, five navigation links, and a quick-contact block (phone + hours), plus a right-slide mobile menu on small viewports.

### `MobileMenu`
*anchors only* — Open menu · dialog · Mobile navigation · Close menu · Mobile navigation links

### `Hero`
The system SHALL render a hero with an indigo background panel behind a large white uppercase headline, a subtext line, and two call-to-action buttons beside a food photo on the right.

### `SpecialOffers`
The system SHALL render a white section with an "Offers" eyebrow, the heading "Special Offers", and two rows of four alternating image/text cells, each text cell with a title, blurb, and a green price.

### `About`
The system SHALL render an About section with an "About Us" eyebrow, the heading "About Epicure", a paragraph, a checkmark list, a primary button, and an image slider on the right.

### `Testimonials`
The system SHALL render a light-grey section with a "Testimonials" eyebrow, the heading "Happy Customers", and a carousel of centered customer quotes with avatars.

### `Footer`
The system SHALL render a dark indigo footer with About, Links, Our Menu, and Opening Hours columns, a Component Dock credit line, and a copyright bar.

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
- **Provenance ban.** No file under `apps/epicure/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/epicure/public/CNAME` = `epicure.free.componentdock.com`
  and the package `homepage` = `https://epicure.free.componentdock.com`.
