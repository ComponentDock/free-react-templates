# Learnwise — Design Notes

Reference: **Clever** — `https://colorlib.com/wp/template/clever/`  
Live preview: `https://preview.colorlib.com/theme/clever/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/clever-free-template.jpg  
Shipped: https://learnwise.free.componentdock.com

Recreation of ColorLib's "Clever" template — an education and online courses website. The React version preserves the same section structure, design tokens, and layout patterns while using modern React 19 + Vite + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**, **Raleway**

## Design tokens (`apps/learnwise/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#3762f0` | Learnwise brand palette |
| `--color-primary-hover` | `#2c56df` | primary hover |
| `--color-accent` | `#e3d21b` | accent |
| `--color-footer-top` | `#252525` | footer top |
| `--color-footer-bottom` | `#1f1f1f` | footer bottom |
| `--color-register-overlay` | `rgba(214, 223, 251, 0.7)` | register overlay |
| `--font-heading` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | Raleway for headings, Open Sans for body (Google Fonts via index.html) |
| `--font-body` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopHeader` | TopHeader displays contact info and social links | see fidelity note below |
| 2 | `Navbar` | Navbar with navigation and actions | see fidelity note below |
| 3 | `Hero` | Hero section with parallax background | see fidelity note below |
| 4 | `CoolFacts` | CoolFacts section with four statistics | see fidelity note below |
| 5 | `PopularCourses` | PopularCourses section with three course cards | see fidelity note below |
| 6 | `BestTutors` | BestTutors section with carousel | see fidelity note below |
| 7 | `RegisterNow` | RegisterNow split section with form | see fidelity note below |
| 8 | `UpcomingEvents` | UpcomingEvents section with event cards | see fidelity note below |
| 9 | `Blog` | Blog section with two post cards | see fidelity note below |
| 10 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `TopHeader`
The template SHALL render a top header bar with contact information (phone, email) and social media icon links.

### `Navbar`
The template SHALL render a sticky navbar with logo, navigation links, search icon, and Register/Login buttons.

### `Hero`
The template SHALL render a full-width hero section with a parallax background image, dark overlay, heading, and CTA button.

### `CoolFacts`
The template SHALL render a four-column grid of statistics with icons, numbers, and labels.

### `PopularCourses`
The template SHALL render a three-column grid of course cards with images, titles, metadata, descriptions, and fees.

### `BestTutors`
The template SHALL render a horizontal scrollable carousel of tutor cards with photos, names, roles, bios, and social icons.

### `RegisterNow`
The template SHALL render a split section with a registration form on the left and CTA text on the right.

### `UpcomingEvents`
The template SHALL render a three-column grid of event cards with images, date badges, titles, times, and fees.

### `Blog`
The template SHALL render a two-column grid of blog post cards with images, headlines, metadata, and excerpts.

### `Footer`
The template SHALL render a dark footer with logo, copyright, contact info, social links, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/learnwise/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/learnwise/public/CNAME` = `learnwise.free.componentdock.com`
  and the package `homepage` = `https://learnwise.free.componentdock.com`.
