# Byteops — Design Notes

Reference: **Digilab** — `https://colorlib.com/wp/template/digilab/`  
Live preview: `https://preview.colorlib.com/theme/digilab/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/digilab-free-template.jpg  
Shipped: https://byteops.free.componentdock.com

Recreate ColorLib "DigiLab" as a React 19 + Vite + Tailwind CSS 4 + TypeScript template under the name "ByteOps".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:wght@400;600;700**

## Design tokens (`apps/byteops/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-ops-50` | `#e6faf0` | ByteOps brand palette — bright green #31de79 |
| `--color-ops-100` | `#b3f2d5` | ops 100 |
| `--color-ops-200` | `#80e9b9` | ops 200 |
| `--color-ops-300` | `#4de09e` | ops 300 |
| `--color-ops-400` | `#31de79` | ops 400 |
| `--color-ops-500` | `#27b261` | ops 500 |
| `--color-ops-600` | `#1d8a4b` | ops 600 |
| `--color-ops-700` | `#146336` | ops 700 |
| `--color-ops-800` | `#0b3d20` | ops 800 |
| `--color-ops-900` | `#061f10` | ops 900 |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with mobile toggle | see fidelity note below |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Services` | Tabbed services section | see fidelity note below |
| 4 | `Features` | — | no dedicated spec block |
| 5 | `Projects` | — | no dedicated spec block |
| 6 | `About` | — | no dedicated spec block |
| 7 | `Team` | Team section | see fidelity note below |
| 8 | `Stats` | Stats counters | see fidelity note below |
| 9 | `Process` | — | no dedicated spec block |
| 10 | `Partners` | App renders all sections | see fidelity note below |
| 11 | `Faq` | FAQ accordion | see fidelity note below |
| 12 | `Testimonials` | — | no dedicated spec block |
| 13 | `Blog` | Blog section | see fidelity note below |
| 14 | `Contact` | Contact form | see fidelity note below |
| 15 | `Footer` | Footer with Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar shows all section links on desktop and a toggleable mobile menu.

### `Hero`
*anchors only* — Welcome to ByteOps · Small Details Make A Big · Impression · Get in touch

### `Services`
The services section shows 7 service tabs with switchable content panels.

### `Features`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Projects`
*anchors only* — Accomplishments · Our Projects · A showcase of our recent work across web design, development, and digital strategy.

### `About`
*anchors only* — Welcome to ByteOps · We Are Digital Agency · Years of experience

### `Team`
The team section shows 4 staff members with names and positions.

### `Stats`
The stats section displays 4 numeric values.

### `Process`
*anchors only* — Our Process · How We Work

### `Partners`
The app renders without errors and all 15 sections are present in the DOM.

### `Faq`
The FAQ section shows 5 questions with expand/collapse behavior.

### `Testimonials`
*anchors only* — Happy Clients

### `Blog`
The blog section shows 3 blog post cards with titles.

### `Contact`
The contact section has a form with inputs and a submit button.

### `Footer`
The footer links to componentdock.com.

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
- **Provenance ban.** No file under `apps/byteops/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/byteops/public/CNAME` = `byteops.free.componentdock.com`
  and the package `homepage` = `https://byteops.free.componentdock.com`.
