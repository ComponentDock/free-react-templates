# Coverly — Design Notes

Reference: **Shieldguard** — `https://colorlib.com/wp/template/shieldguard/`  
Live preview: `https://preview.colorlib.com/theme/shieldguard/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/shieldguard-template-1771943902281.jpg  
Shipped: https://coverly.free.componentdock.com

Coverly is a single-page insurance company landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Manrope**, **Manrope:wght@400;500;600;700;800**

## Design tokens (`apps/coverly/src/index.css` `@theme`)

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
| `--color-accent-50` | `#f0fdf4` | accent 50 |
| `--color-accent-100` | `#dcfce7` | accent 100 |
| `--color-accent-200` | `#bbf7d0` | accent 200 |
| `--color-accent-300` | `#86efac` | accent 300 |
| `--color-accent-400` | `#4ade80` | accent 400 |
| `--color-accent-500` | `#22c55e` | accent 500 |
| `--color-accent-600` | `#16a34a` | accent 600 |
| `--color-accent-700` | `#15803d` | accent 700 |
| `--color-accent-800` | `#166534` | accent 800 |
| `--color-accent-900` | `#14532d` | accent 900 |
| `--color-accent-950` | `#052e16` | accent 950 |
| `--font-sans` | `'Manrope', ui-sans-serif, system-ui, sans-serif` | Body font — the original's Google Fonts pairing (Manrope sans) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `StatsBand` | Stats band | see fidelity note below |
| 4 | `Coverage` | Coverage section | see fidelity note below |
| 5 | `WhyUs` | Why us section | see fidelity note below |
| 6 | `Process` | Process section | see fidelity note below |
| 7 | `Calculator` | Savings calculator | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Faq` | FAQ section | see fidelity note below |
| 10 | `Contact` | Contact section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name, anchor links to the page's sections, a "Get a Quote" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a hero with a trust badge, a headline, a blurb, two call-to-action buttons, a stats row, and trust badges.

### `StatsBand`
The system SHALL render a stats band with four counters.

### `Coverage`
The system SHALL render a coverage section with six insurance cards.

### `WhyUs`
The system SHALL render a why-us section with four value cards.

### `Process`
The system SHALL render a process section with three steps.

### `Calculator`
The system SHALL render a savings calculator that reveals an estimate when activated.

### `Testimonials`
The system SHALL render a testimonials section with at least three quotes.

### `Faq`
The system SHALL render an FAQ section with accordion items that expand on activation.

### `Contact`
The system SHALL render a contact section with a quote form and contact information.

### `Footer`
The system SHALL render a dark footer with link columns, contact details, and a copyright line.

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
- **Provenance ban.** No file under `apps/coverly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/coverly/public/CNAME` = `coverly.free.componentdock.com`
  and the package `homepage` = `https://coverly.free.componentdock.com`.
