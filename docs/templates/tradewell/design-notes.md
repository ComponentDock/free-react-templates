# Tradewell — Design Notes

Reference: **Investpro** — `https://colorlib.com/wp/template/investpro/`  
Live preview: `https://preview.colorlib.com/theme/investpro/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/investpro-template-1770211264537.jpg  
Shipped: https://tradewell.free.componentdock.com

Tradewell is a single-page investing/trading platform landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**, **JetBrains Mono**, **Plus Jakarta Sans**

## Design tokens (`apps/tradewell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-100` | `#dbe3fb` | primary 100 |
| `--color-primary-200` | `#bccaf9` | primary 200 |
| `--color-primary-300` | `#8fa6f5` | primary 300 |
| `--color-primary-400` | `#5f7ff0` | primary 400 |
| `--color-primary-500` | `#2f6af0` | primary 500 |
| `--color-primary-600` | `#2452d0` | primary 600 |
| `--color-primary-700` | `#1e43ac` | primary 700 |
| `--color-primary-800` | `#1b388b` | primary 800 |
| `--color-primary-900` | `#182f6e` | primary 900 |
| `--color-primary-950` | `#0c1530` | primary 950 |
| `--color-accent-100` | `#ccf8e6` | accent 100 |
| `--color-accent-200` | `#9cf0cd` | accent 200 |
| `--color-accent-300` | `#66e3b1` | accent 300 |
| `--color-accent-400` | `#38d495` | accent 400 |
| `--color-accent-500` | `#1cb87a` | accent 500 |
| `--color-accent-600` | `#159564` | accent 600 |
| `--color-accent-700` | `#12784f` | accent 700 |
| `--color-accent-900` | `#0b422e` | accent 900 |
| `--color-danger-100` | `#fbdcd6` | danger 100 |
| `--color-danger-200` | `#f7b8ad` | danger 200 |
| `--color-danger-300` | `#f08d7e` | danger 300 |
| `--color-danger-400` | `#e85f4e` | danger 400 |
| `--color-danger-500` | `#d93a2b` | danger 500 |
| `--color-danger-600` | `#b32f24` | danger 600 |
| `--color-danger-700` | `#8f2820` | danger 700 |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Plus Jakarta Sans', 'Inter', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-mono` | `'JetBrains Mono', ui-monospace, monospace` | font mono |
| `--animate-ticker` | `ticker-scroll 40s linear infinite` | animate ticker |
| `--animate-pulse-live` | `pulse-live 2s ease-in-out infinite` | animate pulse live |
| `--animate-float` | `float 6s ease-in-out infinite` | animate float |
| `--animate-float-delayed` | `float 6s ease-in-out 3s infinite` | animate float delayed |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Ticker` | Market ticker | see fidelity note below |
| 2 | `Navbar` | Navigation bar | see fidelity note below |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `Stats` | Stats section | see fidelity note below |
| 5 | `Features` | Features section | see fidelity note below |
| 6 | `Markets` | Markets section | see fidelity note below |
| 7 | `Security` | Security section | see fidelity note below |
| 8 | `Pricing` | Pricing section | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `Faq` | FAQ section | see fidelity note below |
| 11 | `Cta` | — | no dedicated spec block |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Ticker`
The system SHALL render a scrolling ticker bar at the top of the page with stock symbols, prices, and percentage changes.

### `Navbar`
The system SHALL render a sticky top navigation bar with the site name, anchor links, a status indicator, and a call-to-action.

### `Hero`
The system SHALL render a split hero with a headline, badge, call-to-action buttons, social proof, and a phone mockup.

### `Stats`
The system SHALL render a row of four stat cards beneath the hero.

### `Features`
The system SHALL render a features section with eight feature cards.

### `Markets`
The system SHALL render a markets section with six asset-class cards.

### `Security`
The system SHALL render a dark navy security section with six protection cards.

### `Pricing`
The system SHALL render a pricing section with three tiers.

### `Testimonials`
The system SHALL render a testimonials section with at least three quotes.

### `Faq`
The system SHALL render an FAQ accordion with at least three questions.

### `Cta`
*anchors only* — Ready to Start Building Wealth? · Get Started Free · View Pricing · No account minimums · Commission-free trading · SIPC insured up to $500K

### `Footer`
The system SHALL render a footer with link columns and a copyright line.

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
- **Provenance ban.** No file under `apps/tradewell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tradewell/public/CNAME` = `tradewell.free.componentdock.com`
  and the package `homepage` = `https://tradewell.free.componentdock.com`.
