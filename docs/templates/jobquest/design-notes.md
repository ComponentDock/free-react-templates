# Jobquest — Design Notes

Reference: **Careers** — `https://colorlib.com/wp/template/careers/`  
Live preview: `https://preview.colorlib.com/theme/careers/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/careers-free-template.jpg  
Shipped: https://jobquest.free.componentdock.com

Recreation of ColorLib "Careers" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application. The original is a job board / career platform landing page with a hero search form, statistics counters, featured job listings, company logos, testimonials, and a call-to-action footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito:wght@400;600;700;800**

## Design tokens (`apps/jobquest/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#1644ba` | brand |
| `--color-brand-hover` | `#1747c3` | brand hover |
| `--color-brand-dark` | `#0f3090` | brand dark |
| `--color-text-primary` | `#212529` | text primary |
| `--color-text-secondary` | `#343a40` | text secondary |
| `--color-text-muted` | `#7f848c` | text muted |
| `--color-bg-light` | `#f8f9fa` | bg light |
| `--color-bg-gray` | `#ebeef0` | bg gray |
| `--color-border` | `#dee2e6` | border |
| `--color-footer-bg` | `#242424` | footer bg |
| `--color-footer-dark` | `#1c1c1c` | footer dark |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders correctly | see fidelity note below |
| 2 | `Hero` | Hero search form is interactive | see fidelity note below |
| 3 | `Statistics` | Statistics section displays counters | see fidelity note below |
| 4 | `JobListings` | Job listings render correctly | see fidelity note below |
| 5 | `CompanyLogos` | Company logos section displays | see fidelity note below |
| 6 | `Testimonials` | Testimonials carousel works | see fidelity note below |
| 7 | `CTA` | CTA section renders correctly | see fidelity note below |
| 8 | `Footer` | Footer renders correctly | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar displays the JobQuest logo, navigation links, and a Contact Us button.

### `Hero`
The hero section displays a search form with keyword input, location dropdown, job type dropdown, and search button.

### `Statistics`
The statistics section shows 4 counter values with labels.

### `JobListings`
The job listings section shows at least 6 job cards with details and pagination.

### `CompanyLogos`
The company logos section shows a heading and logo placeholders.

### `Testimonials`
The testimonials section shows a quote with avatar and attribution, with navigation controls.

### `CTA`
The call-to-action section displays a heading, subtitle, and Sign Up button.

### `Footer`
The footer displays link columns, social icons, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/jobquest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jobquest/public/CNAME` = `jobquest.free.componentdock.com`
  and the package `homepage` = `https://jobquest.free.componentdock.com`.
