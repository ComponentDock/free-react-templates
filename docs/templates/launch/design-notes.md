# Launch — Design Notes

Reference: **Launch** — `https://colorlib.com/wp/template/launch/`  
Live preview: `https://preview.colorlib.com/theme/launch/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/launch-free-template.jpeg  
Shipped: https://launch.free.componentdock.com

Launch is a single-page product landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Launch" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito**, **Nunito:wght@400;600;700;800**

## Design tokens (`apps/launch/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0f4ff` | primary 50 |
| `--color-primary-100` | `#dbe6ff` | primary 100 |
| `--color-primary-200` | `#b8ceff` | primary 200 |
| `--color-primary-300` | `#85aaff` | primary 300 |
| `--color-primary-400` | `#5287ff` | primary 400 |
| `--color-primary-500` | `#407bff` | primary 500 |
| `--color-primary-600` | `#1a60ff` | primary 600 |
| `--color-primary-700` | `#004af0` | primary 700 |
| `--color-primary-800` | `#003dc7` | primary 800 |
| `--color-primary-900` | `#0032a3` | primary 900 |
| `--color-ink` | `#212529` | ink |
| `--color-paper` | `#f8f9fa` | paper |
| `--color-navy` | `#16213e` | navy |
| `--font-sans` | `'Nunito', ui-sans-serif, system-ui, sans-serif` | Nunito (Google Fonts <link> in index.html) — the original's font. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Pricing` | Pricing section | see fidelity note below |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `Testimonials` | Testimonials section | see fidelity note below |
| 6 | `About` | About and news section | see fidelity note below |
| 7 | `Contact` | Contact section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |
| 9 | `AuthModal` | Auth modal | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Launch.", anchor links to the page's sections, a "Sign in" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, and two call-to-action buttons on a blue gradient background.

### `Pricing`
The system SHALL render a pricing section with a heading, a billing toggle, and three plans.

### `Features`
The system SHALL render a features section with a heading and four feature cards.

### `Testimonials`
The system SHALL render a testimonials section with a heading and quote cards.

### `About`
The system SHALL render an about section with an "About Us" heading and news cards.

### `Contact`
The system SHALL render a contact section with a message form and contact info cards.

### `Footer`
The system SHALL render a footer with link columns, social links, and a copyright line.

### `AuthModal`
The system SHALL render a sign-in/sign-up modal accessible from the navbar.

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
- **Provenance ban.** No file under `apps/launch/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/launch/public/CNAME` = `launch.free.componentdock.com`
  and the package `homepage` = `https://launch.free.componentdock.com`.
