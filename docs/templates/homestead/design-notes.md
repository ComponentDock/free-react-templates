# Homestead — Design Notes

Reference: **Uptown** — `https://colorlib.com/wp/template/uptown/`  
Live preview: `https://preview.colorlib.com/theme/uptown/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/uptown-free-template.jpg  
Shipped: https://homestead.free.componentdock.com

Homestead is a single-page real-estate agency template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Uptown" real-estate website template (see TEMPLATES.md, Bootstrap section, line 524), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:opsz,wght@6..12,400;6..12,600;6..12,700**

## Design tokens (`apps/homestead/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e86ed0` | brand |
| `--color-gold` | `#f7b71d` | gold |
| `--color-ink` | `#000000` | ink |
| `--color-body` | `#666666` | body |
| `--color-muted` | `rgba(0, 0, 0, 0.6)` | muted |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Transparent navbar with text logo and dark links | see fidelity note below |
| 2 | `Hero` | Photo hero with headline and pill search | see fidelity note below |
| 3 | `Services` | Services features section | see fidelity note below |
| 4 | `Properties` | Exclusive Offer property cards | see fidelity note below |
| 5 | `HowItWorks` | How it works band | see fidelity note below |
| 6 | `About` | About split section | see fidelity note below |
| 7 | `Counter` | Stats counter | see fidelity note below |
| 8 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 9 | `Agents` | Agents grid | see fidelity note below |
| 10 | `Blog` | Recent Blog list | see fidelity note below |
| 11 | `Footer` | Near-white footer with link columns and contact info | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed navbar that is transparent over the hero with a text logo and dark nav links that turn pink on hover.

### `Hero`
The system SHALL render a full-width 850px hero photo with a white gradient overlay, a centered 60px headline and a pill search form with a circular pink search button.

### `Services`
The system SHALL render a white services section with a labeled heading and four icon feature columns.

### `Properties`
The system SHALL render a property-listings section with three cards, each with a photo, an overlapping white text block (prices, specs, title, location) and a pink corner arrow button.

### `HowItWorks`
The system SHALL render a dark photo band with the white heading variant and four numbered pink-circle steps.

### `About`
The system SHALL render a two-column about section with a heading, copy and a photo.

### `Counter`
The system SHALL render four animated stat counters with black 50px numbers and 18px labels, divided by hairline borders.

### `Testimonials`
The system SHALL render a testimonials section with a labeled heading and carousel cards (quote, photo, name, role).

### `Agents`
The system SHALL render an agents section with four photo cards (name, listing info).

### `Blog`
The system SHALL render a blog section with labeled heading and three entries (image, title, meta, excerpt).

### `Footer`
The system SHALL render a near-white footer with a brand column, three link columns, a contact column and a copyright bar linking Component Dock.

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
- **Provenance ban.** No file under `apps/homestead/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/homestead/public/CNAME` = `homestead.free.componentdock.com`
  and the package `homepage` = `https://homestead.free.componentdock.com`.
