# Shutter — Design Notes

Reference: **Elena Voss** — `https://colorlib.com/wp/template/elena-voss/`  
Live preview: `https://preview.colorlib.com/theme/elena-voss/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/elenavoss-template-1771943801609.jpg  
Shipped: https://shutter.free.componentdock.com

Shutter is a single-page photographer portfolio landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **Fraunces**, **Fraunces:wght@400;500;600;700;800**

## Design tokens (`apps/shutter/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fafaf9` | primary 50 |
| `--color-primary-100` | `#f5f5f4` | primary 100 |
| `--color-primary-200` | `#e7e5e4` | primary 200 |
| `--color-primary-300` | `#d6d3d1` | primary 300 |
| `--color-primary-400` | `#a8a29e` | primary 400 |
| `--color-primary-500` | `#78716c` | primary 500 |
| `--color-primary-600` | `#57534e` | primary 600 |
| `--color-primary-700` | `#44403c` | primary 700 |
| `--color-primary-800` | `#292524` | primary 800 |
| `--color-primary-900` | `#1c1917` | primary 900 |
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
| `--font-serif` | `'Fraunces', ui-serif, Georgia, serif` | Fraunces (display serif) + DM Sans (body) — the original's typefaces |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Stats` | Stats band | see fidelity note below |
| 4 | `Portfolio` | Portfolio section | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Services` | Services section | see fidelity note below |
| 7 | `Results` | Results section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Faq` | FAQ section | see fidelity note below |
| 10 | `Contact` | Contact section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |
| 12 | `CookieConsent` | Component Dock attribution | see fidelity note below |
| 13 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site wordmark, anchor links, a primary CTA and a dark-mode toggle.

### `Hero`
The system SHALL render a full-screen hero with a background image, a serif headline, a sub-paragraph and a ghost CTA.

### `Stats`
The system SHALL render a stats band with four animated counters.

### `Portfolio`
The system SHALL render a "Selected Work" portfolio with filter tabs, a masonry grid of eight photo cards and a lightbox.

### `About`
The system SHALL render an "About" section with a biography, a photo and an awards list.

### `Services`
The system SHALL render a "Services & Packages" section with three package cards, each with features and an inquiry link.

### `Results`
The system SHALL render an "Editing" results section with two draggable before/after comparison sliders.

### `Testimonials`
The system SHALL render a "Kind Words" carousel with at least four quotes, navigation arrows and dot pagination.

### `Faq`
The system SHALL render a "Frequently Asked Questions" accordion with five expandable items.

### `Contact`
The system SHALL render a "Let's Create Together" contact section with a validated form and contact details.

### `Footer`
The system SHALL render a dark footer with brand info, social links and legal links.

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
- **Provenance ban.** No file under `apps/shutter/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shutter/public/CNAME` = `shutter.free.componentdock.com`
  and the package `homepage` = `https://shutter.free.componentdock.com`.
