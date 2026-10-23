# Vintner — Design Notes

Reference: **Wines** — `https://colorlib.com/wp/template/wines/`  
Live preview: `https://preview.colorlib.com/theme/wines/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/wines-free-template.jpg  
Shipped: https://vintner.free.componentdock.com

Vintner is a single-page wine-shop / winery website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Wines" website template design (see TEMPLATES.md, Bootstrap category), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cinzel**, **Cinzel:wght@400;700**, **Montserrat**

## Design tokens (`apps/vintner/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#930077` | brand |
| `--color-gold` | `#ffbd39` | gold |
| `--color-ink` | `#25262a` | ink |
| `--color-mist` | `#f4f5f9` | mist |
| `--color-panel` | `#f3f4f5` | panel |
| `--color-muted` | `#cccccc` | muted |
| `--font-serif` | `'Cinzel', ui-serif, Georgia, serif` | Cinzel (headings/nav/logo) + Montserrat (body) via Google Fonts. |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header (logo + navbar) | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `Products` | Products | see fidelity note below |
| 4 | `Testimonials` | Testimonials | see fidelity note below |
| 5 | `Blog` | Blog | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a centered logo wordmark above a white sticky navigation bar.

### `HeroSlider`
The system SHALL render a full-screen two-slide hero carousel with a dark overlay, centered Cinzel headline + sub-title, arrows, and dots.

### `Products`
The system SHALL render a white "Our Products" band with three wine product cards whose hover overlay reveals rating, price, and an Add to Cart button.

### `Testimonials`
The system SHALL render a light-grey testimonials section with a quote carousel.

### `Blog`
The system SHALL render a "Wine's Blog" band with three photo post cards.

### `Footer`
The system SHALL render the centered minimal footer.

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
- **Provenance ban.** No file under `apps/vintner/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vintner/public/CNAME` = `vintner.free.componentdock.com`
  and the package `homepage` = `https://vintner.free.componentdock.com`.
