# Verdict — Design Notes

Reference: **Legaledge 2** — `https://colorlib.com/wp/template/legaledge-2/`  
Live preview: `https://preview.colorlib.com/theme/legaledge-2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/legaledge-template-1770211287987.jpg  
Shipped: https://verdict.free.componentdock.com

Verdict is a single-page law firm landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Legaledge 2" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Playfair Display**, **Playfair Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600**

## Design tokens (`apps/verdict/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0f4f8` | primary 50 |
| `--color-primary-100` | `#d9e2ec` | primary 100 |
| `--color-primary-200` | `#bcccdc` | primary 200 |
| `--color-primary-300` | `#9fb3c8` | primary 300 |
| `--color-primary-400` | `#627d98` | primary 400 |
| `--color-primary-500` | `#486581` | primary 500 |
| `--color-primary-600` | `#334e68` | primary 600 |
| `--color-primary-700` | `#243b53` | primary 700 |
| `--color-primary-800` | `#1f3248` | primary 800 |
| `--color-primary-900` | `#102a43` | primary 900 |
| `--color-primary-950` | `#0a1929` | primary 950 |
| `--color-accent-100` | `#fdf3d8` | accent 100 |
| `--color-accent-200` | `#f9e5a8` | accent 200 |
| `--color-accent-300` | `#f2d977` | accent 300 |
| `--color-accent-400` | `#facc15` | accent 400 |
| `--color-accent-500` | `#c9a227` | accent 500 |
| `--color-accent-600` | `#a78419` | accent 600 |
| `--color-accent-700` | `#8a6914` | accent 700 |
| `--font-display` | `'Playfair Display', Georgia, serif` | Display + body fonts — the original's pairing via Google Fonts <link> |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Top contact bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `PracticeAreas` | Practice areas section | see fidelity note below |
| 4 | `Legacy` | Legacy section | see fidelity note below |
| 5 | `Attorneys` | Attorneys section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Cta` | — | no dedicated spec block |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a dark top strip above the navbar with firm contact details.

### `Hero`
The system SHALL render a full-width navy hero with a badge, a level-1 headline, two call-to-action buttons, trust indicators, and a case-evaluation form.

### `PracticeAreas`
The system SHALL render a practice areas section with exactly six cards.

### `Legacy`
The system SHALL render a value-proposition section with four cards and a stats row.

### `Attorneys`
The system SHALL render an attorneys section with four attorney cards.

### `Testimonials`
The system SHALL render a navy testimonials section with at least three quotes and a recognition strip.

### `Cta`
*anchors only* — Ready to Discuss Your Legal Matter? · Request Free Consultation

### `Footer`
The system SHALL render a footer with link columns, a disclaimer, and a copyright line.

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
- **Provenance ban.** No file under `apps/verdict/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/verdict/public/CNAME` = `verdict.free.componentdock.com`
  and the package `homepage` = `https://verdict.free.componentdock.com`.
