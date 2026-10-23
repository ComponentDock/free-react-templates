# Dune — Design Notes

Reference: **Safario** — `https://colorlib.com/wp/template/safario/`  
Live preview: `https://preview.colorlib.com/theme/safario/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/safario-free-template.jpg  
Shipped: https://dune.free.componentdock.com

Dune is a travel agency landing page with a navbar, hero banner, services, about band, tours, testimonials, search package, blog and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto Condensed**, **Roboto Condensed:wght@400;700**

## Design tokens (`apps/dune/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#6059f6` | brand |
| `--color-brand-dark` | `#201aa3` | brand dark |
| `--color-ink` | `#2a2a2a` | Ink — dark headings (#2a2a2a from the original). |
| `--color-ink-dark` | `#1a1a1a` | ink dark |
| `--color-paper` | `#f8f8ff` | Paper — light section background (#f8f8ff from the original). |
| `--color-mist` | `#888888` | Mist — muted body text (#888888 from the original). |
| `--color-primary-50` | `#ededfe` | primary 50 |
| `--color-primary-100` | `#d5d4fd` | primary 100 |
| `--color-primary-200` | `#b3b1fb` | primary 200 |
| `--color-primary-300` | `#908df9` | primary 300 |
| `--color-primary-400` | `#7b78f8` | primary 400 |
| `--color-primary-500` | `#6059f6` | primary 500 |
| `--color-primary-600` | `#5047e0` | primary 600 |
| `--color-primary-700` | `#3e35b8` | primary 700 |
| `--color-primary-800` | `#2f2890` | primary 800 |
| `--color-primary-900` | `#201aa3` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Roboto Condensed" (headings) + "Roboto" (body). |
| `--font-display` | `'Roboto Condensed', ui-sans-serif, system-ui, sans-serif` | font display |

> The spec has no section-level requirements; the order below is read from `apps/dune/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Services` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Tours` | — | no dedicated spec block |
| 6 | `Testimonials` | — | no dedicated spec block |
| 7 | `SearchPackage` | — | no dedicated spec block |
| 8 | `Blog` | — | no dedicated spec block |
| 9 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary · Toggle dark mode · Mobile

### `Hero`
*anchors only* — Travel More To Discover Yourself · Get Started

### `Services`
*anchors only* — What We Offer · Our Popular Services

### `About`
*anchors only* — Exploration is really the essence of the human spirit · Learn More

### `Tours`
*anchors only* — We offer worldwide tour plan recently

### `Testimonials`
*anchors only* — Testimonials · Our client says · Hear what our satisfied travelers have to say about their experiences.

### `SearchPackage`
*anchors only* — Search suitable and affordable plan for your tour · Learn More · Search Package · Category · Adventure · Beach

### `Blog`
*anchors only* — Latest Posts · From our Blog · Stay updated with the latest travel tips and destination guides.

### `Footer`
*anchors only* — alert · About Agency · Navigation Links · Newsletter · Subscribe to get updates on new travel packages and exclusive deals. · Thanks for subscribing!

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
- **Provenance ban.** No file under `apps/dune/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dune/public/CNAME` = `dune.free.componentdock.com`
  and the package `homepage` = `https://dune.free.componentdock.com`.
