# Thrive — Design Notes

Reference: **Startright** — `https://colorlib.com/wp/template/startright/`  
Live preview: `https://preview.colorlib.com/theme/startright/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/startright-free-template.jpg  
Shipped: https://thrive.free.componentdock.com

Thrive is a single-page startup / SaaS landing-page website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;700**

## Design tokens (`apps/thrive/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-sans` | `'Poppins', sans-serif` | font sans |
| `--color-brand-orange` | `#f2ad5f` | brand orange |
| `--color-brand-teal` | `#10495c` | brand teal |
| `--color-brand-teal-dark` | `#0d3a4a` | brand teal dark |
| `--color-surface-light` | `#f8f9fa` | surface light |
| `--color-icon-circle` | `#efefef` | icon circle |
| `--color-feature-text` | `#252837` | feature text |
| `--color-text-black-50` | `rgba(0, 0, 0, 0.5)` | text black 50 |
| `--color-text-white-50` | `rgba(255, 255, 255, 0.5)` | text white 50 |
| `--color-nav-link` | `rgba(255, 255, 255, 0.7)` | nav link |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `LogosStrip` | Press logos strip | see fidelity note below |
| 4 | `SplitSection` | "A better way" split section | see fidelity note below |
| 5 | `ProductiveSection` | "Productive with" light section | see fidelity note below |
| 6 | `StatsBand` | Stats band | see fidelity note below |
| 7 | `Features` | Features | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Thrive

### `Hero`
- **GIVEN** the Thrive page is loaded - **WHEN** the user views the hero - **THEN** a 100vh solid dark-teal `#10495c` hero SHALL render the white bold h1 **"A big business starts small"**, an orange square **Get started** button, and on desktop an orange-framed illustration panel overlapping upward on the right (source `.img-wrap` `margin-top: -400px`)

### `LogosStrip`
The system SHALL render a centered "As seen on" heading with a row of five greyed press wordmarks between the hero and the split section.

### `SplitSection`
The system SHALL render a split section with a white background and a dark-teal panel covering the right 70% (100% on mobile).

### `ProductiveSection`
- **GIVEN** the user scrolls past the split section - **WHEN** the light `#f8f9fa` section is displayed - **THEN** a white rounded card SHALL show the teal h2 **"Productive with Thrive"**, two muted paragraphs, and an inline testimonial (50px round avatar + italic quote + author **John Doe**, **XYZ Inc.**) on the left, with an orange-framed illustration on the right

### `StatsBand`
- **GIVEN** the user scrolls past the light section - **WHEN** the dark-teal Stats band is displayed - **THEN** the white heading **"Stats"** and 3 counter blocks SHALL render — big white numbers (244982 · 2488938 · 1335) over muted labels (Reviews · Downloads · Employees) — counting up on view (source `.countup` + counter.js)

### `Features`
- **GIVEN** the user scrolls past the Stats band - **WHEN** the features section is displayed - **THEN** the centered teal heading **"Features"** and a responsive grid of 6 feature cards SHALL render — each with a 80px grey circle icon, a 16px bold black title and muted body text

### `Footer`
- **GIVEN** the user scrolls to the bottom of the page - **WHEN** the footer is displayed - **THEN** a light `#f8f9fa` footer SHALL show four widgets — Help (5 links), About (5 links), Support (3 links) and Subscribe (email input + teal Subscribe button) — with a centered bottom bar containing the copyright line and a link to **https://www.componentdock.com/** ("Component Dock") — mandatory footer convention; no ColorLib credit

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
- **Provenance ban.** No file under `apps/thrive/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/thrive/public/CNAME` = `thrive.free.componentdock.com`
  and the package `homepage` = `https://thrive.free.componentdock.com`.
