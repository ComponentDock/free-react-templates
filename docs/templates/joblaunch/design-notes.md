# Joblaunch — Design Notes

Reference: **Jobstart** — `https://colorlib.com/wp/template/jobstart/`  
Live preview: `https://preview.colorlib.com/theme/jobstart/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jobstart-free-template.jpg  
Shipped: https://joblaunch.free.componentdock.com

A Job Portal template with header/nav, hero, recent jobs, features and blog sections. Recreation of ColorLib's **Jobstart** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:wght@300;400;600;700;800;900**

## Design tokens (`apps/joblaunch/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#26baee` | primary |
| `--color-primary-dark` | `#1fa0cc` | primary dark |
| `--color-ink` | `#25262a` | ink |
| `--color-ink-muted` | `#4d4d4d` | ink muted |
| `--color-bg-light` | `#f8f9fa` | bg light |
| `--color-bg-alt` | `#e6e7e9` | bg alt |
| `--color-bg-dark` | `#393e46` | bg dark |
| `--color-border-light` | `#edf0f5` | border light |
| `--font-sans` | `'Nunito Sans', sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays brand and navigation | see fidelity note below |
| 2 | `Hero` | Hero section with tabbed search form | see fidelity note below |
| 3 | `RecentJobs` | Recent Jobs section with listings and pagination | see fidelity note below |
| 4 | `Features` | Features section with 6 cards | see fidelity note below |
| 5 | `Testimonials` | Testimonials section | see fidelity note below |
| 6 | `Blog` | Blog section with cards | see fidelity note below |
| 7 | `Newsletter` | Newsletter subscription form | see fidelity note below |
| 8 | `Footer` | Footer with columns and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL show "JobLaunch" as the brand name and navigation links for Home, Category, Blog, About, and Contact, plus a "+ Post a Job" CTA button.

### `Hero`
The hero SHALL display a headline "Largest Job Site On The Net" with a tabbed search form supporting both job seekers and employers.

### `RecentJobs`
The recent jobs section SHALL display at least 9 job items with type badges, company info, location, favorite button, and apply button, plus pagination controls.

### `Features`
The features section SHALL display 6 feature cards in a grid, each with an icon, title, and description.

### `Testimonials`
The testimonials section SHALL display employer testimonials with avatars, names, roles, and quotes.

### `Blog`
The blog section SHALL display 4 blog cards in a grid with images, author info, dates, titles, and excerpts.

### `Newsletter`
The newsletter section SHALL display a subscription form with email input and send button on a blue background.

### `Footer`
The footer SHALL display 5 columns of links, contact information, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/joblaunch/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/joblaunch/public/CNAME` = `joblaunch.free.componentdock.com`
  and the package `homepage` = `https://joblaunch.free.componentdock.com`.
