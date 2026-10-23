# Vellum — Design Notes

Reference: `https://colorlib.com/wp/template/accordion-16/` (the design page the spec records)  
Live preview: `https://preview.colorlib.com/theme/readit/` (the ROW's slug `readit`, probed 200 on 2026-10-23) — the spec names `accordion-16` and records no demo.  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/readit-free-template.jpg — the ROW's slug `readit`, not the spec's `accordion-16`  
Shipped: https://vellum.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `readit` for this app while the spec records `accordion-16`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

- Recreation of ColorLib **Accordion 16** (`https://colorlib.com/wp/template/accordion-16/`).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;700**

## Design tokens (`apps/vellum/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffd369` | brand |
| `--color-flare` | `#f200ff` | flare |
| `--color-ember` | `#ffba42` | ember |
| `--color-ink` | `#000000` | ink |
| `--color-coal` | `#343a40` | coal |
| `--color-cocoa` | `#3c312e` | cocoa |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/vellum/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `BlogList` | — | no dedicated spec block |
| 4 | `Pagination` | — | no dedicated spec block |
| 5 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation

### `Hero`
*anchors only* — Welcome

### `BlogList`
*anchors only* — Blog

### `Pagination`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Footer`
*anchors only* — Information

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
- **Provenance ban.** No file under `apps/vellum/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vellum/public/CNAME` = `vellum.free.componentdock.com`
  and the package `homepage` = `https://vellum.free.componentdock.com`.
