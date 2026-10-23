# Foundry — Design Notes

Reference: **Architect** — `https://colorlib.com/wp/template/architect/`  
Live preview: `https://preview.colorlib.com/theme/architect/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/architect-free-template.jpg  
Shipped: https://foundry.free.componentdock.com

Foundry is a single-page construction/architecture services landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Architect" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600;700;800**

## Design tokens (`apps/foundry/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffcd00` | brand |
| `--color-brand-dark` | `#f7af1d` | Deeper yellow for hover states. |
| `--color-ink` | `#252525` | Ink — headings and dark text (#252525, #333333 from the stylesheet). |
| `--color-paper` | `#fafafa` | Light section backgrounds (#fafafa from the stylesheet). |
| `--color-mist` | `#999999` | Muted secondary text (#999999). |
| `--color-coal` | `#1e2022` | Footer charcoal (#1E2022 from the original stylesheet). |
| `--color-primary-50` | `#fffbe6` | primary 50 |
| `--color-primary-100` | `#fff5c2` | primary 100 |
| `--color-primary-200` | `#ffec8a` | primary 200 |
| `--color-primary-300` | `#ffe04d` | primary 300 |
| `--color-primary-400` | `#ffd21a` | primary 400 |
| `--color-primary-500` | `#ffcd00` | primary 500 |
| `--color-primary-600` | `#d9a800` | primary 600 |
| `--color-primary-700` | `#b38900` | primary 700 |
| `--color-primary-800` | `#8f6d00` | primary 800 |
| `--color-primary-900` | `#755a00` | primary 900 |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Original font: "Montserrat" (display + body), Google Fonts. |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `Welcome` | Welcome section | see fidelity note below |
| 4 | `Work` | Works section | see fidelity note below |
| 5 | `Counters` | — | no dedicated spec block |
| 6 | `Services` | Services section | see fidelity note below |
| 7 | `Blog` | Blog section | see fidelity note below |
| 8 | `Engineers` | Engineers section | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `Newsletter` | Newsletter section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Foundry", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero slider with a headline and a call-to-action.

### `Welcome`
The system SHALL render a welcome section with a heading and a "25 Years Experience" stat.

### `Work`
The system SHALL render a works section with a heading, at least three project cards, and a "View All Projects" button.

### `Counters`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Services`
The system SHALL render a services section listing at least six services.

### `Blog`
The system SHALL render a blog section with at least three post cards.

### `Engineers`
The system SHALL render an engineers section listing team members.

### `Testimonials`
The system SHALL render a testimonials section with client quotes.

### `Newsletter`
The system SHALL render a newsletter signup section with an email input and a subscribe button.

### `Footer`
The system SHALL render a footer with link columns, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/foundry/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/foundry/public/CNAME` = `foundry.free.componentdock.com`
  and the package `homepage` = `https://foundry.free.componentdock.com`.
