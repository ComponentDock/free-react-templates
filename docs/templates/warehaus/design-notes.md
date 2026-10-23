# Warehaus — Design Notes

Reference: **Winkel** — `https://colorlib.com/wp/template/winkel/`  
Live preview: `https://preview.colorlib.com/theme/winkel/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/winkel-free-template.jpg  
Shipped: https://warehaus.free.componentdock.com

Warehaus is a single-page e-commerce shop landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Winkel" free template (source: https://colorlib.com/wp/template/winkel/), built under a DIFFERENT name (**Warehaus**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**

## Design tokens (`apps/warehaus/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-opensans` | `'Open Sans', sans-serif` | font opensans |
| `--color-brand` | `#0062cc` | brand |
| `--color-brand-dark` | `#004999` | brand dark |
| `--color-accent` | `#ffa45c` | accent |
| `--color-dark` | `#1d2124` | dark |
| `--color-dark-bar` | `#000000` | dark bar |
| `--color-light-bg` | `#f8f9fa` | light bg |
| `--color-section-alt` | `#f7f7f7` | section alt |
| `--color-text-main` | `#1a1a1a` | text main |
| `--color-text-muted` | `#6c757d` | text muted |
| `--color-text-dark` | `#4d4d4d` | text dark |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | Hero carousel advances | see fidelity note below |
| 4 | `Services` | — | no dedicated spec block |
| 5 | `BestSellers` | — | no dedicated spec block |
| 6 | `NewCollections` | Page renders all sections | see fidelity note below |
| 7 | `Products` | Products filter by category | see fidelity note below |
| 8 | `Counter` | Footer links to Component Dock | see fidelity note below |
| 9 | `Testimonials` | — | no dedicated spec block |
| 10 | `Newsletter` | — | no dedicated spec block |
| 11 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Navbar`
*anchors only* — Shopping cart · Toggle menu · Warehaus

### `Hero`
The hero section MUST auto-advance between slides and support manual navigation.

### `Services`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `BestSellers`
*anchors only* — Best Sellers

### `NewCollections`
The template MUST display all major sections in order: TopBar, Navbar, Hero, Services, BestSellers, NewCollections, Products, Counter, Testimonials, Newsletter, Footer.

### `Products`
The products section MUST allow filtering by category tabs (All, Men, Women, Kids).

### `Counter`
The footer MUST link to https://www.componentdock.com/ branded as "Component Dock".

### `Testimonials`
*anchors only* — Testimonial · John Doe · Marketing Manager

### `Newsletter`
*anchors only* — Email address · Subscribe to our newsletter · Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. · Subscribe

### `Footer`
The footer MUST link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/warehaus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/warehaus/public/CNAME` = `warehaus.free.componentdock.com`
  and the package `homepage` = `https://warehaus.free.componentdock.com`.
