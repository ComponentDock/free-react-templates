# Lyceum — Design Notes

Reference: **Learnit** — `https://colorlib.com/wp/template/learnit/`  
Live preview: `https://preview.colorlib.com/theme/learnit/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/learnit-free-template.jpg  
Shipped: https://lyceum.free.componentdock.com

Lyceum is an education one-page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Learnit" template design (see TEMPLATES.md — appears 2×: lines 436, 1647; both rows point to the same source, one prep covers all; verified with `grep -c 'wp/template/learnit/'` = 2), built under a differ…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@700;900**, **Roboto**

## Design tokens (`apps/lyceum/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4dbf1c` | brand |
| `--color-gradient-from` | `#2c28b1` | gradient from |
| `--color-gradient-to` | `#9b5cf6` | gradient to |
| `--color-ink` | `#222222` | ink |
| `--color-muted` | `#777777` | muted |
| `--color-light` | `#f9f9ff` | light |
| `--color-border-soft` | `#eeeeee` | border soft |
| `--color-star` | `#ffc000` | star |
| `--color-pack-chip` | `#edf8e8` | pack chip |
| `--color-footer` | `#04091e` | footer |
| `--color-paper` | `#ffffff` | paper |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Playfair Display', ui-serif, Georgia, serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar | see fidelity note below |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | Hero | see fidelity note below |
| 4 | `FeatureStrip` | Feature strip | see fidelity note below |
| 5 | `Courses` | Courses | see fidelity note below |
| 6 | `Team` | Team | see fidelity note below |
| 7 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 8 | `Packages` | Packages | see fidelity note below |
| 9 | `Blog` | Latest blog | see fidelity note below |
| 10 | `Impress` | Impress CTA | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The system SHALL render a thin `#f9f9ff` top bar with social icons on the left and contact details on the right.

### `Navbar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Hero`
The system SHALL render a full-width hero over a photo background with a centered serif headline, a paragraph, and a green CTA.

### `FeatureStrip`
The system SHALL render the `#f9f9ff` finance strip with four icon + title items.

### `Courses`
The system SHALL render the "Popular Free Courses" section with an asymmetric image grid (4 cards) plus a sidebar card, each with a bottom overlay showing a Free badge, title, and meta.

### `Team`
The system SHALL render the "Meet Our Faculty" section with four member cards that reveal a circular overlay with social icons on hover.

### `Testimonials`
The system SHALL render a testimonials carousel with three slides, each with an avatar, name, gold stars, and a quote, driven by client-side state.

### `Packages`
The system SHALL render the `#f9f9ff` packages area with a text column and two pricing cards whose price swaps to a Join Now button on hover.

### `Blog`
The system SHALL render the "Latest Posts From Blog" section with four post cards.

### `Impress`
The system SHALL render a full-bleed CTA band over a background image with a white headline and a white button that inverts on hover.

### `Footer`
The system SHALL render a `#04091e` footer with four link columns, a newsletter form with the gradient arrow button, and a footer-bottom row.

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
- **Provenance ban.** No file under `apps/lyceum/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lyceum/public/CNAME` = `lyceum.free.componentdock.com`
  and the package `homepage` = `https://lyceum.free.componentdock.com`.
