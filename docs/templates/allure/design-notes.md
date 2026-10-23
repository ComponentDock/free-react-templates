# Allure — Design Notes

Reference: **Modelo** — `https://colorlib.com/wp/template/modelo/`  
Live preview: `https://preview.colorlib.com/theme/modelo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modelo-free-template.jpg  
Shipped: https://allure.free.componentdock.com

Allure is a single-page fashion model agency website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Modelo" design (see TEMPLATES.md, Beauty category), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@500;600;700**, **Roboto**

## Design tokens (`apps/allure/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#690772` | brand |
| `--color-brand-deep` | `#751b7e` | brand deep |
| `--color-brand-dark` | `#5c0964` | brand dark |
| `--color-header` | `#0b0208` | header |
| `--color-header-border` | `#5b0857` | header border |
| `--color-ink` | `#121212` | ink |
| `--color-navtext` | `#505050` | navtext |
| `--color-copyright` | `#616161` | copyright |
| `--color-mist` | `#777777` | mist |
| `--color-fog` | `#949494` | fog |
| `--color-placeholder` | `#a4a4a4` | placeholder |
| `--color-tagline` | `#cecfd1` | tagline |
| `--color-rule` | `#dcdce1` | rule |
| `--color-primary-50` | `#faf3fb` | primary 50 |
| `--color-primary-100` | `#f4e6f6` | primary 100 |
| `--color-primary-200` | `#e7cbec` | primary 200 |
| `--color-primary-300` | `#d3a3dc` | primary 300 |
| `--color-primary-400` | `#b872c6` | primary 400 |
| `--color-primary-500` | `#9c4aab` | primary 500 |
| `--color-primary-600` | `#690772` | primary 600 |
| `--color-primary-700` | `#5c0964` | primary 700 |
| `--color-primary-800` | `#4d0a54` | primary 800 |
| `--color-primary-900` | `#3f0c45` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `SocialRail` | Social rail | see fidelity note below |
| 3 | `Hero` | Hero slider | see fidelity note below |
| 4 | `Intro` | Intro and milestones | see fidelity note below |
| 5 | `Models` | Models grid | see fidelity note below |
| 6 | `WeekModel` | Model of the week | see fidelity note below |
| 7 | `Contact` | Contact form | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary · Close menu · Mobile

### `SocialRail`
The system SHALL render a fixed vertical social rail with three social links.

### `Hero`
The system SHALL render a full-screen hero slider with a photo background, an oversized headline, a subtitle, slide indicators, and prev/next controls.

### `Intro`
The system SHALL render a white intro section with a title, descriptive text, and three animated counters.

### `Models`
The system SHALL render a masonry models grid with a rotated section title, category filters, a see-all link, and hover overlays.

### `WeekModel`
The system SHALL render a split block with a photo slider on the left and a featured-model profile on the right.

### `Contact`
The system SHALL render a black contact block with a title and a working contact form.

### `Footer`
The system SHALL render a white footer with a logo/tagline block, a copyright line, and four office columns.

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
- **Provenance ban.** No file under `apps/allure/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/allure/public/CNAME` = `allure.free.componentdock.com`
  and the package `homepage` = `https://allure.free.componentdock.com`.
