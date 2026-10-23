# Coachly — Design Notes

Reference: **Lifecoach** — `https://colorlib.com/wp/template/lifecoach/`  
Live preview: `https://preview.colorlib.com/theme/lifecoach/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lifecoach-free-template.jpg  
Shipped: https://coachly.free.componentdock.com

Coachly is a life-coaching landing-page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens

No `@theme` token block in `apps/coachly/src/index.css` — the palette is applied as utility colours in the components themselves; read the reference tokens off the shipped markup before restyling.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `SpecialOffers` | Special offers section | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Training` | Training section | see fidelity note below |
| 6 | `Team` | Team section | see fidelity note below |
| 7 | `BlogCategories` | Blog categories section | see fidelity note below |
| 8 | `Services` | Services section | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `BlogPosts` | Blog posts section | see fidelity note below |
| 11 | `Contact` | Contact section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky responsive navbar with the Coachly brand and navigation links.

### `Hero`
The system SHALL render a full-width hero banner with a background image, dark overlay, and a headline.

### `SpecialOffers`
The system SHALL render a special offers section with a dark overlay showing two offer cards.

### `About`
The system SHALL render an about/welcome section with a split layout.

### `Training`
The system SHALL render a training section with a 2-column grid of 6 training items.

### `Team`
The system SHALL render a team section showcasing 4 team members.

### `BlogCategories`
The system SHALL render a blog categories section with 3 category cards.

### `Services`
The system SHALL render a services section with a 6-item grid.

### `Testimonials`
The system SHALL render a testimonials section with a carousel.

### `BlogPosts`
The system SHALL render a recent blog posts section with 3 cards.

### `Contact`
The system SHALL render a contact section with a form.

### `Footer`
The system SHALL render a dark footer with newsletter signup and copyright information.

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
- **Provenance ban.** No file under `apps/coachly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/coachly/public/CNAME` = `coachly.free.componentdock.com`
  and the package `homepage` = `https://coachly.free.componentdock.com`.
