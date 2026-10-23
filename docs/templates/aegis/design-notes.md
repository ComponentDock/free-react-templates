# Aegis — Design Notes

Reference: **Shieldnet** — `https://colorlib.com/wp/template/shieldnet/`  
Live preview: `https://preview.colorlib.com/theme/shieldnet/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/shieldnet-template-1771944037639.jpg  
Shipped: https://aegis.free.componentdock.com

Aegis is a single-page cybersecurity threat-protection platform landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@300;400;500;600;700;800**

## Design tokens (`apps/aegis/src/index.css` `@theme`)

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
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | Body font — Inter, the original's Google Fonts pairing |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `StatsBand` | Stats band | see fidelity note below |
| 4 | `Defense` | Defense section | see fidelity note below |
| 5 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 6 | `Contact` | Contact section | see fidelity note below |
| 7 | `Faq` | FAQ section | see fidelity note below |
| 8 | `Cta` | — | no dedicated spec block |
| 9 | `Footer` | Footer | see fidelity note below |
| 10 | `CookieBanner` | — | no dedicated spec block |
| 11 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Aegis", anchor links to the page's sections, a "Get Protected" button, a dark-mode toggle, and a mobile menu.

### `Hero`
The system SHALL render a split hero with an eyebrow badge, a headline, a blurb, two call-to-action buttons, a stats row, and a threat-dashboard mockup.

### `StatsBand`
The system SHALL render an animated stats band with four counters.

### `Defense`
The system SHALL render a cyber defense section with six capability cards.

### `Testimonials`
The system SHALL render a testimonials section as a carousel with quotes, author details, navigation arrows, and slide indicators.

### `Contact`
The system SHALL render a contact section with a lead form, contact details, and a map embed.

### `Faq`
The system SHALL render an FAQ section with accordion items that expand on activation.

### `Cta`
*anchors only* — Get started · Ready to Secure Your Organization? · Start Free Trial · Talk to Expert

### `Footer`
The system SHALL render a dark footer with link columns, contact details, legal links, a cookie-consent dialog, and a back-to-top control.

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
- **Provenance ban.** No file under `apps/aegis/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/aegis/public/CNAME` = `aegis.free.componentdock.com`
  and the package `homepage` = `https://aegis.free.componentdock.com`.
