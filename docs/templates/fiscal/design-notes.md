# Fiscal — Design Notes

Reference: **Financier** — `https://colorlib.com/wp/template/financier/`  
Live preview: `https://preview.colorlib.com/theme/financier/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/financier-free-templatel.jpg  
Shipped: https://fiscal.free.componentdock.com

Fiscal is a single-page finance & business consulting website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;500;700**, **Work Sans**

## Design tokens (`apps/fiscal/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0099e5` | brand |
| `--color-brand-hover` | `#0083c6` | brand hover |
| `--color-gradient-from` | `#4facfe` | gradient from |
| `--color-gradient-to` | `#00f2fe` | gradient to |
| `--color-ink` | `#212529` | ink |
| `--color-muted` | `#6c757d` | muted |
| `--color-surface` | `#f8f9fa` | surface |
| `--color-footer` | `#efefef` | footer |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Features` | Features | see fidelity note below |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `CtaBand` | CTA band | see fidelity note below |
| 6 | `Portfolio` | Portfolio | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `News` | News | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar floating over the hero with the brand left, centered links, a phone number on the right, a Solutions dropdown, and a mobile slide-over menu.

### `Hero`
The system SHALL render a full-viewport gradient hero with a headline, white subtext, two CTAs, and a right-side image.

### `Features`
The system SHALL render a three-card icon strip directly after the hero with icon, heading, and copy per card.

### `Services`
The system SHALL render an "Our Services" section with six white service cards, each with a gradient icon, heading, copy, and Read more link.

### `CtaBand`
The system SHALL render a photo CTA band with a dark overlay, white heading and copy, and a Contact us button.

### `Portfolio`
The system SHALL render a light-background "Our Portfolio" section with a carousel of image slides and Prev/Next controls.

### `Testimonials`
The system SHALL render a light-background "Testimonials" section with a carousel of split image/quote slides.

### `News`
The system SHALL render a "Latest News" section with a static grid of three post cards (image, date, title link, excerpt, Read more).

### `Footer`
The system SHALL render a light-gray footer with Contact, Sources, and Links widgets, social circles, and a copyright bar with the Component Dock attribution.

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
- **Provenance ban.** No file under `apps/fiscal/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fiscal/public/CNAME` = `fiscal.free.componentdock.com`
  and the package `homepage` = `https://fiscal.free.componentdock.com`.
