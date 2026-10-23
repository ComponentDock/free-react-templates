# Ticker — Design Notes

Reference: **Financeflow** — `https://colorlib.com/wp/template/financeflow/`  
Live preview: `https://preview.colorlib.com/theme/financeflow/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/financeflow-template-1770211224122.jpg  
Shipped: https://ticker.free.componentdock.com

Ticker is a single-page trading education landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**, **JetBrains Mono**, **Sora**

## Design tokens (`apps/ticker/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-300` | `#ebb25f` | primary 300 |
| `--color-primary-400` | `#dc932e` | primary 400 |
| `--color-primary-500` | `#cc7800` | primary 500 |
| `--color-primary-600` | `#ab5900` | primary 600 |
| `--color-primary-700` | `#8f4700` | primary 700 |
| `--color-primary-800` | `#713408` | primary 800 |
| `--color-success-400` | `#2ecb84` | success 400 |
| `--color-success-500` | `#1c985a` | success 500 |
| `--color-success-600` | `#1e7f4e` | success 600 |
| `--color-danger-500` | `#de3b3d` | danger 500 |
| `--color-paper` | `#f6f9fc` | paper |
| `--color-ink` | `#08090a` | ink |
| `--color-night` | `#030304` | night |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Sora', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TickerBar` | Ticker bar | see fidelity note below |
| 2 | `Navbar` | Navigation bar | see fidelity note below |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `StatsStrip` | Stats strip | see fidelity note below |
| 5 | `Markets` | Markets section | see fidelity note below |
| 6 | `Courses` | Courses section | see fidelity note below |
| 7 | `Mentors` | Mentors section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Pricing` | Pricing section | see fidelity note below |
| 10 | `Faq` | FAQ section | see fidelity note below |
| 11 | `CtaBanner` | CTA banner | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TickerBar`
The system SHALL render a scrolling ticker strip above the header with live market prices in monospace font.

### `Navbar`
The system SHALL render a sticky top navigation bar with the brand wordmark, section links, a "Sign in" link, a "Start Trading" button, a dark-mode toggle and a mobile menu.

### `Hero`
The system SHALL render a two-column hero with a headline, sub-paragraph, CTAs, social proof and a "Live Portfolio" glass card.

### `StatsStrip`
The system SHALL render a stats strip between the hero and markets section with three statistics.

### `Markets`
The system SHALL render a "Choose Your Market" section with eight market category cards.

### `Courses`
The system SHALL render a "Master the Markets" section with five course cards, each with a price, rating and student count.

### `Mentors`
The system SHALL render a "Learn from Millionaire Traders" section with four mentor cards.

### `Testimonials`
The system SHALL render a "Traders Who Changed Their Lives" section with testimonial cards.

### `Pricing`
The system SHALL render an "Invest in Your Trading Future" section with three plan cards and a custom-solution card.

### `Faq`
The system SHALL render a "Common Questions" accordion with at least eight questions.

### `CtaBanner`
The system SHALL render a final "Ready to Start Your Trading Journey?" CTA section with a Start Trading button.

### `Footer`
The system SHALL render a footer with a brand blurb, four link columns, a disclaimer and a copyright bar.

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
- **Provenance ban.** No file under `apps/ticker/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ticker/public/CNAME` = `ticker.free.componentdock.com`
  and the package `homepage` = `https://ticker.free.componentdock.com`.
