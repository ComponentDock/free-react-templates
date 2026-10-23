# Dealflow — Design Notes

Reference: **Pipelineiq** — `https://colorlib.com/wp/template/pipelineiq/`  
Live preview: `https://preview.colorlib.com/theme/pipelineiq/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pipelineiq-template-1771943984801.jpg  
Shipped: https://dealflow.free.componentdock.com

Dealflow is a single-page sales-CRM landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@300;400;500;600;700;800**

## Design tokens (`apps/dealflow/src/index.css` `@theme`)

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
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | Body font — the original's Google Fonts pairing (Inter) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `Testimonials` | Testimonials section | see fidelity note below |
| 5 | `Contact` | Contact section | see fidelity note below |
| 6 | `Faq` | FAQ section | see fidelity note below |
| 7 | `CtaBanner` | — | no dedicated spec block |
| 8 | `Footer` | Footer | see fidelity note below |
| 9 | `CookieBanner` | — | no dedicated spec block |
| 10 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Dealflow", anchor links to the page's sections, a "Start Free Trial" CTA, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width dark hero with a trust badge, headline, call-to-action buttons, a stats row, and a dashboard mockup.

### `Features`
The system SHALL render a features section with six feature cards.

### `Testimonials`
The system SHALL render a testimonials section with quotes in a carousel.

### `Contact`
The system SHALL render a contact section with four contact detail cards.

### `Faq`
The system SHALL render an FAQ section with an accordion of at least three questions.

### `CtaBanner`
*anchors only* — Ready to Close More Deals? · Start Free Trial · Book a Demo

### `Footer`
The system SHALL render a dark footer with brand blurb, link columns, contact details, and a copyright line.

### `CookieBanner`
*anchors only* — region · Cookie consent · Decline · Accept All

### `BackToTop`
*anchors only* — Back to top

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
- **Provenance ban.** No file under `apps/dealflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dealflow/public/CNAME` = `dealflow.free.componentdock.com`
  and the package `homepage` = `https://dealflow.free.componentdock.com`.
