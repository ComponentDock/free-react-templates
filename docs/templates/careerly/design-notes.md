# Careerly — Design Notes

Reference: **Jobfinder** — `https://colorlib.com/wp/template/jobfinder/`  
Live preview: `https://preview.colorlib.com/theme/jobfinder/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jobfinder-free-template.jpg  
Shipped: https://careerly.free.componentdock.com

A Job Board & Career Portal template with hero search, popular categories, recent jobs, featured jobs and cta banner sections. Recreation of ColorLib "Jobfinder" (https://colorlib.com/wp/template/jobfinder/).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans:wght@300;400;600;700**

## Design tokens (`apps/careerly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#28a745` | brand |
| `--color-brand-dark` | `#218838` | brand dark |
| `--color-surface` | `#f8f9fa` | surface |
| `--color-dark-bg` | `#0d0d0d` | dark bg |
| `--color-dark-card` | `#1a1a1a` | dark card |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero search section | see fidelity note below |
| 3 | `Categories` | Popular Categories | see fidelity note below |
| 4 | `RecentJobs` | Recent Jobs | see fidelity note below |
| 5 | `FeaturedJobs` | Featured Jobs | see fidelity note below |
| 6 | `Testimonials` | Testimonials | see fidelity note below |
| 7 | `CtaBanner` | CTA Banner | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar displays the "Careerly" logo and navigation links.

### `Hero`
The hero section displays a search form for finding jobs.

### `Categories`
The categories section displays a grid of job category cards.

### `RecentJobs`
The recent jobs section lists available job postings.

### `FeaturedJobs`
The featured jobs section shows highlighted job cards.

### `Testimonials`
The testimonials section displays user reviews.

### `CtaBanner`
The call-to-action banner encourages job search.

### `Footer`
The footer provides site navigation and branding.

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
- **Provenance ban.** No file under `apps/careerly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/careerly/public/CNAME` = `careerly.free.componentdock.com`
  and the package `homepage` = `https://careerly.free.componentdock.com`.
