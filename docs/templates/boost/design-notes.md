# Boost — Design Notes

Reference: **Webapp** — `https://colorlib.com/wp/template/webapp/`  
Live preview: `https://preview.colorlib.com/theme/webapp/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/webapp-free-template.jpg  
Shipped: https://boost.free.componentdock.com

Boost is a single-page software/web-app landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;500;600;700**

## Design tokens (`apps/boost/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fd7e14` | brand |
| `--color-paper` | `#f8f9fa` | Light section background (bg-light #f8f9fa) and borders (#dee2e6). |
| `--color-line` | `#dee2e6` | line |
| `--color-ink` | `#212529` | Near-black headings/text (#212529). |
| `--color-mist` | `#6c757d` | Secondary body text (#6c757d). |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `MoreFeatures` | More features section | see fidelity note below |
| 5 | `Testimonials` | Testimonials section | see fidelity note below |
| 6 | `Pricing` | Pricing section | see fidelity note below |
| 7 | `Blog` | Blog section | see fidelity note below |
| 8 | `Contact` | Contact section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Boost.", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, a "Try it for free" button, and a dashboard illustration image.

### `Features`
The system SHALL render a features section with a heading and at least six feature tiles.

### `MoreFeatures`
The system SHALL render a "More Features" section with two image cards.

### `Testimonials`
The system SHALL render a testimonials section with a heading and three testimonial cards.

### `Pricing`
The system SHALL render a pricing section with a heading and three tiers.

### `Blog`
The system SHALL render a blog section with a heading and three post cards.

### `Contact`
The system SHALL render a contact section with a CTA band, contact details, and a contact form.

### `Footer`
The system SHALL render a footer with link columns, a newsletter form, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/boost/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/boost/public/CNAME` = `boost.free.componentdock.com`
  and the package `homepage` = `https://boost.free.componentdock.com`.
