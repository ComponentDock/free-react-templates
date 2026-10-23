# Micdrop — Design Notes

Reference: **The Hustle Hour** — `https://colorlib.com/wp/template/the-hustle-hour/`  
Live preview: `https://preview.colorlib.com/theme/the-hustle-hour/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hustlehour-template-1771943880509.jpg  
Shipped: https://micdrop.free.componentdock.com

A dark-themed podcast website template. Recreation of ColorLib "The Hustle Hour". **Source slug:** `the-hustle-hour` **Source URL:** https://colorlib.com/wp/template/the-hustle-hour/ **Preview URL:** https://preview.colorlib.com/theme/the-hustle-hour/ (404 at time of prep — fallback to screenshot) **Screenshot:** https://colorlib.com/wp/w…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700;800;900**

## Design tokens (`apps/micdrop/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#dc2626` | brand |
| `--color-brand-light` | `#ef4444` | brand light |
| `--color-dark-bg` | `#0f0f11` | dark bg |
| `--color-surface` | `#1a1a1f` | surface |
| `--color-light-bg` | `#f8f9fa` | light bg |
| `--color-border` | `#374151` | border |
| `--font-family-sans` | `'Inter', sans-serif` | font family sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays logo, navigation links, dark mode toggle, and CTA | see fidelity note below |
| 2 | `Hero` | Hero displays headline, subtitle, and CTAs | see fidelity note below |
| 3 | `StatsBar` | Stats bar shows key metrics | see fidelity note below |
| 4 | `StatsSection` | Secondary stats section highlights reach | see fidelity note below |
| 5 | `Episodes` | Episodes section shows recent episodes | see fidelity note below |
| 6 | `Guests` | Guest profiles are displayed | see fidelity note below |
| 7 | `Newsletter` | Newsletter form captures email | see fidelity note below |
| 8 | `Footer` | Footer contains site links and Component Dock attribution | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL show the MicDrop logo with a red microphone icon, navigation links (Episodes, About, Sponsors, Newsletter, Blog, Contact), a dark mode toggle, and a red "Listen Now" CTA button.

### `Hero`
The hero section SHALL display a red pill badge, a headline with red accent, subtitle text, two CTA buttons, and platform distribution links.

### `StatsBar`
The stats bar SHALL display four key podcast metrics in white text on a dark background.

### `StatsSection`
The secondary stats section SHALL show four red-highlighted metrics on a light background.

### `Episodes`
The episodes section SHALL display a grid of episode cards with thumbnails, titles, dates, durations, and play buttons.

### `Guests`
The guests section SHALL show guest profile cards with photos, names, roles, and bios.

### `Newsletter`
The newsletter section SHALL provide an email input and subscribe button with form validation.

### `Footer`
The footer SHALL display navigation links, social icons, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/micdrop/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/micdrop/public/CNAME` = `micdrop.free.componentdock.com`
  and the package `homepage` = `https://micdrop.free.componentdock.com`.
