# Sonority — Design Notes

Reference: **Musiclab** — `https://colorlib.com/wp/template/musiclab/`  
Live preview: `https://preview.colorlib.com/theme/musiclab/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/musiclab-colorlib-template.jpg  
Shipped: https://sonority.free.componentdock.com

Sonority is a single-page music streaming landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "MusicLab" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter:wght@200;300;400;500;600;700;800;900**

## Design tokens (`apps/sonority/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-blue` | `#42b5f2` | brand blue |
| `--color-brand-dark` | `#262929` | brand dark |
| `--color-brand-body` | `#6d6d6d` | brand body |
| `--color-brand-section` | `#f5f7f9` | brand section |
| `--color-brand-card-border` | `#dde4e8` | brand card border |
| `--color-brand-hero-start` | `#161a1a` | brand hero start |
| `--color-brand-hero-end` | `rgba(38, 41, 41, 0.99)` | brand hero end |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header / Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About1` | About section 1 | see fidelity note below |
| 4 | `About2` | About section 2 | see fidelity note below |
| 5 | `Features` | Features grid | see fidelity note below |
| 6 | `Pricing` | Pricing section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |
| 9 | `ScrollToTop` | Scroll-to-top button | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent sticky header with the site name "Sonority", navigation links, and a "Sign In" button.

### `Hero`
The system SHALL render a full-width hero with a gradient dark background, headline, subtitle, two CTA buttons, and a desktop app screenshot.

### `About1`
The system SHALL render an about section with an image on the left and numbered feature points on the right.

### `About2`
The system SHALL render a second about section with reversed layout (text on left, image on right) on a light gray background.

### `Features`
The system SHALL render a 4-column features grid section with centered heading and feature cards.

### `Pricing`
The system SHALL render a pricing section with a heading and two pricing cards (Free and Premium).

### `Testimonials`
The system SHALL render a testimonials carousel with user photos, names, titles, quotes, and star ratings.

### `Footer`
The system SHALL render a dark footer with logo, description, social links, and three link columns.

### `ScrollToTop`
The system SHALL render a fixed scroll-to-top button in the bottom-right corner.

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
- **Provenance ban.** No file under `apps/sonority/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sonority/public/CNAME` = `sonority.free.componentdock.com`
  and the package `homepage` = `https://sonority.free.componentdock.com`.
