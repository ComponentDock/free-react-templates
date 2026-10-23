# Ollie — Design Notes

Reference: **Skater** — `https://colorlib.com/wp/template/skater/`  
Live preview: `https://preview.colorlib.com/theme/skater/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/skater-free-template.jpg  
Shipped: https://ollie.free.componentdock.com

Ollie is a single-page skateboarding personal-site template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald:wght@400;500;600;700**

## Design tokens (`apps/ollie/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff8b00` | brand |
| `--color-brand-light` | `#ffa940` | brand light |
| `--color-brand-dark` | `#cc6f00` | brand dark |
| `--color-surface` | `#333333` | surface |
| `--color-surface-light` | `#3a3a3a` | surface light |
| `--color-surface-dark` | `#2a2a2a` | surface dark |
| `--color-muted` | `#939393` | muted |
| `--color-bg-dark` | `#222222` | bg dark |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero carousel | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Performance` | Performance section | see fidelity note below |
| 5 | `Mentor` | Mentor section | see fidelity note below |
| 6 | `About` | Video/About section | see fidelity note below |
| 7 | `Team` | Team section | see fidelity note below |
| 8 | `Pricing` | Pricing section | see fidelity note below |
| 9 | `Faq` | FAQ section | see fidelity note below |
| 10 | `Testimonials` | Testimonials section | see fidelity note below |
| 11 | `Blog` | Blog section | see fidelity note below |
| 12 | `Contact` | Contact section | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Ollie" and anchor links to the page's sections.

### `Hero`
The system SHALL render a full-width hero carousel with background images, a headline, and a call-to-action button.

### `Services`
The system SHALL render a services grid section with six service cards.

### `Performance`
The system SHALL render a performance split section with an image on the left and text content with a checklist on the right.

### `Mentor`
The system SHALL render a mentor split section with text content on the left and an image on the right (reversed layout from the Performance section).

### `About`
The system SHALL render a video/about section with a play-button overlay and four stat counters.

### `Team`
The system SHALL render a team grid with three team member cards.

### `Pricing`
The system SHALL render a pricing section with three pricing tiers in a column layout.

### `Faq`
The system SHALL render an FAQ section with eight accordion questions arranged in two columns.

### `Testimonials`
The system SHALL render a testimonials carousel with four testimonials.

### `Blog`
The system SHALL render a blog grid with two blog post cards.

### `Contact`
The system SHALL render a contact section with a form and a sidebar CTA.

### `Footer`
The system SHALL render a footer with an about section, feature links, newsletter subscribe, social links, and a Component Dock link.

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
- **Provenance ban.** No file under `apps/ollie/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ollie/public/CNAME` = `ollie.free.componentdock.com`
  and the package `homepage` = `https://ollie.free.componentdock.com`.
