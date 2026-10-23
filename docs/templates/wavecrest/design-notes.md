# Wavecrest — Design Notes

Reference: **Major** — `https://colorlib.com/wp/template/major/`  
Live preview: `https://preview.colorlib.com/theme/major/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/major-free-template.jpg  
Shipped: https://wavecrest.free.componentdock.com

A Beach Hotel / Resort template with hero, search / booking box, room features and gallery sections. Recreation of ColorLib's **Major** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Alike**, **Playfair Display**, **Roboto**

## Design tokens (`apps/wavecrest/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#da8661` | Brand primary — warm terracotta/coral from the original stylesheet |
| `--color-navy` | `#0b1423` | Dark navy — hero overlay, dark sections |
| `--color-navy2` | `#2e3f61` | Medium navy — section backgrounds |
| `--color-navy3` | `#4c5c7e` | Lighter navy — alternate section bg |
| `--color-accent-red` | `#db5246` | Accent red |
| `--color-coral-light` | `#ffa07f` | Accent coral-light |
| `--color-paper` | `#dadfe5` | Light gray-blue background |
| `--color-mist` | `#6b6b6b` | Gray body text |
| `--font-heading` | `'Playfair Display', Georgia, serif` | Heading font: Playfair Display (serif) |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Body font: Roboto (sans-serif) |
| `--font-decorative` | `'Alike', sans-serif` | Decorative font: Alike |

> The spec has no section-level requirements; the order below is read from `apps/wavecrest/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `SearchBox` | — | no dedicated spec block |
| 4 | `Intro` | — | no dedicated spec block |
| 5 | `RoomFeatures` | — | no dedicated spec block |
| 6 | `Gallery` | — | no dedicated spec block |
| 7 | `Newsletter` | — | no dedicated spec block |
| 8 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Wavecrest

### `Hero`
*anchors only* — Luxury &amp; Comfort · Beach Hotel — More than a stay

### `SearchBox`
*anchors only* — Search · Check in · Check out · Guests

### `Intro`
*anchors only* — Deluxe Room

### `RoomFeatures`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Gallery`
*anchors only* — Our Gallery

### `Newsletter`
*anchors only* — Subscribe · Our Newsletter · Subscribe to receive exclusive offers and updates from Wavecrest. · Email address

### `Footer`
*anchors only* — Wavecrest · Contact Info · Book Now · Ready to experience Wavecrest? Reserve your room today. · Component Dock

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
- **Provenance ban.** No file under `apps/wavecrest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wavecrest/public/CNAME` = `wavecrest.free.componentdock.com`
  and the package `homepage` = `https://wavecrest.free.componentdock.com`.
