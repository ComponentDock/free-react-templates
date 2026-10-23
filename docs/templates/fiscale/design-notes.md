# Fiscale — Design Notes

Reference: **Framework** — `https://colorlib.com/wp/template/framework/`  
Live preview: `https://preview.colorlib.com/theme/framework/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/framework-free-template.jpg  
Shipped: https://fiscale.free.componentdock.com

Fiscale is a finance-consulting business landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600**, **Poppins**

## Design tokens (`apps/fiscale/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#24b800` | brand |
| `--color-accent` | `#4877fb` | accent |
| `--color-ink` | `#000` | ink |
| `--color-body` | `rgba(0, 0, 0, 0.5)` | body |
| `--color-muted` | `#888` | muted |
| `--color-muted-2` | `#777` | muted 2 |
| `--color-fog` | `#efefef` | fog |
| `--color-light` | `#f8f9fa` | light |
| `--color-line` | `#ccc` | line |
| `--color-line-2` | `#e6e6e6` | line 2 |
| `--color-paper` | `#fff` | paper |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Steps` | Step services row | see fidelity note below |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `Testimonials` | Testimonials slider | see fidelity note below |
| 6 | `Pricing` | Pricing plans | see fidelity note below |
| 7 | `CtaBand` | CTA band | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar fixed over the hero with the brand wordmark and five navigation links.

### `Hero`
The system SHALL render a solid-blue hero with a white headline, a translucent CTA, and a video-play image block.

### `Steps`
The system SHALL render four white step cards overlapping the hero/features boundary on a light-gray background.

### `Features`
The system SHALL render a Features section with three alternating image/text rows numbered with green circles.

### `Testimonials`
The system SHALL render a Testimonials section with a client-side slider, round prev/next arrows, and author cards.

### `Pricing`
The system SHALL render three pricing cards with prices, checkmark lists, and pill CTAs.

### `CtaBand`
The system SHALL render a solid-blue CTA band with a headline and button.

### `Footer`
The system SHALL render a light-gray footer with four widget columns, social icons, contact info, and the Component Dock attribution.

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
- **Provenance ban.** No file under `apps/fiscale/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fiscale/public/CNAME` = `fiscale.free.componentdock.com`
  and the package `homepage` = `https://fiscale.free.componentdock.com`.
