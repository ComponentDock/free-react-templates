# Motif — Design Notes

Reference: **Mosh** — `https://colorlib.com/wp/template/mosh/`  
Live preview: `https://preview.colorlib.com/theme/mosh/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/mosh-free-template.jpg  
Shipped: https://motif.free.componentdock.com

Motif is a single-page creative-business landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Mosh" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;500;700;900**

## Design tokens (`apps/motif/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef2fd` | primary 50 |
| `--color-primary-100` | `#dde6fc` | primary 100 |
| `--color-primary-200` | `#b9caf8` | primary 200 |
| `--color-primary-300` | `#8ba6f1` | primary 300 |
| `--color-primary-400` | `#6689ed` | primary 400 |
| `--color-primary-500` | `#4a7aec` | primary 500 |
| `--color-primary-600` | `#3b63d6` | primary 600 |
| `--color-primary-700` | `#2f4fb3` | primary 700 |
| `--color-primary-800` | `#273f8f` | primary 800 |
| `--color-primary-900` | `#1f3372` | primary 900 |
| `--color-ink` | `#211b31` | ink |
| `--color-muted` | `#404551` | muted |
| `--color-paper` | `#f1f2f3` | paper |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Roboto (Google Fonts <link> in index.html) — the original's font. |
| `--font-display` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Highlights` | Highlights section | see fidelity note below |
| 4 | `Clients` | Clients section | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `FeatureCards` | Feature cards section | see fidelity note below |
| 7 | `Portfolio` | Portfolio section | see fidelity note below |
| 8 | `Workflow` | Workflow section | see fidelity note below |
| 9 | `CallToAction` | Call-to-action section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Motif", anchor links to the page's sections, a "Login" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline and a "Get your freebie template now!" call-to-action.

### `Highlights`
The system SHALL render a highlights section with at least four numbered items.

### `Clients`
The system SHALL render a clients section with a heading and a row of client logos.

### `Services`
The system SHALL render a services section with a heading and at least three service items.

### `FeatureCards`
The system SHALL render a feature-cards section with at least three cards titled with value propositions.

### `Portfolio`
The system SHALL render a portfolio section with a heading and a grid of project cards.

### `Workflow`
The system SHALL render a workflow section with a heading and four steps.

### `CallToAction`
The system SHALL render a call-to-action band with a heading and a "Contact Us" button.

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
- **Provenance ban.** No file under `apps/motif/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/motif/public/CNAME` = `motif.free.componentdock.com`
  and the package `homepage` = `https://motif.free.componentdock.com`.
