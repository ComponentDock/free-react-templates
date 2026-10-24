# Placeboard — Design Notes

Reference: **Listed** — `https://colorlib.com/wp/template/listed/`  
Live preview: `https://preview.colorlib.com/theme/listed/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/listed-free-template-1.jpg  
Shipped: https://placeboard.free.componentdock.com

> **REFERENCE IDENTITY (2026-10-24)** — `theme/listed/` (200, 23,918 B,
> `Colorlib Listed Directory Template`) renders THIS design, so every token and
> note here is measured on the right page. Measured geometry: header 83 · hero
> 900 · feature-destination 330 · Top Destinations 673 · section-cover 500 ·
> More Featured Destinations 604 · footer 528 (`#f2f2f2`); document 3,535 px.
> The catalogue also maps key `listed2` to this same URL — a data bug (no
> `colorlibPreviewAliases` entry); the Listed2 design lives at `theme/listed2/`
> (Quicksand, `#7971ea`) and ships as `apps/spotlight`. Do not treat this
> directory as shared between the two preps.

A Directory / Travel Listing template with hero, feature destinations, top destinations, section cover and featured destinations sections. Recreation of the ColorLib "Listed" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Raleway**, **Raleway:wght@300;400;500;600;700**

## Design tokens (`apps/placeboard/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#007bff` | primary |
| `--color-primary-hover` | `#3395ff` | primary hover |
| `--color-body` | `#6c757d` | body |
| `--color-heading` | `#000000` | heading |
| `--color-footer-bg` | `#f2f2f2` | footer bg |
| `--font-heading` | `'Playfair Display', Georgia, 'Times New Roman', serif` | Typography: Raleway for body, Playfair Display for headings. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with transparent overlay on hero | see fidelity note below |
| 2 | `Hero` | Navbar renders with transparent overlay on hero | see fidelity note below |
| 3 | `FeatureDestinations` | Feature Destinations shows 3 image cards | see fidelity note below |
| 4 | `TopDestinations` | Top Destinations shows 6-column grid | see fidelity note below |
| 5 | `PromoCover` | Promo section cover displays parallax banner | see fidelity note below |
| 6 | `FeaturedCarousel` | Featured Destinations carousel renders | see fidelity note below |
| 7 | `Footer` | Footer renders with 4 columns | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see a transparent navbar positioned over the hero section with white text links and uppercase brand text.

### `Hero`
Users SHALL see a transparent navbar positioned over the hero section with white text links and uppercase brand text.

### `FeatureDestinations`
Users SHALL see 3 equal-width destination cards with dark overlays, location icons, names, and visit links.

### `TopDestinations`
Users SHALL see a "Top Destinations" heading with 6 destination cards in a responsive grid.

### `PromoCover`
Users SHALL see a full-width parallax promo banner with heading, subtext, and a black CTA button.

### `FeaturedCarousel`
Users SHALL see a split layout with carousel navigation and destination image cards.

### `Footer`
Users SHALL see a light gray footer with 4 columns of content and a Component Dock copyright link.

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
- **Provenance ban.** No file under `apps/placeboard/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/placeboard/public/CNAME` = `placeboard.free.componentdock.com`
  and the package `homepage` = `https://placeboard.free.componentdock.com`.
