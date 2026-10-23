# Vaultly — Design Notes

Reference: **Wealthwise** — `https://colorlib.com/wp/template/wealthwise/`  
Live preview: `https://preview.colorlib.com/theme/wealthwise/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/wealthwise-template-1770211049269.jpg  
Shipped: https://vaultly.free.componentdock.com

Vaultly is a single-page AI financial advisor / fintech landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**, **JetBrains Mono**, **Plus Jakarta Sans**

## Design tokens (`apps/vaultly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f5f3fe` | primary 50 |
| `--color-primary-100` | `#ebe7fd` | primary 100 |
| `--color-primary-200` | `#d9d1fb` | primary 200 |
| `--color-primary-300` | `#bcadf8` | primary 300 |
| `--color-primary-400` | `#9a85f6` | primary 400 |
| `--color-primary-500` | `#7a5cf5` | primary 500 |
| `--color-primary-600` | `#6d49f4` | primary 600 |
| `--color-primary-700` | `#5b3ee0` | primary 700 |
| `--color-primary-800` | `#260c66` | primary 800 |
| `--color-primary-900` | `#11023a` | primary 900 |
| `--color-primary-950` | `#0b0324` | primary 950 |
| `--color-secondary-100` | `#ccf2ef` | secondary 100 |
| `--color-secondary-300` | `#33b3a9` | secondary 300 |
| `--color-secondary-500` | `#00978a` | secondary 500 |
| `--color-secondary-700` | `#00756a` | secondary 700 |
| `--color-secondary-900` | `#00322d` | secondary 900 |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-mono` | `'JetBrains Mono', ui-monospace, monospace` | font mono |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `HowItWorks` | How it works section | see fidelity note below |
| 5 | `Dashboard` | Dashboard preview | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Pricing` | Pricing section | see fidelity note below |
| 8 | `Faq` | FAQ section | see fidelity note below |
| 9 | `CtaSection` | Call to action | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed top navigation bar with the site name "Finley", anchor links to the page's sections, a "Get Started Free" button, a "Log In" link, and a dark-mode toggle.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, two call-to-action buttons, a stats row, and an AI chat mockup.

### `Features`
The system SHALL render a features section with six cards.

### `HowItWorks`
The system SHALL render a how-it-works section with four steps.

### `Dashboard`
The system SHALL render a dashboard preview with tabs and a net worth figure.

### `Testimonials`
The system SHALL render a testimonials section with at least three quotes.

### `Pricing`
The system SHALL render a pricing section with three plans.

### `Faq`
The system SHALL render an FAQ section with accordion items that expand on activation.

### `CtaSection`
The system SHALL render a closing gradient CTA band with a headline and two buttons.

### `Footer`
The system SHALL render a footer with a brand column, link columns, and a copyright line.

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
- **Provenance ban.** No file under `apps/vaultly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vaultly/public/CNAME` = `vaultly.free.componentdock.com`
  and the package `homepage` = `https://vaultly.free.componentdock.com`.
