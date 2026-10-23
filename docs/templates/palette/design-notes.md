# Palette — Design Notes

Reference: **Clyde** — `https://colorlib.com/wp/template/clyde/`  
Live preview: `https://preview.colorlib.com/theme/clyde/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/clyde-free-template.jpg  
Shipped: https://palette.free.componentdock.com

Palette is a personal portfolio landing page with a navbar, hero, stat counters, about band, skills, services, projects, testimonials and blog.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**

## Design tokens (`apps/palette/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#007bff` | primary |
| `--color-primary-dark` | `#0056b3` | primary dark |
| `--color-primary-light` | `#e7f1ff` | primary light |
| `--color-dark-bg` | `#1a1a2e` | dark bg |
| `--color-light-bg` | `#f8f9fa` | light bg |
| `--color-body-text` | `#212529` | body text |
| `--color-smoke` | `#6c757d` | smoke |
| `--color-ink` | `#1a1a1a` | ink |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/palette/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Stats` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Skills` | — | no dedicated spec block |
| 6 | `Services` | — | no dedicated spec block |
| 7 | `CTABanner` | — | no dedicated spec block |
| 8 | `Projects` | — | no dedicated spec block |
| 9 | `Testimonials` | — | no dedicated spec block |
| 10 | `Blog` | — | no dedicated spec block |
| 11 | `Contact` | — | no dedicated spec block |
| 12 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Mobile navigation · Palette.

### `Hero`
*anchors only* — Hello! This is Palette · Creative UI/UX Designer &amp; Developer · Hire me · Download CV

### `Stats`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `About`
*anchors only* — About Me · Interests

### `Skills`
*anchors only* — My Skills

### `Services`
*anchors only* — My Services

### `CTABanner`
*anchors only* — Have a project on your mind? · Contact me

### `Projects`
*anchors only* — My Projects

### `Testimonials`
*anchors only* — Testimonials

### `Blog`
*anchors only* — Latest Blog

### `Contact`
*anchors only* — name · email · subject · message

### `Footer`
*anchors only* — love · Let&apos;s Talk About · Contact me · Links · Services · Have a Question?

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
- **Provenance ban.** No file under `apps/palette/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/palette/public/CNAME` = `palette.free.componentdock.com`
  and the package `homepage` = `https://palette.free.componentdock.com`.
