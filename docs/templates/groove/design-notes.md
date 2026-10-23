# Groove — Design Notes

Reference: **Regform 35** — `https://colorlib.com/wp/template/colorlib-regform-35/`  
Live preview: `https://preview.colorlib.com/theme/hnband/` (the ROW's slug `hnband`, probed 200 on 2026-10-23) — the spec names `colorlib-regform-35` and records no demo.  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hnband-free-template.jpg — the ROW's slug `hnband`, not the spec's `colorlib-regform-35`  
Shipped: https://groove.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `hnband` for this app while the spec records `colorlib-regform-35`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

A free concert registration form template with a dark card over a blue background, semi-transparent inputs in a 2x2 grid, and a coral Register button.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;700**

## Design tokens (`apps/groove/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e8735a` | brand |
| `--color-brand-dark` | `#d4613f` | brand dark |
| `--color-page-bg` | `#4a90d9` | page bg |
| `--color-card-bg` | `#1a1a2e` | card bg |
| `--color-input-bg` | `rgba(255, 255, 255, 0.15)` | input bg |
| `--color-input-border` | `rgba(255, 255, 255, 0.3)` | input border |
| `--color-input-focus` | `rgba(255, 255, 255, 0.5)` | input focus |
| `--color-btn-text` | `#ffffff` | btn text |
| `--color-heading` | `#ffffff` | heading |
| `--font-sans` | `'Roboto', system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Background` | — | no dedicated spec block |
| 2 | `RegisterCard` | — | no dedicated spec block |
| 3 | `Footer` | Footer attribution | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Background`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `RegisterCard`
*anchors only* — Registration form · Your Name · Your Email · Your Password · Confirm Password

### `Footer`
Users SHALL see a link to componentdock.com in the footer.

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
- **Provenance ban.** No file under `apps/groove/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/groove/public/CNAME` = `groove.free.componentdock.com`
  and the package `homepage` = `https://groove.free.componentdock.com`.
