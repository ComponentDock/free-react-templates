# Pristine — Design Notes

Reference: **Cleaningservice** — `https://colorlib.com/wp/template/cleaningservice/`  
Live preview: `https://preview.colorlib.com/theme/cleaningservice/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cleaningservice-colorlib-template.jpg  
Shipped: https://pristine.free.componentdock.com

Pristine is a single-page cleaning-services company website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Bai Jamjuree:wght@400;500;600;700**, **Rubik**

## Design tokens (`apps/pristine/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#006cff` | brand |
| `--color-brand-dark` | `#0057cc` | brand dark |
| `--color-navy` | `#0e1b50` | navy |
| `--color-navy-soft` | `#232f55` | navy soft |
| `--color-accent` | `#fff323` | accent |
| `--color-accent-dark` | `#e8d81f` | accent dark |
| `--color-cream` | `#f3f3eb` | cream |
| `--color-beige` | `#e8e7d3` | beige |
| `--color-muted` | `#9b9eac` | muted |
| `--color-body` | `#4c526e` | body |
| `--color-cta-heading` | `#132e43` | cta heading |
| `--color-cta-text` | `#2d0000` | cta text |
| `--color-quote` | `#232f55` | quote |
| `--color-team-name` | `#33384e` | team name |
| `--color-team-role` | `#57667e` | team role |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | Rubik across the whole site (headings, body, buttons, inputs) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Header` | Header | see fidelity note below |
| 3 | `Hero` | Hero | see fidelity note below |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `TrustBand` | Trust band (experience) | see fidelity note below |
| 6 | `About` | About / satisfaction guarantee | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Gallery` | Gallery | see fidelity note below |
| 9 | `Team` | Team | see fidelity note below |
| 10 | `CallToAction` | Call-to-action band | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — Opening Hour: Monday – Friday : 8am – 4pm

### `Header`
The system SHALL render a navy top bar and a white navigation header with a logo, links, a Request Free Quote button, and a mobile menu.

### `Hero`
The system SHALL render a split hero on a bright-yellow background with a photo, an icon, a headline, subtext, and a CTA button.

### `Services`
The system SHALL render a services section with a kicker, a heading, and three service cards.

### `TrustBand`
The system SHALL render a trust section with a photo block carrying a yellow experience box and a heading with a Learn More button.

### `About`
The system SHALL render an about section on a cream background with a heading and a photo.

### `Testimonials`
The system SHALL render a centered testimonial slider with quotes, ratings, and author names.

### `Gallery`
The system SHALL render a two-tile gallery with hover captions.

### `Team`
The system SHALL render an expert-team section with member cards.

### `CallToAction`
The system SHALL render a yellow CTA band with a call heading, a phone input, a services select, and a Send Request button.

### `Footer`
The system SHALL render a dark-navy footer with link columns, contact details, and a copyright bar.

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
- **Provenance ban.** No file under `apps/pristine/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pristine/public/CNAME` = `pristine.free.componentdock.com`
  and the package `homepage` = `https://pristine.free.componentdock.com`.
