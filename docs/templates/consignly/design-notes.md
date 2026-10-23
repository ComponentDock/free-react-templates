# Consignly — Design Notes

Reference: **Foundation2** — `https://colorlib.com/wp/template/foundation2/`  
Live preview: `https://preview.colorlib.com/theme/foundation2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/foundation2-free-template.jpg  
Shipped: https://consignly.free.componentdock.com

Consignly is a single-page logistics & freight company home-page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;600;700;800**, **Open Sans**

## Design tokens (`apps/consignly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#081158` | brand |
| `--color-brand-dark` | `#060e46` | brand dark |
| `--color-navy` | `#070d59` | navy |
| `--color-accent` | `#00eaff` | accent |
| `--color-accent-soft` | `#29eafd` | accent soft |
| `--color-ink` | `#212529` | ink |
| `--color-muted` | `#6c757d` | muted |
| `--color-label` | `#adb5bd` | label |
| `--color-surface` | `#f8f9fa` | surface |
| `--color-footer` | `#efefef` | footer |
| `--color-foot-text` | `#888` | foot text |
| `--color-foot-link` | `#777` | foot link |
| `--color-foot-hover` | `#0c1a87` | foot hover |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Services` | Services | see fidelity note below |
| 4 | `About` | About | see fidelity note below |
| 5 | `CtaBand` | CTA band | see fidelity note below |
| 6 | `Testimonials` | Testimonials | see fidelity note below |
| 7 | `WhyChooseUs` | Why Choose Us | see fidelity note below |
| 8 | `Blog` | Blog | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar over the hero with a white logo, a desktop link menu with a dropdown, and a mobile off-canvas menu.

### `Hero`
The system SHALL render a full-height navy hero with a dotted world map, headline, search form, and a four-counter stats row.

### `Services`
The system SHALL render three white service cards overlapping the hero bottom edge with icon, title, blurb, and a Read more link.

### `About`
The system SHALL render a split About section with a video-wrap image on one side and a Mission heading, copy, and two feature rows on the other.

### `CtaBand`
The system SHALL render a full-width photo band with a navy overlay, a headline, copy, and a Get started button.

### `Testimonials`
The system SHALL render a "Happy Customer" testimonial slider with three slides, dot pagination, and prev/next controls.

### `WhyChooseUs`
The system SHALL render a "Why Choose Us" block with a three-item accordion on the same light band.

### `Blog`
The system SHALL render a "Latest News" section with four blog cards.

### `Footer`
The system SHALL render a light-gray footer with about text, social circles, link columns, contact info, and the Component Dock attribution.

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
- **Provenance ban.** No file under `apps/consignly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/consignly/public/CNAME` = `consignly.free.componentdock.com`
  and the package `homepage` = `https://consignly.free.componentdock.com`.
