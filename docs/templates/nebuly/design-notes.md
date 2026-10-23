# Nebuly — Design Notes

Reference: **Cloudtemplate** — `https://colorlib.com/wp/template/cloudtemplate/`  
Live preview: `https://preview.colorlib.com/theme/cloudtemplate/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cloudtemplate-free-template.jpg  
Shipped: https://nebuly.free.componentdock.com

Nebuly is a single-page cloud-hosting / domain-services business template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:wght@400;500;600;700**

## Design tokens (`apps/nebuly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#3f52e3` | brand |
| `--color-branddark` | `#293ee0` | branddark |
| `--color-accent` | `#21bf73` | accent |
| `--color-accentdark` | `#1da966` | accentdark |
| `--color-pink` | `#ff8ba7` | pink |
| `--color-footer` | `#421b9b` | footer |
| `--color-light` | `#f8f9fa` | light |
| `--color-navy` | `#203d67` | navy |
| `--font-sans` | `'Work Sans', Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Partner` | Partner strip | see fidelity note below |
| 4 | `Domain` | Domain search | see fidelity note below |
| 5 | `Services` | Cloud services | see fidelity note below |
| 6 | `Features` | Feature row | see fidelity note below |
| 7 | `Counters` | Counter band | see fidelity note below |
| 8 | `Cta` | CTA strip | see fidelity note below |
| 9 | `Faq` | FAQ | see fidelity note below |
| 10 | `Pricing` | Pricing | see fidelity note below |
| 11 | `Testimonials` | Testimonials | see fidelity note below |
| 12 | `Blog` | Blog | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a transparent navbar over the hero with a wordmark, nav links, and a green CTA button.

### `Hero`
The system SHALL render a full-width royal-blue hero with illustration, headline, subtext, and a green CTA.

### `Partner`
The system SHALL render a row of grayscale partner logos.

### `Domain`
The system SHALL render a domain search band with TLD pills and a price table.

### `Services`
The system SHALL render six icon service cards on a light-gray background.

### `Features`
The system SHALL render five bordered feature cards.

### `Counters`
The system SHALL render a royal-blue band with four stat counters.

### `Cta`
The system SHALL render a light call-to-action strip with a heading and button.

### `Faq`
The system SHALL render an accordion of four questions beside an image panel, with one open item at a time.

### `Pricing`
The system SHALL render four pricing plans with feature lists and buttons.

### `Testimonials`
The system SHALL render a testimonial carousel with quote, author, and controls.

### `Blog`
The system SHALL render three blog cards with meta rows.

### `Footer`
The system SHALL render a purple-dark multi-column footer with brand blurb, link columns, contact info, and a copyright bar.

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
- **Provenance ban.** No file under `apps/nebuly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/nebuly/public/CNAME` = `nebuly.free.componentdock.com`
  and the package `homepage` = `https://nebuly.free.componentdock.com`.
