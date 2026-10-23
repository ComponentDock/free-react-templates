# Wagly — Design Notes

Reference: **Breed** — `https://colorlib.com/wp/template/breed/`  
Live preview: `https://preview.colorlib.com/theme/breed/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/breed-free-template.jpg  
Shipped: https://wagly.free.componentdock.com

Breed is a single-page dog-breed landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Breed" website template design (see TEMPLATES.md), built under the new name Wagly with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**

## Design tokens (`apps/wagly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffc107` | brand |
| `--color-brand-hover` | `#ffce3a` | brand hover |
| `--color-paper` | `#f8f9fa` | Light section background — team area (bg-light #f8f9fa). |
| `--color-night` | `#262626` | Footer background (#262626). |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Original font: "Open Sans" via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Team` | Team section | see fidelity note below |
| 5 | `Breeds` | Breed collections section | see fidelity note below |
| 6 | `Blog` | Blog section | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "wagly", links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-height hero slider with two slides, each with a headline, a short subheading, and two call-to-action buttons, plus prev/next controls.

### `About`
The system SHALL render an about section with a heading, a small sub heading, and two paragraphs of copy.

### `Team`
The system SHALL render a team section with a heading and four member cards.

### `Breeds`
The system SHALL render a breed collections section with a heading and six breed cards.

### `Blog`
The system SHALL render a blog section with a heading and three post cards, each with a date, title, excerpt, and a "Read more" button.

### `Footer`
The system SHALL render a footer with an about blurb, contact info, quick links, social icons, and a copyright line.

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
- **Provenance ban.** No file under `apps/wagly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wagly/public/CNAME` = `wagly.free.componentdock.com`
  and the package `homepage` = `https://wagly.free.componentdock.com`.
