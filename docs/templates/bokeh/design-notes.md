# Bokeh — Design Notes

Reference: **Pentax** — `https://colorlib.com/wp/template/pentax/`  
Live preview: `https://preview.colorlib.com/theme/pentax/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pentax-free-template.jpg  
Shipped: https://bokeh.free.componentdock.com

Bokeh is a single-page photography portfolio template with a full-bleed hero, a filterable-style portfolio gallery, service cards, three pricing packages, an about block and client testimonials.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;700**, **Roboto**

## Design tokens (`apps/bokeh/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f81c1c` | brand |
| `--color-brand-dark` | `#d41515` | brand dark |
| `--color-brand-light` | `#ff4444` | brand light |
| `--color-heading` | `#1a1d24` | heading |
| `--color-body-text` | `#797979` | body text |
| `--color-surface` | `#ffffff` | surface |
| `--color-muted` | `#f7f7f7` | muted |
| `--color-border` | `#eeeeee` | border |
| `--font-heading` | `'Playfair Display', serif` | font heading |
| `--font-body` | `'Roboto', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar And Hero | see fidelity note below |
| 2 | `Hero` | Navbar And Hero | see fidelity note below |
| 3 | `Portfolio` | Filterable Portfolio Gallery | see fidelity note below |
| 4 | `Services` | Services And Pricing | see fidelity note below |
| 5 | `Pricing` | Services And Pricing | see fidelity note below |
| 6 | `About` | About And Testimonials | see fidelity note below |
| 7 | `Testimonials` | About And Testimonials | see fidelity note below |
| 8 | `Footer` | Component Dock Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The page SHALL open with a navbar (brand mark, section links, mobile toggle with `aria-expanded`) above a full-bleed photographic hero.

### `Hero`
The page SHALL open with a navbar (brand mark, section links, mobile toggle with `aria-expanded`) above a full-bleed photographic hero.

### `Portfolio`
The portfolio section SHALL present the studio's work as an image grid with five filter buttons — `all`, `wedding`, `motion`, `portrait`, `fashion` — where the active filter is visually distinguished and the grid shows only items whose category matches it (`all` shows everything).

### `Services`
The page SHALL render service cards (including `Event Coverage` and `Fashion Shot`) and three pricing packages priced at 76, 86 and 96.

### `Pricing`
The page SHALL render service cards (including `Event Coverage` and `Fashion Shot`) and three pricing packages priced at 76, 86 and 96.

### `About`
The page SHALL include an about block and a testimonial section whose cards carry a quote, a client name (e.g. `Emma Davis`) and a role (e.g. `Fashion Designer`, `Bride`).

### `Testimonials`
The page SHALL include an about block and a testimonial section whose cards carry a quote, a client name (e.g. `Emma Davis`) and a role (e.g. `Fashion Designer`, `Bride`).

### `Footer`
The footer SHALL link `https://www.componentdock.com/` and expose the studio's social links with accessible names.

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
- **Provenance ban.** No file under `apps/bokeh/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bokeh/public/CNAME` = `bokeh.free.componentdock.com`
  and the package `homepage` = `https://bokeh.free.componentdock.com`.
