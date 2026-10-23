# Bookcraft — Design Notes

Reference: **Booke** — `https://colorlib.com/wp/template/booke/`  
Live preview: `https://preview.colorlib.com/theme/booke/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/booke-website-template.jpeg  
Shipped: https://bookcraft.free.componentdock.com

A Book / Author template with hero, sticky navigation, features, about author, newsletter subscription and footer with contact form sections. Recreation of ColorLib's **Booke** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page landing site for authors promoting a book.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/bookcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-blue-primary` | `#1c63fb` | blue primary |
| `--color-blue-hover` | `#1450d4` | blue hover |
| `--color-dark-footer` | `#333333` | dark footer |
| `--color-muted` | `#8c8c8c` | muted |
| `--color-link-footer` | `#b3b3b3` | link footer |
| `--color-input-bg` | `#f6f6f6` | input bg |
| `--color-light-section` | `#f8f9fa` | light section |
| `--font-heading` | `'Oswald', sans-serif` | Oswald for headings / serif elements, Roboto for body |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Sticky navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section displays book headline and CTA | see fidelity note below |
| 3 | `Features` | Features section shows book feature cards | see fidelity note below |
| 4 | `Screenshot` | Screenshot carousel section | see fidelity note below |
| 5 | `AboutAuthor` | About Author section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Newsletter` | Newsletter subscription section | see fidelity note below |
| 8 | `Footer` | Footer with contact form and social links | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a sticky navigation bar with the "BookCraft" logo and links to Home, Features, About Author, Testimonial, and Contact sections.

### `Hero`
The template SHALL render a hero section with a dark background, the headline "Meet Your Next Book", a subtitle, and a "Buy This Book On Amazon" CTA button.

### `Features`
The template SHALL render a features section with a heading and 6 feature cards in a responsive grid.

### `Screenshot`
The template SHALL render a screenshot/carousel section with Prev/Next navigation controls.

### `AboutAuthor`
The template SHALL render an About Author section with a split layout: author image on one side, bio text on the other.

### `Testimonials`
The template SHALL render a testimonials section with 3 reader testimonial cards.

### `Newsletter`
The template SHALL render a newsletter subscription section with email input and subscribe button on a blue background.

### `Footer`
The template SHALL render a dark footer with About Us, Navigation, and Quick Contact sections, plus social media links and a Component Dock attribution.

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
- **Provenance ban.** No file under `apps/bookcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bookcraft/public/CNAME` = `bookcraft.free.componentdock.com`
  and the package `homepage` = `https://bookcraft.free.componentdock.com`.
