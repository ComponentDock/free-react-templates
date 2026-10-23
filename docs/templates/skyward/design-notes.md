# Skyward — Design Notes

Reference: **Ignite** — `https://colorlib.com/wp/template/ignite/`  
Live preview: `https://preview.colorlib.com/theme/ignite/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ignite-free-template.jpg  
Shipped: https://skyward.free.componentdock.com

Skyward is a single-page web hosting template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Ignite" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:wght@300;400;500;600;700**

## Design tokens (`apps/skyward/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eaf4ff` | primary 50 |
| `--color-primary-100` | `#d6e9ff` | primary 100 |
| `--color-primary-200` | `#add2ff` | primary 200 |
| `--color-primary-300` | `#7db9ff` | primary 300 |
| `--color-primary-400` | `#4a9dff` | primary 400 |
| `--color-primary-500` | `#2e8cff` | primary 500 |
| `--color-primary-600` | `#207dff` | primary 600 |
| `--color-primary-700` | `#1a68d9` | primary 700 |
| `--color-primary-800` | `#1754ad` | primary 800 |
| `--color-primary-900` | `#134082` | primary 900 |
| `--color-primary-950` | `#0c2a55` | primary 950 |
| `--color-accent-100` | `#eefbe3` | Accent green scale (CTA pills, secondary buttons, active plan card) |
| `--color-accent-200` | `#dcf7c8` | accent 200 |
| `--color-accent-300` | `#c4efa4` | accent 300 |
| `--color-accent-400` | `#b1e68a` | accent 400 |
| `--color-accent-500` | `#a1dd70` | accent 500 |
| `--color-accent-600` | `#93d85b` | accent 600 |
| `--color-accent-700` | `#7abf42` | accent 700 |
| `--color-mist-50` | `#f6fafd` | Light section background from the reference |
| `--color-mist-100` | `#eef5fb` | mist 100 |
| `--color-star-400` | `#ffc107` | Testimonial star yellow |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | Work Sans everywhere — Google Fonts via index.html |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `DomainBand` | Domain search band | see fidelity note below |
| 4 | `Partners` | Partner logos | see fidelity note below |
| 5 | `Features` | Features ("Why You Should Choose Us") | see fidelity note below |
| 6 | `Stats` | Stats counter | see fidelity note below |
| 7 | `Services` | Main services | see fidelity note below |
| 8 | `Pricing` | Pricing | see fidelity note below |
| 9 | `Testimonials` | Testimonials | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a dark navbar with the site wordmark, section links, and a green "Get Started" call-to-action.

### `Hero`
The system SHALL render a full-height hero with a blue overlay over a background image, centered white headline, subtext, and a green CTA button.

### `DomainBand`
The system SHALL render a blue band with a domain search form (input + extension select + search button) and a row of TLD prices.

### `Partners`
The system SHALL render a strip of grayscale partner logos.

### `Features`
The system SHALL render a light-background section with a heading and three feature columns (icon + title + blurb).

### `Stats`
The system SHALL render a counter section with a heading and four animated stat counters (number + label).

### `Services`
The system SHALL render a white section with a heading and four service columns (icon + title + blurb).

### `Pricing`
The system SHALL render a blue section with a heading and four pricing cards (Free, Startup, Premium, Pro), the Premium card highlighted in green.

### `Testimonials`
The system SHALL render a testimonial section with a heading and a carousel of customer quotes (quote, star rating, name, role).

### `Blog`
The system SHALL render a light-background blog section with a heading and three blog cards (image, meta, title, excerpt, read-more link).

### `Footer`
The system SHALL render a blue footer with brand/about, Useful Links, Navigational, and Office columns plus a copyright bar.

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
- **Provenance ban.** No file under `apps/skyward/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/skyward/public/CNAME` = `skyward.free.componentdock.com`
  and the package `homepage` = `https://skyward.free.componentdock.com`.
