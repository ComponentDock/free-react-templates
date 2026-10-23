# Gleam — Design Notes

Reference: **Sparkleclean** — `https://colorlib.com/wp/template/sparkleclean/`  
Live preview: `https://preview.colorlib.com/theme/sparkleclean/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/sparkleclean-template.jpg  
Shipped: https://gleam.free.componentdock.com

Gleam is a single-page professional cleaning services landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@300;400;500;600;700;800**

## Design tokens (`apps/gleam/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0fdfa` | primary 50 |
| `--color-primary-100` | `#ccfbf1` | primary 100 |
| `--color-primary-200` | `#99f6e4` | primary 200 |
| `--color-primary-300` | `#5eead4` | primary 300 |
| `--color-primary-400` | `#2dd4bf` | primary 400 |
| `--color-primary-500` | `#14b8a6` | primary 500 |
| `--color-primary-600` | `#0d9488` | primary 600 |
| `--color-primary-700` | `#0f766e` | primary 700 |
| `--color-primary-800` | `#115e59` | primary 800 |
| `--color-primary-900` | `#134e4a` | primary 900 |
| `--color-primary-950` | `#042f2e` | primary 950 |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `TrustRow` | Trust row | see fidelity note below |
| 4 | `StatsBand` | Stats band | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Pricing` | Pricing section | see fidelity note below |
| 7 | `BeforeAfter` | Before/After section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `CtaBand` | CTA band | see fidelity note below |
| 10 | `Faq` | FAQ section | see fidelity note below |
| 11 | `Contact` | Contact section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |
| 13 | `CookieConsent` | Component Dock attribution | see fidelity note below |
| 14 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a sticky top navigation bar with the site name "Gleam", anchor/route links, a "Get Free Quote" CTA, a dark-mode toggle, and a mobile menu.

### `Hero`
The system SHALL render a split hero with a headline, blurb, two CTAs, a trust stats row, and an "Instant Quote" calculator card.

### `TrustRow`
The system SHALL render a four-item trust row with icon, title, and blurb for each item.

### `StatsBand`
The system SHALL render a stats band with four animated counters.

### `Services`
The system SHALL render a services grid with six service cards.

### `Pricing`
The system SHALL render a pricing section with a frequency toggle and four package cards.

### `BeforeAfter`
The system SHALL render a "See the Difference" section with at least two Before/After comparison cards.

### `Testimonials`
The system SHALL render a testimonials section with quote cards.

### `CtaBand`
The system SHALL render a CTA band promoting a first-time discount.

### `Faq`
The system SHALL render an FAQ accordion with at least four questions.

### `Contact`
The system SHALL render a contact section with a request form and contact info cards.

### `Footer`
The system SHALL render a dark footer with brand blurb, link columns, contact info, and a copyright line.

### `CookieConsent`
The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.

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
- **Provenance ban.** No file under `apps/gleam/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gleam/public/CNAME` = `gleam.free.componentdock.com`
  and the package `homepage` = `https://gleam.free.componentdock.com`.
