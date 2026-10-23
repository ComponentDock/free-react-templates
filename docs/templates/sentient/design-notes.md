# Sentient — Design Notes

Reference: **Neuralflow** — `https://colorlib.com/wp/template/neuralflow/`  
Live preview: `https://preview.colorlib.com/theme/neuralflow/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/neuralflow-template-1771943830583.jpg  
Shipped: https://sentient.free.componentdock.com

Sentient is a single-page AI platform landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **JetBrains Mono**, **Space Grotesk**, **Space Grotesk:wght@300;400;500;600;700**

## Design tokens (`apps/sentient/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f5f3ff` | primary 50 |
| `--color-primary-100` | `#ede9fe` | primary 100 |
| `--color-primary-200` | `#ddd6fe` | primary 200 |
| `--color-primary-300` | `#c4b5fd` | primary 300 |
| `--color-primary-400` | `#a78bfa` | primary 400 |
| `--color-primary-500` | `#8b5cf6` | primary 500 |
| `--color-primary-600` | `#7c3aed` | primary 600 |
| `--color-primary-700` | `#6d28d9` | primary 700 |
| `--color-primary-800` | `#5b21b6` | primary 800 |
| `--color-primary-900` | `#4c1d95` | primary 900 |
| `--color-primary-950` | `#2e1065` | primary 950 |
| `--color-accent-50` | `#ecfeff` | accent 50 |
| `--color-accent-100` | `#cffafe` | accent 100 |
| `--color-accent-200` | `#a5f3fc` | accent 200 |
| `--color-accent-300` | `#67e8f9` | accent 300 |
| `--color-accent-400` | `#22d3ee` | accent 400 |
| `--color-accent-500` | `#06b6d4` | accent 500 |
| `--color-accent-600` | `#0891b2` | accent 600 |
| `--color-accent-700` | `#0e7490` | accent 700 |
| `--color-accent-800` | `#155e75` | accent 800 |
| `--color-accent-900` | `#164e63` | accent 900 |
| `--color-accent-950` | `#083344` | accent 950 |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | Display + body + code fonts — the original's Google Fonts pairing |
| `--font-display` | `'Space Grotesk', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-mono` | `'JetBrains Mono', ui-monospace, SFMono-Regular, monospace` | font mono |
| `--animate-glow-pulse` | `glow-pulse 6s ease-in-out infinite` | Slow breathing pulse for the hero glow orbs |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `StatsStrip` | Stats counters | see fidelity note below |
| 4 | `Capabilities` | Capabilities section | see fidelity note below |
| 5 | `HowItWorks` | How It Works section | see fidelity note below |
| 6 | `UseCases` | Use Cases section | see fidelity note below |
| 7 | `Pricing` | Pricing section | see fidelity note below |
| 8 | `Developers` | Developers section | see fidelity note below |
| 9 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 10 | `Faq` | FAQ accordion | see fidelity note below |
| 11 | `CtaBanner` | — | no dedicated spec block |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Sentient", anchor links to the page's sections, a "Try Free" CTA, and a dark-mode toggle button.

### `Hero`
The system SHALL render a dark hero with a badge, a typewriter headline, CTAs, a stats row, and a code window.

### `StatsStrip`
The system SHALL render a logo/stats strip with animated count-up counters.

### `Capabilities`
The system SHALL render a capabilities section with at least six feature cards.

### `HowItWorks`
The system SHALL render a three-step "How It Works" section.

### `UseCases`
The system SHALL render a use-cases section with at least four industry cards.

### `Pricing`
The system SHALL render a pricing section with a billing toggle and three tiers.

### `Developers`
The system SHALL render a developers section with a code example and four feature cards.

### `Testimonials`
The system SHALL render a testimonials section as a carousel.

### `Faq`
The system SHALL render an FAQ section with an accordion.

### `CtaBanner`
*anchors only* — The Future of AI is Here · Join thousands of teams building intelligent applications on Sentient. · Start Free · Talk to Sales

### `Footer`
The system SHALL render a footer with link columns, a newsletter form, and a copyright line.

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
- **Provenance ban.** No file under `apps/sentient/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sentient/public/CNAME` = `sentient.free.componentdock.com`
  and the package `homepage` = `https://sentient.free.componentdock.com`.
