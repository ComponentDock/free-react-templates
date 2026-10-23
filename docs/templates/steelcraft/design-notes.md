# Steelcraft — Design Notes

Reference: **Lendo** — `https://colorlib.com/wp/template/lendo/`  
Live preview: `https://preview.colorlib.com/theme/lendo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lendo-free-template.jpg  
Shipped: https://steelcraft.free.componentdock.com

Steelcraft is an industrial-services company site in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Jost**, **Jost:wght@300;400;500;600;700**

## Design tokens (`apps/steelcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e61818` | brand |
| `--color-ink` | `#1a1a1a` | ink |
| `--color-navy` | `#132e43` | Dark navy used for counter labels (#132E43 in the source). |
| `--color-body` | `#5e5e5e` | Footer body copy (#5E5E5E in the source). |
| `--color-section` | `#f2f4f8` | section |
| `--color-overlay` | `rgba(29, 29, 29, 0.5)` | Hero photo overlay (rgba(29,29,29,0.5) in the source). |
| `--color-play` | `#f04506` | Video play glyph color (orange-red #F04506 in the source). |
| `--font-sans` | `'Jost', ui-sans-serif, system-ui, sans-serif` | Original font: "Jost" via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header (black top bar + sticky nav + mobile menu) | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Services` | Services section (categories) | see fidelity note below |
| 4 | `Brands` | Brand logo carousel | see fidelity note below |
| 5 | `About` | About section (Why Choose Us + video + counters) | see fidelity note below |
| 6 | `Testimonials` | Testimonial carousel | see fidelity note below |
| 7 | `CtaBand` | CTA band (wantToWork) | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a top info bar, a sticky navigation bar, and a responsive mobile menu.

### `Hero`
The system SHALL render a full-width hero over a darkened background photo with a headline, subtext, and one red CTA.

### `Services`
The system SHALL render a light-gray services section with an eyebrow, a heading, and four white service cards.

### `Brands`
The system SHALL render a logo strip on the same gray background.

### `About`
The system SHALL render a two-column about section with a video popup and two stat counters.

### `Testimonials`
The system SHALL render a testimonial section with a carousel of quotes.

### `CtaBand`
The system SHALL render a dark call-to-action band with a red top border.

### `Footer`
The system SHALL render a light footer with about/contact, Navigation and Services link columns, a newsletter form, and a bottom bar.

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
- **Provenance ban.** No file under `apps/steelcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/steelcraft/public/CNAME` = `steelcraft.free.componentdock.com`
  and the package `homepage` = `https://steelcraft.free.componentdock.com`.
