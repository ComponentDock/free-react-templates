# Congregate — Design Notes

Reference: **Hopefoundation** — `https://colorlib.com/wp/template/hopefoundation/`  
Live preview: `https://preview.colorlib.com/theme/hopefoundation/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hopefoundation-template-1770211243073.jpg  
Shipped: https://congregate.free.componentdock.com

Congregate is a single-page church community landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Outfit**, **Outfit:wght@300;400;500;600;700;800**

## Design tokens (`apps/congregate/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fffbeb` | primary 50 |
| `--color-primary-100` | `#fef3c7` | primary 100 |
| `--color-primary-200` | `#fde68a` | primary 200 |
| `--color-primary-300` | `#fcd34d` | primary 300 |
| `--color-primary-400` | `#fbbf24` | primary 400 |
| `--color-primary-500` | `#f59e0b` | primary 500 |
| `--color-primary-600` | `#d97706` | primary 600 |
| `--color-primary-700` | `#b45309` | primary 700 |
| `--color-primary-800` | `#92400e` | primary 800 |
| `--color-primary-900` | `#78350f` | primary 900 |
| `--color-charcoal-50` | `#f7f7f7` | Custom charcoal neutral scale (light section bg → near-black surfaces) |
| `--color-charcoal-100` | `#e3e3e3` | charcoal 100 |
| `--color-charcoal-200` | `#c8c8c8` | charcoal 200 |
| `--color-charcoal-300` | `#a4a4a4` | charcoal 300 |
| `--color-charcoal-400` | `#818181` | charcoal 400 |
| `--color-charcoal-500` | `#666` | charcoal 500 |
| `--color-charcoal-600` | `#515151` | charcoal 600 |
| `--color-charcoal-700` | `#434343` | charcoal 700 |
| `--color-charcoal-800` | `#383838` | charcoal 800 |
| `--color-charcoal-900` | `#1a1a1a` | charcoal 900 |
| `--color-cream-50` | `#fefdfb` | Warm cream tint for alternating light sections |
| `--font-sans` | `'Outfit', ui-sans-serif, system-ui, sans-serif` | Outfit (300–800) — the original's font, via Google Fonts <link> |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `ServiceTimes` | Service Times section | see fidelity note below |
| 4 | `WhatToExpect` | What to Expect section | see fidelity note below |
| 5 | `WatchListen` | Watch & Listen section | see fidelity note below |
| 6 | `GetInvolved` | Get Involved section | see fidelity note below |
| 7 | `Stories` | Stories section | see fidelity note below |
| 8 | `CtaStats` | CTA and stats section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a header with the brand wordmark, section links, a dark-mode toggle, a "Plan Your Visit" button and a mobile menu.

### `Hero`
The system SHALL render a full-viewport dark photo hero with a headline, sub-paragraph, two CTAs and a scroll indicator.

### `ServiceTimes`
The system SHALL render a "Service Times" section with service cards and a location card.

### `WhatToExpect`
The system SHALL render a "You're Invited" section with four feature cards.

### `WatchListen`
The system SHALL render a "Watch & Listen" section with four message cards and a view-all link.

### `GetInvolved`
The system SHALL render a "Ways to Connect" section with four action cards.

### `Stories`
The system SHALL render a dark "Real People. Real Hope." section with testimonial cards.

### `CtaStats`
The system SHALL render a "Your story isn't over." CTA with two buttons and a stats row.

### `Footer`
The system SHALL render a dark footer with a brand blurb, three link columns, social icons, contact details and a bottom bar.

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
- **Provenance ban.** No file under `apps/congregate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/congregate/public/CNAME` = `congregate.free.componentdock.com`
  and the package `homepage` = `https://congregate.free.componentdock.com`.
