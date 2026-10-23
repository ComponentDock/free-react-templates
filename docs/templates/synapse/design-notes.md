# Synapse — Design Notes

Reference: **Nexus** — `https://colorlib.com/wp/template/nexus/`  
Live preview: `https://preview.colorlib.com/theme/nexus/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/nexus-free-template.jpg  
Shipped: https://synapse.free.componentdock.com

Synapse is a single-page SaaS landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Nexus" website template design (see TEMPLATES.md), built under a **different name** (Synapse) with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Heebo**, **Heebo:wght@400;500;600;700;800**, **Roboto**

## Design tokens (`apps/synapse/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef8fd` | primary 50 |
| `--color-primary-100` | `#d7f0fb` | primary 100 |
| `--color-primary-200` | `#b0e2f8` | primary 200 |
| `--color-primary-300` | `#62ddff` | primary 300 |
| `--color-primary-400` | `#4dabff` | primary 400 |
| `--color-primary-500` | `#3bacf0` | primary 500 |
| `--color-primary-600` | `#2e92d4` | primary 600 |
| `--color-primary-700` | `#2778b0` | primary 700 |
| `--color-primary-800` | `#205f8c` | primary 800 |
| `--color-primary-900` | `#1a4a6b` | primary 900 |
| `--color-accent-500` | `#f8b600` | accent 500 |
| `--color-ink` | `#222222` | ink |
| `--color-paper` | `#f9f9ff` | paper |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Heebo', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `HowItWorks` | How-it-works section | see fidelity note below |
| 4 | `CtaSplit` | CTA splits | see fidelity note below |
| 5 | `Screenshots` | Screenshots section | see fidelity note below |
| 6 | `Pricing` | Pricing section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Impress` | Impress section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Synapse", anchor links to the page's sections, a "Free Trial" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, and two buttons.

### `HowItWorks`
The system SHALL render a how-it-works section with a heading and three feature tiles.

### `CtaSplit`
The system SHALL render at least two CTA splits with the heading "We've made a life that will change you", a blurb, and a "Get Started Now" button.

### `Screenshots`
The system SHALL render a screenshots section with a heading and a row of screenshot placeholder images.

### `Pricing`
The system SHALL render a pricing section with a heading and at least three plans, each with a monthly price and a "Get Started" button.

### `Testimonials`
The system SHALL render a testimonials section with a heading and at least one customer quote with an author name.

### `Impress`
The system SHALL render an impress section with a heading and a "Request Free Demo" button.

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
- **Provenance ban.** No file under `apps/synapse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/synapse/public/CNAME` = `synapse.free.componentdock.com`
  and the package `homepage` = `https://synapse.free.componentdock.com`.
