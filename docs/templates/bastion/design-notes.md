# Bastion — Design Notes

Reference: **Tough** — `https://colorlib.com/wp/template/tough/`  
Live preview: `https://preview.colorlib.com/theme/tough/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/tough-free-template.jpg  
Shipped: https://bastion.free.componentdock.com

Bastion is a single-page architecture landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Tough" website template (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/bastion/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#53d397` | brand |
| `--color-brand-dark` | `#3fbf82` | brand dark |
| `--color-accent` | `#79efb4` | Accent — lighter mint used on hover states. |
| `--color-ink` | `#1b212c` | Ink — headings (#1b212c from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d / #4a5562 from the original). |
| `--color-paper` | `#f8f9fa` | Paper — light chip backgrounds (#f8f9fa from the original). |
| `--color-charcoal` | `#1b212c` | Charcoal — dark hero/footer background (#1b212c from the original). |
| `--color-primary-50` | `#eefaf3` | primary 50 |
| `--color-primary-100` | `#d5f3e2` | primary 100 |
| `--color-primary-200` | `#aee8c8` | primary 200 |
| `--color-primary-300` | `#7fdaa9` | primary 300 |
| `--color-primary-400` | `#53d397` | primary 400 |
| `--color-primary-500` | `#3fbf82` | primary 500 |
| `--color-primary-600` | `#2ea86e` | primary 600 |
| `--color-primary-700` | `#268a5a` | primary 700 |
| `--color-primary-800` | `#1f6e49` | primary 800 |
| `--color-primary-900` | `#185438` | primary 900 |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Original font: Montserrat (Google Fonts link in index.html). |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `CounterBand` | Counter band | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `QuoteBand` | Quote call to action | see fidelity note below |
| 6 | `Portfolio` | Portfolio section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Pricing` | Pricing section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Bastion", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a hero carousel with four slides and navigation controls.

### `CounterBand`
The system SHALL render a stats band with four counters and an "Explore Further" call to action.

### `Services`
The system SHALL render a services section with a heading and four service cards.

### `QuoteBand`
The system SHALL render a quote band with a heading and a "Request a quote" button.

### `Portfolio`
The system SHALL render a portfolio section with a heading and eight work items.

### `Testimonials`
The system SHALL render a testimonials section with a heading and client quotes.

### `Pricing`
The system SHALL render a pricing section with three plans.

### `Footer`
The system SHALL render a footer with contact info, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/bastion/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bastion/public/CNAME` = `bastion.free.componentdock.com`
  and the package `homepage` = `https://bastion.free.componentdock.com`.
