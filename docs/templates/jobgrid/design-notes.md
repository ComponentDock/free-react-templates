# Jobgrid — Design Notes

Reference: **Jobhub** — `https://colorlib.com/wp/template/jobhub/`  
Live preview: `https://preview.colorlib.com/theme/jobhub/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jobhub-free-template.jpg  
Shipped: https://jobgrid.free.componentdock.com

JobGrid is a single-page job board landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Jobhub" free template (source: https://colorlib.com/wp/template/jobhub/), built under a DIFFERENT name (**JobGrid**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Raleway**, **Raleway:wght@300;400;500;600;700;800**

## Design tokens (`apps/jobgrid/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#367fff` | brand |
| `--color-brand-dark` | `#1d2547` | brand dark |
| `--color-brand-blue` | `#367fff` | brand blue |
| `--color-text-muted` | `#6d6e8d` | text muted |
| `--color-bg-gray` | `#f1f5f9` | bg gray |
| `--color-bg-dark` | `#1d2547` | bg dark |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with logo, navigation, and CTA | see fidelity note below |
| 2 | `Hero` | Hero section with search form | see fidelity note below |
| 3 | `BrandLogos` | Brand logos row | see fidelity note below |
| 4 | `Services` | Services category cards | see fidelity note below |
| 5 | `AboutSection` | About section with stats | see fidelity note below |
| 6 | `TopJobs` | Top jobs listing | see fidelity note below |
| 7 | `JobPost` | Job post feature section | see fidelity note below |
| 8 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 9 | `CtaBanner` | CTA banner | see fidelity note below |
| 10 | `Footer` | Footer with columns and newsletter | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The page SHALL display a sticky navbar with the JobGrid logo, desktop navigation links (Home, Categories, Pages, Log in), and a "Post a Job" CTA button. On mobile, the navbar SHALL collapse into a hamburger menu.

### `Hero`
The page SHALL display a hero section with a "Find your dream job" heading, a search form (keyword input, location input, category dropdown, search button), and popular search tags.

### `BrandLogos`
The page SHALL display a row of 6 partner/company logos as social proof.

### `Services`
The page SHALL display a "Browse from over 2000+ jobs" heading and 6 category cards in a 3-column grid, each with an icon, title, description, and "Browse Job" link.

### `AboutSection`
The page SHALL display an about section with a stats counter ("89027+"), a "Want to hire perfect person?" heading, description text, and a "Browse Job" CTA button.

### `TopJobs`
The page SHALL display a "Browse top jobs" heading and 6 job listing cards in a 3-column grid, each with a job title, company name, and "Apply Now" button.

### `JobPost`
The page SHALL display a dark-background section with 2 feature cards: "Post a job" and "Browse for job", each with a description and CTA button.

### `Testimonials`
The page SHALL display customer testimonials with quote text, avatar, name, role, and dot navigation for switching between testimonials.

### `CtaBanner`
The page SHALL display a "Start finding your dream job" banner with a description and "Browse Job" CTA button.

### `Footer`
The page SHALL display a dark footer with: logo + description + social links, "Top categories" column, "For employer" column, "Company" column, newsletter subscribe form, and copyright with Component Dock link.

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
- **Provenance ban.** No file under `apps/jobgrid/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jobgrid/public/CNAME` = `jobgrid.free.componentdock.com`
  and the package `homepage` = `https://jobgrid.free.componentdock.com`.
