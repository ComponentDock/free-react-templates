# Axiom — Design Notes

Reference: **Creative Agency 2 2** — `https://colorlib.com/wp/template/creative-agency-2-2/`  
Live preview: `https://preview.colorlib.com/theme/creative-agency-2-2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/creativeagency2-free-template.jpg  
Shipped: https://axiom.free.componentdock.com

Axiom is a single-page creative-agency website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Creative Agency 2 2" website template (see TEMPLATES.md, Bootstrap category, line 369), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@100;300;400;500;600;700**

## Design tokens (`apps/axiom/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#00a7ff` | accent |
| `--color-play` | `#0181f5` | play |
| `--color-yellow` | `#ffcb00` | yellow |
| `--color-counter` | `#615cfd` | counter |
| `--color-ink` | `#1f1f1f` | ink |
| `--color-body` | `#727272` | body |
| `--color-copyright` | `#919191` | copyright |
| `--color-card` | `#333333` | card |
| `--color-card-hover` | `#808080` | card hover |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins 100–700 (Google Fonts <link>). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header and navigation | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `VideoBand` | Video banner | see fidelity note below |
| 4 | `Works` | Works section | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Brands` | Brands carousel | see fidelity note below |
| 7 | `Build` | Build product section | see fidelity note below |
| 8 | `Counters` | Counters section | see fidelity note below |
| 9 | `Instagram` | Instagram strip | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a transparent header with a logo, nav links, a Pages dropdown, and a "Say Hi" link.

### `Hero`
The system SHALL render a white hero with a large headline, an underlined CTA, and two floating decorative shapes.

### `VideoBand`
The system SHALL render a full-width video band offset from the left with a circular play button.

### `Works`
The system SHALL render a "Projects / Our Works" section with a 2×2 grid of work cards with hover overlays and a "More Products" button.

### `Services`
The system SHALL render a black services section with a white title and three bordered icon cards.

### `Brands`
The system SHALL render a brand-logo strip below the services section.

### `Build`
The system SHALL render a split section with an image on the left and a headline, description, and link on the right.

### `Counters`
The system SHALL render a "Quick Fact" section with three statistics.

### `Instagram`
The system SHALL render an Instagram tile strip with overlays and a full-width "Visit Our Work" band.

### `Footer`
The system SHALL render a black footer with three widget columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/axiom/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/axiom/public/CNAME` = `axiom.free.componentdock.com`
  and the package `homepage` = `https://axiom.free.componentdock.com`.
