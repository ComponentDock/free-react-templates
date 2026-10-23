# Vocare — Design Notes

Reference: **Skillhunt** — `https://colorlib.com/wp/template/skillhunt/`  
Live preview: `https://preview.colorlib.com/theme/skillhunt/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/skillhunt-free-template.jpg  
Shipped: https://vocare.free.componentdock.com

Vocare is a single-page job-board template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Skillhunt" design (see TEMPLATES.md — line 496; the same source is DUPLICATED at lines 1168 and 2007 — ALL THREE rows must be marked `[x]` when done), built under a NEW name with the monorepo stack: Vite + R…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Source Sans 3**, **Source Sans 3:ital,wght@0,300;0,400;0,600;0,700;1,400**

## Design tokens (`apps/vocare/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#206dfb` | brand |
| `--color-brand-start` | `#207dff` | brand start |
| `--color-brand-end` | `#a16ae8` | brand end |
| `--color-accent` | `#fdab44` | accent |
| `--color-peach` | `#ffefdb` | peach |
| `--color-cream` | `#fffaf5` | cream |
| `--color-mist` | `#f8f9fa` | mist |
| `--color-body` | `#999999` | body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `TopCategories` | Top Categories list | see fidelity note below |
| 4 | `CategoryList` | Top category strip | see fidelity note below |
| 5 | `Services` | Services band | see fidelity note below |
| 6 | `FeaturedJobs` | Featured jobs | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Candidates` | Latest candidates | see fidelity note below |
| 9 | `Blog` | Blog | see fidelity note below |
| 10 | `Newsletter` | Newsletter | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render the transparent navbar over the hero with links and two CTA buttons, switching to a fixed white bar on scroll.

### `Hero`
The system SHALL render the gradient hero with headline, stat counters and the tabbed search widget.

### `TopCategories`
The system SHALL render the 4×4 job-categories list.

### `CategoryList`
The system SHALL render the six-card category strip overlapping the hero's bottom edge.

### `Services`
The system SHALL render the gradient services band with four feature cards.

### `FeaturedJobs`
The system SHALL render the featured-jobs list of nine job post cards.

### `Testimonials`
The system SHALL render the testimonials section with five client quotes.

### `Candidates`
The system SHALL render the blue candidates band with six candidate cards.

### `Blog`
The system SHALL render the blog grid with four post cards.

### `Newsletter`
The system SHALL render the solid-blue newsletter band with the orange Subscribe button.

### `Footer`
The system SHALL render the white footer with four link columns, a contact widget and the copyright/credit row.

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
- **Provenance ban.** No file under `apps/vocare/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vocare/public/CNAME` = `vocare.free.componentdock.com`
  and the package `homepage` = `https://vocare.free.componentdock.com`.
