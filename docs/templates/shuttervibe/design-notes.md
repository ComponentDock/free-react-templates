# Shuttervibe — Design Notes

Reference: **Thumber** — `https://colorlib.com/wp/template/thumber/`  
Live preview: `https://preview.colorlib.com/theme/thumber/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/thumber-free-template.jpg  
Shipped: https://shuttervibe.free.componentdock.com

Shuttervibe is a photography portfolio template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Thumber" photography portfolio design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Quicksand**, **Quicksand:wght@300;400;500;700;900**

## Design tokens (`apps/shuttervibe/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e44985` | brand |
| `--color-brand-dark` | `#c7376e` | brand dark |
| `--font-heading` | `'Quicksand', sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header bar | see fidelity note below |
| 2 | `MobileMenu` | Mobile menu | see fidelity note below |
| 3 | `Gallery` | Full-screen image gallery | see fidelity note below |
| 4 | `PhotoGrid` | Photo grid page | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a fixed black header bar at the top with the logo "Shuttervibe" on the left and a hamburger "Menu" toggle on the right. Desktop nav links (Home, Photos, About Me, Contact) SHALL be visible on large screens; the hamburger toggle SHALL be visible on small screens.

### `MobileMenu`
The system SHALL provide an off-canvas mobile menu that slides in from the right (300px wide, white background) when the hamburger toggle is clicked.

### `Gallery`
The system SHALL render a Swiper-based gallery filling the viewport below the header. The main image area SHALL occupy 80% of the remaining height, and a thumbnail strip SHALL occupy the remaining 20%.

### `PhotoGrid`
The system SHALL render a responsive photo grid when navigating to the Photos page. Each photo SHALL show an image at 300px height (200px on mobile) with a dark overlay on hover showing a centered search icon and category label.

### `Footer`
The system SHALL render a footer linking to Component Dock.

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
- **Provenance ban.** No file under `apps/shuttervibe/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shuttervibe/public/CNAME` = `shuttervibe.free.componentdock.com`
  and the package `homepage` = `https://shuttervibe.free.componentdock.com`.
