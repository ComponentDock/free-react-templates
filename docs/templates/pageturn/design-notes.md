# Pageturn — Design Notes

Reference: **Author** — `https://colorlib.com/wp/template/author/`  
Live preview: `https://preview.colorlib.com/theme/author/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/author-free-template.jpg  
Shipped: https://pageturn.free.componentdock.com

PageTurn is a single-page author/book landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Author" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/pageturn/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#17b978` | Brand accent — green #17b978 from the original design. |
| `--color-brand-dark` | `#14a369` | brand dark |
| `--color-primary-50` | `#e7f1ff` | Primary button — blue #007bff from the original design. |
| `--color-primary-100` | `#b3d1ff` | primary 100 |
| `--color-primary-200` | `#80b2ff` | primary 200 |
| `--color-primary-300` | `#4d92ff` | primary 300 |
| `--color-primary-400` | `#1a72ff` | primary 400 |
| `--color-primary-500` | `#007bff` | primary 500 |
| `--color-primary-600` | `#0069d9` | primary 600 |
| `--color-primary-700` | `#0053b3` | primary 700 |
| `--color-primary-800` | `#003d8c` | primary 800 |
| `--color-primary-900` | `#002766` | primary 900 |
| `--color-navy` | `#263b5e` | Navy counter text — #263b5e. |
| `--color-muted` | `#6c757d` | Muted text — #6c757d. |
| `--color-ink` | `#212529` | Body text — #212529. |
| `--color-paper` | `#f8f9fa` | Light section background — #f8f9fa. |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Typography |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Partners` | Partner logos | see fidelity note below |
| 4 | `About` | About The Book | see fidelity note below |
| 5 | `Stats` | Stats counters | see fidelity note below |
| 6 | `Chapter` | Chapter section | see fidelity note below |
| 7 | `Services` | Services | see fidelity note below |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `MyBooks` | My Books grid | see fidelity note below |
| 10 | `AuthorBio` | Author Bio | see fidelity note below |
| 11 | `Contact` | Contact section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed top navigation bar with the brand name "PageTurn." and links to all sections.

### `Hero`
The system SHALL render a full-height hero section with a dark overlay, subheading, heading, description, CTA button, and illustration.

### `Partners`
The system SHALL render a row of 5 publisher/partner logos on a white background.

### `About`
The system SHALL render a two-column section with a background image on the left and 3 feature cards on the right.

### `Stats`
The system SHALL render 4 stat counter cards over a background image with overlay.

### `Chapter`
The system SHALL render a chapter/TOC section with a sidebar listing 8 chapter links and a content panel.

### `Services`
The system SHALL render 3 service cards with icons, headings, and descriptions on a light background.

### `Testimonials`
The system SHALL render a testimonials section with a dark background image, overlay, and 4 testimonial cards.

### `MyBooks`
The system SHALL render an 8-card book cover grid with hover overlays showing title and genre.

### `AuthorBio`
The system SHALL render a two-column author bio with portrait on the left and details list on the right.

### `Contact`
The system SHALL render 4 contact info cards with circular green icons and a contact form beside a map placeholder.

### `Footer`
The system SHALL render a dark footer with 4 columns and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/pageturn/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pageturn/public/CNAME` = `pageturn.free.componentdock.com`
  and the package `homepage` = `https://pageturn.free.componentdock.com`.
