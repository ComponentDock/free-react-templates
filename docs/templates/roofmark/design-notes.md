# Roofmark — Design Notes

Reference: **Myhome** — `https://colorlib.com/wp/template/myhome/`  
Live preview: `https://preview.colorlib.com/theme/myhome/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/myhome-free-template.jpg  
Shipped: https://roofmark.free.componentdock.com

A real estate agency website template. Recreation of ColorLib **Myhome**. - Source slug: `myhome` - ColorLib page: https://colorlib.com/wp/template/myhome/ - Preview URL: https://preview.colorlib.com/theme/myhome/ - Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/roofmark/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-green` | `#adc867` | brand green |
| `--color-brand-purple` | `#55407d` | brand purple |
| `--color-brand-dark` | `#1e1332` | brand dark |
| `--color-brand-deep` | `#110a1f` | brand deep |
| `--color-brand-body` | `#2b2e35` | brand body |
| `--color-brand-secondary` | `#a2b0bf` | brand secondary |
| `--color-brand-muted` | `#6c7079` | brand muted |
| `--color-brand-light-muted` | `#bdc4d4` | brand light muted |
| `--color-brand-link` | `#ffa07f` | brand link |
| `--color-brand-rent` | `#ff006c` | brand rent |
| `--color-brand-light` | `#f3f7fb` | brand light |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Search bar allows property search | see fidelity note below |
| 2 | `HeroSlider` | Hero slider displays property slides | see fidelity note below |
| 3 | `SearchBar` | — | no dedicated spec block |
| 4 | `FeaturedProperties` | Featured properties section shows listings | see fidelity note below |
| 5 | `HotDeal` | Hot deal section shows featured listing | see fidelity note below |
| 6 | `Testimonials` | Testimonials section displays client quotes | see fidelity note below |
| 7 | `Footer` | Footer displays site information | see fidelity note below |
| 8 | `FooterBar` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The page SHALL display a search form with property type, rooms, and location inputs.

### `HeroSlider`
The page SHALL render a full-width hero carousel with property images, addresses, and prices.

### `SearchBar`
*anchors only* — Find your home · Search

### `FeaturedProperties`
The page SHALL display a grid of property cards with images, tags, prices, and stats.

### `HotDeal`
The page SHALL display a 2-column hot deal section with a large image and property details.

### `Testimonials`
The page SHALL display a testimonial carousel with quotes from clients.

### `Footer`
The page SHALL render a dark purple footer with four columns of links and a copyright bar.

### `FooterBar`
The page footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/roofmark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/roofmark/public/CNAME` = `roofmark.free.componentdock.com`
  and the package `homepage` = `https://roofmark.free.componentdock.com`.
