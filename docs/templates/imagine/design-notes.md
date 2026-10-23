# Imagine — Design Notes

Reference: **Creative Agency 2** — `https://colorlib.com/wp/template/creative-agency-2/`  
Live preview: `https://preview.colorlib.com/theme/creative-agency-2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/agency-free-agency-website-template.jpg  
Shipped: https://imagine.free.componentdock.com

Imagine is a single-page creative-agency landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@100;300;400;500;600;700**

## Design tokens (`apps/imagine/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-start` | `#908ced` | brand start |
| `--color-brand-end` | `#b56fe8` | brand end |
| `--color-periwinkle` | `#8490ff` | periwinkle |
| `--color-ink` | `#000000` | ink |
| `--color-footer` | `#222222` | footer |
| `--color-social` | `#111111` | social |
| `--color-icon` | `#777777` | icon |
| `--color-outline` | `#f4f4f4` | outline |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins 100–700 (Google Fonts <link>). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Services` | Services strip | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Projects` | Projects | see fidelity note below |
| 6 | `Skills` | Skills | see fidelity note below |
| 7 | `Team` | Team | see fidelity note below |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `Blog` | Blog | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main · Imagine home · Pages menu · menu · Pages · menuitem

### `Hero`
The system SHALL render a full-width photo hero with a right-aligned thin/bold headline and a gradient CTA button.

### `Services`
The system SHALL render a centered heading and four icon cards with outline buttons.

### `About`
The system SHALL render a split section on a photo background with white text and two outline buttons.

### `Projects`
The system SHALL render a centered heading with a row of project cards.

### `Skills`
The system SHALL render a black section with a heading and three progress rings.

### `Team`
The system SHALL render a grid of four team member cards with hover social icons.

### `Testimonials`
The system SHALL render a testimonial section on a photo background.

### `Blog`
The system SHALL render a centered heading and four blog post cards with meta info.

### `Footer`
The system SHALL render a dark three-column footer with a newsletter form, link list, Instagram feed, and a copyright bar.

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
- **Provenance ban.** No file under `apps/imagine/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/imagine/public/CNAME` = `imagine.free.componentdock.com`
  and the package `homepage` = `https://imagine.free.componentdock.com`.
