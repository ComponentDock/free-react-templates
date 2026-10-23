# Vizion — Design Notes

Reference: **Melan** — `https://colorlib.com/wp/template/melan/`  
Live preview: `https://preview.colorlib.com/theme/melan/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/melan-free-template.jpg  
Shipped: https://vizion.free.componentdock.com

Vizion is a single-page creative designer portfolio landing page in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Mulish:wght@300;400;600;700;800;900**

## Design tokens (`apps/vizion/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#615cfd` | brand |
| `--color-brand-dark` | `#4f4ad0` | brand dark |
| `--color-navy` | `#001d38` | navy |
| `--color-body` | `#4d4d4d` | body |
| `--color-heading` | `#001d38` | heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Services` | — | no dedicated spec block |
| 4 | `Portfolio` | — | no dedicated spec block |
| 5 | `About` | — | no dedicated spec block |
| 6 | `Stats` | — | no dedicated spec block |
| 7 | `Testimonials` | — | no dedicated spec block |
| 8 | `Cta` | — | no dedicated spec block |
| 9 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Vizion · Contact Me

### `Hero`
*anchors only* — Hello This is Vizion · Creative Designer

### `Services`
*anchors only* — Service Provided · Build brands campaigns

### `Portfolio`
*anchors only* — Portfolios · Some of my awesome · More Folio

### `About`
*anchors only* — About · About me · Download CV

### `Stats`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Testimonials`
*anchors only* — Previous testimonial · Next testimonial

### `Cta`
*anchors only* — Let&apos;s discuss for a project · Start Talking

### `Footer`
*anchors only* — Component Dock

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
- **Provenance ban.** No file under `apps/vizion/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vizion/public/CNAME` = `vizion.free.componentdock.com`
  and the package `homepage` = `https://vizion.free.componentdock.com`.
