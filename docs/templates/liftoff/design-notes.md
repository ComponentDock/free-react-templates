# Liftoff — Design Notes

Reference: **Landerz** — `https://colorlib.com/wp/template/landerz/`  
Live preview: `https://preview.colorlib.com/theme/landerz/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/landerz-free-template.jpg  
Shipped: https://liftoff.free.componentdock.com

Liftoff is a business landing-page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Landerz" template design (see TEMPLATES.md — appears 4×: lines 433, 1072, 2058, 2332; all four rows point to the same source, one prep covers all; verified with `grep -c 'wp/template/landerz/'` = 4), b…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;700;900**

## Design tokens (`apps/liftoff/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#00d2b5` | brand |
| `--color-ink` | `#000` | ink |
| `--color-muted` | `#6c757d` | muted |
| `--color-meta` | `#b3b3b3` | meta |
| `--color-light` | `#f6f6f6` | light |
| `--color-border` | `#edf0f5` | border |
| `--color-check` | `#8bc34a` | check |
| `--color-paper` | `#fff` | paper |
| `--font-heading` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `FeatureGrid` | Features grid | see fidelity note below |
| 4 | `FeatureBig` | Feature-big rows | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 7 | `Blog` | Blog section | see fidelity note below |
| 8 | `Contact` | Contact form | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary · Toggle menu · Liftoff

### `Hero`
The system SHALL render a full-height hero with a left text block and a right-floating illustration.

### `FeatureGrid`
The system SHALL render a `#f6f6f6` section titled "Features" with six white cards in a 3-column grid, each with a teal circular icon and a "Learn More" link.

### `FeatureBig`
The system SHALL render two alternating feature rows, each with a device illustration, a 40px-900 heading, a green-checked list, and an author quote box.

### `About`
The system SHALL render a `#f6f6f6` "About Us" section with a rounded photo, heading, paragraph, and a "Learn More" button.

### `Testimonials`
The system SHALL render a "Testimonials" section with a four-slide centered carousel of quotes with round avatars and names.

### `Blog`
The system SHALL render a "Blog Posts" section with three horizontal-entry cards (image, headline, meta line, excerpt, continue-reading link).

### `Contact`
The system SHALL render a "Get In Touch" section with a white form card containing square-cornered inputs and a teal submit button.

### `Footer`
The system SHALL render a centered white footer with three social links and the ColorLib copyright line.

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
- **Provenance ban.** No file under `apps/liftoff/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/liftoff/public/CNAME` = `liftoff.free.componentdock.com`
  and the package `homepage` = `https://liftoff.free.componentdock.com`.
