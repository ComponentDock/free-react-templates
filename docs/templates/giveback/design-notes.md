# Giveback — Design Notes

Reference: **Charitee** — `https://colorlib.com/wp/template/charitee/`  
Live preview: `https://preview.colorlib.com/theme/charitee/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/charitee-colorlib-template.jpg  
Shipped: https://giveback.free.componentdock.com

Giveback is a single-page charity / non-profit landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Charitee" design (https://colorlib.com/wp/template/charitee/), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Jost**, **Jost:wght@300;400;500;600;700**, **Rubik**

## Design tokens (`apps/giveback/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f15b43` | brand |
| `--color-teal` | `#65c9bb` | teal |
| `--color-flame` | `#ff6f00` | flame |
| `--color-navy` | `#263b5c` | navy |
| `--color-cream` | `#fcf2eb` | cream |
| `--color-ink` | `#777` | ink |
| `--color-primary-50` | `#fef1ee` | primary 50 |
| `--color-primary-100` | `#fddcd5` | primary 100 |
| `--color-primary-200` | `#fbb3a6` | primary 200 |
| `--color-primary-300` | `#f98a76` | primary 300 |
| `--color-primary-400` | `#f76e56` | primary 400 |
| `--color-primary-500` | `#f15b43` | primary 500 |
| `--color-primary-600` | `#d84a33` | primary 600 |
| `--color-primary-700` | `#b83a26` | primary 700 |
| `--color-primary-800` | `#932c1c` | primary 800 |
| `--color-primary-900` | `#6e1f13` | primary 900 |
| `--font-display` | `'Jost', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `UpcomingProgram` | Upcoming program | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Causes` | Causes | see fidelity note below |
| 6 | `WhatWeDo` | What we are doing | see fidelity note below |
| 7 | `Services` | Services | see fidelity note below |
| 8 | `Blog` | Blog | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Giveback", a "Home" link, section links, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-height hero band with a level-1 headline, a supporting paragraph, and a call-to-action button.

### `UpcomingProgram`
The system SHALL render an "Upcoming Program" strip with a photo, a heading, and two call-to-action buttons.

### `About`
The system SHALL render an about section with a heading, supporting copy, and a "Discover More" button.

### `Causes`
The system SHALL render a row of three fundraising cause cards, each with a title, copy, goal/raised figures, and a donate button.

### `WhatWeDo`
The system SHALL render a "What we are doing" section with a photo, a label, a heading, supporting copy, and a "Join Us Today" button.

### `Services`
The system SHALL render a "How we help people" section with at least three service cards.

### `Blog`
The system SHALL render a "Latest Blog" section with three news cards.

### `Footer`
The system SHALL render a footer with the site name, navigation links, contact details, a support CTA, social links, and the Component Dock attribution.

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
- **Provenance ban.** No file under `apps/giveback/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/giveback/public/CNAME` = `giveback.free.componentdock.com`
  and the package `homepage` = `https://giveback.free.componentdock.com`.
