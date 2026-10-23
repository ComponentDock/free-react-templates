# Parapet — Design Notes

Reference: **Buildcraft** — `https://colorlib.com/wp/template/buildcraft/`  
Live preview: `https://preview.colorlib.com/theme/buildcraft/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/buildcraft-template-1771943678540.jpg  
Shipped: https://parapet.free.componentdock.com

Parapet is a single-page construction company landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Buildcraft" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Outfit**, **Outfit:wght@300;400;500;600;700;800**

## Design tokens (`apps/parapet/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fffbeb` | primary 50 |
| `--color-primary-100` | `#fef3c7` | primary 100 |
| `--color-primary-200` | `#fde68a` | primary 200 |
| `--color-primary-300` | `#fcd34d` | primary 300 |
| `--color-primary-400` | `#fbbf24` | primary 400 |
| `--color-primary-500` | `#f59e0b` | primary 500 |
| `--color-primary-600` | `#d97706` | primary 600 |
| `--color-primary-700` | `#b45309` | primary 700 |
| `--color-primary-800` | `#92400e` | primary 800 |
| `--color-primary-900` | `#78350f` | primary 900 |
| `--color-paper` | `#f9fafb` | paper |
| `--color-ink` | `#111827` | ink |
| `--color-body` | `#6b7280` | body |
| `--color-muted` | `#9ca3af` | muted |
| `--color-night` | `#030712` | night |
| `--color-carbon` | `#111827` | carbon |
| `--color-slate` | `#1f2937` | slate |
| `--font-sans` | `'Outfit', ui-sans-serif, system-ui, sans-serif` | Original font: "Outfit" (Google Fonts <link> in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Stats` | Stats strip | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Projects` | Projects section | see fidelity note below |
| 6 | `Results` | Results section | see fidelity note below |
| 7 | `Process` | Process section | see fidelity note below |
| 8 | `About` | About section | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `Contact` | Contact section | see fidelity note below |
| 11 | `Faq` | FAQ section | see fidelity note below |
| 12 | `Cta` | Emergency CTA section | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Parapet", anchor links to the page's sections, a "Get a Quote" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with an acceptance badge, a level-1 headline, a blurb, two call-to-action links, a stats row, and a construction image.

### `Stats`
The system SHALL render a stats strip with four labeled counts.

### `Services`
The system SHALL render a services section with a heading and six service cards, each with a title and description.

### `Projects`
The system SHALL render a projects section with a heading and four project cards, each with a year, location, title, and description.

### `Results`
The system SHALL render a before/after results gallery with a heading and two renovation pairs.

### `Process`
The system SHALL render a four-step process section with a heading.

### `About`
The system SHALL render an about section with a heading, a blurb, and a stats row.

### `Testimonials`
The system SHALL render a testimonials carousel with a heading, reviews, star ratings, and previous/next controls.

### `Contact`
The system SHALL render a "Request a Free Quote" section with a form and four contact detail cards.

### `Faq`
The system SHALL render an FAQ accordion with a heading and five questions, each expandable to reveal an answer.

### `Cta`
The system SHALL render an amber gradient call-to-action section with a heading, a blurb, and two links.

### `Footer`
The system SHALL render a dark footer with a brand blurb, three link columns, contact details, and a copyright line.

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
- **Provenance ban.** No file under `apps/parapet/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/parapet/public/CNAME` = `parapet.free.componentdock.com`
  and the package `homepage` = `https://parapet.free.componentdock.com`.
