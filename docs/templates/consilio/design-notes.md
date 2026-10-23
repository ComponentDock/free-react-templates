# Consilio — Design Notes

Reference: **Consultingbiz** — `https://colorlib.com/wp/template/consultingbiz/`  
Live preview: `https://preview.colorlib.com/theme/consultingbiz/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/consultingbiz-free-template.jpeg  
Shipped: https://consilio.free.componentdock.com

Consilio is a single-page consulting business template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**, **Roboto**

## Design tokens (`apps/consilio/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#14435c` | brand |
| `--color-brand-deep` | `#092c3f` | brand deep |
| `--color-navy` | `#0d2d3e` | navy |
| `--color-navy-dark` | `#06151d` | navy dark |
| `--color-ink` | `#0b1416` | ink |
| `--color-accent` | `#ff2143` | accent |
| `--color-eyebrow` | `#eb566c` | eyebrow |
| `--color-footer` | `#11141b` | footer |
| `--color-footer-border` | `#233148` | footer border |
| `--color-body` | `#10285d` | body |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Roboto for headings, Poppins for body/buttons (Google Fonts <link>). |
| `--font-display` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `TopServices` | Top services | see fidelity note below |
| 4 | `CompanySupport` | Company support split | see fidelity note below |
| 5 | `VideoIntro` | Video intro | see fidelity note below |
| 6 | `FeaturedCases` | Featured case studies | see fidelity note below |
| 7 | `CaseStudies` | Case studies | see fidelity note below |
| 8 | `CtaBanner` | CTA banner | see fidelity note below |
| 9 | `Testimonials` | Testimonials | see fidelity note below |
| 10 | `Counters` | Counters | see fidelity note below |
| 11 | `Team` | Team | see fidelity note below |
| 12 | `Pricing` | Pricing | see fidelity note below |
| 13 | `Faq` | FAQ | see fidelity note below |
| 14 | `WantToWork` | Want-to-work CTA | see fidelity note below |
| 15 | `Blog` | Blog | see fidelity note below |
| 16 | `Brands` | Brands | see fidelity note below |
| 17 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a top info bar and a main navigation bar with a logo, menu links with dropdowns, and a consultation CTA button.

### `HeroSlider`
The system SHALL render a full-width hero slider with two slides of overlaid headline content and a CTA.

### `TopServices`
The system SHALL render a section with three icon service cards.

### `CompanySupport`
The system SHALL render a two-column split section with an image on a red panel and a navy panel with services copy.

### `VideoIntro`
The system SHALL render a video intro section with a thumbnail, play button, heading, and feature list.

### `FeaturedCases`
The system SHALL render a strip of four equal case-study cards.

### `CaseStudies`
The system SHALL render three detailed case study cards with category tag, client, and a metric.

### `CtaBanner`
The system SHALL render a navy gradient banner with a heading and two buttons.

### `Testimonials`
The system SHALL render a dark testimonial carousel with quote, author, and navigation controls.

### `Counters`
The system SHALL render four stat counters with one highlighted box.

### `Team`
The system SHALL render a team grid with photo, name, and role.

### `Pricing`
The system SHALL render three pricing plans with a monthly/yearly toggle and a featured plan.

### `Faq`
The system SHALL render an accordion of five questions with one open item.

### `WantToWork`
The system SHALL render a call-to-action band with a heading and button.

### `Blog`
The system SHALL render a blog section with three post cards.

### `Brands`
The system SHALL render a horizontal strip of brand logos.

### `Footer`
The system SHALL render a dark multi-column footer with newsletter form, contact info, link columns, and a copyright bar.

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
- **Provenance ban.** No file under `apps/consilio/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/consilio/public/CNAME` = `consilio.free.componentdock.com`
  and the package `homepage` = `https://consilio.free.componentdock.com`.
