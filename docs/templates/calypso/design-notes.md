# Calypso — Design Notes

Reference: **Calvin** — `https://colorlib.com/wp/template/calvin/`  
Live preview: `https://preview.colorlib.com/theme/calvin/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calvin-free-template.jpg  
Shipped: https://calypso.free.componentdock.com

Provide a free, open-source React portfolio/resume template with a modern design featuring a hero section, services grid, portfolio gallery, skill bars, testimonials, blog, and a branded footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000**, **Roboto Condensed**

## Design tokens (`apps/calypso/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#fff5f0` | brand 50 |
| `--color-brand-100` | `#ffe8dc` | brand 100 |
| `--color-brand-200` | `#ffd1b8` | brand 200 |
| `--color-brand-300` | `#ffb38f` | brand 300 |
| `--color-brand-400` | `#ff8553` | brand 400 |
| `--color-brand-500` | `#e06030` | brand 500 |
| `--color-brand-600` | `#c44a1c` | brand 600 |
| `--color-brand-700` | `#a13a14` | brand 700 |
| `--color-brand-800` | `#7d2d0f` | brand 800 |
| `--color-brand-900` | `#5a210c` | brand 900 |
| `--color-brand-950` | `#3a1508` | brand 950 |
| `--color-primary-50` | `#fff5f0` | primary 50 |
| `--color-primary-100` | `#ffe8dc` | primary 100 |
| `--color-primary-200` | `#ffd1b8` | primary 200 |
| `--color-primary-300` | `#ffb38f` | primary 300 |
| `--color-primary-400` | `#ff8553` | primary 400 |
| `--color-primary-500` | `#e06030` | primary 500 |
| `--color-primary-600` | `#c44a1c` | primary 600 |
| `--color-primary-700` | `#a13a14` | primary 700 |
| `--color-primary-800` | `#7d2d0f` | primary 800 |
| `--color-primary-900` | `#5a210c` | primary 900 |
| `--color-primary-950` | `#3a1508` | primary 950 |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Roboto Condensed', 'DM Sans', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar — Logo, Navigation, and CTA | see fidelity note below |
| 2 | `Hero` | Hero — Person Image, Name, and Title | see fidelity note below |
| 3 | `AboutInfoBar` | — | no dedicated spec block |
| 4 | `Services` | Services — 4 Cards in 2×2 Grid | see fidelity note below |
| 5 | `Gallery` | Gallery — 4 Images with Hover Overlay | see fidelity note below |
| 6 | `AboutMe` | About Info Bar — Contact Details | see fidelity note below |
| 7 | `BrandCarousel` | Brand Carousel | see fidelity note below |
| 8 | `Testimonials` | Testimonials — Quote and Author | see fidelity note below |
| 9 | `Blog` | Blog — 3 Article Cards | see fidelity note below |
| 10 | `Footer` | Footer — CTA, Copyright, and Component Dock Link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The Navbar SHALL display a logo on the left, navigation links (Home, Work, Service, Blog, Contact) in the center, and a "Let's Talk" CTA button on the right.

### `Hero`
The Hero section SHALL display a person image alongside a heading with name and title.

### `AboutInfoBar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Services`
The Services section SHALL display 4 service cards in a 2-column grid with icons, titles, and descriptions.

### `Gallery`
The Gallery section SHALL display 4 portfolio images in a 2-column grid with hover overlays.

### `AboutMe`
The About Info Bar SHALL display three contact items: Design For, Phone, and Email.

### `BrandCarousel`
The Brand Carousel section SHALL display a row of 6 brand placeholders.

### `Testimonials`
The Testimonials section SHALL display a client quote with author info.

### `Blog`
The Blog section SHALL display 3 blog post cards with images, categories, dates, and titles.

### `Footer`
The Footer SHALL display a CTA area, social links, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/calypso/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/calypso/public/CNAME` = `calypso.free.componentdock.com`
  and the package `homepage` = `https://calypso.free.componentdock.com`.
