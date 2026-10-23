# Jobhunt — Design Notes

Reference: **Jobsco** — `https://colorlib.com/wp/template/jobsco/`  
Live preview: `https://preview.colorlib.com/theme/jobsco/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jobsco-free-template.jpg  
Shipped: https://jobhunt.free.componentdock.com

A Job Portal template with header/nav, hero, top jobs, about and job categories sections. Recreation of ColorLib's **Jobsco** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:wght@400;500;700**

## Design tokens (`apps/jobhunt/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#000dff` | brand |
| `--color-brand-dark` | `#00044a` | brand dark |
| `--color-brand-green` | `#27cb8b` | brand green |
| `--color-text-muted` | `#6d6e8d` | text muted |
| `--color-bg-gray` | `#f1f5f9` | bg gray |
| `--color-bg-alt` | `#fbfbfb` | bg alt |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/jobhunt/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `TopJobs` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Categories` | — | no dedicated spec block |
| 6 | `Testimonials` | — | no dedicated spec block |
| 7 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle menu · JobHunt · Home · Browse Job · Page · Blog

### `Hero`
*anchors only* — Easiest way to find a perfect job · Find Your Next Dream Job · Looking For a Job? · Find Talent

### `TopJobs`
*anchors only* — Browse From Our Top Jobs · Remote · Apply Now

### `About`
*anchors only* — We Build Lasting Relationships Between Candidates &amp; Businesses · Find Talent · Talents

### `Categories`
*anchors only* — Browse From Top Categories · Browse Job

### `Testimonials`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Footer`
*anchors only* — Instagram · Facebook · Twitter · Subscribe

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
- **Provenance ban.** No file under `apps/jobhunt/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jobhunt/public/CNAME` = `jobhunt.free.componentdock.com`
  and the package `homepage` = `https://jobhunt.free.componentdock.com`.
