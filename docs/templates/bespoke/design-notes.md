# Bespoke — Design Notes

Reference: **Fashion** — `https://colorlib.com/wp/template/fashion/`  
Live preview: `https://preview.colorlib.com/theme/fashion/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fashion-bold-free-fashion-website-template.jpg  
Shipped: https://bespoke.free.componentdock.com

Provide a free, production-ready fashion boutique landing page template with a hero carousel, product collections, about section, testimonials, blog grid, and a full footer. Built with React 19, Tailwind CSS 4, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@400;700;900**, **Playfair Display**

## Design tokens (`apps/bespoke/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff6363` | Brand palette — coral/salmon red from the original design |
| `--color-brand-hover` | `#ff7777` | brand hover |
| `--font-display` | `'Playfair Display', Georgia, serif` | font display |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with responsive mobile menu | see fidelity note below |
| 2 | `HeroSlider` | — | no dedicated spec block |
| 3 | `Collections` | Product collections carousel | see fidelity note below |
| 4 | `About` | About section with stacked images | see fidelity note below |
| 5 | `Testimonials` | Testimonials section | see fidelity note below |
| 6 | `BlogPosts` | Blog posts grid | see fidelity note below |
| 7 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The template SHALL display a navbar with the "Bespoke" logo and navigation links (Home, Collections, About, Blog, Contact). On mobile, a burger menu toggles the nav links open/closed.

### `HeroSlider`
*anchors only* — Previous slide · Next slide · Learn more

### `Collections`
The collections section SHALL display four products (Minimal $29, Collecta $21, Nine8 $38, Hut $49) with prev/next navigation.

### `About`
The about section SHALL display "A Fashion Boutique" heading with stacked images and a "Learn more" link.

### `Testimonials`
The testimonials section SHALL display three customer testimonials with avatars, names, and quotes.

### `BlogPosts`
The blog section SHALL display four blog cards in a responsive grid with dates, titles, and excerpts.

### `Footer`
The footer SHALL display about text, social icons, navigation columns, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/bespoke/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bespoke/public/CNAME` = `bespoke.free.componentdock.com`
  and the package `homepage` = `https://bespoke.free.componentdock.com`.
