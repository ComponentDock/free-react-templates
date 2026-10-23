# Locks — Design Notes

Reference: **Trim** — `https://colorlib.com/wp/template/trim/`  
Live preview: `https://preview.colorlib.com/theme/trim/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/trim-free-template.jpg  
Shipped: https://locks.free.componentdock.com

Locks is a single-page hair-salon landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Trim" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cookie**, **Poppins**

## Design tokens (`apps/locks/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ce9c6b` | brand |
| `--color-brand-dark` | `#b07d46` | brand dark |
| `--color-brown` | `#785028` | brown |
| `--color-ink` | `#101010` | Ink — near-black bands and footer (#000 from the original). |
| `--color-ink-dark` | `#000000` | ink dark |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds (default white, alt #f8f9fa). |
| `--color-mist` | `#999999` | Mist — muted body text (#999999 from the original). |
| `--color-primary-50` | `#faf4ec` | primary 50 |
| `--color-primary-100` | `#f3e5d3` | primary 100 |
| `--color-primary-200` | `#e7cba6` | primary 200 |
| `--color-primary-300` | `#d9ad75` | primary 300 |
| `--color-primary-400` | `#d19e60` | primary 400 |
| `--color-primary-500` | `#ce9c6b` | primary 500 |
| `--color-primary-600` | `#b07d46` | primary 600 |
| `--color-primary-700` | `#8f6335` | primary 700 |
| `--color-primary-800` | `#6e4c29` | primary 800 |
| `--color-primary-900` | `#573c21` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Cookie', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `InfoBar` | Info bar | see fidelity note below |
| 4 | `Welcome` | Welcome | see fidelity note below |
| 5 | `Services` | Services | see fidelity note below |
| 6 | `WhatWeDo` | What We Do | see fidelity note below |
| 7 | `Pricing` | Plan & Pricing | see fidelity note below |
| 8 | `Discount` | Discount band | see fidelity note below |
| 9 | `Team` | Hair stylist team | see fidelity note below |
| 10 | `Shop` | Shop | see fidelity note below |
| 11 | `Gallery` | Gallery | see fidelity note below |
| 12 | `Counter` | Stats counter band | see fidelity note below |
| 13 | `Blog` | Blog | see fidelity note below |
| 14 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Locks", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background image, a level-1 headline, a call-to-action button, and a video play button.

### `InfoBar`
The system SHALL render a contact info bar with phone, address, and opening hours, plus social links.

### `Welcome`
The system SHALL render a "Welcome to Locks A Hair Salon" section with introductory copy.

### `Services`
The system SHALL render an "Our Services" section with at least four service cards.

### `WhatWeDo`
The system SHALL render a dark "What We Do" section with at least four cards.

### `Pricing`
The system SHALL render a "Plan & Pricing" section with priced rows.

### `Discount`
The system SHALL render a discount band with a headline and a call to action.

### `Team`
The system SHALL render an "Our Hair Stylist" section with at least four member cards.

### `Shop`
The system SHALL render a dark "Our Shop" section with photo tiles.

### `Gallery`
The system SHALL render an "Our Gallery" section with photo tiles.

### `Counter`
The system SHALL render a dark stats band with four statistics.

### `Blog`
The system SHALL render a "Recent from blog" section with post cards.

### `Footer`
The system SHALL render a footer with the site name, widget columns, and social links.

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
- **Provenance ban.** No file under `apps/locks/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/locks/public/CNAME` = `locks.free.componentdock.com`
  and the package `homepage` = `https://locks.free.componentdock.com`.
