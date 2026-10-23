# Blastoff — Design Notes

Reference: **Launchpad** — `https://colorlib.com/wp/template/launchpad/`  
Live preview: `https://preview.colorlib.com/theme/launchpad/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/launchpad-template-1771943657968.jpg  
Shipped: https://blastoff.free.componentdock.com

Blastoff is a single-page startup/SaaS dev-platform landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Manrope**, **Manrope:wght@300;400;500;600;700;800**

## Design tokens (`apps/blastoff/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef2ff` | primary 50 |
| `--color-primary-100` | `#e0e7ff` | primary 100 |
| `--color-primary-200` | `#c7d2fe` | primary 200 |
| `--color-primary-300` | `#a5b4fc` | primary 300 |
| `--color-primary-400` | `#818cf8` | primary 400 |
| `--color-primary-500` | `#6366f1` | primary 500 |
| `--color-primary-600` | `#4f46e5` | primary 600 |
| `--color-primary-700` | `#4338ca` | primary 700 |
| `--color-primary-800` | `#3730a3` | primary 800 |
| `--color-primary-900` | `#312e81` | primary 900 |
| `--font-sans` | `'Manrope', ui-sans-serif, system-ui, sans-serif` | Manrope (300–800) — the original's font, via Google Fonts <link> |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `StatsBand` | Stats band | see fidelity note below |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `HowItWorks` | How It Works section | see fidelity note below |
| 6 | `Integrations` | Integrations section | see fidelity note below |
| 7 | `Pricing` | Pricing section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Faq` | FAQ section | see fidelity note below |
| 10 | `Waitlist` | Waitlist call to action | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Blastoff", anchor links to the page's sections, a "Get Early Access" CTA, and a dark-mode toggle button.

### `Hero`
The system SHALL render a gradient hero with a badge, a headline, a blurb, two CTAs, a dashboard image, and a stats row.

### `StatsBand`
The system SHALL render an animated stats band with four counters.

### `Features`
The system SHALL render a features section with six feature cards.

### `HowItWorks`
The system SHALL render a three-step process section.

### `Integrations`
The system SHALL render an integrations grid with at least six connected tools.

### `Pricing`
The system SHALL render a pricing section with a billing toggle and three tiers.

### `Testimonials`
The system SHALL render a testimonial carousel with at least one quote.

### `Faq`
The system SHALL render an FAQ section with at least three accordion questions.

### `Waitlist`
The system SHALL render a closing CTA on a brand gradient with a headline and a button.

### `Footer`
The system SHALL render a footer with link columns, a newsletter signup, and a copyright line.

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
- **Provenance ban.** No file under `apps/blastoff/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/blastoff/public/CNAME` = `blastoff.free.componentdock.com`
  and the package `homepage` = `https://blastoff.free.componentdock.com`.
