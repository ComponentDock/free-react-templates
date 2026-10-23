# Quill — Design Notes

Reference: **Blogger** — `https://colorlib.com/wp/template/blogger/`  
Live preview: `https://preview.colorlib.com/theme/blogger/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/blogger-free-blogging-website-template.jpg  
Shipped: https://quill.free.componentdock.com

A light, editorial blog-and-magazine landing template: sticky white navbar, full-bleed photographic hero with a story meta bar, a three-card "latest" carousel, a travel media-list band, a four-column fashion grid with "Load More", a team band with a brand-tinted hover overlay, and a dark three-column footer carrying the newsletter form.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/quill/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#69b4fd` | brand |
| `--color-brand-deep` | `#8490ff` | brand deep |
| `--color-ink` | `#222222` | ink |
| `--color-muted` | `#777777` | muted |
| `--color-soft` | `#f9f9ff` | soft |
| `--color-chip` | `#111111` | chip |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/quill/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `CategorySection` | — | no dedicated spec block |
| 4 | `TravelSection` | — | no dedicated spec block |
| 5 | `FashionSection` | — | no dedicated spec block |
| 6 | `TeamSection` | — | no dedicated spec block |
| 7 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main · Toggle dark mode · Mobile

### `Hero`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `CategorySection`
*anchors only* — Previous category · Next category · Latest News from all categories

### `TravelSection`
*anchors only* — Hot topics from Travel Section

### `FashionSection`
*anchors only* — Fashion News This Week · Load More

### `TeamSection`
*anchors only* — About Blogger Team

### `Footer`
*anchors only* — status · alert · Footer social links

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
- **Provenance ban.** No file under `apps/quill/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/quill/public/CNAME` = `quill.free.componentdock.com`
  and the package `homepage` = `https://quill.free.componentdock.com`.
