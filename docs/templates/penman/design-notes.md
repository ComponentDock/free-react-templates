# Penman — Design Notes

Reference: **Author** — `https://colorlib.com/wp/template/author/`  
Live preview: `https://preview.colorlib.com/theme/author/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/author-free-template.jpg  
Shipped: https://penman.free.componentdock.com

Penman is a personal author/book landing template with a clean, literary aesthetic. It features a full-height hero with book illustration, partner logos, about section, animated counters, chapter browser, testimonial carousel, book gallery, author bio, contact form with map, and a four-column footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700**, **Raleway**

## Design tokens (`apps/penman/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e6f7ef` | primary 50 |
| `--color-primary-100` | `#b3e8d2` | primary 100 |
| `--color-primary-200` | `#80d9b5` | primary 200 |
| `--color-primary-300` | `#4dca98` | primary 300 |
| `--color-primary-400` | `#17b978` | primary 400 |
| `--color-primary-500` | `#14a36a` | primary 500 |
| `--color-primary-600` | `#118154` | primary 600 |
| `--color-primary-700` | `#0e6843` | primary 700 |
| `--color-primary-800` | `#0b5033` | primary 800 |
| `--color-primary-900` | `#083823` | primary 900 |
| `--color-btn` | `#007bff` | Button primary (Bootstrap blue from ColorLib .btn-primary). |
| `--color-btn-hover` | `#0069d9` | btn hover |
| `--color-mist` | `#f8f9fa` | Light section backgrounds (ColorLib .bg-light / #f8f9fa). |
| `--color-smoke` | `#6c757d` | Muted text (ColorLib #6c757d). |
| `--color-ink` | `#212529` | Dark ink for headings. |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Raleway (headings) + Open Sans (body) via Google Fonts. |
| `--font-display` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `Partners` | Partners Section | see fidelity note below |
| 4 | `About` | About Section | see fidelity note below |
| 5 | `Counter` | Counter Section | see fidelity note below |
| 6 | `Chapter` | Chapter Section | see fidelity note below |
| 7 | `Testimonials` | Testimonials Section | see fidelity note below |
| 8 | `MyBooks` | My Books Section | see fidelity note below |
| 9 | `AuthorBio` | Author Bio Section | see fidelity note below |
| 10 | `Contact` | Contact Section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a sticky dark navbar with "Penman." brand (green dot accent), and navigation links: Home, About, Chapter, Reviews, My Books, Author, Contact.

### `Hero`
The template SHALL render a full-height hero section with a book headline, description, and CTA button.

### `Partners`
The template SHALL render 5 partner logo placeholders in a row.

### `About`
The template SHALL render a split about section with image and book description.

### `Counter`
The template SHALL render animated stat counters for book metrics.

### `Chapter`
The template SHALL render a chapter browser with sidebar navigation and content panels.

### `Testimonials`
The template SHALL render customer testimonials on a dark background.

### `MyBooks`
The template SHALL render a grid of book cover cards.

### `AuthorBio`
The template SHALL render an author bio with info list and CTA.

### `Contact`
The template SHALL render a contact form with info cards and map placeholder.

### `Footer`
The template SHALL render a four-column footer with Component Dock branding.

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
- **Provenance ban.** No file under `apps/penman/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/penman/public/CNAME` = `penman.free.componentdock.com`
  and the package `homepage` = `https://penman.free.componentdock.com`.
