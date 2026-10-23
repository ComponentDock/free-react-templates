# Pressline — Design Notes

Reference: **Publishing Company** — `https://colorlib.com/wp/template/publishing-company/`  
Live preview: `https://preview.colorlib.com/theme/publishing-company/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/publishingcompany-free-template.jpg  
Shipped: https://pressline.free.componentdock.com

Pressline is a publishing company landing page template, recreating the ColorLib "Publishing Company" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript app. It serves book publishers, authors, and literary businesses with sections for categories, new releases, testimonials, pricing, and contact.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lora**, **Lora:ital,wght@0,400;0,500;0,600;0,700;1,400**, **Roboto**

## Design tokens (`apps/pressline/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0f5f8` | primary 50 |
| `--color-primary-100` | `#dce8ef` | primary 100 |
| `--color-primary-200` | `#b8d1de` | primary 200 |
| `--color-primary-300` | `#95adbe` | primary 300 |
| `--color-primary-400` | `#7a97ae` | primary 400 |
| `--color-primary-500` | `#60819e` | primary 500 |
| `--color-primary-600` | `#4d6a82` | primary 600 |
| `--color-primary-700` | `#3a5063` | primary 700 |
| `--color-primary-800` | `#273643` | primary 800 |
| `--color-primary-900` | `#141d24` | primary 900 |
| `--color-surface` | `#ffffff` | surface |
| `--color-surface-alt` | `#f8f9fa` | surface alt |
| `--color-ink` | `#1a1a1a` | ink |
| `--color-smoke` | `#6c757d` | smoke |
| `--color-border` | `#dee2e6` | border |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Lora', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Navbar` | Mobile navbar toggle | see fidelity note below |
| 3 | `Hero` | — | no dedicated spec block |
| 4 | `Categories` | — | no dedicated spec block |
| 5 | `Counter` | Footer links to Component Dock | see fidelity note below |
| 6 | `AboutAuthors` | — | no dedicated spec block |
| 7 | `BooksNewRelease` | — | no dedicated spec block |
| 8 | `Testimonials` | Page renders all sections in correct order | see fidelity note below |
| 9 | `Packages` | — | no dedicated spec block |
| 10 | `Contact` | Contact form clears on submission | see fidelity note below |
| 11 | `Blog` | — | no dedicated spec block |
| 12 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Navbar`
The Navbar SHALL show a hamburger menu on mobile that toggles the mobile nav.

### `Hero`
*anchors only* — Good books don&apos;t give up all their secrets at once · View All Books · Explore Now

### `Categories`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Counter`
The Footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

### `AboutAuthors`
*anchors only* — Welcome to Pressline · Pressline Created By Authors · View All Our Authors

### `BooksNewRelease`
*anchors only* — Books New Release

### `Testimonials`
The template SHALL render the following sections top-to-bottom: TopBar, Navbar, Hero, Categories, Counter, AboutAuthors, BooksNewRelease, Testimonials, Packages, Contact, Blog, Footer.

### `Packages`
*anchors only* — Affordable Packages · Get Started

### `Contact`
The Contact section SHALL have a form that clears all fields on submit.

### `Blog`
*anchors only* — Recent Blog · Read More

### `Footer`
The Footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/pressline/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pressline/public/CNAME` = `pressline.free.componentdock.com`
  and the package `homepage` = `https://pressline.free.componentdock.com`.
