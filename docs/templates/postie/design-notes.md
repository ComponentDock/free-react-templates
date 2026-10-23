# Postie — Design Notes

Reference: **Standout** — `https://colorlib.com/wp/template/standout/`  
Live preview: `https://preview.colorlib.com/theme/standout/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/standout-free-template.jpg  
Shipped: https://postie.free.componentdock.com

Postie is a single-page app landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **IBM Plex Sans**, **IBM Plex Sans:wght@400;500;600;700**, **IBM Plex Serif**

## Design tokens (`apps/postie/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e9f9f0` | primary 50 |
| `--color-primary-100` | `#c9efda` | primary 100 |
| `--color-primary-200` | `#93dfb5` | primary 200 |
| `--color-primary-300` | `#4fcb89` | primary 300 |
| `--color-primary-400` | `#00a650` | primary 400 |
| `--color-primary-500` | `#00934a` | primary 500 |
| `--color-primary-600` | `#006933` | primary 600 |
| `--color-ink` | `#121619` | Near-black ink (ColorLib #121619). |
| `--color-smoke` | `#6b747b` | Muted copy. |
| `--font-sans` | `'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'IBM Plex Serif', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `HowItWorks` | How-it-works section | see fidelity note below |
| 5 | `Features` | Features section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Pricing` | Pricing section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Postie", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, and a "Get The App" button.

### `About`
The system SHALL render an about section with a heading, a blurb, and four feature points: "Smart.", "User-Friendly.", "Powerful.", and "Secure.".

### `HowItWorks`
The system SHALL render a how-it-works section with a heading and four steps: "Sign Up", "Create", "Compose", and "Send".

### `Features`
The system SHALL render a features section with a heading and five feature cards with titles and blurbs.

### `Testimonials`
The system SHALL render a testimonials section with a heading and three quotes with attributions.

### `Pricing`
The system SHALL render a pricing section with three plans, each with a price and a "Get Started" button.

### `Footer`
The system SHALL render a footer with link columns, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/postie/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/postie/public/CNAME` = `postie.free.componentdock.com`
  and the package `homepage` = `https://postie.free.componentdock.com`.
