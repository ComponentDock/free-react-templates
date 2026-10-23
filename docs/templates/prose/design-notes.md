# Prose — Design Notes

Reference: **Blogger** — `https://colorlib.com/wp/template/blogger/`  
Live preview: `https://preview.colorlib.com/theme/blogger/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/author-free-template.jpg — the ROW's slug `author`, not the spec's `blogger`  
Shipped: https://prose.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `author` for this app while the spec records `blogger`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Prose is a single-page blog/magazine landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Blogger" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Raleway**, **Raleway:wght@400;500;600;700;800;900**

## Design tokens (`apps/prose/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef5ee` | primary 50 |
| `--color-primary-100` | `#d5e8d5` | primary 100 |
| `--color-primary-200` | `#aed1ae` | primary 200 |
| `--color-primary-300` | `#87ba87` | primary 300 |
| `--color-primary-400` | `#5fa35f` | primary 400 |
| `--color-primary-500` | `#3d8b3d` | primary 500 |
| `--color-primary-600` | `#2d6e2d` | primary 600 |
| `--color-primary-700` | `#1f521f` | primary 700 |
| `--color-primary-800` | `#153a15` | primary 800 |
| `--color-primary-900` | `#0d250d` | primary 900 |
| `--color-accent-400` | `#17b978` | accent 400 |
| `--color-accent-500` | `#13a065` | accent 500 |
| `--color-navy` | `#263b5e` | navy |
| `--color-navy-dark` | `#1a2a42` | navy dark |
| `--font-display` | `'Raleway', sans-serif` | font display |
| `--font-body` | `'Open Sans', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `Partners` | — | no dedicated spec block |
| 4 | `AboutBook` | — | no dedicated spec block |
| 5 | `Stats` | — | no dedicated spec block |
| 6 | `Chapters` | Category area | see fidelity note below |
| 7 | `Services` | — | no dedicated spec block |
| 8 | `Testimonials` | — | no dedicated spec block |
| 9 | `AuthorBio` | — | no dedicated spec block |
| 10 | `Contact` | — | no dedicated spec block |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Prose", anchor links to the page's sections, a dropdown menu, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-screen hero banner with a background image, a dark overlay, a headline, and a meta bar with likes/comments and author information.

### `Partners`
*anchors only* — Partners

### `AboutBook`
*anchors only* — About the book

### `Stats`
*anchors only* — Statistics

### `Chapters`
The system SHALL render a "Latest News from all categories" section with three category cards, each with an image, a date chip, and a title, plus carousel navigation controls.

### `Services`
*anchors only* — Services · What We Offer

### `Testimonials`
*anchors only* — Testimonials · Kind Words From Readers

### `AuthorBio`
*anchors only* — Author biography · About The Author · Eleanor Quinn · Portland, Oregon

### `Contact`
*anchors only* — Contact · Your name · Your email · Subject · Message

### `Footer`
The system SHALL render a dark footer with a link column, a newsletter signup form, an Instagram-style image grid, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/prose/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/prose/public/CNAME` = `prose.free.componentdock.com`
  and the package `homepage` = `https://prose.free.componentdock.com`.
