# Hireflow — Design Notes

Reference: **Joblisting** — `https://colorlib.com/wp/template/joblisting/`  
Live preview: `https://preview.colorlib.com/theme/joblisting/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/joblisting-free-template.jpg  
Shipped: https://hireflow.free.componentdock.com

Recreation of ColorLib "Joblisting" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application. The original is a job listing / recruitment platform landing page with a hero search, features grid, popular job posts carousel, featured categories, recent job listings, CTA banner, app download section, and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/hireflow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#795fff` | brand |
| `--color-brand-light` | `#bfacff` | brand light |
| `--color-brand-gradient-start` | `#bfacff` | brand gradient start |
| `--color-brand-gradient-end` | `#795fff` | brand gradient end |
| `--color-accent` | `#49e4fa` | accent |
| `--color-accent-dark` | `#3ccde0` | accent dark |
| `--color-surface` | `#f9f9ff` | surface |
| `--color-surface-alt` | `#fbfcff` | surface alt |
| `--color-dark-bg` | `#1e2235` | dark bg |
| `--color-dark-card` | `#222222` | dark card |
| `--color-footer-bg` | `#222222` | footer bg |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and auth buttons | see fidelity note below |
| 2 | `Hero` | Hero banner with search form | see fidelity note below |
| 3 | `Features` | Features section with four cards | see fidelity note below |
| 4 | `PopularPosts` | Popular posts with job cards | see fidelity note below |
| 5 | `Categories` | Featured job categories | see fidelity note below |
| 6 | `RecentJobs` | Recent job listings | see fidelity note below |
| 7 | `CtaBanner` | CTA banner with action buttons | see fidelity note below |
| 8 | `DownloadApp` | Download app section | see fidelity note below |
| 9 | `Footer` | Footer with newsletter and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky navbar with logo, navigation links (Home, About Us, Category, Price, Blog, Contact), and Signup/Login pill buttons. The navbar SHALL be responsive with a mobile menu toggle.

### `Hero`
The template SHALL display a full-width hero banner with a purple gradient overlay, a headline showing "1500+ Jobs posted last week", and a search form with text input, location dropdown, category dropdown, and search button.

### `Features`
The template SHALL display four feature cards (Searching, Applying, Security, Notifications) each with an icon, title, and description.

### `PopularPosts`
The template SHALL display a grid of job post cards, each with a thumbnail image, title, location, description, and "View Job Post" button.

### `Categories`
The template SHALL display six category cards (Accounting, Development, Technology, Media & News, Medical, Marketing) with icons and labels.

### `RecentJobs`
The template SHALL display recent job listing cards with job title, company, location, type, salary, and "Apply Now" button.

### `CtaBanner`
The template SHALL display a call-to-action banner with purple gradient background, headline "Join us today without any hesitation", and two buttons: "I am a Candidate" and "Request Free Demo".

### `DownloadApp`
The template SHALL display a download section with a phone mockup image, headline "Download the HireFlow App Today!", description text, and App Store / Play Store download buttons.

### `Footer`
The template SHALL display a footer with Top Products links, Newsletter signup form, social media icons, and copyright text linking to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/hireflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/hireflow/public/CNAME` = `hireflow.free.componentdock.com`
  and the package `homepage` = `https://hireflow.free.componentdock.com`.
