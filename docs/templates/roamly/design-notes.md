# Roamly — Design Notes

Reference: **Wanderlust** — `https://colorlib.com/wp/template/wanderlust/`  
Live preview: `https://preview.colorlib.com/theme/wanderlust/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/wanderlust-template-1770211435145.jpg  
Shipped: https://roamly.free.componentdock.com

Roamly is a single-page travel agency landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@300;400;500;600;700;800**

## Design tokens (`apps/roamly/src/index.css` `@theme`)

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
| `--color-accent-400` | `#facc15` | accent 400 |
| `--color-accent-500` | `#eab308` | accent 500 |
| `--color-accent-600` | `#ca8a04` | accent 600 |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | Original font: "Inter" (Google Fonts, loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header with logo, nav, dropdown, and actions | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Destinations` | Explore the World destinations grid | see fidelity note below |
| 4 | `Tours` | Unforgettable Experiences tours grid | see fidelity note below |
| 5 | `Features` | Travel with Confidence features | see fidelity note below |
| 6 | `Reveal` | — | no dedicated spec block |
| 7 | `Testimonials` | What Our Travelers Say testimonials | see fidelity note below |
| 8 | `CtaSection` | — | no dedicated spec block |
| 9 | `Footer` | Footer | see fidelity note below |
| 10 | `CookieConsent` | Component Dock attribution | see fidelity note below |
| 11 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a sticky translucent header with a logo mark + wordmark, centered navigation including a Resources dropdown, a Book Now button, a dark-mode toggle, and a mobile menu.

### `Hero`
The system SHALL render a full-screen hero with a background photo, dark overlay, badge, headline with a gradient accent word, subtext, two CTAs, a stats row, and a floating search widget.

### `Destinations`
The system SHALL render a "Explore the World" section on a light-gray background with a heading and a 6-card destinations grid.

### `Tours`
The system SHALL render a "Unforgettable Experiences" section with a "Featured Tours" eyebrow and a 4-card tours grid with pricing.

### `Features`
The system SHALL render a "Travel with Confidence" section with six feature cards (icon, title, description).

### `Reveal`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Testimonials`
The system SHALL render a testimonials section with a heading, an intro line, and testimonial cards.

### `CtaSection`
*anchors only* — Ready for Your Next Adventure? · Contact Us

### `Footer`
The system SHALL render a dark footer with a brand column, link columns, a newsletter form, and a bottom bar.

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
- **Provenance ban.** No file under `apps/roamly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/roamly/public/CNAME` = `roamly.free.componentdock.com`
  and the package `homepage` = `https://roamly.free.componentdock.com`.
