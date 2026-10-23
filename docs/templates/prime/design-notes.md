# Prime — Design Notes

Reference: **Ultim8** — `https://colorlib.com/wp/template/ultim8/`  
Live preview: `https://preview.colorlib.com/theme/ultim8/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ultim8-free-template.jpg  
Shipped: https://prime.free.componentdock.com

Prime is a single-page digital-agency / SaaS marketing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;500;600;700**

## Design tokens (`apps/prime/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#2f89fc` | brand |
| `--color-brand-dark` | `#2273d6` | brand dark |
| `--color-mint` | `#55fbc2` | mint |
| `--color-btn` | `#78d5ef` | btn |
| `--color-btn-hover` | `#56caeb` | btn hover |
| `--color-ink` | `#212529` | ink |
| `--color-muted` | `#b3b3b3` | muted |
| `--color-band` | `#f0f0f0` | band |
| `--color-light` | `#f8f9fa` | light |
| `--color-footer` | `#233142` | footer |
| `--color-copyright` | `#3c312e` | copyright |
| `--color-white-70` | `rgba(255, 255, 255, 0.7)` | white 70 |
| `--color-white-80` | `rgba(255, 255, 255, 0.8)` | white 80 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Open Sans (300/400/500/600/700) loaded via Google Fonts in index.html. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero with rotating headline and dashboard carousel | see fidelity note below |
| 3 | `GradientStrip` | Gradient strip | see fidelity note below |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `Counters` | Counter band | see fidelity note below |
| 6 | `Portfolio` | Portfolio carousel | see fidelity note below |
| 7 | `Pricing` | Pricing | see fidelity note below |
| 8 | `QuoteForm` | Reasons and quote form | see fidelity note below |
| 9 | `Testimonials` | Testimonials | see fidelity note below |
| 10 | `Newsletter` | Newsletter | see fidelity note below |
| 11 | `Blog` | Blog | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed navbar with the brand, page links, and a CTA, dark at the top of the page.

### `Hero`
The system SHALL render a split hero: left copy with a rotating-word headline and two CTAs, right a carousel of three dashboard images.

### `GradientStrip`
The system SHALL render a full-width blue→mint gradient strip with a white headline.

### `Services`
The system SHALL render a centered heading plus six service cards in two rows of three.

### `Counters`
The system SHALL render a background-image band with four white counters.

### `Portfolio`
The system SHALL render a portfolio heading and a carousel of six works.

### `Pricing`
The system SHALL render four pricing cards on a light-gray background.

### `QuoteForm`
The system SHALL render a split section: blue reasons column + white quote form.

### `Testimonials`
The system SHALL render a testimonial carousel on a light-gray background.

### `Newsletter`
The system SHALL render a gradient newsletter band with a subscribe form.

### `Blog`
The system SHALL render a blog heading and three post cards.

### `Footer`
The system SHALL render a dark four-column footer with the Component Dock credit.

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
- **Provenance ban.** No file under `apps/prime/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/prime/public/CNAME` = `prime.free.componentdock.com`
  and the package `homepage` = `https://prime.free.componentdock.com`.
