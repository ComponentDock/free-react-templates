# Freightly — Design Notes

Reference: **Logitrans** — `https://colorlib.com/wp/template/logitrans/`  
Live preview: `https://preview.colorlib.com/theme/logitrans/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/logitrans-template-1770211309698.jpg  
Shipped: https://freightly.free.componentdock.com

Freightly is a single-page logistics/shipping landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700;800**

## Design tokens (`apps/freightly/src/index.css` `@theme`)

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
| `--color-accent-50` | `#fffbeb` | accent 50 |
| `--color-accent-100` | `#fef3c7` | accent 100 |
| `--color-accent-200` | `#fde68a` | accent 200 |
| `--color-accent-300` | `#fcd34d` | accent 300 |
| `--color-accent-400` | `#fbbf24` | accent 400 |
| `--color-accent-500` | `#f59e0b` | accent 500 |
| `--color-accent-600` | `#d97706` | accent 600 |
| `--color-accent-700` | `#b45309` | accent 700 |
| `--color-accent-800` | `#92400e` | accent 800 |
| `--color-accent-900` | `#78350f` | accent 900 |
| `--color-status-500` | `#00c758` | status 500 |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | Display + body font — the original's Inter pairing via Google Fonts |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `Calculator` | Calculator section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Cta` | — | no dedicated spec block |
| 8 | `Contact` | Contact section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Freightly", anchor links to the page's sections, a phone number, a "Get a Quote" CTA, and a dark-mode toggle button.

### `Hero`
The system SHALL render a dark hero with a headline, a shipment tracking widget, and trust badges.

### `Services`
The system SHALL render a services section with at least six service cards.

### `Features`
The system SHALL render a "Why Us" section with at least four feature cards and a stats row.

### `Calculator`
The system SHALL render a shipping cost calculator with at least four shipping options and a cost estimate.

### `Testimonials`
The system SHALL render a testimonials section with at least three quotes and a certifications row.

### `Cta`
*anchors only* — Ready to Ship? · Get a Quote · Call 1-800-SWIFT-GO

### `Contact`
The system SHALL render a contact section with four info cards and a message form.

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
- **Provenance ban.** No file under `apps/freightly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/freightly/public/CNAME` = `freightly.free.componentdock.com`
  and the package `homepage` = `https://freightly.free.componentdock.com`.
