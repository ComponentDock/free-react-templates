# Movere — Design Notes

Reference: **Swiftmove** — `https://colorlib.com/wp/template/swiftmove/`  
Live preview: `https://preview.colorlib.com/theme/swiftmove/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/swiftmove-template-1771943964825.jpg  
Shipped: https://movere.free.componentdock.com

Movere is a single-page moving-company landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "SwiftMove" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Outfit**, **Outfit:wght@300;400;500;600;700;800**

## Design tokens (`apps/movere/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eff6ff` | primary 50 |
| `--color-primary-100` | `#dbeafe` | primary 100 |
| `--color-primary-200` | `#bfdbfe` | primary 200 |
| `--color-primary-300` | `#93c5fd` | primary 300 |
| `--color-primary-400` | `#60a5fa` | primary 400 |
| `--color-primary-500` | `#3b82f6` | primary 500 |
| `--color-primary-600` | `#2563eb` | primary 600 |
| `--color-primary-700` | `#1d4ed8` | primary 700 |
| `--color-primary-800` | `#1e40af` | primary 800 |
| `--color-primary-900` | `#1e3a8a` | primary 900 |
| `--color-primary-950` | `#172554` | primary 950 |
| `--color-accent-50` | `#fff7ed` | accent 50 |
| `--color-accent-100` | `#ffedd5` | accent 100 |
| `--color-accent-200` | `#fed7aa` | accent 200 |
| `--color-accent-300` | `#fdba74` | accent 300 |
| `--color-accent-400` | `#fb923c` | accent 400 |
| `--color-accent-500` | `#f97316` | accent 500 |
| `--color-accent-600` | `#ea580c` | accent 600 |
| `--color-accent-700` | `#c2410c` | accent 700 |
| `--color-accent-800` | `#9a3412` | accent 800 |
| `--color-accent-900` | `#7c2d12` | accent 900 |
| `--font-sans` | `'Outfit', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `StatsBand` | About stats band | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `HowItWorks` | How It Works section | see fidelity note below |
| 6 | `ServiceAreas` | Service Areas section | see fidelity note below |
| 7 | `Pricing` | Pricing section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `QuoteForm` | Quote form section | see fidelity note below |
| 10 | `Faq` | FAQ section | see fidelity note below |
| 11 | `CtaBand` | — | no dedicated spec block |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Movere", anchor links to the page's sections, a "Free Quote" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a badge, headline, call-to-action buttons, a stats row, and a moving-crew photo.

### `StatsBand`
The system SHALL render an about band with four animated counters.

### `Services`
The system SHALL render a services section with six cards.

### `HowItWorks`
The system SHALL render a four-step "How It Works" section.

### `ServiceAreas`
The system SHALL render a service areas section with local and long-distance destination lists.

### `Pricing`
The system SHALL render a pricing section with three tiers.

### `Testimonials`
The system SHALL render a testimonials carousel with at least three quotes.

### `QuoteForm`
The system SHALL render a quote form with contact fields, move details, and service checkboxes.

### `Faq`
The system SHALL render an FAQ section with accordion items that expand on activation.

### `CtaBand`
*anchors only* — Ready to Make Your Move? · Get a free, no-obligation quote today — or call us and we will plan your move in minutes. · Get Free Quote · Call Now

### `Footer`
The system SHALL render a footer with link columns, contact details, and a copyright line.

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
- **Provenance ban.** No file under `apps/movere/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/movere/public/CNAME` = `movere.free.componentdock.com`
  and the package `homepage` = `https://movere.free.componentdock.com`.
