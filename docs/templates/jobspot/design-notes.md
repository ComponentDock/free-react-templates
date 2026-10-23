# Jobspot — Design Notes

Reference: **Jobpro** — `https://colorlib.com/wp/template/jobpro/`  
Live preview: `https://preview.colorlib.com/theme/jobpro/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jobpro-free-template.jpg  
Shipped: https://jobspot.free.componentdock.com

JobSpot is a single-page job board landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "JobPro" design (https://colorlib.com/wp/template/jobpro/), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Source Sans 3**, **Source Sans 3:wght@300;400;600;700**

## Design tokens (`apps/jobspot/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | brand |
| `--color-brand-green` | `#91c235` | brand green |
| `--color-brand-dark` | `#1d2124` | brand dark |
| `--color-brand-darker` | `#171717` | brand darker |
| `--color-brand-gray` | `#6c757d` | brand gray |
| `--color-brand-light` | `#f8f9fa` | brand light |
| `--color-brand-surface` | `#f7f7f7` | brand surface |
| `--color-brand-parallax` | `#46b3e6` | brand parallax |
| `--font-sans` | `'Source Sans 3', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `JobSearchBar` | Job search bar | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Categories` | Categories section | see fidelity note below |
| 6 | `FeaturedJobs` | Featured jobs section | see fidelity note below |
| 7 | `CtaBanner` | CTA banner | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Candidates` | Latest candidates section | see fidelity note below |
| 10 | `RecentBlog` | Recent blog section | see fidelity note below |
| 11 | `Newsletter` | Newsletter section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a dark navbar (#1d2124) with brand name "JobSpot." on the left, navigation links (Home, Find Jobs, Candidates, Blog, Contact) on the right, and a "Post a Job" CTA button styled with secondary green (#91c235). The navbar SHALL collapse into a hamburger menu on mobile viewports.

### `Hero`
The system SHALL render a full-height hero section with a background image, dark overlay, centered text including a subtitle, headline with job count ("10,650+ Jobs Listed Here!"), descriptive paragraph, and two CTA buttons ("Contact us" primary, "Search Job" secondary).

### `JobSearchBar`
The system SHALL render a dark gray search bar section with two pill-style tabs ("Find a Job" and "Find a Candidate"). Each tab shows a form with keyword input, category select, location input, and a Search button. The "Find a Job" tab SHALL be active by default.

### `Services`
The system SHALL render a 4-column grid of service cards, each with an icon, heading, and description. Headings: "Search Millions of Jobs", "Easy To Manage Jobs", "Top Careers", "Search Expert Candidates".

### `Categories`
The system SHALL render a horizontal scrollable carousel of category cards. Each card shows an icon, category name, and open position count. The section heading reads "Explore by Category".

### `FeaturedJobs`
The system SHALL render a list of job cards with type badge, title, company, location, category tag, date, salary, "Apply Job" button, and heart/favorite icon. The section heading reads "Featured Jobs Posts For This Week".

### `CtaBanner`
The system SHALL render a centered CTA section with heading "Get Started Your New Job With Us", a description paragraph, and a "Get Started" secondary button.

### `Testimonials`
The system SHALL render a dark background image section with overlay, heading "Happy Clients", and a carousel of testimonial cards with quote text, avatar, name, and position.

### `Candidates`
The system SHALL render a carousel of candidate profile cards with photo, name, location, and short bio. The section heading reads "Latest Candidates".

### `RecentBlog`
The system SHALL render a 4-column grid of blog cards with thumbnail image, date/author/comments metadata, title, and excerpt. The section heading reads "Recent Blog".

### `Newsletter`
The system SHALL render a parallax background section (blue #46b3e6 fallback) with heading "Subscribe to our Newsletter", description text, email input, and "Subscribe" button.

### `Footer`
The system SHALL render a dark footer (#1d2124) with 5 columns: brand blurb + social icons, Employers links, Candidate links, Account links, Contact info. The footer SHALL include a copyright bar linking to https://www.componentdock.com/ (branded "Component Dock").

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
- **Provenance ban.** No file under `apps/jobspot/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jobspot/public/CNAME` = `jobspot.free.componentdock.com`
  and the package `homepage` = `https://jobspot.free.componentdock.com`.
