# Sooth — Design Notes

Reference: **Serenite** — `https://colorlib.com/wp/template/serenite/`  
Live preview: `https://preview.colorlib.com/theme/serenite/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/serenite-template-1771943746919.jpg  
Shipped: https://sooth.free.componentdock.com

Sooth is a single-page luxury spa & wellness landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lora**, **Playfair Display**, **Playfair Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600**

## Design tokens (`apps/sooth/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff1f2` | primary 50 |
| `--color-primary-100` | `#ffe4e6` | primary 100 |
| `--color-primary-200` | `#fecdd3` | primary 200 |
| `--color-primary-300` | `#fda4af` | primary 300 |
| `--color-primary-400` | `#fb7185` | primary 400 |
| `--color-primary-500` | `#f43f5e` | primary 500 |
| `--color-primary-600` | `#e11d48` | primary 600 |
| `--color-primary-700` | `#be123c` | primary 700 |
| `--color-primary-800` | `#9f1239` | primary 800 |
| `--color-primary-900` | `#881337` | primary 900 |
| `--color-primary-950` | `#4c0519` | primary 950 |
| `--color-accent-100` | `#fef3c7` | Gold accent — hairline dividers, star ratings, gradient stops |
| `--color-accent-200` | `#fde68a` | accent 200 |
| `--color-accent-300` | `#fcd34d` | accent 300 |
| `--color-accent-400` | `#fbbf24` | accent 400 |
| `--color-accent-500` | `#f59e0b` | accent 500 |
| `--color-accent-600` | `#d97706` | accent 600 |
| `--color-accent-700` | `#b45309` | accent 700 |
| `--font-sans` | `'Lora', ui-serif, Georgia, serif` | Body font — the original's Google Fonts pairing (Lora serif body) |
| `--font-heading` | `'Playfair Display', Georgia, serif` | Display font — Playfair Display for headings |
| `--shadow-soft` | `0 4px 16px -4px rgb(0 0 0 / 0.1)` | Soft card shadows from the demo stylesheet |
| `--shadow-soft-lg` | `0 12px 32px -8px rgb(0 0 0 / 0.16)` | shadow soft lg |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `StatsBand` | Stats band | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Specialists` | Specialists section | see fidelity note below |
| 6 | `Gallery` | Gallery section | see fidelity note below |
| 7 | `Results` | — | no dedicated spec block |
| 8 | `Packages` | Packages section | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `Faq` | FAQ section | see fidelity note below |
| 11 | `ContactCta` | Contact CTA | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |
| 13 | `CookieConsent` | Component Dock attribution | see fidelity note below |
| 14 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Sooth", anchor links to the page's sections, a "Book Now" CTA, and a dark-mode toggle button.

### `Hero`
The system SHALL render a centered hero with a gold divider, a headline, CTAs, a "Watch Demo" video modal trigger, and a stats row.

### `StatsBand`
The system SHALL render an animated stats band with four counters.

### `Services`
The system SHALL render a services section with six service cards.

### `Specialists`
The system SHALL render a specialists section with four team member cards.

### `Gallery`
The system SHALL render a photo gallery with six images.

### `Results`
*anchors only* — Before · After · Drag the handle to compare before and after. · Transformations · Visible Results · See the difference our treatments make — real before-and-after moments from our guests.

### `Packages`
The system SHALL render a pricing section with three packages.

### `Testimonials`
The system SHALL render a testimonials carousel with at least four slides.

### `Faq`
The system SHALL render an FAQ section with five accordion items.

### `ContactCta`
The system SHALL render a closing gradient CTA band with a headline and two buttons.

### `Footer`
The system SHALL render a footer with link columns, a newsletter form, and a bottom bar.

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
- **Provenance ban.** No file under `apps/sooth/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sooth/public/CNAME` = `sooth.free.componentdock.com`
  and the package `homepage` = `https://sooth.free.componentdock.com`.
