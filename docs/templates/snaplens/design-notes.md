# Snaplens — Design Notes

Reference: **Halo** — `https://colorlib.com/wp/template/halo/`  
Live preview: `https://preview.colorlib.com/theme/halo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/halo-free-template.jpg  
Shipped: https://snaplens.free.componentdock.com

Recreate the ColorLib "Halo" photography portfolio template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app. The original is a dark-themed photography portfolio with hero slider, intro section, portfolio grid, milestones counters, services, contact form, and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**

## Design tokens (`apps/snaplens/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-ink-50` | `#f8f8f8` | ink 50 |
| `--color-ink-100` | `#f3f3f3` | ink 100 |
| `--color-ink-200` | `#d3d3d3` | ink 200 |
| `--color-ink-400` | `#868686` | ink 400 |
| `--color-ink-500` | `#7a7a7a` | ink 500 |
| `--color-ink-700` | `#222121` | ink 700 |
| `--color-ink-800` | `#1a1919` | ink 800 |
| `--color-ink-900` | `#111111` | ink 900 |
| `--color-accent` | `#cc1847` | accent |
| `--color-accent-light` | `#e83a6a` | accent light |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with logo, navigation links, search, and mobile toggle | see fidelity note below |
| 2 | `Hero` | Hero section with title and subtitle | see fidelity note below |
| 3 | `Intro` | Intro section with heading, text, CTA, and image | see fidelity note below |
| 4 | `Portfolio` | Portfolio grid with 7 items and hover overlays | see fidelity note below |
| 5 | `Milestones` | Milestones section with 4 stat counters | see fidelity note below |
| 6 | `Services` | Services section with 4 service cards | see fidelity note below |
| 7 | `Contact` | Contact section with info and form | see fidelity note below |
| 8 | `Footer` | Footer with CTA, email, social icons, and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The app SHALL render a transparent header with the logo "SNAPLENS", desktop navigation links (Home, About, Services, Portfolio, Blog, Contact), a search toggle button, and a hamburger menu toggle for mobile viewports.

### `Hero`
The app SHALL render a full-viewport hero section with a dark background image overlay, the title "Snaplens", and the subtitle "We Create Awesome Photographies and More".

### `Intro`
The app SHALL render a two-column intro section with "Amazing Studio" subtitle, "We Are So Creative" heading, descriptive paragraph, "Read More" CTA button, and a studio image.

### `Portfolio`
The app SHALL render a 7-item portfolio grid with masonry-like layout (varying widths), each item showing a background image with a hover overlay containing title and category.

### `Milestones`
The app SHALL render a dark-background milestones section with 4 statistics: 48 Video Games, 7 Awards Won, 23K Pictures Taken, 19 Video Tutorials.

### `Services`
The app SHALL render a light-background services section with "Amazing Studio" subtitle, "See What We Offer" heading, and 4 service cards (Video Footages, Photo Shootings, Photo Albums, Original Ideas) in a 2-column grid.

### `Contact`
The app SHALL render a dark-background contact section with "Stay in Touch" heading, contact information (phone, email, address), and a contact form with name, email, subject, message fields, and Send button.

### `Footer`
The app SHALL render a dark-background footer with "Let's Work Together!" heading, email address, 4 social icon links, and a "More templates at Component Dock" link pointing to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/snaplens/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/snaplens/public/CNAME` = `snaplens.free.componentdock.com`
  and the package `homepage` = `https://snaplens.free.componentdock.com`.
