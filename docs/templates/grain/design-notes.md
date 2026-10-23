# Grain — Design Notes

Reference: **Spacewood** — `https://colorlib.com/wp/template/spacewood/`  
Live preview: `https://preview.colorlib.com/theme/spacewood/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/spacewood-free-template.jpg  
Shipped: https://grain.free.componentdock.com

Grain is a single-page interior design portfolio landing page in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Abril Fatface**, **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/grain/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#a3816a` | Brand accent: warm brown (#a3816a) |
| `--color-brand-hover` | `#b8956e` | brand hover |
| `--color-surface` | `#ffffff` | Neutral palette |
| `--color-surface-dark` | `#1a1a1a` | surface dark |
| `--color-text-primary` | `#212529` | text primary |
| `--color-text-body` | `#6b7280` | text body |
| `--color-text-muted` | `rgba(114, 114, 114, 0.8)` | text muted |
| `--font-sans` | `'Poppins', Arial, sans-serif` | Fonts |
| `--font-display` | `'Abril Fatface', Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `ProjectGallery` | Project Gallery | see fidelity note below |
| 4 | `About` | About Section | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Open navigation menu · presentation · navigation · Main navigation

### `Hero`
Grain SHALL display a full-viewport hero section with a background image, dark overlay, project title, category tag, description, and a CTA button.

### `ProjectGallery`
Grain SHALL display a grid of 6 portfolio project cards, each with an image, title, category label, and a hover overlay with "View Project" link.

### `About`
Grain SHALL display an about section with a split layout: image on the left, text content on the right with heading, description paragraphs, and statistics counters.

### `Footer`
Grain SHALL display a footer with copyright text and a link to Component Dock (https://www.componentdock.com/).

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
- **Provenance ban.** No file under `apps/grain/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/grain/public/CNAME` = `grain.free.componentdock.com`
  and the package `homepage` = `https://grain.free.componentdock.com`.
