# Navpoint — Design Notes

Reference: **Directoryplus** — `https://colorlib.com/wp/template/directoryplus/`  
Live preview: `https://preview.colorlib.com/theme/directoryplus/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/directoryplus-free-template-1.jpg  
Shipped: https://navpoint.free.componentdock.com

Navpoint is a directory & city guide template with a navbar, hero, categories, locations, food grid, how it works, clients and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/navpoint/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-brand` | `#ffb400` | brand |
| `--color-brand-dark` | `#360f64` | brand dark |
| `--color-brand-deeper` | `#49237d` | brand deeper |
| `--color-brand-hover` | `#e6a200` | brand hover |
| `--color-text-primary` | `#000000` | text primary |
| `--color-text-secondary` | `#a5a5a5` | text secondary |
| `--color-text-muted` | `#a9a9a9` | text muted |
| `--color-bg-light` | `#e1ecf4` | bg light |
| `--color-bg-gold-light` | `#fff3d6` | bg gold light |
| `--color-link-underline` | `#ffa07f` | link underline |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Categories` | — | no dedicated spec block |
| 4 | `Locations` | — | no dedicated spec block |
| 5 | `FoodGrid` | — | no dedicated spec block |
| 6 | `HowItWorks` | — | no dedicated spec block |
| 7 | `CTA` | — | no dedicated spec block |
| 8 | `CTAApp` | No source-site references in the app | see fidelity note below |
| 9 | `Clients` | — | no dedicated spec block |
| 10 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle navigation · Login · Register

### `Hero`
*anchors only* — Guide · Search

### `Categories`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Locations`
*anchors only* — Explore Hot Locations

### `FoodGrid`
*anchors only* — Find the best food near you

### `HowItWorks`
*anchors only* — How Nav

### `CTA`
*anchors only* — Find the best places in town! · See the list

### `CTAApp`
The application SHALL NOT carry the source design's provenance: no file under `apps/navpoint/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.

### `Clients`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

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
- **Provenance ban.** No file under `apps/navpoint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/navpoint/public/CNAME` = `navpoint.free.componentdock.com`
  and the package `homepage` = `https://navpoint.free.componentdock.com`.
