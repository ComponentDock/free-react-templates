# Oraxol — Design Notes

Reference: **Oraxol** — `https://colorlib.com/wp/template/oraxol/`  
Live preview: `https://preview.colorlib.com/theme/oraxol/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/oraxol-free-template.jpg  
Shipped: https://oraxol.free.componentdock.com

Recreation of ColorLib **Oraxol** (`https://colorlib.com/wp/template/oraxol/`), preview URL: `https://preview.colorlib.com/theme/oraxol/`. Stack: Vite, React 19, Tailwind CSS 4, TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/oraxol/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--color-dark-base` | `#1d1e21` | dark base |
| `--color-dark-surface` | `#161719` | dark surface |
| `--color-dark-card` | `#222327` | dark card |
| `--color-muted` | `#aaaaaa` | muted |
| `--color-accent` | `#c8a97e` | accent |

> The spec has no section-level requirements; the order below is read from `apps/oraxol/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Services` | — | no dedicated spec block |
| 4 | `Portfolio` | — | no dedicated spec block |
| 5 | `Testimonials` | — | no dedicated spec block |
| 6 | `Team` | — | no dedicated spec block |
| 7 | `Blog` | — | no dedicated spec block |
| 8 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Oraxol · Work · Blog · About · Contact

### `Hero`
*anchors only* — Hero · Twitter · Facebook · Instagram · Dribbble

### `Services`
*anchors only* — We Provide the Perfect Solution

### `Portfolio`
*anchors only* — Our Portfolio · High Quality Design Concept

### `Testimonials`
*anchors only* — Previous · Next · Satisfied Clients

### `Team`
*anchors only* — Designer &amp; Developer

### `Blog`
*anchors only* — Recent Blog · John Dorf · Sep 10, 2024 · Grow your insights with inspiring news

### `Footer`
*anchors only* — Twitter · Facebook · Instagram

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
- **Provenance ban.** No file under `apps/oraxol/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/oraxol/public/CNAME` = `oraxol.free.componentdock.com`
  and the package `homepage` = `https://oraxol.free.componentdock.com`.
